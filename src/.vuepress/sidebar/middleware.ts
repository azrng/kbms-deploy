import { sidebar } from "vuepress-theme-hope";

export const middlewareSidebar = sidebar({
    '/middleware/': [
        {
          text: "单个",
          collapsible: true,
          children:
            [
              "/middleware/yapi.md",
              "/middleware/baget.md",
              "/middleware/toolgood-words.md"
            ]
        },
        {
          text: "Office",
          collapsible: true,
          children:
            [
              "/middleware/office/aspose-pdf.md",
              "/middleware/office/spire-pdf.md",
            ]
        },
        {
          text: "打印",
          collapsible: true,
          children:
            [
              "/middleware/print/fastreport.md",
            ]
        },
        {
          text: "GRPC",
          collapsible: true,
          children:
            [
              "/middleware/grpc/introduce.md",
              "/middleware/grpc/model.md"
            ]
        },
        {
          text: "微信",
          collapsible: true,
          children:
            [
              "/middleware/wechat/senparcweixin.md",
            ]
        },
        {
          text: "配置中心",
          collapsible: true,
          children:
            [
              "/middleware/config-centre/agileconfig.md",
            ]
        },
        {
          text: "服务通知",
          collapsible: true,
          children:
            [
              "/middleware/service-notifications/jieyi.md",
              "/middleware/service-notifications/other.md"
            ]
        },
        {
          text: "CI&CD",
          collapsible: true,
          children:
            [
              "/middleware/ci&cd/github/github-actions-buildimages-release.md"
            ]
        }
      ]
});