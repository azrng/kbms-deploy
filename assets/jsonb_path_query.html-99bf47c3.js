import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as i,a as n,b as s,d as l,e as u}from"./app-3c3dee46.js";const p={},c=u(`<h1 id="pgsql小知识之jsonb-path-query" tabindex="-1"><a class="header-anchor" href="#pgsql小知识之jsonb-path-query" aria-hidden="true">#</a> PgSQL小知识之jsonb_path_query</h1><h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><p>最近一个有个场景是这样子的，在表中有一个字段存储了一个json格式的文本，我需要取里面的一些列，按照我之前操作的习惯，那么就只能查询到内存中处理了，但是这是pgsql，我还这么处理，那不是白瞎这<strong>世界最先进的开源关系型数据库</strong>称号了。</p><h1 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h1><p>该字段保存的数据格式如下(模拟的假数据)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
    {
        &quot;type&quot;: 1,
        &quot;tableName&quot;: &quot;emr.aaa&quot;,
        &quot;remark&quot;: &quot;xxx&quot;
    },
    {
        &quot;type&quot;: 1,
        &quot;tableName&quot;: &quot;emr.bbb&quot;,
        &quot;remark&quot;: &quot;xxx&quot;
    },
    {
        &quot;type&quot;: 2,
        &quot;tableName&quot;: &quot;emr.ccc&quot;,
        &quot;remark&quot;: &quot;xxx&quot;
    },
    {
        &quot;type&quot;: 2,
        &quot;tableName&quot;: &quot;emr.ddd&quot;,
        &quot;remark&quot;: &quot;xxx&quot;
    },
    {
        &quot;type&quot;: 3,
        &quot;tableName&quot;: &quot;emr.eee&quot;,
        &quot;remark&quot;: &quot;xxx&quot;
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我需要查询type为2的里面的tableName字段，发现可以使用函数jsonb_path_query来处理。</p><p>开始编写SQL，因为该字段的类型是text，所以首先要将类型转为jsonb形式然后筛选type为2的，编写SQL如下</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> jsonb_path_query<span class="token punctuation">(</span>t<span class="token punctuation">.</span>content::jsonb<span class="token punctuation">,</span><span class="token string">&#39;$[*]?(@.type==2)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> <span class="token keyword">public</span><span class="token punctuation">.</span>demo t

<span class="token comment">-- 输出结果</span>
{<span class="token string">&quot;type&quot;</span>: <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;remark&quot;</span>: <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tableName&quot;</span>: <span class="token string">&quot;emr.ccc&quot;</span>}
{<span class="token string">&quot;type&quot;</span>: <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;remark&quot;</span>: <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tableName&quot;</span>: <span class="token string">&quot;emr.ddd&quot;</span>}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还需要去获取里面的tableName字段，这个时候我们可以使用json操作符#&gt;&gt;来获取json对象</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> jsonb_path_query<span class="token punctuation">(</span>t<span class="token punctuation">.</span>content::jsonb<span class="token punctuation">,</span><span class="token string">&#39;$[*]?(@.type==2)&#39;</span><span class="token punctuation">)</span> <span class="token comment">#&gt;&gt; &#39;{tableName}&#39; from public.demo t</span>
<span class="token comment">-- 输出结果</span>
emr<span class="token punctuation">.</span>ccc
emr<span class="token punctuation">.</span>ddd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就这样子获取到我想要的数据了。</p><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><p>上述操作有点类似xpath的用法省去了我查询到内存中再处理的复杂操作，直接一条SQL就可以获取到我想要的数据，我的使用场景就是一个几百条数据的配置表中，所以不会出现慢的情况，如果你的使用场景数据量大，先测试再使用。</p><h1 id="函数说明" tabindex="-1"><a class="header-anchor" href="#函数说明" aria-hidden="true">#</a> 函数说明</h1><h2 id="jsonb-path-query" tabindex="-1"><a class="header-anchor" href="#jsonb-path-query" aria-hidden="true">#</a> jsonb_path_query</h2><blockquote><p>jsonb_path_query(target jsonb, path jsonpath [, vars jsonb [, silent bool]])</p></blockquote><p>获取指定的json值的json路径返回的所有json项</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> jsonb_path_query<span class="token punctuation">(</span><span class="token string">&#39;{&quot;a&quot;:[1,2,3,4,5]}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$.a[*] ? (@ &gt;= $min &amp;&amp; @ &lt;= $max)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;{&quot;min&quot;:2,&quot;max&quot;:4}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- 2</span>
<span class="token comment">-- 3</span>
<span class="token comment">-- 4</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> jsonb_path_query<span class="token punctuation">(</span><span class="token string">&#39;{&quot;a&quot;:{&quot;type&quot;: 5,&quot;name&quot;: &quot;zhangsan&quot;}}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$.a[*] ? (@.type==5 ).name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">-- &quot;zhangsan&quot;</span>

<span class="token keyword">select</span>  jsonb_path_query<span class="token punctuation">(</span><span class="token string">&#39;{&quot;a&quot;:{&quot;type&quot;: 5,&quot;name&quot;: &quot;zhangsan&quot;}}&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$.a[*] ? (@.type==5 )&#39;</span><span class="token punctuation">)</span> <span class="token comment">#&gt;&gt;&#39;{name}&#39;</span>
<span class="token comment">-- zhangsan</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> #&gt;&gt;</h2><p>以text形式获取指定路径上的json对象</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token string">&#39;{&quot;a&quot;:[1,2,3],&quot;b&quot;:[4,5,6]}&#39;</span>::json<span class="token comment">#&gt;&#39;{a,2}&#39;;</span>
<span class="token comment">-- 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h1><blockquote><p>json和jsonb从用户操作角度来说是没有区别的，区别主要是存储和读取的系统处理和耗时方面有区别。json写入，读取慢，jsonb写入慢，读取快.</p></blockquote>`,24),r={href:"http://postgres.cn/docs/12/functions-json.html",target:"_blank",rel:"noopener noreferrer"};function d(m,q){const a=t("ExternalLinkIcon");return o(),i("div",null,[c,n("p",null,[s("中文教程地址："),n("a",r,[s("http://postgres.cn/docs/12/functions-json.html"),l(a)])])])}const k=e(p,[["render",d],["__file","jsonb_path_query.html.vue"]]);export{k as default};
