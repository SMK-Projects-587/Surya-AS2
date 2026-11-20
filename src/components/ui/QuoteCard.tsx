import { cn } from '@/lib/utils';

interface QuoteCardProps {
  className?: string;
  text: string;
  author: string;
  mood?: string;
  showDash?: boolean;
}

export default function QuoteCard({
  className,
  text,
  author,
  mood,
  showDash = true,
}: QuoteCardProps) {
  return (
    <figure
      className={cn(
        'bg-body border-border flex flex-col gap-5 rounded-2xl border p-5 md:p-10',
        className,
      )}
    >
      <blockquote className="font-display text-heading flex text-lg md:text-2xl">
        {text}
      </blockquote>
      <figcaption className="font-body text-links mt-auto flex items-center justify-between gap-3 text-xs">
        <span>
          {showDash && '— '}
          {author}
        </span>
        {mood && (
          <span className="bg-primary/10 text-primary rounded-full px-3 py-1 lowercase">
            {mood}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
