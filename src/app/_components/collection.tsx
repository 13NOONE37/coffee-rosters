import Image from 'next/image';

const collection = [
  {
    name: 'Gran Espresso',
    description:
      'Light and flavorful blend with cocoa and black pepper for an intense experience',
    imageURL: '/assets/home/desktop/image-gran-espresso.png',
  },
  {
    name: 'Planalto',
    description:
      ' Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
    imageURL: '/assets/home/desktop/image-planalto.png',
  },
  {
    name: 'Piccollo',
    description:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry',
    imageURL: '/assets/home/desktop/image-piccollo.png',
  },
  {
    name: 'Danche',
    description:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
    imageURL: '/assets/home/desktop/image-danche.png',
  },
];

export function Collection() {
  return (
    <section className='flex flex-col place-items-center'>
      <div className='max-w-full overflow-hidden relative -z-1'>
        <h1 className='heading-alternate-big text-ui-neutral text-center text-nowrap md:pt-7 md:pb-5 xl:pt-21.5 xl:pb-9.5'>
          our collection
        </h1>
        <div className='absolute inset-0 bg-linear-180 from-body-inverted/0 to-body-inverted/100'></div>
      </div>
      <ul className='flex flex-col xl:flex-row gap-12 md:gap-8 xl:gap-7 mt-3 md:-mt-7.5 xl:-mt-17.5'>
        {collection.map((coffee,index) => (
          <li
            key={coffee.name}
            className='flex flex-col md:flex-row xl:flex-col align-items-center place-items-center md:place-items-start xl:place-items-center gap-6 md:gap-9 xl:gap-18'
          >
            <div className='w-[200px] aspect-[454/356] md:w-[255px] xl:w-[235px] relative'>
              <Image
                src={coffee.imageURL}
                alt={coffee.name}
                fill
                quality={100}
                priority={index === 0}
              />
            </div>
            <div className='flex flex-col place-items-center md:place-items-start xl:place-items-center'>
              <h2 className='font-fraunces font-black text-[1.5rem] leading-[2rem] text-body'>
                {coffee.name}
              </h2>
              <p className='content-text text-body text-center md:text-left xl:text-center max-w-70.5 xl:max-w-64 mt-4 md:mt-6'>
                {coffee.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
