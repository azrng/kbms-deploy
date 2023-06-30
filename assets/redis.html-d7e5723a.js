import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as s}from"./app-3c3dee46.js";const d={},a=s(`<h2 id="分布式缓存" tabindex="-1"><a class="header-anchor" href="#分布式缓存" aria-hidden="true">#</a> 分布式缓存</h2><p>微软给netcore的分布式缓存提供了Redis和Sqlserver的实现，通过Sqlserver来缓存的场景比较少，这里我们简单看一下官方提供的Redis缓存用法。</p><h3 id="_1-安装redis" tabindex="-1"><a class="header-anchor" href="#_1-安装redis" aria-hidden="true">#</a> 1. 安装redis</h3><p>这里我直接使用docker安装了redis</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 6379:6379 --name redis -d redis redis-server --appendonly yes --requirepass &quot;123456&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>命令说明：</p><p>-p：宿主机端口与容器端口映射，前面的端口为主机映射端口（需配置服务器安全组），后面的端口为镜像开放的端口</p><p>--restart=always：无论什么情况挂壁，总是重启</p><p>--name：容器名称</p><p>-d：使用指定的镜像，在后台运行容器</p><p>--appendonly yes：redis运行时开启持久化</p><p>--requirepass “123456”：设置redis登录密码</p></blockquote><h3 id="_2-控制台程序" tabindex="-1"><a class="header-anchor" href="#_2-控制台程序" aria-hidden="true">#</a> 2. 控制台程序</h3><p>添加Nuget包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.Extensions.Caching.StackExchangeRedis&quot; Version=&quot;5.0.1&quot; /&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-web-api" tabindex="-1"><a class="header-anchor" href="#_2-1-web-api" aria-hidden="true">#</a> 2.1 Web API</h3><p>新建一个net5 Web API应用程序添加Nuget包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;Microsoft.Extensions.Caching.StackExchangeRedis&quot; Version=&quot;5.0.1&quot; /&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),t=[a];function r(l,c){return i(),n("div",null,t)}const o=e(d,[["render",r],["__file","redis.html.vue"]]);export{o as default};
