import { Collection } from './_components/collection';
import { Hero } from './_components/hero';
import { HowItWorks } from './_components/howItWorks';
import { WhyUs } from './_components/whyUs';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-30 md:mt-36 xl:mt-34">
        <Collection />
      </div>
      <div className="mt-30 md:mt-36 lg:mt-50">
        <WhyUs />
      </div>
      <div className="mt-179 md:mt-108.5 lg:mt-88 mb-30 md:mb-36 lg:mb-50">
        <HowItWorks />
      </div>
    </div>
  );
}
