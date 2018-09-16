// utils
const paths = require('./paths');

module.exports = {
    stats: 'minimal',
    overlay: true,
    useLocalIp: true,
    host: '0.0.0.0',
    contentBase: paths.APP_PUBLIC,
    publicPath: paths.PUBLIC_PATH,
    watchContentBase: true,
    watchOptions: {
        ignored: paths.NODE_MODULES
    },
    historyApiFallback: {
        disableDotRule: true
    }
};
