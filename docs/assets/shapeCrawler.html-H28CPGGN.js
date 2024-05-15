import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,d as n}from"./app-CBxp4zeL.js";const t={},r=n(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>ShapeCrawler 是一个专为处理 PowerPoint 演示文稿而设计的 .NET 库。这个库为开发者提供了一组简单易用的 API，以便操作 PowerPoint (.pptx) 文件中的各种元素。</p><p>ShapeCrawler 库的特点包括：</p><p>**1、无需安装 Microsoft Office：**是一个独立的库，不需要在开发或运行环境中安装 Microsoft Office。</p><p>**2、基于 Open XML SDK：**基于 Open XML SDK 的基础上，封装的提供更高层次的抽象。Open XML SDK 是一个开源库，提供了Office 文件格式（如 .docx、.xlsx、.pptx 等）的底层API操作。</p><p>**3、简单易用：**提供了一个简化的对象模型，使得开发者可以轻松地遍历、查询、修改和创建 PowerPoint 演示文稿中的形状。你可以轻松地获取形状的属性（如位置、大小、填充颜色等），以及修改它们。</p><p>**4、支持类型多：**支持包括文本框、图形、图像、图表等操作。</p><p>仓库地址：https://github.com/ShapeCrawler/ShapeCrawler</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p><strong>1、简单示例</strong></p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>// 打开PPT
var pres = new Presentation(&quot;xxx.pptx&quot;);
var shapes = pres.Slides[0].Shapes;
// 获取PPT的数量
var shapesCount = shapes.Count;
// 获取文本
var shape = shapes.GetByName(&quot;TextBox 1&quot;);
var text = shape.TextFrame!.Text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、设置文本框为自动适应</strong></p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var pres = new Presentation(&quot;some.pptx&quot;);
var shape = pres.Slides[0].Shapes.GetByName(&quot;AutoShape 1&quot;);
var textFrame = shape.TextFrame!;

textFrame.AutofitType = AutofitType.Resize;

pres.Save();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3、替换文字</strong></p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var pres = new Presentation(&quot;some.pptx&quot;);
var textFrames = pres.Slides[0].TextFrames();

foreach (var textFrame in textFrames)
{
    textFrame.Text = &quot;some text&quot;;
}

pres.Save();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4、更新图片</strong></p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var pres = new Presentation(&quot;picture.pptx&quot;);

// 获取图片控件
var picture = pres.Slides[0].Shapes.GetByName&lt;IPicture&gt;(&quot;Picture 1&quot;);

// 更改图片
picture.Image.Update(&quot;new-image.png&quot;);

// 获取图片的MIME
var mimeType = picture.Image.MIME;

pres.Save();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5、表格操作</strong></p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var pres = new Presentation(&quot;some-pptx&quot;);
var shapeCollection = pres.Slides[0].Shapes;

shapeCollection.AddTable(x: 50, y: 100, columnsCount: 3, rowsCount: 2);
var addedTable = (ITable)shapeCollection.Last();
var cell = addedTable[0, 0];
cell.TextFrame.Text = &quot;Hi, Table!&quot;;

pres.Save();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),s=[r];function l(d,p){return a(),i("div",null,s)}const v=e(t,[["render",l],["__file","shapeCrawler.html.vue"]]),m=JSON.parse('{"path":"/middleware/office/ppt/shapeCrawler.html","title":"ShapeCrawler","lang":"zh-CN","frontmatter":{"title":"ShapeCrawler","lang":"zh-CN","date":"2024-03-09T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["ppt"],"description":"概述 ShapeCrawler 是一个专为处理 PowerPoint 演示文稿而设计的 .NET 库。这个库为开发者提供了一组简单易用的 API，以便操作 PowerPoint (.pptx) 文件中的各种元素。 ShapeCrawler 库的特点包括： **1、无需安装 Microsoft Office：**是一个独立的库，不需要在开发或运行环境中安...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/office/ppt/shapeCrawler.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"ShapeCrawler"}],["meta",{"property":"og:description","content":"概述 ShapeCrawler 是一个专为处理 PowerPoint 演示文稿而设计的 .NET 库。这个库为开发者提供了一组简单易用的 API，以便操作 PowerPoint (.pptx) 文件中的各种元素。 ShapeCrawler 库的特点包括： **1、无需安装 Microsoft Office：**是一个独立的库，不需要在开发或运行环境中安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-09T15:09:06.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"ppt"}],["meta",{"property":"article:published_time","content":"2024-03-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-09T15:09:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ShapeCrawler\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-09T15:09:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[]}],"git":{"createdTime":1709996946000,"updatedTime":1709996946000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.5,"words":451},"filePathRelative":"middleware/office/ppt/shapeCrawler.md","localizedDate":"2024年3月9日","excerpt":"<h2>概述</h2>\\n<p>ShapeCrawler 是一个专为处理 PowerPoint 演示文稿而设计的 .NET 库。这个库为开发者提供了一组简单易用的 API，以便操作 PowerPoint (.pptx) 文件中的各种元素。</p>\\n<p>ShapeCrawler 库的特点包括：</p>\\n<p>**1、无需安装 Microsoft Office：**是一个独立的库，不需要在开发或运行环境中安装 Microsoft Office。</p>\\n<p>**2、基于 Open XML SDK：**基于 Open XML SDK 的基础上，封装的提供更高层次的抽象。Open XML SDK 是一个开源库，提供了Office 文件格式（如 .docx、.xlsx、.pptx 等）的底层API操作。</p>","autoDesc":true}');export{v as comp,m as data};
