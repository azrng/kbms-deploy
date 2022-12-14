import{_ as s,W as r,X as d,Y as e,Z as i,$ as a,a0 as t,y as l}from"./framework.cf23f0c7.js";const h={},o=t(`<h1 id="高级搜索" tabindex="-1"><a class="header-anchor" href="#高级搜索" aria-hidden="true">#</a> 高级搜索</h1><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>通过in关键字搜索
语法：关键字 in:
示例：python in:name,description,readme

通过stars、fork数量搜索
语法：关键字 stars:&gt;数量  forks:&gt;数量
示例：python in:name stars:&gt;9000 forks:&gt;2400

按照范围查询
语法：关键字 stars:范围1..范围2
示例：python in:name stars:9000..9500

按创建、更新时间搜索
按照创建时间、更新时间搜索可以把版本老旧的资源筛选出去
语法
创建时间：关键字 created:&gt;=YYYY-MM-DD
更新时间：关键字 pushed:&gt;=YYYY-MM-DD
示例：
python in:name created:&gt;2020-01-01 pushed:&gt;2020-01-01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="访问加速" tabindex="-1"><a class="header-anchor" href="#访问加速" aria-hidden="true">#</a> 访问加速</h1><h2 id="安装fastgithub" tabindex="-1"><a class="header-anchor" href="#安装fastgithub" aria-hidden="true">#</a> 安装FastGithub</h2>`,4),c={href:"https://github.com/xljiulang/fastgithub",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="修改host文件访问github" tabindex="-1"><a class="header-anchor" href="#修改host文件访问github" aria-hidden="true">#</a> 修改host文件访问github</h2><p>host文件所在位置：C:\\Windows\\System32\\drivers\\etc\\hosts</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code># GitHub Start
 192.30.253.112 github.com
 69.171.239.11 github.global.ssl.fastly.net
 192.30.253.118 gist.github.com
 151.101.112.133 assets-cdn.github.com
 151.101.184.133 raw.githubusercontent.com
 151.101.112.133 gist.githubusercontent.com
 151.101.184.133 cloud.githubusercontent.com
 151.101.112.133 camo.githubusercontent.com
 151.101.112.133 avatars0.githubusercontent.com
 151.101.112.133 avatars1.githubusercontent.com
 151.101.184.133 avatars2.githubusercontent.com
 151.101.12.133 avatars3.githubusercontent.com
 151.101.12.133 avatars4.githubusercontent.com
 151.101.184.133 avatars5.githubusercontent.com
 151.101.184.133 avatars6.githubusercontent.com
 151.101.184.133 avatars7.githubusercontent.com
 151.101.12.133 avatars8.githubusercontent.com
# GitHub End
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dev-sidecar" tabindex="-1"><a class="header-anchor" href="#dev-sidecar" aria-hidden="true">#</a> dev-sidecar</h2><p>开发者边车，github打不开，github加速，git clone加速，git release下载加速，stackoverflow加速</p>`,5),b={href:"https://github.com/docmirror/dev-sidecar",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="镜像访问" tabindex="-1"><a class="header-anchor" href="#镜像访问" aria-hidden="true">#</a> 镜像访问</h2><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>https://github.com.cnpmjs.org
https://hub.fastgit.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的镜像就是一个克隆版的 GitHub，你可以访问上面的镜像网站，网站的内容跟 GitHub 是完整同步的镜像，然后在这个网站里面进行下载克隆等操作</p><h2 id="文件加速" tabindex="-1"><a class="header-anchor" href="#文件加速" aria-hidden="true">#</a> 文件加速</h2><p>利用 Cloudflare Workers 对 github release 、archive 以及项目文件进行加速，部署无需服务器且自带CDN.</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code>https://gh.api.99988866.xyz
https://g.ioiox.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),m={href:"https://hunsh.net/archives/23/",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"加速下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#加速下载","aria-hidden":"true"},"#"),i(" 加速下载")],-1),p=e("p",null,"只需要复制当前 GitHub 地址粘贴到输入框中就可以代理加速下载！",-1),_={href:"http://toolwa.com/github/",target:"_blank",rel:"noopener noreferrer"},f=e("h1",{id:"骚操作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#骚操作","aria-hidden":"true"},"#"),i(" 骚操作")],-1),x=e("h2",{id:"_1-一键生成-github-简历",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-一键生成-github-简历","aria-hidden":"true"},"#"),i(" 1. 一键生成 Github 简历")],-1),w={href:"http://resume.github.io/",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"当时我参加的校招的时候，个人信息那里就放了一个在线的 Github 简历。我觉得这样会让面试官感觉你是一个内行，会提高一些印象分。",-1),G=e("h2",{id:"_2-个性化-github-首页",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-个性化-github-首页","aria-hidden":"true"},"#"),i(" 2. 个性化 Github 首页")],-1),y=e("p",null,"Github 目前支持在个人主页自定义展示一些内容。你只需要创建一个和你的 Github 账户同名的仓库，然后自定义README.md的内容即可。展示在你主页的自定义内容就是README.md的内容。",-1),Y=e("h2",{id:"_3-自定义项目徽章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-自定义项目徽章","aria-hidden":"true"},"#"),i(" 3. 自定义项目徽章")],-1),j={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"_4-github-表情",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-github-表情","aria-hidden":"true"},"#"),i(" 4. Github 表情")],-1),D={href:"https://www.cnblogs.com/javaguide/p/www.webfx.com/tools/emoji-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"},H=e("h1",{id:"参考文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),i(" 参考文档")],-1),M={href:"https://www.cnblogs.com/javaguide/p/13948501.html",target:"_blank",rel:"noopener noreferrer"};function N(C,V){const n=l("ExternalLinkIcon");return r(),d("div",null,[o,e("p",null,[i("地址："),e("a",c,[i("https://github.com/xljiulang/fastgithub"),a(n)])]),u,e("p",null,[e("a",b,[i("https://github.com/docmirror/dev-sidecar"),a(n)])]),v,e("p",null,[i("以上网站为演示站点，如无法打开可以查看开源项目：gh-proxy-GitHub("),e("a",m,[i("https://hunsh.net/archives/23/"),a(n)]),i(") 文件加速自行部署。")]),g,p,e("p",null,[i("地址："),e("a",_,[i("http://toolwa.com/github/"),a(n)])]),f,x,e("p",null,[i("通过 "),e("a",w,[i("http://resume.github.io/"),a(n)]),i(" 这个网站你可以一键生成一个在线的 Github 简历。")]),k,G,y,Y,e("p",null,[i("你在 Github 上看到的项目徽章都是通过 "),e("a",j,[i("https://shields.io/"),a(n)]),i(" 这个网站生成的。")]),E,e("p",null,[i("如果你想要在 Github 使用表情的话，可以在这里找找 ："),e("a",D,[i("www.webfx.com/tools/emoji-cheat-sheet/"),a(n)]),i("。")]),H,e("p",null,[i("博客："),e("a",M,[i("https://www.cnblogs.com/javaguide/p/13948501.html"),a(n)])])])}const S=s(h,[["render",N],["__file","overview.html.vue"]]);export{S as default};
