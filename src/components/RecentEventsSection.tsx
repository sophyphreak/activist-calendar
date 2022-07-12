import EventEntry, { EventType } from "./EventEntry";

interface RecentEventsSectionProps {
  events?: EventType[];
}
export default function RecentEventsSection({
  events = [],
}: RecentEventsSectionProps) {
  return (
    <section>
      <h2 className="text-center text-3xl font-bold mb-8">Recent events</h2>
      {events.length > 0 ? (
        events.map((event) => (
          <EventEntry key={event.title} event={event} small />
        ))
      ) : (
        <p className="text-center italic">No past events.</p>
      )}
    </section>
  );
}
