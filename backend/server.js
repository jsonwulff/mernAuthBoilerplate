const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const { PORT, MONGO_USER, MONGO_PASS } = process.env;

const app = express();

// Conenct to DB
const db = `mongodb://${MONGO_USER}:${MONGO_PASS}@mongo:27017/exercise?authSource=admin`;
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB succesfully connected'))
  .catch((err) => console.log('DB connection error: ', err));

// Middelware for parsing incoming requests with JSON payloads
app.use(express.json());

app.use('/api', authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
