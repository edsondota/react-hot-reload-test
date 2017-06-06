var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        inline: false,
        port: 3000,
        hot: true
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                'presets': ['es2015', 'stage-0', 'react'],
                'plugins': ['react-hot-loader/babel']
            },
            include: path.join(__dirname, 'src')
        }]
    }
};
