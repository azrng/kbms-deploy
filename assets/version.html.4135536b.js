import{_ as s,W as r,X as d,Y as e,Z as i,$ as a,a0 as l,y as v}from"./framework.e8a0537a.js";const t={},o=l(`<h2 id="_1-安装组件" tabindex="-1"><a class="header-anchor" href="#_1-安装组件" aria-hidden="true">#</a> 1. 安装组件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.Mvc.Versioning&quot; Version=&quot;4.2.0&quot; /&gt;
    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer&quot; Version=&quot;4.2.0&quot; /&gt;
    &lt;PackageReference Include=&quot;Swashbuckle.AspNetCore&quot; Version=&quot;5.6.3&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-设置版本" tabindex="-1"><a class="header-anchor" href="#_2-设置版本" aria-hidden="true">#</a> 2. 设置版本</h2><h3 id="_2-1-控制器设置版本" tabindex="-1"><a class="header-anchor" href="#_2-1-控制器设置版本" aria-hidden="true">#</a> 2.1 控制器设置版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace NetCore_SwaggerVersion.Controllers.v1
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
    
namespace NetCore_SwaggerVersion.Controllers
{
    [ApiVersionNeutral]//不受版本控制
    [ApiController]
    [Route(&quot;api/[controller]/[action]&quot;)]
    public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-特定方法设置版本" tabindex="-1"><a class="header-anchor" href="#_2-2-特定方法设置版本" aria-hidden="true">#</a> 2.2 特定方法设置版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[MapToApiVersion(&quot;1.1&quot;)]
[HttpGet]
public IEnumerable&lt;string&gt; Get()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-设置不受版本控制" tabindex="-1"><a class="header-anchor" href="#_2-3-设置不受版本控制" aria-hidden="true">#</a> 2.3 设置不受版本控制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    [ApiVersionNeutral]//退出版本控制
    [ApiController]
    [Route(&quot;api/[controller]/[action]&quot;)]
    public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-配置startup类" tabindex="-1"><a class="header-anchor" href="#_3-配置startup类" aria-hidden="true">#</a> 3. 配置Startup类</h2><h2 id="_3-1-方案一" tabindex="-1"><a class="header-anchor" href="#_3-1-方案一" aria-hidden="true">#</a> 3.1 方案一</h2><h3 id="_3-1-1-添加新成员" tabindex="-1"><a class="header-anchor" href="#_3-1-1-添加新成员" aria-hidden="true">#</a> 3.1.1 添加新成员</h3><p>用来获取API版本信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      /// &lt;summary&gt;
        /// Api版本信息
        /// &lt;/summary&gt;
        private IApiVersionDescriptionProvider _provider;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-2-在-configureservices-中" tabindex="-1"><a class="header-anchor" href="#_3-1-2-在-configureservices-中" aria-hidden="true">#</a> 3.1.2 在 ConfigureServices 中</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            //Versioning用来实现API的版本控制
            services.AddApiVersioning(options =&gt;
            {
                options.DefaultApiVersion = new ApiVersion(1, 0);//默认版本号 大版本/小版本
                options.AssumeDefaultVersionWhenUnspecified = true;//此选项将用于不提供版本的请求，默认情况下假定API的版本为1.0
                options.ReportApiVersions = true;//当设置为true时候，api将返回响应标头中支持的版本信息
            });
            //Versioning.ApiExplorer用来实现元数据的发现工作
            services.AddVersionedApiExplorer(options =&gt;
            {
                options.GroupNameFormat = &quot;&#39;v&#39;VVV&quot;;//定义了版本号的格式化方式
                options.SubstituteApiVersionInUrl = true;
            });
            /*
                AddApiVersioning，主要用来配置向前兼容，定义了如果没有带版本号的访问，会默认访问v1.0的接口。
                AddVersionedApiExplorer用来添加API的版本管理，并定义了版本号的格式化方式，以及兼容终结点上带版本号的方式。
             */

            services.AddControllers();

            _provider = services.BuildServiceProvider().GetRequiredService&lt;IApiVersionDescriptionProvider&gt;();
            services.AddSwaggerGen(c =&gt;
            {
                foreach (var item in _provider.ApiVersionDescriptions)
                {
                    c.SwaggerDoc(item.GroupName, new OpenApiInfo { Title = &quot;Demo&quot;, Version = item.ApiVersion.ToString(), Description = &quot;切换版本请点右上角版本切换&quot; });
                }
                var xmlPath = Path.Combine(AppContext.BaseDirectory, $&quot;{AppDomain.CurrentDomain.FriendlyName}.xml&quot;);
                c.IncludeXmlComments(xmlPath);
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：</p><p>_provider = services.BuildServiceProvider().GetRequiredService&lt;IApiVersionDescriptionProvider&gt;();会提示“ ASP0000 从应用程序代码调用“BuildServiceProvider”会导致创建单一实例服务的其他副本。 考虑依赖项注入服务等替代项作为“Configure”的参数。”</p></blockquote><h3 id="_3-2-3-configure使用服务" tabindex="-1"><a class="header-anchor" href="#_3-2-3-configure使用服务" aria-hidden="true">#</a> 3.2.3 Configure使用服务</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =&gt;
                {
                    foreach (var item in _provider.ApiVersionDescriptions)
                    {
                        c.SwaggerEndpoint($&quot;/swagger/{item.GroupName}/swagger.json&quot;, &quot;Version：&quot; + item.GroupName.ToUpperInvariant());
                    }
                });
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此已经完成了版本控制+swagger。</p><h2 id="_3-2-方案二" tabindex="-1"><a class="header-anchor" href="#_3-2-方案二" aria-hidden="true">#</a> 3.2 方案二</h2><h3 id="_3-2-1-添加扩展类" tabindex="-1"><a class="header-anchor" href="#_3-2-1-添加扩展类" aria-hidden="true">#</a> 3.2.1 添加扩展类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// swagger扩展
    /// &lt;/summary&gt;
    internal class ConfigureSwaggerOptions : IConfigureOptions&lt;SwaggerGenOptions&gt;
    {
        private readonly IApiVersionDescriptionProvider _provider;
        public ConfigureSwaggerOptions(IApiVersionDescriptionProvider provider) =&gt; _provider = provider;

        public void Configure(SwaggerGenOptions options)
        {
            foreach (var description in _provider.ApiVersionDescriptions)
            {
                options.SwaggerDoc(description.GroupName, CreateInfoForApiVersion(description));
            }
        }

        private OpenApiInfo CreateInfoForApiVersion(ApiVersionDescription description)
        {
            var info = new OpenApiInfo()
            {
                Title = &quot;Demo&quot;,
                Version = description.ApiVersion.ToString(),
                Description = &quot;API 文档&quot;
            };

            if (description.IsDeprecated)
            {
                info.Description += &quot; 方法被弃用.&quot;;
            }
            return info;
        }
    }
    
 internal class SwaggerDefaultValues : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            var apiDescription = context.ApiDescription;
            operation.Deprecated |= apiDescription.IsDeprecated();

            if (operation.Parameters == null)
                return;

            foreach (var parameter in operation.Parameters)
            {
                var description = apiDescription.ParameterDescriptions.First(p =&gt; p.Name == parameter.Name);
                if (parameter.Description == null)
                {
                    parameter.Description = description.ModelMetadata?.Description;
                }

                if (parameter.Schema.Default == null &amp;&amp; description.DefaultValue != null)
                {
                    parameter.Schema.Default = new OpenApiString(description.DefaultValue.ToString());
                }

                parameter.Required |= description.IsRequired;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-2-在-configureservices-中" tabindex="-1"><a class="header-anchor" href="#_3-2-2-在-configureservices-中" aria-hidden="true">#</a> 3.2.2 在 ConfigureServices 中</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            //Versioning用来实现API的版本控制
            services.AddApiVersioning(options =&gt;
            {
                options.DefaultApiVersion = new ApiVersion(1, 0);//默认版本号 大版本/小版本
                options.AssumeDefaultVersionWhenUnspecified = true;//此选项将用于不提供版本的请求，默认情况下假定API的版本为1.0
                options.ReportApiVersions = true;//当设置为true时候，api将返回响应标头中支持的版本信息
            });
            //Versioning.ApiExplorer用来实现元数据的发现工作
            services.AddVersionedApiExplorer(options =&gt;
            {
                options.GroupNameFormat = &quot;&#39;v&#39;VVV&quot;;//定义了版本号的格式化方式
                options.SubstituteApiVersionInUrl = true;
            });
            /*
                AddApiVersioning，主要用来配置向前兼容，定义了如果没有带版本号的访问，会默认访问v1.0的接口。
                AddVersionedApiExplorer用来添加API的版本管理，并定义了版本号的格式化方式，以及兼容终结点上带版本号的方式。
             */

            services.AddControllers();

            services.AddTransient&lt;IConfigureOptions&lt;SwaggerGenOptions&gt;, ConfigureSwaggerOptions&gt;();
            services.AddSwaggerGen(options =&gt; options.OperationFilter&lt;SwaggerDefaultValues&gt;());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-3-configure使用服务-1" tabindex="-1"><a class="header-anchor" href="#_3-2-3-configure使用服务-1" aria-hidden="true">#</a> 3.2.3 Configure使用服务</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IApiVersionDescriptionProvider provider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =&gt;
                {
                    foreach (var item in provider.ApiVersionDescriptions)
                    {
                        c.SwaggerEndpoint($&quot;/swagger/{item.GroupName}/swagger.json&quot;, &quot;Version：&quot; + item.GroupName.ToUpperInvariant());
                    }
                });
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意:传入IApiVersionDescriptionProvider provider</p></blockquote><p>至此已经完成了版本控制+swagger。</p><h2 id="_4-访问接口" tabindex="-1"><a class="header-anchor" href="#_4-访问接口" aria-hidden="true">#</a> 4 访问接口</h2><p>接口地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost:5000/api/v1.0/Test
http://localhost:5000/api/v1.1/Test
http://localhost:5000/api/v2.6/Test
http://localhost:5000/api/WeatherForecast/Get 不受版本控制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>就必须写版本号，如果不写也没有设置不受版本控制，那么就会提示404</p></blockquote><p>完结。</p>`,34),c={href:"https://www.cnblogs.com/tiger-wang/p/14167625.html",target:"_blank",rel:"noopener noreferrer"};function u(p,m){const n=v("ExternalLinkIcon");return r(),d("div",null,[o,e("blockquote",null,[e("p",null,[i("借鉴于："),e("a",c,[i("https://www.cnblogs.com/tiger-wang/p/14167625.html"),a(n)])])])])}const g=s(t,[["render",u],["__file","version.html.vue"]]);export{g as default};
