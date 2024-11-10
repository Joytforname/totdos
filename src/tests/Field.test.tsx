import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Field from '../components/Field';

describe('Field component', () => {
  it('renders the Field component', () => {
    const { getByTestId } = render(<Field />);
    expect(getByTestId('field')).toBeInTheDocument();
  });

  it('updates the task label when the input value changes', () => {
    const { getByTestId } = render(<Field />);
    const input = getByTestId('field').querySelector(
      'input'
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test task' } });
    expect(input.value).toBe('Test task');
  });
});
