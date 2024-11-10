import { useContext } from 'react';
import { TasksContext } from '../context/todos';
import CustomButton from './CustomButton';

const ClearCompleteButton = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  return (
    <CustomButton
      testid='clear-complete-button'
      label='Clear completed'
      onClick={() => setTasks(tasks.filter((task) => !task.checked))}
      isActive={false}
    />
  );
};

export default ClearCompleteButton;
