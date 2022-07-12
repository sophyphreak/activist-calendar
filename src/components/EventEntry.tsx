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
}
export default function EventEntry({ event }: EventEntryProps) {
  return (
    <div className="bg-white border-solid border border-gray-200 drop-shadow-md p-6 flex gap-10 items-center justify-between my-4">
      <span className="flex gap-8 items-center ">
        <span className="text-3xl font-bold">{event.date}</span>
        <span className="text-2xl">{event.title}</span>
      </span>

      <span className="flex gap-4 items-center">
        <Annotation className="h-8 w-8 text-gray-900" />
        <LocationMarker className="h-8 w-8 text-red-900" />
        <Pencil className="h-8 w-8 text-blue-900" />
      </span>
    </div>
  );
}
