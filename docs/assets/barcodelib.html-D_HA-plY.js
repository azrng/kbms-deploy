import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as t,o as l}from"./app-fQkBsvt-.js";const n={};function e(h,i){return l(),a("div",null,i[0]||(i[0]=[t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>该库旨在为开发人员提供一个简单的类，以便在需要从数据字符串生成条形码图像时使用。<br> Github：<a href="https://github.com/barnhill/barcodelib" target="_blank" rel="noopener noreferrer">https://github.com/barnhill/barcodelib</a><br> 缺点：依赖System.Drawing.Common，不支持跨平台</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>引用组件</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">PackageReference</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Include</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;BarcodeLib&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Version</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2.4.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="条形码" tabindex="-1"><a class="header-anchor" href="#条形码"><span>条形码</span></a></h3><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/// 使用BarcodeLib生成条形码</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#986801;--shiki-light-font-style:italic;--shiki-dark:#D19A66;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">=</span><span style="--shiki-light:#50A14F;--shiki-light-font-style:italic;--shiki-dark:#98C379;--shiki-dark-font-style:italic;">&quot;barCode&quot;</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">内容</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">returns</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">returns</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Image</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> GenerateBarCodeByBarcodeLib</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> barCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Barcode</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> barcode</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Barcode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        IncludeLabel</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//是否包含图片下面的文字信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        Alignment</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> AlignmentPositions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">CENTER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//一维码在图片居中</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        Width</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 250</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        Height</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        RotateFlipType</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> RotateFlipType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">RotateNoneFlipNone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//图像反转</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        BackColor</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">White</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//背景色</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        ForeColor</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Black</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//前景色</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> barcode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Encode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">TYPE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">EAN13</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">barCode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const p=s(n,[["render",e],["__file","barcodelib.html.vue"]]),d=JSON.parse('{"path":"/middleware/images/barcodelib.html","title":"条形码BarcodeLib","lang":"zh-CN","frontmatter":{"title":"条形码BarcodeLib","lang":"zh-CN","date":"2022-05-08T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"tiaoxingmabarcodelib","slug":"mkucfo","docsId":"68056806","description":"概述 该库旨在为开发人员提供一个简单的类，以便在需要从数据字符串生成条形码图像时使用。 Github：https://github.com/barnhill/barcodelib 缺点：依赖System.Drawing.Common，不支持跨平台 操作 引用组件 条形码","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/images/barcodelib.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"条形码BarcodeLib"}],["meta",{"property":"og:description","content":"概述 该库旨在为开发人员提供一个简单的类，以便在需要从数据字符串生成条形码图像时使用。 Github：https://github.com/barnhill/barcodelib 缺点：依赖System.Drawing.Common，不支持跨平台 操作 引用组件 条形码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-06T14:55:51.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-05-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-06T14:55:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"条形码BarcodeLib\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-08T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-06T14:55:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"条形码","slug":"条形码","link":"#条形码","children":[]}]}],"git":{"createdTime":1697724028000,"updatedTime":1736175351000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":0.63,"words":188},"filePathRelative":"middleware/images/barcodelib.md","localizedDate":"2022年5月8日","excerpt":"<h2>概述</h2>\\n<p>该库旨在为开发人员提供一个简单的类，以便在需要从数据字符串生成条形码图像时使用。<br>\\nGithub：<a href=\\"https://github.com/barnhill/barcodelib\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/barnhill/barcodelib</a><br>\\n缺点：依赖System.Drawing.Common，不支持跨平台</p>\\n<h2>操作</h2>\\n<p>引用组件</p>\\n<div class=\\"language-csharp line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"csharp\\" data-title=\\"csharp\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&lt;</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">PackageReference</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> Include</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"BarcodeLib\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> Version</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"2.4.0\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> /&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{p as comp,d as data};