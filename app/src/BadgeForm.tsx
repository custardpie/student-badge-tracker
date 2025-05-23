import { useState } from 'react';

interface Props {
  onAdd: (badge: { title: string; description: string; awardedTo: string; dateAwarded: string}) => void;
}

function BadgeForm({ onAdd }: Props) {
  const [form, setForm] = useState({ title: '', description: '', awardedTo: '' , dateAwarded: ''});

  const[error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const allFilled = Object.values(form).every((val) => val.trim() !== '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!allFilled) {
        setError('Field is required')
    } else {
        setError('');
        console.log('Submitted:', name)

        }

    onAdd(form)
    setForm({ title: '', description: '', awardedTo: '', dateAwarded: ''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <input name="awardedTo" value={form.awardedTo} onChange={handleChange} placeholder="Awarded To" required />
      <input name="dateAwarded" value={form.dateAwarded} onChange={handleChange} placeholder="Date" required />

      {error && <p style={{color:'red'}}>{error}</p>}
      <button type="submit" disabled={!allFilled}>Add Badge</button>
    </form>
  );
}

export default BadgeForm;


//disabled={!allFilled}