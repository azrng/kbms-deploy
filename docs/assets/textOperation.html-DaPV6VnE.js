import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,b as i}from"./app-Bw62I61B.js";const l={},a=i(`<h2 id="slugify可读性强的url" tabindex="-1"><a class="header-anchor" href="#slugify可读性强的url"><span>Slugify可读性强的URL</span></a></h2><p>Microsoft .NET 的简单 Slug / Clean URL 生成器帮助程序。可以实现任何字符串的连字符、小写字符、字母数字版本，删除变音符号，折叠空格和破折号以及修建空格。</p><p>Nuget：https://www.nuget.org/packages/Slugify.Core</p><p>简单示例，安装nuget包</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>PM&gt; Install-Package Slugify.Core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将字符串添加连字符</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>void Main()
{
	var config = new SlugHelperConfiguration();
	config.ForceLowerCase = true;

	SlugHelper helper = new SlugHelper(config);

	String title = &quot;Helllo World!&quot;;

	String slug = helper.GenerateSlug(title);

	Console.WriteLine(slug);
}

// helllo-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sdcb-wordcloud文字云" tabindex="-1"><a class="header-anchor" href="#sdcb-wordcloud文字云"><span>Sdcb.WordCloud文字云</span></a></h2><p><strong>Sdcb.WordCloud</strong> 是一个多功能、跨平台的库，用于根据词频生成文字云图片、<code>SVG</code>或<code>JSON</code>数据。它利用<code>SkiaSharp</code>进行图形操作，确保了高性能和质量，而不依赖于<code>System.Drawing</code>。这使得它成为在各种平台上运行的应用程序的绝佳选择，包括GUI库可能不可用的服务器端场景。</p><p>仓库地址：https://github.com/sdcb/Sdcb.WordCloud</p><ul><li><strong>跨平台兼容性</strong>：在不同操作系统上工作，无需依赖于 <code>System.Drawing</code>。</li><li><strong>多种输出格式</strong>：支持生成图片、SVG或JSON数据的文字云。</li><li><strong>灵活配置</strong>：通过各种选项自定义您的文字云，包括文本方向、字体和遮罩。</li><li><strong>开源</strong>：在MIT许可下自由提供，欢迎贡献和修改。</li></ul><p>点亮.NET的文字云艺术之光：Sdcb.WordCloud 2.0：https://mp.weixin.qq.com/s/3u8aPcppa1Z0-KA1OnTPjA</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>void Main()
{
	TextOrientations[] orientations =
 [
	 TextOrientations.PreferHorizontal, // 默认
	 TextOrientations.PreferVertical,
	 TextOrientations.HorizontalOnly,
	 TextOrientations.VerticalOnly,
	 TextOrientations.Random,
 ];
	foreach (var o in orientations)
	{
		WordCloud wc = WordCloud.Create(new WordCloudOptions(300, 300, MakeDemoScore())
		{
			TextOrientation = o,
		});
		byte[] pngBytes = wc.ToSKBitmap().Encode(SKEncodedImageFormat.Png, 50).AsSpan().ToArray();

		MemoryStream ms = new MemoryStream(pngBytes);
		var image = System.Drawing.Image.FromStream(ms);
		image.Dump();
		//File.WriteAllBytes($&quot;{o}.png&quot;, pngBytes);
	}
}

IEnumerable&lt;WordScore&gt; MakeDemoScore()
{
	var aa = new List&lt;string&gt; { &quot;小&quot;, &quot;黄&quot;, &quot;爷&quot;, &quot;真&quot;, &quot;牛&quot;, &quot;蛙&quot; };
	var list = new List&lt;WordScore&gt;();
	foreach (var element in aa)
	{
		list.Add(new WordScore(element, new Random().Next(1, 8)));
	}
	return list;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),r=[a];function s(d,o){return t(),n("div",null,r)}const m=e(l,[["render",s],["__file","textOperation.html.vue"]]),v=JSON.parse('{"path":"/dotnet/commonNuget/textOperation.html","title":"文本处理","lang":"zh-CN","frontmatter":{"title":"文本处理","lang":"zh-CN","date":"2024-02-15T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["text"],"description":"Slugify可读性强的URL Microsoft .NET 的简单 Slug / Clean URL 生成器帮助程序。可以实现任何字符串的连字符、小写字符、字母数字版本，删除变音符号，折叠空格和破折号以及修建空格。 Nuget：https://www.nuget.org/packages/Slugify.Core 简单示例，安装nuget包 将字符串...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/commonNuget/textOperation.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"文本处理"}],["meta",{"property":"og:description","content":"Slugify可读性强的URL Microsoft .NET 的简单 Slug / Clean URL 生成器帮助程序。可以实现任何字符串的连字符、小写字符、字母数字版本，删除变音符号，折叠空格和破折号以及修建空格。 Nuget：https://www.nuget.org/packages/Slugify.Core 简单示例，安装nuget包 将字符串..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-06T08:01:13.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"text"}],["meta",{"property":"article:published_time","content":"2024-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-06T08:01:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文本处理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-06T08:01:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"Slugify可读性强的URL","slug":"slugify可读性强的url","link":"#slugify可读性强的url","children":[]},{"level":2,"title":"Sdcb.WordCloud文字云","slug":"sdcb-wordcloud文字云","link":"#sdcb-wordcloud文字云","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]}],"git":{"createdTime":1707989731000,"updatedTime":1712390473000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.46,"words":437},"filePathRelative":"dotnet/commonNuget/textOperation.md","localizedDate":"2024年2月15日","excerpt":"<h2>Slugify可读性强的URL</h2>\\n<p>Microsoft .NET 的简单 Slug / Clean URL 生成器帮助程序。可以实现任何字符串的连字符、小写字符、字母数字版本，删除变音符号，折叠空格和破折号以及修建空格。</p>\\n<p>Nuget：https://www.nuget.org/packages/Slugify.Core</p>\\n<p>简单示例，安装nuget包</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>PM&gt; Install-Package Slugify.Core\\n</code></pre></div>","autoDesc":true}');export{m as comp,v as data};
