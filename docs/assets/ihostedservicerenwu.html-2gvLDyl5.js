import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as o,a as n,d as s,e,b as t}from"./app-qB9_Bjjp.js";const l={},u=t(`<h2 id="后台任务配置" tabindex="-1"><a class="header-anchor" href="#后台任务配置"><span>后台任务配置</span></a></h2><p>可以通过配置来操作后台任务的设置</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>builder.Services.Configure&lt;HostOptions&gt;(options =&gt;
{
    // 当后台任务抛出异常的时候该如何处理
    options.BackgroundServiceExceptionBehavior = BackgroundServiceExceptionBehavior.StopHost;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ihostedservice" tabindex="-1"><a class="header-anchor" href="#ihostedservice"><span>IHostedService</span></a></h2><p>注册托管服务的后台任务</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddHostedService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyHostedService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MyHostedService类内容</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyHostedService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IHostedService</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">StartAsync</span><span class="token punctuation">(</span><span class="token class-name">CancellationToken</span> cancellationToken<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">,</span> cancellationToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//只执行一次</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;开始执行 </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now</span><span class="token punctuation">}</span></span><span class="token string"> &quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">StopAsync</span><span class="token punctuation">(</span><span class="token class-name">CancellationToken</span> cancellationToken<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;执行结束&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在.Net6中你会发现程序在等待十秒后输出开始执行xxx，然后启动了项目，这个行为是让人很奇怪的操作，但是在.Net8中可以通过下面的配置来让应用程序不等待该任务处理</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>builder.Services.Configure&lt;HostOptions&gt;(options =&gt;
{
    options.ServicesStartConcurrently = true;
    options.ServicesStopConcurrently = false;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序"><span>执行顺序</span></a></h3><p>在.NetCore3.x/.NET5中，执行顺序为先执行ConfigureServices=&gt;Build=&gt;HostService=&gt;Configure ,但是在 .NET 6 中，随着最小托管 API 的引入，情况再次发生了轻微变化，在创建和启动方式方面存在一些差异，HostServices服务在配置中间件和端点后才启动</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> WebApplication<span class="token punctuation">.</span><span class="token function">CreateBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Add services to the container.</span>

builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddEndpointsApiExplorer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddSwaggerGen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 注册服务</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddHostedService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Sample1HostService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> app <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;build完成&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Configure the HTTP request pipeline.</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>Environment<span class="token punctuation">.</span><span class="token function">IsDevelopment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">UseSwagger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span><span class="token function">UseSwaggerUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">UseAuthorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">MapControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;run之前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Sample1HostService在这里启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="backgroundservice" tabindex="-1"><a class="header-anchor" href="#backgroundservice"><span>BackgroundService</span></a></h2><p>简单示例</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBackgroundService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BackgroundService</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">ILogger<span class="token punctuation">&lt;</span>MyBackgroundService<span class="token punctuation">&gt;</span></span> _logger<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">MyBackgroundService</span><span class="token punctuation">(</span><span class="token class-name">ILogger<span class="token punctuation">&lt;</span>MyBackgroundService<span class="token punctuation">&gt;</span></span> logger<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _logger <span class="token operator">=</span> logger<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">Task</span> <span class="token function">StopAsync</span><span class="token punctuation">(</span><span class="token class-name">CancellationToken</span> cancellationToken<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _logger<span class="token punctuation">.</span><span class="token function">LogInformation</span><span class="token punctuation">(</span><span class="token string">&quot;MyBackgroundService is stopped&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">ExecuteAsync</span><span class="token punctuation">(</span><span class="token class-name">CancellationToken</span> stoppingToken<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stoppingToken<span class="token punctuation">.</span>IsCancellationRequested<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//xxx 逻辑处理</span>
            _logger<span class="token punctuation">.</span><span class="token function">LogInformation</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;MyBackgroundService is working. </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span>TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> stoppingToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们的这个服务继承了BackgroundService，就一定要实现里面的ExecuteAsync，至于StartAsync和StopAsync等方法可以选择性的重写。我们ExecuteAsync在里面就是输出了一下日志，然后休眠在配置文件中指定的秒数。这个任务可以说是最简单的例子了，其中还用到了依赖注入，然后我们还需要注册该服务</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddHostedService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyBackgroundService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ihostedlifecycleservice" tabindex="-1"><a class="header-anchor" href="#ihostedlifecycleservice"><span>IHostedLifecycleService</span></a></h2><p>.NET 8 中引入了一个 IHostedLifecycleService 作为 IHostedService 的补充，我们在服务开始、结束之前和之后添加自定义的处理逻辑</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可以进行更精细的任务控制</p></div>`,21),r={href:"https://mp.weixin.qq.com/s/IA7RgBEIOYCIrwRuKB24tw",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践"><span>实践</span></a></h2><h3 id="periodictimer定时" tabindex="-1"><a class="header-anchor" href="#periodictimer定时"><span>PeriodicTimer定时</span></a></h3><p>后台任务搭配PeriodicTimer实现每隔一段时间处理一次</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JobDaemonHostedService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BackgroundService</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IServiceScopeFactory</span> _factory<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">ILogger<span class="token punctuation">&lt;</span>JobDaemonHostedService<span class="token punctuation">&gt;</span></span> _logger<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">JobDaemonHostedService</span><span class="token punctuation">(</span><span class="token class-name">ILogger<span class="token punctuation">&lt;</span>JobDaemonHostedService<span class="token punctuation">&gt;</span></span> logger<span class="token punctuation">,</span> <span class="token class-name">IServiceScopeFactory</span> factory<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _logger <span class="token operator">=</span> logger<span class="token punctuation">;</span>
        _factory <span class="token operator">=</span> factory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">ExecuteAsync</span><span class="token punctuation">(</span><span class="token class-name">CancellationToken</span> stoppingToken<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stoppingToken<span class="token punctuation">.</span>IsCancellationRequested<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 每十秒处理一次</span>
                <span class="token keyword">using</span> <span class="token class-name">PeriodicTimer</span> timer <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">(</span>TimeSpan<span class="token punctuation">.</span><span class="token function">FromMinutes</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">await</span> timer<span class="token punctuation">.</span><span class="token function">WaitForNextTickAsync</span><span class="token punctuation">(</span>stoppingToken<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    <span class="token keyword">await</span> <span class="token function">WorkTaskAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            _logger<span class="token punctuation">.</span><span class="token function">LogError</span><span class="token punctuation">(</span>ex<span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">$&quot;定时脚本同步异常  message:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ex<span class="token punctuation">.</span>Message</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">WorkTaskAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            _logger<span class="token punctuation">.</span><span class="token function">LogInformation</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;转发推送任务开始 时间:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> scope <span class="token operator">=</span> _factory<span class="token punctuation">.</span><span class="token function">CreateScope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// var emailService = scope.ServiceProvider.GetRequiredService&lt;IEmailService&gt;();</span>
            <span class="token comment">// await emailService.TranspondEmailToQiYeRobot();</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            _logger<span class="token punctuation">.</span><span class="token function">LogError</span><span class="token punctuation">(</span>ex<span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">$&quot;转发推送任务执行失败  message:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">ex<span class="token punctuation">.</span>Message</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">finally</span>
        <span class="token punctuation">{</span>
            _logger<span class="token punctuation">.</span><span class="token function">LogInformation</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;转发推送任务结果 时间:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">DateTime<span class="token punctuation">.</span>Now</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="time定时处理" tabindex="-1"><a class="header-anchor" href="#time定时处理"><span>Time定时处理</span></a></h3><p>搭配Timer来实现定时跑的功能</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class TimedHostedService : IHostedService, IDisposable
{
    private int executionCount = 0;
    private readonly ILogger&lt;TimedHostedService&gt; _logger;
    private Timer? _timer = null;

    public TimedHostedService(ILogger&lt;TimedHostedService&gt; logger)
    {
        _logger = logger;
    }

    public Task StartAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation(&quot;Timed Hosted Service running.&quot;);

        _timer = new Timer(DoWork, null, TimeSpan.Zero,
            TimeSpan.FromSeconds(5));

        return Task.CompletedTask;
    }

    private void DoWork(object? state)
    {
        var count = Interlocked.Increment(ref executionCount);

        _logger.LogInformation(
            &quot;Timed Hosted Service is working. Count: {Count}&quot;, count);
    }

    public Task StopAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation(&quot;Timed Hosted Service is stopping.&quot;);

        _timer?.Change(Timeout.Infinite, 0);

        return Task.CompletedTask;
    }

    public void Dispose()
    {
        _timer?.Dispose();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,8),k={href:"https://learn.microsoft.com/zh-cn/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-6.0&tabs=visual-studio",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=i("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[n("a",r,[s("https://mp.weixin.qq.com/s/IA7RgBEIOYCIrwRuKB24tw"),e(a)]),s(" | .NET 8 中的 IHostedLifecycleService")]),d,n("p",null,[s("使用托管服务实现后台任务："),n("a",k,[s("https://learn.microsoft.com/zh-cn/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-6.0&tabs=visual-studio"),e(a)])])])}const y=p(l,[["render",v],["__file","ihostedservicerenwu.html.vue"]]),f=JSON.parse('{"path":"/dotnet/base/ihostedservicerenwu.html","title":"后台任务","lang":"zh-CN","frontmatter":{"title":"后台任务","lang":"zh-CN","date":"2023-10-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["backgroud"],"description":"后台任务配置 可以通过配置来操作后台任务的设置 IHostedService 注册托管服务的后台任务 MyHostedService类内容 在.Net6中你会发现程序在等待十秒后输出开始执行xxx，然后启动了项目，这个行为是让人很奇怪的操作，但是在.Net8中可以通过下面的配置来让应用程序不等待该任务处理 执行顺序 在.NetCore3.x/.NET5...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/base/ihostedservicerenwu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"后台任务"}],["meta",{"property":"og:description","content":"后台任务配置 可以通过配置来操作后台任务的设置 IHostedService 注册托管服务的后台任务 MyHostedService类内容 在.Net6中你会发现程序在等待十秒后输出开始执行xxx，然后启动了项目，这个行为是让人很奇怪的操作，但是在.Net8中可以通过下面的配置来让应用程序不等待该任务处理 执行顺序 在.NetCore3.x/.NET5..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-29T15:52:53.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"backgroud"}],["meta",{"property":"article:published_time","content":"2023-10-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-29T15:52:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"后台任务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-29T15:52:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"后台任务配置","slug":"后台任务配置","link":"#后台任务配置","children":[]},{"level":2,"title":"IHostedService","slug":"ihostedservice","link":"#ihostedservice","children":[{"level":3,"title":"执行顺序","slug":"执行顺序","link":"#执行顺序","children":[]}]},{"level":2,"title":"BackgroundService","slug":"backgroundservice","link":"#backgroundservice","children":[]},{"level":2,"title":"IHostedLifecycleService","slug":"ihostedlifecycleservice","link":"#ihostedlifecycleservice","children":[]},{"level":2,"title":"实践","slug":"实践","link":"#实践","children":[{"level":3,"title":"PeriodicTimer定时","slug":"periodictimer定时","link":"#periodictimer定时","children":[]},{"level":3,"title":"Time定时处理","slug":"time定时处理","link":"#time定时处理","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1703865173000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":3}]},"readingTime":{"minutes":2.87,"words":861},"filePathRelative":"dotnet/base/ihostedservicerenwu.md","localizedDate":"2023年10月14日","excerpt":"<h2>后台任务配置</h2>\\n<p>可以通过配置来操作后台任务的设置</p>\\n<div class=\\"language-c#\\" data-ext=\\"c#\\" data-title=\\"c#\\"><pre class=\\"language-c#\\"><code>builder.Services.Configure&lt;HostOptions&gt;(options =&gt;\\n{\\n    // 当后台任务抛出异常的时候该如何处理\\n    options.BackgroundServiceExceptionBehavior = BackgroundServiceExceptionBehavior.StopHost;\\n});\\n</code></pre></div>","autoDesc":true}');export{y as comp,f as data};
