const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Application level middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', require('./Routes/spacex.routes'));

// Connection Listener
app.listen(PORT, () => {
  console.log('Server Started');
});
