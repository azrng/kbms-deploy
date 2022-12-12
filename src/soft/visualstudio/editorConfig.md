---
title: EditorConfig
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
---
# 介绍

EditorConfig 是帮助跨多个编辑器和 IDE 的从事同一项目的多个开发人员保持一致性编码风格的一个文本文件。EditorConfig 文件可以设置诸如缩进样式、选项卡宽度、行尾字符以及编码等，而无需考虑使用的编辑器或 IDE。向项目添加 EditorConfig 文件，可以强制对使用该项目的所有人员实施一致的编码风格。EditorConfig 设置优先于全局 Visual Studio 文本编辑器设置。由于这些设置包含在基本代码的文件中，因此能与基本代码一起移动。只要在 EditorConfig 兼容的编辑器中打开代码文件，就能实现文本编辑器设置。有关 EditorConfig 文件的详细信息，请参阅 EditorConfig.org(https://editorconfig.org/) 网站。

常见的IDE支持：vs、rider、vscode等

# 操作

## 添加 

如果是VS2019，那么需要在 Visual Studio 中打开项目或解决方案，点击“帮助” > “关于”，查看您的IDE版本是否是 16.7.1 或更高版本，如果不是请先升级。

向项目或解决方案添加 EditorConfig。
根据要应用 .editorconfig 设置的对象（是解决方案中的所有项目还是其中一个项目），选择项目或解决方案节点。还可在项目或解决方案中选择一个文件夹，向其添加 .editorconfig 文件。
从菜单栏中，选择“项目” > “添加新项”，或按 Ctrl+Shift+A ：

或者在“解决方案资源管理器”中右键单击项目、解决方案或文件夹，选择“添加” > “新建 EditorConfig”：

添加完成后在 .editorconfig 文件中添加 file_header_template 项

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122231511.png)

file_header_template = 添加文件头（add fileheader）示例程序\n Copyright (c) https://ittranslator.cn/ .editorconfig 中换行需要使用 Unix 换行符(\n)来插入新行。

将光标置于任意 C# 或 Visual Basic 文件的第一行， 触发“快速操作和重构”菜单，选择“添加文件头”，如图：

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212122230905.png)

在“修复以下对象中的所有实例:”处可以选择 “文档”、“项目”或“解决方案”

# 资料

官网资料：https://docs.microsoft.com/zh-cn/dotnet/fundamentals/code-analysis/style-rules/