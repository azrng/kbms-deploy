import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c,a as n,d as a,e as t,b as l}from"./app-DMmdIwn0.js";const i={},r=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍"},[n("span",null,"介绍")])],-1),u={href:"https://html-agility-pack.net/documentation",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/zzzprojects/html-agility-pack",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><ul><li>将HTML字符串转HTML，然后取值或者循环HTML结构</li></ul><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>安装nuget包</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">PackageReference</span> Include<span class="token operator">=</span><span class="token string">&quot;HtmlAgilityPack&quot;</span> Version<span class="token operator">=</span><span class="token string">&quot;1.11.43&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="解析html字符串并循环结构" tabindex="-1"><a class="header-anchor" href="#解析html字符串并循环结构"><span>解析HTML字符串并循环结构</span></a></h3><p>将html字符串转为HtmlDocument结构，然后读取里面的body元素，修改body元素，然后保存最后结果为HTML字符串。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> htmlStr <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">ReadAllText</span><span class="token punctuation">(</span><span class="token string">&quot;html.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> htmlDoc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HtmlDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
htmlDoc<span class="token punctuation">.</span><span class="token function">LoadHtml</span><span class="token punctuation">(</span>htmlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> htmlbody <span class="token operator">=</span> htmlDoc<span class="token punctuation">.</span>DocumentNode<span class="token punctuation">.</span><span class="token function">SelectSingleNode</span><span class="token punctuation">(</span><span class="token string">&quot;//body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> node <span class="token keyword">in</span> htmlbody<span class="token punctuation">.</span>ChildNodes<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>NodeType <span class="token operator">==</span> HtmlNodeType<span class="token punctuation">.</span>Element<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>OuterHtml<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name"><span class="token keyword">var</span></span> resultStr <span class="token operator">=</span> htmlDoc<span class="token punctuation">.</span>ParsedText<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取文本值" tabindex="-1"><a class="header-anchor" href="#获取文本值"><span>获取文本值</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> htmlDoc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HtmlDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
htmlDoc<span class="token punctuation">.</span><span class="token function">LoadHtml</span><span class="token punctuation">(</span>htmlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> htmlDoc<span class="token punctuation">.</span>DocumentNode<span class="token punctuation">.</span>InnerText<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token string">&quot;\\t&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token keyword">string</span><span class="token punctuation">.</span>Empty<span class="token punctuation">;</span> <span class="token comment">//清除HTML标签</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,11),m={href:"https://mp.weixin.qq.com/s/l3VX5WuNNRZ4UG9McwTSQg",target:"_blank",rel:"noopener noreferrer"};function h(g,v){const s=o("ExternalLinkIcon");return p(),c("div",null,[r,n("p",null,[a("这是一个敏捷的HTML解析器，它构建一个读/写DOM，并支持普通的XPATH或XSLT的.Net代码库，允许解析web地址之外的HTML文件，解析器对畸形HTML非常宽容。 文档地址："),n("a",u,[a("https://html-agility-pack.net/documentation"),t(s)]),a(" GitHub仓库地址："),n("a",d,[a("https://github.com/zzzprojects/html-agility-pack"),t(s)])]),k,n("p",null,[n("a",m,[a("https://mp.weixin.qq.com/s/l3VX5WuNNRZ4UG9McwTSQg"),t(s)]),a(" | 聊一聊.NET的网页抓取和编码转换")])])}const f=e(i,[["render",h],["__file","htmlagilitypack.html.vue"]]),T=JSON.parse('{"path":"/middleware/office/htmlagilitypack.html","title":"HtmlAgilityPack","lang":"zh-CN","frontmatter":{"title":"HtmlAgilityPack","lang":"zh-CN","date":"2023-08-06T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"htmlagilitypack","slug":"outgqv","docsId":"83255501","description":"介绍 这是一个敏捷的HTML解析器，它构建一个读/写DOM，并支持普通的XPATH或XSLT的.Net代码库，允许解析web地址之外的HTML文件，解析器对畸形HTML非常宽容。 文档地址：https://html-agility-pack.net/documentation GitHub仓库地址：https://github.com/zzzproje...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/office/htmlagilitypack.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"HtmlAgilityPack"}],["meta",{"property":"og:description","content":"介绍 这是一个敏捷的HTML解析器，它构建一个读/写DOM，并支持普通的XPATH或XSLT的.Net代码库，允许解析web地址之外的HTML文件，解析器对畸形HTML非常宽容。 文档地址：https://html-agility-pack.net/documentation GitHub仓库地址：https://github.com/zzzproje..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T14:00:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-08-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T14:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HtmlAgilityPack\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T14:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"解析HTML字符串并循环结构","slug":"解析html字符串并循环结构","link":"#解析html字符串并循环结构","children":[]},{"level":3,"title":"获取文本值","slug":"获取文本值","link":"#获取文本值","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1697724028000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.9,"words":270},"filePathRelative":"middleware/office/htmlagilitypack.md","localizedDate":"2023年8月6日","excerpt":"<h2>介绍</h2>\\n<p>这是一个敏捷的HTML解析器，它构建一个读/写DOM，并支持普通的XPATH或XSLT的.Net代码库，允许解析web地址之外的HTML文件，解析器对畸形HTML非常宽容。\\n文档地址：<a href=\\"https://html-agility-pack.net/documentation\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://html-agility-pack.net/documentation</a>\\nGitHub仓库地址：<a href=\\"https://github.com/zzzprojects/html-agility-pack\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/zzzprojects/html-agility-pack</a></p>","autoDesc":true}');export{f as comp,T as data};