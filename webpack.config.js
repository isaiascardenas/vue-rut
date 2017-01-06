module.exports = {
 entry: './src/vue-rut.js',
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
 },
 resolve: {
   alias: {
     'vue$': 'vue/dist/vue.common.js'
   }
 }
}
