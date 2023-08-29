<!-- 
  Non-prop属性
  不使用props接收父组件传的属性，
  或者使用inheritAttr: false阻绝
  最终html显示元素中会出现属性名称

  这些属性会被$attr接收
  子组件需要用v-bind的属性绑定$attr



  prop属性
  属性传值时如果使用-拼接，接收时要转成驼峰
  props: { 
    propName: 数据类型 | {
      type: 数据类型,
      required: true,
      default: () => {},
      validator: function(value) {}
    }
  }
  props接受的的一堆属性如何来自同一个对象，
  则可以使用数据绑定直接绑定对象，语法：v-bind=""

  单向数据流，
  子组件无法修改来自父组件的参数
  目的：减少组件之间的耦合

  app.component()全局组件

  components: {} 
      局部组件使用常量储存，性能较高，
      需要在components中注册

  获取dom
    使用ref this.$refs.name
    需要挂在后使用 mounted

  跨多个组件传递
  provide: {}
  injecte: ['']

  动态组件 配合缓存标签,否则会丢失数据
  <keep-alive>
    <component :is="current"/>
  </keep-alive>
 
  异步组件
  app.component('commonItem', Vue.defineAsyncComponent(()=> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve({
          template: `<div></div>`
        })
      }, 500);
    })
  }))
  

 -->
