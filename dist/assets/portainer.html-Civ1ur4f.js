import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as d,a as e,b as t,d as a,e as c}from"./app-vSdX8vi3.js";const s="/kbms/common/1618409439522-02daddd1-93a7-46e0-aba9-df334ef5d62d.png",p="/kbms/common/1618409439676-1830e040-a25d-4573-9b33-77c84f7a373c.png",l="/kbms/common/1618409439756-9f844646-ceee-48ca-8697-68af4673c9dd.png",m="/kbms/common/1618409439802-fbc7ba96-d35d-4d9f-b021-4d1be9ea202e.png",g="/kbms/common/1618409439585-4668da5d-aa4c-4e77-aeae-5edab9227df3.png",h={},u=e("h2",{id:"概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述"},[e("span",null,"概述")])],-1),b=e("p",null,"轻量级图形页面管理之Portainer",-1),_={href:"http://www.portainer.io",target:"_blank",rel:"noopener noreferrer"},k={href:"http://demo.portainer.io",target:"_blank",rel:"noopener noreferrer"},v=c(`<p>1.查看portainer镜像</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>## docker search portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+s+`" alt="" loading="lazy"> 2.选择喜欢的portainer风格镜像，下载</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker pull portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.启动dockerui容器</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>## linux部署方案
docker volume create portainer_data
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer

## windows部署方案
docker run -d -p 9000:9000  --name portainer --restart always  -v /var/run/docker.sock:/var/run/docker.sock --name prtainer portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),f={href:"http://x.x.x.x:9000",target:"_blank",rel:"noopener noreferrer"},x={href:"http://192.168.2.119:9000",target:"_blank",rel:"noopener noreferrer"},y=e("img",{src:p,alt:"",loading:"lazy"},null,-1),w=e("img",{src:l,alt:"",loading:"lazy"},null,-1),z=e("img",{src:m,alt:"",loading:"lazy"},null,-1),P=e("img",{src:g,alt:"",loading:"lazy"},null,-1),N=e("h2",{id:"参考文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文档"},[e("span",null,"参考文档")])],-1),T={href:"https://mp.weixin.qq.com/s/dSESgScxR8EYlONVxPjbzw",target:"_blank",rel:"noopener noreferrer"};function S(q,E){const r=o("ExternalLinkIcon");return i(),d("div",null,[u,b,e("blockquote",null,[e("p",null,[t("官网："),e("a",_,[t("http://www.portainer.io"),a(r)]),t(" 演示地址："),e("a",k,[t("http://demo.portainer.io"),a(r)]),t(" 用户名：admin 密码：tryportainer")])]),v,e("p",null,[t("参数说明： -v /var/run/docker.sock:/var/run/docker.sock ：把宿主机的Docker守护进程(Docker daemon)默认监听的Unix域套接字挂载到容器中； -v portainer_data:/data ：把宿主机portainer_data数据卷挂载到容器/data目录； 四、web管理 1、登陆 "),e("a",f,[t("http://x.x.x.x:9000"),a(r)]),t("，设置管理员账号和密码。 2、单机版在新页面选择 Local 即可完成安装，集群选择Remote然后输入SWARM的IP地址，点击Connect完成安装。 4.浏览器访问 "),e("a",x,[t("http://192.168.2.119:9000"),a(r)]),t(" , 设置一个密码即可，点击创建用户 "),y,t(" 我们搭建的是单机版，直接选择Local ，点击连接 "),w,t(" 现在就可以使用了，点击Local进入仪表盘主页面。 "),z,t(" 容器页面 "),P]),N,e("blockquote",null,[e("p",null,[t("Docker 图形化工具：Portainer :"),e("a",T,[t("https://mp.weixin.qq.com/s/dSESgScxR8EYlONVxPjbzw"),a(r)])])])])}const C=n(h,[["render",S],["__file","portainer.html.vue"]]),D=JSON.parse('{"path":"/cloud/container/operators/portainer.html","title":"可视化界面Portainer","lang":"zh-CN","frontmatter":{"title":"可视化界面Portainer","lang":"zh-CN","date":"2023-06-04T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["cloud"],"tag":["无"],"filename":"keshihuajiemianportainer","slug":"rw7ezw","docsId":"43621236","description":"概述 轻量级图形页面管理之Portainer 官网：http://www.portainer.io 演示地址：http://demo.portainer.io 用户名：admin 密码：tryportainer 1.查看portainer镜像 2.选择喜欢的portainer风格镜像，下载 3.启动dockerui容器 参数说明： -v /var/ru...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/cloud/container/operators/portainer.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"可视化界面Portainer"}],["meta",{"property":"og:description","content":"概述 轻量级图形页面管理之Portainer 官网：http://www.portainer.io 演示地址：http://demo.portainer.io 用户名：admin 密码：tryportainer 1.查看portainer镜像 2.选择喜欢的portainer风格镜像，下载 3.启动dockerui容器 参数说明： -v /var/ru..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1618409439522-02daddd1-93a7-46e0-aba9-df334ef5d62d.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-23T08:39:13.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-23T08:39:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"可视化界面Portainer\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1618409439522-02daddd1-93a7-46e0-aba9-df334ef5d62d.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1618409439676-1830e040-a25d-4573-9b33-77c84f7a373c.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1618409439756-9f844646-ceee-48ca-8697-68af4673c9dd.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1618409439802-fbc7ba96-d35d-4d9f-b021-4d1be9ea202e.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1618409439585-4668da5d-aa4c-4e77-aeae-5edab9227df3.png\\"],\\"datePublished\\":\\"2023-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-23T08:39:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1695541854000,"updatedTime":1705999153000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1},{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":1.23,"words":369},"filePathRelative":"cloud/container/operators/portainer.md","localizedDate":"2023年6月4日","excerpt":"<h2>概述</h2>\\n<p>轻量级图形页面管理之Portainer</p>\\n<blockquote>\\n<p>官网：<a href=\\"http://www.portainer.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://www.portainer.io</a>\\n演示地址：<a href=\\"http://demo.portainer.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://demo.portainer.io</a> 用户名：admin 密码：tryportainer</p>\\n</blockquote>","autoDesc":true}');export{C as comp,D as data};