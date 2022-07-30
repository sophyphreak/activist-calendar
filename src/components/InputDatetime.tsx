import Label from "./Label";

interface InputDatetimeProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  name: string;
}
export default function InputDatetime({
  label,
  placeholder,
  required,
  defaultValue,
  name,
}: InputDatetimeProps) {
  return (
    <Label {...{ label, required }}>
      <input
        type="datetime-local"
        {...{ placeholder, defaultValue, required, name }}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </Label>
  );
}
