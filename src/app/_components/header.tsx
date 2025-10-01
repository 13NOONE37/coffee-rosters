'use client';
import { Logo } from '@/assets/logo';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      return document.body.classList.add(
        'overflow-y-hidden',
        'md:overflow-y-auto',
      );
    }
    document.body.classList.remove('overflow-y-hidden', 'md:overflow-y-auto');
  }, [isMenuOpen]);

  //TODO: move icons(close and hamburger) to assets folder as tsx files
  return (
    <header className="flex justify-between items-center py-8 md:py:10 lg:py-11">
      {/* We are defining here also bottom paddings because we need to know exact height for mobile nav; so we can't depend on other components*/}
      <Link href={'/'}>
        <Logo className="w-[162px] h-[17px] md:w-[236px] md:h-[26px]" />
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
        className={`bg-surface-page absolute top-[81px] left-0 w-full h-full flex flex-col place-items-center pt-10 z-10 ${
          isMenuOpen ? 'not-sr-only' : 'sr-only'
        } md:not-sr-only`}
      >
        <ul className="flex flex-col md:flex-row place-items-center gap-8">
          <li>
            <Link
              href="/"
              className="nav-text-menu text-body md:text-ui-neutral hover:text-body uppercase"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="nav-text-menu text-body md:text-ui-neutral  hover:text-body uppercase"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/subscription"
              className="nav-text-menu text-body md:text-ui-neutral hover:text-body uppercase"
            >
              Create Your Plan
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
