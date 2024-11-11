import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App.jsx';
import '@testing-library/jest-dom';

test('renders ColorShare title', () => {
  render(<App />);
  expect(screen.getByText(/ColorShare/i)).toBeInTheDocument();
});

test('saves a color on button click', () => {
  render(<App />);
  const saveButton = screen.getByRole('button', { name: /Save Color/i });
  fireEvent.click(saveButton);
  expect(localStorage.getItem('savedColors')).not.toBeNull();
});