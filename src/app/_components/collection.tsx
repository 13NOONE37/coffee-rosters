import Image from 'next/image';

export function Collection() {
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

  return (
    <section className="mt-30 md:mt-36 lg:mt-34">
      <div className="relative ">
        <h1 className="text-alternate-big text-ui-neutral text-center text-nowrap md:pt-7 md:pb-5 lg:pt-21.5 lg:pb-9.5">
          our collection
        </h1>
        <div className="absolute inset-0 bg-linear-180 from-body-inverted/0 to-body-inverted/100"></div>
      </div>
      <ul className="flex flex-col gap-12 mt-3 md:-mt-14.5 lg:-mt-17.5">
        {collection.map((coffee) => (
          <li key={coffee.name} className="flex flex-col place-items-center">
            <div className="w-[200px] h-[151px] relative">
              <Image src={coffee.imageURL} alt={coffee.name} fill />
            </div>
            <h2 className="font-fraunces font-black text-[1.5rem] leading-[2rem] text-body mt-6">
              {coffee.name}
            </h2>
            <p className="text-content text-body mt-4">{coffee.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
