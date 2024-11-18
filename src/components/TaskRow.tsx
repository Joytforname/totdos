import { Checkbox, Stack, Typography } from '@mui/material';
import { ActionType, Task } from '../types';
import { TasksContext } from '../context/todos';
import { useContext } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';

interface TaskProps {
  task: Task;
}

const TaskRow = ({ task }: TaskProps) => {
  const { dispatch } = useContext(TasksContext);

  const changeStatus = () => {
    dispatch({
      type: ActionType.mark,
      payload: task,
    });
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
