---
title: 基础操作
lang: zh-CN
date: 2022-12-10
publish: true
author: azrng
isOriginal: true
category:
 - dotNet
tag:
 - dapper
---

# 介绍

dapper是一个简单的对象关系映射框架（ORM----Object Relation Mapping），它几乎与原始的ADO.NET数据操作读取一样快是一个用来执行SQL并映射模型的轻量级ORM框架。

# 操作

引用nuget包

```
<PackageReference Include="Dapper" Version="2.0.123" />
```

然后要操作哪些数据库就再安装对应数据库的包。



常用数据库连接字符串

```text
MySQL：
Server=47.xxxx;database=gxgtest;uid=gxg;pwd=123456;charset=utf8;

SQL server
Data Source=.;Initial Catalog=Test;User ID=sa;Password=123456
```

## 查询

### 基础查询

```
var connection = new SqlConnection("Data Source=.;Initial Catalog=Test;User ID=sa;Password=123456");
var sql = "select * from Users where Email=@email";
var info = connection.Query<Users>(sql, new { email = "123456" });
Console.ReadLine();
```

### 参数化查询

#### =

```csharp
var parameters = new DynamicParameters();
parameters.Add("@reportId", request.ReportId);
parameters.Add("@reportClassId", request.ReportClassId);

var list = await _pacsViewDapperRepository.QueryAsync<GetImageReportDto>(str.ToString(), parameters);
```

#### Like

##### Postgresql

示例like

```csharp
var str = @"SELECT * FROM ""user"".""userinfo"" info where info.name like @name";
var parameters = new DynamicParameters();
parameters.Add("@name", "%ab%");
var list = await dapper.QueryAsync<UserInfo>(str, parameters);
Console.WriteLine(JsonConvert.SerializeObject(list));
```

#### IN

##### Postgresql

```plsql
var str = @"SELECT * FROM ""user"".""userinfo"" info where  info.status=any(@status)";
var statusList = new int[3] { 1, 2, 3 };
var parameters = new DynamicParameters();
parameters.Add("@status", statusList.ToList());
var list = await dapper.QueryAsync<UserInfo>(str, parameters);
```

PostgreSQL IN运算符不支持数组（或任何其他集合）作为参数，所以需要使用**WHERE Id = ANY(@CustomerIdList)**

IN相当于ANY:https://www.postgresql.org/docs/current/functions-subquery.html#FUNCTIONS-SUBQUERY-ANY-SOME

##### 其它

```plsql
_db.Query<Users>("SELECT * FROM dbo.Users s WHERE s.id IN @ids ",new { ids = IDs.ToArray()}).ToList();
```

#### Not IN

##### Postgresql

```plsql
var str = @"SELECT * FROM ""user"".""userinfo"" info where  info.status!=any(@status)";
var statusList = new int[3] { 1, 2, 3 };
var parameters = new DynamicParameters();
parameters.Add("@status", statusList.ToList());
var list = await dapper.QueryAsync<UserInfo>(str, parameters);
Console.WriteLine(JsonConvert.SerializeObject(list));
```

#### <>

##### Postgresql

```plsql
var str = @"SELECT * FROM ""user"".""userinfo"" info where  info.status!=@status";
var parameters = new DynamicParameters();
parameters.Add("@status", 1);
var list =await dapper.QueryAsync<UserInfo>(str, parameters);

或者
var sql = "SELECT * FROM Invoice WHERE Kind <> ALL(@Kind);";
var invoices = connection.Query<Invoice>(sql, new {Kind = new[] {"aa","bb"}}).ToList();
```

### 查询映射

当数据库里面的列和代码中模型的列命名不一致的时候(大小写等可以自动映射)是映射不上的比如create_time想映射到CreateTime上，这个时候我们一般会编写别名转换来实现，最近看到另外一种写法，如下

数据库中该表的字段和代码的字段有下面区别，所以我做了一个映射

```
var userColMap = new ColumnMap();
userColMap.Add("pass_word", nameof(UserInfo.PassWord));
userColMap.Add("create_time", nameof(UserInfo.CreateTime));
userColMap.Add("credit", nameof(UserInfo.Integral));
userColMap.Add("id", nameof(UserInfo.Id));
userColMap.Add("account", nameof(UserInfo.Account));
```

关于这个ColumnMap，实现如下

```
/// <summary>
/// 列映射
/// </summary>
public class ColumnMap
{
    /// <summary>
    /// 向前映射
    /// </summary>
    private readonly Dictionary<string, string> forward = new Dictionary<string, string>();

    /// <summary>
    /// 向后映射
    /// </summary>
    private readonly Dictionary<string, string> reverse = new Dictionary<string, string>();

    /// <summary>
    /// 添加映射的值(参数不区分是数据库列和代码列的先后关系)
    /// </summary>
    /// <param name="t1"></param>
    /// <param name="t2"></param>
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
```

然后给dapper设置自定义映射（这里的UserInfo是查询时候映射的模型）

```
public static class DapperMapperConfigs
{
    /// <summary>
    /// dapper映射配置
    /// </summary>
    public static void Init()
    {
        var userColMap = new ColumnMap();
        userColMap.Add("pass_word", nameof(UserInfo.PassWord));
        userColMap.Add("create_time", nameof(UserInfo.CreateTime));
        userColMap.Add("credit", nameof(UserInfo.Integral));
        userColMap.Add("id", nameof(UserInfo.Id));
        userColMap.Add("account", nameof(UserInfo.Account));

        SqlMapper.SetTypeMap(typeof(UserInfo), new CustomPropertyTypeMap(typeof(UserInfo), (type, columnName) => type.GetProperty(userColMap[columnName])));
    }
}
```

> 注意：如果使用了自定义映射，那么默认的映射就不生效了，比如数据库的id映射不到代码的ID上面

在项目启动的时候就执行该静态方法，然后再使用dapper查询的时候就可以不使用别名，使用自定义的映射了。



当然还有另外的写法，不再详细描述，只是留下网上的代码

根据列特性映射

```
SqlMapper.SetTypeMap(typeof(Section), new CustomPropertyTypeMap(
    typeof(Section), (type, columnName) => type.GetProperties().FirstOrDefault(prop =>
    prop.GetCustomAttributes(false).OfType<ColumnAttribute>().Any(attr => attr.Name == columnName))));


public class Section
{
    [Column("db_column_name1")] // Side note: if you create aliases, then they would match this.
    public int Id { get; set; }
    [Column("db_column_name2")]
    public string Title { get; set; }
}
```

根据备注特性映射

```
public class TypeWithMapping
{
   [Description("B")]
   public string A { get; set; }

   [Description("A")]
   public string B { get; set; }
}

// custom mapping
var map = new CustomPropertyTypeMap(typeof(TypeWithMapping),
                                    (type, columnName) => type.GetProperties().FirstOrDefault(prop => GetDescriptionFromAttribute(prop) == columnName));
Dapper.SqlMapper.SetTypeMap(typeof(TypeWithMapping), map);

static string GetDescriptionFromAttribute(MemberInfo member)
{
   if (member == null) return null;

   var attrib = (DescriptionAttribute)Attribute.GetCustomAttribute(member, typeof(DescriptionAttribute), false);
   return attrib == null ? null : attrib.Description;
}
```

## 事务

### 简单的事务方法

这种事务方式很原始，就是在已存在的 Connection 上创建 Transaction， 然后将事务作为参数传递到 Execute 方法中，当业务逻辑处理完后，再做 commit 提交，参考如下代码：

```csharp
string sql = "INSERT INTO Customers (CustomerName) Values (@CustomerName);";

using (var connection = new SqlConnection(FiddleHelper.GetConnectionStringSqlServerW3Schools()))
{
    connection.Open();
    
    using (var transaction = connection.BeginTransaction())
    {
        connection.Execute(sql, new {CustomerName = "Mark"}, transaction: transaction);
        connection.Execute(sql, new {CustomerName = "Sam"}, transaction: transaction);
        connection.Execute(sql, new {CustomerName = "John"}, transaction: transaction);
        
        transaction.Commit();
    }
}
```

### TransactionScope

如果你喜欢用 TransactionScope 方式，有一点要注意，那就是需要在 connection 创建之前创建 Scope，然后在 Scope 作用域内做你想做的sql操作，最后执行一个 complete 提交即可，参考如下代码：

```csharp
using (var transaction = new TransactionScope())
{
    var sql = "INSERT INTO Customers (CustomerName) Values (@CustomerName);";

    using (var connection = My.ConnectionFactory())
    {
        connection.Open();

        connection.Execute(sql, new {CustomerName = "Mark"});
        connection.Execute(sql, new {CustomerName = "Sam"});
        connection.Execute(sql, new {CustomerName = "John"});
    }

    transaction.Complete();
}
```

### Dapper Transaction 方式

这是使用 Dapper 最推荐的方式，毕竟它的代码语义太强了，你可以直接在 new 出的 Transaction 之上执行各自的sql语句，参考如下代码：

```csharp
string sql = "INSERT INTO Customers (CustomerName) Values (@CustomerName);";

using (var connection = new SqlConnection(FiddleHelper.GetConnectionStringSqlServerW3Schools()))
{
    connection.Open();
    
    using (var transaction = connection.BeginTransaction())
    {
        transaction.Execute(sql, new {CustomerName = "Mark"});
        transaction.Execute(sql, new {CustomerName = "Sam"});
        transaction.Execute(sql, new {CustomerName = "John"});

        transaction.Commit();
    }
}
```

这三种方式总结的特别好，但有一点看着很不爽，那就是在执行 Transaction 之前需要 connection.Open()，有点繁琐，所以这一块还是可以再封装一下的。

### 参考文档

https://mp.weixin.qq.com/s/IjFtMkqaH-Z9c6uURiAoZQ | 如何在 Dapper.NET 中使用事务？

# Nuget推荐

## Dapper.Extension.AspNetCore

ASP.NET Core 的 Dapper 扩展。

GitHub：https://github.com/Run2948/Dapper.Extension.AspNetCore