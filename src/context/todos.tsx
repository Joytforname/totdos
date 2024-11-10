import { createContext } from 'react';
import { FilterValue, Task } from '../types';

interface TasksContextValue {
  tasks: Task[] | [];
  setTasks: (tasks: Task[] | []) => void;
  filter: FilterValue;
  setFilter: (filter: FilterValue) => void;
}

export const TasksContext = createContext<TasksContextValue>({
  tasks: [],
  setTasks: () => {},
  filter: FilterValue.all,
  setFilter: () => {},
});
