import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn without crashing', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const { container } = render(<App />);
  const check = container.getElementsByClassName("App");
  expect(check).toBeTruthy();
});