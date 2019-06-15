# 并非第一篇博客
## 起源
* 为什么 umijs、 dvajs 、vue 等官网看起来有点像，我也想要。
* 同事写页面写不出引导效果，整了个软件使用说明文档，好丑啊。
* hexo、wordPress、django等博客模版层出不穷，没找到我想要的。（*我想要的是简单、高效、快速，可能本人太懒了吧*）
## 无意中撞见
* 起初看了人家的博客，只有顶部导航，要想写博客肯定不行。
* 一般官方说明文档比较简单，大多只是一个页面，整了多个锚点，原本想写blog的。（达不到要求）
* 查阅文档后，发现可以实现侧边栏菜单
* 问题出现在每个nav菜单按钮都会出现相同的侧边栏，这不是我想要的。
* 我想要的还没出现
## 擦出火花 
* 翻阅其他人博客遇到 [gitNote](https://www.gitnoteapp.com/extensions/kityminder.html),发现不同页面的侧边栏不同，而且页面长相vuePress
* so 下文
## 不同页面、不同侧边栏
```
nav: [
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '技术栈', link: '/stack/' },
],
sidebar: {
  '/blog/':[
      {
        title: '日记',
        children: [
          ['/blog/FirstBlog', 'FirstBlog'],
        ]
      },
    ],
  '/stack/':[
    {
      title: '技术栈',
      children: [
        ['/stack/react/1', 'react'],
        ['/stack/react-native/1', 'react-native'],
        ['/stack/dingE/record', 'dingE'],
      ]
    },
  ],
}
```
[参考博客](https://www.jianshu.com/p/c590ef514fca)
## 部署注意事项

### base: '/look/', 对应github项目
```
module.exports = {
  base: '/look/',
  title: 'blog-demo',
  description: 'Vuepress blog demo',
  head: [
    ['link', { rel: 'icon', href: '/vue-logo.png' }]
  ],
  themeConfig: {
  	// 你的GitHub仓库
    repo: 'https://github.com/841660202/look',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
  	nav: [
  		{ text: 'Home', link: '/' },
  		{ text: 'FirstBlog', link: '/blog/FirstBlog.md' }
  	],
  	sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客'],
      {
        title: 'technology',
        children: [
          ['/technology/react/1.md', 'react'],
          ['/technology/react-native/1.md', 'react-native'],
        ]
      },
       {
        title: '测试',
        children: [
          ['/technology/react/1.md', 'react'],
          ['/technology/react-native/1.md', 'react-native'],
        ]
      },
      {
        title: '日记',
        children: [
          ['/日记/2019/06/03.md', '2019-06-03']
        ]
      },
    ]
  }
}

```

## 参考博客
[博客链接](https://www.jianshu.com/p/6e8c608f24c8)


