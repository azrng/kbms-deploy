import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as r}from"./app-BQsqMNmR.js";const i={};function o(l,t){return r(),a("div",null,t[0]||(t[0]=[n('<p>数据库使用字符集是：UTF8,排序规则是：utf8_general_ci；<br> 永远为每个表设置一个ID作为主键，最好是int类型，并自动设置 AUTO_INCREMENT标志。使用varchar类型当做主键使性能下降，然后如果设置了自增的话如何导出导入会影响；<br> 尽可能使用not null，除非特殊情况必须要使用null；<br> 如果存储一些比较有限而且固定的值，比如性别、国家这种，推荐使用enum而不是varchar；<br> 如果一个表只有几列。使用MEDIUMINT, SMALLINT 或是更小的 TINYINT会更好。<br> 如果不需要记录时分秒，使用Date（YYYY-MM-DD）比DateTime（YYYY-MM-DD HH:mm:ss）更好 ，尽量使用trmestamp，因为其存储空间只需要datetime的一半。对于只需要精确到某一天的数据类型，建议使用DATE类型，因为他的存储空间只需要3个字节，比TIMESTAMP还少。不建议通过INT类型类存储一个unix timestamp 的值，因为这太不直观，会给维护带来不必要的麻烦，同时还不会带来任何好处。<br> 不到万不得已不要使用double，不仅仅是存储长度问题，同是存在精确性的问题。也不建议使用decimal，建议乘以固定备注转换成整数存储，可以节省存储空间。<br> 对于整数的存储，在数据量较大的情况下，建议区分开tinyint/int/bigint的选择，能确定不会使用复数的情况，建议添加unsigned定义。（自增默认就是这种类型，Navicat中对数值类型字段设置无符号）<br> 对于字符类型，如果是固定长度，建议用char，不定长度尽量使用varchar，且仅仅设置适当的最大长度。guid应该使用char(36)<br> 可以针对单个字段设置单独的字符集，这个具体还需要查阅资料<br> 适当拆分，比如我们表中存在类似的text或者很大的varchar类型的大字段的时候，如果我们大部分访问这个表都不需要这个字段，那么我们就应该把这单独拆分到另外的独立表中，以减少常用数据所占用的存储空间。<br> 尽量使用not null，设置null会增加sql的io量，所以尽量确保default的值不是null。<br>  <br>  <br>  <br>  <br><a href="https://www.cnblogs.com/pengyunjing/p/6591676.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/pengyunjing/p/6591676.html</a></p><p><a href="https://blog.csdn.net/liuyanqiangpk/article/details/79827239" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/liuyanqiangpk/article/details/79827239</a></p><p><a href="https://blog.csdn.net/itguangit/article/details/79825577" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/itguangit/article/details/79825577</a></p>',3)]))}const c=e(i,[["render",o],["__file","jianbiaoyugouyouhua.html.vue"]]),s=JSON.parse('{"path":"/dataBase/mysql/shujukuyouhuajilu/jianbiaoyugouyouhua.html","title":"建表语句优化","lang":"zh-CN","frontmatter":{"title":"建表语句优化","lang":"zh-CN","date":"2021-05-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"jianbiaoyugouyouhua","slug":"lgkf6y","docsId":"31804988","description":"数据库使用字符集是：UTF8,排序规则是：utf8_general_ci； 永远为每个表设置一个ID作为主键，最好是int类型，并自动设置 AUTO_INCREMENT标志。使用varchar类型当做主键使性能下降，然后如果设置了自增的话如何导出导入会影响； 尽可能使用not null，除非特殊情况必须要使用null； 如果存储一些比较有限而且固定的值...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/mysql/shujukuyouhuajilu/jianbiaoyugouyouhua.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"建表语句优化"}],["meta",{"property":"og:description","content":"数据库使用字符集是：UTF8,排序规则是：utf8_general_ci； 永远为每个表设置一个ID作为主键，最好是int类型，并自动设置 AUTO_INCREMENT标志。使用varchar类型当做主键使性能下降，然后如果设置了自增的话如何导出导入会影响； 尽可能使用not null，除非特殊情况必须要使用null； 如果存储一些比较有限而且固定的值..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-23T15:53:24.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2021-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-23T15:53:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"建表语句优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-23T15:53:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1695484404000,"updatedTime":1695484404000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"dataBase/mysql/shujukuyouhuajilu/jianbiaoyugouyouhua.md","localizedDate":"2021年5月14日","excerpt":"<p>数据库使用字符集是：UTF8,排序规则是：utf8_general_ci；<br>\\n永远为每个表设置一个ID作为主键，最好是int类型，并自动设置&nbsp;AUTO_INCREMENT标志。使用varchar类型当做主键使性能下降，然后如果设置了自增的话如何导出导入会影响；<br>\\n尽可能使用not null，除非特殊情况必须要使用null；<br>\\n如果存储一些比较有限而且固定的值，比如性别、国家这种，推荐使用enum而不是varchar；<br>\\n如果一个表只有几列。使用MEDIUMINT, SMALLINT 或是更小的 TINYINT会更好。<br>\\n如果不需要记录时分秒，使用Date（YYYY-MM-DD）比DateTime（YYYY-MM-DD HH:mm:ss）更好&nbsp;，尽量使用trmestamp，因为其存储空间只需要datetime的一半。对于只需要精确到某一天的数据类型，建议使用DATE类型，因为他的存储空间只需要3个字节，比TIMESTAMP还少。不建议通过INT类型类存储一个unix timestamp 的值，因为这太不直观，会给维护带来不必要的麻烦，同时还不会带来任何好处。<br>\\n不到万不得已不要使用double，不仅仅是存储长度问题，同是存在精确性的问题。也不建议使用decimal，建议乘以固定备注转换成整数存储，可以节省存储空间。<br>\\n对于整数的存储，在数据量较大的情况下，建议区分开tinyint/int/bigint的选择，能确定不会使用复数的情况，建议添加unsigned定义。（自增默认就是这种类型，Navicat中对数值类型字段设置无符号）<br>\\n对于字符类型，如果是固定长度，建议用char，不定长度尽量使用varchar，且仅仅设置适当的最大长度。guid应该使用char(36)<br>\\n可以针对单个字段设置单独的字符集，这个具体还需要查阅资料<br>\\n适当拆分，比如我们表中存在类似的text或者很大的varchar类型的大字段的时候，如果我们大部分访问这个表都不需要这个字段，那么我们就应该把这单独拆分到另外的独立表中，以减少常用数据所占用的存储空间。<br>\\n尽量使用not null，设置null会增加sql的io量，所以尽量确保default的值不是null。<br>\\n&nbsp;<br>\\n&nbsp;<br>\\n&nbsp;<br>\\n&nbsp;<br>\\n<a href=\\"https://www.cnblogs.com/pengyunjing/p/6591676.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.cnblogs.com/pengyunjing/p/6591676.html</a></p>","autoDesc":true}');export{c as comp,s as data};