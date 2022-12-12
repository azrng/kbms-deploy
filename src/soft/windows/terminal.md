---
title: Terminal
lang: zh-CN
date: 2022-12-12
publish: true
author: azrng
isOriginal: false
category:
 - soft
---
# 说明

连接linux

```csharp
 ssh IP -l root
```

# 配置

配置文件

```json
{
  //docs https://docs.microsoft.com/zh-cn/windows/terminal/get-started

  "$schema": "https://aka.ms/terminal-profiles-schema",
  "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
  //选择后复制
  "copyOnSelect": true,
  //如果设置为 true，则所选文本的颜色和字体格式也将复制到剪贴板。 如果设置为 false，则只会将纯文本复制到剪贴板。
  "copyFormatting": false,
  "profiles": {
    "defaults": {
      //背景透明度(0-1)
      "acrylicOpacity": 1,
      //背景图片
      //"backgroundImage": "E:\\ter.jpg",
      "fontFace": "Consolas",
      //包含的配色方案
      "colorScheme": "Homebrew",
      "startingDirectory": "d:\\",
      "snapOnInput": true,
      //是否启用毛玻璃
      "useAcrylic": false
    },
    "list": [
      {
        // Make changes here to the powershell.exe profile.
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "name": "Windows PowerShell",
        "commandline": "powershell.exe",
        "hidden": false
      },
      {
        // Make changes here to the cmd.exe profile.
        "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
        "name": "Command Prompt",
        "commandline": "cmd.exe",
        "hidden": false
      },
      {
        "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
        "hidden": true,
        "name": "Azure Cloud Shell",
        "source": "Windows.Terminal.Azure"
      },
      {
        "guid": "{a2dfb7a0-26f4-4a2a-bc12-b2cc39ea67fd}",
        "hidden": true,
        "name": "Aliyun CentOS Shell",
        "commandline": "ssh -i  root@47.104.255.61"
      }
    ]
  },
  //自定义配色方案
  "schemes": {
    "Homebrew": {
      "name": "Homebrew",
      "black": "#000000",
      "red": "#FC5275",
      "green": "#00a600",
      "yellow": "#999900",
      "blue": "#6666e9",
      "purple": "#b200b2",
      "cyan": "#00a6b2",
      "white": "#bfbfbf",
      "brightBlack": "#666666",
      "brightRed": "#e50000",
      "brightGreen": "#00d900",
      "brightYellow": "#e5e500",
      "brightBlue": "#0000ff",
      "brightPurple": "#e500e5",
      "brightCyan": "#00e5e5",
      "brightWhite": "#e5e5e5",
      "background": "#283033",
      "foreground": "#00ff00"
    }
  },

  // Add custom actions and keybindings to this array.
  // To unbind a key combination from your defaults.json, set the command to "unbound".
  // To learn more about actions and keybindings, visit https://aka.ms/terminal-keybindings
  "actions": [
    // Copy and paste are bound to Ctrl+Shift+C and Ctrl+Shift+V in your defaults.json.
    // These two lines additionally bind them to Ctrl+C and Ctrl+V.
    // To learn more about selection, visit https://aka.ms/terminal-selection
    {
      "command": {
        "action": "copy",
        "singleLine": false
      },
      "keys": "ctrl+c"
    },
    {
      "command": "paste",
      "keys": "ctrl+v"
    },

    // Press Ctrl+Shift+F to open the search box
    {
      "command": "find",
      "keys": "ctrl+shift+f"
    },

    // Press Alt+Shift+D to open a new pane.
    // - "split": "auto" makes this pane open in the direction that provides the most surface area.
    // - "splitMode": "duplicate" makes the new pane use the focused pane's profile.
    // To learn more about panes, visit https://aka.ms/terminal-panes
    {
      "command": {
        "action": "splitPane",
        "split": "auto",
        "splitMode": "duplicate"
      },
      "keys": "alt+shift+d"
    }
  ]
}
```

# 美化方案

https://zhuanlan.zhihu.com/p/354603010