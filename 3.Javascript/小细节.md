# JavaScript-细节

```js

let b = 123;

console.log( b.__proto__ === Number.prototype ); // true

/**
 * new 一个Number，它的类型是obj
 */

/**
 * 正则表达式可以理解，但是不要自己写，找完整性高的作为正则验证
 */

/**
 * 轮播图的变换中，图片的长度如果使用的是百分比就不能通过left调位，而是要用translate滑动
 */

/**
 * a标签的href中标上#或者javascript:;就不会刷新页面了
 * 滑动到边界时需要暂时的关掉transform和transition
 * 
 * 同步的对某个样式属性做多次处理，计算机会忽略掉前面的样式修改
 * 方法：将后面的样式修改包裹在一个0s的计时器中，(非常有用)
 */

/**
 * 如果js文件中使用了es6的模块导入，index页面中script标签引入文件时需要加type="module"
 */

/**
 * babel: js的编译工具，单靠它是不靠谱的
 *        需要配合webpack和其他模块
 *        babel虽然编译大部分语法，但是对于一些es6新增的对象它本身是不会转的，
 *        需要借助其他模块编译一些新的语法，
 *        需要借助webpack编译成模块语法
 */

```
