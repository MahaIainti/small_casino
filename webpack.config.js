var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './code/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
            },
            {
                test: /\.(png|jpg|)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(png|jpg|svg|)$/,
                loader: 'file?name=[path][name].[ext]'
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, './src'),
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
