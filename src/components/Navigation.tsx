'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { instrumentSans, spectral } from '@/lib/fonts';
import Image from 'next/image';

const navItems = [
  { name: 'DETAILS', path: '/details' },
  { name: 'DRESS CODE', path: '/dress-code' },
  { name: 'FAQS', path: '/faqs' },
  {
    name: 'REGISTRY',
    path: 'https://www.zola.com/registry/betsyandcj',
    external: true,
  },
  { name: 'RSVP', path: '/rsvp' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 ${isHomePage ? 'bg-transparent' : 'bg-pink-200 backdrop-blur-3xl'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo/Home Link */}
          <div className="flex-shrink-0 w-24">
            <Link href="/" className="flex items-center">
              <Image
                src="/icons/marriage-icon.svg"
                alt="C.J. & Betsy Wedding Logo"
                width={40}
                height={40}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                if (item.external) {
                  return (
                    <a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${instrumentSans.className} relative px-3 py-2 text-sm font-medium transition-colors uppercase ${
                        isHomePage 
                          ? 'text-black hover:text-gray-600' 
                          : 'text-black hover:text-gray-600'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`${instrumentSans.className} relative px-3 py-2 text-sm font-medium transition-colors uppercase ${
                      isHomePage 
                        ? 'text-black hover:text-gray' 
                        : isActive
                          ? 'text-black'
                          : 'text-black hover:text-gray-600'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <div className={`absolute left-0 right-0 h-0.5 bottom-0 ${isHomePage ? 'bg-black' : 'bg-black'}`} />
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
              <div className={isHomePage ? 'text-black' : 'text-black'}>
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
        <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            if (item.external) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${spectral.className} block px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-colors uppercase tracking-wide`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`${spectral.className} block px-4 py-3 text-lg font-medium rounded-md transition-colors uppercase tracking-wide ${
                  isActive 
                    ? 'bg-black text-white' 
                    : 'text-gray-900 hover:bg-gray-100'
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