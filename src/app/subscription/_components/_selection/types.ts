export enum STEPS {
  PREFERENCES = 'preferences',
  BEAN_TYPE = 'bean_type',
  QUANTITY = 'quantity',
  GRIND_OPTION = 'grind_option',
  DELIVERIES = 'deliveries',
}

export type Answer = string | number | null;

export type BaseStep = {
  name: string;
  question: string;
  dependsOn?: { step: STEPS; condition: (answers: AnswersState) => boolean };
};

export type RegularStep = BaseStep & {
  key: Exclude<STEPS, STEPS.QUANTITY | STEPS.DELIVERIES>;
  answers: {
    title: string;
    description: string;
    value: Answer;
  }[];
};
export type QuantityStep = BaseStep & {
  key: STEPS.QUANTITY;
  answers: {
    title: string;
    description: string;
    value: Answer;
    priceInCents: {
      weekly: number;
      every_2_weeks: number;
      monthly: number;
    };
  }[];
};

export type DeliveryOption = 'weekly' | 'every_2_weeks' | 'monthly';
export type DeliveryStep = BaseStep & {
  key: STEPS.DELIVERIES;
  answers: {
    title: string;
    description: string;
    value: DeliveryOption;
  }[];
};
export type Step = RegularStep | DeliveryStep | QuantityStep;

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
