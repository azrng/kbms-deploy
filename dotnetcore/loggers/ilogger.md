---
title: Logger
date: '2021/01/24'
publish: true
categories:
 - dotNet
tags:
 - log
---
# 介绍

这是asp.net core中内置的一个通用日志接口组件。

# 日志级别

**日志级别说明**：每一个日志都有指定的日志级别值，日志级别判断指示严重性或重要性。使用日志等级可以很好的过滤想要的日志，记录日志记录问题的同时，甚至为我们提供非常详细的日志信息。

**LogLevel 严重性：Trace < Debug < Information < Warning < Error < Critical < None。**

| **日志级别**        | **常用场景**                                                 |
| ------------------- | ------------------------------------------------------------ |
| **Trace = 0**       | 记录一些对程序员调试问题有帮助的信息,   其中可能包含一些敏感信息, 所以应该避免在 生产环境中启用Trace日志，因此不应该用于生产环境。默认应禁用。 |
| **Debug = 1**       | 记录一些在开发和调试阶段有用的短时变   量(Short-term usefulness), 所以除非为了临时排除生产环境的   故障，开发人员应该尽量避免在生产环境中启用Debug日志，默认情况下这是最详细的日志。 |
| **Information = 2** | 记录跟踪应用程序的一些流程,   例如，记录当前api请求的url。   |
| **Warning = 3**     | 记录应用程序中发生出现错误或其它导致程序停止的流程异常信息。   这些信息中可能包含错误消息或者错误产生的条件, 可供后续调查，例如, 文件未找到 |
| **Error = 4**       | 记录应用程序中某个操作产生的错误和异常信息。这些消息应该指明当前活动或操作（比如当前的   HTTP 请求），而不是应用程序范围的故障。 |
| **Critical = 5**    | 记录一些需要立刻修复，急需被关注的问题，应当记录关键级别的日志。例如数据丢失，磁盘空间不足等。 |

# 日志配置

注意：日志配置通常取决于 appsettings {Environment}.json 文件的 Logging配置节，支持多个LogPrivider、过滤日志、定制特定种类的日志收集级别。

配置文件

```
{
  "Logging": {
    "Debug": {
      "LogLevel": {
        "Default": "Information"
      }
    },
    "Console": {
      "LogLevel": {
       "Microsoft.AspNetCore.Mvc.Razor.Internal": "Warning",
       "Microsoft.AspNetCore.Mvc.Razor.Razor": "Debug",
       "Microsoft.AspNetCore.Mvc.Razor": "Error",
       "Default": "Information"
      }
    },
    "LogLevel": {
      "Microsoft": "Warning",
      "Microsoft.AspNetCore.Hosting.Diagnostics": "Information",    // 提供给第三方调用API日志
      "Microsoft.Hosting.Lifetime": "Information",
      "Microsoft.EntityFrameworkCore.Database.Command": "Information",  //数据库操作sql日志
      "System.Net.Http.HttpClient": "Information",    // 应用内部发起的Http请求日志
      "Default": "Warning"    // 除以上日志之外，记录Warning+级别日志
    }
  }
}
```

此 JSON 将创建 6 条筛选规则：Debug中1 条用于调试提供程序，Console中 4 条用于控制台提供程序，最后一条LogLevel 用于所有提供程序。 创建 ILogger 对象时，为每个提供程序选择一个规则。

# 简单操作

在类库中使用需要先引用指定组件using Microsoft.Extensions.Logging;

配置文件中进行配置

```
{
  "Logging": {
    "LogLevel": {
      "Default": "Debug", //大于等于这个级别的才会被输出
      "Microsoft": "Warning", //类别适用于以 "Microsoft" 开头的所有类别
      "Microsoft.Hosting.Lifetime": "Information" //类别比 "Microsoft" 类别更具体，因此 "Microsoft.Hosting.Lifetime" 类别在日志级别“Information”和更高级别记录。
    }
  }
}
```

 代码中使用：

```
private readonly ILogger<HomeController> _logger;

public HomeController(ILogger<HomeController> logger)
{
    _logger = logger;
}

[HttpGet]
public string Get()
{
    /*
        日志配置通常由 appsettings {Environment}.json 文件的 Logging 部分提供
        */
    _logger.LogTrace("0 Trace日志");
    _logger.LogDebug("1 我是一个Debug日志");
    _logger.LogInformation("2  我是一个info日志");
    _logger.LogWarning("3  我是一个警告日志");
    _logger.LogError("4   我是一个错误日志");
    _logger.LogCritical("5   LogCritical 立刻修复");
    return "成功";
}
```

 运行查看输出效果

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619945473634-900e7717-5bff-4fbf-b485-1ff1102cd69a.png)