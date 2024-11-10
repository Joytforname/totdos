import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { TasksContext } from '../context/todos';
import { Task, FilterValue } from '../types';
import TasksList from '../components/TasksList';

describe('TasksList component', () => {
  const tasks: Task[] = [
    { id: '1', label: 'Task 1', checked: false },
    { id: '2', label: 'Completed', checked: true },
    { id: '3', label: 'Task 3', checked: false },
  ];

  const renderComponent = () => {
    return render(
      <TasksContext.Provider
        value={{
          tasks,
          setTasks: jest.fn(),
          filter: FilterValue.all,
          setFilter: jest.fn(),
        }}
      >
        <TasksList />
      </TasksContext.Provider>
    );
  };

  it('renders the tasks list', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('tasks-list')).toBeInTheDocument();
  });

  it('renders the correct number of tasks', () => {
    const { getAllByTestId } = renderComponent();
    expect(getAllByTestId('task-row')).toHaveLength(tasks.length);
  });

  it('renders the task title', () => {
    const { getByText } = renderComponent();
    expect(getByText(tasks[0].label)).toBeInTheDocument();
  });

  it('renders the task completed status', () => {
    const { getByText } = renderComponent();
    expect(getByText('Completed')).toBeInTheDocument();
  });

});
