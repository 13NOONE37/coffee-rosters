'use client';

import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction, useReducer, useState } from 'react';

export enum STEPS {
  PREFERENCES = 'preferences',
  BEAN_TYPE = 'bean_type',
  QUANTITY = 'quantity',
  GRIND_OPTION = 'grind_option',
  DELIVERIES = 'deliveries',
}
type Answer = string | number;
type Step = {
  key: STEPS;
  name: string;
  question: string;
  answers: {
    title: string;
    description: string;
    value: Answer;
  }[];
  dependsOn?: { step: 1; value: Answer[] };
};
const steps: Step[] = [
  {
    key: STEPS.PREFERENCES,
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

type State = Record<STEPS, string | null>;

type Action = {
  type: 'ANSWER';
  step: STEPS;
  value: Answer;
};

export function Selection() {
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.PREFERENCES);

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case 'ANSWER': {
        const newState = { ...state, [action.step]: action.value };

        // Example rule: if Preferences = Capsule, Grind Option is irrelevant → reset it
        if (action.step === STEPS.PREFERENCES && action.value === 'capsule') {
          newState[STEPS.GRIND_OPTION] = null;
        }

        return newState;
      }
      default:
        return state;
    }
  }
  const [answers, dispatch] = useReducer(reducer, {
    [STEPS.PREFERENCES]: null,
    [STEPS.BEAN_TYPE]: null,
    [STEPS.QUANTITY]: null,
    [STEPS.GRIND_OPTION]: null,
    [STEPS.DELIVERIES]: null,
  });

  return (
    <section className="grid lg:grid-cols-[auto_1fr] gap-31 lg:px-21">
      <div className="sr-only lg:not-sr-only">
        <Progress step={currentStep} setStep={setCurrentStep} />
      </div>
      <ul className="flex flex-col gap-27.5 md:gap-25 lg:gap-22">
        {steps.map(({ key, question, answers, dependsOn }) => (
          <li key={key}>
            <div className="flex justify-between">
              <h3 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] heading-2  text-ui-neutral">
                {question}
              </h3>
              <button>💨</button>
            </div>
            <div className="grid lg:grid-cols-[1fr_1fr_1fr] gap-4 md:gap-2.5 lg:gap-6 mt-8 md:mt-10 lg:mt-14">
              {answers.map((answer) => (
                <button
                  onClick={() =>
                    dispatch({ step: key, type: 'ANSWER', value: answer.value })
                  }
                  key={answer.title}
                  className="bg-[#F4F1EB] rounded-[8px] p-6 md:py-8 md:px-6 lg:py-8 lg:px-7"
                >
                  <h4 className="heading-4 text-body text-left">
                    {answer.title}
                  </h4>
                  <p className="content-text text-body mt-2 md:mt-6 text-left">
                    {answer.description}
                  </p>
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function isStepDisabled() {}
function Progress({
  step,
  setStep,
}: {
  step: STEPS;
  setStep: Dispatch<SetStateAction<STEPS>>;
}) {
  return (
    <ul className="divide-y divide-ui-neutral/25">
      {steps.map(({ name, key }, index) => {
        return (
          <li key={key}>
            <button
              onClick={() => setStep(key)}
              className={cn(
                'heading-4 flex py-6 opacity-40 hover:opacity-60 size-full bg-transparent border-none cursor-pointer',
                step === key && '!opacity-100',
              )}
            >
              <span
                className={cn(
                  'text-ui-neutral',
                  index === 0 && 'text-brand-primary',
                )}
              >
                {index < 10 && '0'}
                {index}
              </span>{' '}
              <span className="text-body ml-6">{name}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
