---
title: 静态资源-基本设置
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - 静态资源
---
# 介绍

静态文件都存储在Core Web根目录中。默认目录是<content_root>/wwwroot，但可通过 UseWebRoot方法更改访问目录。而content_root是指web项目的所有文件夹，包括bin和wwwroot文件夹。

# 操作

## 简单配置

在Configure方法中设置

```
app.UseStaticFiles();//默认静态文件目录是wwwroot

特殊配置
app.UseStaticFiles(new StaticFileOptions()
{
    ServeUnknownFileTypes = true
});
```

## 修改默认的静态文件目录

在Configure方法中设置

```
StaticFiles(app, env);
```

StaticFiles方法

```
  		/// <summary>
        /// 静态文件
        /// </summary>
        /// <param name="app"></param>
        /// <param name="env"></param>
        /// <returns></returns>
        private void StaticFiles(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //静态文件重载
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "Upload")), //将目录切换到静态文件所在目录
                RequestPath =new PathString("/fileupload"), //虚拟路径用来访问静态文件
                OnPrepareResponse = ctx =>
                {
                    const int cacheControl = 60;//设置缓存静态文件的时间
                    var headers = ctx.Context.Response.GetTypedHeaders();
                    headers.CacheControl = new CacheControlHeaderValue
                    {
                        MaxAge = TimeSpan.FromSeconds(cacheControl)
                    };
                }
            });
        }
```

我们在项目目录下的Upload文件夹下新建一个1.txt文件，这个时候我们启动项目，就可以通过地址：http://localhost:8001/fileupload/1.txt 获取文件的内容。