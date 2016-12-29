module.exports = {
 entry: './src/index.js',
 output: {
     path: './dist',
     filename: 'vue-rut.js',
     libraryTarget: 'umd'
 },
 module: {
     loaders: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
     }]
 }
}
