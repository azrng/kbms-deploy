import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as n}from"./app-mrI7cTrN.js";const e={},h=n(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>二维码（QR Code），与传统的一维码，比如条形码，二维码具有存储的数据量更大；可以包含数字、字符，及中文文本等混合内容；有一定的容错性（在部分损坏以后还可以正常读取）；空间利用率高等优点。</p><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h2><p>虽然已经有很多生成二维码的解决方案，但是它们大多依赖System.Drawing，而在Linux下需要考虑System.Drawing的GDI+兼容性问题（需要安装libgdiplus），但是该组件完全不依赖GDI和System.Drawing。</p><p>Linux平台生成二维码无依赖性包 SkiaSharp.NativeAssets.Linux.NoDependencies</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>安装组件</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">PackageReference</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> Include</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;SkiaSharp.QrCode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Version</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;0.4.1&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="生成二维码" tabindex="-1"><a class="header-anchor" href="#生成二维码"><span>生成二维码</span></a></h3><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 二维码内容 如果这里存放的是url，那么微信、支付宝等在扫描后是可以直接跳转打开的</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> content</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;张三&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//创建生成器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> generator</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> QRCodeGenerator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 设置错误校正能力（ECC）级别</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> qr</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> generator</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">CreateQrCode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ECCLevel</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">H</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 创建一个Canvas</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> info</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> SKImageInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">512</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">512</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> surface</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> SKSurface</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Create</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> canvas</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> surface</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 渲染二维码到Canvas</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Render</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">qr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Width</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Height</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 输出到文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> image</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> surface</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Snapshot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> image</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Encode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">SKEncodedImageFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Png</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> stream</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">OpenWrite</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;QRCode.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">SaveTo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成二维码最关键的是ECC级别设置，具体取决于最终图像计划使用的场合，是否容易被污损或遮挡：</p><ul><li>L:最大纠错率7%</li><li>M:最大纠错率15%</li><li>Q:最大纠错率25%</li><li>H:最大纠错率30%</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><p>微信公众号【My IO】：<a href="https://mp.weixin.qq.com/s/RJoG46hVEANPvdGKF-PDkw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/RJoG46hVEANPvdGKF-PDkw</a></p>`,14),t=[h];function l(k,p){return a(),s("div",null,t)}const g=i(e,[["render",l],["__file","duochongmaskiasharp_qrcode.html.vue"]]),c=JSON.parse('{"path":"/middleware/tuxiangchuli/duochongmaskiasharp_qrcode.html","title":"多种码SkiaSharp.QrCode","lang":"zh-CN","frontmatter":{"title":"多种码SkiaSharp.QrCode","lang":"zh-CN","date":"2022-05-08T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"duochongmaskiasharp_qrcode","slug":"xwf9hk","docsId":"63736682","description":"介绍 二维码（QR Code），与传统的一维码，比如条形码，二维码具有存储的数据量更大；可以包含数字、字符，及中文文本等混合内容；有一定的容错性（在部分损坏以后还可以正常读取）；空间利用率高等优点。 优点 虽然已经有很多生成二维码的解决方案，但是它们大多依赖System.Drawing，而在Linux下需要考虑System.Drawing的GDI+兼容...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/tuxiangchuli/duochongmaskiasharp_qrcode.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"多种码SkiaSharp.QrCode"}],["meta",{"property":"og:description","content":"介绍 二维码（QR Code），与传统的一维码，比如条形码，二维码具有存储的数据量更大；可以包含数字、字符，及中文文本等混合内容；有一定的容错性（在部分损坏以后还可以正常读取）；空间利用率高等优点。 优点 虽然已经有很多生成二维码的解决方案，但是它们大多依赖System.Drawing，而在Linux下需要考虑System.Drawing的GDI+兼容..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-03T11:11:45.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-05-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-03T11:11:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多种码SkiaSharp.QrCode\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-03T11:11:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"生成二维码","slug":"生成二维码","link":"#生成二维码","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1699009905000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":2},{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.38,"words":413},"filePathRelative":"middleware/tuxiangchuli/duochongmaskiasharp_qrcode.md","localizedDate":"2022年5月8日","excerpt":"<h2>介绍</h2>\\n<p>二维码（QR Code），与传统的一维码，比如条形码，二维码具有存储的数据量更大；可以包含数字、字符，及中文文本等混合内容；有一定的容错性（在部分损坏以后还可以正常读取）；空间利用率高等优点。</p>\\n<h2>优点</h2>\\n<p>虽然已经有很多生成二维码的解决方案，但是它们大多依赖System.Drawing，而在Linux下需要考虑System.Drawing的GDI+兼容性问题（需要安装libgdiplus），但是该组件完全不依赖GDI和System.Drawing。</p>\\n<p>Linux平台生成二维码无依赖性包  SkiaSharp.NativeAssets.Linux.NoDependencies</p>","autoDesc":true}');export{g as comp,c as data};