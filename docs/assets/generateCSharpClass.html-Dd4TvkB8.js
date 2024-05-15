import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,d as t}from"./app-CBxp4zeL.js";const l={},a=t(`<h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h2><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class TableToolService
{
    private readonly NameToolService _nameToolService;

    public TableToolService()
    {
        _nameToolService = new NameToolService();
    }

    /// &lt;summary&gt;
    /// 获取建表语句
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;connectionStr&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public List&lt;string&gt; LoadCreateTableSql(string connectionStr)
    {
        using var conn = new MySqlConnection(connectionStr);
        var tableInfo = new List&lt;string&gt;();
        var tables = conn.Query&lt;string&gt;(&quot;SHOW TABLES&quot;).ToList();
        foreach (var table in tables)
        {
            var createTableStr = conn.QueryFirstOrDefault($&quot;SHOW CREATE TABLE {table}&quot;);
            if (createTableStr is null)
                continue;
            var createTable = JsonObject.Parse(JsonSerializer.Serialize(createTableStr))[&quot;Create Table&quot;].ToString();
            tableInfo.Add(createTable);
        }
        return tableInfo;
    }
    /// &lt;summary&gt;
    /// 将表转换成对应的实体类
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;createTableSql&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;context&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public (string table, string entityStr) TableToEntity(string createTableSql, string context = &quot;&quot;)
    {
        var sql = createTableSql;
        //获取建表语句中的所有字段
        var tableFields = sql.Substring(sql.IndexOf(&quot;(&quot;) + 1, sql.LastIndexOf(&quot;)&quot;) - sql.IndexOf(&quot;(&quot;)).TrimEnd(&#39;)&#39;)
            .TrimStart();
        //将列分隔
        var lines = tableFields.Split(new string[] { &quot;,\\r\\n&quot;, &quot;,\\n&quot; }, StringSplitOptions.RemoveEmptyEntries).Select(x =&gt; Regex.Replace(x, @&quot;\\r\\n?|\\n&quot;, string.Empty).Trim())
            .ToArray();
        lines = lines.Where(x =&gt; !x.StartsWith(&quot;KEY&quot;)).Where(x =&gt; !x.StartsWith(&quot;UNIQUE KEY&quot;)).ToArray();
        //找到主键列 
        var primaryField = lines.FirstOrDefault(x =&gt; x.StartsWith(&quot;PRIMARY&quot;, StringComparison.OrdinalIgnoreCase));
        //提取主键参数
        var keys = new List&lt;string&gt;();
        if (!string.IsNullOrEmpty(primaryField))
        {
            lines = lines.Where(x =&gt; !x.StartsWith(&quot;PRIMARY&quot;)).ToArray();
            var keyItems = primaryField.Substring(primaryField.IndexOf(&quot;(&quot;, StringComparison.Ordinal) + 1).TrimEnd(&#39;)&#39;)
                .TrimStart().Split(&#39;,&#39;);
            if (keyItems.Length &gt; 0)
            {
                keys.AddRange(keyItems.Select(x =&gt; x.Replace(&quot;\`&quot;, &quot;&quot;)));
            }
        }

        var entityStr = new List&lt;string&gt;();
        foreach (var line in lines)
        {
            var column = line.Trim();

            var parts = column.Split(&#39; &#39;).Select(x =&gt; x.Replace(&quot;\`&quot;, &quot;&quot;)).ToArray();

            var columnName = parts[0];

            //判断该字段是否为空
            var isNullable = !column.Contains(&quot;NOT NULL&quot;);

            var columnType = ConvertType(parts[1].ToLower());
            columnType += isNullable ? &quot;?&quot; : &quot;&quot;;


            var filedColumn = &quot;&quot;;
            if (keys.Contains(columnName))
            {
                if (keys.Count &gt; 1)
                {
                    var index = keys.IndexOf(columnName);
                    filedColumn = $&quot;\\t[Key,Column(\\&quot;{columnName}\\&quot;,Order={index + 1})]&quot;;
                }
                else
                {
                    filedColumn = $&quot;\\t[Key,Column(\\&quot;{columnName}\\&quot;)]&quot;;
                }
            }
            else
            {
                filedColumn = $&quot;\\t[Column(\\&quot;{columnName}\\&quot;)]&quot;;
            }

            filedColumn += Environment.NewLine;
            filedColumn += $&quot;\\t public {columnType} {_nameToolService.ConvertToPascalCase(columnName)} {{get;set;}}&quot;;

            entityStr.Add(filedColumn);
        }

        var tableName = sql
            .Substring(sql.IndexOf(&quot;TABLE&quot;) + 5, sql.IndexOf(&quot;(&quot;) - sql.IndexOf(&quot;TABLE&quot;) - 5).TrimEnd(&#39;(&#39;)
            .Replace(&quot;\`&quot;, &quot;&quot;)
            .Trim();

        string entityClassCode;
        if (string.IsNullOrEmpty(context))
        {
            entityClassCode = $&quot;[Table(\\&quot;{tableName}\\&quot;)]&quot;;
        }
        else
        {
            entityClassCode = $&quot;[Table(\\&quot;{tableName}\\&quot;),DbContext(typeof({context}))]&quot;;
        }
        entityClassCode += Environment.NewLine;
        entityClassCode += $&quot;public class  {_nameToolService.ConvertToPascalCase(tableName)}Entity{Environment.NewLine}{{&quot;;

        foreach (var columnDeclaration in entityStr)
        {
            entityClassCode += Environment.NewLine + columnDeclaration;
        }

        entityClassCode += Environment.NewLine + &quot;}&quot;;

        return ($&quot;{_nameToolService.ConvertToPascalCase(tableName)}Entity&quot;, entityClassCode);
    }

    /// &lt;summary&gt;
    /// 将类型转换成对应的C# 类型
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;type&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    string ConvertType(string type)
    {
        var newType = type switch
        {
            not null when type.Equals(&quot;date&quot;, StringComparison.OrdinalIgnoreCase) ||
                          type.Equals(&quot;datetime&quot;, StringComparison.OrdinalIgnoreCase) =&gt; &quot;DateTime&quot;,
            not null when type.StartsWith(&quot;int&quot;, StringComparison.OrdinalIgnoreCase) || type.StartsWith(&quot;tinyint&quot;, StringComparison.OrdinalIgnoreCase) =&gt; &quot;int&quot;,
            not null when type.StartsWith(&quot;bigint&quot;, StringComparison.OrdinalIgnoreCase) =&gt; &quot;long&quot;,
            not null when type.StartsWith(&quot;bit&quot;, StringComparison.OrdinalIgnoreCase) =&gt; &quot;bool&quot;,
            not null when type.Equals(&quot;text&quot;, StringComparison.OrdinalIgnoreCase) || type.StartsWith(&quot;varchar&quot;) =&gt;
                &quot;string&quot;,
            not null when type.StartsWith(&quot;decimal&quot;, StringComparison.OrdinalIgnoreCase) =&gt; &quot;decimal&quot;,
            not null when type.StartsWith(&quot;double&quot;, StringComparison.OrdinalIgnoreCase) =&gt; &quot;double&quot;,
            _ =&gt; type
        };
        return newType;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[a];function s(o,d){return e(),i("div",null,r)}const v=n(l,[["render",s],["__file","generateCSharpClass.html.vue"]]),c=JSON.parse(`{"path":"/temp/generateCSharpClass.html","title":"生成CSharp类","lang":"zh-CN","frontmatter":{"title":"生成CSharp类","lang":"zh-CN","date":"2023-09-02T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["csharp"],"tag":["class","生成"],"filename":"cSharpStandard","docsId":"12dbe131-f0f9-47c4-887d-efea272647b9","article":false,"description":"MySQL","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/temp/generateCSharpClass.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"生成CSharp类"}],["meta",{"property":"og:description","content":"MySQL"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-02T16:16:29.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"class"}],["meta",{"property":"article:tag","content":"生成"}],["meta",{"property":"article:published_time","content":"2023-09-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-02T16:16:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"生成CSharp类\\",\\"description\\":\\"MySQL\\"}"]]},"headers":[{"level":2,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]}],"git":{"createdTime":1692600207000,"updatedTime":1693671389000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1},{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":1.71,"words":514},"filePathRelative":"temp/generateCSharpClass.md","localizedDate":"2023年9月2日","excerpt":"<h2>MySQL</h2>\\n<div class=\\"language-c#\\" data-ext=\\"c#\\" data-title=\\"c#\\"><pre class=\\"language-c#\\"><code>public class TableToolService\\n{\\n    private readonly NameToolService _nameToolService;\\n\\n    public TableToolService()\\n    {\\n        _nameToolService = new NameToolService();\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 获取建表语句\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"connectionStr\\"&gt;&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    public List&lt;string&gt; LoadCreateTableSql(string connectionStr)\\n    {\\n        using var conn = new MySqlConnection(connectionStr);\\n        var tableInfo = new List&lt;string&gt;();\\n        var tables = conn.Query&lt;string&gt;(\\"SHOW TABLES\\").ToList();\\n        foreach (var table in tables)\\n        {\\n            var createTableStr = conn.QueryFirstOrDefault($\\"SHOW CREATE TABLE {table}\\");\\n            if (createTableStr is null)\\n                continue;\\n            var createTable = JsonObject.Parse(JsonSerializer.Serialize(createTableStr))[\\"Create Table\\"].ToString();\\n            tableInfo.Add(createTable);\\n        }\\n        return tableInfo;\\n    }\\n    /// &lt;summary&gt;\\n    /// 将表转换成对应的实体类\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"createTableSql\\"&gt;&lt;/param&gt;\\n    /// &lt;param name=\\"context\\"&gt;&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    public (string table, string entityStr) TableToEntity(string createTableSql, string context = \\"\\")\\n    {\\n        var sql = createTableSql;\\n        //获取建表语句中的所有字段\\n        var tableFields = sql.Substring(sql.IndexOf(\\"(\\") + 1, sql.LastIndexOf(\\")\\") - sql.IndexOf(\\"(\\")).TrimEnd(')')\\n            .TrimStart();\\n        //将列分隔\\n        var lines = tableFields.Split(new string[] { \\",\\\\r\\\\n\\", \\",\\\\n\\" }, StringSplitOptions.RemoveEmptyEntries).Select(x =&gt; Regex.Replace(x, @\\"\\\\r\\\\n?|\\\\n\\", string.Empty).Trim())\\n            .ToArray();\\n        lines = lines.Where(x =&gt; !x.StartsWith(\\"KEY\\")).Where(x =&gt; !x.StartsWith(\\"UNIQUE KEY\\")).ToArray();\\n        //找到主键列 \\n        var primaryField = lines.FirstOrDefault(x =&gt; x.StartsWith(\\"PRIMARY\\", StringComparison.OrdinalIgnoreCase));\\n        //提取主键参数\\n        var keys = new List&lt;string&gt;();\\n        if (!string.IsNullOrEmpty(primaryField))\\n        {\\n            lines = lines.Where(x =&gt; !x.StartsWith(\\"PRIMARY\\")).ToArray();\\n            var keyItems = primaryField.Substring(primaryField.IndexOf(\\"(\\", StringComparison.Ordinal) + 1).TrimEnd(')')\\n                .TrimStart().Split(',');\\n            if (keyItems.Length &gt; 0)\\n            {\\n                keys.AddRange(keyItems.Select(x =&gt; x.Replace(\\"\`\\", \\"\\")));\\n            }\\n        }\\n\\n        var entityStr = new List&lt;string&gt;();\\n        foreach (var line in lines)\\n        {\\n            var column = line.Trim();\\n\\n            var parts = column.Split(' ').Select(x =&gt; x.Replace(\\"\`\\", \\"\\")).ToArray();\\n\\n            var columnName = parts[0];\\n\\n            //判断该字段是否为空\\n            var isNullable = !column.Contains(\\"NOT NULL\\");\\n\\n            var columnType = ConvertType(parts[1].ToLower());\\n            columnType += isNullable ? \\"?\\" : \\"\\";\\n\\n\\n            var filedColumn = \\"\\";\\n            if (keys.Contains(columnName))\\n            {\\n                if (keys.Count &gt; 1)\\n                {\\n                    var index = keys.IndexOf(columnName);\\n                    filedColumn = $\\"\\\\t[Key,Column(\\\\\\"{columnName}\\\\\\",Order={index + 1})]\\";\\n                }\\n                else\\n                {\\n                    filedColumn = $\\"\\\\t[Key,Column(\\\\\\"{columnName}\\\\\\")]\\";\\n                }\\n            }\\n            else\\n            {\\n                filedColumn = $\\"\\\\t[Column(\\\\\\"{columnName}\\\\\\")]\\";\\n            }\\n\\n            filedColumn += Environment.NewLine;\\n            filedColumn += $\\"\\\\t public {columnType} {_nameToolService.ConvertToPascalCase(columnName)} {{get;set;}}\\";\\n\\n            entityStr.Add(filedColumn);\\n        }\\n\\n        var tableName = sql\\n            .Substring(sql.IndexOf(\\"TABLE\\") + 5, sql.IndexOf(\\"(\\") - sql.IndexOf(\\"TABLE\\") - 5).TrimEnd('(')\\n            .Replace(\\"\`\\", \\"\\")\\n            .Trim();\\n\\n        string entityClassCode;\\n        if (string.IsNullOrEmpty(context))\\n        {\\n            entityClassCode = $\\"[Table(\\\\\\"{tableName}\\\\\\")]\\";\\n        }\\n        else\\n        {\\n            entityClassCode = $\\"[Table(\\\\\\"{tableName}\\\\\\"),DbContext(typeof({context}))]\\";\\n        }\\n        entityClassCode += Environment.NewLine;\\n        entityClassCode += $\\"public class  {_nameToolService.ConvertToPascalCase(tableName)}Entity{Environment.NewLine}{{\\";\\n\\n        foreach (var columnDeclaration in entityStr)\\n        {\\n            entityClassCode += Environment.NewLine + columnDeclaration;\\n        }\\n\\n        entityClassCode += Environment.NewLine + \\"}\\";\\n\\n        return ($\\"{_nameToolService.ConvertToPascalCase(tableName)}Entity\\", entityClassCode);\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 将类型转换成对应的C# 类型\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"type\\"&gt;&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    string ConvertType(string type)\\n    {\\n        var newType = type switch\\n        {\\n            not null when type.Equals(\\"date\\", StringComparison.OrdinalIgnoreCase) ||\\n                          type.Equals(\\"datetime\\", StringComparison.OrdinalIgnoreCase) =&gt; \\"DateTime\\",\\n            not null when type.StartsWith(\\"int\\", StringComparison.OrdinalIgnoreCase) || type.StartsWith(\\"tinyint\\", StringComparison.OrdinalIgnoreCase) =&gt; \\"int\\",\\n            not null when type.StartsWith(\\"bigint\\", StringComparison.OrdinalIgnoreCase) =&gt; \\"long\\",\\n            not null when type.StartsWith(\\"bit\\", StringComparison.OrdinalIgnoreCase) =&gt; \\"bool\\",\\n            not null when type.Equals(\\"text\\", StringComparison.OrdinalIgnoreCase) || type.StartsWith(\\"varchar\\") =&gt;\\n                \\"string\\",\\n            not null when type.StartsWith(\\"decimal\\", StringComparison.OrdinalIgnoreCase) =&gt; \\"decimal\\",\\n            not null when type.StartsWith(\\"double\\", StringComparison.OrdinalIgnoreCase) =&gt; \\"double\\",\\n            _ =&gt; type\\n        };\\n        return newType;\\n    }\\n}\\n</code></pre></div>","autoDesc":true}`);export{v as comp,c as data};
