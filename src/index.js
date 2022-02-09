/*
 * @Author: your name
 * @Date: 2022-01-20 15:56:47
 * @LastEditTime: 2022-02-09 09:38:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-learn\index.js
 */
// import _ from 'lodash';
// import Vue from 'vue';  为什么这样不行，应该是没引入转换es6的模块，后面继续
const Vue = require('vue');
const Index = {
    data() {
        return{
            message: 'Hello @Vue!'
        }
    }
}
Vue.createApp(Index).mount('#app')
