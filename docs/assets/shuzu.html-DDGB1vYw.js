import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-DMmdIwn0.js";const p={},e=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><h2 id="常见操作" tabindex="-1"><a class="header-anchor" href="#常见操作"><span>常见操作</span></a></h2><h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作"><span>基本操作</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 创建数组</span>
<span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> pallets <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;B14&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A11&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B12&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A13&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 数组排序</span>
Array<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>pallets<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//数组反转</span>
Array<span class="token punctuation">.</span><span class="token function">Reverse</span><span class="token punctuation">(</span>pallets<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//清理数组的项(从索引0开始清理1个元素)</span>
Array<span class="token punctuation">.</span><span class="token function">Clear</span><span class="token punctuation">(</span>pallets<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//清理全部 </span>
<span class="token comment">//Array.Clear(pallets);</span>

<span class="token comment">//调整数组大小来赋值更多元素  也可以用来删除元素</span>
Array<span class="token punctuation">.</span><span class="token function">Resize</span><span class="token punctuation">(</span><span class="token keyword">ref</span> pallets<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pallets<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;测试&quot;</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>pallets<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 测试</span>

<span class="token comment">//反向编码字符串</span>
<span class="token class-name"><span class="token keyword">var</span></span> <span class="token keyword">value</span> <span class="token operator">=</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> valueArray <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">.</span><span class="token function">ToCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//join 将数组连接成字符串</span>
<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> valueArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//a b c 1 2 3</span>

<span class="token comment">// split 将字符串拆分为字符串数据</span>
<span class="token class-name"><span class="token keyword">var</span></span> arrStr <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> str <span class="token operator">=</span> english<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>separator<span class="token punctuation">,</span> StringSplitOptions<span class="token punctuation">.</span>RemoveEmptyEntries<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//去掉空字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并数组" tabindex="-1"><a class="header-anchor" href="#合并数组"><span>合并数组</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> num1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> num2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//更改其中一个数组长度</span>
<span class="token class-name"><span class="token keyword">var</span></span> num1OriginalLength <span class="token operator">=</span> num1<span class="token punctuation">.</span>Length<span class="token punctuation">;</span>
Array<span class="token punctuation">.</span><span class="token function">Resize</span><span class="token punctuation">(</span><span class="token keyword">ref</span> num1<span class="token punctuation">,</span> num1<span class="token punctuation">.</span>Length <span class="token operator">+</span> num2<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">;</span>
Array<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span>num2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> num1<span class="token punctuation">,</span> num1OriginalLength<span class="token punctuation">,</span> num2<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//num1 1,2,3,4</span>


<span class="token comment">//创建新数组</span>
<span class="token class-name"><span class="token keyword">var</span></span> newNum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>num1<span class="token punctuation">.</span>Length <span class="token operator">+</span> num2<span class="token punctuation">.</span>Length<span class="token punctuation">]</span><span class="token punctuation">;</span>
Array<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> newNum<span class="token punctuation">,</span> num1<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">;</span>
Array<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span>num2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> newNum<span class="token punctuation">,</span> num1<span class="token punctuation">.</span>Length<span class="token punctuation">,</span> num2<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// newNum 1,2,3,4</span>

<span class="token comment">//concat合并数组</span>
<span class="token class-name"><span class="token keyword">var</span></span> num4 <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">Concat</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 1,2,3,4</span>

<span class="token comment">//union连接数组</span>
<span class="token class-name"><span class="token keyword">var</span></span> num5 <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">Union</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 1,2,3,4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组拷贝" tabindex="-1"><a class="header-anchor" href="#数组拷贝"><span>数组拷贝</span></a></h2><p>性能从低到高 for循环拷贝</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">CopyByFor</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> start<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> length<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name"><span class="token keyword">var</span></span> rawPacketData <span class="token operator">=</span> TestData<span class="token punctuation">;</span>

	<span class="token class-name"><span class="token keyword">var</span></span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> localIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> rawArrayIndex <span class="token operator">=</span> start<span class="token punctuation">;</span> localIndex <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>Length<span class="token punctuation">;</span> localIndex<span class="token operator">++</span><span class="token punctuation">,</span> rawArrayIndex<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		data<span class="token punctuation">[</span>localIndex<span class="token punctuation">]</span> <span class="token operator">=</span> rawPacketData<span class="token punctuation">[</span>rawArrayIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Array.Copy</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">CopyByArray</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> start<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> length<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name"><span class="token keyword">var</span></span> rawPacketData <span class="token operator">=</span> TestData<span class="token punctuation">;</span>
	<span class="token class-name"><span class="token keyword">var</span></span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
	Array<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span>rawPacketData<span class="token punctuation">,</span>start<span class="token punctuation">,</span>data<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Span 进行拷贝</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">CopyBySpan</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> start<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> length<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name"><span class="token keyword">var</span></span> rawPacketData <span class="token operator">=</span> TestData<span class="token punctuation">;</span>
	<span class="token class-name"><span class="token keyword">var</span></span> rawArrayStartIndex <span class="token operator">=</span> start<span class="token punctuation">;</span>
	<span class="token class-name"><span class="token keyword">var</span></span> data <span class="token operator">=</span> rawPacketData<span class="token punctuation">.</span><span class="token function">AsSpan</span><span class="token punctuation">(</span>rawArrayStartIndex<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","shuzu.html.vue"]]),d=JSON.parse('{"path":"/dotnet/csharp/jigecaozuo/shuzu.html","title":"数组","lang":"zh-CN","frontmatter":{"title":"数组","lang":"zh-CN","date":"2023-10-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["csharp"],"tag":["无"],"filename":"shuzu","slug":"apznnk","docsId":"47648050","description":"概述 常见操作 基本操作 合并数组 数组拷贝 性能从低到高 for循环拷贝 Array.Copy Span 进行拷贝","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/csharp/jigecaozuo/shuzu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"数组"}],["meta",{"property":"og:description","content":"概述 常见操作 基本操作 合并数组 数组拷贝 性能从低到高 for循环拷贝 Array.Copy Span 进行拷贝"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T14:50:44.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T14:50:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数组\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-17T14:50:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"常见操作","slug":"常见操作","link":"#常见操作","children":[{"level":3,"title":"基本操作","slug":"基本操作","link":"#基本操作","children":[]},{"level":3,"title":"合并数组","slug":"合并数组","link":"#合并数组","children":[]}]},{"level":2,"title":"数组拷贝","slug":"数组拷贝","link":"#数组拷贝","children":[]}],"git":{"createdTime":1700232644000,"updatedTime":1700232644000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.32,"words":396},"filePathRelative":"dotnet/csharp/jigecaozuo/shuzu.md","localizedDate":"2023年10月22日","excerpt":"<h2>概述</h2>\\n<h2>常见操作</h2>\\n<h3>基本操作</h3>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token comment\\">// 创建数组</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span></span> pallets <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token string\\">\\"B14\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"A11\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"B12\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"A13\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 数组排序</span>\\nArray<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Sort</span><span class=\\"token punctuation\\">(</span>pallets<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">//数组反转</span>\\nArray<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Reverse</span><span class=\\"token punctuation\\">(</span>pallets<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">//清理数组的项(从索引0开始清理1个元素)</span>\\nArray<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Clear</span><span class=\\"token punctuation\\">(</span>pallets<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//清理全部 </span>\\n<span class=\\"token comment\\">//Array.Clear(pallets);</span>\\n\\n<span class=\\"token comment\\">//调整数组大小来赋值更多元素  也可以用来删除元素</span>\\nArray<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Resize</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">ref</span> pallets<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\npallets<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"测试\\"</span><span class=\\"token punctuation\\">;</span>\\nConsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span>pallets<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 测试</span>\\n\\n<span class=\\"token comment\\">//反向编码字符串</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> <span class=\\"token keyword\\">value</span> <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"abc123\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span></span> valueArray <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">value</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ToCharArray</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">//join 将数组连接成字符串</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> result <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">string</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Join</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\" \\"</span><span class=\\"token punctuation\\">,</span> valueArray<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nConsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span>result<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//a b c 1 2 3</span>\\n\\n<span class=\\"token comment\\">// split 将字符串拆分为字符串数据</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> arrStr <span class=\\"token operator\\">=</span> result<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Split</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\" \\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n <span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span></span> str <span class=\\"token operator\\">=</span> english<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Split</span><span class=\\"token punctuation\\">(</span>separator<span class=\\"token punctuation\\">,</span> StringSplitOptions<span class=\\"token punctuation\\">.</span>RemoveEmptyEntries<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//去掉空字符串</span>\\n</code></pre></div>","autoDesc":true}');export{r as comp,d as data};