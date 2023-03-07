import{_ as d,V as a,W as l,X as e,Y as i,Z as r,$ as s,C as c}from"./framework-fde89294.js";const t={},v=s(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>不应该依赖于具体的实现，应该依赖于抽象，高层模块不应该依赖于底层模块，二者应该依赖于抽象(否则业务变更，改动比较大)。简单的说就是为了更好的解耦。而控制反转(Ioc)就是这样的原则的其中一个实现思路, 这个思路的其中一种实现方式就是依赖注入(DI)。(官方原话：依赖注入(DI)这是一种在类和依赖项之间实现控制反转(Ioc)的技术)，</p><p>dotNet内置有对依赖注入(DI)的支持，提供了一个内置的服务容器IServiceProvider，程序在启动时候我们预先将服务注册不同生命周期到ServiceCollection，然后利用ServiceCollection来创建ServiceProvider，利用后者提供服务实例，将服务注入到使用到它的类的构造函数中。</p><p>只要是用new实例化的都是存在依赖的。</p><p>内置的服务容器已经满足框架和大多数项目的需求，一般不需要替换，除非你用到了下面这些功能：</p><ul><li><p>属性注入</p></li><li><p>基于名称的注入</p></li><li><p>子容器</p></li><li><p>自定义生命周期</p></li><li><p>对延缓初始化的Func&lt;T&gt; 支持</p></li><li><p>基于约定的注册</p></li></ul><h1 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h1><p>解耦，使得代码更具有维护性。</p><p>方便进行单元测试。</p><h1 id="服务注册" tabindex="-1"><a class="header-anchor" href="#服务注册" aria-hidden="true">#</a> 服务注册</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    //注册
    services.AddTransient&lt;IEmailValidCodeQuery, EmailValidCodeQuery&gt;(); // 自动释放对象
    services.AddSingleton&lt;IMyDep&gt;(sp =&gt; new MyDep()); // 自动释放对象
	services.AddSingleton&lt;MyDep&gt;(); // 不自动释放对象
	services.AddSingleton&lt;IMyDep&gt;(new MyDep()); //不自动释放对象

	// 如果该IMessageWriter已经注册实现，该代码将没有作用
	services.TryAddSingleton&lt;IMessageWriter, LoggingMessageWriter&gt;();

    //移除和替换注册
    //services.Replace(ServiceDescriptor.Transient&lt;IEmailValidCodeQuery, EmailValidCodeQuery2&gt;());
    services.RemoveAll&lt;IEmailValidCodeQuery&gt;();

    //注册泛型模板
    services.AddSingleton(typeof(IAService&lt;&gt;), typeof(AService&lt;&gt;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h1><p>AddSingleton→AddTransient→AddScoped</p><p>被注入的服务应该与注入的服务具有相同或者更长的生命周期</p><h2 id="singleton-单例" tabindex="-1"><a class="header-anchor" href="#singleton-单例" aria-hidden="true">#</a> Singleton(单例)</h2><p>服务在第一次请求时被创建（或者当我们在ConfigureServices中指定创建某一实例并运行方法），其后的每次请求将沿用已创建服务。当应用程序关闭并释放SericeProvider时候，会释放单例服务。</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620437795433-1878377b-ead3-4b6b-a749-87f27b0907c0.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,17),u={href:"https://blog.csdn.net/weixin_47498376/article/details/116177389",target:"_blank",rel:"noopener noreferrer"},o=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddSingleton&lt;IApplicationService,ApplicationService&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如有状态的、静态类和成员。</p><h2 id="scoped-作用域" tabindex="-1"><a class="header-anchor" href="#scoped-作用域" aria-hidden="true">#</a> Scoped(作用域)</h2><p>一次请求开始到请求结束 ，这次请求中获取的对象都是同一个，请求结束时候会释放有作用域的服务。</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620437843902-34480f40-cbe1-4cad-a5bd-4f1c84cfca78.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,5),m={href:"https://blog.csdn.net/weixin_47498376/article/details/116177389",target:"_blank",rel:"noopener noreferrer"},b=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddScoped&lt;IApplicationService,ApplicationService&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果该service在一个请求过程中多次被用到，并且可能共享其中的字段或者属性，那么就使用scoped，例如httpcontext。 (感谢群里老哥的帮助)</p><h2 id="transient-瞬时" tabindex="-1"><a class="header-anchor" href="#transient-瞬时" aria-hidden="true">#</a> Transient(瞬时)</h2><p>每一次获取的对象都不是同一个，适合于轻量级、无状态的服务，请求结束时候会释放服务。</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620437917664-c31fe30a-c429-4d5a-b66b-4a065089dd92.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,5),p={href:"https://blog.csdn.net/weixin_47498376/article/details/116177389",target:"_blank",rel:"noopener noreferrer"},g=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddTransient&lt;IApplicationService,ApplicationService&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果该service在一次请求中只使用一次，那么就注册Transient就好了。</p><h1 id="注入方式" tabindex="-1"><a class="header-anchor" href="#注入方式" aria-hidden="true">#</a> 注入方式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// 用户接口
    /// &lt;/summary&gt;
    public interface IUserService
    {
        string GetName();
    }

    /// &lt;summary&gt;
    /// 用户实现
    /// &lt;/summary&gt;
    public class UserService : IUserService
    {
        public string GetName()
        {
            return &quot;AZRNG&quot;;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要在ConfigureServices方法进行注入</p><h2 id="构造函数注入" tabindex="-1"><a class="header-anchor" href="#构造函数注入" aria-hidden="true">#</a> 构造函数注入</h2><p>服务作为构造函数参数添加，并且运行时从服务容器中解析服务。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        private readonly IUserService _userService;

        public UserController(IUserService userService
        	,IEnumerable&lt;IMessageWriter&gt;)// 解析多个服务
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult GetName()
        {
            return Ok(_userService.GetName());
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fromservices注入" tabindex="-1"><a class="header-anchor" href="#fromservices注入" aria-hidden="true">#</a> FromServices注入</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        [HttpGet]
        public ActionResult GetName([FromServices] IUserService _userService)
        {
            return Ok(_userService.GetName());
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="核心" tabindex="-1"><a class="header-anchor" href="#核心" aria-hidden="true">#</a> 核心</h1>`,11),h={href:"http://xn--3ds.NET",target:"_blank",rel:"noopener noreferrer"},S=s(`<ul><li>IServiceCollection负责注册</li><li>IServiceProvider负责提供实例</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void ConfigureServices(IServiceCollection services)
{
	//将服务生命期的范围限定为单个请求的生命期
    services.AddTransient&lt;IUserService, UserService&gt;();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造函数获取服务" tabindex="-1"><a class="header-anchor" href="#构造函数获取服务" aria-hidden="true">#</a> 构造函数获取服务</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private readonly IUserService _userService;
public HomeController(IUserService userService)
{
    _userService = userService;
}

public IActionResult Index()
{
    var info = _userService.GetInfo();
    return View();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iserviceprovider获取" tabindex="-1"><a class="header-anchor" href="#iserviceprovider获取" aria-hidden="true">#</a> IServiceProvider获取</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private readonly IServiceProvider _service;
public UserController(IServiceProvider service)
{
    _service = service;
}

[HttpGet]
public ActionResult GetName()
{
    var _userService = (IUserService)_service.GetService(typeof(IUserService));
    return Ok(_userService.GetName());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configureservices中获取服务" tabindex="-1"><a class="header-anchor" href="#configureservices中获取服务" aria-hidden="true">#</a> ConfigureServices中获取服务</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var provider = services.BuildServiceProvider();
var userserivce = provider.GetService&lt;IUserService&gt;(); // 获取不到为null
//或
var userservice2 = provider.GetRequiredService&lt;IUserService&gt;(); // 获取不到抛出异常
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configure中获取服务" tabindex="-1"><a class="header-anchor" href="#configure中获取服务" aria-hidden="true">#</a> Configure中获取服务</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var manualScope = app.ApplicationServices.CreateScope();
 
var service = manualScope.ServiceProvider.GetRequiredService&lt;IUserService&gt;();
service.SayHello();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建子容器" tabindex="-1"><a class="header-anchor" href="#构建子容器" aria-hidden="true">#</a> 构建子容器</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>using (var serviceProvider = new ServiceCollection()
                .AddSingleton&lt;ISingletonService, SingletonService&gt;()
                .BuildServiceProvider())
{
    var app = serviceProvider.GetService&lt;ISingletonService&gt;();

    app.Execute();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自己构建这种需要手动释放，防止内存泄露。避免在ConfigureService中调用BuildServiceProvider。</p><h2 id="异步获取" tabindex="-1"><a class="header-anchor" href="#异步获取" aria-hidden="true">#</a> 异步获取</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private readonly IServiceScopeFactory _serviceScopeFactory;

public OrderHander(IServiceScopeFactory serviceScopeFactory)
{
    _serviceScopeFactory = serviceScopeFactory;
}

public Task Hander()
{
    using (var scope = _serviceScopeFactory.CreateScope())
    {
        var userService = scope.ServiceProvider.GetRequiredService&lt;IUserService&gt;();
    }

    return Task.CompletedTask;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在范围服务中不建议使用构造函数注入，推荐引入IServiceScopeFactory创建范围</p><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>`,17),x={href:"https://docs.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection",target:"_blank",rel:"noopener noreferrer"};function f(_,I){const n=c("ExternalLinkIcon");return a(),l("div",null,[v,e("p",null,[i("图片来源自："),e("a",u,[i("https://blog.csdn.net/weixin_47498376/article/details/116177389"),r(n)])]),o,e("p",null,[i("图片来源自："),e("a",m,[i("https://blog.csdn.net/weixin_47498376/article/details/116177389"),r(n)])]),b,e("p",null,[i("图片来源自："),e("a",p,[i("https://blog.csdn.net/weixin_47498376/article/details/116177389"),r(n)])]),g,e("p",null,[e("a",h,[i("在.NET"),r(n)]),i(" Core中DI的核心分为两个组件：IServiceCollection和 IServiceProvider。")]),S,e("p",null,[i("依赖关系注入："),e("a",x,[i("https://docs.microsoft.com/zh-cn/dotnet/core/extensions/dependency-injection"),r(n)])])])}const A=d(t,[["render",f],["__file","default.html.vue"]]);export{A as default};
