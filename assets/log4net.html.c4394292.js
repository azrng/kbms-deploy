import{_ as e,W as n,X as i,a0 as t}from"./framework.35562d63.js";const l={},a=t(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>log4net是.Net下一个非常优秀的开源日志记录组件。log4net记录日志的功能非常强大。它可以将日志分不同的等级，以不同的格式，输出到不同的媒介。包括到追加文本文件，sqlite数据库，mysql数据库和windows日志中。</p><h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1><p>引用组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;PackageReference Include=&quot;log4net&quot; Version=&quot;2.0.12&quot; /&gt;
 &lt;PackageReference Include=&quot;Microsoft.Extensions.Logging.Log4Net.AspNetCore&quot; Version=&quot;5.0.1&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>引入log4net中间件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
            .ConfigureLogging(logging =&gt;
            {
                logging.AddFilter(&quot;System&quot;, LogLevel.Warning);//忽略掉System开头命名空间下的组件产生的warn级别的日志
                logging.AddFilter(&quot;Microsoft&quot;, LogLevel.Warning);//忽略掉Microsoft开头命名空间下的组件产生的warn级别的日志
                logging.AddLog4Net();//引用组件
            })
            .ConfigureWebHostDefaults(webBuilder =&gt;
            {
                webBuilder.UseStartup&lt;Startup&gt;();
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>日志级别配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Debug&quot;,//日志级别配置
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private readonly ILogger&lt;WeatherForecastController&gt; _logger;

public WeatherForecastController(ILogger&lt;WeatherForecastController&gt; logger)
{
    _logger = logger;
}

[HttpGet]
public string Get()
{
    //默认是输出在控制台上
    _logger.LogTrace(&quot;trace&quot;);
    _logger.LogDebug(&quot;debug&quot;);
    _logger.LogInformation(&quot;info&quot;);
    _logger.LogWarning(&quot;warn&quot;);
    _logger.LogError(&quot;error&quot;);
    _logger.LogCritical(&quot;critical&quot;);
    return &quot;成功&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619104196683-462ed3cf-6d3f-4446-9ae5-501f06a5c5a1.png" alt="img" loading="lazy"></p><h1 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h1><p>log4net.Config文件</p><div class="language-s line-numbers-mode" data-ext="s"><pre class="language-s"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;log4net&gt;
  &lt;!-- 错误 Error.log--&gt;
  &lt;appender name=&quot;MYLOG&quot; type=&quot;log4net.Appender.RollingFileAppender&quot;&gt;
    &lt;!--目录路径，可以是相对路径或绝对路径--&gt;
    &lt;param name=&quot;File&quot; value=&quot;SysLog\\\\&quot;/&gt;
    &lt;!--文件名，按日期生成文件夹--&gt;
    &lt;param name=&quot;DatePattern&quot; value=&quot;/yyyy-MM-dd/&amp;quot;Error.log&amp;quot;&quot;/&gt;
    &lt;!--追加到文件--&gt;
    &lt;appendToFile value=&quot;true&quot;/&gt;
    &lt;!--创建日志文件的方式，可选值：Date[日期],文件大小[Size],混合[Composite]--&gt;
    &lt;rollingStyle value=&quot;Composite&quot;/&gt;
    &lt;!--写到一个文件--&gt;
    &lt;staticLogFileName value=&quot;false&quot;/&gt;
    &lt;!--单个文件大小。单位:KB|MB|GB--&gt;
    &lt;maximumFileSize value=&quot;200MB&quot;/&gt;
    &lt;!--最多保留的文件数，设为&quot;-1&quot;则不限--&gt;
    &lt;maxSizeRollBackups value=&quot;-1&quot;/&gt;
    &lt;!--日志格式--&gt;
    &lt;layout type=&quot;log4net.Layout.PatternLayout&quot;&gt;
      &lt;!--&lt;conversionPattern value=&quot;%message&quot;/&gt;--&gt;
      &lt;param name=&quot;ConversionPattern&quot; value=&quot;----------------%n%d [%t] %-5p %c [%x] %L %nMSG:%m%n&quot; /&gt;
    &lt;/layout&gt;
    &lt;!--该配置要输出的日志最低级别和最高级别--&gt;
    &lt;!--&lt;filter type=&quot;log4net.Filter.LevelRangeFilter&quot;&gt;
      &lt;param name=&quot;LevelMin&quot; value=&quot;INFO&quot; /&gt;
      &lt;param name=&quot;LevelMax&quot; value=&quot;ERROR&quot; /&gt;
    &lt;/filter&gt;--&gt;
  &lt;/appender&gt;

  &lt;!-- levels: OFF &gt; FATAL &gt; ERROR &gt; WARN &gt; INFO &gt; DEBUG  &gt; ALL --&gt;
  &lt;root&gt;
    &lt;priority value=&quot;ALL&quot;/&gt;
    &lt;level value=&quot;ALL&quot;/&gt;
    &lt;appender-ref ref=&quot;MYLOG&quot; /&gt;
  &lt;/root&gt;
&lt;/log4net&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),s=[a];function d(u,r){return n(),i("div",null,s)}const v=e(l,[["render",d],["__file","log4net.html.vue"]]);export{v as default};
