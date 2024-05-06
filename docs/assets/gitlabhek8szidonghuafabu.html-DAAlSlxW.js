import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as p,a as n,d as s,e,b as t}from"./app-Bw62I61B.js";const o={},u=n("h2",{id:"前置条件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前置条件"},[n("span",null,"前置条件")])],-1),r=n("li",null,"一台Linux服务器，安装好Docker",-1),d=n("li",null,"一个K8s集群环境",-1),k={href:"https://jihulab.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.huaweicloud.com/product/swr.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://jihulab.com/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"部署gitlab-runner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#部署gitlab-runner"},[n("span",null,"部署Gitlab-Runner")])],-1),h=n("h3",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装"},[n("span",null,"安装")])],-1),_={href:"https://docs.gitlab.com/runner/install/",target:"_blank",rel:"noopener noreferrer"},y=t(`<h3 id="注册" tabindex="-1"><a class="header-anchor" href="#注册"><span>注册</span></a></h3><p><strong>概述</strong> 注册的目的是将本地安装的gitlab-runner和gitlab仓库建立连接，以便代码变动时gitlab-runner会收到通知 <strong>快速注册命令</strong>： <code>sudo gitlab-runner register --url https://jihulab.com/ --registration-token {yourtoken}</code> （在上一步<strong>安装</strong>中的**&quot;注册一个群组runner&quot;**按钮中有这条指令，里面包含了你的token）</p><p>执行完上方的注册命令后，会进入注册交互界面</p><ol><li>前两个网址和token的输入跳过，因为我们已经填了</li><li>description描述可以自己定义</li><li>tags这个需要认真填一下，这个tag将来需要在gitlab的ci文件中引用，比如你这个runner主要用于构建代码的化就填build，如果用来发布项目就填deploy等等</li><li>最后会要天一个executer，这个指的是runner的基础运行环境，这里填 docker:stable</li></ol><p>至此gitlabrunner已经注册完了</p><h2 id="编写代码和dockerfile" tabindex="-1"><a class="header-anchor" href="#编写代码和dockerfile"><span>编写代码和Dockerfile</span></a></h2><p>我创建了一个netcore项目，Dockerfile如下：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> mcr.microsoft.com/dotnet/sdk:6.0 <span class="token keyword">AS</span> build</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /source</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 5000</span>
<span class="token comment">## copy csproj and restore as distinct layers</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>
<span class="token instruction"><span class="token keyword">RUN</span> dotnet restore NetCoreTest/NetCoreTest.csproj </span>

<span class="token instruction"><span class="token keyword">RUN</span> dotnet publish -c Release -o /app --no-restore</span>

<span class="token comment">## final stage/image</span>
<span class="token instruction"><span class="token keyword">FROM</span> mcr.microsoft.com/dotnet/aspnet:6.0</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">build</span></span> /app .</span>

<span class="token instruction"><span class="token keyword">ENV</span> ASPNETCORE_URLS http://*:5000</span>
<span class="token instruction"><span class="token keyword">ENV</span> TZ Asia/Shanghai</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;dotnet&quot;</span>, <span class="token string">&quot;NetCoreTest.dll&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置ci-cd变量" tabindex="-1"><a class="header-anchor" href="#设置ci-cd变量"><span>设置CI/CD变量</span></a></h2><p>在gitlab的<strong>设置-CI/CD-变量</strong>中点击**添加变量. **分别添加以下变量</p>`,10),g=n("li",null,"CI_REGISTRY ： swr.cn-north-1.myhuaweicloud.com （docker仓库登录地址，具体根据自己的镜像仓库而定）",-1),I=n("li",null,"CI_REGISTRY_PASSWORD： password （docker仓库登录密码）",-1),C=n("li",null,"CI_REGISTRY_USER：myname （docker仓库登录用户名）",-1),R=n("li",null,"CI_REGISTRY_REPOSITORY： swr.cn-north-1.myhuaweicloud.com/first (这个是仓库的分组地址,大部分的镜像仓库都有这样一个分组地址，一般就是仓库登录地址加分组名)",-1),E={href:"http://192.168.0.246:30061/k3s.yaml",target:"_blank",rel:"noopener noreferrer"},f=t(`<h2 id="编写gitlab-ci-yaml" tabindex="-1"><a class="header-anchor" href="#编写gitlab-ci-yaml"><span>编写gitlab-ci.yaml</span></a></h2><p>下面是我配置的yaml文件，如果你上面的环境变量设置的和我一样的化，可以直接用。每一行的意思都写在里面了</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment">#构建步骤，先执行build，然后执行deploy</span>
<span class="token key atrule">stages</span><span class="token punctuation">:</span>  
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> deploy

<span class="token comment">#设置全局的环境变量，所有的stage中都可以引用这里面的变量</span>
<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token comment">#docker 镜像地址，由Docker镜像仓库地址(CI_REGISTRY_REPOSITORY)+项目地址(CI_PROJECT_PATH_SLUG)+项目分支(CI_COMMIT_REF_SLUG):镜像版本号(CI_PIPELINE_IID)</span>
  <span class="token key atrule">CI_APPLICATION_REPOSITORY</span><span class="token punctuation">:</span> <span class="token string">&quot;$CI_REGISTRY_REPOSITORY/$CI_PROJECT_PATH_SLUG-$CI_COMMIT_REF_SLUG:$CI_PIPELINE_IID&quot;</span>
  <span class="token comment">#docker容器名称,项目地址+版本号</span>
  <span class="token key atrule">CI_CONTAINER_NAME</span><span class="token punctuation">:</span> <span class="token string">&quot;$CI_PROJECT_PATH_SLUG-$CI_COMMIT_REF_SLUG&quot;</span>
  <span class="token comment">#k8s命名空间 项目地址+项目id</span>
  <span class="token key atrule">CI_NAMESPACE</span><span class="token punctuation">:</span> <span class="token string">&quot;$CI_PROJECT_PATH_SLUG-$CI_PROJECT_ID&quot;</span>
  <span class="token comment">## ingress访问地址 项目地址+分支+项目id+你的二级域名(我这里写死了&quot;mynetcore.com&quot;，可以配置到ci环境变量中)</span>
  <span class="token key atrule">CI_HOST</span><span class="token punctuation">:</span> <span class="token string">&quot;$CI_PROJECT_PATH_SLUG-$CI_COMMIT_REF_SLUG-$CI_PROJECT_ID.mynetcore.com&quot;</span>
  <span class="token comment">## k8s镜像拉取密钥,用于访问你的私人镜像仓库</span>
  <span class="token key atrule">secret_name</span><span class="token punctuation">:</span> <span class="token string">&quot;gitlab-secret&quot;</span>

<span class="token comment">#构建镜像，并上传至镜像仓库</span>
<span class="token key atrule">build-job</span><span class="token punctuation">:</span>       
 <span class="token comment">#表示用最在最新的docker容器中运行服务</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> docker<span class="token punctuation">:</span>latest 
  <span class="token comment">#对应上面Stages中的build步骤</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build   
  <span class="token key atrule">services</span><span class="token punctuation">:</span>
   <span class="token comment">#在容器中再起一个docker:dind容器，后面的script命令会在该容器内运行</span>
    <span class="token punctuation">-</span> docker<span class="token punctuation">:</span>dind  
  <span class="token key atrule">before_script</span><span class="token punctuation">:</span>
     <span class="token comment">#登录我们自己的镜像服务</span>
    <span class="token punctuation">-</span> docker login <span class="token punctuation">-</span>u &quot;$CI_REGISTRY_USER&quot; <span class="token punctuation">-</span>p &quot;$CI_REGISTRY_PASSWORD&quot; $CI_REGISTRY
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">|</span><span class="token scalar string">
    #打印所有的环境变量，用于调试
    - env
    ## 构建镜像
    - docker build --pull -t &quot;$CI_APPLICATION_REPOSITORY&quot; .
    ## 推送镜像至仓库
    - docker push $CI_APPLICATION_REPOSITORY</span>


<span class="token comment">#部署项目到k8s集群</span>
<span class="token key atrule">deploy-job</span><span class="token punctuation">:</span>      
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> production
  <span class="token key atrule">image</span><span class="token punctuation">:</span> docker<span class="token punctuation">:</span>stable
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> env
    <span class="token punctuation">-</span> install_dependence
    <span class="token punctuation">-</span> install_kubectl
    <span class="token punctuation">-</span> kubectl_publish
    <span class="token punctuation">-</span> publish_finish
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
  <span class="token comment">#这个就表示用我们自己的gitlab-runner执行了，&quot;deploy&quot;就是在注册gitlabrunner中填写的tag值。上面的build步骤没有写tag，他会用官方提供的一个默认runner执行(有使用时长限制)</span>
    <span class="token punctuation">-</span> deploy


<span class="token key atrule">.function</span><span class="token punctuation">:</span> <span class="token important">&amp;function</span> <span class="token punctuation">|</span><span class="token scalar string">
  #这一步初始化一下容器的环境，更新apk包，安装基础的一些软件
  function install_dependence() {
    echo -e &#39;https://mirrors.aliyun.com/alpine/v3.6/main/\\nhttps://mirrors.aliyun.com/alpine/v3.6/community/&#39; &gt; /etc/apk/repositories
    apk update
    apk add -U openssl curl tar gzip bash ca-certificates git gettext
  }</span>

  <span class="token comment">#安装kubectl命令工具</span>
  function install_kubectl() <span class="token punctuation">{</span>
    <span class="token comment">#下载kubectl</span>
    curl <span class="token punctuation">-</span>LO &quot;https<span class="token punctuation">:</span>//dl.k8s.io/release/$(curl <span class="token punctuation">-</span>L <span class="token punctuation">-</span>s https<span class="token punctuation">:</span>//dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl&quot;
    <span class="token comment">#给kubectl赋执行权限</span>
    chmod +x ./kubectl <span class="token important">&amp;&amp;</span> mv ./kubectl /usr/local/bin/kubectl
    <span class="token comment">#创建kubectl 的执行密钥文件夹，然后将kubectl的config配置文件下载到~/.kube/config。$CI_KUBE_CONFIG_URL 这个是我开了一个内网服务用于下载kubeconfig</span>
    mkdir ~/.kube <span class="token important">&amp;&amp;</span> curl <span class="token punctuation">-</span>o ~/.kube/config $CI_KUBE_CONFIG_URL
  <span class="token punctuation">}</span>

  <span class="token comment">## 部署yaml</span>
  function kubectl_publish()<span class="token punctuation">{</span>
   <span class="token comment">#首先创建命名空间（检测命名空间是否存在，不存在则创建）</span>
    kubectl describe namespace &quot;$CI_NAMESPACE&quot; <span class="token punctuation">|</span><span class="token punctuation">|</span> kubectl create namespace &quot;$CI_NAMESPACE&quot;
    <span class="token comment">## 创建 docker镜像的访问密钥，( 检测密钥是否存在，不存在则创建&quot;kubectl create secret....&quot;。最后后将密钥更新到当前项目的命名空间&quot;kubectl apply ...&quot;)</span>
    kubectl describe secret $secret_name <span class="token punctuation">|</span><span class="token punctuation">|</span> kubectl create secret <span class="token punctuation">-</span>n &quot;$CI_NAMESPACE&quot;  docker<span class="token punctuation">-</span>registry $secret_name <span class="token punctuation">-</span><span class="token punctuation">-</span>docker<span class="token punctuation">-</span>server=$CI_REGISTRY <span class="token punctuation">-</span><span class="token punctuation">-</span>docker<span class="token punctuation">-</span>username=$CI_REGISTRY_USER <span class="token punctuation">-</span><span class="token punctuation">-</span>docker<span class="token punctuation">-</span>password=$CI_REGISTRY_PASSWORD  <span class="token punctuation">-</span>o yaml <span class="token punctuation">-</span><span class="token punctuation">-</span>dry<span class="token punctuation">-</span>run=client  <span class="token punctuation">|</span> kubectl apply <span class="token punctuation">-</span>n $CI_NAMESPACE <span class="token punctuation">-</span>f <span class="token punctuation">-</span>
    <span class="token comment">## 将环境变量写入到yaml文件中，然后删除掉yaml中上次部署的资源</span>
    envsubst &lt; kube.yaml <span class="token punctuation">|</span> kubectl delete <span class="token punctuation">-</span>n $CI_NAMESPACE <span class="token punctuation">-</span>f <span class="token punctuation">-</span> <span class="token punctuation">|</span><span class="token punctuation">|</span> echo &quot;don&#39;t need delete&quot;
    <span class="token comment">## 将环境变量写入到yaml文件中，然后部署</span>
    envsubst &lt; kube.yaml <span class="token punctuation">|</span> kubectl apply <span class="token punctuation">-</span>n $CI_NAMESPACE <span class="token punctuation">-</span>f <span class="token punctuation">-</span>
  <span class="token punctuation">}</span>

  <span class="token comment">#部署完成，输出一下</span>
  function publish_finish()<span class="token punctuation">{</span>
    echo &quot;visit url is http<span class="token punctuation">:</span>//$CI_HOST&quot;
    echo &quot;Application successfully deployed.&quot;
  <span class="token punctuation">}</span>
  
<span class="token comment">#这个是整个ci最先执行的语句，里面可以预定义函数和变量等</span>
<span class="token key atrule">before_script</span><span class="token punctuation">:</span>
 <span class="token comment">#执行上面的 .function: &amp;function</span>
  <span class="token punctuation">-</span> <span class="token important">*function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kube-yaml" tabindex="-1"><a class="header-anchor" href="#kube-yaml"><span>kube.yaml</span></a></h3><p>这个是ci脚本中引用的项目k8s的yaml模板文件,下面是我的配置：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> $CI_CONTAINER_NAME
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> $CI_CONTAINER_NAME
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> $CI_CONTAINER_NAME
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> $CI_CONTAINER_NAME
          <span class="token key atrule">image</span><span class="token punctuation">:</span> $CI_APPLICATION_REPOSITORY
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">5000</span>
      <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> $secret_name
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> $CI_CONTAINER_NAME
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5000</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">5000</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> $CI_CONTAINER_NAME
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>$CI_CONTAINER_NAME
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> $CI_HOST
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> /
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> $CI_CONTAINER_NAME 
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function T(N,S){const a=i("ExternalLinkIcon");return c(),p("div",null,[u,n("ul",null,[r,d,n("li",null,[s("一个Gitlab仓库，可以自己搭建或者直接使用官方仓库(中文版gitlab:"),n("a",k,[s("https://jihulab.com/"),e(a)]),s(")")]),n("li",null,[s("一个镜像仓库，用于存储docker镜像，这里我用的华为的镜像仓库 （"),n("a",m,[s("https://www.huaweicloud.com/product/swr.html"),e(a)]),s("）")]),n("li",null,[s("本文的操作基于"),n("a",v,[s("https://jihulab.com/"),e(a)]),s(" 仓库进行")])]),b,h,n("p",null,[s("gitlab-runner 安装参考 "),n("a",_,[s("https://docs.gitlab.com/runner/install/"),e(a)]),s(' 或者在 gitlab仓库的群组左侧菜单** CI/CD--Runner **页面点击"注册一个群组runner"按钮，里面有快速安装介绍')]),y,n("ul",null,[g,I,C,R,n("li",null,[s("CI_KUBE_CONFIG_URL： "),n("a",E,[s("http://192.168.0.1:8080/mykubeconfig.yaml"),e(a)]),s(" （k8s的kubeconfig文件，如果不用密钥文件也可以用其他的加密途径，我这里为了方便直接在k8s集群中开了一个密钥文件下载服务。k8s的密钥文件默认在 /root/.kube/config，k3s在 /etc/rancher/k3s/k3s.yaml。注意修改文件中的ip地址为客户端可以访问的地址）")])]),f])}const A=l(o,[["render",T],["__file","gitlabhek8szidonghuafabu.html.vue"]]),w=JSON.parse('{"path":"/cloud/k8s/gitlabhek8szidonghuafabu.html","title":"Gitlab和K8S自动化发布","lang":"zh-CN","frontmatter":{"title":"Gitlab和K8S自动化发布","lang":"zh-CN","date":"2023-09-24T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["cloud"],"tag":["无"],"filename":"gitlabhek8szidonghuafabu","slug":"ye0rclzm91y0wl9o","docsId":"110427714","description":"前置条件 一台Linux服务器，安装好Docker 一个K8s集群环境 一个Gitlab仓库，可以自己搭建或者直接使用官方仓库(中文版gitlab:https://jihulab.com/) 一个镜像仓库，用于存储docker镜像，这里我用的华为的镜像仓库 （https://www.huaweicloud.com/product/swr.html） 本...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/cloud/k8s/gitlabhek8szidonghuafabu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Gitlab和K8S自动化发布"}],["meta",{"property":"og:description","content":"前置条件 一台Linux服务器，安装好Docker 一个K8s集群环境 一个Gitlab仓库，可以自己搭建或者直接使用官方仓库(中文版gitlab:https://jihulab.com/) 一个镜像仓库，用于存储docker镜像，这里我用的华为的镜像仓库 （https://www.huaweicloud.com/product/swr.html） 本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-24T07:50:54.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-24T07:50:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gitlab和K8S自动化发布\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-24T07:50:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"前置条件","slug":"前置条件","link":"#前置条件","children":[]},{"level":2,"title":"部署Gitlab-Runner","slug":"部署gitlab-runner","link":"#部署gitlab-runner","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"注册","slug":"注册","link":"#注册","children":[]}]},{"level":2,"title":"编写代码和Dockerfile","slug":"编写代码和dockerfile","link":"#编写代码和dockerfile","children":[]},{"level":2,"title":"设置CI/CD变量","slug":"设置ci-cd变量","link":"#设置ci-cd变量","children":[]},{"level":2,"title":"编写gitlab-ci.yaml","slug":"编写gitlab-ci-yaml","link":"#编写gitlab-ci-yaml","children":[{"level":3,"title":"kube.yaml","slug":"kube-yaml","link":"#kube-yaml","children":[]}]}],"git":{"createdTime":1695541854000,"updatedTime":1695541854000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":5.34,"words":1602},"filePathRelative":"cloud/k8s/gitlabhek8szidonghuafabu.md","localizedDate":"2023年9月24日","excerpt":"<h2>前置条件</h2>\\n<ul>\\n<li>一台Linux服务器，安装好Docker</li>\\n<li>一个K8s集群环境</li>\\n<li>一个Gitlab仓库，可以自己搭建或者直接使用官方仓库(中文版gitlab:<a href=\\"https://jihulab.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://jihulab.com/</a>)</li>\\n<li>一个镜像仓库，用于存储docker镜像，这里我用的华为的镜像仓库 （<a href=\\"https://www.huaweicloud.com/product/swr.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.huaweicloud.com/product/swr.html</a>）</li>\\n<li>本文的操作基于<a href=\\"https://jihulab.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://jihulab.com/</a> 仓库进行</li>\\n</ul>","autoDesc":true}');export{A as comp,w as data};
