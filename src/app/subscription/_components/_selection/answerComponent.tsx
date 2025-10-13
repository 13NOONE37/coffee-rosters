import { Dispatch } from "react";
import { Action, Answer, AnswersState, STEPS } from "./types";

export function AnswerComponent({
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
  dispatch: Dispatch<Action>;
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

