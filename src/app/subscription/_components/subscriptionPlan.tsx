import { PlanInstruction } from '@/app/_components/PlanInstruction';
import Image from 'next/image';

export function SubscriptionPlan() {
  //TODO fix the heading font(we have to change name from heading-3 to heading-h3 across project)
  return (
    <section className="px-6 md:px-10 lg:px-21 py-20 md:pt-24 md:pb-17.5 lg:py-25">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[10px] overflow-hidden pointer-events-none"
      >
        <div className="w-[1530px] h-[1021px]  absolute left-[50%] lg:left-[0] translate-x-[-50%] lg:translate-x-[0%] top-[16px] md:top-[-12px]">
          <Image
            src={'/assets/plan/desktop/bg-steps.png'}
            alt=""
            loading={'lazy'}
            priority={false}
            fill
            quality={100}
          />
        </div>
      </div>
      <div className="relative z-1">
        <PlanInstruction variant={'dark'} />
      </div>
    </section>
  );
}
