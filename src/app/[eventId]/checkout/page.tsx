"use client";
import Button from "@/app/components/Button";
import FormInput from "@/app/components/FormInput";
import { useFormik } from "formik";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import { checkoutValidationSchema } from "@/app/utils/checkoutValidationSchema";
import { formatCardNumber } from "@/app/utils/cardNumberFormat";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { useEvent } from "@/context/EventContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FadeIn from "@/app/components/FadeIn";

const CheckoutPage = () => {
  const { selectedEvent, ticketQuantities } = useEvent();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      email: "",
      cardNumber: "",
      cvv: "",
      expiry: "",
    },
    validateOnMount: true,
    validationSchema: checkoutValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    if (!selectedEvent) {
      router.push("/");
    }
  }, [selectedEvent, router]);

  const calculateTicketTypeTotal = (ticketType: string) => {
    const ticket = selectedEvent?.ticketTypes.find(
      (t) => t.name === ticketType
    );
    return ticket
      ? ticket.price *
          ticketQuantities[ticketType as keyof typeof ticketQuantities]
      : 0;
  };

  const calculateTotal = () => {
    return Object.keys(ticketQuantities).reduce((total, ticketType) => {
      return total + calculateTicketTypeTotal(ticketType);
    }, 0);
  };

  if (!selectedEvent) return null;

  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto max-w-screen-xl py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-20">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 h-full">
          {/* summary */}
          <FadeIn delay={200}>
            <div className="w-full">
              <div className="relative h-[180px] sm:h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={selectedEvent.image}
                  fill
                  alt={selectedEvent.name}
                  objectFit="cover"
                  className="w-full"
                />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">
                {selectedEvent.name}
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 mt-2">
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  <FaCalendar className="w-4 h-4 md:w-5 md:h-5" />
                  {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5" />
                  {selectedEvent.location}
                </span>
              </div>
              <div className="w-full sm:w-3/4 md:w-2/3 mt-4">
                <p className="font-bold text-base sm:text-lg md:text-xl">
                  Selected Tickets
                </p>
                {Object.entries(ticketQuantities).map(([type, quantity]) => {
                  if (quantity > 0) {
                    const amount = calculateTicketTypeTotal(type);
                    return (
                      <div
                        key={type}
                        className="flex justify-between items-center text-sm sm:text-base"
                      >
                        <span>
                          {type} x {quantity}
                        </span>
                        <span>${amount.toFixed(2)}</span>
                      </div>
                    );
                  }
                  return null;
                })}
                <div className="flex justify-between items-center font-bold text-base sm:text-lg md:text-xl mt-3">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </FadeIn>
          {/* checkoutform */}
          <FadeIn delay={400}>
            <div className="my-4 sm:my-auto h-max w-full">
              <form
                onSubmit={formik.handleSubmit}
                className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 border p-3 sm:p-4 rounded-xl"
              >
                <FormInput
                  label="First Name"
                  type="text"
                  required
                  placeholder="Enter your first name"
                  field={formik.getFieldProps("firstName")}
                  meta={formik.getFieldMeta("firstName")}
                />
                <FormInput
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  required
                  field={formik.getFieldProps("lastName")}
                  meta={formik.getFieldMeta("lastName")}
                />
                <div className="col-span-1 md:col-span-2">
                  <FormInput
                    label="Email"
                    required
                    className="w-full"
                    placeholder="Enter your email"
                    field={formik.getFieldProps("email")}
                    meta={formik.getFieldMeta("email")}
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <FormInput
                    label="Card Number"
                    required
                    className="w-full"
                    placeholder="Enter Card Number"
                    field={{
                      ...formik.getFieldProps("cardNumber"),
                      value: formatCardNumber(formik.values.cardNumber),
                      onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        const rawValue = e.target.value.replace(/\s/g, "");
                        if (rawValue.length <= 16) {
                          formik.setFieldValue("cardNumber", rawValue);
                        }
                      },
                    }}
                    meta={formik.getFieldMeta("cardNumber")}
                  />
                </div>
                <FormInput
                  label="Card Expiry Date"
                  required
                  className="w-full"
                  placeholder="MM/YY"
                  field={formik.getFieldProps("expiry")}
                  meta={formik.getFieldMeta("expiry")}
                />
                <FormInput
                  label="Card CVV"
                  required
                  type="number"
                  className="w-full"
                  placeholder="CVV"
                  field={formik.getFieldProps("cvv")}
                  meta={formik.getFieldMeta("cvv")}
                />
                <div className="col-span-1 md:col-span-2 grid place-items-center mt-2">
                  <Button
                    disabled={!formik.isValid}
                    type="submit"
                    className="w-full sm:w-auto"
                  >
                    Purchase Ticket
                  </Button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
