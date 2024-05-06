import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,b as s}from"./app-Bw62I61B.js";const t={},l=s(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>通过HttpClient请求远程文件并实现下载的功能</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var url = &quot;http://lg-hkg.fdcservers.net/10MBtest.zip&quot;;
var task = new DownLoadTask();
await task.StartAsync(url, &quot;D:\\\\Downloads&quot;);

/// &lt;summary&gt;
/// 一个下载任务类
/// &lt;/summary&gt;
public class DownLoadTask
{
    public async Task StartAsync(string url, string saveFolderPath)
    {
        try
        {
            using var client = new HttpClient();
            // 1.1.某些网站会反爬，所以我们需要设置一些参数
            client.DefaultRequestHeaders.Add(&quot;User-Agent&quot;,
                &quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.61&quot;);

            // 2.进行异步请求
            await using var stream = await client.GetStreamAsync(url);

            var suffix = GetFileType(&quot;zip&quot;);
            var filePath = Path.Combine(saveFolderPath, Random.Shared.Next(10, 10000) + suffix);
            await using var fileStream = File.Create(filePath);
            await stream.CopyToAsync(fileStream);
        }
        catch (HttpRequestException e)
        {
            Console.WriteLine($&quot;请求下载失败：{e.Message}&quot;);
        }
    }

    /// &lt;summary&gt;
    /// 检测文件的类型
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;type&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    private string GetFileType(string type)
    {
        var suffix = &quot;&quot;;
        if (type.Contains(&quot;jpeg&quot;))
        {
            suffix = &quot;.jpg&quot;;
        }
        else if (type.Contains(&quot;zip&quot;))
        {
            suffix = &quot;.zip&quot;;
        }
        else if (type.Contains(&quot;application/octet-stream&quot;))
        {
            suffix = &quot;.exe&quot;;
        }
        else if (type.Contains(&quot;png&quot;))
        {
            suffix = &quot;.png&quot;;
        }
        else if (type.Contains(&quot;mp4&quot;))
        {
            suffix = &quot;.mp4&quot;;
        }
        else if (type.Contains(&quot;avi&quot;))
        {
            suffix = &quot;.avi&quot;;
        }
        else if (type.Contains(&quot;mp3&quot;))
        {
            suffix = &quot;.mp3&quot;;
        }
        else if (type.Contains(&quot;mpeg&quot;))
        {
            suffix = &quot;.m4a&quot;;
        }

        return suffix;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以手动处理缓冲区的大小，并使用 <code>List&lt;byte&gt;</code> 作为一个动态缓冲区，每次读取数据后将其添加到列表中。这种方式可以灵活地控制缓冲区的大小，以便更好地适应特定需求，比如下载进度通知等</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var response = await client.GetAsync(url);
// 3.请求成功
if (!response.IsSuccessStatusCode)
{
    // 4.请求失败
    Console.WriteLine(&quot;请求下载失败&quot;);
    return;
}

// 3.1.读取文件的类型
var type = response.Content.Headers.ContentType?.MediaType;
// 3.2.文件的总大小
var totalSize = response.Content.Headers.ContentLength;

// 3.3.获取文件流
// 当前下载的大小
long downloadSize = 0;

await using var stream = await response.Content.ReadAsStreamAsync();

// 缓冲区大小 0.5KB
var bufferSize = new byte[512];
var targetBuffer = new List&lt;byte&gt;();
var suffix = GetFileType(type);
int length;
while ((length = await stream.ReadAsync(bufferSize)) != 0)
{
    downloadSize += length;
    var progress = downloadSize * 100 / totalSize;
    targetBuffer.AddRange(bufferSize.Take(length));
    await Console.Out.WriteLineAsync($&quot;\\r下载中{progress}%&quot;);
}

await Console.Out.WriteLineAsync();
var filePath = Path.Combine(saveFolderPath, Random.Shared.Next(10, 10000) + suffix);
await File.WriteAllBytesAsync(filePath, targetBuffer.ToArray());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测速文件" tabindex="-1"><a class="header-anchor" href="#测速文件"><span>测速文件</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>举例香港的地址

100mb
http://lg-hkg.fdcservers.net/100MBtest.zip

1gb
http://lg-hkg.fdcservers.net/1GBtest.zip


阿姆斯特丹AMS-01数据中心
http://mirror.nl.leaseweb.net/speedtest/10000mb.bin
达拉斯DAL-10数据中心
http://mirror.dal10.us.leaseweb.net/speedtest/10000mb.bin
香港HKG-10数据中心
http://mirror.hk.leaseweb.net/speedtest/10000mb.bin
旧金山SFO-12数据中心
http://mirror.sfo12.us.leaseweb.net/speedtest/10000mb.bin
美因河畔法兰克福FRA-10数据中心
http://mirror.de.leaseweb.net/speedtest/10000mb.bin
悉尼SYD-10数据中心
http://mirror.syd10.au.leaseweb.net/speedtest/10000mb.bin
华盛顿WDC-01数据中心
http://mirror.wdc1.us.leaseweb.net/speedtest/10000mb.bin
华盛顿WDC-02数据中心
http://mirror.wdc1.us.leaseweb.net/speedtest/10000mb.bin
hetztner德国（https://speed.hetzner.de/）：
https://speed.hetzner.de/10GB.bin
http://proof.ovh.net/files/
ovh法国：
http://proof.ovh.net/files/10Gio.dat
https://www.fdcservers.net/looking-glass
新加坡：
http://lg-sin.fdcservers.net/10GBtest.zip
日本东京：
http://lg-tok.fdcservers.net/10GBtest.zip
香港：
http://lg-hkg.fdcservers.net/10GBtest.zip
亚特兰大：
http://lg-atl.fdcservers.net/10GBtest.zip
芝加哥：
http://lg-chie.fdcservers.net/10GBtest.zip
丹佛：
http://lg-dene.fdcservers.net/10GBtest.zip
休斯顿：
http://lg-hou.fdcservers.net/10GBtest.zip
洛杉矶：
http://lg-lax.fdcservers.net/10GBtest.zip
迈阿密：
http://lg-mia.fdcservers.net/10GBtest.zip
明尼苏达州：
http://lg-minn.fdcservers.net/10GBtest.zip
纽约：
http://lg-nyc.fdcservers.net/10GBtest.zip
西雅图：
http://lg-sea.fdcservers.net/10GBtest.zip
多伦多（加拿大）：
http://lg-tor.fdcservers.net/10GBtest.zip
巴西圣保罗：
http://lg-spb.fdcservers.net/10GBtest.zip
荷兰阿姆斯特丹：
http://lg-ams.fdcservers.net/10GBtest.zip
爱尔兰都柏林：
http://lg-dub.fdcservers.net/10GBtest.zip
德国法兰克福：
http://lg-fra.fdcservers.net/10GBtest.zip
芬兰赫尔辛基：
http://lg-hel.fdcservers.net/10GBtest.zip
乌克兰基辅：
http://lg-kie.fdcservers.net/10GBtest.zip
葡萄牙里斯本：
http://lg-lis.fdcservers.net/10GBtest.zip
英国伦敦：
http://lg-lon.fdcservers.net/10GBtest.zip
西班牙马德里：
http://lg-mad.fdcservers.net/10GBtest.zip
法国巴黎：
http://lg-par2.fdcservers.net/10GBtest.zip
保加利亚索非亚
http://lg-sof.fdcservers.net/10GBtest.zip
芬兰斯德哥尔摩：
http://lg-sto.fdcservers.net/10GBtest.zip
奥地利维也纳：
http://lg-vie.fdcservers.net/10GBtest.zip
波兰华沙：
http://lg-war.fdcservers.net/10GBtest.zip
瑞士苏黎世：
http://lg-zur.fdcservers.net/10GBtest.zip
https://www.turnkeyinternet.net/speed-test/
turnkeyinternet加利福尼亚：
http://speedtest-ca.turnkeyinternet.net/10000mb.bin
turnkeyinternet纽约：
http://speedtest-ny.turnkeyinternet.net/10000mb.bin
https://www.hostwinds.com/company/datacenters
hostwinds西雅图：
http://sea-repo.hostwinds.net/tests/10gb.zip
hostwinds达拉斯：
http://dal-repo.hostwinds.net/tests/10gb.zip
hostwinds阿姆斯特丹：
http://ams-repo.hostwinds.net/tests/10gb.zip
http://speedtest.tele2.net/
tele2克罗地亚，萨格勒布
http://zgb-speedtest-1.tele2.net/10GB.zip
http://zgb-speedtest-1.tele2.net/50GB.zip
http://zgb-speedtest-1.tele2.net/100GB.zip
http://zgb-speedtest-1.tele2.net/1000GB.zip
tele2德国，法兰克福
http://fra36-speedtest-1.tele2.net/10GB.zip
http://fra36-speedtest-1.tele2.net/50GB.zip
http://fra36-speedtest-1.tele2.net/100GB.zip
http://fra36-speedtest-1.tele2.net/1000GB.zip
tele2拉脱维亚，里加
http://bks4-speedtest-1.tele2.net/10GB.zip
http://bks4-speedtest-1.tele2.net/50GB.zip
http://bks4-speedtest-1.tele2.net/100GB.zip
http://bks4-speedtest-1.tele2.net/1000GB.zip
tele2立陶宛，维尔纽斯
http://vln038-speedtest-1.tele2.net/10GB.zip
http://vln038-speedtest-1.tele2.net/50GB.zip
http://vln038-speedtest-1.tele2.net/100GB.zip
http://vln038-speedtest-1.tele2.net/1000GB.zip
tele2荷兰，阿姆斯特丹
http://ams-speedtest-1.tele2.net/10GB.zip
http://ams-speedtest-1.tele2.net/50GB.zip
http://ams-speedtest-1.tele2.net/100GB.zip
http://ams-speedtest-1.tele2.net/1000GB.zip
tele2瑞典，哥德堡
http://bck-speedtest-1.tele2.net/10GB.zip
http://bck-speedtest-1.tele2.net/50GB.zip
http://bck-speedtest-1.tele2.net/100GB.zip
http://bck-speedtest-1.tele2.net/1000GB.zip
tele2瑞典，斯德哥尔摩
http://hgd-speedtest-1.tele2.net/10GB.zip
http://hgd-speedtest-1.tele2.net/50GB.zip
http://hgd-speedtest-1.tele2.net/100GB.zip
http://hgd-speedtest-1.tele2.net/1000GB.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[l];function a(r,v){return n(),i("div",null,d)}const m=e(t,[["render",a],["__file","downloader.html.vue"]]),p=JSON.parse('{"path":"/dotnet/commonMethod/downloader.html","title":"HTTP简易下载器","lang":"zh-CN","frontmatter":{"title":"HTTP简易下载器","lang":"zh-CN","date":"2023-11-02T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["下载","httpClient"],"description":"概述 通过HttpClient请求远程文件并实现下载的功能 操作 还可以手动处理缓冲区的大小，并使用 List<byte> 作为一个动态缓冲区，每次读取数据后将其添加到列表中。这种方式可以灵活地控制缓冲区的大小，以便更好地适应特定需求，比如下载进度通知等 测速文件","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/commonMethod/downloader.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"HTTP简易下载器"}],["meta",{"property":"og:description","content":"概述 通过HttpClient请求远程文件并实现下载的功能 操作 还可以手动处理缓冲区的大小，并使用 List<byte> 作为一个动态缓冲区，每次读取数据后将其添加到列表中。这种方式可以灵活地控制缓冲区的大小，以便更好地适应特定需求，比如下载进度通知等 测速文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-02T15:02:06.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"下载"}],["meta",{"property":"article:tag","content":"httpClient"}],["meta",{"property":"article:published_time","content":"2023-11-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-02T15:02:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTP简易下载器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-02T15:02:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[]},{"level":2,"title":"测速文件","slug":"测速文件","link":"#测速文件","children":[]}],"git":{"createdTime":1698937326000,"updatedTime":1698937326000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":3.39,"words":1018},"filePathRelative":"dotnet/commonMethod/downloader.md","localizedDate":"2023年11月2日","excerpt":"<h2>概述</h2>\\n<p>通过HttpClient请求远程文件并实现下载的功能</p>\\n<h2>操作</h2>\\n<div class=\\"language-c#\\" data-ext=\\"c#\\" data-title=\\"c#\\"><pre class=\\"language-c#\\"><code>var url = \\"http://lg-hkg.fdcservers.net/10MBtest.zip\\";\\nvar task = new DownLoadTask();\\nawait task.StartAsync(url, \\"D:\\\\\\\\Downloads\\");\\n\\n/// &lt;summary&gt;\\n/// 一个下载任务类\\n/// &lt;/summary&gt;\\npublic class DownLoadTask\\n{\\n    public async Task StartAsync(string url, string saveFolderPath)\\n    {\\n        try\\n        {\\n            using var client = new HttpClient();\\n            // 1.1.某些网站会反爬，所以我们需要设置一些参数\\n            client.DefaultRequestHeaders.Add(\\"User-Agent\\",\\n                \\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.61\\");\\n\\n            // 2.进行异步请求\\n            await using var stream = await client.GetStreamAsync(url);\\n\\n            var suffix = GetFileType(\\"zip\\");\\n            var filePath = Path.Combine(saveFolderPath, Random.Shared.Next(10, 10000) + suffix);\\n            await using var fileStream = File.Create(filePath);\\n            await stream.CopyToAsync(fileStream);\\n        }\\n        catch (HttpRequestException e)\\n        {\\n            Console.WriteLine($\\"请求下载失败：{e.Message}\\");\\n        }\\n    }\\n\\n    /// &lt;summary&gt;\\n    /// 检测文件的类型\\n    /// &lt;/summary&gt;\\n    /// &lt;param name=\\"type\\"&gt;&lt;/param&gt;\\n    /// &lt;returns&gt;&lt;/returns&gt;\\n    private string GetFileType(string type)\\n    {\\n        var suffix = \\"\\";\\n        if (type.Contains(\\"jpeg\\"))\\n        {\\n            suffix = \\".jpg\\";\\n        }\\n        else if (type.Contains(\\"zip\\"))\\n        {\\n            suffix = \\".zip\\";\\n        }\\n        else if (type.Contains(\\"application/octet-stream\\"))\\n        {\\n            suffix = \\".exe\\";\\n        }\\n        else if (type.Contains(\\"png\\"))\\n        {\\n            suffix = \\".png\\";\\n        }\\n        else if (type.Contains(\\"mp4\\"))\\n        {\\n            suffix = \\".mp4\\";\\n        }\\n        else if (type.Contains(\\"avi\\"))\\n        {\\n            suffix = \\".avi\\";\\n        }\\n        else if (type.Contains(\\"mp3\\"))\\n        {\\n            suffix = \\".mp3\\";\\n        }\\n        else if (type.Contains(\\"mpeg\\"))\\n        {\\n            suffix = \\".m4a\\";\\n        }\\n\\n        return suffix;\\n    }\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,p as data};
