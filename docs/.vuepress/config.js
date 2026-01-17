import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ZTBCMS',
  description: '高性能、模块化、极速开发PHP Web框架',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
  ],

  bundler: viteBundler(),

  theme: defaultTheme({
    logo: '/img/logo.png',

    // Git 仓库和编辑链接
    repo: 'https://github.com/ztbcms/ztbcms',
    repoLabel: '查看源码',

    // 文档仓库配置
    docsRepo: 'https://github.com/ztbcms/docs',
    docsDir: 'docs',
    docsBranch: 'develop',
    editLink: true,
    editLinkText: '编辑此页',

    // 导航栏
    navbar: [
      { text: '起步', link: '/basic/' },
      { text: '框架', link: '/guide/' },
      { text: '最佳实践', link: '/best_practic/' },
      { text: '模块', link: '/module/' },
      { text: '案例', link: '/case' },
    ],

    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '更新于',

    // 侧栏
    sidebar: 'auto',
    sidebarDepth: 2,
  }),
})
