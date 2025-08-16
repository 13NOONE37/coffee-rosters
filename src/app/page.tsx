import { Collection } from './_components/collection';
import { CreateYourPlanButton } from './_components/createYourPlanButton';
import { Hero } from './_components/hero';
import { HowItWorks } from './_components/howItWorks';
import { WhyUs } from './_components/whyUs';

export default function Home() {
  return (
    <div>
      <Hero />
      <Collection />
      <WhyUs />
      <HowItWorks />
      <div className="flex justify-center md:justify-start mt-19.5 md:mt-11 lg:mt-16 mb-30 md:mb-36 lg:mb-50">
        <CreateYourPlanButton />
      </div>
    </div>
  );
}
