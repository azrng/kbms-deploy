import{_ as s,W as r,X as l,Y as e,Z as n,$ as a,a0 as d,y as c}from"./framework.cf23f0c7.js";const o={},t=d(`<p>该方法部署的jenkins里面不包含netcore环境，下面包含通过docker部署netcore步骤</p><h1 id="_1-部署jenkins" tabindex="-1"><a class="header-anchor" href="#_1-部署jenkins" aria-hidden="true">#</a> 1. 部署jenkins</h1><h2 id="_1-1-创建jenkins的工作目录" tabindex="-1"><a class="header-anchor" href="#_1-1-创建jenkins的工作目录" aria-hidden="true">#</a> 1.1 创建jenkins的工作目录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建工作目录 
mkdir /var/jenkins_home

//赋予权限 
chown -R 1000 /var/jenkins_home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-通过docker部署" tabindex="-1"><a class="header-anchor" href="#_1-2-通过docker部署" aria-hidden="true">#</a> 1.2 通过docker部署</h2><h3 id="_1-2-1-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_1-2-1-拉取镜像" aria-hidden="true">#</a> 1.2.1 拉取镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull  jenkinsci/blueocean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-2-生成容器" tabindex="-1"><a class="header-anchor" href="#_1-2-2-生成容器" aria-hidden="true">#</a> 1.2.2 生成容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#注意：切换一行执行命令 
docker run -u root -d -p 9003:8080 -p 50000:50000 
 -v /var/jenkins_home:/var/jenkins_home 
 -v /usr/bin/docker:/usr/bin/docker  
 -v /var/run/docker.sock:/var/run/docker.sock  
 -v /usr/local/bin/docker-compose:/usr/local/bin/docker-compose 
 jenkinsci/blueocean 
 
 一行显示:
docker run -u root -d -p 9003:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home  -v /usr/bin/docker:/usr/bin/docker   -v /var/run/docker.sock:/var/run/docker.sock   -v /usr/local/bin/docker-compose:/usr/local/bin/docker-compose  jenkinsci/blueocean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-通过docker-compose部署" tabindex="-1"><a class="header-anchor" href="#_1-3-通过docker-compose部署" aria-hidden="true">#</a> 1.3 通过docker-compose部署</h2><p>执行docker-compose脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.4&#39;

services:
  jenkins:
    container_name: jenkins
    image: jenkinsci/blueocean
    ports:
      - &quot;9003:8080&quot;
      - &quot;50000:50000&quot;
    restart: always
    user: root
    volumes:
      - &#39;/var/jenkins_home:/var/jenkins_home&#39;
      - &#39;/usr/bin/docker:/usr/bin/docker&#39;
      - &#39;/var/run/docker.sock:/var/run/docker.sock&#39;
      - &#39;/usr/local/bin/docker-compose:/usr/local/bin/docker-compose&#39;
    environment:
      - TZ=Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-1-执行命令生成容器" tabindex="-1"><a class="header-anchor" href="#_1-3-1-执行命令生成容器" aria-hidden="true">#</a> 1.3.1 执行命令生成容器</h3><p>docker-compose -f docker-compose.yaml up --build -d jenkins</p><h1 id="_2-访问jenkins网站" tabindex="-1"><a class="header-anchor" href="#_2-访问jenkins网站" aria-hidden="true">#</a> 2. 访问jenkins网站</h1>`,15),v={href:"http://192.168.1.14:8080/",target:"_blank",rel:"noopener noreferrer"},u=d(`<p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101438040.png" alt="img" loading="lazy"></p><h2 id="_2-1-寻找超级管理员密码" tabindex="-1"><a class="header-anchor" href="#_2-1-寻找超级管理员密码" aria-hidden="true">#</a> 2.1 寻找超级管理员密码</h2><p>进入容器，然后去容器的执行目录下查找管理员的密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 进入容器 
docker exec -it 容器ID bash 
// 查看密码 
cat /var/jenkins_home/secrets/initialAdminPassword

或者不进入容器
docker exec 容器ID  cat /var/jenkins_home/secrets/initialAdminPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101438856.png" alt="img" loading="lazy"></p><p>输入找到的管理员密码然后进入系统</p><h2 id="_2-2-进入jenkins" tabindex="-1"><a class="header-anchor" href="#_2-2-进入jenkins" aria-hidden="true">#</a> 2.2 进入jenkins</h2><p>新手入门，选择安装插件的方式，这里我们直接选择安装推荐的插件然后进入系统</p><p>注意：安装插件报错的话继续在执行一遍。</p><h2 id="_2-3-设置管理员用户密码" tabindex="-1"><a class="header-anchor" href="#_2-3-设置管理员用户密码" aria-hidden="true">#</a> 2.3 设置管理员用户密码</h2><p>创建管理员用户密码</p><p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101438670.png" alt="img" loading="lazy"></p><h2 id="_2-4-系统界面" tabindex="-1"><a class="header-anchor" href="#_2-4-系统界面" aria-hidden="true">#</a> 2.4 系统界面</h2><p>如果系统管理里面有错误，那么我们可以手动安装和修改。</p><h2 id="_2-5-修改镜像源" tabindex="-1"><a class="header-anchor" href="#_2-5-修改镜像源" aria-hidden="true">#</a> 2.5 修改镜像源</h2><p>插件管理-&gt;高级-&gt;升级站点，修改为清华大学插件源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 清华大学官方镜像
https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-错误" tabindex="-1"><a class="header-anchor" href="#_3-错误" aria-hidden="true">#</a> 3 错误</h1><p>如果出现错误，那么就需要去查看控制台输出，根据错误找原因。</p><h3 id="_3-1-ipv4-forwarding-is-disabled" tabindex="-1"><a class="header-anchor" href="#_3-1-ipv4-forwarding-is-disabled" aria-hidden="true">#</a> 3.1 IPv4 forwarding is disabled</h3><p>意思就是linux没有开启 Ipv4 数据包转发功能</p><p>可以先尝试重启docker，如果没有作用可以修改下面配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 1. 打开 sysctl.conf
vim /etc/sysctl.conf

# 2.添加下面一行
net.ipv4.ip_forward=1

# 3.重启 network 和 docker
systemctl restart network &amp;&amp; systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-参考文档" tabindex="-1"><a class="header-anchor" href="#_4-参考文档" aria-hidden="true">#</a> 4 参考文档</h1>`,24),h={href:"https://www.jenkins.io/doc/book/installing/docker/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/xiaoxiaotank/p/14762665.html",target:"_blank",rel:"noopener noreferrer"};function b(p,k){const i=c("ExternalLinkIcon");return r(),l("div",null,[t,e("p",null,[n("访问地址："),e("a",v,[n("http://IP:8080"),a(i)])]),u,e("p",null,[n("官方文档："),e("a",h,[n("https://www.jenkins.io/doc/book/installing/docker/"),a(i)])]),e("p",null,[n("xiaoxiaotank："),e("a",m,[n("https://www.cnblogs.com/xiaoxiaotank/p/14762665.html"),a(i)])])])}const g=s(o,[["render",b],["__file","docker-install.html.vue"]]);export{g as default};
