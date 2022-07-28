import EventEntry, { EventType } from "./EventEntry";

interface NextEventsSectionProps {
  events: EventType[];
  repository: string;
}
export default function NextEventsSection({
  events,
  repository,
}: NextEventsSectionProps) {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold mb-8">Next event</h2>

      {events.length > 0 ? (
        events.map((event) => (
          <EventEntry key={event.title} event={event} repository={repository} />
        ))
      ) : (
        <p className="text-center italic">No events scheduled yet.</p>
      )}
    </section>
  );
}
