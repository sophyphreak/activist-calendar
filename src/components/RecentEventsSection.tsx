interface RecentEventsSectionProps {
  events?: any[];
}
export default function RecentEventsSection({
  events = [],
}: RecentEventsSectionProps) {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold mb-8">Recent events</h2>
      {events.length > 0 ? (
        <p>TODO</p>
      ) : (
        <p className="text-center italic">No past events.</p>
      )}
    </section>
  );
}
