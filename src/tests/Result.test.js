import React from 'react';
import { render } from '@testing-library/react';
import Result from '../components/Result';

test('renders Result component correctly', () => {
  const result = {
    total: 10,
    operation: '+',
    next: 5,
  };
  const { asFragment } = render(<Result result={result} />);
  expect(asFragment()).toMatchSnapshot();
});
