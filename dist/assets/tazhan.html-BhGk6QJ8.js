import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-BQsqMNmR.js";const e={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="纵向分割与横向分割" tabindex="-1"><a class="header-anchor" href="#纵向分割与横向分割"><span>纵向分割与横向分割</span></a></h2><p><strong>1. 纵向分表</strong><br> 纵向分表是指将一个有20列的表根据列拆分成两个表一个表10列一个表11列，这样单个表的容量就会减少很多，可以提高查询的性能，并在一定程度上减少锁行，锁表带来的性能损耗。<br> 纵向分表的原则是什么呢，应该怎样拆分呢？答案是根据业务逻辑的需要来拆分，对于一张表如果业务上分两次访问某一张表其中一部分数据，那么就可以根据每次访问列的不同来做拆分; 另外还可以根据列更新的频率来拆分，例如某些列每天要更新3次，有些列从创建开始基本上很少更新。<br> 举例：<br> 假定场景，我有一张用户表，这张表包含列：<br> ID, UserName, Password, RealName, Gender, Email, IsEmailValid, Birthday, Country, City, Address, Mobile, Phone, ZipCode, Hometown, OfficePhone, Company, Position, Industry, LatestLoginTime, LatestLoginIP, LoginTimes,OnlineMinutes<br> 假定现在我们的登录出现了性能问题，用户登录经常出现数据库超时的现象。我们打算用拆表的方法解决这个问题。先看下涉及到登录的字段有：UserName,Password,LatestLoginTime,LatestLoginIP,LoginTimes；那么我们就可以以此为依据将原表拆分为：UserLogin和UserBase 两个表，后者包含除了登录信息的其他列信息；两张表都要包含主键ID。<br><strong>2. 横向分区</strong><br> 横向分区是将表从行的角度拆分，例如将创建时间在05年之前的数据放在一个分区上，将05年到08年之间的数据放到另一个分区上，以此类推。横向分区所根据的列必须在聚集索引上，通常会根据时间，主键id等进行划分。<br> 横向分区将数据划分为不同的区，在根据分区列条件进行查询时可以缩小查询的范围，从而提高查询的性能；另外如果数据库服务器有多个cpu，则可以通过并行操作获得更好的性能。<br> 到底要根据那个列进行横向的分区和查询有关系，我们在建表的时候需要分析，会根据那个列进行查询。<br> 举例：</p><ol><li>订单是一个实效性很强的实体，我们很少查询几年前的订单数据，我们就可以在订单的创建时间列上创建分区函数来做分区。</li><li>比如帖子通常情况下只有在首页推荐的最新的帖子被访问次数很多，而几年前的帖子被访问的几率较小，这时候我们可以根据帖子的主键id来做分区，id小于300w的在一个分区上，id在300到600w之间的在一个分区上。</li></ol><h2 id="同比环比" tabindex="-1"><a class="header-anchor" href="#同比环比"><span>同比环比</span></a></h2><p>同比：相邻时间段的某一个相同时间点进行比较。<br> 比如13年3月和14年3月比较<br> 环比：相邻时间段的比较。<br> 比如13年全年和14年全年进行比较</p><h2 id="内存使用情况" tabindex="-1"><a class="header-anchor" href="#内存使用情况"><span>内存使用情况</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 查询SqlServer总体的内存使用情况</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      type</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        , </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(virtual_memory_reserved_kb) VM_Reserved</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        , </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(virtual_memory_committed_kb) VM_Commited</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        , </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(awe_allocated_kb) AWE_Allocated</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        , </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(shared_memory_reserved_kb) Shared_Reserved</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        , </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(shared_memory_committed_kb) Shared_Commited</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        --, sum(single_pages_kb)    --SQL2005、2008</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        --, sum(multi_pages_kb)        --SQL2005、2008</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    sys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">dm_os_memory_clerks</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">group by</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> type</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> type</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 查询当前数据库缓存的所有数据页面，哪些数据表，缓存的数据页面数量</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 从这些信息可以看出，系统经常要访问的都是哪些表，有多大？</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">object_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, object_name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">object_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">object_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">index_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, buffer_pages</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(*) </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> sys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">allocation_units</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a, </span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    sys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">dm_os_buffer_descriptors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b, </span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    sys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">partitions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> p </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">allocation_unit_id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">allocation_unit_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    and</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">container_id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">hobt_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    and</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">database_id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">db_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">group by</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">object_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">index_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> buffer_pages </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">desc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 查询缓存的各类执行计划，及分别占了多少内存</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 可以对比动态查询与参数化SQL（预定义语句）的缓存量</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    cacheobjtype</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        , objtype</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        , </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cast</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(size_in_bytes </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> bigint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1024</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> size_in_kb</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        , </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">count</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(bucketid) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cache_count</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    sys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">dm_exec_cached_plans</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">group by</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cacheobjtype, objtype</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">order by</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cacheobjtype, objtype</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 查询缓存中具体的执行计划，及对应的SQL</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 将此结果按照数据表或SQL进行统计，可以作为基线，调整索引时考虑</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 查询结果会很大，注意将结果集输出到表或文件中</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  usecounts ,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        refcounts ,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        size_in_bytes ,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        cacheobjtype ,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        objtype ,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        TEXT</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    sys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">dm_exec_cached_plans</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> cp</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        CROSS</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> APPLY</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> sys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">dm_exec_sql_text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(plan_handle)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> objtype </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DESC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GO</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p><a href="https://blog.csdn.net/gslzydwgh/article/details/57405898?utm_source=blogxgwz2" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/gslzydwgh/article/details/57405898?utm_source=blogxgwz2</a></p>`,9)]))}const r=i(e,[["render",t],["__file","tazhan.html.vue"]]),d=JSON.parse('{"path":"/dataBase/sqlserver/tazhan.html","title":"拓展","lang":"zh-CN","frontmatter":{"title":"拓展","lang":"zh-CN","date":"2023-09-23T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"tazhan","slug":"zw1d4c","docsId":"26493354","description":"纵向分割与横向分割 1. 纵向分表 纵向分表是指将一个有20列的表根据列拆分成两个表一个表10列一个表11列，这样单个表的容量就会减少很多，可以提高查询的性能，并在一定程度上减少锁行，锁表带来的性能损耗。 纵向分表的原则是什么呢，应该怎样拆分呢？答案是根据业务逻辑的需要来拆分，对于一张表如果业务上分两次访问某一张表其中一部分数据，那么就可以根据每次访问...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/sqlserver/tazhan.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"拓展"}],["meta",{"property":"og:description","content":"纵向分割与横向分割 1. 纵向分表 纵向分表是指将一个有20列的表根据列拆分成两个表一个表10列一个表11列，这样单个表的容量就会减少很多，可以提高查询的性能，并在一定程度上减少锁行，锁表带来的性能损耗。 纵向分表的原则是什么呢，应该怎样拆分呢？答案是根据业务逻辑的需要来拆分，对于一张表如果业务上分两次访问某一张表其中一部分数据，那么就可以根据每次访问..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-23T15:53:24.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-23T15:53:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"拓展\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-23T15:53:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"纵向分割与横向分割","slug":"纵向分割与横向分割","link":"#纵向分割与横向分割","children":[]},{"level":2,"title":"同比环比","slug":"同比环比","link":"#同比环比","children":[]},{"level":2,"title":"内存使用情况","slug":"内存使用情况","link":"#内存使用情况","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1695484404000,"updatedTime":1695484404000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":3.72,"words":1115},"filePathRelative":"dataBase/sqlserver/tazhan.md","localizedDate":"2023年9月23日","excerpt":"<h2>纵向分割与横向分割</h2>\\n<p><strong>1. 纵向分表</strong><br>\\n纵向分表是指将一个有20列的表根据列拆分成两个表一个表10列一个表11列，这样单个表的容量就会减少很多，可以提高查询的性能，并在一定程度上减少锁行，锁表带来的性能损耗。<br>\\n纵向分表的原则是什么呢，应该怎样拆分呢？答案是根据业务逻辑的需要来拆分，对于一张表如果业务上分两次访问某一张表其中一部分数据，那么就可以根据每次访问列的不同来做拆分; 另外还可以根据列更新的频率来拆分，例如某些列每天要更新3次，有些列从创建开始基本上很少更新。<br>\\n举例：<br>\\n假定场景，我有一张用户表，这张表包含列：<br>\\nID, UserName, Password, RealName, Gender, Email, IsEmailValid, Birthday, Country, City, Address, Mobile, Phone, ZipCode, Hometown, OfficePhone, Company, Position, Industry, LatestLoginTime, LatestLoginIP, LoginTimes,OnlineMinutes<br>\\n假定现在我们的登录出现了性能问题，用户登录经常出现数据库超时的现象。我们打算用拆表的方法解决这个问题。先看下涉及到登录的字段有：UserName,Password,LatestLoginTime,LatestLoginIP,LoginTimes；那么我们就可以以此为依据将原表拆分为：UserLogin和UserBase 两个表，后者包含除了登录信息的其他列信息；两张表都要包含主键ID。<br>\\n<strong>2. 横向分区</strong><br>\\n横向分区是将表从行的角度拆分，例如将创建时间在05年之前的数据放在一个分区上，将05年到08年之间的数据放到另一个分区上，以此类推。横向分区所根据的列必须在聚集索引上，通常会根据时间，主键id等进行划分。<br>\\n横向分区将数据划分为不同的区，在根据分区列条件进行查询时可以缩小查询的范围，从而提高查询的性能；另外如果数据库服务器有多个cpu，则可以通过并行操作获得更好的性能。<br>\\n到底要根据那个列进行横向的分区和查询有关系，我们在建表的时候需要分析，会根据那个列进行查询。<br>\\n举例：</p>","autoDesc":true}');export{r as comp,d as data};