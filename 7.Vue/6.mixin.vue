<!-- 
  混入 mixin

  组件对象中
  mixins: [组件对象] 
    如果组件中没有数据，则使用混入的数据
    组件data和mixin优先级高于子组件
    生命周期函数，先执行子组件中的，再执行父组件中的

  全局混入
  app.mixin()


  options
  vue的所有组件在没有执行时都会挂载到$options中

  修改自定义属性的覆盖策略

  app.config.optionMergeStrategies.number = (mixinVal, appValue) => {
    return mixinVal || appValue;
  }

  mixin的维护不高
  
 -->


<!-- 
  
  自定义指令 directive
  目的： 实现一些功能的复用
  app.directive('name', {
    mounted(el, binding) {
      el.focus();
    }
    update(el, binding) { console.log(binding.value)}
    binding的值通过指令传递
  })

  指令接收的对象等价于 (el, bingding) => {}

  然后通过v-name指令挂载到元素中

  也可以局部使用 directives: { 'name': { 生命周期函数 } }

 -->

 <!-- 
  传送门
  <teleport to="body">
    将里面的元素挂载到其他元素中
  </teleport>
  使用场景：给整个页面添加一层蒙板
  -->