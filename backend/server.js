const express = require('express');
require('./db/connectDB');
const authRoutes = require('./routes/auth');
const { PORT } = process.env;

const app = express();

// Middelware for parsing incoming requests with JSON payloads
app.use(express.json());

app.use('/api', authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));

