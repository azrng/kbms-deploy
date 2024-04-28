import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-DMmdIwn0.js";const t={},c=e(`<h2 id="控制台" tabindex="-1"><a class="header-anchor" href="#控制台"><span>控制台</span></a></h2><p>安装2.6版本的的quartz 首先继承自IJob接口</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JobDemo</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IJob</span></span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 这里是作业调度每次定时执行方法</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>context<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">IJobExecutionContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> Task<span class="token punctuation">.</span>CompletedTask<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需求描述</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">*</span>需求<span class="token number">1</span>：实现一个基础的定时程序，每<span class="token number">3</span>秒执行一次    
最基础的装的包是<span class="token number">2.6</span>的quartz 
<span class="token operator">*</span><span class="token operator">/</span>
<span class="token comment">// //1.首先创建一个作业调度池</span>
<span class="token comment">// ISchedulerFactory schedf = new StdSchedulerFactory();</span>
<span class="token comment">// IScheduler sched = await schedf.GetScheduler();</span>
<span class="token comment">// //2.创建出来一个具体的作业</span>
<span class="token comment">// IJobDetail job = JobBuilder.Create&lt;JobDemo&gt;().Build();</span>
<span class="token comment">// //3.创建并配置一个触发器</span>
<span class="token comment">// ISimpleTrigger trigger = (ISimpleTrigger)TriggerBuilder.Create().WithSimpleSchedule(x =&gt; x.WithIntervalInSeconds(3).WithRepeatCount(int.MaxValue)).Build();</span>
<span class="token comment">// //4.加入作业调度池中</span>
<span class="token comment">// await sched.ScheduleJob(job, trigger);</span>
<span class="token comment">// //5.开始运行</span>
<span class="token comment">// await sched.Start();</span>


<span class="token comment">/*
需求2   我们需要让这个定时程序执行100次，开始时间为当前时间，结束时间为当前时间后的个小时，到时候不管执行结束没，都不再执行
*/</span>
<span class="token comment">//首先创建一个作业调度池</span>
<span class="token comment">//ISchedulerFactory schedf = new StdSchedulerFactory();</span>
<span class="token comment">//IScheduler sched = await schedf.GetScheduler();</span>
<span class="token doc-comment comment">////创建出来一个具体的作业</span>
<span class="token comment">//IJobDetail job = JobBuilder.Create&lt;JobDemo&gt;().Build();</span>
<span class="token doc-comment comment">////NextGivenSecondDate：如果第一个参数为null则表名当前时间往后推迟2秒的时间点。</span>
<span class="token comment">//DateTimeOffset startTime = DateBuilder.NextGivenSecondDate(DateTime.Now.AddSeconds(1), 2);</span>
<span class="token comment">//DateTimeOffset endTime = DateBuilder.NextGivenSecondDate(DateTime.Now.AddHours(2), 3);</span>
<span class="token doc-comment comment">////创建并配置一个触发器</span>
<span class="token comment">//ISimpleTrigger trigger = (ISimpleTrigger)TriggerBuilder.Create().StartAt(startTime).EndAt(endTime)</span>
<span class="token comment">//                            .WithSimpleSchedule(x =&gt; x.WithIntervalInSeconds(3).WithRepeatCount(100))</span>
<span class="token comment">//                            .Build();</span>
<span class="token doc-comment comment">////加入作业调度池中</span>
<span class="token comment">//await sched.ScheduleJob(job, trigger);</span>
<span class="token doc-comment comment">////开始运行</span>
<span class="token comment">//await sched.Start();</span>
<span class="token comment">//Console.ReadKey();</span>


<span class="token comment">/*
需求3：我想在每小时的第10，20，25，26，33，54分钟，每分钟的第1，10，14秒执行一次  这个时候就需要用到corn表达式了
*/</span>
<span class="token comment">// //首先创建一个作业调度池</span>
<span class="token comment">// ISchedulerFactory schedf = new StdSchedulerFactory();</span>
<span class="token comment">// IScheduler sched = await schedf.GetScheduler();</span>
<span class="token comment">// //创建出来一个具体的作业</span>
<span class="token comment">// IJobDetail job = JobBuilder.Create&lt;JobDemo&gt;().Build();</span>
<span class="token comment">// //NextGivenSecondDate：如果第一个参数为null则表名当前时间往后推迟2秒的时间点。</span>
<span class="token comment">// DateTimeOffset startTime = DateBuilder.NextGivenSecondDate(DateTime.Now.AddSeconds(1), 2);</span>
<span class="token comment">// DateTimeOffset endTime = DateBuilder.NextGivenSecondDate(DateTime.Now.AddYears(2), 3);</span>
<span class="token comment">// //创建并配置一个触发器</span>
<span class="token comment">// ICronTrigger trigger = (ICronTrigger)TriggerBuilder.Create().StartAt(startTime).EndAt(endTime)</span>
<span class="token comment">//                             .WithCronSchedule(&quot;1,10,14 10,20,25,30,33,54 * * * ? &quot;)</span>
<span class="token comment">//                             .Build();</span>
<span class="token comment">// //加入作业调度池中</span>
<span class="token comment">// await sched.ScheduleJob(job, trigger);</span>
<span class="token comment">// //开始运行</span>
<span class="token comment">// await sched.Start();</span>
<span class="token comment">// //挂起2天</span>
<span class="token comment">// await Task.Delay(TimeSpan.FromDays(2));</span>
<span class="token comment">// //Thread.Sleep(TimeSpan.FromDays(2));</span>
<span class="token comment">// //2天后关闭作业调度，将不在执行</span>
<span class="token comment">// await sched.Shutdown();</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[c];function i(p,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","netfshiyong.html.vue"]]),u=JSON.parse('{"path":"/middleware/renwudiaodu/quartz/netfshiyong.html","title":"NetF使用","lang":"zh-CN","frontmatter":{"title":"NetF使用","lang":"zh-CN","date":"2022-10-27T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"netfshiyong","slug":"mck9pd","docsId":"98845607","description":"控制台 安装2.6版本的的quartz 首先继承自IJob接口 需求描述","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/renwudiaodu/quartz/netfshiyong.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"NetF使用"}],["meta",{"property":"og:description","content":"控制台 安装2.6版本的的quartz 首先继承自IJob接口 需求描述"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T14:00:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-10-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T14:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NetF使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T14:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"控制台","slug":"控制台","link":"#控制台","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1697724028000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.06,"words":619},"filePathRelative":"middleware/renwudiaodu/quartz/netfshiyong.md","localizedDate":"2022年10月27日","excerpt":"<h2>控制台</h2>\\n<p>安装2.6版本的的quartz\\n首先继承自IJob接口</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">JobDemo</span> <span class=\\"token punctuation\\">:</span> <span class=\\"token type-list\\"><span class=\\"token class-name\\">IJob</span></span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token doc-comment comment\\">/// <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>summary</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n    <span class=\\"token doc-comment comment\\">/// 这里是作业调度每次定时执行方法</span>\\n    <span class=\\"token doc-comment comment\\">/// <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>summary</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n    <span class=\\"token doc-comment comment\\">/// <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>param</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>context<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>param</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token return-type class-name\\">Task</span> <span class=\\"token function\\">Execute</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">IJobExecutionContext</span> context<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span>DateTime<span class=\\"token punctuation\\">.</span>Now<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ToString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token keyword\\">return</span> Task<span class=\\"token punctuation\\">.</span>CompletedTask<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{r as comp,u as data};
