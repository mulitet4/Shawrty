import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import urlRoutes from './routes/url.js';
import authRoutes from './routes/auth.js';

const app = express();

const port = 8000;

app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with your frontend origin
    credentials: true, // Allow cookies to be sent
  })
);
app.use(cookieParser());
app.use(express.json());

app.use('/api/urls', urlRoutes);
app.use('/api/users', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
