import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as t}from"./app-BQsqMNmR.js";const n={};function l(h,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>PaddleOCRSharp 是一个基于百度飞桨<a href="https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fpaddlepaddle%2FPaddleOCR" target="_blank" rel="noopener noreferrer">PaddleOCR</a>的.NET版本OCR工具类库。项目核心组件PaddleOCR.dll,由C++编写，根据百度飞桨<a href="https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fpaddlepaddle%2FPaddleOCR" target="_blank" rel="noopener noreferrer">PaddleOCR</a>的C++代码修改并优化而成。目前已经支持C++、.NET、Python、Golang、Rust等开发语言的直接API接口调用。项目包含文本识别、文本检测、表格识别功能。本项目针对小图识别不准的情况下做了优化，比飞桨原代码识别准确率有所提高。包含总模型仅8.6M的超轻量级中文OCR，单模型支持中英文数字组合识别、竖排文本识别、长文本识别。同时支持中英文、纯英文以及多种语言文本检测识别。</p><p>仓库地址：<a href="https://gitee.com/raoyutian/paddle-ocrsharp" target="_blank" rel="noopener noreferrer">https://gitee.com/raoyutian/paddle-ocrsharp</a></p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>引用组件</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ItemGroup</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">	&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">PackageReference</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Include</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;PaddleOCRSharp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> Version</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;3.1.0&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ItemGroup</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="识别图片内容" tabindex="-1"><a class="header-anchor" href="#识别图片内容"><span>识别图片内容</span></a></h3><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;D:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">temp</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">222.png&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> imagebyte</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> File</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ReadAllBytes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Bitmap</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> bitmap</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new(new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">MemoryStream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">imagebyte</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> engine</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">PaddleOCREngine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">OCRParameter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ocrResult</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> engine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">DetectText</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">bitmap</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ocrResult</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        Console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WriteLine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">ocrResult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>身份证和车牌识别：<a href="https://bbs.huaweicloud.com/blogs/388075" target="_blank" rel="noopener noreferrer">https://bbs.huaweicloud.com/blogs/388075</a></p>`,10)]))}const d=s(n,[["render",l],["__file","paddleocrsharp.html.vue"]]),k=JSON.parse('{"path":"/middleware/images/ocr/paddleocrsharp.html","title":"PaddleOCRSharp","lang":"zh-CN","frontmatter":{"title":"PaddleOCRSharp","lang":"zh-CN","date":"2023-08-11T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"paddleocrsharp","slug":"wyi6i1","docsId":"69573763","description":"概述 PaddleOCRSharp 是一个基于百度飞桨PaddleOCR的.NET版本OCR工具类库。项目核心组件PaddleOCR.dll,由C++编写，根据百度飞桨PaddleOCR的C++代码修改并优化而成。目前已经支持C++、.NET、Python、Golang、Rust等开发语言的直接API接口调用。项目包含文本识别、文本检测、表格识别功能。...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/images/ocr/paddleocrsharp.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"PaddleOCRSharp"}],["meta",{"property":"og:description","content":"概述 PaddleOCRSharp 是一个基于百度飞桨PaddleOCR的.NET版本OCR工具类库。项目核心组件PaddleOCR.dll,由C++编写，根据百度飞桨PaddleOCR的C++代码修改并优化而成。目前已经支持C++、.NET、Python、Golang、Rust等开发语言的直接API接口调用。项目包含文本识别、文本检测、表格识别功能。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-06T14:55:51.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-08-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-06T14:55:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PaddleOCRSharp\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-11T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-06T14:55:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"识别图片内容","slug":"识别图片内容","link":"#识别图片内容","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1736175351000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":1.03,"words":310},"filePathRelative":"middleware/images/ocr/paddleocrsharp.md","localizedDate":"2023年8月11日","excerpt":"<h2>概述</h2>\\n<p>PaddleOCRSharp 是一个基于百度飞桨<a href=\\"https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fpaddlepaddle%2FPaddleOCR\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PaddleOCR</a>的.NET版本OCR工具类库。项目核心组件PaddleOCR.dll,由C++编写，根据百度飞桨<a href=\\"https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fpaddlepaddle%2FPaddleOCR\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PaddleOCR</a>的C++代码修改并优化而成。目前已经支持C++、.NET、Python、Golang、Rust等开发语言的直接API接口调用。项目包含文本识别、文本检测、表格识别功能。本项目针对小图识别不准的情况下做了优化，比飞桨原代码识别准确率有所提高。包含总模型仅8.6M的超轻量级中文OCR，单模型支持中英文数字组合识别、竖排文本识别、长文本识别。同时支持中英文、纯英文以及多种语言文本检测识别。</p>","autoDesc":true}');export{d as comp,k as data};