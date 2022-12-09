---
title: Log4net
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
# 介绍

log4net是.Net下一个非常优秀的开源日志记录组件。log4net记录日志的功能非常强大。它可以将日志分不同的等级，以不同的格式，输出到不同的媒介。包括到追加文本文件，sqlite数据库，mysql数据库和windows日志中。

# 使用

引用组件

```
 <PackageReference Include="log4net" Version="2.0.12" />
 <PackageReference Include="Microsoft.Extensions.Logging.Log4Net.AspNetCore" Version="5.0.1" />
```

引入log4net中间件

```
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
            .ConfigureLogging(logging =>
            {
                logging.AddFilter("System", LogLevel.Warning);//忽略掉System开头命名空间下的组件产生的warn级别的日志
                logging.AddFilter("Microsoft", LogLevel.Warning);//忽略掉Microsoft开头命名空间下的组件产生的warn级别的日志
                logging.AddLog4Net();//引用组件
            })
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();
            });
```

日志级别配置

```
{
  "Logging": {
    "LogLevel": {
      "Default": "Debug",//日志级别配置
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  }
}
```

使用

```
private readonly ILogger<WeatherForecastController> _logger;

public WeatherForecastController(ILogger<WeatherForecastController> logger)
{
    _logger = logger;
}

[HttpGet]
public string Get()
{
    //默认是输出在控制台上
    _logger.LogTrace("trace");
    _logger.LogDebug("debug");
    _logger.LogInformation("info");
    _logger.LogWarning("warn");
    _logger.LogError("error");
    _logger.LogCritical("critical");
    return "成功";
}
```

输出结果

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619104196683-462ed3cf-6d3f-4446-9ae5-501f06a5c5a1.png)

# 配置文件

log4net.Config文件

```s
<?xml version="1.0" encoding="utf-8"?>
<log4net>
  <!-- 错误 Error.log-->
  <appender name="MYLOG" type="log4net.Appender.RollingFileAppender">
    <!--目录路径，可以是相对路径或绝对路径-->
    <param name="File" value="SysLog\\"/>
    <!--文件名，按日期生成文件夹-->
    <param name="DatePattern" value="/yyyy-MM-dd/&quot;Error.log&quot;"/>
    <!--追加到文件-->
    <appendToFile value="true"/>
    <!--创建日志文件的方式，可选值：Date[日期],文件大小[Size],混合[Composite]-->
    <rollingStyle value="Composite"/>
    <!--写到一个文件-->
    <staticLogFileName value="false"/>
    <!--单个文件大小。单位:KB|MB|GB-->
    <maximumFileSize value="200MB"/>
    <!--最多保留的文件数，设为"-1"则不限-->
    <maxSizeRollBackups value="-1"/>
    <!--日志格式-->
    <layout type="log4net.Layout.PatternLayout">
      <!--<conversionPattern value="%message"/>-->
      <param name="ConversionPattern" value="----------------%n%d [%t] %-5p %c [%x] %L %nMSG:%m%n" />
    </layout>
    <!--该配置要输出的日志最低级别和最高级别-->
    <!--<filter type="log4net.Filter.LevelRangeFilter">
      <param name="LevelMin" value="INFO" />
      <param name="LevelMax" value="ERROR" />
    </filter>-->
  </appender>

  <!-- levels: OFF > FATAL > ERROR > WARN > INFO > DEBUG  > ALL -->
  <root>
    <priority value="ALL"/>
    <level value="ALL"/>
    <appender-ref ref="MYLOG" />
  </root>
</log4net>
```