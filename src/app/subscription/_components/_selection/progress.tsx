import { Dispatch, SetStateAction } from "react";
import { AnswersState, STEPS } from "./types";
import { STEPS_CONFIG } from "./config";
import { isStepVisible } from "./utils";
import { cn } from "@/lib/utils";

export function Progress({
  currentStep,
  setStep,
  answers,
}: {
  currentStep: STEPS | null;
  setStep: Dispatch<SetStateAction<STEPS | null>>;
  answers: AnswersState;
}) {
  return (
    <ul className="divide-ui-neutral/25 divide-y">
      {STEPS_CONFIG.map((step, index) => {
        return (
          <li key={step.key}>
            <button
              onClick={() => setStep(step.key)}
              aria-current={currentStep === step.key ? "step" : undefined}
              className={cn(
                "heading-4 flex size-full cursor-pointer border-none bg-transparent py-6 opacity-40 hover:opacity-60",
                currentStep === step.key && "!opacity-100",
                !isStepVisible(step,answers)&& "!opacity-20 cursor-default",
              )}
              disabled={!isStepVisible(step,answers)}
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
