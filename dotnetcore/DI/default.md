---
title: 默认依赖注入
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - cache
 - di
---

# 介绍

不应该依赖于具体的实现，应该依赖于抽象，高层模块不应该依赖于底层模块，二者应该依赖于抽象(否则业务变更，改动比较大)。简单的说就是为了更好的解耦。而控制反转(Ioc)就是这样的原则的其中一个实现思路, 这个思路的其中一种实现方式就是依赖注入(DI)。(官方原话：依赖注入(DI)这是一种在类和依赖项之间实现控制反转(Ioc)的技术)，

dotNet内置有对依赖注入(DI)的支持，提供了一个内置的服务容器IServiceProvider，程序在启动时候我们预先将服务注册不同生命周期到ServiceCollection，然后利用ServiceCollection来创建ServiceProvider，利用后者提供服务实例，将服务注入到使用到它的类的构造函数中。

只要是用new实例化的都是存在依赖的。

内置的服务容器已经满足框架和大多数项目的需求，一般不需要替换，除非你用到了下面这些功能：

- 属性注入
- 基于名称的注入

- 子容器
- 自定义生命周期

- 对延缓初始化的Func&lt;T&gt; 支持
- 基于约定的注册

# 优点

解耦，使得代码更具有维护性。

方便进行单元测试。

# 服务注册

```
    //注册
    services.AddTransient<IEmailValidCodeQuery, EmailValidCodeQuery>(); // 自动释放对象
    services.AddSingleton<IMyDep>(sp => new MyDep()); // 自动释放对象
	services.AddSingleton<MyDep>(); // 不自动释放对象
	services.AddSingleton<IMyDep>(new MyDep()); //不自动释放对象

	// 如果该IMessageWriter已经注册实现，该代码将没有作用
	services.TryAddSingleton<IMessageWriter, LoggingMessageWriter>();

    //移除和替换注册
    //services.Replace(ServiceDescriptor.Transient<IEmailValidCodeQuery, EmailValidCodeQuery2>());
    services.RemoveAll<IEmailValidCodeQuery>();

    //注册泛型模板
    services.AddSingleton(typeof(IAService<>), typeof(AService<>));
```

# 生命周期

AddSingleton→AddTransient→AddScoped

被注入的服务应该与注入的服务具有相同或者更长的生命周期

## Singleton(单例)

服务在第一次请求时被创建（或者当我们在ConfigureServices中指定创建某一实例并运行方法），其后的每次请求将沿用已创建服务。当应用程序关闭并释放SericeProvider时候，会释放单例服务。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620437795433-1878377b-ead3-4b6b-a749-87f27b0907c0.png)

图片来源自：https://blog.csdn.net/weixin_47498376/article/details/116177389

```
services.AddSingleton<IApplicationService,ApplicationService>
```

比如有状态的、静态类和成员。

## Scoped(作用域)

一次请求开始到请求结束 ，这次请求中获取的对象都是同一个，请求结束时候会释放有作用域的服务。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620437843902-34480f40-cbe1-4cad-a5bd-4f1c84cfca78.png)

图片来源自：https://blog.csdn.net/weixin_47498376/article/details/116177389

```
services.AddScoped<IApplicationService,ApplicationService>
```

如果该service在一个请求过程中多次被用到，并且可能共享其中的字段或者属性，那么就使用scoped，例如httpcontext。 (感谢群里老哥的帮助)

## Transient(瞬时)

每一次获取的对象都不是同一个，适合于轻量级、无状态的服务，请求结束时候会释放服务。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620437917664-c31fe30a-c429-4d5a-b66b-4a065089dd92.png)

图片来源自：https://blog.csdn.net/weixin_47498376/article/details/116177389

```
services.AddTransient<IApplicationService,ApplicationService>
```

如果该service在一次请求中只使用一次，那么就注册Transient就好了。

# 注入方式

```
    /// <summary>
    /// 用户接口
    /// </summary>
    public interface IUserService
    {
        string GetName();
    }

    /// <summary>
    /// 用户实现
    /// </summary>
    public class UserService : IUserService
    {
        public string GetName()
        {
            return "AZRNG";
        }
    }
```

需要在ConfigureServices方法进行注入

## 构造函数注入

服务作为构造函数参数添加，并且运行时从服务容器中解析服务。

```
        private readonly IUserService _userService;

        public UserController(IUserService userService
        	,IEnumerable<IMessageWriter>)// 解析多个服务
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult GetName()
        {
            return Ok(_userService.GetName());
        }
```

## FromServices注入 

```
        [HttpGet]
        public ActionResult GetName([FromServices] IUserService _userService)
        {
            return Ok(_userService.GetName());
        }
```

# 核心

在.NET Core中DI的核心分为两个组件：IServiceCollection和 IServiceProvider。

- IServiceCollection负责注册
- IServiceProvider负责提供实例

```
public void ConfigureServices(IServiceCollection services)
{
	//将服务生命期的范围限定为单个请求的生命期
    services.AddTransient<IUserService, UserService>();
}
```

## 构造函数获取服务

```
private readonly IUserService _userService;
public HomeController(IUserService userService)
{
    _userService = userService;
}

public IActionResult Index()
{
    var info = _userService.GetInfo();
    return View();
}
```

## IServiceProvider获取

```
private readonly IServiceProvider _service;
public UserController(IServiceProvider service)
{
    _service = service;
}

[HttpGet]
public ActionResult GetName()
{
    var _userService = (IUserService)_service.GetService(typeof(IUserService));
    return Ok(_userService.GetName());
}
```

## ConfigureServices中获取服务

```
var provider = services.BuildServiceProvider();
var userserivce = provider.GetService<IUserService>(); // 获取不到为null
//或
var userservice2 = provider.GetRequiredService<IUserService>(); // 获取不到抛出异常
```

## Configure中获取服务

```
var manualScope = app.ApplicationServices.CreateScope();
 
var service = manualScope.ServiceProvider.GetRequiredService<IUserService>();
service.SayHello();
```

## 构建子容器

```
using (var serviceProvider = new ServiceCollection()
                .AddSingleton<ISingletonService, SingletonService>()
                .BuildServiceProvider())
{
    var app = serviceProvider.GetService<ISingletonService>();

    app.Execute();
}
```

自己构建这种需要手动释放，防止内存泄露。避免在ConfigureService中调用BuildServiceProvider。

## 异步获取

```
private readonly IServiceScopeFactory _serviceScopeFactory;

public OrderHander(IServiceScopeFactory serviceScopeFactory)
{
    _serviceScopeFactory = serviceScopeFactory;
}

public Task Hander()
{
    using (var scope = _serviceScopeFactory.CreateScope())
    {
        var userService = scope.ServiceProvider.GetRequiredService<IUserService>();
    }

    return Task.CompletedTask;
}
```

在范围服务中不建议使用构造函数注入，推荐引入IServiceScopeFactory创建范围

# 参考文档

依赖关系注入：https://docs.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection