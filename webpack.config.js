const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
let cssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'index.[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new htmlPlugin({
            template: './src/index.html',
            title: 'test-25156'
        }),
        new cssPlugin({
            filename: 'index.[hash:8].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    cssPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: path.resolve('node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 9090
    },
    mode: 'production'
};