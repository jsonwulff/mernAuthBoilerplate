const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is up and running on port ${PORT}...`)
);
console.log('Hello ' + process.env.TESTVAR)