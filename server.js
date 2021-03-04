const express = require('express');

const app = express();

app.use('/', (req, res) => res.send('This is working without starting the server'));

app.listen(3001, () => {
  console.log('Server started on port 3001')
})