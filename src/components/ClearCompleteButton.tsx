import { useContext } from 'react';
import { TasksContext } from '../context/todos';
import CustomButton from './CustomButton';
import { ActionType } from '../types';

const ClearCompleteButton = () => {
  const { dispatch } = useContext(TasksContext);

  return (
    <CustomButton
      testid='clear-complete-button'
      label='Clear completed'
      onClick={() => dispatch({ payload: {label: '', checked: false, id: ''}, type: ActionType.deleteDone })}
      isActive={false}
    />
  );
};

export default ClearCompleteButton;
