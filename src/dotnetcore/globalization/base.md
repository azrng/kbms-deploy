---
title: 多语言配置
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - global
---
# 介绍

支持多语言使网站可以覆盖更广泛的受众。 ASP.NET Core 提供的服务和中间件可将网站本地化为不同的语言。

本次示例环境：vs2019、net5

# 配置

无需引用Nuget包即可实现以下功能。

## 注入容器

```
services.AddLocalization(t =>
{
    t.ResourcesPath = "Language";
});
```

## 启用配置

```
var supportedCultures = new List<CultureInfo>()
{
    new CultureInfo("zh-CN"),
    new CultureInfo("en-US")
};
app.UseRequestLocalization(new RequestLocalizationOptions
{
    //这里指定默认语言包
    DefaultRequestCulture = new RequestCulture("en-US"),//为了测试配置默认语言英文
    SupportedCultures = supportedCultures,
    SupportedUICultures = supportedCultures
});
```

## 语言配置文件

需要在根目录新建一个文件夹，文件夹名字就是ResourcesPath的名字。资源文件(resx结尾)存放路径需要和使用的地方目录结构一致。(右键文件夹>添加>新建项)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620743639094-5602d16d-4cbb-45d6-a7fb-6a36098f3fd2.png)

语言包下的目录结构和MVC对应，控制器对应控制器，视图对应视图。资源文件命名方式为使用文件的文件名称加上语言代码。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620034709077-45121370-8b26-42a5-970c-ed5509b50720.png)

# 读取资源文件

在控制器中使用，依赖注入资源文件

```
[ApiController]
[Route("[controller]")]
public class HomeController : ControllerBase
{
    private readonly IStringLocalizer<HomeController> _localizer;

    public HomeController(IStringLocalizer<HomeController> localizer)
    {
        _localizer = localizer;
    }

    [HttpGet]
    public string Get()
    {
        return _localizer["succeed"].Value;//如果找不到succeed的本地化值，那么就返回字符串“succeed”
    }
}
```

# 测试

有多种方法可以告诉程序需要使用哪一个语言文件，下面只说常见的使用，还支持自定义 。

默认输出

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620739094068-441806c6-1df0-4187-a8cf-44031e34942b.png)

## HTTP报文

和常见的请求一样添加Accept-Language请求头即可

```
Accept-Language:zh-CN
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620739027856-d2b61f2f-08ff-4e39-bed0-66d618939e25.png)

## Cookie

默认使用cookie名称.AspNetCore.Culture，值是

```
c=zh-CN|uic=zh-CN
c=zh-CN
uic=zh-CN
```

c是Culture，uic是UICulture

## URL参数

三种写法，效果一样

```
?culture=zh-CN&ui-culture=zh-CN
?culture=zh-CN
?ui-culture=zh-CN
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620739056710-32704399-15c8-4a13-88d9-1706658774d3.png)

# 参考文档

https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/localization?view=aspnetcore-5.0