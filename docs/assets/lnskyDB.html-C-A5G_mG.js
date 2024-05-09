import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as l,c as s,b as e,e as t,f as n,d}from"./app-D8HBJYTp.js";const o={},c=e("h2",{id:"概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述"},[e("span",null,"概述")])],-1),u=e("p",null,"LnskyDB是基于Dapper的Lambda扩展,支持按时间分库分表,也可以自定义分库分表方法.而且可以T4生成实体类免去手写实体类的烦恼.",-1),v={href:"https://liningit.github.io/Dapper.LnskyDB/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/liningit/Dapper.LnskyDB",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.nuget.org/packages/LnskyDB/",target:"_blank",rel:"noopener noreferrer"},y=d(`<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="_1-使用配置" tabindex="-1"><a class="header-anchor" href="#_1-使用配置"><span>1. 使用配置</span></a></h3><p>在Startup.cs的<code>ConfigureServices</code>中添加<code>services.AddLnskyDB();</code>在<code>Configure</code>中添加<code>app.UseLnskyDB();</code></p><h3 id="_2-仓储的创建" tabindex="-1"><a class="header-anchor" href="#_2-仓储的创建"><span>2. 仓储的创建</span></a></h3><p>仓储的创建有两种方式一种是通过<code>RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;()</code>创建<code>IRepository&lt;ProductSaleByDayEntity&gt;</code> 还有一种是创建一个仓储类继承<code>Repository&lt;ProductSaleByDayEntity&gt;</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface IProductSaleByDayRepository : IRepository&lt;ProductSaleByDayEntity&gt;
{
}
public class ProductSaleByDayRepository : Repository&lt;ProductSaleByDayEntity&gt;
{
}
//调用的地方可以
IProductSaleByDayRepository repository=new ProductSaleByDayRepository();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-查询" tabindex="-1"><a class="header-anchor" href="#_3-查询"><span>3. 查询</span></a></h3><p>3.1 根据主键查询</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var repository = RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;();
var entity = repository.Get(new ProductSaleByDayEntity
{
    DBModel_ShuffledTempDate = new DateTime(2019, 01, 01),//这儿表示差19年1月的库和表
    SysNo = sysNo
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.2 根据where条件查询</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var stTime = new DateTime(2019, 1, 15);
var endTime = new DateTime(2019, 2, 11);
var repository = RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;();
var query = QueryFactory.Create&lt;ProductSaleByDayEntity&gt;(m =&gt; m.ShopName.Contains(&quot;测试&quot;));
query.And(m =&gt; m.StatisticalDate &gt;= stTime);
query.And(m =&gt; m.StatisticalDate &lt; endTime.Date.AddDays(1));
query.OrderByDescing(m =&gt; m.StatisticalDate);//如果是查多个库表必须按分库分表的字段降序排列
query.StarSize = 20; //可以设置查询行数及开始行数
query.Rows = 10;
//分库的传入stTime,endTime会自动根据时间查询符合条件的库和表
var lst = repository.GetList(query, stTime, endTime);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果可以确定统计时间也可以查指定的库表进行单表查询</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var stTime = new DateTime(2019, 1, 15);
var endTime = new DateTime(2019, 1, 18);
var repository = RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;();
var query = QueryFactory.Create&lt;ProductSaleByDayEntity&gt;(m =&gt; m.ShopName.Contains(&quot;测试&quot;));
query.And(m =&gt; m.StatisticalDate &gt;= stTime);
query.And(m =&gt; m.StatisticalDate &lt; endTime.Date.AddDays(1));
query.DBModel.DBModel_ShuffledTempDate = new DateTime(2019, 01, 01);//这儿表示查19年1月的库和表
query.OrderByDescing(m =&gt; m.StatisticalDate);//单表查询可以随意排序
query.StarSize = 20;
query.Rows = 10;
var lst= repository.GetList(query);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.3 分页查询</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var stTime = new DateTime(2019, 1, 15);
var endTime = new DateTime(2019, 2, 11);
var repository = RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;();
var query = QueryFactory.Create&lt;ProductSaleByDayEntity&gt;(m =&gt; m.ShopName.Contains(&quot;测试&quot;));
query.And(m =&gt; m.StatisticalDate &gt;= stTime);
query.And(m =&gt; m.StatisticalDate &lt; endTime.Date.AddDays(1));
query.OrderByDescing(m =&gt; m.StatisticalDate);//如果是查多个库表必须按分库分表的字段降序排列
query.StarSize = 20;
query.Rows = 10;
//分库的传入stTime,endTime会自动根据时间查询符合条件的库和表
var paging = repository.GetPaging(query, stTime, endTime);
var count = paging.TotalCount;
var lst = paging.ToList();//或者paging.Items
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果可以确定统计时间也可以查指定的库表</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var stTime = new DateTime(2019, 1, 15);
var endTime = new DateTime(2019, 1, 18);
var repository = RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;();
var query = QueryFactory.Create&lt;ProductSaleByDayEntity&gt;(m =&gt; m.ShopName.Contains(&quot;测试&quot;));
query.And(m =&gt; m.StatisticalDate &gt;= stTime);
query.And(m =&gt; m.StatisticalDate &lt; endTime.Date.AddDays(1));
query.DBModel.DBModel_ShuffledTempDate = new DateTime(2019, 01, 01);//这儿表示查19年1月的库和表
query.OrderByDescing(m =&gt; m.StatisticalDate);//单表查询可以随意排序
query.StarSize = 20;
query.Rows = 10;
var paging= repository.GetPaging(query);
var count = paging.TotalCount;
var lst = paging.ToList();//或者paging.Items
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-添加" tabindex="-1"><a class="header-anchor" href="#_4-添加"><span>4. 添加</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var addEntity = new ProductSaleByDayEntity()
{
    SysNo = Guid.NewGuid(),
    DataSource = &quot;测试来源&quot;,
    ProductID = Guid.NewGuid(),               
    ShopID = Guid.NewGuid(),
    ShopName = &quot;测试店铺&quot;,
    ProductName = &quot;测试商品&quot;,
    OutProductID = Guid.NewGuid().ToString(),
    ImportGroupId = Guid.NewGuid(),
    StatisticalDate = DateTime.Now//分库分表字段是必须的
};
var repository = RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;();
//如果新增主键是自增列会自动赋值自增列值到主键
repository.Add(addEntity);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-更新" tabindex="-1"><a class="header-anchor" href="#_5-更新"><span>5. 更新</span></a></h3><p>5.1 根据主键更新</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var updateEntity = new ProductSaleByDayEntity()
{
    SysNo = Guid.Parse(&quot;650BC09C-2B9C-467B-A457-8B4853CC1F0F&quot;),
    DataSource = &quot;测试来源修改&quot;,
    ShopName = &quot;店铺修改&quot;,
    StatisticalDate = new DateTime(2019,01,05),//如果StatisticalDate赋值了则根据StatisticalDate找库表,然后根据主键更新,StatisticalDate也会被更新成所赋的值
    //如果不想更新StatisticalDate可以用下面这句话
    // DBModel_ShuffledTempDate=new DateTime(2019,01,05),//如果不想更新StatisticalDate字段则用这句话来确定是那个库及表
};
var repository = RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;();
//根据主键更新其他字段
return repository.Update(updateEntity);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.2 根据where条件更新</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var updateEntity = new ProductSaleByDayEntity()
{
    DataSource = &quot;测试来源修改&quot;,
    ShopName = &quot;店铺修改Where&quot;,
    DBModel_ShuffledTempDate = new DateTime(2019, 01, 05),//如果用这句话来确定是那个库表
    // StatisticalDate = statisticalDate,//如果要更新StatisticalDate则可以用这句话替代上面那句话
};
var repository = RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;();
var where = QueryFactory.Create&lt;ProductSaleByDayEntity&gt;(m =&gt; m.ShopName == &quot;测试店铺1&quot; &amp;&amp; m.StatisticalDate &gt; new DateTime(2019, 01, 03));//where是更新条件
//注意如果是更新用的是实体类的DBModel_ShuffledTempDate Query中的无效
return repository.Update(updateEntity, where);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-删除" tabindex="-1"><a class="header-anchor" href="#_6-删除"><span>6. 删除</span></a></h3><p>6.1 根据主键删除</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var deleteEntity = new ProductSaleByDayEntity()
{
    SysNo = Guid.Parse(&quot;650BC09C-2B9C-467B-A457-8B4853CC1F0F&quot;),
    DBModel_ShuffledTempDate = new DateTime(2019, 01, 05),//对于分库分表来说DBModel_ShuffledTempDate是必须的用来确认是那个库表
};
var repository = RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;();
return repository.Delete(deleteEntity);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.2 根据where条件删除</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var repository = RepositoryFactory.Create&lt;ProductSaleByDayEntity&gt;();
var where = QueryFactory.Create&lt;ProductSaleByDayEntity&gt;();
where.DBModel.DBModel_ShuffledTempDate = new DateTime(2019, 01, 01);
//QueryiSearch方法表示搜索里面空格表示或+表示且
//如 导入+手工 自动+生成 表示字段必须同时拥有导入和手工或者自动和生成
//生成sql是 and ((DataSource like &#39;%导入%&#39; and DataSource like &#39;%手工%&#39;) or DataSource like &#39;%自动%&#39; and DataSource like &#39;%生成%&#39;)            
where.QueryiSearch(m =&gt; m.DataSource, &quot;新+更&quot;);
where.QueryiSearch(m =&gt; m.ShopName, &quot;批量修改&quot;);
//注意如果是更新用的是实体类的DBModel_ShuffledTempDate Query中的无效
return repository.Delete(where);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-多线程处理" tabindex="-1"><a class="header-anchor" href="#_7-多线程处理"><span>7. 多线程处理</span></a></h3><p>对于mvc每次请求都会在请求结束时将数据库连接关闭,如果是新建线程则需要在线程开始调用<code>DBTool.BeginThread();</code> 并且在线程结束为止调用<code>DBTool.CloseConnections();</code>关闭连接</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class ThreadTool
{
    public static void QueueUserWorkItem(Action action)
    {
        ThreadPool.QueueUserWorkItem(delegate
        {
            DBTool.BeginThread();
            try
            {
                action();
            }
            finally
            {
                DBTool.CloseConnections();
            }
        });
    }
}
ThreadTool.QueueUserWorkItem(ThreadDo);//调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-实体类t4自动生成" tabindex="-1"><a class="header-anchor" href="#_8-实体类t4自动生成"><span>8. 实体类T4自动生成</span></a></h3>`,33),b={href:"https://github.com/liningit/LnskyDB/tree/master/src/LnskyDB.Demo/T4",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"DbHelper.ttinclude",-1),h=e("h2",{id:"参考文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文档"},[e("span",null,"参考文档")])],-1),D={href:"https://www.cnblogs.com/liningit/p/14792898.html",target:"_blank",rel:"noopener noreferrer"};function S(B,T){const i=r("ExternalLinkIcon");return l(),s("div",null,[c,u,e("blockquote",null,[e("p",null,[t("文档地址: "),e("a",v,[t("https://liningit.github.io/Dapper.LnskyDB/"),n(i)]),t(" 开源地址: "),e("a",m,[t("https://github.com/liningit/Dapper.LnskyDB"),n(i)]),t(" nuget地址: "),e("a",p,[t("https://www.nuget.org/packages/LnskyDB/"),n(i)])])]),y,e("p",null,[t("在"),e("a",b,[t("LnskyDB.Demo\\T4"),n(i)]),t("中有可以自动生成实体类的T4模版. 其中DbHelper.ttinclude中的Config是配置数据库的 Entity.tt是生成实体的T4模版.大家可以根据自己的情况修改 我们项目是表的命名规则是 :非分库分表的:模块_表名 分库分表:模块_表名_月份 所以T4也是根据这个规则生成的.大家如果不一样的话可以根据自己的情况修改"),g,t("文件")]),h,e("blockquote",null,[e("p",null,[e("a",D,[t("https://www.cnblogs.com/liningit/p/14792898.html"),n(i)])])])])}const k=a(o,[["render",S],["__file","lnskyDB.html.vue"]]),q=JSON.parse('{"path":"/orm/dapper/splitDbTable/lnskyDB.html","title":"Dapper扩展LnskyDB","lang":"zh-CN","frontmatter":{"title":"Dapper扩展LnskyDB","lang":"zh-CN","date":"2022-12-10T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["orm"],"tag":["无"],"filename":"dapperkuozhanlnskydb","slug":"ii5iot","docsId":"46045154","description":"概述 LnskyDB是基于Dapper的Lambda扩展,支持按时间分库分表,也可以自定义分库分表方法.而且可以T4生成实体类免去手写实体类的烦恼. 文档地址: https://liningit.github.io/Dapper.LnskyDB/ 开源地址: https://github.com/liningit/Dapper.LnskyDB nuge...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/orm/dapper/splitDbTable/lnskyDB.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Dapper扩展LnskyDB"}],["meta",{"property":"og:description","content":"概述 LnskyDB是基于Dapper的Lambda扩展,支持按时间分库分表,也可以自定义分库分表方法.而且可以T4生成实体类免去手写实体类的烦恼. 文档地址: https://liningit.github.io/Dapper.LnskyDB/ 开源地址: https://github.com/liningit/Dapper.LnskyDB nuge..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-09T15:09:06.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-12-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-09T15:09:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dapper扩展LnskyDB\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-09T15:09:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"1. 使用配置","slug":"_1-使用配置","link":"#_1-使用配置","children":[]},{"level":3,"title":"2. 仓储的创建","slug":"_2-仓储的创建","link":"#_2-仓储的创建","children":[]},{"level":3,"title":"3. 查询","slug":"_3-查询","link":"#_3-查询","children":[]},{"level":3,"title":"4. 添加","slug":"_4-添加","link":"#_4-添加","children":[]},{"level":3,"title":"5. 更新","slug":"_5-更新","link":"#_5-更新","children":[]},{"level":3,"title":"6. 删除","slug":"_6-删除","link":"#_6-删除","children":[]},{"level":3,"title":"7. 多线程处理","slug":"_7-多线程处理","link":"#_7-多线程处理","children":[]},{"level":3,"title":"8. 实体类T4自动生成","slug":"_8-实体类t4自动生成","link":"#_8-实体类t4自动生成","children":[]}]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1690042937000,"updatedTime":1709996946000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":4.74,"words":1423},"filePathRelative":"orm/dapper/splitDbTable/lnskyDB.md","localizedDate":"2022年12月10日","excerpt":"<h2>概述</h2>\\n<p>LnskyDB是基于Dapper的Lambda扩展,支持按时间分库分表,也可以自定义分库分表方法.而且可以T4生成实体类免去手写实体类的烦恼.</p>\\n<blockquote>\\n<p>文档地址: <a href=\\"https://liningit.github.io/Dapper.LnskyDB/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://liningit.github.io/Dapper.LnskyDB/</a>\\n开源地址: <a href=\\"https://github.com/liningit/Dapper.LnskyDB\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/liningit/Dapper.LnskyDB</a>\\nnuget地址: <a href=\\"https://www.nuget.org/packages/LnskyDB/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.nuget.org/packages/LnskyDB/</a></p>\\n</blockquote>","autoDesc":true}');export{k as comp,q as data};
