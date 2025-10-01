export function AboutUs() {
  return (
    <section className=" flex flex-col items-center md:items-start rounded-[10px] py-28 px-6 md:py-30 md:pl-14.5 md:pr-0 lg:py-34 lg:pl-21 bg-[url('/assets/about/mobile/image-hero-whitecup.jpg')] md:bg-[url('/assets/about/tablet/image-hero-whitecup.jpg')] lg:bg-[url('/assets/about/desktop/image-hero-whitecup.jpg')] bg-cover">
      <h1 className="heading-2 text-body-inverted text-center md:text-left">
        About Us
      </h1>
      <p className="max-w-111 content-text text-center md:text-left text-body-inverted/80 mt-6">
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </section>
  );
}
