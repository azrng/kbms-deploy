import{_ as e,a,b as s,c as n,d as t,e as l}from"./1624778192446-1a2fafd9-1de3-401b-afde-cccf8036dbd5-BqlgeqWK.js";import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,d as p,o as d}from"./app-fQkBsvt-.js";const c="/kbms/common/1624779022530-15ecf7ab-9d53-4143-994b-c12595f6a666.png",o="/kbms/common/1624789506154-692762cd-83a6-4f47-b1f9-e9a6f2b48cf5.png",g="/kbms/common/1624789522815-0a59afeb-84c3-4c70-be6e-5a115f275ad2.png",m="/kbms/common/1624789558767-aa971118-f1b9-42b5-a48d-f2bce25c54d9.png",k={};function b(u,i){return d(),h("div",null,i[0]||(i[0]=[p('<blockquote><p>实现目的：通过jenkins在服务器部署一个简单的.Net程序</p></blockquote><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>一套运行在jenkins上的工作流框架，将原来独立的运行于单个或多个节点的任务连接起来，实现单个任务难以完成的复杂流程编排和可视化工作。</p><h2 id="_1-登录并创建任务" tabindex="-1"><a class="header-anchor" href="#_1-登录并创建任务"><span>1. 登录并创建任务</span></a></h2><p>输入任务名称并选择构建一个流水线任务<br><img src="'+c+`" alt="image.png" loading="lazy"></p><h2 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置"><span>2. 配置</span></a></h2><p>插件</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 提供 Docker 支持（必装）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Pipeline</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker-build-step</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 可视化设计流水线脚本的工具（必装）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Blue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Ocean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 提供对 gitlab 支持，如果不使用可以不安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gitlab</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 提供 Git 参数化和钩子触发构建支持，不需要可以不安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Parameter</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Generic</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Webhook</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Trigger</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-常规" tabindex="-1"><a class="header-anchor" href="#_2-1-常规"><span>2.1 常规</span></a></h3><p>设置描述和丢弃规则<br><img src="`+o+'" alt="image.png" loading="lazy"></p><h3 id="_2-2-构建触发器" tabindex="-1"><a class="header-anchor" href="#_2-2-构建触发器"><span>2.2 构建触发器</span></a></h3><figure><img src="'+g+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_2-3-流水线" tabindex="-1"><a class="header-anchor" href="#_2-3-流水线"><span>2.3 流水线</span></a></h3><figure><img src="'+m+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="_3-开始构建" tabindex="-1"><a class="header-anchor" href="#_3-开始构建"><span>3. 开始构建</span></a></h2><p>点击保存后点击立即构建，就会在下面可以看到构建历史列表(出现蓝色代表构建成功，红色代表有问题)<br><img src="'+e+'" alt="image.png" loading="lazy"><br> 构建完成后我们查看linux服务器是否已经有刚部署项目的容器<br><img src="'+a+'" alt="image.png" loading="lazy"></p><h3 id="_2-3-查看输出" tabindex="-1"><a class="header-anchor" href="#_2-3-查看输出"><span>2.3 查看输出</span></a></h3><p>通过在指定的build ID下选择输出控制台查看详细信息<br><img src="'+s+'" alt="image.png" loading="lazy"></p><h3 id="_2-4-默认工作目录" tabindex="-1"><a class="header-anchor" href="#_2-4-默认工作目录"><span>2.4 默认工作目录</span></a></h3><p>通过输出信息我们可以看到jenkins默认的工作目录是我们配置的目录</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/var/jenkins_home/workspace/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+n+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="_4-预览效果" tabindex="-1"><a class="header-anchor" href="#_4-预览效果"><span>4. 预览效果</span></a></h2><p>通过我们的shell配置，我们访问我们的swagger地址</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">http://192.168.1.14:8012/swagger/index.html</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="'+t+'" alt="image.png" loading="lazy"><br> 调用接口发现可以查询到数据<br><img src="'+l+'" alt="image.png" loading="lazy"><br> 这点常见的错误就是连接数据库的地址配置有问题，如果这里有问题，可以通过命令去查看docker日志</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器Id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_5-参考文档" tabindex="-1"><a class="header-anchor" href="#_5-参考文档"><span>5. 参考文档</span></a></h2><blockquote><p>基于Jenkins构建自动化发布镜像：<a href="https://mp.weixin.qq.com/s/D404jNmlGO_ybpDQFehN-w" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/D404jNmlGO_ybpDQFehN-w</a></p></blockquote>',29)]))}const y=r(k,[["render",b],["__file","goujianliushuixianxiangmu.html.vue"]]),F=JSON.parse('{"path":"/cloud/ciAndCd/jenkins/release/goujianliushuixianxiangmu.html","title":"构建流水线项目","lang":"zh-CN","frontmatter":{"title":"构建流水线项目","lang":"zh-CN","date":"2023-07-02T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["cloud"],"tag":["无"],"filename":"goujianliushuixianxiangmu","slug":"vg1nlg","docsId":"47890059","description":"实现目的：通过jenkins在服务器部署一个简单的.Net程序 介绍 一套运行在jenkins上的工作流框架，将原来独立的运行于单个或多个节点的任务连接起来，实现单个任务难以完成的复杂流程编排和可视化工作。 1. 登录并创建任务 输入任务名称并选择构建一个流水线任务 image.png 2. 配置 插件 2.1 常规 设置描述和丢弃规则 image.p...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/cloud/ciAndCd/jenkins/release/goujianliushuixianxiangmu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"构建流水线项目"}],["meta",{"property":"og:description","content":"实现目的：通过jenkins在服务器部署一个简单的.Net程序 介绍 一套运行在jenkins上的工作流框架，将原来独立的运行于单个或多个节点的任务连接起来，实现单个任务难以完成的复杂流程编排和可视化工作。 1. 登录并创建任务 输入任务名称并选择构建一个流水线任务 image.png 2. 配置 插件 2.1 常规 设置描述和丢弃规则 image.p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1624779022530-15ecf7ab-9d53-4143-994b-c12595f6a666.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-24T08:50:00.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-07-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-24T08:50:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"构建流水线项目\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1624779022530-15ecf7ab-9d53-4143-994b-c12595f6a666.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1624789506154-692762cd-83a6-4f47-b1f9-e9a6f2b48cf5.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1624789522815-0a59afeb-84c3-4c70-be6e-5a115f275ad2.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1624789558767-aa971118-f1b9-42b5-a48d-f2bce25c54d9.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1624777879835-1b27aa76-e67d-4c19-970d-6c6bc41d1da2.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1624778314838-53227adc-9037-4752-8875-271f1b982d35.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1624777991962-112f230d-92b1-4608-9489-cf644647412a.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1624778083657-db0fb380-43f7-47dd-89b9-5ccadd761e9f.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1624778166509-8aa42a2d-73e1-4e39-a170-c0fd964f5e1a.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1624778192446-1a2fafd9-1de3-401b-afde-cccf8036dbd5.png\\"],\\"datePublished\\":\\"2023-07-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-24T08:50:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"1. 登录并创建任务","slug":"_1-登录并创建任务","link":"#_1-登录并创建任务","children":[]},{"level":2,"title":"2. 配置","slug":"_2-配置","link":"#_2-配置","children":[{"level":3,"title":"2.1 常规","slug":"_2-1-常规","link":"#_2-1-常规","children":[]},{"level":3,"title":"2.2 构建触发器","slug":"_2-2-构建触发器","link":"#_2-2-构建触发器","children":[]},{"level":3,"title":"2.3 流水线","slug":"_2-3-流水线","link":"#_2-3-流水线","children":[]}]},{"level":2,"title":"3. 开始构建","slug":"_3-开始构建","link":"#_3-开始构建","children":[{"level":3,"title":"2.3 查看输出","slug":"_2-3-查看输出","link":"#_2-3-查看输出","children":[]},{"level":3,"title":"2.4 默认工作目录","slug":"_2-4-默认工作目录","link":"#_2-4-默认工作目录","children":[]}]},{"level":2,"title":"4. 预览效果","slug":"_4-预览效果","link":"#_4-预览效果","children":[]},{"level":2,"title":"5. 参考文档","slug":"_5-参考文档","link":"#_5-参考文档","children":[]}],"git":{"createdTime":1695541854000,"updatedTime":1695545400000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":1.87,"words":560},"filePathRelative":"cloud/ciAndCd/jenkins/release/goujianliushuixianxiangmu.md","localizedDate":"2023年7月2日","excerpt":"<blockquote>\\n<p>实现目的：通过jenkins在服务器部署一个简单的.Net程序</p>\\n</blockquote>\\n<h2>介绍</h2>\\n<p>一套运行在jenkins上的工作流框架，将原来独立的运行于单个或多个节点的任务连接起来，实现单个任务难以完成的复杂流程编排和可视化工作。</p>\\n<h2>1. 登录并创建任务</h2>\\n<p>输入任务名称并选择构建一个流水线任务<br>\\n<img src=\\"/common/1624779022530-15ecf7ab-9d53-4143-994b-c12595f6a666.png\\" alt=\\"image.png\\" loading=\\"lazy\\"></p>","autoDesc":true}');export{y as comp,F as data};