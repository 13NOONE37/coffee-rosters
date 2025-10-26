import { formatPrice } from '@/lib/formatters';
import { STEPS_CONFIG } from './config';
import { Answer, AnswersState, DeliveryOption, STEPS } from './types';

export function AnswerComponent({
  answers,
  passKey,
  title,
  description,
  value,
  handleAnswer,
}: {
  answers: AnswersState;
  passKey: STEPS;
  title: string;
  description: string;
  value: Answer;
  handleAnswer: (step: STEPS, value: Answer) => void;
}) {
  return (
    <label className='h-full cursor-pointer'>
      <input
        type='radio'
        name={passKey}
        onChange={() => handleAnswer(passKey, value)}
        value={value || ''}
        checked={answers[passKey].value === value}
        className='peer sr-only scroll-m-0'
      />

      <div className='hover:bg-accent-secondary peer-checked:bg-brand-primary! text-body peer-checked:text-body-inverted h-full rounded-[8px] bg-[#F4F1EB] p-6 peer-focus-visible:outline-2 md:px-6 md:py-8 lg:px-7 lg:py-8'>
        <h4 className='heading-4 text-left'>{title}</h4>
        <p className='content-text mt-2 text-left md:mt-6'>
          {passKey === STEPS.DELIVERIES
            ? formatPrice(
                getCurrentPrice(
                  answers.quantity.value,
                  value as DeliveryOption,
                ),
              ) + ' '
            : ''}
          {description}
        </p>
      </div>
    </label>
  );
}
export function getCurrentPrice(quantity: Answer, delivery: DeliveryOption) {
  if (!quantity || !delivery) return NaN;

  const price = STEPS_CONFIG.find(
    (a) => a.key === STEPS.QUANTITY,
  )?.answers?.find((a) => a.value === quantity)?.priceInCents[delivery];
  if (!price) return NaN;

  return price / 100;
}
