export enum STEPS {
  PREFERENCES = 'preferences',
  BEAN_TYPE = 'bean_type',
  QUANTITY = 'quantity',
  GRIND_OPTION = 'grind_option',
  DELIVERIES = 'deliveries',
}

export type Answer = string | number | null;

export type Step = {
  key: STEPS;
  name: string;
  question: string;
  answers: {
    title: string;
    description: string;
    value: Answer;
  }[];
  dependsOn?: { step: STEPS; condition: (answers: AnswersState) => boolean };
};

export type AnswersState = {
  [K in STEPS]: {
    value: Answer;
    isOpen: boolean;
  };
};

/**
    Action Type
 */
type ActionAnswer = {
  type: 'ANSWER';
  step: STEPS;
  value: Answer;
};
type ActionOpen = {
  type: 'OPEN';
  step: STEPS;
  value: boolean;
};

export type Action = ActionAnswer | ActionOpen;
