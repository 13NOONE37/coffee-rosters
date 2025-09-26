import { getImageProps } from 'next/image';

export function Quality() {
  const common = { alt: 'Cup of cofee' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 445,
    height: 474,
    src: '/assets/about/desktop/image-quality.jpg',
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 573,
    height: 320,
    src: '/assets/about/tablet/image-quality.jpg',
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 558,
    height: 312,
    src: '/assets/about/mobile/image-quality.jpg',
  });

  return (
    <section className=" bg-surface-card rounded-[10px] flex flex-col items-center lg:items-start  pt-35.5 md:pt-56 lg:pt-22 pb-15 md:pb-17 lg:pb-44 px-6 md:px-18.5 lg:pl-21">
      <div className="w-full relative">
        <picture className="w-full max-w-[573px] rounded-[8px] overflow-hidden absolute left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <source media="(min-width: 1024px)" srcSet={desktop} />
          <source media="(min-width: 768px)" srcSet={tablet} />
          <source media="(min-width: 200px)" srcSet={mobile} />
          <img {...rest} className="w-full h-full object-cover" />
        </picture>
      </div>
      <h1 className="text-h2 text-body-inverted text-center md:text-left">
        Uncompromising quality
      </h1>
      <p className="max-w-111 text-content text-center lg:text-left text-body-inverted/80 mt-6 lg:mt-8">
        Although we work with growers who pay close attention to all stages of
        harvest and processing, we employ, on our end, a rigorous quality
        control program to avoid over-roasting or baking the coffee dry. Every
        bag of coffee is tagged with a roast date and batch number. Our goal is
        to roast consistent, user-friendly coffee, so that brewing is easy and
        enjoyable.
      </p>
    </section>
  );
}
