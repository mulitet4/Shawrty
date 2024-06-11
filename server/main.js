const express = require('express');
const cors = require('cors');
const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

app.use(require('./routes/auth.js'));
app.use(require('./routes/shorten.js'));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
