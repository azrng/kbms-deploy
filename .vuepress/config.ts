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
          text: "Web",
          children:
            [
              "introduce", //介绍
              //"basegrammar"
              "http-agency" //http代理 
            ]
        }
      ],
      '/csharp/': [
        {
          text: "CSharp",
          children:
            [
              "predefined-type",
              "class",
              "type-convert",
              "attribute",
              "reflect.md"
            ]
        }
      ],
      '/dotnetcore/': [
        {
          text: "基础知识",
          children: [
            "/dotnetcore/base.md",
            "/dotnetcore/globalization/base.md",
            "/dotnetcore/routing.md",
            "/dotnetcore/healthcheck.md"
          ]
        },
        {
          text: "配置框架",
          children: [
            "/dotnetcore/config/configread.md"
          ]
        },
        {
          text: "跨域",
          children: [
            "/dotnetcore/kuayu.md"
          ]
        },
        {
          text: "静态资源",
          children: [
            "/dotnetcore/staticfile/base.md",
            "/dotnetcore/staticfile/customerconfig.md"
          ]
        },
        {
          text: "日志",
          children: [
            "/dotnetcore/loggers/ilogger.md",
            "/dotnetcore/loggers/serilog.md",
            "/dotnetcore/loggers/nlog.md",
            "/dotnetcore/loggers/log4net.md",
            "/dotnetcore/loggers/logdashboard.md",
          ]
        },
        {
          text: "过滤器",
          children: [
            "/dotnetcore/filter/base.md",
            "/dotnetcore/filter/realize.md",
          ]
        },
        {
          text: "OpenApi",
          children: [
            "/dotnetcore/openapi/swaggerbase.md",
            "/dotnetcore/openapi/version.md",
          ]
        },
        {
          text: "身份认证和授权",
          children: [
            "/dotnetcore/auth/session.md",
            "/dotnetcore/auth/cookie.md",
            "/dotnetcore/auth/jwt_baseuse.md",
          ]
        },
        {
          text: "健康检查",
          children: [
            "/dotnetcore/healthcheck.md",
          ]
        }
        ,
        {
          text: "实时通信",
          children: [
            "/dotnetcore/real-time/base.md",
          ]
        },
        {
          text: "缓存",
          children: [
            "/dotnetcore/cache/memorycache.md",
            "/dotnetcore/cache/redis.md",
          ]
        },
        {
          text: "身份认证和授权",
          children: [
            "/dotnetcore/auth/session.md",
          ]
        },
        {
          text: "IOC",
          children: [
            "/dotnetcore/ioc/base.md",
            "/dotnetcore/DI/default.md"
          ]
        },
        {
          text: "WebAPI",
          children: [
            "/dotnetcore/webapi/webapi-base.md",
            "/dotnetcore/webapi/webapiversion.md",
          ]
        },
        {
          text: "操作数据库",
          children: [
            "/dotnetcore/orm/createdb.md",
            "/dotnetcore/orm/efcoreoperation.md",
          ]
        },
        {
          text: "单元测试",
          children: [
            "/dotnetcore/unit-test/base.md",
            "/dotnetcore/unit-test/base-use-dissent.md",
            "/dotnetcore/unit-test/base-use.md",
          ]
        },
        {
          text: "WinForm",
          children: [
            "/dotnetcore/winform/use_di.md",
          ]
        },
        {
          text: "部署",
          children: [
            "/dotnetcore/release/iis.md",
            "/dotnetcore/release/centos_net6.md",
            "/dotnetcore/release/supervisor.md",
            "/dotnetcore/release/docker.md",
          ]
        }
      ],
      '/middleware/': [
        {
          text: "单个",
          children:
            [
              "/middleware/yapi.md",
              "/middleware/baget.md",
              "/middleware/toolgood-words.md"
            ]
        },
        {
          text: "Office",
          children:
            [
              "/middleware/office/aspose-pdf.md",
              "/middleware/office/spire-pdf.md",
            ]
        },
        {
          text: "打印",
          children:
            [
              "/middleware/print/fastreport.md",
            ]
        },
        {
          text: "GRPC",
          children:
            [
              "/middleware/grpc/introduce.md",
              "/middleware/grpc/model.md"
            ]
        },
        {
          text: "微信",
          children:
            [
              "/middleware/wechat/senparcweixin.md",
            ]
        },
        {
          text: "配置中心",
          children:
            [
              "/middleware/config-centre/agileconfig.md",
            ]
        },
        {
          text: "服务通知",
          children:
            [
              "/middleware/service-notifications/jieyi.md",
              "/middleware/service-notifications/other.md"
            ]
        },
        {
          text: "CI&CD",
          children:
            [
              "/middleware/ci&cd/github/github-actions-buildimages-release.md"
            ]
        }
      ],
      '/db/': [
        {
          text: "基础",
          children:
            [
              "/db/base.md",
              "/db/cache-db-consistency.md",
            ]
        },
        {
          text: "PostgreSQL",
          children:
            [
              "/db/pgsql/jsonb_path_query.md",
            ]
        }
      ],
      '/soft/': [
        {
          text: "单个",
          children:
            [
              "/soft/soft-collection.md",
              "/soft/open_source_protocol.md",
              "/soft/uos.md",
              "/soft/small/picgo.md",
              "/soft/postman.md",

            ]
        },
        {
          text: "Jenkins",
          children:
            [
              "/soft/jenkins/base.md",
              "/soft/jenkins/free-style.md",
              "/soft/jenkins/docker-install.md",
              "/soft/jenkins/linux-install.md",
            ]
        },
        {
          text: "Linux",
          children:
            [
              "/soft/linux/catalog.md",
              "/soft/linux/vm_install.md",
              "/soft/linux/hyper-v_install.md",
            ]
        },
        {
          text: "Visual Studio",
          children:
            [
              "/soft/visualstudio/use-skill.md",
              "/soft/visualstudio/install.md",
            ]
        },
        {
          text: "Docker",
          children:
            [
              "/soft/docker/base.md",
              "/soft/docker/install-services.md",
              "/soft/docker/mark-small-image.md",
              "/soft/docker/windows-install.md",
              "/soft/docker/linux-install.md",
            ]
        },
        {
          text: "Jenkins",
          children:
            [
              "/aboutme/aboutme.md",
            ]
        },
        {
          text: "Kubernetes",
          children:
            [
              "/soft/kubernetes/base.md",
              "/soft/kubernetes/base_concept.md",
              "/soft/kubernetes/network.md",
              "/soft/kubernetes/service_discovery.md",
            ]
        }
        ,
        {
          text: "Git",
          children:
            [
              "/soft/code-version/base_theory.md",
              "/soft/code-version/github-base.md",
              "/soft/code-version/wazgit.md",
              "/soft/code-version/gitlabinstall.md",
            ]
        }
      ],
      '/interview/': [
        {
          text: "面试",
          children:
            [
              "/interview/anti-fraud.md",
            ]
        }
      ],
       '/aboutme/': [
        {
          text: "关于我",
          children:
            [
              "/aboutme/aboutme.md",
            ]
        }
      ],
    },
    navbar:
      [
        { text: '主页', link: '/' },
        {
          text: '目录',
          children: [
            { text: 'Web', link: '/web/introduce' },
            { text: 'CSharp', link: '/csharp/predefined-type' },
            { text: 'dotnetcore', link: '/dotnetcore/base' },
            { text: '中间件', link: '/middleware/yapi' },
            { text: '数据库', link: '/db/base' },
            { text: '软件', link: '/soft/soft-collection' },
            { text: '面试', link: '/interview/anti-fraud' },
          ],
        },
        { text: '关于我', link: '/aboutme/aboutme' },
        // 页面404
        // { text: '分类', link: '/categories/csharp/1/' },
        // { text: '标签', link: '/tags/csharp/1/' },

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
