import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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
