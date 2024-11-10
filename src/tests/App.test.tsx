import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';

import App from '../App';

describe('App component', () => {
  it('renders the app title', () => {
    const { getByText } = render(<App />);
    expect(getByText('todos')).toBeInTheDocument();
  });

  it('renders the Field component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('field')).toBeInTheDocument();
  });

  it('renders the TasksList component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('tasks-list')).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('footer')).toBeInTheDocument();
  });

});