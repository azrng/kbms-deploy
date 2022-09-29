---
title: 过滤器常见操作
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - filter
---
# 过滤器常见操作

# 1、异常处理

## 目的

通过异常过滤器实现业务异常捕捉

## 操作

引用辅助包

```csharp
<PackageReference Include="AzrngCommon" Version="1.2.6" />
```

主要使用该包内的返回类

过滤器

```csharp
/// <summary>
/// 自定义全局异常过滤器
/// </summary>
public class CustomExceptionFilter : IExceptionFilter
{
    private readonly IWebHostEnvironment _hostEnvironment;
    private readonly ILogger<CustomExceptionFilter> _logger;

    public CustomExceptionFilter(ILogger<CustomExceptionFilter> logger,
        IWebHostEnvironment hostEnvironment)
    {
        _logger = logger;
        _hostEnvironment = hostEnvironment;
    }

    public void OnException(ExceptionContext context)
    {
        //如果异常没有处理
        if (context.ExceptionHandled)
            return;
        var result = new ResultModel
        {
            Code = "500",
            IsSuccess = false,
            Message = "系统异常，请联系管理员",
        };
        _logger.LogError($"异常 path:{context.Result} message:{context.Exception.Message} StackTrace:{context.Exception.StackTrace}");
        if (_hostEnvironment.IsDevelopment())
        {
            result.Message += "," + context.Exception.Message;
        }

        context.Result = new JsonResult(result);
        //异常已处理
        context.ExceptionHandled = true;
    }
}
```

全局使用

```csharp
builder.Services.AddControllers(option =>
{
    //添加全局过滤器
    option.Filters.Add(typeof(CustomExceptionFilter));
});
```

## 总结

不能拦截处理Action以外的错误。

# 2、返回类处理

## 目的

通过返回过滤器实现返回类的处理，在最外层包一层公共返回类。

## 操作

准备

里面的ResultModel使用的是nuget的东西

```csharp
<PackageReference Include="AzrngCommon" Version="1.2.4" />
```

返回过滤器处理

```csharp
/// <summary>
/// 方案一：返回类处理(让返回结果外面包一层公共业务返回类)
/// </summary>
[AttributeUsage(AttributeTargets.All)]
public class CustomResultPackFilter : Attribute, IResultFilter
{
    public void OnResultExecuted(ResultExecutedContext context)
    {
    }

    public void OnResultExecuting(ResultExecutingContext context)
    {
        if (context.Result is EmptyResult)
        {
            context.Result = new OkObjectResult(new ResultModel
            {
                Code = "200",
                IsSuccess = true,
                Message = "成功"
            });
            return;
        }

        context.Result = new OkObjectResult(new ResultModel<object>
        {
            Code = "200",
            IsSuccess = true,
            Data = ((ObjectResult)context.Result).Value
        });
    }
}

/// <summary>
/// 方案二：返回类处理(让返回结果外面包一层公共业务返回类增加返回code和消息)
/// </summary>
[AttributeUsage(AttributeTargets.All)]
public class CustomResultPack2Filter : ActionFilterAttribute
{
    public class ReturnDataFilterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            if (context.Result is EmptyResult)
            {
                context.Result = new OkObjectResult(new ResultModel
                {
                    Code = "200",
                    IsSuccess = true,
                    Message = "成功"
                });
                return;
            }

            context.Result = new OkObjectResult(new ResultModel<object>
            {
                Code = "200",
                IsSuccess = true,
                Data = ((ObjectResult)context.Result).Value
            });
        }
    }
}
```

注册全局过滤器

```csharp
services.AddControllers(options => 
{
    option.Filters.Add(typeof(CustomResultPackFilter));
});
```

# 3、入参校验

## 目的

通过Action过滤器实现对一些常见的请求入参的校验。比如我们的接口中经常有患者ID字段，我们可以全局对该字段进行限制。

## 操作

编写过滤器

```csharp
/// <summary>
/// 对模型验证过滤器
/// </summary>
public class ModelValidationFilter : ActionFilterAttribute
{
    //实现目的：比如接口中的常用参数有患者ID，我们可以写过滤器统一校验患者ID是否有效
    private readonly ILogger<ModelValidationFilter> _logger;

    public ModelValidationFilter(ILogger<ModelValidationFilter> logger)
    {
        _logger = logger;
    }

    public override void OnActionExecuting(ActionExecutingContext context)
    {
        if (!context.ModelState.IsValid)
        {
            context.Result = new BadRequestObjectResult(context.ModelState);
        }

        if (context.HttpContext.Request.Query.TryGetValue("patientId", out StringValues patientIdValue))
        {
            if (int.TryParse(patientIdValue.FirstOrDefault(), out int patientId))
            {
                if (patientId == 0)
                {
                    _logger.LogWarning($"{context.HttpContext.Request.Path} 患者标识无效");
                    context.Result = new BadRequestObjectResult("患者标识无效");
                }
            }
        }

        if (context.HttpContext.Request.Method == "POST" || context.HttpContext.Request.Method == "PUT")
        {
            context.HttpContext.Request.Body.Seek(0, SeekOrigin.Begin);//读取到Body后，重新设置Stream到起始位置
            var stream = new StreamReader(context.HttpContext.Request.Body);
            string body = stream.ReadToEndAsync().GetAwaiter().GetResult();
            JObject jobject = JObject.Parse(body);
            if (int.TryParse(jobject["patientId"].ToString(), out int patientId))
            {
                if (patientId == 0)
                {
                    _logger.LogWarning($"{context.HttpContext.Request.Path} 患者标识无效");
                    context.Result = new BadRequestObjectResult("患者标识无效");
                }
            }
            context.HttpContext.Request.Body.Seek(0, SeekOrigin.Begin);//读取到Body后，重新设置Stream到起始位置
        }
    }
}
```

全局使用

```csharp
builder.Services.AddControllers(option =>
{
    //添加全局过滤器
    option.Filters.Add(typeof(ModelValidationFilter));
});
```

因为设计到读取请求体的操作，还需要借助中间件来设置可以重复读取流

```csharp
//读取请求体设置可以重复读取
app.Use((context, next) =>
 {
     context.Request.EnableBuffering();
     return next(context);
 });
```

## 总结

可以实现URL、请求体中参数校验。

# 4、日志记录

## 目的

通过Action过滤器实现对请求日志的记录。

## 操作

编写过滤器

```csharp
/// <summary>
/// 日志记录
/// </summary>
public class RequestParamRecordFilter : ActionFilterAttribute
{
    //目的：记录请求的消息
    private readonly ILogger<ModelValidationFilter> _logger;

    public RequestParamRecordFilter(ILogger<ModelValidationFilter> logger)
    {
        _logger = logger;
    }

    public override void OnActionExecuting(ActionExecutingContext context)
    {
        //设置可以多次读取
        context.HttpContext.Request.Body.Seek(0, SeekOrigin.Begin);//读取到Body后，重新设置Stream到起始位置
        var sr = new StreamReader(context.HttpContext.Request.Body);
        var data =  sr.ReadToEndAsync().GetAwaiter().GetResult();
        _logger.LogInformation(
            $"Time:{DateTime.Now:yyyy-MM-dd HH:mm:ss} requestUrl:{context.HttpContext.Request.Path}  Method:{context.HttpContext.Request.Method}  requestBodyData: " +
            data);
        //读取到Body后，重新设置Stream到起始位置
        context.HttpContext.Request.Body.Seek(0, SeekOrigin.Begin);
        _logger.LogInformation($"Host: {context.HttpContext.Request.Host.Host}");
        _logger.LogInformation($"Client IP: {context.HttpContext.Connection.RemoteIpAddress}");

    }
}
```

全局使用

```csharp
builder.Services.AddControllers(option =>
{
    //添加全局过滤器
    option.Filters.Add(typeof(RequestParamRecordFilter));
});
```

因为涉及到读取请求体的操作，还需要借助中间件来设置可以重复读取流

```csharp
//读取请求体设置可以重复读取
app.Use((context, next) =>
 {
     context.Request.EnableBuffering();
     return next(context);
 });
```

输出结果：

```csharp
info: NetCoreFilterSample.CustomFilter.ModelValidationFilter[0]
      Time:2022-02-19 00:07:04 requestUrl:/api/WeatherForecast/AddPatientEat  Method:POST  requestBodyData: {
        "patientId": 10,
        "eat": "string222"
      }
info: NetCoreFilterSample.CustomFilter.ModelValidationFilter[0]
      Host: localhost
info: NetCoreFilterSample.CustomFilter.ModelValidationFilter[0]
      Client IP: ::1
```

## 总结

可以实现请求地址入参等参数记录。

# 5、幂等性

## 目的

通过请求地址作为key，搭配内存缓存，实现幂等性校验。

## 操作

因为本文使用到了IMemoryCache，所以还需要注入该服务

```csharp
builder.Services.AddMemoryCache();
```

编写过滤器

```csharp
/// <summary>
/// 接口幂等性处理
/// </summary>
public class IdempotentAttributeFilter : Attribute, IActionFilter
{
    private readonly IMemoryCache _cache;

    public IdempotentAttributeFilter(IMemoryCache cache)
    {
        _cache = cache;
    }

    public void OnActionExecuted(ActionExecutedContext context)
    {
    }

    public void OnActionExecuting(ActionExecutingContext context)
    {
        //可以根据用户ID或者请求地址标识当前用户
        var path = context.HttpContext.Request.Path;
        var userId = "123456";//这个可以从上下文中获取

        var key = "IdempotencyKey" + userId + path.ToString();

        var method = context.HttpContext.Request.Method;
        if (method == "POST" || method == "put")
        {
            //直接限制了该接口不允许一个用户在2秒内请求多次
            var cacheData = _cache.Get<string>(key);
            if (cacheData != null)
            {
                throw new ParameterException("不允许重复提交");
            }

            _cache.Set(key, "1", TimeSpan.FromSeconds(2));
        }
    }
}
```

更合适的写法是，使用redis(可以不怕服务部署多个节点)，然后根据用户标识作为key，并且也要检验当前请求体的内容是不是也上一次也一样。

全局使用

```csharp
builder.Services.AddControllers(option =>
{
    //添加全局过滤器
    option.Filters.Add(typeof(IdempotentAttributeFilter));
});
```

## 总结

将不带幂等性的接口(Post、Put)，增加限制一个用户在2秒内只能请求1次，防止重复提交。

# 6、基于IP请求限制

## 目的

限制每一个ip客户端在指定的时间范围内请求的数量，防止恶意攻击。

## 操作 

增加请求限制过滤器

```csharp
/// <summary>
/// 根据ip接口请求限制
/// </summary>
[AttributeUsage(AttributeTargets.Method)]
public class RequestLimitFilter : ActionFilterAttribute
{
    private string Name { get; }
    private int LimitRequestNum { get; set; }
    private int Seconds { get; set; }

    private MemoryCache _cache { get; } = new MemoryCache(new MemoryCacheOptions());

    /// <summary>
    /// 请求限制属性
    /// </summary>
    /// <param name="name">key</param>
    /// <param name="limitRequestNum">限制的次数</param>
    /// <param name="seconds">限制时间</param>
    public RequestLimitFilter(string name, int limitRequestNum = 5, int seconds = 10)
    {
        Name = name;
        LimitRequestNum = limitRequestNum;
        Seconds = seconds;
    }

    public override void OnActionExecuting(ActionExecutingContext context)
    {
        var ipAddress = context.HttpContext.Request.HttpContext.Connection.RemoteIpAddress;
        var key = $"{Name}-{ipAddress}";

        var prevReqCount = _cache.Get<int>(key);
        if (prevReqCount >= LimitRequestNum)
        {
            context.Result = new ContentResult
            {
                Content = $"Request limit is exceeded. Try again in {Seconds} seconds.",
            };
            context.HttpContext.Response.StatusCode = (int)HttpStatusCode.TooManyRequests;
        }
        else
        {
            _cache.Set(key, (prevReqCount + 1), TimeSpan.FromSeconds(Seconds));
        }
    }
}
```

使用的时候只需要在接口头部增加

```csharp
[HttpGet]
[RequestLimit("DataGet", 5, 30)]
public IEnumerable<WeatherForecast> Get()
{
    ...
}
```

## 总结

通过借助内存缓存来存储，实现请求限制。 

# 最后总结

上面只是列举了一部分使用场景，有些场景或许使用中间件处理更加合适，这个需要自行判断。还可以做匿名化处理等。