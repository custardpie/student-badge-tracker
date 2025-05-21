import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

interface Badge {
  id: string;
  title: string;
  description: string;
  awardedTo: string;
}

let badges: Badge[] = [];

router.get('/', (req, res) => {
  res.json(badges);
});

router.post('/', (req, res) => {
  const { title, description, awardedTo } = req.body;
  const newBadge: Badge = {
    id: uuidv4(),
    title,
    description,
    awardedTo
  };
  badges.push(newBadge);
  res.status(201).json(newBadge);
});

router.get('/:id', (req, res) => {
  const badge = badges.find(b => b.id === req.params.id);
  if (!badge) return res.status(404).json({ message: 'Not found' });
  res.json(badge);
});

router.delete('/:id', (req, res) => {
  badges = badges.filter(b => b.id !== req.params.id);
  res.status(204).end();
});

export default router;