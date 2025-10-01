'use client';

import { cn } from '@/lib/utils';

export enum STEPS {
  PREFERENCES = 'preferences',
  BEAN_TYPE = 'bean_type',
  QUANTITY = 'quantity',
  GRIND_OPTION = 'grind_option',
  DELIVERIES = 'deliveries',
}

type Step = {
  key: STEPS;
  index: number;
  name: string;
  question: string;
  answers: {
    title: string;
    description: string;
    value: string | number;
  }[];
  dependsOn?: { step: 1; value: string | number[] };
};

const steps: Step[] = [
  {
    key: STEPS.PREFERENCES,
    index: 1,
    name: 'Preferences',
    question: 'How do you drink your coffee?',
    answers: [
      {
        title: 'Capsule',
        description: 'Compatible with Nespresso systems and similar brewers',
        value: 'capsule',
      },
      {
        title: 'Filter',
        description:
          'For pour over or drip methods like Aeropress, Chemex, and V60',
        value: 'filter',
      },
      {
        title: 'Espresso',
        description:
          'Dense and finely ground beans for an intense, flavorful experience',
        value: 'espresso',
      },
    ],
  },
  {
    key: STEPS.BEAN_TYPE,
    index: 2,
    name: 'Bean Type',
    question: 'What type of coffee?',
    answers: [
      {
        title: 'Single Origin',
        description:
          'Distinct, high quality coffee from a specific family-owned farm',
        value: 'single',
      },
      {
        title: 'Decaf',
        description:
          'Just like regular coffee, except the caffeine has been removed',
        value: 'decaf',
      },
      {
        title: 'Blended',
        description:
          'Combination of two or three dark roasted beans of organic coffees',
        value: 'blended',
      },
    ],
  },
  {
    key: STEPS.QUANTITY,
    index: 3,
    name: 'Quantity',
    question: 'How much would you like?',
    answers: [
      {
        title: '250g',
        description:
          'Perfect for the solo drinker. Yields about 12 delicious cups.',
        value: 250,
      },
      {
        title: '500g',
        description:
          'Perfect option for a couple. Yields about 40 delectable cups.',
        value: 500,
      },
      {
        title: '1000g',
        description:
          'Perfect for offices and events. Yields about 90 delightful cups.',
        value: 1000,
      },
    ],
  },
  {
    key: STEPS.GRIND_OPTION,
    index: 4,
    name: 'Grind Option',
    question: 'Want us to grind them?',
    answers: [
      {
        title: 'Wholebean',
        description: 'Best choice if you cherish the full sensory experience',
        value: 'wholebean',
      },
      {
        title: 'Filter',
        description:
          'For drip or pour-over coffee methods such as V60 or Aeropress',
        value: 'filter',
      },
      {
        title: 'Cafetiére',
        description:
          'Course ground beans specially suited for french press coffee',
        value: 'cafetiere',
      },
    ],
    dependsOn: { step: 1, value: ['filter, espresso'] }, // only show if user chose Filter or Espresso
  },
  {
    key: STEPS.DELIVERIES,
    index: 5,
    name: 'Deliveries',
    question: 'How often should we deliver?',
    answers: [
      {
        title: 'Every week',
        description: '$7.20 per shipment. Includes free first-class shipping.',
        value: 'weekly',
      },
      {
        title: 'Every 2 weeks',
        description: '$9.60 per shipment. Includes free priority shipping.',
        value: 'every_2_weeks',
      },
      {
        title: 'Every month',
        description: '$12.00 per shipment. Includes free priority shipping.',
        value: 'monthly',
      },
    ],
  },
];
export function Selection() {
  return (
    <section className="grid lg:grid-cols-[auto_1fr] gap-31 lg:px-21">
      <div className="sr-only lg:not-sr-only">
        <Progress />
      </div>
      <div>a</div>
    </section>
  );
}

function Progress() {
  return (
    <ul className="divide-y divide-ui-neutral/25">
      {steps.map(({ name, index, key }) => {
        return (
          <li key={key} className={cn('heading-4 py-6 opacity-40')}>
            <span className="text-ui-neutral">
              {index < 10 && '0'}
              {index}
            </span>{' '}
            <span className="text-body ml-6">{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
