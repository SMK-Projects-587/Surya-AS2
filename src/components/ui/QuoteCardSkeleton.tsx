import { cn } from '@/lib/utils';

interface QuoteCardSkeletonProps {
  className?: string;
}

export default function QuoteCardSkeleton({
  className,
}: QuoteCardSkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'bg-body border-border flex min-h-40 animate-pulse flex-col gap-5 rounded-2xl border p-5 md:p-10',
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="bg-border h-3 w-full rounded-full" />
        <div className="bg-border h-3 w-4/5 rounded-full" />
      </div>
      <div className="mt-auto flex items-center justify-between">
        <div className="bg-border h-3 w-1/4 rounded-full" />
        <div className="bg-border h-6 w-16 rounded-full" />
      </div>
    </div>
  );
}
