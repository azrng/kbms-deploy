import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-DMmdIwn0.js";const t={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>语音播报等</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>安装nuget包</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">PackageReference</span> Include<span class="token operator">=</span><span class="token string">&quot;System.Speech&quot;</span> Version<span class="token operator">=</span><span class="token string">&quot;6.0.0&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将文本转语音</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//实例化</span>
<span class="token keyword">using</span> <span class="token class-name">SpeechSynthesizer</span> speechSynthesizer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SpeechSynthesizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//配置音频输出</span>
speechSynthesizer<span class="token punctuation">.</span><span class="token function">SetOutputToDefaultAudioDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//字符串转语音</span>
speechSynthesizer<span class="token punctuation">.</span><span class="token function">Speak</span><span class="token punctuation">(</span><span class="token string">&quot;晚上好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存语音</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> filtPath <span class="token operator">=</span> <span class="token string">&quot;d:\\\\aa.wav&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//保存文件</span>
<span class="token keyword">using</span> <span class="token class-name"><span class="token keyword">var</span></span> speech <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SpeechSynthesizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//配置音频文件，设置输出流和文本格式</span>
speech<span class="token punctuation">.</span><span class="token function">SetOutputToWaveFile</span><span class="token punctuation">(</span>filtPath<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SpeechAudioFormatInfo</span><span class="token punctuation">(</span><span class="token number">32000</span><span class="token punctuation">,</span> AudioBitsPerSample<span class="token punctuation">.</span>Sixteen<span class="token punctuation">,</span> AudioChannel<span class="token punctuation">.</span>Mono<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//创建空的prompt对象，并添加内容</span>
<span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">PromptBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span><span class="token function">AppendText</span><span class="token punctuation">(</span><span class="token string">&quot;大家好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出文件</span>
speech<span class="token punctuation">.</span><span class="token function">Speak</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","speechsynthesizeryuyin.html.vue"]]),k=JSON.parse('{"path":"/middleware/yinpinshipin/speechsynthesizeryuyin.html","title":"SpeechSynthesizer语音","lang":"zh-CN","frontmatter":{"title":"SpeechSynthesizer语音","lang":"zh-CN","date":"2023-04-01T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"speechsynthesizeryuyin","slug":"uinqzt","docsId":"84518478","description":"概述 语音播报等 操作 安装nuget包 将文本转语音 保存语音","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/yinpinshipin/speechsynthesizeryuyin.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"SpeechSynthesizer语音"}],["meta",{"property":"og:description","content":"概述 语音播报等 操作 安装nuget包 将文本转语音 保存语音"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T14:51:43.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-04-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T14:51:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpeechSynthesizer语音\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-18T14:51:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1710773503000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":0.51,"words":153},"filePathRelative":"middleware/yinpinshipin/speechsynthesizeryuyin.md","localizedDate":"2023年4月1日","excerpt":"<h2>概述</h2>\\n<p>语音播报等</p>\\n<h2>操作</h2>\\n<p>安装nuget包</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token operator\\">&lt;</span><span class=\\"token class-name\\">PackageReference</span> Include<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"System.Speech\\"</span> Version<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"6.0.0\\"</span> <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,k as data};