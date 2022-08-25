---
title: 静态资源-自定义设置
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - 静态资源
---
前文获取配置文件的时候，是获取默认的appsettings.json配置文件的配置，下面说明下如何进行自定义获取配置

# 1. Json Provider

## 1.1 构建独立的IConfiguration

编写方法

```
        public static IConfigurationRoot LoadSettings(this IHostEnvironment env)
        {
            return new ConfigurationBuilder()
                 .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                 .AddJsonFile("common.json", optional: true, reloadOnChange: false)
               	 .AddJsonFile("appsettings.json", optional: true, reloadOnChange: false)
                 .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: false)
                 .AddEnvironmentVariables()
                 .Build();
        }
```

在Startup构造函数的时候进行赋值替换IConfiguration

```
        private readonly IConfiguration _configuration;
        public Startup(IWebHostEnvironment env)
        {
            _configuration = env.LoadSettings();
        }
```

该操作添加的配置项，只在startup范围生效。

## 1.2 在Progrom全局自定义配置

```
 public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((hostingContext, config) =>
            {
                //config.Sources.Clear();  // 会清除所有配置提供程序
                var env = hostingContext.HostingEnvironment;
                config.SetBasePath(env.ContentRootPath);
                config.AddJsonFile("devappsettings.json", optional: false, reloadOnChange: true);
            })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
```

注意：添加自定义文件的目录要注意，可能会存在因为目录问题所以找不到配置文件的情况。

# 2. Memory Provider

允许我们将一个应用程序配置直接配置到内存中，而不是像传统方式那样子必须制定一个物理文件。

```
            var builder = new ConfigurationBuilder();
            var profileCollection = new Dictionary<string, string>
            {
                {"AuthorProfile:FirstName", "Joydip"},
                {"AuthorProfile:LastName", "Kanjilal"},
                {"AuthorProfile:Address", "Hyderabad, India"}
            };
            builder.AddInMemoryCollection(profileCollection);
            Configuration = builder.Build();
```

目前发现的用途

```
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((hostingContext, config) =>
            {
                var builder = new ConfigurationBuilder();
                var profileCollection = new Dictionary<string, string>
            {
                {"AuthorProfile:FirstName", "Joydip"},
                {"AuthorProfile:LastName", "Kanjilal"},
                {"AuthorProfile:Address", "Hyderabad, India"}
            };
                builder.AddInMemoryCollection(profileCollection);
                config.AddConfiguration(builder.Build());
            })
            .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
```

然后就可以通过IConfiguration实例去获取了。

# 3. 公共类获取配置文件

引用组件

Microsoft.Extensions.Configuration.Json

```
 	public class AppSettings
    {
        private static IConfiguration Configuration { get; set; }

        public AppSettings(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        /// <summary>
        /// 封装要操作的字符
        /// </summary>
        /// <param name="sections"></param>
        /// <returns></returns>
        public static string GetValue(params string[] sections)
        {
            try
            {
                if (sections.Any())
                    return Configuration[string.Join(":", sections)];
            }
            catch (Exception)
            { }
            return "";
        }

        /// <summary>
        /// 递归获取配置信息数组
        ///引用 Microsoft.Extensions.Configuration.Binder 包
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="sections"></param>
        /// <returns></returns>
        public static List<T> App<T>(params string[] sections)
        {
            List<T> list = new List<T>();
            Configuration.Bind(string.Join(":", sections), list);
            return list;
        }
    }
```

参考自：https://gitee.com/laozhangIsPhi/Blog.Core

ConfigureServices中配置

```
services.AddSingleton(new AppSettings(Configuration));
```

获取指定配置

```
var info = AppSettings.GetValue("Logging", "LogLevel");
```