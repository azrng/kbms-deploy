import{_ as l,W as t,X as r,Y as e,Z as i,$ as s,a0 as d,y as a}from"./framework.35562d63.js";const o={},u=d(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>模型绑定就是接收将来自HTTP请求的数据映射到模型的过程，这个过程是自动进行的。如果找不到模型属性的值，并不会报错，而是给该属性设置默认值。</p><p>示例：比如我们有一个接口为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[HttpGet(&quot;{id}&quot;)]
public ActionResult&lt;Pet&gt; GetById(int id, bool dogsOnly)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c={href:"http://contoso.com/api/pets/2?DogsOnly=true",target:"_blank",rel:"noopener noreferrer"},v=d(`<p>路由系统选择该Action后，模型绑定会执行以下的步骤：</p><ul><li><p>查找 <code>GetByID</code> 的第一个参数，该参数是一个名为 <code>id</code> 的整数。</p></li><li><p>查找 HTTP 请求中的可用源，并在路由数据中查找 <code>id</code> =“2”。</p></li><li><p>将字符串“2”转换为整数 2。</p></li><li><p>查找 <code>GetByID</code> 的下一个参数，该参数是一个名为 <code>dogsOnly</code> 的布尔值。</p></li><li><p>查找源，并在查询字符串中查找“DogsOnly=true”。 名称匹配不区分大小写。</p></li><li><p>将字符串“true”转换为布尔值 <code>true</code>。</p></li></ul><p>最后会调用GetById方法，参数Id为2，参数dogsOnly为true。</p><h1 id="源" tabindex="-1"><a class="header-anchor" href="#源" aria-hidden="true">#</a> 源</h1><p>默认情况下，模型绑定以键值对的形式从HTTP请求中的以下源中获取数据：</p><ol><li><p>表单域</p></li><li><p>请求正文</p></li><li><p>路由数据</p></li><li><p>查询字符串参数</p></li><li><p>上传的文件</p></li></ol><p>对于每个参数，按照顺序扫描源。也可以直接指定源</p><ul><li><p>[FromQuery] - 从查询字符串获取值。</p></li><li><p>[FromRoute] - 从路由数据获取值。</p></li><li><p>[FromForm] - 从发布表单字段中获取值。</p></li><li><p>[FromBody] - 从请求正文获取值。</p></li><li><p>[FromHeader] - 从 HTTP 标头获取值。</p></li></ul><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[HttpGet]
public async Task&lt;User&gt; GetAsync([FromQuery]string id)
    
[HttpGet]
public async Task&lt;User&gt; GetAsync([FromRoute]string id)
    
[HttpGet]
public async Task&lt;User&gt; GetAsync([FromForm]string id)
    
[HttpPost]
public async Task&lt;ActionResult&lt;string&gt;&gt; AddAsync([FromBody]AddUserVm dto)
    
public void OnGet([FromHeader(Name = &quot;Accept-Language&quot;)] string language)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),m={href:"https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0#additional-sources",target:"_blank",rel:"noopener noreferrer"},b=d('<h1 id="模型绑定" tabindex="-1"><a class="header-anchor" href="#模型绑定" aria-hidden="true">#</a> 模型绑定</h1><h2 id="简单模型绑定" tabindex="-1"><a class="header-anchor" href="#简单模型绑定" aria-hidden="true">#</a> 简单模型绑定</h2><p>例如：bool、byte、char、DateTime、DateTimeOffset、float、enum、guid、int、TimeSpan、Url、Version等</p><h2 id="复杂类型" tabindex="-1"><a class="header-anchor" href="#复杂类型" aria-hidden="true">#</a> 复杂类型</h2><p>使用复杂类型必须具有要绑定的公共默认构造函数和公共可写属性。进行模型绑定时候，将使用公共默认构造函数来实例化类。对于复杂类型的每个属性，模型绑定会查找名称模式 prefix.property_name 的源。 如果未找到，它将仅查找不含前缀的 properties_name。不过一般我们使用都是进行完全匹配，特殊需求才会做此操作。</p>',5),p={href:"https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0#complex-types",target:"_blank",rel:"noopener noreferrer"},g=d(`<h2 id="内置自定义模型绑定" tabindex="-1"><a class="header-anchor" href="#内置自定义模型绑定" aria-hidden="true">#</a> 内置自定义模型绑定</h2><p>通过<code>ByteArrayModelBinder</code> 可以实现将传输的base64编码字符串转换为字节数组。</p><p>比如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        [HttpPost]
        public void Post([FromForm] byte[] file, string filename)
        {
            var trustedFileName = Path.GetRandomFileName();
            var filePath = Path.Combine(&quot;e://&quot;, trustedFileName);

            if (System.IO.File.Exists(filePath))
            {
                return;
            }

            System.IO.File.WriteAllBytes(filePath, file);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1623573025670-a091a4da-90ce-4dec-b630-43ccaebabf91.png" alt="img" loading="lazy"></p><p>接收结果</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1623573080249-e2bc5bfc-bc98-490d-99cc-c5556f26f457.png" alt="img" loading="lazy"></p><h2 id="自定义模型绑定" tabindex="-1"><a class="header-anchor" href="#自定义模型绑定" aria-hidden="true">#</a> 自定义模型绑定</h2><p>示例场景：通过请求头传递后端自定义的一种token，通过自定义模型绑定将token解析后绑定到请求模型。</p>`,10),h={href:"https://www.cnblogs.com/jyzhu/articles/8670536.html",target:"_blank",rel:"noopener noreferrer"},q=d(`<p>请求接口示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        [HttpGet]
        public ActionResult GetToken(TokenModel dto)
        {
            return Ok(dto);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先定义token模型类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class TokenModel
    {
        public int UserID { get; set; }

        public string UserName { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义模型绑定器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class TokenModelBinder : IModelBinder
    {
        /// &lt;summary&gt;
        /// 请求里传递参数token
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;bindingContext&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            //参数必须包含token
            if (!(bindingContext.ActionContext.HttpContext.Request.Headers.ContainsKey(&quot;token&quot;)))
                return Task.CompletedTask;

            var token = bindingContext.ActionContext.HttpContext.Request.Headers[&quot;token&quot;];

            //TODO  解析token
            var result = new TokenModel()
            {
                UserID = 111,
                UserName = &quot;azrng&quot;,
            };
            bindingContext.Result = ModelBindingResult.Success(result);
            return Task.CompletedTask;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义token框架绑定器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class TokenModelBinderProvider : IModelBinderProvider
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启用绑定器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    services.AddControllers(options =&gt;
    {
        options.ModelBinderProviders.Insert(0, new TokenModelBinderProvider());
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var client = new RestClient(&quot;http://localhost:5000/api/ModelVerify/GetToken&quot;);
client.Timeout = -1;
var request = new RestRequest(Method.GET);
request.AddHeader(&quot;token&quot;, &quot;123456&quot;);
IRestResponse response = client.Execute(request);
Console.WriteLine(response.Content);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果就是可以在GetToken方法参数获取到我们token的值。</p><h1 id="模型校验" tabindex="-1"><a class="header-anchor" href="#模型校验" aria-hidden="true">#</a> 模型校验</h1>`,14),x={href:"https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#automatic-http-400-responses",target:"_blank",rel:"noopener noreferrer"},f=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[ApiController]
[Route(&quot;[controller]&quot;)]
public class WeatherForecastController : ControllerBase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证特性" tabindex="-1"><a class="header-anchor" href="#验证特性" aria-hidden="true">#</a> 验证特性</h2><p>通过验证特性可为属性增加验证规则。不仅仅有内置的验证特性，还可以实现自定义验证特性。</p><h3 id="内置验证特性" tabindex="-1"><a class="header-anchor" href="#内置验证特性" aria-hidden="true">#</a> 内置验证特性</h3><p>常用的有：必填、长度验证、数值范围、手机号码、邮箱，还可以使用正则验证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class AddModelVerify
    {
        [Display(Name = &quot;名称&quot;), Required(ErrorMessage = &quot;{0}不能为空&quot;)]// 非空校验 
        [MinLength(6, ErrorMessage = &quot;名称不能小于6位&quot;)] // 最小长度校验
        [MaxLength(10, ErrorMessage = &quot;长度不超过10个&quot;)] // 最大长度校验
        public string UserName { get; set; }

        /// &lt;summary&gt;
        /// 密码
        /// &lt;/summary&gt;
        [Display(Name = &quot;密码&quot;), Required(ErrorMessage = &quot;{0}不能为空&quot;)]
        [MinLength(6, ErrorMessage = &quot;密码必须大于6位&quot;)]
        public string PassWord { get; set; }

        [Display(Name = &quot;工号&quot;)] // 友好名称错误提示
        [Required(ErrorMessage = &quot;{0}不能为空&quot;)]
        [StringLength(10, MinimumLength = 1, ErrorMessage = &quot;{0}长度是{1}&quot;)]
        public string EmployeeNo { get; set; }
    }

	public IActionResult VerifyPhone([RegularExpression(@&quot;^\\d{3}-\\d{3}-\\d{4}$&quot;)] string phone)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),y={href:"https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#built-in-attributes",target:"_blank",rel:"noopener noreferrer"},_=d(`<p>请求地址传入空值，输出结果：HTTP错误400</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;errors&quot;: {
    &quot;PassWord&quot;: [
      &quot;密码不能为空&quot;,
      &quot;密码必须大于6位&quot;
    ],
    &quot;UserName&quot;: [
      &quot;名称不能为空&quot;,
      &quot;名称不能小于6位&quot;
    ],
    &quot;EmployeeNo&quot;: [
      &quot;工号不能为空&quot;,
      &quot;工号长度是10&quot;
    ]
  },
  &quot;type&quot;: &quot;https://tools.ietf.org/html/rfc7231#section-6.5.1&quot;,
  &quot;title&quot;: &quot;One or more validation errors occurred.&quot;,
  &quot;status&quot;: 400,
  &quot;traceId&quot;: &quot;00-d16b945b3e172a42bfe5b53d08f7487b-8d87c2ca238fdc4a-00&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一个Remote特性感觉挺有意思，使用场景是比如在ID上标注远程特性，绑定时候自定验证ID是否有效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[AcceptVerbs(&quot;GET&quot;, &quot;POST&quot;)]
public IActionResult VerifyID(string id)
{
    if (!_userService.VerifyID(id))
    {
        return Json($&quot;对象未找到&quot;);
    }
    return Json(true);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模型类使用指向操作方法的[Remote]特性注释属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Remote(action: &quot;VerifyID&quot;, controller: &quot;Users&quot;)]
public string ID { get; set; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),M={href:"https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#additional-fields",target:"_blank",rel:"noopener noreferrer"},A=d(`<h3 id="自定义特性" tabindex="-1"><a class="header-anchor" href="#自定义特性" aria-hidden="true">#</a> 自定义特性</h3><p>对于内置验证特性无法处理的情况，我们可以创建自定义验证特性。</p><p>模拟场景：添加用户时候，设置名字和工号不能一致，出生日期必须小于当前时间</p><p>输入模型类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class AddUserinfoVm
    {
        [Display(Name = &quot;名称&quot;), Required(ErrorMessage = &quot;{0}不能为空&quot;)]
        [MinLength(6, ErrorMessage = &quot;名称不能小于6位&quot;)]
        [MaxLength(10, ErrorMessage = &quot;长度不超过10个&quot;)]
        public string UserName { get; set; }

        /// &lt;summary&gt;
        /// 密码
        /// &lt;/summary&gt;
        [Display(Name = &quot;密码&quot;), Required(ErrorMessage = &quot;{0}不能为空&quot;)]
        [MinLength(6, ErrorMessage = &quot;密码必须大于6位&quot;)]
        public string PassWord { get; set; }

        [Display(Name = &quot;工号&quot;)]
        [Required(ErrorMessage = &quot;{0}不能为空&quot;)]
        [StringLength(10, MinimumLength = 1, ErrorMessage = &quot;{0}长度是{1}&quot;)]
        public string EmployeeNo { get; set; }

        /// &lt;summary&gt;
        /// 出生日期
        /// &lt;/summary&gt;
        public DateTime Birthday { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方案一：通过添加AddUserVerifyAttribute来实现</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    [AttributeUsage(AttributeTargets.All, AllowMultiple = false)]
    public class AddUserVerifyAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var user = (AddUserinfoVm)validationContext.ObjectInstance;//user 变量表示 AddUserinfoVm 对象，其中包含表单提交中的数据
            var date = (DateTime)value;
            if (date &gt; DateTime.Now)
            {
                return new ValidationResult(&quot;出生日期不能大于当前时间&quot;);
            }
            if (user.UserName == user.EmployeeNo)
            {
                return new ValidationResult(&quot;名称和工号不能一样&quot;);
            }
            return ValidationResult.Success;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        [AddUserVerify]
        public DateTime Birthday { get; set; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>方案二：模型类中继承IValidatableObject，并实现Validate方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        /// &lt;summary&gt;
        /// 属性级别的自定义验证
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;validationContext&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;   
        public IEnumerable&lt;ValidationResult&gt; Validate(ValidationContext validationContext)
        {
            if (Birthday &gt; DateTime.Now)
            {
                yield return new ValidationResult(&quot;出生日期不能大于当前时间&quot;, new[] { nameof(Birthday) });
            }
            if (UserName == EmployeeNo)
            {
                yield return new ValidationResult(&quot;名称和工号不能一样&quot;, new[] { nameof(UserName), nameof(EmployeeNo) });
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;userName&quot;: &quot;string&quot;,
  &quot;passWord&quot;: &quot;string&quot;,
  &quot;employeeNo&quot;: &quot;string&quot;,
  &quot;birthday&quot;: &quot;2021-06-15T14:34:52.192Z&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出错误信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;errors&quot;: {
    &quot;Birthday&quot;: [
      &quot;出生日期不能大于当前时间&quot;
    ],
    &quot;UserName&quot;: [
      &quot;名称和工号不能一样&quot;
    ],
    &quot;EmployeeNo&quot;: [
      &quot;名称和工号不能一样&quot;
    ]
  },
  &quot;type&quot;: &quot;https://tools.ietf.org/html/rfc7231#section-6.5.1&quot;,
  &quot;title&quot;: &quot;One or more validation errors occurred.&quot;,
  &quot;status&quot;: 400,
  &quot;traceId&quot;: &quot;00-18854d59f6b6fc48b5c4c6a6dbe3802c-ba23f594f351a64d-00&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modelstate-isvalid" tabindex="-1"><a class="header-anchor" href="#modelstate-isvalid" aria-hidden="true">#</a> ModelState.IsValid</h2><p>通过该方法可以实现对请求类验证是否满足要求并做出相应的响应。</p><p>如果已经使用[ApiController]标识，那么该方法就不在需要。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        [HttpPost]
        public ActionResult Add([FromBody] AddModelVerify dto)
        {
            //对请求类进行验证特性
            if (ModelState.IsValid)//指示该模型中是否有无效的值
            {
                //对请求类的值做出修改
                dto.UserName = &quot;azrng&quot;;
                if (!TryValidateModel(dto))
                {
                    //重新运行验证失败
                    return Ok(&quot;修改值后验证失败&quot;);
                }
                return Ok(&quot;验证成功&quot;);
            }
            else
            {
                ModelState.AddModelError(string.Empty, &quot;输入有误&quot;);
            }
            return Ok(&quot;&quot;);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="禁用验证" tabindex="-1"><a class="header-anchor" href="#禁用验证" aria-hidden="true">#</a> 禁用验证</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// 创建不会将任何字段标记为无效的 IObjectModelValidator 实现。
    /// &lt;/summary&gt;
    public class NullObjectModelValidator : IObjectModelValidator
    {
        public void Validate(ActionContext actionContext,
            ValidationStateDictionary validationState, string prefix, object model)
        {
            // 该方法故意为空
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Startup.ConfigureServices中注入，以便替换依赖项注入容器中的默认 IObjectModelValidator 实现。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddSingleton&lt;IObjectModelValidator, NullObjectModelValidator&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="统一模型拦截器" tabindex="-1"><a class="header-anchor" href="#统一模型拦截器" aria-hidden="true">#</a> 统一模型拦截器</h1><p>增加ModelActionFiter过滤器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class ModelActionFiter : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext context)
        {
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var errorResults = new List&lt;ErrorResultDTO&gt;();
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
                            result.Message += &#39;|&#39;;
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
            /// &lt;summary&gt;
            /// 参数领域
            /// &lt;/summary&gt;
            public string Field { get; set; }

            /// &lt;summary&gt;
            /// 错误信息
            /// &lt;/summary&gt;
            public string Message { get; set; }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),k={href:"https://www.cnblogs.com/minskiter/p/11601873.html",target:"_blank",rel:"noopener noreferrer"},w=d(`<p>ConfigureServices中注册过滤器并禁用默认的自动模型验证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    services.AddControllers(options =&gt;
    {
        options.Filters.Add&lt;ModelActionFiter&gt;(); //注册过滤器 
    }).AddNewtonsoftJson().ConfigureApiBehaviorOptions(options =&gt;
    {
        //[ApiController] 默认自带有400模型验证，且优先级比较高，如果需要自定义模型验证，则需要先关闭默认的模型验证
        options.SuppressModelStateInvalidFilter = true; 
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),T={href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},R={href:"https://docs.microsoft.com/zh-cn/dotnet/api/microsoft.aspnetcore.mvc.infrastructure.modelstateinvalidfilter",target:"_blank",rel:"noopener noreferrer"},V=d(`<p>输出结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;code&quot;: 400,
  &quot;errors&quot;: [
    {
      &quot;field&quot;: &quot;PassWord&quot;,
      &quot;message&quot;: &quot;密码不能为空|密码必须大于6位&quot;
    },
    {
      &quot;field&quot;: &quot;UserName&quot;,
      &quot;message&quot;: &quot;名称不能为空|名称不能小于6位&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>`,3),E={href:"https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0",target:"_blank",rel:"noopener noreferrer"},N={href:"https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#disable-inference-rules",target:"_blank",rel:"noopener noreferrer"},C={href:"https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#disable-validation",target:"_blank",rel:"noopener noreferrer"},I={href:"https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#disable-automatic-400-response",target:"_blank",rel:"noopener noreferrer"};function B(O,D){const n=a("ExternalLinkIcon");return t(),r("div",null,[u,e("p",null,[i("这个时候你的请求为："),e("a",c,[i("http://localhost:5000/api/pets/2?DogsOnly=true"),s(n)])]),v,e("p",null,[i("也可以编写自定义的值提供程序，比如从cookie中获取会话状态，参考："),e("a",m,[i("https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0#additional-sources"),s(n)])]),b,e("p",null,[i("参考资料："),e("a",p,[i("https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0#complex-types"),s(n)])]),g,e("p",null,[i("参考资料："),e("a",h,[i("https://www.cnblogs.com/jyzhu/articles/8670536.html"),s(n)])]),q,e("p",null,[i("现在dotNetCore如果在控制器标识[ApiController],那么就会在进action前就会自动校验模型类绑定是否符合要求，如果不符合要求自动触发HTTP400错误响应。"),e("a",x,[i("原文"),s(n)])]),f,e("p",null,[i("除了上面这些还有其他内置特性："),e("a",y,[i("https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#built-in-attributes"),s(n)])]),_,e("p",null,[i("Remote其他用法："),e("a",M,[i("https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#additional-fields"),s(n)])]),A,e("p",null,[i("参考文档："),e("a",k,[i("https://www.cnblogs.com/minskiter/p/11601873.html"),s(n)])]),w,e("p",null,[e("a",T,[i("ASP.NET"),s(n)]),i(" Core MVC 使用 "),e("a",R,[i("ModelStateInvalidFilter"),s(n)]),i(" 操作筛选器来执行自定义验证。")]),V,e("blockquote",null,[e("p",null,[i("模型绑定："),e("a",E,[i("https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/model-binding?view=aspnetcore-5.0"),s(n)])]),e("p",null,[i("禁用绑定源推理："),e("a",N,[i("https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#disable-inference-rules"),s(n)])]),e("p",null,[i("禁用验证："),e("a",C,[i("https://docs.microsoft.com/zh-cn/aspnet/core/mvc/models/validation?view=aspnetcore-5.0#disable-validation"),s(n)])]),e("p",null,[i("禁用自动400响应："),e("a",I,[i("https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0#disable-automatic-400-response"),s(n)])])])])}const P=l(o,[["render",B],["__file","base.html.vue"]]);export{P as default};
