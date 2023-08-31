<!--  
  compositionAPI 将代码聚合起来

  // 实例完全初始化之前的函数
  setup(props外部组件传过来的内容, context上下文) {
    / 初始化之前资源还没有放入this中
    / 所以不能使用this
    / setup返回的函数会暴露出去

    / 这里声明的变量是非响应式的
    return {
      name: ''
    }
  }

  this.$options.setup()
  watchEffect()

  const { ref } = vue;
  ref, reactive
  ref -> 使用了proxy代理使得变量成为一个响应式引用
         可以处理基础型的数据
  let name = ref('foo')
  reactive -> 处理非基础类型的数据
  const nameobj = reactive({value: 'foo'})

  readonly 只读

  toRefs(obj) 让对象的属性也具有响应式
  toRef(obj, 'key')


  context上下文 
  { 
    attrs 父组件传递的None-props,
    slots ,
    emit
  }

  setup 将数据和方法抽离成函数导出来

  computed get set

  watch 惰性执行 可以拿到当前值和原始值 同时监听多个内容
    watch (name 如果属性是reactive的对象中的属性要用箭头函数返回属性() => obj.name, (current, pre) => {}) 
    watch([ name1, name2], ([current, pre], [current, pre]) => {}, {  })

  watchEffect(() => {}) 立即执行 但如果没有对响应式的值的引用时不会做任何监听
    返回取消监听的函数 stop


  Effect 纯函数即固定的请求有固定的输出
    但如果使用到计时器之类的异步请求就是effect，

  onBeforeMount(fn(){})
  onMounted 挂载
  onBeforeUpdate 渲染之前
  onUpdate
  onBeforeUnmount 组件移除前
  unmounted 组件移除后
-->

