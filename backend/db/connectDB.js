const mongoose = require("mongoose");

const USER = process.env.MONGO_USER;
const PASS = process.env.MONGO_PASS;

// Connect to MongoDB
const db = `mongodb://${USER}:${PASS}@mongo:27017/exercise?authSource=admin`;
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    user: USER,
    pass: PASS,
  })
  .then(() => console.log("MongoDB succesfully connected"))
  .catch((err) => console.log("DB connection error: ", err));
