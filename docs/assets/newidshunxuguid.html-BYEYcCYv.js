import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as l,c as d,a as n,d as e,e as a,b as t}from"./app-qB9_Bjjp.js";const o={},c=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍"},[n("span",null,"介绍")])],-1),p=n("p",null,"snowflake那种需要包含机器ID无法去中心化，必须有一个全局生成机器ID的机制作为额外协调。所以可以尝试使用NewId。",-1),u=n("p",null,"NewId是一个连续ID生成器，它使用主机MAC地址，结合时间戳和递增的序列号实现ID生成策略。由于MAC地址全局唯一，因此NewId无需机器ID这样的额外设施，即可生成按时间顺序排序的全局唯一标识符。",-1),m={href:"https://github.com/phatboyg/NewId",target:"_blank",rel:"noopener noreferrer"},v={href:"https://masstransit.io/documentation/patterns/newid#newid",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>引用组件</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">PackageReference</span> Include<span class="token operator">=</span><span class="token string">&quot;NewId&quot;</span> Version<span class="token operator">=</span><span class="token string">&quot;3.0.3&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置生成标识符时包含processId（进程Id），保证运行在同一台机器上的多个进程生成的标识符不会重复：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>NewId<span class="token punctuation">.</span><span class="token function">SetProcessIdProvider</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CurrentProcessIdProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成guid</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> guid <span class="token operator">=</span> NewId<span class="token punctuation">.</span><span class="token function">NextGuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>guid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>cc210000<span class="token operator">-</span><span class="token number">6760</span><span class="token operator">-</span>002b<span class="token operator">-</span><span class="token number">7041</span><span class="token operator">-</span>08d9ebd9edc2
cc210000<span class="token operator">-</span><span class="token number">6760</span><span class="token operator">-</span>002b<span class="token operator">-</span>80a6<span class="token operator">-</span>08d9ebd9edc3
cc210000<span class="token operator">-</span><span class="token number">6760</span><span class="token operator">-</span>002b<span class="token operator">-</span>88a5<span class="token operator">-</span>08d9ebd9edc3
cc210000<span class="token operator">-</span><span class="token number">6760</span><span class="token operator">-</span>002b<span class="token operator">-</span>8b6a<span class="token operator">-</span>08d9ebd9edc3
cc210000<span class="token operator">-</span><span class="token number">6760</span><span class="token operator">-</span>002b<span class="token operator">-</span>8e1e<span class="token operator">-</span>08d9ebd9edc3
cc210000<span class="token operator">-</span><span class="token number">6760</span><span class="token operator">-</span>002b<span class="token operator">-</span>90c1<span class="token operator">-</span>08d9ebd9edc3
cc210000<span class="token operator">-</span><span class="token number">6760</span><span class="token operator">-</span>002b<span class="token operator">-</span><span class="token number">9377</span><span class="token operator">-</span>08d9ebd9edc3
cc210000<span class="token operator">-</span><span class="token number">6760</span><span class="token operator">-</span>002b<span class="token operator">-</span><span class="token number">9628</span><span class="token operator">-</span>08d9ebd9edc3
cc210000<span class="token operator">-</span><span class="token number">6760</span><span class="token operator">-</span>002b<span class="token operator">-</span>98d5<span class="token operator">-</span>08d9ebd9edc3
cc210000<span class="token operator">-</span><span class="token number">6760</span><span class="token operator">-</span>002b<span class="token operator">-</span>9b80<span class="token operator">-</span>08d9ebd9edc3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样子就生成了顺序的Guid</p><h2 id="pomelo中顺序uuid" tabindex="-1"><a class="header-anchor" href="#pomelo中顺序uuid"><span>Pomelo中顺序UUID</span></a></h2>`,11),k={href:"https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql/blob/ebe011a6f1b2a2a9709fe558cfc7ed3215b55c37/src/EFCore.MySql/ValueGeneration/Internal/MySqlSequentialGuidValueGenerator.cs",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>代码内容</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
/// 连续 GUID ID 生成器
/// &lt;/summary&gt;
/// &lt;remarks&gt;
/// &lt;para&gt;
/// 代码参考自：https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql/blob/ebe011a6f1b2a2a9709fe558cfc7ed3215b55c37/src/EFCore.MySql/ValueGeneration/Internal/MySqlSequentialGuidValueGenerator.cs
/// &lt;/para&gt;
/// &lt;/remarks&gt;
public class SequentiaGuidIdGenerator
{
    /// &lt;summary&gt;
    /// 随机数生成器
    /// &lt;/summary&gt;
    private static readonly RandomNumberGenerator _rng = RandomNumberGenerator.Create();

    /// &lt;summary&gt;
    /// 生成逻辑
    /// &lt;/summary&gt;
    /// &lt;param name=&quot;idGeneratorOptions&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public Guid Create(SequentialGuidSettings idGeneratorOptions = null)
    {
        // According to RFC 4122:
        // dddddddd-dddd-Mddd-Ndrr-rrrrrrrrrrrr
        // - M = RFC version, in this case &#39;4&#39; for random UUID
        // - N = RFC variant (plus other bits), in this case 0b1000 for variant 1
        // - d = nibbles based on UTC date/time in ticks
        // - r = nibbles based on random bytes

        var randomBytes = new byte[7];
        _rng.GetBytes(randomBytes);
        var ticks = (ulong)(idGeneratorOptions?.TimeNow == null ? DateTimeOffset.UtcNow : idGeneratorOptions.TimeNow.Value).Ticks;

        const ushort uuidVersion = 4;
        const ushort uuidVariant = 0b1000;

        var ticksAndVersion = (ushort)((ticks &lt;&lt; 48 &gt;&gt; 52) | uuidVersion &lt;&lt; 12);
        var ticksAndVariant = (byte)((ticks &lt;&lt; 60 &gt;&gt; 60) | uuidVariant &lt;&lt; 4);

        if (idGeneratorOptions?.LittleEndianBinary16Format == true)
        {
            var guidBytes = new byte[16];
            var tickBytes = BitConverter.GetBytes(ticks);
            if (BitConverter.IsLittleEndian)
            {
                Array.Reverse(tickBytes);
            }

            Buffer.BlockCopy(tickBytes, 0, guidBytes, 0, 6);
            guidBytes[6] = (byte)(ticksAndVersion &lt;&lt; 8 &gt;&gt; 8);
            guidBytes[7] = (byte)(ticksAndVersion &gt;&gt; 8);
            guidBytes[8] = ticksAndVariant;
            Buffer.BlockCopy(randomBytes, 0, guidBytes, 9, 7);

            return new Guid(guidBytes);
        }

        var guid = new Guid((uint)(ticks &gt;&gt; 32), (ushort)(ticks &lt;&lt; 32 &gt;&gt; 48), ticksAndVersion,
            ticksAndVariant,
            randomBytes[0],
            randomBytes[1],
            randomBytes[2],
            randomBytes[3],
            randomBytes[4],
            randomBytes[5],
            randomBytes[6]);

        return guid;
    }
}

/// &lt;summary&gt;
/// 顺序guid设置
/// &lt;/summary&gt;
public sealed class SequentialGuidSettings
{
    /// &lt;summary&gt;
    /// 当前时间
    /// &lt;/summary&gt;
    public DateTimeOffset? TimeNow { get; set; }

    /// &lt;summary&gt;
    /// LittleEndianBinary 16 格式化
    /// &lt;/summary&gt;
    public bool LittleEndianBinary16Format { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,3),h={href:"https://mp.weixin.qq.com/s/0xlu1idYa7cGrYBUZNNG9A",target:"_blank",rel:"noopener noreferrer"},y={href:"https://mp.weixin.qq.com/s/PDoOldEoVBZgEp3vvcK25w",target:"_blank",rel:"noopener noreferrer"};function w(I,f){const s=r("ExternalLinkIcon");return l(),d("div",null,[c,p,u,n("p",null,[e("仓库地址："),n("a",m,[e("https://github.com/phatboyg/NewId"),a(s)]),e(" 文档地址："),n("a",v,[e("https://masstransit.io/documentation/patterns/newid#newid"),a(s)])]),b,n("p",null,[e("代码参考自："),n("a",k,[e("此处"),a(s)])]),g,n("p",null,[n("a",h,[e("https://mp.weixin.qq.com/s/0xlu1idYa7cGrYBUZNNG9A"),a(s)]),e(" | 使用C#快速生成顺序GUID "),n("a",y,[e("https://mp.weixin.qq.com/s/PDoOldEoVBZgEp3vvcK25w"),a(s)]),e(" | ASP.NET Core 产生连续 Guid")])])}const B=i(o,[["render",w],["__file","newidshunxuguid.html.vue"]]),G=JSON.parse('{"path":"/middleware/identityId/newidshunxuguid.html","title":"NewId顺序Guid","lang":"zh-CN","frontmatter":{"title":"NewId顺序Guid","lang":"zh-CN","date":"2023-08-30T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"newidshunxuguid","slug":"rg2car","docsId":"66285175","description":"介绍 snowflake那种需要包含机器ID无法去中心化，必须有一个全局生成机器ID的机制作为额外协调。所以可以尝试使用NewId。 NewId是一个连续ID生成器，它使用主机MAC地址，结合时间戳和递增的序列号实现ID生成策略。由于MAC地址全局唯一，因此NewId无需机器ID这样的额外设施，即可生成按时间顺序排序的全局唯一标识符。 仓库地址：htt...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/identityId/newidshunxuguid.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"NewId顺序Guid"}],["meta",{"property":"og:description","content":"介绍 snowflake那种需要包含机器ID无法去中心化，必须有一个全局生成机器ID的机制作为额外协调。所以可以尝试使用NewId。 NewId是一个连续ID生成器，它使用主机MAC地址，结合时间戳和递增的序列号实现ID生成策略。由于MAC地址全局唯一，因此NewId无需机器ID这样的额外设施，即可生成按时间顺序排序的全局唯一标识符。 仓库地址：htt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-05T14:52:15.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-08-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-05T14:52:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NewId顺序Guid\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-05T14:52:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[]},{"level":2,"title":"Pomelo中顺序UUID","slug":"pomelo中顺序uuid","link":"#pomelo中顺序uuid","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1701787935000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":2.13,"words":639},"filePathRelative":"middleware/identityId/newidshunxuguid.md","localizedDate":"2023年8月30日","excerpt":"<h2>介绍</h2>\\n<p>snowflake那种需要包含机器ID无法去中心化，必须有一个全局生成机器ID的机制作为额外协调。所以可以尝试使用NewId。</p>\\n<p>NewId是一个连续ID生成器，它使用主机MAC地址，结合时间戳和递增的序列号实现ID生成策略。由于MAC地址全局唯一，因此NewId无需机器ID这样的额外设施，即可生成按时间顺序排序的全局唯一标识符。</p>\\n<p>仓库地址：<a href=\\"https://github.com/phatboyg/NewId\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/phatboyg/NewId</a>\\n文档地址：<a href=\\"https://masstransit.io/documentation/patterns/newid#newid\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://masstransit.io/documentation/patterns/newid#newid</a></p>","autoDesc":true}');export{B as comp,G as data};
