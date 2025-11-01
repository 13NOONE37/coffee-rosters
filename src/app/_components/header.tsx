'use client';
import { CloseIcon } from '@/assets/close';
import { HamburgerIcon } from '@/assets/hamburger';
import { Logo } from '@/assets/logo';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-y-hidden', 'md:overflow-y-auto');
    } else {
      document.body.classList.remove('overflow-y-hidden', 'md:overflow-y-auto');
    }
    return () =>
      document.body.classList.remove('overflow-y-hidden', 'md:overflow-y-auto');
  }, [isMenuOpen]);

  return (
    <header className='flex justify-between items-center py-8 md:py:10 lg:py-11'>
      {/* We are defining here also bottom paddings because we need to know exact height for mobile nav; so we can't depend on other components*/}
      <Link href={'/'}>
        <Logo className='w-[162px] h-[17px] md:w-[236px] md:h-[26px]' />
      </Link>
      <button
        className='block md:hidden w-[16px] h-[15px] relative'
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      <nav
        className={` bg-gradient-to-b from-20% from-surface-page to-surface-page/50 absolute top-[81px] left-0 w-full h-full flex flex-col place-items-center pt-10 z-10 ${
          isMenuOpen ? 'not-sr-only' : 'sr-only'
        } md:not-sr-only`}
      >
        <ul className='flex flex-col md:flex-row place-items-center gap-8'>
          <li>
            <Link
              href='/'
              onClick={() => setIsMenuOpen(false)}
              className='nav-text-menu text-body md:text-ui-neutral hover:text-body uppercase'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='nav-text-menu text-body md:text-ui-neutral  hover:text-body uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href='/subscription'
              className='nav-text-menu text-body md:text-ui-neutral hover:text-body uppercase'
              onClick={() => setIsMenuOpen(false)}
            >
              Create Your Plan
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
