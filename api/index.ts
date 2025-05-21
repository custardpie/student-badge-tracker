import express from 'express';
import cors from 'cors';
import badgeRoutes from './badges';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/badges', badgeRoutes);

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});