import { sidebar } from "vuepress-theme-hope";
import { dotnetcoreSidebar } from "./dotnetcore";

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
  "/dotnetcore/": dotnetcoreSidebar,
  '/maui/': [
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
          "/soft/game.md",
          "/soft/open_source_protocol.md",
          "/soft/office.md",
          "/soft/ps.md",
          "/soft/search.md",
          "/soft/uos.md",
          "/soft/small/picgo.md",

        ]
    },
    {
      text: "Windows",
      collapsible: true,
      children: [
        "/soft/windows/overview.md",
        "/soft/windows/browser_plug.md",
        "/soft/windows/bat_command.md",
        "/soft/windows/child_system_linux.md",
        "/soft/windows/chocolatey.md",
        "/soft/windows/dbchm.md",
        "/soft/windows/hyper-v.md",
        "/soft/windows/newpc.md",
        "/soft/windows/nssm.md",
        "/soft/windows/terminal.md",
        "/soft/windows/environment_config.md",
        "/soft/vscode.md",
        {
          text: "接口调用",
          collapsible: true,
          children:
            [
              "/soft/call_interface/overview.md",
              "/soft/call_interface/postman.md",
            ]
        }
      ]
    },
    {
      text: "Linux",
      collapsible: true,
      children:
        [
          "/soft/linux/overview.md",
          {
            text: "Centos",
            collapsible: true,
            children:
              [
                "/soft/linux/centos/overview.md",
                "/soft/linux/centos/catalog.md",
                "/soft/linux/centos/command.md",
                "/soft/linux/centos/hyper-v_install.md",
                "/soft/linux/centos/vm_install.md",
                "/soft/linux/centos/environment/java.md",
              ]
          }, {
            text: "ubuntu",
            collapsible: true,
            children:
              [
                "/soft/linux/ubuntu/overview.md",
              ]
          },
          "/soft/linux/selinux.md",
          "/soft/linux/virtual_machine.md",
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
      text: "Visual Studio",
      collapsible: true,
      children:
        [
          "/soft/visualstudio/overview.md",
          "/soft/visualstudio/use-skill.md",
          "/soft/visualstudio/editorConfig.md",
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
          {
            text: "安装",
            collapsible: true,
            children:
              [
                "/soft/visualstudio/install.md",
                "/soft/visualstudio/off_line_install.md",
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
          {
            text: "安装",
            collapsible: true,
            children: [
              "/soft/docker/windows-install.md",
              "/soft/docker/linux-install.md",
            ]
          },
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
          "/soft/code-version/base_operation.md",
          "/soft/code-version/base_theory.md",
          {
            text: "安装",
            collapsible: true,
            children: [
              "/soft/code-version/windows_install.md",
              "/soft/code-version/linux_install.md"
            ]
          },
          {
            text: "部署",
            collapsible: true,
            children: [
              "/soft/code-version/gitea.md",
              "/soft/code-version/gogs.md"
            ]
          }
        ]
    }
  ],
  '/interview/': "structure",
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
