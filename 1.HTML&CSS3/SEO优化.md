# seo优化

```js

 1. <title>
   文章页title写法，一般有3种：“文章标题-网站名称”、“内容标题-栏目名称-网站名称”、“内容标题-网站名称”
 2. <meta name="description" content="网页概述">
   概述内容, 也可以尝试keywords写法——> key1、key2、key3...
 3. <meta name="keywords" content="key1,key2,key3">
 4. 使用语义化标签
     nav
     可以帮助 UA 迅速获得导航内容，例如读屏器可以省去很多渲染直接跳到导航位置。        
     aside
     可以表示与周围内容关系不太密切的内容 (广告)，通常表现为侧边栏内容 (相关背景内容)、引述内容
     header
     通常是一组介绍性描述 (搜索框 / logo / …)，网络爬虫知道诸如与之类的部分后可以非常简单的跳过它们，更好的定位网页内容
     article
     独立的文档、页面、应用、站点，可以单独发布、重用；可以是一篇帖子、一篇文章、一则用户评论、一个可交互的 widget
     section
     section标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。
     当你希望这个元素的内容体现在文档的提纲 (outline) 中时，用 section是合适的。
 5. 内链为王、外链为皇 [外联优化](https://juejin.cn/post/7199567427376562235)
    权重分散：
     nofollow链接是带有rel=”nofollow”HTML标签的链接
     在外联标签充满诸多不确定性时，使用nofollow
 6. 做好新能优化，从2010年起，谷歌将网页加载速度快慢作为影响排名重要因素
 7. 创建一个XML文件sitemap.xml，在其中列出网站中的网址以及关于每个网址的其他元数据<loc>网址、<lastmod>上次更新时间
 8. 优化URL
     [canonical](https://www.jiangweishan.com/article/seo20211118a3.html)
     canonical标签是一种告诉搜索引擎您要在搜索结果中显示哪个版本的URL的方法。
     使用canonical标签可以防止由于相同（或非常相似）或“重复”内容出现在多个URL上而引起的问题
 9. 尝试服务端渲染SSR
     主流框架给出的方案
     vue的nuxt.js
     react的next.2
 10. 在不使用ssr的情况下可以尝试使用 prerender-spa-plugin 插件来实现预渲染页面，
     在构建时就针对特定的路有生成静态的 html 文件

```

 参考：
 [](https://blog.csdn.net/qq_38974163/article/details/129028227?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169292669616800227447103%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=169292669616800227447103&biz_id=0&utm_medium=distribute.pc_chrome_plugin_search_result.none-task-blog-2~all~top_positive~default-1-129028227-null-null.nonecase&utm_term=seo%E4%BC%98%E5%8C%96&spm=1018.2226.3001.4187)
 [](https://blog.csdn.net/qq_52301431/article/details/123646935?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169292669616800227447103%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=169292669616800227447103&biz_id=0&utm_medium=distribute.pc_chrome_plugin_search_result.none-task-blog-2~all~top_click~default-2-123646935-null-null.nonecase&utm_term=seo%E4%BC%98%E5%8C%96&spm=1018.2226.3001.4187)
