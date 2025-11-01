import { AustraliaIcon } from '@/assets/australia';
import { CanadaIcon } from '@/assets/canada';
import { UkIcon } from '@/assets/uk';

const headquarters = [
  {
    name: 'United Kingdom',
    Icon: UkIcon,
    Content: () => (
      <>
        68 Asfordby Rd
        <br />
        Alcaston
        <br />
        SY6 1YA
        <br />
        +44 1241 918425
        <br />
      </>
    ),
  },
  {
    name: 'Canada',
    Icon: CanadaIcon,
    Content: () => (
      <>
        1528 Eglinton Avenue
        <br />
        Toronto
        <br />
        Ontario M4P 1A6
        <br />
        +1 416 485 2997
        <br />
      </>
    ),
  },
  {
    name: 'Australia',
    Icon: AustraliaIcon,
    Content: () => (
      <>
        36 Swanston Street
        <br />
        Kewell
        <br />
        Victoria
        <br />
        +61 4 9928 3629
        <br />
      </>
    ),
  },
];

export function HeadQuarters() {
  return (
    <section className='lg:px-15.5'>
      <h1 className='heading-4 text-ui-neutral text-center md:text-left'>
        Our headquarters
      </h1>
      <ul className='flex flex-col md:flex-row gap-20 lg:gap-24  mt-18'>
        {headquarters.map((hq) => (
          <li
            className='lg:w-[285px] flex flex-col items-center md:items-start'
            key={hq.name}
          >
            <hq.Icon />
            <h3 className='heading-3 text-body leading-[36px] md:text-[24px] lg:text-[32px] whitespace-nowrap mt-12'>
              {hq.name}
            </h3>
            <p className='content-text text-body text-center md:text-left mt-5.5 lg:mt-6'>
              <hq.Content />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
