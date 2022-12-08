import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

//https://v2.vuepress.vuejs.org/zh/reference/config.html
export default defineUserConfig({
  // 设置网站的前缀地址
  base: "/kbms/",

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
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      }
    })
  ],
});
