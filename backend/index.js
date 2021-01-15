const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

// Application level middleware
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '..', 'build');
  app.use(express.static(buildPath));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/spacex', require('./Routes/spacex.routes'));

// Connection Listener
app.listen(PORT, () => {
  console.log('Server Started');
});
