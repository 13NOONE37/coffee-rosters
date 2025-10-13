import { CreatePlan } from './_components/createPlan';
import { Selection } from './_components/_selection/selection';
import { SubscriptionPlan } from './_components/subscriptionPlan';

export default function Subscription() {
  return (
    <div className="">
      <div>
        <CreatePlan />
      </div>
      <div className="relative bg-surface-card rounded-[10px] lg:rounded-[0px] -mx-6 md:-mx-9.5 lg:mx-0 mt-30 md:mt-36 lg:mt-42">
        <SubscriptionPlan />
      </div>
      <div className="my-30 md:my-36 lg:my-42">
        <Selection />
      </div>
    </div>
  );
}
