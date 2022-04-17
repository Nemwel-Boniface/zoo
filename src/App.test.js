import { render, screen } from '@testing-library/react';
import ZooContainer from './ZooContainer';

test('renders learn react link', () => {
  render(<ZooContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
