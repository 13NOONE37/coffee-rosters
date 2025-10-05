"use client";

import { ArrowIcon } from "@/assets/arrow";
import { cn } from "@/lib/utils";
import {
  ActionDispatch,
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

export enum STEPS {
  PREFERENCES = "preferences",
  BEAN_TYPE = "bean_type",
  QUANTITY = "quantity",
  GRIND_OPTION = "grind_option",
  DELIVERIES = "deliveries",
}
type Answer = string | number | null;
type Step = {
  key: STEPS;
  name: string;
  question: string;
  answers: {
    title: string;
    description: string;
    value: Answer;
  }[];
  dependsOn?: { step: STEPS; value: Answer[] };
};
const steps: Step[] = [
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
    dependsOn: { step: STEPS.PREFERENCES, value: ["filter, espresso"] }, // only show if user chose Filter or Espresso
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

type AnswersState = Record<STEPS, { value: Answer; isOpen: boolean }>;

type ActionAnswer = {
  type: "ANSWER";
  step: STEPS;
  value: Answer;
};
type ActionOpen = {
  type: "OPEN";
  step: STEPS;
  value: boolean;
};
type Action = ActionAnswer | ActionOpen;

export function Selection() {
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.PREFERENCES);

  function reducer(state: AnswersState, action: Action): AnswersState {
    switch (action.type) {
      case "ANSWER": {
        const newState = { ...state };
        newState[action.step].value = action.value;

        // Example rule: if Preferences = Capsule, Grind Option is irrelevant → reset it
        if (action.step === STEPS.PREFERENCES) {
          if (action.value === "capsule")
            newState[STEPS.GRIND_OPTION] = { value: null, isOpen: false };
        }

        return newState;
      }

      case "OPEN": {
        console.log("OPEN");

        const newState = { ...state };

        newState[action.step].isOpen = Boolean(action.value);

        return newState;
      }

      default:
        return state;
    }
  }
  const [answers, dispatch] = useReducer(reducer, {
    [STEPS.PREFERENCES]: { value: null, isOpen: true },
    [STEPS.BEAN_TYPE]: { value: null, isOpen: false },
    [STEPS.QUANTITY]: { value: null, isOpen: false },
    [STEPS.GRIND_OPTION]: { value: null, isOpen: false },
    [STEPS.DELIVERIES]: { value: null, isOpen: false },
  });

  //todo summary
  //todo checkout

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      console.log("test");
      isInitialMount.current = false;
      return;
    }
    dispatch({ type: "OPEN", step: currentStep, value: true });

    setTimeout(() => {
      const el = document.getElementById(currentStep);

      el?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }, [currentStep]);

  return (
    <section className="grid gap-31 lg:grid-cols-[auto_1fr] lg:px-21">
      <div className="sticky top-12 hidden self-start xl:block">
        <Progress
          currentStep={currentStep}
          setStep={setCurrentStep}
          answers={answers}
        />
      </div>
      <ul className="flex flex-col gap-27.5 md:gap-25 lg:gap-22">
        {steps.map((step) => (
          <li key={step.key} id={step.key}>
            <div
              className={cn(
                "flex justify-between gap-17",
                isStepDisabled(step.key, answers) && "opacity-50",
              )}
            >
              <h3 className="heading-2 text-ui-neutral text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">
                {step.question}
              </h3>
              <button
                onClick={() =>
                  dispatch({
                    type: "OPEN",
                    step: step.key,
                    value: !answers[step.key].isOpen,
                  })
                }
                disabled={isStepDisabled(step, answers)}
                className="cursor-pointer"
              >
                <ArrowIcon
                  className={cn(
                    "transition-all",
                    answers[step.key].isOpen ? "rotate-180" : "rotate-0",
                  )}
                />
              </button>
            </div>
            <div
              className={cn(
                "mt-8 grid gap-4 transition-all md:mt-10 md:grid-cols-[1fr_1fr_1fr] md:gap-2.5 lg:mt-14 lg:gap-6",
                answers[step.key].isOpen ? "visible h-auto" : "hidden h-0",
              )}
            >
              {!isStepDisabled(step, answers) &&
                step.answers.map((answer) => (
                  <AnswerComponent
                    key={answer.title}
                    passKey={step.key}
                    dispatch={dispatch}
                    answers={answers}
                    {...answer}
                  />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AnswerComponent({
  answers,
  passKey,
  title,
  description,
  value,
  dispatch,
}: {
  answers: AnswersState;
  passKey: STEPS;
  title: string;
  description: string;
  value: Answer;
  dispatch: ActionDispatch<[action: Action]>;
}) {
  return (
    <label className="h-full cursor-pointer">
      <input
        type="radio"
        name={passKey}
        onChange={() =>
          dispatch({
            step: passKey,
            type: "ANSWER",
            value: value,
          })
        }
        value={value || ""}
        checked={answers[passKey].value === value}
        className="peer sr-only"
      />

      <div className="hover:bg-accent-secondary peer-checked:bg-brand-primary! text-body peer-checked:text-body-inverted h-full rounded-[8px] bg-[#F4F1EB] p-6 peer-focus-visible:outline-2 md:px-6 md:py-8 lg:px-7 lg:py-8">
        <h4 className="heading-4 text-left">{title}</h4>
        <p className="content-text mt-2 text-left md:mt-6">{description}</p>
      </div>
    </label>
  );
}

function Progress({
  currentStep,
  setStep,
  answers,
}: {
  currentStep: STEPS;
  setStep: Dispatch<SetStateAction<STEPS>>;
  answers: AnswersState;
}) {
  return (
    <ul className="divide-ui-neutral/25 divide-y">
      {steps.map((step, index) => {
        return (
          <li key={step.key}>
            <button
              onClick={() => setStep(step.key)}
              aria-current={currentStep === step.key ? "step" : undefined}
              className={cn(
                "heading-4 flex size-full cursor-pointer border-none bg-transparent py-6 opacity-40 hover:opacity-60",
                currentStep === step.key && "!opacity-100",
                isStepDisabled(step, answers) && "!opacity-20",
              )}
              disabled={isStepDisabled(step, answers)}
            >
              <span
                className={cn(
                  "text-ui-neutral",
                  index === 0 && "text-brand-primary",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-body ml-6">{step.name}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
function isStepDisabled(step: Step, answers: AnswersState): boolean {
  console.log(step, answers);
  if (!step.dependsOn) return false;

  const { step: dependsOnStep, value: requiredValues } = step.dependsOn;
  const answer = answers[dependsOnStep]?.value;

  // Disable if the dependency condition isn't met
  return !requiredValues.includes(answer);
}
