import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o,c as p,a as n,b as s,d as c,e as i}from"./app-vSdX8vi3.js";const l={},u=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍"},[n("span",null,"介绍")])],-1),r=n("p",null,"通过redis实现轻量级订阅方法",-1),d={href:"https://www.cnblogs.com/kellynic/p/9952386.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>本文使用组件：CSRedisCore</p><h3 id="简单操作" tabindex="-1"><a class="header-anchor" href="#简单操作"><span>简单操作</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;发布订阅&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                RedisHelper<span class="token punctuation">.</span><span class="token function">Initialization</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CSRedis<span class="token punctuation">.</span>CSRedisClient</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.7.253:6379,password=guoba@2000,defaultDatabase=13,prefix=my_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//程序1：使用代码实现订阅端</span>
                <span class="token class-name"><span class="token keyword">var</span></span> sub <span class="token operator">=</span> RedisHelper<span class="token punctuation">.</span><span class="token function">Subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;chan1&quot;</span><span class="token punctuation">,</span> msg <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>Body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//sub.Disponse(); //停止订阅</span>

                <span class="token comment">//程序2：使用代码实现发布端</span>
                RedisHelper<span class="token punctuation">.</span><span class="token function">Publish</span><span class="token punctuation">(</span><span class="token string">&quot;chan1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;111&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3>`,5);function m(h,g){const a=e("ExternalLinkIcon");return o(),p("div",null,[u,r,n("blockquote",null,[n("p",null,[s("参考文档："),n("a",d,[s("https://www.cnblogs.com/kellynic/p/9952386.html"),c(a)])])]),k])}const f=t(l,[["render",m],["__file","xiaoxiduilieredis.html.vue"]]),x=JSON.parse('{"path":"/middleware/xiaoxiduilie/xiaoxiduilieredis.html","title":"消息队列redis","lang":"zh-CN","frontmatter":{"title":"消息队列redis","lang":"zh-CN","date":"2021-05-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"xiaoxiduilieredis","slug":"amsm7e","docsId":"29412115","description":"介绍 通过redis实现轻量级订阅方法 参考文档：https://www.cnblogs.com/kellynic/p/9952386.html 操作 本文使用组件：CSRedisCore 简单操作","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/xiaoxiduilie/xiaoxiduilieredis.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"消息队列redis"}],["meta",{"property":"og:description","content":"介绍 通过redis实现轻量级订阅方法 参考文档：https://www.cnblogs.com/kellynic/p/9952386.html 操作 本文使用组件：CSRedisCore 简单操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T14:00:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2021-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T14:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息队列redis\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T14:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"简单操作","slug":"简单操作","link":"#简单操作","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"git":{"createdTime":1697724028000,"updatedTime":1697724028000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.41,"words":123},"filePathRelative":"middleware/xiaoxiduilie/xiaoxiduilieredis.md","localizedDate":"2021年5月14日","excerpt":"<h2>介绍</h2>\\n<p>通过redis实现轻量级订阅方法</p>\\n<blockquote>\\n<p>参考文档：<a href=\\"https://www.cnblogs.com/kellynic/p/9952386.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.cnblogs.com/kellynic/p/9952386.html</a></p>\\n</blockquote>\\n<h2>操作</h2>\\n<p>本文使用组件：CSRedisCore</p>\\n<h3>简单操作</h3>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code>                Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"发布订阅\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                RedisHelper<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Initialization</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">CSRedis<span class=\\"token punctuation\\">.</span>CSRedisClient</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"192.168.7.253:6379,password=guoba@2000,defaultDatabase=13,prefix=my_\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n                <span class=\\"token comment\\">//程序1：使用代码实现订阅端</span>\\n                <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> sub <span class=\\"token operator\\">=</span> RedisHelper<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Subscribe</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"chan1\\"</span><span class=\\"token punctuation\\">,</span> msg <span class=\\"token operator\\">=&gt;</span> Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span>msg<span class=\\"token punctuation\\">.</span>Body<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token comment\\">//sub.Disponse(); //停止订阅</span>\\n\\n                <span class=\\"token comment\\">//程序2：使用代码实现发布端</span>\\n                RedisHelper<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Publish</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"chan1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"111\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{f as comp,x as data};