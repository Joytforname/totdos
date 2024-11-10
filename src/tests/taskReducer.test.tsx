import taskReducer from '../utils/taskReducer';
import { Task, Action } from '../types';

describe('taskReducer', () => {
  it('should add a new task', () => {
    const tasks: Task[] = [];
    const newTask: Task = { id: '1', label: 'New task', checked: false };
    const action: Action = Action.add;
    const result = taskReducer(tasks, action, newTask);
    expect(result).toEqual([newTask]);
  });

  it('should mark a task as checked', () => {
    const tasks: Task[] = [{ id: '1', label: 'Task 1', checked: false }];
    const taskToMark: Task = { id: '1', label: 'Task 1', checked: false };
    const action: Action = Action.mark;
    const result = taskReducer(tasks, action, taskToMark);
    expect(result).toEqual([{ id: '1', label: 'Task 1', checked: true }]);
  });

  it('should delete a task', () => {
    const tasks: Task[] = [
      { id: '1', label: 'Task 1', checked: false },
      { id: '2', label: 'Task 2', checked: false },
    ];
    const taskToDelete: Task = { id: '1', label: 'Task 1', checked: false };
    const action: Action = Action.delete;
    const result = taskReducer(tasks, action, taskToDelete);
    expect(result).toEqual([{ id: '2', label: 'Task 2', checked: false }]);
  });

});
