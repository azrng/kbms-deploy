import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as e,c as o,a as n,d as s,e as c,b as l}from"./app-DMmdIwn0.js";const u={},i=l(`<p>发送消息</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//Send.cs </span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//1.1.实例化连接工厂</span>
    <span class="token class-name"><span class="token keyword">var</span></span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> HostName <span class="token operator">=</span> <span class="token string">&quot;localhost&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 建立连接</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> connection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//3. 创建信道</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">CreateModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//4. 申明队列</span>
            channel<span class="token punctuation">.</span><span class="token function">QueueDeclare</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">queue</span><span class="token punctuation">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">durable</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">exclusive</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">autoDelete</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">arguments</span><span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//5. 构建byte消息数据包</span>
            <span class="token class-name"><span class="token keyword">string</span></span> message <span class="token operator">=</span> args<span class="token punctuation">.</span>Length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">?</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token string">&quot;Hello RabbitMQ!&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">var</span></span> body <span class="token operator">=</span> Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">.</span><span class="token function">GetBytes</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//6. 发送数据包</span>
            channel<span class="token punctuation">.</span><span class="token function">BasicPublish</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">exchange</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">routingKey</span><span class="token punctuation">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">basicProperties</span><span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">body</span><span class="token punctuation">:</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot; [x] Sent {0}&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收消息</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code> 
<span class="token comment">//Receive.cs  省略部分代码</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//1.实例化连接工厂</span>
    <span class="token class-name"><span class="token keyword">var</span></span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> HostName <span class="token operator">=</span> <span class="token string">&quot;localhost&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 建立连接</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> connection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">CreateConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//3. 创建信道</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">CreateModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//4. 申明队列</span>
            channel<span class="token punctuation">.</span><span class="token function">QueueDeclare</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">queue</span><span class="token punctuation">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">durable</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">exclusive</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">autoDelete</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">arguments</span><span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//5. 构造消费者实例</span>
            <span class="token class-name"><span class="token keyword">var</span></span> consumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">EventingBasicConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//6. 绑定消息接收后的事件委托</span>
            consumer<span class="token punctuation">.</span>Received <span class="token operator">+=</span> <span class="token punctuation">(</span>model<span class="token punctuation">,</span> ea<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> message <span class="token operator">=</span> Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span>ea<span class="token punctuation">.</span>Body<span class="token punctuation">)</span><span class="token punctuation">;</span>
                Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot; [x] Received {0}&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
                Thread<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//模拟耗时</span>
                Console<span class="token punctuation">.</span>WriteLine <span class="token punctuation">(</span><span class="token string">&quot; [x] Done&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token comment">//7. 启动消费者</span>
            channel<span class="token punctuation">.</span><span class="token function">BasicConsume</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">queue</span><span class="token punctuation">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">autoAck</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">consumer</span><span class="token punctuation">:</span> consumer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot; Press [enter] to exit.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            Console<span class="token punctuation">.</span><span class="token function">ReadLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k={href:"https://www.cnblogs.com/sheng-jie/p/7192690.html",target:"_blank",rel:"noopener noreferrer"};function r(m,d){const a=p("ExternalLinkIcon");return e(),o("div",null,[i,n("p",null,[s("颜圣杰："),n("a",k,[s("https://www.cnblogs.com/sheng-jie/p/7192690.html"),c(a)])])])}const g=t(u,[["render",r],["__file","kongzhiqishiyongrabbitmq.html.vue"]]),y=JSON.parse('{"path":"/middleware/xiaoxiduilie/rabbitmq/kongzhiqishiyongrabbitmq.html","title":"控制器使用rabbitmq","lang":"zh-CN","frontmatter":{"title":"控制器使用rabbitmq","lang":"zh-CN","date":"2023-09-25T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"kongzhiqishiyongrabbitmq","slug":"oode3o","docsId":"29412234","description":"发送消息 接收消息 颜圣杰：https://www.cnblogs.com/sheng-jie/p/7192690.html","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/xiaoxiduilie/rabbitmq/kongzhiqishiyongrabbitmq.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"控制器使用rabbitmq"}],["meta",{"property":"og:description","content":"发送消息 接收消息 颜圣杰：https://www.cnblogs.com/sheng-jie/p/7192690.html"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T14:00:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T14:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"控制器使用rabbitmq\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T14:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1697724028000,"updatedTime":1697724028000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.9,"words":270},"filePathRelative":"middleware/xiaoxiduilie/rabbitmq/kongzhiqishiyongrabbitmq.md","localizedDate":"2023年9月25日","excerpt":"<p>发送消息</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token comment\\">//Send.cs </span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token return-type class-name\\"><span class=\\"token keyword\\">void</span></span> <span class=\\"token function\\">Main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span></span> args<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//1.1.实例化连接工厂</span>\\n    <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> factory <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token constructor-invocation class-name\\">ConnectionFactory</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> HostName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"localhost\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">//2. 建立连接</span>\\n    <span class=\\"token keyword\\">using</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> connection <span class=\\"token operator\\">=</span> factory<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">CreateConnection</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">//3. 创建信道</span>\\n        <span class=\\"token keyword\\">using</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> channel <span class=\\"token operator\\">=</span> connection<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">CreateModel</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token comment\\">//4. 申明队列</span>\\n            channel<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">QueueDeclare</span><span class=\\"token punctuation\\">(</span><span class=\\"token named-parameter punctuation\\">queue</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"hello\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token named-parameter punctuation\\">durable</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span> <span class=\\"token named-parameter punctuation\\">exclusive</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span> <span class=\\"token named-parameter punctuation\\">autoDelete</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span> <span class=\\"token named-parameter punctuation\\">arguments</span><span class=\\"token punctuation\\">:</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token comment\\">//5. 构建byte消息数据包</span>\\n            <span class=\\"token class-name\\"><span class=\\"token keyword\\">string</span></span> message <span class=\\"token operator\\">=</span> args<span class=\\"token punctuation\\">.</span>Length <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">?</span> args<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"Hello RabbitMQ!\\"</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token class-name\\"><span class=\\"token keyword\\">var</span></span> body <span class=\\"token operator\\">=</span> Encoding<span class=\\"token punctuation\\">.</span>UTF8<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">GetBytes</span><span class=\\"token punctuation\\">(</span>message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token comment\\">//6. 发送数据包</span>\\n            channel<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">BasicPublish</span><span class=\\"token punctuation\\">(</span><span class=\\"token named-parameter punctuation\\">exchange</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token named-parameter punctuation\\">routingKey</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"hello\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token named-parameter punctuation\\">basicProperties</span><span class=\\"token punctuation\\">:</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">,</span> <span class=\\"token named-parameter punctuation\\">body</span><span class=\\"token punctuation\\">:</span> body<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            Console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">WriteLine</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\" [x] Sent {0}\\"</span><span class=\\"token punctuation\\">,</span> message<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{g as comp,y as data};