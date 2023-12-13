#

## three

### 目录

```js
three.js
└───build——src目录下各个代码模块打包后的结果
    │───three.js——开发的时候.html文件中要引入的threejs引擎库，和引入jquery一样，可以辅助浏览器调试
    │───three.min.js——three.js压缩后的结构文件体积更小，可以部署项目的时候在.html中引入。
    │───three.module.js—— 可以import方式引入
    │
└───docs——Three.js API文档文件
    │───index.html——打开该文件可以实现离线查看threejs API文档
    │
└───editor——Three.js的可视化编辑器，可以编辑3D场景
    │───index.html——打开应用程序
    │
└───docs——Three.js API文档文件
    │───index.html——打开该文件可以实现离线查看threejs API文档
    │
└───examples——里面有大量的threejs案例，平时可以通过代码编辑全局查找某个API、方法或属性来定位到一个案例
    │
└───src——Three.js引擎的各个模块，可以通过阅读源码深度理解threejs引擎
    │───index.html——打开该文件可以实现离线查看threejs API文档
    │
└───utils——一些辅助工具
    │───\utils\exporters\blender——blender导出threejs文件的插件
```

## 内部对象

scene
PerspectiveCamera
OrthographicCamera
WebGLRenderer

BoxGeometry
SphereGeometry
PlaneGeometry
MeshLambertMaterial
Mesh

SpotLight