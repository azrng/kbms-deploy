---
title: MemoryCache
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - cache
 - memorycache
---
NetCore中的缓存和System.Runtime.Caching很相似，但是在功能上做了增强，缓存的key支持object类型；提供了泛型支持；可以读缓存和单个缓存项的大小做限定，可以设置缓存的压缩比例。

通过实现微软官方的Microsoft.Extensions.Caching里面的IDistributedCache接口实现缓存集成到ASPNETCore中

# 1. MemoryCahe

## 1.1 简单入门

netcore中缓存相关的类库都在 Microsoft.Extensions.Caching ，使用MemoryCache首先安装包

```
<PackageReference Include="Microsoft.Extensions.Caching.Memory" Version="5.0.0" />
```

注入到容器

```
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            //添加缓存配置
            services.AddMemoryCache();
        }
```

使用

```
        private readonly IMemoryCache _cache;
        public HomeController(IMemoryCache cache)
        {
            _cache = cache;
        }

        [HttpGet]
        public string Set()
        {
            //写
            _cache.Set("login", "4545478244");
            return "";
        }

        [HttpGet]
        public string Get()
        {
            //读
            var value = _cache.Get("login");
            return "";
        }
```

## 1.2 过期时间

```
            //1.最简单使用方式
            _cache.Set("mykey", "myvalue");
            //2.绝对过期时间，3秒后过期
            _cache.Set("key1", "value1", new DateTimeOffset(DateTime.Now.AddSeconds(3)));
            //3.绝对过期时间，效果同上
            _cache.Set("key2", "value2", TimeSpan.FromSeconds(3));
            //4.滑动过期时间，3秒后,即三秒钟内被访问，则重新刷新缓存时间为3秒后
            _cache.Set("key3", "value3", new MemoryCacheEntryOptions
            {
                SlidingExpiration = TimeSpan.FromSeconds(3),
            });
            Console.WriteLine("-----------暂停2秒");
            Thread.Sleep(2000);//暂停2秒
            Console.WriteLine($"key1的值：{_cache.Get("key1") ?? "key1被清除"}");
            Console.WriteLine($"key2的值：{_cache.Get("key2") ?? "key2被清除"}");
            Console.WriteLine($"key3的值：{_cache.Get("key3") ?? "key3被清除"}");
            Console.WriteLine("-----------暂停2秒");
            Thread.Sleep(2000);//再次暂停2秒
            Console.WriteLine($"key1的值：{_cache.Get("key1") ?? "key1被清除"}");
            Console.WriteLine($"key2的值：{_cache.Get("key2") ?? "key2被清除"}");
            Console.WriteLine($"key3的值：{_cache.Get("key3") ?? "key3被清除"}");
```

在例子中key1,key2都是使用的绝对过期时间，key3使用的相对过期时间，2秒后第一次访问key1、key2、key3都没过期，其中key3的过期时间刷新了，重新设置为3秒后，所以再次暂停2秒后，key1、key2都过期了，key3仍然存在。

程序运行结果如下：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619011217302-f7c961c7-35d2-4ab8-a976-f440a86cf8ab.png)

## 1.2 常用配置

下边的例子介绍netcore中缓存的常用配置，直接看代码

```
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddMemoryCache(options =>
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
            _cache.Set("item1", "11111", new MemoryCacheEntryOptions
            {
                //缓存大小占1份
                Size = 2
            });
            _cache.Set("item2", "22222", new MemoryCacheEntryOptions
            {
                Size = 2
            });
            var item1 = _cache.Get("item1");//输出 11111
            var item2 = _cache.Get("item2");//输出 null

            return "";
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
            cacheEntityOps.RegisterPostEvictionCallback((key, value, reason, state) =>
            {
                Console.WriteLine($"回调函数输出【键:{key},值:{value},被清除的原因:{reason}】");
            });
            _cache.Set("mykey", "myvalue", cacheEntityOps);
            Console.WriteLine($"mykey的值：{_cache.Get("mykey") ?? "mykey缓存被清除了"}");
            Console.WriteLine("------------------暂停3秒");
            Thread.Sleep(3000);
            Console.WriteLine($"mykey的值：{_cache.Get("mykey") ?? "mykey缓存被清除了"}");

            return "";
        }
```

注意netcore中设置缓存和缓存项大小是没有单位的

缓存被清空的回调函数可以注册多个（System.Runtime.Caching清除缓存的回调只能是一个）。

程序执行结果：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619012068314-c59f28a0-d9a1-4961-b91a-2e63d739c113.png)

## 1.3 IChangeToken

上边我们已经简单了解了通过滑动过期时间和绝对过期时间来控制缓存的有效性，但是有时缓存的过期与否和时间没有联系，比如我们缓存一个文件的内容，不管缓存多久只要文件没有发生变化缓存都是有效的。在net framework中我们可以通过CacheDependency来控制，在net core中怎么控制呢？net core中我们可以使用IChangeToken接口轻松实现缓存的过期策略。先看一下IChangeToken接口：

```
    public interface IChangeToken
    {
        // 是否有变化发生
        bool HasChanged { get; }
        // token是否会调用回调函数，为true时才会有效 
        bool ActiveChangeCallbacks { get; }
        // 注册一个回调函数，当有变化时触发回调
        IDisposable RegisterChangeCallback(Action<object> callback, object state);
    }
```

看一下IChangeToken实现缓存过期策略的两个例子：

### 1.3.1 监控文件

需要安装组件：Microsoft.Extensions.FileProviders.Physical

```
    internal class Program
    {
        private static void Main(string[] args)
        {
            string fileName = Path.Combine(Environment.CurrentDirectory, "someCacheData.xml");
            var fileInfo = new FileInfo(fileName);
            MemoryCache myCache = new MemoryCache(new MemoryCacheOptions() { });
            MemoryCacheEntryOptions cacheEntityOps = new MemoryCacheEntryOptions();
            //PollingFileChangeToken是IChangeToken的实现类，通过轮询监控文件变化
            cacheEntityOps.AddExpirationToken(new Microsoft.Extensions.FileProviders.Physical.PollingFileChangeToken(fileInfo));
            //缓存失效时，回调函数
            cacheEntityOps.RegisterPostEvictionCallback((key, value, reason, state) => { Console.WriteLine($"文件【{key}】改动了"); });
            //添加缓存，key为文件名，value为文件内容
            myCache.Set(fileInfo.Name, File.ReadAllText(fileName), cacheEntityOps);
            Console.WriteLine(myCache.Get(fileInfo.Name));
        }
    }
```

PollingFileChangeToken通过轮询来监控文件有没有发生变化，如果文件中的内容发生改变，缓存就会自动过期。

### 1.3.2 通过代码控制缓存过期

```
    class Program
    {
        static void Main(string[] args)
        {
            MemoryCache memoryCache = new MemoryCache(new MemoryCacheOptions());
            MemoryCacheEntryOptions cacheEntityOps = new MemoryCacheEntryOptions();
            //使用CancellationChangeToken控制缓存过期
            CancellationTokenSource tokenSource = new CancellationTokenSource();
            cacheEntityOps.AddExpirationToken(new CancellationChangeToken(tokenSource.Token));
            //设置缓存
            memoryCache.Set("mykey", "myvalue", cacheEntityOps);
            Console.WriteLine(memoryCache.Get("mykey") ?? "缓存被清除了");
            //通过代码清除缓存
            tokenSource.Cancel();
            Console.WriteLine(memoryCache.Get("mykey") ?? "缓存被清除了");
        }
    }
```

tokenSource.Cancel方法发送取消信号，这个方法会触发缓存过期，基于此我们可以通过Cancel方法灵活的实现自定义的缓存策略。

程序执行结果如下：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1614392140126-43623db8-f997-4d49-9594-4fb2bfc977b1.png)

## 1.4 引用Nuget包

直接引用我自己简单封装的一个Nuget包(简单封装自己用，不要嘲笑)

```
    <PackageReference Include="Common.Cache.MemoryCache" Version="1.1.0" />
```

注入到容器

```
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            //注入
            services.AddMemoryCacheExtension();
        }
```

 使用

```
 		# 在需要使用的地方进行注入
        private readonly IMemoryCachimg  _cache;
        public HomeController(IMemoryCachimg cache)
        {
            _cache = cache;
        }
```

# 2. LazyCache

## 2.1 描述

是一个基于内存的易于使用并且线程安全的缓存组件。Lazy的意思是LazyCache永远不会再缓存未命中的时候触发一次以上的缓存委托函数，因为使用了MemoryCache并且使用了懒锁来确保只会执行一次。

内置Lazy锁并且底层使用MemoryCache。  

安装组件

```
    <PackageReference Include="LazyCache" Version="2.1.3" />
    <PackageReference Include="LazyCache.AspNetCore" Version="2.1.3" />
```

使用

```
//ConfigureServices中注入服务
services.AddLazyCache();

//控制器中使用构造函数注入IAppCache

//操作实例
var list = await _appCache.GetAsync<IEnumerable<WeatherForecast>>("yanshi");
_appCache.Add<IEnumerable<WeatherForecast>>("yanshi", list, DateTimeOffset.Now.AddSeconds(10));
```

# 2. 分布式缓存

IDistributedCache骨架代码

```
namespace Microsoft.Extensions.Caching.Distributed
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
```

## 2.1 Redis分布式缓存

微软给netcore的缓存提供了Redis和Sqlserver的实现，通过Sqlserver来缓存的场景比较少，这里我们简单看一下官方提供的Redis缓存用法。

### 2.1.1 安装redis

这里我直接使用docker安装了redis

```
docker run -p 6379:6379 --name redis -d redis redis-server --appendonly yes --requirepass "123456"
```

命令说明：

-p：宿主机端口与容器端口映射，前面的端口为主机映射端口（需配置服务器安全组），后面的端口为镜像开放的端口

--restart=always：无论什么情况挂壁，总是重启

--name：容器名称

-d：使用指定的镜像，在后台运行容器

--appendonly yes：redis运行时开启持久化

--requirepass “123456”：设置redis登录密码

### 2.1.2 控制台程序

添加Nuget包

```
    <PackageReference Include="Microsoft.Extensions.Caching.StackExchangeRedis" Version="5.0.1" />
```

写一个简单的控制台程序实现一下netcore中的分布式缓存redis实现

```
        private static void Main(string[] args)
        {
            //获取RedisCache实例
            RedisCache redisCache = new RedisCache(new RedisCacheOptions()
            {
                Configuration = "localhost:6379,password=123456",
                InstanceName = "MyData"
            });
            //在redis中是以hash表的模式存放的
            redisCache.SetString("Name", "jack");
            redisCache.SetString("Age", "20");
            redisCache.SetString("Address", "上海", new DistributedCacheEntryOptions()
            {
                //SlidingExpiration = TimeSpan.FromSeconds(3)
                AbsoluteExpiration = DateTimeOffset.Now.AddDays(1)//过期时间
            });
            //获取缓存
            Console.WriteLine(redisCache.GetString("Name"));
        }
```

### 2.1.3 Web API

新建一个net5 Web API应用程序添加Nuget包

```
    <PackageReference Include="Microsoft.Extensions.Caching.StackExchangeRedis" Version="5.0.1" />
```

注入服务

```
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            
            services.AddStackExchangeRedisCache(options =>
            {
                options.Configuration = "localhost:6379,password=123456,defaultdatabase=1";
                options.InstanceName = "MyData";
            });
        }
```

依赖注入使用

```
        private readonly IDistributedCache _cache;

        public WeatherForecastController(IDistributedCache cache)
        {
            _cache = cache;
        }

        [HttpGet]
        public async Task<string> TestAsync()
        {
            //永不过期
            await _cache.SetAsync("add", Encoding.UTF8.GetBytes("北京"));
            var add = await _cache.GetStringAsync("add");//北京

            //配置过期时间
            await _cache.SetStringAsync("Address", "上海", new DistributedCacheEntryOptions()
            {
                //SlidingExpiration = TimeSpan.FromSeconds(3)
                AbsoluteExpiration = DateTimeOffset.Now.AddDays(1)
            });
            var address = await _cache.GetStringAsync("Address");//上海

            return "";
        }
```

# 参考文档

> 作者：捞月亮的猴子  https://www.cnblogs.com/wyy1234/p/10519681.html
>
> 官方教程：https://docs.microsoft.com/zh-cn/aspnet/core/performance/caching/memory?view=aspnetcore-5.0

 