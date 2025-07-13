import { useState } from 'react';
import clsx from 'clsx';

const links = [
  ['Start', 'start'],
  ['Vigsel', 'narvar'],
  ['Fest', 'narvar'],
  ['Anmälan', 'rsvp'],
  ['Vår Historia', 'history'],
  ['Bilder', 'gallery'],
  ['Boende', 'lodging'],
  ['FAQ', 'faq'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="backdrop-blur bg-white/60 shadow-sm">
        <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <div className="font-serif text-2xl text-primary">Rebecca &amp; Mikael</div>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <ul
            className={clsx(
              'md:flex md:space-x-6 absolute md:static bg-white/90 md:bg-transparent w-full md:w-auto left-0 origin-top transition-transform',
              open ? 'scale-y-1' : 'scale-y-0 md:scale-y-1'
            )}
          >
            {links.map(([label, id]) => (
              <li key={id} className="p-3 md:p-0 text-center">
                <a href={`#${id}`} className="font-medium text-gray-800 hover:text-accent transition">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}