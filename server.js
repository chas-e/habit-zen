// require modules
const express = require('express');
const path = require('path');
// const methodOverride = require('method-override');
const favicon = require('serve-favicon');
const morgan = require('morgan');



// create app
const app = express();

// configure app
require('dotenv').config();
require('./config/database');

// mount middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// mount API routes here, before the "catch-all" route
app.use('/api/users', require('./routes/api/users'));
app.use(require('./config/auth'));

// mount  routes we want to protect with auth (this might need to go under catch all, in case it throws errors)
app.use('/api/habits', require('./routes/api/habits'));

// mount "catch-all" route
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// configure to use port 3001 to avoid collision w react's dev server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});