import { Task, FilterValue } from '../types';
import doFilter from '../utils/doFilter';

describe('doFilter function', () => {
  const tasks: Task[] = [
    { id: '1', label: 'Task 1', checked: false },
    { id: '2', label: 'Completed', checked: true },
    { id: '3', label: 'Task 3', checked: false },
  ];

  it('should return all tasks when filter is "all"', () => {
    const filteredTasks = doFilter(tasks, FilterValue.all);
    expect(filteredTasks).toHaveLength(tasks.length);
  });

  it('should return only completed tasks when filter is "completed"', () => {
    const filteredTasks = doFilter(tasks, FilterValue.completed);
    expect(filteredTasks).toHaveLength(1);
    expect(filteredTasks[0].checked).toBe(true);
  });

  it('should return only active tasks when filter is "active"', () => {
    const filteredTasks = doFilter(tasks, FilterValue.active);
    expect(filteredTasks).toHaveLength(2);
    expect(filteredTasks.every((task) => !task.checked)).toBe(true);
  });
});
