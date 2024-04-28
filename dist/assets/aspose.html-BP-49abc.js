import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,e as n}from"./app-vSdX8vi3.js";const a={},s=n(`<h2 id="测试例子" tabindex="-1"><a class="header-anchor" href="#测试例子"><span>测试例子</span></a></h2><p>引用包</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  &lt;ItemGroup&gt;
    &lt;PackageReference Include=&quot;Aspose.Cells&quot; Version=&quot;21.3.0&quot; /&gt;
    &lt;PackageReference Include=&quot;Aspose.PDF&quot; Version=&quot;21.3.0&quot; /&gt;
  &lt;/ItemGroup&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//定义License变量，用于去水印
//如需获取key请加微信:25489181
var byteKey = Convert.FromBase64String(&quot;&quot;);
if (byteKey.Length==0)
{
    Console.WriteLine(&quot;key不能为空，请加微信25489181获取key&quot;);
    return;
}
//注册，实现去水印
new Aspose.Cells.License().SetLicense(new MemoryStream(byteKey));
new Aspose.Pdf.License().SetLicense(new MemoryStream(byteKey));
#region excel转pdf
Aspose.Cells.Workbook workbook = new Aspose.Cells.Workbook();
Aspose.Cells.Worksheet sheet = workbook.Worksheets[0];
sheet.Cells[0, 0].Value = &quot;A5竖向&quot;;
sheet.PageSetup.PaperSize = PaperSizeType.PaperA5;
MemoryStream vStream= new MemoryStream();
sheet.Workbook.Save(vStream, SaveFormat.Pdf);
sheet.Workbook.Save(&quot;A5竖向.pdf&quot;, SaveFormat.Pdf);
sheet.Cells[0, 0].Value = &quot;A5横向&quot;;
sheet.PageSetup.Orientation = PageOrientationType.Landscape;
MemoryStream hStream = new MemoryStream();
sheet.Workbook.Save(hStream, SaveFormat.Pdf);
sheet.Workbook.Save(&quot;A5横向.pdf&quot;, SaveFormat.Pdf);
#endregion
#region pdf单页双份
//用于拼页
PdfFileEditor pdfEditor = new PdfFileEditor();
FileStream outputStream = new FileStream(&quot;A4竖排.pdf&quot;, FileMode.Create);
pdfEditor.MakeNUp(hStream, hStream, outputStream);//2页合并为一页(竖排）
FileStream outputStream2 = new FileStream(&quot;A4横排.pdf&quot;, FileMode.Create);
pdfEditor.MakeNUp(new MemoryStream []{ vStream, vStream}, outputStream2,true);// sidewise参数为横向//2页合并为一页(横排）
#endregion
#region pdf多页拼页

FileStream outputStream3 = new FileStream(&quot;4页.pdf&quot;, FileMode.Create);
//4页pdf
pdfEditor.Append(vStream, new MemoryStream[] { vStream, vStream, vStream }, 1, 1, outputStream3);
FileStream outputStream4= new FileStream(&quot;4页合并后.pdf&quot;, FileMode.Create);
//4张A5合并为一张A3
pdfEditor.MakeNUp(outputStream3, outputStream4, 2, 2, Aspose.Pdf.PageSize.A3);
#endregion
#region pdf页面拆分
FileStream outputStream5 = new FileStream(&quot;4页pdf提取第1页.pdf&quot;, FileMode.Create);
pdfEditor.Extract(outputStream3, 1, 1, outputStream5);
#endregion
#region 单页拆分为多页
Aspose.Pdf.Document doc = new Aspose.Pdf.Document(outputStream2);
doc.Pages.Add(doc.Pages[1]);
doc.Pages[1].MediaBox = new Aspose.Pdf.Rectangle(0, 0, doc.Pages[1].MediaBox.URX / 2, doc.Pages[1].MediaBox.URY);
doc.Pages[2].MediaBox = new Aspose.Pdf.Rectangle(doc.Pages[2].MediaBox.Width/2, 0, doc.Pages[1].MediaBox.URX, doc.Pages[1].MediaBox.URY);
doc.Save(&quot;A4横排再还原为A5大小2页.pdf&quot;);
#endregion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[s];function r(o,l){return t(),i("div",null,d)}const c=e(a,[["render",r],["__file","aspose.html.vue"]]),v=JSON.parse('{"path":"/middleware/office/aspose.html","title":"Aspose","lang":"zh-CN","frontmatter":{"title":"Aspose","lang":"zh-CN","date":"2023-10-18T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"aspose","slug":"kitbflpzo9yft1ko","docsId":"111173745","description":"测试例子 引用包 代码","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/office/aspose.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Aspose"}],["meta",{"property":"og:description","content":"测试例子 引用包 代码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T14:00:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T14:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Aspose\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T14:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"测试例子","slug":"测试例子","link":"#测试例子","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1697724028000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.26,"words":379},"filePathRelative":"middleware/office/aspose.md","localizedDate":"2023年10月18日","excerpt":"<h2>测试例子</h2>\\n<p>引用包</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>  &lt;ItemGroup&gt;\\n    &lt;PackageReference Include=\\"Aspose.Cells\\" Version=\\"21.3.0\\" /&gt;\\n    &lt;PackageReference Include=\\"Aspose.PDF\\" Version=\\"21.3.0\\" /&gt;\\n  &lt;/ItemGroup&gt;\\n</code></pre></div>","autoDesc":true}');export{c as comp,v as data};
