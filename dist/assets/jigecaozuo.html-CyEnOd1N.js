import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-vSdX8vi3.js";const p={},o=t(`<h4 id="group-by分组" tabindex="-1"><a class="header-anchor" href="#group-by分组"><span>Group by分组</span></a></h4><p>测试数据：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code> var studentList <span class="token operator">=</span> new List<span class="token operator">&lt;</span>Student<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>
                new Student <span class="token punctuation">{</span>ClassName <span class="token operator">=</span> <span class="token string">&quot;软工一班&quot;</span><span class="token punctuation">,</span> StudentName <span class="token operator">=</span> <span class="token string">&quot;康巴一&quot;</span><span class="token punctuation">,</span> StuId <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                new Student <span class="token punctuation">{</span>ClassName <span class="token operator">=</span> <span class="token string">&quot;软工一班&quot;</span><span class="token punctuation">,</span> StudentName <span class="token operator">=</span> <span class="token string">&quot;康巴二&quot;</span><span class="token punctuation">,</span> StuId <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                new Student <span class="token punctuation">{</span>ClassName <span class="token operator">=</span> <span class="token string">&quot;软工一班&quot;</span><span class="token punctuation">,</span> StudentName <span class="token operator">=</span> <span class="token string">&quot;康巴三&quot;</span><span class="token punctuation">,</span> StuId <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                new Student <span class="token punctuation">{</span>ClassName <span class="token operator">=</span> <span class="token string">&quot;软工二班&quot;</span><span class="token punctuation">,</span> StudentName <span class="token operator">=</span> <span class="token string">&quot;康定一&quot;</span><span class="token punctuation">,</span> StuId <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                new Student <span class="token punctuation">{</span>ClassName <span class="token operator">=</span> <span class="token string">&quot;软工二班&quot;</span><span class="token punctuation">,</span> StudentName <span class="token operator">=</span> <span class="token string">&quot;康定二&quot;</span><span class="token punctuation">,</span> StuId <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                new Student <span class="token punctuation">{</span>ClassName <span class="token operator">=</span> <span class="token string">&quot;软工二班&quot;</span><span class="token punctuation">,</span> StudentName <span class="token operator">=</span> <span class="token string">&quot;康定三&quot;</span><span class="token punctuation">,</span> StuId <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
            var aa <span class="token operator">=</span> studentList<span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t<span class="token punctuation">.</span>ClassName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            var bb <span class="token operator">=</span> studentList<span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t<span class="token punctuation">.</span>ClassName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            var cc <span class="token operator">=</span> studentList<span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t<span class="token punctuation">.</span>ClassName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aa:   key是软工一班，对应的item下面有三个数组   Bb:   key是软工一班，对应的item下面有三个数组   Cc:   输出结果2</p><ul><li>如果想好分组后取分组后的第一条</li></ul><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>var aaa <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> group<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> group<span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">&gt;</span> x<span class="token punctuation">.</span>StartTime<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
var aaa <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
var aaa <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>t <span class="token operator">=</span><span class="token operator">&gt;</span> t<span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>x <span class="token operator">=</span><span class="token operator">&gt;</span> x<span class="token punctuation">.</span>StartTime<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>集合去重</li></ul><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>list <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>d <span class="token operator">=</span><span class="token operator">&gt;</span> new <span class="token punctuation">{</span> d<span class="token punctuation">.</span>Age<span class="token punctuation">,</span> d<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>d <span class="token operator">=</span><span class="token operator">&gt;</span> d<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者   利用hashset对于重复元素会进行过滤筛选达到去重的效果</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>public <span class="token keyword">static</span> IEnumerable<span class="token operator">&lt;</span>TSource<span class="token operator">&gt;</span> Distinct<span class="token operator">&lt;</span>TSource<span class="token punctuation">,</span> TKey<span class="token operator">&gt;</span><span class="token punctuation">(</span>
        this IEnumerable<span class="token operator">&lt;</span>TSource<span class="token operator">&gt;</span> source<span class="token punctuation">,</span>
        Func<span class="token operator">&lt;</span>TSource<span class="token punctuation">,</span> TKey<span class="token operator">&gt;</span> keySelector<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        var hashSet <span class="token operator">=</span> new HashSet<span class="token operator">&lt;</span>TKey<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token function">foreach</span> <span class="token punctuation">(</span>TSource element in source<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>hashSet<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">keySelector</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                yield <span class="token keyword">return</span> element<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="集合拼接-concat-和-union" tabindex="-1"><a class="header-anchor" href="#集合拼接-concat-和-union"><span>集合拼接：Concat 和 Union</span></a></h4><p>Concat 用来拼接两个集合，不会去除重复元素，示例：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>List<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> foo <span class="token operator">=</span> newList<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
List<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> bar <span class="token operator">=</span> newList<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 通过 Enumerable 类的静态方法</span>
var result <span class="token operator">=</span> Enumerable<span class="token punctuation">.</span><span class="token function">Concat</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1,2,3,3,4,5</span>
<span class="token comment">// 通过扩展方法</span>
var result <span class="token operator">=</span> foo<span class="token punctuation">.</span><span class="token function">Concat</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1,2,3,3,4,5</span>
Union 也是用来拼接两个集合，与 Concat 不同的是，它会去除重复项，示例：
var result <span class="token operator">=</span> foo<span class="token punctuation">.</span><span class="token function">Union</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1,2,3,4,5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="arraylist和list的区别" tabindex="-1"><a class="header-anchor" href="#arraylist和list的区别"><span>ArrayList和list的区别</span></a></h4><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token number">2.L</span>istA<span class="token punctuation">.</span><span class="token function">Distinct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//去重</span>
ListA<span class="token punctuation">.</span><span class="token function">Except</span><span class="token punctuation">(</span>ListB<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//差集</span>
ListA<span class="token punctuation">.</span><span class="token function">Union</span><span class="token punctuation">(</span>ListB<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//并集</span>
ListA<span class="token punctuation">.</span><span class="token function">Intersect</span><span class="token punctuation">(</span>ListB<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//交集</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","jigecaozuo.html.vue"]]),d=JSON.parse('{"path":"/dotnet/csharp/jigecaozuo/jigecaozuo.html","title":"集合操作","lang":"zh-CN","frontmatter":{"title":"集合操作","lang":"zh-CN","date":"2023-11-09T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["csharp"],"tag":["无"],"filename":"jigecaozuo","slug":"updvlw","docsId":"30978961","description":"Group by分组 测试数据： Aa: key是软工一班，对应的item下面有三个数组 Bb: key是软工一班，对应的item下面有三个数组 Cc: 输出结果2 如果想好分组后取分组后的第一条 集合去重 或者 利用hashset对于重复元素会进行过滤筛选达到去重的效果 集合拼接：Concat 和 Union Concat 用来拼接两个集合，不会去除...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/csharp/jigecaozuo/jigecaozuo.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"集合操作"}],["meta",{"property":"og:description","content":"Group by分组 测试数据： Aa: key是软工一班，对应的item下面有三个数组 Bb: key是软工一班，对应的item下面有三个数组 Cc: 输出结果2 如果想好分组后取分组后的第一条 集合去重 或者 利用hashset对于重复元素会进行过滤筛选达到去重的效果 集合拼接：Concat 和 Union Concat 用来拼接两个集合，不会去除..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T14:50:44.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-11-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T14:50:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集合操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-17T14:50:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":4,"title":"Group by分组","slug":"group-by分组","link":"#group-by分组","children":[]},{"level":4,"title":"集合拼接：Concat 和 Union","slug":"集合拼接-concat-和-union","link":"#集合拼接-concat-和-union","children":[]},{"level":4,"title":"ArrayList和list的区别","slug":"arraylist和list的区别","link":"#arraylist和list的区别","children":[]}],"git":{"createdTime":1700232644000,"updatedTime":1700232644000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.51,"words":452},"filePathRelative":"dotnet/csharp/jigecaozuo/jigecaozuo.md","localizedDate":"2023年11月9日","excerpt":"<h4>Group&nbsp;by分组</h4>\\n<p>测试数据：</p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code> var studentList <span class=\\"token operator\\">=</span> new List<span class=\\"token operator\\">&lt;</span>Student<span class=\\"token operator\\">&gt;</span>\\n            <span class=\\"token punctuation\\">{</span>\\n                new Student <span class=\\"token punctuation\\">{</span>ClassName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"软工一班\\"</span><span class=\\"token punctuation\\">,</span> StudentName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"康巴一\\"</span><span class=\\"token punctuation\\">,</span> StuId <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n                new Student <span class=\\"token punctuation\\">{</span>ClassName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"软工一班\\"</span><span class=\\"token punctuation\\">,</span> StudentName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"康巴二\\"</span><span class=\\"token punctuation\\">,</span> StuId <span class=\\"token operator\\">=</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n                new Student <span class=\\"token punctuation\\">{</span>ClassName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"软工一班\\"</span><span class=\\"token punctuation\\">,</span> StudentName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"康巴三\\"</span><span class=\\"token punctuation\\">,</span> StuId <span class=\\"token operator\\">=</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n                new Student <span class=\\"token punctuation\\">{</span>ClassName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"软工二班\\"</span><span class=\\"token punctuation\\">,</span> StudentName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"康定一\\"</span><span class=\\"token punctuation\\">,</span> StuId <span class=\\"token operator\\">=</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n                new Student <span class=\\"token punctuation\\">{</span>ClassName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"软工二班\\"</span><span class=\\"token punctuation\\">,</span> StudentName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"康定二\\"</span><span class=\\"token punctuation\\">,</span> StuId <span class=\\"token operator\\">=</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n                new Student <span class=\\"token punctuation\\">{</span>ClassName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"软工二班\\"</span><span class=\\"token punctuation\\">,</span> StudentName <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"康定三\\"</span><span class=\\"token punctuation\\">,</span> StuId <span class=\\"token operator\\">=</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n            var aa <span class=\\"token operator\\">=</span> studentList<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">GroupBy</span><span class=\\"token punctuation\\">(</span>t <span class=\\"token operator\\">=</span><span class=\\"token operator\\">&gt;</span> t<span class=\\"token punctuation\\">.</span>ClassName<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            var bb <span class=\\"token operator\\">=</span> studentList<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">GroupBy</span><span class=\\"token punctuation\\">(</span>t <span class=\\"token operator\\">=</span><span class=\\"token operator\\">&gt;</span> t<span class=\\"token punctuation\\">.</span>ClassName<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">FirstOrDefault</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            var cc <span class=\\"token operator\\">=</span> studentList<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">GroupBy</span><span class=\\"token punctuation\\">(</span>t <span class=\\"token operator\\">=</span><span class=\\"token operator\\">&gt;</span> t<span class=\\"token punctuation\\">.</span>ClassName<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Count</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};