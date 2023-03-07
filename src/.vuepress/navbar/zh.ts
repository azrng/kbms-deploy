import { navbar } from "vuepress-theme-hope";

// 导航栏 https://vuepress-theme-hope.gitee.io/v2/zh/guide/layout/navbar.html

export const zhNavbar = navbar([
  "/",
  { text: "Web", link: "/web/introduce.md" },
  { text: "csharp", link: "/csharp/predefined-type.md" },
  { text: "dotnetcore", link: "/dotnetcore/base.md" },
  { text: "Maui", link: "/maui/base.md" },
  { text: '中间件', link: '/middleware/yapi.md' },
  { text: '数据库', link: '/db/base.md' },
  { text: '软件', link: '/soft/soft-collection.md' },
  { text: '面试', link: '/interview/anti-fraud.md' },
  { text: "个人介绍", link: "/aboutme/aboutme.md" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/zh/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "edit",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "edit", link: "1" },
  //         { text: "苹果2", icon: "edit", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "edit",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "edit",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "edit",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
]);
