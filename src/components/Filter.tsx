import { Button, Stack } from '@mui/material';
import { TasksContext } from '../context/todos';
import { useContext } from 'react';
import doFilter from '../utils/doFilter';
import { FilterValue } from '../types';
import CustomButton from './CustomButton';

const Filter = () => {
  const { filter, setFilter } = useContext(TasksContext);

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
      />
      <CustomButton
        testid='filter-button-completed'
        label='Completed'
        onClick={() => handleFilter(FilterValue.completed)}
        isActive={filter === FilterValue.completed}
      />
    </Stack>
  );
};

export default Filter;
