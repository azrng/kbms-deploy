import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as a,c as r,b as e,e as n,f as o,d as l}from"./app-Bfb6-vFH.js";const d={},c=e("h2",{id:"概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述"},[e("span",null,"概述")])],-1),u={href:"https://github.com/Arch/UnitOfWork",target:"_blank",rel:"noopener noreferrer"},v=l(`<h3 id="支持mysql多库多表分片" tabindex="-1"><a class="header-anchor" href="#支持mysql多库多表分片"><span>支持MySQL多库多表分片</span></a></h3><blockquote><p>在 MySQL 中，从物理上讲，模式与数据库同义。您可以在 MySQL SQL 语法中替换关键字 SCHEMA 而不是 DATABASE，例如使用 CREATE SCHEMA 而不是 CREATE DATABASE。其他一些数据库产品也有区别。例如，在 Oracle 数据库产品中，模式仅代表数据库的一部分：单个用户拥有的表和其他对象。</p></blockquote><p>因此，对于 MySQL 来说，支持此功能的简单方法是在运行时动态更改 SCHEMA。</p><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><p>引用nuget包</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Microsoft.EntityFrameworkCore.UnitOfWork<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3.1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="如何使用工作单元" tabindex="-1"><a class="header-anchor" href="#如何使用工作单元"><span>如何使用工作单元</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public void ConfigureServices(IServiceCollection services)
{
    // use in memory for testing.
    services
        .AddDbContext&lt;QuickStartContext&gt;(opt =&gt; opt.UseInMemoryDatabase())
        .AddUnitOfWork&lt;QuickStartContext&gt;()
        .AddCustomRepository&lt;Blog, CustomBlogRepository&gt;();
}

private readonly IUnitOfWork _unitOfWork;

// 1. IRepositoryFactory used for readonly scenario;
// 2. IUnitOfWork used for read/write scenario;
// 3. IUnitOfWork&lt;TContext&gt; used for multiple databases scenario;
public ValuesController(IUnitOfWork unitOfWork)
{
    _unitOfWork = unitOfWork;

    // Change database only work for MySQL right now.
    unitOfWork.ChangeDatabase($&quot;uow_db_{DateTime.Now.Year}&quot;);

    var userRepo = unitOfWork.GetRepository&lt;User&gt;();
    var postRepo = unitOfWork.GetRepository&lt;Post&gt;();

    var ym = DateTime.Now.ToString(&quot;yyyyMM&quot;);

    userRepo.ChangeTable($&quot;user_{ym}&quot;);
    postRepo.ChangeTable($&quot;post_{ym}&quot;);

    var user = new User
    {
        UserName = &quot;rigofunc&quot;,
        Password = &quot;password&quot;
    };

    userRepo.Insert(user);

    var post = new Post
    {
        UserId = user.UserId,
        Content = &quot;What a piece of junk!&quot;
    };

    postRepo.Insert(post);

    unitOfWork.SaveChanges();

    var find = userRepo.Find(user.UserId);

    find.Password = &quot;p@ssword&quot;;

    unitOfWork.SaveChanges();

    // projection

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="投影和包含" tabindex="-1"><a class="header-anchor" href="#投影和包含"><span>投影和包含</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>// projection
var pagedList = _unitOfWork.GetRepository&lt;Blog&gt;().GetPagedList(b =&gt; new { Name = b.Title, Link = b.Url }, pageIndex: pageIndex, pageSize: pageSize);
var projection = _unitOfWork.GetRepository&lt;Blog&gt;().GetFirstOrDefault(b =&gt; new { Name = b.Title, Link = b.Url }, predicate: x =&gt; x.Title.Contains(term));

// including
[HttpGet]
public async Task&lt;IPagedList&lt;Blog&gt;&gt; Get()
{
    return await _unitOfWork.GetRepository&lt;Blog&gt;().GetPagedListAsync(include: source =&gt; source.Include(blog =&gt; blog.Posts).ThenInclude(post =&gt; post.Comments));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function m(p,b){const i=s("ExternalLinkIcon");return a(),r("div",null,[c,e("p",null,[n("Microsoft.EntityFrameworkCore 的插件，用于支持存储库、工作单元模式和支持分布式事务的多个数据库。 仓库地址："),e("a",u,[n("https://github.com/Arch/UnitOfWork"),o(i)])]),v])}const k=t(d,[["render",m],["__file","unitofwork.html.vue"]]),f=JSON.parse('{"path":"/orm/efcore/changyongzujian/unitofwork.html","title":"UnitOfWork","lang":"zh-CN","frontmatter":{"title":"UnitOfWork","lang":"zh-CN","date":"2023-05-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["orm"],"tag":["无"],"filename":"unitofwork","slug":"wp032wm0l9fn0amw","docsId":"124681916","description":"概述 Microsoft.EntityFrameworkCore 的插件，用于支持存储库、工作单元模式和支持分布式事务的多个数据库。 仓库地址：https://github.com/Arch/UnitOfWork 支持MySQL多库多表分片 在 MySQL 中，从物理上讲，模式与数据库同义。您可以在 MySQL SQL 语法中替换关键字 SCHEMA ...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/orm/efcore/changyongzujian/unitofwork.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"UnitOfWork"}],["meta",{"property":"og:description","content":"概述 Microsoft.EntityFrameworkCore 的插件，用于支持存储库、工作单元模式和支持分布式事务的多个数据库。 仓库地址：https://github.com/Arch/UnitOfWork 支持MySQL多库多表分片 在 MySQL 中，从物理上讲，模式与数据库同义。您可以在 MySQL SQL 语法中替换关键字 SCHEMA ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-27T07:15:01.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-27T07:15:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UnitOfWork\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-27T07:15:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"支持MySQL多库多表分片","slug":"支持mysql多库多表分片","link":"#支持mysql多库多表分片","children":[]}]},{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[{"level":3,"title":"如何使用工作单元","slug":"如何使用工作单元","link":"#如何使用工作单元","children":[]},{"level":3,"title":"投影和包含","slug":"投影和包含","link":"#投影和包含","children":[]}]}],"git":{"createdTime":1690042937000,"updatedTime":1693120501000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":1.33,"words":398},"filePathRelative":"orm/efcore/changyongzujian/unitofwork.md","localizedDate":"2023年5月14日","excerpt":"<h2>概述</h2>\\n<p>Microsoft.EntityFrameworkCore 的插件，用于支持存储库、工作单元模式和支持分布式事务的多个数据库。\\n仓库地址：<a href=\\"https://github.com/Arch/UnitOfWork\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/Arch/UnitOfWork</a></p>\\n<h3>支持MySQL多库多表分片</h3>\\n<blockquote>\\n<p>在 MySQL 中，从物理上讲，模式与数据库同义。您可以在 MySQL SQL 语法中替换关键字 SCHEMA 而不是 DATABASE，例如使用 CREATE SCHEMA 而不是 CREATE DATABASE。其他一些数据库产品也有区别。例如，在 Oracle 数据库产品中，模式仅代表数据库的一部分：单个用户拥有的表和其他对象。</p>\\n</blockquote>","autoDesc":true}');export{k as comp,f as data};
