import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-DMmdIwn0.js";const p={},o=t(`<p>简单来说，就是在查询数据时，预先编译好查询语句，便于在请求数据时能够立即响应。 EF Core 本身使用了查询表达式的散列，来实现自动编译和缓存查询，当我们的代码需要重用以前执行的查询时，EF Core 会使用散列查找，从缓存中返回已编译的查询语句。 但有时候我们可能更希望直接使用编译结果查询，绕过散列计算和缓存查找。 显式编译查询就为我们提供了进一步提高查询性能的可能。 比如我们通过主键查询 Blog，同时使用贪婪加载文章的集合列表，代码如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BloggingContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> blog <span class="token operator">=</span> context<span class="token punctuation">.</span>Blogs
    <span class="token punctuation">.</span><span class="token function">AsNoTracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>Posts<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当进行查询时，此时要经过编译翻译阶段，最终返回实际结果。 在实际应用中，我们一般会将查询封装为方法来使用，这样就无法优化结果和查询方式。 那么，我们就能够通过编译查询来提前保存好编译结果，以达到缓存的效果。 通过 EF 静态类中的 CompileQuery 扩展方法，可以实现编译查询，我们这里改造一下刚才的查询示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> query <span class="token operator">=</span> EF<span class="token punctuation">.</span><span class="token function">CompileAsyncQuery</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token class-name">BloggingContext</span> bloggingContext<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> id<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
       bloggingContext<span class="token punctuation">.</span>Blogs
       <span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>Posts<span class="token punctuation">)</span>
       <span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>Id <span class="token operator">==</span> id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> blog1 <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Result<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后，我们再来测试一下常规查询和显式编译查询的性能。 为了更好的演示，接下来的示例，使用 EF Core 提供的内存库来测试。 因为真实的数据库会进行查询计划优化和缓存，而使用内存数据库就可以避免这些干扰。 首先，测试常规查询，查询一百万次：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BloggingContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 常规查询</span>
<span class="token class-name">Func<span class="token punctuation">&lt;</span>BloggingContext<span class="token punctuation">,</span> Blog<span class="token punctuation">&gt;</span></span> unCompileQuery <span class="token operator">=</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> context<span class="token punctuation">.</span>Blogs<span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>Posts<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>o <span class="token operator">=&gt;</span> o<span class="token punctuation">.</span>Id<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> stopWatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Stopwatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stopWatch<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1_000_000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token class-name"><span class="token keyword">var</span></span> blog <span class="token operator">=</span> <span class="token function">unCompileQuery</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
stopWatch<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;常规查询:&quot;</span> <span class="token operator">+</span> stopWatch<span class="token punctuation">.</span>Elapsed<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行程序，可以看到常规查询是 18 秒左右：</p><p>接下来，我们再来看看显式编译查询：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BloggingContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 编译查询</span>
<span class="token class-name">Func<span class="token punctuation">&lt;</span>BloggingContext<span class="token punctuation">,</span> Blog<span class="token punctuation">&gt;</span></span> compileQuery <span class="token operator">=</span> 
  EF<span class="token punctuation">.</span><span class="token function">CompileQuery</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">BloggingContext</span> context<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    context<span class="token punctuation">.</span>Blogs<span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>Posts<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>o <span class="token operator">=&gt;</span> o<span class="token punctuation">.</span>Id<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> stopWatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Stopwatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stopWatch<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1_000_000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token class-name"><span class="token keyword">var</span></span> blog <span class="token operator">=</span> <span class="token function">compileQuery</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
stopWatch<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;编译查询:&quot;</span> <span class="token operator">+</span> stopWatch<span class="token punctuation">.</span>Elapsed<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行程序，可以看到显式编译查询只有 3 秒左右。后续又测试了不同基数的情况。</p><p>总结：只有当查询基数足够大时，我们才可以使用编译查询来优化性能。</p>`,11),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","xianshibianyichaxun.html.vue"]]),d=JSON.parse('{"path":"/orm/efcore/jinjie/xianshibianyichaxun.html","title":"显式编译查询","lang":"zh-CN","frontmatter":{"title":"显式编译查询","lang":"zh-CN","date":"2022-05-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["orm"],"tag":["无"],"filename":"xianshibianyichaxun","slug":"vsuk47","docsId":"78202802","description":"简单来说，就是在查询数据时，预先编译好查询语句，便于在请求数据时能够立即响应。 EF Core 本身使用了查询表达式的散列，来实现自动编译和缓存查询，当我们的代码需要重用以前执行的查询时，EF Core 会使用散列查找，从缓存中返回已编译的查询语句。 但有时候我们可能更希望直接使用编译结果查询，绕过散列计算和缓存查找。 显式编译查询就为我们提供了进一步...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/orm/efcore/jinjie/xianshibianyichaxun.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"显式编译查询"}],["meta",{"property":"og:description","content":"简单来说，就是在查询数据时，预先编译好查询语句，便于在请求数据时能够立即响应。 EF Core 本身使用了查询表达式的散列，来实现自动编译和缓存查询，当我们的代码需要重用以前执行的查询时，EF Core 会使用散列查找，从缓存中返回已编译的查询语句。 但有时候我们可能更希望直接使用编译结果查询，绕过散列计算和缓存查找。 显式编译查询就为我们提供了进一步..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-22T16:22:17.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-05-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-22T16:22:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"显式编译查询\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-22T16:22:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1690042937000,"updatedTime":1690042937000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.26,"words":677},"filePathRelative":"orm/efcore/jinjie/xianshibianyichaxun.md","localizedDate":"2022年5月22日","excerpt":"<p>简单来说，就是在查询数据时，预先编译好查询语句，便于在请求数据时能够立即响应。\\nEF Core 本身使用了查询表达式的散列，来实现自动编译和缓存查询，当我们的代码需要重用以前执行的查询时，EF Core 会使用散列查找，从缓存中返回已编译的查询语句。\\n但有时候我们可能更希望直接使用编译结果查询，绕过散列计算和缓存查找。\\n显式编译查询就为我们提供了进一步提高查询性能的可能。\\n比如我们通过主键查询 Blog，同时使用贪婪加载文章的集合列表，代码如下：</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token keyword\\">using</span> <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> context <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">BloggingContext</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> blog <span class=\\"token operator\\">=</span> context<span class=\\"token punctuation\\">.</span>Blogs\\n    <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">AsNoTracking</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Include</span><span class=\\"token punctuation\\">(</span>c <span class=\\"token operator\\">=&gt;</span> c<span class=\\"token punctuation\\">.</span>Posts<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">FirstOrDefault</span><span class=\\"token punctuation\\">(</span>c <span class=\\"token operator\\">=&gt;</span> c<span class=\\"token punctuation\\">.</span>Id <span class=\\"token operator\\">==</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};