import MoodCard from '@/components/ui/MoodCard';
import { moods } from '@/lib/moods';
import { cn } from '@/lib/utils';

interface MoodProps {
  className?: string;
}

export default function Mood({ className }: MoodProps) {
  return (
    <section className={cn(className)}>
      <div className="mx-auto flex max-w-[1920px] flex-col gap-4 px-6 py-4">
        <h2 className="font-display text-heading text-xl md:text-2xl">
          Browse by mood
        </h2>
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
