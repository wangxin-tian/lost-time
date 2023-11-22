# jQuery基础

1. 核心函数：`$()`
2. 核心对象：`即核心函数的返回对象`

## 一、核心函数

1. `$(‘选择器’).css(’属性’, ‘值’);`
2. 特殊选择器：
`:even :odd :first :last
 :lt(index) :gt(index) :eq(index)` 
`:not(选择器)`
3. 内容筛选：
`:contains(text)`
`:has(标签)`
`:empty :parent` :parent 与 :empty相反
`[属性？=“值”]` ？可以是^$|~分别表示开始、结束、或者、包含
`:hidden` 
`:nth-child(index)`
4. 表单选择器
类型选择`:type值` 
状态选择`:状态值`
5. 工具方法
**$.each(arr, (index, value) => {}) 通用迭代
$.trim(str) 去除字符串前后的空格
$.type(att) 类型判定
$.isArray(arr) 数组类型判定
$.isFunction()**
6. ajax请求
**$.ajax({ url, type, data, dataType, success, error });**
$.get(url, data, callback);
$.post();

## 二、核心对象

1. 修改属性值，值参数可省略，读写一体
$().attr(’属性’, ‘值’);
$().prop(’属性’, ‘boolean’);
$().val(‘值’); 给元素赋值
2. 修改样式
$().css();
$().addClass();
$().removeClass();
$().toggleClass();
3. 尺寸
$().width() 
width, height, innerWidth, innerHeight, outerWidth, outerHeight
4. 位置
$().offset().left  相对于页面 left, top
$().position().left  相对于父元素 left, top
$().scrollLeft(指定位置); 读写合一
$().scrollTop() 
5. 操作
$().text(str); 读写合一
$().html(str); 读写合一, 写入标记语言
$().append(str);
$().appendTo($对象);
$().prepend();
$().prependTo($());
$().after(str);
$().before(str);
$().insertAfter();
$().insertBefore();
$().empty(); 删除匹配元素的子元素
$().remove(); 删除匹配元素
$().replaceWidth(); 
$().replaceAll($())
$().clone() 拷贝
$().parent()
$().children()
$().prevAll() 前面所有兄弟 
$().next()
$().nextAll()
$().siblings(); 所有兄弟
6. 遍历
$().each( (index, value) => {})
7. 筛选
$().first()
$().last()
$().eq(index)
$().not($())
$().filter(selector | callback | element | $() );
8. 事件
$(window).resize(callback)
$().scroll(callback)
$().on(’事件名称’, callback) 事件绑定
$().off() 同on事件移除
$().delegate( selector, ‘事件名称’, callback ) 事件委托
$().undelegate(‘事件名称’)
9. 事件对象 

> 对象属性名称	对象属性描述
event.currentTarget	当前执行的DOM元素。
event.target	触发事件的DOM元素。
event.pageX	相对于页面的左上角。
event.pageY	相对于页面的顶部。
event.clientX	相对于视口的左上角。
event.clientY	相对于视口的顶部。
event.offsetX	相对于事件元素左上角。
event.offsetY	相对于事件元素顶部。
event.key	键盘的按键信息。
event.preventDefault()	阻止事件默认行为。
event.stopPropagation()	防止事件向外冒泡。
> 
1. 表单事件
**callback中可以获取到$(this)**
$().focus(callback); 焦点触发
$().blur(callback); 失去焦点触发
$().change(callback)
$().select(callback)
$(’form’).submit(callback)
2. 鼠标事件
$().click(callback)
$().dblclick(callback)
$().mousedown(callback)
$().mouseup(callback)
$().mouseenter(callback) 鼠标进入目标元素
$().mouseleave(callback) 鼠标移出
$().mouseover(callback) 鼠标进入，会冒泡到后代
$().mouseout(callback)
$().mousemove(callback)
$().hover(mouseenter, mouseleave);
3. 键盘事件
$().keyup(callback);  可以拿到event.key
$().keypress(callback)
$().keydown(callback)
4. **动画**
$().hide()
$().show()
$().toggle()
$().fadeln() 淡入
$().fadeOut()
$().fadeToggle()
$().slideDown() 滑动显示
$().slideUp()
$().slideToggle()
$().animate()
$().stop()

## 三、插件扩展

$.extend({ name: function1 … })

参考：[JQuery](http://jquery.asprain.cn/)