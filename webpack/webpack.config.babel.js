require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx']
});

module.exports = require('./webpack.config.js');
