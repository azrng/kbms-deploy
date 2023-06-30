import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as a,c as t,a as e,b as i,d as l,e as d}from"./app-3c3dee46.js";const o={},u=e("h1",{id:"_1-介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-介绍","aria-hidden":"true"},"#"),i(" 1. 介绍")],-1),v={href:"https://github.com/serilog/serilog/wiki/Provided-Sinks",target:"_blank",rel:"noopener noreferrer"},c=e("em",null,"结构化事件数据",-1),g={href:"https://serilog.net/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/serilog/serilog",target:"_blank",rel:"noopener noreferrer"},b=d(`<h1 id="_2-nuget" tabindex="-1"><a class="header-anchor" href="#_2-nuget" aria-hidden="true">#</a> 2. NuGet</h1><ul><li>Serilog 提供了对基本的结构化日志的功能支持</li><li>Serilog.AspNetCore</li></ul><p>基于AspNetCore框架整合的Serilog日志记录程序包，包含了Serilog基本库和控制台日志的实现。</p><ul><li><p>Serilog.Extensions.Logging 包含了注入了Serilog的拓展方法。</p></li><li><p>Serilog.Sinks.Async 实现了日志异步收集。</p></li><li><p>Serilog.Sinks.Console 实现了控制台输出日志。</p></li><li><p>Serilog.Sinks.Debug 实现了调试台输出日志。</p></li><li><p>Serilog.Sinks.File 实现了文件输出日志。</p></li><li><p>Serilog.Settings.Configuration 打通了serilog和Configuration，这样子就可以直接从appsettings.json中读取配置</p></li><li><p>Serilog.Sinks.RollingFile 实现了对滚动文件的支持</p></li></ul><p>根据情况选择不同的组件</p><h1 id="_3-简单用法" tabindex="-1"><a class="header-anchor" href="#_3-简单用法" aria-hidden="true">#</a> 3. 简单用法</h1><h2 id="_3-1-控制台输出" tabindex="-1"><a class="header-anchor" href="#_3-1-控制台输出" aria-hidden="true">#</a> 3.1 控制台输出</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public HomeController(ILogger&lt;HomeController&gt; logger)
{
    using (var logConfig = new LoggerConfiguration().WriteTo.Console().CreateLogger())
    {
        logConfig.Information(&quot;This is a test data.&quot;);
    };

    _logger = logger;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-文件输出" tabindex="-1"><a class="header-anchor" href="#_3-2-文件输出" aria-hidden="true">#</a> 3.2 文件输出</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public HomeController()
{
    var logger = new LoggerConfiguration().MinimumLevel.Debug().WriteTo
        .RollingFile(@&quot;e:\\log.txt&quot;, retainedFileCountLimit: 7)
        .CreateLogger();

    for (int i = 0; i &lt; byte.MaxValue; i++)
    {
        logger.Information($&quot;log {i}&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-控制台输出并且输出到文件" tabindex="-1"><a class="header-anchor" href="#_3-3-控制台输出并且输出到文件" aria-hidden="true">#</a> 3.3 控制台输出并且输出到文件</h2><h3 id="_3-3-1-安装nuget包" tabindex="-1"><a class="header-anchor" href="#_3-3-1-安装nuget包" aria-hidden="true">#</a> 3.3.1 安装Nuget包</h3><p>Serilog.AspNetCore</p><p>Serilog.Extensions.Logging.File</p><h3 id="_3-3-2-方案一" tabindex="-1"><a class="header-anchor" href="#_3-3-2-方案一" aria-hidden="true">#</a> 3.3.2 方案一</h3><p>修改appsettings文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;Serilog&quot;: {
        &quot;WriteTo&quot;: [
            {
                &quot;Name&quot;: &quot;RollingFile&quot;,
                &quot;Args&quot;: {
                    &quot;pathFormat&quot;: &quot;Serilogs\\\\{Date}.txt&quot;,
                    &quot;RestrictedToMinimumLevel&quot;: &quot;Warning&quot;,
                    &quot;rollingInterval&quot;: &quot;Day&quot;,
                    &quot;outputTemplate&quot;: &quot;{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}&quot;
                }
            },
            {
                &quot;Name&quot;: &quot;Console&quot;,
                &quot;Args&quot;: {}
            }
        ],
        &quot;MinimumLevel&quot;: {
            &quot;Default&quot;: &quot;Debug&quot;,
            &quot;Override&quot;: {
                &quot;Microsoft&quot;: &quot;Information&quot;,
                &quot;System&quot;: &quot;Information&quot;
            }
        }
    },
    &quot;AllowedHosts&quot;: &quot;*&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改Program方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                }).UseSerilog((hostingContext, loggerConfiguration) =&gt;
                {
                    loggerConfiguration.ReadFrom.Configuration(hostingContext.Configuration)
                    .Enrich.FromLogContext();
                });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-2-方案二" tabindex="-1"><a class="header-anchor" href="#_3-3-2-方案二" aria-hidden="true">#</a> 3.3.2 方案二</h3><p>修改Program方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public static class Program
    {
        public static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
             .MinimumLevel.Information()//配置日志级别
             .MinimumLevel.Override(&quot;Microsoft&quot;, LogEventLevel.Information)
             .WriteTo.File(&quot;log.txt&quot;, rollingInterval: RollingInterval.Day, rollOnFileSizeLimit: true)
             .Enrich.FromLogContext()
             .WriteTo.Console()
             .CreateLogger();

            try
            {
                Log.Information(&quot;Starting web host&quot;);
                CreateHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, &quot;Host terminated unexpectedly&quot;);
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
              .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：这种方式不用修改appsettings.json</p><h3 id="_3-3-3-控制器中使用" tabindex="-1"><a class="header-anchor" href="#_3-3-3-控制器中使用" aria-hidden="true">#</a> 3.3.3 控制器中使用</h3><h4 id="_3-3-3-1-注入" tabindex="-1"><a class="header-anchor" href="#_3-3-3-1-注入" aria-hidden="true">#</a> 3.3.3.1 注入</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private readonly ILogger&lt;WeatherForecastController&gt; _logger;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-3-2-输出" tabindex="-1"><a class="header-anchor" href="#_3-3-3-2-输出" aria-hidden="true">#</a> 3.3.3.2 输出</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>_logger.LogTrace(&quot;0 Trace日志&quot;);
_logger.LogDebug(&quot;1 我是一个调试日志&quot;);
_logger.LogInformation(&quot;2  我是一个info日志&quot;);
_logger.LogWarning(&quot;3  我是一个警告日志&quot;);
_logger.LogError(&quot;4   我是一个错误日志&quot;);
_logger.LogCritical(&quot;5   LogCritical 立刻修复&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-参考文档" tabindex="-1"><a class="header-anchor" href="#_4-参考文档" aria-hidden="true">#</a> 4. 参考文档</h1>`,29),h={href:"https://github.com.cnpmjs.org/serilog/serilog/wiki",target:"_blank",rel:"noopener noreferrer"};function p(q,_){const n=s("ExternalLinkIcon");return a(),t("div",null,[u,e("p",null,[i("与.NET的许多其他库一样，Serilog也提供对文件，控制台和"),e("a",v,[i(" 其他地方的"),l(n)]),i("诊断日志记录 。它易于设置，具有简洁的API，并且可以在最新的.NET平台之间移植。还在构建时考虑了强大的"),c,i("。")]),e("p",null,[i("官网："),e("a",g,[i("https://serilog.net/"),l(n)])]),e("p",null,[i("GitHub："),e("a",m,[i("https://github.com/serilog/serilog"),l(n)])]),b,e("p",null,[e("a",h,[i("https://github.com.cnpmjs.org/serilog/serilog/wiki"),l(n)])])])}const C=r(o,[["render",p],["__file","serilog.html.vue"]]);export{C as default};
