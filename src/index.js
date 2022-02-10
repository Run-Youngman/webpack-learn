/*
 * @Author: your name
 * @Date: 2022-01-20 15:56:47
 * @LastEditTime: 2022-02-10 16:23:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-learn\index.js
 */
// import _ from 'lodash';
import {createApp} from 'vue';  //为什么这样不行，应该是没引入转换es6的模块，后面继续
import './index.css'
import App from '../App.vue'
createApp(App).mount('#app')
