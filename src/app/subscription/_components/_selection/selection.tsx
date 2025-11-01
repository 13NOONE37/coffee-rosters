'use client';

import { ArrowIcon } from '@/assets/arrow';
import { cn } from '@/lib/utils';
import {
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { Answer, AnswersState, DeliveryOption, Step, STEPS } from './types';
import { isStepVisible } from './utils';
import { SCROLL_CONFIG, SCROLL_DELAY, STEPS_CONFIG } from './config';
import { AnswerComponent, getCurrentPrice } from './answerComponent';
import { Progress } from './progress';
import { initialAnswers, reducer } from './reducer';
import { Modal } from '@/components/modal';
import { Noise } from '@/components/noise';
import { formatPrice } from '@/lib/formatters';

export function Selection() {
  const [currentStep, setCurrentStep] = useState<STEPS | null>(
    STEPS.PREFERENCES,
  );
  const [answers, dispatch] = useReducer(reducer, initialAnswers);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!currentStep) return;

    dispatch({ type: 'OPEN', step: currentStep, value: true });

    setTimeout(() => {
      const el = document.getElementById(currentStep);
      el?.scrollIntoView(SCROLL_CONFIG);
    }, SCROLL_DELAY);
  }, [currentStep]);

  const handleAnswer = (step: Step, value: Answer) => {
    // We create a copy to have current version locally
    const localAnswers = structuredClone(answers);
    localAnswers[step.key].value = value;

    dispatch({ type: 'ANSWER', step: step.key, value: value });

    const currentIndex = STEPS_CONFIG.findIndex((a) => a.key === step.key);

    for (let i = currentIndex + 1; i < STEPS_CONFIG.length; i++) {
      const nextStep = STEPS_CONFIG[i];

      if (
        isStepVisible(nextStep, localAnswers) &&
        !localAnswers[nextStep.key].value
      ) {
        setCurrentStep(nextStep.key);
        break;
      }
    }
  };

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const currentPrice = useMemo(
    () =>
      getCurrentPrice(
        answers.quantity.value,
        answers.deliveries.value as DeliveryOption,
      ),
    [answers.quantity.value, answers.deliveries.value],
  );
  const displayPrice = useMemo(() => {
    if (!answers.deliveries.value) return null;
    return formatPrice(
      currentPrice *
        getPriceMultiplier(answers.deliveries.value as DeliveryOption),
    );
  }, [currentPrice, answers.deliveries.value]);

  const isFormComplete = useMemo(() => {
    return STEPS_CONFIG.every((step) => {
      const visible = isStepVisible(step, answers);
      const value = answers[step.key].value;
      // If step is visible, it must have a value.
      // If not visible (like Grind Option for Capsule), skip it.
      return !visible || value !== null;
    });
  }, [answers]);

  return (
    <section className='grid gap-x-31 xl:grid-cols-[auto_1fr] grid-rows-[1fr_auto_auto] lg:px-21'>
      <Modal isOpen={isCheckoutOpen} setIsOpen={setIsCheckoutOpen}>
        <div className='w-135 max-w-[calc(100vw-48px)] bg-surface-page rounded-[8px] overflow-hidden pb-6 md:pb-14'>
          <div className='relative bg-surface-card px-6 py-7 md:px-14 md:pt-12 md:pb-10 '>
            <Noise />
            <h1 className='heading-2 md:font-[2.5rem] text-white'>
              Order Summary
            </h1>
          </div>
          <div className='px-6 md:px-14 mt-10 md:mt-14'>
            <OrderSummary answers={answers} darkVariant={false} />
            <p className='content-text text-body md:mt-2'>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
          </div>
          <div className='grid md:grid-cols-[auto_1fr] items-center gap-3 px-14 mt-6 md:mt-12'>
            <span className='sr-only md:not-sr-only heading-3 text-body'>
              {displayPrice}/ mo
            </span>
            <button
              className={
                'bg-brand-primary hover:bg-brand-primary-light flex place-content-center font-fraunces font-black text-lg text-center text-body-inverted  rounded-[6px]  py-4 px-8 cursor-pointer'
              }
            >
              <span className='md:sr-only'>Checkout - {displayPrice}/ mo</span>
              <span className='sr-only md:not-sr-only'>Checkout</span>
            </button>
          </div>
        </div>
      </Modal>
      <div className='sticky top-12 hidden self-start xl:block'>
        <Progress
          currentStep={currentStep}
          setStep={setCurrentStep}
          answers={answers}
        />
      </div>
      <ul className='flex flex-col gap-27.5 md:gap-25 lg:gap-22'>
        {STEPS_CONFIG.map((step) => (
          <li key={step.key} id={step.key}>
            <div
              className={cn(
                'flex justify-between gap-17',
                !isStepVisible(step, answers) && 'opacity-50',
              )}
            >
              <h3 className='heading-2 text-ui-neutral text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]'>
                {step.question}
              </h3>
              <button
                onClick={() =>
                  dispatch({
                    type: 'OPEN',
                    step: step.key,
                    value: !answers[step.key].isOpen,
                  })
                }
                disabled={!isStepVisible(step, answers)}
                aria-label={`${
                  answers[step.key].isOpen ? 'Collapse' : 'Expand'
                } ${step.question}`}
                aria-expanded={answers[step.key].isOpen}
                className={cn(
                  'cursor-pointer',
                  !isStepVisible(step, answers) && 'cursor-default',
                )}
              >
                <ArrowIcon
                  className={cn(
                    'transition-all',
                    answers[step.key].isOpen ? 'rotate-180' : 'rotate-0',
                  )}
                />
              </button>
            </div>
            <div
              className={cn(
                'mt-8 grid gap-4 transition-all md:mt-10 md:grid-cols-[1fr_1fr_1fr] md:gap-2.5 lg:mt-14 lg:gap-6',
                answers[step.key].isOpen ? 'grid h-auto' : 'hidden h-0',
              )}
            >
              {isStepVisible(step, answers) &&
                step.answers.map((answer) => (
                  <AnswerComponent
                    key={answer.title}
                    passKey={step.key}
                    handleAnswer={() => handleAnswer(step, answer.value)}
                    answers={answers}
                    {...answer}
                  />
                ))}
            </div>
          </li>
        ))}
      </ul>
      <div className='xl:col-start-2 xl:row-start-2 mt-30 md:mt-36 lg:mt-22  bg-surface-card relative rounded-[10px] py-8 px-6 md:py-7 md:px-11 lg:py-12 lg:px-16'>
        <Noise positionClassName='left-[50%] translate-x-[-50%] top-0' />
        <h3 className='content-text uppercase text-white/50 relative z-1'>
          Order summary
        </h3>
        <OrderSummary answers={answers} />
      </div>
      <button
        onClick={() => {
          setIsCheckoutOpen(true);
        }}
        disabled={!isFormComplete}
        className={cn(
          'xl:col-start-2 xl:row-start-3 flex place-items-center place-self-center xl:place-self-end font-fraunces font-black text-lg text-center text-body-inverted  rounded-[6px] py-4 px-8 mt-14 md:mt-10',
          isFormComplete
            ? 'bg-brand-primary hover:bg-brand-primary-light cursor-pointer'
            : 'bg-[#E2DEDB]',
        )}
      >
        Create my plan!
      </button>
    </section>
  );
}

function OrderSummary({
  answers,
  darkVariant = true,
}: {
  answers: AnswersState;
  darkVariant?: boolean;
}) {
  const summaryParts = useMemo(() => {
    const preposition =
      answers.preferences.value === 'capsule' ? 'using' : 'as';
    const showGrind = isStepVisible(
      STEPS_CONFIG.find((a) => a.key === STEPS.GRIND_OPTION) as Step,
      answers,
    );

    return [
      { text: 'I drink my coffee ', highlight: false },
      { text: preposition, highlight: false },
      { text: ' ', highlight: false },
      {
        text:
          getTitleFromValue(STEPS.PREFERENCES, answers.preferences.value) ??
          '_____',
        highlight: true,
      },
      { text: ' with a', highlight: false },
      { text: ' ', highlight: false },
      {
        text:
          getTitleFromValue(STEPS.BEAN_TYPE, answers.bean_type.value) ??
          '_____',
        highlight: true,
      },
      { text: ' type of bean.', highlight: false },
      { text: ' ', highlight: false },
      {
        text:
          getTitleFromValue(STEPS.QUANTITY, answers.quantity.value) ?? '_____',
        highlight: true,
      },
      ...(showGrind
        ? [
            { text: ' ground ala', highlight: false },
            { text: ' ', highlight: false },
            {
              text:
                getTitleFromValue(
                  STEPS.GRIND_OPTION,
                  answers.grind_option.value,
                ) ?? '_____',
              highlight: true,
            },
          ]
        : []),
      { text: ', sent to me', highlight: false },
      { text: ' ', highlight: false },
      {
        text:
          getTitleFromValue(STEPS.DELIVERIES, answers.deliveries.value) ??
          '_____',
        highlight: true,
      },
      { text: '.', highlight: false },
    ];
  }, [answers]);

  return (
    <p
      className={cn(
        'heading-4 leading-10 text-white mt-2 relative z-1',
        darkVariant ? 'text-white' : 'text-ui-neutral',
      )}
    >
      “
      {summaryParts.map((part, i) =>
        part.highlight ? (
          <SummaryAnswer key={i}>{part.text}</SummaryAnswer>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
      ”
    </p>
  );
}

function getTitleFromValue(key: STEPS, value: Answer) {
  if (!value) return;
  return STEPS_CONFIG.find((a) => a.key === key)?.answers.find(
    (a) => a.value === value,
  )?.title;
}
function SummaryAnswer({ children }: { children: ReactNode }) {
  return <span className='text-brand-primary'>{children}</span>;
}

export function getPriceMultiplier(delivery: DeliveryOption) {
  switch (delivery as DeliveryOption) {
    case 'weekly':
      return 4;
    case 'every_2_weeks':
      return 2;
    case 'monthly':
      return 1;
    default:
      return 0;
  }
}
