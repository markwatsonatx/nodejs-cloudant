module.exports = {
    entry: "./cloudant.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json"}       ]
    }
};