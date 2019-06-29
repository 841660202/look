module.exports = {
  base: '/look/',
  title: ' 👣',
  description: '越努力越幸运，考研失败了，请勿贪玩',
  port:9099,
  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg' }]
  ],
  themeConfig: {
  	// 你的GitHub仓库
    repo: 'https://github.com/841660202/look',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
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
              ['/blog/20190622', '20190622'],
            ]
          },
        ],
      '/stack/':[
        {
          title: '技术栈',
          children: [
            ['/stack/react/1', 'react'],
            ['/stack/react/mockjs', 'mockjs'],
            ['/stack/react-native/1', 'react-native'],
            ['/stack/dingE/record', 'dingE'],
            ['/stack/flutter/app-update', 'flutter'],
            ['/stack/flutter/list', 'flutter-list'],
            ['/stack/flutter/model', 'flutter-model'],
            ['/stack/flutter/source', '源码'],
            ['/stack/flutter/study', 'study'],
            ['/stack/typescript/json2Type', 'json2Type'],
            ['/stack/req/fetch', 'fecth'],
            ['/stack/req/axios', 'axios'],
            ['/stack/req/umi-request', 'umi-request'],
            ['/stack/linux/tree', 'tree'],
            ['/stack/webstorm/key-map', 'webstorm'],
            ['/stack/artical/words', 'words'],
          ]
        },
      ],
    }

  }
}
