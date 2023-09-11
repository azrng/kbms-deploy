import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c as l,a as e,b as i,d as a,e as r}from"./app-77ed49ef.js";const c={},o=r(`<p>NetCore中的缓存和System.Runtime.Caching很相似，但是在功能上做了增强，缓存的key支持object类型；提供了泛型支持；可以读缓存和单个缓存项的大小做限定，可以设置缓存的压缩比例。</p><p>通过实现微软官方的Microsoft.Extensions.Caching里面的IDistributedCache接口实现缓存集成到ASPNETCore中</p><h1 id="_1-memorycahe" tabindex="-1"><a class="header-anchor" href="#_1-memorycahe" aria-hidden="true">#</a> 1. MemoryCahe</h1><h2 id="_1-1-简单入门" tabindex="-1"><a class="header-anchor" href="#_1-1-简单入门" aria-hidden="true">#</a> 1.1 简单入门</h2><p>netcore中缓存相关的类库都在 Microsoft.Extensions.Caching ，使用MemoryCache首先安装包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;PackageReference Include=&quot;Microsoft.Extensions.Caching.Memory&quot; Version=&quot;5.0.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注入到容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            //添加缓存配置
            services.AddMemoryCache();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        private readonly IMemoryCache _cache;
        public HomeController(IMemoryCache cache)
        {
            _cache = cache;
        }

        [HttpGet]
        public string Set()
        {
            //写
            _cache.Set(&quot;login&quot;, &quot;4545478244&quot;);
            return &quot;&quot;;
        }

        [HttpGet]
        public string Get()
        {
            //读
            var value = _cache.Get(&quot;login&quot;);
            return &quot;&quot;;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-过期时间" tabindex="-1"><a class="header-anchor" href="#_1-2-过期时间" aria-hidden="true">#</a> 1.2 过期时间</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            //1.最简单使用方式
            _cache.Set(&quot;mykey&quot;, &quot;myvalue&quot;);
            //2.绝对过期时间，3秒后过期
            _cache.Set(&quot;key1&quot;, &quot;value1&quot;, new DateTimeOffset(DateTime.Now.AddSeconds(3)));
            //3.绝对过期时间，效果同上
            _cache.Set(&quot;key2&quot;, &quot;value2&quot;, TimeSpan.FromSeconds(3));
            //4.滑动过期时间，3秒后,即三秒钟内被访问，则重新刷新缓存时间为3秒后
            _cache.Set(&quot;key3&quot;, &quot;value3&quot;, new MemoryCacheEntryOptions
            {
                SlidingExpiration = TimeSpan.FromSeconds(3),
            });
            Console.WriteLine(&quot;-----------暂停2秒&quot;);
            Thread.Sleep(2000);//暂停2秒
            Console.WriteLine($&quot;key1的值：{_cache.Get(&quot;key1&quot;) ?? &quot;key1被清除&quot;}&quot;);
            Console.WriteLine($&quot;key2的值：{_cache.Get(&quot;key2&quot;) ?? &quot;key2被清除&quot;}&quot;);
            Console.WriteLine($&quot;key3的值：{_cache.Get(&quot;key3&quot;) ?? &quot;key3被清除&quot;}&quot;);
            Console.WriteLine(&quot;-----------暂停2秒&quot;);
            Thread.Sleep(2000);//再次暂停2秒
            Console.WriteLine($&quot;key1的值：{_cache.Get(&quot;key1&quot;) ?? &quot;key1被清除&quot;}&quot;);
            Console.WriteLine($&quot;key2的值：{_cache.Get(&quot;key2&quot;) ?? &quot;key2被清除&quot;}&quot;);
            Console.WriteLine($&quot;key3的值：{_cache.Get(&quot;key3&quot;) ?? &quot;key3被清除&quot;}&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在例子中key1,key2都是使用的绝对过期时间，key3使用的相对过期时间，2秒后第一次访问key1、key2、key3都没过期，其中key3的过期时间刷新了，重新设置为3秒后，所以再次暂停2秒后，key1、key2都过期了，key3仍然存在。</p><p>程序运行结果如下：</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619011217302-f7c961c7-35d2-4ab8-a976-f440a86cf8ab.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_1-2-常用配置" tabindex="-1"><a class="header-anchor" href="#_1-2-常用配置" aria-hidden="true">#</a> 1.2 常用配置</h2><p>下边的例子介绍netcore中缓存的常用配置，直接看代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddMemoryCache(options =&gt;
            {
                //缓存大小
                options.SizeLimit = 3;//如果设置了该值，那么每个set都必须设置size，并且超过了这个值的大小的会自动销毁 
                //缓存满了时，压缩20%（即删除20份优先级低的缓存项）
                options.CompactionPercentage = 0.2;
                //两秒钟查找一次过期项
                options.ExpirationScanFrequency = TimeSpan.FromSeconds(3);
            });
        }

 		[HttpGet]
        public string TestSize()
        {
            //SizeLimit配置3
            _cache.Set(&quot;item1&quot;, &quot;11111&quot;, new MemoryCacheEntryOptions
            {
                //缓存大小占1份
                Size = 2
            });
            _cache.Set(&quot;item2&quot;, &quot;22222&quot;, new MemoryCacheEntryOptions
            {
                Size = 2
            });
            var item1 = _cache.Get(&quot;item1&quot;);//输出 11111
            var item2 = _cache.Get(&quot;item2&quot;);//输出 null

            return &quot;&quot;;
        }

        [HttpGet]
        public string TestOptions()
        {
            //单个缓存项的配置
            MemoryCacheEntryOptions cacheEntityOps = new MemoryCacheEntryOptions()
            {
                //绝对过期时间1
                //AbsoluteExpiration = new DateTimeOffset(DateTime.Now.AddSeconds(2)),
                //绝对过期时间2
                //AbsoluteExpirationRelativeToNow=TimeSpan.FromSeconds(3),
                //相对过期时间
                SlidingExpiration = TimeSpan.FromSeconds(3),
                //优先级，当缓存压缩时会优先清除优先级低的缓存项
                Priority = CacheItemPriority.Low,//优先级等级：Low,Normal,High,NeverRemove
                //缓存大小占1份
                Size = 1
            };
            //注册缓存项被清除时的回调，可以注册多个回调
            cacheEntityOps.RegisterPostEvictionCallback((key, value, reason, state) =&gt;
            {
                Console.WriteLine($&quot;回调函数输出【键:{key},值:{value},被清除的原因:{reason}】&quot;);
            });
            _cache.Set(&quot;mykey&quot;, &quot;myvalue&quot;, cacheEntityOps);
            Console.WriteLine($&quot;mykey的值：{_cache.Get(&quot;mykey&quot;) ?? &quot;mykey缓存被清除了&quot;}&quot;);
            Console.WriteLine(&quot;------------------暂停3秒&quot;);
            Thread.Sleep(3000);
            Console.WriteLine($&quot;mykey的值：{_cache.Get(&quot;mykey&quot;) ?? &quot;mykey缓存被清除了&quot;}&quot;);

            return &quot;&quot;;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意netcore中设置缓存和缓存项大小是没有单位的</p><p>缓存被清空的回调函数可以注册多个（System.Runtime.Caching清除缓存的回调只能是一个）。</p><p>程序执行结果：</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619012068314-c59f28a0-d9a1-4961-b91a-2e63d739c113.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_1-3-ichangetoken" tabindex="-1"><a class="header-anchor" href="#_1-3-ichangetoken" aria-hidden="true">#</a> 1.3 IChangeToken</h2><p>上边我们已经简单了解了通过滑动过期时间和绝对过期时间来控制缓存的有效性，但是有时缓存的过期与否和时间没有联系，比如我们缓存一个文件的内容，不管缓存多久只要文件没有发生变化缓存都是有效的。在net framework中我们可以通过CacheDependency来控制，在net core中怎么控制呢？net core中我们可以使用IChangeToken接口轻松实现缓存的过期策略。先看一下IChangeToken接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public interface IChangeToken
    {
        // 是否有变化发生
        bool HasChanged { get; }
        // token是否会调用回调函数，为true时才会有效 
        bool ActiveChangeCallbacks { get; }
        // 注册一个回调函数，当有变化时触发回调
        IDisposable RegisterChangeCallback(Action&lt;object&gt; callback, object state);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看一下IChangeToken实现缓存过期策略的两个例子：</p><h3 id="_1-3-1-监控文件" tabindex="-1"><a class="header-anchor" href="#_1-3-1-监控文件" aria-hidden="true">#</a> 1.3.1 监控文件</h3><p>需要安装组件：Microsoft.Extensions.FileProviders.Physical</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    internal class Program
    {
        private static void Main(string[] args)
        {
            string fileName = Path.Combine(Environment.CurrentDirectory, &quot;someCacheData.xml&quot;);
            var fileInfo = new FileInfo(fileName);
            MemoryCache myCache = new MemoryCache(new MemoryCacheOptions() { });
            MemoryCacheEntryOptions cacheEntityOps = new MemoryCacheEntryOptions();
            //PollingFileChangeToken是IChangeToken的实现类，通过轮询监控文件变化
            cacheEntityOps.AddExpirationToken(new Microsoft.Extensions.FileProviders.Physical.PollingFileChangeToken(fileInfo));
            //缓存失效时，回调函数
            cacheEntityOps.RegisterPostEvictionCallback((key, value, reason, state) =&gt; { Console.WriteLine($&quot;文件【{key}】改动了&quot;); });
            //添加缓存，key为文件名，value为文件内容
            myCache.Set(fileInfo.Name, File.ReadAllText(fileName), cacheEntityOps);
            Console.WriteLine(myCache.Get(fileInfo.Name));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PollingFileChangeToken通过轮询来监控文件有没有发生变化，如果文件中的内容发生改变，缓存就会自动过期。</p><h3 id="_1-3-2-通过代码控制缓存过期" tabindex="-1"><a class="header-anchor" href="#_1-3-2-通过代码控制缓存过期" aria-hidden="true">#</a> 1.3.2 通过代码控制缓存过期</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    class Program
    {
        static void Main(string[] args)
        {
            MemoryCache memoryCache = new MemoryCache(new MemoryCacheOptions());
            MemoryCacheEntryOptions cacheEntityOps = new MemoryCacheEntryOptions();
            //使用CancellationChangeToken控制缓存过期
            CancellationTokenSource tokenSource = new CancellationTokenSource();
            cacheEntityOps.AddExpirationToken(new CancellationChangeToken(tokenSource.Token));
            //设置缓存
            memoryCache.Set(&quot;mykey&quot;, &quot;myvalue&quot;, cacheEntityOps);
            Console.WriteLine(memoryCache.Get(&quot;mykey&quot;) ?? &quot;缓存被清除了&quot;);
            //通过代码清除缓存
            tokenSource.Cancel();
            Console.WriteLine(memoryCache.Get(&quot;mykey&quot;) ?? &quot;缓存被清除了&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tokenSource.Cancel方法发送取消信号，这个方法会触发缓存过期，基于此我们可以通过Cancel方法灵活的实现自定义的缓存策略。</p><p>程序执行结果如下：</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1614392140126-43623db8-f997-4d49-9594-4fb2bfc977b1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_1-4-引用nuget包" tabindex="-1"><a class="header-anchor" href="#_1-4-引用nuget包" aria-hidden="true">#</a> 1.4 引用Nuget包</h2><p>直接引用我自己简单封装的一个Nuget包(简单封装自己用，不要嘲笑)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Common.Cache.MemoryCache&quot; Version=&quot;1.1.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注入到容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            //注入
            services.AddMemoryCacheExtension();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 		# 在需要使用的地方进行注入
        private readonly IMemoryCachimg  _cache;
        public HomeController(IMemoryCachimg cache)
        {
            _cache = cache;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-lazycache" tabindex="-1"><a class="header-anchor" href="#_2-lazycache" aria-hidden="true">#</a> 2. LazyCache</h1><h2 id="_2-1-描述" tabindex="-1"><a class="header-anchor" href="#_2-1-描述" aria-hidden="true">#</a> 2.1 描述</h2><p>是一个基于内存的易于使用并且线程安全的缓存组件。Lazy的意思是LazyCache永远不会再缓存未命中的时候触发一次以上的缓存委托函数，因为使用了MemoryCache并且使用了懒锁来确保只会执行一次。</p><p>内置Lazy锁并且底层使用MemoryCache。</p><p>安装组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;LazyCache&quot; Version=&quot;2.1.3&quot; /&gt;
    &lt;PackageReference Include=&quot;LazyCache.AspNetCore&quot; Version=&quot;2.1.3&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//ConfigureServices中注入服务
services.AddLazyCache();

//控制器中使用构造函数注入IAppCache

//操作实例
var list = await _appCache.GetAsync&lt;IEnumerable&lt;WeatherForecast&gt;&gt;(&quot;yanshi&quot;);
_appCache.Add&lt;IEnumerable&lt;WeatherForecast&gt;&gt;(&quot;yanshi&quot;, list, DateTimeOffset.Now.AddSeconds(10));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-分布式缓存" tabindex="-1"><a class="header-anchor" href="#_2-分布式缓存" aria-hidden="true">#</a> 2. 分布式缓存</h1><p>IDistributedCache骨架代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace Microsoft.Extensions.Caching.Distributed
{
        public interface IDistributedCache
        {
            byte[] Get(string key);
            void Refresh(string key);
            void Remove(string key);
            void Set(string key, byte[] value,
            DistributedCacheEntryOptions options);
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-1-redis分布式缓存" tabindex="-1"><a class="header-anchor" href="#_2-1-redis分布式缓存" aria-hidden="true">#</a> 2.1 Redis分布式缓存</h2><p>微软给netcore的缓存提供了Redis和Sqlserver的实现，通过Sqlserver来缓存的场景比较少，这里我们简单看一下官方提供的Redis缓存用法。</p><h3 id="_2-1-1-安装redis" tabindex="-1"><a class="header-anchor" href="#_2-1-1-安装redis" aria-hidden="true">#</a> 2.1.1 安装redis</h3><p>这里我直接使用docker安装了redis</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 6379:6379 --name redis -d redis redis-server --appendonly yes --requirepass &quot;123456&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令说明：</p><p>-p：宿主机端口与容器端口映射，前面的端口为主机映射端口（需配置服务器安全组），后面的端口为镜像开放的端口</p><p>--restart=always：无论什么情况挂壁，总是重启</p><p>--name：容器名称</p><p>-d：使用指定的镜像，在后台运行容器</p><p>--appendonly yes：redis运行时开启持久化</p><p>--requirepass “123456”：设置redis登录密码</p><h3 id="_2-1-2-控制台程序" tabindex="-1"><a class="header-anchor" href="#_2-1-2-控制台程序" aria-hidden="true">#</a> 2.1.2 控制台程序</h3><p>添加Nuget包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.Extensions.Caching.StackExchangeRedis&quot; Version=&quot;5.0.1&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>写一个简单的控制台程序实现一下netcore中的分布式缓存redis实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        private static void Main(string[] args)
        {
            //获取RedisCache实例
            RedisCache redisCache = new RedisCache(new RedisCacheOptions()
            {
                Configuration = &quot;localhost:6379,password=123456&quot;,
                InstanceName = &quot;MyData&quot;
            });
            //在redis中是以hash表的模式存放的
            redisCache.SetString(&quot;Name&quot;, &quot;jack&quot;);
            redisCache.SetString(&quot;Age&quot;, &quot;20&quot;);
            redisCache.SetString(&quot;Address&quot;, &quot;上海&quot;, new DistributedCacheEntryOptions()
            {
                //SlidingExpiration = TimeSpan.FromSeconds(3)
                AbsoluteExpiration = DateTimeOffset.Now.AddDays(1)//过期时间
            });
            //获取缓存
            Console.WriteLine(redisCache.GetString(&quot;Name&quot;));
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-3-web-api" tabindex="-1"><a class="header-anchor" href="#_2-1-3-web-api" aria-hidden="true">#</a> 2.1.3 Web API</h3><p>新建一个net5 Web API应用程序添加Nuget包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.Extensions.Caching.StackExchangeRedis&quot; Version=&quot;5.0.1&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注入服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            
            services.AddStackExchangeRedisCache(options =&gt;
            {
                options.Configuration = &quot;localhost:6379,password=123456,defaultdatabase=1&quot;;
                options.InstanceName = &quot;MyData&quot;;
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依赖注入使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        private readonly IDistributedCache _cache;

        public WeatherForecastController(IDistributedCache cache)
        {
            _cache = cache;
        }

        [HttpGet]
        public async Task&lt;string&gt; TestAsync()
        {
            //永不过期
            await _cache.SetAsync(&quot;add&quot;, Encoding.UTF8.GetBytes(&quot;北京&quot;));
            var add = await _cache.GetStringAsync(&quot;add&quot;);//北京

            //配置过期时间
            await _cache.SetStringAsync(&quot;Address&quot;, &quot;上海&quot;, new DistributedCacheEntryOptions()
            {
                //SlidingExpiration = TimeSpan.FromSeconds(3)
                AbsoluteExpiration = DateTimeOffset.Now.AddDays(1)
            });
            var address = await _cache.GetStringAsync(&quot;Address&quot;);//上海

            return &quot;&quot;;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>`,78),v={href:"https://www.cnblogs.com/wyy1234/p/10519681.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://docs.microsoft.com/zh-cn/aspnet/core/performance/caching/memory?view=aspnetcore-5.0",target:"_blank",rel:"noopener noreferrer"};function m(b,h){const n=d("ExternalLinkIcon");return t(),l("div",null,[o,e("blockquote",null,[e("p",null,[i("作者：捞月亮的猴子 "),e("a",v,[i("https://www.cnblogs.com/wyy1234/p/10519681.html"),a(n)])]),e("p",null,[i("官方教程："),e("a",u,[i("https://docs.microsoft.com/zh-cn/aspnet/core/performance/caching/memory?view=aspnetcore-5.0"),a(n)])])])])}const q=s(c,[["render",m],["__file","memorycache.html.vue"]]);export{q as default};
