import { Typography } from '@mui/material';
import { Task } from '../types';
import { useContext } from 'react';
import { TasksContext } from '../context/todos';

const NotDoneCounter = () => {
  const { state } = useContext(TasksContext);
  const count = state.filter((task: Task) => !task.checked).length;

  return (
    <Typography variant='body2' color='#838383'>
      {count} items left
    </Typography>
  );
};

export default NotDoneCounter;
