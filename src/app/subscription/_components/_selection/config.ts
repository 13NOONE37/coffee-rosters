import { STEPS, Step } from "./types";

/**
    UI scroll config & small delay used when auto-scrolling to a newly opened step
 */
export const SCROLL_CONFIG = { behavior: "smooth" as const, block: "start" as const };
export const SCROLL_DELAY = 10;

/**
    Steps configuration
 */
export const STEPS_CONFIG: Step[] = [
  {
    key: STEPS.PREFERENCES,
    name: "Preferences",
    question: "How do you drink your coffee?",
    answers: [
      {
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
        value: "capsule",
      },
      {
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
        value: "filter",
      },
      {
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
        value: "espresso",
      },
    ],
  },
  {
    key: STEPS.BEAN_TYPE,
    name: "Bean Type",
    question: "What type of coffee?",
    answers: [
      {
        title: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
        value: "single",
      },
      {
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
        value: "decaf",
      },
      {
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
        value: "blended",
      },
    ],
  },
  {
    key: STEPS.QUANTITY,
    name: "Quantity",
    question: "How much would you like?",
    answers: [
      {
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
        value: 250,
      },
      {
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
        value: 500,
      },
      {
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
        value: 1000,
      },
    ],
  },
  {
    key: STEPS.GRIND_OPTION,
    name: "Grind Option",
    question: "Want us to grind them?",
    answers: [
      {
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
        value: "wholebean",
      },
      {
        title: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
        value: "filter",
      },
      {
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
        value: "cafetiere",
      },
    ],
    dependsOn: {
      step: STEPS.PREFERENCES,
      condition: (answers) =>
        answers[STEPS.PREFERENCES].value === "filter" ||
        answers[STEPS.PREFERENCES].value === "espresso" 
        //|| answers[STEPS.PREFERENCES].value === null,
    }, // only show if user choose Filter or Espresso
  },
  {
    key: STEPS.DELIVERIES,
    name: "Deliveries",
    question: "How often should we deliver?",
    answers: [
      {
        title: "Every week",
        description: "$7.20 per shipment. Includes free first-class shipping.",
        value: "weekly",
      },
      {
        title: "Every 2 weeks",
        description: "$9.60 per shipment. Includes free priority shipping.",
        value: "every_2_weeks",
      },
      {
        title: "Every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
        value: "monthly",
      },
    ],
  },
];