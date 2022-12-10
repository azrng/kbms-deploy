import{_ as i,W as c,X as l,Y as n,Z as s,$ as e,a0 as t,y as p}from"./framework.cf23f0c7.js";const o={},r=t('<h1 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h1><p>通过GitHub的Action来(白嫖)部署.Net服务到阿里云服务器。</p><h1 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h1><p>需要一个阿里云服务器并且该服务器还安装了docker环境，如果环境安装不清楚可以查看之前的文章。</p><h2 id="创建镜像仓库" tabindex="-1"><a class="header-anchor" href="#创建镜像仓库" aria-hidden="true">#</a> 创建镜像仓库</h2>',5),u={href:"http://xn--registry-wg0m435ebfa.cn-hangzhou.aliyuncs.com/zrng/myexample%E3%80%82",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"准备项目文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#准备项目文件","aria-hidden":"true"},"#"),s(" 准备项目文件")],-1),m={href:"https://gitee.com/AZRNG/my-example",target:"_blank",rel:"noopener noreferrer"},k=t(`<h1 id="隐私信息配置" tabindex="-1"><a class="header-anchor" href="#隐私信息配置" aria-hidden="true">#</a> 隐私信息配置</h1><p>在指定的仓库中，选择Settings=&gt;Secrets=&gt;Actions</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/272869/1662964788789-be6dab44-c8d3-47e5-92be-8b39ffad23f6.png" alt="img" loading="lazy"></p><p>点击右上的新建就可以创建想要保存的隐私配置信息</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/272869/1662964862458-55292112-dc41-4232-96cb-361d761de2f1.png" alt="img" loading="lazy"></p><p>这里我保存了一下镜像仓库的账号密码等信息。</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/272869/1665843728374-35195900-1e1e-4bbd-8dcd-7c00d728c66a.png" alt="img" loading="lazy"></p><h1 id="仓库脚本配置" tabindex="-1"><a class="header-anchor" href="#仓库脚本配置" aria-hidden="true">#</a> 仓库脚本配置</h1><p>在仓库的根目录新建工作流文件.github/workflows/dotnet.yml(也可以在Actions选项卡中新建)，我们将每次提交的项目生成测试镜像，在dotnet.yml中写下面内容</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 工作流名称</span>
name: Docker

on:
  push: # 推送的时候触发
    branches: [ &quot;main&quot; ] # 推送的分支
    <span class="token comment"># Publish semver tags as releases.</span>
    tags: [ &#39;v*.*.*&#39; ]
  pull_request:
    branches: [ &quot;main&quot; ]

env:
  <span class="token comment"># 仓库地址</span>
  REGISTRY: registry.cn-hangzhou.aliyuncs.com
  IMAGE_NAME: zrng/myexample
  IMAGE_TAG: latest


jobs:
  build:

    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
      <span class="token comment"># This is used to complete the identity challenge</span>
      <span class="token comment"># with sigstore/fulcio when running outside of PRs.</span>
      id-token: write

    steps:
      <span class="token comment"># 将远程仓库中的源代码领取到workfile自动化构建脚本运行的服务器</span>
      - name: Checkout repository
        uses: actions/checkout@v3 

      <span class="token comment"># Login against a Docker registry except on PR</span>
      <span class="token comment"># https://github.com/docker/login-action</span>
      - name: login to \${{ env.REGISTRY }}
        if: github.event_name != &#39;pull_request&#39;
        uses: docker/login-action@28218f9b04b4f3f62068d7b6ce6ca5b26e35336c # 用于登录docker以便我们后续上传镜像到自己的镜像仓库
        with:
          registry: \${{ env.REGISTRY }}
          username: \${{ secrets.USERMAME }} # 镜像仓库用户名
          password: \${{ secrets.PASSWORD }} # 镜像仓库密码

      <span class="token comment"># 生成和推送镜像  阿里云镜像仓库推送有问题</span>
      <span class="token comment"># # https://github.com/docker/build-push-action</span>
      <span class="token comment"># - name: Build and push Docker image</span>
      <span class="token comment">#   id: build-and-push # 构建docker镜像，推送到自己的docker镜像仓库</span>
      <span class="token comment">#   uses: docker/build-push-action@ac9327eae2b366085ac7f6a2d02df8aa8ead720a</span>
      <span class="token comment">#   with:</span>
      <span class="token comment">#     registry: \${{ env.REGISTRY }}</span>
      <span class="token comment">#     username: \${{ secrets.USERMAME }} # 镜像仓库用户名</span>
      <span class="token comment">#     password: \${{ secrets.PASSWORD }} # 镜像仓库密码</span>
      <span class="token comment">#     push: \${{ github.event_name != &#39;pull_request&#39; }}</span>
      <span class="token comment">#     tags: \${{env.IMAGE_NAME}}:\${{env.IMAGE_TAG}}.\${{ github.run_id }}.\${{ github.run_number }} #动态变量镜像TAG 使用github运行job和jobid设置tag</span>
      <span class="token comment">#     context: . # 相对以远程仓库根路径的dockerfile的路径</span>
      <span class="token comment">#     file: ./NetByDocker/Dockerfile # 指定Dockerfile</span>

      - name: Build the Docker image
        run: |
          docker version
          <span class="token comment"># 登录阿里云镜像仓库</span>
          docker login --username=\${{ secrets.USERMAME }} --password=\${{ secrets.PASSWORD }} registry.cn-hangzhou.aliyuncs.com
          <span class="token comment"># 使用Dockerfile构建镜像  \${{env.IMAGE_TAG}}.\${{ github.run_id }}.\${{ github.run_number }}</span>
          docker build . --file NetByDocker/Dockerfile --tag registry.cn-hangzhou.aliyuncs.com/zrng/myexample:\${{env.IMAGE_TAG}} --tag registry.cn-hangzhou.aliyuncs.com/zrng/myexample:\${{ github.run_number }}
          <span class="token comment"># 推送镜像到镜像仓库</span>
          docker push \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{env.IMAGE_TAG}}
          docker push \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.run_number }}

      <span class="token comment"># 列出所有镜像    </span>
      - name: Docker Images Lst 
        run: docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本来在推送镜像的时候我们可以直接build-and-push来推送，但是推送到阿里云仓库有问题，我百度说是阿里云仓库必须写前面镜像地址等信息，所以没成功，所以换用其他方式来实现</p><p>上文中涉及的dockerfile文件内容如下</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> mcr.microsoft.com/dotnet/aspnet:6.0 <span class="token keyword">AS</span> base</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>

<span class="token instruction"><span class="token keyword">FROM</span> mcr.microsoft.com/dotnet/sdk:6.0 <span class="token keyword">AS</span> build</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /src</span>
<span class="token instruction"><span class="token keyword">COPY</span> [<span class="token string">&quot;NetByDocker/NetByDocker.csproj&quot;</span>, <span class="token string">&quot;NetByDocker/&quot;</span>]</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet restore <span class="token string">&quot;NetByDocker/NetByDocker.csproj&quot;</span>  # 还原项目的Nuget包</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> <span class="token string">&quot;/src/NetByDocker&quot;</span></span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet build <span class="token string">&quot;NetByDocker.csproj&quot;</span> -c Release -o /app/build # 在发布模式下生成项目。 生成工件将写入中间映像的 app/build/ 目录。</span>

<span class="token instruction"><span class="token keyword">FROM</span> build <span class="token keyword">AS</span> publish</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet publish <span class="token string">&quot;NetByDocker.csproj&quot;</span> -c Release -o /app/publish # 在发布模式下发布项目。 已发布的捆绑将写入最终映像的 app/publish/ 目录。</span>
 
<span class="token instruction"><span class="token keyword">FROM</span> base <span class="token keyword">AS</span> final</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">publish</span></span> /app/publish .</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;dotnet&quot;</span>, <span class="token string">&quot;NetByDocker.dll&quot;</span>] # 启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在我们提交代码并推送中可以去github的Actions选项卡中查看</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/272869/1665844308787-738ddabc-da31-43b6-a4bd-9be0ffdf04ab.png" alt="img" loading="lazy"></p><p>因为一些笨笨的操作，错误了好多次</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/272869/1665844353011-7d0d3c05-4f4b-4dd4-af52-9989a81e349b.png" alt="img" loading="lazy"></p><p>然后再去阿里云镜像仓库查看是否有我们推送上去的镜像</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/272869/1665886329351-b8fb20ce-79e1-4eed-bf80-af6a635d0e29.png" alt="img" loading="lazy"></p><p>已经存在，说明我们生成镜像并推送的步骤成功了，也可以通过以下命令拉取到</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker pull registry.cn-hangzhou.aliyuncs.com/zrng/myexample:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="部署镜像" tabindex="-1"><a class="header-anchor" href="#部署镜像" aria-hidden="true">#</a> 部署镜像</h1><p>我们需要让推送成功后，在我们的阿里云服务器上拉取镜像并启动，那么先增加服务器的地址、账号、密码、端口等变量</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/272869/1665845286503-fa50bdbb-50d3-4224-a441-20b362ec21cf.png" alt="img" loading="lazy"></p><p>再修改dotnet.yml文件，在最后追加内容</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 列出所有镜像    </span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Docker Images Lst 
<span class="token key atrule">run</span><span class="token punctuation">:</span> docker images

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> executing remote ssh commands using password
<span class="token key atrule">uses</span><span class="token punctuation">:</span> appleboy/ssh<span class="token punctuation">-</span>action@master
<span class="token key atrule">with</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVERHOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVERUSERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVERPASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVERPORT <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> docker run <span class="token punctuation">-</span><span class="token punctuation">-</span>name netsample <span class="token punctuation">-</span>d <span class="token punctuation">-</span>p 8002<span class="token punctuation">:</span>80 registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/zrng/myexample
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我本来是按照上面这方案走的，结果还得考虑到停止并删除容器，以及删除镜像拉取最新的镜像，所以我索性直接使用docker-compose去处理了，我在服务器的/root/net目录，放了一个docker-compose文件，内容如下</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.4&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span> 
  <span class="token key atrule">netsample</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> netsample
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/zrng/myexample
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> ASPNETCORE_ENVIRONMENT=Production
    <span class="token key atrule">networks</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> my<span class="token punctuation">-</span>bridge
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;8002:80&quot;</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span> 
  <span class="token key atrule">my-bridge</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在dotnet.yml文件后追加</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> executing remote ssh commands using password
	<span class="token key atrule">uses</span><span class="token punctuation">:</span> appleboy/ssh<span class="token punctuation">-</span>action@master
	<span class="token key atrule">with</span><span class="token punctuation">:</span>
	  <span class="token key atrule">host</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVERHOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
	  <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVERUSERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
	  <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVERPASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
	  <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVERPORT <span class="token punctuation">}</span><span class="token punctuation">}</span>
	  <span class="token key atrule">script</span><span class="token punctuation">:</span> 
		cd /root/net;
		docker<span class="token punctuation">-</span>compose pull <span class="token important">&amp;&amp;</span> docker<span class="token punctuation">-</span>compose  up <span class="token punctuation">-</span>d;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我提交新增加的代码，等工作流跑结束后</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/272869/1665846823299-709de572-91b1-4ab5-b6bc-47b157e6a75a.png" alt="img" loading="lazy"></p>`,32),v={href:"http://IP:8002/swagger/index.html",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[n("img",{src:"https://cdn.nlark.com/yuque/0/2022/png/272869/1665846875139-b5149b0d-f349-44f9-91fa-82db7e976cbf.png",alt:"img",loading:"lazy"})],-1),g=n("p",null,"登录服务器后查看镜像版本，也是我们刚刚推送的镜像。",-1),h=n("h1",{id:"总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),s(" 总结")],-1),y={href:"http://xn--ASP-zr0f.NET",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,"如果想在每次dev提交代码后自动生成服务(不再推送镜像仓库)，那么可以稍稍修改上面的脚本使用appleboy/ssh-action@master进入某一个目录(提前拉取好项目的目录)，然后构建镜像生成容器。",-1),_=n("h1",{id:"资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#资料","aria-hidden":"true"},"#"),s(" 资料")],-1),R={href:"https://gitee.com/AZRNG/my-example",target:"_blank",rel:"noopener noreferrer"},E={href:"https://gitee.com/AZRNG/my-example/blob/master/.github/workflows/dotnet.yml",target:"_blank",rel:"noopener noreferrer"};function w(A,x){const a=p("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[s("在阿里云的容器镜像服务中，创建一个镜像仓库用来存储我们测试的镜像，这里我提前创建仓库为myexample，"),n("a",u,[s("地址为registry.cn-hangzhou.aliyuncs.com/zrng/myexample。"),e(a)])]),d,n("p",null,[s("本文主要讨论GitHub的Action功能，所以项目文件直接使用之前示例代码，在Github创建仓库my-example，该仓库的代码使用之前的代码(仓库地址为："),n("a",m,[s("https://gitee.com/AZRNG/my-example"),e(a)]),s(")")]),k,n("p",null,[s("访问我们项目的swagger("),n("a",v,[s("http://IP:8002/swagger/index.html"),e(a)]),s(")页面(前提是阿里云服务器的端口安全组已经设置)，既可以看到下面的效果")]),b,g,h,n("p",null,[s("本文完整介绍了如何使用Github Actions做CI&CD，"),n("a",y,[s("将ASP.NET"),e(a)]),s(" Core 6.0 程序的main分支打包并部署到阿里云Linux服务器。")]),f,_,n("p",null,[s("本文完整代码可以查看仓库："),n("a",R,[s("https://gitee.com/AZRNG/my-example"),e(a)])]),n("p",null,[s("完整的dotnet.yaml文件可以查看："),n("a",E,[s("https://gitee.com/AZRNG/my-example/blob/master/.github/workflows/dotnet.yml"),e(a)])])])}const N=i(o,[["render",w],["__file","github-actions-buildimages-release.html.vue"]]);export{N as default};
