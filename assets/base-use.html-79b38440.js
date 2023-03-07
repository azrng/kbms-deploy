import{_ as r,V as t,W as a,X as e,Y as n,Z as s,$ as d,C as l}from"./framework-fde89294.js";const c={},u=d(`<h1 id="单元测试简单使用" tabindex="-1"><a class="header-anchor" href="#单元测试简单使用" aria-hidden="true">#</a> 单元测试简单使用</h1><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>本文来演示一下同事教导后的写法，同样有些单元测试是为了演示而写的单元测试。</p><p>本文使用组件：Xunit、Moq以及dotNet相关知识</p><blockquote><p>注：本文内容基于上一篇</p></blockquote><h1 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h1><p>首先指定一个方法编写单元测试，并且要保证没有其他因素干扰的情况下去进行单元测试。</p><h2 id="创建单元测试项目" tabindex="-1"><a class="header-anchor" href="#创建单元测试项目" aria-hidden="true">#</a> 创建单元测试项目</h2><p>参考上篇文章，在上篇文章的基础上进行如下代码。</p><h2 id="测试方法" tabindex="-1"><a class="header-anchor" href="#测试方法" aria-hidden="true">#</a> 测试方法</h2><p>首先先继承公共类，然后注入日志组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class UserServiceTest : BaseWebHostTest
{
    public UserServiceTest(ITestOutputHelper helper) : base(helper)
    {
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如我们去对IUserService里面的GetListAsync做单元测试,然后查看该Service依赖于一些配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private readonly IBaseRepository&lt;User&gt; _userRep;
private readonly IUnitOfWork _unitOfWork;
private readonly IMapper _mapper;

public UserService(IMapper mapper,
    IBaseRepository&lt;User&gt; userRep, IUnitOfWork unitOfWork)
{
    _mapper = mapper;
    _userRep = userRep;
    _unitOfWork = unitOfWork;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么我们就需要使用moq组件去模拟出来这些依赖项减少影响。不过该接口有些依赖项用不到，不需要模拟直接传null</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//模拟用户数据
var users = new List&lt;User&gt;
{
    new User {Account = &quot;123&quot;, PassWord = &quot;123456&quot;, IsValid = true},
    new User {Account = &quot;456&quot;, PassWord = &quot;123456&quot;, IsValid = true},
};
// mock 数据
var mockRepository = new Mock&lt;IBaseRepository&lt;User&gt;&gt;();
mockRepository.Setup(t =&gt; t.GetListAsync(_ =&gt; true)).ReturnsAsync(users);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以实例化UserService进行使用，完整代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Fact]
public async Task GetUser_ReturnOk()
{
    //Arrange：准备阶段
    //模拟用户数据
    var users = new List&lt;User&gt;
    {
        new User {Account = &quot;123&quot;, PassWord = &quot;123456&quot;, IsValid = true},
        new User {Account = &quot;456&quot;, PassWord = &quot;123456&quot;, IsValid = true},
    };
    var mockRepository = new Mock&lt;IBaseRepository&lt;User&gt;&gt;();
    mockRepository.Setup(t =&gt; t.GetListAsync(_ =&gt; true)).ReturnsAsync(users);

    var userService = new UserService(null, mockRepository.Object, null);

    //Act：行为阶段
    var result = await userService.GetListAsync();

    //Assert：断言阶段
    Assert.True(result.Any());
    Output.WriteLine(JsonConvert.SerializeObject(result));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以对该方法进行单元测试了。</p><p>下面在演示一个对用户添加的方法编写单元测试</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631975072340-e40ce55e-c83a-45f7-9213-00374223b06c.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>因为我们依赖这三个东西，那么就需要mock这三个</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var mockRepository = new Mock&lt;IBaseRepository&lt;User&gt;&gt;();
mockRepository.Setup(t =&gt; t.AddAsync(It.IsAny&lt;User&gt;(), false))
    .ReturnsAsync(1);

var mockUnitWork = new Mock&lt;IUnitOfWork&gt;();
mockUnitWork.Setup(t =&gt; t.SaveChangesAsync(new System.Threading.CancellationToken()))
    .ReturnsAsync(1);

var vm = new AddUserVm { Account = &quot;789&quot;, PassWord = &quot;455&quot;, Sex = Net5ByDocker.Model.Enum.SexEnum.Man };

var mockIMapper = new Mock&lt;IMapper&gt;();
mockIMapper.Setup(t =&gt; t.Map&lt;User&gt;(vm))
    .Returns(new User { Account = &quot;789&quot;, PassWord = &quot;455&quot;, IsValid = true });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们模拟IBaseRepository传入任何的User到添加方法都返回，模拟单元提交也返回1，还模拟了IMapper进行映射，完整代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Fact]
public async Task AddUser_ReturnOk()
{
    // 模拟数据
    var mockRepository = new Mock&lt;IBaseRepository&lt;User&gt;&gt;();
    mockRepository.Setup(t =&gt; t.AddAsync(It.IsAny&lt;User&gt;(), false))
        .ReturnsAsync(1);

    var mockUnitWork = new Mock&lt;IUnitOfWork&gt;();
    mockUnitWork.Setup(t =&gt; t.SaveChangesAsync(new System.Threading.CancellationToken()))
        .ReturnsAsync(1);

    var vm = new AddUserVm { Account = &quot;789&quot;, PassWord = &quot;455&quot;, Sex = Net5ByDocker.Model.Enum.SexEnum.Man };

    var mockIMapper = new Mock&lt;IMapper&gt;();
    mockIMapper.Setup(t =&gt; t.Map&lt;User&gt;(vm))
        .Returns(new User { Account = &quot;789&quot;, PassWord = &quot;455&quot;, IsValid = true });

    var userService = new UserService(mockIMapper.Object, mockRepository.Object, mockUnitWork.Object);

    //行为阶段
    var result = await userService.AddAsync(vm);

    // 断言阶段
    Assert.NotEmpty(result);
    Output.WriteLine(result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后单元测试就编写完成了，启动单元测试</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631976003428-be50fafe-b02e-48a0-b4e0-b75a6297b9f2.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>单元测试成功，我理解的大概就是这样子的，如果有哪里不对的地方，麻烦指出来一起成长。</p><h1 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h1>`,29),v={href:"https://www.cnblogs.com/baoshu/p/14500273.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/Moq/moq4/wiki/Quickstart",target:"_blank",rel:"noopener noreferrer"};function m(p,b){const i=l("ExternalLinkIcon");return t(),a("div",null,[u,e("p",null,[n(".NetCore单元测试："),e("a",v,[n("https://www.cnblogs.com/baoshu/p/14500273.html"),s(i)])]),e("p",null,[n("Mock："),e("a",o,[n("https://github.com/Moq/moq4/wiki/Quickstart"),s(i)])])])}const h=r(c,[["render",m],["__file","base-use.html.vue"]]);export{h as default};
