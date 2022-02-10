<!--
 * @Author: your name
 * @Date: 2022-02-10 16:13:05
 * @LastEditTime: 2022-02-10 16:23:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-learn\src\module\twtterlist.vue
-->
<!--  -->
<template>
  <div>
    <a-button type="primary" @click="addAriticle">发布</a-button>
    <template v-for="(metaInfo, index) in metaInfos" :key="index">
      <article class='tweet' >
        <!--代表文章类内容，语义化-->
        <img class="avatar" src="http://www.gravatar.com/avatar" alt="Name" />
        <div class="content">
          <div class="author-meta">
            <span class="handle">{{metaInfo.handle}}</span>
            <span class="name">{{metaInfo.name}}</span>
            <span class="time">{{metaInfo.time}}</span>
          </div>
          <p>{{metaInfo.signature}}</p>
          <!--表示一个段落-->
          <ul class="actions"><!--无序列表，可以存放列表信息，原则上讲，一个语义化元素即使语义再不贴切，也比div强，div只表示一块区域-->
                <li>
                    <button>
                    <i
                        class="fas fa-reply"
                        aria-hidden="true"
                    ></i>
                    <span class="sr-only">Reply</span>
                    </button>
                </li>
                <li>
                    <button>
                    <i
                        class="fas fa-retweet"
                        aria-hidden="true"  
                    ></i>
                    <span class="sr-only">Retweet</span>
                    </button>
                </li>
                <li>
                    <button  @click="like">
                    <i
                        class="fas fa-heart"
                        aria-hidden="true"
                    ></i>
                    <span class="sr-only">Like</span>
                    </button>
                </li>
                <li>
                    <button>
                    <span aria-hidden="true">...</span> <!--让屏幕阅读器忽略此图标，避免给残障人士产生混淆的输出内容-->
                    <span class="sr-only">More Actions</span><!--font内置，让元素在你面前隐身，但是屏幕阅读器可以读取到，帮助残障人士更好的使用网站-->
                    </button>
                </li>
                </ul>
        </div>
      </article>
      
    </template>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
    },
    data() {
      //这里存放数据
      return {
        metaInfos: [
        {
          handle: '@handle',
          name: '走起8少年',
          time: '3h ago',
          signature: 'to be a better man!'
        },{
          handle: '@handle',
          name: '走起8少年',
          time: '3h ago',
          signature: 'to be a better man!'
        },{
          handle: '@handle',
          name: '走起8少年',
          time: '3h ago',
          signature: 'to be a better man!'
        },
        ]
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
  }
</script>
<style lang='scss' scoped>
  //@import url(); 引入公共css类
  .tweet {
    display: flex;
    align-items: flex-start;
    border: 1px solid #ccc;
    padding: 10px;
    /*除了“不合群”的按钮都会继承该字体字号*/
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  .content {
    flex: 1;
    /*默认0 1 auto,这样是1 1 0%,第三个值用来计算主轴剩余空间
    ，为0%则不将本来大小机算在内，auto为占据项目本来大小，机算剩余空间要减去该部分*/
    text-align: left;
  }
  .avatar {
    margin-right: 10px;
    width: 48px;
    border-radius: 50%;
  }
  .actions {
    display: flex;
    padding: 0;
    /*因为li都有默认的padding，去掉小圆点后，同时去掉padding*/
  }
  .actions li {
    list-style-type: none;
    margin-right: 30px;
  }
  p, ul { /**消除掉p,ul默认的margin属性 */
    margin: 0;
}
.author-meta, p {
    margin-bottom: 1em; /*1em等于body标签上以像素为单位字号的大小，body标签默认字号16px,这里可表示我想让文字
    下方的margin和文字的高度一样，不论文字高度多少*/
}
.name {
    font-weight: 600;
    margin-right: 5px;
}
.handle, .time {
    color: #657786;
}
.handle::after {
    content: " \00b7"; /*Unicode字符，还可以是文字，用来实现标记（badge）,消息提醒很合适*/
    margin-right: 5px;
}
.actions button {
  border: none;
  color: #657786;
  font-size: 16px;
  cursor: pointer;
}
.actions button:hover {
  color: #1da1f2;
}
</style>