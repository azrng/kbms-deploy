const e=JSON.parse(`{"key":"v-6fae03cc","path":"/soft/code-version/gogs.html","title":"Gogs","lang":"zh-CN","frontmatter":{"title":"Gogs","lang":"zh-CN","date":"2021-02-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":false,"category":["soft"],"tag":["git","版本管理","docker"],"description":"介绍 Gogs 是一款极易搭建的自助 Git 服务。 开发目的 Gogs 的目标是打造一个最简单、最快速和最轻松的方式搭建自助 Git 服务。 安装方式 docker方式 docker-compose脚本 version: '3' services: mygogs: container_name: mygogs image: gogs/gogs:latest restart: always ports: - \\"10022:22\\" - \\"10080:3000\\" volumes: - ./data:/data/docker/gogs","head":[["meta",{"property":"og:url","content":"https://azrng.github.io/kbms/kbms/soft/code-version/gogs.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Gogs"}],["meta",{"property":"og:description","content":"介绍 Gogs 是一款极易搭建的自助 Git 服务。 开发目的 Gogs 的目标是打造一个最简单、最快速和最轻松的方式搭建自助 Git 服务。 安装方式 docker方式 docker-compose脚本 version: '3' services: mygogs: container_name: mygogs image: gogs/gogs:latest restart: always ports: - \\"10022:22\\" - \\"10080:3000\\" volumes: - ./data:/data/docker/gogs"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-13T15:06:13.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:tag","content":"版本管理"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:published_time","content":"2021-02-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-13T15:06:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gogs\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-22T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-13T15:06:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"docker方式","slug":"docker方式","link":"#docker方式","children":[]}],"git":{"createdTime":1670943973000,"updatedTime":1670943973000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.44,"words":131},"filePathRelative":"soft/code-version/gogs.md","localizedDate":"2021年2月22日","excerpt":"<h1> 介绍</h1>\\n<p>Gogs 是一款极易搭建的自助 Git 服务。 开发目的 Gogs 的目标是打造一个最简单、最快速和最轻松的方式搭建自助 Git 服务。</p>\\n<h1> 安装方式</h1>\\n<h2> docker方式</h2>\\n<p>docker-compose脚本</p>\\n<div class=\\"language-csharp line-numbers-mode\\" data-ext=\\"cs\\"><pre class=\\"language-csharp\\"><code>version<span class=\\"token punctuation\\">:</span> <span class=\\"token char\\">'3'</span>\\n\\nservices<span class=\\"token punctuation\\">:</span>\\n  mygogs<span class=\\"token punctuation\\">:</span>\\n    container_name<span class=\\"token punctuation\\">:</span> <span class=\\"token class-name\\">mygogs</span>\\n    image<span class=\\"token punctuation\\">:</span> gogs<span class=\\"token operator\\">/</span>gogs<span class=\\"token punctuation\\">:</span><span class=\\"token class-name\\">latest</span>\\n    restart<span class=\\"token punctuation\\">:</span> <span class=\\"token class-name\\">always</span>\\n    ports<span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token operator\\">-</span> <span class=\\"token string\\">\\"10022:22\\"</span>\\n      <span class=\\"token operator\\">-</span> <span class=\\"token string\\">\\"10080:3000\\"</span>\\n    volumes<span class=\\"token punctuation\\">:</span> \\n      <span class=\\"token operator\\">-</span> <span class=\\"token punctuation\\">.</span><span class=\\"token operator\\">/</span>data<span class=\\"token punctuation\\">:</span><span class=\\"token operator\\">/</span>data<span class=\\"token operator\\">/</span>docker<span class=\\"token operator\\">/</span>gogs\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};