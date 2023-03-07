import{_ as a,V as d,W as l,X as e,Y as i,Z as s,$ as t,C as r}from"./framework-fde89294.js";const u={},o=t(`<h1 id="_1-连接数据库" tabindex="-1"><a class="header-anchor" href="#_1-连接数据库" aria-hidden="true">#</a> 1. 连接数据库</h1><p>通过依赖注入配置应用程序，通过startup类的ConfigureService方法中的AddDbContext将EFCore添加到依赖注入容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();

    services.AddDbContext&lt;OpenDbContext&gt;(
        options =&gt; options.UseMySql(Configuration[&quot;DbConfig:Mysql:ConnectionString&quot;]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将名为 OpenDbContext的 DbContext 子类注册到依赖注入容器的Scope生命周期。上下文配置为使用MySQL数据库提供程序，并从配置中读取数据库连接字符串。</p><p>OpenDbContext类必须公开具有 DbContextOptions&lt;OpenDbContext&gt;参数的公共构造函数。 这是将 AddDbContext 的上下文配置传递到 DbContext 的方式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class OpenDbContext : DbContext
    {
        public OpenDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet&lt;User&gt; Users { get; set; }
        public DbSet&lt;Score&gt; Scores { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //另一种配置连接数据库的方式
            //optionsBuilder.UseMySql(&quot;连接数据库&quot;, ServerVersion.AutoDetect(&quot;连接数据库字符串&quot;));
            
            //显示敏感数据日志
            optionsBuilder.EnableSensitiveDataLogging(true);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //属性配置
            //modelBuilder.Entity&lt;User&gt;().Property(t =&gt; t.Account).IsRequired().HasMaxLength(20).HasComment(&quot;帐号&quot;);
            //种子数据设置
            //modelBuilder.Entity&lt;User&gt;().HasData(new User { Account=&quot;种子&quot;});
            
            // 添加etc
            modelBuilder.ApplyConfiguration(new UserInfoETC());

            //通过反射批量添加etc的操作
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            base.OnModelCreating(modelBuilder);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后将OpenDbContext通过构造函数注入的方式注入到应用程序的控制器或者其他服务中使用。</p>`,7),c={href:"https://mp.weixin.qq.com/s/_jfMwvewRNkAVwL4pfvLCA",target:"_blank",rel:"noopener noreferrer"},v=t(`<h1 id="_2-操作数据库" tabindex="-1"><a class="header-anchor" href="#_2-操作数据库" aria-hidden="true">#</a> 2. 操作数据库</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    context.Database.EnsureDeleted();//删除数据库，如果存在，如果没有权限，则引发异常
    context.Database.EnsureCreated();//如果数据库不存在，创建数据库并初始化数据库架构，如果存在任何表，则不会初始化架构
    context.Database.Migrate();//根据迁移文件，迁移数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-查询操作" tabindex="-1"><a class="header-anchor" href="#_3-查询操作" aria-hidden="true">#</a> 3. 查询操作</h1><h2 id="_3-1-基础查询" tabindex="-1"><a class="header-anchor" href="#_3-1-基础查询" aria-hidden="true">#</a> 3.1 基础查询</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.Set&lt;UserInfor&gt;().ToList();

//查询表达式
var account = (from u in _context.Users
                    where u.Id == id
                    select u.Account
                    ).ToList();

//查询单个
_context.Movie.FirstOrDefaultAsync(m =&gt; m.ID == id); 
_context.Movie.FindAsync(id); 

//查询指定列  如果不存在数据返回空对象，而不是null
_context.Set&lt;User&gt;().AsNoTracking().Where(t=&gt;t.Id==&quot;11&quot;).Select(t =&gt; new { t.Account, t.PassWord }).FirstOrDefaultAsync();
//查询指定列 如果不存在数据返回空字符串，而不是null
 var session = await _context.Set&lt;User&gt;().Where(t=&gt;t.Id ==&quot;11&quot;).Select(t =&gt; t.Name).FirstOrDefaultAsync().ConfigureAwait(false);

_context.Users.OrderBy(ty =&gt; ty.IsValid).Where(t =&gt; t.Id == &quot;1407875772521123840&quot;).FirstOrDefaultAsync();
// 在EFCore中不论是先where还是先order，生成的SQL脚本都是先where再order的

// 预先加载查询
var blogs = context.Blogs.Include(blog =&gt; blog.Posts).ToList();
// 包含多个层级的查询
var blogs = context.Blogs.Include(blog =&gt; blog.Posts).ThenInclude(post =&gt; post.Author).ToList();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SingleOrDefaultAsync 与FirstOrDefaultAsync</p><p>如果有多个实体符合筛选部分， SingleOrDefaultAsync 将引发异常。</p><p>如果有多个实体符合筛选部分， FirstOrDefaultAsync 不引发异常。</p><p>FindAsync</p><p>在大部分基架代码中，FindAsync 可用于替代 FirstOrDefaultAsync ，查找具有主键 (PK) 的实体。 如果具有 PK 的实体正在由上下文跟踪，会返回该实体且不向 DB 发出请求。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>测试结果
var entity = _context.Users.Where(t =&gt; t.Id == &quot;55555&quot;).Select(t =&gt; new { t.Account }).FirstOrDefault();//null
var entity2 = _context.Users.Where(t =&gt; t.Id == &quot;55555&quot;).Select(t =&gt; t.Account).FirstOrDefault();//null
var enetit3 = _context.Users.Where(t =&gt; t.Id == &quot;55555&quot;).Select(t =&gt; new user { Name = t.Account }).FirstOrDefault();//null
var entity4 = _context.Users.FirstOrDefault(t =&gt; t.Id == &quot;55555&quot;);//null
var entity5 = _context.Users.Select(t =&gt; new user { Name = t.Account }).FirstOrDefault(t =&gt; t.Name == &quot;444&quot;);//null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-跟踪和非跟踪查询" tabindex="-1"><a class="header-anchor" href="#_3-2-跟踪和非跟踪查询" aria-hidden="true">#</a> 3.2 跟踪和非跟踪查询</h2><p>跟踪行为决定了EFCore是否将有些实体的信息保存在其更改更跟踪器中。如果已跟踪某个实体，则该实体中检测到的任何更改都会在SaveChanges()时候保存到数据库，</p><p>不跟踪没有主键的实体类型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 跟踪查询
_context.Set&lt;User&gt;().ToListAsync();

# 非跟踪查询
_context.Set&lt;User&gt;().AsNoTracking().ToListAsync();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认是跟踪查询</p><h2 id="_3-3-条件查询" tabindex="-1"><a class="header-anchor" href="#_3-3-条件查询" aria-hidden="true">#</a> 3.3 条件查询</h2><h3 id="_3-3-1-不支持异步方案" tabindex="-1"><a class="header-anchor" href="#_3-3-1-不支持异步方案" aria-hidden="true">#</a> 3.3.1 不支持异步方案</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>			Func&lt;User, bool&gt; express = x =&gt; true;		
            if (!string.IsNullOrWhiteSpace(dto.Data))
            {
                express = x =&gt; x.Mobile == dto.Data;
            }
            string userid = &quot;&quot;;
            if (!string.IsNullOrWhiteSpace(userid))
            {
                express = x =&gt; x.UserId == userid;
            }
            var bbb = _dbContext.Set&lt;User&gt;().Where(express).FirstOrDefault();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-2-支持异步方案" tabindex="-1"><a class="header-anchor" href="#_3-3-2-支持异步方案" aria-hidden="true">#</a> 3.3.2 支持异步方案</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>			Expression&lt;Func&lt;User, bool&gt;&gt; express = x =&gt; true;
            if (!string.IsNullOrWhiteSpace(dto.Data))
            {
                express = x =&gt; x.Mobile == dto.Data;
            }
            var bbb = await _dbContext.Set&lt;User&gt;().Where(express).ToListAsync();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-原生sql查询" tabindex="-1"><a class="header-anchor" href="#_3-4-原生sql查询" aria-hidden="true">#</a> 3.4 原生SQL查询</h2><p>可使用 FromSqlRaw 扩展方法基于原始 SQL 查询开始 LINQ 查询。 FromSqlRaw 只能在直接位于 DbSet&lt;&gt; 上的查询根上使用。</p><h3 id="_3-4-1-基本原生sql查询" tabindex="-1"><a class="header-anchor" href="#_3-4-1-基本原生sql查询" aria-hidden="true">#</a> 3.4.1 基本原生SQL查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var blogs = context.Blogs
    .FromSqlRaw(&quot;select * from user&quot;)
    .ToList();

// 执行存储过程
var blogs = context.Blogs
    .FromSqlRaw(&quot;EXECUTE dbo.GetMostPopularBlogs&quot;)
    .ToList();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.x里面使用FromSql，在3.x里面使用FromSqlRow方法</p><h3 id="_3-4-2-参数化查询" tabindex="-1"><a class="header-anchor" href="#_3-4-2-参数化查询" aria-hidden="true">#</a> 3.4.2 参数化查询</h3><h4 id="_3-4-2-1-sql注入" tabindex="-1"><a class="header-anchor" href="#_3-4-2-1-sql注入" aria-hidden="true">#</a> 3.4.2.1 SQL注入</h4><p>首先我们编写一个简单的SQL注入示例，比如就注入我们根据ID查询的语句，输入ID为：ididid&#39; or &#39;1&#39;=&#39;1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var strSql = string.Format(&quot;select * from user where Id=&#39;{0}&#39;&quot;, &quot;ididid&#39; or &#39;1&#39;=&#39;1&quot;);
    var query = await _context.Set&lt;User&gt;().FromSqlRaw(strSql).ToListAsync();
    Console.WriteLine(JsonConvert.SerializeObject(query));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成语句</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      select * from user where Id=&#39;ididid&#39; or &#39;1&#39;=&#39;1&#39;
[{&quot;Account&quot;:&quot;张三&quot;,&quot;PassWord&quot;:&quot;123456&quot;,&quot;CreateTime&quot;:&quot;2021-05-20T22:53:44.778101&quot;,&quot;IsValid&quot;:false,&quot;Id&quot;:&quot;1395392302788120576&quot;},{&quot;Account&quot;:&quot;李四&quot;,&quot;PassWord&quot;:&quot;123456&quot;,&quot;CreateTime&quot;:&quot;2021-05-20T22:53:44.849376&quot;,&quot;IsValid&quot;:false,&quot;Id&quot;:&quot;1395392303090110464&quot;},{&quot;Account&quot;:&quot;王五&quot;,&quot;PassWord&quot;:&quot;123456&quot;,&quot;CreateTime&quot;:&quot;2021-05-20T22:53:44.849425&quot;,&quot;IsValid&quot;:false,&quot;Id&quot;:&quot;1395392303090110467&quot;}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-2-2-fromsqlraw参数化" tabindex="-1"><a class="header-anchor" href="#_3-4-2-2-fromsqlraw参数化" aria-hidden="true">#</a> 3.4.2.2 FromSqlRaw参数化</h4><p>通过参数化查询，防止SQL注入问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    //sql语句参数化查询，防止SQL注入	
    var strSql = &quot;select * from user where Id=@id&quot;;
    var parameter = new MySqlParameter[] {
        new MySqlParameter(&quot;@id&quot;,&quot;1395392302788120576&quot;),
    };
    var query = await _context.Set&lt;User&gt;().FromSqlRaw(strSql, parameter).ToListAsync();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var strSql = &quot;select * from user where Id={0}&quot;;
    var query = await _context.Set&lt;User&gt;().FromSqlRaw(strSql, &quot;1395392302788120576&quot;).ToListAsync();
    Console.WriteLine(JsonConvert.SerializeObject(query));
	
	// 生成SQL
    select * from user where Id=@p0
    [{&quot;Account&quot;:&quot;张三&quot;,&quot;PassWord&quot;:&quot;123456&quot;,&quot;CreateTime&quot;:&quot;2021-05-20T22:53:44.778101&quot;,&quot;IsValid&quot;:false,&quot;Id&quot;:&quot;1395392302788120576&quot;}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过占位符形式提供额外的参数，看上去类似于String.Format语法，但是提供的值包装在DbParameter中。可以防止SQL注入</p><h4 id="_3-4-2-3-fromsqlinterpolated参数化" tabindex="-1"><a class="header-anchor" href="#_3-4-2-3-fromsqlinterpolated参数化" aria-hidden="true">#</a> 3.4.2.3 FromSqlInterpolated参数化</h4><p>FromSqlInterpolated 类似于 FromSqlRaw，但你可以借助它使用字符串内插语法。 与 FromSqlRaw 一样，FromSqlInterpolated 只能在查询根上使用，并且都可以防止SQL注入。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var query = await _context.Set&lt;User&gt;().FromSqlInterpolated($&quot;select * from user where Id={&quot;1395392302788120576&quot;}&quot;).ToListAsync();
    Console.WriteLine(JsonConvert.SerializeObject(query));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>生成SQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      select * from user where Id=@p0
[{&quot;Account&quot;:&quot;张三&quot;,&quot;PassWord&quot;:&quot;123456&quot;,&quot;CreateTime&quot;:&quot;2021-05-20T22:53:44.778101&quot;,&quot;IsValid&quot;:false,&quot;Id&quot;:&quot;1395392302788120576&quot;}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-3-限制" tabindex="-1"><a class="header-anchor" href="#_3-4-3-限制" aria-hidden="true">#</a> 3.4.3 限制</h3>`,44),m=e("li",null,[e("p",null,"SQL查询必须返回实体类型的所有属性的数据。")],-1),b=e("li",null,[e("p",null,"结果集中的列明必须与属性映射到的列名称匹配。")],-1),g=e("code",null,"Include",-1),p={href:"https://docs.microsoft.com/zh-cn/ef/core/querying/raw-sql#including-related-data",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docs.microsoft.com/zh-cn/ef/core/querying/raw-sql",target:"_blank",rel:"noopener noreferrer"},q=t('<h2 id="_3-5-复杂查询" tabindex="-1"><a class="header-anchor" href="#_3-5-复杂查询" aria-hidden="true">#</a> 3.5 复杂查询</h2><p>数据如下：</p><p>用户表(user)</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621562425951-13836b1a-66db-46a9-9f39-7fb3278d879c.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>用户成绩表(score)</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621562455217-109ca102-03dc-41b3-9cc2-7c3e0a12856f.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>描述：包含三个用户，其中两个用户在成绩表都有语文和数学的数据。</p><h3 id="_3-5-1-内连接" tabindex="-1"><a class="header-anchor" href="#_3-5-1-内连接" aria-hidden="true">#</a> 3.5.1 内连接</h3><p>内连接：分为隐式内连接和显式内连接(写法不同，结果相同)</p><h4 id="_3-5-1-1-linq查询表达式" tabindex="-1"><a class="header-anchor" href="#_3-5-1-1-linq查询表达式" aria-hidden="true">#</a> 3.5.1.1 Linq查询表达式</h4><h5 id="显式内连接-join-in-on拼接" tabindex="-1"><a class="header-anchor" href="#显式内连接-join-in-on拼接" aria-hidden="true">#</a> 显式内连接：join-in-on拼接</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var list = (from u in _context.Users\n                join sc in _context.Scores on u.Id equals sc.UserId\n                where sc.CourseName == &quot;语文&quot;\n                select new\n                {\n                    u.Account,\n                    u.PassWord,\n                    sc.CourseName,\n                    sc.Grade\n                }).ToList();\n	Console.WriteLine(JsonConvert.SerializeObject(list));\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>记得引用：System.Linq 否则提示：未找到源类型“DbSet&lt;User&gt;”的查询模式的实现，未找到join</p><p>生成SQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      SELECT `u`.`Account`, `u`.`PassWord`, `s`.`CourseName`, `s`.`Grade`\n      FROM `user` AS `u`\n      INNER JOIN `score` AS `s` ON `u`.`Id` = `s`.`UserId`\n      WHERE `s`.`CourseName` = &#39;语文&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621562254206-ca4cde94-2b2d-4e81-94fd-aabf09bc198d.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>三表联合查询</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var templateFieldList = await (from template in _conclusionTemplateReq.EntitiesAsNoTracking.Where(t =&gt;\n        t.Isdefault &amp;&amp; t.TenantId == CurrentUser.TenantId)\n    join templateField in _templateFieldMappingRep.EntitiesAsNoTracking on template.CluTemplateId equals\n        templateField.CluTemplateId\n    join field in _conclusionTemplateFieldRep.EntitiesAsNoTracking.Where(t =&gt; t.Isdefault) on templateField\n        .CluFieldId equals field.CluFieldId\n    select new ChatConclusionTemplateFieldMapping(newTemplateId, templateField.CluFieldId,\n        templateField.Sort)).ToArrayAsync().ConfigureAwait(false);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="隐式内连接-多个from并联拼接" tabindex="-1"><a class="header-anchor" href="#隐式内连接-多个from并联拼接" aria-hidden="true">#</a> 隐式内连接：多个from并联拼接</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var list = (from u in _context.Users\n                from sc in _context.Scores\n                where u.Id == sc.UserId &amp;&amp; sc.CourseName == &quot;语文&quot;\n                select new\n                {\n                    u.Account,\n                    u.PassWord,\n                    sc.CourseName,\n                    sc.Grade\n                }).ToList();\n    Console.WriteLine(JsonConvert.SerializeObject(list));\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成SQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      SELECT `u`.`Account`, `u`.`PassWord`, `s`.`CourseName`, `s`.`Grade`\n      FROM `user` AS `u`\n      CROSS JOIN `score` AS `s`\n      WHERE (`u`.`Id` = `s`.`UserId`) AND (`s`.`CourseName` = &#39;语文&#39;)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621562264762-9127dd6f-a5bc-473f-bbc1-6547657eb5b5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="_3-5-1-2-linq标准查询运算符" tabindex="-1"><a class="header-anchor" href="#_3-5-1-2-linq标准查询运算符" aria-hidden="true">#</a> 3.5.1.2 Linq标准查询运算符</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var list = _context.Users.Where(t =&gt; t.Account != null)\n        .Join(_context.Scores.Where(sc =&gt; sc.CourseName == &quot;语文&quot;), u =&gt; u.Id, sc =&gt; sc.UserId, (u, sc) =&gt; new\n        {\n            u.Account,\n            u.PassWord,\n            sc.CourseName,\n            sc.Grade\n        }).ToList();\n    Console.WriteLine(JsonConvert.SerializeObject(list));\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成SQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      # 不加查询课程\n	    SELECT `u`.`Account`, `u`.`PassWord`, `s`.`CourseName`, `s`.`Grade`\n      FROM `user` AS `u`\n      INNER JOIN `score` AS `s` ON `u`.`Id` = `s`.`UserId`\n      \n      # 查询课程\n      SELECT `u`.`Account`, `u`.`PassWord`, `t`.`CourseName`, `t`.`Grade`\n      FROM `user` AS `u`\n      INNER JOIN (\n          SELECT `s`.`CourseName`, `s`.`Grade`, `s`.`UserId`\n          FROM `score` AS `s`\n          WHERE `s`.`CourseName` = &#39;语文&#39;\n      ) AS `t` ON `u`.`Id` = `t`.`UserId`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621564709433-98fbb56e-66e0-4505-b414-b12e9fa5d53b.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_3-5-2-外连接" tabindex="-1"><a class="header-anchor" href="#_3-5-2-外连接" aria-hidden="true">#</a> 3.5.2 外连接</h3><p>外连接join后必须有into，然后可以加上XX.DefaultIfEmpty()，表示对于引用类型将返回null,而对于值类型则返回0。对于结构体类型，则会根据其成员类型将它们相应地初始化为null(引用类型)或0(值类型)，</p><p>如果仅需要统计右表的个数或者其它属性，可以省略XX.DefaultIfEmpty, 但如果需要点出来右表的字段，则不能省。</p><h4 id="_3-5-2-1-linq实现" tabindex="-1"><a class="header-anchor" href="#_3-5-2-1-linq实现" aria-hidden="true">#</a> 3.5.2.1 linq实现</h4><p>查询所有用户对应的班级,因为用户和成绩一对多，所以会出现多条数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var list = (from u in _context.Users\n                join sc in _context.Scores on u.Id equals sc.UserId\n                into ulist\n                from sco in ulist.DefaultIfEmpty()\n                where u.Account != null //这个条件只是展示如何添加条件\n                select new\n                {\n                    UserId = u.Id,\n                    Account = u.Account,\n                    sco.CourseName\n                }).ToList();\n    Console.WriteLine(JsonConvert.SerializeObject(list));\n\n            var list = (from g in _groupdefRep.EntitiesAsNoTracking\n                        join cl in _clouduserRep.EntitiesAsNoTracking on g.CloudId equals cl.Id\n                        into glist\n                        from c in glist.DefaultIfEmpty()\n                        where g.Enabled.Value == 1 &amp;&amp; (cloudId == 0 || g.CloudId == cloudId)\n                        orderby c.Id, g.GroupName\n                        select new\n                        {\n                            Gid = g.Id,\n                            Name = c == null ? g.GroupName : c.CloudName\n                        }).ToList();\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用：string.IsNullOrEmpty 不能使用：string.IsNullOrWhiteSpace</p><p>生成SQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      SELECT `u`.`Id` AS `UserId`, `u`.`Account`, `s`.`CourseName`\n      FROM `user` AS `u`\n      LEFT JOIN `score` AS `s` ON `u`.`Id` = `s`.`UserId`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621563339181-f19d1904-de1f-4897-a64c-d14e45f17071.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>如果要查询成绩，应该这么写，上面那个写法会直接报错， Nullable object must have a value</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1621563656968-030835ff-2188-43c9-99e6-b2c475e02f3e.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_3-5-3-groupjoin" tabindex="-1"><a class="header-anchor" href="#_3-5-3-groupjoin" aria-hidden="true">#</a> 3.5.3 GroupJoin</h3><p>GroupJoin操作符常应用于返回“主键对象-外键对象集合”形式的查询，例如“用户信息-此用户下所有科目成绩”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var list = _context.Users.Where(t =&gt; t.Account != null)\n        .GroupJoin(_context.Scores, u =&gt; u.Id, sc =&gt; sc.UserId, (u, sc) =&gt; new\n        {\n            u.Account,\n            u.PassWord,\n            Scores = sc\n        }).ToList();\n    Console.WriteLine(JsonConvert.SerializeObject(list));\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',47),x={href:"https://docs.microsoft.com/zh-cn/ef/core/querying/client-eval",target:"_blank",rel:"noopener noreferrer"},f=t(`<h3 id="_3-5-4-grouby" tabindex="-1"><a class="header-anchor" href="#_3-5-4-grouby" aria-hidden="true">#</a> 3.5.4 GrouBy</h3><p>分组操作 根据用户分组，求科目数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var list = (from sc in _context.Scores
                group sc by sc.UserId
                into g
                select new
                {
                    g.Key,
                    Count = g.Count()
                }).ToList();
    Console.WriteLine(JsonConvert.SerializeObject(list));

    var list2 = _context.Scores.GroupBy(sc =&gt; sc.UserId).Select(t =&gt; new
    {
        t.Key,
        Count = t.Count()
    }).ToList();
    Console.WriteLine(JsonConvert.SerializeObject(list2));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成SQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (1ms) [Parameters=[], CommandType=&#39;Text&#39;, CommandTimeout=&#39;30&#39;]
      SELECT \`s\`.\`UserId\` AS \`Key\`, COUNT(*) AS \`Count\`
      FROM \`score\` AS \`s\`
      GROUP BY \`s\`.\`UserId\`
[{&quot;Key&quot;:&quot;1395392302788120576&quot;,&quot;Count&quot;:2},{&quot;Key&quot;:&quot;1395392303090110464&quot;,&quot;Count&quot;:2}]
info: Microsoft.EntityFrameworkCore.Database.Command[20101]
      Executed DbCommand (0ms) [Parameters=[], CommandType=&#39;Text&#39;, CommandTimeout=&#39;30&#39;]
      SELECT \`s\`.\`UserId\` AS \`Key\`, COUNT(*) AS \`Count\`
      FROM \`score\` AS \`s\`
      GROUP BY \`s\`.\`UserId\`
[{&quot;Key&quot;:&quot;1395392302788120576&quot;,&quot;Count&quot;:2},{&quot;Key&quot;:&quot;1395392303090110464&quot;,&quot;Count&quot;:2}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-6-查询是否存在" tabindex="-1"><a class="header-anchor" href="#_3-6-查询是否存在" aria-hidden="true">#</a> 3.6 查询是否存在</h2><p>简单查询是否存在</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var exist = await _templateFieldMappingRep.EntitiesAsNoTracking.AnyAsync(t =&gt; t.CluFieldId == 111);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>联表查询是否存在</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var existTitle =
    await (from templatefield in _templateFieldMappingRep.EntitiesAsNoTracking.Where(t =&gt;
            t.CluTemplateId == dto.CluTemplateId)
            from field in _conclusionTemplateFieldRep.EntitiesAsNoTracking.Where(t =&gt;
                t.FieldName == dto.FieldName)
            where templatefield.CluFieldId == field.CluFieldId
            select new { field.CluFieldId }).AnyAsync().ConfigureAwait(false);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-添加" tabindex="-1"><a class="header-anchor" href="#_4-添加" aria-hidden="true">#</a> 4. 添加</h1><h2 id="_4-1-基础添加" tabindex="-1"><a class="header-anchor" href="#_4-1-基础添加" aria-hidden="true">#</a> 4.1 基础添加</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  	_context.Movie.Add(movie);
	// or
	await _context.Movie.AddRangeAsync(movies)
    await _context.SaveChangesAsync();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-已经设置自增键的插入" tabindex="-1"><a class="header-anchor" href="#_4-2-已经设置自增键的插入" aria-hidden="true">#</a> 4.2 已经设置自增键的插入</h2><p>先关闭自增然后插入数据后再开启自增</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>		db.Database.OpenConnection();
        db.Database.ExecuteSqlCommand(&quot;SET IDENTITY_INSERT [T_RoleInfor] ON&quot;);
        var r2 = new T_RoleInfor()
        {
            id = 123,
            roleName = &quot;管理员&quot;,
            roleDescription = &quot;我是管理员&quot;
            };
        db.Add(r2);
        int count2 = db.SaveChanges();
        db.Database.ExecuteSqlCommand(&quot;SET ID	ENTITY_INSERT [T_RoleInfor] OFF&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-通过sql添加" tabindex="-1"><a class="header-anchor" href="#_4-3-通过sql添加" aria-hidden="true">#</a> 4.3 通过SQL添加</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var strSql2 = &quot;INSERT INTO \`userinfo\`(\`Id\`, \`Account\`, \`PassWord\`) VALUES (@id, @account, @password);&quot;;
    var parameter2 = new MySqlParameter[] {
        new MySqlParameter(&quot;@id&quot;,&quot;22&quot;),
        new MySqlParameter(&quot;@account&quot;,&quot;2222&quot;),
        new MySqlParameter(&quot;@password&quot;,&quot;22222&quot;)
        };
    var flg = db.Database.ExecuteSqlRaw(strSql2, parameter2);

	// 调用存储过程
	int n = db.Database.ExecuteSqlCommand(&quot;DoSome @id&quot;, para);//参数化查询
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.x使用ExecuteSqlCommand，3.x使用ExecuteSqlRaw方法</p><h1 id="_5-修改" tabindex="-1"><a class="header-anchor" href="#_5-修改" aria-hidden="true">#</a> 5. 修改</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var  movie = await _context.Movie.FirstOrDefaultAsync(m =&gt; m.ID == id);
    movie.Name=&quot;李思&quot;;
    await _context.SaveChangesAsync();  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-删除" tabindex="-1"><a class="header-anchor" href="#_6-删除" aria-hidden="true">#</a> 6. 删除</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var movie = await _context.Movie.FirstOrDefaultAsync(m =&gt; m.ID == id);
    _context.Movie.Remove(movie);
    await _context.SaveChangesAsync();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-参考文档" tabindex="-1"><a class="header-anchor" href="#_7-参考文档" aria-hidden="true">#</a> 7. 参考文档</h1>`,24),S={href:"https://docs.microsoft.com/zh-cn/ef/core/dbcontext-configuration/",target:"_blank",rel:"noopener noreferrer"};function _(C,I){const n=r("ExternalLinkIcon");return d(),l("div",null,[o,e("p",null,[i("关于连接数据库可以参考另一个文章： "),e("a",c,[i(".Net之生成数据库全流程"),s(n)])]),v,e("ul",null,[m,b,e("li",null,[e("p",null,[i("SQL查询不能包含关联数据， 但是，在许多情况下你可以在查询后面紧跟着使用 "),g,i(" 方法以返回关联数据（请参阅"),e("a",p,[i("包含关联数据"),s(n)]),i("）。")])])]),e("p",null,[i("参考文档："),e("a",h,[i("https://docs.microsoft.com/zh-cn/ef/core/querying/raw-sql"),s(n)])]),q,e("p",null,[i("该代码会提示错误，原因如："),e("a",x,[i("https://docs.microsoft.com/zh-cn/ef/core/querying/client-eval"),s(n)])]),f,e("p",null,[i("官方例子："),e("a",S,[i("https://docs.microsoft.com/zh-cn/ef/core/dbcontext-configuration/"),s(n)])])])}const y=a(u,[["render",_],["__file","efcoreoperation.html.vue"]]);export{y as default};
