import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c,a as n,d as a,e,b as p}from"./app-DMmdIwn0.js";const l={},r=p(`<h2 id="timer" tabindex="-1"><a class="header-anchor" href="#timer"><span>Timer</span></a></h2><p>TimerCallback委托专门用于定时器的操作，这个委托允许我们定义一个定时任务，在指定的间隔之后重复调用。实际的类型与ParameterizedThreadStart委托是一样的。 Timer类的构造函数定义如下： public Timmer(TimerCallback callback,Object state,long dueTime,long period) Callback表示一个时间到达时执行的委托，这个委托代表的方法必须符合委托TimerCallback的定义。 State表示当调用这个定时器委托时传递的参数。 dutTime表示从创建定时器到第一次调用时延迟的时间，以毫秒为单位。 Period表示定时器开始之后，每次调用之间的时间间隔，以毫秒为单位。 示例,使用TimerCallback每隔一秒钟输出一次时间：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Program</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Timer</span> clock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Timer</span><span class="token punctuation">(</span>ConsoleApplication1<span class="token punctuation">.</span>Program<span class="token punctuation">.</span>ShowTime<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ShowTime</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> userData<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="periodictimer" tabindex="-1"><a class="header-anchor" href="#periodictimer"><span>PeriodicTimer</span></a></h2><p>.Net6中新增加的类，可以用来创建定时器，通过固定间隔的时间调用回调函数，操作如下</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> time <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">PeriodicTimer</span><span class="token punctuation">(</span>TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">await</span> time<span class="token punctuation">.</span><span class="token function">WaitForNextTickAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">Dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比较传统的Timer优势在于</p><ul><li>支持异步等待指定的时间间隔</li><li>在回调执行的过程中，我们可以阻止下一次回调的执行，直到我们完成了当前的操作。</li></ul><h2 id="timerqueue" tabindex="-1"><a class="header-anchor" href="#timerqueue"><span>TimerQueue</span></a></h2>`,9),u={href:"https://www.cnblogs.com/eventhorizon/p/17557821.htmlTimerQueue",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#资料"},[n("span",null,"资料")])],-1),m={href:"https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.periodictimer?view=net-7.0",target:"_blank",rel:"noopener noreferrer"},k={href:"https://learn.microsoft.com/zh-cn/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-6.0&tabs=visual-studio",target:"_blank",rel:"noopener noreferrer"};function h(T,b){const s=i("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[a("揭秘 .NET 中的 TimerQueue（上）"),n("a",u,[a("https://www.cnblogs.com/eventhorizon/p/17557821.htmlTimerQueue"),e(s)]),a(" 是.NET中实现定时任务的核心组件，它是一个定时任务的管理器，负责存储和调度定时任务。它被用于实现很多 .NET 中的定时任务，比如 System.Threading.Timer、Task.Delay、CancellationTokenSource 等。笔者将用两篇文章为大家介绍 TimerQueue 的实现原理，本篇文章将以 System.Threading.Timer 为入口，揭秘 TimerQueue 对定时任务基本单元 TimerQueueTimer的管理和调度。")]),d,n("p",null,[a("PeriodicTime："),n("a",m,[a("https://learn.microsoft.com/zh-cn/dotnet/api/system.threading.periodictimer?view=net-7.0"),e(s)]),a(" 使用托管服务实现后台任务："),n("a",k,[a("https://learn.microsoft.com/zh-cn/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-6.0&tabs=visual-studio"),e(s)])])])}const y=t(l,[["render",h],["__file","dingshiqi.html.vue"]]),f=JSON.parse('{"path":"/dotnet/csharp/dingshiqi.html","title":"定时器","lang":"zh-CN","frontmatter":{"title":"定时器","lang":"zh-CN","date":"2023-10-26T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["csharp"],"tag":["无"],"filename":"dingshiqi","slug":"nlerir","docsId":"30978127","description":"Timer TimerCallback委托专门用于定时器的操作，这个委托允许我们定义一个定时任务，在指定的间隔之后重复调用。实际的类型与ParameterizedThreadStart委托是一样的。 Timer类的构造函数定义如下： public Timmer(TimerCallback callback,Object state,long dueTi...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/csharp/dingshiqi.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"定时器"}],["meta",{"property":"og:description","content":"Timer TimerCallback委托专门用于定时器的操作，这个委托允许我们定义一个定时任务，在指定的间隔之后重复调用。实际的类型与ParameterizedThreadStart委托是一样的。 Timer类的构造函数定义如下： public Timmer(TimerCallback callback,Object state,long dueTi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T14:50:44.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T14:50:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"定时器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-17T14:50:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"Timer","slug":"timer","link":"#timer","children":[]},{"level":2,"title":"PeriodicTimer","slug":"periodictimer","link":"#periodictimer","children":[]},{"level":2,"title":"TimerQueue","slug":"timerqueue","link":"#timerqueue","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1700232644000,"updatedTime":1700232644000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.75,"words":526},"filePathRelative":"dotnet/csharp/dingshiqi.md","localizedDate":"2023年10月26日","excerpt":"<h2>Timer</h2>\\n<p>TimerCallback委托专门用于定时器的操作，这个委托允许我们定义一个定时任务，在指定的间隔之后重复调用。实际的类型与ParameterizedThreadStart委托是一样的。\\nTimer类的构造函数定义如下：\\npublic Timmer(TimerCallback callback,Object state,long dueTime,long period)\\nCallback表示一个时间到达时执行的委托，这个委托代表的方法必须符合委托TimerCallback的定义。\\nState表示当调用这个定时器委托时传递的参数。\\ndutTime表示从创建定时器到第一次调用时延迟的时间，以毫秒为单位。\\nPeriod表示定时器开始之后，每次调用之间的时间间隔，以毫秒为单位。\\n示例,使用TimerCallback每隔一秒钟输出一次时间：</p>","autoDesc":true}');export{y as comp,f as data};