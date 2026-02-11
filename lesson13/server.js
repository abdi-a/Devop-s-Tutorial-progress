const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Mission Success!</h1><p>You successfully containerized your first App.</p>');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
