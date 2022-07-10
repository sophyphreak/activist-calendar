interface FooterProps {
  title: string;
  contactUs?: string;
}
export default function Footer({ title, contactUs }: FooterProps) {
  return (
    <footer className="text-gray-700 py-8">
      <ul className="flex justify-center gap-1">
        <li>{title}</li>
        {contactUs && (
          <>
            <Dot />
            <li>
              <a href={`mailto:${contactUs}`}>Contact us</a>
            </li>
          </>
        )}
        <Dot />
        <li>
          <a
            href="https://github.com/sophyphreak/activist-calendar"
            rel="noopener noreferrer"
            target="_blank"
          >
            Create your calendar
          </a>
        </li>
      </ul>
    </footer>
  );
}

const Dot = () => <li className="select-none">·</li>;
