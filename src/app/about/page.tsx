import { AboutUs } from './_components/aboutUs';
import { HeadQuarters } from './_components/headquarters';
import { OurCommitment } from './_components/ourCommitment';
import { Quality } from './_components/quality';

export default function About() {
  return (
    <div className="">
      <AboutUs />
      <div className="mt-30 md:mt-36 lg:mt-42">
        <OurCommitment />
      </div>
      <div className="mt-49.5 md:mt-76 xl:mt-64">
        <Quality />
      </div>
      <div className="mt-30 md:mt-36 lg:mt-38">
        <HeadQuarters />
      </div>
    </div>
  );
}
