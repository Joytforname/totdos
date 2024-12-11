import { Button, Stack } from '@mui/material';
import { TasksContext } from '../context/todos';
import { useContext } from 'react';
import tasksFilterReducer from '../utils/tasksFilterReducer';
import { FilterValue } from '../types';
import CustomButton from './CustomButton';

const Filter = () => {
  const { state, filter, setFilter } = useContext(TasksContext);
  const isHaveActiveTasks = state.some((task) => task.checked === false);
  const isHaveCompleted = state.some((task) => task.checked === true);

  const handleFilter = (value: FilterValue) => {
    setFilter(value);
  };

  return (
    <Stack direction={'row'} spacing={1} alignItems={'center'}>
      <CustomButton
        testid='filter-button-all'
        label='All'
        onClick={() => handleFilter(FilterValue.all)}
        isActive={filter === FilterValue.all}
      />
      <CustomButton
        testid='filter-button-active'
        label='Active'
        onClick={() => handleFilter(FilterValue.active)}
        isActive={filter === FilterValue.active}
        disabled={!isHaveActiveTasks}
      />
      <CustomButton
        testid='filter-button-completed'
        label='Completed'
        onClick={() => handleFilter(FilterValue.completed)}
        isActive={filter === FilterValue.completed}
        disabled={!isHaveCompleted}
      />
    </Stack>
  );
};

export default Filter;
