import{_ as t,W as a,X as l,Y as e,Z as n,$ as s,a0 as d,y as r}from"./framework.e8a0537a.js";const v={},c=e("h1",{id:"开篇语",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开篇语","aria-hidden":"true"},"#"),n(" 开篇语")],-1),u=e("p",null,"本文主要是回顾下从项目创建到生成数据到数据库(代码优先)的全部过程。采用EFCore作为ORM框架。",-1),o=e("p",null,"本次示例环境：vs2019、net5、mysql",-1),m=e("h1",{id:"创建项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建项目","aria-hidden":"true"},"#"),n(" 创建项目")],-1),b={href:"http://xn--vs2019ASP-kd7ni4au1d49n9v2cruwtqdb4vks6bfofo9hx78k.NET",target:"_blank",rel:"noopener noreferrer"},g=d(`<p>可以通过可视化界面创建或者通过命令行创建</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dotnet new webapi -o Net5ByDocker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="创建实体类" tabindex="-1"><a class="header-anchor" href="#创建实体类" aria-hidden="true">#</a> 创建实体类</h1><p>安装组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Pomelo.EntityFrameworkCore.MySql&quot; Version=&quot;5.0.0&quot; /&gt;
    &lt;PackageReference Include=&quot;Pomelo.EntityFrameworkCore.MySql.Json.Newtonsoft&quot; Version=&quot;5.0.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>增加实体类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    [Table(&quot;user&quot;)]
    public class User
    {
        public User()
        {
            Id = Guid.NewGuid().ToString();
        }

        public User(string account, string password, string creater) : this()
        {
            Account = account;
            Password = password;
            Deleted = false;
            SetCreater(creater);
        }

        [Key]
        [Comment(&quot;主键&quot;)]
        [StringLength(36)]
        [Required]
        public string Id { get; private set; }

        [Comment(&quot;帐号&quot;)]
        [StringLength(36)]
        [Required]
        public string Account { get; private set; }

        [Comment(&quot;密码&quot;)]
        [StringLength(36)]
        [Required]
        public string Password { get; private set; }

        [Comment(&quot;余额&quot;)]
        [Column(TypeName = &quot;decimal(18, 2)&quot;)]
        [Required]
        public decimal Money { get; set; }

        [Comment(&quot;是否删除&quot;)]
        [Column(TypeName = &quot;tinyint(1)&quot;)]
        [Required]
        public bool Deleted { get; private set; }

        [Comment(&quot;创建人&quot;)]
        [StringLength(20)]
        [Required]
        public string Creater { get; private set; }

        [Comment(&quot;创建时间&quot;)]
        [Required]
        public DateTime CreateTime { get; private set; }

        [Comment(&quot;修改人&quot;)]
        [StringLength(20)]
        [Required]
        public string Modifyer { get; private set; }

        [Comment(&quot;修改时间&quot;)]
        [Required]
        public DateTime ModifyTime { get; private set; }

        public void SetCreater(string name)
        {
            Creater = name;
            CreateTime = DateTime.Now;
            SetModifyer(name);
        }

        public void SetModifyer(string name)
        {
            Modifyer = name;
            ModifyTime = DateTime.Now;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种只是增加实体类类型的一种方式，可能这种看着比较乱，还可以通过OnModelCreating实现，详情看参考文档</p><p>增加数据库上下文OpenDbContext</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class OpenDbContext : DbContext
    {
        public OpenDbContext(DbContextOptions&lt;OpenDbContext&gt; options)
            : base(options)
        {
        }

        public DbSet&lt;User&gt; Users { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Startup注入连接数据库操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            var connection = Configuration[&quot;DbConfig:Mysql:ConnectionString&quot;];
            var migrationsAssembly = IntrospectionExtensions.GetTypeInfo(typeof(Startup)).Assembly.GetName().Name;
            services.AddDbContext&lt;OpenDbContext&gt;(option =&gt; option.UseMySql(connection, ServerVersion.AutoDetect(connection), x =&gt;
            {
                x.UseNewtonsoftJson();
                x.MigrationsAssembly(migrationsAssembly);
            }));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="生成迁移文件" tabindex="-1"><a class="header-anchor" href="#生成迁移文件" aria-hidden="true">#</a> 生成迁移文件</h1><p>引用组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;PackageReference Include=&quot;Microsoft.EntityFrameworkCore.Design&quot; Version=&quot;5.0.5&quot;&gt;
&lt;PackageReference Include=&quot;Microsoft.EntityFrameworkCore.Tools&quot; Version=&quot;5.0.5&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>迁移命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>add-migration Init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620543658741-00fd688e-8f23-4709-be13-22766cf2cfe4.png" alt="img" loading="lazy"></p><p>要看下生成的迁移文件是否是自己预期的那样子，也可以在这一步就生成数据库，命令：Update-Database</p><h1 id="数据种子" tabindex="-1"><a class="header-anchor" href="#数据种子" aria-hidden="true">#</a> 数据种子</h1><p>增加OpenDbSend类，添加数据种子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class OpenDbSend
    {
        /// &lt;summary&gt;
        /// 生成数据库以及数据种子
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;dbContext&quot;&gt;数据库上下文&lt;/param&gt;
        /// &lt;param name=&quot;loggerFactory&quot;&gt;日志&lt;/param&gt;
        /// &lt;param name=&quot;retry&quot;&gt;重试次数&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static async Task SeedAsync(OpenDbContext dbContext,
            ILoggerFactory loggerFactory,
            int? retry = 0)
        {
            int retryForAvailability = retry.Value;
            try
            {
                dbContext.Database.Migrate();//如果当前数据库不存在按照当前 model 创建，如果存在则将数据库调整到和当前 model 匹配
                await InitializeAsync(dbContext).ConfigureAwait(false);

                //if (dbContext.Database.EnsureCreated())//如果当前数据库不存在按照当前 model创建，如果存在则不管了。
                //  await InitializeAsync(dbContext).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                if (retryForAvailability &lt; 3)
                {
                    retryForAvailability++;
                    var log = loggerFactory.CreateLogger&lt;OpenDbSend&gt;();
                    log.LogError(ex.Message);
                    await SeedAsync(dbContext, loggerFactory, retryForAvailability).ConfigureAwait(false);
                }
            }
        }

        /// &lt;summary&gt;
        /// 初始化数据
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;context&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static async Task InitializeAsync(OpenDbContext context)
        {
            if (!context.Set&lt;User&gt;().Any())
            {
                await context.Set&lt;User&gt;().AddAsync(new User(&quot;azrng&quot;, &quot;123456&quot;, &quot;azrng&quot;)).ConfigureAwait(false);
                await context.Set&lt;User&gt;().AddAsync(new User(&quot;张三&quot;, &quot;123456&quot;, &quot;azrng&quot;)).ConfigureAwait(false);
            }
            await context.SaveChangesAsync().ConfigureAwait(false);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置项目启动时候调用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var loggerFactory = services.GetRequiredService&lt;ILoggerFactory&gt;();
                var _logger = loggerFactory.CreateLogger&lt;Program&gt;();
                try
                {
                    var openContext = services.GetRequiredService&lt;OpenDbContext&gt;();
                    await OpenDbSend.SeedAsync(openContext, loggerFactory).ConfigureAwait(false);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $&quot;项目启动出错  {ex.Message}&quot;);
                }
            }

            await host.RunAsync().ConfigureAwait(false);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="生成数据库" tabindex="-1"><a class="header-anchor" href="#生成数据库" aria-hidden="true">#</a> 生成数据库</h1><p>启动项目，自动生成数据库</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620546536896-91cc7623-b6fa-457c-acec-d465cb06428e.png" alt="img" loading="lazy"></p><p>表结构如下</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620546396376-896cc74f-197e-465e-811f-168ff86485c4.png" alt="img" loading="lazy"></p><p>如果后期数据库字段或者结构有变动，可以再次生成迁移文件然后生成数据库</p><h1 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// 用户接口
    /// &lt;/summary&gt;
    public interface IUserService
    {
        string GetName();

        /// &lt;summary&gt;
        /// 查询用户信息
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;account&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        Task&lt;User&gt; GetDetailsAsync(string account);
    }

    /// &lt;summary&gt;
    /// 用户实现
    /// &lt;/summary&gt;
    public class UserService : IUserService
    {
        private readonly OpenDbContext _dbContext;

        public UserService(OpenDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public string GetName()
        {
            return &quot;AZRNG&quot;;
        }

        ///&lt;inheritdoc cref=&quot;IUserService.GetDetailsAsync(string)&quot;/&gt;
        public async Task&lt;User&gt; GetDetailsAsync(string account)
        {
            return await _dbContext.Set&lt;User&gt;().FirstOrDefaultAsync(t =&gt; t.Account == account).ConfigureAwait(false);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般更推荐建立指定的返回Model类，然后只查询需要的内容，不直接返回实体类</p><p>控制器方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        /// &lt;summary&gt;
        /// 查询用户详情
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;account&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet]
        public async Task&lt;ActionResult&lt;User&gt;&gt; GetDetailsAsync(string account)
        {
            return await _userService.GetDetailsAsync(account).ConfigureAwait(false);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;id&quot;: &quot;e8976d0a-6ee9-4e2e-b8d8-1fe6e85b727b&quot;,
  &quot;account&quot;: &quot;azrng&quot;,
  &quot;password&quot;: &quot;123456&quot;,
  &quot;money&quot;: 0,
  &quot;deleted&quot;: false,
  &quot;creater&quot;: &quot;azrng&quot;,
  &quot;createTime&quot;: &quot;2021-05-09T15:48:45.730302&quot;,
  &quot;modifyer&quot;: &quot;azrng&quot;,
  &quot;modifyTime&quot;: &quot;2021-05-09T15:48:45.730425&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>`,39),p={href:"https://docs.microsoft.com/zh-cn/ef/core/modeling/entity-types?tabs=data-annotations",target:"_blank",rel:"noopener noreferrer"},q={href:"https://docs.microsoft.com/zh-cn/ef/core/modeling/entity-properties?tabs=data-annotations%2Cwithout-nrt",target:"_blank",rel:"noopener noreferrer"};function x(h,y){const i=r("ExternalLinkIcon");return a(),l("div",null,[c,u,o,m,e("p",null,[e("a",b,[n("本次事例代码是用过vs2019创建的ASP.NET"),s(i)]),n(" Core Web API项目")]),g,e("p",null,[n("实体类型："),e("a",p,[n("https://docs.microsoft.com/zh-cn/ef/core/modeling/entity-types?tabs=data-annotations"),s(i)])]),e("p",null,[n("实体属性："),e("a",q,[n("https://docs.microsoft.com/zh-cn/ef/core/modeling/entity-properties?tabs=data-annotations%2Cwithout-nrt"),s(i)])])])}const C=t(v,[["render",x],["__file","createdb.html.vue"]]);export{C as default};
