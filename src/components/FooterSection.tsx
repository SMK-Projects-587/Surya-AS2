import logo from '@/assets/logo.svg';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export default function FooterSection({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'text-links border-border border-t p-6 text-sm md:p-8 md:pr-20',
        className,
      )}
    >
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-1 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-6 w-6" />
              <span className="font-display text-heading text-xl">Verse</span>
            </div>
            <p className="mt-2 hidden md:block">A little wisdom, every day.</p>
          </div>

          <nav aria-label="Footer" className="flex gap-4 md:gap-12">
            <div>
              <h2 className="text-heading hidden text-sm md:flex">
                <strong>Product</strong>
              </h2>
              <ul className="flex gap-4 md:mt-1 md:flex-col md:gap-1">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#explore">Explore</a>
                </li>
                <li className="hidden md:block">
                  <a href="#categories">Categories</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-heading hidden md:flex">
                <strong>Company</strong>
              </h2>
              <ul className="flex gap-4 md:mt-1 md:flex-col md:gap-1">
                <li>
                  <a href="#about">About</a>
                </li>
                <li className="hidden md:block">
                  <a href="#contact">Contact</a>
                </li>
                <li className="hidden md:block">
                  <a href="#privacy">Privacy</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="md:border-border pt-2 md:border-t">
          © 2026 Verse. A training project.
        </p>
      </div>
    </footer>
  );
}
