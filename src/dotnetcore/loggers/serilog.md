---
title: Serilog
lang: zh-CN
date: 2021-01-24
publish: true
author: azrng
isOriginal: true
category:
 - dotNet
tag:
 - log
---
# 1. 介绍

与.NET的许多其他库一样，Serilog也提供对文件，控制台和[ 其他地方的](https://github.com/serilog/serilog/wiki/Provided-Sinks)诊断日志记录 。它易于设置，具有简洁的API，并且可以在最新的.NET平台之间移植。还在构建时考虑了强大的*结构化事件数据*。

官网：https://serilog.net/

GitHub：https://github.com/serilog/serilog

# 2. NuGet

- Serilog 提供了对基本的结构化日志的功能支持
- Serilog.AspNetCore

基于AspNetCore框架整合的Serilog日志记录程序包，包含了Serilog基本库和控制台日志的实现。

- Serilog.Extensions.Logging 包含了注入了Serilog的拓展方法。
- Serilog.Sinks.Async 实现了日志异步收集。

- Serilog.Sinks.Console 实现了控制台输出日志。
- Serilog.Sinks.Debug 实现了调试台输出日志。

- Serilog.Sinks.File 实现了文件输出日志。
- Serilog.Settings.Configuration 打通了serilog和Configuration，这样子就可以直接从appsettings.json中读取配置

- Serilog.Sinks.RollingFile 实现了对滚动文件的支持

根据情况选择不同的组件

# 3. 简单用法

## 3.1 控制台输出

```
public HomeController(ILogger<HomeController> logger)
{
    using (var logConfig = new LoggerConfiguration().WriteTo.Console().CreateLogger())
    {
        logConfig.Information("This is a test data.");
    };

    _logger = logger;
}
```

## 3.2 文件输出

```
public HomeController()
{
    var logger = new LoggerConfiguration().MinimumLevel.Debug().WriteTo
        .RollingFile(@"e:\log.txt", retainedFileCountLimit: 7)
        .CreateLogger();

    for (int i = 0; i < byte.MaxValue; i++)
    {
        logger.Information($"log {i}");
    }
}
```

## 3.3 控制台输出并且输出到文件

### 3.3.1 安装Nuget包

Serilog.AspNetCore

Serilog.Extensions.Logging.File

### 3.3.2 方案一

修改appsettings文件

```
{
    "Serilog": {
        "WriteTo": [
            {
                "Name": "RollingFile",
                "Args": {
                    "pathFormat": "Serilogs\\{Date}.txt",
                    "RestrictedToMinimumLevel": "Warning",
                    "rollingInterval": "Day",
                    "outputTemplate": "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}"
                }
            },
            {
                "Name": "Console",
                "Args": {}
            }
        ],
        "MinimumLevel": {
            "Default": "Debug",
            "Override": {
                "Microsoft": "Information",
                "System": "Information"
            }
        }
    },
    "AllowedHosts": "*"
}
```

修改Program方法

```
public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                }).UseSerilog((hostingContext, loggerConfiguration) =>
                {
                    loggerConfiguration.ReadFrom.Configuration(hostingContext.Configuration)
                    .Enrich.FromLogContext();
                });
    }
```

### 3.3.2 方案二

修改Program方法

```
    public static class Program
    {
        public static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
             .MinimumLevel.Information()//配置日志级别
             .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
             .WriteTo.File("log.txt", rollingInterval: RollingInterval.Day, rollOnFileSizeLimit: true)
             .Enrich.FromLogContext()
             .WriteTo.Console()
             .CreateLogger();

            try
            {
                Log.Information("Starting web host");
                CreateHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "Host terminated unexpectedly");
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
              .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
```

注：这种方式不用修改appsettings.json

### 3.3.3 控制器中使用

#### 3.3.3.1 注入

```
private readonly ILogger<WeatherForecastController> _logger;
```

#### 3.3.3.2 输出

```
_logger.LogTrace("0 Trace日志");
_logger.LogDebug("1 我是一个调试日志");
_logger.LogInformation("2  我是一个info日志");
_logger.LogWarning("3  我是一个警告日志");
_logger.LogError("4   我是一个错误日志");
_logger.LogCritical("5   LogCritical 立刻修复");
```

# 4. 参考文档

https://github.com.cnpmjs.org/serilog/serilog/wiki