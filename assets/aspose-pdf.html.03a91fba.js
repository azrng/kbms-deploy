import{_ as a,W as s,X as d,Y as e,Z as n,$ as t,a0 as l,y as o}from"./framework.e8a0537a.js";const r={},c=e("h1",{id:"aspose-pdf",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aspose-pdf","aria-hidden":"true"},"#"),n(" Aspose.PDF")],-1),u=e("h1",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),n(" 前言")],-1),v=e("p",null,"最近在写关于操作PDF的代码，再加上今天朋友发了一个PDF格式的文件需要我帮忙转换为Word格式的文件，然后就出来了这个文章。",-1),m={href:"https://www.cnblogs.com/RobotZero/p/7742282.html",target:"_blank",rel:"noopener noreferrer"},p=l(`<blockquote><p>Aspose.Pdf 是一个 PDF 组件，用来生成 PDF 文档而无需 Adobe Acrobat 支持。提供 .NET 和 Java 语言两种版本。</p></blockquote><h1 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h1><p>涉及技术 .Net5、Aspose.PDF</p><h2 id="pdf转word" tabindex="-1"><a class="header-anchor" href="#pdf转word" aria-hidden="true">#</a> PDF转Word</h2><p>新建项目然后引用需要的组件Aspose.Pdf，以及需要一个GUI包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;PackageReference Include=&quot;Aspose.Pdf&quot; Version=&quot;18.11.0&quot; /&gt;
&lt;PackageReference Include=&quot;System.Drawing.Common&quot; Version=&quot;6.0.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>关于核心代码我们是看不到了，我们只能去非常简单的使用该组件,比如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var path = &quot;E:\\\\Download\\\\testFile.pdf&quot;;
// load the file to be converted
var pfile = new Document(path);

// save in different formats
pfile.Save(&quot;e:\\\\output.doc&quot;, SaveFormat.Doc);
pfile.Save(&quot;e:\\\\output.html&quot;, SaveFormat.Html);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在让我们对比一下转换前后的结果,个人感觉效果还是不错的<img src="https://mmbiz.qpic.cn/mmbiz_png/gtQF7ojZDqKlpibTD3ZAqytbW6pKibcXyALdM8u8czDeT2IFiaHO0kxAZfECe6fU1V7B4lRg26Q7edoWhSdnRf1iag/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" loading="lazy"></p><h2 id="pdf转图片" tabindex="-1"><a class="header-anchor" href="#pdf转图片" aria-hidden="true">#</a> PDF转图片</h2><p>再附上一个将pdf转图片的代码吧，万一哪里用到了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var path = &quot;D:\\\\Work\\\\xxxxxx.0.20210915.pdf&quot;;

//定义Jpeg转换设备
Document document = new Document(path);
var device = new Aspose.Pdf.Devices.JpegDevice(10);//设置图片质量
Console.WriteLine(&quot;默认图片张数：&quot; + document.Pages.Count);
//遍历每一页转为jpg
for (var i = 1; i &lt;= document.Pages.Count; i++)
{
    string filePathOutPut = $&quot;d:\\\\img\\\\{i}.jpg&quot;;
    FileStream fs = new FileStream(filePathOutPut, FileMode.OpenOrCreate);
    try
    {
        device.Process(document.Pages[i], fs);
        fs.Close();
    }
    catch (Exception ex)
    {
        fs.Close();
        File.Delete(filePathOutPut);
    }
}
Console.WriteLine(&quot;保存成功&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该代码可以将PDF文件每页保存为一个图片，可以设置图片的质量来选择转换后图片的大小。</p>`,13);function b(h,f){const i=o("ExternalLinkIcon");return s(),d("div",null,[c,u,v,e("p",null,[n("关于这个操作PDF的组件，我最近仔细自己找了可以使用的免费以及收费的组件，然后在参考了一个老哥写的一个文章("),e("a",m,[n("https://www.cnblogs.com/RobotZero/p/7742282.html"),t(i)]),n(")，最后选择了Aspose。本文的主角就是它，该组件是一个收费的组件，免费版本有页数限制和水印。关于该组件我摘抄一些介绍")]),p])}const x=a(r,[["render",b],["__file","aspose-pdf.html.vue"]]);export{x as default};
