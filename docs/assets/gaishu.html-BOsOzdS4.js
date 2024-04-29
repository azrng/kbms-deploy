import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as o,a as n,d as e,e as s,b as r}from"./app-qB9_Bjjp.js";const d="/kbms/common/1612660292022-8eed2159-e0aa-4cac-9256-a4772252d6f3.png",c={},u=r(`<h2 id="开篇语" tabindex="-1"><a class="header-anchor" href="#开篇语"><span>开篇语</span></a></h2><p>本文内容参考多位大佬的文章编写而成。</p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>JWT是一个基于json的、用于在网络上声明某种主张的令牌，他是一种双方之间传递安全信息的表述性声明规范。主要用于集群分布式中。</p><blockquote><p>作用：可以做权限验证的使用，是一种标准化的数据传输规范，但是目的不是为了数据加密和保护。</p></blockquote><p>Jwt通常是用三部分组成：<strong>头信息，消息体，签名</strong>。</p><ul><li>Header(头信息)：Json对象，alg表示签名的算法，默认是HS256(HMAC SHA256)，type表示令牌的类型，统一是JWT.</li><li>Payload(载荷)：Json对象，存放实际需要传递的数据，只建议存储不重要的信息。</li><li>Signature(签名)：值是将前两部分的进行base64编码后使用指定算法签名生成的。</li></ul><p>签名示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token function">HMACSHA256</span><span class="token punctuation">(</span>
 <span class="token function">base64UrlEncode</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> <span class="token function">base64UrlEncode</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">,</span>
 secret<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><ul><li>授权：用于授权而并非是身份验证。通过身份验证，我们验证用户的用户名和密码是否有效，并将用户登录到系统中，通过授权，我们可以验证发送到服务器的请求是否属于通过身份验证登录的用户，从而可以授予该用户访问系统的权限，继而批准该用户使用获取的token访问路由、服务和资源。</li><li>信息交换：json web token是在双方之间安全地传输信息的一种好方法。因为jwt可以被签名，所以使您能够确保发送方是他们声称的那一方，由于签名使用header和payload计算的，因此还使您能验证发送的内容没有被篡改。</li></ul><p>下面内容摘抄自网上 使用token的限制登录完全违背了token的使用初衷，如果需要注销的情况，可以直接去使用session机制。 token和刷新token是在寻求一个安全的平衡点，如果token短体验不好，长了又不安全，所以就是设置一个短的token来随意使用(每次请求都会携带)，然后刷新token存储的使用的少，更安全一点。</p><h2 id="对比token-redis" tabindex="-1"><a class="header-anchor" href="#对比token-redis"><span>对比Token+Redis</span></a></h2><p>JWT就是Json Web Token，就是Token的典型方式。JWT和Token+Redis的区别，其实都是Token，只是JWT的可靠性保障是来源于加密算法(对称加密和非对称两种)，而Token+Redis的方案是依靠的后台数据存储。这两个本质也就带来了使用上的区别： 1 JWT是去中心化的，不需要任何后台数据的共享，第三方认证、跨数据中心认证、微服务等，都适合采用JWT的方式，当然，因为是去中心化的，不是实时验证，所以本质上来说token的主动过期是做不到的(要做到就会违背初衷) 2 Token+Redis是中心化的，要能识别token必须能访问该Redis，除非是有特别需求，要求每次token都实时检测，否则的话还是选择JWT，毕竟是成熟通用的技术，沟通维护成本也低，对开发者也友好一些。</p><blockquote><p>这点我忘记是摘录哪个大佬的文章了，所以没有给出引用地址很抱歉。</p></blockquote><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程"><span>流程</span></a></h2><p><img src="`+d+`" alt="image.png" loading="lazy"> 用户通过登录去向服务系统发起请求，然后生成带一定用户信息的数据作为令牌（jwt）返回给用户，用户拿到返回过来的信息在请求接口的时候放入头部，服务系统会从头部获取到令牌后验证签名的有效性，对客户端做出相应的响应。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>Authorization<span class="token punctuation">:</span> Bearer <span class="token operator">&lt;</span>token<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想在接口中获取jwt令牌，可以使用</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> tokenHeader <span class="token operator">=</span> HttpContext<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Headers<span class="token punctuation">[</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token string">&quot;Bearer &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在感觉作用就是可以通过jwt实现权限，在系统中定义好有哪些权限，然后在方法头部去设置哪些角色可以去访问这个东西。如果存放token，我的想法是把用户的信息放到jwt内部，然后前端通过登录去获取这东西，然后我返回这个东西到前台，每次调用接口时候把这个东西传出过来，然后我通过将这个解密获取到我登录时候存进去的信息。然后进行我自己的操作。</p><blockquote><p>注意：</p><ol><li>生成jwt时候的key必须在16位以上，否则会因为长度不够抛出异常</li><li>jwt本身是不加密的，里面包含的信息任何人都可以读取到。</li><li>jwt的签名部分是对前两部分的签名，防止数据被篡改，</li></ol></blockquote><h2 id="刷新token" tabindex="-1"><a class="header-anchor" href="#刷新token"><span>刷新Token</span></a></h2><p>比如常用的是双Token机制 1、登录时同时返回：Token、RefreshToken，Token用于请求业务接口，RefreshToken用于刷新Token接口； 2、每一次Http请求，客户端都会判断服务器返回状态，如果是401，代表Token过期； 3、客户端使用RefreshToken，请求服务器Token刷新接口，并获取新的：Token，RefreshToken； 4、如果第3步骤成功返回，更新本地的Token、RefreshToken；如果返回失败，代表RefreshToken也过期了，提示过期并跳转至登录页面。</p><h3 id="后端自动生成" tabindex="-1"><a class="header-anchor" href="#后端自动生成"><span>后端自动生成</span></a></h3><p>用户登录创建token=&gt;前端收到token然后本地存储token=&gt;本地存储token 过期时间=&gt;每次请求的时候用当前时间和本地缓存的token过期时间进行对比，如果还有十分钟或者一段时间就过期了=&gt;这个时候拿着token请求一个刷新token的接口=&gt;后端根据传过来的token验证=&gt;生成新的token返回给前端</p><h3 id="前端请求生成刷新token" tabindex="-1"><a class="header-anchor" href="#前端请求生成刷新token"><span>前端请求生成刷新token</span></a></h3><p>用户登录成功后返回token和刷新token，token时间短，当他过期的时候，再次拿着刷新token以及token请求刷新的接口(匿名可以访问)，然后这时候拿着刷新token和数据库的刷新token比对，如果刷新token也过期了，那么就重新登录，如果成功，那么就解析该token重新生成token并且该刷新token设置为已经使用，该方法借助redis或者数据库，实现token可控制。</p><h3 id="后端检测token过期自动颁发新token示例" tabindex="-1"><a class="header-anchor" href="#后端检测token过期自动颁发新token示例"><span>后端检测token过期自动颁发新token示例</span></a></h3><p>请求的时候检测token是否即将过期，当前Token有效期不足一半时签发新的Token</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public static class IdentityVerification
{
    /// &lt;summary&gt;
    /// 权限校验
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;authorizationHandlerContext&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public static bool Authorization(AuthorizationHandlerContext authorizationHandlerContext)
    {
        if (!authorizationHandlerContext.User.Identity!.IsAuthenticated)
        {
            return false;
        }
        if (authorizationHandlerContext.Resource is HttpContext httpContext)
        {
            IssueNewToken(httpContext);

            var module = typeof(Program).Assembly.GetName().Name!;

            Endpoint endpoint = httpContext.GetEndpoint()!;

            ControllerActionDescriptor actionDescriptor = endpoint.Metadata.GetMetadata&lt;ControllerActionDescriptor&gt;()!;

            var route = actionDescriptor.AttributeRouteInfo?.Template;

            var db = httpContext.RequestServices.GetRequiredService&lt;DatabaseContext&gt;();

            var functionId = db.TFunctionRoute.Where(t =&gt; t.Module == module &amp;&amp; t.Route == route).Select(t =&gt; t.FunctionId).FirstOrDefault();

            if (functionId == default)
            {
                return true;
            }
            var userId = long.Parse(httpContext.GetClaimByUser(&quot;userId&quot;)!);
            var roleIds = db.TUserRole.Where(t =&gt; t.UserId == userId).Select(t =&gt; t.RoleId).ToList();

            var functionAuthorizeId = db.TFunctionAuthorize.Where(t =&gt; t.FunctionId == functionId &amp;&amp; (roleIds.Contains(t.RoleId!.Value) || t.UserId == userId)).Select(t =&gt; t.Id).FirstOrDefault();

            if (functionAuthorizeId != default)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        return true;
    }

    /// &lt;summary&gt;
    /// 签发新Token
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;httpContext&quot;&gt;&lt;/param&gt;
    private static void IssueNewToken(HttpContext httpContext)
    {
        IDHelper idHelper = httpContext.RequestServices.GetRequiredService&lt;IDHelper&gt;();

        var db = httpContext.RequestServices.GetRequiredService&lt;DatabaseContext&gt;();

        var nbf = Convert.ToInt64(httpContext.GetClaimByUser(&quot;nbf&quot;));
        var exp = Convert.ToInt64(httpContext.GetClaimByUser(&quot;exp&quot;));

        var nbfTime = DateTimeOffset.FromUnixTimeSeconds(nbf);
        var expTime = DateTimeOffset.FromUnixTimeSeconds(exp);

        var lifeSpan = nbfTime + ((expTime - nbfTime) * 0.5);

        //当前Token有效期不足一半时签发新的Token
        if (lifeSpan &lt; DateTimeOffset.UtcNow)
        {
            var tokenId = long.Parse(httpContext.GetClaimByUser(&quot;tokenId&quot;)!);
            var userId = long.Parse(httpContext.GetClaimByUser(&quot;userId&quot;)!);

            string key = &quot;IssueNewToken&quot; + tokenId;

            var distLock = httpContext.RequestServices.GetRequiredService&lt;IDistributedLock&gt;();
            var cache = httpContext.RequestServices.GetRequiredService&lt;IDistributedCache&gt;();

            if (distLock.TryLock(key) != null)
            {
                var newToken = db.TUserToken.Where(t =&gt; t.LastId == tokenId &amp;&amp; t.CreateTime &gt; nbfTime).FirstOrDefault();

                if (newToken == null)
                {
                    var tokenInfo = db.TUserToken.Where(t =&gt; t.Id == tokenId).FirstOrDefault();

                    if (tokenInfo != null)
                    {
                        TUserToken userToken = new()
                        {
                            Id = idHelper.GetId(),
                            UserId = userId,
                            LastId = tokenId
                        };

                        var claims = new Claim[]{
                                new(&quot;tokenId&quot;,userToken.Id.ToString()),
                                new(&quot;userId&quot;,userId.ToString())
                            };

                        var configuration = httpContext.RequestServices.GetRequiredService&lt;IConfiguration&gt;();
                        var jwtSetting = configuration.GetRequiredSection(&quot;JWT&quot;).Get&lt;JWTSetting&gt;()!;
                        var jwtPrivateKey = ECDsa.Create();
                        jwtPrivateKey.ImportECPrivateKey(Convert.FromBase64String(jwtSetting.PrivateKey), out _);
                        SigningCredentials creds = new(new ECDsaSecurityKey(jwtPrivateKey), SecurityAlgorithms.EcdsaSha256);
                        JwtSecurityToken jwtSecurityToken = new(jwtSetting.Issuer, jwtSetting.Audience, claims, DateTime.UtcNow, DateTime.UtcNow + jwtSetting.Expiry, creds);

                        var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);

                        db.TUserToken.Add(userToken);

                        if (distLock.TryLock(&quot;ClearExpireToken&quot;) != null)
                        {
                            var clearTime = DateTime.UtcNow.AddDays(-7);
                            var clearList = db.TUserToken.Where(t =&gt; t.CreateTime &lt; clearTime).ToList();
                            db.TUserToken.RemoveRange(clearList);
                        }

                        db.SaveChanges();

                        cache.Set(userToken.Id + &quot;token&quot;, token, TimeSpan.FromMinutes(10));

                        httpContext.Response.Headers.Append(&quot;NewToken&quot;, token);
                        httpContext.Response.Headers.Append(&quot;Access-Control-Expose-Headers&quot;, &quot;NewToken&quot;);
                    }
                }
                else
                {
                    var token = cache.GetString(newToken.Id + &quot;token&quot;);
                    httpContext.Response.Headers.Append(&quot;NewToken&quot;, token);
                    httpContext.Response.Headers.Append(&quot;Access-Control-Expose-Headers&quot;, &quot;NewToken&quot;);
                }
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>builder.Services.AddAuthorizationBuilder()
    .SetDefaultPolicy(new AuthorizationPolicyBuilder().RequireAuthenticatedUser()
        .RequireAssertion(context =&gt; IdentityVerification.Authorization(context)).Build());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="认证" tabindex="-1"><a class="header-anchor" href="#认证"><span>认证</span></a></h2><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//全局禁止匿名访问</span>
services<span class="token punctuation">.</span><span class="token function">AddControllers</span><span class="token punctuation">(</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>Filters<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">AuthorizeFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//添加全局的Authorize</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 支持对控制器、方法标注该特性进行授权</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Authorize</span></span><span class="token punctuation">]</span>

<span class="token comment">// 允许匿名访问，可应用于控制器和方法</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">AllowAnonymous</span></span><span class="token punctuation">]</span>

<span class="token comment">// 对一个方法设置指定角色才可以访问</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Authorize</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Roles <span class="token operator">=</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>

<span class="token comment">// 设置拥有该策略的用户才可以访问</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Authorize</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Policy <span class="token operator">=</span> <span class="token string">&quot;Over18&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bearer认证" tabindex="-1"><a class="header-anchor" href="#bearer认证"><span>Bearer认证</span></a></h3><p>Bearer认证（也叫做令牌认证）是一种HTTP认证方案，其中包含的安全令牌的叫做Bearer Token。因此Bearer认证的核心是Token。那如何确保Token的安全是重中之重。一种方式是使用Https，另一种方式就是对Token进行加密签名。而JWT就是一种比较流行的Token编码方式。</p><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h3><ul><li>获取token</li><li>第一步：对token进行切割</li><li>第二步：对第二段解码，获取payload，检测token是否超时</li><li>第三步：把前两段拼接再次执行HS256加密，把加密后的密文和第三段比较。如果相等，认证通过</li></ul><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2>`,40),p={href:"https://www.cnblogs.com/stulzq/p/7417548.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/laozhang-is-phi/category/1413402.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mp.weixin.qq.com/s/2lYgWeyIzwVYqV9L4kiomg",target:"_blank",rel:"noopener noreferrer"},k={href:"https://mp.weixin.qq.com/s/1jlzB_QlDdghqHzSiqtNlw",target:"_blank",rel:"noopener noreferrer"},b={href:"https://mp.weixin.qq.com/s/BGZkkq02vSX7oO7a7RJxNA",target:"_blank",rel:"noopener noreferrer"},h={href:"https://mp.weixin.qq.com/s/EPX55vkrOVjneEf3XEOqCA",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"在.net中验证jwt：https://auth0.com/blog/how-to-validate-jwt-dotnet/ 无感刷新token：https://mp.weixin.qq.com/s/J20hj_KRdQ63D6zXVG0U8w",-1);function T(q,f){const t=i("ExternalLinkIcon");return l(),o("div",null,[u,n("p",null,[e("晓晨："),n("a",p,[e("https://www.cnblogs.com/stulzq/p/7417548.html"),s(t)]),e(" 老张的哲学："),n("a",v,[e("https://www.cnblogs.com/laozhang-is-phi/category/1413402.html"),s(t)]),n("a",m,[e("https://mp.weixin.qq.com/s/2lYgWeyIzwVYqV9L4kiomg"),s(t)]),e(" | 深入理解 JWT "),n("a",k,[e("https://mp.weixin.qq.com/s/1jlzB_QlDdghqHzSiqtNlw"),s(t)]),e(" | Jwt Token 的刷新机制设计 "),n("a",b,[e("https://mp.weixin.qq.com/s/BGZkkq02vSX7oO7a7RJxNA"),s(t)]),e(" | ASP.NET Core 自动刷新JWT Token "),n("a",h,[e("https://mp.weixin.qq.com/s/EPX55vkrOVjneEf3XEOqCA"),s(t)]),e(" | 理解ASP.NET Core - 授权(Authorization)")]),g])}const y=a(c,[["render",T],["__file","gaishu.html.vue"]]),C=JSON.parse('{"path":"/dotnet/anquanhebiaoshi/shenfenrenzhengheshouquan/jwtrenzheng/gaishu.html","title":"概述","lang":"zh-CN","frontmatter":{"title":"概述","lang":"zh-CN","date":"2022-10-04T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"gaishu","slug":"tv777z","docsId":"31306739","description":"开篇语 本文内容参考多位大佬的文章编写而成。 介绍 JWT是一个基于json的、用于在网络上声明某种主张的令牌，他是一种双方之间传递安全信息的表述性声明规范。主要用于集群分布式中。 作用：可以做权限验证的使用，是一种标准化的数据传输规范，但是目的不是为了数据加密和保护。 Jwt通常是用三部分组成：头信息，消息体，签名。 Header(头信息)：Json...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/anquanhebiaoshi/shenfenrenzhengheshouquan/jwtrenzheng/gaishu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"开篇语 本文内容参考多位大佬的文章编写而成。 介绍 JWT是一个基于json的、用于在网络上声明某种主张的令牌，他是一种双方之间传递安全信息的表述性声明规范。主要用于集群分布式中。 作用：可以做权限验证的使用，是一种标准化的数据传输规范，但是目的不是为了数据加密和保护。 Jwt通常是用三部分组成：头信息，消息体，签名。 Header(头信息)：Json..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1612660292022-8eed2159-e0aa-4cac-9256-a4772252d6f3.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-21T15:15:54.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-10-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-21T15:15:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概述\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1612660292022-8eed2159-e0aa-4cac-9256-a4772252d6f3.png\\"],\\"datePublished\\":\\"2022-10-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-21T15:15:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"开篇语","slug":"开篇语","link":"#开篇语","children":[]},{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"对比Token+Redis","slug":"对比token-redis","link":"#对比token-redis","children":[]},{"level":2,"title":"流程","slug":"流程","link":"#流程","children":[]},{"level":2,"title":"刷新Token","slug":"刷新token","link":"#刷新token","children":[{"level":3,"title":"后端自动生成","slug":"后端自动生成","link":"#后端自动生成","children":[]},{"level":3,"title":"前端请求生成刷新token","slug":"前端请求生成刷新token","link":"#前端请求生成刷新token","children":[]},{"level":3,"title":"后端检测token过期自动颁发新token示例","slug":"后端检测token过期自动颁发新token示例","link":"#后端检测token过期自动颁发新token示例","children":[]}]},{"level":2,"title":"认证","slug":"认证","link":"#认证","children":[{"level":3,"title":"Bearer认证","slug":"bearer认证","link":"#bearer认证","children":[]},{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]}]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1708528554000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":4}]},"readingTime":{"minutes":7.95,"words":2384},"filePathRelative":"dotnet/anquanhebiaoshi/shenfenrenzhengheshouquan/jwtrenzheng/gaishu.md","localizedDate":"2022年10月4日","excerpt":"<h2>开篇语</h2>\\n<p>本文内容参考多位大佬的文章编写而成。</p>\\n<h2>介绍</h2>\\n<p>JWT是一个基于json的、用于在网络上声明某种主张的令牌，他是一种双方之间传递安全信息的表述性声明规范。主要用于集群分布式中。</p>\\n<blockquote>\\n<p>作用：可以做权限验证的使用，是一种标准化的数据传输规范，但是目的不是为了数据加密和保护。</p>\\n</blockquote>\\n<p>Jwt通常是用三部分组成：<strong>头信息，消息体，签名</strong>。</p>\\n<ul>\\n<li>Header(头信息)：Json对象，alg表示签名的算法，默认是HS256(HMAC SHA256)，type表示令牌的类型，统一是JWT.</li>\\n<li>Payload(载荷)：Json对象，存放实际需要传递的数据，只建议存储不重要的信息。</li>\\n<li>Signature(签名)：值是将前两部分的进行base64编码后使用指定算法签名生成的。</li>\\n</ul>","autoDesc":true}');export{y as comp,C as data};
