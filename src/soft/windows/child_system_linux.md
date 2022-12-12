---
title: Linux子系统
lang: zh-CN
date: 2022-12-12
publish: true
author: azrng
isOriginal: false
category:
 - soft
---

# 目的

在win11下使用linux系统进行日常学习使用。

# 操作

注：我记得是家庭版本是不支持的。

搜索控制面板然后点击程序

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122216903.png)

点击启用或者关闭windows功能

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122216864.png)

在弹框的windows功能中勾选适用于linux的windows子系统和虚拟机平台

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122216686.png)

然后我们就可以在微软商店里面搜索wsl(Windows Subsystem for Linux)，然后点击安装

Windows Subsystem for Linux（简称WSL）是一个在Windows 10\11上能够运行原生Linux二进制可执行文件（ELF格式）的兼容层。它是由微软与Canonical公司合作开发，其目标是使纯正的Ubuntu、Debian等映像能下载和解压到用户的本地计算机，并且映像内的工具和实用工具能在此子系统上原生运行。 内容来自于百度百科。

这里我直接安装Ubuntu系统

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122217565.png)

原因是centos已经不维护了，目前使用Ubuntu的人也不少，那么就趁此机会学习一下Ubuntu吧，下载之后在开始菜单就可以看到安装好的Ubuntu系统，单击打开

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122217017.png)

需要你设置账号密码，设置好就可以正常使用，使用命令查看发行版本信息

```csharp
lsb_release -a
```

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122217588.png)

至此安装教程完成，请尽情学习吧。