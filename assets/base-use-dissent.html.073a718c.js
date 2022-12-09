import{_ as l,W as r,X as a,Y as n,Z as e,$ as s,a0 as t,y as d}from"./framework.35562d63.js";const c={},v=t('<h1 id="单元测试简单使用-争议篇" tabindex="-1"><a class="header-anchor" href="#单元测试简单使用-争议篇" aria-hidden="true">#</a> 单元测试简单使用-争议篇</h1><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>常用的单元测试是测试方法、API等，下面我们来演示一下Xunit测试框架的简单使用，有些是为了演示而写的单元测试。</p><p>最下面有反转，一定要看到最后</p><h1 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h1><h2 id="创建单元测试项目" tabindex="-1"><a class="header-anchor" href="#创建单元测试项目" aria-hidden="true">#</a> 创建单元测试项目</h2><p>本次文章还在原来项目的基础上进行操作，右键解决方案添加单元测试项目</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631872707111-5bc7e39a-e7c5-484d-88e3-2687849ea4a9.png" alt="img" loading="lazy"></p>',8),u={href:"http://xn--siq071cs7c0papw297bk92c.Net",target:"_blank",rel:"noopener noreferrer"},o=t(`<p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631872791679-fd470686-fef4-4c00-b540-f7a6e27c2019.png" alt="img" loading="lazy"></p><p>单元测试项目创建完成。然后引用我们的包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Project Sdk=&quot;Microsoft.NET.Sdk&quot;&gt;
  &lt;PropertyGroup&gt;
    &lt;TargetFramework&gt;.NETCoreApp,Version=v5.0&lt;/TargetFramework&gt;

    &lt;IsPackable&gt;false&lt;/IsPackable&gt;
  &lt;/PropertyGroup&gt;

  &lt;ItemGroup&gt;
    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.TestHost&quot; Version=&quot;5.0.10&quot; /&gt;
    &lt;PackageReference Include=&quot;Microsoft.NET.Test.Sdk&quot; Version=&quot;16.9.4&quot; /&gt;
    &lt;PackageReference Include=&quot;xunit&quot; Version=&quot;2.4.1&quot; /&gt;
    &lt;PackageReference Include=&quot;xunit.runner.visualstudio&quot; Version=&quot;2.4.3&quot;&gt;
      &lt;IncludeAssets&gt;runtime; build; native; contentfiles; analyzers; buildtransitive&lt;/IncludeAssets&gt;
      &lt;PrivateAssets&gt;all&lt;/PrivateAssets&gt;
    &lt;/PackageReference&gt;
    &lt;PackageReference Include=&quot;coverlet.collector&quot; Version=&quot;3.0.2&quot; /&gt;
  &lt;/ItemGroup&gt;

  &lt;ItemGroup&gt;
    &lt;ProjectReference Include=&quot;..\\Net5ByDocker\\Net5ByDocker.csproj&quot; /&gt;
  &lt;/ItemGroup&gt;

&lt;/Project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TargetFramework：指定测试项目的目标框架</p><p>IsPackable：设置是否允许打包单元测试项目</p>`,5),m={href:"http://xUnit.net",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>包xunit.runner.visualstudio和Microsoft.NET.Test.Sdk 是能够在 Visual Studio 中运行测试项目以及使用 dotnet test.</p><p>coverlet.collector：该coverlet.collector包允许收集代码覆盖率。如果您不打算收集代码覆盖率，则应删除此包引用。</p><p>如果想使用MSTest框架，那么只需要在需要进行测试的方法上面点击右键，创建单元测试</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631862845735-4fe85e55-66aa-4aaa-873a-74e90a0a6c5c.png" alt="img" loading="lazy"></p><p>点击确定后将会为我们创建一个单元测试的应用程序，关于User控制器的单元测试我们就写在这个里面</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631862921441-56d5230b-68c0-4353-a4f1-8e971331f5f1.png" alt="img" loading="lazy"></p><p>这里我们并不使用MSTest进行测试。</p><p>创建基类文件BaseTest</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class BaseTest
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

/// &lt;summary&gt;
/// 构建webhost
/// &lt;/summary&gt;
public class BaseWebHostTest : BaseTest
{
    protected readonly TestServer Server;
    public BaseWebHostTest(ITestOutputHelper helper) : base(helper)
    {
        var service = Host.CreateDefaultBuilder()
                            .ConfigureWebHostDefaults(webBuilder =&gt;
                            {
                                webBuilder.UseStartup&lt;Startup&gt;();
                            }).Build().Services;
        Server = new TestServer(service);
    }
}

/// &lt;summary&gt;
/// 只是测试控制器Api
/// &lt;/summary&gt;
public class BaseHostTest : BaseTest
{
    protected readonly TestServer Server;
    public BaseHostTest(ITestOutputHelper helper) : base(helper)
    {
        Server = new TestServer(WebHost.CreateDefaultBuilder()
                .UseEnvironment(&quot;Development&quot;)//测试使用
                .UseStartup&lt;Startup&gt;());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试api" tabindex="-1"><a class="header-anchor" href="#测试api" aria-hidden="true">#</a> 测试API</h2><p>就以演示获取用户信息为例，我们测试调用接口后是否返回状态码为200</p><p>编写构造函数并赋值HttpClient</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public UserControllerTests(ITestOutputHelper helper) : base(helper)
{
    Client = Server.CreateClient();

    //var token = &quot;&quot;; // 可以对HttpClient进行一些自定请求头等操作
    //Client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue(&quot;Bearer&quot;, token);
}

public HttpClient Client { get; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Fact()]
public async Task Get_User_ReturnOk()
{
    //Arrange  赋值区域
            
    //Act
    var response = await Client.GetAsync(&quot;api/user/getlist&quot;);

    //Assert
    Assert.Equal(HttpStatusCode.OK, response.StatusCode);

    Output.WriteLine(await response.Content.ReadAsStringAsync());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写单元测试一般有三个步骤：Arrange，Act 和 Assert。</p><ul><li><p><strong>Arrange</strong> 是准备阶段，这个阶段是准备工作，比如模拟数据、初始化对象等；</p></li><li><p><strong>Act</strong> 是行为阶段，这个阶段是用准备好的数据去调用要测试的方法；</p></li><li><p><strong>Assert</strong> 是断定阶段，就是把调用目标方法返回的值和预期的值进行比较，如果和预期一致说明测试通过，否则为失败。</p></li></ul><p>点击方法名字右键运行测试或者调试测试</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631874394991-3f491644-f098-4e5f-9f48-72026408a39b.png" alt="img" loading="lazy"></p><h2 id="测试方法" tabindex="-1"><a class="header-anchor" href="#测试方法" aria-hidden="true">#</a> 测试方法</h2><p>比如我们去对IUserService里面的GetListAsync做单元测试,继承自公共类，通过依赖注入获取IUserService服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class UserServiceTest : BaseWebHostTest
{
    private readonly IUserService _userService;

    public UserServiceTest(ITestOutputHelper helper) : base(helper)
    {
        _userService = Server.Services.GetRequiredService&lt;IUserService&gt;();
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击方法名字右键运行测试或调试测试</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631951731438-958b27ff-d92e-4587-9e83-d7d342776be6.png" alt="img" loading="lazy"></p><p>单元测试成功</p><h2 id="并行运行测试" tabindex="-1"><a class="header-anchor" href="#并行运行测试" aria-hidden="true">#</a> 并行运行测试</h2><p>在Xunit的2.x版本以后支持并行运行测试。这样子相比如之前可以更好利用服务器性能。</p><p>新建测试类RunnerTimeTest，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class RunnerTimeTest
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们猜一下运行该测试类的话需要耗时多少？2s？3s？</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631876238234-b6957159-6ddf-4415-b19e-974ae7084451.png" alt="img" loading="lazy"></p><p>通过这个结果我们可以得出来一个测试类内并不是并行执行的。默认情况下每一个测试类都是一个唯一的测试集合，同一个测试类的测试不会彼此并行运行。那么我们将这两个测试方法分别放入不同的测试类中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class RunnerTimeTest
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行查看效果</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631877298918-c66d17bd-c606-4915-8650-26f3d4f4ab17.png" alt="img" loading="lazy"></p><p>可以得到不同的测试类之间是并行执行的。</p><h1 id="批评" tabindex="-1"><a class="header-anchor" href="#批评" aria-hidden="true">#</a> 批评</h1><p>这个是我理解的单元测试样子，但是经过同事的严厉批评，我知道了应该使用单一变量原则，控制一处不同，其他变量保持相同，而不是像该文章一样，依赖项不可控。</p><h1 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h1>`,39),p={href:"https://xunit.net/docs/getting-started/netcore/cmdline",target:"_blank",rel:"noopener noreferrer"},g={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/willick/p/aspnetcore-unit-tests-with-xunit.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://xunit.net/docs/running-tests-in-parallel",target:"_blank",rel:"noopener noreferrer"};function x(T,S){const i=d("ExternalLinkIcon");return r(),a("div",null,[v,n("p",null,[n("a",u,[e("选择框架版本为.Net"),s(i)]),e(" 5.0")]),o,n("p",null,[e("xunit：该xunit包引入了三个子包，其中包括大多数开发人员想要的功能：（xunit.core测试框架本身）、 xunit.assert（包含Assert类的库）和xunit.analyzers（使 Roslyn 分析器能够检测单元测试和 "),n("a",m,[e("xUnit.net"),s(i)]),e(" 可扩展性的常见问题）")]),b,n("p",null,[e("命令行创建单元测试项目："),n("a",p,[e("https://xunit.net/docs/getting-started/netcore/cmdline"),s(i)])]),n("p",null,[n("a",g,[e("ASP.NET"),s(i)]),e(" Core单元测试："),n("a",h,[e("https://www.cnblogs.com/willick/p/aspnetcore-unit-tests-with-xunit.html"),s(i)])]),n("p",null,[e("并行运行测试："),n("a",f,[e("https://xunit.net/docs/running-tests-in-parallel"),s(i)])])])}const _=l(c,[["render",x],["__file","base-use-dissent.html.vue"]]);export{_ as default};
