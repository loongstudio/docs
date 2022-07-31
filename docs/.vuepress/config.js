const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: "vdoing",
  title: "MyBatis-Plus",
  description: 'MyBatis-Plus 官方文档',
  base: "/docs/",
  markdown: {
    lineNumbers: true
  },
  head,
  themeConfig,
  plugins
}
