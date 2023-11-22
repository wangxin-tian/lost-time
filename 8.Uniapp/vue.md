# 小程序中的vue

1. options 选项 
multipleSlots 是否关闭当前组件多slot支持、
virtualHost是否将组件节点渲染为虚拟组件
2. classObject
3. styleObject 其中以 :style=””方式设置px时，其值为实际像素，不会被编译器转换
4. 列表渲染时, : key的值必须是唯一的字符串或数字
5. 小程序中click事件建议使用tap代替
6. 组件默认存放在component目录下，导入、注册、使用
7. 组件目录结构： `component/ 组件名称/ 组件名称.vue`
8. 小程序 只 支持Vue单文件组件
9. 事件需使用“v-on”或@来绑定
10. uniapp中内置了小程序的所有组件（piker、map）
11. 支持在main.js中配置全局组件，import引入，Vue.component(’ ’,  )注册组件
12. 组件命名时不能使用保留关键字
13. App和小程序仅支持部分vue特性
14. nvue不支持全局组件
15. 通过onLoad函数可以获取上个页面传递的数据
16. label标签为表单元素提供可点击的文本标签