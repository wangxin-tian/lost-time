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
-->

