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
*/