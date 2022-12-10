import{_ as r,W as l,X as d,Y as e,Z as i,$ as s,a0 as a,y as t}from"./framework.cf23f0c7.js";const o={},u=a('<h1 id="_1-优点" tabindex="-1"><a class="header-anchor" href="#_1-优点" aria-hidden="true">#</a> 1. 优点</h1><ol><li>有助于保护原有系统，不受影响，并及时修改问题</li><li>可以实现用户的私人定制（比如是付费接口）</li><li>快速迭代</li></ol><h1 id="_2-api版本控制" tabindex="-1"><a class="header-anchor" href="#_2-api版本控制" aria-hidden="true">#</a> 2. API版本控制</h1><ul><li>在URL中追加版本或者作为查询字符串参数</li><li>通过自动以标头和通过接受标头</li></ul><h2 id="_2-1-安装组件" tabindex="-1"><a class="header-anchor" href="#_2-1-安装组件" aria-hidden="true">#</a> 2.1 安装组件</h2>',5),v={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},c=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.Mvc.Versioning&quot; Version=&quot;4.2.0&quot; /&gt;
    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer&quot; Version=&quot;4.2.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-1-常用配置" tabindex="-1"><a class="header-anchor" href="#_2-1-1-常用配置" aria-hidden="true">#</a> 2.1.1 常用配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[ApiVersion(&quot;1.1&quot;)] //设置版本号
[ApiVersionNeutral]//退出版本控制
[MapToApiVersion(&quot;1.1&quot;)] //设置独立版本
[ApiVersion(&quot;1.0&quot;, Deprecated = true)]//api版本已经被弃用
HttpContext.GetRequestedApiVersion().ToString(); //访问版本信息 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-querystring来实现版本控制" tabindex="-1"><a class="header-anchor" href="#_2-2-querystring来实现版本控制" aria-hidden="true">#</a> 2.2 QueryString来实现版本控制</h2><h3 id="_2-2-1-configureservices中配置" tabindex="-1"><a class="header-anchor" href="#_2-2-1-configureservices中配置" aria-hidden="true">#</a> 2.2.1 ConfigureServices中配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            //Versioning用来实现API的版本控制
            services.AddApiVersioning(options =&gt;
            {
                options.DefaultApiVersion = new ApiVersion(1, 1);//默认版本号
                options.AssumeDefaultVersionWhenUnspecified = true;//此选项将用于不提供版本的请求，默认情况下假定API的版本为1.0
                options.ReportApiVersions = true;//当设置为true时候，api将返回响应标头中支持的版本信息
                //下面这句默认不写也可以
                //options.ApiVersionReader = new QueryStringApiVersionReader(parameterNames: &quot;api-version&quot;);//该名称用于查询时候使用
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-2-控制器设置版本" tabindex="-1"><a class="header-anchor" href="#_2-2-2-控制器设置版本" aria-hidden="true">#</a> 2.2.2 控制器设置版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace NetCore_SwaggerVersion.Controllers.v1
{
    /// &lt;summary&gt;
    /// 版本1.1
    /// &lt;/summary&gt;
    [Route(&quot;api/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;1.1&quot;)]//可以设置多个
    [ApiVersion(&quot;1.2&quot;)]
    public class TestController : ControllerBase
    
namespace NetCore_SwaggerVersion.Controllers.v2
{
    /// &lt;summary&gt;
    /// 版本2.0
    /// &lt;/summary&gt;
    [Route(&quot;api/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;2.6&quot;)]
    public class TestController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>不同命名空间下可以存在相同的控制器</p></blockquote><h3 id="_2-2-3-特定方法设置版本" tabindex="-1"><a class="header-anchor" href="#_2-2-3-特定方法设置版本" aria-hidden="true">#</a> 2.2.3 特定方法设置版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[MapToApiVersion(&quot;1.1&quot;)]
[HttpGet]
public IEnumerable&lt;string&gt; Get()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-4-设置不受版本控制" tabindex="-1"><a class="header-anchor" href="#_2-2-4-设置不受版本控制" aria-hidden="true">#</a> 2.2.4 设置不受版本控制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    [ApiVersionNeutral]//退出版本控制
    [ApiController]
    [Route(&quot;api/[controller]/[action]&quot;)]
    public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-5-访问地址" tabindex="-1"><a class="header-anchor" href="#_2-3-5-访问地址" aria-hidden="true">#</a> 2.3.5 访问地址</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost:5000/api/WeatherForecast/Get //不写版本号的话走的是默认的版本号
http://localhost:5000/api/Test?api-version=1.1
http://localhost:5000/api/Test?api-version=1.2
http://localhost:5000/api/Test?api-version=2.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-url-path-segment来实现版本控制" tabindex="-1"><a class="header-anchor" href="#_2-3-url-path-segment来实现版本控制" aria-hidden="true">#</a> 2.3 URL Path Segment来实现版本控制</h2><h3 id="_2-3-1-configureservices中配置" tabindex="-1"><a class="header-anchor" href="#_2-3-1-configureservices中配置" aria-hidden="true">#</a> 2.3.1 ConfigureServices中配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            //Versioning用来实现API的版本控制
            services.AddApiVersioning(options =&gt;
            {
                options.DefaultApiVersion = new ApiVersion(1, 1);//默认版本号
                options.AssumeDefaultVersionWhenUnspecified = true;//此选项将用于不提供版本的请求，默认情况下假定API的版本为1.0
                options.ReportApiVersions = true;//当设置为true时候，api将返回响应标头中支持的版本信息
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-2-控制器设置版本" tabindex="-1"><a class="header-anchor" href="#_2-3-2-控制器设置版本" aria-hidden="true">#</a> 2.3.2 控制器设置版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace NetCore_SwaggerVersion.Controllers.v1
{
    /// &lt;summary&gt;
    /// 版本1.1
    /// &lt;/summary&gt;
    [Route(&quot;api/v{version:apiVersion}/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;1.0&quot;)]
    [ApiVersion(&quot;1.1&quot;)]//定义控制器提供哪个版本的API
    public class TestController : ControllerBase
    
namespace NetCore_SwaggerVersion.Controllers.v2
{
    /// &lt;summary&gt;
    /// 版本2.0
    /// &lt;/summary&gt;
    [Route(&quot;api/v{version:apiVersion}/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;2.6&quot;)]
    public class TestController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>不同命名空间下可以存在相同的控制器</p></blockquote><h3 id="_2-3-3-特定方法设置版本" tabindex="-1"><a class="header-anchor" href="#_2-3-3-特定方法设置版本" aria-hidden="true">#</a> 2.3.3 特定方法设置版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[MapToApiVersion(&quot;1.1&quot;)]
[HttpGet]
public IEnumerable&lt;string&gt; Get()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-4-设置不受版本控制" tabindex="-1"><a class="header-anchor" href="#_2-3-4-设置不受版本控制" aria-hidden="true">#</a> 2.3.4 设置不受版本控制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    [ApiVersionNeutral]//退出版本控制
    [ApiController]
    [Route(&quot;api/[controller]/[action]&quot;)]
    public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-5-访问地址-1" tabindex="-1"><a class="header-anchor" href="#_2-3-5-访问地址-1" aria-hidden="true">#</a> 2.3.5 访问地址</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost:5000/api/v1.0/Test
http://localhost:5000/api/v1.1/Test
http://localhost:5000/api/v2.6/Test
http://localhost:5000/api/WeatherForecast/Get 不受版本控制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-http-headers来实现版本控制" tabindex="-1"><a class="header-anchor" href="#_2-4-http-headers来实现版本控制" aria-hidden="true">#</a> 2.4 HTTP Headers来实现版本控制</h2><h3 id="_2-4-1-configureservices中配置" tabindex="-1"><a class="header-anchor" href="#_2-4-1-configureservices中配置" aria-hidden="true">#</a> 2.4.1 ConfigureServices中配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            //Versioning用来实现API的版本控制
            services.AddApiVersioning(options =&gt;
            {
                options.DefaultApiVersion = new ApiVersion(1, 1);//默认版本号
                options.AssumeDefaultVersionWhenUnspecified = true;//此选项将用于不提供版本的请求，默认情况下假定API的版本为1.0
                options.ReportApiVersions = true;//当设置为true时候，api将返回响应标头中支持的版本信息
                //header传递版本信息
                options.ApiVersionReader = new HeaderApiVersionReader(&quot;version&quot;);
                options.ApiVersionSelector = new CurrentImplementationApiVersionSelector(options);//如果没有传输版本号，那么会使用最大版本号  LowestImplementedApiVersionSelector是最小版本号
                options.UseApiBehavior = false;//是否使用API行为
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-2-控制器设置版本" tabindex="-1"><a class="header-anchor" href="#_2-4-2-控制器设置版本" aria-hidden="true">#</a> 2.4.2 控制器设置版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace NetCore_SwaggerVersion.Controllers.v1
{
    /// &lt;summary&gt;
    /// 版本1.1
    /// &lt;/summary&gt;
    [Route(&quot;api/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;1.1&quot;)]//定义控制器提供哪个版本的API
    public class TestController : ControllerBase
    
namespace NetCore_SwaggerVersion.Controllers.v2
{
    /// &lt;summary&gt;
    /// 版本2.0
    /// &lt;/summary&gt;
    [Route(&quot;api/[controller]&quot;)]
    [ApiController]
    [ApiVersion(&quot;2.6&quot;)]
    public class TestController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>不同命名空间下可以存在相同的控制器</p></blockquote><h3 id="_2-4-3-特定方法设置版本" tabindex="-1"><a class="header-anchor" href="#_2-4-3-特定方法设置版本" aria-hidden="true">#</a> 2.4.3 特定方法设置版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[MapToApiVersion(&quot;1.1&quot;)]
[HttpGet]
public IEnumerable&lt;string&gt; Get()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-4-设置不受版本控制" tabindex="-1"><a class="header-anchor" href="#_2-4-4-设置不受版本控制" aria-hidden="true">#</a> 2.4.4 设置不受版本控制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    [ApiVersionNeutral]//退出版本控制
    [ApiController]
    [Route(&quot;api/[controller]/[action]&quot;)]
    public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-5-访问地址" tabindex="-1"><a class="header-anchor" href="#_2-4-5-访问地址" aria-hidden="true">#</a> 2.4.5 访问地址</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost:5000/api/Test  //需要在headers里面增加 version: 1.1
http://localhost:5000/api/WeatherForecast/Get 不受版本控制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5-同时支持多种模式" tabindex="-1"><a class="header-anchor" href="#_2-5-同时支持多种模式" aria-hidden="true">#</a> 2.5 同时支持多种模式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddApiVersioning(o =&gt;
{
    o.ReportApiVersions = true;
    o.AssumeDefaultVersionWhenUnspecified = true;
    o.DefaultApiVersion = new ApiVersion(1, 0);
    o.ApiVersionReader = ApiVersionReader.Combine(new HeaderApiVersionReader(&quot;api-version&quot;), new QueryStringApiVersionReader(&quot;api-version&quot;));
    //或者
    //同时支持查询字符串和标头
    o.ApiVersionReader = new QueryStringOrHeaderApiVersionReader(parameterName: &quot;version&quot;){HeaderNames = { &quot;api-version&quot;, &quot;x-ms-version&quot; }}
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6-不借助包-封装文件" tabindex="-1"><a class="header-anchor" href="#_2-6-不借助包-封装文件" aria-hidden="true">#</a> 2.6 不借助包，封装文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class NameSpaceVersionRoutingConvention:IApplicationModelConvention
    {
        private readonly string apiPrefix;
        private const string urlTemplate = &quot;{0}/{1}/{2}&quot;;
        public NameSpaceVersionRoutingConvention(string apiPrefix = &quot;api&quot;)
        {
            this.apiPrefix = apiPrefix;
        }

        public void Apply(ApplicationModel application)
        {
            foreach (var controller in application.Controllers)
            {

                var hasRouteAttribute = controller.Selectors
                .Any(x =&gt; x.AttributeRouteModel != null);
                if (!hasRouteAttribute)
                {
                    continue;
                }
                var nameSpaces = controller.ControllerType.Namespace.Split(&#39;.&#39;);
                //获取namespace中版本号部分
                var version = nameSpaces.FirstOrDefault(x =&gt; Regex.IsMatch(x, @&quot;^v(\\d+)$&quot;));
                if (string.IsNullOrEmpty(version))
                {
                    continue;
                }
                string template = string.Format(urlTemplate, apiPrefix, version,
                controller.ControllerName);
                controller.Selectors[0].AttributeRouteModel = new AttributeRouteModel()
                {
                    Template = template
                };
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调试代码发现这种方式只在程序第一次运行的时候会执行，之后不会再执行多次，因此效率很高。</p>`,44),m={href:"https://www.cnblogs.com/runningsmallguo/p/7484954.html",target:"_blank",rel:"noopener noreferrer"},b=e("h1",{id:"参考文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),i(" 参考文档")],-1),p={href:"https://github.com/microsoft/aspnet-api-versioning",target:"_blank",rel:"noopener noreferrer"};function h(g,x){const n=t("ExternalLinkIcon");return l(),d("div",null,[u,e("p",null,[e("a",v,[i("ASP.NET"),s(n)]),i(" API versioning为您提供了一种功能强大但易于使用的方法，用于将API版本控制语义添加到使用ASP.NET构建的新的和现有的REST服务中。API版本控制扩展定义了简单的元数据属性和约定，用于描述您的服务实现了哪些API版本。")]),c,e("blockquote",null,[e("p",null,[i("借鉴于："),e("a",m,[i("https://www.cnblogs.com/runningsmallguo/p/7484954.html"),s(n)])])]),b,e("blockquote",null,[e("p",null,[e("a",p,[i("https://github.com/microsoft/aspnet-api-versioning"),s(n)])])])])}const q=r(o,[["render",h],["__file","webapiversion.html.vue"]]);export{q as default};
