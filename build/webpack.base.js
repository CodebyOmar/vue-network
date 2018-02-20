const commonPaths = require("./common-paths")
const webpack = require('webpack')

const config = {
    entry: commonPaths.appEntry,
    
    output: {
        filename: 'VueNetwork.min.js',
        path: commonPaths.outputPath
    },

    plugins: [
        new webpack.ProgressPlugin()
    ]
}

module.exports = config;