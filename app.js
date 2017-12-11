const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');


const config = require('./server/config/config');
const app = express();
const router = express.Router();


require('./server/config/db')(mongoose, config);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(router);


// Set port
const port = process.env.PORT || '3000';
app.set('port', port);
app.set('secret', config.secret);

// Set static path to Angular app in dist
// Don't run in dev
if (process.env.NODE_ENV !== 'dev') {
  app.use('/', express.static(path.join(__dirname, './dist')));
}

require('./server/routes/api')(router);


// Pass routing to Angular app
// Don't run in dev
if (process.env.NODE_ENV !== 'dev') {
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });
}

app.listen(port, () => console.log(`Server running on localhost:${port}`));

module.exports = app;
