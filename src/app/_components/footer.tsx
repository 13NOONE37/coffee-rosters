import { FacebookIcon } from '@/assets/facebookIcon';
import { InstagramIcon } from '@/assets/instagramIcon';
import { Logo } from '@/assets/logo';
import { TwitterIcon } from '@/assets/twitterIcon';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-card py-13.5 flex flex-col items-center gap-12">
      <Link href={'/'}>
        <Logo
          className="w-[217px] h-[23px] md:w-[236px] md:h-[26px]"
          variant="light"
        />
      </Link>

      <nav className={``}>
        <ul className="flex flex-col md:flex-row place-items-center gap-8">
          <li>
            <Link
              href="/home"
              className="text-nav text-ui-neutral hover:text-body-inverted uppercase"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-nav text-ui-neutral  hover:text-body-inverted uppercase"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/plan"
              className="text-nav text-ui-neutral hover:text-body-inverted uppercase"
            >
              Create Your Plan
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="flex place-items-center gap-6">
        <li className="flex">
          <Link href={'#facebook'}>
            <FacebookIcon className="w-6 h-6 fill-body-inverted hover:fill-accent-secondary" />
          </Link>
        </li>
        <li className="flex">
          <Link href={'#twitter'}>
            <TwitterIcon className="w-6 height-5 fill-body-inverted hover:fill-accent-secondary" />
          </Link>
        </li>
        <li className="flex">
          <Link href={'#instagram'}>
            <InstagramIcon className="w-6 h-6 fill-body-inverted hover:fill-accent-secondary" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
