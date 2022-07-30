interface LabelProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}
export default function Label({ label, required, children }: LabelProps) {
  return (
    <label className="block">
      <span>
        {label}
        {required && <span className="text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}
