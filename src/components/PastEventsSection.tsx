import EventEntry, { EventType } from "./EventEntry";

interface PastEventsSectionProps {
  events?: EventType[];
  repository: string;
}
export default function PastEventsSection({
  events = [],
  repository,
}: PastEventsSectionProps) {
  return (
    <section>
      <h2 className="text-center text-3xl font-bold mb-8">Past events</h2>
      {events.length > 0 ? (
        events.map((event) => (
          <EventEntry
            key={event.title}
            event={event}
            repository={repository}
            small
          />
        ))
      ) : (
        <p className="text-center italic">No past events.</p>
      )}
    </section>
  );
}
