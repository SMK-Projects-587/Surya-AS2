import { cn } from '@/lib/utils';

interface QuoteCardProps {
  className?: string;
  text: string;
  author: string;
}

export default function QuoteCard({ className, text, author }: QuoteCardProps) {
  return (
    <figure
      className={cn(
        'bg-body border-border flex flex-col gap-5 rounded-2xl border p-5 md:p-10',
        className,
      )}
    >
      <blockquote className="font-display text-heading max-w-60 text-lg md:max-w-80 md:text-2xl">
        {text}
      </blockquote>
      <figcaption className="font-body text-links text-xs">
        — {author}
      </figcaption>
    </figure>
  );
}
