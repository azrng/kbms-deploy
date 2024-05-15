import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as t,c as d,b as e,e as n,f as a,d as l}from"./app-CBxp4zeL.js";const c={},v=l('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>通常情况下，日志氛围三种：请求、业务处理、数据库操作 在实际采集日志的时候，关注【特定日志场景】</p><blockquote><p>提供给第三方调用的API日志 核心流程业务 数据库操作日志 应用内部发起的HTTP请求日志 warn、error、fatal级别日志</p></blockquote><h2 id="日志框架" tabindex="-1"><a class="header-anchor" href="#日志框架"><span>日志框架</span></a></h2><ul><li>Serilog</li><li>Nlog</li><li>logback</li><li>log4net</li><li>自带的Ilogger</li><li>Loki+grafana</li></ul><h2 id="日志管理系统" tabindex="-1"><a class="header-anchor" href="#日志管理系统"><span>日志管理系统</span></a></h2>',6),o={href:"http://sentry.io",target:"_blank",rel:"noopener noreferrer"},m={href:"https://loggly.com",target:"_blank",rel:"noopener noreferrer"},u={href:"http://elmah.io",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="记录时机" tabindex="-1"><a class="header-anchor" href="#记录时机"><span>记录时机</span></a></h2><p>通常，记录所有可以深入了解您的应用程序和用户行为的内容，例如：</p><ul><li>代码中的主要分支点</li><li>遇到错误或意外值时</li><li>任何 IO 或资源密集型操作</li><li>重大领域事件</li><li>请求失败和重试</li><li>耗时的批处理操作的开始和结束</li></ul><h2 id="记录内容" tabindex="-1"><a class="header-anchor" href="#记录内容"><span>记录内容</span></a></h2><p>标准化日志事件属性使您能够充分利用日志搜索和分析工具。在适用的情况下使用以下属性：</p><table><thead><tr><th>ApplicationName</th><th>生成日志事件的应用程序的名称</th></tr></thead><tbody><tr><td>ClientIP</td><td>发出请求的客户端的 IP 地址</td></tr><tr><td>CorrelationId</td><td>可用于跨多个应用程序边界跟踪请求的 ID</td></tr><tr><td>Elapsed</td><td>操作完成所用的时间（以毫秒为单位）</td></tr><tr><td>EventType</td><td>用于确定消息类型的消息模板的哈希值</td></tr><tr><td>MachineName</td><td>运行应用程序的机器的名称</td></tr><tr><td>Outcome</td><td>手术的结果</td></tr><tr><td>RequestMethod</td><td>HTTP 请求方法，例如 POST</td></tr><tr><td>RequestPath</td><td>HTTP 请求路径</td></tr><tr><td>SourceContext</td><td>日志源自的组件/类的名称</td></tr><tr><td>StatusCode</td><td>HTTP 响应状态码</td></tr><tr><td>UserAgent</td><td>HTTP 用户代理</td></tr><tr><td>Version</td><td>正在运行的应用程序的版本</td></tr></tbody></table><h2 id="自定义日志" tabindex="-1"><a class="header-anchor" href="#自定义日志"><span>自定义日志</span></a></h2><h3 id="日志存库" tabindex="-1"><a class="header-anchor" href="#日志存库"><span>日志存库</span></a></h3><p>创建一个日志表，然后将需要的日志信息都存入数据库然后在后台管理系统显示出来</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>create table Logs--日志表
(
    lid int primary key identity(1,1),
    info varchar(max),
    operator varchar(40),
    ip varchar(40),
    createtime varchar(40)
)
go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写日志记录类</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// ＜summary＞ 
/// 事件日志记录类，提供事件日志记录支持  
/// ＜remarks＞ 
/// 定义了4个日志记录方法 (error, warning, info, trace)  
/// ＜/remarks＞ 
/// ＜/summary＞ 
public class ApplicationLog
{
/// ＜summary＞ 
/// 将错误信息记录到Win2000/NT事件日志中 
/// ＜param name=&quot;message&quot;＞需要记录的文本信息＜/param＞ 
/// ＜/summary＞ 
public static void WriteError(String message)
{
    WriteLog(TraceLevel.Error, message);
}

/// ＜summary＞ 
/// 将警告信息记录到Win2000/NT事件日志中 
/// ＜param name=&quot;message&quot;＞需要记录的文本信息＜/param＞ 
/// ＜/summary＞ 
public static void WriteWarning(String message)
{
    WriteLog(TraceLevel.Warning, message);
}

/// ＜summary＞ 
/// 将提示信息记录到Win2000/NT事件日志中 
/// ＜param name=&quot;message&quot;＞需要记录的文本信息＜/param＞ 
/// ＜/summary＞ 
public static void WriteInfo(String message)
{
    WriteLog(TraceLevel.Info, message);
}

/// ＜summary＞ 
/// 将跟踪信息记录到Win2000/NT事件日志中 
/// ＜param name=&quot;message&quot;＞需要记录的文本信息＜/param＞ 
/// ＜/summary＞ 
public static void WriteTrace(String message)
{
    WriteLog(TraceLevel.Verbose, message);
}

/// ＜summary＞ 
/// 格式化记录到事件日志的文本信息格式 
/// ＜param name=&quot;ex&quot;＞需要格式化的异常对象＜/param＞ 
/// ＜param name=&quot;catchInfo&quot;＞异常信息标题字符串.＜/param＞ 
/// ＜retvalue＞ 
/// ＜para＞格式后的异常信息字符串，包括异常内容和跟踪堆栈.＜/para＞ 
/// ＜/retvalue＞ 
/// ＜/summary＞ 
public static String FormatException(Exception ex, String catchInfo)
{
    StringBuilder strBuilder = new StringBuilder();
    if (catchInfo != String.Empty)
    {
        strBuilder.Append(catchInfo).Append(&quot;\\r\\n&quot;);
    }

    strBuilder.Append(ex.Message).Append(&quot;\\r\\n&quot;).Append(ex.StackTrace);
    return strBuilder.ToString();
}

/// ＜summary＞ 
/// 实际事件日志写入方法 
/// ＜param name=&quot;level&quot;＞要记录信息的级别（error,warning,info,trace).＜/param＞ 
/// ＜param name=&quot;messageText&quot;＞要记录的文本.＜/param＞ 
/// ＜/summary＞ 
private static void WriteLog(TraceLevel level, String messageText)
{
    try
    {
        EventLogEntryType LogEntryType;
        switch (level)
        {
            case TraceLevel.Error:
                LogEntryType = EventLogEntryType.Error;
                break;
            case TraceLevel.Warning:
                LogEntryType = EventLogEntryType.Warning;
                break;
            case TraceLevel.Info:
                LogEntryType = EventLogEntryType.Information;
                break;
            case TraceLevel.Verbose:
                LogEntryType = EventLogEntryType.SuccessAudit;
                break;
            default:
                LogEntryType = EventLogEntryType.SuccessAudit;
                break;
        }

        EventLog eventLog = new EventLog(&quot;Application&quot;, ApplicationConfiguration.EventLogMachineName,
            ApplicationConfiguration.EventLogSourceName);
		//写入事件日志 
        eventLog.WriteEntry(messageText, LogEntryType);
    }
    catch
    {
    } //忽略任何异常 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志文件" tabindex="-1"><a class="header-anchor" href="#日志文件"><span>日志文件</span></a></h3><p>一个简单的方案去存储日志到本地文本文件</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public static class LogHelper
{
    private static readonly object lockObj = new object();

    public static async Task WriteLogAsync(string message)
    {
        // 使用异步方式写入日志
        await Task.Run(() =&gt;
        {
            lock (lockObj)
            {
                using var writer = new StreamWriter(&quot;log.txt&quot;, true);
                writer.WriteLine($&quot;{DateTime.Now} - {message}&quot;);
            }
        });
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>string message = &quot;Log message&quot;;
for (int i = 0; i &lt; 100; i++)
{
    Task.Run(() =&gt; LogHelper.WriteLogAsync(message));
}
Console.ReadLine();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,18),p={href:"https://mp.weixin.qq.com/s/Rg_euctSIJFZ9TDI5zEodw",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.cnblogs.com/czzj/p/JGP_MyLog.html",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"编辑日志中的敏感信息：https://andrewlock.net/redacting-sensitive-data-with-microsoft-extensions-compliance/",-1);function y(T,f){const i=s("ExternalLinkIcon");return t(),d("div",null,[v,e("ul",null,[e("li",null,[e("a",o,[n("Sentry.io"),a(i)])]),e("li",null,[e("a",m,[n("Loggly.com"),a(i)])]),e("li",null,[e("a",u,[n("Elmah.io"),a(i)])])]),b,e("p",null,[e("a",p,[n("https://mp.weixin.qq.com/s/Rg_euctSIJFZ9TDI5zEodw"),a(i)]),n(" | 轻量级日志 Loki 全攻略 日志库设计："),e("a",g,[n("https://www.cnblogs.com/czzj/p/JGP_MyLog.html"),a(i)])]),h])}const _=r(c,[["render",y],["__file","index.html.vue"]]),x=JSON.parse('{"path":"/dotnet/base/logOperator/","title":"说明","lang":"zh-CN","frontmatter":{"title":"说明","lang":"zh-CN","date":"2023-10-18T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"readme","slug":"bilfnd","docsId":"29412344","description":"概述 通常情况下，日志氛围三种：请求、业务处理、数据库操作 在实际采集日志的时候，关注【特定日志场景】 提供给第三方调用的API日志 核心流程业务 数据库操作日志 应用内部发起的HTTP请求日志 warn、error、fatal级别日志 日志框架 Serilog Nlog logback log4net 自带的Ilogger Loki+grafana ...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/base/logOperator/"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"说明"}],["meta",{"property":"og:description","content":"概述 通常情况下，日志氛围三种：请求、业务处理、数据库操作 在实际采集日志的时候，关注【特定日志场景】 提供给第三方调用的API日志 核心流程业务 数据库操作日志 应用内部发起的HTTP请求日志 warn、error、fatal级别日志 日志框架 Serilog Nlog logback log4net 自带的Ilogger Loki+grafana ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-22T13:47:53.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-22T13:47:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说明\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-22T13:47:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"日志框架","slug":"日志框架","link":"#日志框架","children":[]},{"level":2,"title":"日志管理系统","slug":"日志管理系统","link":"#日志管理系统","children":[]},{"level":2,"title":"记录时机","slug":"记录时机","link":"#记录时机","children":[]},{"level":2,"title":"记录内容","slug":"记录内容","link":"#记录内容","children":[]},{"level":2,"title":"自定义日志","slug":"自定义日志","link":"#自定义日志","children":[{"level":3,"title":"日志存库","slug":"日志存库","link":"#日志存库","children":[]},{"level":3,"title":"日志文件","slug":"日志文件","link":"#日志文件","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1703252873000,"updatedTime":1703252873000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":3.55,"words":1065},"filePathRelative":"dotnet/base/logOperator/readme.md","localizedDate":"2023年10月18日","excerpt":"<h2>概述</h2>\\n<p>通常情况下，日志氛围三种：请求、业务处理、数据库操作\\n在实际采集日志的时候，关注【特定日志场景】</p>\\n<blockquote>\\n<p>提供给第三方调用的API日志\\n核心流程业务\\n数据库操作日志\\n应用内部发起的HTTP请求日志\\nwarn、error、fatal级别日志</p>\\n</blockquote>\\n<h2>日志框架</h2>\\n<ul>\\n<li>Serilog</li>\\n<li>Nlog</li>\\n<li>logback</li>\\n<li>log4net</li>\\n<li>自带的Ilogger</li>\\n<li>Loki+grafana</li>\\n</ul>","autoDesc":true}');export{_ as comp,x as data};
