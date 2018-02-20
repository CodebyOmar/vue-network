const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin")

const config = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },

        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options : {
            loaders: {
              css: {
                loader:"css-loader"
              }
            }
          }
        }
        
      ]
    },

    plugins: [
        new UglifyJsWebpackPlugin()
    ]
}


module.exports = config;