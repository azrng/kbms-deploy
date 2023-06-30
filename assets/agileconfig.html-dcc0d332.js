import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as d,a as e,b as i,d as a,e as l}from"./app-3c3dee46.js";const o={},c=l('<h1 id="agileconfig" tabindex="-1"><a class="header-anchor" href="#agileconfig" aria-hidden="true">#</a> AgileConfig</h1><h1 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h1><p>基于NetCore开发的轻量级配置中心，部署简单、配置简单，使用简单，可以根据个人或者公司需求采用。</p><ul><li><p>部署简答，最少只需要一个数据节点，支持docker部署</p></li><li><p>支持多节点分布式部署来保证高可用</p></li><li><p>配置支持按照应用隔离，应用内配置支持分组隔离</p></li><li><p>使用长链接技术，配置信息实时推送到客户端</p></li><li><p>支持IConfiguration、IOptions模式读取配置，原程序几乎不用改造</p></li><li><p>配置修改支持版本记录，随时回滚配置</p></li><li><p>所有所有节点都故障，客户端支持从本地缓存读取配置</p></li></ul>',4),g={href:"https://github.com/kklldog/AgileConfig",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/kklldog",target:"_blank",rel:"noopener noreferrer"},v=l(`<h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1><p>通过docker部署，目前支持sqlserver，mysql，sqlite, PostgreSql，Oracle 五种数据库。本次示例使用轻量级的sqlite作为数据存储</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name agile_config -e adminConsole=true -e db:provider=sqlite -e db:conn=&quot;Data Source=agile_config.db&quot; -p 8011:5000 kklldog/agile_config:latest 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>adminConsole 配置程序是否为管理控制台。如果为true则启用控制台功能，访问该实例会出现管理界面。</p></li><li><p>db:provider 配置程序的数据库类型。目前程序支持：sqlite，mysql，sqlserver 三种数据库。</p></li><li><p>db:conn 配置数据库连接串</p></li></ol><h1 id="进入系统" tabindex="-1"><a class="header-anchor" href="#进入系统" aria-hidden="true">#</a> 进入系统</h1>`,5),m={href:"http://localhost:8011/",target:"_blank",rel:"noopener noreferrer"},p=l(`<figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622383774783-61f141ee-37bf-445f-9df8-5992ee54cefa.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>界面还是简约美观的，第一次登录需要初始化管理员密码，然后登录进入系统</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622383889423-e0085b40-f3f3-4893-9cdc-292cc5c4b23b.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通过主界面我们看到了下面这个几个菜单</p><p><strong>节点</strong>：AgileConfig支持多节点部署，所有的节点都是平行的。为了简化部署，AgileConfig并没有单独的控制台程序，请直接使用任意一个节点作为控制台。</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622386210763-174c2eb6-e88d-4a18-b711-b6a085b19e4c.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>应用</strong>：AgileConfig支持多应用程序接入。需要为每个应用程序配置名称、ID、秘钥等信息。每个应用可以设置是否可以被继承，可以被继承的应用类似apollo的公共 namespace 的概念。公共的配置可以提取到可继承应用中，其它应用只要继承它就可以获得所有配置。如果子应用跟被继承应用之间的配置键发生重复，子应用的配置会覆盖被继承的应用的配置。子应用可以继承多个应用，如果多个应用之间发生重复键，按照继承的顺序，后继承的应用的配置覆盖前面的应用。</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622384227460-80915f07-a920-40a7-b9fc-97dd9dc22683.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>创建好应用后我们可以点击列表的配置该应用的配置项。</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622384452757-5d559635-9e50-4c20-a4c6-e02d203c914a.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>新添加的配置并不会被客户端感知到，需要手动点击“上线”才会推送给客户端。</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622384497260-bdc43c47-c8f8-49de-a31e-c1b45abda318.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>已上线的配置如果发生修改、删除、回滚操作，会实时推送给客户端。版本历史记录了配置的历史信息，可以回滚至任意版本。</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622384628520-de2c0e58-d077-411c-a5a5-94d8fed65a91.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>客户端</strong>：可以查看已经连接的客户端</p><p><strong>日志</strong>：记录一些关键信息的日志</p><h1 id="创建客户端" tabindex="-1"><a class="header-anchor" href="#创建客户端" aria-hidden="true">#</a> 创建客户端</h1><p>通过VS2019创建一个.Net5的WebAPI应用程序，安装组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;ItemGroup&gt;
    &lt;PackageReference Include=&quot;AgileConfig.Client&quot; Version=&quot;1.1.8.5&quot; /&gt;
  &lt;/ItemGroup&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连接我们的配置中心，在program中进行配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class Program
    {
        public static IConfigClient ConfigClient;

        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((context, config) =&gt;
                {
                    //读取本地配置
                    var localconfig = new ConfigurationBuilder()
                                     .SetBasePath(Directory.GetCurrentDirectory())
                                     .AddJsonFile(&quot;appsettings.json&quot;).Build();
                    //从本地配置里读取AgileConfig的相关信息
                    var appId = localconfig[&quot;AgileConfig:appId&quot;];
                    var secret = localconfig[&quot;AgileConfig:secret&quot;];
                    var nodes = localconfig[&quot;AgileConfig:nodes&quot;];

                    //new一个client实例
                    var configClient = new ConfigClient(appId, secret, nodes);
                    //使用AddAgileConfig配置一个新的IConfigurationSource
                    config.AddAgileConfig(configClient);
                    //找一个变量挂载client实例，以便其他地方可以直接使用实例访问配置
                    ConfigClient = configClient;
                    //注册配置项修改事件
                    configClient.ConfigChanged += ConfigClient_ConfigChanged;
                })
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                });

        /// &lt;summary&gt;
        /// 此事件会在配置项目发生新增、修改、删除的时候触发
        /// &lt;/summary&gt;
        private static void ConfigClient_ConfigChanged(ConfigChangedArg obj)
        {
            Console.WriteLine($&quot;action:{obj.Action} key:{obj.Key}&quot;);

            switch (obj.Action)
            {
                case ActionConst.Add:
                    break;

                case ActionConst.Update:
                    break;

                case ActionConst.Remove:
                    break;

                default:
                    break;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>appsettings添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &quot;AgileConfig&quot;: {
    &quot;appId&quot;: &quot;001&quot;,
    &quot;secret&quot;: &quot;454551215781234&quot;,//密钥
    &quot;nodes&quot;: &quot;http://localhost:8011&quot; //多个节点使用逗号分隔
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="读取配置" tabindex="-1"><a class="header-anchor" href="#读取配置" aria-hidden="true">#</a> 读取配置</h1>`,24),b={href:"http://xn--AgileConfigasp-v122ac9w.net",target:"_blank",rel:"noopener noreferrer"},f=l(`<p>在startup中获取配置</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622385329008-3943607a-db74-4ed1-80ea-b5af13863a73.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>增加一个接口获取配置信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    private readonly IConfiguration _configuration;

    public HomeController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpGet]
    public string Get()
    {
        return _configuration[&quot;db:ConnectionString&quot;];
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问接口输出配置</p><p>Server=localhost;Database=test;Port=3306;charset=utf8;uid=root;pwd=123456;</p><p>在程序不关闭情况下修改配置，测试一下配置是否更新</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622385587535-bf535c22-acfe-408a-9649-f1efe1839403.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>请求接口重新获取最近配置(不是实时更新，需要等待一小会，但是满足我们的实际需求)</p><h1 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h1>`,10),h={href:"https://www.cnblogs.com/kklldog/p/agile-config.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/kklldog/AgileConfig/blob/master/README_CN.md",target:"_blank",rel:"noopener noreferrer"};function _(k,x){const n=s("ExternalLinkIcon");return r(),d("div",null,[c,e("p",null,[i("GitHub地址："),e("a",g,[i("https://github.com/kklldog/AgileConfig"),a(n)]),i(" 可以给这个大佬点个star")]),e("p",null,[i("如果使用apollo进行部署做配置中心，对于部分公司来讲，过于笨重，所以我个人还是挺推荐这个的，再次感谢"),e("a",u,[i("kklldog"),a(n)]),i("大佬的开源项目。")]),v,e("p",null,[i("通过浏览器访问我们地址："),e("a",m,[i("http://localhost:8011/"),a(n)])]),p,e("p",null,[e("a",b,[i("AgileConfig支持asp.net"),a(n)]),i(" core 标准的IConfiguration，跟IOptions模式读取配置。还支持直接通过AgileConfigClient实例直接读取。本文直接注入IConfiguration来获取刚才我们配置的数据库连接信息。")]),f,e("p",null,[i("开发作者的文章："),e("a",h,[i("https://www.cnblogs.com/kklldog/p/agile-config.html"),a(n)])]),e("p",null,[i("GitHub中文文档："),e("a",C,[i("https://github.com/kklldog/AgileConfig/blob/master/README_CN.md"),a(n)])])])}const w=t(o,[["render",_],["__file","agileconfig.html.vue"]]);export{w as default};
