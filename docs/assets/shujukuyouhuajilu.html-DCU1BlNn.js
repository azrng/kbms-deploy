import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as r,o as n}from"./app-fQkBsvt-.js";const o={};function s(i,e){return n(),a("div",null,e[0]||(e[0]=[r('<h2 id="修改语句" tabindex="-1"><a class="header-anchor" href="#修改语句"><span>修改语句</span></a></h2><p>问题1：修改3万多条数据运行时间1秒多<br> UPDATE dynews_news a set a.StickState = 2 WHERE a.StickEndTime &lt;= sysdate() and a.IsStick = 1 and a.F_DeleteMark = 0 and a.F_EnabledMark = 1;<br> 解决方案：对IsStick 、DeleteMark 、EnabledMark 添加普通索引；</p><h2 id="查询语句" tabindex="-1"><a class="header-anchor" href="#查询语句"><span>查询语句</span></a></h2><p>问题1：查询10000行到10010行<br> 完美方案是：<br> SELECT * FROM table WHERE id BETWEEN 1000000 AND 1000010;<br> 如果id不是连续的一段，那么就使用下面的的方法：<br> SELECT * FROM table WHERE id IN(10000, 100000, 1000000...);<br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br><a href="https://www.cnblogs.com/itdragon/p/8146439.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/itdragon/p/8146439.html</a><br>  <br><a href="https://www.cnblogs.com/youyoui/p/7851007.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/youyoui/p/7851007.html</a><br>  <br><a href="https://mp.weixin.qq.com/s/jm4J15_yqosBFNmn5f9R-w" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/jm4J15_yqosBFNmn5f9R-w</a></p>',4)]))}const c=t(o,[["render",s],["__file","shujukuyouhuajilu.html.vue"]]),u=JSON.parse('{"path":"/dataBase/mysql/shujukuyouhuajilu/shujukuyouhuajilu.html","title":"数据库优化记录","lang":"zh-CN","frontmatter":{"title":"数据库优化记录","lang":"zh-CN","date":"2021-05-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"shujukuyouhuajilu","slug":"gs38ql","docsId":"31804945","description":"修改语句 问题1：修改3万多条数据运行时间1秒多 UPDATE dynews_news a set a.StickState = 2 WHERE a.StickEndTime <= sysdate() and a.IsStick = 1 and a.F_DeleteMark = 0 and a.F_EnabledMark = 1; 解决方案：对IsSt...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/mysql/shujukuyouhuajilu/shujukuyouhuajilu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"数据库优化记录"}],["meta",{"property":"og:description","content":"修改语句 问题1：修改3万多条数据运行时间1秒多 UPDATE dynews_news a set a.StickState = 2 WHERE a.StickEndTime <= sysdate() and a.IsStick = 1 and a.F_DeleteMark = 0 and a.F_EnabledMark = 1; 解决方案：对IsSt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-23T15:53:24.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2021-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-23T15:53:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据库优化记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-23T15:53:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"修改语句","slug":"修改语句","link":"#修改语句","children":[]},{"level":2,"title":"查询语句","slug":"查询语句","link":"#查询语句","children":[]}],"git":{"createdTime":1695484404000,"updatedTime":1695484404000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.52,"words":157},"filePathRelative":"dataBase/mysql/shujukuyouhuajilu/shujukuyouhuajilu.md","localizedDate":"2021年5月14日","excerpt":"<h2>修改语句</h2>\\n<p>问题1：修改3万多条数据运行时间1秒多<br>\\nUPDATE dynews_news a set a.StickState = 2 WHERE a.StickEndTime &lt;= sysdate() and a.IsStick = 1 and a.F_DeleteMark = 0 and a.F_EnabledMark = 1;<br>\\n解决方案：对IsStick 、DeleteMark 、EnabledMark 添加普通索引；</p>\\n<h2>查询语句</h2>\\n<p>问题1：查询10000行到10010行<br>\\n完美方案是：<br>\\nSELECT * FROM table WHERE id BETWEEN 1000000 AND 1000010;<br>\\n如果id不是连续的一段，那么就使用下面的的方法：<br>\\nSELECT * FROM table WHERE id IN(10000, 100000, 1000000...);<br>\\n&nbsp;<br>\\n&nbsp;<br>\\n&nbsp;<br>\\n&nbsp;<br>\\n&nbsp;<br>\\n&nbsp;<br>\\n&nbsp;<br>\\n&nbsp;<br>\\n<a href=\\"https://www.cnblogs.com/itdragon/p/8146439.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.cnblogs.com/itdragon/p/8146439.html</a><br>\\n&nbsp;<br>\\n<a href=\\"https://www.cnblogs.com/youyoui/p/7851007.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.cnblogs.com/youyoui/p/7851007.html</a><br>\\n&nbsp;<br>\\n<a href=\\"https://mp.weixin.qq.com/s/jm4J15_yqosBFNmn5f9R-w\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mp.weixin.qq.com/s/jm4J15_yqosBFNmn5f9R-w</a></p>","autoDesc":true}');export{c as comp,u as data};