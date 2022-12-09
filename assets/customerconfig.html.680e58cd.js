import{_ as t,W as a,X as r,Y as i,Z as e,$ as l,a0 as n,y as d}from"./framework.35562d63.js";const o={},u=n(`<p>前文获取配置文件的时候，是获取默认的appsettings.json配置文件的配置，下面说明下如何进行自定义获取配置</p><h1 id="_1-json-provider" tabindex="-1"><a class="header-anchor" href="#_1-json-provider" aria-hidden="true">#</a> 1. Json Provider</h1><h2 id="_1-1-构建独立的iconfiguration" tabindex="-1"><a class="header-anchor" href="#_1-1-构建独立的iconfiguration" aria-hidden="true">#</a> 1.1 构建独立的IConfiguration</h2><p>编写方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public static IConfigurationRoot LoadSettings(this IHostEnvironment env)
        {
            return new ConfigurationBuilder()
                 .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                 .AddJsonFile(&quot;common.json&quot;, optional: true, reloadOnChange: false)
               	 .AddJsonFile(&quot;appsettings.json&quot;, optional: true, reloadOnChange: false)
                 .AddJsonFile($&quot;appsettings.{env.EnvironmentName}.json&quot;, optional: true, reloadOnChange: false)
                 .AddEnvironmentVariables()
                 .Build();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Startup构造函数的时候进行赋值替换IConfiguration</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        private readonly IConfiguration _configuration;
        public Startup(IWebHostEnvironment env)
        {
            _configuration = env.LoadSettings();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该操作添加的配置项，只在startup范围生效。</p><h2 id="_1-2-在progrom全局自定义配置" tabindex="-1"><a class="header-anchor" href="#_1-2-在progrom全局自定义配置" aria-hidden="true">#</a> 1.2 在Progrom全局自定义配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((hostingContext, config) =&gt;
            {
                //config.Sources.Clear();  // 会清除所有配置提供程序
                var env = hostingContext.HostingEnvironment;
                config.SetBasePath(env.ContentRootPath);
                config.AddJsonFile(&quot;devappsettings.json&quot;, optional: false, reloadOnChange: true);
            })
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：添加自定义文件的目录要注意，可能会存在因为目录问题所以找不到配置文件的情况。</p><h1 id="_2-memory-provider" tabindex="-1"><a class="header-anchor" href="#_2-memory-provider" aria-hidden="true">#</a> 2. Memory Provider</h1><p>允许我们将一个应用程序配置直接配置到内存中，而不是像传统方式那样子必须制定一个物理文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            var builder = new ConfigurationBuilder();
            var profileCollection = new Dictionary&lt;string, string&gt;
            {
                {&quot;AuthorProfile:FirstName&quot;, &quot;Joydip&quot;},
                {&quot;AuthorProfile:LastName&quot;, &quot;Kanjilal&quot;},
                {&quot;AuthorProfile:Address&quot;, &quot;Hyderabad, India&quot;}
            };
            builder.AddInMemoryCollection(profileCollection);
            Configuration = builder.Build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前发现的用途</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((hostingContext, config) =&gt;
            {
                var builder = new ConfigurationBuilder();
                var profileCollection = new Dictionary&lt;string, string&gt;
            {
                {&quot;AuthorProfile:FirstName&quot;, &quot;Joydip&quot;},
                {&quot;AuthorProfile:LastName&quot;, &quot;Kanjilal&quot;},
                {&quot;AuthorProfile:Address&quot;, &quot;Hyderabad, India&quot;}
            };
                builder.AddInMemoryCollection(profileCollection);
                config.AddConfiguration(builder.Build());
            })
            .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以通过IConfiguration实例去获取了。</p><h1 id="_3-公共类获取配置文件" tabindex="-1"><a class="header-anchor" href="#_3-公共类获取配置文件" aria-hidden="true">#</a> 3. 公共类获取配置文件</h1><p>引用组件</p><p>Microsoft.Extensions.Configuration.Json</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 	public class AppSettings
    {
        private static IConfiguration Configuration { get; set; }

        public AppSettings(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        /// &lt;summary&gt;
        /// 封装要操作的字符
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;sections&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static string GetValue(params string[] sections)
        {
            try
            {
                if (sections.Any())
                    return Configuration[string.Join(&quot;:&quot;, sections)];
            }
            catch (Exception)
            { }
            return &quot;&quot;;
        }

        /// &lt;summary&gt;
        /// 递归获取配置信息数组
        ///引用 Microsoft.Extensions.Configuration.Binder 包
        /// &lt;/summary&gt;
        /// &lt;typeparam name=&quot;T&quot;&gt;&lt;/typeparam&gt;
        /// &lt;param name=&quot;sections&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static List&lt;T&gt; App&lt;T&gt;(params string[] sections)
        {
            List&lt;T&gt; list = new List&lt;T&gt;();
            Configuration.Bind(string.Join(&quot;:&quot;, sections), list);
            return list;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),v={href:"https://gitee.com/laozhangIsPhi/Blog.Core",target:"_blank",rel:"noopener noreferrer"},c=n(`<p>ConfigureServices中配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddSingleton(new AppSettings(Configuration));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取指定配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var info = AppSettings.GetValue(&quot;Logging&quot;, &quot;LogLevel&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function m(g,b){const s=d("ExternalLinkIcon");return a(),r("div",null,[u,i("p",null,[e("参考自："),i("a",v,[e("https://gitee.com/laozhangIsPhi/Blog.Core"),l(s)])]),c])}const f=t(o,[["render",m],["__file","customerconfig.html.vue"]]);export{f as default};
