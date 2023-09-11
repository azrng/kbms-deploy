import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

//https://v2.vuepress.vuejs.org/zh/reference/config.html
export default defineUserConfig({
  // 设置网站的前缀地址
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "知识库",
      description: "一个知识库网站",
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true
    }),
  ],
});
