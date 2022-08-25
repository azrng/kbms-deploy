---
title: 分布式缓存
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - cache
 - redis
---
## 分布式缓存

微软给netcore的分布式缓存提供了Redis和Sqlserver的实现，通过Sqlserver来缓存的场景比较少，这里我们简单看一下官方提供的Redis缓存用法。

### 1. 安装redis

这里我直接使用docker安装了redis

```
docker run -p 6379:6379 --name redis -d redis redis-server --appendonly yes --requirepass "123456"
```

> 命令说明：
>
> -p：宿主机端口与容器端口映射，前面的端口为主机映射端口（需配置服务器安全组），后面的端口为镜像开放的端口
>
> --restart=always：无论什么情况挂壁，总是重启
>
> --name：容器名称
>
> -d：使用指定的镜像，在后台运行容器
>
> --appendonly yes：redis运行时开启持久化
>
> --requirepass “123456”：设置redis登录密码

### 2. 控制台程序

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

### 2.1 Web API

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

