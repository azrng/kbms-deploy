---
title: 简单使用-争议篇
lang: zh-CN
date: 2021-08-25
publish: true
author: azrng
isOriginal: true
category:
 - dotNet
tag:
 - unit
 - 单元测试
---
# 单元测试简单使用-争议篇

# 介绍

常用的单元测试是测试方法、API等，下面我们来演示一下Xunit测试框架的简单使用，有些是为了演示而写的单元测试。

最下面有反转，一定要看到最后

# 操作

## 创建单元测试项目

本次文章还在原来项目的基础上进行操作，右键解决方案添加单元测试项目

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631872707111-5bc7e39a-e7c5-484d-88e3-2687849ea4a9.png)

选择框架版本为.Net 5.0

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631872791679-fd470686-fef4-4c00-b540-f7a6e27c2019.png)

单元测试项目创建完成。然后引用我们的包

```
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>.NETCoreApp,Version=v5.0</TargetFramework>

    <IsPackable>false</IsPackable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.TestHost" Version="5.0.10" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="16.9.4" />
    <PackageReference Include="xunit" Version="2.4.1" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.4.3">
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
      <PrivateAssets>all</PrivateAssets>
    </PackageReference>
    <PackageReference Include="coverlet.collector" Version="3.0.2" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\Net5ByDocker\Net5ByDocker.csproj" />
  </ItemGroup>

</Project>
```

TargetFramework：指定测试项目的目标框架

IsPackable：设置是否允许打包单元测试项目

xunit：该xunit包引入了三个子包，其中包括大多数开发人员想要的功能：（xunit.core测试框架本身）、 xunit.assert（包含Assert类的库）和xunit.analyzers（使 Roslyn 分析器能够检测单元测试和 xUnit.net 可扩展性的常见问题）

包xunit.runner.visualstudio和Microsoft.NET.Test.Sdk 是能够在 Visual Studio 中运行测试项目以及使用 dotnet test.

coverlet.collector：该coverlet.collector包允许收集代码覆盖率。如果您不打算收集代码覆盖率，则应删除此包引用。



如果想使用MSTest框架，那么只需要在需要进行测试的方法上面点击右键，创建单元测试

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631862845735-4fe85e55-66aa-4aaa-873a-74e90a0a6c5c.png)

点击确定后将会为我们创建一个单元测试的应用程序，关于User控制器的单元测试我们就写在这个里面

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631862921441-56d5230b-68c0-4353-a4f1-8e971331f5f1.png)

这里我们并不使用MSTest进行测试。



创建基类文件BaseTest

```
public class BaseTest
{
    protected readonly ITestOutputHelper Output;
    public BaseTest(ITestOutputHelper output)
    {
        Output = output;
    }

    public string SerializeObject(object obj)
    {
        JsonSerializerSettings settings = new JsonSerializerSettings
        {
            Formatting = Formatting.Indented,
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };
        return JsonConvert.SerializeObject(obj, settings);
    }
}

/// <summary>
/// 构建webhost
/// </summary>
public class BaseWebHostTest : BaseTest
{
    protected readonly TestServer Server;
    public BaseWebHostTest(ITestOutputHelper helper) : base(helper)
    {
        var service = Host.CreateDefaultBuilder()
                            .ConfigureWebHostDefaults(webBuilder =>
                            {
                                webBuilder.UseStartup<Startup>();
                            }).Build().Services;
        Server = new TestServer(service);
    }
}

/// <summary>
/// 只是测试控制器Api
/// </summary>
public class BaseHostTest : BaseTest
{
    protected readonly TestServer Server;
    public BaseHostTest(ITestOutputHelper helper) : base(helper)
    {
        Server = new TestServer(WebHost.CreateDefaultBuilder()
                .UseEnvironment("Development")//测试使用
                .UseStartup<Startup>());
    }
}
```

## 测试API

就以演示获取用户信息为例，我们测试调用接口后是否返回状态码为200

编写构造函数并赋值HttpClient

```
public UserControllerTests(ITestOutputHelper helper) : base(helper)
{
    Client = Server.CreateClient();

    //var token = ""; // 可以对HttpClient进行一些自定请求头等操作
    //Client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
}

public HttpClient Client { get; }
```

测试

```
[Fact()]
public async Task Get_User_ReturnOk()
{
    //Arrange  赋值区域
            
    //Act
    var response = await Client.GetAsync("api/user/getlist");

    //Assert
    Assert.Equal(HttpStatusCode.OK, response.StatusCode);

    Output.WriteLine(await response.Content.ReadAsStringAsync());
}
```

写单元测试一般有三个步骤：Arrange，Act 和 Assert。

- **Arrange** 是准备阶段，这个阶段是准备工作，比如模拟数据、初始化对象等；
- **Act** 是行为阶段，这个阶段是用准备好的数据去调用要测试的方法；

- **Assert** 是断定阶段，就是把调用目标方法返回的值和预期的值进行比较，如果和预期一致说明测试通过，否则为失败。

点击方法名字右键运行测试或者调试测试

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631874394991-3f491644-f098-4e5f-9f48-72026408a39b.png)

## 测试方法

比如我们去对IUserService里面的GetListAsync做单元测试,继承自公共类，通过依赖注入获取IUserService服务

```
public class UserServiceTest : BaseWebHostTest
{
    private readonly IUserService _userService;

    public UserServiceTest(ITestOutputHelper helper) : base(helper)
    {
        _userService = Server.Services.GetRequiredService<IUserService>();
    }

    [Fact]
    public async Task GetUser_ReturnOk()
    {
        //Arrange：准备阶段 

        //Act：行为阶段
        var response = await _userService.GetListAsync();

        //Assert：断言阶段
        Assert.NotNull(response);
        Output.WriteLine(JsonConvert.SerializeObject(response));
    }
}
```

点击方法名字右键运行测试或调试测试

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631951731438-958b27ff-d92e-4587-9e83-d7d342776be6.png)

单元测试成功

## 并行运行测试

在Xunit的2.x版本以后支持并行运行测试。这样子相比如之前可以更好利用服务器性能。

新建测试类RunnerTimeTest，

```
public class RunnerTimeTest
{
    [Fact]
    public void Test1()
    {
        Thread.Sleep(2000);
    }

    [Fact]
    public void Test2()
    {
        Thread.Sleep(3000);
    }
}
```

我们猜一下运行该测试类的话需要耗时多少？2s？3s？

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631876238234-b6957159-6ddf-4415-b19e-974ae7084451.png)

通过这个结果我们可以得出来一个测试类内并不是并行执行的。默认情况下每一个测试类都是一个唯一的测试集合，同一个测试类的测试不会彼此并行运行。那么我们将这两个测试方法分别放入不同的测试类中

```
public class RunnerTimeTest
{
    [Fact]
    public void Test1()
    {
        Thread.Sleep(2000);
    }
}

public class RunnerTimeTest2
{
    [Fact]
    public void Test2()
    {
        Thread.Sleep(3000);
    }
}
```

运行查看效果

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631877298918-c66d17bd-c606-4915-8650-26f3d4f4ab17.png)

可以得到不同的测试类之间是并行执行的。

# 批评

这个是我理解的单元测试样子，但是经过同事的严厉批评，我知道了应该使用单一变量原则，控制一处不同，其他变量保持相同，而不是像该文章一样，依赖项不可控。

# 资料

命令行创建单元测试项目：https://xunit.net/docs/getting-started/netcore/cmdline

ASP.NET Core单元测试：https://www.cnblogs.com/willick/p/aspnetcore-unit-tests-with-xunit.html

并行运行测试：https://xunit.net/docs/running-tests-in-parallel