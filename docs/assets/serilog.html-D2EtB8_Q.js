import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as l,c as p,b as n,e as s,f as e,d as t}from"./app-CBxp4zeL.js";const c={},u=n("h2",{id:"_1-概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-概述"},[n("span",null,"1. 概述")])],-1),r={href:"https://github.com/serilog/serilog/wiki/Provided-Sinks",target:"_blank",rel:"noopener noreferrer"},d={href:"https://serilog.net/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/serilog/serilog",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="_2-nuget" tabindex="-1"><a class="header-anchor" href="#_2-nuget"><span>2. NuGet</span></a></h2><p>Nuget包说明</p><ul><li><p>Serilog 提供了对基本的结构化日志的功能支持</p></li><li><p>Serilog.AspNetCore 基于AspNetCore框架整合的Serilog日志记录程序包，包含了Serilog基本库和控制台日志的实现。</p></li><li><p>Serilog.Extensions.Logging 包含了注入了Serilog的拓展方法。</p></li><li><p>Serilog.Sinks.Async 实现了日志异步收集。</p></li><li><p>Serilog.Sinks.Console 实现了控制台输出日志。</p></li><li><p>Serilog.Sinks.Debug 实现了调试台输出日志。</p></li><li><p>Serilog.Sinks.File 实现了文件输出日志。</p></li><li><p>Serilog.Settings.Configuration 打通了serilog和Configuration，这样子就可以直接从appsettings.json中读取配置</p></li><li><p>Serilog.Sinks.RollingFile 实现了对滚动文件的支持</p></li></ul><blockquote><p>根据情况选择不同的组件</p></blockquote><h2 id="_3-操作" tabindex="-1"><a class="header-anchor" href="#_3-操作"><span>3. 操作</span></a></h2><h3 id="net6下api配置" tabindex="-1"><a class="header-anchor" href="#net6下api配置"><span>.Net6下Api配置</span></a></h3><p>实现在.Net5Api中输入日志到控制台和文件</p><h4 id="安装nuget包" tabindex="-1"><a class="header-anchor" href="#安装nuget包"><span>安装Nuget包</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Serilog.Extensions.Logging.File
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="硬编码方案" tabindex="-1"><a class="header-anchor" href="#硬编码方案"><span>硬编码方案</span></a></h4><p>Program文件如下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>namespace SerilogLogger
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            //非结构化日志
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Information() //配置日志最低级别
                .MinimumLevel.Override(&quot;Microsoft&quot;, LogEventLevel.Information)
                .Enrich.FromLogContext()
                .WriteTo.Console()
                .WriteTo.File(&quot;log.txt&quot;, rollingInterval: RollingInterval.Day, rollOnFileSizeLimit: true)
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
                .ConfigureWebHostDefaults(webBuilder =&gt; { webBuilder.UseStartup&lt;Startup&gt;(); })
                .UseSerilog(dispose: true);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置文件方案" tabindex="-1"><a class="header-anchor" href="#配置文件方案"><span>配置文件方案</span></a></h4><p>修改appsettings文件，通过配置文件来指定</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;Serilog&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;WriteTo&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;RollingFile&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;Args&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;pathFormat&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Serilogs\\\\{Date}.txt&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;RestrictedToMinimumLevel&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Warning&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;rollingInterval&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Day&quot;</span><span class="token punctuation">,</span>
                    <span class="token string">&quot;outputTemplate&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Console&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;Args&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&quot;MinimumLevel&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Default&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Debug&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Override&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;System&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Information&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;AllowedHosts&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改Program方法</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IHostBuilder</span> <span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        Host<span class="token punctuation">.</span><span class="token function">CreateDefaultBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">ConfigureWebHostDefaults</span><span class="token punctuation">(</span>webBuilder <span class="token operator">=&gt;</span>
            <span class="token punctuation">{</span>
                webBuilder<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">UseStartup</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Startup<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UseSerilog</span><span class="token punctuation">(</span><span class="token punctuation">(</span>hostingContext<span class="token punctuation">,</span> loggerConfiguration<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 通过读取appsettings.json配置控制日志</span>
                loggerConfiguration<span class="token punctuation">.</span>ReadFrom<span class="token punctuation">.</span><span class="token function">Configuration</span><span class="token punctuation">(</span>hostingContext<span class="token punctuation">.</span>Configuration<span class="token punctuation">)</span>
                <span class="token punctuation">.</span>Enrich<span class="token punctuation">.</span><span class="token function">FromLogContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="控制器中使用" tabindex="-1"><a class="header-anchor" href="#控制器中使用"><span>控制器中使用</span></a></h4><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ApiController</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;[controller]&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ControllerBase</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">ILogger<span class="token punctuation">&lt;</span>HomeController<span class="token punctuation">&gt;</span></span> _logger<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">HomeController</span><span class="token punctuation">(</span><span class="token class-name">ILogger<span class="token punctuation">&lt;</span>HomeController<span class="token punctuation">&gt;</span></span> logger<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _logger <span class="token operator">=</span> logger<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _logger<span class="token punctuation">.</span><span class="token function">LogTrace</span><span class="token punctuation">(</span><span class="token string">&quot;0 Trace日志&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _logger<span class="token punctuation">.</span><span class="token function">LogDebug</span><span class="token punctuation">(</span><span class="token string">&quot;1 我是一个调试日志&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _logger<span class="token punctuation">.</span><span class="token function">LogInformation</span><span class="token punctuation">(</span><span class="token string">&quot;2  我是一个info日志&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _logger<span class="token punctuation">.</span><span class="token function">LogWarning</span><span class="token punctuation">(</span><span class="token string">&quot;3  我是一个警告日志&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _logger<span class="token punctuation">.</span><span class="token function">LogError</span><span class="token punctuation">(</span><span class="token string">&quot;4   我是一个错误日志&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _logger<span class="token punctuation">.</span><span class="token function">LogCritical</span><span class="token punctuation">(</span><span class="token string">&quot;5   LogCritical 立刻修复&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token string">&quot;成功&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dotnet6-使用" tabindex="-1"><a class="header-anchor" href="#dotnet6-使用"><span>dotNet6+使用</span></a></h3>`,20),m={href:"https://cat.aiursoft.cn/post/2023/3/12/why-is-my-web-api-so-slow-1-structured-logging-with-serilog",target:"_blank",rel:"noopener noreferrer"},g={href:"https://cat.aiursoft.cn/post/2023/3/12/why-is-my-web-api-so-slow-2-timing-and-diagnostic",target:"_blank",rel:"noopener noreferrer"},b=t(`<h4 id="安装nuget包-1" tabindex="-1"><a class="header-anchor" href="#安装nuget包-1"><span>安装nuget包</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Serilog.Settings.Configuration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="硬编码配置" tabindex="-1"><a class="header-anchor" href="#硬编码配置"><span>硬编码配置</span></a></h4><p>注册日志</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Serilog</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Serilog<span class="token punctuation">.</span>Events</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">Serilog<span class="token punctuation">.</span>Formatting<span class="token punctuation">.</span>Compact</span><span class="token punctuation">;</span>

<span class="token comment">// 配置Serilog</span>
Log<span class="token punctuation">.</span>Logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">LoggerConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>MinimumLevel<span class="token punctuation">.</span><span class="token function">Override</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">,</span> LogEventLevel<span class="token punctuation">.</span>Information<span class="token punctuation">)</span> <span class="token comment">// 排除Microsoft的日志</span>
    <span class="token punctuation">.</span>MinimumLevel<span class="token punctuation">.</span><span class="token function">Information</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>Enrich<span class="token punctuation">.</span><span class="token function">FromLogContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 注册日志上下文</span>
    <span class="token punctuation">.</span>WriteTo<span class="token punctuation">.</span><span class="token function">Console</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CompactJsonFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 输出到控制台</span>
    <span class="token comment">//.WriteTo.MySQL(connectionString: builder.Configuration.GetConnectionString(&quot;DbConnectionString&quot;), tableName: &quot;Logs&quot;) // 输出到数据库</span>
    <span class="token punctuation">.</span>WriteTo<span class="token punctuation">.</span><span class="token function">Logger</span><span class="token punctuation">(</span>configure <span class="token operator">=&gt;</span> configure <span class="token comment">// 输出到文件</span>
        <span class="token punctuation">.</span>MinimumLevel<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span>WriteTo<span class="token punctuation">.</span><span class="token function">File</span><span class="token punctuation">(</span> <span class="token comment">//单个日志文件，总日志，所有日志存到这里面</span>
            <span class="token interpolation-string"><span class="token string">$&quot;logs\\\\log.txt&quot;</span></span><span class="token punctuation">,</span>
            <span class="token named-parameter punctuation">rollingInterval</span><span class="token punctuation">:</span> RollingInterval<span class="token punctuation">.</span>Day<span class="token punctuation">,</span>
            <span class="token named-parameter punctuation">outputTemplate</span><span class="token punctuation">:</span> <span class="token string">&quot;{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">CreateLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> WebApplication<span class="token punctuation">.</span><span class="token function">CreateBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

builder<span class="token punctuation">.</span>Host<span class="token punctuation">.</span><span class="token function">UseSerilog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Add services to the container.</span>

builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddEndpointsApiExplorer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddSwaggerGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token class-name"><span class="token keyword">var</span></span> app <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Configure the HTTP request pipeline.</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>Environment<span class="token punctuation">.</span><span class="token function">IsDevelopment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">UseSwagger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">UseSwaggerUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">UseAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">MapControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置文件方案-1" tabindex="-1"><a class="header-anchor" href="#配置文件方案-1"><span>配置文件方案</span></a></h4><p>编辑配置文件</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;Serilog&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;Using&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Serilog.Sinks.Console&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;MinimumLevel&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;Default&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Override&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Information&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;WriteTo&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Console&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;File&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Args&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;path&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;log.txt&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;rollingInterval&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Day&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Enrich&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;FromLogContext&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;WithMachineName&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;WithThreadId&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Program中使用配置</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Serilog</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> WebApplication<span class="token punctuation">.</span><span class="token function">CreateBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 启用日志</span>
builder<span class="token punctuation">.</span>Host<span class="token punctuation">.</span><span class="token function">UseSerilog</span><span class="token punctuation">(</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> configuration<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> configuration<span class="token punctuation">.</span>ReadFrom<span class="token punctuation">.</span><span class="token function">Configuration</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Configuration<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Add services to the container.</span>

builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddEndpointsApiExplorer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddSwaggerGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> app <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Configure the HTTP request pipeline.</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>Environment<span class="token punctuation">.</span><span class="token function">IsDevelopment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">UseSwagger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">UseSwaggerUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">UseAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">MapControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="控制器中使用-1" tabindex="-1"><a class="header-anchor" href="#控制器中使用-1"><span>控制器中使用</span></a></h4><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using Microsoft.AspNetCore.Mvc;

namespace SerilogLoggerNew.Controllers;

[ApiController]
[Route(&quot;[controller]&quot;)]
public class HomeController : ControllerBase
{
    private readonly ILogger&lt;HomeController&gt; _logger;

    public HomeController(ILogger&lt;HomeController&gt; logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public string Get()
    {
        _logger.LogTrace(&quot;0 Trace日志&quot;);
        _logger.LogDebug(&quot;1 我是一个调试日志&quot;);
        _logger.LogInformation(&quot;2  我是一个info日志&quot;);
        _logger.LogWarning(&quot;3  我是一个警告日志&quot;);
        _logger.LogError(&quot;4   我是一个错误日志&quot;);
        _logger.LogCritical(&quot;5   LogCritical 立刻修复&quot;);

        return &quot;成功&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求日志记录" tabindex="-1"><a class="header-anchor" href="#请求日志记录"><span>请求日志记录</span></a></h3><p>您可以安装该库，以便为 ASP.NET Core 请求管道添加 Serilog 日志记录。 它添加了 ASP。NET 对与应用程序事件相同的 Serilog 接收器的内部操作。<code>Serilog.AspNetCore</code>，需要调用方法</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 启用日志记录
app.UseSerilogRequestLogging();

app.UseAuthorization();

app.MapControllers();

app.Run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-correlationid-扩充日志" tabindex="-1"><a class="header-anchor" href="#使用-correlationid-扩充日志"><span>使用 CorrelationId 扩充日志</span></a></h3><p>如何跟踪属于同一请求的所有日志？您可以向结构化日志添加<code>CorrelationId</code>属性。</p><p>这也适用于多个应用程序。 您需要使用 HTTP 标头传递。 例如，您可以使用自定义标头。<code>X-Correlation-Id</code></p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class RequestHeaderContextLoggingMiddleware
{
    private const string CorrelationIdHeaderName = &quot;X-Correlation-Id&quot;;
    private readonly RequestDelegate _next;

    public RequestHeaderContextLoggingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public Task Invoke(HttpContext context)
    {
        string correlationId = GetCorrelationId(context);

        using (LogContext.PushProperty(&quot;CorrelationId&quot;, correlationId))
        {
            return _next.Invoke(context);
        }
    }

    private static string GetCorrelationId(HttpContext context)
    {
        context.Request.Headers.TryGetValue(
            CorrelationIdHeaderName, out StringValues correlationId);

        return correlationId.FirstOrDefault() ?? context.TraceIdentifier;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个添加中间件的扩展方法， 请注意，注册中间件的顺序很重要。 如果你想在记录所有日志中，那么你应该将这个中间件放在开头。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public static class IApplicationBuilderExtensions
{
    public static IApplicationBuilder UseRequestHeaderContextLogging(
        this IApplicationBuilder app)
    {
        app.UseMiddleware&lt;RequestHeaderContextLoggingMiddleware&gt;();

        return app;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="记录重要的应用程序事件" tabindex="-1"><a class="header-anchor" href="#记录重要的应用程序事件"><span>记录重要的应用程序事件</span></a></h3><p>搭配MediatR一起来为所有应用程序请求添加日志记录</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>internal sealed class RequestLoggingPipelineBehavior&lt;TRequest, TResponse&gt;
    : IPipelineBehavior&lt;TRequest, TResponse&gt;
    where TRequest : class
    where TResponse : Result
{
    private readonly ILogger _logger;

    public RequestLoggingPipelineBehavior(ILogger logger)
    {
        _logger = logger;
    }

    public async Task&lt;TResponse&gt; Handle(
        TRequest request,
        RequestHandlerDelegate&lt;TResponse&gt; next,
        CancellationToken cancellationToken)
    {
        string requestName = typeof(TRequest).Name;

        _logger.LogInformation(
            &quot;Processing request {RequestName}&quot;, requestName);

        TResponse result = await next();

        if (result.IsSuccess)
        {
            _logger.LogInformation(
                &quot;Completed request {RequestName}&quot;, requestName);
        }
        else
        {
            using (LogContext.PushProperty(&quot;Error&quot;, result.Error, true))
            {
                _logger.LogError(
                    &quot;Completed request {RequestName} with error&quot;, requestName);
            }
        }

        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：https://www.milanjovanovic.tech/blog/5-serilog-best-practices-for-better-structured-logging#log-important-application-events</p><h2 id="输出格式" tabindex="-1"><a class="header-anchor" href="#输出格式"><span>输出格式</span></a></h2><p>json输出格式</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>Log.Logger = new LoggerConfiguration()
 .MinimumLevel.Information()//配置日志最低级别
 .MinimumLevel.Override(&quot;Microsoft&quot;, LogEventLevel.Information)
 .Enrich.FromLogContext()
 .WriteTo.Console(new RenderedCompactJsonFormatter())//保存为json格式
 .WriteTo.File(new CompactJsonFormatter(), &quot;log.txt&quot;, rollingInterval: RollingInterval.Day, rollOnFileSizeLimit: true)
 .CreateLogger();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非结构化输出</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>Log.Logger = new LoggerConfiguration()
.MinimumLevel.Debug()//配置日志最低级别
.MinimumLevel.Override(&quot;Microsoft&quot;, LogEventLevel.Information)
.Enrich.FromLogContext()
.WriteTo.Console()
.WriteTo.File(&quot;log.txt&quot;, rollingInterval: RollingInterval.Day, rollOnFileSizeLimit: true)
.CreateLogger();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2>`,31),h={href:"https://github.com.cnpmjs.org/serilog/serilog/wiki",target:"_blank",rel:"noopener noreferrer"},q={href:"https://mp.weixin.qq.com/s/WUp_wVasUd44l0huuhkOVA",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,"5个最佳实践：https://www.milanjovanovic.tech/blog/5-serilog-best-practices-for-better-structured-logging",-1),C={href:"https://cat.aiursoft.cn/post/2023/3/13/why-is-my-web-api-so-slow-3-seq-centralized-structured-logs",target:"_blank",rel:"noopener noreferrer"};function x(w,y){const a=o("ExternalLinkIcon");return l(),p("div",null,[u,n("p",null,[s("与.NET的许多其他库一样，Serilog也提供对文件，控制台和"),n("a",r,[s(" 其他地方的"),e(a)]),s("诊断日志记录 。它易于设置，具有简洁的API，并且可以在最新的.NET平台之间移植。还在构建时考虑了强大的结构化事件数据。")]),n("blockquote",null,[n("p",null,[s("官网："),n("a",d,[s("https://serilog.net/"),e(a)]),s(" GitHub："),n("a",v,[s("https://github.com/serilog/serilog"),e(a)])])]),k,n("p",null,[s("结构化日志："),n("a",m,[s("https://cat.aiursoft.cn/post/2023/3/12/why-is-my-web-api-so-slow-1-structured-logging-with-serilog"),e(a)]),s(" 计时和诊断日志："),n("a",g,[s("https://cat.aiursoft.cn/post/2023/3/12/why-is-my-web-api-so-slow-2-timing-and-diagnostic"),e(a)])]),b,n("p",null,[n("a",h,[s("https://github.com.cnpmjs.org/serilog/serilog/wiki"),e(a)]),s(" 极客时间教程 "),n("a",q,[s("https://mp.weixin.qq.com/s/WUp_wVasUd44l0huuhkOVA"),e(a)]),s(" | Serilog 最佳实践")]),f,n("p",null,[s("中心化结构化日志服务："),n("a",C,[s("https://cat.aiursoft.cn/post/2023/3/13/why-is-my-web-api-so-slow-3-seq-centralized-structured-logs"),e(a)])])])}const S=i(c,[["render",x],["__file","serilog.html.vue"]]),I=JSON.parse('{"path":"/dotnet/base/logOperator/serilog.html","title":"Serilog","lang":"zh-CN","frontmatter":{"title":"Serilog","lang":"zh-CN","date":"2023-10-02T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"netcoreshiyongserilog","slug":"dvop8i","docsId":"31219217","description":"1. 概述 与.NET的许多其他库一样，Serilog也提供对文件，控制台和 其他地方的诊断日志记录 。它易于设置，具有简洁的API，并且可以在最新的.NET平台之间移植。还在构建时考虑了强大的结构化事件数据。 官网：https://serilog.net/ GitHub：https://github.com/serilog/serilog 2. Nu...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/base/logOperator/serilog.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Serilog"}],["meta",{"property":"og:description","content":"1. 概述 与.NET的许多其他库一样，Serilog也提供对文件，控制台和 其他地方的诊断日志记录 。它易于设置，具有简洁的API，并且可以在最新的.NET平台之间移植。还在构建时考虑了强大的结构化事件数据。 官网：https://serilog.net/ GitHub：https://github.com/serilog/serilog 2. Nu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T14:11:18.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T14:11:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Serilog\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-15T14:11:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. NuGet","slug":"_2-nuget","link":"#_2-nuget","children":[]},{"level":2,"title":"3. 操作","slug":"_3-操作","link":"#_3-操作","children":[{"level":3,"title":".Net6下Api配置","slug":"net6下api配置","link":"#net6下api配置","children":[{"level":4,"title":"安装Nuget包","slug":"安装nuget包","link":"#安装nuget包","children":[]},{"level":4,"title":"硬编码方案","slug":"硬编码方案","link":"#硬编码方案","children":[]},{"level":4,"title":"配置文件方案","slug":"配置文件方案","link":"#配置文件方案","children":[]},{"level":4,"title":"控制器中使用","slug":"控制器中使用","link":"#控制器中使用","children":[]}]},{"level":3,"title":"dotNet6+使用","slug":"dotnet6-使用","link":"#dotnet6-使用","children":[{"level":4,"title":"安装nuget包","slug":"安装nuget包-1","link":"#安装nuget包-1","children":[]},{"level":4,"title":"硬编码配置","slug":"硬编码配置","link":"#硬编码配置","children":[]},{"level":4,"title":"配置文件方案","slug":"配置文件方案-1","link":"#配置文件方案-1","children":[]},{"level":4,"title":"控制器中使用","slug":"控制器中使用-1","link":"#控制器中使用-1","children":[]}]},{"level":3,"title":"请求日志记录","slug":"请求日志记录","link":"#请求日志记录","children":[]},{"level":3,"title":"使用 CorrelationId 扩充日志","slug":"使用-correlationid-扩充日志","link":"#使用-correlationid-扩充日志","children":[]},{"level":3,"title":"记录重要的应用程序事件","slug":"记录重要的应用程序事件","link":"#记录重要的应用程序事件","children":[]}]},{"level":2,"title":"输出格式","slug":"输出格式","link":"#输出格式","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1715782278000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":4},{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":2}]},"readingTime":{"minutes":5.16,"words":1549},"filePathRelative":"dotnet/base/logOperator/serilog.md","localizedDate":"2023年10月2日","excerpt":"<h2>1. 概述</h2>\\n<p>与.NET的许多其他库一样，Serilog也提供对文件，控制台和<a href=\\"https://github.com/serilog/serilog/wiki/Provided-Sinks\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">&nbsp;其他地方的</a>诊断日志记录&nbsp;。它易于设置，具有简洁的API，并且可以在最新的.NET平台之间移植。还在构建时考虑了强大的结构化事件数据。</p>\\n<blockquote>\\n<p>官网：<a href=\\"https://serilog.net/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://serilog.net/</a>\\nGitHub：<a href=\\"https://github.com/serilog/serilog\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/serilog/serilog</a></p>\\n</blockquote>","autoDesc":true}');export{S as comp,I as data};
