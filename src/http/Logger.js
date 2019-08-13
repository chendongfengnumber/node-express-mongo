const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'my_express' });

module.exports = logger;
