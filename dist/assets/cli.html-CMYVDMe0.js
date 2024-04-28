import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c as d,a as n,b as e,d as a,e as t}from"./app-vSdX8vi3.js";const r={},c=n("h2",{id:"概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#概述"},[n("span",null,"概述")])],-1),p=n("p",null,"关于dotNet的一些命令使用",-1),m=n("h2",{id:"sdk信息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sdk信息"},[n("span",null,"SDK信息")])],-1),u={href:"https://dotnet.microsoft.com/zh-cn/download/dotnet",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token preprocessor property">## 查看已经安装的sdk</span>
dotnet <span class="token operator">--</span>list<span class="token operator">-</span>sdks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dots" tabindex="-1"><a class="header-anchor" href="#dots"><span>Dots</span></a></h3>`,2),h={href:"https://github.com/nor0x/Dots",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="工作负载" tabindex="-1"><a class="header-anchor" href="#工作负载"><span>工作负载</span></a></h2><h3 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 获取已经安装的列表</span>
dotnet workload list

<span class="token comment"># 安装</span>
dotnet workload <span class="token function">install</span> wrokload_id

<span class="token comment"># 安装项目或解决方案所需的工作负载</span>
dotnet workload restore

<span class="token comment"># 示例安装.net aspire</span>
dotnet workload <span class="token function">install</span> aspire

<span class="token comment"># 修复工作负载安装</span>
dotnet workload repair

<span class="token comment"># 更新已安装的工作负载</span>
dotnet workload update

<span class="token comment"># 卸载指定的工作负载</span>
dotnet workload uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dotnettool" tabindex="-1"><a class="header-anchor" href="#dotnettool"><span>dotnetTool</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## 获取已经安装的工具列表</span>
dotnet tool list <span class="token parameter variable">-g</span>

<span class="token comment">## 安装工具</span>
dotnet tool <span class="token function">install</span> xxx

<span class="token comment">### 比如安装下面这些东西</span>
dotnet tool <span class="token function">install</span> <span class="token parameter variable">--global</span> PowerShell
dotnet tool <span class="token function">install</span> <span class="token parameter variable">-g</span> csharpier

<span class="token comment">## 更新</span>
dotnet tool update <span class="token parameter variable">-g</span> csharpier

<span class="token comment">## 卸载</span>
dotnet tool uninstall xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目操作" tabindex="-1"><a class="header-anchor" href="#项目操作"><span>项目操作</span></a></h2><h3 id="项目模板" tabindex="-1"><a class="header-anchor" href="#项目模板"><span>项目模板</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看已经安装的模板</span>
dotnet new <span class="token parameter variable">--list</span>

<span class="token comment"># 安装模板，如</span>
dotnet new <span class="token parameter variable">-i</span> Xunit.DependencyInjection.Template

<span class="token comment"># 卸载模板</span>
dotnet new <span class="token parameter variable">-u</span> Xunit.DependencyInjection.Template

<span class="token comment"># 更新所有的项目模板</span>
dotnet new update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建解决方案" tabindex="-1"><a class="header-anchor" href="#创建解决方案"><span>创建解决方案</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建解决方案</span>
dotnet new sln

<span class="token comment"># 创建指定名称的解决方案</span>
dotnet new sln <span class="token parameter variable">-n</span> ThirdNugetStudy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 使用xunit-di模板创建项目 </span>
dotnet new xunit-di

<span class="token comment"># 创建项目并指定名称</span>
dotnet new console <span class="token parameter variable">-n</span> ConseoleApp1

<span class="token comment"># 创建下项目并指定框架版本</span>
dotnet new xunit-di <span class="token parameter variable">-f</span> net5.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构建" tabindex="-1"><a class="header-anchor" href="#构建"><span>构建</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 构建服务</span>
dotnet build  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务"><span>启动服务</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dotnet run  <span class="token comment">#直接启动服务,启用源码</span>
dotnet run <span class="token parameter variable">--urls</span><span class="token operator">=</span>http://*:8080 <span class="token comment">#使用指定端口启动</span>
<span class="token comment"># 发布到win下需要双击启用api程序的时候没法设定监听http://*:8080，可以通过代码设置</span>
<span class="token comment"># builder.WebHost.UseUrls(&quot;http://*:8080&quot;);</span>

<span class="token comment"># 启动并且传递参数生成数据库</span>
dotnet run <span class="token parameter variable">-s</span> send 
<span class="token comment"># 以Release模式启用</span>
dotnet run <span class="token parameter variable">-c</span> Release

dotnet WebApi.dll <span class="token parameter variable">--urls</span><span class="token operator">=</span><span class="token string">&quot;http://*:5000&quot;</span>
dotnet WebApi.dll <span class="token parameter variable">--urls</span><span class="token operator">=</span><span class="token string">&quot;http://*:5000;https://*:5001&quot;</span> <span class="token parameter variable">--environment</span><span class="token operator">=</span>Development 
dotnet run --Logging:LogLevel:Default<span class="token operator">=</span><span class="token string">&quot;Warning&quot;</span> <span class="token comment">#启动并且修改配置文件</span>

<span class="token comment"># 启动并且监视，如果有改动就会重新启动</span>
dotnet <span class="token function">watch</span> run 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想自己电脑启用服务，然后让局域网同事访问，需要关闭防火墙，然后修改launchSettings.json文件里面的 http://localhost:5000 为 http://0.0.0.0:5000</p><h3 id="发布服务" tabindex="-1"><a class="header-anchor" href="#发布服务"><span>发布服务</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 发布项目并指定发布目录</span>
dotnet publish <span class="token parameter variable">-o</span> ./publish

dotnet publish <span class="token parameter variable">-f</span> net8.0 <span class="token parameter variable">-c</span> Release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除编译文件" tabindex="-1"><a class="header-anchor" href="#删除编译文件"><span>删除编译文件</span></a></h3><p>删除项目下的编译文件，假设您有可用的 Powershell，我发现以下脚本非常有用。</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Get-ChildItem</span> <span class="token punctuation">.</span>\\ <span class="token operator">-</span>include bin<span class="token punctuation">,</span>obj <span class="token operator">-</span>Recurse <span class="token punctuation">|</span> <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$_</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">remove-item</span> <span class="token variable">$_</span><span class="token punctuation">.</span>fullname <span class="token operator">-</span>Force <span class="token operator">-</span>Recurse <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该脚本的原始来源还包括 bash/zsh 和 Windows cmd 版本的选项，尽管我很少需要这些。一个稍微更紧凑的版本是：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">gci</span> <span class="token operator">-</span>exclude <span class="token string">&quot;*.dll&quot;</span> <span class="token operator">-</span>include bin<span class="token punctuation">,</span>obj <span class="token operator">-</span>recurse <span class="token punctuation">|</span> <span class="token function">remove-item</span> <span class="token operator">-</span>force <span class="token operator">-</span>recurse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您想将命令放入批处理文件中（用于 cmd 使用或从 Windows 资源管理器双击），此脚本应该可以解决问题（注意它不使用回收站或删除前确认！）：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>for /d /r . %d in (bin,obj) do @if exist &quot;%d&quot; rd /s/q &quot;%d&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您删除/q.</p>`,27);function k(g,f){const s=i("ExternalLinkIcon");return o(),d("div",null,[c,p,m,n("p",null,[e("sdk下载地址："),n("a",u,[e("https://dotnet.microsoft.com/zh-cn/download/dotnet"),a(s)])]),v,n("p",null,[e("Dots 是一个用于管理 .NET SDK 的 GUI 工具，它使用 .NET MAUI 开发的，可用于 Windows 和 macOS。 仓库地址："),n("a",h,[e("https://github.com/nor0x/Dots"),a(s)])]),b])}const _=l(r,[["render",k],["__file","cli.html.vue"]]),y=JSON.parse('{"path":"/dotnet/cli.html","title":"CLI","lang":"zh-CN","frontmatter":{"title":"CLI","lang":"zh-CN","date":"2023-10-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"changyongcaozuomingling","slug":"neasdg","docsId":"30912677","description":"概述 关于dotNet的一些命令使用 SDK信息 sdk下载地址：https://dotnet.microsoft.com/zh-cn/download/dotnet Dots Dots 是一个用于管理 .NET SDK 的 GUI 工具，它使用 .NET MAUI 开发的，可用于 Windows 和 macOS。 仓库地址：https://githu...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/cli.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"CLI"}],["meta",{"property":"og:description","content":"概述 关于dotNet的一些命令使用 SDK信息 sdk下载地址：https://dotnet.microsoft.com/zh-cn/download/dotnet Dots Dots 是一个用于管理 .NET SDK 的 GUI 工具，它使用 .NET MAUI 开发的，可用于 Windows 和 macOS。 仓库地址：https://githu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-21T12:34:44.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-21T12:34:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CLI\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-21T12:34:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"SDK信息","slug":"sdk信息","link":"#sdk信息","children":[{"level":3,"title":"Dots","slug":"dots","link":"#dots","children":[]}]},{"level":2,"title":"工作负载","slug":"工作负载","link":"#工作负载","children":[{"level":3,"title":"快速上手","slug":"快速上手","link":"#快速上手","children":[]},{"level":3,"title":"dotnetTool","slug":"dotnettool","link":"#dotnettool","children":[]}]},{"level":2,"title":"项目操作","slug":"项目操作","link":"#项目操作","children":[{"level":3,"title":"项目模板","slug":"项目模板","link":"#项目模板","children":[]},{"level":3,"title":"创建解决方案","slug":"创建解决方案","link":"#创建解决方案","children":[]},{"level":3,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":3,"title":"构建","slug":"构建","link":"#构建","children":[]},{"level":3,"title":"启动服务","slug":"启动服务","link":"#启动服务","children":[]},{"level":3,"title":"发布服务","slug":"发布服务","link":"#发布服务","children":[]},{"level":3,"title":"删除编译文件","slug":"删除编译文件","link":"#删除编译文件","children":[]}]}],"git":{"createdTime":1697962303000,"updatedTime":1713702884000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":3},{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":2.64,"words":791},"filePathRelative":"dotnet/cli.md","localizedDate":"2023年10月14日","excerpt":"<h2>概述</h2>\\n<p>关于dotNet的一些命令使用</p>\\n<h2>SDK信息</h2>\\n<p>sdk下载地址：<a href=\\"https://dotnet.microsoft.com/zh-cn/download/dotnet\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://dotnet.microsoft.com/zh-cn/download/dotnet</a></p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token preprocessor property\\">## 查看已经安装的sdk</span>\\ndotnet <span class=\\"token operator\\">--</span>list<span class=\\"token operator\\">-</span>sdks\\n</code></pre></div>","autoDesc":true}');export{_ as comp,y as data};
