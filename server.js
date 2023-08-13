const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('This project was used to demonstrate Github Action deployment of AWS ECR to implement the CI/CD pipeline.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
