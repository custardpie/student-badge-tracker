import { Badge } from './App';

interface Props {
  badges: Badge[];
}

function BadgeList({ badges }: Props) {
  return (
    <div>
      <h2>🏅 Badges</h2>
      <ul>
        {badges.map(badge => (
          <li key={badge.id}>
            <strong>{badge.title}</strong> - {badge.description} (Awarded to: {badge.awardedTo})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BadgeList;