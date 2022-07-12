import EventEntry, { EventType } from "./EventEntry";

interface RecentEventsSectionProps {
  events?: EventType[];
  repository: string;
}
export default function RecentEventsSection({
  events = [],
  repository,
}: RecentEventsSectionProps) {
  return (
    <section>
      <h2 className="text-center text-3xl font-bold mb-8">Recent events</h2>
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
