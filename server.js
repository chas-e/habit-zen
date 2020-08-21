// require modules
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const favicon = require('serve-favicon');
const morgan = require('morgan');



// create app
const app = express.app();

// configure app
require('dotenv').config();
require('./config/database');

// mount middleware
app.use(morgan('dev'));
app.use(express.json());
// app.use(favicon(path.join(__dirname, 'build, favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')));



// mount API routes here, before the "catch-all" route


// mount "catch-all" route
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'indexedDB.html'));
// });



// configure to use port 3001 to avoid collision w react's dev server
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});