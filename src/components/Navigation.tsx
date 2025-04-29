'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { unifraktur } from '@/lib/fonts';

const navItems = [
  { name: 'DETAILS', path: '/details' },
  { name: 'DRESS CODE', path: '/dress-code' },
  { name: 'FAQS', path: '/faqs' },
  { name: 'RSVP', path: '/rsvp' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 ${isHomePage ? 'bg-transparent' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo/Home Link */}
          <div className="flex-shrink-0 w-24">
            <Link href="/" className={`${unifraktur.className} text-2xl ${isHomePage ? 'text-yellow-300' : 'text-black'}`}>
              C&B
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors uppercase ${
                      isHomePage 
                        ? 'text-yellow-300 hover:text-yellow-200' 
                        : isActive
                          ? 'text-black'
                          : 'text-black hover:text-gray-600'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <div className={`absolute left-0 right-0 h-0.5 bottom-0 ${isHomePage ? 'bg-yellow-300' : 'bg-black'}`} />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Empty div to balance the logo */}
          <div className="flex-shrink-0 w-24 md:block hidden" />

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0 ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md"
            >
              <span className="sr-only">Open main menu</span>
              <div className={isHomePage ? 'text-yellow-300' : 'text-black'}>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 text-yellow-300 ${
                  isActive ? 'bg-gray-800' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}