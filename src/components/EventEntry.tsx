import Annotation from "../icons/Annotation";
import LocationMarker from "../icons/LocationMarker";
import Pencil from "../icons/Pencil";

export type EventType = {
  date: string;
  title: string;
};

export interface EventEntryProps {
  key?: any;
  event: EventType;
  small?: boolean;
}
export default function EventEntry({ event, small = false }: EventEntryProps) {
  const iconSize = small ? "h-6 w-6" : "h-8 w-8";
  const margin = small ? "mx-16" : "";
  const padding = small ? "p-3" : "p-6";
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
        <Annotation className={`${iconSize} text-gray-900`} />
        <LocationMarker className={`${iconSize} text-red-900`} />
        <Pencil className={`${iconSize} text-blue-900`} />
      </span>
    </div>
  );
}
