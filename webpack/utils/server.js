// utils
const paths = require('./paths');

module.exports = {
    compress: true,
    overlay: {
        warnings: false,
        errors: true
    },
    contentBase: paths.APP_PUBLIC,
    publicPath: paths.PUBLIC_PATH,
    watchContentBase: true
};
