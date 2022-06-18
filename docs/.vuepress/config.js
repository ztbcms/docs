// vuepress 默认主体配置：https://vuepress.vuejs.org/zh/theme/default-theme-config.html
module.exports = {
  title: 'ZTBCMS',
  description: '高性能、模块化、极速开发PHP Web框架',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    [
      // Google Ads
      "script",
      {
        async: true,
        crossorigin: "anonymous",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6764368739876780",
      },
    ],
  ],
  themeConfig: {
    // Git 仓库和编辑链接
    repo: 'https://github.com/ztbcms/ztbcms/tree/v3',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com/ztbcms/docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'develop',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑此页',

    logo: '/img/logo.png',
    // 导航栏
    nav: [
      { text: '目录', link: '/SUMMARY' },
      { text: '起步', link: '/basic/' },
      { text: '框架', link: '/guide/' },
      { text: '最佳实践', link: '/best_practic/' },
      { text: '模块', link: '/module/' },
      { text: '附录', link: '/extra/' },
      { text: '案例', link: '/case' },
    ],
    // 最后更新时间
    lastUpdated: '更新于', // string | boolean
    // 侧栏
    // sidebar: [
    //   '/',
    //   ['http://baidu.com', '模块']
    // ],
    sidebar: 'auto',
    sidebarDepth: 2,
  },
}