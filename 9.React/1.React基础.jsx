/*
  @type/---

  单向数据流
  虚拟dom   差量更新
  组件化


  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  JSX会被编译成React.createElement()对象
  而js中则要调用此api

  模块化css
    *.d.ts
      定义声明
      declare module "*.css" {
        const css: {[key: string]: string};
        export default css;
      }
    *.module.css

  props 和 state
  state是组件内部的数据 
    setState是异步操作
    不能依赖当前的state去处理另一个state
  props是组件外部的数据
    props是只读的


  箭头函数将在函数的外部绑定更高级别的关键词
  或者使用bind绑定关键词

  资源返回的数据类型不受控制
  违反前后端分离的原则
  不能为了使用type而放弃js的灵活

  
*/