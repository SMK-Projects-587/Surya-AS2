import { cn } from '@/lib/utils';

interface MoodCardProps {
  className?: string;
  name: string;
  count: number;
}

export default function MoodCard({ className, name, count }: MoodCardProps) {
  return (
    <div
      className={cn(
        'border-border bg-surface flex flex-col gap-1 rounded-xl border p-4 md:p-6',
        className,
      )}
    >
      <span className="bg-primary/10 font-display text-primary flex size-8 items-center justify-center rounded-lg">
        {name[0]}
      </span>
      <p className="font-body text-heading text-sm">{name}</p>
      <p className="font-body text-heading text-xs">{count} quotes</p>
    </div>
  );
}
