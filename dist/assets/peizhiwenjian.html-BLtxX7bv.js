import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as o,a as n,b as s,d as p,e}from"./app-vSdX8vi3.js";const c="/kbms/common/202212111150904.webp",r="/kbms/common/202212111150980.webp",d="/kbms/common/202212111151985.webp",u="/kbms/common/202212111151628.webp",m="/kbms/common/202212111151883.webp",k="/kbms/common/202212111151285.webp",v="/kbms/common/202212111151130.webp",g="/kbms/common/202212111151952.webp",b="/kbms/common/202212111151890.webp",y="/kbms/common/202212111151662.webp",h="/kbms/common/202212111151055.webp",x="/kbms/common/202212111151701.webp",f="/kbms/common/202212111151741.webp",_="/kbms/common/202212111152075.webp",q="/kbms/common/202212111152347.webp",w="/kbms/common/202212111152947.webp",z={},D=e(`<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><p><strong>Docker Compose需要搭配YAML文件使用，YAML 是一种数据序列化语言，适用于所有编程语言，后缀名为.yml</strong>。</p><p>所以在进行实操前，需要大概的了解一下YAML的语法，不要慌，语法和Json的思路很像，大概了解一下，后续用到查文档就行啦。</p><h3 id="简单说说语法" tabindex="-1"><a class="header-anchor" href="#简单说说语法"><span>简单说说语法</span></a></h3><p><strong>YAML文件内容是通过空格的缩进来代表层次</strong>，常用的数据类型有如下：</p><ul><li><p><strong>对象</strong>：键值对集合；</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># yaml 对象语法
testKey:testValue
# Json 语法
{&quot;testKey&quot;:&quot;testValue&quot;}
# yaml 嵌套对象
testKey:{testKey1:testValue1,testKey2:testValue2}
# Json 语法
{&quot;testKey&quot;:{&quot;testKey1&quot;:&quot;testValue1&quot;,&quot;testKey2&quot;:&quot;testValue2&quot;}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>数组</strong>：一组按次序排列的数据；用-前缀表示。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># yaml 数组语法
-value1
-value2
-value3
# Json 数组语法
[&quot;value1&quot;,&quot;value2&quot;,&quot;value3&quot;]
# yaml 数组行内语法
testKey:[value1,value2]
# Json 语法
{&quot;testKey&quot;:[&#39;value1&#39;,&#39;value2&#39;]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>纯量</strong>：不可再分的值，包括字符串、整数、浮点数、日期、布尔值等。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># yaml
testKey:666
# Json
{testKey:666}
# yaml
isbool:true
# Json
{isbool:true}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>常规的基本语法格式约定如下：</p><ul><li>大小写敏感</li><li>使用空格缩进表示层级关系</li><li>缩进不允许使用tab，只允许空格</li><li>缩进的空格数不重要，只要相同层级的元素左对齐即可</li><li>&#39;#&#39;表示注释</li></ul><p>大概了解上面这些，关于日常Docker Compose用到的文件基本上够用了，如果有需要进阶的，可以去查查对应的语法。传送门：</p><p>https://yaml.org/spec/1.2.2/</p><p>https://www.runoob.com/w3cnote/yaml-intro.html</p><p>关于YAML文件内容中配置的命令和Dockerfile的命令差不多是一一对应的，稍后会简单说说。</p><h3 id="实操撸文件" tabindex="-1"><a class="header-anchor" href="#实操撸文件"><span>实操撸文件</span></a></h3><p>这里还是以一个WebApi为例，例中需要依赖Redis服务。</p>`,14),M=e('<li><p><strong>创建项目，编写例子</strong></p><p>这里只是引入了一个Redis的缓存包，通过构造函数注入之后就可以直接用啦；编写了一个API接口TestCache。</p><figure><img src="'+c+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>这里还需要在Startup文件中注入相关服务，并指定Redis的连接地址，如下：</p><figure><img src="'+r+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>运行起来测试一下效果，如下：</p><figure><img src="'+d+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>Redis中也有值了，这里需要注意：存入Redis中的类型是Hash。</p><figure><img src="'+u+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure></li>',1),A=n("p",null,[n("strong",null,"编写Dockerfile文件")],-1),K=n("p",null,"在项目根目录创建一个Dockerfile文件，内容如下：",-1),C=n("figure",null,[n("img",{src:m,alt:"图片",tabindex:"0",loading:"lazy"}),n("figcaption",null,"图片")],-1),S={href:"https://mp.weixin.qq.com/s?__biz=MzU1MzYwMjQ5MQ==&mid=2247485700&idx=1&sn=5b5625bde7ba831bd99946906fbd3615&chksm=fbf115d0cc869cc612e567f604ac8d1c233f739f8439df72f8bc7a194e501861efe225d44260&token=403152068&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},L=n("p",null,"注：这里记得将Dockerfile文件通过右键->属性->设置为始终复制，保证编译后的文件有最新文件",-1),R=n("li",null,[n("p",null,[n("strong",null,"编写Compose文件")]),n("p",null,"在项目根目录下创建docker-compose.yml文件，内容如下："),n("figure",null,[n("img",{src:k,alt:"图片",tabindex:"0",loading:"lazy"}),n("figcaption",null,"图片")]),n("p",null,"有了这个项目就可以一键启动了，这里需要稍微改一下我们原来的代码，如下："),n("figure",null,[n("img",{src:v,alt:"图片",tabindex:"0",loading:"lazy"}),n("figcaption",null,"图片")]),n("p",null,"注：这里记得将docker-compose.yml文件通过右键->属性->设置为始终复制，保证编译后的文件有最新文件。")],-1),V=e('<h3 id="体验一键启动" tabindex="-1"><a class="header-anchor" href="#体验一键启动"><span>体验一键启动</span></a></h3><ul><li><p><strong>将项目先发布</strong>，并拷贝到对应的服务器上，如下：</p><figure><img src="'+g+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>这里用的是我的阿里云服务器，拷贝文件如下：</p><figure><img src="'+b+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure></li><li><p><strong>一键启动</strong></p><p>在docker-compose.yml所在的目录下执行如下命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker-compose up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是执行docker-compose up内部执行的步骤：</p><figure><img src="`+y+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>先是构建我们的程序，然后拉取依赖的Redis服务，并启动，最后启动我们的程序。(执行顺序和依赖有关系)；启动之后就可以根据docker-compose.yml文件中映射的端口访问了，如下：</p><figure><img src="'+h+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure></li><li><p><strong>看看启动的容器名</strong></p><p><img src="'+x+'" alt="图片" loading="lazy">image-20211007165313310</p><p>通过<code>docker ps -n 2</code> 查看最近启动的容器，容器的名字规则是：<strong><code>目录名_Compose文件中定义的服务名_序号</code></strong>，那小伙伴肯定会好奇为什么程序能通过myredis名字连接到redis，可以通过<code>docker inspect composetest_myredis_1</code>查看容器详情：</p><figure><img src="'+f+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>同样可以查看到API服务对应的容器也是用的composetest_default这个网络，这个网络是一个桥接模式，可以通过<code>docker network ls</code>看到，如下：</p><figure><img src="'+_+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure></li><li><p><strong>docker compose常用命令</strong></p><p><code>docker-compose build</code>:构建或者重新构建服务</p><p><code>docker-compose up</code>:构建、启动容器，加上-d选项代表后台运行。</p><p><code>docker-compose ps</code>：列出所有通过Compose运行的容器</p><figure><img src="'+q+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p><code>docker-compose logs</code>：打印相关日志信息</p><figure><img src="'+w+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p><code>docker-compose stop/start/restart</code>d：可以指定服务停止、开始和重新启动</p><p>docker-compose命令和docker的命令基本是一样的。</p></li><li><p><strong>docker-compose.yml文件内容常用属性</strong></p><p><strong>version</strong>：指定 docker-compose.yml 文件的版本，一般都是用version 3；</p><p><strong>services</strong>：定义多个容器集合，有多少写多少；</p><p><strong>build</strong>：构建镜像，和<code>docker build</code>一样功效；</p><p><strong>environment</strong>：配置环境变量，和Dockerfile中ENV 关键字功能一样；</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 设置环境变量
environment:
  RACK_ENV: development
  SHOW: &#39;true&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>expose</strong>：暴露端口，和Dockerfile中的EXPOSE 关键字功能一样；</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>expose:
  - &quot;80&quot;
  - &quot;9999&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ports</strong>：配置端口映射，和<code>docker run -p</code>一样功效</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ports:
 - &quot;8080:80&quot;
 - &quot;6379:6379&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>volumes</strong>：指定卷挂载路径，与Dockerifle中的VOLUME 关键字功能一样</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>volumes:
  - /var/lib/mysql
  - /opt/data:/var/lib/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>command</strong>：覆盖容器启动后默认执行的命令，和Dockerfile文件中的CMD命令一样；</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>command: bundle exec thin -p 3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>image</strong>：指定要用的镜像，构建的时候会拉取。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 指定要使用redis镜像
image: redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>上面列出了一些比较常用的，具体的可以参考官网：https://docs.docker.com/compose/compose-file/compose-file-v3/</p><p>代码地址如下：https://gitee.com/CodeZoe/microservies-demo/tree/main/DockerComposeDemo</p><h2 id="网桥模型" tabindex="-1"><a class="header-anchor" href="#网桥模型"><span>网桥模型</span></a></h2><p>docker引擎刚建立的时候，会新建一个docker0网桥（driver= bridge）， 新加入的容器默认都会加入这个网桥。 当执行docker-compose  up时： ① 创建名为 {project}_default 的网桥 ② 定义的容器会加入{project}_default 网络。</p><h2 id="网络配置" tabindex="-1"><a class="header-anchor" href="#网络配置"><span>网络配置</span></a></h2><p>查看docker的网络列表</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用自定义网络：创建一个新的自定义网络，并将两个容器连接到该网络。这样，它们就可以通过容器名称进行通信。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">networks</span><span class="token punctuation">:</span> 
  <span class="token key atrule">my-bridge</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose容器网络互通" tabindex="-1"><a class="header-anchor" href="#docker-compose容器网络互通"><span>docker-compose容器网络互通</span></a></h3><p>使用docker-compose可以运行多个容器，创建一个公共的网络来让这些容器之间互相通信。</p><p>举例让多个容器都可以连接到mysql，创建一个公共网络mysql</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create mysql

<span class="token comment"># 查看网络列表</span>
<span class="token function">docker</span> network <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候举例使用docker-compose创建一个mysql，且使用该mysql网络</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql8</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql8
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">8</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>default<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>plugin=mysql_native_password
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># 自己手动创建公共网络mysql</span>
<span class="token comment"># docker network create mysql</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该代码指定了我们要创建的服务为mysql8，它使用最新的Mysql8镜像，并设置了Mysql的root密码。我们还将服务添加到了名为mysql的公共网络中，然后启动服务</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>docker<span class="token punctuation">-</span>compose up <span class="token punctuation">-</span>d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面就举例部署一个其他的服务，并将该服务也加入mysql网络</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.8&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> wordpress
    <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress<span class="token punctuation">:</span>latest
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ~/Docker/wordpress/html<span class="token punctuation">:</span>/var/www/html
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> mysql8<span class="token punctuation">:</span><span class="token number">3306</span>
      <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> root
      <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
      <span class="token key atrule">WORDPRESS_DB_NAME</span><span class="token punctuation">:</span> sample
    <span class="token comment"># 连接mysql网络</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该配置我们指定了mysql数据库，并且还设置了加入mysql网络，在文件的末尾，我们定义了mysql网络，并指定它的外部名称为mysql，这样我们的服务才能正确地连接到该网络，最后使用命令<code>docker-compose up -d</code>生成服务。</p><p>至此，成功地创建了一个公共网络mysql，并将我们的服务，如wordpress，连接到该网络中，实现了多docker-compose互通网络服务。</p><p>参考资料：https://www.chengzz.com/1124.html</p><h2 id="脚本示例" tabindex="-1"><a class="header-anchor" href="#脚本示例"><span>脚本示例</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.4&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> <span class="token comment">#告诉docker-compose怎样为每个服务构建镜像</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./app
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
    <span class="token key atrule">expose</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80&quot;</span>
    <span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span> <span class="token comment">#在容器内添加主机配置映射</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;dockerhost:172.18.0.1&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span> <span class="token comment">#环境变量配置容器内时区</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment">#数据映射</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /mnt/eqidmanager/eqidlogs
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /app/eqidlogs
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /home/huangjun/eqidmanager/applogs
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /app/logs
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /home/huangjun/eqidmanager/EqidManager.db
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /app/EqidManager.db
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span> <span class="token comment">## 配置了健康检查功能，使用docker内置的healthcheck指定轮询app内的健康检查端口</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;CMD&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;curl&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;-f&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;http://localhost/healthcheck&#39;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 1m30s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span>
      <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 6s
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;200k&quot;</span>
        <span class="token key atrule">max-file</span><span class="token punctuation">:</span> <span class="token string">&quot;10&quot;</span>
  <span class="token key atrule">proxy</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./nginx
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
    <span class="token key atrule">links</span><span class="token punctuation">:</span> <span class="token comment">#意味着nginx启动时候会去启动app服务</span>
　　　 <span class="token punctuation">-</span> app
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;200k&quot;</span>
        <span class="token key atrule">max-file</span><span class="token punctuation">:</span> <span class="token string">&quot;10&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li><strong>services</strong>多个服务 <ul><li>driver 配置驱动</li><li>options 可选配置</li><li><strong>image</strong> 镜像名称</li><li><strong>build</strong> 不使用镜像时候采用主动build镜像，构建哪个服务</li><li><strong>environment</strong> 设置容器中的环境变量</li><li><strong>expose</strong> 标示端口号</li><li><strong>ports</strong> 映射端口号到宿主机</li><li><strong>volumes</strong> 挂在目录到宿主机，存储docker持久化数据</li><li><strong>depend_on</strong> 规定service加载顺序，例如数据库服务需要在后台服务前运行</li><li><strong>container_name</strong> 容器名称</li><li><strong>networks</strong> 网络（自定义网络名称）</li><li><strong>restart</strong>  always每次docker启动时候重启</li><li><strong>links</strong> 连接目标容器（services下配置的名称）</li><li><strong>privileged</strong>: true：容器可获得root权限</li><li><strong>logging</strong>  日志选项</li><li><strong>networks</strong>配置自定义网络</li></ul></li></ul></blockquote>`,27);function Y(J,E){const a=i("ExternalLinkIcon");return l(),o("div",null,[D,n("ul",null,[M,n("li",null,[A,K,C,n("p",null,[s("关于Dockerfile中的内容这里就不细说了，之前有一篇文章专门分享的(点"),n("a",S,[s("这里"),p(a)]),s(")。这里的Dockerfile目的就是将我们的WebApi项目构建为镜像，和Redis没有关系，不过这里不是通过执行命令构建，而是通过Compose文件一起构建。")]),L]),R]),V])}const j=t(z,[["render",Y],["__file","peizhiwenjian.html.vue"]]),N=JSON.parse(`{"path":"/cloud/container/dockerCompose/peizhiwenjian.html","title":"配置文件","lang":"zh-CN","frontmatter":{"title":"配置文件","lang":"zh-CN","date":"2023-09-24T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["cloud"],"tag":["无"],"filename":"peizhiwenjian","slug":"gtrogb","docsId":"30405337","description":"说明 Docker Compose需要搭配YAML文件使用，YAML 是一种数据序列化语言，适用于所有编程语言，后缀名为.yml。 所以在进行实操前，需要大概的了解一下YAML的语法，不要慌，语法和Json的思路很像，大概了解一下，后续用到查文档就行啦。 简单说说语法 YAML文件内容是通过空格的缩进来代表层次，常用的数据类型有如下： 对象：键值对集合...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/cloud/container/dockerCompose/peizhiwenjian.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"配置文件"}],["meta",{"property":"og:description","content":"说明 Docker Compose需要搭配YAML文件使用，YAML 是一种数据序列化语言，适用于所有编程语言，后缀名为.yml。 所以在进行实操前，需要大概的了解一下YAML的语法，不要慌，语法和Json的思路很像，大概了解一下，后续用到查文档就行啦。 简单说说语法 YAML文件内容是通过空格的缩进来代表层次，常用的数据类型有如下： 对象：键值对集合..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/202212111150904.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-10T10:28:29.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-10T10:28:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置文件\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/202212111150904.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111150980.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151985.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151628.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151883.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151285.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151130.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151952.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151890.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151662.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151055.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151701.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111151741.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111152075.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111152347.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/202212111152947.webp\\"],\\"datePublished\\":\\"2023-09-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-10T10:28:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[{"level":3,"title":"简单说说语法","slug":"简单说说语法","link":"#简单说说语法","children":[]},{"level":3,"title":"实操撸文件","slug":"实操撸文件","link":"#实操撸文件","children":[]},{"level":3,"title":"体验一键启动","slug":"体验一键启动","link":"#体验一键启动","children":[]}]},{"level":2,"title":"网桥模型","slug":"网桥模型","link":"#网桥模型","children":[]},{"level":2,"title":"网络配置","slug":"网络配置","link":"#网络配置","children":[{"level":3,"title":"docker-compose容器网络互通","slug":"docker-compose容器网络互通","link":"#docker-compose容器网络互通","children":[]}]},{"level":2,"title":"脚本示例","slug":"脚本示例","link":"#脚本示例","children":[]}],"git":{"createdTime":1695541854000,"updatedTime":1710066509000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":7.84,"words":2351},"filePathRelative":"cloud/container/dockerCompose/peizhiwenjian.md","localizedDate":"2023年9月24日","excerpt":"<h2>说明</h2>\\n<p><strong>Docker Compose需要搭配YAML文件使用，YAML 是一种数据序列化语言，适用于所有编程语言，后缀名为.yml</strong>。</p>\\n<p>所以在进行实操前，需要大概的了解一下YAML的语法，不要慌，语法和Json的思路很像，大概了解一下，后续用到查文档就行啦。</p>\\n<h3>简单说说语法</h3>\\n<p><strong>YAML文件内容是通过空格的缩进来代表层次</strong>，常用的数据类型有如下：</p>\\n<ul>\\n<li>\\n<p><strong>对象</strong>：键值对集合；</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code># yaml 对象语法\\ntestKey:testValue\\n# Json 语法\\n{\\"testKey\\":\\"testValue\\"}\\n# yaml 嵌套对象\\ntestKey:{testKey1:testValue1,testKey2:testValue2}\\n# Json 语法\\n{\\"testKey\\":{\\"testKey1\\":\\"testValue1\\",\\"testKey2\\":\\"testValue2\\"}}\\n</code></pre></div></li>\\n<li>\\n<p><strong>数组</strong>：一组按次序排列的数据；用-前缀表示。</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code># yaml 数组语法\\n-value1\\n-value2\\n-value3\\n# Json 数组语法\\n[\\"value1\\",\\"value2\\",\\"value3\\"]\\n# yaml 数组行内语法\\ntestKey:[value1,value2]\\n# Json 语法\\n{\\"testKey\\":['value1','value2']}\\n</code></pre></div></li>\\n<li>\\n<p><strong>纯量</strong>：不可再分的值，包括字符串、整数、浮点数、日期、布尔值等。</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code># yaml\\ntestKey:666\\n# Json\\n{testKey:666}\\n# yaml\\nisbool:true\\n# Json\\n{isbool:true}\\n</code></pre></div></li>\\n</ul>","autoDesc":true}`);export{j as comp,N as data};