/*
 * @Author: your name
 * @Date: 2022-01-20 19:43:13
 * @LastEditTime: 2022-02-10 16:28:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-learn\webpack.config.js
 */
const path = require('path');
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: "development",
    // mode: "production",
    performance: {
        maxEntrypointSize: 400000,
        maxAssetSize: 300000
    },
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    },
    devServer: {
        port: 3000,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: process.env.NODE_ENV
        //     }
        // }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: __dirname + '/index.html',
                    to: __dirname + '/dist'
                }
            ]
        }),
        new VueLoaderPlugin()
    ]
}

