import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as d,c as o,e as l,w as n,a as e,b as m,d as t}from"./app-qB9_Bjjp.js";const u={},v=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言"},[e("span",null,"前言")])],-1),b=e("p",null,"可以直接通过ADO.NET来操作数据库，一般为了方便起见，是搭配Dapper等进行操作的",-1),p=e("h2",{id:"查询操作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#查询操作"},[e("span",null,"查询操作")])],-1),g=e("div",{class:"language-c# line-numbers-mode","data-ext":"c#","data-title":"c#"},[e("pre",{class:"language-c#"},[e("code",null,`var sql = "select * from user";
var connection = new MySqlConnection("连接字符串");

if (connection.State != ConnectionState.Open)
    await connection.OpenAsync();

using var cmd = connection.CreateCommand();
cmd.CommandText = sql;
using var reader = await cmd.ExecuteReaderAsync();
while (await reader.ReadAsync())
{
    Console.WriteLine($"id:{reader.GetInt64(0)} name:{reader.GetString(1)}");
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-c# line-numbers-mode","data-ext":"c#","data-title":"c#"},[e("pre",{class:"language-c#"},[e("code",null,`var sql = "select * from user";
var connection = new NpgsqlConnection(connStr);

if (connection.State != ConnectionState.Open)
    await connection.OpenAsync();

using var cmd = connection.CreateCommand();
cmd.CommandText = sql;
using var reader = await cmd.ExecuteReaderAsync();
while (await reader.ReadAsync())
{
    Console.WriteLine($"id:{reader.GetInt64(0)} name:{reader.GetString(1)}");
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-c# line-numbers-mode","data-ext":"c#","data-title":"c#"},[e("pre",{class:"language-c#"},[e("code",null,`string ConnectionString = "Data Source=DESKTOP-63QE7M1; Database=CustomerDB; User ID=sa; Password=sa123; MultipleActiveResultSets=True";
Type type = typeof(Employee);
var propList = type.GetProperties().Select(p => $"[{p.Name}]");
string props = string.Join(',', propList);
string tableName = type.Name;
string StringSql = $"select {props} from [{tableName}] where id=" + id;
object oInstance = Activator.CreateInstance(type);
using (SqlConnection connection = new SqlConnection(ConnectionString))
{
    connection.Open();
    SqlCommand sqlCommand = new SqlCommand(StringSql, connection);
    SqlDataReader reader = sqlCommand.ExecuteReader();
    reader.Read();
    foreach (var prop in type.GetProperties())
    {
        prop.SetValue(oInstance, reader[prop.Name]);
    }
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=m(`<p>执行查询返回列表</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var sql = &quot;select * from user&quot;;
var connection = new MySqlConnection(&quot;连接字符串&quot;);
if (connection.State != ConnectionState.Open)
    await connection.OpenAsync();

using var cmd = connection.CreateCommand();
cmd.CommandText = strSql;
using var reader = await cmd.ExecuteReaderAsync();
var list = ReadEntityListByReader&lt;Employee&gt;(reader);

/// &lt;summary&gt;
/// Read entity list by reader
/// &lt;/summary&gt;
/// &lt;typeparam name=&quot;T&quot;&gt;entity&lt;/typeparam&gt;
/// &lt;param name=&quot;reader&quot;&gt;data reader&lt;/param&gt;
/// &lt;returns&gt;entity&lt;/returns&gt;
private static List&lt;T&gt; ReadEntityListByReader&lt;T&gt;(DbDataReader reader) where T : new()
{
    List&lt;T&gt; listT = new List&lt;T&gt;();
    using (reader)
    {
        while (reader.Read())
        {
            T inst = new T();
            foreach (var pi in typeof(T).GetProperties(BindingFlags.Instance | BindingFlags.Public))
            {
                var obj = new object();
                try
                {
                    obj = reader[pi.Name];
                }
                catch (Exception ex)
                {
                    continue;
                }
                if (obj == DBNull.Value || obj == null)
                    continue;
                var si = pi.GetSetMethod();
                if (si == null)
                    continue;
                pi.SetValue(inst, obj, null);
            }
            listT.Add(inst);
        }
    }
    return listT;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行操作" tabindex="-1"><a class="header-anchor" href="#执行操作"><span>执行操作</span></a></h2>`,3),T=e("div",{class:"language-c# line-numbers-mode","data-ext":"c#","data-title":"c#"},[e("pre",{class:"language-c#"},[e("code",null,`// 下面代码虽然加了事务，但是如果脚本里面包含DDL语句，那么事务是回滚不了的，设置其他添加、修改的操作也会导致回滚不了
// 所以业务中如果涉及到创建表且初始化数据的操作，需要分成两个文件添加事务，这样子那个添加修改数据的那个文件如果遇到了报错还可以回滚

var connection = new MySqlConnection("连接字符串");
if (connection.State != ConnectionState.Open)
    await connection.OpenAsync();
await using var tran = await connection.BeginTransactionAsync();
try
{
    var cmd = connection.CreateCommand();
    cmd.CommandText = mysqlSql; // sql字符串 这里还可以进行参数化操作，此处未演示
    cmd.Transaction = tran;
    var i = await cmd.ExecuteNonQueryAsync();
    await tran.CommitAsync();
}
catch (Exception ex)
{
    await Console.Out.WriteLineAsync("出错 回滚");
    await tran.RollbackAsync();
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-c# line-numbers-mode","data-ext":"c#","data-title":"c#"},[e("pre",{class:"language-c#"},[e("code",null,`// pgsql的事务可以回滚包含DDL语句的内容

var connection = new NpgsqlConnection("连接字符串");
if (connection.State != ConnectionState.Open)
    await connection.OpenAsync();
await using var tran = await connection.BeginTransactionAsync();
try
{
    var cmd = connection.CreateCommand();
    cmd.CommandText = sqlStr; // sql字符串 这里还可以进行参数化操作，此处未演示
    cmd.Transaction = tran;
    var i = await cmd.ExecuteNonQueryAsync();
    await tran.CommitAsync();
}
catch (Exception ex)
{
    await Console.Out.WriteLineAsync("出错 回滚");
    await tran.RollbackAsync();
}
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function S(q,A){const s=c("CodeTabs");return d(),o("div",null,[v,b,p,l(s,{id:"9",data:[{id:"MySQL"},{id:"Pgsql"},{id:"sqlserver"}],"tab-id":"c"},{title0:n(({value:i,isActive:a})=>[t("MySQL")]),title1:n(({value:i,isActive:a})=>[t("Pgsql")]),title2:n(({value:i,isActive:a})=>[t("sqlserver")]),tab0:n(({value:i,isActive:a})=>[g]),tab1:n(({value:i,isActive:a})=>[y]),tab2:n(({value:i,isActive:a})=>[h]),_:1}),C,l(s,{id:"27",data:[{id:"MySQL"},{id:"Pgsql"}]},{title0:n(({value:i,isActive:a})=>[t("MySQL")]),title1:n(({value:i,isActive:a})=>[t("Pgsql")]),tab0:n(({value:i,isActive:a})=>[T]),tab1:n(({value:i,isActive:a})=>[w]),_:1})])}const f=r(u,[["render",S],["__file","operation.html.vue"]]),N=JSON.parse('{"path":"/orm/adoNet/operation.html","title":"操作","lang":"zh-CN","frontmatter":{"title":"操作","lang":"zh-CN","date":"2023-10-09T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["orm"],"tag":["adonet"],"filename":"operation.md","description":"前言 可以直接通过ADO.NET来操作数据库，一般为了方便起见，是搭配Dapper等进行操作的 查询操作 执行查询返回列表 执行操作","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/orm/adoNet/operation.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"操作"}],["meta",{"property":"og:description","content":"前言 可以直接通过ADO.NET来操作数据库，一般为了方便起见，是搭配Dapper等进行操作的 查询操作 执行查询返回列表 执行操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-09T14:51:30.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"adonet"}],["meta",{"property":"article:published_time","content":"2023-10-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-09T14:51:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-09T14:51:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"查询操作","slug":"查询操作","link":"#查询操作","children":[]},{"level":2,"title":"执行操作","slug":"执行操作","link":"#执行操作","children":[]}],"git":{"createdTime":1696863090000,"updatedTime":1696863090000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.12,"words":635},"filePathRelative":"orm/adoNet/operation.md","localizedDate":"2023年10月9日","excerpt":"<h2>前言</h2>\\n<p>可以直接通过ADO.NET来操作数据库，一般为了方便起见，是搭配Dapper等进行操作的</p>\\n<h2>查询操作</h2>\\n\\n<p>执行查询返回列表</p>\\n<div class=\\"language-c#\\" data-ext=\\"c#\\" data-title=\\"c#\\"><pre class=\\"language-c#\\"><code>var sql = \\"select * from user\\";\\nvar connection = new MySqlConnection(\\"连接字符串\\");\\nif (connection.State != ConnectionState.Open)\\n    await connection.OpenAsync();\\n\\nusing var cmd = connection.CreateCommand();\\ncmd.CommandText = strSql;\\nusing var reader = await cmd.ExecuteReaderAsync();\\nvar list = ReadEntityListByReader&lt;Employee&gt;(reader);\\n\\n/// &lt;summary&gt;\\n/// Read entity list by reader\\n/// &lt;/summary&gt;\\n/// &lt;typeparam name=\\"T\\"&gt;entity&lt;/typeparam&gt;\\n/// &lt;param name=\\"reader\\"&gt;data reader&lt;/param&gt;\\n/// &lt;returns&gt;entity&lt;/returns&gt;\\nprivate static List&lt;T&gt; ReadEntityListByReader&lt;T&gt;(DbDataReader reader) where T : new()\\n{\\n    List&lt;T&gt; listT = new List&lt;T&gt;();\\n    using (reader)\\n    {\\n        while (reader.Read())\\n        {\\n            T inst = new T();\\n            foreach (var pi in typeof(T).GetProperties(BindingFlags.Instance | BindingFlags.Public))\\n            {\\n                var obj = new object();\\n                try\\n                {\\n                    obj = reader[pi.Name];\\n                }\\n                catch (Exception ex)\\n                {\\n                    continue;\\n                }\\n                if (obj == DBNull.Value || obj == null)\\n                    continue;\\n                var si = pi.GetSetMethod();\\n                if (si == null)\\n                    continue;\\n                pi.SetValue(inst, obj, null);\\n            }\\n            listT.Add(inst);\\n        }\\n    }\\n    return listT;\\n}\\n</code></pre></div>","autoDesc":true}');export{f as comp,N as data};
