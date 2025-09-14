import { CoffeeBeanIcon } from '@/assets/coffeeBean';
import { GiftIcon } from '@/assets/gift';
import { TruckIcon } from '@/assets/truck';
import Image from 'next/image';
import { JSX } from 'react';

const reasons = [
  {
    heading: 'Best quality',
    description:
      'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
    Icon: CoffeeBeanIcon,
  },

  {
    heading: 'Exclusive benefits',
    description:
      'Special offers and swag when you subscribe, including 30% off your first shipment.',
    Icon: GiftIcon,
  },
  {
    heading: 'Free shipping',
    description:
      'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    Icon: TruckIcon,
  },
];

export function WhyUs() {
  return (
    <section className="mt-30 md:mt-36 lg:mt-50">
      <div className="bg-surface-card  rounded-[10px] flex flex-col items-center px-6 pt-16 pb-165 md:px-18.5 md:pt-14 md:pb-92 lg:pt-25 lg:pb-79.5 relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[10px] overflow-hidden pointer-events-none"
        >
          <div className="w-[1530px] h-[1021px]  absolute left-[50%] lg:left-[0] translate-x-[-50%] lg:translate-x-[0%] top-[269px] md:top-[-12px]">
            <Image
              src={'/assets/plan/desktop/bg-steps.png'}
              alt=""
              loading={'lazy'}
              priority={false}
              fill
            />
          </div>
        </div>
        <div className="max-w-135 flex flex-col items-center z-1">
          <h1 className="text-h2 text-body-inverted text-nowrap">
            Why choose us?
          </h1>
          <p className="text-content text-body-inverted/80 text-center max-w-135 mt-6 lg:mt-8">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>

        <ul className="z-1 absolute w-full bottom-0 translate-y-[50%] lg:translate-y-[150px]  flex flex-col justify-center lg:flex-row gap-6 lg:gap-8 px-6">
          {reasons.map((reason) => (
            <ReasonCard {...reason} key={reason.heading} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ReasonCard({
  heading,
  description,
  Icon,
}: {
  heading: string;
  description: string;
  Icon: () => JSX.Element;
}) {
  return (
    <li className="bg-brand-primary px-8.5 rounded-[8px] flex flex-col md:flex-row lg:flex-col place-items-center justify-center gap-14 lg:gap-17 w-full h-[382px] md:h-[180px] lg:w-[350px] lg:h-[382px]">
      <div className="flex place-items-center" aria-hidden="true">
        {<Icon />}
      </div>
      <div className="flex flex-col gap-6 md:gap-4 lg:gap-6">
        <h3 className="text-h4 text-body-inverted text-center md:text-left lg:text-center">
          {heading}
        </h3>
        <p className="text-content max-w-86  lg:max-w-64 text-body-inverted text-center md:text-left lg:text-center">
          {description}
        </p>
      </div>
    </li>
  );
}
