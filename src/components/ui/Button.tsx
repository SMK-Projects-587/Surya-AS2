import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface buttonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: buttonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'bg-primary rounded-xl px-7 py-2.5 text-base font-normal text-white transition-opacity hover:opacity-90',
        className,
      )}
    >
      {children}
    </button>
  );
}
