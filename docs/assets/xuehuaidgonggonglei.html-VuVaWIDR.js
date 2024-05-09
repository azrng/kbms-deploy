import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,d as a}from"./app-D8HBJYTp.js";const i={},t=a(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>该文章生成的内容唯一性待确认</p><p>使用一个 64 bit 的 long 型的数字作为全局唯一 id。在分布式系统中的应用十分广泛，且ID 引入了时间戳，基本上保持自增。 格式：1bit保留 + 41bit时间戳 + 10bit机器 + 12bit序列号 第一位不使用，主要是为了避免部分场景变成负数； <strong>41位时间戳</strong>，也就是2的41次方，毫秒为单位，足够保存69年。这里一般存储1970年以来的毫秒数，建议各个系统根据需要自定义这个开始日期； <strong>10位机器码</strong>，理论上可以表示1024台机器，也可以拆分几位表示机房几位表示机器。这里<strong>默认采用本机IPv4地址最后两段以及进程Id一起作为机器码</strong>，确保机房内部不同机器，以及相同机器上的不同进程，拥有不同的机器码； <strong>12位序列号</strong>，表示范围0~4095，一直递增，即使毫秒数加一，这里也不会归零，避免被恶意用户轻易猜测得到前后订单号；</p><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h3><p>示例如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>Snowflake snowflake = new Snowflake();
for (int i = <span class="token number">0</span>; i &lt; <span class="token number">100</span>; i++)
<span class="token punctuation">{</span>
    <span class="token comment">//生成ID</span>
    Console.WriteLine(snowflake.NewId());
<span class="token punctuation">}</span>

<span class="token comment">//时间转为Id</span>
var bbb = snowflake.GetId(DateTime.Now.AddDays(<span class="token number">1</span>));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用到的类</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>public class Snowflake
<span class="token punctuation">{</span>
    #region 属性

    <span class="token comment">/// &lt;summary&gt;</span>
    <span class="token comment">/// 随机数生成</span>
    <span class="token comment">/// &lt;/summary&gt;</span>
    private static readonly RandomNumberGenerator _rnd = new RNGCryptoServiceProvider();

    <span class="token comment">/// &lt;summary&gt;</span>
    <span class="token comment">/// 开始时间戳。首次使用前设置，否则无效，默认1970-1-1</span>
    <span class="token comment">/// &lt;/summary&gt;</span>
    private DateTime StartTimestamp <span class="token punctuation">{</span> get; <span class="token punctuation">}</span> = new DateTime(<span class="token number">1970</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span>);

    <span class="token comment">/// &lt;summary&gt;</span>
    <span class="token comment">/// 机器Id，取10位&lt;</span>
    <span class="token comment">/// &lt;/summary&gt;</span>
    private int WorkerId <span class="token punctuation">{</span> get; set; <span class="token punctuation">}</span>

    private int _sequence;

    <span class="token comment">/// &lt;summary&gt;</span>
    <span class="token comment">/// 序列号，取12位</span>
    <span class="token comment">/// &lt;/summary&gt;</span>
    public int Sequence <span class="token punctuation">{</span> get; set; <span class="token punctuation">}</span>

    private long _msStart;
    private Stopwatch _watch;
    private long _lastTime;

    #endregion

    #region 核心方法

    private void Init()
    <span class="token punctuation">{</span>
        <span class="token comment">// 初始化WorkerId，取5位实例加上5位进程，确保同一台机器的WorkerId不同</span>
        if (WorkerId &lt;= <span class="token number">0</span>)
        <span class="token punctuation">{</span>
            var nodeId = Next(<span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1024</span>); <span class="token comment">//SysConfig.Current.Instance;</span>
            var pid = Process.GetCurrentProcess().Id;
            var tid = Thread.CurrentThread.ManagedThreadId;
            WorkerId = ((nodeId &amp; 0x1F) &lt;&lt; <span class="token number">5</span>) | ((pid ^ tid) &amp; 0x1F);
        <span class="token punctuation">}</span>

        <span class="token comment">// 记录此时距离起点的毫秒数以及开机嘀嗒数</span>
        if (_watch == <span class="token null keyword">null</span>)
        <span class="token punctuation">{</span>
            _msStart = (long)(DateTime.Now - StartTimestamp).TotalMilliseconds;
            _watch = Stopwatch.StartNew();
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/// &lt;summary&gt;</span>
    <span class="token comment">/// 获取下一个Id</span>
    <span class="token comment">/// &lt;/summary&gt;</span>
    <span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>
    public virtual long NewId()
    <span class="token punctuation">{</span>
        Init();

        <span class="token comment">// 此时嘀嗒数减去起点嘀嗒数，加上七点毫秒数</span>
        <span class="token comment">//var ms = (Int64)(DateTime.Now - StartTimestamp).TotalMilliseconds;</span>
        var ms = _watch.ElapsedMilliseconds + _msStart;
        var wid = WorkerId &amp; 0x3FF;
        var seq = Interlocked.Increment(ref _sequence) &amp; 0x0FFF;

        <span class="token comment">//!!! 避免时间倒退</span>
        if (ms &lt; _lastTime) ms = _lastTime;

        <span class="token comment">// 相同毫秒内，如果序列号用尽，则可能超过4096，导致生成重复Id</span>
        <span class="token comment">// 睡眠1毫秒，抢占它的位置 @656092719（广西-风吹面）</span>
        if (_lastTime == ms &amp;&amp; seq == <span class="token number">0</span>)
        <span class="token punctuation">{</span>
            <span class="token comment">//ms++;</span>
            <span class="token comment">// spin等1000次耗时141us，10000次耗时397us，100000次耗时3231us。@i9-10900k</span>
            <span class="token comment">//Thread.SpinWait(1000);</span>
            while (_lastTime == ms) ms = _watch.ElapsedMilliseconds + _msStart;
        <span class="token punctuation">}</span>

        _lastTime = ms;

        <span class="token comment">/*
            * 每个毫秒内_Sequence没有归零，主要是为了安全，避免被人猜测得到前后Id。
            * 而毫秒内的顺序，重要性不大。
            */</span>

        return (ms &lt;&lt; (<span class="token number">10</span> + <span class="token number">12</span>)) | (long)(wid &lt;&lt; <span class="token number">12</span>) | (long)seq;
    <span class="token punctuation">}</span>

    <span class="token comment">/// &lt;summary&gt;</span>
    <span class="token comment">/// 获取指定时间的Id，带上节点和序列号。可用于根据业务时间构造插入Id</span>
    <span class="token comment">/// &lt;/summary&gt;</span>
    <span class="token comment">/// &lt;param name=&quot;time&quot;&gt;时间&lt;/param&gt;</span>
    <span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>
    public virtual long NewId(DateTime time)
    <span class="token punctuation">{</span>
        Init();

        var ms = (long)(time - StartTimestamp).TotalMilliseconds;
        var wid = WorkerId &amp; 0x3FF;
        var seq = Interlocked.Increment(ref _sequence) &amp; 0x0FFF;

        return (ms &lt;&lt; (<span class="token number">10</span> + <span class="token number">12</span>)) | (long)(wid &lt;&lt; <span class="token number">12</span>) | (long)seq;
    <span class="token punctuation">}</span>

    <span class="token comment">/// &lt;summary&gt;</span>
    <span class="token comment">/// 时间转为Id，不带节点和序列号。可用于构建时间片段查询</span>
    <span class="token comment">/// &lt;/summary&gt;</span>
    <span class="token comment">/// &lt;param name=&quot;time&quot;&gt;时间&lt;/param&gt;</span>
    <span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>
    public virtual long GetId(DateTime time)
    <span class="token punctuation">{</span>
        var t = (long)(time - StartTimestamp).TotalMilliseconds;
        return t &lt;&lt; (<span class="token number">10</span> + <span class="token number">12</span>);
    <span class="token punctuation">}</span>

    <span class="token comment">/// &lt;summary&gt;尝试分析&lt;/summary&gt;</span>
    <span class="token comment">/// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;</span>
    <span class="token comment">/// &lt;param name=&quot;time&quot;&gt;时间&lt;/param&gt;</span>
    <span class="token comment">/// &lt;param name=&quot;workerId&quot;&gt;节点&lt;/param&gt;</span>
    <span class="token comment">/// &lt;param name=&quot;sequence&quot;&gt;序列号&lt;/param&gt;</span>
    <span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>
    public virtual bool TryParse(long id<span class="token punctuation">,</span> out DateTime time<span class="token punctuation">,</span> out int workerId<span class="token punctuation">,</span> out int sequence)
    <span class="token punctuation">{</span>
        time = StartTimestamp.AddMilliseconds(id &gt;&gt; (<span class="token number">10</span> + <span class="token number">12</span>));
        workerId = (int)((id &gt;&gt; <span class="token number">12</span>) &amp; 0x3FF);
        sequence = (int)(id &amp; 0x0FFF);

        return <span class="token boolean">true</span>;
    <span class="token punctuation">}</span>

    <span class="token comment">/// &lt;summary&gt;返回一个指定范围内的随机数&lt;/summary&gt;</span>
    <span class="token comment">/// &lt;remarks&gt;调用平均耗时37.76ns，其中GC耗时77.56%&lt;/remarks&gt;</span>
    <span class="token comment">/// &lt;param name=&quot;min&quot;&gt;返回的随机数的下界（随机数可取该下界值）&lt;/param&gt;</span>
    <span class="token comment">/// &lt;param name=&quot;max&quot;&gt;返回的随机数的上界（随机数不能取该上界值）&lt;/param&gt;</span>
    <span class="token comment">/// &lt;returns&gt;&lt;/returns&gt;</span>
    private static int Next(int min<span class="token punctuation">,</span> int max)
    <span class="token punctuation">{</span>
        if (max &lt;= min)
            throw new ArgumentOutOfRangeException(nameof(max));
        var _buf = new byte<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>;
        _rnd.GetBytes(_buf);
        int int32 = BitConverter.ToInt32(_buf<span class="token punctuation">,</span> <span class="token number">0</span>);
        if (min == int.MinValue &amp;&amp; max == int.MaxValue)
            return int32;
        if (min == <span class="token number">0</span> &amp;&amp; max == int.MaxValue)
            return Math.Abs(int32);
        return min == int.MinValue &amp;&amp; max == <span class="token number">0</span> ? -Math.Abs(int32) <span class="token operator">:</span> (int)(((long)(max - min) * (long)(uint)int32 &gt;&gt; <span class="token number">32</span>) + (long)min);
    <span class="token punctuation">}</span>

    #endregion
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="难点" tabindex="-1"><a class="header-anchor" href="#难点"><span>难点</span></a></h2><h3 id="时钟倒拨问题" tabindex="-1"><a class="header-anchor" href="#时钟倒拨问题"><span>时钟倒拨问题</span></a></h3><p>Snowflake根据SmartOS操作系统调度算法，初始化时锁定基准时间，并记录处理器时钟嘀嗒数。在需要生成雪花Id时，取基准时间与当时处理器时钟嘀嗒数，计算得到时间戳。也就是说，在初始化之后，Snowflake根本不会读取系统时间，即使时间倒拨，也不影响雪花Id的生成！</p>`,11),l=[t];function m(d,c){return s(),e("div",null,l)}const p=n(i,[["render",m],["__file","xuehuaidgonggonglei.html.vue"]]),u=JSON.parse('{"path":"/middleware/identityId/xuehuaidgonggonglei.html","title":"雪花ID公共类","lang":"zh-CN","frontmatter":{"title":"雪花ID公共类","lang":"zh-CN","date":"2023-08-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"xuehuaidgonggonglei","slug":"uifd82","docsId":"31944582","description":"概述 该文章生成的内容唯一性待确认 使用一个 64 bit 的 long 型的数字作为全局唯一 id。在分布式系统中的应用十分广泛，且ID 引入了时间戳，基本上保持自增。 格式：1bit保留 + 41bit时间戳 + 10bit机器 + 12bit序列号 第一位不使用，主要是为了避免部分场景变成负数； 41位时间戳，也就是2的41次方，毫秒为单位，足够...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/identityId/xuehuaidgonggonglei.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"雪花ID公共类"}],["meta",{"property":"og:description","content":"概述 该文章生成的内容唯一性待确认 使用一个 64 bit 的 long 型的数字作为全局唯一 id。在分布式系统中的应用十分广泛，且ID 引入了时间戳，基本上保持自增。 格式：1bit保留 + 41bit时间戳 + 10bit机器 + 12bit序列号 第一位不使用，主要是为了避免部分场景变成负数； 41位时间戳，也就是2的41次方，毫秒为单位，足够..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T14:00:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-08-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T14:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"雪花ID公共类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T14:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"操作","slug":"操作","link":"#操作","children":[]}]},{"level":2,"title":"难点","slug":"难点","link":"#难点","children":[{"level":3,"title":"时钟倒拨问题","slug":"时钟倒拨问题","link":"#时钟倒拨问题","children":[]}]}],"git":{"createdTime":1697724028000,"updatedTime":1697724028000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":4.04,"words":1211},"filePathRelative":"middleware/identityId/xuehuaidgonggonglei.md","localizedDate":"2023年8月14日","excerpt":"<h2>概述</h2>\\n<p>该文章生成的内容唯一性待确认</p>\\n<p>使用一个 64 bit 的 long 型的数字作为全局唯一 id。在分布式系统中的应用十分广泛，且ID 引入了时间戳，基本上保持自增。\\n格式：1bit保留 + 41bit时间戳 + 10bit机器 + 12bit序列号\\n第一位不使用，主要是为了避免部分场景变成负数；\\n<strong>41位时间戳</strong>，也就是2的41次方，毫秒为单位，足够保存69年。这里一般存储1970年以来的毫秒数，建议各个系统根据需要自定义这个开始日期；\\n<strong>10位机器码</strong>，理论上可以表示1024台机器，也可以拆分几位表示机房几位表示机器。这里<strong>默认采用本机IPv4地址最后两段以及进程Id一起作为机器码</strong>，确保机房内部不同机器，以及相同机器上的不同进程，拥有不同的机器码；\\n<strong>12位序列号</strong>，表示范围0~4095，一直递增，即使毫秒数加一，这里也不会归零，避免被恶意用户轻易猜测得到前后订单号；</p>","autoDesc":true}');export{p as comp,u as data};
