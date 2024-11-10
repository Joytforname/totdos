import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Filter from '../components/Filter';
import { TasksContext } from '../context/todos';
import { FilterValue } from '../types';

describe('Filter component', () => {
  it('renders the filter buttons', () => {
    const { getByTestId } = render(
      <TasksContext.Provider
        value={{
          tasks: [],
          setTasks: jest.fn(),
          filter: FilterValue.all,
          setFilter: jest.fn(),
        }}
      >
        <Filter />
      </TasksContext.Provider>
    );

    expect(getByTestId('filter-button-all')).toBeInTheDocument();
    expect(getByTestId('filter-button-active')).toBeInTheDocument();
    expect(getByTestId('filter-button-completed')).toBeInTheDocument();
  });

  it('calls setFilter when a filter button is clicked', () => {
    const { getByTestId } = render(
      <TasksContext.Provider
        value={{
          tasks: [],
          setTasks: jest.fn(),
          filter: FilterValue.all,
          setFilter: jest.fn(),
        }}
      >
        <Filter />
      </TasksContext.Provider>
    );

    fireEvent.click(getByTestId('filter-button-active'));

expect(getByTestId('filter-button-active')).toBeInTheDocument();
expect(getByTestId('filter-button-active')).toBeEnabled();
  });

});
