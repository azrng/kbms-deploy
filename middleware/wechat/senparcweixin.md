---
title: 盛派微信SDK
date: '2021/02/22'
publish: true
categories:
 - 中间件
tags:
 - 微信
---
# 开篇语

在6月5号，我报名去参加了微软举办的一个线下分享的技术市集，分享人是苏老师和赵老师(非常感谢)，其中苏老师讲述了关于一些容器的部署等操作(也可以观看我的[历史文章](https://mp.weixin.qq.com/s/lJw7VIM5HnGFsn0eA2V2Fg))，其中关于部署的示例代码是使用盛派微信SDK做了一个对接微信回复消息的动能，又一次引起了我的好奇(之前是自己看微信文档对接、进行配置验证保存access_token等操作)，通过该sdk可以帮助我们省下不少事情来让我们少加班。下面我就通过该sdk来实现两个简单的功能。

# 介绍

Senparc.Weixin SDK 是由盛派网络（Senparc）团队自主研发的针对微信各模块的开发套件（C# SDK），已全面支持微信公众号、小程序、微信支付、企业号、开放平台、JSSDK、摇一摇周边等模块。有一些东西都已经封住在sdk里面，不需要我们再进行那些繁琐的操作。

# 示例

要对接微信公众号，我们首先得有一个微信公众号(我本来是使用我自己公众号，奈何好多好玩的功能没有权限需要微信认证)，我们可以通过微信申请测试号来学习使用，[申请地址](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login) 该测试号可以直接体验和测试公众平台的所有高级接口。

通过测试号我可以可以得到我们想要的微信公众号参数信息

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622977807220-78a866b0-28df-4610-bd9e-4f1f9aa698f1.png)

通过VS2019(好想尽快体验VS2022)新建一个.Net5 WebApi程序

安装组件

```
    <PackageReference Include="RestSharp" Version="106.11.7" /> 
    <PackageReference Include="Senparc.Weixin.MP" Version="16.12.101-preview2" />
    <PackageReference Include="Senparc.Weixin.MP.Middleware" Version="0.3.100.1-preview2" />
    <PackageReference Include="Swashbuckle.AspNetCore" Version="5.6.3" />
```

为了方便(偷懒)，我直接使用了postman生成的RestSharp请求代码，因此装了该包。

添加配置

```
  //CO2NET 
  "SenparcSetting": {
    "IsDebug": true,
    "DefaultCacheNamespace": "DefaultCache" //缓存通过前缀区分
  },
  //Senparc.Weixin SDK
  "SenparcWeixinSetting": {
    "IsDebug": true,

    "Token": "token",
    "EncodingAESKey": "EncodingAESKey",
    "WeixinAppId": "appid",
    "WeixinAppSecret": "secret"
  }
```

通过配置IsDebug可以配置是否以Debug模式运行。

关于SenparcWeixinSetting为何叫做这个名字？是因为配置中写死的

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622978225760-721152c0-a511-4eb2-a614-eecfe6041bd0.png)

ConfigureServices中注册服务

```
    services.AddMemoryCache()//使用本地缓存必须添加
            .AddSenparcWeixinServices(Configuration);//Senparc.Weixin 注册（必须）
```

也可以采用redis等其他方法存储配置信息等

Configure中启用服务

```
    //注册 Senparc.Weixin 及基础库
    app.UseSenparcGlobal(env, senparcSetting.Value, _ => { }, true)
        .UseSenparcWeixin(senparcWeixinSetting.Value,
            weixinRegister => weixinRegister.RegisterMpAccount(senparcWeixinSetting.Value));
```

通过这些配置我们可以获取accesstoken

```
var accessToken = await AccessTokenContainer.GetAccessTokenAsync(_configuration["SenparcWeixinSetting:WeixinAppId"]).ConfigureAwait(false);
```

## 自定义消息回复

要实现接受用户的消息，并且做出回应，我们需要继承MessageHandler&lt;DefaultMpMessageContext&gt;，新建CustomerMessageHandler类，该类中实现了网上说的价值一个亿的AI核心代码，看到就是赚到。

```
    /// <summary>
    /// 自定义消息处理器
    /// </summary>
    public class CustomerMessageHandler : MessageHandler<DefaultMpMessageContext>
    {
        public CustomerMessageHandler(Stream inputStream, PostModel postModel, int maxRecordCount = 0, IServiceProvider serviceProvider = null)
            : base(inputStream, postModel, maxRecordCount, false, null)
        {
        }

        /// <summary>
        /// 回复以文字形式发送的信息（可选）
        /// </summary>
        public override async Task<IResponseMessageBase> OnTextRequestAsync(RequestMessageText requestMessage)
        {
            var responseMessage = base.CreateResponseMessage<ResponseMessageText>();
            // await Senparc.Weixin.MP.AdvancedAPIs.CustomApi.SendTextAsync(Config.SenparcWeixinSetting.MpSetting.WeixinAppId, OpenId,);//注意：只有测试号或部署到正式环境的正式服务号可用此接口
            //responseMessage.Content =  $"你发送了文字：{requestMessage.Content}\r\n\r\n你的OpenId：{OpenId}";//以文字类型消息回复
            responseMessage.Content = requestMessage.Content.Replace("吗", "").Replace('?', '!').Replace('？', '!');
            return responseMessage;
        }

        /// <summary>
        /// 默认消息
        /// </summary>
        public override IResponseMessageBase DefaultResponseMessage(IRequestMessageBase requestMessage)
        {
            var responseMessage = base.CreateResponseMessage<ResponseMessageText>();
            responseMessage.Content = "欢迎来到我的公众号！";
            return responseMessage;
        }
    }
```

启用消息处理器

```
            //使用中间件注册 MessageHandler，指定 CustomMessageHandler 为自定义处理方法
            app.UseMessageHandlerForMp("/weixinmsg",
                (stream, postModel, maxRecordCount, serviceProvider) =>
                    new CustomerMessageHandler(stream, postModel, maxRecordCount, serviceProvider),
                options => { options.AccountSettingFunc = context => senparcWeixinSetting.Value; });
```

这个时候我们已经实现了用户消息的接收和回复代码，不过还需要在微信平台进行配置(为了可以让微信发送消息到该代码，我使用了内网穿透功能供微信访问该地址)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622979217988-39a0c9b9-baa7-4379-a1c3-b1f89335d857.png)

如果你修改接口配置信息，提交成功说明微信可以调通该接口，这个时候就可以关注微信测试号，发送消息查看结果。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622980346934-85e8991c-c6c2-419f-8980-479706c77db7.png)

## 自定义菜单

通过编写接口来实现自定义菜单配置

```
        [HttpGet]
        public async Task<string> GetAsync()
        {
            var accessToken = await AccessTokenContainer
                .GetAccessTokenAsync(_configuration["SenparcWeixinSetting:WeixinAppId"]).ConfigureAwait(false);
            var bg = new ButtonGroup();

            var oneSubButton = new SubButton
            {
                name = "基础知识",
                sub_button = new List<SingleButton>
                {
                    new SingleViewButton
                    {
                        name = "日志",
                        url = "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU4MjU4NjgyOQ==&action=getalbum&album_id=1841538022157172741#wechat_redirect",
                    }
                }
            };
            bg.button.Add(oneSubButton);

            bg.button.Add(new SingleViewButton
            {
                name = "文章目录",
                url = "https://www.yuque.com/docs/share/9aed821e-9115-41c7-a0cd-6b691ad7e400"
            });

            var result = CommonApi.CreateMenu(accessToken, bg);

            return "成功" + result;
        }
```

参考地址：

https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html

通过调用该接口实现自定义菜单配置，显示下面的菜单

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1622981968228-c5836652-5d45-476a-805d-9bf4a2bf97fa.png)

# 参考文档

GitHub：https://github.com/JeffreySu/WeiXinMPSDK

sdk文档地址：https://www.cnblogs.com/szw/p/weixin-course-index.html

基本使用教程：https://www.cnblogs.com/szw/p/3414732.html