# Sass基础

1. 文件名后缀 scss
2. **`语法`**
3. **语法：**
 $变量名：样式值；
4. **使用：**
 $变量名；
5. 以$符号开头，后跟变量名
6. 多个单词，变量名以-分割，如：$theme-color
7. 变量写在#{}中以镶嵌入字符串
8. `**嵌套**`
9. **选择器嵌套
  子元素在父元素样式的一对大括号{}内 如：ul { li { } }**
10. 选择器嵌套得出的css样式相当于后代选择器一样
11. **伪类嵌套
  语法:**
  &:hover { }
12. 把&理解为它是&外面的所有父选择器
13. **`混合mixin`**
14. **语法 - 没有参数不加括号**
  @mixin name ($param1，$param2， ...) { css样式 }
15. **使用:**
 @include name ( 样式1，样式2，…) ；
16. ****`继承 extend`****
17. **语法:**
 @extend 元素选择器；
18. 继承要慎用，被继承相关的元素的样式也会继承过去
19. **`导入 import`**
20. **语法：**
 @import “文件名”
21. ****`注释`****
22. 单行注释： / / css文件里不会显示 压缩方式的css不会显示
23. 多行注释： /**/ css文件里会显示 压缩方式的css不会显示
24. 强制注释：/* ! */ css文件里会显示 压缩方式的css会显示
25. ****`数学运算`****
26. 包含+、-、*、/(加减乘除)
27. css会将 / 认为是合法的，所以需要加括号
28.  *** /** *不*能两个都带单位
29. ****`条件语句`****
30. @if 条件语句 {
} @ else if 条件语句 {
} @else
31. ****`循环`****
32. 语法一：
@for $index from 开始值 through 结束值 { }
从开始值开始，到结束值结束，包含结束值  index表示 1， 2，...结束值
33. 语法二：
@for $index from 开始值 to 结束值 { }
从开始值开始，到结束值结束，不包含结束值  index表示 1， 2，...结束值-1
34. 语法三：
$list: success fail warning;
@each $index in $list { }
35. 语法四：
@while 条件 { }
36. `自定义函数`
37. @function name($param1，$param2，...) {
   @return ;
}
38. sass中文文档：[https://www.sass.hk/docs/](https://www.sass.hk/docs/)