import { useEffect, useState } from 'react';
import BadgeList from './BadgeList';
import BadgeForm from './BadgeForm';

export interface Badge {
  id: string;
  title: string;
  description: string;
  awardedTo: string;
  dateAwarded: string;
}

function App() {
  const [badges, setBadges] = useState<Badge[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/badges')
      .then(res => res.json())
      .then(data => setBadges(data));
  }, []);

  const addBadge = (badge: Omit<Badge, 'id'>) => {
    fetch('http://localhost:3000/badges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(badge)
    })
      .then(res => res.json())
      .then(newBadge => setBadges([...badges, newBadge]));
  };

  return (
    <div>
      <h1>🎓 Student Badge Tracker</h1>
      <BadgeForm onAdd={addBadge} />
      <BadgeList badges={badges} />
    </div>
  );
}

export default App;