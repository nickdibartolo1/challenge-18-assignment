const express = require('express');
const mongoose = require('mongoose');

const APP = express();
const PORT = process.env.PORT || 3001;

APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));
APP.use(express.static('public'))

APP.use(require('./routes'));

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/social-network-API',
{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);


app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));