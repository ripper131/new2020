const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://root:xY6Sx8WNgMHOifqeFXsS2pN8@denali.liara.cloud:31058/my-app?authSource=admin&replicaSet=rs0&directConnection=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Use blog routes
app.use('/api/blogs', blogRoutes);

// Use user routes
app.use('/api/users', userRoutes); // Add user routes

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});