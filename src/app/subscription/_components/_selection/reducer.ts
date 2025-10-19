import { STEPS_CONFIG } from './config';
import { Action, AnswersState, STEPS } from './types';
import { isStepVisible } from './utils';

export const initialAnswers = {
  [STEPS.PREFERENCES]: { value: null, isOpen: true },
  [STEPS.BEAN_TYPE]: { value: null, isOpen: false },
  [STEPS.QUANTITY]: { value: null, isOpen: false },
  [STEPS.GRIND_OPTION]: { value: null, isOpen: false },
  [STEPS.DELIVERIES]: { value: null, isOpen: false },
};

export function reducer(state: AnswersState, action: Action): AnswersState {
  switch (action.type) {
    case 'ANSWER': {
      const newState = { ...state };
      newState[action.step].value = action.value;

      // Example rule: if Preferences = Capsule, Grind Option is irrelevant → reset it
      if (action.step === STEPS.PREFERENCES && action.value === 'capsule') {
        newState[STEPS.GRIND_OPTION] = { value: null, isOpen: false };
      }

      // const currentIndex = STEPS_CONFIG.findIndex(s=>s.key===action.step)
      // for(let i= currentIndex+1;i<STEPS_CONFIG.length;i++){
      //   const nextStep =  STEPS_CONFIG[i]
      //   if(isStepVisible(nextStep,newState) && !newState[nextStep.key].value){
      //     setCurrentStep(nextStep.key)
      //     newState[nextStep.key].isOpen=true;
      //     break;
      //   }
      // }

      return newState;
    }

    case 'OPEN': {
      const newState = { ...state };

      newState[action.step].isOpen = Boolean(action.value);

      return newState;
    }

    default:
      const _exhaustive: never = action; //It will warn us if we create new action but didn't handle it
      return state;
  }
}
