import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as n}from"./app-BQsqMNmR.js";const t="/kbms/common/1609895610758-de53f895-e871-4140-a702-72b7af02de74.png",l={};function h(r,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h2 id="本地仓库拉取远程仓库代码" tabindex="-1"><a class="header-anchor" href="#本地仓库拉取远程仓库代码"><span>本地仓库拉取远程仓库代码</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> init</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://gitee.com/xxxx.git</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更改仓库对应的地址" tabindex="-1"><a class="header-anchor" href="#更改仓库对应的地址"><span>更改仓库对应的地址</span></a></h2><p>在仓库目录下右键Git Bash Here中输入命令<br> 查询关联</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git remote -v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除关联</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 添加关联</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 新地址git链接</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 推送主分支：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 推送其他分支       </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> develop</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> #</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看所有分支：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -av</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库地址https-替换-ssh" tabindex="-1"><a class="header-anchor" href="#仓库地址https-替换-ssh"><span>仓库地址HTTPS 替换 SSH</span></a></h2><p>此处以 Github 为例，在命令行中输入以下内容即可 (替换所有的 HTTPS 为 SSH)</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 全局处理</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> url.ssh://git@github.com/.insteadOf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 对单个仓库生效，需要在仓库目录下指定命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> url.ssh://git@github.com/.insteadOf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新仓库origin地址" tabindex="-1"><a class="header-anchor" href="#更新仓库origin地址"><span>更新仓库origin地址</span></a></h2><ol><li><p>首先，打开终端或命令行界面，并导航到您的本地 Git 仓库所在的目录。</p></li><li><p>使用以下命令移除现有的远程仓库：</p></li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git remote remove origin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>接下来，使用 SSH URL 添加新的远程仓库。请使用您的 Git 仓库的 SSH URL（例如：git@github.com:user/repo.git），并执行以下命令：</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git remote add origin [SSH URL]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>请将 [SSH URL] 替换为您的 Git 仓库的实际 SSH URL。</p><ol start="4"><li>现在您可以尝试拉取最新更新的代码了。执行以下命令来拉取远程分支的代码：</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>git pull origin [branch]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>请将 [branch] 替换为您想要拉取的远程分支的名称，例如 main 或 master。</p><p>现在您的 Git 仓库将使用 SSH 方式进行拉取和推送操作。</p>`,20)]))}const k=s(l,[["render",h],["__file","commonOperator.html.vue"]]),o=JSON.parse('{"path":"/soft/devTools/sourceCodeManage/commonOperator.html","title":"常用操作","lang":"zh-CN","frontmatter":{"title":"常用操作","lang":"zh-CN","date":"2023-07-22T00:00:00.000Z","publish":true,"author":"azrng","order":1,"category":["Git"],"tag":["无"],"filename":"commonOperator","description":"本地仓库拉取远程仓库代码 更改仓库对应的地址 在仓库目录下右键Git Bash Here中输入命令 查询关联 仓库地址HTTPS 替换 SSH 此处以 Github 为例，在命令行中输入以下内容即可 (替换所有的 HTTPS 为 SSH) 更新仓库origin地址 首先，打开终端或命令行界面，并导航到您的本地 Git 仓库所在的目录。 使用以下命令移除...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/soft/devTools/sourceCodeManage/commonOperator.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"常用操作"}],["meta",{"property":"og:description","content":"本地仓库拉取远程仓库代码 更改仓库对应的地址 在仓库目录下右键Git Bash Here中输入命令 查询关联 仓库地址HTTPS 替换 SSH 此处以 Github 为例，在命令行中输入以下内容即可 (替换所有的 HTTPS 为 SSH) 更新仓库origin地址 首先，打开终端或命令行界面，并导航到您的本地 Git 仓库所在的目录。 使用以下命令移除..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1609895610758-de53f895-e871-4140-a702-72b7af02de74.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-20T08:58:37.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-07-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-20T08:58:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用操作\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1609895610758-de53f895-e871-4140-a702-72b7af02de74.png\\"],\\"datePublished\\":\\"2023-07-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-20T08:58:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"本地仓库拉取远程仓库代码","slug":"本地仓库拉取远程仓库代码","link":"#本地仓库拉取远程仓库代码","children":[]},{"level":2,"title":"更改仓库对应的地址","slug":"更改仓库对应的地址","link":"#更改仓库对应的地址","children":[]},{"level":2,"title":"仓库地址HTTPS 替换 SSH","slug":"仓库地址https-替换-ssh","link":"#仓库地址https-替换-ssh","children":[]},{"level":2,"title":"更新仓库origin地址","slug":"更新仓库origin地址","link":"#更新仓库origin地址","children":[]}],"git":{"createdTime":1693793744000,"updatedTime":1729414717000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":4},{"name":"zhangyunpeng","username":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":1.38,"words":414},"filePathRelative":"soft/devTools/sourceCodeManage/commonOperator.md","localizedDate":"2023年7月22日","excerpt":"<h2>本地仓库拉取远程仓库代码</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> init</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> remote</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> add</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> origin</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> https://gitee.com/xxxx.git</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> pull</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{k as comp,o as data};