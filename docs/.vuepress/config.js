module.exports = {
  base: '/look/',
  title: 'blog',
  description: 'Vuepress blog',
  port:9099,
  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg' }]
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
      ['/blog/FirstBlog.md', 'vuePress部署blog'],
      {
        title: '技术',
        children: [
          ['/技术/react/1.md', 'react'],
          ['/技术/react-native/1.md', 'react-native'],
        ]
      },
      {
        title: '日记',
        children: [
          ['/日记/2019/06-03.md', '2019/06/03'],

        ]
      },
    ]
  }
}