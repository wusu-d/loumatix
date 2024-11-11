import * as Yup from "yup";

// Function to validate the card number using the Luhn algorithm
const validateCardNumber = (value: string) => {
  let sum = 0;
  let shouldDouble = false;

  for (let i = value.length - 1; i >= 0; i--) {
    let digit = parseInt(value[i], 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

const checkoutValidationSchema = Yup.object().shape({
  lastName: Yup.string()
    .required("Last name is required")
    .max(50, "Last name must be at most 50 characters"),

  firstName: Yup.string()
    .required("First name is required")
    .max(50, "First name must be at most 50 characters"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  cardNumber: Yup.string()
    .test("strip-spaces", "Card number must be 16 digits", (value) => {
      const stripped = value?.replace(/\s/g, "");
      return /^[0-9]{16}$/.test(stripped || "");
    })
    .test("is-valid-card", "Invalid card number", (value) => {
      const stripped = value?.replace(/\s/g, "");
      return stripped ? validateCardNumber(stripped) : false;
    })
    .required("Card number is required"),

  cvv: Yup.string()
    .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),

  expiry: Yup.string()
    .matches(
      /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
      "Expiry date must be in MM/YY format"
    )
    .required("Expiry date is required")
    .test("expiryDate", "Expiry date cannot be in the past", (value) => {
      if (!value) return false;

      // Split value into month and year
      const [month, year] = value.split("/").map(Number);

      // Create a date object for the end of the expiry month
      const fullYear = 2000 + year; // Assuming YY format is 20YY
      const expiryDate = new Date(fullYear, month - 1);
      expiryDate.setMonth(expiryDate.getMonth() + 1); // Move to next month
      expiryDate.setDate(0); // Go to last day of the expiry month

      // Get the current date without time for accurate comparison
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return expiryDate >= today;
    }),
});

export { checkoutValidationSchema };
