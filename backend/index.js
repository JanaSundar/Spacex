const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const compression = require('compression');

// Application level middleware
app.use(compression());
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '..', 'build');
  app.use(express.static(path.join(buildPath)));
}

// routes

app.use('/spacex', require('./Routes/spacex.routes'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Connection Listener
app.listen(PORT, () => {
  console.log('Server Started');
});
