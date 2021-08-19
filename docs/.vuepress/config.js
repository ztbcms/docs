module.exports = {
  title: 'ZTBCMS',
  description: '高性能、模块化、极速开发PHP Web框架',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '目录', link: '/SUMMARY' },
      { text: '起步', link: '/basic/' },
      { text: '框架', link: '/guide/' },
      { text: '最佳实践', link: '/best_practic/' },
      { text: '模块', link: '/module/' },
      { text: '附录', link: '/extra/' },
      { text: '案例', link: '/case' },
    ]
  },
  head: [
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
}