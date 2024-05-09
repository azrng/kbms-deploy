import{_ as r}from"./image-20231124182003534-NSgzGDMT.js";import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as d,b as e,e as n,f as i,d as a}from"./app-D8HBJYTp.js";const o={},v=e("h2",{id:"概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述"},[e("span",null,"概述")])],-1),m=e("p",null,"ODBC英文全称为：Open Database Connectivity。用于在不同的操作系统和数据库管理系统之间进行数据访问的标准化接口。它提供了一组函数和API，使得应用程序可以通过统一的方式访问不同类型的数据源。 大多数数据源都有适用的 ODBC 驱动程序。",-1),u={href:"https://learn.microsoft.com/zh-cn/sql/connect/odbc/microsoft-odbc-driver-for-sql-server?view=sql-server-ver16",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"操作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#操作"},[e("span",null,"操作")])],-1),b={href:"https://learn.microsoft.com/zh-cn/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16",target:"_blank",rel:"noopener noreferrer"},g=a(`<h3 id="连接" tabindex="-1"><a class="header-anchor" href="#连接"><span>连接</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var str=&quot;Server=172.16.70.54;Database=cdr;Uid=sa;Pwd=Synyi123;Encrypt=no;driver=ODBC Driver 18 for SQL Server&quot;;
await using var connection = new OdbcConnection(str);
connection.Open();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询"><span>查询</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>await using var connection = new OdbcConnection(str);
connection.Open();

// string sqlQuery = &quot;Select @@version&quot;;
// var command = new OdbcCommand(sqlQuery, connection);
// var reader = command.ExecuteScalar();
// Console.WriteLine(reader.ToString());

// // 不使用dapper
// var select1 = &quot;select name from dbo.users where name=?&quot;;
// OdbcCommand dbCommand = connection.CreateCommand();
// dbCommand.CommandText = select1;
// dbCommand.Parameters.Add(&quot;@name&quot;, OdbcType.VarChar).Value = &quot;aa&quot;;
// var result1 = dbCommand.ExecuteScalar();
// Console.WriteLine($&quot;result1:{result1}&quot;);

// ?key? 是参数化
// var select = &quot;select name from dbo.users where name=?name?&quot;;
// var result = await connection.QueryAsync&lt;string&gt;(select, new { name = &quot;aa&quot; });
// Console.WriteLine(result.Count());

var select = &quot;select name from dbo.users&quot;;
var result = await connection.QueryAsync&lt;string&gt;(select);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行" tabindex="-1"><a class="header-anchor" href="#执行"><span>执行</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>await using var connection = new OdbcConnection(str);
connection.Open();
// ?key? 是参数化
var insertSql = &quot;insert into dbo.users(name) values(?name?)&quot;;
var insertResult = await connection.ExecuteAsync(insertSql, new { name = Guid.NewGuid().ToString() });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践"><span>实践</span></a></h2><h3 id="部署连接sqlserver2008的程序" tabindex="-1"><a class="header-anchor" href="#部署连接sqlserver2008的程序"><span>部署连接sqlserver2008的程序</span></a></h3><p>新建一个控制台项目名字叫做MsSqlNetCoreOdbc(这里我直接创建.Net6的控制台项目)，然后安装nuget包</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;PackageReference Include=&quot;System.Data.Odbc&quot; Version=&quot;8.0.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后编写下面代码</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System.Data.Odbc;

try
{
    var str = &quot;Server=192.168.1.2;Database=cdr;Uid=sa;Pwd=123;Encrypt=no;driver=ODBC Driver 18 for SQL Server&quot;;

    await using var connection = new OdbcConnection(str);
    connection.Open();

    string sqlQuery = &quot;Select @@version&quot;;
    var command = new OdbcCommand(sqlQuery, connection);
    var reader = command.ExecuteScalar();
    Console.WriteLine(reader.ToString());
    
    Console.WriteLine(&quot;conn success&quot;);

    Console.WriteLine(&quot;over&quot;);
}
catch (Exception ex)
{
    Console.WriteLine($&quot;message:{ex.Message} stackTrace:{ex.StackTrace}&quot;);
}

Console.ReadLine();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),h={href:"https://learn.microsoft.com/zh-cn/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16",target:"_blank",rel:"noopener noreferrer"},f=a(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Microsoft SQL Server 2008 R2 (RTM) - 10.50.1600.1 (X64)                                
        Apr  2 2010 15:48:46                                                           
        Copyright (c) Microsoft Corporation                                            
        Enterprise Edition (64-bit) on Windows NT 6.2 &lt;X64&gt; (Build 9200: ) (Hypervisor)

conn success
over
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要容器化部署，那么就需要去新建dockerfire文件，另外考虑到连接的是sqlserver2008版本，所以需要</p><ul><li>降低容器tls版本</li><li>安装操作驱动</li></ul><p>修改dockerfile文件，增加下面的内容</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/deb.debian.org/mirrors.aliyun.com/g&#39;</span> /etc/apt/sources.list &amp;&amp; apt-get update  &amp;&amp; <span class="token operator">\\</span>
    apt-get install -y unixodbc unixodbc-dev curl</span>
<span class="token instruction"><span class="token keyword">RUN</span> curl https://packages.microsoft.com/keys/microsoft.asc |  tee /etc/apt/trusted.gpg.d/microsoft.asc &amp;&amp; curl https://packages.microsoft.com/config/debian/11/prod.list &gt; /etc/apt/sources.list.d/mssql-release.list &amp;&amp; <span class="token operator">\\</span>
    apt-get update &amp;&amp; <span class="token operator">\\</span>
    ACCEPT_EULA=Y apt-get install -y msodbcsql18 &amp;&amp; <span class="token operator">\\</span>
    apt-get clean -y &amp;&amp; <span class="token operator">\\</span>
    rm -rf /var/lib/apt/lists/*</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./ConnectTest/odbcinst.ini /etc/odbcinst.ini</span>

<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/DEFAULT@SECLEVEL=2/DEFAULT@SECLEVEL=1/g&#39;</span> /etc/ssl/openssl.cnf</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/MinProtocol = TLSv1.2/MinProtocol = TLSv1/g&#39;</span> /etc/ssl/openssl.cnf</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/DEFAULT@SECLEVEL=2/DEFAULT@SECLEVEL=1/g&#39;</span> /usr/lib/ssl/openssl.cnf</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/MinProtocol = TLSv1.2/MinProtocol = TLSv1/g&#39;</span> /usr/lib/ssl/openssl.cnf</span>


<span class="token comment"># odbcinst.ini 文件内容如下</span>

[ODBC Driver 18 for SQL Server]
Description=Microsoft ODBC Driver 18 for SQL Server
Driver=/opt/microsoft/msodbcsql18/lib64/libmsodbcsql-18.3.so.2.1
UsageCount=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),q={href:"https://learn.microsoft.com/zh-cn/sql/connect/odbc/linux-mac/installing-the-microsoft-odbc-driver-for-sql-server?view=sql-server-ver16&tabs=ubuntu18-install%2Calpine17-install%2Cdebian8-install%2Credhat7-13-install%2Crhel7-offline#18",target:"_blank",rel:"noopener noreferrer"},C=a(`<p>完整dockerfile内容如下</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>FROM mcr.microsoft.com/dotnet/runtime:6.0 AS base
WORKDIR /app

ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY [&quot;MsSqlNetCoreOdbc/MsSqlNetCoreOdbc.csproj&quot;, &quot;MsSqlNetCoreOdbc/&quot;]
RUN dotnet restore &quot;./MsSqlNetCoreOdbc/./MsSqlNetCoreOdbc.csproj&quot;
COPY . .
WORKDIR &quot;/src/MsSqlNetCoreOdbc&quot;
RUN dotnet build &quot;./MsSqlNetCoreOdbc.csproj&quot; -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish &quot;./MsSqlNetCoreOdbc.csproj&quot; -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final

RUN sed -i &#39;s/deb.debian.org/mirrors.aliyun.com/g&#39; /etc/apt/sources.list &amp;&amp; apt-get update  &amp;&amp; \\
    apt-get install -y unixodbc unixodbc-dev curl
RUN curl https://packages.microsoft.com/keys/microsoft.asc |  tee /etc/apt/trusted.gpg.d/microsoft.asc &amp;&amp; \\
    curl https://packages.microsoft.com/config/debian/11/prod.list &gt; /etc/apt/sources.list.d/mssql-release.list &amp;&amp; \\
    apt-get update &amp;&amp; \\
    ACCEPT_EULA=Y apt-get install -y msodbcsql18 &amp;&amp; \\
    apt-get clean -y &amp;&amp; \\
    rm -rf /var/lib/apt/lists/*
COPY ./MsSqlNetCoreOdbc/odbcinst.ini /etc/odbcinst.ini

RUN sed -i &#39;s/DEFAULT@SECLEVEL=2/DEFAULT@SECLEVEL=1/g&#39; /etc/ssl/openssl.cnf
RUN sed -i &#39;s/MinProtocol = TLSv1.2/MinProtocol = TLSv1/g&#39; /etc/ssl/openssl.cnf
RUN sed -i &#39;s/DEFAULT@SECLEVEL=2/DEFAULT@SECLEVEL=1/g&#39; /usr/lib/ssl/openssl.cnf
RUN sed -i &#39;s/MinProtocol = TLSv1.2/MinProtocol = TLSv1/g&#39; /usr/lib/ssl/openssl.cnf

WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT [&quot;dotnet&quot;, &quot;MsSqlNetCoreOdbc.dll&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动容器后输入如下</p><figure><img src="`+r+'" alt="image-20231124182003534" tabindex="0" loading="lazy"><figcaption>image-20231124182003534</figcaption></figure><p>连接成功，结束</p><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>版本兼容性：https://learn.microsoft.com/zh-cn/sql/connect/odbc/windows/system-requirements-installation-and-driver-files?view=sql-server-ver16</p><p>驱动下载：https://learn.microsoft.com/zh-cn/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16</p><p>https://blog.csdn.net/iteye_9656/article/details/82103968 连接字符串</p><p>https://www.cnblogs.com/yuanzhongkui/p/4022557.html 连接sqlsever</p>',10);function k(O,S){const s=l("ExternalLinkIcon");return c(),d("div",null,[v,m,e("p",null,[e("a",u,[n("Microsoft ODBC Driver for SQL Server文档说明"),i(s)])]),p,e("p",null,[n("使用odbc需要安装驱动程序，比如连接sqlserver就需要去这里"),e("a",b,[n("下载"),i(s)]),n("驱动包")]),g,e("p",null,[n("如果你要本地调试看代码是否有问题，那么还需要安装驱动程序，需要去"),e("a",h,[n("此处"),i(s)]),n("下载安装然后启动调试，比如我运行就会输出版本信息")]),f,e("p",null,[n("dockerfile安装odbc驱动文档："),e("a",q,[n("此处"),i(s)])]),C])}const D=t(o,[["render",k],["__file","index.html.vue"]]),E=JSON.parse('{"path":"/orm/odbc/","title":"说明","lang":"zh-CN","frontmatter":{"title":"说明","lang":"zh-CN","date":"2023-11-23T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["orm"],"tag":["odbc"],"description":"概述 ODBC英文全称为：Open Database Connectivity。用于在不同的操作系统和数据库管理系统之间进行数据访问的标准化接口。它提供了一组函数和API，使得应用程序可以通过统一的方式访问不同类型的数据源。 大多数数据源都有适用的 ODBC 驱动程序。 Microsoft ODBC Driver for SQL Server文档说明 ...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/orm/odbc/"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"说明"}],["meta",{"property":"og:description","content":"概述 ODBC英文全称为：Open Database Connectivity。用于在不同的操作系统和数据库管理系统之间进行数据访问的标准化接口。它提供了一组函数和API，使得应用程序可以通过统一的方式访问不同类型的数据源。 大多数数据源都有适用的 ODBC 驱动程序。 Microsoft ODBC Driver for SQL Server文档说明 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/image-20231124182003534.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T02:38:11.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"odbc"}],["meta",{"property":"article:published_time","content":"2023-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-25T02:38:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说明\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/image-20231124182003534.png\\"],\\"datePublished\\":\\"2023-11-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-25T02:38:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"连接","slug":"连接","link":"#连接","children":[]},{"level":3,"title":"查询","slug":"查询","link":"#查询","children":[]},{"level":3,"title":"执行","slug":"执行","link":"#执行","children":[]}]},{"level":2,"title":"实践","slug":"实践","link":"#实践","children":[{"level":3,"title":"部署连接sqlserver2008的程序","slug":"部署连接sqlserver2008的程序","link":"#部署连接sqlserver2008的程序","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1700748859000,"updatedTime":1700879891000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":3.3,"words":989},"filePathRelative":"orm/odbc/readme.md","localizedDate":"2023年11月23日","excerpt":"<h2>概述</h2>\\n<p>ODBC英文全称为：Open Database Connectivity。用于在不同的操作系统和数据库管理系统之间进行数据访问的标准化接口。它提供了一组函数和API，使得应用程序可以通过统一的方式访问不同类型的数据源。 大多数数据源都有适用的 ODBC 驱动程序。</p>\\n<p><a href=\\"https://learn.microsoft.com/zh-cn/sql/connect/odbc/microsoft-odbc-driver-for-sql-server?view=sql-server-ver16\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Microsoft ODBC Driver for SQL Server文档说明</a></p>","autoDesc":true}');export{D as comp,E as data};
