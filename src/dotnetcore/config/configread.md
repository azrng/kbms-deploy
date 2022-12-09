---
title: 配置读取
lang: zh-CN
date: 2021-08-25
publish: true
author: azrng
isOriginal: true
category:
 - dotNet
tag:
 - config
---
## 1. 说明

默认情况下读取配置Configuration的默认优先级：ConfigureAppConfiguration(自定义读取)>CommandLine(命令行参数)>Environment(环境变量)>appsetting.json(默认配置文件)>UseSetting的顺序

原因：读取配置的顺序是后来者居上模式，后来注册的会优先被读取到。

默认环境：Development、Production

## 2. 获取配置

## 2.1 获取单个项

测试文件

```
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "RabbitMQ": {
    "Hosts": [ "**.***.***.**" ],
    "Port": 5672,
    "UserName": "admin",
    "Password": "123456789",
    "VirtualHost": "myQueue"
  },
  "array": {
    "entries": {
      "0": "value00",
      "1": "value10",
      "2": "value20",
      "4": "value40",
      "5": "value50"
    }
  },
  "AllowedHosts": "*"
}
```

### 2.1.1 GetValue

```
//值是int类型
var a1 = Configuration.GetValue<int>("RabbitMQ:Port");
//值是字符串
var a2 = Configuration.GetValue<string>("RabbitMQ:UserName");

//获取数组第一个
var a0 = Configuration["RabbitMQ:Hosts:0"];

var a3 = Configuration["RabbitMQ:UserName"];
```

### 2.1.2 GetSection

会返回具有指定子节键的配置子节。

```

//值是数组
var a0 = Configuration.GetSection("RabbitMQ:Hosts").Get<string[]>();

var key1 = Configuration.GetSection("array:entries")["0"];//value00
```

`GetSection` 永远不会返回 `null`。 如果找不到匹配的节，则返回空 `IConfigurationSection`。

### 2.1.3 GetChildren 和 Exists

```
var selection = Configuration.GetSection("array:entries");
if (!selection.Exists())
{
    throw new Exception("section2 does not exist.");
}
var children = selection.GetChildren();
var strList = new List<string>();
foreach (var subSection in children)
{
    strList.Add(subSection.Key + ":key");
}
var str = JsonConvert.SerializeObject(strList);//["0:key","1:key","2:key","4:key","5:key"]
```

### 2.2 映射项到强类型对象

模型类

```
public class RabbitMQConfig
{
    public const string RabbitMQ = "RabbitMQ";
    public string[] Hosts { get; set; }

    public int Port { get; set; }

    public string UserName { get; set; }

    public string Password { get; set; }

    public string VirtualHost { get; set; }
}
```

appsettings

```
  "RabbitMQ": {
    "Hosts": [ "**.***.***.**" ],
    "Port": 5672,
    "UserName": "admin",
    "Password": "123456789",
    "VirtualHost": "myQueue"
  }
```

#### 2.2.1 映射项到模型类

```
var info = new RabbitMQConfig();
Configuration.Bind(RabbitMQConfig.RabbitMQ, info);
//or
var info2 = new RabbitMQConfig();
//Bind方法的参数可以增加配置绑定到私有类上
Configuration.GetSection(RabbitMQConfig.RabbitMQ).Bind(info2);
//or
var info3 = Configuration.GetSection(RabbitMQConfig.RabbitMQ).Get<RabbitMQConfig>();
```

#### 2.2.2 注入模型类

```
//startup配置 
services.Configure<RabbitMQConfig>(Configuration.GetSection(RabbitMQConfig.RabbitMQ));
```

### 2.2.3 使用

```
private readonly RabbitMQConfig _rabbitMQConfig;
public WeatherForecastController(IOptions<RabbitMQConfig> options)
{
    _rabbitMQConfig = options.Value;
}
```

> 程序启动后再修改 JSON 配置文件所做的更改获取不到。 若要读取在应用启动后的更改，请使用 [IOptionsSnapshot](https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/configuration/options?view=aspnetcore-5.0#ios)

