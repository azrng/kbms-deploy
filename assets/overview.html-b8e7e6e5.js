import{_ as i,W as t,X as l,Y as e,Z as s,$ as n,a0 as r,C as p}from"./framework-63781bb7.js";const c={},o=e("h1",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),d=e("p",null,"创建好连接上linux系统",-1),m=e("p",null,"然后我们需要先添加yum源",-1),v={href:"https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm",target:"_blank",rel:"noopener noreferrer"},u=r(`<p>然后升级所有包的同时也升级软件和系统内核</p><p>命令：yum update</p><p>或者命令：yum upgrade</p><h1 id="安装脚本" tabindex="-1"><a class="header-anchor" href="#安装脚本" aria-hidden="true">#</a> 安装脚本</h1><p>centos 安装netstat</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装vim和yum</p><p>容器内安装的命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">vim</span> <span class="token parameter variable">-y</span>
<span class="token function">apt-get</span> <span class="token function">install</span> yum <span class="token parameter variable">-y</span>

快速添加一个yum源
yum-config-manager --add-repo http://mirrors.aliyun.com/repo/Centos-7.repo

如果提示没有yum-config-manager命令，执行apt-get <span class="token parameter variable">-y</span> <span class="token function">install</span> yum-utils 安装即可，然后再执行一次上面的命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="防火墙配置" tabindex="-1"><a class="header-anchor" href="#防火墙配置" aria-hidden="true">#</a> 防火墙配置</h1><p>对防火墙规则进行保存时候提示错误</p><p>保存命令：service iptables save</p><p>报错：The service command supports only basic LSB actions (start, stop, restart, try-restart, reload, force-reload, status). For other actions, please try to use systemctl.</p><p><strong>解决方法：</strong></p><p>systemctl stop firewalld 关闭防火墙</p><p>yum install iptables-services 安装或更新服务</p><p>再使用systemctl enable iptables 启动iptables</p><p>最后 systemctl start iptables 打开iptables</p><p>再执行service iptables save</p><p>3.重启iptables服务：</p><p>service iptables restart</p><p>执行完毕之后/etc/syscofig/iptables文件就有了</p><p>关闭防火墙</p><p>查看防火墙状态</p><p>firewall-cmd <em>--state</em></p><p>停止firewall</p><p>systemctl stop firewalld.service</p><p>禁止firewall开机启动</p><p>systemctl disable firewalld.service</p><p>常用命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>移除指定端口：
firewall-cmd <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span><span class="token number">5000</span>/tcp

-- 开启端口
firewall-cmd  <span class="token parameter variable">--permanent</span>  <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">5000</span>/tcp

-- 重启防火墙服务使配置生效 
firewall-cmd <span class="token parameter variable">--reload</span>

-- 查看当前开启的端口号
firewall-cmd --list-port

-- 停止防火墙
systemctl stop firewalld

-- 查看防火墙状态
systemctl status firewalld 

-- 启动防火墙
systemctl start firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h1><p>进入要修改权限的文件夹所在目录</p><p>sudo chmod -R 777 文件夹名</p><p>注意：</p><p>【注】 -R 是指级联应用到目录里的所有子目录和文件</p><p>777 是所有用户都拥有最高权限</p><h1 id="教程" tabindex="-1"><a class="header-anchor" href="#教程" aria-hidden="true">#</a> 教程</h1>`,38),b={href:"https://www.cnblogs.com/pengyunjing/p/10441944.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.centoschina.cn/safe/centossafe/9488.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://mp.weixin.qq.com/s/lLtbR3BihvOfVJv5VBj0AQ",target:"_blank",rel:"noopener noreferrer"};function g(_,k){const a=p("ExternalLinkIcon");return t(),l("div",null,[o,d,m,e("p",null,[s("命令：rpm -Uvh "),e("a",v,[s("https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm"),n(a)])]),u,e("p",null,[s("常用linux命令 "),e("a",b,[s("https://www.cnblogs.com/pengyunjing/p/10441944.html"),n(a)])]),e("p",null,[s("关于阿里云centos服务器的一些安全性设置 "),e("a",h,[s("https://www.centoschina.cn/safe/centossafe/9488.html"),n(a)])]),e("p",null,[s("日常必备的16个linux命令："),e("a",f,[s("https://mp.weixin.qq.com/s/lLtbR3BihvOfVJv5VBj0AQ"),n(a)])])])}const w=i(c,[["render",g],["__file","overview.html.vue"]]);export{w as default};
