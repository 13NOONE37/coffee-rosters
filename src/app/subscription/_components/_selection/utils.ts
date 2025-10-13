import { Step, AnswersState } from "./types";


export function isStepVisible(step: Step, answers: AnswersState) {
  if (!step.dependsOn) return true;
  return step.dependsOn.condition(answers);
}

