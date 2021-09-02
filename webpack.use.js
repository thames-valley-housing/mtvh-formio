const path = require('path');
const config = require('./webpack.config.js');
config.entry = path.join(path.resolve(__dirname, 'lib'), 'use.js'),
config.mode = 'production';
config.output.filename = 'mtvh-formio.use.min.js';
module.exports = config;
