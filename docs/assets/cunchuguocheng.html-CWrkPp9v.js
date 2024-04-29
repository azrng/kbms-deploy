import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as a,c as d,a as e,d as n,e as l,b as r}from"./app-qB9_Bjjp.js";const c={},p=r(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><p>把复杂的操作，封装一个过程。类似于函数。</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><p>1、复杂操作，调用简单。 2、速度快。</p><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点：</span></a></h3><p>1、封装复杂。 2、没有灵活性。</p><h3 id="查看所有存储过程命令" tabindex="-1"><a class="header-anchor" href="#查看所有存储过程命令"><span>查看所有存储过程命令</span></a></h3><p>1 show procedure status; 查看存储过程或函数的创建代码： 1 show create procedure proc_name; 2 show create function func_name; 调用存储命令： 1 call 名称; 删除存储过程命令： 1 DROP {PROCEDURE | FUNCTION} [IF EXISTS] 名称； 创建存储过程： 1 create procedure 名称(参数,.....) 2             begin 3                 过程体; 4                 过程体; 5             end// 参数： 1 in|out|inout 参数名称 类型(长度) 在sql语句中给变量赋值： 1 into 在过程体外声明变量： 1 @变量名 重新制定sql语句的结束符： 1 delimiter // 例子：获取5条文章记录 1 create procedure getNews() 2     begin 3         select * from news limit 5; 4     end// 例子：获取n条文章记录 1 create procedure getNewsN(in n int(5)) 2     begin 3         select * from news limit n; 4     end// 例子：获取某栏目下文章的条数。 1 create procedure getNewsByType(in fid int,out num int) 2     begin 3         select count(*) into num from news where fcid=fid; 4     end// 声明变量： 1 declare 变量名 类型(长度) default 默认值; 给变量赋值： 1 set 变量名=值; 说明： 强类型。 例子：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1 create procedure test()
2     begin
3         declare a int default 5;
4         declare b int default 6;
5         declare c int default 0;
6         set c=a+b;
7         select c as num;
8     end//
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3 条件语句</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> 1 if 条件 then
 2   语句;
 3 else
 4   语句;
 5 end if;
 6 
 7 if 条件then
 8   语句;
 9 elseif 条件then
10    语句;
11 .....
12 else
13 
14 end if;
15 
16 循环语句17 while 循环条件 do
18    循环体;
19    变换步长;
20 end while;
例子：输出1到10之间偶数
 1 create procedure oshu()
 2    begin
 3        declare i int default 1;
 4        while i&lt;11 do
 5             if i%2 = 0  then
 6                 select i;
 7             end if;
 8             set i=i+1;
 9        end while;
10     end//
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：使用存储过程实现 购物</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> 1 create procedure buy1(in pidn int,in uidn int,in numn int)
 2 begin
 3   declare jiage float(7,2) default 0.00;
 4   declare zongjia float(9,2) default 0.00;
 5   declare e tinyint(1) default 0;
 6   declare continue handler for SQLEXCEPTION set e=1;
 7   -- 获取价格 8   select price into jiage from productn where pid=pidn;
 9   -- 算出总价10    set zongjia=jiage*numn;
11    -- 开启事务12    start transaction;
13    -- 扣款14    update usern set money=money-zongjia where uid=uidn;
15    -- 出库16    update productn set num=num-numn where pid=pidn;
17    -- 判断是否有异常18    if e=1 then
19       rollback;
20       select 0 as re;
21    else
22       commit;
23       select 1 as re;
24    end if;
25 end//
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),b={href:"https://www.cnblogs.com/yuanwanli/p/9022617.html",target:"_blank",rel:"noopener noreferrer"};function u(o,m){const i=t("ExternalLinkIcon");return a(),d("div",null,[p,e("p",null,[n("获取异常： 1 declare continue handler for SQLEXCEPTION set e=1;     参考资料："),e("a",b,[n("https://www.cnblogs.com/yuanwanli/p/9022617.html"),l(i)])])])}const g=s(c,[["render",u],["__file","cunchuguocheng.html.vue"]]),f=JSON.parse('{"path":"/dataBase/mysql/jichuzhishi/cunchuguocheng.html","title":"存储过程","lang":"zh-CN","frontmatter":{"title":"存储过程","lang":"zh-CN","date":"2023-08-02T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"cunchuguocheng","slug":"gmwn3w","docsId":"26499294","description":"定义 把复杂的操作，封装一个过程。类似于函数。 优点 1、复杂操作，调用简单。 2、速度快。 缺点： 1、封装复杂。 2、没有灵活性。 查看所有存储过程命令 1 show procedure status; 查看存储过程或函数的创建代码： 1 show create procedure proc_name; 2 show create function...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/mysql/jichuzhishi/cunchuguocheng.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"存储过程"}],["meta",{"property":"og:description","content":"定义 把复杂的操作，封装一个过程。类似于函数。 优点 1、复杂操作，调用简单。 2、速度快。 缺点： 1、封装复杂。 2、没有灵活性。 查看所有存储过程命令 1 show procedure status; 查看存储过程或函数的创建代码： 1 show create procedure proc_name; 2 show create function..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-23T16:00:19.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-08-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-23T16:00:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"存储过程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-23T16:00:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点：","slug":"缺点","link":"#缺点","children":[]},{"level":3,"title":"查看所有存储过程命令","slug":"查看所有存储过程命令","link":"#查看所有存储过程命令","children":[]}]}],"git":{"createdTime":1695484404000,"updatedTime":1695484819000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":2.24,"words":673},"filePathRelative":"dataBase/mysql/jichuzhishi/cunchuguocheng.md","localizedDate":"2023年8月2日","excerpt":"<h2>定义</h2>\\n<p>把复杂的操作，封装一个过程。类似于函数。</p>\\n<h3>优点</h3>\\n<p>1、复杂操作，调用简单。\\n2、速度快。</p>\\n<h3>缺点：</h3>\\n<p>1、封装复杂。\\n2、没有灵活性。</p>\\n<h3>查看所有存储过程命令</h3>\\n<p>1 show procedure status;\\n查看存储过程或函数的创建代码：\\n1 show create procedure proc_name;\\n2 show create function func_name;\\n调用存储命令：\\n1 call 名称;\\n删除存储过程命令：\\n1 DROP {PROCEDURE | FUNCTION} [IF EXISTS] 名称；\\n创建存储过程：\\n1 create procedure 名称(参数,.....)\\n2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; begin\\n3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 过程体;\\n4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 过程体;\\n5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; end//\\n参数：\\n1 in|out|inout 参数名称 类型(长度)\\n在sql语句中给变量赋值：\\n1 into\\n在过程体外声明变量：\\n1 @变量名\\n重新制定sql语句的结束符：\\n1 delimiter //\\n例子：获取5条文章记录\\n1 create procedure getNews()\\n2&nbsp;&nbsp;&nbsp;&nbsp; begin\\n3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; select * from news limit 5;\\n4&nbsp;&nbsp;&nbsp;&nbsp; end//\\n例子：获取n条文章记录\\n1 create procedure getNewsN(in n int(5))\\n2&nbsp;&nbsp;&nbsp;&nbsp; begin\\n3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; select * from news limit n;\\n4&nbsp;&nbsp;&nbsp;&nbsp; end//\\n例子：获取某栏目下文章的条数。\\n1 create procedure getNewsByType(in fid int,out num int)\\n2&nbsp;&nbsp;&nbsp;&nbsp; begin\\n3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; select count(*) into num from news where fcid=fid;\\n4&nbsp;&nbsp;&nbsp;&nbsp; end//\\n声明变量：\\n1 declare 变量名 类型(长度) default 默认值;\\n给变量赋值：\\n1 set 变量名=值;\\n说明：\\n强类型。\\n例子：</p>","autoDesc":true}');export{g as comp,f as data};
