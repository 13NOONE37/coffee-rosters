const instruction = [
  {
    id: 1,
    heading: 'Pick your coffee',
    description: `Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.`,
  },
  {
    id: 1,
    heading: 'Choose the frequency',
    description: `Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.`,
  },
  {
    id: 1,
    heading: 'Receive and enjoy!',
    description: `We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.`,
  },
];

export function PlanInstruction() {
  return (
    <div>
      <div className="sr-only md:not-sr-only max-w-[75%] grid grid-cols-[auto_1fr_auto_1fr_auto]">
        <Circle />
        <Line />
        <Circle />
        <Line />
        <Circle />
      </div>

      <ul className="flex flex-col md:flex-row gap-14 md:gap-2.5 lg:gap-24 mt-28 md:mt-12 lg:mt-17">
        <li>step1</li>
        <li>step2</li>
        <li>step3</li>
      </ul>
    </div>
  );
}

function Circle() {
  return <div className="size-8 rounded-[50%] border-2 border-brand-primary" />;
}
function Line() {
  return (
    <div className="flex items-center">
      <div className="w-full h-0.5 bg-accent-secondary" />
    </div>
  );
}
