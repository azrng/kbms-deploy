import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as s,a as e,b as i,d as n,e as l}from"./app-3c3dee46.js";const c={},u=e("h1",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),i(" 介绍")],-1),o={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>本次示例环境：vs2019、net5</p><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><p>无需引用Nuget包即可实现以下功能。</p><h2 id="注入容器" tabindex="-1"><a class="header-anchor" href="#注入容器" aria-hidden="true">#</a> 注入容器</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddLocalization(t =&gt;
{
    t.ResourcesPath = &quot;Language&quot;;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启用配置" tabindex="-1"><a class="header-anchor" href="#启用配置" aria-hidden="true">#</a> 启用配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var supportedCultures = new List&lt;CultureInfo&gt;()
{
    new CultureInfo(&quot;zh-CN&quot;),
    new CultureInfo(&quot;en-US&quot;)
};
app.UseRequestLocalization(new RequestLocalizationOptions
{
    //这里指定默认语言包
    DefaultRequestCulture = new RequestCulture(&quot;en-US&quot;),//为了测试配置默认语言英文
    SupportedCultures = supportedCultures,
    SupportedUICultures = supportedCultures
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语言配置文件" tabindex="-1"><a class="header-anchor" href="#语言配置文件" aria-hidden="true">#</a> 语言配置文件</h2><p>需要在根目录新建一个文件夹，文件夹名字就是ResourcesPath的名字。资源文件(resx结尾)存放路径需要和使用的地方目录结构一致。(右键文件夹&gt;添加&gt;新建项)</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620743639094-5602d16d-4cbb-45d6-a7fb-6a36098f3fd2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>语言包下的目录结构和MVC对应，控制器对应控制器，视图对应视图。资源文件命名方式为使用文件的文件名称加上语言代码。</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620034709077-45121370-8b26-42a5-970c-ed5509b50720.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="读取资源文件" tabindex="-1"><a class="header-anchor" href="#读取资源文件" aria-hidden="true">#</a> 读取资源文件</h1><p>在控制器中使用，依赖注入资源文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[ApiController]
[Route(&quot;[controller]&quot;)]
public class HomeController : ControllerBase
{
    private readonly IStringLocalizer&lt;HomeController&gt; _localizer;

    public HomeController(IStringLocalizer&lt;HomeController&gt; localizer)
    {
        _localizer = localizer;
    }

    [HttpGet]
    public string Get()
    {
        return _localizer[&quot;succeed&quot;].Value;//如果找不到succeed的本地化值，那么就返回字符串“succeed”
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h1><p>有多种方法可以告诉程序需要使用哪一个语言文件，下面只说常见的使用，还支持自定义 。</p><p>默认输出</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620739094068-441806c6-1df0-4187-a8cf-44031e34942b.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="http报文" tabindex="-1"><a class="header-anchor" href="#http报文" aria-hidden="true">#</a> HTTP报文</h2><p>和常见的请求一样添加Accept-Language请求头即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Accept-Language:zh-CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620739027856-d2b61f2f-08ff-4e39-bed0-66d618939e25.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2><p>默认使用cookie名称.AspNetCore.Culture，值是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>c=zh-CN|uic=zh-CN
c=zh-CN
uic=zh-CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c是Culture，uic是UICulture</p><h2 id="url参数" tabindex="-1"><a class="header-anchor" href="#url参数" aria-hidden="true">#</a> URL参数</h2><p>三种写法，效果一样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?culture=zh-CN&amp;ui-culture=zh-CN
?culture=zh-CN
?ui-culture=zh-CN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620739056710-32704399-15c8-4a13-88d9-1706658774d3.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>`,32),m={href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/localization?view=aspnetcore-5.0",target:"_blank",rel:"noopener noreferrer"};function h(p,g){const a=t("ExternalLinkIcon");return d(),s("div",null,[u,e("p",null,[i("支持多语言使网站可以覆盖更广泛的受众。 "),e("a",o,[i("ASP.NET"),n(a)]),i(" Core 提供的服务和中间件可将网站本地化为不同的语言。")]),v,e("p",null,[e("a",m,[i("https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/localization?view=aspnetcore-5.0"),n(a)])])])}const x=r(c,[["render",h],["__file","globalization.html.vue"]]);export{x as default};
