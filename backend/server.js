const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const USER = process.env.MONGO_USER;
const PASS = process.env.MONGO_PASS;

// Middelware for parsing incoming requests with JSON payloads
app.use(express.json());

// Connect to MongoDB
const db = `mongodb://${USER}:${PASS}@mongo:27017/exercise?authSource=admin`;
console.log(db)
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    user: USER,
    pass: PASS,
  })
  .then(() => console.log("MongoDB succesfully connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () =>
  console.log(`Server is up and running on port ${PORT}...`)
);
