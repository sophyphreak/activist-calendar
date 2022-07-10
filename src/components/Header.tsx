interface HeaderProps {
  title: string;
  description?: string;
}
export default function Header({ title, description }: HeaderProps) {
  return (
    <header>
      <h1 className="text-6xl text-center my-8 font-bold">{title}</h1>
      {description && (
        <p className="text-center italic text-gray-600 text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
