import { useState } from 'react';

import closeIcon from '@/assets/close.svg';
import hamIcon from '@/assets/ham.svg';
import logo from '@/assets/logo.svg';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Explore', href: '#' },
  { label: 'About', href: '#' },
];

export default function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn('border-border border-b', className)}>
      <nav className="mx-auto flex max-w-[1920px] items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="" width="30" height="30" />
          <span className="text-heading font-['Fraunces'] text-[18px] font-normal">
            Verse
          </span>
        </a>

        <ul className="hidden items-center gap-8 font-['Inter'] md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="color-links hover:text-primary text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="bg-primary hidden rounded-xl px-7 py-2.5 text-base font-normal text-white transition-opacity hover:opacity-90 md:block"
        >
          Get Inspired
        </button>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer md:hidden"
        >
          <img
            src={isOpen ? closeIcon : hamIcon}
            alt=""
            width="30"
            height="30"
          />
        </button>
      </nav>

      {isOpen && (
        <ul className="flex h-screen flex-col items-center gap-8 py-16 font-['Inter'] md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-links text-xl"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="bg-primary rounded-xl px-8 py-3.5 text-base text-white"
            >
              Get Inspired
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
