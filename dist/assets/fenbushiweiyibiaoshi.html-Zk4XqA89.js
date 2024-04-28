import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as d,a as n,b as e,d as s,e as l}from"./app-vSdX8vi3.js";const c={},o=l('<h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求"><span>需求</span></a></h2><p>这个唯一序号有如下几种特征：</p><ul><li>全局唯一性：确保生成的序列是全局唯一的，不可重复。</li><li>有序性：确保生成的ID值对于某个用户或者业务是按一定的数字有序递增的。</li><li>高可用性：确保生成ID功能的高可用，能够承接较大峰值，能够保证序列生成的有效性（不重复且有序）。</li><li>带时间标记：ID中有时间片段组成，可是清晰识别出操作的时间。</li></ul><h2 id="其他组件" tabindex="-1"><a class="header-anchor" href="#其他组件"><span>其他组件</span></a></h2><p>四个id生成器的性能比较：https://www.cnblogs.com/fs7744/p/17823881.html</p><p>适用于 .Net 的 Twitter Snowflake-alike ID 生成器：https://github.com/RobThree/IdGen</p><h3 id="nanoid" tabindex="-1"><a class="header-anchor" href="#nanoid"><span>Nanoid</span></a></h3><p>开源库 https://github.com/codeyu/nanoid-net</p><p>Nano ID 与 UUID v4 (基于随机数) 相当。 它们在 ID 中有相似数量的随机位 (Nano ID 为126，UUID 为122),因此它们的碰撞概率相似：</p><p>特点：<code>比UUID短</code> <code>无序</code></p><h3 id="seata-优化的雪花算法" tabindex="-1"><a class="header-anchor" href="#seata-优化的雪花算法"><span>Seata 优化的雪花算法</span></a></h3>',11),v={href:"https://www.cnblogs.com/thisiswhy/p/17611163.html",target:"_blank",rel:"noopener noreferrer"},m=l(`<div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class IdGenerator
{
    private readonly long twepoch = 1588435200000L;
    private const int workerIdBits = 10;
    private const int timestampBits = 41;
    private const int sequenceBits = 12;
    private const int maxWorkerId = ~(-1 &lt;&lt; workerIdBits);
    private long workerId;
    private long timestampAndSequence;
    private readonly long timestampAndSequenceMask = ~(-1L &lt;&lt; (timestampBits + sequenceBits));

    public static readonly IdGenerator Instance = new IdGenerator(GenerateWorkerId());

    public IdGenerator(long workerId)
    {
        InitTimestampAndSequence();
        InitWorkerId(workerId);
    }

    private void InitTimestampAndSequence()
    {
        long timestamp = GetNewestTimestamp();
        long timestampWithSequence = timestamp &lt;&lt; sequenceBits;
        this.timestampAndSequence = timestampWithSequence;
    }

    private void InitWorkerId(long workerId)
    {
        if (workerId &gt; maxWorkerId || workerId &lt; 0)
        {
            string message = string.Format(&quot;worker Id can&#39;t be greater than {0} or less than 0&quot;, maxWorkerId);
            throw new ArgumentException(message);
        }
        this.workerId = workerId &lt;&lt; (timestampBits + sequenceBits);
    }

    public long NextId()
    {
        WaitIfNecessary();
        long next = Interlocked.Increment(ref timestampAndSequence);
        long timestampWithSequence = next &amp; timestampAndSequenceMask;
        return workerId | timestampWithSequence;
    }

    public static long NewId()
    {
        return Instance.NextId();
    }

    private void WaitIfNecessary()
    {
        long currentWithSequence = timestampAndSequence;
        long current = currentWithSequence &gt;&gt; sequenceBits;
        long newest = GetNewestTimestamp();
        if (current &gt;= newest)
        {
            Thread.Sleep(5);
        }
    }

    private long GetNewestTimestamp()
    {
        return DateTimeOffset.UtcNow.ToUnixTimeMilliseconds() - twepoch;
    }

    public static long GenerateWorkerId()
    {
        try
        {
            return GenerateWorkerIdBaseOnK8S();
        }
        catch (Exception)
        {
            try
            {
                return GenerateWorkerIdBaseOnMac();
            }
            catch (Exception)
            {
                return GenerateRandomWorkerId();
            }
        }
    }

    public static long GenerateWorkerIdBaseOnMac()
    {
        IEnumerable&lt;NetworkInterface&gt; all = NetworkInterface.GetAllNetworkInterfaces();
        foreach (NetworkInterface networkInterface in all)
        {
            bool isLoopback = networkInterface.NetworkInterfaceType == NetworkInterfaceType.Loopback;
            //bool isVirtual = networkInterface.;
            //if (isLoopback || isVirtual)
            if (isLoopback)
            {
                continue;
            }
            byte[] mac = networkInterface.GetPhysicalAddress().GetAddressBytes();
            return ((mac[4] &amp; 0B11) &lt;&lt; 8) | (mac[5] &amp; 0xFF);
        }
        throw new Exception(&quot;no available mac found&quot;);
    }

    public static long GenerateWorkerIdBaseOnK8S()
    {
        return GenerateWorkerIdBaseOnString(Environment.GetEnvironmentVariable(&quot;K8S_POD_ID&quot;));
    }

    public static long GenerateWorkerIdBaseOnString(string str)
    {
        ArgumentNullException.ThrowIfNull(str, nameof(str));
        int hashValue = 0;
        int cc = 2 &lt;&lt; (workerIdBits - 1);
        foreach (char c in str)
        {
            hashValue = (hashValue * 31 + c) % cc;
        }
        return hashValue + 1;
    }

    public static long GenerateRandomWorkerId()
    {
        return Random.Shared.NextInt64(maxWorkerId + 1);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>https://www.cnblogs.com/fs7744/p/17823881.html</p></blockquote><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,3),u={href:"https://www.cnblogs.com/wzh2010/p/15642421.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://tech.meituan.com/2017/04/21/mt-leaf.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.cnblogs.com/sunyuliang/p/12161416.html",target:"_blank",rel:"noopener noreferrer"};function h(g,I){const i=a("ExternalLinkIcon");return r(),d("div",null,[o,n("p",null,[e("改良版雪花id java："),n("a",v,[e("https://www.cnblogs.com/thisiswhy/p/17611163.html"),s(i)]),e(" 然后博客园老哥搞了c#移植版本")]),m,n("p",null,[n("a",u,[e("https://www.cnblogs.com/wzh2010/p/15642421.html"),s(i)]),e("：分布式：分布式系统下的唯一序列 "),n("a",b,[e("https://tech.meituan.com/2017/04/21/mt-leaf.html"),s(i)]),e("：Leaf——美团点评分布式ID生成系统 分布式唯一id .net版本优化："),n("a",p,[e("https://www.cnblogs.com/sunyuliang/p/12161416.html"),s(i)])])])}const f=t(c,[["render",h],["__file","fenbushiweiyibiaoshi.html.vue"]]),y=JSON.parse('{"path":"/middleware/identityId/fenbushiweiyibiaoshi.html","title":"唯一标识","lang":"zh-CN","frontmatter":{"title":"唯一标识","lang":"zh-CN","date":"2023-08-15T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"fenbushiweiyibiaoshi","slug":"ophof5","docsId":"65706679","description":"需求 这个唯一序号有如下几种特征： 全局唯一性：确保生成的序列是全局唯一的，不可重复。 有序性：确保生成的ID值对于某个用户或者业务是按一定的数字有序递增的。 高可用性：确保生成ID功能的高可用，能够承接较大峰值，能够保证序列生成的有效性（不重复且有序）。 带时间标记：ID中有时间片段组成，可是清晰识别出操作的时间。 其他组件 四个id生成器的性能比较...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/identityId/fenbushiweiyibiaoshi.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"唯一标识"}],["meta",{"property":"og:description","content":"需求 这个唯一序号有如下几种特征： 全局唯一性：确保生成的序列是全局唯一的，不可重复。 有序性：确保生成的ID值对于某个用户或者业务是按一定的数字有序递增的。 高可用性：确保生成ID功能的高可用，能够承接较大峰值，能够保证序列生成的有效性（不重复且有序）。 带时间标记：ID中有时间片段组成，可是清晰识别出操作的时间。 其他组件 四个id生成器的性能比较..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-05T14:52:15.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-08-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-05T14:52:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"唯一标识\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-05T14:52:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"需求","slug":"需求","link":"#需求","children":[]},{"level":2,"title":"其他组件","slug":"其他组件","link":"#其他组件","children":[{"level":3,"title":"Nanoid","slug":"nanoid","link":"#nanoid","children":[]},{"level":3,"title":"Seata 优化的雪花算法","slug":"seata-优化的雪花算法","link":"#seata-优化的雪花算法","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1701787935000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":3}]},"readingTime":{"minutes":2,"words":600},"filePathRelative":"middleware/identityId/fenbushiweiyibiaoshi.md","localizedDate":"2023年8月15日","excerpt":"<h2>需求</h2>\\n<p>这个唯一序号有如下几种特征：</p>\\n<ul>\\n<li>全局唯一性：确保生成的序列是全局唯一的，不可重复。</li>\\n<li>有序性：确保生成的ID值对于某个用户或者业务是按一定的数字有序递增的。</li>\\n<li>高可用性：确保生成ID功能的高可用，能够承接较大峰值，能够保证序列生成的有效性（不重复且有序）。</li>\\n<li>带时间标记：ID中有时间片段组成，可是清晰识别出操作的时间。</li>\\n</ul>\\n<h2>其他组件</h2>\\n<p>四个id生成器的性能比较：https://www.cnblogs.com/fs7744/p/17823881.html</p>","autoDesc":true}');export{f as comp,y as data};
