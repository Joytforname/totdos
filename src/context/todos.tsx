import { createContext } from 'react';
import { ActionType, FilterValue, Task } from '../types';
import { Action } from '../utils/taskReducer';

interface TasksContextValue {
  state: Task[] | [];
  dispatch: (action: Action) => void;
  filter: FilterValue;
  setFilter: (filter: FilterValue) => void;
}

export const TasksContext = createContext<TasksContextValue>({
  state: [],
  dispatch: () => {},
  filter: FilterValue.all,
  setFilter: () => {},
});
