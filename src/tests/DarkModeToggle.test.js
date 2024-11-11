import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from './DarkModeToggle';

test('renders correct icon based on dark mode status', () => {
  const { rerender } = render(<DarkModeToggle darkMode={true} setDarkMode={() => {}} />);
  expect(screen.getByLabelText(/Switch to light mode/i)).toBeInTheDocument();
  
  rerender(<DarkModeToggle darkMode={false} setDarkMode={() => {}} />);
  expect(screen.getByLabelText(/Switch to dark mode/i)).toBeInTheDocument();
});

test('toggles dark mode on click', () => {
  const setDarkModeMock = jest.fn();
  render(<DarkModeToggle darkMode={true} setDarkMode={setDarkModeMock} />);
  
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(setDarkModeMock).toHaveBeenCalledWith(false);
});