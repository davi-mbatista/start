// libs
const merge = require('webpack-merge');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// utils
const common = require('./common');
const server = require('./utils/server');
const paths = require('./utils/paths');

module.exports = merge.smart(common, {
    mode: 'development',
    entry: {
        app: paths.APP_ENTRY_POINT
    },
    devServer: server,
    output: {
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].chunk.[chunkhash:8].js',
        path: paths.APP_BUILD_SRC,
        publicPath: paths.PUBLIC_PATH
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.APP_HTML
        })
    ]
});
