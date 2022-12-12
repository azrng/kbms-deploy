---
title: 程序包管理器Chocolatey
lang: zh-CN
date: 2022-12-12
publish: true
author: 加菲的博客
isOriginal: false
category:
 - soft
---

# 介绍

Chocolatey是Windows上的包管理工具，就是安装软件包的。

# 1. 系统要求

- Windows 7+ / Windows Server 2003+
- PowerShell v2+
- .NET Framework 4+

- - 如果没安装，安装程序就会尝试安装.net framework4.0

# 2. 安装

1、管理员方式运行PowerShell

2、使用PoerShell安装

使用`PowerShell`，您必须确保`Get-ExecutionPolicy`不受限制(**Restricted**)

```csharp
Get-ExecutionPolicy
```

如果返回的是`Restricted`，继续运行下面的命令：

```plain
Set-ExecutionPolicy AllSigned
#或者
Set-ExecutionPolicy Bypass -Scope Process
```

最后运行下面命令：

```csharp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

等待安装完成

# 3. 常用命令

```csharp
# 安装
choco install packagename

# 卸载
choco uninstall packagename

# 搜索
list、search、find

# 帮助 查看命令功能解释
choco [command] -help
```