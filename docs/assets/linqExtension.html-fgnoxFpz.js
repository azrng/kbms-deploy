import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as d,b as e,e as i,f as t,d as a}from"./app-CBxp4zeL.js";const o={},m=a('<h2 id="simdlinq" tabindex="-1"><a class="header-anchor" href="#simdlinq"><span>SimdLinq</span></a></h2><p>SimdLinq 是 SIMD 对 LINQ 聚合操作（Sum、Average、Min、Max）的直接替代，速度非常快</p><p>仓库地址：https://github.com/Cysharp/SimdLinq</p><h2 id="system-linq-dynamic-core" tabindex="-1"><a class="header-anchor" href="#system-linq-dynamic-core"><span>System.Linq.Dynamic.Core</span></a></h2><p>使用此动态 LINQ 库，我们可以执行以下操作：</p><ul><li>通过 LINQ 提供程序进行的基于字符串的动态查询。</li><li>动态分析字符串以生成表达式树，例如ParseLambda和Parse方法。</li><li>使用CreateType方法动态创建数据类。</li></ul>',6),c={href:"https://github.com/zzzprojects/System.Linq.Dynamic.Core",target:"_blank",rel:"noopener noreferrer"},p=a(`<h2 id="gridify" tabindex="-1"><a class="header-anchor" href="#gridify"><span>Gridify</span></a></h2><p>Gridify 是一个现代化动态 LINQ 库，它以最简单的方式将您的字符串转换为 LINQ 查询，并且有出色的性能。它还提供了一种使用基于文本的数据应用过滤、排序和分页的简单方法，您还可以很方便的和 Entity framework 结合使用。</p><p>仓库地址：https://github.com/alirezanet/Gridify</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>void Main()
{
	List&lt;Person&gt; people = new List&lt;Person&gt;() {
				 new Person(18,&quot;Lee&quot;),
				 new Person(18,&quot;James&quot;),
				 new Person(30,&quot;Mark&quot;)
			};

	// 字符串
	var p1 = people.AsQueryable().ApplyFiltering(&quot;Age=18&quot;).ToList();
	//等同于 LINQ
	var p2 = people.Where(x =&gt; x.Age == 18).ToList();

	// or
	people.AsQueryable().ApplyFiltering(&quot;Name=Lee | Name=Mark&quot;).ToList();
	people.Where(x =&gt; x.Name == &quot;Lee&quot; || x.Name == &quot;Mark&quot;).ToList();

	// and 
	people.AsQueryable().ApplyFiltering(&quot;Age=18 , Name=James&quot;).ToList();
	people.Where(x =&gt; x.Age == 18 &amp;&amp; x.Name == &quot;James&quot;).ToList();

	// 模糊查询
	people.AsQueryable().ApplyFiltering(&quot;Name=*a&quot;).ToList();
	people.Where(x =&gt; x.Name.Contains(&quot;a&quot;)).ToList();

	// 性能
	people.AsQueryable().ApplyOrdering(&quot;Age desc,Name desc&quot;).ToList(); ;
	people.OrderByDescending(x =&gt; x.Age).ThenByDescending(x =&gt; x.Name).ToList();


}

public class Person
{
	public Person(int age, string name)
	{
		Age = age;
		Name = name;
	}
	public int Age { get; set; }
	public string Name { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,6),u={href:"https://www.cnblogs.com/Z7TS/p/17339894.html",target:"_blank",rel:"noopener noreferrer"};function v(h,g){const n=l("ExternalLinkIcon");return r(),d("div",null,[m,e("p",null,[i("仓库地址："),e("a",c,[i("https://github.com/zzzprojects/System.Linq.Dynamic.Core"),t(n)])]),p,e("p",null,[i(".Net解析字符串表达式："),e("a",u,[i("https://www.cnblogs.com/Z7TS/p/17339894.html"),t(n)])])])}const q=s(o,[["render",v],["__file","linqExtension.html.vue"]]),L=JSON.parse('{"path":"/dotnet/csharp/linq/linqExtension.html","title":"LINQ扩展","lang":"zh-CN","frontmatter":{"title":"LINQ扩展","lang":"zh-CN","date":"2023-10-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["csharp"],"tag":["无"],"filename":"system_linq_dynamic_core","slug":"bng18gtvuk9c25k3","docsId":"123244762","description":"SimdLinq SimdLinq 是 SIMD 对 LINQ 聚合操作（Sum、Average、Min、Max）的直接替代，速度非常快 仓库地址：https://github.com/Cysharp/SimdLinq System.Linq.Dynamic.Core 使用此动态 LINQ 库，我们可以执行以下操作： 通过 LINQ 提供程序进行的基于...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/csharp/linq/linqExtension.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"LINQ扩展"}],["meta",{"property":"og:description","content":"SimdLinq SimdLinq 是 SIMD 对 LINQ 聚合操作（Sum、Average、Min、Max）的直接替代，速度非常快 仓库地址：https://github.com/Cysharp/SimdLinq System.Linq.Dynamic.Core 使用此动态 LINQ 库，我们可以执行以下操作： 通过 LINQ 提供程序进行的基于..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-09T11:45:36.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-09T11:45:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LINQ扩展\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-09T11:45:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"SimdLinq","slug":"simdlinq","link":"#simdlinq","children":[]},{"level":2,"title":"System.Linq.Dynamic.Core","slug":"system-linq-dynamic-core","link":"#system-linq-dynamic-core","children":[]},{"level":2,"title":"Gridify","slug":"gridify","link":"#gridify","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1705331420000,"updatedTime":1709984736000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1},{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":1.25,"words":375},"filePathRelative":"dotnet/csharp/linq/linqExtension.md","localizedDate":"2023年10月22日","excerpt":"<h2>SimdLinq</h2>\\n<p>SimdLinq 是 SIMD 对 LINQ 聚合操作（Sum、Average、Min、Max）的直接替代，速度非常快</p>\\n<p>仓库地址：https://github.com/Cysharp/SimdLinq</p>\\n<h2>System.Linq.Dynamic.Core</h2>\\n<p>使用此动态 LINQ 库，我们可以执行以下操作：</p>\\n<ul>\\n<li>通过 LINQ 提供程序进行的基于字符串的动态查询。</li>\\n<li>动态分析字符串以生成表达式树，例如ParseLambda和Parse方法。</li>\\n<li>使用CreateType方法动态创建数据类。</li>\\n</ul>","autoDesc":true}');export{q as comp,L as data};
