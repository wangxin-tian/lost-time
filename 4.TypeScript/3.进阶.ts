/*

  if 条件的语义可以抽样成方法

  类型守卫
    : shap is Square
    帮助避免类型不一致的情况

  函数重载
    使用后可以检测出无法重载的函数

  函数签名

  对象的索引签名
  type personDirection = {
    [username: string]: person
  }

  副作用
    输入后不能确定一个输出
    effect: ajax dom console.log react:修改state，生命周期

  readonly

  双重断言
    as any as person

  常量断言
    as const
    使得任何原始类型变量成员都变成readonly，甚至是数组
    对于string无法映射字面量类型可以使用常量断言

  this
    函数中使用this关键词时，可以在参数列表的第一个值上确定this的类型
    function(this:{value:string}) {}

  typeof
    type Point = typeof center

  keyof

  使用后算数据前会重新进行类型匹配
  提取类型，
  类型索引  :Data['key']  
          如果上面的值是一个数组，想要匹配数据
          :Data['key'][0] 填默认0即可

  类型映射
      type ReadonlyPoint = {
        readonly [key in keyof Point]: number
      }
      export Readonly<T> = {
        readonly [key in keyof T]: T[key]
      }
      因为Readonly已经是内嵌的标准，所以需要用export

  映射修饰符
      type Mapped<T> = {
        -readonly [key in keyof T] -?: T[key]
      }
      -readonly去除T中原本存在的readonly修饰符
      +默认缺省

      局部类型映射
      Partial

      update(next: Partial<T>) = {
        this.current = { ...this.current, ...next }
      }
*/