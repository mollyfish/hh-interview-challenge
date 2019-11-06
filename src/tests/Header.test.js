import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../components/Header';


test('loads and displays header', () => {
  const { getByTestId } = render(<Header/>);
  const headerTextNode = getByTestId('example-testid');
  expect(headerTextNode).toHaveTextContent('Header');
})