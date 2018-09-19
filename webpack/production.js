// libs
const merge = require('webpack-merge');

// plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SizePlugin = require('size-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// utils
const common = require('./common');
const paths = require('./utils/paths');

module.exports = merge.smart(common, {
    mode: 'production',
    stats: 'errors-only',
    entry: {
        app: paths.APP_ENTRY_POINT
    },
    output: {
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].chunk.[chunkhash:8].js',
        path: paths.APP_BUILD_SRC,
        publicPath: paths.PUBLIC_PATH
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: paths.ROOT
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[chunkhash:8].css',
            chunkFilename: 'static/css/[id].[chunkhash:8].css'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.APP_HTML
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: 'static/report/index.html',
            generateStatsFile: true,
            statsFilename: 'static/report/stats.json',
            logLevel: 'error'
        }),
        new CopyWebpackPlugin([
            {
                context: paths.APP_PUBLIC,
                from: './**/*',
                to: './',
                ignore: ['*.html']
            }
        ]),
        new SizePlugin()
    ]
});
