import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

test('renders Home component correctly', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
