import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c,a as n,b as s,d as o,e as l}from"./app-vSdX8vi3.js";const i={},u=l(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>逆变和协变的表现形式 逆变(in): I&lt;子类&gt; = I&lt;父类&gt; 协变(out): I&lt;父类&gt; = I&lt;子类&gt;</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="协变" tabindex="-1"><a class="header-anchor" href="#协变"><span>协变</span></a></h3><p>不能使用的示例</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name">IFace<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Face<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IFace<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token class-name">T</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Face<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IFace<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token class-name">T</span> input<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> input<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 <code>Face&lt;string&gt;</code> 实现的是 <code>IFace&lt;string&gt;</code>, 而 <code>IFace&lt;string&gt;</code> 并不是 <code>IFace&lt;object&gt;</code> 的子类，那么下面的代码为啥可以正常</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name">IEnumerable<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> objects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看IEnumerable的代码</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IEnumerable<span class="token punctuation">&lt;</span><span class="token keyword">out</span> T<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEnumerable</span></span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name">IEnumerator<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">GetEnumerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>泛型 T 之前加了<strong>协变</strong>的关键词 out, 代表支持协变。</p><h3 id="逆变" tabindex="-1"><a class="header-anchor" href="#逆变"><span>逆变</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IFace2<span class="token punctuation">&lt;</span><span class="token keyword">in</span> T<span class="token punctuation">&gt;</span></span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token class-name">T</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Face2<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IFace2<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token class-name">T</span> input<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> input<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">IFace2<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Face2<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要在泛型 T 之前加上关键词 in对比上方的协变, 逆变看起来就像是将基类赋值给子类, 但这其实符合里氏代换的 当我们调用 item.Print 时, 看起来允许传入的参数为 string 类型, 而实际上最终调用的 <code>Face&lt;object&gt;.Print</code> 是支持 object 的, 传入 string 类型的参数没有任何问题</p><h2 id="限制" tabindex="-1"><a class="header-anchor" href="#限制"><span>限制</span></a></h2><p>那我什么时候可以用逆变, 什么时候可以用协变, 这两个东西用起来有什么限制? A: 简单来说, 有关泛型输入的用逆变, 关键词是in, 有关泛型输出的用协变, 关键词是out, 如果接口中既有输入又有输出, 就不能用逆变协变 Q: 为什么这两个不能同时存在? A: 协变的表现形式为将子类赋值给基类, 当进行输出相关操作时, 输出的对象类型为基类, 是将子类转为基类, 你可以说子类是基类; 逆变的表现形式为将基类赋值给子类, 当进行输入相关操作时, 输入的对象为子类, 是将子类转为基类, 这个时候你也可以说基类是子类; 如果同时支持逆变协变, 若先进行子类赋值给基类的操作, 此时输出的是基类, 子类转为基类并不会有什么问题, 但进行输入操作时就是在将基类转为子类, 此时是无法保证类型安全的; Q: 听不懂, 能不能举个例子给我? A: 假设 IEnumerable&lt;&gt; 同时支持逆变协变, <code>IEnumerable&lt;object&gt; list = new List&lt;string&gt;();</code>进行赋值后, list中实际保存的类型是string, item.First()的输出类型为object, 实际类型是string, 此时说string是object没有任何问题, 协变可以正常发挥作用; 但是如果支持了逆变, 假设我们进行输入类型的操作, item.Add() 允许的参数类型为 object, 可以是任意类型, 但是实际上支持string类型, 此时的object绝无可能是string Q: 好像听懂了一点了, 我以后慢慢琢磨吧</p><p>简单总结就是 输入的用逆变 输出的用协变</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,18),r={href:"https://www.cnblogs.com/babyb/p/17286595.html",target:"_blank",rel:"noopener noreferrer"};function k(d,m){const a=e("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("a",r,[s("https://www.cnblogs.com/babyb/p/17286595.html"),o(a)]),s(" | C#泛型的逆变协变之个人理解")])])}const v=t(i,[["render",k],["__file","nibianxiebian.html.vue"]]),h=JSON.parse('{"path":"/dotnet/csharp/duixiangheleixing/nibianxiebian.html","title":"逆变协变","lang":"zh-CN","frontmatter":{"title":"逆变协变","lang":"zh-CN","date":"2023-10-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["csharp"],"tag":["无"],"filename":"nibianxiebian","slug":"tyiw0wqi8dg84b01","docsId":"133834502","description":"概述 逆变和协变的表现形式 逆变(in): I<子类> = I<父类> 协变(out): I<父类> = I<子类> 操作 协变 不能使用的示例 因为 Face<string> 实现的是 IFace<string>, 而 IFace<string> 并不是 IFace<object> 的子类，那么下面的代码为啥可以正常 查看IEnumerable的代码...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/csharp/duixiangheleixing/nibianxiebian.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"逆变协变"}],["meta",{"property":"og:description","content":"概述 逆变和协变的表现形式 逆变(in): I<子类> = I<父类> 协变(out): I<父类> = I<子类> 操作 协变 不能使用的示例 因为 Face<string> 实现的是 IFace<string>, 而 IFace<string> 并不是 IFace<object> 的子类，那么下面的代码为啥可以正常 查看IEnumerable的代码..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T15:44:14.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T15:44:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"逆变协变\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-17T15:44:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"协变","slug":"协变","link":"#协变","children":[]},{"level":3,"title":"逆变","slug":"逆变","link":"#逆变","children":[]}]},{"level":2,"title":"限制","slug":"限制","link":"#限制","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1700232644000,"updatedTime":1700235854000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":2.64,"words":793},"filePathRelative":"dotnet/csharp/duixiangheleixing/nibianxiebian.md","localizedDate":"2023年10月22日","excerpt":"<h2>概述</h2>\\n<p>逆变和协变的表现形式\\n逆变(in): I&lt;子类&gt; = I&lt;父类&gt;\\n协变(out): I&lt;父类&gt; = I&lt;子类&gt;</p>\\n<h2>操作</h2>\\n<h3>协变</h3>\\n<p>不能使用的示例</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token class-name\\">IFace<span class=\\"token punctuation\\">&lt;</span><span class=\\"token keyword\\">object</span><span class=\\"token punctuation\\">&gt;</span></span> item <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">Face<span class=\\"token punctuation\\">&lt;</span><span class=\\"token keyword\\">string</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">IFace<span class=\\"token punctuation\\">&lt;</span>T<span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token return-type class-name\\"><span class=\\"token keyword\\">string</span></span> <span class=\\"token function\\">Print</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">T</span> input<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Face<span class=\\"token punctuation\\">&lt;</span>T<span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token punctuation\\">:</span> <span class=\\"token type-list\\"><span class=\\"token class-name\\">IFace<span class=\\"token punctuation\\">&lt;</span>T<span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token return-type class-name\\"><span class=\\"token keyword\\">string</span></span> <span class=\\"token function\\">Print</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">T</span> input<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> input<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ToString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{v as comp,h as data};