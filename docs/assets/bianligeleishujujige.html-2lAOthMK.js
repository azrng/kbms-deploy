import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as s,c as l,b as i,e,f as d,d as r}from"./app-D8HBJYTp.js";const o="/kbms/common/1613566907278-5449d987-b64b-4095-8bea-56c7a251fcfe.png",c="/kbms/common/1613566907280-898ead77-c8d3-46fc-8d13-1ce09385b0d5.png",m="/kbms/common/1613566907274-e0ac8530-9345-4122-b289-d24249438092.png",u={},v=r(`<p><strong>1.枚举类型</strong> //遍历枚举类型Sample的各个枚举名称</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>foreach (string sp in Enum.GetNames(typeof(Sample))) 
{ 
ary.Add(sp); 
} 
//遍历枚举类型Sample的各个枚举值 
foreach (string sp in Enum.GetValues(typeof(Sample))) 
{ 
ary.Add(sp); 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.遍历ArrayList(Queue、Stack)</strong> 这里以string为例，当然ArrayList中的元素可以是任何数据类型，遍历时须确认ArrayList中的元素都是同一数据类型。  //遍历元素为string类型的队列</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>foreach (string text in arraylist) 
{ 
ary.Add(text); 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外遍历Queue队列和Stack堆栈的方式与ArrayList基本相同， 都可以使用foreach来循环遍历，只不过一个是先进先出另一个是先进后出罢了。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ArrayList list = new ArrayList();
//for遍历
for (int i = 0; i &lt; list.Count; i++)
{
  SE se = (SE)list[i];
 Console.WriteLine(se.Name);
}
//foreach遍历
foreach (Object obj in list)
{
  SE se = (SE)list[i];
  Console.WriteLine(se.Name);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.Winform窗体中的控件</strong> //遍历寻找主窗体中的控件，并将符合条件的控件从窗体上去除</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>foreach (Control ctl in this.Controls) 
{ 
//获取并判断控件类型或控件名称 
if (ctl.GetType().Name.Equals(&quot;ListBox&quot;) || ctl.Name.Equals(&quot;listBox1&quot;)) 
this.Controls.Remove(ctl); 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.HashTable哈希表</strong> DictionaryEntry类需要引用System.Collections</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//遍历完整哈希表中的键和值
foreach (DictionaryEntry item in hashTable) 
{
ary.Add(&quot;哈希键：&quot;+item.Key+&quot;,哈希值：&quot;+item.Value.ToString());
} 
此外还可以单独遍历哈希表中的键或值。 
//只遍历哈希表中的键 
foreach (string key in hashTable.Keys) 
{ 
ary.Add(&quot;哈希键：&quot; + key); 
} 
//只遍历哈希表中的值 
foreach (string value in hashTable.Values) 
{ 
ary.Add(&quot;哈希值：&quot; + value); 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.遍历DataSet和DataTable中的行和列</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//遍历DataSet中的表
foreach (DataTable dt in dataSet.Tables) 
{ 
ary.Add(&quot;表名：&quot; + dt.TableName.ToString()); 
} 
//遍历DataSet中默认第一个表中的行 
foreach (DataRow dr in dataSet.Tables[0].Rows) 
{ 
//获取行中某个字段（列）的数据 
ary.Add(dr[&quot;ID&quot;].ToString()); 
} 
//遍历DataSet中默认第一个表中的列 
foreach (DataColumn col in dataSet.Tables[0].Columns) 
{ 
ary.Add(&quot;列名：&quot;+col.ColumnName); 
} 

DataTable遍历行和列的方法和DataSet类似，只是将dataSet.Tables[0]换成具体某张表就可以了。 
另外还可以对DataTable表进行SQL查询，然后再对查询结果进行遍历。 
//遍历DataSet中表SELECT执行查询条件后的结果
foreach (DataRow dr in dataSet.Tables[0].Select(&quot; MONTH&gt;6 AND MONTH&lt;12 &quot;)) 
{ 
//获取行中某个字段（列）的数据 
ary.Add(dr[&quot;ID&quot;].ToString()); 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6.遍历DataGridView中的行</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//遍历DataGridView中的行
foreach (DataGridViewRow dr in dataGridView1.Rows) 
{ 
//获取行中某个字段（列）的数据 
ary.Add(dr.Cells[&quot;ID&quot;].ToString()); 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7.遍历ListBOX和ComboBox中的item</strong> 一般foreach遍历只能遍历到ListBOX和ComboBox里item的名称,完整遍历需要在绑定item的时候添加的item数据是个二元属性自定义类的对象,将对象中一个属性的名称作为DisplayMember(item名)，另一个作为DisplayValue(item值)。这样在遍历的时候就可以把ListBOX和ComboBox中的item的名称和值全部获取出来了。 <strong>8.<code>List&lt;T&gt;</code></strong><img src="`+o+`" alt="image.png" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//for遍历
for (int i = 0; i &lt; list.Count; i++)
{
  //遍历时不需要类型转换
 Console.WriteLine(list[i]);
}
//foreach遍历
foreach (SE obj in list)
{
  //遍历时不需要类型转换
  Console.WriteLine(obj);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt="image.png" loading="lazy"><strong>9.<code>Dictionary&lt;K,V&gt;</code></strong><img src="'+m+`" alt="image.png" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//遍历Values
foreach (SE se in list.Values)
{
  //遍历时不需要类型转换
 Console.WriteLine(se);
}

//同时遍历
foreach (KeyValuePair&lt;string, SE&gt; en in list)
{
  Console.WriteLine(en.Key);
 Console.WriteLine(en.Value.Name);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//<code>KeyValuePair&lt;TKey,TValue&gt;</code>是一个泛型结构</p>`,19),b={href:"https://www.cnblogs.com/H2921306656/p/6675327.html",target:"_blank",rel:"noopener noreferrer"};function g(p,h){const n=a("ExternalLinkIcon");return s(),l("div",null,[v,i("p",null,[e("来自 <"),i("a",b,[e("https://www.cnblogs.com/H2921306656/p/6675327.html"),d(n)]),e(">")])])}const f=t(u,[["render",g],["__file","bianligeleishujujige.html.vue"]]),S=JSON.parse('{"path":"/dotnet/webyingyong/webform/shujubiao/bianligeleishujujige.html","title":"遍历各类数据集合","lang":"zh-CN","frontmatter":{"title":"遍历各类数据集合","lang":"zh-CN","date":"2021-02-17T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"bianligeleishujujige","slug":"kgq4uu","docsId":"31541643","description":"1.枚举类型 //遍历枚举类型Sample的各个枚举名称 2.遍历ArrayList(Queue、Stack) 这里以string为例，当然ArrayList中的元素可以是任何数据类型，遍历时须确认ArrayList中的元素都是同一数据类型。 //遍历元素为string类型的队列 此外遍历Queue队列和Stack堆栈的方式与ArrayList基本相同...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/webyingyong/webform/shujubiao/bianligeleishujujige.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"遍历各类数据集合"}],["meta",{"property":"og:description","content":"1.枚举类型 //遍历枚举类型Sample的各个枚举名称 2.遍历ArrayList(Queue、Stack) 这里以string为例，当然ArrayList中的元素可以是任何数据类型，遍历时须确认ArrayList中的元素都是同一数据类型。 //遍历元素为string类型的队列 此外遍历Queue队列和Stack堆栈的方式与ArrayList基本相同..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1613566907278-5449d987-b64b-4095-8bea-56c7a251fcfe.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T15:51:40.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2021-02-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T15:51:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"遍历各类数据集合\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1613566907278-5449d987-b64b-4095-8bea-56c7a251fcfe.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1613566907280-898ead77-c8d3-46fc-8d13-1ce09385b0d5.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1613566907274-e0ac8530-9345-4122-b289-d24249438092.png\\"],\\"datePublished\\":\\"2021-02-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T15:51:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1697962303000,"updatedTime":1697989900000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":2.87,"words":861},"filePathRelative":"dotnet/webyingyong/webform/shujubiao/bianligeleishujujige.md","localizedDate":"2021年2月17日","excerpt":"<p><strong>1.枚举类型</strong>\\n//遍历枚举类型Sample的各个枚举名称</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>foreach (string sp in Enum.GetNames(typeof(Sample))) \\n{ \\nary.Add(sp); \\n} \\n//遍历枚举类型Sample的各个枚举值 \\nforeach (string sp in Enum.GetValues(typeof(Sample))) \\n{ \\nary.Add(sp); \\n} \\n</code></pre></div>","autoDesc":true}');export{f as comp,S as data};
