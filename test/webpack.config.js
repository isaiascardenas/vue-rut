module.exports = {
 entry: './test.spec.js',
 output: {
     path: './',
     filename: 'test.js',
     libraryTarget: 'umd'
 },
 module: {
    loaders: [{
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel-loader',
    }]
 },
 resolve: {
   alias: {
     'vue$': 'vue/dist/vue.common.js'
   }
 }
};
