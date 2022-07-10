import EventEntry, { EventType } from "./EventEntry";

interface NextEventSectionProps {
  event?: EventType;
}
export default function NextEventSection({ event }: NextEventSectionProps) {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold mb-8">Next event</h2>

      {event ? (
        <EventEntry event={event} />
      ) : (
        <p className="text-center italic">No events scheduled yet.</p>
      )}
    </section>
  );
}
