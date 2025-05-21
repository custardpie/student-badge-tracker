import { useState } from 'react';

interface Props {
  onAdd: (badge: { title: string; description: string; awardedTo: string }) => void;
}

function BadgeForm({ onAdd }: Props) {
  const [form, setForm] = useState({ title: '', description: '', awardedTo: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(form);
    setForm({ title: '', description: '', awardedTo: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <input name="awardedTo" value={form.awardedTo} onChange={handleChange} placeholder="Awarded To" required />
      <button type="submit">Add Badge</button>
    </form>
  );
}

export default BadgeForm;