// Webpack configuration file
 var webpack = require('webpack');
 var path = require('path');
 var bower_dir = path.join(__dirname, 'bower_components');
 var node_modules_dir = path.join(__dirname, 'node_modules');

 var config = {
   addVendor: function (name, path) {
     this.resolve.alias[name] = path;
     this.module.noParse.push(path);
   },
   context: __dirname,
   entry: {
	app: ['webpack/hot/dev-server', './app/main.js']
   },
   output: {
     publicPath: '/',
     path:  './build',
     filename: 'bundle.js'
   },
   resolve: {
     alias: {}
   },
   module: {
     noParse: [],
     loaders: [{
       test: /\.js$/,
       loader: 'jsx-loader',
       exclude: [bower_dir, node_modules_dir]
     }, {
       test: /\.css$/,
       loader: 'style-loader!css-loader'
     }]
   },
   plugins: [
     new webpack.optimize.CommonsChunkPlugin('app',null,false)
   ]
 };

 config.addVendor('react', path.resolve(bower_dir, 'react/react.min.js'));
 
 module.exports = config;
