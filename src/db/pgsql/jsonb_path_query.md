---
title: PgSQL小知识之jsonb_path_query
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - 数据库
tag:
 - pgsql
---
# PgSQL小知识之jsonb_path_query

# 前言

最近一个有个场景是这样子的，在表中有一个字段存储了一个json格式的文本，我需要取里面的一些列，按照我之前操作的习惯，那么就只能查询到内存中处理了，但是这是pgsql，我还这么处理，那不是白瞎这**世界最先进的开源关系型数据库**称号了。

# 操作

该字段保存的数据格式如下(模拟的假数据)

```
[
    {
        "type": 1,
        "tableName": "emr.aaa",
        "remark": "xxx"
    },
    {
        "type": 1,
        "tableName": "emr.bbb",
        "remark": "xxx"
    },
    {
        "type": 2,
        "tableName": "emr.ccc",
        "remark": "xxx"
    },
    {
        "type": 2,
        "tableName": "emr.ddd",
        "remark": "xxx"
    },
    {
        "type": 3,
        "tableName": "emr.eee",
        "remark": "xxx"
    }
]
```

我需要查询type为2的里面的tableName字段，发现可以使用函数jsonb_path_query来处理。



开始编写SQL，因为该字段的类型是text，所以首先要将类型转为jsonb形式然后筛选type为2的，编写SQL如下

```sql
select jsonb_path_query(t.content::jsonb,'$[*]?(@.type==2)') from public.demo t

-- 输出结果
{"type": 2, "remark": "xxx", "tableName": "emr.ccc"}
{"type": 2, "remark": "xxx", "tableName": "emr.ddd"}
```

我们还需要去获取里面的tableName字段，这个时候我们可以使用json操作符#>>来获取json对象

```sql
select jsonb_path_query(t.content::jsonb,'$[*]?(@.type==2)') #>> '{tableName}' from public.demo t
-- 输出结果
emr.ccc
emr.ddd
```

然后就这样子获取到我想要的数据了。

# 总结

上述操作有点类似xpath的用法省去了我查询到内存中再处理的复杂操作，直接一条SQL就可以获取到我想要的数据，我的使用场景就是一个几百条数据的配置表中，所以不会出现慢的情况，如果你的使用场景数据量大，先测试再使用。

# 函数说明

## jsonb_path_query

> jsonb_path_query(target jsonb, path jsonpath [, vars jsonb [, silent bool]])

获取指定的json值的json路径返回的所有json项

```sql
select * from jsonb_path_query('{"a":[1,2,3,4,5]}', '$.a[*] ? (@ >= $min && @ <= $max)', '{"min":2,"max":4}');
-- 2
-- 3
-- 4

select * from jsonb_path_query('{"a":{"type": 5,"name": "zhangsan"}}', '$.a[*] ? (@.type==5 ).name');
-- "zhangsan"

select  jsonb_path_query('{"a":{"type": 5,"name": "zhangsan"}}', '$.a[*] ? (@.type==5 )') #>>'{name}'
-- zhangsan
```

## #>>

以text形式获取指定路径上的json对象

```sql
select '{"a":[1,2,3],"b":[4,5,6]}'::json#>'{a,2}';
-- 3
```

# 资料

> json和jsonb从用户操作角度来说是没有区别的，区别主要是存储和读取的系统处理和耗时方面有区别。json写入，读取慢，jsonb写入慢，读取快.

中文教程地址：http://postgres.cn/docs/12/functions-json.html