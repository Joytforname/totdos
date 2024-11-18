import { Task, FilterValue } from '../types';
import tasksFilterReducer from '../utils/tasksFilterReducer';

describe('tasksFilterReducer function', () => {
  const tasks: Task[] = [
    { id: '1', label: 'Task 1', checked: false },
    { id: '2', label: 'Completed', checked: true },
    { id: '3', label: 'Task 3', checked: false },
  ];

  it('should return all tasks when filter is "all"', () => {
    const filteredTasks = tasksFilterReducer(tasks, FilterValue.all);
    expect(filteredTasks).toHaveLength(tasks.length);
  });

  it('should return only completed tasks when filter is "completed"', () => {
    const filteredTasks = tasksFilterReducer(tasks, FilterValue.completed);
    expect(filteredTasks).toHaveLength(1);
    expect(filteredTasks[0].checked).toBe(true);
  });

  it('should return only active tasks when filter is "active"', () => {
    const filteredTasks = tasksFilterReducer(tasks, FilterValue.active);
    expect(filteredTasks).toHaveLength(2);
    expect(filteredTasks.every((task) => !task.checked)).toBe(true);
  });
});
