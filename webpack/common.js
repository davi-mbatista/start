// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getStyleLoader = () => {
    return process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader;
};

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                enforce: 'pre',
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [getStyleLoader(), 'css-loader', 'postcss-loader']
            }
        ]
    }
};
