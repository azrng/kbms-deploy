const t=JSON.parse('{"key":"v-85fa0194","path":"/db/pgsql/jsonb_path_query.html","title":"PgSQL小知识之jsonb_path_query","lang":"zh-CN","frontmatter":{"title":"PgSQL小知识之jsonb_path_query","lang":"zh-CN","date":"2021-02-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["数据库"],"tag":["pgsql"],"description":"最近一个有个场景是这样子的，在表中有一个字段存储了一个json格式的文本，我需要取里面的一些列，按照我之前操作的习惯，那么就只能查询到内存中处理了，但是这是pgsql，我还这么处理，那不是白瞎这世界最先进的开源关系型数据库称号了。 该字段保存的数据格式如下(模拟的假数据) 我需要查询type为2的里面的tableName字段，发现可以使用函数jsonb...","head":[["meta",{"property":"og:url","content":"https://azrng.github.io/kbms/kbms/db/pgsql/jsonb_path_query.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"PgSQL小知识之jsonb_path_query"}],["meta",{"property":"og:description","content":"最近一个有个场景是这样子的，在表中有一个字段存储了一个json格式的文本，我需要取里面的一些列，按照我之前操作的习惯，那么就只能查询到内存中处理了，但是这是pgsql，我还这么处理，那不是白瞎这世界最先进的开源关系型数据库称号了。 该字段保存的数据格式如下(模拟的假数据) 我需要查询type为2的里面的tableName字段，发现可以使用函数jsonb..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-09T02:19:17.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"pgsql"}],["meta",{"property":"article:published_time","content":"2021-02-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T02:19:17.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"jsonb_path_query","slug":"jsonb-path-query","link":"#jsonb-path-query","children":[]},{"level":2,"title":"#>>","slug":"","link":"#","children":[]}],"git":{"createdTime":1670219403000,"updatedTime":1670552357000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":2},{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.09,"words":626},"autoDesc":true,"localizedDate":"2021年2月22日","filePathRelative":"db/pgsql/jsonb_path_query.md"}');export{t as data};