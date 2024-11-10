import { Checkbox, Stack, Typography } from '@mui/material';
import { Action, Task } from '../types';
import taskReducer from '../utils/taskReducer';
import { TasksContext } from '../context/todos';
import { useContext, useEffect } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';

interface TaskProps {
  task: Task;
}

const TaskRow = ({ task }: TaskProps) => {
  console.log('task: ', task);
  const { tasks, setTasks } = useContext(TasksContext);
  useEffect(() => {
    console.log('tasks: ', tasks);
  }, [tasks]);

  const changeStatus = () => {
    const newTasks = taskReducer(tasks, Action.mark, task);
    setTasks(newTasks);
  };

  return (
    <Stack
      data-testid='task-row'
      direction='row'
      alignItems={'center'}
      sx={{
        borderTop: '1px solid #E0E0E0',
        justifyContent: 'flex-start',
      }}
    >
      <Checkbox
        disableRipple
        checked={task.checked}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleTwoToneIcon />}
        onChange={() => changeStatus()}
      />
      <Typography
        variant='body1'
        sx={{
          textDecoration: task.checked ? 'line-through' : 'none',
          color: task.checked ? '#E0E0E0' : '#535353',
          wordBreak: 'break-all',
        }}
      >
        {task.label}
      </Typography>
    </Stack>
  );
};

export default TaskRow;
