import { useContext } from 'react';
import { TasksContext } from '../context/todos';
import CustomButton from './CustomButton';
import { ActionType } from '../types';

const ClearCompleteButton = () => {
  const {state, dispatch } = useContext(TasksContext);
  const isHaveCompleted = state.some((task) => task.checked === true);

  return (
    <CustomButton
      testid='clear-complete-button'
      label='Clear completed'
      onClick={() => dispatch({ payload: {label: '', checked: false, id: ''}, type: ActionType.deleteDone })}
      isActive={false}
      disabled={!isHaveCompleted}
    />
  );
};

export default ClearCompleteButton;
