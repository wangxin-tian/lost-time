#

## 基础梳理

## 认知

css:层叠样式表（Cascading style sheets)

## 基础选择器

1、标签选择器

> 通过标签名，找到页面中所有这类标签，设置样式

2、类选择器

> 通过类名，找到页面中所有带有这个类名的标签，设置样式

3、id选择器

> 通过id属性值，找到页面中带有这个id属性值的标签，设置样式

4、通配符选择器

> 找到页面中所有的标签，设置样式

## 字体和文本样式

| 字体样式 | 描述 |  
| :--: | :--: |  
| font-family | 用于设置元素的字体系列 |  
| font-size | 用于设置字体的大小 |  
| font-weight | 用于设置字体的粗细 |  
| font-style | 用于设置字体的风格，如斜体**italic** |  
| line-height | 用于设置文本行之间的高度 |  
| letter-spacing | 用于设置字符间距 |  
| word-spacing | 用于设置单词间距 |  
| text-decoration | 用于设置文本装饰效果，如下划线、上划线等 |  
| text-transform | 用于设置文本的大小写转换方式 |  
| text-align | 用于设置文本的水平对齐方式 |  
| text-indent | 用于设置段落的首行缩进效果 |  
| vertical-align | 用于设置文本的垂直对齐方式 |

**常见字体系列:**

无衬线字体（sans-serif)
特点：文字笔画粗细均匀，并且首尾无装饰
场景：网页中大多采用无衬线字体
常见该系列字体：黑体、Arial

衬线字体（serif)
特点：文字笔画粗细不均，并且首尾有笔锋装饰
场景：报刊书籍中应用广泛
常见该系列字体：宋体、Times New Roman

等宽字体（monospace)
特点：每个字体或文字的宽度相等
场景：一般用于程序代码编写，有利于代码的阅读和编写
常见该系列字体：Consolas、fira code

## 颜色常见取值

| 颜色表示方式 | 表示含义 | 属性值 |  
| :--: | :--: | :--: |  
| 关键词 | 预定义的颜色名 | red、green、blue、yellow... ... |  
| rgb表示法 | 红绿蓝三原色，每项取值范围：0~255 | rgb(255,255,255),rgb(255,0,0)... ... |  
| rgba表示法 | 红绿蓝三原色+a表示透明度，取值范围是0~1 | rgba(255,255,255,0.5),rgba(255,255,0,0.3) |  
| 十六进制表示法 | #开头，将数字转换成十六进制表示 | #000000、#ff0000、#e92322、简写：#000、#f00 |

## CSS进阶学习

## 选择器

复合选择器

> 后代选择器：空格
> 子代选择器：>

并集选择器

> 并集选择器：，

交集选择器

> 交集选择器：紧挨着

伪类选择器

> 选择器：hover{css}

Emmet语法

| 记忆 | 示例 | 效果 |  
| :---: | :---: | :---: |  
| 标签名 | div | `<div></div>` |  
| 类选择器 | .red | `<div class="red"></div>` |  
| id选择器 | #one | `<div id="one"></div>` |  
| 交集选择器 | p.red#one | `<p class="red" id="one"></p>` |  
| 子代选择器 | ul>li | `<ul><li></li><ul>` |  
| 内部文件 | ul>li(我是li的内容) | `<ul><li>我是li的内容</li></ul>` |  
| 创建多个 | ul>li*3 | `<ul><li></li><li></li><li></li></ul>` |  
| 创建div同级标签 | div+p | `<div></div><p></p>`（注：原文没有具体内容，这里假设是div和p标签并列） |  
| 创建父子级 | div>p | `<div><p></p></div>`（注：原文没有具体内容，这里假设是div包裹着p标签） |

## 背景

| 样式名称 | 描述 | 常用属性 |  
| :--: | :--: | :--: |  
| `background-color` | 设置元素的背景颜色 | `color` |  
| `background-image` | 设置元素的背景图片 | `url` |  
| `background-repeat` | 设置背景图片是否重复以及重复方式 | `repeat`, `repeat-x`, `repeat-y` |  
| `background-position` | 设置背景图片的位置 | `top`, `bottom`, `left`, `right`, `center` |  
| `background-size` | 设置背景图片的大小 | `auto`, `cover`, `contain` |  
| `background-attachment` | 设置背景图片是否随页面滚动 | `scroll`, `fixed`, `local` |  
| `background-clip` | 设置背景的绘制区域 | `border-box`, `padding-box`, `content-box` |  
| `background-origin` | 设置背景图片的定位区域 | `padding-box`, `border-box`, `content-box` |  
| `background-break` | 设置如何打破背景图片 | `auto`, `each-box`, `continuous` |

## 块行

1、 **行内元素**：不换行；设置宽高不生效；尺寸和内容的大小相同

代表标签：a、span、b、u、i、s、strong、ins、em、del... ...

2、 **行内块元素**：一行显示多个，可以设置宽高

代表标签：input、textarea、button、select... ...

3、 **模式转换**

| 属性 | 效果 | 使用频率 |  
| :---: | :---: | :---: |  
| display:block | 转换成块级元素 | 较多 |  
| display:inline-block | 转换成行内块元素 | 较多 |  
| display:inline | 转换成行内元素 | 较多 |

拓展：

1. 块级元素一般作为大容器，可以嵌套：文本、块级元素、行内元素、行内块元素等等... ...
2. 但是：p标签中不要嵌套div、p、h等块级元素
3. a标签内部可以嵌套任意元素，但是：a标签不能嵌套a标签
4. img标签有行内块元素特点

## 特性

继承性
层叠性

优先级：继承 < 通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < ！important

:* 实际开发中不建议使用!important

## 权重叠加计算

公式：如果第一级权重相同，此时再去比较第二级数字，如果比较出来了，之后的统统不看

## 盒子模型

1、 **盒子**

内容区域的宽度和高度
边框（border)
内边框（padding)
外边框（margin)

元素的宽度和高度设置为内容加上 padding 的总和：`box-sizing: border-box`

2、 **边框**：边框属性整理  
  
| 作用 | 属性名 | 属性值 |  
| :---: | :---: | :---: |  
| 定义边框的样式 | `border-style` | `solid`, `dotted`, `double`, `dashed` 等 |  
| 定义边框的宽度 | `border-width` | 固定的 `px` 值，或相对值如 `thin`, `medium`, `thick` 等 |  
| 定义边框的颜色 | `border-color` | 颜色名称、`RGB`, `RGBA`, `HEX` 等格式 |  
| 定义边框的圆角程度 | `border-radius` | 固定的 `px` 值或相对值如 `10px` 等 |  
| 简化边框属性定义 | `border` | 例如：`border: 1px solid black;` |

3、 **清楚默认的内外边距**
场景：浏览器会默认给部分标签设置默认的margin和padding，但一般在项目开始前需要先清除这些标签默认的margin和padding，后续自己设置

比如：body标签默认有margin:8px
比如：p标签默认有上下的margin
比如：ul标签默认由上下的margin和padding-left

4、 **外边距折叠现象**

合并：避免
塌陷：给父元素设置border-top或者 padding-top; 或者进行块级格式化; 行内块元素;

## 伪类选择器

优势：减少对于HTML中类的依赖，有利于保持代码整洁
| 选择器 | 说明 |  
| :---: | :---: |  
| `E:first-child{}` | 匹配父元素中第一个子元素，并且是E元素 |  
| `E:last-child{}` | 匹配父元素中最后一个子元素，并且是E元素 |  
| `E:nth-child(n{})` | 匹配父元素中第n个子元素，并且是E元素 |  
| `E:nth-last-child(n{})` | 匹配父元素中倒数第n个子元素，并且是E元素 |

n可以组成常见公式
| 功能 | 公式 |  
| :--: | :--: |  
| 偶数 | 2n、even |  
| 奇数 | 2n+1、2n-1、odd |  
| 找到前5个 | -n+5 |  
| 找到从第5个往后 | n+5 |

## 伪元素

伪元素：一般页面中的非主体内容可以使用伪元素

:* 必须设置content属性才能生效

:* 伪元素默认是行内伪元素

## 浮动

float: left | right;
`.clearfix{ /*清除左右两侧浮动的影响*/ clear: both; }`
缺点：会在页面中添加额外的标签，会让页面的HTML结构变得复杂

: **补充写法**：项目中使用，直接给标签加类即可清除浮动

```css
/*单伪元素清除浮动*/
.clearfix::after{
    content: '';
    /*伪元素添加的标签是行内，要求块*/
    display: block;
    clear: both;
    /*伪类兼容性*//*补充代码：在网页中看不到伪元素*/
    height: 0;
    visibility: hidden;
}
```

也可以通过给父元素设置overflow:hidden，来清除浮动
