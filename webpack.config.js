module.exports = {
    entry: "./cloudant.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json"}       ]
    },
    node: {
           console: true,
           fs: 'empty',
           net: 'empty',
           tls: 'empty',
           __filename: true,
           __dirname: true
       }
};