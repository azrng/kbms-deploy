import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c,a as n,d as s,e,b as i}from"./app-DMmdIwn0.js";const l={},u=n("h2",{id:"概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#概述"},[n("span",null,"概述")])],-1),r=n("p",null,"静态代码织入AOP，.NET最常用的AOP应该是Castle DynamicProxy，rougamo的功能与其类似，但是实现却截然不同， DynamicProxy是运行时生成一个代理类，通过方法重写的方式执行织入代码，rougamo则是代码编译时直接修改IL代码。",-1),d={href:"https://github.com/inversionhourglass/Rougamo",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="快速开始-moattribute" tabindex="-1"><a class="header-anchor" href="#快速开始-moattribute"><span>快速开始(MoAttribute)</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 1.NuGet引用Rougamo.Fody</span>
<span class="token comment">// 2.定义类继承MoAttribute，同时定义需要织入的代码</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoggingAttribute</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MoAttribute</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnEntry</span><span class="token punctuation">(</span><span class="token class-name">MethodContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 从context对象中能取到包括入参、类实例、方法描述等信息</span>
        Log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;方法执行前&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnException</span><span class="token punctuation">(</span><span class="token class-name">MethodContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;方法执行异常&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span>Exception<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnSuccess</span><span class="token punctuation">(</span><span class="token class-name">MethodContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;方法执行成功后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnExit</span><span class="token punctuation">(</span><span class="token class-name">MethodContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;方法退出时，不论方法执行成功还是异常，都会执行&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3.应用Attribute</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Service</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Logging</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Sync</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Logging</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>Data<span class="token punctuation">&gt;</span></span> <span class="token function">Async</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> id<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据方法可访问性批量应用" tabindex="-1"><a class="header-anchor" href="#根据方法可访问性批量应用"><span>根据方法可访问性批量应用</span></a></h3><p>在上面介绍了如何将代码织入到指定方法上，但实际使用时，一个庞大的项目如果每个方法或很多方法都去加上这个Attribute 可能会很繁琐切侵入性较大。 所以MoAttribute设计为可以应用于方法(method)、类(class)、程序集(assembly)和模块(module)， 同时设置了可访问性属性，增加灵活性。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 1.在继承MoAttribute的同时，重写Flags属性，未重写时默认InstancePublic(public实例方法)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoggingAttribute</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MoAttribute</span></span>
<span class="token punctuation">{</span>
    <span class="token comment">// 改为所有public方法有效，不论是实例方法还是静态方法</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">AccessFlags</span> Flags <span class="token operator">=&gt;</span> AccessFlags<span class="token punctuation">.</span>Public<span class="token punctuation">;</span>

    <span class="token comment">// 方法重写省略</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.应用</span>
<span class="token comment">// 2.1.应用于类上</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Logging</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Service</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Logging织入将被应用</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">M1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token comment">// Logging织入将被应用</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">M2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token comment">// protected访问级别不会应用Logging的代码织入</span>
    <span class="token keyword">protected</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">M3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2.2.应用于程序集上，该程序集所有public方法都将应用静态织入</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token target keyword">assembly</span><span class="token punctuation">:</span> <span class="token class-name">Logging</span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重试功能" tabindex="-1"><a class="header-anchor" href="#重试功能"><span>重试功能</span></a></h3><p>从1.4.0版本开始，可以在遇到指定异常或者返回值非预期值的情况下重新执行当前方法，实现方式是在OnException和OnSuccess中设置MethodContext.RetryCount值，在OnException和OnSuccess执行完毕后如果MethodContext.RetryCount值大于0那么就会重新执行当前方法。 这个功能有时候真是太方便了.</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">internal</span> <span class="token keyword">class</span> <span class="token class-name">RetryAttribute</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MoAttribute</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnEntry</span><span class="token punctuation">(</span><span class="token class-name">MethodContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span>RetryCount <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnException</span><span class="token punctuation">(</span><span class="token class-name">MethodContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span>RetryCount<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnSuccess</span><span class="token punctuation">(</span><span class="token class-name">MethodContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span>RetryCount<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 应用RetryAttribute后，Test方法将会重试3次</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Retry</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Exception</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,10),m={href:"https://mp.weixin.qq.com/s/XTxEkIw1o6N-cSEJeVzZdQ",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/nigture/p/17753498.html",target:"_blank",rel:"noopener noreferrer"};function b(g,y){const a=o("ExternalLinkIcon");return p(),c("div",null,[u,r,n("p",null,[s("仓库地址："),n("a",d,[s("https://github.com/inversionhourglass/Rougamo"),e(a)])]),k,n("p",null,[n("a",m,[s("https://mp.weixin.qq.com/s/XTxEkIw1o6N-cSEJeVzZdQ"),e(a)]),s(" | .NET 静态代码织入 - 轻松实现 AOP "),n("a",v,[s("https://www.cnblogs.com/nigture/p/17753498.html"),e(a)]),s(" | .NET静态代码织入——肉夹馍（Rougamo）发布2.0 - nigture - 博客园")])])}const x=t(l,[["render",b],["__file","rougamo.html.vue"]]),f=JSON.parse('{"path":"/dotnet/aop/rougamo.html","title":"Rougamo","lang":"zh-CN","frontmatter":{"title":"Rougamo","lang":"zh-CN","date":"2023-10-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"rougamo","slug":"smwgnuoz97vzasew","docsId":"135422344","description":"概述 静态代码织入AOP，.NET最常用的AOP应该是Castle DynamicProxy，rougamo的功能与其类似，但是实现却截然不同， DynamicProxy是运行时生成一个代理类，通过方法重写的方式执行织入代码，rougamo则是代码编译时直接修改IL代码。 仓库地址：https://github.com/inversionhourgla...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/aop/rougamo.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Rougamo"}],["meta",{"property":"og:description","content":"概述 静态代码织入AOP，.NET最常用的AOP应该是Castle DynamicProxy，rougamo的功能与其类似，但是实现却截然不同， DynamicProxy是运行时生成一个代理类，通过方法重写的方式执行织入代码，rougamo则是代码编译时直接修改IL代码。 仓库地址：https://github.com/inversionhourgla..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T08:11:43.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T08:11:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rougamo\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T08:11:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"快速开始(MoAttribute)","slug":"快速开始-moattribute","link":"#快速开始-moattribute","children":[]},{"level":3,"title":"根据方法可访问性批量应用","slug":"根据方法可访问性批量应用","link":"#根据方法可访问性批量应用","children":[]},{"level":3,"title":"重试功能","slug":"重试功能","link":"#重试功能","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1697962303000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.4,"words":719},"filePathRelative":"dotnet/aop/rougamo.md","localizedDate":"2023年10月14日","excerpt":"<h2>概述</h2>\\n<p>静态代码织入AOP，.NET最常用的AOP应该是Castle DynamicProxy，rougamo的功能与其类似，但是实现却截然不同， DynamicProxy是运行时生成一个代理类，通过方法重写的方式执行织入代码，rougamo则是代码编译时直接修改IL代码。</p>\\n<p>仓库地址：<a href=\\"https://github.com/inversionhourglass/Rougamo\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/inversionhourglass/Rougamo</a></p>","autoDesc":true}');export{x as comp,f as data};