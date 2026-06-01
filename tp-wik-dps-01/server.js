const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.json({
        headers: req.headers
  });
});

app.use((req, res) => {
  res.status(404).json({
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
