import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c as o,a as e,d as t,e as p,b as c}from"./app-DMmdIwn0.js";const l="/kbms/common/1609838190560-cc3dd912-8337-494c-9a23-f09e44ca901b.png",s={},d=c('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>从内存中直接读取的叫做一级缓存(内存缓存)，从硬盘读取的叫做二级缓存(redis等)，先去一级缓存中找，找不到再去二级缓存中找。</p><h2 id="缓存分类" tabindex="-1"><a class="header-anchor" href="#缓存分类"><span>缓存分类</span></a></h2><figure><img src="'+l+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="客户端缓存" tabindex="-1"><a class="header-anchor" href="#客户端缓存"><span>客户端缓存</span></a></h3><p>这点大家都有直观的印象。比如你去一个新的网站，第一次可能要花一阵子时间才能载入整个页面。而以后再去呢，时间就会大大的缩短，原因就在于这个客户端缓 存。现在的浏览器都比较智能，它会在客户机器的硬盘上保留许多静态的文件，比如各种gif,jpeg文件等等。等以后再去的时候，它会尽量使用本地缓存里 面的文件。只有服务器端的文件更新了，或是缓存里面的文件过期了，它才会再次从服务器端下载这些东西。很多时候是IE替我们做了这件事情。</p><h3 id="服务器端缓存" tabindex="-1"><a class="header-anchor" href="#服务器端缓存"><span>服务器端缓存</span></a></h3><p>有些东西没法或是不宜在客户端缓存，那么我们只好在服务器端想想办法了。服务器端缓存从性质上看，又可以分为两种。</p><h4 id="静态文件缓存" tabindex="-1"><a class="header-anchor" href="#静态文件缓存"><span>静态文件缓存</span></a></h4><p>好多页面是静态的，很少改动，那么这种文件最适于作静态缓存。现在的IIS 6.0这部分内容是直接存放在Kernel的内存中，由HTTP.SYS直接管理。由于它在Kernel Space，所以它的性能非常的高。用户的请求如果在缓存里面，那么HTTP.SYS直接将内容发送到network driver上去，不需要像以前那样从IIS的User space的内存copy到Kernel中，然后再发送到TCP/IP stack上。Kernel level cache几乎是现在高性能Web server的一个必不可少的特性。</p><h4 id="动态缓存" tabindex="-1"><a class="header-anchor" href="#动态缓存"><span>动态缓存</span></a></h4><p>动态缓存是比较有难度的。因为你在缓存的时候要时刻注意一个问题，那就是缓存的内容是不是已经过时了。因为内容过时了可能会有很严重的后果。比如网上买卖 股票的网站。你给别人提供的价格是过时的，那人家非砍了你不可。缓存如何发现自己是不是过时就是一个非常复杂的问题。 缓存方式 分为直写和回写 更新数据的时候，先更新缓存内的数据，再更新数据存放数据的方式，回写的好处就是不用等待写入数据实际存放的地方，所以速度很快。 如果一定要确保在数据实际存放的地方保存，然后再更新缓存，这是直写。</p><h2 id="缓存使用" tabindex="-1"><a class="header-anchor" href="#缓存使用"><span>缓存使用</span></a></h2><p>常见问题：数据不一致 导致原因：高并发操作后一个将前一个数据库值覆盖、先更新缓存后更新数据库失败、先更新数据库后更新缓存失败</p><p>解决高并发下数据不一致问题问题：(不考虑删除缓存失败情况)</p><ul><li>写请求的时候不仅仅去更新数据库还需要删除缓存</li><li>读请求先读取缓存，如果缓存不存在，那么就读取数据库并重新创建缓存</li><li>写入缓存的时候，为缓存设置一定量的过期时间。(可以根据缓存的内容设置不同时间)</li></ul><p>考虑操作第一步成功，然后第二步骤失败的情况： 为了避免第二步删除缓存，引入重试机制，当第一次删除缓存失败后，重新执行删除缓存操作。如果多次重试后还没有成功可以将这次失败的数据放到消息队列中，通过消费者异步形式去操作(防止当前项目在重试，然后项目重启后重试请求丢失,消息队列保证可靠性，写入队列的消息在成功消费之前不会丢失，消息队列可以确保消息成功投递)。</p><p>如果再考虑主从库问题，比如我们先更新了主库，然后删除缓存，别人访问了从库，从库还没同步到主库更新后的值，这个时候存入缓存的值是旧值，这时候就需要考虑延迟执行删除缓存的操作。</p><p>总结：先更新数据库再删除缓存，再配合第二步骤重试进行操作，搭配消息队列</p>',19),h={href:"https://mp.weixin.qq.com/s/ACGEr8GPs9DYdsblPspAYA",target:"_blank",rel:"noopener noreferrer"};function g(m,u){const a=i("ExternalLinkIcon");return r(),o("div",null,[d,e("blockquote",null,[e("p",null,[t("参考文章："),e("a",h,[t("https://mp.weixin.qq.com/s/ACGEr8GPs9DYdsblPspAYA"),p(a)])])])])}const _=n(s,[["render",g],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/dotnet/base/huancun/","title":"说明","lang":"zh-CN","frontmatter":{"title":"说明","lang":"zh-CN","date":"2023-08-20T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"readme","slug":"zx867f","docsId":"32029807","description":"概述 从内存中直接读取的叫做一级缓存(内存缓存)，从硬盘读取的叫做二级缓存(redis等)，先去一级缓存中找，找不到再去二级缓存中找。 缓存分类 image.pngimage.png 客户端缓存 这点大家都有直观的印象。比如你去一个新的网站，第一次可能要花一阵子时间才能载入整个页面。而以后再去呢，时间就会大大的缩短，原因就在于这个客户端缓 存。现在的浏...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/base/huancun/"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"说明"}],["meta",{"property":"og:description","content":"概述 从内存中直接读取的叫做一级缓存(内存缓存)，从硬盘读取的叫做二级缓存(redis等)，先去一级缓存中找，找不到再去二级缓存中找。 缓存分类 image.pngimage.png 客户端缓存 这点大家都有直观的印象。比如你去一个新的网站，第一次可能要花一阵子时间才能载入整个页面。而以后再去呢，时间就会大大的缩短，原因就在于这个客户端缓 存。现在的浏..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1609838190560-cc3dd912-8337-494c-9a23-f09e44ca901b.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-25T13:23:37.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-08-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-25T13:23:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说明\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1609838190560-cc3dd912-8337-494c-9a23-f09e44ca901b.png\\"],\\"datePublished\\":\\"2023-08-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-25T13:23:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"缓存分类","slug":"缓存分类","link":"#缓存分类","children":[{"level":3,"title":"客户端缓存","slug":"客户端缓存","link":"#客户端缓存","children":[]},{"level":3,"title":"服务器端缓存","slug":"服务器端缓存","link":"#服务器端缓存","children":[{"level":4,"title":"静态文件缓存","slug":"静态文件缓存","link":"#静态文件缓存","children":[]},{"level":4,"title":"动态缓存","slug":"动态缓存","link":"#动态缓存","children":[]}]}]},{"level":2,"title":"缓存使用","slug":"缓存使用","link":"#缓存使用","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1698240217000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":3.89,"words":1168},"filePathRelative":"dotnet/base/huancun/readme.md","localizedDate":"2023年8月20日","excerpt":"<h2>概述</h2>\\n<p>从内存中直接读取的叫做一级缓存(内存缓存)，从硬盘读取的叫做二级缓存(redis等)，先去一级缓存中找，找不到再去二级缓存中找。</p>\\n<h2>缓存分类</h2>\\n<figure><img src=\\"/common/1609838190560-cc3dd912-8337-494c-9a23-f09e44ca901b.png\\" alt=\\"image.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image.png</figcaption></figure>\\n<h3>客户端缓存</h3>\\n<p>这点大家都有直观的印象。比如你去一个新的网站，第一次可能要花一阵子时间才能载入整个页面。而以后再去呢，时间就会大大的缩短，原因就在于这个客户端缓 存。现在的浏览器都比较智能，它会在客户机器的硬盘上保留许多静态的文件，比如各种gif,jpeg文件等等。等以后再去的时候，它会尽量使用本地缓存里 面的文件。只有服务器端的文件更新了，或是缓存里面的文件过期了，它才会再次从服务器端下载这些东西。很多时候是IE替我们做了这件事情。</p>","autoDesc":true}');export{_ as comp,k as data};