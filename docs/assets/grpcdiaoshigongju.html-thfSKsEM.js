import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as l,c,a as n,d as s,e,b as t}from"./app-DMmdIwn0.js";const i="/kbms/common/1637482333425-1f07bddf-0022-44f5-a34f-106b1475d427.png",r="/kbms/common/1637482430045-868f2cbb-8cc6-4183-8a1e-6113b19da5ed.png",d="/kbms/common/1638105481946-d4164f28-5a4b-49f3-9f03-a2d5b26f233f.png",u="/kbms/common/1638105859842-2a84efb3-ae48-40cd-8dc6-e0cd2dd6c204.png",g="/kbms/common/1625561623327-a03b2a4a-af6b-4ca0-bded-a7580fa2639a.png",m="/kbms/common/1638105959936-47da0a5c-8f7a-4065-a550-4fa2a595bf4a.png",h="/kbms/common/1638106012325-c7432af6-7d32-48bc-881f-96e0c2e69eff.png",b="/kbms/common/1638106178316-52df4385-d172-42ec-95df-0914bee75d6e.png",k="/kbms/common/1625556612495-8138ac2a-aa61-4fcc-a0c1-78e51d79b25d.png",v="/kbms/common/1625566538915-00ce0abd-ddd5-4dc6-b393-acbcd09c6b5c.png",f="/kbms/common/1625566606698-38c4eff0-ccff-4916-9ab4-0937c36efe7a.png",_="/kbms/common/1625566663689-561f175c-73de-4958-bee6-bb7e7070b91b.png",w="/kbms/common/1625566691712-45a1c4c4-0d3d-4383-9f66-828834e498ec.png",y={},x=t('<h2 id="_1-开篇语" tabindex="-1"><a class="header-anchor" href="#_1-开篇语"><span>1. 开篇语</span></a></h2><p>环境：windows10、.NetCore 3.x +<br> 该文章已经写了好久了，当初时候不懂得二进制包的用法，然后直接安装的go环境使用的，今天终于懂得了二进制文件的用法，所以可以直接跳过配置go环境的步骤，去看二进制用法。</p><h3 id="_1-1-go环境安装" tabindex="-1"><a class="header-anchor" href="#_1-1-go环境安装"><span>1.1 go环境安装</span></a></h3><p>先去下载go语言安装包，然后安装到某一个目录(随意) <img src="'+i+`" alt="image.png" loading="lazy"> 然后验证是否安装成功，在命令行输入</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>go env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="_2-介绍" tabindex="-1"><a class="header-anchor" href="#_2-介绍"><span>2. 介绍</span></a></h2><p>grpcurl 和 grpcui 都是调试grpc的工具，grpcurl使用命令行，类似curl工具；grpcui是通过可视化界面进行调试。两个工具是一个作者。</p>',8),z={href:"http://github.com/fullstorydev",target:"_blank",rel:"noopener noreferrer"},q=t(`<h2 id="_3-配置测试项目" tabindex="-1"><a class="header-anchor" href="#_3-配置测试项目"><span>3. 配置测试项目</span></a></h2><p>在您的grpc项目中另外再安装下面的组件</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span>ItemGroup<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token class-name">PackageReference</span> Include<span class="token operator">=</span><span class="token string">&quot;Grpc.AspNetCore&quot;</span> Version<span class="token operator">=</span><span class="token string">&quot;2.40.0&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token class-name">PackageReference</span> Include<span class="token operator">=</span><span class="token string">&quot;Grpc.AspNetCore.Server.Reflection&quot;</span> Version<span class="token operator">=</span><span class="token string">&quot;2.40.0&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ItemGroup<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过反射展示项目中的grpc服务，该项目里面包含了一个grpc服务</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf" data-title="protobuf"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span> <span class="token comment">//使用的协议</span>

<span class="token keyword">import</span> <span class="token string">&quot;google/protobuf/timestamp.proto&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;google/protobuf/wrappers.proto&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">option</span> csharp_namespace <span class="token operator">=</span> <span class="token string">&quot;UserService.Proto&quot;</span><span class="token punctuation">;</span> <span class="token comment">//命名空间</span>

<span class="token keyword">service</span> <span class="token class-name">UserInfoService</span><span class="token punctuation">{</span> <span class="token comment">//服务名</span>
    <span class="token comment">//用户用户信息 一元调用</span>
	<span class="token keyword">rpc</span> <span class="token function">GetUserInfo</span><span class="token punctuation">(</span><span class="token class-name">GetUserInfoRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token class-name">GetUserInfoResponse</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//登录请求类</span>
<span class="token keyword">message</span> <span class="token class-name">GetUserInfoRequest</span><span class="token punctuation">{</span>
  <span class="token builtin">string</span> user_id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//用户ID</span>
<span class="token punctuation">}</span>

<span class="token comment">//获取用户信息返回类</span>
<span class="token keyword">message</span> <span class="token class-name">GetUserInfoResponse</span><span class="token punctuation">{</span>
  <span class="token builtin">string</span> name<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//用户名</span>
  <span class="token builtin">string</span> nick_name<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">//昵称</span>
  <span class="token positional-class-name class-name">google<span class="token punctuation">.</span>protobuf<span class="token punctuation">.</span>Int32Value</span> sex<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span><span class="token comment">//可为空性别 1男 2女 空是未知</span>
  <span class="token positional-class-name class-name">google<span class="token punctuation">.</span>protobuf<span class="token punctuation">.</span>Timestamp</span> birthday<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">;</span><span class="token comment">//生日</span>
  <span class="token builtin">bool</span> isenabled<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">//是否启用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ConfigureServices中启动grpc并且启动反射</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>services<span class="token punctuation">.</span><span class="token function">AddGrpc</span><span class="token punctuation">(</span>options <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>EnableDetailedErrors <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    options<span class="token punctuation">.</span>MaxReceiveMessageSize <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span><span class="token comment">//2m</span>
    options<span class="token punctuation">.</span>MaxSendMessageSize <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span><span class="token comment">//5m</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//启用grpc反射</span>
services<span class="token punctuation">.</span><span class="token function">AddGrpcReflection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Configure中增加</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>app<span class="token punctuation">.</span><span class="token function">UseEndpoints</span><span class="token punctuation">(</span>endpoints <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token comment">//通过反射向gRPCurl提供示例端点和消息信息的端点</span>
    endpoints<span class="token punctuation">.</span><span class="token function">MapGrpcReflectionService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//gprc服务暴露</span>
    endpoints<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">MapGrpcService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UserInfoGrpcService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    endpoints<span class="token punctuation">.</span><span class="token function">MapControllers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),I={href:"https://localhost:7001",target:"_blank",rel:"noopener noreferrer"},C=t('<h2 id="_4-grpcurl" tabindex="-1"><a class="header-anchor" href="#_4-grpcurl"><span>4. grpcurl</span></a></h2><h3 id="_4-1-安装" tabindex="-1"><a class="header-anchor" href="#_4-1-安装"><span>4.1 安装</span></a></h3><h4 id="_4-1-1-操作二进制包" tabindex="-1"><a class="header-anchor" href="#_4-1-1-操作二进制包"><span>4.1.1 操作二进制包</span></a></h4>',3),G={href:"https://github.com/fullstorydev/grpcurl/releases",target:"_blank",rel:"noopener noreferrer"},R=n("img",{src:d,alt:"image.png",loading:"lazy"},null,-1),S=n("img",{src:u,alt:"image.png",loading:"lazy"},null,-1),N=t(`<h4 id="_4-1-2-编译源文件" tabindex="-1"><a class="header-anchor" href="#_4-1-2-编译源文件"><span>4.1.2 编译源文件</span></a></h4><p>在安装目录下执行，本文是在D:\\Program Files\\Go\\bin下执行</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>go install github<span class="token punctuation">.</span>com/fullstorydev/grpcurl/cmd/grpcurl@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装步骤</p><blockquote><p>此处本应该有图片的，结果一直安装不上(应该是需要科学一下)，之前安装的时候又忘了保存图片</p></blockquote><p>测试是否安装成功</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>grpcurl <span class="token operator">-</span>help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_4-2-操作" tabindex="-1"><a class="header-anchor" href="#_4-2-操作"><span>4.2 操作</span></a></h3><h4 id="_4-2-1-列出所有可用的grpc服务" tabindex="-1"><a class="header-anchor" href="#_4-2-1-列出所有可用的grpc服务"><span>4.2.1 列出所有可用的grpc服务</span></a></h4><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code> <span class="token punctuation">.</span>\\grpcurl localhost:5001 list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h4 id="_4-2-2-列表指定服务里面所有可用的端点" tabindex="-1"><a class="header-anchor" href="#_4-2-2-列表指定服务里面所有可用的端点"><span>4.2.2 列表指定服务里面所有可用的端点</span></a></h4><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code> <span class="token punctuation">.</span>\\grpcurl localhost:5001 list UserInfoService
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h4 id="_4-2-3-调用服务示例" tabindex="-1"><a class="header-anchor" href="#_4-2-3-调用服务示例"><span>4.2.3 调用服务示例</span></a></h4><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">.</span>\\grpcurl  <span class="token operator">-</span>d <span class="token string">&#39;{\\&quot;user_id\\&quot;:\\&quot;11\\&quot;}&#39;</span> localhost:5001 UserInfoService/GetUserInfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),U=n("img",{src:b,alt:"image.png",loading:"lazy"},null,-1),P={href:"https://github.com/fullstorydev/grpcurl",target:"_blank",rel:"noopener noreferrer"},T=t(`<h2 id="_5-grpcui" tabindex="-1"><a class="header-anchor" href="#_5-grpcui"><span>5. grpcui</span></a></h2><h3 id="_5-1-安装" tabindex="-1"><a class="header-anchor" href="#_5-1-安装"><span>5.1 安装</span></a></h3><p>这个东西是基于go环境进行安装的，需要提前配置go语言环境</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>go get github<span class="token punctuation">.</span>com/fullstorydev/grpcui
go install github<span class="token punctuation">.</span>com/fullstorydev/grpcui/cmd/grpcui@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装过程 <img src="`+k+`" alt="image.png" loading="lazy"> 执行个命令，验证下安装结果：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>grpcui <span class="token operator">-</span>help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Usage:
    grpcui [flags] [address]
    
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示安装成功了。或者使用grpcui -version命令。</p><h3 id="_5-2-项目中的配置" tabindex="-1"><a class="header-anchor" href="#_5-2-项目中的配置"><span>5.2 项目中的配置</span></a></h3>`,10),M={href:"https://localhost:7001",target:"_blank",rel:"noopener noreferrer"},j=t(`<h3 id="_5-3-操作" tabindex="-1"><a class="header-anchor" href="#_5-3-操作"><span>5.3 操作</span></a></h3><h4 id="_5-3-1-列出所有服务" tabindex="-1"><a class="header-anchor" href="#_5-3-1-列出所有服务"><span>5.3.1 列出所有服务</span></a></h4><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code>grpcui localhost:7001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+v+'" alt="image.png" loading="lazy"> 这个时候会自动打开该地址 <img src="'+f+'" alt="image.png" loading="lazy"> 通过界面直观显示该项目中所有的grpc服务以及服务的端点。</p><h4 id="_5-3-2-调用示例" tabindex="-1"><a class="header-anchor" href="#_5-3-2-调用示例"><span>5.3.2 调用示例</span></a></h4><p><img src="'+_+'" alt="image.png" loading="lazy"> 返回结果 <img src="'+w+'" alt="image.png" loading="lazy"></p><h2 id="_6-参考文档" tabindex="-1"><a class="header-anchor" href="#_6-参考文档"><span>6. 参考文档</span></a></h2>',7),V={href:"https://docs.microsoft.com/zh-cn/aspnet/core/grpc/test-tools?view=aspnetcore-3.1",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.cnblogs.com/myshowtime/p/14299596.html",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://www.cnblogs.com/myshowtime/p/14304668.html",target:"_blank",rel:"noopener noreferrer"};function A(D,B){const a=p("ExternalLinkIcon");return l(),c("div",null,[x,n("blockquote",null,[n("p",null,[s("作者GitHub地址："),n("a",z,[s("http://github.com/fullstorydev"),e(a)])])]),q,n("p",null,[s("启动项目，得到项目的运行地址是："),n("a",I,[s("https://localhost:"),e(a)]),s("5001")]),C,n("p",null,[s("从github上下载二进制文件直接操作，地址 "),n("a",G,[s("https://github.com/fullstorydev/grpcurl/releases"),e(a)]),R,s(" 下载后直接当当前目录下使用命令行，显示该地址下的grpc服务 "),S]),N,n("p",null,[U,s(" 更多使用使用方法查看："),n("a",P,[s("https://github.com/fullstorydev/grpcurl"),e(a)])]),T,n("p",null,[s("还使用上面的项目做测试，项目内需要配置反射操作，启动项目地址为："),n("a",M,[s("https://localhost:7001"),e(a)])]),j,n("blockquote",null,[n("p",null,[n("a",V,[s("https://docs.microsoft.com/zh-cn/aspnet/core/grpc/test-tools?view=aspnetcore-3.1"),e(a)]),s(" 当时写的时候遇到了问题，多亏了SpringLeee的这两篇文章 "),n("a",E,[s("https://www.cnblogs.com/myshowtime/p/14299596.html"),e(a)]),n("a",Z,[s("https://www.cnblogs.com/myshowtime/p/14304668.html"),e(a)])])])])}const F=o(y,[["render",A],["__file","grpcdiaoshigongju.html.vue"]]),H=JSON.parse('{"path":"/middleware/grpc/grpcdiaoshigongju.html","title":"gRPC调试工具","lang":"zh-CN","frontmatter":{"title":"gRPC调试工具","lang":"zh-CN","date":"2023-09-12T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"grpcdiaoshigongju","slug":"fybkye","docsId":"48147135","description":"1. 开篇语 环境：windows10、.NetCore 3.x + 该文章已经写了好久了，当初时候不懂得二进制包的用法，然后直接安装的go环境使用的，今天终于懂得了二进制文件的用法，所以可以直接跳过配置go环境的步骤，去看二进制用法。 1.1 go环境安装 先去下载go语言安装包，然后安装到某一个目录(随意) image.png 然后验证是否安装成功...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/grpc/grpcdiaoshigongju.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"gRPC调试工具"}],["meta",{"property":"og:description","content":"1. 开篇语 环境：windows10、.NetCore 3.x + 该文章已经写了好久了，当初时候不懂得二进制包的用法，然后直接安装的go环境使用的，今天终于懂得了二进制文件的用法，所以可以直接跳过配置go环境的步骤，去看二进制用法。 1.1 go环境安装 先去下载go语言安装包，然后安装到某一个目录(随意) image.png 然后验证是否安装成功..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1637482333425-1f07bddf-0022-44f5-a34f-106b1475d427.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T14:00:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T14:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gRPC调试工具\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1637482333425-1f07bddf-0022-44f5-a34f-106b1475d427.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1637482430045-868f2cbb-8cc6-4183-8a1e-6113b19da5ed.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1638105481946-d4164f28-5a4b-49f3-9f03-a2d5b26f233f.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1638105859842-2a84efb3-ae48-40cd-8dc6-e0cd2dd6c204.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1625561623327-a03b2a4a-af6b-4ca0-bded-a7580fa2639a.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1638105959936-47da0a5c-8f7a-4065-a550-4fa2a595bf4a.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1638106012325-c7432af6-7d32-48bc-881f-96e0c2e69eff.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1638106178316-52df4385-d172-42ec-95df-0914bee75d6e.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1625556612495-8138ac2a-aa61-4fcc-a0c1-78e51d79b25d.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1625566538915-00ce0abd-ddd5-4dc6-b393-acbcd09c6b5c.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1625566606698-38c4eff0-ccff-4916-9ab4-0937c36efe7a.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1625566663689-561f175c-73de-4958-bee6-bb7e7070b91b.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1625566691712-45a1c4c4-0d3d-4383-9f66-828834e498ec.png\\"],\\"datePublished\\":\\"2023-09-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T14:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"1. 开篇语","slug":"_1-开篇语","link":"#_1-开篇语","children":[{"level":3,"title":"1.1 go环境安装","slug":"_1-1-go环境安装","link":"#_1-1-go环境安装","children":[]}]},{"level":2,"title":"2. 介绍","slug":"_2-介绍","link":"#_2-介绍","children":[]},{"level":2,"title":"3. 配置测试项目","slug":"_3-配置测试项目","link":"#_3-配置测试项目","children":[]},{"level":2,"title":"4. grpcurl","slug":"_4-grpcurl","link":"#_4-grpcurl","children":[{"level":3,"title":"4.1 安装","slug":"_4-1-安装","link":"#_4-1-安装","children":[{"level":4,"title":"4.1.1 操作二进制包","slug":"_4-1-1-操作二进制包","link":"#_4-1-1-操作二进制包","children":[]},{"level":4,"title":"4.1.2 编译源文件","slug":"_4-1-2-编译源文件","link":"#_4-1-2-编译源文件","children":[]}]},{"level":3,"title":"4.2 操作","slug":"_4-2-操作","link":"#_4-2-操作","children":[{"level":4,"title":"4.2.1 列出所有可用的grpc服务","slug":"_4-2-1-列出所有可用的grpc服务","link":"#_4-2-1-列出所有可用的grpc服务","children":[]},{"level":4,"title":"4.2.2 列表指定服务里面所有可用的端点","slug":"_4-2-2-列表指定服务里面所有可用的端点","link":"#_4-2-2-列表指定服务里面所有可用的端点","children":[]},{"level":4,"title":"4.2.3 调用服务示例","slug":"_4-2-3-调用服务示例","link":"#_4-2-3-调用服务示例","children":[]}]}]},{"level":2,"title":"5. grpcui","slug":"_5-grpcui","link":"#_5-grpcui","children":[{"level":3,"title":"5.1 安装","slug":"_5-1-安装","link":"#_5-1-安装","children":[]},{"level":3,"title":"5.2 项目中的配置","slug":"_5-2-项目中的配置","link":"#_5-2-项目中的配置","children":[]},{"level":3,"title":"5.3 操作","slug":"_5-3-操作","link":"#_5-3-操作","children":[{"level":4,"title":"5.3.1 列出所有服务","slug":"_5-3-1-列出所有服务","link":"#_5-3-1-列出所有服务","children":[]},{"level":4,"title":"5.3.2 调用示例","slug":"_5-3-2-调用示例","link":"#_5-3-2-调用示例","children":[]}]}]},{"level":2,"title":"6. 参考文档","slug":"_6-参考文档","link":"#_6-参考文档","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1697724028000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":3.4,"words":1021},"filePathRelative":"middleware/grpc/grpcdiaoshigongju.md","localizedDate":"2023年9月12日","excerpt":"<h2>1. 开篇语</h2>\\n<p>环境：windows10、.NetCore 3.x +<br>\\n该文章已经写了好久了，当初时候不懂得二进制包的用法，然后直接安装的go环境使用的，今天终于懂得了二进制文件的用法，所以可以直接跳过配置go环境的步骤，去看二进制用法。</p>\\n<h3>1.1 go环境安装</h3>\\n<p>先去下载go语言安装包，然后安装到某一个目录(随意)\\n<img src=\\"/common/1637482333425-1f07bddf-0022-44f5-a34f-106b1475d427.png\\" alt=\\"image.png\\" loading=\\"lazy\\">\\n然后验证是否安装成功，在命令行输入</p>","autoDesc":true}');export{F as comp,H as data};