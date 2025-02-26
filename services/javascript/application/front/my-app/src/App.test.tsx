import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Person Management header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Person Management/i);
  expect(headerElement).toBeInTheDocument();
});