var path = require('path');
var rootPath = path.normalize(__dirname + '/../../../');
var mode = 'physics';

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://admin:adminpetsrescue@ds041871.mongolab.com:41871/petsrescue', // db: 'mongodb://localhost:27017/fixdb',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:adminpetsrescue@ds041871.mongolab.com:41871/petsrescue',
        port: process.env.PORT || 80
    }
};