import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as c,c as i,a as n,b as s,d as t,e}from"./app-vSdX8vi3.js";const l="/kbms/common/1622383774783-61f141ee-37bf-445f-9df8-5992ee54cefa.png",u="/kbms/common/1622383889423-e0085b40-f3f3-4893-9cdc-292cc5c4b23b.png",r="/kbms/common/1622386210763-174c2eb6-e88d-4a18-b711-b6a085b19e4c.png",d="/kbms/common/1622384227460-80915f07-a920-40a7-b9fc-97dd9dc22683.png",k="/kbms/common/1622384452757-5d559635-9e50-4c20-a4c6-e02d203c914a.png",m="/kbms/common/1622384497260-bdc43c47-c8f8-49de-a31e-c1b45abda318.png",g="/kbms/common/1622384628520-de2c0e58-d077-411c-a5a5-94d8fed65a91.png",b="/kbms/common/1622385329008-3943607a-db74-4ed1-80ea-b5af13863a73.png",v="/kbms/common/1622385587535-bf535c22-acfe-408a-9649-f1efe1839403.png",f={},h=e('<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>基于NetCore开发的轻量级配置中心，部署简单、配置简单，使用简单，可以根据个人或者公司需求采用。</p><ul><li>部署简答，最少只需要一个数据节点，支持docker部署</li><li>支持多节点分布式部署来保证高可用</li><li>配置支持按照应用隔离，应用内配置支持分组隔离</li><li>使用长链接技术，配置信息实时推送到客户端</li><li>支持IConfiguration、IOptions模式读取配置，原程序几乎不用改造</li><li>配置修改支持版本记录，随时回滚配置</li><li>所有所有节点都故障，客户端支持从本地缓存读取配置</li></ul>',3),_={href:"https://github.com/kklldog/AgileConfig",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/kklldog",target:"_blank",rel:"noopener noreferrer"},y=e(`<h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><p>通过docker部署，目前支持sqlserver，mysql，sqlite, PostgreSql，Oracle 五种数据库。本次示例使用轻量级的sqlite作为数据存储</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>docker run <span class="token operator">-</span>d <span class="token operator">--</span>name agile_config <span class="token operator">-</span><span class="token class-name">e</span> adminConsole<span class="token operator">=</span><span class="token boolean">true</span> <span class="token operator">-</span><span class="token class-name">e</span> db<span class="token punctuation">:</span>provider<span class="token operator">=</span>sqlite <span class="token operator">-</span><span class="token class-name">e</span> db<span class="token punctuation">:</span>conn<span class="token operator">=</span><span class="token string">&quot;Data Source=agile_config.db&quot;</span> <span class="token operator">-</span>p <span class="token number">8011</span><span class="token punctuation">:</span><span class="token number">5000</span> kklldog<span class="token operator">/</span>agile_config<span class="token punctuation">:</span>latest 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ol><li>adminConsole 配置程序是否为管理控制台。如果为true则启用控制台功能，访问该实例会出现管理界面。</li><li>db:provider 配置程序的数据库类型。目前程序支持：sqlite，mysql，sqlserver 三种数据库。</li><li>db:conn 配置数据库连接串</li></ol></blockquote><h2 id="进入系统" tabindex="-1"><a class="header-anchor" href="#进入系统"><span>进入系统</span></a></h2>`,5),w={href:"http://localhost:8011/",target:"_blank",rel:"noopener noreferrer"},q=n("img",{src:l,alt:"image.png",loading:"lazy"},null,-1),A=n("img",{src:u,alt:"image.png",loading:"lazy"},null,-1),z=n("strong",null,"节点",-1),I=n("img",{src:r,alt:"image.png",loading:"lazy"},null,-1),x=n("strong",null,"应用",-1),N=n("img",{src:d,alt:"image.png",loading:"lazy"},null,-1),S=n("img",{src:k,alt:"image.png",loading:"lazy"},null,-1),B=n("img",{src:m,alt:"image.png",loading:"lazy"},null,-1),D=n("img",{src:g,alt:"image.png",loading:"lazy"},null,-1),T=n("strong",null,"客户端",-1),H=n("strong",null,"日志",-1),P=e(`<h2 id="创建客户端" tabindex="-1"><a class="header-anchor" href="#创建客户端"><span>创建客户端</span></a></h2><p>通过VS2019创建一个.Net5的WebAPI应用程序，安装组件</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>  <span class="token operator">&lt;</span>ItemGroup<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token class-name">PackageReference</span> Include<span class="token operator">=</span><span class="token string">&quot;AgileConfig.Client&quot;</span> Version<span class="token operator">=</span><span class="token string">&quot;1.1.8.5&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ItemGroup<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连接我们的配置中心，在program中进行配置</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Program</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">IConfigClient</span> ConfigClient<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IHostBuilder</span> <span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            Host<span class="token punctuation">.</span><span class="token function">CreateDefaultBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">ConfigureAppConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
                <span class="token punctuation">{</span>
                    <span class="token comment">//读取本地配置</span>
                    <span class="token class-name"><span class="token keyword">var</span></span> localconfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConfigurationBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                     <span class="token punctuation">.</span><span class="token function">SetBasePath</span><span class="token punctuation">(</span>Directory<span class="token punctuation">.</span><span class="token function">GetCurrentDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                     <span class="token punctuation">.</span><span class="token function">AddJsonFile</span><span class="token punctuation">(</span><span class="token string">&quot;appsettings.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">//从本地配置里读取AgileConfig的相关信息</span>
                    <span class="token class-name"><span class="token keyword">var</span></span> appId <span class="token operator">=</span> localconfig<span class="token punctuation">[</span><span class="token string">&quot;AgileConfig:appId&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token class-name"><span class="token keyword">var</span></span> secret <span class="token operator">=</span> localconfig<span class="token punctuation">[</span><span class="token string">&quot;AgileConfig:secret&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token class-name"><span class="token keyword">var</span></span> nodes <span class="token operator">=</span> localconfig<span class="token punctuation">[</span><span class="token string">&quot;AgileConfig:nodes&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

                    <span class="token comment">//new一个client实例</span>
                    <span class="token class-name"><span class="token keyword">var</span></span> configClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConfigClient</span><span class="token punctuation">(</span>appId<span class="token punctuation">,</span> secret<span class="token punctuation">,</span> nodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">//使用AddAgileConfig配置一个新的IConfigurationSource</span>
                    config<span class="token punctuation">.</span><span class="token function">AddAgileConfig</span><span class="token punctuation">(</span>configClient<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">//找一个变量挂载client实例，以便其他地方可以直接使用实例访问配置</span>
                    ConfigClient <span class="token operator">=</span> configClient<span class="token punctuation">;</span>
                    <span class="token comment">//注册配置项修改事件</span>
                    configClient<span class="token punctuation">.</span>ConfigChanged <span class="token operator">+=</span> ConfigClient_ConfigChanged<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">ConfigureWebHostDefaults</span><span class="token punctuation">(</span>webBuilder <span class="token operator">=&gt;</span>
                <span class="token punctuation">{</span>
                    webBuilder<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">UseStartup</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Startup<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// 此事件会在配置项目发生新增、修改、删除的时候触发</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigClient_ConfigChanged</span><span class="token punctuation">(</span><span class="token class-name">ConfigChangedArg</span> obj<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;action:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">obj<span class="token punctuation">.</span>Action</span><span class="token punctuation">}</span></span><span class="token string"> key:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">obj<span class="token punctuation">.</span>Key</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">switch</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>Action<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">case</span> ActionConst<span class="token punctuation">.</span>Add<span class="token punctuation">:</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>

                <span class="token keyword">case</span> ActionConst<span class="token punctuation">.</span>Update<span class="token punctuation">:</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>

                <span class="token keyword">case</span> ActionConst<span class="token punctuation">.</span>Remove<span class="token punctuation">:</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>

                <span class="token keyword">default</span><span class="token punctuation">:</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>appsettings添加</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>  <span class="token string">&quot;AgileConfig&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;appId&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;001&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;secret&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;454551215781234&quot;</span><span class="token punctuation">,</span><span class="token comment">//密钥</span>
    <span class="token string">&quot;nodes&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://localhost:8011&quot;</span> <span class="token comment">//多个节点使用逗号分隔</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取配置" tabindex="-1"><a class="header-anchor" href="#读取配置"><span>读取配置</span></a></h2><p>AgileConfig支持asp.net core 标准的IConfiguration，跟IOptions模式读取配置。还支持直接通过AgileConfigClient实例直接读取。本文直接注入IConfiguration来获取刚才我们配置的数据库连接信息。 在startup中获取配置 <img src="`+b+`" alt="image.png" loading="lazy"> 增加一个接口获取配置信息</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IConfiguration</span> _configuration<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">HomeController</span><span class="token punctuation">(</span><span class="token class-name">IConfiguration</span> configuration<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _configuration <span class="token operator">=</span> configuration<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">HttpGet</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> _configuration<span class="token punctuation">[</span><span class="token string">&quot;db:ConnectionString&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问接口输出配置 Server=localhost;Database=test;Port=3306;charset=utf8;uid=root;pwd=123456; 在程序不关闭情况下修改配置，测试一下配置是否更新 <img src="`+v+'" alt="image.png" loading="lazy"> 请求接口重新获取最近配置(不是实时更新，需要等待一小会，但是满足我们的实际需求)</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>',12),O={href:"https://www.cnblogs.com/kklldog/p/agile-config.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/kklldog/AgileConfig/blob/master/README_CN.md",target:"_blank",rel:"noopener noreferrer"};function G(j,R){const a=p("ExternalLinkIcon");return c(),i("div",null,[h,n("blockquote",null,[n("p",null,[s("GitHub地址："),n("a",_,[s("https://github.com/kklldog/AgileConfig"),t(a)]),s(" 可以给这个大佬点个star")])]),n("p",null,[s("如果使用apollo进行部署做配置中心，对于部分公司来讲，过于笨重，所以我个人还是挺推荐这个的，再次感谢"),n("a",C,[s("kklldog"),t(a)]),s("大佬的开源项目。")]),y,n("p",null,[s("通过浏览器访问我们地址："),n("a",w,[s("http://localhost:8011/"),t(a)]),q,s(" 界面还是简约美观的，第一次登录需要初始化管理员密码，然后登录进入系统 "),A,s(" 通过主界面我们看到了下面这个几个菜单 "),z,s("：AgileConfig支持多节点部署，所有的节点都是平行的。为了简化部署，AgileConfig并没有单独的控制台程序，请直接使用任意一个节点作为控制台。 "),I,x,s("：AgileConfig支持多应用程序接入。需要为每个应用程序配置名称、ID、秘钥等信息。每个应用可以设置是否可以被继承，可以被继承的应用类似apollo的公共 namespace 的概念。公共的配置可以提取到可继承应用中，其它应用只要继承它就可以获得所有配置。如果子应用跟被继承应用之间的配置键发生重复，子应用的配置会覆盖被继承的应用的配置。子应用可以继承多个应用，如果多个应用之间发生重复键，按照继承的顺序，后继承的应用的配置覆盖前面的应用。 "),N,s(" 创建好应用后我们可以点击列表的配置该应用的配置项。 "),S,s(" 新添加的配置并不会被客户端感知到，需要手工点击“上线”才会推送给客户端。 "),B,s(" 已上线的配置如果发生修改、删除、回滚操作，会实时推送给客户端。版本历史记录了配置的历史信息，可以回滚至任意版本。 "),D,T,s("：可以查看已经连接的客户端 "),H,s("：记录一些关键信息的日志")]),P,n("blockquote",null,[n("p",null,[s("开发作者的文章："),n("a",O,[s("https://www.cnblogs.com/kklldog/p/agile-config.html"),t(a)]),s(" GitHub中文文档："),n("a",E,[s("https://github.com/kklldog/AgileConfig/blob/master/README_CN.md"),t(a)])])])])}const M=o(f,[["render",G],["__file","agileconfig.html.vue"]]),L=JSON.parse('{"path":"/middleware/smallService/tongyipeizhiguanli/agileconfig.html","title":"AgileConfig","lang":"zh-CN","frontmatter":{"title":"AgileConfig","lang":"zh-CN","date":"2022-06-29T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"agileconfig","slug":"ozgegn","docsId":"32969108","description":"描述 基于NetCore开发的轻量级配置中心，部署简单、配置简单，使用简单，可以根据个人或者公司需求采用。 部署简答，最少只需要一个数据节点，支持docker部署 支持多节点分布式部署来保证高可用 配置支持按照应用隔离，应用内配置支持分组隔离 使用长链接技术，配置信息实时推送到客户端 支持IConfiguration、IOptions模式读取配置，原程...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/smallService/tongyipeizhiguanli/agileconfig.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"AgileConfig"}],["meta",{"property":"og:description","content":"描述 基于NetCore开发的轻量级配置中心，部署简单、配置简单，使用简单，可以根据个人或者公司需求采用。 部署简答，最少只需要一个数据节点，支持docker部署 支持多节点分布式部署来保证高可用 配置支持按照应用隔离，应用内配置支持分组隔离 使用长链接技术，配置信息实时推送到客户端 支持IConfiguration、IOptions模式读取配置，原程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1622383774783-61f141ee-37bf-445f-9df8-5992ee54cefa.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-09T14:02:29.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-06-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-09T14:02:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AgileConfig\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1622383774783-61f141ee-37bf-445f-9df8-5992ee54cefa.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1622383889423-e0085b40-f3f3-4893-9cdc-292cc5c4b23b.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1622386210763-174c2eb6-e88d-4a18-b711-b6a085b19e4c.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1622384227460-80915f07-a920-40a7-b9fc-97dd9dc22683.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1622384452757-5d559635-9e50-4c20-a4c6-e02d203c914a.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1622384497260-bdc43c47-c8f8-49de-a31e-c1b45abda318.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1622384628520-de2c0e58-d077-411c-a5a5-94d8fed65a91.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1622385329008-3943607a-db74-4ed1-80ea-b5af13863a73.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1622385587535-bf535c22-acfe-408a-9649-f1efe1839403.png\\"],\\"datePublished\\":\\"2022-06-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-09T14:02:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[]},{"level":2,"title":"进入系统","slug":"进入系统","link":"#进入系统","children":[]},{"level":2,"title":"创建客户端","slug":"创建客户端","link":"#创建客户端","children":[]},{"level":2,"title":"读取配置","slug":"读取配置","link":"#读取配置","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1699538549000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":4.63,"words":1390},"filePathRelative":"middleware/smallService/tongyipeizhiguanli/agileconfig.md","localizedDate":"2022年6月29日","excerpt":"<h2>描述</h2>\\n<p>基于NetCore开发的轻量级配置中心，部署简单、配置简单，使用简单，可以根据个人或者公司需求采用。</p>\\n<ul>\\n<li>部署简答，最少只需要一个数据节点，支持docker部署</li>\\n<li>支持多节点分布式部署来保证高可用</li>\\n<li>配置支持按照应用隔离，应用内配置支持分组隔离</li>\\n<li>使用长链接技术，配置信息实时推送到客户端</li>\\n<li>支持IConfiguration、IOptions模式读取配置，原程序几乎不用改造</li>\\n<li>配置修改支持版本记录，随时回滚配置</li>\\n<li>所有所有节点都故障，客户端支持从本地缓存读取配置</li>\\n</ul>","autoDesc":true}');export{M as comp,L as data};