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
                test: /\.(png|jpe?g|gif|svg)$/,
                exclude: /(node_modules)/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            }
        ]
    }
};
