import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as l,a,b as s,d as e,e as t}from"./app-vSdX8vi3.js";const c="/kbms/common/1666507188061-96eecd90-5b48-485a-8456-5e69c6f6dce1.png",i="/kbms/common/1666507991074-985ad832-4074-477d-a5f9-f6e6ce428b49.png",u={},d=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>将应用打包到MSIX包中(目前仅允许该方式)。</p><h2 id="创建签名证书" tabindex="-1"><a class="header-anchor" href="#创建签名证书"><span>创建签名证书</span></a></h2><blockquote><p>用来对MSIX包进行签名</p></blockquote><p>1.导航到项目目录下，然后使用终端执行命令来生成自签名证书</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>New<span class="token operator">-</span>SelfSignedCertificate <span class="token operator">-</span>Type Custom \` <span class="token operator">-</span>Subject <span class="token string">&quot;CN=azrng&quot;</span> \`  <span class="token operator">-</span>KeyUsage DigitalSignature \`  <span class="token operator">-</span>FriendlyName <span class="token string">&quot;我的临时测试证书&quot;</span> \` <span class="token operator">-</span>CertStoreLocation <span class="token string">&quot;Cert:\\CurrentUser\\My&quot;</span> \` <span class="token operator">-</span>TextExtension @<span class="token punctuation">(</span><span class="token string">&quot;2.5.29.37={text}1.3.6.1.5.5.7.3.3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2.5.29.19={text}&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>记得在PowerShell输入</p></blockquote><p>应该看到类似的结果</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name">PS</span> D<span class="token punctuation">:</span>\\Gitee\\maui<span class="token operator">-</span>app<span class="token operator">-</span>hello\\MauiAppBlazor\\MauiAppBlazor<span class="token operator">&gt;</span> New<span class="token operator">-</span>SelfSignedCertificate <span class="token operator">-</span>Type Custom \` <span class="token operator">-</span>Subject <span class="token string">&quot;CN=azrng&quot;</span> \`  <span class="token operator">-</span>KeyUsage DigitalSignature \`  <span class="token operator">-</span>FriendlyName <span class="token string">&quot;我的临时测试证书&quot;</span> \` <span class="token operator">-</span>CertStoreLocation <span class="token string">&quot;Cert:\\CurrentUser\\My&quot;</span> \` <span class="token operator">-</span>TextExtension @<span class="token punctuation">(</span><span class="token string">&quot;2.5.29.37={text}1.3.6.1.5.5.7.3.3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2.5.29.19={text}&quot;</span><span class="token punctuation">)</span>


   PSParentPath<span class="token punctuation">:</span>Microsoft<span class="token punctuation">.</span>PowerShell<span class="token punctuation">.</span>Security\\Certificate<span class="token punctuation">::</span>CurrentUser\\My

Thumbprint                                Subject
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>                                <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
1A415F8B4F4398A933A730648C300F68841B5258  CN<span class="token operator">=</span>azrng
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用下面的PowerShell命令来查询已经创建的证书存储</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>Get<span class="token operator">-</span>ChildItem <span class="token string">&quot;Cert:\\CurrentUser\\My&quot;</span> <span class="token operator">|</span> Format<span class="token operator">-</span><span class="token class-name">Table</span> Subject<span class="token punctuation">,</span> FriendlyName<span class="token punctuation">,</span> Thumbprint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>应该看到类似的结果</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name">PS</span> D<span class="token punctuation">:</span>\\Gitee\\maui<span class="token operator">-</span>app<span class="token operator">-</span>hello\\MauiAppBlazor\\MauiAppBlazor<span class="token operator">&gt;</span> Get<span class="token operator">-</span>ChildItem <span class="token string">&quot;Cert:\\CurrentUser\\My&quot;</span> <span class="token operator">|</span> Format<span class="token operator">-</span><span class="token class-name">Table</span> Subject<span class="token punctuation">,</span> FriendlyName<span class="token punctuation">,</span> Thumbprint

Subject                                 FriendlyName                               Thumbprint
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>                                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>                               <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>
CN<span class="token operator">=</span>localhost                            ASP<span class="token punctuation">.</span>NET Core HTTPS development certificate FDD2DCF331F5DEF609E39584F185E6DD3<span class="token range operator">..</span><span class="token punctuation">.</span>
CN<span class="token operator">=</span>azrng                                                                           BBF2F303F1B72868CD408B23C978429EB<span class="token range operator">..</span><span class="token punctuation">.</span>
CN<span class="token operator">=</span>2452c715<span class="token operator">-</span>a387<span class="token operator">-</span>461a<span class="token operator">-</span>bbcd<span class="token operator">-</span>eb311b41c4db Microsoft Your Phone                       7DAFC2703C3CBFE2B62C9BFF7D524704B<span class="token range operator">..</span><span class="token punctuation">.</span>
CN<span class="token operator">=</span>azrng                                我的临时测试证书                            1A415F8B4F4398A933A730648C300F688<span class="token range operator">..</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项目的生成设置" tabindex="-1"><a class="header-anchor" href="#配置项目的生成设置"><span>配置项目的生成设置</span></a></h2><p>在项目的csproj中间中加入下面的配置，该配置设置当目前框架为windows并且为release的时候，才会运行</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">PropertyGroup</span> Condition<span class="token operator">=</span><span class="token string">&quot;$([MSBuild]::GetTargetPlatformIdentifier(&#39;$(TargetFramework)&#39;)) == &#39;windows&#39; and &#39;$(Configuration)&#39; == &#39;Release&#39;&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>AppxPackageSigningEnabled<span class="token operator">&gt;</span><span class="token boolean">true</span><span class="token operator">&lt;</span><span class="token operator">/</span>AppxPackageSigningEnabled<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>PackageCertificateThumbprint<span class="token operator">&gt;</span>1A415F8B4F4398A933A730648C300F68841B5258<span class="token operator">&lt;</span><span class="token operator">/</span>PackageCertificateThumbprint<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>PropertyGroup<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token class-name">PropertyGroup</span> Condition<span class="token operator">=</span><span class="token string">&quot;$([MSBuild]::GetTargetPlatformIdentifier(&#39;$(TargetFramework)&#39;)) == &#39;windows&#39; and &#39;$(RuntimeIdentifierOverride)&#39; != &#39;&#39;&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>RuntimeIdentifier<span class="token operator">&gt;</span>$<span class="token punctuation">(</span>RuntimeIdentifierOverride<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>RuntimeIdentifier<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>PropertyGroup<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),k=a("code",null,"<PropertyGroup>",-1),m={href:"https://github.com/microsoft/WindowsAppSDK/issues/2940",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="发布" tabindex="-1"><a class="header-anchor" href="#发布"><span>发布</span></a></h2><h3 id="cli发布" tabindex="-1"><a class="header-anchor" href="#cli发布"><span>CLI发布</span></a></h3><p>使用终端程序运行下面的命令</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet publish <span class="token operator">-</span>f net7<span class="token punctuation">.</span><span class="token number">0</span><span class="token operator">-</span>windows10<span class="token punctuation">.</span><span class="token number">0.19041</span><span class="token number">.0</span> <span class="token operator">-</span>c Release <span class="token operator">/</span>p<span class="token punctuation">:</span>RuntimeIdentifierOverride<span class="token operator">=</span>win10<span class="token operator">-</span>x64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意：尝试发布 .NET MAUI 解决方案将导致 dotnet publish 命令尝试单独发布解决方案中的每个项目，这可能会导致将其他项目类型添加到解决方案时出现问题。 因此，命令 dotnet publish 的范围应限定为 .NET MAUI 应用项目。</p></blockquote><p>参数说明：</p>`,6),b=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"参数"),a("th",null,"Value")])]),a("tbody",null,[a("tr",null,[a("td",{version:""},"-f net6.0-windows"),a("td",null,[s("目标框架，它是 Windows TFM，例如 net6.0-windows10.0.19041.0。 确保此值与 "),a("em",null,".csproj"),s(" 文件中节点的值"),a("code",null,"<TargetFrameworks>"),s("相同。")])]),a("tr",null,[a("td",null,"-c Release"),a("td",null,"设置生成配置，即 Release。")]),a("tr",null,[a("td",null,"/p:RuntimeIdentifierOverride=win10-x64"),a("td")])])],-1),h={href:"https://github.com/microsoft/WindowsAppSDK/issues/2940",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>发布应用生成和打包，将签名包复制到 <code>\\net7.0-windows10.0.19041.0\\win10-x64\\AppPackages\\&lt;appname&gt;</code> 文件夹。 <code>&lt;appname&gt;</code> 是一个以项目和版本命名的文件夹。 在此文件夹中，有 一个 msix 文件，即应用包。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>Mode                 LastWriteTime         Length Name
<span class="token operator">--</span><span class="token operator">--</span>                 <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>         <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span>
d<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>        <span class="token number">2022</span><span class="token operator">/</span><span class="token number">10</span><span class="token operator">/</span><span class="token number">23</span>     <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">34</span>                Add<span class="token operator">-</span>AppDevPackage<span class="token punctuation">.</span>resources
d<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>        <span class="token number">2022</span><span class="token operator">/</span><span class="token number">10</span><span class="token operator">/</span><span class="token number">23</span>     <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">34</span>                Dependencies
<span class="token operator">-</span>a<span class="token operator">--</span><span class="token operator">--</span>          <span class="token number">2022</span><span class="token operator">/</span><span class="token number">9</span><span class="token operator">/</span><span class="token number">9</span>     <span class="token number">13</span><span class="token punctuation">:</span><span class="token number">50</span>          <span class="token number">37837</span> Add<span class="token operator">-</span>AppDevPackage<span class="token punctuation">.</span>ps1
<span class="token operator">-</span>a<span class="token operator">--</span><span class="token operator">--</span>          <span class="token number">2022</span><span class="token operator">/</span><span class="token number">9</span><span class="token operator">/</span><span class="token number">9</span>     <span class="token number">13</span><span class="token punctuation">:</span><span class="token number">50</span>          <span class="token number">13686</span> Install<span class="token punctuation">.</span>ps1
<span class="token operator">-</span>a<span class="token operator">--</span><span class="token operator">--</span>        <span class="token number">2022</span><span class="token operator">/</span><span class="token number">10</span><span class="token operator">/</span><span class="token number">23</span>     <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">34</span>            <span class="token number">770</span> MauiAppBlazor_1<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token punctuation">.</span>1_x64<span class="token punctuation">.</span>cer
<span class="token operator">-</span>a<span class="token operator">--</span><span class="token operator">--</span>        <span class="token number">2022</span><span class="token operator">/</span><span class="token number">10</span><span class="token operator">/</span><span class="token number">23</span>     <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">34</span>       <span class="token number">77102456</span> MauiAppBlazor_1<span class="token punctuation">.</span><span class="token number">0.0</span><span class="token punctuation">.</span>1_x64<span class="token punctuation">.</span>msix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装应用" tabindex="-1"><a class="header-anchor" href="#安装应用"><span>安装应用</span></a></h2><p>若要安装应用，必须使用已信任的证书进行签名。 如果不是，Windows 不会让你安装应用。 将显示如下所示的对话框，其中禁用了“安装”按钮： <img src="`+c+'" alt="image.png" loading="lazy"> 如果要信任应用的证书，那么需要右键应用然后属性=&gt;数字签名=&gt;选择证书=&gt;详细信息=&gt;查看证书=&gt;安装证书=&gt;选择本地计算机=&gt;下一步=&gt;在证书导入向导中，选择将所有证书放在一下存储区中=&gt;选择浏览，然后选择受信任的人员存储区，点击确定关闭=&gt;选择下一步，然后选择完成可以看到对话框提示导入成功。 <img src="'+i+'" alt="image.png" loading="lazy"> 再次尝试打开包进行安装应用，会看到已经可以正常安装了。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>',5),f={href:"https://learn.microsoft.com/zh-cn/dotnet/maui/windows/deployment/publish-cli",target:"_blank",rel:"noopener noreferrer"};function w(C,S){const n=o("ExternalLinkIcon");return r(),l("div",null,[d,a("p",null,[s("将PackageCertificateThumbprint属性值替换为之前生成的证书Thumbprint，这里也可以不设置，在命令发布的时候再设置也行。 示例中的第二 "),k,s(" 个是解决 Windows SDK 中的 bug 所必需的。 有关 bug 的详细信息，请参阅 "),a("a",m,[s("WindowsAppSDK 问题 #2940"),e(n)]),s("。")]),g,b,a("ul",null,[a("li",null,[s("或 - /p:RuntimeIdentifierOverride=win10-x86 | 避免 "),a("a",h,[s("WindowsAppSDK 问题 #2940"),e(n)]),s(" 中详述的 bug。 -x64根据目标平台选择参数的或-x86版本。 |")])]),v,a("p",null,[s("官网教程："),a("a",f,[s("https://learn.microsoft.com/zh-cn/dotnet/maui/windows/deployment/publish-cli"),e(n)])])])}const _=p(u,[["render",w],["__file","windowsfabu.html.vue"]]),T=JSON.parse('{"path":"/dotnet/maui/fabu/windowsfabu.html","title":"Windows发布","lang":"zh-CN","frontmatter":{"title":"Windows发布","lang":"zh-CN","date":"2023-02-27T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"windowsfabu","slug":"nkrku0","docsId":"97630171","description":"概述 将应用打包到MSIX包中(目前仅允许该方式)。 创建签名证书 用来对MSIX包进行签名 1.导航到项目目录下，然后使用终端执行命令来生成自签名证书 记得在PowerShell输入 应该看到类似的结果 使用下面的PowerShell命令来查询已经创建的证书存储 应该看到类似的结果 配置项目的生成设置 在项目的csproj中间中加入下面的配置，该配置...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/maui/fabu/windowsfabu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Windows发布"}],["meta",{"property":"og:description","content":"概述 将应用打包到MSIX包中(目前仅允许该方式)。 创建签名证书 用来对MSIX包进行签名 1.导航到项目目录下，然后使用终端执行命令来生成自签名证书 记得在PowerShell输入 应该看到类似的结果 使用下面的PowerShell命令来查询已经创建的证书存储 应该看到类似的结果 配置项目的生成设置 在项目的csproj中间中加入下面的配置，该配置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1666507188061-96eecd90-5b48-485a-8456-5e69c6f6dce1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T15:51:40.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-02-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T15:51:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows发布\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1666507188061-96eecd90-5b48-485a-8456-5e69c6f6dce1.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1666507991074-985ad832-4074-477d-a5f9-f6e6ce428b49.png\\"],\\"datePublished\\":\\"2023-02-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T15:51:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"创建签名证书","slug":"创建签名证书","link":"#创建签名证书","children":[]},{"level":2,"title":"配置项目的生成设置","slug":"配置项目的生成设置","link":"#配置项目的生成设置","children":[]},{"level":2,"title":"发布","slug":"发布","link":"#发布","children":[{"level":3,"title":"CLI发布","slug":"cli发布","link":"#cli发布","children":[]}]},{"level":2,"title":"安装应用","slug":"安装应用","link":"#安装应用","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1697989900000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":3.18,"words":953},"filePathRelative":"dotnet/maui/fabu/windowsfabu.md","localizedDate":"2023年2月27日","excerpt":"<h2>概述</h2>\\n<p>将应用打包到MSIX包中(目前仅允许该方式)。</p>\\n<h2>创建签名证书</h2>\\n<blockquote>\\n<p>用来对MSIX包进行签名</p>\\n</blockquote>\\n<p>1.导航到项目目录下，然后使用终端执行命令来生成自签名证书</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code>New<span class=\\"token operator\\">-</span>SelfSignedCertificate <span class=\\"token operator\\">-</span>Type Custom ` <span class=\\"token operator\\">-</span>Subject <span class=\\"token string\\">\\"CN=azrng\\"</span> `  <span class=\\"token operator\\">-</span>KeyUsage DigitalSignature `  <span class=\\"token operator\\">-</span>FriendlyName <span class=\\"token string\\">\\"我的临时测试证书\\"</span> ` <span class=\\"token operator\\">-</span>CertStoreLocation <span class=\\"token string\\">\\"Cert:\\\\CurrentUser\\\\My\\"</span> ` <span class=\\"token operator\\">-</span>TextExtension @<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"2.5.29.37={text}1.3.6.1.5.5.7.3.3\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"2.5.29.19={text}\\"</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>","autoDesc":true}');export{_ as comp,T as data};