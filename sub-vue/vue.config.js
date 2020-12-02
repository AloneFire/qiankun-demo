const path = require('path')
const { name } = require('./package')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        compress: true,
        port: 4300,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    publicPath: `//localhost:4300`,
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        output: {
            // 把子应用打包成 umd 库格式(必须)
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
}