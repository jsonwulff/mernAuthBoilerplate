const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const user = require('./routes/user');
const passport = require("passport");
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

// Passport middleware
app.use(passport.initialize());
require('./middleware/passport')(passport)

app.use('/api', auth);

app.use("/api/user",passport.authenticate("jwt", { session: false }),user);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
