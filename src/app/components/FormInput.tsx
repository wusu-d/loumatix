import { FieldInputProps, FieldMetaProps } from "formik";
import { cn } from "@/lib/utils"; // Assuming you're using a utility function for class names

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  field: FieldInputProps<string>;
  meta: FieldMetaProps<string>;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  field,
  meta,
  className,
  ...props
}) => {
  const isDirty = meta.touched && meta.value !== "";
  const isInvalid = meta.touched && meta.error;

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <label className="text-sm font-bold dark:text-white" htmlFor={field.name}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        id={field.name}
        className={cn(
          "border rounded-md px-3 py-2 transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          "dark:bg-gray-800 dark:text-white dark:border-gray-700",
          "dark:focus:ring-blue-400",
          {
            "border-gray-300 dark:border-gray-700": !isDirty && !isInvalid,
            "border-green-500 dark:border-green-600": isDirty && !isInvalid,
            "border-red-500 dark:border-red-600": isInvalid,
          },
          className
        )}
      />
      {isInvalid && (
        <p className="pl-1 pt-1 text-xs font-semibold text-red-600 dark:text-red-400">
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
