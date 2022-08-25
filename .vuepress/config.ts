import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: '知识库',
  description: '一个知识库网站',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'azrng',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'kbms',
    lastUpdatedText: '',
    // series 为原 sidebar  左侧栏
    series: {
      '/web/': [
        {
          text: "Web", children:
            [
              "introduce", //介绍
              //"basegrammar"
              "http-agency" //http代理 
            ]
        }
      ],
      '/csharp/': [
        { text: "CSharp", children: ["predefined-type", "class", "type-convert", "attribute"] }
      ]
    },
    navbar:
      [
        { text: '主页', link: '/' },
        {
          text: '目录',
          children: [
            { text: 'Web', link: '/web/introduce' },
            { text: 'CSharp', link: '/csharp/predefined-type' },
            //{ text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
          ],
        },
        { text: '分类', link: '/categories/csharp/1/' },
        { text: '标签', link: '/tags/csharp/1/' },

        // { text: '主页', link: '/' },
        // { text: '分类', link: '/categories/reco/1/' },
        // { text: '标签', link: '/tags/tag1/1/' },
        // { text: '目录',
        //   children: [
        //     { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
        //     { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
        //   ]
        // },
      ],
    // bulletin: {
    //   body: [
    //     {
    //       type: 'text',
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: 'font-size: 12px;'
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'QQ 群',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: 'font-size: 12px;'
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'GitHub',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: 'font-size: 12px;'
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'buttongroup',
    //       children: [
    //         {
    //           text: '打赏',
    //           link: '/docs/others/donate.html'
    //         }
    //       ]
    //     }
    //   ],
    // },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
})
