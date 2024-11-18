import { Stack } from '@mui/material';
import TaskRow from './TaskRow';
import { Task } from '../types';
import { TasksContext } from '../context/todos';
import { useContext } from 'react';
import tasksFilterReducer from '../utils/tasksFilterReducer';

const TasksList = () => {
  const { state, filter } = useContext(TasksContext);

  const filteredTasks = tasksFilterReducer(state, filter);

  return (
    <Stack data-testid='tasks-list'>
      {filteredTasks.map((task: Task) => (
        <TaskRow key={task.id} task={task} />
      ))}
    </Stack>
  );
};

export default TasksList;
