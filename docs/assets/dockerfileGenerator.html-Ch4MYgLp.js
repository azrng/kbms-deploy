import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,d as a}from"./app-mrI7cTrN.js";const n="/kbms/common/1609562141077-6d3e1de3-a49d-4cc3-bd68-4594e7f93a0c.png",t="/kbms/common/1609562141087-6181298a-e038-4f2f-8ad2-b22271873ec2.png",l={},h=a('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>通过实际的情况来描述如何生成镜像</p><h2 id="生成镜像" tabindex="-1"><a class="header-anchor" href="#生成镜像"><span>生成镜像</span></a></h2><h3 id="项目目录格式" tabindex="-1"><a class="header-anchor" href="#项目目录格式"><span>项目目录格式</span></a></h3><p>A目录</p><figure><img src="'+n+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>B目录</p><figure><img src="'+t+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>分别为A、B目录</p><h3 id="第一种-推荐" tabindex="-1"><a class="header-anchor" href="#第一种-推荐"><span>第一种(推荐)</span></a></h3><p>把dockerfile文件移到A目录下执行：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 镜像名称 </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> imagesname</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二种" tabindex="-1"><a class="header-anchor" href="#第二种"><span>第二种</span></a></h3><p>直接在A目录下执行，dockerfile在B目录下</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  WebApplication1/Dockerfile</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> imagesname</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="第三种" tabindex="-1"><a class="header-anchor" href="#第三种"><span>第三种</span></a></h3><p>dockerfile在B目录，然后在B目录下执行：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Dockerfile</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> imagesname</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ../</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="生成容器" tabindex="-1"><a class="header-anchor" href="#生成容器"><span>生成容器</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 容器名称</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 8080:80</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> imagesname</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dockerName</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 8080:80</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> imagesname</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),r=[h];function d(p,k){return s(),e("div",null,r)}const o=i(l,[["render",d],["__file","dockerfileGenerator.html.vue"]]),m=JSON.parse('{"path":"/cloud/container/docker/dockerfileGenerator.html","title":"dockerfile生成镜像","lang":"zh-CN","frontmatter":{"title":"dockerfile生成镜像","lang":"zh-CN","date":"2023-02-16T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["cloud"],"tag":["dockerfile"],"description":"概述 通过实际的情况来描述如何生成镜像 生成镜像 项目目录格式 A目录 image.pngimage.png B目录 image.pngimage.png 分别为A、B目录 第一种(推荐) 把dockerfile文件移到A目录下执行： 第二种 直接在A目录下执行，dockerfile在B目录下 第三种 dockerfile在B目录，然后在B目录下执行：...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/cloud/container/docker/dockerfileGenerator.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"dockerfile生成镜像"}],["meta",{"property":"og:description","content":"概述 通过实际的情况来描述如何生成镜像 生成镜像 项目目录格式 A目录 image.pngimage.png B目录 image.pngimage.png 分别为A、B目录 第一种(推荐) 把dockerfile文件移到A目录下执行： 第二种 直接在A目录下执行，dockerfile在B目录下 第三种 dockerfile在B目录，然后在B目录下执行：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1609562141077-6d3e1de3-a49d-4cc3-bd68-4594e7f93a0c.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T14:03:23.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"dockerfile"}],["meta",{"property":"article:published_time","content":"2023-02-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T14:03:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dockerfile生成镜像\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1609562141077-6d3e1de3-a49d-4cc3-bd68-4594e7f93a0c.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609562141087-6181298a-e038-4f2f-8ad2-b22271873ec2.png\\"],\\"datePublished\\":\\"2023-02-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-08T14:03:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"生成镜像","slug":"生成镜像","link":"#生成镜像","children":[{"level":3,"title":"项目目录格式","slug":"项目目录格式","link":"#项目目录格式","children":[]},{"level":3,"title":"第一种(推荐)","slug":"第一种-推荐","link":"#第一种-推荐","children":[]},{"level":3,"title":"第二种","slug":"第二种","link":"#第二种","children":[]},{"level":3,"title":"第三种","slug":"第三种","link":"#第三种","children":[]}]},{"level":2,"title":"生成容器","slug":"生成容器","link":"#生成容器","children":[]}],"git":{"createdTime":1695541854000,"updatedTime":1712585003000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.62,"words":186},"filePathRelative":"cloud/container/docker/dockerfileGenerator.md","localizedDate":"2023年2月16日","excerpt":"<h2>概述</h2>\\n<p>通过实际的情况来描述如何生成镜像</p>\\n<h2>生成镜像</h2>\\n<h3>项目目录格式</h3>\\n<p>A目录</p>\\n<figure><img src=\\"/common/1609562141077-6d3e1de3-a49d-4cc3-bd68-4594e7f93a0c.png\\" alt=\\"image.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image.png</figcaption></figure>\\n<p>B目录</p>\\n<figure><img src=\\"/common/1609562141087-6181298a-e038-4f2f-8ad2-b22271873ec2.png\\" alt=\\"image.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image.png</figcaption></figure>","autoDesc":true}');export{o as comp,m as data};