const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const newAuth = require('./routes/newAuth');
const user = require('./routes/user');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const { PORT, MONGO_USER, MONGO_PASS } = process.env;

const app = express();

// Middelware
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
require('./middleware/passport')(passport);

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

// Routes
app.use('/api', auth);
app.use('/api', newAuth);
// Protected routes
app.use('/api/user', passport.authenticate('jwt', { session: false }), user);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
