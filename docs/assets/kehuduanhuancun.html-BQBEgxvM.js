import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c as o,a as n,d as s,e as c,b as l}from"./app-DMmdIwn0.js";const i={},u=l(`<h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求"><span>需求</span></a></h2><p>这里我们实现禁用浏览器客户端缓存(在响应头增加配置)</p><h2 id="netf操作" tabindex="-1"><a class="header-anchor" href="#netf操作"><span>NetF操作</span></a></h2><p>通过在过滤器中使用Cache配置来操作浏览器缓存</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NoCacheAttribute</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ActionFilterAttribute</span></span>
<span class="token punctuation">{</span>  
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnResultExecuting</span><span class="token punctuation">(</span><span class="token class-name">ResultExecutingContext</span> filterContext<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        filterContext<span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Cache<span class="token punctuation">.</span><span class="token function">SetExpires</span><span class="token punctuation">(</span>DateTime<span class="token punctuation">.</span>UtcNow<span class="token punctuation">.</span><span class="token function">AddDays</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filterContext<span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Cache<span class="token punctuation">.</span><span class="token function">SetValidUntilExpires</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filterContext<span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Cache<span class="token punctuation">.</span><span class="token function">SetRevalidation</span><span class="token punctuation">(</span>HttpCacheRevalidation<span class="token punctuation">.</span>AllCaches<span class="token punctuation">)</span><span class="token punctuation">;</span>
        filterContext<span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Cache<span class="token punctuation">.</span><span class="token function">SetCacheability</span><span class="token punctuation">(</span>HttpCacheability<span class="token punctuation">.</span>NoCache<span class="token punctuation">)</span><span class="token punctuation">;</span>
        filterContext<span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Cache<span class="token punctuation">.</span><span class="token function">SetNoStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">OnResultExecuting</span><span class="token punctuation">(</span>filterContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="netcore操作" tabindex="-1"><a class="header-anchor" href="#netcore操作"><span>NetCore操作</span></a></h2><h2 id="设置action过滤器" tabindex="-1"><a class="header-anchor" href="#设置action过滤器"><span>设置Action过滤器</span></a></h2><p>通过过滤器对响应头进行操作</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NoCacheAttribute</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ActionFilterAttribute</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnResultExecuting</span><span class="token punctuation">(</span><span class="token class-name">ResultExecutingContext</span> filterContext<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        filterContext<span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Headers<span class="token punctuation">[</span><span class="token string">&quot;Cache-Control&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;no-cache, no-store, must-revalidate&quot;</span><span class="token punctuation">;</span>
        filterContext<span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Headers<span class="token punctuation">[</span><span class="token string">&quot;Expires&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;-1&quot;</span><span class="token punctuation">;</span>
        filterContext<span class="token punctuation">.</span>HttpContext<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Headers<span class="token punctuation">[</span><span class="token string">&quot;Pragma&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;no-cache&quot;</span><span class="token punctuation">;</span>

        <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">OnResultExecuting</span><span class="token punctuation">(</span>filterContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用特性" tabindex="-1"><a class="header-anchor" href="#使用特性"><span>使用特性</span></a></h3><p>通过在控制器或者方法上面添加特性来实现浏览器缓存</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ResponseCache</span><span class="token attribute-arguments"><span class="token punctuation">(</span>NoStore <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> Location <span class="token operator">=</span> ResponseCacheLocation<span class="token punctuation">.</span>None<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Controller</span></span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ResponseCache</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Duration<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">GetTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加该特性会自动在响应头增加Cache-Control: public,max-age=10，表达式服务器指示浏览器端“可以缓存这个响应内存10秒”</p><h3 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件"><span>中间件</span></a></h3><p>如果你需要在全局作用域上禁用，可以利用 Middleware 机制实现，参考如下代码。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">sealed</span> <span class="token keyword">class</span> <span class="token class-name">RequestHandlerMiddleware</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">RequestDelegate</span> _next<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">RequestHandlerMiddleware</span><span class="token punctuation">(</span><span class="token class-name">RequestDelegate</span> next<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _next <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token class-name">HttpContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">_next</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ConfigureAwait</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        context<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Headers<span class="token punctuation">[</span><span class="token string">&quot;Cache-Control&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;no-cache, no-store, must-revalidate&quot;</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Headers<span class="token punctuation">[</span><span class="token string">&quot;Expires&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;-1&quot;</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>Headers<span class="token punctuation">[</span><span class="token string">&quot;Pragma&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;no-cache&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,17),r={href:"https://mp.weixin.qq.com/s/jqeynbAyChMLcNOxw4HVyw",target:"_blank",rel:"noopener noreferrer"};function k(d,m){const a=e("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[n("a",r,[s("https://mp.weixin.qq.com/s/jqeynbAyChMLcNOxw4HVyw"),c(a)]),s(" | .NET Core 中有等价的 HttpContext.Response.Cache 吗？")])])}const b=t(i,[["render",k],["__file","kehuduanhuancun.html.vue"]]),C=JSON.parse('{"path":"/dotnet/base/huancun/kehuduanhuancun.html","title":"客户端缓存","lang":"zh-CN","frontmatter":{"title":"客户端缓存","lang":"zh-CN","date":"2023-08-20T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"kehuduanhuancun","slug":"pst24g","docsId":"51641666","description":"需求 这里我们实现禁用浏览器客户端缓存(在响应头增加配置) NetF操作 通过在过滤器中使用Cache配置来操作浏览器缓存 NetCore操作 设置Action过滤器 通过过滤器对响应头进行操作 使用特性 通过在控制器或者方法上面添加特性来实现浏览器缓存 增加该特性会自动在响应头增加Cache-Control: public,max-age=10，表达...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/base/huancun/kehuduanhuancun.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"客户端缓存"}],["meta",{"property":"og:description","content":"需求 这里我们实现禁用浏览器客户端缓存(在响应头增加配置) NetF操作 通过在过滤器中使用Cache配置来操作浏览器缓存 NetCore操作 设置Action过滤器 通过过滤器对响应头进行操作 使用特性 通过在控制器或者方法上面添加特性来实现浏览器缓存 增加该特性会自动在响应头增加Cache-Control: public,max-age=10，表达..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-25T13:23:37.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-08-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-25T13:23:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"客户端缓存\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-25T13:23:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"需求","slug":"需求","link":"#需求","children":[]},{"level":2,"title":"NetF操作","slug":"netf操作","link":"#netf操作","children":[]},{"level":2,"title":"NetCore操作","slug":"netcore操作","link":"#netcore操作","children":[]},{"level":2,"title":"设置Action过滤器","slug":"设置action过滤器","link":"#设置action过滤器","children":[{"level":3,"title":"使用特性","slug":"使用特性","link":"#使用特性","children":[]},{"level":3,"title":"中间件","slug":"中间件","link":"#中间件","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1698240217000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.11,"words":334},"filePathRelative":"dotnet/base/huancun/kehuduanhuancun.md","localizedDate":"2023年8月20日","excerpt":"<h2>需求</h2>\\n<p>这里我们实现禁用浏览器客户端缓存(在响应头增加配置)</p>\\n<h2>NetF操作</h2>\\n<p>通过在过滤器中使用Cache配置来操作浏览器缓存</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">NoCacheAttribute</span> <span class=\\"token punctuation\\">:</span> <span class=\\"token type-list\\"><span class=\\"token class-name\\">ActionFilterAttribute</span></span>\\n<span class=\\"token punctuation\\">{</span>  \\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">override</span> <span class=\\"token return-type class-name\\"><span class=\\"token keyword\\">void</span></span> <span class=\\"token function\\">OnResultExecuting</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ResultExecutingContext</span> filterContext<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        filterContext<span class=\\"token punctuation\\">.</span>HttpContext<span class=\\"token punctuation\\">.</span>Response<span class=\\"token punctuation\\">.</span>Cache<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">SetExpires</span><span class=\\"token punctuation\\">(</span>DateTime<span class=\\"token punctuation\\">.</span>UtcNow<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">AddDays</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        filterContext<span class=\\"token punctuation\\">.</span>HttpContext<span class=\\"token punctuation\\">.</span>Response<span class=\\"token punctuation\\">.</span>Cache<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">SetValidUntilExpires</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        filterContext<span class=\\"token punctuation\\">.</span>HttpContext<span class=\\"token punctuation\\">.</span>Response<span class=\\"token punctuation\\">.</span>Cache<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">SetRevalidation</span><span class=\\"token punctuation\\">(</span>HttpCacheRevalidation<span class=\\"token punctuation\\">.</span>AllCaches<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        filterContext<span class=\\"token punctuation\\">.</span>HttpContext<span class=\\"token punctuation\\">.</span>Response<span class=\\"token punctuation\\">.</span>Cache<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">SetCacheability</span><span class=\\"token punctuation\\">(</span>HttpCacheability<span class=\\"token punctuation\\">.</span>NoCache<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        filterContext<span class=\\"token punctuation\\">.</span>HttpContext<span class=\\"token punctuation\\">.</span>Response<span class=\\"token punctuation\\">.</span>Cache<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">SetNoStore</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token keyword\\">base</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">OnResultExecuting</span><span class=\\"token punctuation\\">(</span>filterContext<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre></div>","autoDesc":true}');export{b as comp,C as data};