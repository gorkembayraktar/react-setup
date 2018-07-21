let __path = require('path');
var htmlWebPack = require('html-webpack-plugin');
var htmlWebPackConfig = new htmlWebPack({
   template : 'src/index.html',
   filename : 'index.html',
   inject : 'body'
});
module.exports = {
    mode: 'development',
    entry : './src/main.js',
    output : {
        path: __path.resolve('/'),
        filename : 'bundle.js',
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                loader : 'babel-loader',
                exclude : '/node_modules/'
            },
            {
                test : /\.sass$/,
                loaders:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins : [htmlWebPackConfig]
};