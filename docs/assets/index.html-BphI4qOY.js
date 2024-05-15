import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o,c as m,b as n,e as i,f as l,w as e,d as t}from"./app-CBxp4zeL.js";const v={},p=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p><em>Dapper</em>是一款轻量级ORM<em>框架</em>,为解决网站访问流量极高而产生的性能问题而构造,主要通过执行TSQL表达式而实现数据库的CQRS。</p><h2 id="连接字符串" tabindex="-1"><a class="header-anchor" href="#连接字符串"><span>连接字符串</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>MySQL：
Server=47.xxxx;database=gxgtest;uid=gxg;pwd=123456;charset=utf8;

SQL server
Data Source=.;Initial Catalog=Test;User ID=sa;Password=123456

pgsql
Host=localhost;Username=postgres;Password=123456;Database=consoletest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2>`,5),b={href:"https://github.com/StackExchange/Dapper",target:"_blank",rel:"noopener noreferrer"},g=t(`<h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询"><span>查询</span></a></h3><p>使用dapper可以使用更少的代码，且dapper为我们处理打开连接和关闭连接</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 查询映射</span>
<span class="token class-name"><span class="token keyword">var</span></span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SqlConnection</span><span class="token punctuation">(</span><span class="token string">&quot;Data Source=.;Initial Catalog=Test;User ID=sa;Password=123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from Users where Email=@email&quot;</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> info <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Query</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Users<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> email <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 执行sql并且使用dynamic来接收</span>
<span class="token class-name"><span class="token keyword">var</span></span> rowData <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">QueryAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> data <span class="token operator">=</span> rowData<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>s <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DocumentGeneration</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> s<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行操作" tabindex="-1"><a class="header-anchor" href="#执行操作"><span>执行操作</span></a></h3><p>ADO.NET搭配Dapper操作</p>`,5),y=n("div",{class:"language-c# line-numbers-mode","data-ext":"c#","data-title":"c#"},[n("pre",{class:"language-c#"},[n("code",null,`var sql = "select * from user";
var connection = new MySqlConnection(connStr);

if (connection.State != ConnectionState.Open)
    await connection.OpenAsync();

await using var tran = await connection.BeginTransactionAsync(IsolationLevel.Serializable);
try
{
    // 测试结果
    // 1.如果sql中包含创建表等语句，遇到报错的情况，无法回滚创建表的语句以及报错sql之前的插入语句
    // 2.如果sql中没有创建表的语句，遇到报错的情况可以正常回滚(包含已经插入的数据)
    var i = await connection.ExecuteAsync(mysqlSql, transaction: tran);
    await tran.CommitAsync();
    Console.WriteLine(i);
}
catch (Exception)
{
    await tran.RollbackAsync();
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-c# line-numbers-mode","data-ext":"c#","data-title":"c#"},[n("pre",{class:"language-c#"},[n("code",null,`// 包含创建表的sql  以及两个添加sql  一个正确 一个报错的
var mysqlSql =
@"INSERT INTO sample.menus (id, name, create_time, modify_time) VALUES (default, '张飒22222222', '2023-10-08 17:26:45.000000', '2023-10-08 17:26:47.000000');
create table sample.test_tran(id integer);INSERT INTO sample.menus (id, name, create_time, modify_time) VALUES (default, '张飒333333', '2xxxx000', '2023-10-08 17:26:47.000000');";

var connection = new NpgsqlConnection(connStr);

if (connection.State != ConnectionState.Open)
    await connection.OpenAsync();

await using var tran = await connection.BeginTransactionAsync();
try
{
    // 正常操作回滚 没有mysql的那个问题
    var i = await connection.ExecuteAsync(mysqlSql);
    await tran.CommitAsync();
    Console.WriteLine(i);
}
catch (Exception exception)
{
    Console.WriteLine(exception.Message);
    await tran.RollbackAsync();
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("p",null,"EFCore搭配Dapper操作",-1),q=n("div",{class:"language-c# line-numbers-mode","data-ext":"c#","data-title":"c#"},[n("pre",{class:"language-c#"},[n("code",null,`var mysqlSql =
    @"INSERT INTO test.menus (id, name, create_time, modify_time) VALUES (default, '张飒22222222', '2023-10-08 17:26:45.000000', '2023-10-08 17:26:47.000000');CREATE TABLE IF NOT EXISTS \`a111\` (
\`MigrationId\` varchar(150) CHARACTER SET utf8mb4 NOT NULL,
\`ProductVersion\` varchar(32) CHARACTER SET utf8mb4 NOT NULL
) CHARACTER SET=utf8mb4;
INSERT INTO test.menus (id, name, create_time, modify_time) VALUES (default, '张飒333333', '2xxxx000', '2023-10-08 17:26:47.000000');";


await using var db = new OpenDbContext();
await using var connection = db.Database.GetDbConnection();
if (connection.State != ConnectionState.Open)
    await connection.OpenAsync();

await using var tran = await db.Database.BeginTransactionAsync();

// 因为脚本问题所以执行不成功 但是因为包含事务，所以也不会出现一条插入到数据库中(这是里面不包含创建表语句的前提下)
// 测试结果  ef中创建表语句不能通过事务回滚，ddl操作不支持事务性
// 1、如果包含创建表的sql且创建表之前的sql没有报错，那么表可以创建成功，并且正常的插入sql也会被执行，一直到遇到错误sql停止
// 2、如果不包含创建表sql，那么sql要成功都成功，否则都失败
var i = await connection.ExecuteAsync(mysqlSql, transaction: tran.GetDbTransaction());
await tran.CommitAsync();
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-c# line-numbers-mode","data-ext":"c#","data-title":"c#"},[n("pre",{class:"language-c#"},[n("code",null,`var mysqlSql =
@"INSERT INTO sample.menus (id, name, create_time, modify_time) VALUES (default, '张飒22222222', '2023-10-08 17:26:45.000000', '2023-10-08 17:26:47.000000');
create table sample.test_tran(id integer);INSERT INTO sample.menus (id, name, create_time, modify_time) VALUES (default, '张飒333333', '2xxxx000', '2023-10-08 17:26:47.000000');";

await using var db = new OpenDbContext();
await using var connection = db.Database.GetDbConnection();
if (connection.State != ConnectionState.Open)
    await connection.OpenAsync();

await using var tran = await db.Database.BeginTransactionAsync();

// 正常操作 就算脚本中包含ddl语句，也可以回滚
var i = await connection.ExecuteAsync(mysqlSql);
await tran.CommitAsync();
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=t(`<h3 id="自定义模型映射" tabindex="-1"><a class="header-anchor" href="#自定义模型映射"><span>自定义模型映射</span></a></h3><p>当遇到数据库中表的列和模型中列不一致的情况，导致dapper查询映射失败，所以就需要做一些操作了</p><h4 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一"><span>方案一</span></a></h4><p>将查询的列做别名转换</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var sql = @&quot;select top 1 person_id PersonId, first_name FirstName, last_name LastName from Person&quot;;
using (var conn = ConnectionFactory.GetConnection())
{
    var person = conn.Query&lt;Person&gt;(sql).ToList();
    return person;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方案二" tabindex="-1"><a class="header-anchor" href="#方案二"><span>方案二</span></a></h4><p>使用 <em>ColumnAttribute</em> 属性</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
/// 用户信息
/// &lt;/summary&gt;
public class UserInfo
{
    /// &lt;summary&gt;
    /// ID
    /// &lt;/summary&gt;
    public string Id { get; set; }

    /// &lt;summary&gt;
    /// 姓名
    /// &lt;/summary&gt;
    [Column(&quot;user_name&quot;)]
    public string UserName { get; set; }

    /// &lt;summary&gt;
    /// 状态
    /// &lt;/summary&gt;
    public int Status { get; set; }

    /// &lt;summary&gt;
    /// 是否禁用
    /// &lt;/summary&gt;
   	[Column(&quot;is_disabled&quot;)]
    public string IsDisabled { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方案三" tabindex="-1"><a class="header-anchor" href="#方案三"><span>方案三</span></a></h4><p>使用 <em>CustomPropertyTypeMap</em> 自定义属性类型映射类，如：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public static class DapperMapperConfigs
{
    /// &lt;summary&gt;
    /// dapper映射配置
    /// &lt;/summary&gt;
    public static void Init()
    {
        var userColMap = new ColumnMap();
        userColMap.Add(&quot;pass_word&quot;, nameof(UserInfo.PassWord));
        userColMap.Add(&quot;create_time&quot;, nameof(UserInfo.CreateTime));
        userColMap.Add(&quot;credit&quot;, nameof(UserInfo.Integral));
        userColMap.Add(&quot;id&quot;, nameof(UserInfo.Id));
        userColMap.Add(&quot;account&quot;, nameof(UserInfo.Account));

        SqlMapper.SetTypeMap(typeof(UserInfo), new CustomPropertyTypeMap(typeof(UserInfo), (type, columnName) =&gt; type.GetProperty(userColMap[columnName])));
    }
}

/// &lt;summary&gt;
/// 列映射
/// &lt;/summary&gt;
public class ColumnMap
{
    /// &lt;summary&gt;
    /// 向前映射
    /// &lt;/summary&gt;
    private readonly Dictionary&lt;string, string&gt; forward = new Dictionary&lt;string, string&gt;();

    /// &lt;summary&gt;
    /// 向后映射
    /// &lt;/summary&gt;
    private readonly Dictionary&lt;string, string&gt; reverse = new Dictionary&lt;string, string&gt;();

    /// &lt;summary&gt;
    /// 添加映射的值(参数不区分是数据库列和代码列的先后关系)
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;t1&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;t2&quot;&gt;&lt;/param&gt;
    public void Add(string t1, string t2)
    {
        forward.Add(t1, t2);
        reverse.Add(t2, t1);
    }

    public string this[string index]
    {
        get
        {
            // Check for a custom column map.
            if (forward.ContainsKey(index))
                return forward[index];
            if (reverse.ContainsKey(index))
                return reverse[index];

            // If no custom mapping exists, return the value passed in.
            return index;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>还可以基于该方法扩展一下，比如我们的数据库列是代码中的模型类列的蛇形命名，那么我们可以这么处理</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>// 在查询之前自定义映射一下模型类的列和数据库的列
DapperHelper.SnakeCaseTypeMap&lt;UserInfo&gt;();

// 开始执行sql查询数据库
const string str = &quot;select * from user_test.user_info&quot;;
var dapper = GetDapperRepository();
var result = await dapper.QueryAsync&lt;UserInfo&gt;(str);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里方法SnakeCaseTypeMap的写法如下，其中大致逻辑就是，将模型类的列转小写存储，然后在数据库的列查询模型属性的时候，将其去除下划线，然后转小写查询</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
/// dapper帮助类
/// &lt;/summary&gt;
public static class DapperHelper
{
    /// &lt;summary&gt;
    /// 蛇形命名映射
    /// &lt;/summary&gt;
    /// &lt;typeparam name=&quot;T&quot;&gt;&lt;/typeparam&gt;
    public static void SnakeCaseTypeMap&lt;T&gt;()
    {
        var map = new ConcurrentDictionary&lt;string, string&gt;();
        var properties = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);
        foreach (var property in properties)
        {
            var name = property.Name;

            // 将实体类的列转小写后作为key 然后原始列作为value
            map[name.ToLowerInvariant()] = property.Name;
        }

        SqlMapper.SetTypeMap(typeof(T),
            new CustomPropertyTypeMap(typeof(T), (type, dataBaseColumn) =&gt;
            {
                // 根据数据库的列转换为实体类的列
                var name = dataBaseColumn.Replace(&quot;_&quot;, &quot;&quot;);
                return map.TryGetValue(name, out var value)
                    ? type.GetProperty(value)
                    : type.GetProperty(dataBaseColumn);
            }));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方案四" tabindex="-1"><a class="header-anchor" href="#方案四"><span>方案四</span></a></h4><p>查询的时候返回dynamic，然后使用linq的select枚举</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var sql = @&quot;select top 1 person_id, first_name, last_name from Person&quot;;
using (var conn = ConnectionFactory.GetConnection())
{
    List&lt;Person&gt; person = conn.Query&lt;dynamic&gt;(sql)
                              .Select(item =&gt; new Person()
                              {
                                  PersonId = item.person_id,
                                  FirstName = item.first_name,
                                  LastName = item.last_name
                              }
                              .ToList();

    return person;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dateonly-和-timeonly-支持" tabindex="-1"><a class="header-anchor" href="#dateonly-和-timeonly-支持"><span>DateOnly 和 TimeOnly 支持</span></a></h3><p>Dapper 不支持 .NET 6.0 中的新 DateOnly 和 TimeOnly 类型。为了解决这个问题，创建了一个自定义类型处理程序。</p><p>为了支持 DateOnly 和 TimeOnly，提供了以下 SqlMapper.TypeHandle。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class DapperSqlDateOnlyTypeHandler : SqlMapper.TypeHandler&lt;DateOnly&gt;
{
    public override void SetValue(IDbDataParameter parameter, DateOnly date)
        =&gt; parameter.Value = date.ToDateTime(new TimeOnly(0, 0));

    public override DateOnly Parse(object value)
        =&gt; DateOnly.FromDateTime((DateTime)value);
}
public class SqlTimeOnlyTypeHandler : SqlMapper.TypeHandler&lt;TimeOnly&gt;
{
    public override void SetValue(IDbDataParameter parameter, TimeOnly time)
    {
        parameter.Value = time.ToString();
    }

    public override TimeOnly Parse(object value) =&gt; TimeOnly.FromTimeSpan((TimeSpan)value);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function x(S,w){const c=d("ExternalLinkIcon"),r=d("CodeTabs");return o(),m("div",null,[p,n("p",null,[i("1.使用nuget下载drapper，这种方法不能调试，但是也可以获取数据 2.直接下载源码，地址："),n("a",b,[i("https://github.com/StackExchange/Dapper"),l(c)])]),g,l(r,{id:"29",data:[{id:"mysql"},{id:"pgsql"}]},{title0:e(({value:a,isActive:s})=>[i("mysql")]),title1:e(({value:a,isActive:s})=>[i("pgsql")]),tab0:e(({value:a,isActive:s})=>[y]),tab1:e(({value:a,isActive:s})=>[h]),_:1}),k,l(r,{id:"40",data:[{id:"mysql"},{id:"pgsql"}]},{title0:e(({value:a,isActive:s})=>[i("mysql")]),title1:e(({value:a,isActive:s})=>[i("pgsql")]),tab0:e(({value:a,isActive:s})=>[q]),tab1:e(({value:a,isActive:s})=>[f]),_:1}),T])}const D=u(v,[["render",x],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/orm/dapper/","title":"说明","lang":"zh-CN","frontmatter":{"title":"说明","lang":"zh-CN","date":"2023-07-15T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["orm"],"tag":["无"],"filename":"readme","slug":"ecy6a9","docsId":"32068947","description":"概述 Dapper是一款轻量级ORM框架,为解决网站访问流量极高而产生的性能问题而构造,主要通过执行TSQL表达式而实现数据库的CQRS。 连接字符串 操作 1.使用nuget下载drapper，这种方法不能调试，但是也可以获取数据 2.直接下载源码，地址：https://github.com/StackExchange/Dapper 查询 使用dap...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/orm/dapper/"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"说明"}],["meta",{"property":"og:description","content":"概述 Dapper是一款轻量级ORM框架,为解决网站访问流量极高而产生的性能问题而构造,主要通过执行TSQL表达式而实现数据库的CQRS。 连接字符串 操作 1.使用nuget下载drapper，这种方法不能调试，但是也可以获取数据 2.直接下载源码，地址：https://github.com/StackExchange/Dapper 查询 使用dap..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-09T15:09:06.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-07-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-09T15:09:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说明\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-09T15:09:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"连接字符串","slug":"连接字符串","link":"#连接字符串","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"查询","slug":"查询","link":"#查询","children":[]},{"level":3,"title":"执行操作","slug":"执行操作","link":"#执行操作","children":[]},{"level":3,"title":"自定义模型映射","slug":"自定义模型映射","link":"#自定义模型映射","children":[{"level":4,"title":"方案一","slug":"方案一","link":"#方案一","children":[]},{"level":4,"title":"方案二","slug":"方案二","link":"#方案二","children":[]},{"level":4,"title":"方案三","slug":"方案三","link":"#方案三","children":[]},{"level":4,"title":"方案四","slug":"方案四","link":"#方案四","children":[]}]},{"level":3,"title":"DateOnly 和 TimeOnly 支持","slug":"dateonly-和-timeonly-支持","link":"#dateonly-和-timeonly-支持","children":[]}]}],"git":{"createdTime":1696863090000,"updatedTime":1709996946000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":6}]},"readingTime":{"minutes":5.68,"words":1705},"filePathRelative":"orm/dapper/readme.md","localizedDate":"2023年7月15日","excerpt":"<h2>概述</h2>\\n<p><em>Dapper</em>是一款轻量级ORM<em>框架</em>,为解决网站访问流量极高而产生的性能问题而构造,主要通过执行TSQL表达式而实现数据库的CQRS。</p>\\n<h2>连接字符串</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>MySQL：\\nServer=47.xxxx;database=gxgtest;uid=gxg;pwd=123456;charset=utf8;\\n\\nSQL server\\nData Source=.;Initial Catalog=Test;User ID=sa;Password=123456\\n\\npgsql\\nHost=localhost;Username=postgres;Password=123456;Database=consoletest\\n</code></pre></div>","autoDesc":true}');export{D as comp,A as data};
