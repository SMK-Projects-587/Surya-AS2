import { useEffect, useState } from 'react';

import Button from '@/components/ui/Button';
import QuoteCard from '@/components/ui/QuoteCard';
import QuoteCardSkeleton from '@/components/ui/QuoteCardSkeleton';
import { moods } from '@/lib/moods';
import { cn } from '@/lib/utils';

interface Quote {
  id: number;
  quote: string;
  author: string;
  mood?: string;
}

type Status = 'loading' | 'loaded' | 'error';

const QUOTES_API_URL = 'https://dummyjson.com/quotes/random/6?delay=1000';

function getRandomMood(): string {
  const randomIndex = Math.floor(Math.random() * moods.length);
  return moods[randomIndex].name;
}

async function fetchQuotes(): Promise<Quote[]> {
  const res = await fetch(QUOTES_API_URL);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  const data: Quote[] = await res.json();
  return data.map((item) => ({ ...item, mood: getRandomMood() }));
}

interface FreshQuotesProps {
  className?: string;
}

export default function FreshQuotes({ className }: FreshQuotesProps) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [status, setStatus] = useState<Status>('loading');

  async function loadQuotes() {
    setStatus('loading');
    try {
      setQuotes(await fetchQuotes());
      setStatus('loaded');
    } catch {
      setStatus('error');
    }
  }

  useEffect(() => {
    fetchQuotes()
      .then((data) => {
        setQuotes(data);
        setStatus('loaded');
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  return (
    <section className={cn('bg-background border-border', className)}>
      <div className="mx-auto flex max-w-[1920px] flex-col gap-1 border px-4 py-6 md:gap-4 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-heading text-xl md:text-2xl">
            Fresh quotes
          </h2>
          <Button
            className="bg-body border-border text-primary border px-4 py-2 text-sm md:px-6 md:py-3 md:text-base"
            onClick={loadQuotes}
          >
            ⟳ Shuffle
          </Button>
        </div>

        {status === 'loading' && (
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
            {Array.from({ length: 6 }, (_, index) => (
              <li key={index} className={cn(index >= 3 && 'hidden md:block')}>
                <QuoteCardSkeleton />
              </li>
            ))}
          </ul>
        )}

        {status === 'error' && (
          <div
            role="alert"
            className="flex flex-col items-center gap-3 rounded-2xl bg-red-50 p-8 text-red-700"
          >
            <p>Couldn't load quotes.</p>
            <Button
              className="bg-body border-border text-heading border px-4 py-2 text-sm"
              onClick={loadQuotes}
            >
              Try again
            </Button>
          </div>
        )}

        {status === 'loaded' && (
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
            {quotes.map((item, index) => (
              <li key={item.id} className={cn(index >= 3 && 'hidden md:block')}>
                <QuoteCard
                  text={`“${item.quote}”`}
                  author={item.author}
                  mood={item.mood}
                  showDash={false}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
