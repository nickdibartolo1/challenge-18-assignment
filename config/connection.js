const mongoose = require('mongoose');



mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/social-network-API',
{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

module.exports = mongoose.connection;