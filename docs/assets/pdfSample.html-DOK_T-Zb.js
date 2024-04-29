import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,b as t}from"./app-qB9_Bjjp.js";const r={},s=t(`<h2 id="microsoft-office-interop-word" tabindex="-1"><a class="header-anchor" href="#microsoft-office-interop-word"><span>Microsoft.Office.Interop.Word</span></a></h2><p>引用nuget包，该包依赖本机的office程序</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;PackageReference Include=&quot;Microsoft.Office.Interop.Word&quot; Version=&quot;15.0.4797.1004&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此程序集可用于 Microsoft 生成和签名的 Word 2013/2016/2019 COM 互操作。这是完全不受支持的，并且没有许可证，因为它是 Office 程序集的重新打包。</p><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h3><p>需要提前引用offcie.dll</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class WordToPdfConverter
{
    public void ConvertWordToPdf(string sourceFilePath, string targetFilePath)
    {
        // 创建Word应用程序对象
        var wordApp = new Application();
        Document wordDoc = null;

        try
        {
            // 设置Word应用程序以隐藏方式运行（可选，避免显示界面）
            wordApp.Visible = false;

            // 打开Word文档
            wordDoc = wordApp.Documents.Open(sourceFilePath,
                ConfirmConversions: false, // 不自动转换文档格式
                ReadOnly: true, // 以只读模式打开，避免修改原文件
                AddToRecentFiles: false); // 不添加到最近使用的文件列表

            // 定义输出PDF的路径和选项
            var optimizeFor = WdExportOptimizeFor.wdExportOptimizeForPrint;
            var range = WdExportRange.wdExportAllDocument;

            // 执行转换并保存为PDF
            wordDoc.ExportAsFixedFormat(targetFilePath, WdExportFormat.wdExportFormatPDF,
                false, optimizeFor, range);

            Console.WriteLine($&quot;Word文档 &#39;{sourceFilePath}&#39; 已成功转换为PDF并保存为 &#39;{targetFilePath}&#39;。&quot;);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($&quot;转换过程中发生错误: {ex.Message}&quot;);
        }
        finally
        {
            // 清理资源，确保Word应用程序和文档关闭
            if (wordDoc != null)
            {
                wordDoc.Close(false);
            }

            if (wordApp != null)
            {
                wordApp.Quit();
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="issue" tabindex="-1"><a class="header-anchor" href="#issue"><span>Issue</span></a></h3><h3 id="找不到office文件" tabindex="-1"><a class="header-anchor" href="#找不到office文件"><span>找不到office文件</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>System.IO.FileNotFoundException:“Could not load file or assembly ‘office, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c’. 系统找不到指定的文件。”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决方法：找到<code>C:\\Windows\\assembly\\GAC_MSIL\\office\\15.0.0.0__71e9bce111e9429c\\OFFICE.DLL</code>添加引用即可</p>`,11),o=[s];function d(l,a){return i(),n("div",null,o)}const p=e(r,[["render",d],["__file","pdfSample.html.vue"]]),v=JSON.parse('{"path":"/temp/pdfSample.html","title":"PDF示例","lang":"zh-CN","frontmatter":{"title":"PDF示例","lang":"zh-CN","date":"2024-04-25T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNet"],"tag":["pdf"],"article":false,"description":"Microsoft.Office.Interop.Word 引用nuget包，该包依赖本机的office程序 此程序集可用于 Microsoft 生成和签名的 Word 2013/2016/2019 COM 互操作。这是完全不受支持的，并且没有许可证，因为它是 Office 程序集的重新打包。 操作 需要提前引用offcie.dll Issue 找不到...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/temp/pdfSample.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"PDF示例"}],["meta",{"property":"og:description","content":"Microsoft.Office.Interop.Word 引用nuget包，该包依赖本机的office程序 此程序集可用于 Microsoft 生成和签名的 Word 2013/2016/2019 COM 互操作。这是完全不受支持的，并且没有许可证，因为它是 Office 程序集的重新打包。 操作 需要提前引用offcie.dll Issue 找不到..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-25T06:34:16.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"pdf"}],["meta",{"property":"article:published_time","content":"2024-04-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-25T06:34:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"PDF示例\\",\\"description\\":\\"Microsoft.Office.Interop.Word 引用nuget包，该包依赖本机的office程序 此程序集可用于 Microsoft 生成和签名的 Word 2013/2016/2019 COM 互操作。这是完全不受支持的，并且没有许可证，因为它是 Office 程序集的重新打包。 操作 需要提前引用offcie.dll Issue 找不到...\\"}"]]},"headers":[{"level":2,"title":"Microsoft.Office.Interop.Word","slug":"microsoft-office-interop-word","link":"#microsoft-office-interop-word","children":[{"level":3,"title":"操作","slug":"操作","link":"#操作","children":[]},{"level":3,"title":"Issue","slug":"issue","link":"#issue","children":[]},{"level":3,"title":"找不到office文件","slug":"找不到office文件","link":"#找不到office文件","children":[]}]}],"git":{"createdTime":1714026856000,"updatedTime":1714026856000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":1.2,"words":359},"filePathRelative":"temp/pdfSample.md","localizedDate":"2024年4月25日","excerpt":"<h2>Microsoft.Office.Interop.Word</h2>\\n<p>引用nuget包，该包依赖本机的office程序</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>&lt;PackageReference Include=\\"Microsoft.Office.Interop.Word\\" Version=\\"15.0.4797.1004\\" /&gt;\\n</code></pre></div><p>此程序集可用于 Microsoft 生成和签名的 Word 2013/2016/2019 COM 互操作。这是完全不受支持的，并且没有许可证，因为它是 Office 程序集的重新打包。</p>","autoDesc":true}');export{p as comp,v as data};
