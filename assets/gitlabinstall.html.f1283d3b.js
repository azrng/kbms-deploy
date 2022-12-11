import{_ as n,W as t,X as s,Y as e,Z as i,$ as l,a0 as d,y as r}from"./framework.cf23f0c7.js";const c={},g=d(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="生成容器" tabindex="-1"><a class="header-anchor" href="#生成容器" aria-hidden="true">#</a> 生成容器</h2><p>下面的脚本只是测试使用，不建议生产使用(像一些挂载的需要自行处理)</p><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker-compose</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3&#39;

services:
  gitlab: #gitlab容器
    image: gitlab/gitlab-ce
    container_name: &#39;gitlab&#39;
    restart: always
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url &quot;http://172.30.112.1:9006&quot;
        gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 9022
        gitlab_rails[&#39;time_zone&#39;] = &#39;Asia/Shanghai&#39;
        # gitlab_rails[&#39;smtp_enable&#39;] = true
        # gitlab_rails[&#39;smtp_address&#39;] = &quot;smtp.exmail.qq.com&quot;
        # gitlab_rails[&#39;smtp_port&#39;] = 465
        # gitlab_rails[&#39;smtp_user_name&#39;] = &quot;&lt;your qq email&gt;&quot;
        # gitlab_rails[&#39;smtp_password&#39;] = &quot;xCcqh*L4jkqFCS&quot;
        # gitlab_rails[&#39;smtp_authentication&#39;] = &quot;login&quot;
        # gitlab_rails[&#39;smtp_enable_starttls_auto&#39;] = true
        # gitlab_rails[&#39;smtp_tls&#39;] = true
        # gitlab_rails[&#39;gitlab_email_from&#39;] = &#39;&lt;your qq email&gt;&#39;
        # gitlab_rails[&#39;smtp_domain&#39;] = &quot;exmail.qq.com&quot;
    ports:
      - &#39;9006:9006&#39;
      - &#39;443:443&#39;
      - &#39;9022:22&#39;
    volumes:
      - &#39;D:/Soft/gitlab/etcconfig:/etc/gitlab&#39; # &#39;/gitlab/config:/etc/gitlab&#39;
      # - &#39;/gitlab/logs:/var/log/gitlab&#39;
      # - &#39;/gitlab/data:/var/opt/gitlab&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h3><p>这里是9006:9006是因为external_url 配置了9006，请往下看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 挂载
docker run -d  -p 9443:443 -p 9006:9006 -p 9022:22 --name gitlab --restart always -v /home/gitlab/config:/etc/gitlab -v /home/gitlab/logs:/var/log/gitlab -v /home/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce

# 不挂载
docker run -d -p 9443:443 -p 443:443 -p 9006:9006 -p 9022:22 --name gitlab gitlab/gitlab-ce

# windows挂载
docker run -d -p 9443:443 -p 9006:9006 -p 9022:22 --name gitlab  -v  D:/Soft/gitlab/etcconfig:/etc/gitlab  gitlab/gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-d：后台运行</p><p>-p：将容器内部端口向外映射</p><p>--name：命名容器名称</p><p>-v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111139305.png" alt="img" loading="lazy"></p><p>进入容器内去编辑配置或者编辑挂载目录的文件</p><p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111139720.png" alt="img" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it gitlab bash
vi /etc/gitlab/gitlab.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>该文件要修改的配置是注释状态，所以直接可以在文件头部增加配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>external_url &#39;http://172.30.112.1:9006&#39;
#ssh主机ip
gitlab_rails[&#39;gitlab_ssh_host&#39;] = &#39;172.30.112.1&#39;
# ssh连接端口
gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 9022
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存并退出，然后gitlab.yml该文件可以编辑也可以不编辑(因为gitlab.rb内配置会覆盖这个，为了防止没有成功覆盖所以我在这里进行配置)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml
修改：gitlab setting=》host（172.30.112.1） 、port（9006）、ssh_host（172.30.112.1）
		 gitlab shell setting =》ssh_port（9022）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存退出，在容器内执行更新配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查找密码" tabindex="-1"><a class="header-anchor" href="#查找密码" aria-hidden="true">#</a> 查找密码</h3><p>gitlab默认用户是root，在容器内查找初始密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /etc/gitlab/initial_root_password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111139151.png" alt="img" loading="lazy"></p><h3 id="容器内修改密码" tabindex="-1"><a class="header-anchor" href="#容器内修改密码" aria-hidden="true">#</a> 容器内修改密码</h3><p>在容器内进入gitlab的bin目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt/gitlab/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行gitlab-rails console命令</p><p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111139064.png" alt="img" loading="lazy"></p><p>找到root的用户，输入u=User.where(id:1).first，然后回车</p><p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111139614.png" alt="img" loading="lazy"></p><p>修改password，输入u.password=&#39;123456789&#39;然后回车</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>u.password=&#39;123456789&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111139583.png" alt="img" loading="lazy"></p><p>修改确认密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>u.password_confirmation=&#39;123456789&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111139258.png" alt="img" loading="lazy"></p><p>保存修改，输入u.save，然后回车，等到输出true，这时，密码修改成功。</p><p><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111139851.png" alt="img" loading="lazy"></p><p>这里密码已经修改成功，可以用123456789密码登录进去了</p><h1 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h1><p>因为我们想是实现将容器内的80端口往外映射，所以我们在docker run的时候设置了-p 9006:80，但是因为我们在代码里面配置了external_url http://172.30.112.1:9006后就应该使用-p 9006:9006否则一直访问不到。</p><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>`,48),o={href:"https://blog.csdn.net/weixin_45649746/article/details/119816809",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/hellotim/p/13382565.html",target:"_blank",rel:"noopener noreferrer"};function b(u,m){const a=r("ExternalLinkIcon");return t(),s("div",null,[g,e("p",null,[i("docker安装gitlab： "),e("a",o,[i("https://blog.csdn.net/weixin_45649746/article/details/119816809"),l(a)])]),e("p",null,[i("netcore配置gitlab ci/cd："),e("a",v,[i("https://www.cnblogs.com/hellotim/p/13382565.html"),l(a)])])])}const h=n(c,[["render",b],["__file","gitlabinstall.html.vue"]]);export{h as default};
