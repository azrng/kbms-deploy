import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as p,b as n,e as s,f as e,d as o}from"./app-D8HBJYTp.js";const c={},u=o(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>轻便，可持久化，还有面板</p><p>官网文档：https://www.hangfire.io/overview.html</p><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h2><p>新建项目.Net6的WebApi项目，然后安装下面nuget包并使用内存储存</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Project</span> <span class="token attr-name">Sdk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Microsoft.NET.Sdk.Web<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PropertyGroup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TargetFramework</span><span class="token punctuation">&gt;</span></span>net6.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TargetFramework</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Nullable</span><span class="token punctuation">&gt;</span></span>enable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Nullable</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImplicitUsings</span><span class="token punctuation">&gt;</span></span>enable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ImplicitUsings</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PropertyGroup</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Swashbuckle.AspNetCore<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6.5.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hangfire.AspNetCore<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.8.6<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 👈
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hangfire.InMemory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.6.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> 👈
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再Program中进行注入下面的服务</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using Hangfire;
using Hangfire.InMemory;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHangfire(config =&gt; 👈
{
    config.SetDataCompatibilityLevel(CompatibilityLevel.Version_180)
        .UseSimpleAssemblyNameTypeSerializer()
        .UseRecommendedSerializerSettings()
        .UseStorage(new InMemoryStorage());
});

builder.Services.AddHangfireServer();👈

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//启用Hangfire面板
app.UseHangfireDashboard(); 👈

//开启一个定时任务
RecurringJob.AddOrUpdate(&quot;test&quot;, () =&gt; Console.WriteLine(&quot;Recurring!&quot;), Cron.Minutely());

app.UseAuthorization();

app.MapControllers();

app.Run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>做这些配置后启动项目，然后等会就可以在输出的控制台中可以看到我们的任务test输出的内容：Recurring</p><p>另外还可以访问/hangfire 访问到控制面板界面</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="hangfireserver配置" tabindex="-1"><a class="header-anchor" href="#hangfireserver配置"><span>HangfireServer配置</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// Add Hangfire services.</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddHangfire</span><span class="token punctuation">(</span>configuration <span class="token operator">=&gt;</span> configuration
        <span class="token punctuation">.</span><span class="token function">SetDataCompatibilityLevel</span><span class="token punctuation">(</span>CompatibilityLevel<span class="token punctuation">.</span>Version_180<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseSimpleAssemblyNameTypeSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseRecommendedSerializerSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 使用推荐的序列化程序，默认是 Json.Net</span>
        <span class="token punctuation">.</span><span class="token function">UseInMemoryStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 使用内存数据库，生产环境需要正式的数据库</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Add the processing server as IHostedService</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddHangfireServer</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>ServerTimeout <span class="token operator">=</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromMinutes</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>SchedulePollingInterval <span class="token operator">=</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//秒级任务需要配置短点，一般任务可以配置默认时间，默认15秒</span>
    options<span class="token punctuation">.</span>ShutdownTimeout <span class="token operator">=</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromMinutes</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//超时时间</span>
    options<span class="token punctuation">.</span>Queues <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;apis&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jobs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;task&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rjob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pjob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rejob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//队列</span>
    options<span class="token punctuation">.</span>WorkerCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">Max</span><span class="token punctuation">(</span>Environment<span class="token punctuation">.</span>ProcessorCount<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//工作线程数，当前允许的最大线程，默认20</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建任务" tabindex="-1"><a class="header-anchor" href="#创建任务"><span>创建任务</span></a></h3><h4 id="单次执行的任务" tabindex="-1"><a class="header-anchor" href="#单次执行的任务"><span>单次执行的任务</span></a></h4><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>BackgroundJob.Enqueue(() =&gt; Console.WriteLine(&quot;我只执行一次&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="基于队列的任务处理" tabindex="-1"><a class="header-anchor" href="#基于队列的任务处理"><span>基于队列的任务处理</span></a></h4><p>任务执行不是同步的，而是放到一个持久化队列中，以便马上把请求控制权返回给调用者</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>BackgroundJob<span class="token punctuation">.</span><span class="token function">Enqueue</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="延迟任务-方法-执行" tabindex="-1"><a class="header-anchor" href="#延迟任务-方法-执行"><span>延迟任务（方法）执行</span></a></h4><p>可以将方法的执行推迟一段指定的时间，而不是立即调用方法：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>BackgroundJob<span class="token punctuation">.</span><span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromMinutes</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="循环执行任务" tabindex="-1"><a class="header-anchor" href="#循环执行任务"><span>循环执行任务</span></a></h4><p>只需简单的一行代码就可以添加重复执行的任务，其内置了常见的时间循环模式，也可以基于CRON表达式来设定复杂的模式。使用方法：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>RecurringJob<span class="token punctuation">.</span><span class="token function">AddOrUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">&quot;Easy!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Cron<span class="token punctuation">.</span>Daily<span class="token punctuation">)</span><span class="token punctuation">;</span>

RecurringJob<span class="token punctuation">.</span><span class="token function">AddOrUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token string">&quot;Powerful!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;0 12 * */2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建更新删除任务" tabindex="-1"><a class="header-anchor" href="#创建更新删除任务"><span>创建更新删除任务</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>[ApiController]
[Route(&quot;api/[controller]/[action]&quot;)]
public class JobManageController : ControllerBase
{
    /// &lt;summary&gt;
    /// 创建任务
    /// &lt;/summary&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpGet]
    public bool CreateJob(string key)
    {
        var cron = &quot;0/5 * * * * ?&quot;;
        RecurringJob.AddOrUpdate(key, () =&gt; JobHandler(key), cron, new RecurringJobOptions
        {
            TimeZone = TimeZoneInfo.Local
        });

        //RecurringJob.AddOrUpdate(key, () =&gt; JobHandler(key), cron, TimeZoneInfo.Local);

        return true;
    }

    /// &lt;summary&gt;
    /// 更新任务
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;key&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpGet]
    public bool UpdateJob(string key)
    {
        var cron = &quot;0/10 * * * * ?&quot;;
        RecurringJob.AddOrUpdate(key, () =&gt; JobHandler(key), cron, new RecurringJobOptions()
        {
            TimeZone = TimeZoneInfo.Local
        });

        return true;
    }

    /// &lt;summary&gt;
    /// 删除任务
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;jobKey&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    [HttpGet]
    public bool DeleteJob(string jobKey)
    {
        RecurringJob.RemoveIfExists(jobKey);
        return true;
    }

    [NonAction]
    // [AutomaticRetry(Attempts = 2)]
    public void JobHandler(string key)
    {
        Console.WriteLine($&quot;job:{key}执行  当前时间：{DateTime.Now.ToStandardString()}&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="持久化支持" tabindex="-1"><a class="header-anchor" href="#持久化支持"><span>持久化支持</span></a></h3><p>SQL Server 与 Redis 持久化支持。Hangfire使用持久性存储来存储作业、队列和统计信息，并让它们在应用程序重启后继续存在。存储子系统的抽象程度足以支持经典的SQL Server和快速的Redis。</p><ul><li>SQLServer提供了简化的安装和常规的维护计划</li><li>Redis提供了惊人的速度，尤其是与sqlserver相比。安装nuget包：Hangfire.Redis.StackExchange</li><li>Pgsql：安装nuget包：Hangfire.PostgreSql</li></ul><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>builder.Services.AddHangfire(configuration =&gt; configuration
        .SetDataCompatibilityLevel(CompatibilityLevel.Version_180)
        .UseSimpleAssemblyNameTypeSerializer()
        .UseRecommendedSerializerSettings()
        .UseInMemoryStorage() // 使用内存数据库
    // .UseRedisStorage(&quot;172.16.127.100:25089,defaultDatabase=0&quot;)); // 使用redis

// 定时任务mysql存储配置
// .UseStorage(new MySqlStorage(builder.Configuration[&quot;ConnectionStrings:HangfireConnection&quot;],
//     new MySqlStorageOptions
//     {
//         TransactionIsolationLevel = IsolationLevel.ReadCommitted, //事务隔离级别，默认为读取已提交
//         QueuePollInterval = TimeSpan.FromSeconds(15), //队列检测频率，秒级任务需要配置短点，一般任务可以配置默认时间
//         JobExpirationCheckInterval = TimeSpan.FromHours(1),//作业到期检查间隔（管理过期记录）。默认值为1小时
//         CountersAggregateInterval = TimeSpan.FromMinutes(5),//聚合计数器的间隔。默认为5分钟
//         PrepareSchemaIfNecessary = true,//设置true，则会自动创建表
//         DashboardJobListLimit = 50000,//仪表盘作业列表展示条数限制
//         TransactionTimeout = TimeSpan.FromMinutes(1),//事务超时时间，默认一分钟
//         TablesPrefix = &quot;Hangfire&quot; // 表前缀
//     };

    // 定时任务postgres存储配置
    // .UsePostgreSqlStorage(
    //     &quot;host=localhost;port=5432;database=test;username=postgres;password=123456;&quot;,
    //     new PostgreSqlStorageOptions { SchemaName = &quot;hangfire&quot; })
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="认证" tabindex="-1"><a class="header-anchor" href="#认证"><span>认证</span></a></h3><p>安装nuget包</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hangfire.Dashboard.BasicAuthorization<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.0.2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后配置认证内容</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

// 仪表盘配置  不需要认证即可访问
app.UseHangfireDashboard();

//面板  需要认证才可访问
app.UseHangfireDashboard(&quot;/job&quot;, new DashboardOptions
{
    AppPath = &quot;http://localhost:7000/test&quot;, //返回时跳转的地址
    DisplayStorageConnectionString = false, //是否显示数据库连接信息
    IsReadOnlyFunc = _ =&gt; false,
    Authorization = new[]
    {
        new BasicAuthAuthorizationFilter(new BasicAuthAuthorizationFilterOptions
        {
            RequireSsl = false, //是否启用ssl验证，即https
            SslRedirect = false,
            LoginCaseSensitive = true,
            Users = new[]
            {
                new BasicAuthAuthorizationUser
                {
                    Login = &quot;admin&quot;, //登录账号
                    PasswordClear = &quot;123456&quot; //登录密码,
                }
            }
        })
    }
});

//只读面板，只能读取不能操作
app.UseHangfireDashboard(&quot;/job-read&quot;, new DashboardOptions
{
    IgnoreAntiforgeryToken = true,
    AppPath = &quot;http://localhost:7000/job-read&quot;, //返回时跳转的地址
    DisplayStorageConnectionString = false, //是否显示数据库连接信息
    IsReadOnlyFunc = _ =&gt; true,
    Authorization = new[]
    {
        new BasicAuthAuthorizationFilter(new BasicAuthAuthorizationFilterOptions
        {
            RequireSsl = false, //是否启用ssl验证，即https
            SslRedirect = false,
            LoginCaseSensitive = true,
            Users = new[]
            {
                new BasicAuthAuthorizationUser
                {
                    Login = &quot;read&quot;,
                    PasswordClear = &quot;only&quot;
                },
                new BasicAuthAuthorizationUser
                {
                    Login = &quot;guest&quot;,
                    PasswordClear = &quot;123@123&quot;
                }
            }
        })
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,37),r={href:"https://mp.weixin.qq.com/s/18eYC6QR7VFANE7mIKqqhA",target:"_blank",rel:"noopener noreferrer"},d={href:"https://dev.to/bytehide/background-tasks-and-scheduled-jobs-in-net-meet-hangfire-30pd",target:"_blank",rel:"noopener noreferrer"};function v(m,k){const a=i("ExternalLinkIcon");return l(),p("div",null,[u,n("p",null,[n("a",r,[s("https://mp.weixin.qq.com/s/18eYC6QR7VFANE7mIKqqhA"),e(a)]),s(" | .NET Core/.NET5/.NET6 开源项目任务调度组件汇总 后台任务和计划作业："),n("a",d,[s("https://dev.to/bytehide/background-tasks-and-scheduled-jobs-in-net-meet-hangfire-30pd"),e(a)])])])}const h=t(c,[["render",v],["__file","hangfire.html.vue"]]),f=JSON.parse('{"path":"/middleware/renwudiaodu/hangfire.html","title":"Hangfire","lang":"zh-CN","frontmatter":{"title":"Hangfire","lang":"zh-CN","date":"2023-09-29T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"hangfire","slug":"bayp4x","docsId":"63996329","description":"概述 轻便，可持久化，还有面板 官网文档：https://www.hangfire.io/overview.html 快速上手 新建项目.Net6的WebApi项目，然后安装下面nuget包并使用内存储存 然后再Program中进行注入下面的服务 做这些配置后启动项目，然后等会就可以在输出的控制台中可以看到我们的任务test输出的内容：Recurrin...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/renwudiaodu/hangfire.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Hangfire"}],["meta",{"property":"og:description","content":"概述 轻便，可持久化，还有面板 官网文档：https://www.hangfire.io/overview.html 快速上手 新建项目.Net6的WebApi项目，然后安装下面nuget包并使用内存储存 然后再Program中进行注入下面的服务 做这些配置后启动项目，然后等会就可以在输出的控制台中可以看到我们的任务test输出的内容：Recurrin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-08T14:45:46.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-08T14:45:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hangfire\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-08T14:45:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"快速上手","slug":"快速上手","link":"#快速上手","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"HangfireServer配置","slug":"hangfireserver配置","link":"#hangfireserver配置","children":[]},{"level":3,"title":"创建任务","slug":"创建任务","link":"#创建任务","children":[{"level":4,"title":"单次执行的任务","slug":"单次执行的任务","link":"#单次执行的任务","children":[]},{"level":4,"title":"基于队列的任务处理","slug":"基于队列的任务处理","link":"#基于队列的任务处理","children":[]},{"level":4,"title":"延迟任务（方法）执行","slug":"延迟任务-方法-执行","link":"#延迟任务-方法-执行","children":[]},{"level":4,"title":"循环执行任务","slug":"循环执行任务","link":"#循环执行任务","children":[]}]},{"level":3,"title":"创建更新删除任务","slug":"创建更新删除任务","link":"#创建更新删除任务","children":[]},{"level":3,"title":"持久化支持","slug":"持久化支持","link":"#持久化支持","children":[]},{"level":3,"title":"认证","slug":"认证","link":"#认证","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1699454746000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":4.45,"words":1335},"filePathRelative":"middleware/renwudiaodu/hangfire.md","localizedDate":"2023年9月29日","excerpt":"<h2>概述</h2>\\n<p>轻便，可持久化，还有面板</p>\\n<p>官网文档：https://www.hangfire.io/overview.html</p>\\n<h2>快速上手</h2>\\n<p>新建项目.Net6的WebApi项目，然后安装下面nuget包并使用内存储存</p>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>Project</span> <span class=\\"token attr-name\\">Sdk</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>Microsoft.NET.Sdk.Web<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>PropertyGroup</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>TargetFramework</span><span class=\\"token punctuation\\">&gt;</span></span>net6.0<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>TargetFramework</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>Nullable</span><span class=\\"token punctuation\\">&gt;</span></span>enable<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>Nullable</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ImplicitUsings</span><span class=\\"token punctuation\\">&gt;</span></span>enable<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ImplicitUsings</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>PropertyGroup</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ItemGroup</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>PackageReference</span> <span class=\\"token attr-name\\">Include</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>Swashbuckle.AspNetCore<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">Version</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>6.5.0<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>PackageReference</span> <span class=\\"token attr-name\\">Include</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>Hangfire.AspNetCore<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">Version</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>1.8.6<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span> 👈\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>PackageReference</span> <span class=\\"token attr-name\\">Include</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>Hangfire.InMemory<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">Version</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>0.6.0<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span> 👈\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ItemGroup</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>Project</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>","autoDesc":true}');export{h as comp,f as data};
