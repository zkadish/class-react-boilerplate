var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: true
        })
    ],
    devtool: 'cheap-source-map',
    devServer: {
        host: '0.0.0.0',
        contentBase: 'dist',
        disableHostCheck: true
    }
}