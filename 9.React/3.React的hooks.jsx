/* 
hooks 
  给组件加上状态 轻量

  useState
  useEffect 清理函数，处理一些副作用
    ()=>{
      setLoading()
      request
      catch:
        setError()
      handle
      setLoading()
    }
    []空依赖只触发一次，即初始化时
  useContext 跨组件的数据传递
    
  useReducer 处理全局状态
  useCallback 处理回调副作用
  useRef 返回引用对象

  
  setState({接收对象类型} | (preState, preProps)=>{ return {} }, ()=>{}) 异步

  createContext
  <appContext.Provider value={contextData}>
  <appContext.Consumer>{(value) => {}}</appContext.Consumer>
*/