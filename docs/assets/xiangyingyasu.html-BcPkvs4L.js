import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as o,a as n,d as s,e as i,b as c}from"./app-DMmdIwn0.js";const l={},r=c(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>响应压缩技术是目前Web开发领域中比较常用的技术，在带宽资源受限的情况下，使用压缩技术是提升带宽负载的首选方案。我们熟悉的Web服务器，比如IIS、Tomcat、Nginx、Apache等都可以使用压缩技术，常用的压缩类型包括Brotli、Gzip、Deflate，它们对CSS、JavaScript、HTML、XML 和 JSON等类型的效果还是比较明显的，但是也存在一定的限制对于图片效果可能没那么好，因为图片本身就是压缩格式。其次，对于小于大约150-1000 字节的文件（具体取决于文件的内容和压缩的效率，压缩小文件的开销可能会产生比未压缩文件更大的压缩文件。在ASP.NET Core中我们可以使用非常简单的方式来使用响应压缩。</p><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h2><p>在ASP.NET Core中使用响应压缩的方式比较简单。首先，在ConfigureServices中添加services.AddResponseCompression注入响应压缩相关的设置，比如使用的压缩类型、压缩级别、压缩目标类型等。其次，在Configure添加app.UseResponseCompression拦截请求判断是否需要压缩,大致使用方式如下</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Startup</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        services<span class="token punctuation">.</span><span class="token function">AddResponseCompression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">IApplicationBuilder</span> app<span class="token punctuation">,</span> <span class="token class-name">IHostingEnvironment</span> env<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        app<span class="token punctuation">.</span><span class="token function">UseResponseCompression</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要自定义一些配置的话还可以手动设置压缩相关</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    services<span class="token punctuation">.</span><span class="token function">AddResponseCompression</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//可以添加多种压缩类型，程序会根据级别自动获取最优方式</span>
        options<span class="token punctuation">.</span>Providers<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BrotliCompressionProvider<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        options<span class="token punctuation">.</span>Providers<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>GzipCompressionProvider<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//添加自定义压缩策略</span>
        options<span class="token punctuation">.</span>Providers<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyCompressionProvider<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//针对指定的MimeType来使用压缩策略</span>
        options<span class="token punctuation">.</span>MimeTypes <span class="token operator">=</span> 
            ResponseCompressionDefaults<span class="token punctuation">.</span>MimeTypes<span class="token punctuation">.</span><span class="token function">Concat</span><span class="token punctuation">(</span>
                <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;application/json&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//针对不同的压缩类型，设置对应的压缩级别</span>
    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Configure</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>GzipCompressionProviderOptions<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">//使用最快的方式进行压缩，单不一定是压缩效果最好的方式</span>
        options<span class="token punctuation">.</span>Level <span class="token operator">=</span> CompressionLevel<span class="token punctuation">.</span>Fastest<span class="token punctuation">;</span>

        <span class="token comment">//不进行压缩操作</span>
        <span class="token comment">//options.Level = CompressionLevel.NoCompression;</span>

        <span class="token comment">//即使需要耗费很长的时间，也要使用压缩效果最好的方式</span>
        <span class="token comment">//options.Level = CompressionLevel.Optimal;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于响应压缩大致的工作方式就是，当发起Http请求的时候在Request Header中添加Accept-Encoding:gzip或者其他你想要的压缩类型，可以传递多个类型。服务端接收到请求获取Accept-Encoding判断是否支持该种类型的压缩方式，如果支持则压缩输出内容相关并且设置Content-Encoding为当前使用的压缩方式一起返回。客户端得到响应之后获取Content-Encoding判断服务端是否采用了压缩技术，并根据对应的值判断使用了哪种压缩类型，然后使用对应的解压算法得到原始数据。</p><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,9),u={href:"https://mp.weixin.qq.com/s/64QO0R8qxRfYOgsOwav5hw",target:"_blank",rel:"noopener noreferrer"};function d(m,k){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",u,[s("https://mp.weixin.qq.com/s/64QO0R8qxRfYOgsOwav5hw"),i(a)]),s(" | .Net Core HttpClient处理响应压缩")])])}const b=e(l,[["render",d],["__file","xiangyingyasu.html.vue"]]),h=JSON.parse('{"path":"/dotnet/api/controllerApi/xiangyingyasu.html","title":"响应压缩","lang":"zh-CN","frontmatter":{"title":"响应压缩","lang":"zh-CN","date":"2023-10-05T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"xiangyingyasu","slug":"xn6fbr","docsId":"55664542","description":"介绍 响应压缩技术是目前Web开发领域中比较常用的技术，在带宽资源受限的情况下，使用压缩技术是提升带宽负载的首选方案。我们熟悉的Web服务器，比如IIS、Tomcat、Nginx、Apache等都可以使用压缩技术，常用的压缩类型包括Brotli、Gzip、Deflate，它们对CSS、JavaScript、HTML、XML 和 JSON等类型的效果还是...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/api/controllerApi/xiangyingyasu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"响应压缩"}],["meta",{"property":"og:description","content":"介绍 响应压缩技术是目前Web开发领域中比较常用的技术，在带宽资源受限的情况下，使用压缩技术是提升带宽负载的首选方案。我们熟悉的Web服务器，比如IIS、Tomcat、Nginx、Apache等都可以使用压缩技术，常用的压缩类型包括Brotli、Gzip、Deflate，它们对CSS、JavaScript、HTML、XML 和 JSON等类型的效果还是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-25T09:26:24.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-25T09:26:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"响应压缩\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-25T09:26:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1708853184000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.43,"words":729},"filePathRelative":"dotnet/api/controllerApi/xiangyingyasu.md","localizedDate":"2023年10月5日","excerpt":"<h2>介绍</h2>\\n<p>响应压缩技术是目前Web开发领域中比较常用的技术，在带宽资源受限的情况下，使用压缩技术是提升带宽负载的首选方案。我们熟悉的Web服务器，比如IIS、Tomcat、Nginx、Apache等都可以使用压缩技术，常用的压缩类型包括Brotli、Gzip、Deflate，它们对CSS、JavaScript、HTML、XML 和 JSON等类型的效果还是比较明显的，但是也存在一定的限制对于图片效果可能没那么好，因为图片本身就是压缩格式。其次，对于小于大约150-1000 字节的文件（具体取决于文件的内容和压缩的效率，压缩小文件的开销可能会产生比未压缩文件更大的压缩文件。在ASP.NET Core中我们可以使用非常简单的方式来使用响应压缩。</p>","autoDesc":true}');export{b as comp,h as data};