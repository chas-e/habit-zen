// require mongoose, set up db shortcut var
const mongoose = require('mongoose');
const db = mongoose.connection;

// configure mongoose.connect
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

db.on('connected', () => {
    console.log(`MongoDB is connected to ${db.host}:${db.port}`);
});