import { getImageProps } from 'next/image';

export function Quality() {
  const common = { alt: 'Cup of coffee', quality: 100 };

  const desktop = getImageProps({
    ...common,
    width: 445,
    height: 474,
    src: '/assets/about/desktop/image-quality.jpg',
  });

  const tablet = getImageProps({
    ...common,
    width: 573,
    height: 320,
    src: '/assets/about/tablet/image-quality.jpg',
  });

  const mobile = getImageProps({
    ...common,
    width: 558,
    height: 312,
    src: '/assets/about/mobile/image-quality.jpg',
  });

  return (
    <section className="relative bg-surface-card rounded-[10px] flex flex-col items-center xl:items-start  pt-35.5 md:pt-56 xl:pt-22 pb-15 md:pb-17 xl:pb-44 px-6 md:px-18.5 xl:pl-21">
      <div className="absolute inset-0">
        <picture className="w-[279px] md:w-[573px] xl:w-[445px] rounded-[8px] overflow-hidden absolute left-1/2 xl:left-auto xl:right-[85px] xl:top-[-85px] -translate-x-1/2 -translate-y-1/2 xl:translate-0">
          <source media="(min-width: 1280px)" srcSet={desktop.props.srcSet} />
          <source media="(min-width: 768px)" srcSet={tablet.props.srcSet} />
          <img {...mobile.props} className="w-full h-full object-cover" />
        </picture>
      </div>
      <h1 className="text-h2 text-body-inverted text-center md:text-left">
        Uncompromising quality
      </h1>
      <p className="max-w-111 text-content text-center xl:text-left text-body-inverted/80 mt-6 xl:mt-8">
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
