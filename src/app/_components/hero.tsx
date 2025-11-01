import Link from 'next/link';
import { CreateYourPlanButton } from './createYourPlanButton';

export function Hero() {
  return (
    <section className=" flex flex-col items-center md:items-start rounded-[10px] py-25 px-6 md:py-26 md:pl-14.5 md:pr-0 lg:py-29 lg:pl-21 bg-[url('/assets/home/mobile/image-hero-coffeepress.jpg')] md:bg-[url('/assets/home/tablet/image-hero-coffeepress.jpg')] lg:bg-[url('/assets/home/desktop/image-hero-coffeepress.jpg')] bg-cover">
      <h1 className='heading-1 text-body-inverted text-center md:text-left'>
        Great coffee
        <br />
        made simple.
      </h1>
      <p className='max-w-111 content-text text-center md:text-left text-body-inverted/80 mt-6 lg:mt-8'>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <div className='mt-10 lg:mt-14'>
        <CreateYourPlanButton />
      </div>
    </section>
  );
}
