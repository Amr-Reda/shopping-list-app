require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const initRoutes = require('./routes');

// Express App
const app = express();

/**
 * Middleware section
 */
// Parse application/json
app.use(bodyParser.json({ limit: '50mb' }));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Initialize app routes
initRoutes(app);

app.listen(8000, () => {
  console.log(
    `app is up & running on port ${8000}`
  );
});