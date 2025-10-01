import Image from 'next/image';

export function OurCommitment() {
  return (
    <section className="flex flex-col items-center md:items-start md:gap-17 md:flex-row md:justify-between xl:justify-center xl:gap-31 xl:px-21">
      <div className="relative h-[400px] md:h-[470px] lg:h-[520px] rounded-[8px] overflow-hidden">
        <Image
          src="/assets/about/desktop/image-commitment.jpg"
          alt="Barist making a coffee"
          width={485}
          height={506}
          quality={100}
          loading="lazy"
        />
      </div>
      <div className="mt-12 md:mt-2 xl:mt-22.5">
        <h1 className="heading-2 text-body text-center md:text-left">
          Our commitment
        </h1>
        <p className="max-w-111 content-text text-center md:text-left text-body/80 mt-7.5">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
}
