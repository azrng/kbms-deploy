import{_ as i,W as o,X as r,Y as e,Z as n,$ as s,a0 as l,y as a}from"./framework.cf23f0c7.js";const d={},u=e("h1",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),v={href:"http://xn--asp-888f125p.net",target:"_blank",rel:"noopener noreferrer"},c=l(`<h1 id="日志级别" tabindex="-1"><a class="header-anchor" href="#日志级别" aria-hidden="true">#</a> 日志级别</h1><p><strong>日志级别说明</strong>：每一个日志都有指定的日志级别值，日志级别判断指示严重性或重要性。使用日志等级可以很好的过滤想要的日志，记录日志记录问题的同时，甚至为我们提供非常详细的日志信息。</p><p><strong>LogLevel 严重性：Trace &lt; Debug &lt; Information &lt; Warning &lt; Error &lt; Critical &lt; None。</strong></p><table><thead><tr><th><strong>日志级别</strong></th><th><strong>常用场景</strong></th></tr></thead><tbody><tr><td><strong>Trace = 0</strong></td><td>记录一些对程序员调试问题有帮助的信息, 其中可能包含一些敏感信息, 所以应该避免在 生产环境中启用Trace日志，因此不应该用于生产环境。默认应禁用。</td></tr><tr><td><strong>Debug = 1</strong></td><td>记录一些在开发和调试阶段有用的短时变 量(Short-term usefulness), 所以除非为了临时排除生产环境的 故障，开发人员应该尽量避免在生产环境中启用Debug日志，默认情况下这是最详细的日志。</td></tr><tr><td><strong>Information = 2</strong></td><td>记录跟踪应用程序的一些流程, 例如，记录当前api请求的url。</td></tr><tr><td><strong>Warning = 3</strong></td><td>记录应用程序中发生出现错误或其它导致程序停止的流程异常信息。 这些信息中可能包含错误消息或者错误产生的条件, 可供后续调查，例如, 文件未找到</td></tr><tr><td><strong>Error = 4</strong></td><td>记录应用程序中某个操作产生的错误和异常信息。这些消息应该指明当前活动或操作（比如当前的 HTTP 请求），而不是应用程序范围的故障。</td></tr><tr><td><strong>Critical = 5</strong></td><td>记录一些需要立刻修复，急需被关注的问题，应当记录关键级别的日志。例如数据丢失，磁盘空间不足等。</td></tr></tbody></table><h1 id="日志配置" tabindex="-1"><a class="header-anchor" href="#日志配置" aria-hidden="true">#</a> 日志配置</h1><p>注意：日志配置通常取决于 appsettings {Environment}.json 文件的 Logging配置节，支持多个LogPrivider、过滤日志、定制特定种类的日志收集级别。</p><p>配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;Debug&quot;: {
      &quot;LogLevel&quot;: {
        &quot;Default&quot;: &quot;Information&quot;
      }
    },
    &quot;Console&quot;: {
      &quot;LogLevel&quot;: {
       &quot;Microsoft.AspNetCore.Mvc.Razor.Internal&quot;: &quot;Warning&quot;,
       &quot;Microsoft.AspNetCore.Mvc.Razor.Razor&quot;: &quot;Debug&quot;,
       &quot;Microsoft.AspNetCore.Mvc.Razor&quot;: &quot;Error&quot;,
       &quot;Default&quot;: &quot;Information&quot;
      }
    },
    &quot;LogLevel&quot;: {
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.AspNetCore.Hosting.Diagnostics&quot;: &quot;Information&quot;,    // 提供给第三方调用API日志
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;,
      &quot;Microsoft.EntityFrameworkCore.Database.Command&quot;: &quot;Information&quot;,  //数据库操作sql日志
      &quot;System.Net.Http.HttpClient&quot;: &quot;Information&quot;,    // 应用内部发起的Http请求日志
      &quot;Default&quot;: &quot;Warning&quot;    // 除以上日志之外，记录Warning+级别日志
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此 JSON 将创建 6 条筛选规则：Debug中1 条用于调试提供程序，Console中 4 条用于控制台提供程序，最后一条LogLevel 用于所有提供程序。 创建 ILogger 对象时，为每个提供程序选择一个规则。</p><h1 id="简单操作" tabindex="-1"><a class="header-anchor" href="#简单操作" aria-hidden="true">#</a> 简单操作</h1><p>在类库中使用需要先引用指定组件using Microsoft.Extensions.Logging;</p><p>配置文件中进行配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Debug&quot;, //大于等于这个级别的才会被输出
      &quot;Microsoft&quot;: &quot;Warning&quot;, //类别适用于以 &quot;Microsoft&quot; 开头的所有类别
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot; //类别比 &quot;Microsoft&quot; 类别更具体，因此 &quot;Microsoft.Hosting.Lifetime&quot; 类别在日志级别“Information”和更高级别记录。
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码中使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private readonly ILogger&lt;HomeController&gt; _logger;

public HomeController(ILogger&lt;HomeController&gt; logger)
{
    _logger = logger;
}

[HttpGet]
public string Get()
{
    /*
        日志配置通常由 appsettings {Environment}.json 文件的 Logging 部分提供
        */
    _logger.LogTrace(&quot;0 Trace日志&quot;);
    _logger.LogDebug(&quot;1 我是一个Debug日志&quot;);
    _logger.LogInformation(&quot;2  我是一个info日志&quot;);
    _logger.LogWarning(&quot;3  我是一个警告日志&quot;);
    _logger.LogError(&quot;4   我是一个错误日志&quot;);
    _logger.LogCritical(&quot;5   LogCritical 立刻修复&quot;);
    return &quot;成功&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行查看输出效果</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619945473634-900e7717-5bff-4fbf-b485-1ff1102cd69a.png" alt="img" loading="lazy"></p>`,17);function g(m,q){const t=a("ExternalLinkIcon");return o(),r("div",null,[u,e("p",null,[e("a",v,[n("这是asp.net"),s(t)]),n(" core中内置的一个通用日志接口组件。")]),c])}const p=i(d,[["render",g],["__file","ilogger.html.vue"]]);export{p as default};
