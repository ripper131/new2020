const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blog2020', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use blog routes
app.use('/api/blogs', blogRoutes);

// Use user routes
app.use('/api/users', userRoutes); // Add user routes

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});