import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as c,c as o,b as n,e as s,f as e,d as i}from"./app-D8HBJYTp.js";const l={},u=n("h2",{id:"概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#概述"},[n("span",null,"概述")])],-1),r={href:"https://docs.microsoft.com/ZH-CN/dotnet/api/microsoft.aspnetcore.testhost.testserver?view=aspnetcore-6.0",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"TestServer",-1),v=n("code",null,"TestServer",-1),k=n("code",null,"IHostBuilder",-1),m=n("code",null,"IWebHostBuilder",-1),b=n("code",null,"UseTestServer",-1),g=n("code",null,"TestServer",-1),y=n("code",null,"IHost",-1),h=n("code",null,"GetTestClient",-1),f=n("code",null,"TestServer",-1),T=n("code",null,"HttpClient",-1),w=i(`<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>在.Net中使用集成测试的基础结构组件（如测试 Web 主机和内存中测试服务器 (TestServer)）由 Microsoft.AspNetCore.Mvc.Testing 包提供或管理。 使用此包可简化测试创建和执行。 Microsoft.AspNetCore.Mvc.Testing 包处理以下任务：</p><ul><li>将依赖项文件 (.deps) 从 SUT 复制到测试项目的 bin 目录中。</li><li>将内容根目录设置为 SUT 的项目根目录，以便可在执行测试时找到静态文件和页面/视图。</li><li>提供 WebApplicationFactory 类，以简化 SUT 在 TestServer 中的启动过程。</li></ul><p>新建xUnit单元测试项目并且引用nuget包</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>Microsoft<span class="token punctuation">.</span>AspNetCore<span class="token punctuation">.</span>Mvc<span class="token punctuation">.</span>Testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="测试方法中使用" tabindex="-1"><a class="header-anchor" href="#测试方法中使用"><span>测试方法中使用</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>[Fact]
public async Task HelloWorld()
{
    using var host = Host.CreateDefaultBuilder()
        .ConfigureWebHostDefaults(builder =&gt;
        {
            // Use the test server and point to the application&#39;s startup
            builder.UseTestServer()
                    .UseStartup&lt;WebApplication1.Startup&gt;();
        })
        .ConfigureServices(services =&gt;
        {
            // Replace the service
            services.AddSingleton&lt;IHelloService, MockHelloService&gt;();
        })
        .Build();

    await host.StartAsync();

    var client = host.GetTestClient();

    var response = await client.GetStringAsync(&quot;/&quot;);

    Assert.Equal(&quot;Test Hello&quot;, response);
}

class MockHelloService : IHelloService
{
    public string HelloMessage =&gt; &quot;Test Hello&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个简单封装的示例，不过不推荐使用了，再往下有更好的方案</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
/// 构建webhost
/// &lt;/summary&gt;
public class DefaultWebHostTest
{
    private readonly TestServer _server;

    public DefaultWebHostTest(Action&lt;IServiceCollection&gt; action)
    {
        var service = Host.CreateDefaultBuilder()
            .ConfigureWebHostDefaults(webBuilder =&gt;
            {
                // webBuilder.ConfigureAppConfiguration((_, config) =&gt;
                // {
                //     config.AddJsonFile(&quot;appsettings.json&quot;, false, true);
                // });
                webBuilder.ConfigureTestServices(services =&gt;
                {
                    action(services);
                });

                webBuilder.UseTestServer();
            }).Build().Services;
        _server = new TestServer(service);
    }
}

/// &lt;summary&gt;
/// 测试控制器Api
/// &lt;/summary&gt;
public class BaseHostTest
{
    private readonly TestServer _server;

    public BaseHostTest() : base()
    {
        _server = new TestServer(WebHost.CreateDefaultBuilder()
            .UseEnvironment(&quot;Development&quot;) //测试使用
            .ConfigureServices(services =&gt;
            {
            }));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想使用TestServer请继续往下看</p><h3 id="startup方案" tabindex="-1"><a class="header-anchor" href="#startup方案"><span>Startup方案</span></a></h3><p>在写测试的过程中，如果每次都创建一个 TestServer，不单单麻烦，而且效率非常低，所以，微软官方的建议是让测试类实现 <code>IClassFixture&lt;TFixture&gt;</code> 接口，这是 xUnit 中的一个特性，其作用是让 TFixture 这个具体的类型，在运行第一个测试用例前被初始化。而如果 TFixture 这个类型实现了 IDisposable 接口，则 xUnit 会在运行最后一个测试用例后调用其 Dispose() 方法。直白一点的说法就是，它解决的是测试类中共享的数据如何初始化、如何销毁的问题，对我们而言，我们当然希望 TestServer 只初始化一次，下面是一个基本的示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseControllerTest<span class="token punctuation">&lt;</span>TStartup<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IClassFixture<span class="token punctuation">&lt;</span>CustomWebApplicationFactory<span class="token punctuation">&lt;</span>TStartup<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span> <span class="token keyword">where</span> <span class="token class-name">TStartup</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token keyword">class</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">HttpClient</span> _httpClient<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">BaseControllerTest</span><span class="token punctuation">(</span><span class="token class-name">CustomWebApplicationFactory<span class="token punctuation">&lt;</span>TStartup<span class="token punctuation">&gt;</span></span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _httpClient <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 自定义的WebApplicationFactory</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeparam</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TStartup<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeparam</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomWebApplicationFactory<span class="token punctuation">&lt;</span>TStartup<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">WebApplicationFactory<span class="token punctuation">&lt;</span>TStartup<span class="token punctuation">&gt;</span></span></span> <span class="token keyword">where</span> <span class="token class-name">TStartup</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token keyword">class</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureWebHost</span><span class="token punctuation">(</span><span class="token class-name">IWebHostBuilder</span> builder<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">ConfigureServices</span><span class="token punctuation">(</span>services <span class="token operator">=&gt;</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//var descriptor = services.SingleOrDefault(d =&gt; d.ServiceType == typeof(DbContextOptions&lt;TestDbContext&gt;));</span>
            <span class="token comment">//if (descriptor != null)</span>
            <span class="token comment">//{</span>
            <span class="token comment">//    services.Remove(descriptor);</span>
            <span class="token comment">//}</span>

            <span class="token comment">//services.AddDbContext&lt;TestDbContext&gt;(options =&gt;</span>
            <span class="token comment">//{</span>
            <span class="token comment">//    options.UseInMemoryDatabase(&quot;InMemoryTestDb&quot;);</span>
            <span class="token comment">//});</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">ConfigureWebHost</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name">IHost</span> <span class="token function">CreateHost</span><span class="token punctuation">(</span><span class="token class-name">IHostBuilder</span> builder<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        <span class="token keyword">return</span> <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">CreateHost</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name">TestServer</span> <span class="token function">CreateServer</span><span class="token punctuation">(</span><span class="token class-name">IWebHostBuilder</span> builder<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        <span class="token keyword">return</span> <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">CreateServer</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureClient</span><span class="token punctuation">(</span><span class="token class-name">HttpClient</span> client<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后实际使用步骤如下</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TokenControllerTest</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseControllerTest<span class="token punctuation">&lt;</span>Startup<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">HttpClient</span> _client<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">TokenControllerTest</span><span class="token punctuation">(</span><span class="token class-name">CustomWebApplicationFactory<span class="token punctuation">&lt;</span>Startup<span class="token punctuation">&gt;</span></span> factory<span class="token punctuation">)</span>
        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _client <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Theory</span></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">InlineData</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/api/token/gettoken&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Test1</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> url<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> <span class="token keyword">await</span> _client<span class="token punctuation">.</span><span class="token function">GetAsync</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        response<span class="token punctuation">.</span><span class="token function">EnsureSuccessStatusCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果遇到连接数据库的场景，还可以使用内存数据库来替换之前的操作</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebAppTest</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IClassFixture<span class="token punctuation">&lt;</span>WebApplicationFactory<span class="token punctuation">&lt;</span>Startup<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">WebApplicationFactory<span class="token punctuation">&lt;</span>Startup<span class="token punctuation">&gt;</span></span> _factory<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token function">WebAppTest</span><span class="token punctuation">(</span><span class="token class-name">WebApplicationFactory<span class="token punctuation">&lt;</span>Startup<span class="token punctuation">&gt;</span></span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _factory <span class="token operator">=</span> factory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">InMemeryDBTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 使用 WithWebHostBuilder() 方法对 Startup 里的行为进行自定义或者覆盖</span>
        <span class="token class-name"><span class="token keyword">var</span></span> factroy <span class="token operator">=</span> _factory<span class="token punctuation">.</span><span class="token function">WithWebHostBuilder</span><span class="token punctuation">(</span>builder <span class="token operator">=&gt;</span>
        <span class="token punctuation">{</span>
            builder<span class="token punctuation">.</span><span class="token function">ConfigureServices</span><span class="token punctuation">(</span>services <span class="token operator">=&gt;</span>
            <span class="token punctuation">{</span>
                services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddDbContext</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ChinookContext<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span>
                <span class="token punctuation">{</span>
                    options<span class="token punctuation">.</span><span class="token function">UseInMemoryDatabase</span><span class="token punctuation">(</span><span class="token string">&quot;InMemoryDB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">var</span></span> serviceProvider <span class="token operator">=</span> factroy<span class="token punctuation">.</span>Services<span class="token punctuation">;</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> scope <span class="token operator">=</span> serviceProvider<span class="token punctuation">.</span><span class="token function">CreateScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> respository <span class="token operator">=</span> scope<span class="token punctuation">.</span>ServiceProvider
                <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRequiredService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IBaseRepository<span class="token punctuation">&lt;</span>VehicleRecord<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">var</span></span> dbContext <span class="token operator">=</span> scope<span class="token punctuation">.</span>ServiceProvider
                <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRequiredService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ChinookContext<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            respository<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">VehicleRecord</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                FleetNum <span class="token operator">=</span> <span class="token string">&quot;12138&quot;</span><span class="token punctuation">,</span> StatusCode <span class="token operator">=</span> <span class="token string">&quot;AVB&quot;</span> 
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">await</span> dbContext<span class="token punctuation">.</span><span class="token function">SaveChangesAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name"><span class="token keyword">var</span></span> instance <span class="token operator">=</span> <span class="token keyword">await</span> respository<span class="token punctuation">.</span><span class="token function">GetFirstOrDefaultAsync</span><span class="token punctuation">(</span>
                x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span>FleetNum <span class="token operator">==</span> <span class="token string">&quot;12138&quot;</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>

            Assert<span class="token punctuation">.</span><span class="token function">NotNull</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>
            Assert<span class="token punctuation">.</span><span class="token function">True</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>StatusCode <span class="token operator">==</span> <span class="token string">&quot;AVB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以注意到，这里我们对默认的 _factory 进行了一点加工，因为我们不希望这些测试代码对当前的数据库产生影响，所以，我们通过 WithWebHostBuilder() 方法对默认的 ChinookContext 进行了覆盖，使其可以使用一个基于内存的数据库，这在写测试的时候，其实是一个非常不错的特性，因为这样确保了一个用例可以重复多次运行，或者是我们希望能够隔离开发环境和测试环境</p><h3 id="program方案" tabindex="-1"><a class="header-anchor" href="#program方案"><span>Program方案</span></a></h3><p>单元测试项目引用WebApi项目，然后在program中新建一个部分类</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 集成测试引用使用</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接编辑基础的IntergrationTestWebAppFactory</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 这里Program是被测试API项目的Program</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IntergrationTestWebAppFactory</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">WebApplicationFactory<span class="token punctuation">&lt;</span>Program<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureWebHost</span><span class="token punctuation">(</span><span class="token class-name">IWebHostBuilder</span> builder<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">ConfigureTestServices</span><span class="token punctuation">(</span>services <span class="token operator">=&gt;</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 效果就是启动的时候通过docker创建一个pgsql数据库容器，然后用于集成测试，然后测试完成后进行释放</span>
            <span class="token comment">// var descriptor = services.SingleOrDefault(s =&gt; s.ServiceType == typeof(DbContextOptions&lt;OpenDbContext&gt;));</span>
            <span class="token comment">//</span>
            <span class="token comment">// if (descriptor is not null)</span>
            <span class="token comment">// {</span>
            <span class="token comment">//     services.Remove(descriptor);</span>
            <span class="token comment">// }</span>
            <span class="token comment">//</span>
            <span class="token comment">// var conn = _dbContainer.GetConnectionString();</span>
            <span class="token comment">// services.AddEntityFramework&lt;OpenDbContext&gt;(conn, true);</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编写BaseIntergrationTest</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 基础集成测试</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseIntergrationTest</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IClassFixture<span class="token punctuation">&lt;</span>IntergrationTestWebAppFactory<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IServiceScope</span> _scope<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">readonly</span> <span class="token class-name">HttpClient</span> _httpClient<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">BaseIntergrationTest</span><span class="token punctuation">(</span><span class="token class-name">IntergrationTestWebAppFactory</span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _scope <span class="token operator">=</span> factory<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">CreateScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _httpClient <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后对指定的内容进行测试的时候直接继承自BaseIntergrationTest</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserTest</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BaseIntergrationTest</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">UserTest</span><span class="token punctuation">(</span><span class="token class-name">IntergrationTestWebAppFactory</span> factory<span class="token punctuation">)</span>
        <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">XXX</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取服务测试</span>
        <span class="token class-name"><span class="token keyword">var</span></span> userService <span class="token operator">=</span> _scope<span class="token punctuation">.</span>ServiceProvider<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRequiredService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IUserService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,28),S={href:"https://blog.yuanpei.me/posts/i-have-to-say-asp.net-core-integration-testing/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.meziantou.net/how-to-get-asp-net-core-logs-in-the-output-of-xunit-tests.htm#how-to-use-the-logge",target:"_blank",rel:"noopener noreferrer"};function _(x,I){const a=p("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[s("为了方便 ASP.NET Core 中 API 的测试，微软提供了 "),n("a",r,[s("TestServer"),e(a)]),s("，它可以让我们在没有 IIS 或者任何外部事物的情况下对 Web 应用进行测试，使用 "),d,s(" 的好处在于它是基于内存进行交互的没有真正的 HTTP 请求和 TCP 链接，会非常的高效，而且也不会监听某一个端口，所以不会有端口权限的问题。"),v,s(" 的使用主要有两步，首先是服务的注册，可以使用 "),k,s(" 或 "),m,s(" 的 "),b,s(" 扩展方法注册 "),g,s("，可以使用 "),y,s(" 的 "),h,s(" 扩展方法来注册和 "),f,s(" 进行交互的 "),T,s("。")]),w,n("p",null,[n("a",S,[s("https://blog.yuanpei.me/posts/i-have-to-say-asp.net-core-integration-testing/"),e(a)]),s(" | 不得不说的 ASP.NET Core 集成测试 | 素履独行 配置日志："),n("a",C,[s("https://www.meziantou.net/how-to-get-asp-net-core-logs-in-the-output-of-xunit-tests.htm#how-to-use-the-logge"),e(a)])])])}const W=t(l,[["render",_],["__file","testserver.html.vue"]]),B=JSON.parse('{"path":"/middleware/testMange/jichengceshi/testserver.html","title":"TestServer","lang":"zh-CN","frontmatter":{"title":"TestServer","lang":"zh-CN","date":"2023-10-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"testserver","slug":"bfux7cxgwl536xgn","docsId":"131826931","description":"概述 为了方便 ASP.NET Core 中 API 的测试，微软提供了 TestServer，它可以让我们在没有 IIS 或者任何外部事物的情况下对 Web 应用进行测试，使用 TestServer 的好处在于它是基于内存进行交互的没有真正的 HTTP 请求和 TCP 链接，会非常的高效，而且也不会监听某一个端口，所以不会有端口权限的问题。TestS...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/testMange/jichengceshi/testserver.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"TestServer"}],["meta",{"property":"og:description","content":"概述 为了方便 ASP.NET Core 中 API 的测试，微软提供了 TestServer，它可以让我们在没有 IIS 或者任何外部事物的情况下对 Web 应用进行测试，使用 TestServer 的好处在于它是基于内存进行交互的没有真正的 HTTP 请求和 TCP 链接，会非常的高效，而且也不会监听某一个端口，所以不会有端口权限的问题。TestS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T02:43:38.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T02:43:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TestServer\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-19T02:43:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"测试方法中使用","slug":"测试方法中使用","link":"#测试方法中使用","children":[]},{"level":3,"title":"Startup方案","slug":"startup方案","link":"#startup方案","children":[]},{"level":3,"title":"Program方案","slug":"program方案","link":"#program方案","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1700361818000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":4.87,"words":1461},"filePathRelative":"middleware/testMange/jichengceshi/testserver.md","localizedDate":"2023年10月14日","excerpt":"<h2>概述</h2>\\n<p>为了方便 ASP.NET Core 中 API 的测试，微软提供了 <a href=\\"https://docs.microsoft.com/ZH-CN/dotnet/api/microsoft.aspnetcore.testhost.testserver?view=aspnetcore-6.0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">TestServer</a>，它可以让我们在没有 IIS 或者任何外部事物的情况下对 Web 应用进行测试，使用 <code>TestServer</code> 的好处在于它是基于内存进行交互的没有真正的 HTTP 请求和 TCP 链接，会非常的高效，而且也不会监听某一个端口，所以不会有端口权限的问题。<code>TestServer</code> 的使用主要有两步，首先是服务的注册，可以使用 <code>IHostBuilder</code> 或 <code>IWebHostBuilder</code> 的 <code>UseTestServer</code> 扩展方法注册 <code>TestServer</code>，可以使用 <code>IHost</code> 的 <code>GetTestClient</code> 扩展方法来注册和 <code>TestServer</code> 进行交互的 <code>HttpClient</code>。</p>","autoDesc":true}');export{W as comp,B as data};
