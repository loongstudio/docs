const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: "vdoing",
  title: "LoongStudio-Docs",
  description: 'LoongStudio-Docs',
  base: "/docs/",
  markdown: {
    lineNumbers: true
  },
  head,
  themeConfig,
  plugins
}
