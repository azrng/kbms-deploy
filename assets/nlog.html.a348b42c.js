import{_ as n,W as t,X as l,Y as e,Z as s,$ as a,a0 as r,y as d}from"./framework.cf23f0c7.js";const o={},u=r(`<h1 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h1><p>NLog是适用于各种.NET平台（包括.NET标准）的灵活，免费的日志记录平台，支持数据库、文件、控制台。</p><h1 id="_2-输入到文件" tabindex="-1"><a class="header-anchor" href="#_2-输入到文件" aria-hidden="true">#</a> 2. 输入到文件</h1><h2 id="_2-1-引用nuget包" tabindex="-1"><a class="header-anchor" href="#_2-1-引用nuget包" aria-hidden="true">#</a> 2.1 引用nuget包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;NLog&quot; Version=&quot;4.7.6&quot; /&gt;
    &lt;PackageReference Include=&quot;NLog.Web.AspNetCore&quot; Version=&quot;4.9.3&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-创建nlog配置文件" tabindex="-1"><a class="header-anchor" href="#_2-2-创建nlog配置文件" aria-hidden="true">#</a> 2.2 创建NLog配置文件</h2><p>在项目目录中新建一个xml文件的nlog.config</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?&gt;
&lt;nlog xmlns=&quot;http://www.nlog-project.org/schemas/NLog.xsd&quot;
      xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&gt;
  &lt;targets async=&quot;true&quot;&gt;
    &lt;target name=&quot;file&quot; xsi:type=&quot;File&quot;
           layout=&quot;\${longdate} \${logger} \${message}\${exception:format=ToString}&quot;
           fileName=&quot;\${basedir}/logs/\${date:format=yyyy-MM-dd}.txt&quot;
           keepFileOpen=&quot;true&quot;
           encoding=&quot;utf-8&quot; /&gt;
    &lt;target name=&quot;console&quot; xsi:type=&quot;Console&quot;&gt;
      &lt;attribute name=&quot;time&quot; layout=&quot;\${date:format=yyyy-MM-dd HH\\:mm\\:ss.fff zzz}&quot; /&gt;
      &lt;attribute name=&quot;category&quot; layout=&quot;\${logger}&quot; /&gt;
      &lt;attribute name=&quot;log_level&quot; layout=&quot;\${level:lowerCase=true}&quot; /&gt;
      &lt;attribute name=&quot;message&quot; layout=&quot;\${message}&quot; /&gt;
      &lt;attribute name=&quot;trace_id&quot; layout=&quot;\${aspnet-TraceIdentifier:ignoreActivityId=true}&quot; /&gt;
      &lt;attribute name=&quot;user_id&quot; layout=&quot;\${aspnet-user-identity}&quot; /&gt;
      &lt;!--取得该条日志生产者名字--&gt;
      &lt;attribute name=&quot;exception&quot; layout=&quot;\${exception:format=tostring}&quot; /&gt;
    &lt;/target&gt;
  &lt;/targets&gt;

  &lt;rules&gt;
    &lt;logger name=&quot;*&quot; minlevel=&quot;Info&quot; writeTo=&quot;console&quot;   ruleName=&quot;console&quot; /&gt;

    &lt;logger name=&quot;*&quot; minlevel=&quot;Debug&quot; writeTo=&quot;file&quot; /&gt;
  &lt;/rules&gt;
&lt;/nlog&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-program中修改" tabindex="-1"><a class="header-anchor" href="#_2-3-program中修改" aria-hidden="true">#</a> 2.3 Program中修改</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using NLog.Web;
using System;

namespace NlogDemo
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            var logger = NLogBuilder.ConfigureNLog(&quot;nlog.config&quot;).GetCurrentClassLogger();
            try
            {
                logger.Debug(&quot;init main&quot;);
                CreateHostBuilder(args).Build().Run();
            }
            catch (Exception ex)
            {
                //NLog: catch setup errors
                logger.Error(ex, &quot;Stopped program because of exception&quot;);
                throw;
            }
            finally
            {
                NLog.LogManager.Shutdown();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
             .ConfigureWebHostDefaults(webBuilder =&gt;
             {
                 webBuilder.UseStartup&lt;Startup&gt;();
             })
                .ConfigureLogging((_, loggerBuilder) =&gt;
                {
                    loggerBuilder.ClearProviders();
                    loggerBuilder.SetMinimumLevel(LogLevel.Information);
                })
            .UseNLog();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-配置日志级别" tabindex="-1"><a class="header-anchor" href="#_2-4-配置日志级别" aria-hidden="true">#</a> 2.4 配置日志级别</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Information&quot;,
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5-控制器使用" tabindex="-1"><a class="header-anchor" href="#_2-5-控制器使用" aria-hidden="true">#</a> 2.5 控制器使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        private readonly ILogger&lt;HomeController&gt; _logger;

        public HomeController(ILogger&lt;HomeController&gt; logger)
        {
            _logger = logger;
            _logger.LogDebug(1, &quot;NLog injected into HomeController&quot;);
        }

        [HttpGet]
        public string Get()
        {
            _logger.LogTrace(&quot;Trace&quot;);
            _logger.LogDebug(&quot;debug&quot;);
            _logger.LogInformation(&quot;info&quot;);
            _logger.LogWarning(&quot;warn&quot;);
            _logger.LogError(&quot;error&quot;);
            _logger.LogCritical(&quot;Critical&quot;);

            return default;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看日志文件</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619886030977-ef9d2c9c-fb94-41d7-a707-33eee277bbd9.png" alt="img" loading="lazy"></p><h1 id="_3-参考文档" tabindex="-1"><a class="header-anchor" href="#_3-参考文档" aria-hidden="true">#</a> 3. 参考文档</h1>`,17),v={href:"https://github.com/NLog/NLog/wiki/Getting-started-with-ASP.NET-Core-5",target:"_blank",rel:"noopener noreferrer"};function c(g,m){const i=d("ExternalLinkIcon");return t(),l("div",null,[u,e("p",null,[e("a",v,[s("https://github.com/NLog/NLog/wiki/Getting-started-with-ASP.NET-Core-5"),a(i)])])])}const q=n(o,[["render",c],["__file","nlog.html.vue"]]);export{q as default};
