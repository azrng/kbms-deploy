import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-vSdX8vi3.js";const t={},o=e(`<p>默认MySQL以；号结束，但是有些时候要把多行SQL语句作为一段进行执行，那么就需要使用DELIMITER  示例：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DELIMITER</span> $$ 
<span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>updateegopriceondelete<span class="token punctuation">\`</span></span>$$ 
<span class="token keyword">CREATE</span>
<span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">\`</span>updateegopriceondelete<span class="token punctuation">\`</span></span><span class="token keyword">AFTER</span> <span class="token keyword">DELETE</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">\`</span>customerinfo<span class="token punctuation">\`</span></span> 
<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span> 
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> egoprice WHEREcustomerId<span class="token operator">=</span>OLD<span class="token punctuation">.</span>customerId<span class="token punctuation">;</span> 
<span class="token keyword">END</span>$$ 
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>`,3),p=[o];function c(i,l){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","zhihangyugou.html.vue"]]),k=JSON.parse('{"path":"/dataBase/mysql/jichuzhishi/zhihangyugou.html","title":"执行语句","lang":"zh-CN","frontmatter":{"title":"执行语句","lang":"zh-CN","date":"2021-05-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"zhihangyugou","slug":"cm9g0l","docsId":"26499880","description":"默认MySQL以；号结束，但是有些时候要把多行SQL语句作为一段进行执行，那么就需要使用DELIMITER 示例：","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/mysql/jichuzhishi/zhihangyugou.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"执行语句"}],["meta",{"property":"og:description","content":"默认MySQL以；号结束，但是有些时候要把多行SQL语句作为一段进行执行，那么就需要使用DELIMITER 示例："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-23T15:53:24.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2021-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-23T15:53:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"执行语句\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-23T15:53:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1695484404000,"updatedTime":1695484404000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.3,"words":91},"filePathRelative":"dataBase/mysql/jichuzhishi/zhihangyugou.md","localizedDate":"2021年5月14日","excerpt":"<p>默认MySQL以；号结束，但是有些时候要把多行SQL语句作为一段进行执行，那么就需要使用DELIMITER&nbsp;\\n示例：</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">DELIMITER</span> $$ \\n<span class=\\"token keyword\\">DROP</span> <span class=\\"token keyword\\">TRIGGER</span> <span class=\\"token keyword\\">IF</span> <span class=\\"token keyword\\">EXISTS</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>updateegopriceondelete<span class=\\"token punctuation\\">`</span></span>$$ \\n<span class=\\"token keyword\\">CREATE</span>\\n<span class=\\"token keyword\\">TRIGGER</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>updateegopriceondelete<span class=\\"token punctuation\\">`</span></span><span class=\\"token keyword\\">AFTER</span> <span class=\\"token keyword\\">DELETE</span> <span class=\\"token keyword\\">ON</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>customerinfo<span class=\\"token punctuation\\">`</span></span> \\n<span class=\\"token keyword\\">FOR EACH ROW</span> <span class=\\"token keyword\\">BEGIN</span> \\n<span class=\\"token keyword\\">DELETE</span> <span class=\\"token keyword\\">FROM</span> egoprice WHEREcustomerId<span class=\\"token operator\\">=</span>OLD<span class=\\"token punctuation\\">.</span>customerId<span class=\\"token punctuation\\">;</span> \\n<span class=\\"token keyword\\">END</span>$$ \\n<span class=\\"token keyword\\">DELIMITER</span> <span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{u as comp,k as data};