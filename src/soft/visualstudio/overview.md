---
title: VS概述
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - VS
---

# 概述

![Visual Studio Win 2022 logo](https://visualstudio.microsoft.com/wp-content/uploads/2021/10/Product-Icon.svg)

适用于 Windows 上 .NET 和 C++ 开发人员的最佳综合 IDE。 完整打包了一系列丰富的工具和功能，可提升和增强软件开发的每个阶段。

# 警告

使用visual studio开发过程中，有时发现在“错误列表”中的一些提示，大体分为错误、警告、消息，错误是我们必须处理的，否则代码通过编译，警告有时常常会被忽略，有时候忽略警告会为应用埋下安全隐患。

这些警告来自微软的IDE的Security Code Scan - static code analyzer for .NET，这些汇总在https://security-code-scan.github.io/里。

# 快捷键

官方默认的快捷键操作

```plsql
F5： 启动调试

Ctrl+F5： 开始执行不调试

F10：逐过程调试

F11：逐条语句调试

F12：转到定义

Alt+F12：查看定义

F4：打开属性面板

F9：设置 切换断点

Ctrl+F：查找

Ctrl+G：转到输入的行号位置

Ctrl+H：替换

Ctrl+Z：撤销

Ctrl+C：复制

Ctrl+X：剪切

Ctrl+V：粘贴

Ctrl+A：全选

Ctrl+K + Ctrl+K：设置书签

Ctrl+K + Ctrl+N：跳到下一个书签

Ctrl+K + Ctrl+F：格式化代码

Ctrl+K + Ctrl+S：插入外侧代码

Ctrl+K + Ctrl+X：插入代码段

Ctrl+R + Ctrl+E：封装字段

Ctrl+R + Ctrl+M：提取方法

Ctrl+R + Ctrl+I：提取接口

Shift+Alt+F10 然后按回车键：添加命名空间引用

Shift+Home：选中当前行

Shift+方向键：向各个方向选中

Ctrl + M + O :折叠所有方法
```



折叠或者展开当前方法

Ctrl+M+M



展开所有方法

快捷键：ctrl+M+P

 

选中一个单词

ctrl+shift+w



vs每行代码前面出现了虚线

 ctrl+r+w



折叠或展开当前方法

快捷键：ctrl+M+M

 

去掉网格线

快捷键：ctrl+E+S

 

打开指定的文件

ctrl+T搜索打开

 

定位到当前打开的文件所在目录

ctrl+[ ,S



多行编辑

按住Alt键，使用鼠标拖选

按住Alt+shift键，再按上/下/左/右方向键选择

 

使用多个光标同时编辑

按住ctrl+alt键，点击或选择要插入或编辑的位置

 

匹配一个文档内相同的单词并编辑，先选择要编辑的单词或字符

按alt+shift+; 会自动匹配并选中所有相同的单词，然后开始编辑

 

剪贴板历史记录，默认包含你复制剪贴板的最后20项纪录

ctrl+shift+v 可以打开剪贴板的历史记录

 

整行上下移动

按住alt 然后使用上下方向键移动整行代码

 

提取接口

Ctrl + R +I 

 ## 修改快捷键方法

修改快捷键的方法：

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122227740.png)

 

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122227937.png)

# 插件

## 介绍

插件官网：https://marketplace.visualstudio.com/vs

工具插件目录：https://marketplace.visualstudio.com/search?target=VS&category=Tools&vsVersion=&subCategory=All&sortBy=Installs

## 插件目录

- CodeMaid

- - 从代码中删除不必要的字符，如空格代码整理、使用树型结构视图（码锹窗口）轻松浏览代码，分类显示所有的字段，属性，方法，类，快速定位。支持多种语言、注释格式

- ClaudiaIDE

- - 切换编程背景图
  - 工具->扩展和更新->下载ClaudiaIDE
  - 默认图片存放地址：C:\Users\DY-Azrng\AppData\Local\Microsoft\VisualStudio\16.0_fea29920\Extensions\grl3zju1.amk\Images

- Roslynator

- - 代码重构提示插件

- GitHub Copilot(收费)

- - 代码提示
  - 文档：https://github.com/github/copilot-docs

- Code Metrices

- - 代码对齐可帮助您精美地呈现代码，提高清晰度和可读性。
  - https://marketplace.visualstudio.com/items?itemName=cpmcgrath.Codealignment

- Experimental Tools

- - 一堆质量重构和代码修复将改善您在 Visual Studio 中的 C# 开发体验并消除一些常见的痛苦。
  - https://marketplace.visualstudio.com/items?itemName=AndreiDzimchuk.ExperimentalTools64bit

- Viasfora

- - 彩虹大括号
  - https://viasfora.com/
  - https://marketplace.visualstudio.com/items?itemName=TomasRestrepo.Viasfora

- Rainbow Braces

- - 彩虹括号
  - https://marketplace.visualstudio.com/items?itemName=MadsKristensen.RainbowBraces

- SolutionColors

- - 为不同的解决方案设置不同的颜色
  - https://marketplace.visualstudio.com/items?itemName=MadsKristensen.SolutionColors

- VSColorOutput64

- - 为输出控制台的内容显示不同的颜色
  - https://marketplace.visualstudio.com/items?itemName=MikeWard-AnnArbor.VSColorOutput64

- Ozcode

- - OzCode允许搜索性能，比较对象，计算表达式并建立跟踪点 - 都导致了快速的和富有成效的调试会话。

- Productivity Power Tools

- - Productivity Power Tools是微软官方推出的 Visual Studio 插件，被用以提高开发人员生产率。它的出现一定程度上弥补和完善了 Visual Studio 自身的不足，比如其中的标记自动补全、复制引用等看似虽小，但却真得帮助我减轻了很多麻烦。

- - - 注意：它会安装好几个插件。会自带主题
    - 文章：https://zhuanlan.zhihu.com/p/262866034

- - Time Stamp Margin

- - - 在调试模式下将时间戳信息添加到输出窗口

- - Shrink Empty Lines

- - - 句法行压缩，收缩空行

- - Middle Click Scroll

- - - 使用鼠标中键在编辑器窗格中启用滚动
    - https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.MiddleClickScroll

- - Align Assignments

- - - 对齐赋值语句
    - https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.AlignAssignments

- - Match Margin

- - - 此功能在编辑器中突出显示插入符号位置的所有文本匹配。
    - https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.MatchMargin

- - Fix Mixed Tabs

- - - 有助于管理文档中的空白，并有助于保持制表符和空格使用的一致性。
    - https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.FixMixedTabs

- - Copy As Html

- - - 添加支持以HTML格式将选定的编辑器文本复制到剪贴板
    - https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.CopyAsHtml

- - Peek Help

- - - 帮助

- - SolutionErrorVisualizer

- - - 解决方案错误展示器
    - https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.SolutionErrorVisualizer

- Entity Develope

- - Entity Developer是一个用于LINQ to SQL建模和代码产生的强大工具。你可以从零开始或者从一个现有数据库逆向设计LINQ to SQL。
  - Entity Developer是ADO.NET实体框架，NHibernate、LinqConnect、Telerik数据访问和LINQ to SQL的强大ORM设计器。 它介绍了设计ORM模型的新方法，提高了生产力，并促进了数据库应用程序的开发。

- Markdown Editor

- - 一个在visual studio 中的markdown工具

- VisualStudioSpellCheckerVS2022andLater

- - 单词拼写检查器
  - [https://marketplace.visualstudio.com/items?itemName=EWoodruff.VisualStudioSpellCheckerVS2022andLater&ssr=false](https://marketplace.visualstudio.com/items?itemName=EWoodruff.VisualStudioSpellCheckerVS2022andLater&ssr=false#overview)

- codist

- - Codist 是一个致力于为 C# 程序员提供更佳的编码体验和效率的 Visual Studio 扩展。能够提供一系列的快捷操作和代码主题客制化，比如联网搜索，语法高亮自定义等。相当于一个精简版的Resharper。
  - 仓库地址：https://github.com/wmjordan/Codist

- sonarlint
- Security Code Scan (for VS2019 and newer)

- - 开源的代码安全分析工具
  - https://security-code-scan.github.io/

- NuPack

- - 用于构建和发布NuGet程序包。
  - https://hub.fastgit.org/cnsharp/nupack

- One Dark Pro 

- - 主题包

- 午夜黑主题

- - https://marketplace.visualstudio.com/items?itemName=AustinStanding.vsthememidnightdeep&ssr=false#overview

- Midnigth Deep  午夜深色
- Midnigth Lights 午夜亮色
- Translator

- - 将中文翻译英文

- Resharper

- - 破解教程：https://blog.csdn.net/qq_42351033/article/details/103095514

- AProtobuf

- - 语法高亮 智能提示 引用预览 引用跳转 格式化代码 单文件生成 整个工程生成
  - https://marketplace.visualstudio.com/items?itemName=AProtobuf.ALittleAProtobuf&ssr=false#overview 

- FileDiffer

- - 文件比较
  - https://marketplace.visualstudio.com/items?itemName=MadsKristensen.FileDiffer

- Bicep for Visual Studio

- - Visual Studio 的二头肌语言支持。
  - https://marketplace.visualstudio.com/items?itemName=ms-azuretools.visualstudiobicep

- ozcodereview

- - 此扩展允许您直接在 Visual Studio 中创建代码审查并将其分配给用户。此用户还可以直接在 Visual Studio 中查看它们并评论或更新它们的状态。
  - https://marketplace.visualstudio.com/items?itemName=Ozytis.ozcodereview

## 资料

插件菜单开发教程：https://mp.weixin.qq.com/s/lvsKTRKW8k7Oo8J3XfiMJQ

## 参考文章

https://masuit.org/1782?t=udswo86qwqgw

# 修改Nuget包存储

nuget默认的全局包下载地址一般为:C:\Users\{UserName}\AppData\Roaming\NuGet

项目多了之后,nuget下载的包就回慢慢的变多,导致c盘被大量占用,这时候我们想要将nuget的默认的包存放位置放在其他的目录下面,

默认情况：

```bash
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />
  </packageSources>
</configuration>
```

我们将其修改为：

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <add key="nuget.org" value="https://api.nuget.org/v3/index.json" protocolVersion="3" />
    </packageSources>
    <config>
        <add key="globalPackagesFolder" value="D:\Program Files\Microsoft Visual Studio\NuGetPackages" />
    </config>
</configuration>
```

以后的nuget包将存放在这地址上(重启vs生效)

# 个性化

## 修改文件编码

vs默认格式为 "GB2312-80",很多时候可能出现乱码情况

 

修改方法：

点击文件=》高级保存选项=》选择unicode(utf-8带签名)然后保存



如果没有高级保存选项需要去配置

工具=>自定义=>命令=>菜单栏=>文件=>添加命令=>文件=>高级保存选项

## 字体和大小

字体：Consolas  字号：10

字体：Cascadia Code

## 设置命名规范

设置私有成员变量以下划线开头

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122233394.png)

 

首先管理命名格式

增加以_开头

 ![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122233224.png)

然后添加

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122233142.png)

 # 下载地址

官网下载地址：https://visualstudio.microsoft.com/zh-hans/downloads/



Vs2017 Enterprise:

NJVYC-BMHX2-G77MM-4XJMR-6Q8QF

Vs2017 Professional:

KBJFW-NXHK6-W4WJM-CRMQB-G3CDH

Vs 2019企业版

BF8Y8-GN2QH-T84XB-QVY3B-RC4DF

Visual Studio 2019 Enterprise

BF8Y8-GN2QH-T84XB-QVY3B-RC4DF

Visual Studio 2019 Professional

NYWVH-HT4XC-R2WYW-9Y3CM-X4V3Y

Vs2022激活码：

Pro:

TD244-P4NB7-YQ6XK-Y8MMM-YWV2J

Enterprise:

VHF9H-NXBBB-638P6-6JHCY-88JWH 

> 激活码来源于网络，仅限用于学习使用