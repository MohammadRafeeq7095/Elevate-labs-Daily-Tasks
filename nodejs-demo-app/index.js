const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello from nodejs-demo-app!'));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

