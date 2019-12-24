const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: "/",
    outputDir: "dist",
    devServer: {
        port: 8089,
        open: true,
        // proxy: {
        //     '/dev': {
        //         target: "",
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '/dev': ""
        //         }
        //     }
        // }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        resolve: {
            alias: {
                "@": resolve('src')
            }
        }
    },
    chainWebpack(config) {
        config.output.filename('[name].[hash].js').end()
    }
}
