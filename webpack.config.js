const baseConfig = require("./build/webpack.base");
const webpackMerge = require("webpack-merge");

module.exports = (env) => {
    console.log(env)

    const envConfig = require(`./build/webpack.${env.env}.js`)
    
    return webpackMerge(baseConfig, envConfig);
};