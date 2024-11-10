import { Stack } from '@mui/material';
import TaskRow from './TaskRow';
import { Task } from '../types';
import { TasksContext } from '../context/todos';
import { useContext } from 'react';
import doFilter from '../utils/doFilter';

const TasksList = () => {
  const { tasks, filter } = useContext(TasksContext);

  const filteredTasks = doFilter(tasks, filter);

  return (
    <Stack data-testid='tasks-list'>
      {filteredTasks.map((task: Task) => (
        <TaskRow key={task.id} task={task} />
      ))}
    </Stack>
  );
};

export default TasksList;
