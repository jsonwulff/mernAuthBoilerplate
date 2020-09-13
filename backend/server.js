const express = require("express");
require("./db/connectDB");
const authRoutes = require("./routes/auth"); // Import routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middelware for parsing incoming requests with JSON payloads
app.use(express.json());

app.use('/api', authRoutes)

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}...`)
);
