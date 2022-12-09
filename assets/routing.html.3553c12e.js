import{_ as s,W as t,X as a,Y as i,Z as e,$ as d,a0 as l,y as r}from"./framework.35562d63.js";const o={},c=l(`<h1 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h1><ul><li>Routing（路由）：更准确的应该叫做Endpoint Routing，负责将HTTP请求按照匹配规则选择对应的终结点</li><li>Endpoint（终结点）：负责当HTTP请求到达时，执行代码</li></ul><p>路由是通过<code>UseRouting</code>和<code>UseEndpoints</code>两个中间件配合在一起来完成注册的：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // 添加Routing相关服务
        // 注意，其已在 ConfigureWebDefaults 中添加，无需手动添加，此处仅为演示
        services.AddRouting();
    }
    
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseRouting();
    
        app.UseEndpoints(endpoints =&gt;
        {
            endpoints.MapGet(&quot;/&quot;, async context =&gt;
            {
                await context.Response.WriteAsync(&quot;Hello World!&quot;);
            });
        });
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>UseRouting</code>：用于向中间件管道添加路由匹配中间件（<code>EndpointRoutingMiddleware</code>）。该中间件会检查应用中定义的终结点列表，然后通过匹配 URL 和 HTTP 方法来选择最佳的终结点。<strong>简单说，该中间件的作用是根据一定规则来选择出终结点</strong></li><li><code>UseEndpoints</code>：用于向中间件管道添加终结点中间件（<code>EndpointMiddleware</code>）。可以向该中间件的终结点列表中添加终结点，并配置这些终结点要执行的委托，该中间件会负责运行由<code>EndpointRoutingMiddleware</code>中间件选择的终结点所关联的委托。<strong>简单说，该中间件用来执行所选择的终结点委托</strong></li></ul><blockquote><p>UseRouting<code>与</code>UseEndpoints<code>必须同时使用，而且必须先调用</code>UseRouting<code>，再调用</code>UseEndpoints</p></blockquote><h1 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints" aria-hidden="true">#</a> Endpoints</h1><p>先了解一下终结点的类结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Endpoint
{
    public Endpoint(RequestDelegate requestDelegate, EndpointMetadataCollection? metadata, string? displayName);

    public string? DisplayName { get; }

    public EndpointMetadataCollection Metadata { get; }

    public RequestDelegate RequestDelegate { get; }

    public override string? ToString();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>终结点有以下特点：</p><ul><li>可执行：含有<code>RequestDelegate</code>委托</li><li>可扩展：含有<code>Metadata</code>元数据集合</li><li>可选择：可选的包含路由信息</li><li>可枚举：通过DI容器，查找<code>EndpointDataSource</code>来展示终结点集合。</li></ul><h2 id="获取终结点" tabindex="-1"><a class="header-anchor" href="#获取终结点" aria-hidden="true">#</a> 获取终结点</h2><p>对于中间件还不熟悉的，可以先看一下中间件(Middleware)。</p><p>在中间件管道中，我们可以通过<code>HttpContext</code>来检索终结点等信息。需要注意的是，终结点对象在创建完毕后，是不可变的，无法修改。</p><blockquote><ul><li>在调用<code>UseRouting</code>之前，你可以注册一些用于修改路由操作的数据，比如<code>UseRewriter</code>、<code>UseHttpMethodOverride</code>、<code>UsePathBase</code>等。</li><li>在调用<code>UseRouting</code>和<code>UseEndpoints</code>之间，可以注册一些用于提前处理路由结果的中间件，如<code>UseAuthentication</code>、<code>UseAuthorization</code>、<code>UseCors</code>等。</li></ul></blockquote><p>我们一起看下面的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.Use(next =&gt; context =&gt;
    {
        // 在 UseRouting 调用前，始终为 null
        Console.WriteLine($&quot;1. Endpoint: {context.GetEndpoint()?.DisplayName ?? &quot;null&quot;}&quot;);
        return next(context);
    });

    // EndpointRoutingMiddleware 调用 SetEndpoint 来设置终结点
    app.UseRouting();

    app.Use(next =&gt; context =&gt;
    {
        // 如果路由匹配到了终结点，那么此处就不为 null，否则，还是 null
        Console.WriteLine($&quot;2. Endpoint: {context.GetEndpoint()?.DisplayName ?? &quot;null&quot;}&quot;);
        return next(context);
    });

    // EndpointMiddleware 通过 GetEndpoint 方法获取终结点，
    // 然后执行该终结点的 RequestDelegate 委托
    app.UseEndpoints(endpoints =&gt;
    {
        endpoints.MapGet(&quot;/&quot;, context =&gt;
        {
            // 匹配到了终结点，肯定不是 null
            Console.WriteLine($&quot;3. Endpoint: {context.GetEndpoint()?.DisplayName ?? &quot;null&quot;}&quot;);
            return Task.CompletedTask;
        }).WithDisplayName(&quot;Custom Display Name&quot;);  // 自定义终结点名称
    });

    app.Use(next =&gt; context =&gt;
    {
        // 只有当路由没有匹配到终结点时，才会执行这里
        Console.WriteLine($&quot;4. Endpoint: {context.GetEndpoint()?.DisplayName ?? &quot;null&quot;}&quot;);
        return next(context);
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问<code>/</code>时，输出为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. Endpoint: null
2. Endpoint: Custom Display Name
3. Endpoint: Custom Display Name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问其他不匹配的URL时，输出为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. Endpoint: null
2. Endpoint: null
4. Endpoint: null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当路由匹配到了终结点时，<code>EndpointMiddleware</code>则是该路由的终端中间件；当未匹配到终结点时，会继续执行后面的中间件。</p><blockquote><p>终端中间件：与普通中间件不同的是，该中间件执行后即返回，不会调用后面的中间件。</p></blockquote><h2 id="配置终结点委托" tabindex="-1"><a class="header-anchor" href="#配置终结点委托" aria-hidden="true">#</a> 配置终结点委托</h2><p>可以通过以下方法将委托关联到终结点</p><ul><li>MapGet</li><li>MapPost</li><li>MapPut</li><li>MapDelete</li><li>MapHealthChecks</li><li>其他类似“MapXXX”的方法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseRouting();

    // 在执行终结点前进行授权
    app.UseAuthorization();

    app.UseEndpoints(endpoints =&gt;
    {
        endpoints.MapGet(&quot;/&quot;, async context =&gt; await context.Response.WriteAsync(&quot;get&quot;));
        endpoints.MapPost(&quot;/&quot;, async context =&gt; await context.Response.WriteAsync(&quot;post&quot;));
        endpoints.MapPut(&quot;/&quot;, async context =&gt; await context.Response.WriteAsync(&quot;put&quot;));
        endpoints.MapDelete(&quot;/&quot;, async context =&gt; await context.Response.WriteAsync(&quot;delete&quot;));
        endpoints.MapHealthChecks(&quot;/healthChecks&quot;);
        endpoints.MapControllers();
    });

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由模板" tabindex="-1"><a class="header-anchor" href="#路由模板" aria-hidden="true">#</a> 路由模板</h2><p>规则：</p><p name="">通过<code>{}</code>来绑定路由参数，如:</p>`,30),u=i("p",{"name?":""},[e("将"),i("code",null,"?"),e("作为参数后缀，以指示该参数是可选的，如：")],-1),v=i("p",null,[e("通过"),i("code",null,"="),e("设置默认值，如：{name=jjj} 表示name的默认值是jjj")],-1),m=i("p",{"id:int:min(1)":""},[e("通过"),i("code",null,":"),e("添加内联约束，如：{id:int}，后面追加"),i("code",null,":"),e("可以添加多个内联约束，如：")],-1),p=l(`<p>多个路由参数间必须通过文本或分隔符分隔，例如 {a}{b} 就不符合规则，可以修改为类似 {a}+-{b} 或 {a}/{b} 的形式</p><p>先举个例子，/book/{name}中的{name}为路由参数，book</p><p>为非路由参数文本。非路由参数的文本和分隔符/：</p><ul><li>是不分区大小写的（官方中文文档翻译错了）</li><li>要使用没有被Url编码的格式，如空格会被编码为 %20，不应使用 %20，而应使用空格</li><li>如果要匹配<code>{</code>或<code>}</code>，则使用<code>{{</code>或<code>}}</code>进行转义</li></ul><h3 id="catch-all参数" tabindex="-1"><a class="header-anchor" href="#catch-all参数" aria-hidden="true">#</a> catch-all参数</h3><p>路由模板中的星号<code>*</code>和双星号<code>**</code>被称为catch-all参数，该参数可以作为路由参数的前缀，如<code>/Book/{*id}</code>、<code>/Book/{**id}</code>，可以匹配以<code>/Book</code>开头的任意Url，如<code>/Book</code>、<code>/Book/</code>、<code>/Book/abc</code>、<code>/Book/abc/def</code>等。</p><p><code>*</code>和<code>**</code>在一般使用上没有什么区别，它们仅仅在使用<code>LinkGenerator</code>时会有不同，如<code>id = abc/def</code>，当使用<code>/Book/{*id}</code>模板时，会生成<code>/Book/abc%2Fdef</code>，当使用<code>/Book/{**id}</code>模板时，会生成<code>/Book/abc/def</code>。</p><h3 id="复杂段" tabindex="-1"><a class="header-anchor" href="#复杂段" aria-hidden="true">#</a> 复杂段</h3><p>复杂段通过<strong>非贪婪</strong>的方式<strong>从右到左</strong>进行匹配，例如<code>[Route(&quot;/a{b}c{d}&quot;)]</code>就是一个复杂段。实际上，它的确很复杂，只有了解它的工作方式，才能正确的使用它。</p><blockquote><ul><li>贪婪匹配（也称为“懒惰匹配”）：匹配最大可能的字符串</li><li>非贪婪匹配：匹配最小可能的字符串</li></ul></blockquote><p>接下来，就拿模板<code>[Route(&quot;/a{b}c{d}&quot;)]</code>来举两个例子：</p><p><strong>成功匹配</strong>的案例——当Url为<code>/abcd</code>时，匹配过程为（<code>|</code>用于辅助展示算法的解析方式）：</p><ul><li>从右到左读取模板，找到的第一个文本为<code>c</code>。接着，读取Url<code>/abcd</code>，可解析为<code>/ab|c|d</code></li><li>此时，Url中右侧的所有内容<code>d</code>均与路由参数<code>{d}</code>匹配</li><li>然后，继续从右到左读取模板，找到的下一个文本为<code>a</code>。接着，从刚才停下的地方继续读取Url<code>/ab|c|d</code>，解析为<code>/a|b|c|d</code></li><li>此时，Url中右侧的值<code>b</code>与路由参数<code>{b}</code>匹配</li><li>最后，没有剩余的路由模板段或参数，也没有剩余的Url文本，因此匹配成功。</li></ul><p><strong>匹配失败</strong>的案例——当Url为<code>/aabcd</code>时，匹配过程为（<code>|</code>用于辅助展示算法的解析方式）：</p><ul><li>从右到左读取模板，找到的第一个文本为<code>c</code>。接着，读取Url<code>/aabcd</code>，可解析为<code>/aab|c|d</code></li><li>此时，Url中右侧的所有内容<code>d</code>均与路由参数<code>{d}</code>匹配</li><li>然后，继续从右到左读取模板，找到的下一个文本为<code>a</code>。接着，从刚才停下的地方继续读取Url<code>/aab|c|d</code>，解析为<code>/a|a|b|c|d</code></li><li>此时，Url中右侧的值<code>b</code>与路由参数<code>{b}</code>匹配</li><li>最后，没有剩余的路由模板段或参数，但还有剩余的Url文本，因此匹配不成功。</li></ul><blockquote><p>使用复杂段，相比普通路由模板来说，会造成更加昂贵的性能影响</p></blockquote><h2 id="路由约束" tabindex="-1"><a class="header-anchor" href="#路由约束" aria-hidden="true">#</a> 路由约束</h2><p>通过路由约束，可以在路由匹配过程中，检查URL是否是可接受的。另外，路由约束一般是用来消除路由歧义，而不是用来进行输入验证的。</p><p>实现上，当Http请求到达时，路由参数和该参数的约束名会传递给<code>IInlineConstraintResolver</code>服务，<code>IInlineConstraintResolver</code>服务会负责创建<code>IRouteConstraint</code>实例，以针对Url进行处理。</p><p><strong>预定义的路****由约束</strong></p><blockquote><p>摘自官方文档</p></blockquote><p><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/7fxWIIIo4Qs3k4FurMojaRNCW3fBdEmIVxhrKuf2a2hiasj6QnurH65VvLQJMhicDq25cATsM9dTHeDticZxd5fbw/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" loading="lazy"></p><h4 id="正则表达式路由约束" tabindex="-1"><a class="header-anchor" href="#正则表达式路由约束" aria-hidden="true">#</a> 正则表达式路由约束</h4><p>通过<code>regex(expression)</code>来设置正则表达式约束，并且该正则表达式是：</p><ul><li><code>RegexOptions.IgnoreCase</code>：忽略大小写</li><li><code>RegexOptions.Compiled</code>：将该正则表达式编译为程序集。这会使得执行速度更快，但会拖慢启动时间。</li><li><code>RegexOptions.CultureInvariant</code>：忽略区域文化差异。</li></ul><p>另外，还需要注意对某些字符进行转义：</p><ul><li><code>\\</code>替换为<code>\\\\</code></li><li><code>{</code>替换为<code>{{</code>， <code>}</code>替换为<code>}}</code></li><li><code>[</code>替换为<code>[[</code>，<code>]</code>替换为<code>]]</code></li></ul><p>例如：</p><p><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/7fxWIIIo4Qs3k4FurMojaRNCW3fBdEmIMfxNWluXowgF3nLwlpGJVrFWrFhvGToZhVBJywraOzXeuT76OBwBxw/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" loading="lazy"></p><ul><li>指定 regex 约束的两种方式：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 内联方式
app.UseEndpoints(endpoints =&gt;
{
    endpoints.MapGet(&quot;{message:regex(^\\\\d{{3}}-\\\\d{{2}}-\\\\d{{4}}$)}&quot;,
        context =&gt; 
        {
            return context.Response.WriteAsync(&quot;inline-constraint match&quot;);
        });
 });
 
// 变量声明方式
app.UseEndpoints(endpoints =&gt;
{
    endpoints.MapControllerRoute(
        name: &quot;people&quot;,
        pattern: &quot;People/{ssn}&quot;,
        constraints: new { ssn = &quot;^\\\\d{3}-\\\\d{2}-\\\\d{4}$&quot;, },
        defaults: new { controller = &quot;People&quot;, action = &quot;List&quot;, });
}); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>不要书写过于复杂的正则表达式，否则，相比普通路由模板来说，会造成更加昂贵的性能影响</p></blockquote><h3 id="自定义路由约束" tabindex="-1"><a class="header-anchor" href="#自定义路由约束" aria-hidden="true">#</a> 自定义路由约束</h3><p>先说一句，自定义路由约束很少会用到，在你决定要自定义路由约束之前，先想想是否有其他更好的替代方案，如使用模型绑定。</p><p>通过实现<code>IRouteConstraint</code>接口来创建自定义路由约束，该接口仅有一个<code>Match</code>方法，用于验证路由参数是否满足约束，返回<code>true</code>表示满足约束，<code>false</code>则表示不满足约束。</p><p>以下示例要求路由参数中必须包含字符串“1”：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class MyRouteConstraint : IRouteConstraint
{
    public bool Match(HttpContext httpContext, IRouter route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
    {
        if (values.TryGetValue(routeKey, out object value))
        {
            var valueStr = Convert.ToString(value, CultureInfo.InvariantCulture);

            return valueStr?.Contains(&quot;1&quot;) ?? false;
        }

        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后进行路由约束注册：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void ConfigureServices(IServiceCollection services)
{
    services.AddRouting(options =&gt;
    {
        // 添加自定义路由约束，约束 Key 为 my
        options.ConstraintMap[&quot;my&quot;] = typeof(MyRouteConstraint);
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后你就可以类似如下进行使用了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[HttpGet(&quot;{id:my}&quot;)]
public string Get(string id)
{
    return id;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由模板优先级" tabindex="-1"><a class="header-anchor" href="#路由模板优先级" aria-hidden="true">#</a> 路由模板优先级</h2><p>考虑一下，有两个路由模板：<code>/Book/List</code>和<code>/Book/{id}</code>，当url为<code>/Book/List</code>时，会选择哪个呢？从结果我们可以得知，是模板<code>/Book/List</code>。它是根据以下规则来确定的：</p><ul><li>越具体的模板优先级越高</li><li>包含更多匹配段的模板更具体</li><li>含有文本的段比参数段更具体</li><li>具有约束的参数段比没有约束的参数段更具体</li><li>复杂段和具有约束的段同样具体</li><li><code>catch-all</code>参数段是最不具体的</li></ul><h1 id="核心源码解析" tabindex="-1"><a class="header-anchor" href="#核心源码解析" aria-hidden="true">#</a> 核心源码解析</h1><h1 id="addrouting" tabindex="-1"><a class="header-anchor" href="#addrouting" aria-hidden="true">#</a> AddRouting</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static class RoutingServiceCollectionExtensions
{
    public static IServiceCollection AddRouting(this IServiceCollection services)
    {
        // 内联约束解析器，负责创建 IRouteConstraint 实例
        services.TryAddTransient&lt;IInlineConstraintResolver, DefaultInlineConstraintResolver&gt;();
        // 对象池
        services.TryAddTransient&lt;ObjectPoolProvider, DefaultObjectPoolProvider&gt;();
        services.TryAddSingleton&lt;ObjectPool&lt;UriBuildingContext&gt;&gt;(s =&gt;
        {
            var provider = s.GetRequiredService&lt;ObjectPoolProvider&gt;();
            return provider.Create&lt;UriBuildingContext&gt;(new UriBuilderContextPooledObjectPolicy());
        });

        services.TryAdd(ServiceDescriptor.Transient&lt;TreeRouteBuilder&gt;(s =&gt;
        {
            var loggerFactory = s.GetRequiredService&lt;ILoggerFactory&gt;();
            var objectPool = s.GetRequiredService&lt;ObjectPool&lt;UriBuildingContext&gt;&gt;();
            var constraintResolver = s.GetRequiredService&lt;IInlineConstraintResolver&gt;();
            return new TreeRouteBuilder(loggerFactory, objectPool, constraintResolver);
        }));

        // 标记已将所有路由服务注册完毕
        services.TryAddSingleton(typeof(RoutingMarkerService));

        var dataSources = new ObservableCollection&lt;EndpointDataSource&gt;();
        services.TryAddEnumerable(ServiceDescriptor.Transient&lt;IConfigureOptions&lt;RouteOptions&gt;, ConfigureRouteOptions&gt;(
            serviceProvider =&gt; new ConfigureRouteOptions(dataSources)));

        // EndpointDataSource，用于全局访问终结点列表
        services.TryAddSingleton&lt;EndpointDataSource&gt;(s =&gt;
        {
            return new CompositeEndpointDataSource(dataSources);
        });

        services.TryAddSingleton&lt;ParameterPolicyFactory, DefaultParameterPolicyFactory&gt;();
        // MatcherFactory，用于根据 EndpointDataSource 创建 Matcher
        services.TryAddSingleton&lt;MatcherFactory, DfaMatcherFactory&gt;();
        // DfaMatcherBuilder，用于创建 DfaMatcher 实例
        services.TryAddTransient&lt;DfaMatcherBuilder&gt;();
        services.TryAddSingleton&lt;DfaGraphWriter&gt;();
        services.TryAddTransient&lt;DataSourceDependentMatcher.Lifetime&gt;();
        services.TryAddSingleton&lt;EndpointMetadataComparer&gt;(services =&gt;
        {
            return new EndpointMetadataComparer(services);
        });

        // LinkGenerator相关服务
        services.TryAddSingleton&lt;LinkGenerator, DefaultLinkGenerator&gt;();
        services.TryAddSingleton&lt;IEndpointAddressScheme&lt;string&gt;, EndpointNameAddressScheme&gt;();
        services.TryAddSingleton&lt;IEndpointAddressScheme&lt;RouteValuesAddress&gt;, RouteValuesAddressScheme&gt;();
        services.TryAddSingleton&lt;LinkParser, DefaultLinkParser&gt;();

        // 终结点选择、匹配策略相关服务
        services.TryAddSingleton&lt;EndpointSelector, DefaultEndpointSelector&gt;();
        services.TryAddEnumerable(ServiceDescriptor.Singleton&lt;MatcherPolicy, HttpMethodMatcherPolicy&gt;());
        services.TryAddEnumerable(ServiceDescriptor.Singleton&lt;MatcherPolicy, HostMatcherPolicy&gt;());

        services.TryAddSingleton&lt;TemplateBinderFactory, DefaultTemplateBinderFactory&gt;();
        services.TryAddSingleton&lt;RoutePatternTransformer, DefaultRoutePatternTransformer&gt;();
        return services;
    }

    public static IServiceCollection AddRouting(
        this IServiceCollection services,
        Action&lt;RouteOptions&gt; configureOptions)
    {
        services.Configure(configureOptions);
        services.AddRouting();

        return services;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="userouting" tabindex="-1"><a class="header-anchor" href="#userouting" aria-hidden="true">#</a> UseRouting</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static class EndpointRoutingApplicationBuilderExtensions
{
    private const string EndpointRouteBuilder = &quot;__EndpointRouteBuilder&quot;;
    
    public static IApplicationBuilder UseRouting(this IApplicationBuilder builder)
    {
        VerifyRoutingServicesAreRegistered(builder);
    
        var endpointRouteBuilder = new DefaultEndpointRouteBuilder(builder);
        // 将 endpointRouteBuilder 放入共享字典中
        builder.Properties[EndpointRouteBuilder] = endpointRouteBuilder;
    
        // 将 endpointRouteBuilder 作为构造函数参数传入 EndpointRoutingMiddleware
        return builder.UseMiddleware&lt;EndpointRoutingMiddleware&gt;(endpointRouteBuilder);
    }
    
    private static void VerifyRoutingServicesAreRegistered(IApplicationBuilder app)
    {
        // 必须先执行了 AddRouting
        if (app.ApplicationServices.GetService(typeof(RoutingMarkerService)) == null)
        {
            throw new InvalidOperationException(Resources.FormatUnableToFindServices(
                nameof(IServiceCollection),
                nameof(RoutingServiceCollectionExtensions.AddRouting),
                &quot;ConfigureServices(...)&quot;));
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="endpointroutingmiddleware" tabindex="-1"><a class="header-anchor" href="#endpointroutingmiddleware" aria-hidden="true">#</a> EndpointRoutingMiddleware</h3><p>终于到了路由匹配的逻辑了，才是我们应该关注的，重点查看<code>Invoke</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>internal sealed class EndpointRoutingMiddleware
{
    private const string DiagnosticsEndpointMatchedKey = &quot;Microsoft.AspNetCore.Routing.EndpointMatched&quot;;

    private readonly MatcherFactory _matcherFactory;
    private readonly ILogger _logger;
    private readonly EndpointDataSource _endpointDataSource;
    private readonly DiagnosticListener _diagnosticListener;
    private readonly RequestDelegate _next;

    private Task&lt;Matcher&gt;? _initializationTask;

    public EndpointRoutingMiddleware(
        MatcherFactory matcherFactory,
        ILogger&lt;EndpointRoutingMiddleware&gt; logger,
        IEndpointRouteBuilder endpointRouteBuilder,
        DiagnosticListener diagnosticListener,
        RequestDelegate next)
    {
        _matcherFactory = matcherFactory ?? throw new ArgumentNullException(nameof(matcherFactory));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _diagnosticListener = diagnosticListener ?? throw new ArgumentNullException(nameof(diagnosticListener));
        _next = next ?? throw new ArgumentNullException(nameof(next));

        _endpointDataSource = new CompositeEndpointDataSource(endpointRouteBuilder.DataSources);
    }

    public Task Invoke(HttpContext httpContext)
    {
        // 已经选择了终结点，则跳过匹配
        var endpoint = httpContext.GetEndpoint();
        if (endpoint != null)
        {
            Log.MatchSkipped(_logger, endpoint);
            return _next(httpContext);
        }

        // 等待 _initializationTask 初始化完成，进行匹配，并流转到下一个中间件
        var matcherTask = InitializeAsync();
        if (!matcherTask.IsCompletedSuccessfully)
        {
            return AwaitMatcher(this, httpContext, matcherTask);
        }
        
        // _initializationTask在之前就已经初始化完成了，直接进行匹配任务，并流转到下一个中间件
        var matchTask = matcherTask.Result.MatchAsync(httpContext);
        if (!matchTask.IsCompletedSuccessfully)
        {
            return AwaitMatch(this, httpContext, matchTask);
        }

        // 流转到下一个中间件
        return SetRoutingAndContinue(httpContext);

        static async Task AwaitMatcher(EndpointRoutingMiddleware middleware, HttpContext httpContext, Task&lt;Matcher&gt; matcherTask)
        {
            var matcher = await matcherTask;
            // 路由匹配，选择终结点
            await matcher.MatchAsync(httpContext);
            await middleware.SetRoutingAndContinue(httpContext);
        }

        static async Task AwaitMatch(EndpointRoutingMiddleware middleware, HttpContext httpContext, Task matchTask)
        {
            await matchTask;
            await middleware.SetRoutingAndContinue(httpContext);
        }
    }

    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    private Task SetRoutingAndContinue(HttpContext httpContext)
    {
        // 终结点仍然为空，则匹配失败
        var endpoint = httpContext.GetEndpoint();
        if (endpoint == null)
        {
            Log.MatchFailure(_logger);
        }
        else
        {
            // 匹配成功则触发事件
            if (_diagnosticListener.IsEnabled() &amp;&amp; _diagnosticListener.IsEnabled(DiagnosticsEndpointMatchedKey))
            {
                // httpContext对象包含了相关信息
                _diagnosticListener.Write(DiagnosticsEndpointMatchedKey, httpContext);
            }

            Log.MatchSuccess(_logger, endpoint);
        }

        // 流转到下一个中间件
        return _next(httpContext);
    }

    private Task&lt;Matcher&gt; InitializeAsync()
    {
        var initializationTask = _initializationTask;
        if (initializationTask != null)
        {
            return initializationTask;
        }

        // 此处我删减了部分线程竞争代码，因为这不是我们讨论的重点
        // 此处主要目的是在该Middleware中，确保只初始化_initializationTask一次

        var matcher = _matcherFactory.CreateMatcher(_endpointDataSource);

        using (ExecutionContext.SuppressFlow())
        {
            _initializationTask = Task.FromResult(matcher);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),b=i("code",null,"_endpointDataSource",-1),g=i("code",null,"_matcherFactory",-1),h=i("code",null,"matcher",-1),x=i("code",null,"matcher.MatchAsync(httpContext)",-1),R={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},f=i("code",null,"DfaMatcher",-1),E=l(`<p><strong>UseEndpoints</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static class EndpointRoutingApplicationBuilderExtensions
{
    public static IApplicationBuilder UseEndpoints(this IApplicationBuilder builder, Action&lt;IEndpointRouteBuilder&gt; configure)
    {
        VerifyRoutingServicesAreRegistered(builder);

        VerifyEndpointRoutingMiddlewareIsRegistered(builder, out var endpointRouteBuilder);

        configure(endpointRouteBuilder);

        var routeOptions = builder.ApplicationServices.GetRequiredService&lt;IOptions&lt;RouteOptions&gt;&gt;();
        foreach (var dataSource in endpointRouteBuilder.DataSources)
        {
            routeOptions.Value.EndpointDataSources.Add(dataSource);
        }

        return builder.UseMiddleware&lt;EndpointMiddleware&gt;();
    }
    
    private static void VerifyEndpointRoutingMiddlewareIsRegistered(IApplicationBuilder app, out DefaultEndpointRouteBuilder endpointRouteBuilder)
    {
        // 将 endpointRouteBuilder 从共享字典中取出来，如果没有，则说明之前没有调用 UseRouting
        if (!app.Properties.TryGetValue(EndpointRouteBuilder, out var obj))
        {
            var message =
                $&quot;{nameof(EndpointRoutingMiddleware)} matches endpoints setup by {nameof(EndpointMiddleware)} and so must be added to the request &quot; +
                $&quot;execution pipeline before {nameof(EndpointMiddleware)}. &quot; +
                $&quot;Please add {nameof(EndpointRoutingMiddleware)} by calling &#39;{nameof(IApplicationBuilder)}.{nameof(UseRouting)}&#39; inside the call &quot; +
                $&quot;to &#39;Configure(...)&#39; in the application startup code.&quot;;
            throw new InvalidOperationException(message);
        }

        endpointRouteBuilder = (DefaultEndpointRouteBuilder)obj!;

        // UseRouting 和 UseEndpoints 必须添加到同一个 IApplicationBuilder 实例上
        if (!object.ReferenceEquals(app, endpointRouteBuilder.ApplicationBuilder))
        {
            var message =
                $&quot;The {nameof(EndpointRoutingMiddleware)} and {nameof(EndpointMiddleware)} must be added to the same {nameof(IApplicationBuilder)} instance. &quot; +
                $&quot;To use Endpoint Routing with &#39;Map(...)&#39;, make sure to call &#39;{nameof(IApplicationBuilder)}.{nameof(UseRouting)}&#39; before &quot; +
                $&quot;&#39;{nameof(IApplicationBuilder)}.{nameof(UseEndpoints)}&#39; for each branch of the middleware pipeline.&quot;;
            throw new InvalidOperationException(message);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="endpointmiddleware" tabindex="-1"><a class="header-anchor" href="#endpointmiddleware" aria-hidden="true">#</a> EndpointMiddleware</h3><p><code>EndpointMiddleware</code>中间件中包含了很多异常处理和日志记录代码，为了方便查看核心逻辑，我都删除并进行了简化：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>internal sealed class EndpointMiddleware
{
    internal const string AuthorizationMiddlewareInvokedKey = &quot;__AuthorizationMiddlewareWithEndpointInvoked&quot;;
    internal const string CorsMiddlewareInvokedKey = &quot;__CorsMiddlewareWithEndpointInvoked&quot;;

    private readonly ILogger _logger;
    private readonly RequestDelegate _next;
    private readonly RouteOptions _routeOptions;

    public EndpointMiddleware(
        ILogger&lt;EndpointMiddleware&gt; logger,
        RequestDelegate next,
        IOptions&lt;RouteOptions&gt; routeOptions)
    {
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _next = next ?? throw new ArgumentNullException(nameof(next));
        _routeOptions = routeOptions?.Value ?? throw new ArgumentNullException(nameof(routeOptions));
    }

    public Task Invoke(HttpContext httpContext)
    {
        var endpoint = httpContext.GetEndpoint();
        if (endpoint?.RequestDelegate != null)
        {
            // 执行该终结点的委托，并且视该中间件为终端中间件
            var requestTask = endpoint.RequestDelegate(httpContext);
            if (!requestTask.IsCompletedSuccessfully)
            {
                return requestTask;
            }

            return Task.CompletedTask;
        }
        
        // 若没有终结点，则继续执行下一个中间件
        return _next(httpContext);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><p>说了那么多，最后给大家总结了三张UML类图：</p><p><strong>RoutePattern</strong><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/7fxWIIIo4Qs3k4FurMojaRNCW3fBdEmIysibicSpQ5QARefCDzU4Vz9ibWbGKg75SSOIDq4eDmiahWrZklzWYZo30A/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" loading="lazy"></p><p><strong>EndPoint</strong><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/7fxWIIIo4Qs3k4FurMojaRNCW3fBdEmIZMqZhtjt39Rw6bWYw0pfLg1nicyajia4EjO6uM2kjfpunT6hc0QkxICQ/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" loading="lazy"></p><p><strong>Matcher</strong><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/7fxWIIIo4Qs3k4FurMojaRNCW3fBdEmIEcia3E91cxKqP45xJjibqlPJSX8eUQXTm6WmWMvQMz5eiaEcpZb9Qk47Q/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" loading="lazy"></p>`,10),q={href:"http://xn--ASP-qg2fh2w88i32xflr0zg99cns3aj6pu1m.NET",target:"_blank",rel:"noopener noreferrer"},y=i("h1",{id:"资料",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#资料","aria-hidden":"true"},"#"),e(" 资料")],-1),w={href:"http://cnblogs.com/xiaoxiaotank/p/15468491.html",target:"_blank",rel:"noopener noreferrer"};function C(M,_){const n=r("ExternalLinkIcon");return t(),a("div",null,[c,u,v,m,p,i("p",null,[e("上述代码的核心就是将"),b,e("传递给"),g,e("，创建"),h,e("，然后进行匹配"),x,e("。"),i("a",R,[e("ASP.NET"),d(n)]),e(" Core默认使用的 matcher 类型是"),f,e("，DFA（Deterministic Finite Automaton）是一种被称为“确定有限状态自动机”的算法，可以从候选终结点列表中查找到匹配度最高的那个终结点。")]),E,i("p",null,[e("另外，本文仅仅提到了路由的基本使用方式和原理，如果你想要进行更加深入透彻的了解，"),i("a",q,[e("推荐阅读蒋金楠老师的ASP.NET"),d(n)]),e(" Core 3框架揭秘的路由部分。")]),y,i("p",null,[e("转自：xiaoxiaotank 链接："),i("a",w,[e("cnblogs.com/xiaoxiaotank/p/15468491.html"),d(n)])])])}const A=s(o,[["render",C],["__file","routing.html.vue"]]);export{A as default};
