import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as r,o as i}from"./app-fQkBsvt-.js";const n={};function a(o,e){return i(),t("div",null,e[0]||(e[0]=[r('<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><h3 id="_1-1-背景" tabindex="-1"><a class="header-anchor" href="#_1-1-背景"><span>1.1 背景</span></a></h3><p>索引用于快速找到某一列中有某一个特定值的行，不使用索引，数据库必须从第一条记录开始读完整个表，知道找到相关的行；如果查询的列有索引，数据库能快速到底一个位置去搜索数据。<br> MySQL官方对于索引的定义：索引市帮助MySQL高效获取数据的数据结构，也就是说索引是一种数据结构。</p><blockquote><p>目前大部分数据库系统及文件系统都采用B-Tree和B+Tree作为索引结构。</p></blockquote><h3 id="_1-2-索引优点" tabindex="-1"><a class="header-anchor" href="#_1-2-索引优点"><span>1.2 索引优点</span></a></h3><blockquote><p>唯一索引，保证数据库表的每一行数据的唯一性。<br> 大大加快数据的查询速度<br> 加速表和表之间的链接<br> 在使用分组和排序自居进行查询适合，显著减少查询中分组和排序的时间</p></blockquote><h3 id="_1-3-索引为什么加快查询速度" tabindex="-1"><a class="header-anchor" href="#_1-3-索引为什么加快查询速度"><span>1.3 索引为什么加快查询速度</span></a></h3><p>默认在查询的时候数据库会根据搜索条件进行全表扫描，遇到匹配条件的数据就加入搜索结果集合中。如果我们对某一个字段增加索引后，查询的时候就会先去所有列表中一次定位到特定值的行数，大大减少遍历匹配的行数，所以能明显增加查询的速度。<br> 原理：通过不断的缩小想要获得数据的范围来筛选出最终想要的结果，同时把随机的事件变成顺序的事件，也就是我们总是通过同一种查找方式来锁定数据。</p><h2 id="_2-索引分类" tabindex="-1"><a class="header-anchor" href="#_2-索引分类"><span>2. 索引分类</span></a></h2><ul><li>数据结构角度 <ul><li>B+数索引</li><li>Hash索引</li><li>FULLTEXT索引</li><li>R_Tree索引</li></ul></li><li>物理存储角度 <ul><li>聚集索引：拼音查字法</li><li>非聚集索引：部首查字法</li></ul></li><li>从逻辑角度 <ul><li>主键索引：一种特殊的唯一索引，不允许有空值。</li><li>普通索引或单列索引</li><li>多列索引(复合索引)：多个字段上创建的索引，只有在查询条件中使用了创建索引时候的第一个字段，索引才会生效被使用。 <ul><li>复合索引遵循左前缀集合</li></ul></li><li>唯一索引或者非唯一索引</li><li>空间索引：对空间数据类型的字段建立的索引 <ul><li>创建空间索引的列，必须将其声明为NOT NULL</li><li>空间索引只能在存储引擎为MYISAM的表中创建</li></ul></li></ul></li></ul><p>索引分为聚集索引和非聚集索引(<strong>从物理存储角度划分</strong>)，它们的区别是在物理数据的存储方式上。</p><ul><li>聚集索引是物理上的连续存在。</li><li>非聚集索引是逻辑上的连续。</li></ul><p>聚集索引插入值的时候速度慢(时间花费在“物理存储的排序”上，也就是首先要招到位置然后插入)，查询数据比聚集索引数据的速度快。</p><h3 id="_2-1-聚集索引" tabindex="-1"><a class="header-anchor" href="#_2-1-聚集索引"><span>2.1 聚集索引</span></a></h3><p>内容本身就是一种按照一定规则排列的目录成为聚集索引。<br> 　聚集索引基于数据行的键值，在表内排序和存储这些数据行。<br> 　(1).每张表只能有一个聚集索引，因为数据行本身只能按一个顺序存储.<br> 　(2).表中的物理顺序和索引中行的物理顺序是相同的，<strong>创建任何非聚集索引之前要先创建聚集索引，这是因为非聚集索引改变了表中行的物理顺序</strong>.<br> 　(3).关键值的唯一性使用UNIQUE关键字或者由内部的唯一标识符明确维护.<br> 　(4).在索引的创建过程中，SQL Server临时使用当前数据库的磁盘空间，所以要保证有足够的空间创建索引</p><p>聚集索引和非聚集索引的区别</p><ul><li>聚集索引和非聚集索引的根本区别是表记录的排列顺序与索引的排列顺序是否一致。 <ul><li>聚集索引表记录的排列顺序与索引的排列顺序一致，优点是查询速度快，因为一旦具有第一个索引值的记录被找到，具有联系索引值的记录也一定在紧跟其后。</li></ul></li><li>聚集索引的缺点是对表的修改速度较慢，这是Wie了保持表中的记录的物理顺序与索引顺序一致。 <ul><li>在将记录插入到数据页的相应位置，必须在数据页中进行数据重排，降低了执行速度。</li></ul></li><li>非聚集索引指定了表中记录的逻辑顺序，但记录的物理顺序和索引的顺序不一致，聚集索引和非聚集索引都采用了B+树的结构。</li></ul><h3 id="_2-2-非聚集索引" tabindex="-1"><a class="header-anchor" href="#_2-2-非聚集索引"><span>2.2 非聚集索引</span></a></h3><p>非聚集索引具有完全独立于数据行的结构，<strong>使用非聚集索引不用将物理数据页中的数据按列排序，非聚集索引包含索引键值和指向表数据存储位置的行定位器</strong>。可以对表或索引视图创建多个非聚集索引。通常，<strong>设计非聚集索引是为了改善经常使用的、没有建立聚集索引的查询的性能</strong>。查询优化器在搜索数据值时，先搜索非聚集索引以找到数据值在表中的位置，然后直接从该位置检索数据。这使得非聚集索引成为完全匹配查询的最佳选择，因为索引中包含搜索的数据值在表中的精确位置的项。<br> 　考虑使用非聚集索引的情况：<br> 　(1).使用JOIN或者GROUP BY子句,应为连接和分组操作中所涉及的列创建多个非聚集索引,为任何外键创建一个聚集索引.<br> 　(2).包含大量唯一值的字段.<br> 　(3).不返回大型结果集的查询,创建筛选索引以覆盖从大型表中返回定义完善的的行子集的查询.<br> 　(4).经常包含在查询的搜索条件(如返回完全匹配的WHERE子句)中的列.</p><h3 id="_2-3-其他类别索引" tabindex="-1"><a class="header-anchor" href="#_2-3-其他类别索引"><span>2.3 其他类别索引</span></a></h3><p>除了聚集索引和非聚集索引之外,还有一些根据其它依据(<strong>从逻辑角度</strong>)划分的索引：<br> **　(1).唯一索引：**确保索引键不包含重复的值，因此，表或视图中的每一行在某种程度上是唯一的。聚集索引和非聚集索引都可以是唯一索引。这种唯一性和主键约束是关联的，在某种程度上，主键约束等于唯一性的聚集索引。<br> **　(2).包含列索引：**一种非聚集索引，它扩展后不仅包含键列，还包含非键列。<br> **　(3).索引视图：**在视图上添加索引后能提高视图的查询效率。视图的索引将具体化视图，并将结果集永久存储在唯一的聚集索引中，而且存储方式相同，创建聚集索引后，可以为视图添加非聚集索引。<br> **　(4).全文索引：**一种特殊类型的基于标记的功能索引，由SQL Server全文引擎生成和维护，用于帮助在字符串数据中搜索复杂的词，这种索引的结构与数据库引擎使用的聚集索引或非聚集索引的B树结构是不同的。<br> **　(5).空间索引：**一种针对geometry数据类型的列上建立的索引，这样可以更高效的列中的空间对象执行某些操作，空间索引可以减少需要应用开销相对较大的空间操作的对象数。<br> **　(6).筛选索引:**一种经过优化的的非聚集索引，尤其适用于涵盖从定义完善的数据子集中选择数据的查询。筛选索引使用筛选谓词对表中的的部分进行索引，与全表索引相比，设计良好的筛选索引可以提高查询性能，减少索引维护开销并可降低索引存储开销<br> **　(7).XML索引：**是与XML数据关联的索引形式，是XML二进制大对象(BLOB)的已拆分持久表示形式，XML索引可以分为主索引和辅助索引。</p><h2 id="_3-设计原则" tabindex="-1"><a class="header-anchor" href="#_3-设计原则"><span>3. 设计原则</span></a></h2><p>索引创建不合理或者缺少索引都会对数据库和应用程序的性能造成障碍，搞笑的索引可以获得良好的性能。<br> 　(1).索引并非越多越好，一个表中如果有大量的索引，不仅占用大量的磁盘空间，而且会影响INSERT、DELETE、UPDATE等语句的性能。因为当表中数据更改的同时，索引也会进行调整和更新。<br> 　(2).<strong>避免对经常更新的表进行过多的索引，并且索引中的列尽可能少。而对经常用于查询的字段应该创建索引，但要避免添加不必要的字段。</strong><br> 　(3).数据量小的表最好不要使用索引，由于数据较少，查询花费的时间可能比遍历索引的时间还要短，索引可能不会产生优化效果。 <br> 　(4).在条件表达式中<strong>经常用到的、不同值较多的列上建立索引</strong>。如果在不同值较少的列上不要建立索引,比如在学生表的【性别】字段上只有【男】或【女】两个不同值，因此就无需建立索引，如果建立索引，不但不会提高查询效率，反而会严重降低更新速度。 <br> 　(5).当唯一性是某种数据本身的特征时，指定唯一索引，使用唯一索引能够确保定义的列的数据完整性，提高查询速度.<br> 　(6).在频繁进行排序或分组（即进行GROUP BY 或ORDER BY操作）的列上建立索引，如果待排序的列有多个，可以在这些列上建立组合索引。</p><h2 id="_4-索引的管理" tabindex="-1"><a class="header-anchor" href="#_4-索引的管理"><span>4. 索引的管理</span></a></h2><p>(1).查看表的索引：exec sp_helpindex &#39;tableName&#39;;<br> (2).查看索引的统计信息：DBCC SHOW_STATISTICS (&#39;数据库名.dbo.表名&#39;,索引名);<br> (3).修改索引名称：exec sp_rename &#39;表名.旧索引名&#39; ,&#39;新索引名&#39;, index;<br> 　　例如：将teacher表中的索引名称idx_nameAndgender更改为multi_index <br> 　　答案：exec sp_rename &#39;teacher.idx_nameAndgender&#39; ,&#39;multi_index&#39;, index<br> (4).删除索引：DROP INDEX 表名.索引名<br> 　　例如：删除表teacher中的索引 multi_index<br> 　　答案：DROP INDEX teacher.multi_index<br><strong>注：DROP INDEX 命令不能删除由 CREATE TABLE或者ALTER TABLE命令创建的主键（PRIMARY KEY）或者唯一性（UNIQUE）约束索引，也不能删除系统表中的索引.</strong><br> (5).创建索引<br>   CREATE [UNIQUE] [CLUSTERED|NONCLUSTERRED]<br>   INDEX 索引名 ON {table名|view名}(column名 [ASC|DESC] [,...n])</p><h2 id="_5-不走索引的情况" tabindex="-1"><a class="header-anchor" href="#_5-不走索引的情况"><span>5. 不走索引的情况</span></a></h2><ul><li>In查询，换exists</li><li>not in</li><li>is null和is not null</li><li>&lt;&gt;不走索引，可以拆分为&gt;或者&lt;</li></ul>',27)]))}const h=l(n,[["render",a],["__file","suoyin.html.vue"]]),c=JSON.parse('{"path":"/dataBase/commonOperator/suoyin.html","title":"索引","lang":"zh-CN","frontmatter":{"title":"索引","lang":"zh-CN","date":"2022-02-13T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"suoyin","slug":"urynwg","docsId":"23989121","description":"1. 简介 1.1 背景 索引用于快速找到某一列中有某一个特定值的行，不使用索引，数据库必须从第一条记录开始读完整个表，知道找到相关的行；如果查询的列有索引，数据库能快速到底一个位置去搜索数据。 MySQL官方对于索引的定义：索引市帮助MySQL高效获取数据的数据结构，也就是说索引是一种数据结构。 目前大部分数据库系统及文件系统都采用B-Tree和B+...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/commonOperator/suoyin.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"索引"}],["meta",{"property":"og:description","content":"1. 简介 1.1 背景 索引用于快速找到某一列中有某一个特定值的行，不使用索引，数据库必须从第一条记录开始读完整个表，知道找到相关的行；如果查询的列有索引，数据库能快速到底一个位置去搜索数据。 MySQL官方对于索引的定义：索引市帮助MySQL高效获取数据的数据结构，也就是说索引是一种数据结构。 目前大部分数据库系统及文件系统都采用B-Tree和B+..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-19T14:59:33.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-02-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-19T14:59:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-19T14:59:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 背景","slug":"_1-1-背景","link":"#_1-1-背景","children":[]},{"level":3,"title":"1.2 索引优点","slug":"_1-2-索引优点","link":"#_1-2-索引优点","children":[]},{"level":3,"title":"1.3 索引为什么加快查询速度","slug":"_1-3-索引为什么加快查询速度","link":"#_1-3-索引为什么加快查询速度","children":[]}]},{"level":2,"title":"2. 索引分类","slug":"_2-索引分类","link":"#_2-索引分类","children":[{"level":3,"title":"2.1 聚集索引","slug":"_2-1-聚集索引","link":"#_2-1-聚集索引","children":[]},{"level":3,"title":"2.2 非聚集索引","slug":"_2-2-非聚集索引","link":"#_2-2-非聚集索引","children":[]},{"level":3,"title":"2.3 其他类别索引","slug":"_2-3-其他类别索引","link":"#_2-3-其他类别索引","children":[]}]},{"level":2,"title":"3. 设计原则","slug":"_3-设计原则","link":"#_3-设计原则","children":[]},{"level":2,"title":"4. 索引的管理","slug":"_4-索引的管理","link":"#_4-索引的管理","children":[]},{"level":2,"title":"5. 不走索引的情况","slug":"_5-不走索引的情况","link":"#_5-不走索引的情况","children":[]}],"git":{"createdTime":1695484404000,"updatedTime":1721401173000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":3}]},"readingTime":{"minutes":9.33,"words":2800},"filePathRelative":"dataBase/commonOperator/suoyin.md","localizedDate":"2022年2月13日","excerpt":"<h2>1. 简介</h2>\\n<h3>1.1 背景</h3>\\n<p>索引用于快速找到某一列中有某一个特定值的行，不使用索引，数据库必须从第一条记录开始读完整个表，知道找到相关的行；如果查询的列有索引，数据库能快速到底一个位置去搜索数据。<br>\\nMySQL官方对于索引的定义：索引市帮助MySQL高效获取数据的数据结构，也就是说索引是一种数据结构。</p>\\n<blockquote>\\n<p>目前大部分数据库系统及文件系统都采用B-Tree和B+Tree作为索引结构。</p>\\n</blockquote>\\n<h3>1.2 索引优点</h3>\\n<blockquote>\\n<p>唯一索引，保证数据库表的每一行数据的唯一性。<br>\\n大大加快数据的查询速度<br>\\n加速表和表之间的链接<br>\\n在使用分组和排序自居进行查询适合，显著减少查询中分组和排序的时间</p>\\n</blockquote>","autoDesc":true}');export{h as comp,c as data};