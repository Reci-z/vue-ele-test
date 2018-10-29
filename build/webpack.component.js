const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        alert: "./package/alert/index.js"
    },
    output: {
        path: path.resolve(process.cwd(), "./lib"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_moudles/
            },
            {
                test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
                loader: 'url-loader',
                exclude: /node_moudles/
            },
            {
                test: /\.(gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                exclude: /node_moudles/
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: "development"
}