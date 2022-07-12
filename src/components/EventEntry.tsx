import LocationMarker from "../icons/LocationMarker";
import Pencil from "../icons/Pencil";

export type EventType = {
  date: string;
  title: string;
  location?: string;
  filename: string;
};

export interface EventEntryProps {
  key?: any;
  event: EventType;
  small?: boolean;
  repository: string;
}
export default function EventEntry({
  event,
  small = false,
  repository,
}: EventEntryProps) {
  const iconSize = small ? "h-6 w-6" : "h-8 w-8";
  const margin = small ? "mx-16" : "";
  const padding = small ? "py-3 px-4" : "p-6";
  return (
    <div
      className={`bg-white border-solid border border-gray-200 drop-shadow-md flex gap-10 items-center justify-between my-4 ${padding} ${margin}`}
    >
      <span className="flex gap-8 items-center ">
        <span className={`${small ? "text-xl" : "text-3xl"} font-bold`}>
          {event.date}
        </span>
        <span className={small ? "text-lg" : "text-2xl"}>{event.title}</span>
      </span>

      <span className="flex gap-4 items-center">
        {event.location && (
          <a
            href={`https://www.google.fr/maps/search/${event.location}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocationMarker className={`${iconSize} text-red-900`} />
          </a>
        )}
        <a
          href={`${repository}/edit/main/src/events/${event.filename}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Pencil className={`${iconSize} text-blue-900`} />
        </a>
      </span>
    </div>
  );
}
