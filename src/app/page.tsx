import { Collection } from './_components/collection';
import { Hero } from './_components/hero';
import { HowItWorks } from './_components/howItWorks';
import { WhyUs } from './_components/whyUs';

export default function Home() {
  //TODO: we have to move section spacing from components here(e.g. close Hero in div and give div margins). Because that's more component way of doing things.

  return (
    <div>
      <Hero />
      <Collection />
      <WhyUs />
      <HowItWorks />
    </div>
  );
}
