import { render, screen } from '@testing-library/react';
import BadgeList from '../src/BadgeList';

const mockBadges = [
  { id: '1', title: 'Test Badge', description: 'Testing', awardedTo: 'Bob', dateAwarded: '18/05/2004'}
];

test('renders badge list', () => {
  render(<BadgeList badges={mockBadges} />);
  expect(screen.getByText(/Test Badge/)).toBeInTheDocument();
});