'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        example: './example/app.js',
        gamesservice: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public_html/build'),
        publicPath: '/public_html/build/',
        filename: '[name].bundle.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        // libraryExport: 'default',
        library: 'gamesservice'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: ['public_html/assets/*.js', 'node_modules'],
        // poll: 5000,
    },
};