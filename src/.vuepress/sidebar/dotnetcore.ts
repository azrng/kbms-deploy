
export const dotnetcoreSidebar = [
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
    text: "Maui",
    collapsible: true,
    children: [
      {
        text: "基础知识",
        collapsible: true,
        children: [
          "/dotnetcore/maui/base.md",
        ]
      },
      {
        text: "部署",
        collapsible: true,
        children: [
          "/dotnetcore/maui/release/generate_apk.md"
        ]
      }
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
];