import { Badge } from './App';
import { useState } from 'react';
interface Props {
  badges: Badge[];
}

function BadgeList({ badges }: Props) {
    const[form,setForm] =useState("")
    const filteredBadges = badges.filter(badge =>
    badge.awardedTo.toLowerCase().includes(form.toLowerCase())
  );

  return (
    <div>
      <h2>🏅 Badges</h2>
      <form>
      <label>search by awardedTo:
        <input type="text"
         value= {form}
         onChange={(e) => setForm(e.target.value)}
         placeholder="search" required
        />
      </label>
      </form>
      <ul>
        {filteredBadges.map(badge => (
          <li key={badge.id}>
            <strong>{badge.title}</strong> - {badge.description} (Awarded to: {badge.awardedTo}) (Date Awarded: {badge.dateAwarded})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BadgeList;