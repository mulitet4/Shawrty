import express from 'express';
import cors from 'cors';

import urlRoutes from './routes/urlRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/api/urls', urlRoutes);
app.use('/api/users', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
