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
    "reflect.md"
  ],
  "/dotnetcore/": [
    {
      text: "基础知识",
      children: [
        "/dotnetcore/base.md",
        "/dotnetcore/globalization.md",
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
      text: "小知识",
      children: [
        "/dotnetcore/small/dynamic_load.md",
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
});
