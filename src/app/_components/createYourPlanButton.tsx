import Link from 'next/link';

export function CreateYourPlanButton() {
  return (
    <Link
      href={'/subscription'}
      className="flex place-items-center bg-brand-primary hover:bg-brand-primary-light  font-fraunces font-black text-lg text-center text-body-inverted  rounded-[6px] py-4 px-8  "
    >
      Create your plan
    </Link>
  );
}
