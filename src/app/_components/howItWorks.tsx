import { CreateYourPlanButton } from './createYourPlanButton';
import { PlanInstruction } from './PlanInstruction';

export function HowItWorks() {
  return (
    <section>
      <h1 className="text-h4 text-ui-neutral text-center md:text-left">
        How it works
      </h1>
      <div className="md:mt-10 lg:mt-20">
        <PlanInstruction />
      </div>
      <div className="flex justify-center md:justify-start mt-19.5 md:mt-11 lg:mt-16">
        <CreateYourPlanButton />
      </div>
    </section>
  );
}
