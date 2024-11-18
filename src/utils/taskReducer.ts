import { ActionType, Task } from '../types';

export type Action = {
  type: ActionType;
  payload: Task;
};

const taskReducer = (state: Task[], action: Action) => {
  const { payload, type } = action;
  const { id } = payload;

  switch (type) {
    case ActionType.add:
      return [...state, payload];
    case ActionType.mark:
      return [
        ...state.map((t: Task) =>
          t.id === id ? { ...t, checked: !t.checked } : t
        ),
      ];

    case ActionType.delete:
      return [...state.filter((t: Task) => t.id !== id)];
    case ActionType.deleteDone:
      return [...state.filter((t: Task) => !t.checked)];
    default:
      return state;
  }
};

export default taskReducer;
