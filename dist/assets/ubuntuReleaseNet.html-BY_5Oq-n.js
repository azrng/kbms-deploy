import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as o,a as s,b as n,d as c,e as l}from"./app-vSdX8vi3.js";const i="/kbms/common/1660575003975-e6c9121d-5040-403c-8418-57b51a7deb5b.png",r="/kbms/common/1661007440583-79a594ba-f34d-4ac6-9db3-e0947a1bf677.png",u="/kbms/common/1661007472823-cb7f376e-e33a-4474-bf0a-58d3d9d1cdea.png",d={},k=l(`<h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的"><span>目的</span></a></h2><p>在Ubuntu上部署.Net程序进行测试。</p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h2><h3 id="安装ubuntu" tabindex="-1"><a class="header-anchor" href="#安装ubuntu"><span>安装Ubuntu</span></a></h3><p>有其他文章介绍</p><blockquote><p>该服务器需要能外网访问</p></blockquote><h3 id="安装-net环境" tabindex="-1"><a class="header-anchor" href="#安装-net环境"><span>安装.Net环境</span></a></h3><p>要安装.Net环境就需要运行以下命令将 Microsoft 包签名密钥添加到您的受信任密钥列表中并添加包存储库。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name">wget</span> https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>packages<span class="token punctuation">.</span>microsoft<span class="token punctuation">.</span>com<span class="token operator">/</span>config<span class="token operator">/</span>ubuntu<span class="token operator">/</span><span class="token number">22.04</span><span class="token operator">/</span>packages<span class="token operator">-</span>microsoft<span class="token operator">-</span>prod<span class="token punctuation">.</span>deb <span class="token operator">-</span>O packages<span class="token operator">-</span>microsoft<span class="token operator">-</span>prod<span class="token punctuation">.</span>deb
sudo dpkg <span class="token operator">-</span>i packages<span class="token operator">-</span>microsoft<span class="token operator">-</span>prod<span class="token punctuation">.</span>deb
rm packages<span class="token operator">-</span>microsoft<span class="token operator">-</span>prod<span class="token punctuation">.</span>deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行命令</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>sudo apt<span class="token operator">-</span><span class="token keyword">get</span> update <span class="token operator">&amp;&amp;</span> \\
  sudo apt<span class="token operator">-</span><span class="token keyword">get</span> install <span class="token operator">-</span>y dotnet<span class="token operator">-</span>sdk<span class="token operator">-</span><span class="token number">6.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>等待一会，环境就已经装好了，输入命令测试一下吧</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet <span class="token operator">--</span>info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx"><span>安装Nginx</span></a></h3><p>安装nginx</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>sudo apt install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编辑nginx配置文件</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>vim <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>sites<span class="token operator">-</span>available<span class="token operator">/</span><span class="token keyword">default</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Esc进入命令模式，gg跳至首行，然后dG，清空当前配置，复制粘贴下面的配置。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>server <span class="token punctuation">{</span>
    listen        <span class="token number">80</span><span class="token punctuation">;</span>
    server_name   example<span class="token punctuation">.</span>com <span class="token operator">*</span><span class="token punctuation">.</span>example<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        <span class="token class-name">proxy_pass</span>         http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">5000</span><span class="token punctuation">;</span>
        proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        proxy_set_header   Upgrade $http_upgrade<span class="token punctuation">;</span>
        proxy_set_header   Connection keep<span class="token operator">-</span>alive<span class="token punctuation">;</span>
        proxy_set_header   Host $host<span class="token punctuation">;</span>
        proxy_cache_bypass $http_upgrade<span class="token punctuation">;</span>
        proxy_set_header   X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>For $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
        proxy_set_header   X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Proto $scheme<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>退出并且保存 (Esc + :wq ，然后回车） 测试配置是否正确：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>sudo nginx <span class="token operator">-</span>t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>没问题之后，让Nginx重新加载配置</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>sudo nginx <span class="token operator">-</span>s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="用户以及权限" tabindex="-1"><a class="header-anchor" href="#用户以及权限"><span>用户以及权限</span></a></h3><p>创建一个账号等下给Github Actions使用，总不能给它用root账号</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>sudo adduser github

<span class="token comment">// 设置密码</span>
passwd github
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个文件夹，后面发布后的文件就上传到这里</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>sudo mkdir <span class="token operator">-</span>p <span class="token operator">/</span>home<span class="token operator">/</span>project<span class="token operator">/</span>example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>给新账号添加该文件夹的读写权限</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>sudo chown <span class="token operator">-</span>R github <span class="token operator">/</span>home<span class="token operator">/</span>project<span class="token operator">/</span>example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>到这里其实可以手动上传发布文件到服务器测试一下，但是为了省时间还是跳过，直接用Github Actions来发布。</p><h2 id="项目准备" tabindex="-1"><a class="header-anchor" href="#项目准备"><span>项目准备</span></a></h2><p>使用VS 2022新建一个空的ASP.NET Core Web API项目，框架选择.NET 6.0。 因为需要使用Nginx，这里就简单配置中间件转发下 X-Forwarded-For 和 X-Forwarded-Proto 两个header。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>AspNetCore<span class="token punctuation">.</span>HttpOverrides</span><span class="token punctuation">;</span>
<span class="token range operator">..</span><span class="token punctuation">.</span>
app<span class="token punctuation">.</span><span class="token function">UseForwardedHeaders</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ForwardedHeadersOptions</span>
<span class="token punctuation">{</span>
    ForwardedHeaders <span class="token operator">=</span> ForwardedHeaders<span class="token punctuation">.</span>XForwardedFor <span class="token operator">|</span> ForwardedHeaders<span class="token punctuation">.</span>XForwardedProto
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">UseAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本地启动一下，看到swagger页面，没什么问题。代码提交Github，接下来开始配置服务器.</p><h2 id="github-actions-配置" tabindex="-1"><a class="header-anchor" href="#github-actions-配置"><span>Github Actions 配置</span></a></h2><p>打开Github仓库，选择如下官方提供的.NET工作流进入编辑页面 <img src="`+r+`" alt="11501ad3ea174fbc253ba9c57eddd092_640_wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1.png" loading="lazy"> 使用如下配置：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>name<span class="token punctuation">:</span> ASP<span class="token punctuation">.</span>NET Core <span class="token number">6.0</span> Example build <span class="token keyword">and</span> <span class="token class-name">deploy</span>
  
<span class="token keyword">on</span><span class="token punctuation">:</span>
  push<span class="token punctuation">:</span>
    branches<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">]</span>
  pull_request<span class="token punctuation">:</span>
    branches<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">]</span>

jobs<span class="token punctuation">:</span>

  build<span class="token punctuation">:</span>
    runs<span class="token operator">-</span><span class="token keyword">on</span><span class="token punctuation">:</span> ubuntu<span class="token operator">-</span><span class="token class-name">latest</span>

    steps<span class="token punctuation">:</span>
    <span class="token operator">-</span> uses<span class="token punctuation">:</span> actions<span class="token operator">/</span>checkout@v3
    <span class="token operator">-</span> name<span class="token punctuation">:</span> <span class="token class-name">Setup <span class="token punctuation">.</span>NET</span>
      uses<span class="token punctuation">:</span> actions<span class="token operator">/</span>setup<span class="token operator">-</span>dotnet<span class="token class-name">@v2</span>
      with<span class="token punctuation">:</span>
        dotnet<span class="token operator">-</span>version<span class="token punctuation">:</span> <span class="token number">6.0</span><span class="token punctuation">.</span>x
        
    <span class="token operator">-</span> name<span class="token punctuation">:</span> Restore <span class="token class-name">dependencies</span>
      run<span class="token punctuation">:</span> dotnet restore
      
    <span class="token operator">-</span> name<span class="token punctuation">:</span> Build <span class="token class-name">package</span>
      run<span class="token punctuation">:</span> dotnet publish <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>example <span class="token operator">-</span>c Release <span class="token operator">-</span>r linux<span class="token operator">-</span>x64 <span class="token operator">--</span>self<span class="token operator">-</span>contained <span class="token boolean">false</span> <span class="token operator">-</span>o deploy
      
    <span class="token operator">-</span> name<span class="token punctuation">:</span> Upload <span class="token class-name">package</span>
      uses<span class="token punctuation">:</span> garygrossgarten<span class="token operator">/</span>github<span class="token operator">-</span>action<span class="token operator">-</span>scp@v0<span class="token punctuation">.</span><span class="token number">7.3</span>
      with<span class="token punctuation">:</span>
        host<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets<span class="token punctuation">.</span>REMOTE_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
        username<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets<span class="token punctuation">.</span>REMOTE_USER <span class="token punctuation">}</span><span class="token punctuation">}</span>
        password<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets<span class="token punctuation">.</span>REMOTE_PWD <span class="token punctuation">}</span><span class="token punctuation">}</span>
        port<span class="token punctuation">:</span> <span class="token number">22</span>
        local<span class="token punctuation">:</span> <span class="token operator">/</span>home<span class="token operator">/</span>runner<span class="token operator">/</span>work<span class="token operator">/</span>playground<span class="token operator">/</span>example<span class="token operator">/</span>deploy<span class="token operator">/</span>
        remote<span class="token punctuation">:</span> <span class="token string">&quot;/home/project/example/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当main分支有提交或者PR时，发布就会触发；还有几个需要说明的地方， 关于打包，这里指定了 --self-contained false，是为了减少发布的dll文件，更多publish命令，可以参考.NET application publishing overview(https://docs.microsoft.com/en-us/dotnet/core/deploying/) 你可能已经注意到yml文件有很多secrets参数，这是在仓库如下处进行配置 <img src="`+u+`" alt="cc69e60c87ce9e7daaa76531dceb05ac_640_wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1.png" loading="lazy"> REMOTE_HOST是服务器地址，REMOTE_USER就是上面创建新账号github，我这里使用的是 garygrossgarten/github-action-scp(https://github.com/garygrossgarten/github-action-scp) SSH上传文件到服务器，更多用法说明，直接参考文档。 提交yml文件，打开Actions，查看执行情况，可以看到已经完成了。</p><p>检查下服务器是不是已经有发布文件了</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>cd <span class="token operator">/</span>home<span class="token operator">/</span>project<span class="token operator">/</span>example
ls <span class="token operator">-</span>l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>手动运行一下</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet example<span class="token punctuation">.</span>dll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发现可以访问了，如果不能访问请检查服务器的安全组规则设置。</p><h2 id="systemd-守护进程" tabindex="-1"><a class="header-anchor" href="#systemd-守护进程"><span>systemd 守护进程</span></a></h2><p>为了让服务在崩溃或者服务器重启之后，也能重新运行，这里使用systemd来管理我们的服务。创建服务定义文件：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>sudo nano <span class="token operator">/</span>etc<span class="token operator">/</span>systemd<span class="token operator">/</span>system<span class="token operator">/</span>dotnet<span class="token operator">-</span>example<span class="token punctuation">.</span>service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用如下配置，Ctrl + X 退出保存。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Service</span></span><span class="token punctuation">]</span>
WorkingDirectory<span class="token operator">=</span><span class="token operator">/</span>home<span class="token operator">/</span>project<span class="token operator">/</span><span class="token class-name">example</span>
ExecStart<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>dotnet <span class="token operator">/</span>home<span class="token operator">/</span>project<span class="token operator">/</span>example<span class="token operator">/</span><span class="token class-name">example<span class="token punctuation">.</span>dll</span>
Restart<span class="token operator">=</span>always
<span class="token preprocessor property">## Restart service after 5 seconds if the dotnet service crashes:</span>
RestartSec<span class="token operator">=</span><span class="token number">5</span>
KillSignal<span class="token operator">=</span><span class="token class-name">SIGINT</span>
SyslogIdentifier<span class="token operator">=</span>dotnet<span class="token operator">-</span><span class="token class-name">example</span>
User<span class="token operator">=</span><span class="token class-name">root</span>
Environment<span class="token operator">=</span>ASPNETCORE_ENVIRONMENT<span class="token operator">=</span><span class="token class-name">Production</span>
Environment<span class="token operator">=</span>DOTNET_PRINT_TELEMETRY_MESSAGE<span class="token operator">=</span><span class="token boolean">false</span>
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
WantedBy<span class="token operator">=</span>multi<span class="token operator">-</span>user<span class="token punctuation">.</span>target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务启用、启动、查看状态：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>sudo systemctl daemon<span class="token operator">-</span>reload
sudo systemctl enable dotnet<span class="token operator">-</span>example<span class="token punctuation">.</span>service
sudo systemctl start dotnet<span class="token operator">-</span>example<span class="token punctuation">.</span>service
sudo systemctl status dotnet<span class="token operator">-</span>example<span class="token punctuation">.</span>service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后更新Github Actions,将如下配置添加到末尾，这里使用的是同一个人的另一个项目来执行远程命令garygrossgarten/github-action-ssh(https://github.com/garygrossgarten/github-action-ssh)</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>    <span class="token operator">-</span> name<span class="token punctuation">:</span> Restart dotnet<span class="token operator">-</span><span class="token class-name">example<span class="token punctuation">.</span>service</span>
      uses<span class="token punctuation">:</span> garygrossgarten<span class="token operator">/</span>github<span class="token operator">-</span>action<span class="token operator">-</span>ssh@v0<span class="token punctuation">.</span><span class="token number">6.3</span>
      with<span class="token punctuation">:</span>
        command<span class="token punctuation">:</span> sudo systemctl restart dotnet<span class="token operator">-</span>example<span class="token punctuation">.</span>service<span class="token punctuation">;</span> cd <span class="token operator">/</span>home<span class="token operator">/</span>project<span class="token operator">/</span>example<span class="token punctuation">;</span> ls <span class="token operator">-</span><span class="token class-name">l</span>
        host<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets<span class="token punctuation">.</span>REMOTE_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
        username<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets<span class="token punctuation">.</span>REMOTE_USER <span class="token punctuation">}</span><span class="token punctuation">}</span>
        password<span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets<span class="token punctuation">.</span>REMOTE_PWD <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置生效，发布成功。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>本文完整介绍了如何使用Github Actions做CI&amp;CD，将ASP.NET Core 6.0 程序部署到阿里云Ubantu服务器，并使用Nginx作为web服务器，systemd做守护进程。</p><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,59),m={href:"https://www.cnblogs.com/netry/p/aspnetcore6-linux-nginx-github-actions-systemd.html",target:"_blank",rel:"noopener noreferrer"};function v(b,g){const a=t("ExternalLinkIcon");return p(),o("div",null,[k,s("p",null,[n("几秋："),s("a",m,[n("https://www.cnblogs.com/netry/p/aspnetcore6-linux-nginx-github-actions-systemd.html"),c(a)])])])}const y=e(d,[["render",v],["__file","ubuntuReleaseNet.html.vue"]]),_=JSON.parse('{"path":"/dotnet/buildAndRelease/release/linux/ubuntuReleaseNet.html","title":"Ubuntu部署.Net以及配置守护进程","lang":"zh-CN","frontmatter":{"title":"Ubuntu部署.Net以及配置守护进程","lang":"zh-CN","date":"2022-09-12T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"ubuntubushu_netyijipeizhishouhujincheng","slug":"us9qa0","docsId":"89624158","description":"目的 在Ubuntu上部署.Net程序进行测试。 环境准备 安装Ubuntu 有其他文章介绍 该服务器需要能外网访问 安装.Net环境 要安装.Net环境就需要运行以下命令将 Microsoft 包签名密钥添加到您的受信任密钥列表中并添加包存储库。 然后执行命令 等待一会，环境就已经装好了，输入命令测试一下吧 image.pngimage.png 安装...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/buildAndRelease/release/linux/ubuntuReleaseNet.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Ubuntu部署.Net以及配置守护进程"}],["meta",{"property":"og:description","content":"目的 在Ubuntu上部署.Net程序进行测试。 环境准备 安装Ubuntu 有其他文章介绍 该服务器需要能外网访问 安装.Net环境 要安装.Net环境就需要运行以下命令将 Microsoft 包签名密钥添加到您的受信任密钥列表中并添加包存储库。 然后执行命令 等待一会，环境就已经装好了，输入命令测试一下吧 image.pngimage.png 安装..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1660575003975-e6c9121d-5040-403c-8418-57b51a7deb5b.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-25T15:31:40.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-09-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-25T15:31:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ubuntu部署.Net以及配置守护进程\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1660575003975-e6c9121d-5040-403c-8418-57b51a7deb5b.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1661007440583-79a594ba-f34d-4ac6-9db3-e0947a1bf677.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1661007472823-cb7f376e-e33a-4474-bf0a-58d3d9d1cdea.png\\"],\\"datePublished\\":\\"2022-09-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-25T15:31:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"目的","slug":"目的","link":"#目的","children":[]},{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[{"level":3,"title":"安装Ubuntu","slug":"安装ubuntu","link":"#安装ubuntu","children":[]},{"level":3,"title":"安装.Net环境","slug":"安装-net环境","link":"#安装-net环境","children":[]},{"level":3,"title":"安装Nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":3,"title":"用户以及权限","slug":"用户以及权限","link":"#用户以及权限","children":[]}]},{"level":2,"title":"项目准备","slug":"项目准备","link":"#项目准备","children":[]},{"level":2,"title":"Github Actions 配置","slug":"github-actions-配置","link":"#github-actions-配置","children":[]},{"level":2,"title":"systemd 守护进程","slug":"systemd-守护进程","link":"#systemd-守护进程","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1708875100000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":4.01,"words":1202},"filePathRelative":"dotnet/buildAndRelease/release/linux/ubuntuReleaseNet.md","localizedDate":"2022年9月12日","excerpt":"<h2>目的</h2>\\n<p>在Ubuntu上部署.Net程序进行测试。</p>\\n<h2>环境准备</h2>\\n<h3>安装Ubuntu</h3>\\n<p>有其他文章介绍</p>\\n<blockquote>\\n<p>该服务器需要能外网访问</p>\\n</blockquote>\\n<h3>安装.Net环境</h3>\\n<p>要安装.Net环境就需要运行以下命令将 Microsoft 包签名密钥添加到您的受信任密钥列表中并添加包存储库。</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token class-name\\">wget</span> https<span class=\\"token punctuation\\">:</span><span class=\\"token operator\\">/</span><span class=\\"token operator\\">/</span>packages<span class=\\"token punctuation\\">.</span>microsoft<span class=\\"token punctuation\\">.</span>com<span class=\\"token operator\\">/</span>config<span class=\\"token operator\\">/</span>ubuntu<span class=\\"token operator\\">/</span><span class=\\"token number\\">22.04</span><span class=\\"token operator\\">/</span>packages<span class=\\"token operator\\">-</span>microsoft<span class=\\"token operator\\">-</span>prod<span class=\\"token punctuation\\">.</span>deb <span class=\\"token operator\\">-</span>O packages<span class=\\"token operator\\">-</span>microsoft<span class=\\"token operator\\">-</span>prod<span class=\\"token punctuation\\">.</span>deb\\nsudo dpkg <span class=\\"token operator\\">-</span>i packages<span class=\\"token operator\\">-</span>microsoft<span class=\\"token operator\\">-</span>prod<span class=\\"token punctuation\\">.</span>deb\\nrm packages<span class=\\"token operator\\">-</span>microsoft<span class=\\"token operator\\">-</span>prod<span class=\\"token punctuation\\">.</span>deb\\n</code></pre></div>","autoDesc":true}');export{y as comp,_ as data};