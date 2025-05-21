import { render, screen } from '@testing-library/react';
import BadgeList from '../src/BadgeList';

const mockBadges = [
  { id: '1', title: 'Test Badge', description: 'Testing', awardedTo: 'Bob' }
];

test('renders badge list', () => {
  render(<BadgeList badges={mockBadges} />);
  expect(screen.getByText(/Test Badge/)).toBeInTheDocument();
});