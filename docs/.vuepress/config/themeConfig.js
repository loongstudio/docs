const nav = require("./nav.js");
const htmlModules = require("./htmlModules.js");

// Theme Config
module.exports = {
  nav,
  sidebarDepth: 2,
  logo: "/img/logo.svg",
  repo: "baomidou/mybatis-plus",
  searchMaxSuggestions: 10,
  lastUpdated: "上次更新",

  docsRepo: "baomidou/mybatis-plus-doc",
  docsDir: "docs",
  docsBranch: "master",
  editLinks: true,
  editLinkText: "帮助我们改善此页面！",

  // Vdoing Theme Config
  sidebar: { mode: "structuring", collapsable: false },

  updateBar: {
    showToArticle: false
  },

  category: false,
  tag: false,
  archive: true,

  author: {
    name: "Team Baomidou",
    href: "https://github.com/baomidou"
  },

  social: {
    icons: [
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/loongstudio"
      },
      {
        iconClass: "icon-gitee",
        title: "Gitee",
        link: "https://gitee.com/loongstudio"
      },
      {
        iconClass: "icon-youjian",
        title: "Mail",
        link: "mailto:loongstudio.loong@gmail.com"
      }
    ]
  },

  footer: {
    createYear: 2022,
    copyrightInfo: [
      '<span style="font-weight:bold">MIT License</span>',
      ' | ',
      '<a href="https://github.com/loongstudio" target="_blank" style="font-weight:bold">Team LoongStudio</a>',
      ' | ',
      '<a href="https://www.jetbrains.com" target="_blank" style="font-weight:bold">JetBrains</a>',
      ' | ',
      // '<a href="http://beian.miit.gov.cn/" target=_blank>渝ICP备2021000141号</a>',
      '<p>友情链接：',
      '<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank" style="font-weight:bold">Vdoing</a>',
      ' | ',
      '<a href="http://baomidou.com" target="_blank" style="font-weight:bold">Baomidou</a>',
      ' | ',
      '<a href="https://gitee.com/kunlong-luo" target="_blank" style="font-weight:bold">My Gitee</a>',
      ' | ',
      '<a href="https://github.com/kunlong-luo" target="_blank" style="font-weight:bold">My Github</a>',
      '</p>'
    ].join('')
  },

  htmlModules
};
