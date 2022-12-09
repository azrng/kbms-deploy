import{_ as e,W as i,X as n,a0 as s}from"./framework.e8a0537a.js";const d={},l=s(`<blockquote><p>最后编辑时间：2021年1月24日</p></blockquote><h2 id="_1-简单使用" tabindex="-1"><a class="header-anchor" href="#_1-简单使用" aria-hidden="true">#</a> 1. 简单使用</h2><p>ConfigureServices中使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddDistributedMemoryCache();
services.AddSession();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>因为session的服务端存储需要缓存，所以需要引入net.core的缓存DistributedMemoryCache；</p></blockquote><p>Configure中使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app.UseSession();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>控制器中使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  HttpContext.Session.SetString(&quot;user&quot;, &quot;lisi&quot;);
  var user = HttpContext.Session.GetString(&quot;user&quot;);
  //存储
  HttpContext.Session.Set(&quot;LoginId&quot;, System.Text.Encoding.Default.GetBytes(&quot;666&quot;));
  //获取
  bool flag = HttpContext.Session.TryGetValue(&quot;LoginId&quot;, out byte[] byteLoginId);
  var loginId = System.Text.Encoding.Default.GetString(byteLoginId); // LoginId=&quot;666&quot;;
  //获取
  var loginId2 = HttpContext.Session.GetString(&quot;LoginId&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作string类型需要安装组件</p><blockquote><p>Microsoft.AspNetCore.Http</p></blockquote><p>注：</p><blockquote><p>当前操作只能在控制器中使用session</p></blockquote><h2 id="_2-封装的session公共类" tabindex="-1"><a class="header-anchor" href="#_2-封装的session公共类" aria-hidden="true">#</a> 2. 封装的Session公共类</h2><p>目的是可以让全局都可以获取到上下文</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/// &lt;summary&gt;
    /// 上下文
    /// &lt;/summary&gt;
    public class MyHttpContext
    {
        /// &lt;summary&gt;
        /// 服务提供者
        /// &lt;/summary&gt;
        public static IServiceProvider _serviceProvider;

        public static HttpContext Current
        {
            get
            {
                var factory = _serviceProvider.GetService&lt;IHttpContextAccessor&gt;();
                return factory.HttpContext;
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ConfigureServices中使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            services.AddDistributedMemoryCache();
            services.AddSession();
            //注入IHttpContextAccessor
            services.AddSingleton&lt;IHttpContextAccessor, HttpContextAccessor&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Configure中使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  MyHttpContext._serviceProvider = app.ApplicationServices;
  app.UseSession();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>存储session</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MyHttpContext.Current.Session.SetString(&quot;aa&quot;, &quot;bb&quot;);
var aa = MyHttpContext.Current.Session.GetString(&quot;aa&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-通过session存储用户信息" tabindex="-1"><a class="header-anchor" href="#_3-通过session存储用户信息" aria-hidden="true">#</a> 3. 通过session存储用户信息</h2><p>ConfigureServices中使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            services.AddDistributedMemoryCache();
            services.AddSession();
            //注入IHttpContextAccessor
            services.AddSingleton&lt;IHttpContextAccessor, HttpContextAccessor&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Configure中使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  MyHttpContext._serviceProvider = app.ApplicationServices;
  app.UseSession();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>操作者模型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/// &lt;summary&gt;
    /// 操作模型，保存登陆用户必要信息。
    /// &lt;/summary&gt;
    public class Operator
    {
        /// &lt;summary&gt;
        /// 用户ID
        /// &lt;/summary&gt;
        public string UserId { get; set; }

        /// &lt;summary&gt;
        /// 账号
        /// &lt;/summary&gt;
        public string Account { get; set; }

        /// &lt;summary&gt;
        /// 真实姓名
        /// &lt;/summary&gt;
        public string RealName { get; set; }

        /// &lt;summary&gt;
        /// 昵称
        /// &lt;/summary&gt;
        public string NickName { get; set; }

        /// &lt;summary&gt;
        /// 是否可以查看所有数据  数据权限
        /// &lt;/summary&gt;
        public DataPermissionEnum DataPermission { get; set; } = DataPermissionEnum.My;

        /// &lt;summary&gt;
        /// 头像
        /// &lt;/summary&gt;
        public string Avatar { get; set; }

    }

    /// &lt;summary&gt;
    /// 数据权限
    /// &lt;/summary&gt;
    public enum DataPermissionEnum
    {
        [Display(Name = &quot;仅自己的数据&quot;)]
        [Description(&quot;仅自己的数据&quot;)]
        My = 0,

        [Display(Name = &quot;查看所有的数据&quot;)]
        [Description(&quot;查看所有的数据&quot;)]
        All = 1
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作者单例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/// &lt;summary&gt;
    /// 用户登陆信息提供者。
    /// &lt;/summary&gt;
    public class OperatorProvider
    {
        /// &lt;summary&gt;
        /// Session键。
        /// &lt;/summary&gt;
        private const string _lOGIN_USER_KEY = &quot;LoginUser&quot;;

        private OperatorProvider()
        {
        }

        static OperatorProvider()
        {
        }

        //使用内部类+静态构造函数实现延迟初始化。
        private class Nested
        {
            static Nested()
            {
            }

            public static readonly OperatorProvider instance = new OperatorProvider();
        }

        /// &lt;summary&gt;
        /// 在大多数情况下，静态初始化是在.NET中实现Singleton的首选方法。
        /// &lt;/summary&gt;
        public static OperatorProvider Instance
        {
            get
            {
                return Nested.instance;
            }
        }

        public Operator Current
        {
            get; set;
        }

        /// &lt;summary&gt;
        ///
        /// 从Session/Cookie删除用户操作模型。
        /// &lt;/summary&gt;
        public void Remove(HttpContext context)
        {
            context.Session.Remove(_lOGIN_USER_KEY);
        }

        public void Remove()
        {
            MyHttpContext.Current.Session.Remove(_lOGIN_USER_KEY);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储并且获取用户信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//存储 
OperatorProvider.Instance.Current = new Operator
            {
                Account = &quot;admin&quot;,
                NickName = &quot;张三&quot;
            };
//获取
var account = OperatorProvider.Instance.Current.Account;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-session设置" tabindex="-1"><a class="header-anchor" href="#_4-session设置" aria-hidden="true">#</a> 4. Session设置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    services.AddDistributedMemoryCache();
    services.AddSession(options =&gt;
    {
        options.Cookie.Name = &quot;.AdventureWorks.Session&quot;;
        options.IdleTimeout = System.TimeSpan.FromSeconds(10);//设置session的过期时间
        options.Cookie.HttpOnly = true;//设置在浏览器不能通过js获得该cookie的值
    });
    services.AddSingleton&lt;IHttpContextAccessor, HttpContextAccessor&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),t=[l];function a(r,v){return i(),n("div",null,t)}const c=e(d,[["render",a],["__file","session.html.vue"]]);export{c as default};
