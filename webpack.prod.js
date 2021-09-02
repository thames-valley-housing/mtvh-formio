const config = require('./webpack.config.js');
config.mode = 'production';
config.output.filename = 'mtvh-formio.min.js';
module.exports = config;
