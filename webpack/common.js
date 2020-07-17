const { paths, plugins } = require('./utils');

module.exports = {
    entry: {
        app: paths.APP_ENTRY_POINT
    },
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
            }
        ]
    },
    plugins: plugins.common
};
