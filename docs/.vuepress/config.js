module.exports = {
  base: '/look/',
  title: 'blog-demo',
  description: 'Vuepress blog demo',
  port:9099,
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