"use client";

import { ArrowIcon } from "@/assets/arrow";
import { cn } from "@/lib/utils";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { Action, Answer, AnswersState, STEPS } from "./types";
import { isStepVisible } from "./utils";
import { SCROLL_CONFIG, SCROLL_DELAY, STEPS_CONFIG } from "./config";
import { AnswerComponent } from "./answerComponent";
import { Progress } from "./progress";
import { initialAnswers, reducer } from "./reducer";


export function Selection() {
  const [currentStep, setCurrentStep] = useState<STEPS | null>(null);
  const [answers, dispatch] = useReducer(reducer, initialAnswers);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!currentStep) return;

    dispatch({ type: "OPEN", step: currentStep, value: true });

    setTimeout(() => {
      const el = document.getElementById(currentStep);
      el?.scrollIntoView(SCROLL_CONFIG);
    }, SCROLL_DELAY)
  }, [currentStep])

  //TODO summary
  //TODO checkout
  //TODO auto open next section


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
        {STEPS_CONFIG.map((step) => (
          <li key={step.key} id={step.key}>
            <div
              className={cn(
                "flex justify-between gap-17",
                !isStepVisible(step,answers) &&
                  "opacity-50",
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
                disabled={ !isStepVisible(step,answers)}
                 aria-label={`${answers[step.key].isOpen ? 'Collapse' : 'Expand'} ${step.question}`}
            aria-expanded={answers[step.key].isOpen}
                className={cn("cursor-pointer",!isStepVisible(step,answers) && 'cursor-default')}
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
                answers[step.key].isOpen ? "grid h-auto" : "hidden h-0",
              )}
            >
              {
               isStepVisible(step,answers)
               &&
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

