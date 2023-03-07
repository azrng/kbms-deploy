import{_ as t,W as a,X as r,Y as e,Z as n,$ as s,a0 as d,C as l}from"./framework-63781bb7.js";const c={},u=e("h1",{id:"开篇语",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开篇语","aria-hidden":"true"},"#"),n(" 开篇语")],-1),o={href:"https://mp.weixin.qq.com/s/lJw7VIM5HnGFsn0eA2V2Fg",target:"_blank",rel:"noopener noreferrer"},v=e("h1",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),m=e("p",null,"Senparc.Weixin SDK 是由盛派网络（Senparc）团队自主研发的针对微信各模块的开发套件（C# SDK），已全面支持微信公众号、小程序、微信支付、企业号、开放平台、JSSDK、摇一摇周边等模块。有一些东西都已经封住在sdk里面，不需要我们再进行那些繁琐的操作。",-1),p=e("h1",{id:"示例",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),n(" 示例")],-1),g={href:"https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login",target:"_blank",rel:"noopener noreferrer"},b=d(`<p>通过测试号我可以可以得到我们想要的微信公众号参数信息</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622977807220-78a866b0-28df-4610-bd9e-4f1f9aa698f1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通过VS2019(好想尽快体验VS2022)新建一个.Net5 WebApi程序</p><p>安装组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;RestSharp&quot; Version=&quot;106.11.7&quot; /&gt; 
    &lt;PackageReference Include=&quot;Senparc.Weixin.MP&quot; Version=&quot;16.12.101-preview2&quot; /&gt;
    &lt;PackageReference Include=&quot;Senparc.Weixin.MP.Middleware&quot; Version=&quot;0.3.100.1-preview2&quot; /&gt;
    &lt;PackageReference Include=&quot;Swashbuckle.AspNetCore&quot; Version=&quot;5.6.3&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了方便(偷懒)，我直接使用了postman生成的RestSharp请求代码，因此装了该包。</p><p>添加配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  //CO2NET 
  &quot;SenparcSetting&quot;: {
    &quot;IsDebug&quot;: true,
    &quot;DefaultCacheNamespace&quot;: &quot;DefaultCache&quot; //缓存通过前缀区分
  },
  //Senparc.Weixin SDK
  &quot;SenparcWeixinSetting&quot;: {
    &quot;IsDebug&quot;: true,

    &quot;Token&quot;: &quot;token&quot;,
    &quot;EncodingAESKey&quot;: &quot;EncodingAESKey&quot;,
    &quot;WeixinAppId&quot;: &quot;appid&quot;,
    &quot;WeixinAppSecret&quot;: &quot;secret&quot;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过配置IsDebug可以配置是否以Debug模式运行。</p><p>关于SenparcWeixinSetting为何叫做这个名字？是因为配置中写死的</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622978225760-721152c0-a511-4eb2-a614-eecfe6041bd0.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>ConfigureServices中注册服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    services.AddMemoryCache()//使用本地缓存必须添加
            .AddSenparcWeixinServices(Configuration);//Senparc.Weixin 注册（必须）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以采用redis等其他方法存储配置信息等</p><p>Configure中启用服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    //注册 Senparc.Weixin 及基础库
    app.UseSenparcGlobal(env, senparcSetting.Value, _ =&gt; { }, true)
        .UseSenparcWeixin(senparcWeixinSetting.Value,
            weixinRegister =&gt; weixinRegister.RegisterMpAccount(senparcWeixinSetting.Value));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这些配置我们可以获取accesstoken</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var accessToken = await AccessTokenContainer.GetAccessTokenAsync(_configuration[&quot;SenparcWeixinSetting:WeixinAppId&quot;]).ConfigureAwait(false);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="自定义消息回复" tabindex="-1"><a class="header-anchor" href="#自定义消息回复" aria-hidden="true">#</a> 自定义消息回复</h2><p>要实现接受用户的消息，并且做出回应，我们需要继承MessageHandler&lt;DefaultMpMessageContext&gt;，新建CustomerMessageHandler类，该类中实现了网上说的价值一个亿的AI核心代码，看到就是赚到。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// 自定义消息处理器
    /// &lt;/summary&gt;
    public class CustomerMessageHandler : MessageHandler&lt;DefaultMpMessageContext&gt;
    {
        public CustomerMessageHandler(Stream inputStream, PostModel postModel, int maxRecordCount = 0, IServiceProvider serviceProvider = null)
            : base(inputStream, postModel, maxRecordCount, false, null)
        {
        }

        /// &lt;summary&gt;
        /// 回复以文字形式发送的信息（可选）
        /// &lt;/summary&gt;
        public override async Task&lt;IResponseMessageBase&gt; OnTextRequestAsync(RequestMessageText requestMessage)
        {
            var responseMessage = base.CreateResponseMessage&lt;ResponseMessageText&gt;();
            // await Senparc.Weixin.MP.AdvancedAPIs.CustomApi.SendTextAsync(Config.SenparcWeixinSetting.MpSetting.WeixinAppId, OpenId,);//注意：只有测试号或部署到正式环境的正式服务号可用此接口
            //responseMessage.Content =  $&quot;你发送了文字：{requestMessage.Content}\\r\\n\\r\\n你的OpenId：{OpenId}&quot;;//以文字类型消息回复
            responseMessage.Content = requestMessage.Content.Replace(&quot;吗&quot;, &quot;&quot;).Replace(&#39;?&#39;, &#39;!&#39;).Replace(&#39;？&#39;, &#39;!&#39;);
            return responseMessage;
        }

        /// &lt;summary&gt;
        /// 默认消息
        /// &lt;/summary&gt;
        public override IResponseMessageBase DefaultResponseMessage(IRequestMessageBase requestMessage)
        {
            var responseMessage = base.CreateResponseMessage&lt;ResponseMessageText&gt;();
            responseMessage.Content = &quot;欢迎来到我的公众号！&quot;;
            return responseMessage;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启用消息处理器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            //使用中间件注册 MessageHandler，指定 CustomMessageHandler 为自定义处理方法
            app.UseMessageHandlerForMp(&quot;/weixinmsg&quot;,
                (stream, postModel, maxRecordCount, serviceProvider) =&gt;
                    new CustomerMessageHandler(stream, postModel, maxRecordCount, serviceProvider),
                options =&gt; { options.AccountSettingFunc = context =&gt; senparcWeixinSetting.Value; });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们已经实现了用户消息的接收和回复代码，不过还需要在微信平台进行配置(为了可以让微信发送消息到该代码，我使用了内网穿透功能供微信访问该地址)</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622979217988-39a0c9b9-baa7-4379-a1c3-b1f89335d857.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果你修改接口配置信息，提交成功说明微信可以调通该接口，这个时候就可以关注微信测试号，发送消息查看结果。</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622980346934-85e8991c-c6c2-419f-8980-479706c77db7.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="自定义菜单" tabindex="-1"><a class="header-anchor" href="#自定义菜单" aria-hidden="true">#</a> 自定义菜单</h2><p>通过编写接口来实现自定义菜单配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        [HttpGet]
        public async Task&lt;string&gt; GetAsync()
        {
            var accessToken = await AccessTokenContainer
                .GetAccessTokenAsync(_configuration[&quot;SenparcWeixinSetting:WeixinAppId&quot;]).ConfigureAwait(false);
            var bg = new ButtonGroup();

            var oneSubButton = new SubButton
            {
                name = &quot;基础知识&quot;,
                sub_button = new List&lt;SingleButton&gt;
                {
                    new SingleViewButton
                    {
                        name = &quot;日志&quot;,
                        url = &quot;https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU4MjU4NjgyOQ==&amp;action=getalbum&amp;album_id=1841538022157172741#wechat_redirect&quot;,
                    }
                }
            };
            bg.button.Add(oneSubButton);

            bg.button.Add(new SingleViewButton
            {
                name = &quot;文章目录&quot;,
                url = &quot;https://www.yuque.com/docs/share/9aed821e-9115-41c7-a0cd-6b691ad7e400&quot;
            });

            var result = CommonApi.CreateMenu(accessToken, bg);

            return &quot;成功&quot; + result;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考地址：</p>`,31),x={href:"https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"通过调用该接口实现自定义菜单配置，显示下面的菜单",-1),q=e("figure",null,[e("img",{src:"https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622981968228-c5836652-5d45-476a-805d-9bf4a2bf97fa.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),f=e("h1",{id:"参考文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),n(" 参考文档")],-1),S={href:"https://github.com/JeffreySu/WeiXinMPSDK",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.cnblogs.com/szw/p/weixin-course-index.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.cnblogs.com/szw/p/3414732.html",target:"_blank",rel:"noopener noreferrer"};function M(k,A){const i=l("ExternalLinkIcon");return a(),r("div",null,[u,e("p",null,[n("在6月5号，我报名去参加了微软举办的一个线下分享的技术市集，分享人是苏老师和赵老师(非常感谢)，其中苏老师讲述了关于一些容器的部署等操作(也可以观看我的"),e("a",o,[n("历史文章"),s(i)]),n(")，其中关于部署的示例代码是使用盛派微信SDK做了一个对接微信回复消息的动能，又一次引起了我的好奇(之前是自己看微信文档对接、进行配置验证保存access_token等操作)，通过该sdk可以帮助我们省下不少事情来让我们少加班。下面我就通过该sdk来实现两个简单的功能。")]),v,m,p,e("p",null,[n("要对接微信公众号，我们首先得有一个微信公众号(我本来是使用我自己公众号，奈何好多好玩的功能没有权限需要微信认证)，我们可以通过微信申请测试号来学习使用，"),e("a",g,[n("申请地址"),s(i)]),n(" 该测试号可以直接体验和测试公众平台的所有高级接口。")]),b,e("p",null,[e("a",x,[n("https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html"),s(i)])]),h,q,f,e("p",null,[n("GitHub："),e("a",S,[n("https://github.com/JeffreySu/WeiXinMPSDK"),s(i)])]),e("p",null,[n("sdk文档地址："),e("a",_,[n("https://www.cnblogs.com/szw/p/weixin-course-index.html"),s(i)])]),e("p",null,[n("基本使用教程："),e("a",w,[n("https://www.cnblogs.com/szw/p/3414732.html"),s(i)])])])}const R=t(c,[["render",M],["__file","senparcweixin.html.vue"]]);export{R as default};
