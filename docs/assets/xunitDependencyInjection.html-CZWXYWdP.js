import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c,a as n,d as s,e as a,b as u}from"./app-qB9_Bjjp.js";const p="/kbms/common/image-20231113092808439.png",r={},o=n("h2",{id:"概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#概述"},[n("span",null,"概述")])],-1),d={href:"https://github.com/pengweiqhca/Xunit.DependencyInjection",target:"_blank",rel:"noopener noreferrer"},v=u(`<h2 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程"><span>工作流程</span></a></h2><p>首先会去尝试寻找项目中的 Startup ，这个 Startup 很类似于 asp.net core 中的 Startup，只是有一点不同， Startup 不支持依赖注入，不能像 asp.net core 中那样注入一个 IConfiguration 对象来获取配置，除此之外，和 asp.net core 的 Startup 有着一样的体验，如果找不到这样的 Startup 就会认为没有需要依赖注入的服务和特殊的配置，直接使用 Xunit 原有的 XunitTestFrameworkExecutor，如果找到了 Startup 就从 Startup 约定的方法中配置 Host，注册服务以及初始化配置流程，最后使用 DependencyInjectionTestFrameworkExecutor 执行我们的 test case.</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h3><p>首先创建一个名为ApiSim的.Net6.0的Api项目，在项目里面增加IUserService的接口和实现(这个实现只依赖一个日志)</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public interface IUserService
{
    /// &lt;summary&gt;
    /// 求和
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;a&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;b&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    int Sum(int a, int b);
}

public class UserService : IUserService
{
    private readonly ILogger&lt;UserService&gt; _logger;

    public UserService(ILogger&lt;UserService&gt; logger)
    {
        _logger = logger;
    }

    public int Sum(int a, int b)
    {
        _logger.LogInformation($&quot;输出入参 a:{a} b:{b}&quot;);
        return a + b;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后创建一个单元测试项目并且去引用上面创建的项目，然后再引用Xunit.DependencyInjection包</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Project</span> <span class="token attr-name">Sdk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Microsoft.NET.Sdk<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PropertyGroup</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TargetFramework</span><span class="token punctuation">&gt;</span></span>net6.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TargetFramework</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImplicitUsings</span><span class="token punctuation">&gt;</span></span>enable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ImplicitUsings</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nullable</span><span class="token punctuation">&gt;</span></span>enable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Nullable</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IsPackable</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IsPackable</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IsTestProject</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IsTestProject</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PropertyGroup</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Xunit.DependencyInjection<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8.7.1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 👈 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Microsoft.NET.Test.Sdk<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>17.5.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xunit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.4.2<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xunit.runner.visualstudio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.4.5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IncludeAssets</span><span class="token punctuation">&gt;</span></span>runtime; build; native; contentfiles; analyzers; buildtransitive<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IncludeAssets</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PrivateAssets</span><span class="token punctuation">&gt;</span></span>all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PrivateAssets</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PackageReference</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coverlet.collector<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3.2.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IncludeAssets</span><span class="token punctuation">&gt;</span></span>runtime; build; native; contentfiles; analyzers; buildtransitive<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IncludeAssets</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PrivateAssets</span><span class="token punctuation">&gt;</span></span>all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PrivateAssets</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PackageReference</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ProjectReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>..\\..\\src\\ApiSim\\ApiSim.csproj<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 👈 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在测试项目中新建一个Startup类并使用下面的方式进行注入服务</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>默认使用 Microsoft.Extensions.DependencyInjection 解析 xUnit 测试用例</p></div><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class Startup
{
    public void ConfigureHost(IHostBuilder hostBuilder)
    {
    }

    public void ConfigureServices(IServiceCollection services)
    {
        //var configuration = hostBuilderContext.Configuration;

        services.AddScoped&lt;IUserService, UserService&gt;();
    }

    public void Configure()
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以在测试项目中新建一个测试类来编写测试方法进行测试</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class UserServiceTest
{
    private readonly IUserService _userService;

    public UserServiceTest(IUserService userService)
    {
        _userService = userService;
    }

    [Fact]
    public void Sum_ReturnOk()
    {
        // 准备
        var originA = 10;
        var originB = 20;

        // 行为
        var result = _userService.Sum(originA, originB);

        // 断言
        Assert.True(result == 30);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后光标聚焦到测试方法上右键就可以运行测试(日志没有输出是正常的，因为在单元测试中输出日志不是这么用的)</p><h3 id="搭配testserver使用" tabindex="-1"><a class="header-anchor" href="#搭配testserver使用"><span>搭配TestServer使用</span></a></h3><p><code>TestServer</code> 主要用于集成测试，使用 <code>TestServer</code> 的好处在于它是基于内存进行交互的没有真正的 HTTP 请求和 TCP 链接，会非常的高效，而且也不会监听某一个端口，所以不会有端口权限的问题。<code>TestServer</code> 的使用主要有两步，首先是服务的注册，可以使用 <code>IHostBuilder</code> 或 <code>IWebHostBuilder</code> 的 <code>UseTestServer</code> 扩展方法注册 <code>TestServer</code>，可以使用 <code>IHost</code> 的 <code>GetTestClient</code> 扩展方法来注册和 <code>TestServer</code> 进行交互的 \`HttpClient，这里也可以通过Xunit.DependencyInjection来集成TestServer</p><h4 id="startup-testing" tabindex="-1"><a class="header-anchor" href="#startup-testing"><span>Startup Testing</span></a></h4><p>新建一个API项目(.Net6之下的版本)，然后比如我们有一个控制器</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>[ApiController]
[Route(&quot;[controller]&quot;)]
public class WeatherForecastController : ControllerBase
{
    private readonly IUserService _userService;

    public WeatherForecastController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet(&quot;sum&quot;)]
    public int Sum(int a, int b)
    {
        return _userService.Sum(a, b);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且IUserService已经在该项目中已经注入到DI容器，现在我们要测试该控制器，那么就可以在测试项目中这么新建Startup</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
/// 引用nuget包：Xunit.DependencyInjection
/// &lt;/summary&gt;
public class Startup
{
    public void ConfigureHost(IHostBuilder hostBuilder)
    {
        hostBuilder.ConfigureWebHostDefaults(builder =&gt;
        {
            builder.UseStartup&lt;WebApplication2.Startup&gt;();

            // 引用nuget包：Microsoft.AspNetCore.Mvc.Testing
            builder.UseTestServer();
            builder.ConfigureServices(services =&gt;
            {
                services.AddSingleton(sp =&gt; sp.GetRequiredService&lt;IHost&gt;().GetTestClient());
            });
        });
    }

    public void ConfigureServices(IServiceCollection services)
    {
        //var configuration = hostBuilderContext.Configuration;
    }

    public void Configure()
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以在测试项目中编写测试用例</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class ApiTest
{
    private readonly HttpClient _client;
    private readonly ITestOutputHelper _testOutputHelper;

    public ApiTest(HttpClient client, ITestOutputHelper testOutputHelper)
    {
        _client = client;
        _testOutputHelper = testOutputHelper;
    }

    [Fact]
    public async Task GetSum()
    {
        // 准备
        var originA = 10;
        var originB = 20;

        // 行为
        var response = await _client.GetAsync($&quot;WeatherForecast/sum?a={originA}&amp;b={originB}&quot;);

        // 断言
        Assert.True(response.IsSuccessStatusCode);

        var responseTest = await response.Content.ReadAsStringAsync();
        _testOutputHelper.WriteLine(responseTest);
        Assert.True(responseTest == &quot;30&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.Net6之下的写法参考：https://www.cnblogs.com/weihanli/p/14152452.html#test-server-integration</p><h4 id="minimal-api-testing" tabindex="-1"><a class="header-anchor" href="#minimal-api-testing"><span>Minimal API Testing</span></a></h4><p>新建单元测试项目，然后在测试项目中需要引用Xunit.DependencyInjection.AspNetCoreTesting的nuget包</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Project</span> <span class="token attr-name">Sdk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Microsoft.NET.Sdk<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PropertyGroup</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TargetFramework</span><span class="token punctuation">&gt;</span></span>net8.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TargetFramework</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImplicitUsings</span><span class="token punctuation">&gt;</span></span>enable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ImplicitUsings</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nullable</span><span class="token punctuation">&gt;</span></span>enable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Nullable</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IsPackable</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IsPackable</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IsTestProject</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IsTestProject</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PropertyGroup</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Microsoft.NET.Test.Sdk<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>17.8.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xunit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.6.2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Xunit.DependencyInjection.AspNetCoreTesting<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8.2.1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 👈
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xunit.runner.visualstudio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.5.4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IncludeAssets</span><span class="token punctuation">&gt;</span></span>runtime; build; native; contentfiles; analyzers; buildtransitive<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IncludeAssets</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PrivateAssets</span><span class="token punctuation">&gt;</span></span>all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PrivateAssets</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PackageReference</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>coverlet.collector<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6.0.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IncludeAssets</span><span class="token punctuation">&gt;</span></span>runtime; build; native; contentfiles; analyzers; buildtransitive<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>IncludeAssets</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PrivateAssets</span><span class="token punctuation">&gt;</span></span>all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PrivateAssets</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PackageReference</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ProjectReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>..\\..\\src\\ApiSample\\ApiSample.csproj<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Project</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在测试项目中编写startup，默认格式如下</p><details class="hint-container details"><summary>Program部分类</summary><p>由于高版本中没有Startup类，只有Program，并且Program不对外公开，所以需要手动在Program中新建一个部分类</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
/// 集成测试引用使用
/// &lt;/summary&gt;
public partial class Program;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class Startup
{
    public IHostBuilder CreateHostBuilder()
    {
        // Program是API项目的Program
        return MinimalApiHostBuilderFactory.GetHostBuilder&lt;Program&gt;();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试用例示例：举例我们调用一个接口</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class GroupTest
{
    private readonly HttpClient _client;

    public GroupTest(HttpClient client)
    {
        _client = client;
    }

    [Fact]
    public async Task Get_GroupList()
    {
        // 准备

        // 测试
        var result =
            await _client.GetFromJsonAsync&lt;ResultModel&lt;IEnumerable&lt;GetGroupListResponse&gt;&gt;&gt;(&quot;/api/Group/GetGroupList&quot;);

        // 断言
        Assert.NotNull(result);
        Assert.True(result.IsSuccess);
        Assert.True(result.Data.Any());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们集成测试还使用的是正式的数据库配置等，我们还可以搭配Testcontainers等不使用正式配置</p><h3 id="使用autofac替换默认di" tabindex="-1"><a class="header-anchor" href="#使用autofac替换默认di"><span>使用Autofac替换默认DI</span></a></h3><p>当你的项目是使用Autofac作为DI处理的，那么就需要使用Autofac替换默认的DI</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class Startup
{
    public void ConfigureHost(IHostBuilder hostBuilder)
    {
        hostBuilder.UseServiceProviderFactory(new AutofacServiceProviderFactory(builder =&gt;
        {
            builder.RegisterType&lt;UserService&gt;()
                .As&lt;IUserService&gt;()
                .SingleInstance();
        }));
    }

    public void ConfigureServices(IServiceCollection services)
    {
        //var configuration = hostBuilderContext.Configuration;
    }

    public void Configure()
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logging" tabindex="-1"><a class="header-anchor" href="#logging"><span>Logging</span></a></h3><p>在快速上手示例基础上，我们想在测试用例中输出日志信息，默认是使用ITestOutputHelper类来实现，直接在测试用例中进行注入</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class UserServiceTest
{
    private readonly IUserService _userService;
    private readonly ITestOutputHelper _outputHelper;

    public UserServiceTest(IUserService userService, ITestOutputHelper outputHelper)
    {
        _userService = userService;
        _outputHelper = outputHelper;
    }

    [Fact]
    public void Sum_ReturnOk()
    {
        // 准备
        var originA = 10;
        var originB = 20;

        // 行为
        var result = _userService.Sum(originA, originB);
        _outputHelper.WriteLine($&quot;输出测试结果：{result}&quot;);

        // 断言
        Assert.True(result == 30);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行测试方法，效果如下</p><figure><img src="`+p+`" alt="image-20231113092808439" tabindex="0" loading="lazy"><figcaption>image-20231113092808439</figcaption></figure><p>仔细看就可以知道我们UserService中还有一个ILogger的日志并没有输出出来，这个就不太好了，所以得找个解决方案，如在Xunit.DependencyInjection包的基础上使用日志，通过引用nuget包Xunit.DependencyInjection.Logging，然后项目文件如下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;Project Sdk=&quot;Microsoft.NET.Sdk&quot;&gt;

    &lt;PropertyGroup&gt;
        &lt;TargetFramework&gt;net6.0&lt;/TargetFramework&gt;
        &lt;ImplicitUsings&gt;enable&lt;/ImplicitUsings&gt;
        &lt;Nullable&gt;enable&lt;/Nullable&gt;

        &lt;IsPackable&gt;false&lt;/IsPackable&gt;
        &lt;IsTestProject&gt;true&lt;/IsTestProject&gt;
    &lt;/PropertyGroup&gt;

    &lt;ItemGroup&gt;
        &lt;PackageReference Include=&quot;Xunit.DependencyInjection&quot; Version=&quot;8.7.1&quot; /&gt;
        &lt;PackageReference Include=&quot;Xunit.DependencyInjection.Logging&quot; Version=&quot;8.1.0&quot; /&gt;  👈
        &lt;PackageReference Include=&quot;Microsoft.NET.Test.Sdk&quot; Version=&quot;17.5.0&quot;/&gt;
        &lt;PackageReference Include=&quot;xunit&quot; Version=&quot;2.4.2&quot;/&gt;
        &lt;PackageReference Include=&quot;xunit.runner.visualstudio&quot; Version=&quot;2.4.5&quot;&gt;
            &lt;IncludeAssets&gt;runtime; build; native; contentfiles; analyzers; buildtransitive&lt;/IncludeAssets&gt;
            &lt;PrivateAssets&gt;all&lt;/PrivateAssets&gt;
        &lt;/PackageReference&gt;
        &lt;PackageReference Include=&quot;coverlet.collector&quot; Version=&quot;3.2.0&quot;&gt;
            &lt;IncludeAssets&gt;runtime; build; native; contentfiles; analyzers; buildtransitive&lt;/IncludeAssets&gt;
            &lt;PrivateAssets&gt;all&lt;/PrivateAssets&gt;
        &lt;/PackageReference&gt;
    &lt;/ItemGroup&gt;

    &lt;ItemGroup&gt;
      &lt;ProjectReference Include=&quot;..\\..\\src\\ApiSim\\ApiSim.csproj&quot; /&gt;
    &lt;/ItemGroup&gt;

&lt;/Project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在单元测试项目startup中进行配置，这时候startup类就变成了</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class Startup
{
    public void ConfigureHost(IHostBuilder hostBuilder)
    {
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddScoped&lt;IUserService, UserService&gt;();
        // 注入日志
        services.AddLogging(x =&gt; x.AddXunitOutput()); // 👈
    }

    public void Configure()
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在测试用例文件中直接注入ILogger&lt;测试用例类&gt;进行使用，例如</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class UserServiceTest
{
    private readonly IUserService _userService;
    private readonly ITestOutputHelper _outputHelper;
    private readonly ILogger&lt;UserServiceTest&gt; _logger;

    public UserServiceTest(IUserService userService, ITestOutputHelper outputHelper, ILogger&lt;UserServiceTest&gt; logger)
    {
        _userService = userService;
        _outputHelper = outputHelper;
        _logger = logger;
    }

    [Fact]
    public void Sum_ReturnOk()
    {
        // 准备
        var originA = 10;
        var originB = 20;

        // 行为
        var result = _userService.Sum(originA, originB);
        _outputHelper.WriteLine($&quot;输出测试结果：{result}&quot;);
        _logger.LogInformation($&quot;输出测试结果：{result}&quot;);

        // 断言
        Assert.True(result == 30);
    }
}

-- 输出结果
[2023-11-24 08:10:27Z] info: UserService[0]
      输出入参 a:10 b:20
输出测试结果：30
[2023-11-24 08:10:27Z] info: ApiSim.XunitDependencyInjection.Test.UserServiceTest[0]
      输出测试结果：30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="itestoutputhelperaccessor" tabindex="-1"><a class="header-anchor" href="#itestoutputhelperaccessor"><span>ITestOutputHelperAccessor</span></a></h3><p>暂时未知使用场景</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class InvokeHelper
{
    private readonly ITestOutputHelperAccessor _outputHelperAccessor;

    public InvokeHelper(ITestOutputHelperAccessor outputHelperAccessor)
    {
        _outputHelperAccessor = outputHelperAccessor;
    }

    public void Profile(Action action, string actionName)
    {
        var watch = Stopwatch.StartNew();
        action();
        watch.Stop();
        _outputHelperAccessor.Output?.WriteLine($&quot;{actionName} elapsed:{watch.ElapsedMilliseconds}ms&quot;);
    }
}

public class HostTest
{
    private readonly InvokeHelper _invokeHelper;

    public HostTest(InvokeHelper invokeHelper)
    {
        _invokeHelper = invokeHelper;
    }

    [Fact]
    public void OutputHelperAccessorTest()
    {
        _invokeHelper.Profile(() =&gt;
        {
            Thread.Sleep(3000);
        },nameof(OutputHelperAccessorTest));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,51),m={href:"https://www.cnblogs.com/weihanli/p/13941796.html",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"源码参考：https://github.com/pengweiqhca/Xunit.DependencyInjection/tree/main/test/Xunit.DependencyInjection.Test.AspNetCore",-1);function b(k,h){const e=i("ExternalLinkIcon");return l(),c("div",null,[o,n("p",null,[s("一个用来简化xUnit编写单元测试和集成测试的包 仓库地址："),n("a",d,[s("https://github.com/pengweiqhca/Xunit.DependencyInjection"),a(e)])]),v,n("p",null,[s("使用 Xunit.DependencyInjection 改造测试项目："),n("a",m,[s("https://www.cnblogs.com/weihanli/p/13941796.html"),a(e)])]),g])}const q=t(r,[["render",b],["__file","xunitDependencyInjection.html.vue"]]),f=JSON.parse('{"path":"/middleware/testMange/unitTest/xunitDependencyInjection.html","title":"Xunit.DependencyInjection","lang":"zh-CN","frontmatter":{"title":"Xunit.DependencyInjection","lang":"zh-CN","date":"2023-10-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"jitacaozuo","slug":"qagknl4g1hs5sgbg","docsId":"142316218","description":"概述 一个用来简化xUnit编写单元测试和集成测试的包 仓库地址：https://github.com/pengweiqhca/Xunit.DependencyInjection 工作流程 首先会去尝试寻找项目中的 Startup ，这个 Startup 很类似于 asp.net core 中的 Startup，只是有一点不同， Startup 不支持...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/testMange/unitTest/xunitDependencyInjection.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Xunit.DependencyInjection"}],["meta",{"property":"og:description","content":"概述 一个用来简化xUnit编写单元测试和集成测试的包 仓库地址：https://github.com/pengweiqhca/Xunit.DependencyInjection 工作流程 首先会去尝试寻找项目中的 Startup ，这个 Startup 很类似于 asp.net core 中的 Startup，只是有一点不同， Startup 不支持..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/image-20231113092808439.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-24T08:13:07.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-24T08:13:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Xunit.DependencyInjection\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/image-20231113092808439.png\\"],\\"datePublished\\":\\"2023-10-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-24T08:13:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"工作流程","slug":"工作流程","link":"#工作流程","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"快速上手","slug":"快速上手","link":"#快速上手","children":[]},{"level":3,"title":"搭配TestServer使用","slug":"搭配testserver使用","link":"#搭配testserver使用","children":[{"level":4,"title":"Startup Testing","slug":"startup-testing","link":"#startup-testing","children":[]},{"level":4,"title":"Minimal API Testing","slug":"minimal-api-testing","link":"#minimal-api-testing","children":[]}]},{"level":3,"title":"使用Autofac替换默认DI","slug":"使用autofac替换默认di","link":"#使用autofac替换默认di","children":[]},{"level":3,"title":"Logging","slug":"logging","link":"#logging","children":[]},{"level":3,"title":"ITestOutputHelperAccessor","slug":"itestoutputhelperaccessor","link":"#itestoutputhelperaccessor","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1700813587000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2},{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":6.48,"words":1945},"filePathRelative":"middleware/testMange/unitTest/xunitDependencyInjection.md","localizedDate":"2023年10月14日","excerpt":"<h2>概述</h2>\\n<p>一个用来简化xUnit编写单元测试和集成测试的包\\n仓库地址：<a href=\\"https://github.com/pengweiqhca/Xunit.DependencyInjection\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/pengweiqhca/Xunit.DependencyInjection</a></p>\\n<h2>工作流程</h2>\\n<p>首先会去尝试寻找项目中的 Startup ，这个 Startup 很类似于 asp.net core 中的 Startup，只是有一点不同， Startup 不支持依赖注入，不能像 asp.net core 中那样注入一个 IConfiguration 对象来获取配置，除此之外，和 asp.net core 的 Startup 有着一样的体验，如果找不到这样的 Startup 就会认为没有需要依赖注入的服务和特殊的配置，直接使用 Xunit 原有的 XunitTestFrameworkExecutor，如果找到了 Startup 就从 Startup 约定的方法中配置 Host，注册服务以及初始化配置流程，最后使用 DependencyInjectionTestFrameworkExecutor 执行我们的 test case.</p>","autoDesc":true}');export{q as comp,f as data};
