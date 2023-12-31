# Less基础

1. `属性值`
语法：@变量名：值
使用：@变量名
2. `可嵌套`
3. 尽量用全局变量，避免无法复用
4. `选择器的名 或 属性名`
语法：@变量名：名称；
使用：@{变量名}
5. `作为URL`
，用“ ”将变量的值扩起来，
使用同样将变量以@{变量名}的方式使用
6. **`延迟加载`**
语法：
  @变量1：@变量2；
  @变量2:9%；
7. 定义一个变量两次时，只会使用最后定义的变量
8. `选择器的名 或 属性名`
9. ****`混合`****
10. 在less中定义的选择器类可以直接放入其他选择器类里面
11. 不带输出的混合，只要类的名字后面加上括号，就可以实现
12. 带伪类选择器的混合，语法：{&：选择器}
13. 带参数的混合，语法：类的名称（形参）{}
一个组合可以带多个参数，参数之间可以使用 分号 来分割
14. `arguments变量`
15. arguments变量表示可变参数，意思是形参从先到后的顺序
16. `混合中的变量的返回值`
17. `返回值：@类名`
18. `改变选择器的顺序&`
19. 如果将当前的选择器名字后面放在&，就会当前的选择器提到父级。
20. ****`运算` +-*/** 
21. ****`命名空间` 
将一些变量或者混合块一起打包起来，通过嵌套多层id或者class来实现**
22. `引入（importing）`

```jsx
@import "main.less";
@import (reference) "main.less";  //引用LESS文件，但是不输出
@import (inline) "main.less";  //引用LESS文件，但是不进行操作
@import (once) "main.less";  //引用LESS文件，但是进行加工，只能使用一次
@import (less) "index.css";  //无论是什么格式的文件，都把它作为LESS文件操作
@import (css) "main.less";  //无论是什么格式的文件，都把它作为CSS文件操作
@import (multiple) "../main.less";  //multiple，允许引入多次相同文件名的文件
@import (multiple) "../main.less";  //multiple，允许引入多次相同文件名的文件
```

end: **`函数库（function）`   [less函数手册](https://less.bootcss.com/functions/)**
