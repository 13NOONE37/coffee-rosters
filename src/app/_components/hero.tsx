import Link from 'next/link';

export function Hero() {
  return (
    <section className="bg-[url('/assets/home/mobile/image-hero-coffeepress.jpg')] md:bg-[url('/assets/home/tablet/image-hero-coffeepress.jpg')] lg:bg-[url('/assets/home/desktop/image-hero-coffeepress.jpg')] bg-cover rounded-[10px] flex flex-col py-25 px-6 md:py-26 md:pl-14.5 md:pr-0 lg:py-29 lg:pl-21">
      <h1 className="text-h1 text-body-inverted">
        Greate cofee
        <br />
        made simple.
      </h1>
      <p className="max-w-[280px] md:max-w-[398px] lg:max-w-[445px] text-content text-body-inverted/80 mt-6 lg:mt-8">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <Link
        href={'/subscription'}
        className="flex place-items-center bg-brand-primary font-fraunces font-black text- text-body-inverted  rounded-[6px] py-4 px-8 mt-10 lg:mt-14 "
      >
        Create your plan
      </Link>
    </section>
  );
}
