---
title: 工具
lang: zh-CN
date: 2022-12-13
publish: true
author: azrng
isOriginal: true
category:
 - dotnet
tag:
 - 逆向
 - 反编译
 - 调试
---
# 逆向反编译
## dotPeek

官网地址：https://www.jetbrains.com/decompiler/
dotPeek 是 JetBrains 开发的一款.Net反编译工具，是.Net工具套件中的一个，而且免费使用。

使用体验

优点：

查看源码操作快捷键更熟悉，界面更舒服

可以直接搜索nuget包看源码，以及查看每个版本的

缺点：

不能选择语言版本

## ILSpy

官网地址：https://github.com/icsharpcode/ILSpy

下载地址：https://github.com/icsharpcode/ILSpy/releases/tag/v7.2.1

使用体验

优点：

可以选择语言版本

缺点：

快捷键不太习惯

会把里面用到的所有程序集再你查看的时候显示到左侧，有点繁杂

## dnSpy

官网地址：https://github.com/dnSpy/dnSpy

下载地址：

dnSpy是一款开源的基于ILSpy发展而来的.net程序集的编辑，反编译，调试神器。
主要功能：1、程序集编辑;2、反编译器;3、调试工具;4、Tabs及tabs分组;5、提供多主题。

使用体验

# 调试工具

## dnSpy

dnSpy 是用于 .NET 调试的最有用的工具之一。它是一个很好的反编译器。但是它的主要用途是作为调试器。dnSpy允许你调试任何 .NET程序你，而无需考虑符号或者源代码。

该工具的外观和感觉类似于Visual Studio。当你开始调试没有符号或者源代码的.NET进程时，dnSpy将向你显示反编译的代码。现在，这里有个魔术：你可以在反编译的代码本上中放置断点。遇到这些断点时，你将看到局部变量，线程，调用堆栈，并具有完整的调试经验。这使dnSpy成为调试第三方代码和调试生产环境的首选工具。

它轻巧，无需安装。只需将文件夹复制到任何生产机器上，然后开始调试。

## dotTrace

dotTrace是JetBrains的另一个出色工具。这是我最喜欢的性能分析工具。dotTrance允许你“记录”应用程序的运行，然后分析记录的性能。你将能够看到每种调用方法花费了多长时间，数据库调用，HTTP请求以及垃圾回收期间花费的时间等等。

## Fiddler

Fiddler是Progress Telerik的免费工具。这是我最喜欢的网络请求调试工具之一。它被称为HTTP代理服务器，仅此而已。它捕获所有HTTP请求，记录数据，并按其方式发送请求

对于每一个请求，你都可以查看流程，Headers，payload，response，status等所有的内容。

对于调试，Fiddler具有两个有用功能：

重新请求 - 你可以右键单击任何请求，然后单击“Replay”，这将再次发送完全相同的请求。在调试服务器端问题时非常有用。如果你要重现有问题的请求，Fiddler可以避免在客户端上重新运行方案以再次发送相同请求的麻烦。它还有助于处理难以重现的请求。

编辑并重新请求 - 除了重新请求外，Fiddler允许我们修改请求。你可以更改标题，正文，甚至URL本身。你可以使用它来查看服务器端如何处理极端情况。或重现特定请求上发生的问题。