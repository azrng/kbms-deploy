import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,b as t}from"./app-DMmdIwn0.js";const e={},p=t(`<p>Ajax请求默认的都是异步的 如果想同步 async设置为false就可以（默认是true）</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> html <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  url<span class="token punctuation">:</span> <span class="token string">&quot;some.php&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span><span class="token punctuation">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者在全局设置Ajax属性</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>$<span class="token punctuation">.</span><span class="token function">ajaxSetup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span><span class="token punctuation">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再用post，get就是同步的了</p>`,5),o=[p];function c(i,l){return n(),s("div",null,o)}const d=a(e,[["render",c],["__file","ajaxyibutongbu.html.vue"]]),m=JSON.parse('{"path":"/web/jq/ajaxyibutongbu.html","title":"ajax异步同步","lang":"zh-CN","frontmatter":{"title":"ajax异步同步","lang":"zh-CN","date":"2022-08-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["web"],"tag":["无"],"filename":"ajaxyibutongbu","slug":"hzowyt","docsId":"29634400","description":"Ajax请求默认的都是异步的 如果想同步 async设置为false就可以（默认是true） 或者在全局设置Ajax属性 再用post，get就是同步的了","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/web/jq/ajaxyibutongbu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"ajax异步同步"}],["meta",{"property":"og:description","content":"Ajax请求默认的都是异步的 如果想同步 async设置为false就可以（默认是true） 或者在全局设置Ajax属性 再用post，get就是同步的了"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-19T10:58:50.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-08-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-19T10:58:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ajax异步同步\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-19T10:58:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1692442730000,"updatedTime":1692442730000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":0.3,"words":90},"filePathRelative":"web/jq/ajaxyibutongbu.md","localizedDate":"2022年8月14日","excerpt":"<p>Ajax请求默认的都是异步的\\n如果想同步 async设置为false就可以（默认是true）</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> html <span class=\\"token operator\\">=</span> $<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">ajax</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  url<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"some.php\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token keyword\\">async</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">false</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>responseText<span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,m as data};