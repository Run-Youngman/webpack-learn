/*
 * @Author: your name
 * @Date: 2022-01-20 19:43:13
 * @LastEditTime: 2022-02-07 18:35:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-learn\webpack.config.js
 */
const path = require('path');
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // mode: "development",
    mode: "production",
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
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
        })
    ]
}

