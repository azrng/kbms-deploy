const e=JSON.parse('{"key":"v-85fa0194","path":"/db/pgsql/jsonb_path_query.html","title":"PgSQL小知识之jsonb_path_query","lang":"zh-CN","frontmatter":{"title":"PgSQL小知识之jsonb_path_query","lang":"zh-CN","date":"2021-02-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["数据库"],"tag":["pgsql"],"description":"PgSQL小知识之jsonb_path_query 前言 最近一个有个场景是这样子的，在表中有一个字段存储了一个json格式的文本，我需要取里面的一些列，按照我之前操作的习惯，那么就只能查询到内存中处理了，但是这是pgsql，我还这么处理，那不是白瞎这世界最先进的开源关系型数据库称号了。 操作 该字段保存的数据格式如下(模拟的假数据) [ { \\"type\\": 1, \\"tableName\\": \\"emr.aaa\\", \\"remark\\": \\"xxx\\" }, { \\"type\\": 1, \\"tableName\\": \\"emr.bbb\\", \\"remark\\": \\"xxx\\" }, { \\"type\\": 2, \\"tableName\\": \\"emr.ccc\\", \\"remark\\": \\"xxx\\" }, { \\"type\\": 2, \\"tableName\\": \\"emr.ddd\\", \\"remark\\": \\"xxx\\" }, { \\"type\\": 3, \\"tableName\\": \\"emr.eee\\", \\"remark\\": \\"xxx\\" } ]","head":[["meta",{"property":"og:url","content":"https://azrng.github.io/kbms/kbms/db/pgsql/jsonb_path_query.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"PgSQL小知识之jsonb_path_query"}],["meta",{"property":"og:description","content":"PgSQL小知识之jsonb_path_query 前言 最近一个有个场景是这样子的，在表中有一个字段存储了一个json格式的文本，我需要取里面的一些列，按照我之前操作的习惯，那么就只能查询到内存中处理了，但是这是pgsql，我还这么处理，那不是白瞎这世界最先进的开源关系型数据库称号了。 操作 该字段保存的数据格式如下(模拟的假数据) [ { \\"type\\": 1, \\"tableName\\": \\"emr.aaa\\", \\"remark\\": \\"xxx\\" }, { \\"type\\": 1, \\"tableName\\": \\"emr.bbb\\", \\"remark\\": \\"xxx\\" }, { \\"type\\": 2, \\"tableName\\": \\"emr.ccc\\", \\"remark\\": \\"xxx\\" }, { \\"type\\": 2, \\"tableName\\": \\"emr.ddd\\", \\"remark\\": \\"xxx\\" }, { \\"type\\": 3, \\"tableName\\": \\"emr.eee\\", \\"remark\\": \\"xxx\\" } ]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-09T02:19:17.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"pgsql"}],["meta",{"property":"article:published_time","content":"2021-02-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T02:19:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PgSQL小知识之jsonb_path_query\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-22T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-09T02:19:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"jsonb_path_query","slug":"jsonb-path-query","link":"#jsonb-path-query","children":[]},{"level":2,"title":"#>>","slug":"","link":"#","children":[]}],"git":{"createdTime":1670219403000,"updatedTime":1670552357000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":2},{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.05,"words":616},"filePathRelative":"db/pgsql/jsonb_path_query.md","localizedDate":"2021年2月22日","excerpt":"<h1> PgSQL小知识之jsonb_path_query</h1>\\n<h1> 前言</h1>\\n<p>最近一个有个场景是这样子的，在表中有一个字段存储了一个json格式的文本，我需要取里面的一些列，按照我之前操作的习惯，那么就只能查询到内存中处理了，但是这是pgsql，我还这么处理，那不是白瞎这<strong>世界最先进的开源关系型数据库</strong>称号了。</p>\\n<h1> 操作</h1>\\n<p>该字段保存的数据格式如下(模拟的假数据)</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>[\\n    {\\n        \\"type\\": 1,\\n        \\"tableName\\": \\"emr.aaa\\",\\n        \\"remark\\": \\"xxx\\"\\n    },\\n    {\\n        \\"type\\": 1,\\n        \\"tableName\\": \\"emr.bbb\\",\\n        \\"remark\\": \\"xxx\\"\\n    },\\n    {\\n        \\"type\\": 2,\\n        \\"tableName\\": \\"emr.ccc\\",\\n        \\"remark\\": \\"xxx\\"\\n    },\\n    {\\n        \\"type\\": 2,\\n        \\"tableName\\": \\"emr.ddd\\",\\n        \\"remark\\": \\"xxx\\"\\n    },\\n    {\\n        \\"type\\": 3,\\n        \\"tableName\\": \\"emr.eee\\",\\n        \\"remark\\": \\"xxx\\"\\n    }\\n]\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};