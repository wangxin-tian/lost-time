<!--  
  :level="1"
  加冒号表示表达式，不加冒号则是字符串类型

  template -> render -> h -> 虚拟dom -> 真实dom -> 页面

  render() {
    const { h } = Vue;

    / /  虚拟dom 一个js表示的元素对象
    / /  
    / /   tagName: 'h1',
    / /   text: 'hello dell',
    / /   attributes: {}
    / /  }

    return h('h'+this.level, {虚拟dom的属性}, 
      this.$slots.default() ？节点内容 | 
      [
        this.$slots.default(),
        h()
      ] )
  }

  render()是写在子组件中的
-->