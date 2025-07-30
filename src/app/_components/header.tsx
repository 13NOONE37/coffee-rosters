'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex justify-between items-center py-8">
      <Link className="w-[236px] h-[26px] relative" href={'/'}>
        <Image
          src={'/assets/shared/desktop/logo.svg'}
          fill
          alt="Cofferoasters logo"
        />
      </Link>
      <button
        className="block md:hidden w-[16px] h-[15px] relative"
        onClick={setIsMenuOpen.bind(null, (v) => !v)}
      >
        {isMenuOpen ? (
          <Image
            src={'/assets/shared/mobile/icon-close.svg'}
            fill
            alt="Icon of close"
          />
        ) : (
          <Image
            src={'/assets/shared/mobile/icon-hamburger.svg'}
            fill
            alt="Icon of hamburger(open's nav)"
          />
        )}
      </button>
      <nav
        className={`bg-surface-page fixed top-[90px] left-0 w-full h-full flex flex-col place-items-center pt-10 ${
          isMenuOpen ? 'not-sr-only' : 'sr-only'
        } md:not-sr-only`}
      >
        <ul className="flex flex-col place-items-center gap-8">
          <li>
            <Link href="/home" className="text-h4 text-body uppercase ">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-h4 text-body uppercase ">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/plan" className="text-h4 text-body uppercase ">
              Create Your Plan
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
