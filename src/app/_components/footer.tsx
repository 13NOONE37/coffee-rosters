import { FacebookIcon } from '@/assets/facebookIcon';
import { InstagramIcon } from '@/assets/instagramIcon';
import { Logo } from '@/assets/logo';
import { TwitterIcon } from '@/assets/twitterIcon';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-card py-13.5 md:py-14.5 lg:py-12 lg:px-21 flex flex-col lg:grid grid-cols-[auto_1fr_auto] items-center max-md:gap-12">
      <Link href={'/'}>
        <Logo
          className="w-[217px] h-[23px] md:w-[236px] md:h-[26px]"
          variant="light"
        />
      </Link>

      <nav className={`md:max-lg:mt-8  lg:pl-8 xl:pl-25.5`}>
        <ul className="flex flex-col md:flex-row place-items-center gap-8">
          <li>
            <Link
              href="/"
              className="nav-text text-ui-neutral hover:text-body-inverted uppercase"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="nav-text text-ui-neutral  hover:text-body-inverted uppercase"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/subscription"
              className="nav-text text-ui-neutral hover:text-body-inverted uppercase"
            >
              Create Your Plan
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="flex place-items-center gap-6 md:max-lg:mt-16">
        <li className="flex">
          <Link href={'#facebook'} aria-label="Facebook">
            <FacebookIcon className="w-6 h-6 fill-body-inverted hover:fill-accent-secondary" />
          </Link>
        </li>
        <li className="flex">
          <Link href={'#twitter'} aria-label="Twitter">
            <TwitterIcon className="w-6 h-5 fill-body-inverted hover:fill-accent-secondary" />
          </Link>
        </li>
        <li className="flex">
          <Link href={'#instagram'} aria-label="Instagram">
            <InstagramIcon className="w-6 h-6 fill-body-inverted hover:fill-accent-secondary" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
