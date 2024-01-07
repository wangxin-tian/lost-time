# webGL基础

## 简单介绍

1. canvas画布 二维Canvas api 三维 web GL api
2. canvas.getContext(’webgl’);
3. canvas.getContext(’webgl2’);
4. webgl是绘图协议，结合html显示3d图像
5. 可实现功能：数据可视化（图表）、图形/ 游戏引擎、图形渲染、
                      地图、VR、场景展示、城市规划
6. 优势：内嵌在浏览器
7. 着色器是以字符串形式存储在js中
8. 开源框架的使用，避免兼容逻辑的麻烦
9. 常见的webGL框架：
three — webGL库
Babylon — 图像引擎
kick — 游戏引擎
clayGL — 3D应用
playCanvas — 网络游戏
WebGLStudio & Litescene — 图像编辑器
Luma — 数据可视化
A-Frame — AR

## 入门

1. 创建一个canvas标签，设置宽高
2. 添加文字“此浏览器不支持canvas”
3. document.getElementId(’canvas’)
4. ctx.getContext(’webgl’)
5. gl.clearColor(r,g,b,a);   0.0~1.0 重新附着颜色
6. gl.clear();   清空canvas 
三个参数：
gl.COLOR_BUFFER_BIT 清空颜色缓存 搭配gl.clearColor(r,g,b,a)
gl.DEPTH_BUFFER_BIT 清空深度缓冲区 搭配gl.clearDepth(1.0)
gl.STENCIL_BUFFER_BIT 清空模板缓冲区 搭配gl.clearStencil(0)
7. webGL中所有图行都要使用着色器实现
8. 着色器是让开发者自己编写程序，添加和修改渲染逻辑
9. 着色器分 ：
顶点着色器  位置节点控制  vec4(x,y,z,w齐次坐标)
片元着色器  片元颜色像素控制 vec4(r,g,b,a)
10. 着色器中必须存在main函数，使用参数必须一致 0.0
11. 创建着色器步骤：
① 创建着色器源码
② 创建着色器 gl.createShader(gl.VERTEX_SHADER | gl.FRAGMENT_SHADER)
③ 指定着色器源码 gl.shaderSource(着色器，着色器源码)
④ 此时依然没有使用着色器
⑤ 编译着色器 gl.compileShader(着色器)
⑥ 创建程序对象关联着色器 gl.createProgram(); program会实现实际的功能
⑦ 指定程序对象的顶点着色器和片元着色器gl.attachShader(程序对象，着色器)
⑧ 与webgl关联 gl.linkProgram(程序对象)
⑨ 使用程序对象 gl.useProgram(程序对象)
⑩ 执行绘制 gl.drawArrays(gl.POINT | gl.LINES | gl.TRIANGLES, 开始0, 数量1)
12. 缓冲区使用流程
① 创建缓冲区 gl.createBuffer()
② 绑定缓冲区 gl.bindBuffer(gl.ARRAY_BUFFER, 缓冲区)
③ 向缓冲区写入数据 gl.bufferData(gl.ARRAY_BUFFER, 数据, gl.STATIC_DRA
④ 将缓冲区分配给一个attribute变量
gl.vertexAttribPointer(attribute变量, 数据类型, 数据大小, 是否归一化, 偏移量)
⑤ 激活attribute变量 gl.enableVertexAttribArray(attribute变量)
⑥ 绘制 gl.drawArrays(gl.POINT | gl.LINES | gl.TRIANGLES, 开始0, 数量1)

## attributeb变量

1. 存储限定符attribute 类型vec4 名称aposition ;
2. 只能在顶点着色器中使用
3. gl.getAttribLocation(program, ‘aposition’) 方法返回存储地址
4. gl.vertexAttribf4(存储地址, x,y,z,w); 更改存储地址的值
5. gl.drawArray(program);

## uniform变量

1. 修改片元着色器数值
2. 片元着色器需要指定默认精度，而顶点着色器默认高精度
3. recision mediump | highp | lowp float
4. uniform vec4 uColor
5. gl.getUniformLocation(program, ‘uColor’);
6. gl.uniform4f(存储地址, r,g,b,a);  这里4f与vec4对应
7. 想要使用2f gl_FragColor的值需要使用vec4()转换函数
8. 顶点数据是特殊的，而片元数据是统一的

## 着色器通信

1. varying
2. 顶点着色器传递数据给片元着色器

## 冲顶点到图行流程

1. 顶点坐标装配成图形
2. 调整图行所有图元-光栅化，剔除透明部分，裁剪可视范围之外的部分
3. 绘制

## 添加背景图-使用纹理

通过顶点映射贴图

1. 创建纹理对象 gl.createTexture()
2. 反转图片y轴坐标 gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
3. 开启一个纹理单元 gl.activeTexture(gl.TEXTURE0); // 用于管理纹理对象
4. 绑定纹理 gl.bindTexture(gl.TEXTURE_2D | gl.TEXTRUE_CUBE_MAP, 纹理对象);
5. 设置纹理参数
gl.texParameteri(gl.TEXTURE_2D | gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);

## 着色器语言

### 矢量

vec4 顶点坐标分量(x,y,z,w) 纹理坐标分量(s,t,p,q)

### 条出函数

continue, break ,discard

### 内置函数

角度函数：
radians(x) 弧度
degrees(x) 角度

三角函数：
sin(x) 返回x的正弦
cos(x) 返回x的余弦
tan(x) 返回x的正切
asin(x) 返回x的反正弦
acos(x) 返回x的反余弦
atan(x) 返回x的反正切

指数函数：
pow(x,y) 返回x的y次幂
exp(x) 返回e的x次幂
log(x) 返回x的自然对数
log2(x) 返回x的2为底的对数

通用函数：
max(x,y) 返回x和y中较大的值
min(x,y) 返回x和y中较小的值
clamp(x,min,max) 返回min(max(x,min),max)
abs(x) 返回x的绝对值
sign(x) 返回x的符号值，x>0返回1，x=0返回0，x<0返回-1
floor(x) 返回小于或等于x的最大整数
ceil(x) 返回大于或等于x的最小整数
round(x) 返回最接近x的整数
trunc(x) 返回x的整数部分
fract(x) 返回x的小数部分
mod(x,y) 返回x除以y以后的余数

### 存储限定词

const 常量
attribute
uniform
varying
精度限定
默认精度 precision highp | mediump | lowp

### 内置变量

gl_Position 顶点位置
gl_PointSize 点的大小
gl_FragCoord 片元位置
gl_FragColor 片元颜色