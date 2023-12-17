# Nvue性能开发

介绍：

1. weex是app内置的原生渲染引擎，以高效著称
2. 而app端使用vue，则使用web view渲染
3. 如果使用nvue，则使用weex渲染
4. 同时使用两种页面：首页使用nvue，二级页面使用vue
5. nvue也可以多端编译，但它的css写法受限，所以最好不要使用它开发app
6. nvue给weex提供了丰富的api使得能够使用它开发完整的APP
7. 同时扩展了排版，高斯模糊，绘制

编译模式：

1. 在manifest中设置weex编译模式和uniapp编译模式
2. nvue页面跳转与weex不同，仍需要遵循uni-app的路由模型
3. uniapp框架会给Nvue页面外层自动嵌套一个scroller容器，从而实现页面的自动滚动
4. 注意哈：
① 框架仅对nvue自动添加scroller容器，不会为组件添加
② 且倘若页面中已经有recycle-list组件，则不会添加scroller
③ 可以通过page.json中取消自动嵌套scroller容器

快速上手

1. 创建.nvue文件，在pages.json中注册
2. style中布局只支持flex
3. script中支持3种API，Nvue API、uni API、Plus API 
4. 共享数据：
① 通信事件uni.$on(’name’, fn); 和 uni.$emit(’name’, obj);
② vuex
③ [uni.storage](http://uni.storage) 可长久保存，如：登入状态

Nvue的注意哈

1. 不能使用v-show
2. 仅支持flex，且建议锁定方向
3. 文字内容请写在text标签中，防止影响变量的绑定
4. 布局不能使用百分比
5. 支持的css样式有限，但不影响
6. 不支持背景图，但可以使用image组件和层级来实现
7. 只能使用class选择器
8. 必须设置background-color
9. class绑定只支持数组语法
10. 避免使用圆角框
11. 没有bounce回弹效果
12. App.vue中定义的全局js变量不会在nvue页面中生效
13. 可以使用globalData和Vuex
14. 有些css样式不支持导致编译器报错，可以包裹在条件编译中
15. 不能再Style中引入字体，本地字体可以通过plus.io的api转换
16. nvue不支持ts
17. 建议使用原生导航栏，性能高