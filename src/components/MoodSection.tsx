import MoodCard from '@/components/ui/MoodCard';
import { cn } from '@/lib/utils';

interface MoodItem {
  name: string;
  count: number;
}
interface MoodProps {
  className?: string;
}

const moods: MoodItem[] = [
  { name: 'Motivation', count: 128 },
  { name: 'Wisdom', count: 96 },
  { name: 'Humour', count: 74 },
  { name: 'Love', count: 52 },
];
export default function Mood({ className }: MoodProps) {
  return (
    <section className={cn(className)}>
      <div className="mx-auto flex max-w-[1920px] flex-col gap-4 px-6 py-4">
        <h2 className="font-display text-heading text-xl">Browse by mood</h2>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {moods.map((mood) => (
            <li key={mood.name}>
              <MoodCard name={mood.name} count={mood.count} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
