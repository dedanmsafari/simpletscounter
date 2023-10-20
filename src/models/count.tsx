export enum ActionType {
  increment = "increment",
  decrement = "decrement",
}

interface Action<T = string> {
  type: T;
}

export interface AnyAction extends Action {
  [key: string]: string;
}

export type InitialState = {
  country: string;
  mode: string;
  count: number;
};
