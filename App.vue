<!--
 * @Author: your name
 * @Date: 2022-02-10 16:17:22
 * @LastEditTime: 2022-02-10 16:44:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-learn\App.vue
-->
<template>
  <div id="app"> <!-- 会替换模板中的id="app"的节点 -->
    <!-- <Login msg="Welcome to Your Vue.js App"/> -->
    <div>name:<h1>{{ name }}</h1></div>
    <div>age:<h1>{{ age }}</h1></div>
    <button>添加年龄</button>
    <button>新增年龄</button>
    <button>删除年龄</button>
    <button>打印年龄</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
      return {
          name: '张三',
          age: '16'
      }
  },
  methods: {
    // dispatch actions    commit mutations
    edit() {
        console.log('修改年龄')
    },
    addAge() {
        console.log('新增年龄')
    },
    deleteAge() {
        console.log('删除年龄')
    },
    print() {
        console.log('打印年龄')
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e70c79;
  margin-top: 60px;
}
</style>
