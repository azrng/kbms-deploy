import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as r,a as n,d as a,e as t,b as c}from"./app-DMmdIwn0.js";const i={},l=n("h2",{id:"概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#概述"},[n("span",null,"概述")])],-1),d={href:"https://ironpdf.com/",target:"_blank",rel:"noopener noreferrer"},u=c(`<p>最近更新：2023.06.10 下载量：6.28(2023年6月24日)</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="html转pdf基础操作" tabindex="-1"><a class="header-anchor" href="#html转pdf基础操作"><span>html转pdf基础操作</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 使用IronPDF将HTML字符串转换为PDF</span>
<span class="token class-name"><span class="token keyword">var</span></span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HtmlToPdf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
renderer<span class="token punctuation">.</span>PrintOptions<span class="token punctuation">.</span>MarginTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
renderer<span class="token punctuation">.</span>PrintOptions<span class="token punctuation">.</span>MarginBottom <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
renderer<span class="token punctuation">.</span>PrintOptions<span class="token punctuation">.</span>MarginLeft <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
renderer<span class="token punctuation">.</span>PrintOptions<span class="token punctuation">.</span>MarginRight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> pdf <span class="token operator">=</span> renderer<span class="token punctuation">.</span><span class="token function">RenderHtmlAsPdf</span><span class="token punctuation">(</span>htmlContent<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 保存PDF文件</span>
pdf<span class="token punctuation">.</span><span class="token function">SaveAs</span><span class="token punctuation">(</span><span class="token string">&quot;d://temp//11.pdf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="视频教程" tabindex="-1"><a class="header-anchor" href="#视频教程"><span>视频教程</span></a></h2>`,5),m={href:"https://www.bilibili.com/video/BV1Et421G7gu?spm_id_from=333.1245.0.0",target:"_blank",rel:"noopener noreferrer"};function k(h,f){const s=p("ExternalLinkIcon");return o(),r("div",null,[l,n("p",null,[a("IronPDF帮助c#软件工程师在。net项目中创建、编辑和提取PDF内容。 官网："),n("a",d,[a("https://ironpdf.com/"),t(s)])]),u,n("p",null,[n("a",m,[a("使用 IronPDF 和 Razor 视图在 .NET 中灵活地进行 PDF 报告"),t(s)])])])}const P=e(i,[["render",k],["__file","ironpdf.html.vue"]]),b=JSON.parse('{"path":"/middleware/office/pdf/ironpdf.html","title":"IronPdf","lang":"zh-CN","frontmatter":{"title":"IronPdf","lang":"zh-CN","date":"2023-06-24T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"ironpdf","slug":"ips6dsghdntdopms","docsId":"128415861","description":"概述 IronPDF帮助c#软件工程师在。net项目中创建、编辑和提取PDF内容。 官网：https://ironpdf.com/ 最近更新：2023.06.10 下载量：6.28(2023年6月24日) 操作 html转pdf基础操作 视频教程 使用 IronPDF 和 Razor 视图在 .NET 中灵活地进行 PDF 报告","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/office/pdf/ironpdf.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"IronPdf"}],["meta",{"property":"og:description","content":"概述 IronPDF帮助c#软件工程师在。net项目中创建、编辑和提取PDF内容。 官网：https://ironpdf.com/ 最近更新：2023.06.10 下载量：6.28(2023年6月24日) 操作 html转pdf基础操作 视频教程 使用 IronPDF 和 Razor 视图在 .NET 中灵活地进行 PDF 报告"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-31T02:36:37.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-06-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-31T02:36:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IronPdf\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-31T02:36:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"html转pdf基础操作","slug":"html转pdf基础操作","link":"#html转pdf基础操作","children":[]}]},{"level":2,"title":"视频教程","slug":"视频教程","link":"#视频教程","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1711852597000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":0.49,"words":146},"filePathRelative":"middleware/office/pdf/ironpdf.md","localizedDate":"2023年6月24日","excerpt":"<h2>概述</h2>\\n<p>IronPDF帮助c#软件工程师在。net项目中创建、编辑和提取PDF内容。\\n官网：<a href=\\"https://ironpdf.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://ironpdf.com/</a></p>\\n<p>最近更新：2023.06.10\\n下载量：6.28(2023年6月24日)</p>\\n<h2>操作</h2>\\n<h3>html转pdf基础操作</h3>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token comment\\">// 使用IronPDF将HTML字符串转换为PDF</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> renderer <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">HtmlToPdf</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nrenderer<span class=\\"token punctuation\\">.</span>PrintOptions<span class=\\"token punctuation\\">.</span>MarginTop <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\nrenderer<span class=\\"token punctuation\\">.</span>PrintOptions<span class=\\"token punctuation\\">.</span>MarginBottom <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\nrenderer<span class=\\"token punctuation\\">.</span>PrintOptions<span class=\\"token punctuation\\">.</span>MarginLeft <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\nrenderer<span class=\\"token punctuation\\">.</span>PrintOptions<span class=\\"token punctuation\\">.</span>MarginRight <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> pdf <span class=\\"token operator\\">=</span> renderer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">RenderHtmlAsPdf</span><span class=\\"token punctuation\\">(</span>htmlContent<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 保存PDF文件</span>\\npdf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">SaveAs</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"d://temp//11.pdf\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{P as comp,b as data};