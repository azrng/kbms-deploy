---
title: 模型绑定
lang: zh-CN
date: 2021-01-24
publish: true
author: azrng
isOriginal: true
category:
 - dotNet
tag:
 - model
---
# 介绍

模型绑定就是接收将来自HTTP请求的数据映射到模型的过程，这个过程是自动进行的。如果找不到模型属性的值，并不会报错，而是给该属性设置默认值。

示例：比如我们有一个接口为

```
[HttpGet("{id}")]
public ActionResult<Pet> GetById(int id, bool dogsOnly)
```

这个时候你的请求为：[http://localhost:5000/api/pets/2?DogsOnly=true](http://contoso.com/api/pets/2?DogsOnly=true)

路由系统选择该Action后，模型绑定会执行以下的步骤：

- 查找 `GetByID` 的第一个参数，该参数是一个名为 `id` 的整数。
- 查找 HTTP 请求中的可用源，并在路由数据中查找 `id` =“2”。

- 将字符串“2”转换为整数 2。
- 查找 `GetByID` 的下一个参数，该参数是一个名为 `dogsOnly` 的布尔值。

- 查找源，并在查询字符串中查找“DogsOnly=true”。 名称匹配不区分大小写。
- 将字符串“true”转换为布尔值 `true`。

最后会调用GetById方法，参数Id为2，参数dogsOnly为true。

# 源

默认情况下，模型绑定以键值对的形式从HTTP请求中的以下源中获取数据：

1. 表单域
2. 请求正文

1. 路由数据
2. 查询字符串参数

1. 上传的文件

对于每个参数，按照顺序扫描源。也可以直接指定源

- [FromQuery] - 从查询字符串获取值。
- [FromRoute] - 从路由数据获取值。

- [FromForm] - 从发布表单字段中获取值。
- [FromBody] - 从请求正文获取值。

- [FromHeader] - 从 HTTP 标头获取值。

示例：

```
[HttpGet]
public async Task<User> GetAsync([FromQuery]string id)
    
[HttpGet]
public async Task<User> GetAsync([FromRoute]string id)
    
[HttpGet]
public async Task<User> GetAsync([FromForm]string id)
    
[HttpPost]
public async Task<ActionResult<string>> AddAsync([FromBody]AddUserVm dto)
    
public void OnGet([FromHeader(Name = "Accept-Language")] string language)
```

也可以编写自定义的值提供程序，比如从cookie中获取会话状态，参考：https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0#additional-sources

# 模型绑定

## 简单模型绑定

例如：bool、byte、char、DateTime、DateTimeOffset、float、enum、guid、int、TimeSpan、Url、Version等

## 复杂类型

使用复杂类型必须具有要绑定的公共默认构造函数和公共可写属性。进行模型绑定时候，将使用公共默认构造函数来实例化类。对于复杂类型的每个属性，模型绑定会查找名称模式 prefix.property_name 的源。 如果未找到，它将仅查找不含前缀的 properties_name。不过一般我们使用都是进行完全匹配，特殊需求才会做此操作。

参考资料：https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0#complex-types

## 内置自定义模型绑定

通过`ByteArrayModelBinder` 可以实现将传输的base64编码字符串转换为字节数组。

比如:

```
        [HttpPost]
        public void Post([FromForm] byte[] file, string filename)
        {
            var trustedFileName = Path.GetRandomFileName();
            var filePath = Path.Combine("e://", trustedFileName);

            if (System.IO.File.Exists(filePath))
            {
                return;
            }

            System.IO.File.WriteAllBytes(filePath, file);
        }
```

请求示例

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1623573025670-a091a4da-90ce-4dec-b630-43ccaebabf91.png)

接收结果

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1623573080249-e2bc5bfc-bc98-490d-99cc-c5556f26f457.png)

## 自定义模型绑定

示例场景：通过请求头传递后端自定义的一种token，通过自定义模型绑定将token解析后绑定到请求模型。

参考资料：https://www.cnblogs.com/jyzhu/articles/8670536.html

请求接口示例

```
        [HttpGet]
        public ActionResult GetToken(TokenModel dto)
        {
            return Ok(dto);
        }
```

首先定义token模型类

```
    public class TokenModel
    {
        public int UserID { get; set; }

        public string UserName { get; set; }
    }
```

自定义模型绑定器

```
    public class TokenModelBinder : IModelBinder
    {
        /// <summary>
        /// 请求里传递参数token
        /// </summary>
        /// <param name="bindingContext"></param>
        /// <returns></returns>
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            //参数必须包含token
            if (!(bindingContext.ActionContext.HttpContext.Request.Headers.ContainsKey("token")))
                return Task.CompletedTask;

            var token = bindingContext.ActionContext.HttpContext.Request.Headers["token"];

            //TODO  解析token
            var result = new TokenModel()
            {
                UserID = 111,
                UserName = "azrng",
            };
            bindingContext.Result = ModelBindingResult.Success(result);
            return Task.CompletedTask;
        }
    }
```

定义token框架绑定器

```
    public class TokenModelBinderProvider : IModelBinderProvider
    {
        public IModelBinder GetBinder(ModelBinderProviderContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            if (context.Metadata.ModelType == typeof(TokenModel))
                return new TokenModelBinder();

            return null;
        }
    }
```

启用绑定器

```
    services.AddControllers(options =>
    {
        options.ModelBinderProviders.Insert(0, new TokenModelBinderProvider());
    });
```

请求示例

```
var client = new RestClient("http://localhost:5000/api/ModelVerify/GetToken");
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader("token", "123456");
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
```

结果就是可以在GetToken方法参数获取到我们token的值。

# 模型校验

现在dotNetCore如果在控制器标识[ApiController],那么就会在进action前就会自动校验模型类绑定是否符合要求，如果不符合要求自动触发HTTP400错误响应。[原文](https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#automatic-http-400-responses)

```
[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
```

## 验证特性

通过验证特性可为属性增加验证规则。不仅仅有内置的验证特性，还可以实现自定义验证特性。

### 内置验证特性

常用的有：必填、长度验证、数值范围、手机号码、邮箱，还可以使用正则验证

```
    public class AddModelVerify
    {
        [Display(Name = "名称"), Required(ErrorMessage = "{0}不能为空")]// 非空校验 
        [MinLength(6, ErrorMessage = "名称不能小于6位")] // 最小长度校验
        [MaxLength(10, ErrorMessage = "长度不超过10个")] // 最大长度校验
        public string UserName { get; set; }

        /// <summary>
        /// 密码
        /// </summary>
        [Display(Name = "密码"), Required(ErrorMessage = "{0}不能为空")]
        [MinLength(6, ErrorMessage = "密码必须大于6位")]
        public string PassWord { get; set; }

        [Display(Name = "工号")] // 友好名称错误提示
        [Required(ErrorMessage = "{0}不能为空")]
        [StringLength(10, MinimumLength = 1, ErrorMessage = "{0}长度是{1}")]
        public string EmployeeNo { get; set; }
    }

	public IActionResult VerifyPhone([RegularExpression(@"^\d{3}-\d{3}-\d{4}$")] string phone)
```

除了上面这些还有其他内置特性：https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#built-in-attributes

请求地址传入空值，输出结果：HTTP错误400

```
{
  "errors": {
    "PassWord": [
      "密码不能为空",
      "密码必须大于6位"
    ],
    "UserName": [
      "名称不能为空",
      "名称不能小于6位"
    ],
    "EmployeeNo": [
      "工号不能为空",
      "工号长度是10"
    ]
  },
  "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
  "title": "One or more validation errors occurred.",
  "status": 400,
  "traceId": "00-d16b945b3e172a42bfe5b53d08f7487b-8d87c2ca238fdc4a-00"
}
```

还有一个Remote特性感觉挺有意思，使用场景是比如在ID上标注远程特性，绑定时候自定验证ID是否有效

```
[AcceptVerbs("GET", "POST")]
public IActionResult VerifyID(string id)
{
    if (!_userService.VerifyID(id))
    {
        return Json($"对象未找到");
    }
    return Json(true);
}
```

模型类使用指向操作方法的[Remote]特性注释属性

```
[Remote(action: "VerifyID", controller: "Users")]
public string ID { get; set; }
```

Remote其他用法：https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#additional-fields

### 自定义特性

对于内置验证特性无法处理的情况，我们可以创建自定义验证特性。

模拟场景：添加用户时候，设置名字和工号不能一致，出生日期必须小于当前时间

输入模型类

```
    public class AddUserinfoVm
    {
        [Display(Name = "名称"), Required(ErrorMessage = "{0}不能为空")]
        [MinLength(6, ErrorMessage = "名称不能小于6位")]
        [MaxLength(10, ErrorMessage = "长度不超过10个")]
        public string UserName { get; set; }

        /// <summary>
        /// 密码
        /// </summary>
        [Display(Name = "密码"), Required(ErrorMessage = "{0}不能为空")]
        [MinLength(6, ErrorMessage = "密码必须大于6位")]
        public string PassWord { get; set; }

        [Display(Name = "工号")]
        [Required(ErrorMessage = "{0}不能为空")]
        [StringLength(10, MinimumLength = 1, ErrorMessage = "{0}长度是{1}")]
        public string EmployeeNo { get; set; }

        /// <summary>
        /// 出生日期
        /// </summary>
        public DateTime Birthday { get; set; }
    }
```

方案一：通过添加AddUserVerifyAttribute来实现

```
    [AttributeUsage(AttributeTargets.All, AllowMultiple = false)]
    public class AddUserVerifyAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var user = (AddUserinfoVm)validationContext.ObjectInstance;//user 变量表示 AddUserinfoVm 对象，其中包含表单提交中的数据
            var date = (DateTime)value;
            if (date > DateTime.Now)
            {
                return new ValidationResult("出生日期不能大于当前时间");
            }
            if (user.UserName == user.EmployeeNo)
            {
                return new ValidationResult("名称和工号不能一样");
            }
            return ValidationResult.Success;
        }
    }
```

使用方法

```
        [AddUserVerify]
        public DateTime Birthday { get; set; }
```

方案二：模型类中继承IValidatableObject，并实现Validate方法

```
        /// <summary>
        /// 属性级别的自定义验证
        /// </summary>
        /// <param name="validationContext"></param>
        /// <returns></returns>   
        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (Birthday > DateTime.Now)
            {
                yield return new ValidationResult("出生日期不能大于当前时间", new[] { nameof(Birthday) });
            }
            if (UserName == EmployeeNo)
            {
                yield return new ValidationResult("名称和工号不能一样", new[] { nameof(UserName), nameof(EmployeeNo) });
            }
        }
```

请求参数：

```
{
  "userName": "string",
  "passWord": "string",
  "employeeNo": "string",
  "birthday": "2021-06-15T14:34:52.192Z"
}
```

输出错误信息

```
{
  "errors": {
    "Birthday": [
      "出生日期不能大于当前时间"
    ],
    "UserName": [
      "名称和工号不能一样"
    ],
    "EmployeeNo": [
      "名称和工号不能一样"
    ]
  },
  "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
  "title": "One or more validation errors occurred.",
  "status": 400,
  "traceId": "00-18854d59f6b6fc48b5c4c6a6dbe3802c-ba23f594f351a64d-00"
}
```

## ModelState.IsValid

通过该方法可以实现对请求类验证是否满足要求并做出相应的响应。

如果已经使用[ApiController]标识，那么该方法就不在需要。

```
        [HttpPost]
        public ActionResult Add([FromBody] AddModelVerify dto)
        {
            //对请求类进行验证特性
            if (ModelState.IsValid)//指示该模型中是否有无效的值
            {
                //对请求类的值做出修改
                dto.UserName = "azrng";
                if (!TryValidateModel(dto))
                {
                    //重新运行验证失败
                    return Ok("修改值后验证失败");
                }
                return Ok("验证成功");
            }
            else
            {
                ModelState.AddModelError(string.Empty, "输入有误");
            }
            return Ok("");
        }
```

## 禁用验证

```
    /// <summary>
    /// 创建不会将任何字段标记为无效的 IObjectModelValidator 实现。
    /// </summary>
    public class NullObjectModelValidator : IObjectModelValidator
    {
        public void Validate(ActionContext actionContext,
            ValidationStateDictionary validationState, string prefix, object model)
        {
            // 该方法故意为空
        }
    }
```

Startup.ConfigureServices中注入，以便替换依赖项注入容器中的默认 IObjectModelValidator 实现。

```
services.AddSingleton<IObjectModelValidator, NullObjectModelValidator>();
```

# 统一模型拦截器

增加ModelActionFiter过滤器

```
    public class ModelActionFiter : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext context)
        {
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var errorResults = new List<ErrorResultDTO>();
                foreach (var item in context.ModelState)
                {
                    var result = new ErrorResultDTO
                    {
                        Field = item.Key,
                    };
                    foreach (var error in item.Value.Errors)
                    {
                        if (!string.IsNullOrEmpty(result.Message))
                        {
                            result.Message += '|';
                        }
                        result.Message += error.ErrorMessage;
                    }
                    errorResults.Add(result);
                }
                context.Result = new BadRequestObjectResult(new
                {
                    Code = StatusCodes.Status400BadRequest,
                    Errors = errorResults
                });
            }
        }

        public class ErrorResultDTO
        {
            /// <summary>
            /// 参数领域
            /// </summary>
            public string Field { get; set; }

            /// <summary>
            /// 错误信息
            /// </summary>
            public string Message { get; set; }
        }
    }
```

参考文档：https://www.cnblogs.com/minskiter/p/11601873.html

ConfigureServices中注册过滤器并禁用默认的自动模型验证

```
    services.AddControllers(options =>
    {
        options.Filters.Add<ModelActionFiter>(); //注册过滤器 
    }).AddNewtonsoftJson().ConfigureApiBehaviorOptions(options =>
    {
        //[ApiController] 默认自带有400模型验证，且优先级比较高，如果需要自定义模型验证，则需要先关闭默认的模型验证
        options.SuppressModelStateInvalidFilter = true; 
    });
```

ASP.NET Core MVC 使用 [ModelStateInvalidFilter](https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.aspnetcore.mvc.infrastructure.modelstateinvalidfilter) 操作筛选器来执行自定义验证。

输出结果

```
{
  "code": 400,
  "errors": [
    {
      "field": "PassWord",
      "message": "密码不能为空|密码必须大于6位"
    },
    {
      "field": "UserName",
      "message": "名称不能为空|名称不能小于6位"
    }
  ]
}
```

# 参考文档

> 模型绑定：https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0
>
> 禁用绑定源推理：https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#disable-inference-rules
>
> 禁用验证：https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#disable-validation
>
> 禁用自动400响应：https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#disable-automatic-400-response