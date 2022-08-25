---
title: 基础知识
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - dotNet
---
# .Net是什么

.NET 是一个免费的、跨平台的、开源的开发者平台，用于构建多种不同类型的应用程序。

# .Net可以做什么

使用 .NET，您可以使用多种语言、编辑器和库来构建 Web、移动、桌面、游戏和 IoT。

全面的c#编码规范(勤快哥)：https://masuit.com/1755

# 教程

## 博客

* [官网]: https://docs.microsoft.com/zh-cn/
* [博客园]: https://www.cnblogs.com/cate/dotnetcore/

## 视频

* [老张的哲学8]: https://space.bilibili.com/387802716
* [杨中科]: https://space.bilibili.com/27948784
* [dotNet源计划]: https://space.bilibili.com/12074309
* [Donet易生君]: https://space.bilibili.com/486478189
* [DotNET大王]: https://space.bilibili.com/486134845
* [角落的白板报]: https://space.bilibili.com/2954671
* [杨旭]: https://space.bilibili.com/361469957
* [ArgoZhang]: https://space.bilibili.com/660853738
* [全栈ACE]: https://space.bilibili.com/525836469
> 注：排名不论先后

## 实验
* [微软Learn]: https://docs.microsoft.com/zh-cn/learn/browse/
* [腾讯云实验室]: https://cloud.tencent.com/developer/labs/gallery
* [阿里云实验室]: https://developer.aliyun.com/adc/labs


# 常用概念解释

## Net Framework 是什么

* Net Framework 是Net的一种实现，在此类库上我们可以使用C#，VB，F#进行程序编写，主要用于构建Windows 下的应用程序

* 有两部分组成部分：

  * 公共语言运行时（CLR）处理应用程序

  * 基础类库（BCL）这是可重用的代码库，使用其编写进行应用程序编写

* 在执行的过程中.Net编写的代码将会编译成一种称为中间语音（IL）存储形式以DLL和EXE后缀名结尾的文件为主，当程序运行时CLR会编译转换为机器代码。

* Net Framework 本身不是跨平台的也就是话说仅限于运行在Windows 平台，想要跨平台需要借助第三方。

## Net Core 是什么
* Net Core 的出现就是为了适应软件开发的趋势，因为各种不同的设备还有云计算的出现，其他的操作系统使用量也有所增加，如果Net 不发生改变也就意味着市场将会越来越小。Net Core的出现用于满足当前以及未来软件开发的需求

* NetCore是一个全新的框架，是.Net的跨平台的实现，它和Net Framework有很多共同的特性，这也就意味着Net Framework从业者转到Net Core 将会变的很简单。

* Net Core的所有方面都是开源的，无论是类库，运行时，编译器。NET Core3.0之后支持了C#，VB，F#。

## Net Standard 是什么 

Net Standard 是一个规范，它定义了Net Framewoek和Net Core必须实现的Api,它的出现为各种平台上开发的.Net人员解决了代码共享问题，但是仅用于开发类库，意思就是说如果你的类库是Net Standard规范的，那么此类库既可以是Net Framewoek也可以是Net Core类库。

# 资料

> https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet
>
> Netf、NetCore、Net Standard区别：https://www.cnblogs.com/szlblog/p/11803623.html

