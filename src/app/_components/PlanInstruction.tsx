import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const instructions = [
  {
    index: 1,
    Heading: () => (
      <>
        Pick your <br className='hidden md:block' /> coffee
      </>
    ),
    description: `Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.`,
  },
  {
    index: 2,
    Heading: () => (
      <>
        Choose the <br className='hidden md:block' /> frequency
      </>
    ),
    description: `Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.`,
  },
  {
    index: 3,
    Heading: () => (
      <>
        Receive and <br className='hidden md:block' /> enjoy!
      </>
    ),
    description: `We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.`,
  },
];

export function PlanInstruction({
  variant = 'light',
}: {
  variant?: 'light' | 'dark';
}) {
  return (
    <div>
      <div className='sr-only md:not-sr-only max-w-[75%] grid grid-cols-[auto_1fr_auto_1fr_auto]'>
        <Circle />
        <Line />
        <Circle />
        <Line />
        <Circle />
      </div>

      <ul className='flex flex-col md:flex-row gap-14 md:gap-2.5 lg:gap-24 mt-20 md:mt-12 lg:mt-17'>
        {instructions.map((item) => (
          <Step {...item} key={item.index} variant={variant} />
        ))}
      </ul>
    </div>
  );
}
function Step({
  index,
  Heading,
  description,
  variant,
}: {
  index: number;
  Heading: () => ReactNode;
  description: string;
  variant: 'light' | 'dark';
}) {
  return (
    <li className='flex flex-col items-center md:items-start'>
      <span className='font-fraunces text-[4.5rem] leading-[4.5rem] text-accent-secondary'>
        {index < 10 && '0'}
        {index}
      </span>
      <h3
        className={cn(
          'heading-3 text-center md:text-left mt-6 md:mt-10.5 lg:mt-9.5',
          variant === 'dark' ? 'text-body-inverted' : 'text-body',
        )}
      >
        <Heading />
      </h3>
      <p
        className={cn(
          'content-text text-center md:text-left max-w-82 md:max-w-full mt-6 md:mt-9.5 lg:mt-10.5',
          variant === 'dark' ? 'text-body-inverted' : 'text-body',
        )}
      >
        {description}
      </p>
    </li>
  );
}
function Circle() {
  return <div className='size-8 rounded-[50%] border-2 border-brand-primary' />;
}
function Line() {
  return (
    <div className='flex items-center'>
      <div className='w-full h-0.5 bg-accent-secondary' />
    </div>
  );
}
