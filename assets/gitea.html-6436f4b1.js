import{_ as t,W as i,X as o,Y as a,Z as n,$ as s,a0 as r,C as p}from"./framework-63781bb7.js";const l={},g=a("h1",{id:"介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),c=a("p",null,"一款极易搭建的自助 Git 服务，是在 Gogs 的基础上新开一个发行分支。",-1),d={href:"https://gitea.com/",target:"_blank",rel:"noopener noreferrer"},h=r(`<h1 id="安装方式" tabindex="-1"><a class="header-anchor" href="#安装方式" aria-hidden="true">#</a> 安装方式</h1><p>docker方式</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>docker run <span class="token operator">-</span>d <span class="token operator">--</span>name<span class="token operator">=</span>gitea <span class="token operator">-</span>p <span class="token number">10022</span><span class="token punctuation">:</span><span class="token number">22</span> <span class="token operator">-</span>p <span class="token number">9004</span><span class="token punctuation">:</span><span class="token number">3000</span> <span class="token operator">-</span>v <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>lib<span class="token operator">/</span>gitea<span class="token punctuation">:</span><span class="token operator">/</span>data gitea<span class="token operator">/</span>gitea

docker run <span class="token operator">-</span>d <span class="token operator">--</span>privileged<span class="token operator">=</span><span class="token boolean">true</span> <span class="token operator">--</span>restart<span class="token operator">=</span>always <span class="token operator">--</span>name<span class="token operator">=</span>gitea <span class="token operator">-</span>p <span class="token number">10022</span><span class="token punctuation">:</span><span class="token number">22</span> <span class="token operator">-</span>p <span class="token number">9004</span><span class="token punctuation">:</span><span class="token number">3000</span> <span class="token operator">-</span>v <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>lib<span class="token operator">/</span>gitea<span class="token punctuation">:</span><span class="token operator">/</span>data gitea<span class="token operator">/</span>gitea
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><p>安装完成后访问 xxxxx:9004，配置数据库</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212132304230.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>配置一般设置</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305978.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可选设置</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305101.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>配置管理员密码，然户跳转打开主界面</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305403.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="管理后台" tabindex="-1"><a class="header-anchor" href="#管理后台" aria-hidden="true">#</a> 管理后台</h2><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305445.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库" aria-hidden="true">#</a> 创建仓库</h2><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305069.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>展示</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305674.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>克隆项目</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305820.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>编写项目提交</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305157.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="注册用户" tabindex="-1"><a class="header-anchor" href="#注册用户" aria-hidden="true">#</a> 注册用户</h2><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305193.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>还对用户名有校验， 应该只包含字母数字, 破折号 (&#39;-&#39;), 下划线 (&#39;_&#39;) 和点 (&#39;. &#39;) 。</p><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>`,26),f={href:"https://blog.wolfogre.com/posts/gogs-vs-gitea/",target:"_blank",rel:"noopener noreferrer"};function u(m,k){const e=p("ExternalLinkIcon");return i(),o("div",null,[g,c,a("p",null,[n("官方地址："),a("a",d,[n("https://gitea.com/"),s(e)])]),h,a("p",null,[n("和gogs之间的故事："),a("a",f,[n("https://blog.wolfogre.com/posts/gogs-vs-gitea/"),s(e)])])])}const v=t(l,[["render",u],["__file","gitea.html.vue"]]);export{v as default};