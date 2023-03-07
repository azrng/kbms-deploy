import{_ as a,W as r,X as s,Y as e,Z as d,$ as i,a0 as l,C as c}from"./framework-63781bb7.js";const t={},o=l(`<h1 id="linux安装docker" tabindex="-1"><a class="header-anchor" href="#linux安装docker" aria-hidden="true">#</a> Linux安装docker</h1><h1 id="安装条件" tabindex="-1"><a class="header-anchor" href="#安装条件" aria-hidden="true">#</a> 安装条件</h1><p>在centos 7安装docker要求系统64位，系统内核版本3.10以上，可以使用命令查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uname -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意</strong>：要不就是开放指定的端口，要不直接就在安装之前将服务器防火墙关闭</p><h1 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本" aria-hidden="true">#</a> 卸载旧版本</h1><p>老版本的docker被称为docker或者docker-engine，如果安装就需要卸载它们以及相关的依赖项：</p><p>命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum remove docker \\
                  docker-client \\
                  docker-client-latest \\
                  docker-common \\
                  docker-latest \\
                  docker-latest-logrotate\\
                  docker-logrotate \\
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新版本的名称被称为docker-ce</p><h1 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法" aria-hidden="true">#</a> 安装方法</h1><p>安装方法有两种：</p><p>1.从docker存储库中拉取进行安装，以简化安装和升级任务。推荐。</p><p>2.下载RPM软件包并手动安装，并完全手动管理升级。</p><p>这边只描述使用存储库进行安装</p><p>安装yum-utils</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install -y yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置存储库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker官方仓库
sudo yum-config-manager  --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 使用阿里云docker仓库
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装最新版本docker engine和容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install -y docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令会安装 Docker，但不会启动 Docker。它还会创建一个 docker组，但是，默认情况下它不会向该组添加任何用户。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 启动docker
sudo systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配合docker镜像加速器,不过貌似如何使用阿里云docker仓库好像不需要配置网速都不差。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;加速器url&quot;]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询docker版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常用命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 重启docker
sudo systemctl restart  docker 
# 查看docker服务状态
sudo systemctl status docker
# 将docker服务设置为开机启动
sudo systemctl enable docker
# 查看docker版本信息
docker --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h1><p>卸载docker包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum remove docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>主机上docker一些容器，卷或自定义配置文件不会自动删除，可以使用命令删除：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> sudo rm -rf /var/lib/docker
 sudo rm -rf /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>检测docker是否可以正常运行（运行hello-word镜像，如果本机没有，系统会自动去拉取）</p><p>命令：sudo docker run hello-world</p><p>然后出来 Hello from Docker就说明成功了</p><h1 id="错误" tabindex="-1"><a class="header-anchor" href="#错误" aria-hidden="true">#</a> 错误</h1><p>执行安装出错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install -y docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631381660834-2f21de05-73ed-46ab-957b-b05230265697.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>解决方案</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl https://packages.microsoft.com/config/rhel/7/prod.repo &gt; ./microsoft-prod.repo
sudo cp ./microsoft-prod.repo /etc/yum.repos.d/
yum update -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h1>`,44),u={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"离线安装模式",-1),m={href:"https://www.cnblogs.com/kingsonfu/p/11576797.html",target:"_blank",rel:"noopener noreferrer"};function p(b,g){const n=c("ExternalLinkIcon");return r(),s("div",null,[o,e("p",null,[d("官方教程："),e("a",u,[d("https://docs.docker.com/engine/install/centos/"),i(n)])]),v,e("p",null,[d("查看博客："),e("a",m,[d("https://www.cnblogs.com/kingsonfu/p/11576797.html"),i(n)])])])}const x=a(t,[["render",p],["__file","linux-install.html.vue"]]);export{x as default};
