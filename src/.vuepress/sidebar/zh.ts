import { sidebar } from "vuepress-theme-hope";

// 介绍文档 https://vuepress-theme-hope.gitee.io/v2/zh/guide/layout/sidebar.html
export const zhSidebar = sidebar({
  "/": [
    "",
    "intro",
  ],
  "/web/": [
    "/web/introduce.md",
    "/web/http-agency.md",
    "/web/http.md",
  ],
  "/csharp/": [
    "predefined-type.md",
    "class.md",
    "type-convert.md",
    "attribute.md",
    "reflect.md",
    "sort.md"
  ],
  "/dotnetcore/": [
    {
      text: "基础知识",
      collapsible: true,
      children: [
        "/dotnetcore/base.md",
        "/dotnetcore/globalization.md",
        "/dotnetcore/routing.md",
        "/dotnetcore/healthcheck.md"
      ]
    },
    {
      text: "配置框架",
      collapsible: true,
      children: [
        "/dotnetcore/config/configread.md"
      ]
    },
    {
      text: "跨域",
      collapsible: true,
      children: [
        "/dotnetcore/kuayu.md"
      ]
    },
    {
      text: "静态资源",
      collapsible: true,
      children: [
        "/dotnetcore/staticfile/base.md",
        "/dotnetcore/staticfile/customerconfig.md"
      ]
    },
    {
      text: "日志",
      collapsible: true,
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
      collapsible: true,
      children: [
        "/dotnetcore/filter/base.md",
        "/dotnetcore/filter/realize.md",
      ]
    },
    {
      text: "OpenApi",
      collapsible: true,
      children: [
        "/dotnetcore/openapi/swaggerbase.md",
        "/dotnetcore/openapi/version.md",
      ]
    },
    {
      text: "身份认证和授权",
      collapsible: true,
      children: [
        "/dotnetcore/auth/session.md",
        "/dotnetcore/auth/cookie.md",
        "/dotnetcore/auth/jwt_baseuse.md",
      ]
    },
    {
      text: "健康检查",
      collapsible: true,
      children: [
        "/dotnetcore/healthcheck.md",
      ]
    }
    ,
    {
      text: "实时通信",
      collapsible: true,
      children: [
        "/dotnetcore/real-time/base.md",
      ]
    },
    {
      text: "缓存",
      collapsible: true,
      children: [
        "/dotnetcore/cache/memorycache.md",
        "/dotnetcore/cache/redis.md",
      ]
    },
    {
      text: "IOC",
      collapsible: true,
      children: [
        "/dotnetcore/ioc/base.md",
        "/dotnetcore/DI/default.md"
      ]
    },
    {
      text: "WebAPI",
      collapsible: true,
      children: [
        "/dotnetcore/webapi/webapi-base.md",
        "/dotnetcore/webapi/webapiversion.md",
      ]
    },
    {
      text: "ORM",
      collapsible: true,
      children: [
        "/dotnetcore/orm/overview.md",
        {
          text: "Dapper",
          collapsible: true,
          children: [
            "/dotnetcore/orm/dapper/overview.md",
            "/dotnetcore/orm/dapper/dapper_read_write.md",
            "/dotnetcore/orm/dapper/dapper_lnskydb.md"
          ]
        },

        {
          text: "EFCore",
          collapsible: true,
          children: [
            "/dotnetcore/orm/createdb.md",
            "/dotnetcore/orm/efcoreoperation.md"
          ]
        }
      ]
    },
    {
      text: "单元测试",
      collapsible: true,
      children: [
        "/dotnetcore/unit-test/base.md",
        "/dotnetcore/unit-test/base-use-dissent.md",
        "/dotnetcore/unit-test/base-use.md",
      ]
    },
    {
      text: "WinForm",
      collapsible: true,
      children: [
        "/dotnetcore/winform/use_di.md",
      ]
    },
    {
      text: "小知识",
      collapsible: true,
      children: [
        "/dotnetcore/small/dynamic_load.md",
      ]
    },
    {
      text: "部署",
      collapsible: true,
      children: [
        "/dotnetcore/release/iis.md",
        "/dotnetcore/release/centos_net6.md",
        "/dotnetcore/release/supervisor.md",
        "/dotnetcore/release/docker.md",
      ]
    }
  ],
  '/maui/':[
    {
      text: "基础知识",
      collapsible: true,
      children: [
        "/maui/base.md",
      ]
    },
    {
      text: "部署",
      collapsible: true,
      children: [
        "/maui/release/generate_apk.md"
      ]
    }
  ],
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
  ],
  '/db/': [
    {
      text: "基础",
      collapsible: true,
      children:
        [
          "/db/base.md",
          "/db/cache-db-consistency.md",
        ]
    },
    {
      text: "PostgreSQL",
      collapsible: true,
      children:
        [
          "/db/pgsql/jsonb_path_query.md",
        ]
    }
  ],
  '/soft/': [
    {
      text: "单个",
      collapsible: true,
      children:
        [
          "/soft/soft-collection.md",
          "/soft/open_source_protocol.md",
          "/soft/uos.md",
          "/soft/small/picgo.md",
          //"/soft/postman.md",

        ]
    },
    {
      text: "Jenkins",
      collapsible: true,
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
      collapsible: true,
      children:
        [
          "/soft/linux/centos/catalog.md",
          "/soft/linux/centos/vm_install.md",
          "/soft/linux/centos/hyper-v_install.md",
        ]
    },
    {
      text: "Visual Studio",
      collapsible: true,
      children:
        [
          "/soft/visualstudio/use-skill.md",
          "/soft/visualstudio/install.md",
          {
            text: "Nuget",
            collapsible: true,
            children:
              [
                "/soft/visualstudio/nuget/nuget_overview.md",
                "/soft/visualstudio/nuget/nuget_autoupdate.md",
                "/soft/visualstudio/nuget/baget.md",
       
              ]
          },
        ]
    },
    {
      text: "Docker",
      collapsible: true,
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
      text: "Kubernetes",
      collapsible: true,
      children:
        [
          "/soft/kubernetes/base.md",
          "/soft/kubernetes/base_concept.md",
          "/soft/kubernetes/network.md",
          "/soft/kubernetes/service_discovery.md",
        ]
    },
    {
      text: "Git",
      collapsible: true,
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
});
