// entry -> output
const path = require('path');

console.log(path.resolve(__dirname,'public'));

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  }
};
