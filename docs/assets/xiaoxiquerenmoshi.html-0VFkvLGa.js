import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as t}from"./app-DMmdIwn0.js";const e={},p=t(`<h3 id="自动确认" tabindex="-1"><a class="header-anchor" href="#自动确认"><span>自动确认</span></a></h3><p>只要消息从队列中取出，无论消费者获取到消息后是否成功消费，都认为是消息成功消费。</p><h3 id="手动确认" tabindex="-1"><a class="header-anchor" href="#手动确认"><span>手动确认</span></a></h3><p>消息从队列中获取到消息后，服务器会将该消息处于不可用状态，等待消费者反馈 修改消息确认模式改为手动即可</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>consumer<span class="token punctuation">.</span>Received <span class="token operator">+=</span> <span class="token punctuation">(</span>model<span class="token punctuation">,</span> ea<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
                    <span class="token punctuation">{</span>
                        Thread<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//等待1秒,</span>
                        <span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> message <span class="token operator">=</span> ea<span class="token punctuation">.</span>Body<span class="token punctuation">;</span><span class="token comment">//接收到的消息</span>
                        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;接收到信息为:&quot;</span> <span class="token operator">+</span> Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token comment">//返回消息确认</span>
                        channel<span class="token punctuation">.</span><span class="token function">BasicAck</span><span class="token punctuation">(</span>ea<span class="token punctuation">.</span>DeliveryTag<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">;</span>
                    <span class="token comment">//消费者开启监听</span>
                    <span class="token comment">//将autoAck设置false 关闭自动确认</span>
                    channel<span class="token punctuation">.</span><span class="token function">BasicConsume</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">queue</span><span class="token punctuation">:</span> queueName<span class="token punctuation">,</span> <span class="token named-parameter punctuation">autoAck</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">consumer</span><span class="token punctuation">:</span> consumer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,u){return a(),s("div",null,o)}const k=n(e,[["render",c],["__file","xiaoxiquerenmoshi.html.vue"]]),m=JSON.parse('{"path":"/middleware/xiaoxiduilie/rabbitmq/xiaoxiquerenmoshi.html","title":"消息确认模式","lang":"zh-CN","frontmatter":{"title":"消息确认模式","lang":"zh-CN","date":"2023-09-25T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"xiaoxiquerenmoshi","slug":"qn9vku","docsId":"29445940","description":"自动确认 只要消息从队列中取出，无论消费者获取到消息后是否成功消费，都认为是消息成功消费。 手动确认 消息从队列中获取到消息后，服务器会将该消息处于不可用状态，等待消费者反馈 修改消息确认模式改为手动即可","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/xiaoxiduilie/rabbitmq/xiaoxiquerenmoshi.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"消息确认模式"}],["meta",{"property":"og:description","content":"自动确认 只要消息从队列中取出，无论消费者获取到消息后是否成功消费，都认为是消息成功消费。 手动确认 消息从队列中获取到消息后，服务器会将该消息处于不可用状态，等待消费者反馈 修改消息确认模式改为手动即可"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T14:00:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T14:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息确认模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T14:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":3,"title":"自动确认","slug":"自动确认","link":"#自动确认","children":[]},{"level":3,"title":"手动确认","slug":"手动确认","link":"#手动确认","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1697724028000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.63,"words":190},"filePathRelative":"middleware/xiaoxiduilie/rabbitmq/xiaoxiquerenmoshi.md","localizedDate":"2023年9月25日","excerpt":"<h3>自动确认</h3>\\n<p>只要消息从队列中取出，无论消费者获取到消息后是否成功消费，都认为是消息成功消费。</p>\\n<h3>手动确认</h3>\\n<p>消息从队列中获取到消息后，服务器会将该消息处于不可用状态，等待消费者反馈\\n修改消息确认模式改为手动即可</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code>consumer<span class=\\"token punctuation\\">.</span>Received <span class=\\"token operator\\">+=</span> <span class=\\"token punctuation\\">(</span>model<span class=\\"token punctuation\\">,</span> ea<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span>\\n                    <span class=\\"token punctuation\\">{</span>\\n                        Thread<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Sleep</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//等待1秒,</span>\\n                        <span class=\\"token class-name\\"><span class=\\"token keyword\\">byte</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span></span> message <span class=\\"token operator\\">=</span> ea<span class=\\"token punctuation\\">.</span>Body<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//接收到的消息</span>\\n                        Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"接收到信息为:\\"</span> <span class=\\"token operator\\">+</span> Encoding<span class=\\"token punctuation\\">.</span>UTF8<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">GetString</span><span class=\\"token punctuation\\">(</span>message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                        <span class=\\"token comment\\">//返回消息确认</span>\\n                        channel<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">BasicAck</span><span class=\\"token punctuation\\">(</span>ea<span class=\\"token punctuation\\">.</span>DeliveryTag<span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n                    <span class=\\"token comment\\">//消费者开启监听</span>\\n                    <span class=\\"token comment\\">//将autoAck设置false 关闭自动确认</span>\\n                    channel<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">BasicConsume</span><span class=\\"token punctuation\\">(</span><span class=\\"token named-parameter punctuation\\">queue</span><span class=\\"token punctuation\\">:</span> queueName<span class=\\"token punctuation\\">,</span> <span class=\\"token named-parameter punctuation\\">autoAck</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span> <span class=\\"token named-parameter punctuation\\">consumer</span><span class=\\"token punctuation\\">:</span> consumer<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,m as data};