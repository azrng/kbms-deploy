import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as r,a as n,d as e,e as a,b as o}from"./app-DMmdIwn0.js";const c="/kbms/soft/image-20240302203055844.png",p={},d=n("h2",{id:"概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#概述"},[n("span",null,"概述")])],-1),u=n("p",null,"一个linux操作系统发行版",-1),m=n("h2",{id:"镜像源",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#镜像源"},[n("span",null,"镜像源")])],-1),h={href:"https://mirrors.tuna.tsinghua.edu.cn/ubuntu/",target:"_blank",rel:"noopener noreferrer"},v=o(`<p>阿里云镜像源：http://mirrors.aliyun.com/ubuntu/</p><h2 id="操作命令" tabindex="-1"><a class="header-anchor" href="#操作命令"><span>操作命令</span></a></h2><h3 id="系统命令" tabindex="-1"><a class="header-anchor" href="#系统命令"><span>系统命令</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>//查询发行版本号
lsb_release <span class="token parameter variable">-a</span>

// 检查系统更新
<span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看服务器网络" tabindex="-1"><a class="header-anchor" href="#查看服务器网络"><span>查看服务器网络</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装net-tools工具</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> net-tools

<span class="token comment"># 获取网络配置 子网掩码是netmask</span>
<span class="token function">ifconfig</span>

<span class="token comment"># 获取服务器ip</span>
<span class="token function">ip</span> <span class="token parameter variable">-a</span>

<span class="token comment"># 获取网关地址</span>
route <span class="token parameter variable">-n</span>

<span class="token comment"># 查看DNS地址</span>
<span class="token function">nslookup</span> hcos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="固定服务器ip" tabindex="-1"><a class="header-anchor" href="#固定服务器ip"><span>固定服务器IP</span></a></h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>没搞成功</p></div><p>在进行任何更改之前，务必备份当前的网络配置文件，以防止出现意外问题。Ubuntu中的网络配置文件通常存储在/etc/netplan/目录下，文件名类似于00-installer-config.yaml或类似的名称。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 进入指定目录</span>
<span class="token builtin class-name">cd</span> /etc/netplan/

<span class="token comment"># 备份原来的文件</span>
<span class="token function">sudo</span> <span class="token function">cp</span> /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑网络配置文件，原始格式如下</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># This is the network config written by &#39;subiquity&#39;</span>
<span class="token key atrule">network</span><span class="token punctuation">:</span>
  <span class="token key atrule">ethernets</span><span class="token punctuation">:</span>
    <span class="token key atrule">eth0</span><span class="token punctuation">:</span>
      <span class="token key atrule">dhcp4</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后修改后的格式为</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># This is the network config written by &#39;subiquity&#39;</span>
network:
  ethernets:
    eth0:
      dhcp4: no
      addresses: <span class="token punctuation">[</span><span class="token number">172.30</span>.82.201/20<span class="token punctuation">]</span> <span class="token comment"># 指定静态IP地址及对应的子网掩码</span>
      gateway4: <span class="token number">192.168</span>.1.1 <span class="token comment"># 指定网关</span>
      nameservers: 
        addresses: <span class="token punctuation">[</span><span class="token number">8.8</span>.8.8  <span class="token comment"># DNS服务器地址</span>
  version: <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后，保存更新然后执行下面的命令使得IP固定生效</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> netplan apply
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="blk-update-request-i-o-error" tabindex="-1"><a class="header-anchor" href="#blk-update-request-i-o-error"><span>blk_update_request: I/O error</span></a></h5><p>执行命令<code>netplan apply</code>，应用配置的ip时，报错： blk_update_request: I/O error, dev fd0, sector 0</p><p>问题分析： 报这个错，是因为 linux加载了 floppy 软驱 驱动，我的虚机没有软驱，系统启动时加载了软盘驱动。</p><p>解决方法：通过关闭软驱模块来解决</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> lsmod <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> floppy
<span class="token function">sudo</span> rmmod floppy
<span class="token builtin class-name">echo</span> <span class="token string">&quot;blacklist floppy&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/modprobe.d/blacklist-floppy.conf
update-initramfs <span class="token parameter variable">-u</span> <span class="token parameter variable">-k</span> all
<span class="token function">reboot</span>

<span class="token comment"># 重启后确认floppy该模块没有启用即可</span>
lsmod <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> floppy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>资料：https://blog.csdn.net/inthat/article/details/122723421</p><h4 id="进程信息查看" tabindex="-1"><a class="header-anchor" href="#进程信息查看"><span>进程信息查看</span></a></h4><h5 id="htop安装和使用" tabindex="-1"><a class="header-anchor" href="#htop安装和使用"><span>htop安装和使用</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
<span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">htop</span>

<span class="token comment"># 使用</span>
<span class="token function">htop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ssh连接" tabindex="-1"><a class="header-anchor" href="#ssh连接"><span>SSH连接</span></a></h4><p>通过命令行工具去连接服务器</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ssh</span> 用户名@ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="用户操作" tabindex="-1"><a class="header-anchor" href="#用户操作"><span>用户操作</span></a></h3><h4 id="root账号配置" tabindex="-1"><a class="header-anchor" href="#root账号配置"><span>root账号配置</span></a></h4><p>ubuntu系统默认root用户是不能登录的，密码也是空的。如果要使用root用户登录，必须先为root用户设置密码，输入命令</p><p>sudo passwd root 然后按回车，此时会提示你输入密码，在password:后输入你现在登录的用户的密码 然后系统提示你输入新的UNIX密码 Enter new UNIX password:这里输入你想为root设置的密码，要输入两次 此时系统会出现密码设置成功的提示，最后退出终端，重启计算机，输入账号root 再输入root的密码就可能登录了！</p><p>如果你远程还连接不上，那么就还需要做下面的操作，执行下面的命令</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vim /etc/ssh/sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image-20240302203055844" tabindex="0" loading="lazy"><figcaption>image-20240302203055844</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>PermitRootLogin配置项是干嘛的呢？ 简单粗暴的解释就是： 1、配置文件中没有PermitRootLogin配置项，默认PermitRootLogin为yes 2、PermitRootLogin yes 允许root用户通过ssh的登录方式 3、PermitRootLogin no 不允许root用户通过ssh的登录方式</p></div><p>修改后重启服务，然后再次登录就可以了</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="目录操作" tabindex="-1"><a class="header-anchor" href="#目录操作"><span>目录操作</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">--</span> 创建文件
touch 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作"><span>文件操作</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>:w       <span class="token comment"># 保存文件，不退出 vim</span>
:w <span class="token function">file</span>  <span class="token comment"># 将修改另外保存到 file 中，不退出 vim</span>
:w<span class="token operator">!</span>      <span class="token comment"># 强制保存，不退出 vim</span>
:wq      <span class="token comment"># 保存文件，退出 vim</span>
:wq<span class="token operator">!</span>     <span class="token comment"># 强制保存文件，退出 vim</span>
:q       <span class="token comment"># 不保存文件，退出 vim</span>
:q<span class="token operator">!</span>      <span class="token comment"># 不保存文件，强制退出 vim</span>
:e<span class="token operator">!</span>      <span class="token comment"># 放弃所有修改，从上次保存文件开始再编辑</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>`,43),b={href:"https://releases.ubuntu.com/jammy/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mirrors.aliyun.com/ubuntu-releases/focal/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"或者清华大学软件镜像站：https://mirrors.tuna.tsinghua.edu.cn//#",-1);function f(y,x){const s=i("ExternalLinkIcon");return l(),r("div",null,[d,u,m,n("p",null,[e("镜像源："),n("a",h,[e("https://mirrors.tuna.tsinghua.edu.cn/ubuntu/"),a(s)])]),v,n("p",null,[e("官网系统下载地址："),n("a",b,[e("https://releases.ubuntu.com/jammy/"),a(s)]),e(" (根据需要安装界面版本或者无界面版本)")]),n("p",null,[e("或者下载阿里云的系统镜像："),n("a",g,[e("https://mirrors.aliyun.com/ubuntu-releases/focal/"),a(s)])]),k])}const q=t(p,[["render",f],["__file","gaishu.html.vue"]]),z=JSON.parse('{"path":"/soft/Linux/Ubuntu/gaishu.html","title":"概述","lang":"zh-CN","frontmatter":{"title":"概述","lang":"zh-CN","date":"2023-07-22T00:00:00.000Z","publish":true,"author":"azrng","order":1,"category":["Linux"],"tag":["无"],"filename":"gaishu","description":"概述 一个linux操作系统发行版 镜像源 镜像源：https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ 阿里云镜像源：http://mirrors.aliyun.com/ubuntu/ 操作命令 系统命令 查看服务器网络 固定服务器IP 提示 没搞成功 在进行任何更改之前，务必备份当前的网络配置文件，以防止出现意外...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/soft/Linux/Ubuntu/gaishu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"概述 一个linux操作系统发行版 镜像源 镜像源：https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ 阿里云镜像源：http://mirrors.aliyun.com/ubuntu/ 操作命令 系统命令 查看服务器网络 固定服务器IP 提示 没搞成功 在进行任何更改之前，务必备份当前的网络配置文件，以防止出现意外..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/soft/image-20240302203055844.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-16T06:43:07.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-07-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-16T06:43:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概述\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/soft/image-20240302203055844.png\\"],\\"datePublished\\":\\"2023-07-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-16T06:43:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"镜像源","slug":"镜像源","link":"#镜像源","children":[]},{"level":2,"title":"操作命令","slug":"操作命令","link":"#操作命令","children":[{"level":3,"title":"系统命令","slug":"系统命令","link":"#系统命令","children":[{"level":4,"title":"查看服务器网络","slug":"查看服务器网络","link":"#查看服务器网络","children":[]},{"level":4,"title":"固定服务器IP","slug":"固定服务器ip","link":"#固定服务器ip","children":[{"level":5,"title":"blk_update_request: I/O error","slug":"blk-update-request-i-o-error","link":"#blk-update-request-i-o-error","children":[]}]},{"level":4,"title":"进程信息查看","slug":"进程信息查看","link":"#进程信息查看","children":[{"level":5,"title":"htop安装和使用","slug":"htop安装和使用","link":"#htop安装和使用","children":[]}]},{"level":4,"title":"SSH连接","slug":"ssh连接","link":"#ssh连接","children":[]}]},{"level":3,"title":"用户操作","slug":"用户操作","link":"#用户操作","children":[{"level":4,"title":"root账号配置","slug":"root账号配置","link":"#root账号配置","children":[]}]},{"level":3,"title":"目录操作","slug":"目录操作","link":"#目录操作","children":[]},{"level":3,"title":"文件操作","slug":"文件操作","link":"#文件操作","children":[]}]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]}],"git":{"createdTime":1690016670000,"updatedTime":1710571387000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":5},{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":2}]},"readingTime":{"minutes":3.29,"words":987},"filePathRelative":"soft/Linux/Ubuntu/gaishu.md","localizedDate":"2023年7月22日","excerpt":"<h2>概述</h2>\\n<p>一个linux操作系统发行版</p>\\n<h2>镜像源</h2>\\n<p>镜像源：<a href=\\"https://mirrors.tuna.tsinghua.edu.cn/ubuntu/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</a></p>\\n<p>阿里云镜像源：http://mirrors.aliyun.com/ubuntu/</p>\\n<h2>操作命令</h2>\\n<h3>系统命令</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>//查询发行版本号\\nlsb_release <span class=\\"token parameter variable\\">-a</span>\\n\\n// 检查系统更新\\n<span class=\\"token function\\">apt-get</span> update\\n</code></pre></div>","autoDesc":true}');export{q as comp,z as data};