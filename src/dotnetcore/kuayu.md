---
title: 跨域
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - cors
---
# 介绍

浏览器的安全策略上的限制可以有效组织Ajax向另外的一个服务发起请求，这就是著名的同源策略。跨域仅仅是浏览器的行为，通过代理服务器，或者其他工具可以绕过。

不同的域名、不用的端口、不用的协议之间请求都会出现跨域问题。

## 操作

如何突破这种限制，可以使用CORS。

```
public static void AddCommon(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
               options.AddPolicy("AllowAll", p =>
                {
                    p.AllowAnyOrigin()//允许任务来源的主机访问
                      .AllowAnyMethod()//允许任何请求方式
                      .AllowAnyHeader();//允许任何头部
                      //.AllowCredentials();//允许任何证书     
                });
            });
        }
```

Core3.0之后不允许Origin和Credentials都不做限制

SetIsOriginAllowed((_) => true) 这样子就可以和AllowCredentials进行搭配 ，有时候不可以调整下顺序

**AddCors**来添加一个跨域处理方式，**AddPolicy**就是加个巡逻官，看看符合规则的放进来，不符合的直接赶出去。

| **方法**         | **介绍**                              |
| ---------------- | ------------------------------------- |
| AllowAnyOrigin   | 允许所有的域名请求                    |
| AllowAnyMethod   | 允许所有的请求方式GET/POST/PUT/DELETE |
| AllowAnyHeader   | 允许所有的头部参数                    |
| AllowCredentials | 允许携带Cookie                        |

这里我使用的是允许所有，可以根据自身业务需要来调整，比如只允许部分域名访问，部分请求方式，部分Header：

```
services.AddCors(options =>
            {
               options.AddPolicy("AllowSome", p =>
                 {
                    p.WithOrigins("https://www.baidu.com")
                    .WithMethods("GET", "POST")
                    .WithHeaders(HeaderNames.ContentType, "x-custom-header");
                 });
            });
```

# 允许跨域

在Configure中声明全局跨域

```
public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
           app.UseCors("AllowAll"); 
           
            app.UseHttpsRedirection();
            app.UseMvc();      
        }
```

只对面某一些控制器进行跨域

```
[EnableCors("AllowSome")]
```

只对某一些方法进行跨域

```
[EnableCors("AllowSome")]
```

对某个Action限制跨域

```
[DisableCors]
```