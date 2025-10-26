import { PlanInstruction } from '@/app/_components/PlanInstruction';
import { Noise } from '@/components/noise';

export function SubscriptionPlan() {
  return (
    <section className='px-6 md:px-10 lg:px-21 py-20 md:pt-24 md:pb-17.5 lg:py-25'>
      <Noise positionClassName='left-[50%] lg:left-[0] translate-x-[-50%] lg:translate-x-[0%] top-[16px] md:top-[-12px]' />
      <div className='relative z-1'>
        <PlanInstruction variant={'dark'} />
      </div>
    </section>
  );
}
