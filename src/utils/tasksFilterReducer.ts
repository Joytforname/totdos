import { FilterValue, Task } from '../types';

const tasksFilterReducer = (tasks: Task[], filter: FilterValue) => {
  switch (filter) {
    case FilterValue.all:
      return tasks;
    case FilterValue.active:
      return tasks.filter((task: Task) => !task.checked);
    case FilterValue.completed:
      return tasks.filter((task: Task) => task.checked);
    default:
      return tasks;
  }
};

export default tasksFilterReducer;
