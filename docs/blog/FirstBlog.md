# 我的第一篇博客

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
        title: '技术',
        children: [
          ['/技术/react/1.md', 'react'],
          ['/技术/react-native/1.md', 'react-native'],
        ]
      },
    ]
  }
}

```

## 参考博客
[博客链接](https://www.jianshu.com/p/6e8c608f24c8)


