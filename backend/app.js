
const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

app.get('/api/data', (req, res) => {
  db.collection('data').find().toArray((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching data' });
    } else {
      res.send(data);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});