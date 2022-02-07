/*
 * @Author: your name
 * @Date: 2022-01-20 17:27:45
 * @LastEditTime: 2022-01-20 19:37:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-learn\vue.config.js
 */
const path = require('path');

module.exports = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
