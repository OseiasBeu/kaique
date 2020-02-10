const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teste', {useNewUrlParser: true, useUnifiedTopology: true} /*{ useUnifiedTopology: true }, { useMongoClient: true}*/);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = mongoose; 