import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders Calculator component correctly', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});
