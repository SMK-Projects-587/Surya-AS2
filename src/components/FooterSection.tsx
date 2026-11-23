import logo from '@/assets/logo.svg';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export default function FooterSection({ className }: FooterProps) {
  return (
    <footer
      className={cn('border-border border-t p-6 md:p-8 md:pr-20', className)}
    >
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-1 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-6 w-6" />
              <span className="font-display text-heading text-xl">Verse</span>
            </div>
            <p className="text-links mt-2 hidden text-sm md:block">
              A little wisdom, every day.
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-4 md:gap-12">
            <div className="md:gap-1">
              <h2 className="text-heading font-body hidden text-sm md:flex">
                <strong>Product</strong>
              </h2>
              <ul className="flex gap-4 md:mt-1 md:flex-col md:gap-1">
                <li>
                  <a href="#home" className="text-links font-body text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#explore" className="text-links font-body text-sm">
                    Explore
                  </a>
                </li>
                <li className="hidden md:block">
                  <a
                    href="#categories"
                    className="text-links font-body text-sm"
                  >
                    Categories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-heading font-body hidden text-sm md:flex">
                <strong>Company</strong>
              </h2>
              <ul className="flex gap-4 md:mt-1 md:flex-col md:gap-1">
                <li>
                  <a href="#about" className="text-links font-body text-sm">
                    About
                  </a>
                </li>
                <li className="hidden md:block">
                  <a href="#contact" className="text-links font-body text-sm">
                    Contact
                  </a>
                </li>
                <li className="hidden md:block">
                  <a href="#privacy" className="text-links font-body text-sm">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="text-links md:border-border md:text-links pt-2 text-sm md:border-t">
          © 2026 Verse. A training project.
        </p>
      </div>
    </footer>
  );
}
