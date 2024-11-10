import { useContext, useState } from 'react';
import { Task } from '../types';
import { InputBase, TextField } from '@mui/material';
import { TasksContext } from '../context/todos';

const Field = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [taskLabel, setTaskLabel] = useState('');

  return (
    <InputBase
      sx={{ border: 'none', outline: 'none', p: 0 }}
      data-testid='field'
      value={taskLabel}
      placeholder='What needs to be done?'
      fullWidth
      size='small'
      onChange={(e) => setTaskLabel(e.target.value)}
      onKeyDownCapture={(e) => {
        if (e.key === 'Enter' && taskLabel) {
          setTasks([
            ...tasks,
            { label: taskLabel, checked: false, id: Date.now().toString() },
          ]);
          setTaskLabel('');
        }
      }}
    />
  );
};

export default Field;
