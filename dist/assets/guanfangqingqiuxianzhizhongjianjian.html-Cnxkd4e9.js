import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c as i,a as n,b as s,d as o,e as c}from"./app-vSdX8vi3.js";const l={},u=c(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>微软在.Net7中提供了官方的限流中间件</p><h2 id="注册限流策略" tabindex="-1"><a class="header-anchor" href="#注册限流策略"><span>注册限流策略</span></a></h2><p>因为是大于等于.Net7版本内置的，所以在这些版本不需要安装nuget包，然后直接可以使用AddRateLimiter扩展方法来注册限流服务并添加限流策略，然后使用UseRateLimiter来启用限流中间件</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddRateLimiter</span><span class="token punctuation">(</span>limiterOptions <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 配置限流策略</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">UseRateLimiter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">MapGet</span><span class="token punctuation">(</span><span class="token string">&quot;LimitTest&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span>TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Results<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Limiter&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RequireRateLimiting</span><span class="token punctuation">(</span><span class="token string">&quot;my_policy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提供了四种常用的限流算法：</p><ul><li>FixedWindowLimiter：固定窗口限流器</li><li>SlidingWindowLimiter：滑动窗口限流器</li><li>TokenBucketLimiter：令牌桶限流器</li><li>ConcurrencyLimiter：并发限流器</li></ul><h3 id="fixedwindowlimiter" tabindex="-1"><a class="header-anchor" href="#fixedwindowlimiter"><span>FixedWindowLimiter</span></a></h3><p>优缺点 优点：实现简单、占用内存低 缺点：1、当请求流量达到阈值的时候，请求会被切断，不能平滑处理突发请求；2、如果在前一个窗口最后一点时间一下子来了好多个请求，当前窗口的开始一下子来了很多请求，会导致在指定时间内处理超过阈值的请求。</p><p>注入示例</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddRateLimiter</span><span class="token punctuation">(</span>limiterOptions <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 添加固定窗口限流策略，并指定策略名，含义：在窗口大小为60s内，每个窗口的范围内，最多能请求4次</span>
    limiterOptions<span class="token punctuation">.</span><span class="token function">AddFixedWindowLimiter</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">policyName</span><span class="token punctuation">:</span> <span class="token string">&quot;fixed&quot;</span><span class="token punctuation">,</span> fixedOptions <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 窗口阈值，最多允许请求的个数</span>
        fixedOptions<span class="token punctuation">.</span>PermitLimit <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token comment">// 窗口大小</span>
        fixedOptions<span class="token punctuation">.</span>Window <span class="token operator">=</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 当请求数达到最大的时候，后续请求会进入排队。这里设置排队队列的大小</span>
        fixedOptions<span class="token punctuation">.</span>QueueLimit <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token comment">// 排队请求的处理顺序，这里设置有限处理先来的请求</span>
        fixedOptions<span class="token punctuation">.</span>QueueProcessingOrder <span class="token operator">=</span> QueueProcessingOrder<span class="token punctuation">.</span>OldestFirst<span class="token punctuation">;</span>
        <span class="token comment">// 指示新窗口是否自定重置请求限制</span>
        fixedOptions<span class="token punctuation">.</span>AutoReplenishment <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用限流策略" tabindex="-1"><a class="header-anchor" href="#应用限流策略"><span>应用限流策略</span></a></h2><h3 id="requireratelimiting-disableratelimiting" tabindex="-1"><a class="header-anchor" href="#requireratelimiting-disableratelimiting"><span>RequireRateLimiting &amp; DisableRateLimiting</span></a></h3><p>可以一次性为所有 controller 应用限流策略</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>app<span class="token punctuation">.</span><span class="token function">MapControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RequireRateLimiting</span><span class="token punctuation">(</span><span class="token string">&quot;fixed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以为指定路由应用限流策略</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>app<span class="token punctuation">.</span><span class="token function">MapGet</span><span class="token punctuation">(</span><span class="token string">&quot;LimitTest&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RequireRateLimiting</span><span class="token punctuation">(</span><span class="token string">&quot;fixed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实质上，RequireRateLimiting和DisableRateLimiting是通过向终结点元数据中EnableRateLimiting和DisableRateLimiting两个特性来实现的。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">RateLimiterEndpointConventionBuilderExtensions</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">TBuilder</span> <span class="token generic-method"><span class="token function">RequireRateLimiting</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TBuilder<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">TBuilder</span> builder<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> policyName<span class="token punctuation">)</span> <span class="token keyword">where</span> <span class="token class-name">TBuilder</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEndpointConventionBuilder</span></span>
    <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>endpointBuilder <span class="token operator">=&gt;</span> endpointBuilder<span class="token punctuation">.</span>Metadata<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">EnableRateLimitingAttribute</span><span class="token punctuation">(</span>policyName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">TBuilder</span> <span class="token generic-method"><span class="token function">RequireRateLimiting</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TBuilder<span class="token punctuation">,</span> TPartitionKey<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">TBuilder</span> builder<span class="token punctuation">,</span> <span class="token class-name">IRateLimiterPolicy<span class="token punctuation">&lt;</span>TPartitionKey<span class="token punctuation">&gt;</span></span> policy<span class="token punctuation">)</span> <span class="token keyword">where</span> <span class="token class-name">TBuilder</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEndpointConventionBuilder</span></span>
    <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>endpointBuilder <span class="token operator">=&gt;</span>
                    <span class="token punctuation">{</span>
            endpointBuilder<span class="token punctuation">.</span>Metadata<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">EnableRateLimitingAttribute</span><span class="token punctuation">(</span><span class="token keyword">new</span> 
                                                                         <span class="token constructor-invocation class-name">DefaultRateLimiterPolicy</span><span class="token punctuation">(</span>
                    RateLimiterOptions<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConvertPartitioner</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TPartitionKey<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> policy<span class="token punctuation">.</span>GetPartition<span class="token punctuation">)</span><span class="token punctuation">,</span> policy<span class="token punctuation">.</span>OnRejected<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">TBuilder</span> <span class="token generic-method"><span class="token function">DisableRateLimiting</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TBuilder<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">TBuilder</span> builder<span class="token punctuation">)</span> <span class="token keyword">where</span> <span class="token class-name">TBuilder</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEndpointConventionBuilder</span></span>
    <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>endpointBuilder <span class="token operator">=&gt;</span> endpointBuilder<span class="token punctuation">.</span>Metadata<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>DisableRateLimitingAttribute<span class="token punctuation">.</span>Instance<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enableratelimitingattribute-disableratelimitingattribute" tabindex="-1"><a class="header-anchor" href="#enableratelimitingattribute-disableratelimitingattribute"><span>EnableRateLimitingAttribute &amp; DisableRateLimitingAttribute</span></a></h3><p>在Controller层面，我们可以方便的使用特性来标注使用或禁用限流策略。这两个特性可以标注在Controller类上，也可以标注在类的方法上。 但需要注意的时，如果前面使用了RequireRateLimiting或DisableRateLimiting扩展方法，由于它们在元数据中添加特性比直接使用特性标注要晚，所以它们的优先级很高，会覆盖掉这里使用的策略。建议不要针对所有 Controller 使用RequireRateLimiting或DisableRateLimiting。 下面是一个应用示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">EnableRateLimiting</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;fixed&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>   <span class="token comment">// 针对整个 Controller 使用限流策略 fixed</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeatherForecastController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ControllerBase</span></span>
<span class="token punctuation">{</span>
    <span class="token comment">// 会使用 Controller 类上标注的 fixed 限流策略</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;GetWeatherForecast&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;Get&quot;</span><span class="token punctuation">;</span>
    
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">EnableRateLimiting</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;my_policy&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>   <span class="token comment">// 会使用 my_policy 限流策略，而不会使用 fixed</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
    
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;disable&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DisableRateLimiting</span></span><span class="token punctuation">]</span>   <span class="token comment">// 禁用任何限流策略</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;Disable&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,23),r={href:"https://www.cnblogs.com/xiaoxiaotank/p/17560251.html",target:"_blank",rel:"noopener noreferrer"};function k(d,m){const a=e("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[n("a",r,[s("https://www.cnblogs.com/xiaoxiaotank/p/17560251.html"),o(a)]),s(" | 理解ASP.NET Core - 限流（Rate Limiting） - xiaoxiaotank - 博客园")])])}const b=t(l,[["render",k],["__file","guanfangqingqiuxianzhizhongjianjian.html.vue"]]),h=JSON.parse('{"path":"/dotnet/commonNuget/xianliu/qingqiuxianzhi/guanfangqingqiuxianzhizhongjianjian.html","title":"官方请求限制中间件","lang":"zh-CN","frontmatter":{"title":"官方请求限制中间件","lang":"zh-CN","date":"2023-07-27T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"guanfangqingqiuxianzhizhongjianjian","slug":"agyal79esuimgxg5","docsId":"105105156","description":"概述 微软在.Net7中提供了官方的限流中间件 注册限流策略 因为是大于等于.Net7版本内置的，所以在这些版本不需要安装nuget包，然后直接可以使用AddRateLimiter扩展方法来注册限流服务并添加限流策略，然后使用UseRateLimiter来启用限流中间件 提供了四种常用的限流算法： FixedWindowLimiter：固定窗口限流器 ...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/commonNuget/xianliu/qingqiuxianzhi/guanfangqingqiuxianzhizhongjianjian.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"官方请求限制中间件"}],["meta",{"property":"og:description","content":"概述 微软在.Net7中提供了官方的限流中间件 注册限流策略 因为是大于等于.Net7版本内置的，所以在这些版本不需要安装nuget包，然后直接可以使用AddRateLimiter扩展方法来注册限流服务并添加限流策略，然后使用UseRateLimiter来启用限流中间件 提供了四种常用的限流算法： FixedWindowLimiter：固定窗口限流器 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-06T08:01:13.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-07-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-06T08:01:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"官方请求限制中间件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-06T08:01:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"注册限流策略","slug":"注册限流策略","link":"#注册限流策略","children":[{"level":3,"title":"FixedWindowLimiter","slug":"fixedwindowlimiter","link":"#fixedwindowlimiter","children":[]}]},{"level":2,"title":"应用限流策略","slug":"应用限流策略","link":"#应用限流策略","children":[{"level":3,"title":"RequireRateLimiting & DisableRateLimiting","slug":"requireratelimiting-disableratelimiting","link":"#requireratelimiting-disableratelimiting","children":[]},{"level":3,"title":"EnableRateLimitingAttribute & DisableRateLimitingAttribute","slug":"enableratelimitingattribute-disableratelimitingattribute","link":"#enableratelimitingattribute-disableratelimitingattribute","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1712390473000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.79,"words":836},"filePathRelative":"dotnet/commonNuget/xianliu/qingqiuxianzhi/guanfangqingqiuxianzhizhongjianjian.md","localizedDate":"2023年7月27日","excerpt":"<h2>概述</h2>\\n<p>微软在.Net7中提供了官方的限流中间件</p>\\n<h2>注册限流策略</h2>\\n<p>因为是大于等于.Net7版本内置的，所以在这些版本不需要安装nuget包，然后直接可以使用AddRateLimiter扩展方法来注册限流服务并添加限流策略，然后使用UseRateLimiter来启用限流中间件</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code>builder<span class=\\"token punctuation\\">.</span>Services<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">AddRateLimiter</span><span class=\\"token punctuation\\">(</span>limiterOptions <span class=\\"token operator\\">=&gt;</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 配置限流策略</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">UseRateLimiter</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\napp<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">MapGet</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"LimitTest\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">async</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">await</span> Task<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Delay</span><span class=\\"token punctuation\\">(</span>TimeSpan<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">FromSeconds</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">return</span> Results<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Ok</span><span class=\\"token punctuation\\">(</span><span class=\\"token interpolation-string\\"><span class=\\"token string\\">$\\"Limiter\\"</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">RequireRateLimiting</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"my_policy\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{b as comp,h as data};