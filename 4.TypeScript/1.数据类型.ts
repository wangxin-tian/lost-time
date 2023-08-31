/* 
  

  TS 类型推演 开发编译报错 支持js最新特性

  配置开发环境
    https://www.tsdev.cn/tutorials/typescript-in-5-minutes.html
    node typescript

  tsc name.ts
  node name.js

  管理 ts
    dev:
      lite-server 开发环境的轻量级服务器      lite-server命令
        根据根目录index文件部署

  工作流
  ts -> js 

  数据类型
    基本类型
      number
        +num +使得字符串转化成数字
      string
      array
      enum 有初始值则取初始值，否则取index 配合switch非常强大
      tuple 元组 特殊的数组(固定长度 固定类型)  bug push
      boolean
      null
      undefined 变量没初值, 即 return;
      object
      void  不存在
      never 函数永远执行不完  即： throw 或者 无限循环
      any 目的快速开发
      unkown 保证类型安全
    高级类型
      union 组合类型  特殊变量，拥有可选的类型 : number | string
      Literal 预定义类型  字面量类型 : 0 | 1 | 3
        与组合类型联合使用
      Nullable 可控类型 
    类型断言 Type Assertions
      任意类型不能字符串方法，但如果进行字符串赋值需要使用，就必须给它断言
      (<string>message).endsWidth();
      (message as string).endsWidth();
      

    函数的可选和默认参数都必须在末尾
*/