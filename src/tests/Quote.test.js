import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

test('renders Quote component correctly', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});
