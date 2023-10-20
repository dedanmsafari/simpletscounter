export enum ActionType {
  increment = "increment",
  decrement = "decrement",
}

// interface Action<T = string> {
//   type: T;
// }

// export interface AnyAction extends Action {
//   [otherProps: string]: string;
// }

export type InitialState = {
  country: string;
  mode: string;
  count: number;
};

interface ActionWithPayload<T, P> {
  type: T;
  payload: P;
}
interface ActionWithoutPayload<T = string> {
  type: T;
}

export function createAction<T, P>(T: T, P: P): ActionWithPayload<T, P>;
export function createAction<T, P>(T: T, P: void): ActionWithoutPayload<T>;

export function createAction<T, P>(T: T, P: P) {
  return { type: T, payload: P };
}

const action = createAction(ActionType.increment, "Hard Work");

console.log(action);
