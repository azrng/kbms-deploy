import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as d,a as e,b as i,d as l,e as n}from"./app-3c3dee46.js";const c={},o=n(`<h2 id="登录信息保存" tabindex="-1"><a class="header-anchor" href="#登录信息保存" aria-hidden="true">#</a> 登录信息保存</h2><h3 id="_1-1-信息保存" tabindex="-1"><a class="header-anchor" href="#_1-1-信息保存" aria-hidden="true">#</a> 1.1 信息保存</h3><p>登录后用户的信息存入cookie中</p><p>保存验证结果; 用户id可以存入NameIdentifier，账号存入GivenName，姓名存入Name</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 				var claims = new List&lt;Claim&gt;
                {
                    new Claim(ClaimTypes.NameIdentifier, account),
                    new Claim(ClaimTypes.Name, &quot;张三&quot;),
                    new Claim(ClaimTypes.Role, &quot;校长&quot;)
                };
                var cliamsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                var claimsPrincipal = new ClaimsPrincipal(cliamsIdentity); //可以理解为证件用户

                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, claimsPrincipal,
                    new AuthenticationProperties
                    {
                        ExpiresUtc = new DateTimeOffset(DateTime.Now.AddHours(6))
                    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-configureservices引用中间件" tabindex="-1"><a class="header-anchor" href="#_1-2-configureservices引用中间件" aria-hidden="true">#</a> 1.2 ConfigureServices引用中间件</h3><p>引用验证中间件</p><p>string CookieScheme = &quot;Cookies&quot;;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 配置验证
 services.AddAuthentication(CookieScheme)
       .AddCookie(CookieScheme, option =&gt;
        {
           //登录路径：这是当用户试图访问资源但未经过身份验证时，程序将会将请求重定向到这个相对路径。
           option.LoginPath = new PathString(&quot;/account/login&quot;);  
           //禁止访问路径：当用户试图访问资源时，但未通过该资源的任何授权策略，请求将被重定向到这个相对路径
           option.AccessDeniedPath = new PathString(&quot;/account/denied&quot;);
        });
//注入上下文单例模式
 services.AddSingleton&lt;IHttpContextAccessor, HttpContextAccessor&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-configure里面启用认证" tabindex="-1"><a class="header-anchor" href="#_1-3-configure里面启用认证" aria-hidden="true">#</a> 1.3 Configure里面启用认证</h3><p>必须添加下面的两者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app.UseAuthentication();//启用身份认证：识别当前请求的用户信息,一般是通过加密的Cookies实现。
app.UseAuthorization();//启用身份授权：识别当前请求是否有访问指定资源的权限，一般是根据当前请求识别的用户信息,结合角色权限相关配置来判断。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-获取信息" tabindex="-1"><a class="header-anchor" href="#_1-4-获取信息" aria-hidden="true">#</a> 1.4 获取信息</h3><p>在登录认证通过后访问时候可以通过</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var name = this.User.Identity.Name;//获取存入的名称信息
HttpContext.User.FindFirst(u =&gt; u.Type == ClaimTypes.NameIdentifier)?.Value;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-注销用户" tabindex="-1"><a class="header-anchor" href="#_1-5-注销用户" aria-hidden="true">#</a> 1.5 注销用户</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> await HttpContext.SignOutAsync();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),v={href:"https://www.cnblogs.com/OpenCoder/p/8341843.html",target:"_blank",rel:"noopener noreferrer"},u=n(`<h2 id="全局获取" tabindex="-1"><a class="header-anchor" href="#全局获取" aria-hidden="true">#</a> 全局获取</h2><p>如果想在其他层获取当前用户信息，需要将IHttpContextAccessor注入进去，然后通过这个去获取，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class UserEntityService : IUserEntityService
{
   private IHttpContextAccessor _accessor;
   private readonly IMongoCollection&lt;UserProfile&gt; _users;
 
   public UserEntityService(IHttpContextAccessor accessor, IDefaultMongoDatabaseProvider databaseProvider)
   {
       _accessor = accessor;
       _users = databaseProvider.GetCollection&lt;UserProfile&gt;(CollectionNames.UserProfiles);
   }
 
   public Task&lt;UserProfile&gt; GetCurrentUserAsync()
   {
       var rawUser = this._accessor.HttpContext.User;
       if (rawUser == null)
       {
          return null;
       }
       var filter = Builders&lt;UserProfile&gt;.Filter.Eq(&quot;UserId&quot;, rawUser.UserId);
      return _users.Find(filter).FirstOrDefaultAsync();
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(b,h){const s=t("ExternalLinkIcon");return r(),d("div",null,[o,e("p",null,[i("cookie认证 "),e("a",v,[i("https://www.cnblogs.com/OpenCoder/p/8341843.html"),l(s)])]),u])}const x=a(c,[["render",m],["__file","cookie.html.vue"]]);export{x as default};
