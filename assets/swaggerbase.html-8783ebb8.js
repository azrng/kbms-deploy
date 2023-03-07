import{_ as r,W as t,X as l,Y as e,Z as i,$ as a,a0 as s,C as d}from"./framework-63781bb7.js";const c={},u=s(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>Swagger 是一个规范和完整的框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务。日常可以用于后端开发人员测试接口或者前后端联调使用。从.net5开始，swagger已经集成到vs2019编译器中，可以通过勾对选项“启用OpenAPI支持”显示基本的swagger配置。</p><p>本文示例环境：vs2019、net5</p><h1 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用" aria-hidden="true">#</a> 1 基本使用</h1><p>新建一个netcore api项目，为了测试效果，我多创建几个控制器</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620911118372-0d629e1a-bc7a-41ec-9cc2-ea375da45497.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_1-1-安装组件" tabindex="-1"><a class="header-anchor" href="#_1-1-安装组件" aria-hidden="true">#</a> 1.1 安装组件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;ItemGroup&gt;
    &lt;PackageReference Include=&quot;Swashbuckle.AspNetCore&quot; Version=&quot;5.6.3&quot; /&gt;
  &lt;/ItemGroup&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-注册swagger服务" tabindex="-1"><a class="header-anchor" href="#_1-2-注册swagger服务" aria-hidden="true">#</a> 1.2 注册swagger服务</h2><p>在ConfigureServices中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSwaggerGen(c =&gt;
            {
                c.SwaggerDoc(&quot;v1&quot;, new OpenApiInfo { Title = &quot;WebApi&quot;, Version = &quot;v1&quot; });
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>`,12),v={href:"//netcore3.xn--0-bs6a41kww2a9ogdxii9e",target:"_blank",rel:"noopener noreferrer"},o=s(`<p>c.SwaggerDoc(&quot;v1&quot;, new Info { Title = &quot;WebApi&quot;, Version = &quot;v1&quot; });</p><h2 id="_1-3-使用swagger" tabindex="-1"><a class="header-anchor" href="#_1-3-使用swagger" aria-hidden="true">#</a> 1.3 使用Swagger</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //启用中间件以将生成的swagger公开为json终结点
                app.UseSwagger();
                //启用swagger-ui中间件，指定swagger json终结点，以公开交互文档
                app.UseSwaggerUI(c =&gt; c.SwaggerEndpoint(&quot;/swagger/v1/swagger.json&quot;, &quot;WebApi v1&quot;));
            }

            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该示例代码配置的swagger只在Development环境下显示，可以根据实际情况来修改</p><h2 id="_1-4-启动" tabindex="-1"><a class="header-anchor" href="#_1-4-启动" aria-hidden="true">#</a> 1.4 启动</h2><p>运行项目，展示下面的效果</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620911384343-f5f7d430-9fe1-449c-997a-f5452129351b.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果这是你写的接口，这个时候你的其他同事去看，真的会一脸懵逼，你这写的都是啥玩意，那么我们来给这加上注释吧。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/// &lt;summary&gt;
/// 用户控制器
/// &lt;/summary&gt;
[Route(&quot;api/[controller]&quot;)]
[ApiController]
public class UserController : ControllerBase
{
    /// &lt;summary&gt;
    ///查询用户列表
    /// &lt;/summary&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpGet]
    public IEnumerable&lt;string&gt; Get()
    {
        return new string[] { &quot;value1&quot;, &quot;value2&quot; };
    }

    /// &lt;summary&gt;
    /// 查询用户详情
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpGet(&quot;{id}&quot;)]
    public string Get(int id)
    {
        return &quot;value&quot;;
    }

    /// &lt;summary&gt;
    /// 删除用户
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
    [HttpDelete(&quot;{id}&quot;)]
    public void Delete(int id)
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样子加了注释还不行，swagger还读取不到我们的注释，我们还需要生成xml文档并且让swagger使用，选中项目右键属性=&gt;生成=&gt;xml文档文件</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620911528034-b1bce7f0-904a-4e68-8ecb-0aab22b1a2c0.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>修改注入swagger配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddSwaggerGen(c =&gt;
{
    c.SwaggerDoc(&quot;v1&quot;, new OpenApiInfo { Title = &quot;WebApi&quot;, Version = &quot;v1&quot; });

    // 使用反射获取xml文件。并构造出文件的路径
    var xmlFile = $&quot;{Assembly.GetExecutingAssembly().GetName().Name}.xml&quot;;
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    // 启用xml注释.第二个参数启用控制器的注释，默认为false.
    c.IncludeXmlComments(xmlPath, true);

    //或者循环获取xml文件配置
    Directory.GetFiles(AppDomain.CurrentDomain.BaseDirectory, &quot;*.xml&quot;).ToList().ForEach(file =&gt;
    {
        c.IncludeXmlComments(file);
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次启动项目查看界面</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620911727783-4928587f-ca55-4c98-a17a-dbabcf8b51e3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>至此，基础的配置swagger显示注释已经实现了，那么如何调用我们接口那？</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620911856379-67201b81-87b9-4559-a217-2321feb43b3d.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通过该界面，我们可以看到请求地址、请求方式、入参类型、输出参数等。</p><p>注：</p><p>通过设置取消显示警告：1591 ， 可以去除方法和类上面的xml注释警告</p><p>如果实体类不在当前程序集下，需要同样方式配置实体类程序集的xml文档到swagger配置</p><h2 id="_1-5-不显示某些接口" tabindex="-1"><a class="header-anchor" href="#_1-5-不显示某些接口" aria-hidden="true">#</a> 1.5 不显示某些接口</h2><p>通过一些特性，可以标记不显示某一些接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//忽略显示接口
[ApiExplorerSettings(IgnoreApi =true)]
 
//废弃接口
[Obsolete(&quot;该接口不再使用&quot;)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-swagger传递jwt" tabindex="-1"><a class="header-anchor" href="#_2-swagger传递jwt" aria-hidden="true">#</a> 2. swagger传递JWT</h1><p>jwt是一个基于json的、用于在网络上声明某种主张的令牌，通常是用三部分组成：<strong>头信息，消息体，签名</strong>。他是一种双方之间传递安全信息的表述性声明规范。可以做权限验证的工具，但是目的不是为了数据加密和保护。虽然看似像是加密的数据，但是它并没有加密，不适合存储机密信息。</p><p>如果我们接口是需要传递token才可以访问，那么我们就需要对我们的swagger配置再进行改造</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddSwaggerGen(c =&gt;
{
    c.SwaggerDoc(&quot;v1&quot;, new OpenApiInfo { Title = &quot;WebApi&quot;, Version = &quot;v1&quot; });

    // 使用反射获取xml文件。并构造出文件的路径
    var xmlFile = $&quot;{Assembly.GetExecutingAssembly().GetName().Name}.xml&quot;;
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    // 启用xml注释.第二个参数启用控制器的注释，默认为false.
    c.IncludeXmlComments(xmlPath, true);

    var security = new Dictionary&lt;string, IEnumerable&lt;string&gt;&gt; { { &quot;Bearer&quot;, new string[] { } } };
    c.AddSecurityDefinition(&quot;Bearer&quot;, new OpenApiSecurityScheme()
    {
        Description = &quot;JWT授权(数据将在请求头中进行传输) 在下方输入Bearer {token} 即可，注意两者之间有空格&quot;,
        Name = &quot;Authorization&quot;, //jwt默认的参数名称
        In = ParameterLocation.Header, //jwt默认存放Authorization信息的位置(请求头中)
        Type = SecuritySchemeType.ApiKey,
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference()
                {
                    Id = &quot;Bearer&quot;,
                    Type = ReferenceType.SecurityScheme
                }
            },
            Array.Empty&lt;string&gt;()
        }
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行，查看界面，发现界面有所不同</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620913001521-24c778d7-44e6-4160-8dad-9371c1002847.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>虽然我手上没有token，但是我也没有写校验token的代码，所以我们就暂且看为一个头部传递的工具使用。jwt具体使用后续再讲。</p><p>token传递方式就是在Headers增加 Authorization:Bearer {token} ，然后需要在程序中配置校验token，当下我们只是模拟swagger在header中传递值。</p><p>在输入框输出： Bearer AABBCC</p><p>在Action中获取我们传输的数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var token = HttpContext.Request.Headers[&quot;Authorization&quot;];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620913403862-f7762ceb-241b-4bb6-846e-a5d213d1ab0f.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="_3-参考文档" tabindex="-1"><a class="header-anchor" href="#_3-参考文档" aria-hidden="true">#</a> 3 参考文档</h1>`,37),m={href:"https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-5.0",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"关于swagger的使用操作还有很多，上面有些配置也没有详细说到，只说了一些功能性的操作。更详细操作需要自行学习。",-1),b=e("h1",{id:"_4-其他文章学习",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-其他文章学习","aria-hidden":"true"},"#"),i(" 4 其他文章学习")],-1),p={href:"https://www.cnblogs.com/shanfeng1000/p/13476831.html",target:"_blank",rel:"noopener noreferrer"};function h(x,f){const n=d("ExternalLinkIcon");return t(),l("div",null,[u,e("p",null,[e("a",v,[i("//netcore3.0之前版本用法"),a(n)])]),o,e("p",null,[e("a",m,[i("https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-5.0"),a(n)])]),g,b,e("p",null,[e("a",p,[i("https://www.cnblogs.com/shanfeng1000/p/13476831.html"),a(n)])])])}const q=r(c,[["render",h],["__file","swaggerbase.html.vue"]]);export{q as default};
