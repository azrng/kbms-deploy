import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as e}from"./app-DMmdIwn0.js";const t={},p=e(`<h2 id="系统操作" tabindex="-1"><a class="header-anchor" href="#系统操作"><span>系统操作</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 查询连接数</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> system<span class="token punctuation">.</span>metrics <span class="token keyword">WHERE</span> metric <span class="token operator">LIKE</span> <span class="token string">&#39;%Connection&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 当前正在执行的查询</span>
<span class="token keyword">SELECT</span> query_id<span class="token punctuation">,</span> <span class="token keyword">user</span><span class="token punctuation">,</span> address<span class="token punctuation">,</span> query  <span class="token keyword">FROM</span> system<span class="token punctuation">.</span>processes <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> query_id<span class="token punctuation">;</span>

<span class="token comment">-- 存储空间统计</span>
<span class="token keyword">SELECT</span> name<span class="token punctuation">,</span>path<span class="token punctuation">,</span>formatReadableSize<span class="token punctuation">(</span>free_space<span class="token punctuation">)</span> <span class="token keyword">AS</span> free<span class="token punctuation">,</span>formatReadableSize<span class="token punctuation">(</span>total_space<span class="token punctuation">)</span> <span class="token keyword">AS</span> total<span class="token punctuation">,</span>formatReadableSize<span class="token punctuation">(</span>keep_free_space<span class="token punctuation">)</span> <span class="token keyword">AS</span> reserved <span class="token keyword">FROM</span> system<span class="token punctuation">.</span>disks<span class="token punctuation">;</span>

<span class="token comment">-- 慢查询</span>
<span class="token keyword">SELECT</span>
    <span class="token keyword">user</span><span class="token punctuation">,</span>
    client_hostname <span class="token keyword">AS</span> host<span class="token punctuation">,</span>
    client_name <span class="token keyword">AS</span> client<span class="token punctuation">,</span>
    formatDateTime<span class="token punctuation">(</span>query_start_time<span class="token punctuation">,</span> <span class="token string">&#39;%T&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> started<span class="token punctuation">,</span>
    query_duration_ms <span class="token operator">/</span> <span class="token number">1000</span> <span class="token keyword">AS</span> sec<span class="token punctuation">,</span>
    <span class="token function">round</span><span class="token punctuation">(</span>memory_usage <span class="token operator">/</span> <span class="token number">1048576</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> MEM_MB<span class="token punctuation">,</span>
    result_rows <span class="token keyword">AS</span> RES_CNT<span class="token punctuation">,</span>
    result_bytes <span class="token operator">/</span> <span class="token number">1048576</span> <span class="token keyword">AS</span> RES_MB<span class="token punctuation">,</span>
    read_rows <span class="token keyword">AS</span> R_CNT<span class="token punctuation">,</span>
    <span class="token function">round</span><span class="token punctuation">(</span>read_bytes <span class="token operator">/</span> <span class="token number">1048576</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> R_MB<span class="token punctuation">,</span>
    written_rows <span class="token keyword">AS</span> W_CNT<span class="token punctuation">,</span>
    <span class="token function">round</span><span class="token punctuation">(</span>written_bytes <span class="token operator">/</span> <span class="token number">1048576</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> W_MB<span class="token punctuation">,</span>
    query
<span class="token keyword">FROM</span> system<span class="token punctuation">.</span>query_log
<span class="token keyword">WHERE</span> <span class="token keyword">type</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> query_duration_ms <span class="token keyword">DESC</span>
    <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- 查看库表资源占用情况</span>
<span class="token keyword">select</span>
    <span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">rows</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">row</span><span class="token punctuation">,</span><span class="token comment">--总行数</span>
    formatReadableSize<span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>data_uncompressed_bytes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> ysq<span class="token punctuation">,</span><span class="token comment">--原始大小</span>
    formatReadableSize<span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>data_compressed_bytes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> ysh<span class="token punctuation">,</span><span class="token comment">--压缩大小</span>
    <span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>data_compressed_bytes<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token function">sum</span><span class="token punctuation">(</span>data_uncompressed_bytes<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> ys_rate<span class="token comment">--压缩率</span>
<span class="token keyword">from</span> system<span class="token punctuation">.</span>parts
<span class="token keyword">where</span> <span class="token keyword">database</span><span class="token operator">=</span><span class="token string">&#39;datacenter&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查看库中表行数统计</span>
<span class="token keyword">select</span> <span class="token keyword">database</span><span class="token punctuation">,</span><span class="token keyword">table</span><span class="token punctuation">,</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token keyword">rows</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">rows</span>
<span class="token keyword">from</span> system<span class="token punctuation">.</span>parts
<span class="token keyword">where</span> <span class="token keyword">database</span><span class="token operator">=</span><span class="token string">&#39;datacenter&#39;</span>
<span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token keyword">database</span><span class="token punctuation">,</span> <span class="token keyword">table</span>
<span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">rows</span> <span class="token keyword">desc</span><span class="token punctuation">;</span>


<span class="token keyword">select</span> <span class="token keyword">distinct</span> <span class="token keyword">table</span> <span class="token keyword">from</span> system<span class="token punctuation">.</span>parts <span class="token keyword">where</span> <span class="token keyword">database</span><span class="token operator">=</span><span class="token string">&#39;datacenter&#39;</span><span class="token punctuation">;</span>


<span class="token comment">-- drop  database datacenter;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> datacenter<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>3cdb162688e14cc6a1bc65befca5347c_YC150<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="程序连接" tabindex="-1"><a class="header-anchor" href="#程序连接"><span>程序连接</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># jdbc连接数据库 localhost:8123 表示 ClickHouse 数据库的地址和端口号，mydatabase 是数据库名称</span>
jdbc:clickhouse://localhost:8123/mydatabase?user<span class="token operator">=</span>myusername<span class="token operator">&amp;</span><span class="token assign-left variable">password</span><span class="token operator">=</span>mypassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="程序操作" tabindex="-1"><a class="header-anchor" href="#程序操作"><span>程序操作</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;PackageReference Include=&quot;ClickHouse.Client&quot; Version=&quot;2.3.0.326&quot; /&gt;

Host={0};Port={1};Database={2};User={3};Password={4};Compress=True;CheckCompressedHash=False;Compressor=lz4;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,k){return n(),a("div",null,o)}const i=s(t,[["render",c],["__file","changyongcaozuo.html.vue"]]),d=JSON.parse(`{"path":"/dataBase/clickhouse/changyongcaozuo.html","title":"常用操作","lang":"zh-CN","frontmatter":{"title":"常用操作","lang":"zh-CN","date":"2023-09-17T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"changyongcaozuo","slug":"ixx5mn35npqu92bb","docsId":"140121215","description":"系统操作 程序连接 程序操作","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/clickhouse/changyongcaozuo.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"常用操作"}],["meta",{"property":"og:description","content":"系统操作 程序连接 程序操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-15T05:51:03.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-15T05:51:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-15T05:51:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"系统操作","slug":"系统操作","link":"#系统操作","children":[]},{"level":2,"title":"程序连接","slug":"程序连接","link":"#程序连接","children":[]},{"level":2,"title":"程序操作","slug":"程序操作","link":"#程序操作","children":[]}],"git":{"createdTime":1695484404000,"updatedTime":1705297863000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":2},{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.05,"words":316},"filePathRelative":"dataBase/clickhouse/changyongcaozuo.md","localizedDate":"2023年9月17日","excerpt":"<h2>系统操作</h2>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- 查询连接数</span>\\n<span class=\\"token keyword\\">SELECT</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">FROM</span> system<span class=\\"token punctuation\\">.</span>metrics <span class=\\"token keyword\\">WHERE</span> metric <span class=\\"token operator\\">LIKE</span> <span class=\\"token string\\">'%Connection'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 当前正在执行的查询</span>\\n<span class=\\"token keyword\\">SELECT</span> query_id<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">user</span><span class=\\"token punctuation\\">,</span> address<span class=\\"token punctuation\\">,</span> query  <span class=\\"token keyword\\">FROM</span> system<span class=\\"token punctuation\\">.</span>processes <span class=\\"token keyword\\">ORDER</span> <span class=\\"token keyword\\">BY</span> query_id<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 存储空间统计</span>\\n<span class=\\"token keyword\\">SELECT</span> name<span class=\\"token punctuation\\">,</span>path<span class=\\"token punctuation\\">,</span>formatReadableSize<span class=\\"token punctuation\\">(</span>free_space<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">AS</span> free<span class=\\"token punctuation\\">,</span>formatReadableSize<span class=\\"token punctuation\\">(</span>total_space<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">AS</span> total<span class=\\"token punctuation\\">,</span>formatReadableSize<span class=\\"token punctuation\\">(</span>keep_free_space<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">AS</span> reserved <span class=\\"token keyword\\">FROM</span> system<span class=\\"token punctuation\\">.</span>disks<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 慢查询</span>\\n<span class=\\"token keyword\\">SELECT</span>\\n    <span class=\\"token keyword\\">user</span><span class=\\"token punctuation\\">,</span>\\n    client_hostname <span class=\\"token keyword\\">AS</span> host<span class=\\"token punctuation\\">,</span>\\n    client_name <span class=\\"token keyword\\">AS</span> client<span class=\\"token punctuation\\">,</span>\\n    formatDateTime<span class=\\"token punctuation\\">(</span>query_start_time<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'%T'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">AS</span> started<span class=\\"token punctuation\\">,</span>\\n    query_duration_ms <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1000</span> <span class=\\"token keyword\\">AS</span> sec<span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">round</span><span class=\\"token punctuation\\">(</span>memory_usage <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1048576</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">AS</span> MEM_MB<span class=\\"token punctuation\\">,</span>\\n    result_rows <span class=\\"token keyword\\">AS</span> RES_CNT<span class=\\"token punctuation\\">,</span>\\n    result_bytes <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1048576</span> <span class=\\"token keyword\\">AS</span> RES_MB<span class=\\"token punctuation\\">,</span>\\n    read_rows <span class=\\"token keyword\\">AS</span> R_CNT<span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">round</span><span class=\\"token punctuation\\">(</span>read_bytes <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1048576</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">AS</span> R_MB<span class=\\"token punctuation\\">,</span>\\n    written_rows <span class=\\"token keyword\\">AS</span> W_CNT<span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">round</span><span class=\\"token punctuation\\">(</span>written_bytes <span class=\\"token operator\\">/</span> <span class=\\"token number\\">1048576</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">AS</span> W_MB<span class=\\"token punctuation\\">,</span>\\n    query\\n<span class=\\"token keyword\\">FROM</span> system<span class=\\"token punctuation\\">.</span>query_log\\n<span class=\\"token keyword\\">WHERE</span> <span class=\\"token keyword\\">type</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">2</span>\\n<span class=\\"token keyword\\">ORDER</span> <span class=\\"token keyword\\">BY</span> query_duration_ms <span class=\\"token keyword\\">DESC</span>\\n    <span class=\\"token keyword\\">LIMIT</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 查看库表资源占用情况</span>\\n<span class=\\"token keyword\\">select</span>\\n    <span class=\\"token function\\">sum</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">rows</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">as</span> <span class=\\"token keyword\\">row</span><span class=\\"token punctuation\\">,</span><span class=\\"token comment\\">--总行数</span>\\n    formatReadableSize<span class=\\"token punctuation\\">(</span><span class=\\"token function\\">sum</span><span class=\\"token punctuation\\">(</span>data_uncompressed_bytes<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">as</span> ysq<span class=\\"token punctuation\\">,</span><span class=\\"token comment\\">--原始大小</span>\\n    formatReadableSize<span class=\\"token punctuation\\">(</span><span class=\\"token function\\">sum</span><span class=\\"token punctuation\\">(</span>data_compressed_bytes<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">as</span> ysh<span class=\\"token punctuation\\">,</span><span class=\\"token comment\\">--压缩大小</span>\\n    <span class=\\"token function\\">round</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">sum</span><span class=\\"token punctuation\\">(</span>data_compressed_bytes<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">/</span> <span class=\\"token function\\">sum</span><span class=\\"token punctuation\\">(</span>data_uncompressed_bytes<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">100</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> ys_rate<span class=\\"token comment\\">--压缩率</span>\\n<span class=\\"token keyword\\">from</span> system<span class=\\"token punctuation\\">.</span>parts\\n<span class=\\"token keyword\\">where</span> <span class=\\"token keyword\\">database</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">'datacenter'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 查看库中表行数统计</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token keyword\\">database</span><span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">table</span><span class=\\"token punctuation\\">,</span><span class=\\"token function\\">sum</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">rows</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">as</span> <span class=\\"token keyword\\">rows</span>\\n<span class=\\"token keyword\\">from</span> system<span class=\\"token punctuation\\">.</span>parts\\n<span class=\\"token keyword\\">where</span> <span class=\\"token keyword\\">database</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">'datacenter'</span>\\n<span class=\\"token keyword\\">group</span> <span class=\\"token keyword\\">by</span> <span class=\\"token keyword\\">database</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">table</span>\\n<span class=\\"token keyword\\">order</span> <span class=\\"token keyword\\">by</span> <span class=\\"token keyword\\">rows</span> <span class=\\"token keyword\\">desc</span><span class=\\"token punctuation\\">;</span>\\n\\n\\n<span class=\\"token keyword\\">select</span> <span class=\\"token keyword\\">distinct</span> <span class=\\"token keyword\\">table</span> <span class=\\"token keyword\\">from</span> system<span class=\\"token punctuation\\">.</span>parts <span class=\\"token keyword\\">where</span> <span class=\\"token keyword\\">database</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">'datacenter'</span><span class=\\"token punctuation\\">;</span>\\n\\n\\n<span class=\\"token comment\\">-- drop  database datacenter;</span>\\n\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> datacenter<span class=\\"token punctuation\\">.</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">\`</span>3cdb162688e14cc6a1bc65befca5347c_YC150<span class=\\"token punctuation\\">\`</span></span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}`);export{i as comp,d as data};