import Button from '@/components/ui/Button';
import QuoteCard from '@/components/ui/QuoteCard';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        'bg-surface mx-auto flex max-w-[1920px] flex-col gap-2 px-6 py-4 md:flex-row md:items-start md:justify-between md:gap-6 md:px-12 md:py-12',
        className,
      )}
    >
      <div className="flex flex-col gap-5 md:flex-1">
        <div className="flex flex-col gap-2">
          <span className="font-body text-primary text-xs">DAILY WISDOM</span>
          <h1 className="font-display text-heading text-3xl md:max-w-sm md:text-6xl">
            Words that move you.
          </h1>
          <p className="font-body text-links max-w-xs text-base md:max-w-84">
            A hand-picked quote to start your morning, plus a library to explore
            when you need a lift.
          </p>
        </div>

        <div className="flex gap-4">
          <Button>Get inspired</Button>
          <Button className="border-border text-heading bg-background border">
            Browse all
          </Button>
        </div>
      </div>
      <div className="relative md:w-140 md:flex-none">
        <span
          aria-hidden="true"
          className="font-display text-primary/20 absolute top-4 left-8 hidden text-5xl leading-none md:block"
        >
          “
        </span>
        <QuoteCard
          className="md:mt-2 md:pt-14"
          text="The best way out is always through."
          author="Robert Frost"
        />
      </div>
    </section>
  );
}
