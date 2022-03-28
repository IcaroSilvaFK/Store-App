import { useFormContext, Controller } from "react-hook-form";

export function Input({ name, placeholder, type }) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input type={type} {...field} placeholder={placeholder} />
      )}
    />
  );
}
