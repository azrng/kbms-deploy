import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as s}from"./app-DMmdIwn0.js";const t="/kbms/common/1641308887452-73e595f4-e7de-4db1-a4e3-7342dfa51e7b.png",l={},r=s(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>索引并不是越多越好，要根据查询针对性的创建，考虑where和order by 尽量避免在where子句中对字段进行null值判断，否则将导致引起放弃使用索引而进行全表扫描 值分布很稀少的字段不适合建索引，例如“性别”这种只有两三个值的字段 使用多列索引时主意顺序和查询条件保持一致，同时删除不必要的单列索引</p><h2 id="索引分类" tabindex="-1"><a class="header-anchor" href="#索引分类"><span>索引分类</span></a></h2><blockquote><p>唯一索引：唯一性，指定列不能出现重复数据 主键索引：一般在创建表的时候进行制定，一个表只有一个主键索引 联合索引：在表中两个或者多个列以上的基础创建索引</p></blockquote><h3 id="查询索引" tabindex="-1"><a class="header-anchor" href="#查询索引"><span>查询索引</span></a></h3><blockquote><p>show index from 表名;</p></blockquote><h3 id="唯一索引-unique" tabindex="-1"><a class="header-anchor" href="#唯一索引-unique"><span>唯一索引：UNIQUE</span></a></h3><p>索引列的值必须唯一，但允许有空值。如果是组合索引，则列值的组合必须唯一; 如果该字段信息保证不会重复例如身份证用作索引市，可设置为这个。</p><p>创建唯一索引</p><blockquote><p>CREATE UNIQUE INDEX indexName ON mytable(username(length))</p></blockquote><p>修改表结构</p><blockquote><p>ALTER table mytable ADD UNIQUE [indexName] (username(length))</p></blockquote><h3 id="普通索引-normal" tabindex="-1"><a class="header-anchor" href="#普通索引-normal"><span>普通索引：normal</span></a></h3><p>创建普通索引</p><blockquote><p>alter table 表名 add index 索引名(表字段)</p></blockquote><p>删除索引</p><blockquote><p>DROP INDEX 索引名称 ON 表名;</p></blockquote><h3 id="主键索引-primary-key" tabindex="-1"><a class="header-anchor" href="#主键索引-primary-key"><span>主键索引：PRIMARY KEY</span></a></h3><p>创建索引</p><blockquote><p>ALTER TABLE table_name ADD PRIMARY KEY(column_list)</p></blockquote><h3 id="全文搜索索引-fulltext" tabindex="-1"><a class="header-anchor" href="#全文搜索索引-fulltext"><span>全文搜索索引：fulltext</span></a></h3><p>创建全文搜索索引： <strong>CREATE</strong> FULLTEXT <strong>INDEX</strong> index_content <strong>ON</strong> article(content) 表示全文搜索，在检索长文本时间效果最好，短文本建议使用index； 空间索引：SPATIAL 是对空间数据类型的字段建立的索引。</p><p>1．选择唯一性索引 2．为经常需要排序、分组和联合操作的字段建立索引 3．为常作为查询条件的字段建立索引 4．限制索引的数目 5．尽量使用数据量少的索引 6．尽量使用前缀来索引 7．删除不再使用或者很少使用的索引 8. 经常更新修改的字段不要建立索引（针对mysql说，因为字段更改同时索引就要重新建立，排序，而Orcale好像是有这样的机制字段值更改了，它不立刻建立索引，排序索引，而是根据更改个数，时间段去做平衡索引这件事的） 9、不推荐在同一列建多个索引</p><p>主键        索引类型：unique     索引方法：btree   普通列    索引类型：normal     索引方法：btree</p><h3 id="复合索引" tabindex="-1"><a class="header-anchor" href="#复合索引"><span>复合索引</span></a></h3><p>创建复合索引</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>ALTER TABLE employee ADD <span class="token return-type class-name">INDEX</span> idx_name_salary <span class="token punctuation">(</span>name<span class="token punctuation">,</span>salary<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="最左原则" tabindex="-1"><a class="header-anchor" href="#最左原则"><span>最左原则</span></a></h4><p>当我们为name,salary列创建了复合索引，满足复合索引的最左特性，哪怕只是部分，复合索引生效</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>SELECT <span class="token operator">*</span> FROM employee <span class="token class-name">WHERE</span> NAME<span class="token operator">=</span>&#39;哪吒编程&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>没有出现左边的字段，则不满足最左特性，索引失效</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>SELECT <span class="token operator">*</span> FROM employee <span class="token class-name">WHERE</span> salary<span class="token operator">=</span><span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复合索引全使用，按左侧顺序出现 name,salary，索引生效</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>SELECT <span class="token operator">*</span> FROM employee <span class="token class-name">WHERE</span> NAME<span class="token operator">=</span>&#39;哪吒编程&#39; <span class="token class-name">AND</span> salary<span class="token operator">=</span><span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>虽然违背了最左特性，但MySQL执行SQL时会进行优化，底层进行颠倒优化</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>SELECT <span class="token operator">*</span> FROM employee <span class="token class-name">WHERE</span> salary<span class="token operator">=</span><span class="token number">5000</span> <span class="token class-name">AND</span> NAME<span class="token operator">=</span>&#39;哪吒编程&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="索引方法" tabindex="-1"><a class="header-anchor" href="#索引方法"><span>索引方法</span></a></h2><p><strong>一、B-Tree</strong> B-Tree是最常见的索引类型，所有值（被索引的列）都是排过序的，每个叶节点到跟节点距离相等。所以B-Tree适合用来查找某一范围内的数据，而且可以直接支持数据排序（ORDER BY） B-Tree在MyISAM里的形式和Innodb稍有不同： MyISAM表数据文件和索引文件是分离的，索引文件仅保存数据记录的磁盘地址 InnoDB表数据文件本身就是主索引，叶节点data域保存了完整的数据记录 <strong>二、Hash索引</strong> 1.仅支持&quot;=&quot;,&quot;IN&quot;和&quot;&lt;=&gt;&quot;精确查询，不能使用范围查询： 由于Hash索引比较的是进行Hash运算之后的Hash值，所以它只能用于等值的过滤，不能用于基于范围的过滤，因为经过相应的Hash算法处理之后的Hash 2.不支持排序： 由于Hash索引中存放的是经过Hash计算之后的Hash值，而且Hash值的大小关系并不一定和Hash运算前的键值完全一样，所以数据库无法利用索引的数据来避免任何排序运算 3.在任何时候都不能避免表扫描： 由于Hash索引比较的是进行Hash运算之后的Hash值，所以即使取满足某个Hash键值的数据的记录条数，也无法从Hash索引中直接完成查询，还是要通过访问表中的实际数据进行相应的比较，并得到相应的结果 4.检索效率高，索引的检索可以一次定位，不像B-Tree索引需要从根节点到枝节点，最后才能访问到页节点这样多次的IO访问，所以Hash索引的查询效率要远高于B-Tree索引 5.只有Memory引擎支持显式的Hash索引，但是它的Hash是nonunique的，冲突太多时也会影响查找性能。Memory引擎默认的索引类型即是Hash索引，虽然它也支持B-Tree索引</p><h2 id="执行计划" tabindex="-1"><a class="header-anchor" href="#执行计划"><span>执行计划</span></a></h2><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>explain <span class="token keyword">select</span> <span class="token operator">*</span> FROM userinfo <span class="token keyword">where</span> <span class="token class-name">id</span><span class="token operator">=</span>&#39;00015ffa<span class="token operator">-</span><span class="token number">8440</span><span class="token operator">-</span><span class="token number">4729</span><span class="token operator">-</span>87b3<span class="token operator">-</span>3552acc5a59c&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li>table：显示这一行的数据是关于哪张表的</li><li>type显示的是访问类型，是较为重要的一个指标，结果值从好到坏依次是：system &gt; const &gt; eq_ref &gt; ref &gt; fulltext &gt; ref_or_null &gt; index_merge &gt; unique_subquery &gt; index_subquery &gt; range &gt; index &gt; ALL ,一般来说，得保证查询至少达到range级别，最好能达到ref。</li><li>possible_keys：显示可能应用在这张表中的索引。如果为空，没有可能的索引。可以为相关的域从WHERE语句中选择一个合适的语句</li><li>key： 实际使用的索引。如果为NULL，则没有使用索引。很少的情况下，MYSQL会选择优化不足的索引。这种情况下，可以在SELECT语句中使用USE INDEX（indexname）来强制使用一个索引或者用IGNORE INDEX（indexname）来强制MYSQL忽略索引</li><li>key_len：使用的索引的长度。在不损失精确性的情况下，长度越短越好</li><li>ref：显示索引的哪一列被使用了，如果可能的话，是一个常数</li><li>rows：MYSQL认为必须检查的用来返回请求数据的行数</li></ul><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><p>system：表仅有一行，基本用不到； const：表最多一行数据配合，主键查询时触发较多； eq_ref：对于每个来自于前面的表的行组合，从该表中读取一行。这可能是最好的联接类型，除了const类型； ref：对于每个来自于前面的表的行组合，所有有匹配索引值的行将从这张表中读取； range：只检索给定范围的行，使用一个索引来选择行。当使用=、&lt;&gt;、&gt;、&gt;=、&lt;、&lt;=、IS NULL、&lt;=&gt;、BETWEEN或者IN操作符，用常量比较关键字列时，可以使用range； index：该联接类型与ALL相同，除了只有索引树被扫描。这通常比ALL快，因为索引文件通常比数据文件小； all：全表扫描； 性能排名：system &gt; const &gt; eq_ref &gt; ref &gt; range &gt; index &gt; all。 实际sql优化中，最后达到ref或range级别。</p>',44),o=[r];function i(p,c){return a(),n("div",null,o)}const u=e(l,[["render",i],["__file","suoyin.html.vue"]]),m=JSON.parse('{"path":"/dataBase/mysql/jichuzhishi/suoyin.html","title":"索引","lang":"zh-CN","frontmatter":{"title":"索引","lang":"zh-CN","date":"2023-04-02T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"suoyin","slug":"he2h5i","docsId":"26499334","description":"概述 索引并不是越多越好，要根据查询针对性的创建，考虑where和order by 尽量避免在where子句中对字段进行null值判断，否则将导致引起放弃使用索引而进行全表扫描 值分布很稀少的字段不适合建索引，例如“性别”这种只有两三个值的字段 使用多列索引时主意顺序和查询条件保持一致，同时删除不必要的单列索引 索引分类 唯一索引：唯一性，指定列不能出...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/mysql/jichuzhishi/suoyin.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"索引"}],["meta",{"property":"og:description","content":"概述 索引并不是越多越好，要根据查询针对性的创建，考虑where和order by 尽量避免在where子句中对字段进行null值判断，否则将导致引起放弃使用索引而进行全表扫描 值分布很稀少的字段不适合建索引，例如“性别”这种只有两三个值的字段 使用多列索引时主意顺序和查询条件保持一致，同时删除不必要的单列索引 索引分类 唯一索引：唯一性，指定列不能出..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1641308887452-73e595f4-e7de-4db1-a4e3-7342dfa51e7b.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-15T02:31:01.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-04-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-15T02:31:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1641308887452-73e595f4-e7de-4db1-a4e3-7342dfa51e7b.png\\"],\\"datePublished\\":\\"2023-04-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-15T02:31:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"索引分类","slug":"索引分类","link":"#索引分类","children":[{"level":3,"title":"查询索引","slug":"查询索引","link":"#查询索引","children":[]},{"level":3,"title":"唯一索引：UNIQUE","slug":"唯一索引-unique","link":"#唯一索引-unique","children":[]},{"level":3,"title":"普通索引：normal","slug":"普通索引-normal","link":"#普通索引-normal","children":[]},{"level":3,"title":"主键索引：PRIMARY KEY","slug":"主键索引-primary-key","link":"#主键索引-primary-key","children":[]},{"level":3,"title":"全文搜索索引：fulltext","slug":"全文搜索索引-fulltext","link":"#全文搜索索引-fulltext","children":[]},{"level":3,"title":"复合索引","slug":"复合索引","link":"#复合索引","children":[{"level":4,"title":"最左原则","slug":"最左原则","link":"#最左原则","children":[]}]}]},{"level":2,"title":"索引方法","slug":"索引方法","link":"#索引方法","children":[]},{"level":2,"title":"执行计划","slug":"执行计划","link":"#执行计划","children":[{"level":3,"title":"type","slug":"type","link":"#type","children":[]}]}],"git":{"createdTime":1695484404000,"updatedTime":1697337061000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":6.29,"words":1888},"filePathRelative":"dataBase/mysql/jichuzhishi/suoyin.md","localizedDate":"2023年4月2日","excerpt":"<h2>概述</h2>\\n<p>索引并不是越多越好，要根据查询针对性的创建，考虑where和order by\\n尽量避免在where子句中对字段进行null值判断，否则将导致引起放弃使用索引而进行全表扫描\\n值分布很稀少的字段不适合建索引，例如“性别”这种只有两三个值的字段\\n使用多列索引时主意顺序和查询条件保持一致，同时删除不必要的单列索引</p>\\n<h2>索引分类</h2>\\n<blockquote>\\n<p>唯一索引：唯一性，指定列不能出现重复数据\\n主键索引：一般在创建表的时候进行制定，一个表只有一个主键索引\\n联合索引：在表中两个或者多个列以上的基础创建索引</p>\\n</blockquote>\\n<h3>查询索引</h3>","autoDesc":true}');export{u as comp,m as data};