import Button from '@/components/ui/Button';
import QuoteCard from '@/components/ui/QuoteCard';
import { cn } from '@/lib/utils';

interface FreshQuotesProps {
  className?: string;
}

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const quotes: Quote[] = [
  { id: 1, quote: 'Well begun is half done.', author: 'Aristotle' },
];

export default function FreshQuotes({ className }: FreshQuotesProps) {
  return (
    <section className={cn(className)}>
      <div>
        <h2>Fresh Quotes</h2>
        <Button>⟳ Shuffle</Button>
        <ul>
          {quotes.map((item) => (
            <li key={item.id}>
              <QuoteCard text={item.quote} author={item.author} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
