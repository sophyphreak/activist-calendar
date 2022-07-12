import EventEntry, { EventType } from "./EventEntry";

interface NextEventSectionProps {
  event?: EventType | null;
  repository: string;
}
export default function NextEventSection({
  event,
  repository,
}: NextEventSectionProps) {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold mb-8">Next event</h2>

      {event ? (
        <EventEntry event={event} repository={repository} />
      ) : (
        <p className="text-center italic">No events scheduled yet.</p>
      )}
    </section>
  );
}
