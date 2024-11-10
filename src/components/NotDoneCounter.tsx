import { Typography } from '@mui/material';
import { Task } from '../types';
import { useContext } from 'react';
import { TasksContext } from '../context/todos';

const NotDoneCounter = () => {
  const { tasks } = useContext(TasksContext);
  const count = tasks.filter((task: Task) => !task.checked).length;

  return (
    <Typography variant='body2' color='#838383'>
      {count} items left
    </Typography>
  );
};

export default NotDoneCounter;
