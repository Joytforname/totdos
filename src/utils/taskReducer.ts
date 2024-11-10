import { Action, Task } from '../types';

interface Props {
  action: string;
  id: string;
}

export const initialState = [
  {
    name: 'Add a task item',
    done: false,
  },
];

const taskReducer = (tasks: Task[], action: Action, task: Task) => {
  const { id } = task;
  switch (action) {
    case Action.add:
      tasks.push(task);
      return tasks;
    case Action.mark:
      return tasks.map((t: Task) =>
        t.id === id ? { ...t, checked: !t.checked } : t
      );
    case Action.delete:
      return tasks.filter((t: Task) => t.id !== id);
    default:
      return tasks;
  }
};

export default taskReducer;
