import dayjs from "dayjs";
import Delete from "../icons/Delete";
import LocationMarker from "../icons/LocationMarker";
import Video from "../icons/Video";
import { EventType } from "../types";

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
      className={`rounded bg-white border-solid border border-gray-200 drop-shadow-md flex gap-10 items-center justify-between my-4 ${padding} ${margin}`}
    >
      <span className="flex gap-8 items-center ">
        <span className="flex flex-col items-center">
          <span className={`${small ? "text-xl" : "text-3xl"} font-bold`}>
            {dayjs(event.date).format("M/D")}
          </span>
          {!small && (
            <span className="font-bold">
              {dayjs(event.date).format("dddd [at] h:mma")}
            </span>
          )}
        </span>

        <span className="flex flex-col">
          <span className={small ? "text-lg" : "text-2xl"}>{event.title} </span>
          {!small && event.description && (
            <span className="text-gray-500">{event.description}</span>
          )}
        </span>
      </span>

      <span className="flex gap-4 items-center">
        <span className="text-gray-500 text">
          {event.organizerLink ? (
            <a
              className="underline"
              href={event.organizerLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {event.organizer}
            </a>
          ) : (
            event.organizer
          )}
        </span>
        {event.location && (
          <a
            href={`https://www.google.fr/maps/search/${event.location}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LocationMarker className={`${iconSize} text-red-900`} />
          </a>
        )}
        {event.zoomLink && (
          <a href={event.zoomLink} rel="noopener noreferrer" target="_blank">
            <Video className={`${iconSize} text-blue-600`} />
          </a>
        )}

        <a
          href={`${repository}/delete/main/src/events/${event.filename}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Delete className={`${iconSize} text-gray-800`} />
        </a>
      </span>
    </div>
  );
}
