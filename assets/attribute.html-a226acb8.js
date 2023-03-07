import{_ as a,W as l,X as d,Y as e,Z as i,$ as s,a0 as t,C as r}from"./framework-63781bb7.js";const u={},c=t('<h1 id="开篇语" tabindex="-1"><a class="header-anchor" href="#开篇语" aria-hidden="true">#</a> 开篇语</h1><p>本文开始之前，首先我想问下大家对于属性和特性知道多少？属性和特性又有何区别？</p><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619859754610-fc47148b-04d3-4314-b49a-3219448ed593.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>对于该单词，我更想把它称之为：特性。对于属性和特性就是名称上有纠葛(不知道你们迷不迷，反正我写本文之前我是迷了)，什么是属性？属性是面向对象编程的基本概念，提供了对私有字段的访问封装，在C#中以get和set访问器方法实现对可读可写属性的操作，提供了安全和灵活的数据访问封装。什么是特性？下面内容就说明下：</p><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>',5),v={href:"https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/attributes/",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>简单总结：定制特性attribute，本质上是一个类，其为目标元素提供关联附加信息，并在运行期以反射的方式来获取附加信息。</p><h1 id="常用特性" tabindex="-1"><a class="header-anchor" href="#常用特性" aria-hidden="true">#</a> 常用特性</h1><h2 id="attributeusage" tabindex="-1"><a class="header-anchor" href="#attributeusage" aria-hidden="true">#</a> <strong>AttributeUsage</strong></h2><p>AttributeUsage特性用于控制如何应用自定义特性到目标元素，有三个数据属性可用以修饰我们的自定义的属性</p><table><thead><tr><th>ValidOn</th><th>规定特性可被放置的语言元素。它是枚举器 AttributeTargets 的值的组合。默认值是 AttributeTargets.All。</th></tr></thead><tbody><tr><td>AllowMultiple</td><td>定义了是否可在同一个程序实体上同时使用多个属性进行修饰</td></tr><tr><td>Inherited</td><td>定义了自定义属性的修饰是否可由被修饰类的派生类继承</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    [AttributeUsage(validOn: AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
    public class HelpAttribute : Attribute
    {

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示该特定只能标识在类上，并且同一个类上只能用一个属性修饰，并且自定义属性的修饰不能由修饰类的派生类继承。</p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><p>以Flags特性来将枚举数值看作位标记，而非单独的数值，例如我有如下的一个需求，当我想要取得用户信息的时候，会先从本地缓存中查找，找不到然后从分布式缓存中查找，最后找不到再从数据库中查询。但是有些场景我又不需要查询数据库。</p><p>所以会建立下面的这种模型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public UserEntity  GetUserInfo(List&lt;DataSource&gt;  dataSources)
{
    var xxxx = new UserEntity();
    if(dataSources.Any(DataSource.Local)
    {
        //从本地缓存中获取
        return xxxx;
    }
 
    if(dataSources.Any(DataSource.Distribution)
    {
        //从分布式缓存中获取
        //更新本地缓存
        return xxxx;
    }
 
    if(dataSources.Any(DataSource.DB)
    {
        //从DB中获取
        //更新分布式缓存
        //更新本地缓存
    }
    return xxxx;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是每次调用者都去构建一个List，比较麻烦，此时我们可以使用枚举中的Flags特性，修改程序如下：</p><p>首先是枚举的定义上**，要加上 [Flags] 特性标签，并且定义 一般都是 2的n次方，主要是便于位移运算**</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/// &lt;summary&gt;
///数据取得地方
/// &lt;/summary&gt;
[Flags]
public enum DataSource
{
    /// &lt;summary&gt;
    ///本地缓存
    /// &lt;/summary&gt;
    [Description(&quot;本地缓存&quot;)]
    LocalCache = 1,
 
    /// &lt;summary&gt;
    ///分布式缓存
    /// &lt;/summary&gt;
    [Description(&quot;分布式缓存&quot;)]
    DistributeCache = 2,
 
    /// &lt;summary&gt;
    ///数据库
    /// &lt;/summary&gt;
    [Description(&quot;数据库&quot;)]
    DB = 4,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public UserEntity  GetUserInfo(DataSource dataSources)
{
    var xxxx = new UserEntity();
    if(dataSources.HasFlags(DataSource.Local)
    {
        //从本地缓存中获取
        return xxxx;
    }
    if(dataSources.HasFlags(DataSource.Distribution)
    {
        //从分布式缓存中获取
        //更新本地缓存
        return xxxx;
    }
    if(dataSources.HasFlags(DataSource.DB)
    {
        //从DB中获取
        //更新分布式缓存
        //更新本地缓存
    }
    return xxxx;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用的地方，可以用过“|”来指定，例如我只想用分布式缓存和数据库，那么：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var userInfo = GetUserInfo(DataSource.Distribution | DataSource.DB);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),m={href:"https://www.cnblogs.com/dcz2015/p/10943759.html",target:"_blank",rel:"noopener noreferrer"},o=t(`<h2 id="dllimport" tabindex="-1"><a class="header-anchor" href="#dllimport" aria-hidden="true">#</a> DllImport</h2><p>DllImport特性，可以让我们调用非托管代码，所以我们可以使用DllImport特性引入对Win32 API函数的调用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[System.Runtime.InteropServices.DllImport(&quot;user32.dll&quot;)]
extern static void SampleMethod();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="serializable" tabindex="-1"><a class="header-anchor" href="#serializable" aria-hidden="true">#</a> Serializable</h2><p>Serializable特性表明了应用的元素可以被序列化(serializated)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Serializable]
public class SampleClass
{
    // Objects of this type can be serialized.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="conditional" tabindex="-1"><a class="header-anchor" href="#conditional" aria-hidden="true">#</a> Conditional</h2><p>Conditional特性，用于条件编译，在调试时使用。注意：Conditional不可应用于数据成员和属性。</p><h1 id="自定义特性" tabindex="-1"><a class="header-anchor" href="#自定义特性" aria-hidden="true">#</a> 自定义特性</h1>`,9),g={href:"https://docs.microsoft.com/zh-cn/dotnet/api/system.attribute",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct, AllowMultiple = true)]
    public class AuthorAttribute : Attribute
    {
        public string AuthorName;
        public double version;

        public AuthorAttribute(string authorName)
        {
            this.AuthorName = authorName;
            version = 1.0;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类名 <code>AuthorAttribute</code> 是该特性的名称，即 <code>Author</code> 加上 <code>Attribute</code> 后缀。 由于该类继承自 <code>System.Attribute</code>，因此它是一个自定义特性类。 构造函数的参数是自定义特性的位置参数。 在此示例中，<code>name</code> 是位置参数。 所有公共读写字段或属性都是命名参数。 在本例中，<code>version</code> 是唯一的命名参数。</p><p>请注意，使用 <code>AttributeUsage</code> 特性可使 <code>Author</code> 特性仅对类和 <code>struct</code> 声明有效。</p><p>可按照下面的方式使用特性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    [Author(&quot;张三&quot;, version = 1.1)]
    [Author(&quot;李四&quot;, version = 1.2)]
    public class SampleClass
    {
        // 业务逻辑代码
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取自定义参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var attr = typeof(SampleClass).GetCustomAttributes(typeof(AuthorAttribute), true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GetCustomAttributes 会以数组形式返回 Author 对象和任何其他特性对象</p><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>`,9),p={href:"https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/attributes/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.cnblogs.com/long2006sky/archive/2007/10/19/930094.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.cnblogs.com/dcz2015/p/10943759.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<h1 id="rabbitmq自定义属性" tabindex="-1"><a class="header-anchor" href="#rabbitmq自定义属性" aria-hidden="true">#</a> RabbitMq自定义属性</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// 自定义RabbitMQ队列注解
    /// &lt;/summary&gt;
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
    public class CustomRabbitMqAttribute : Attribute
    {
        /// &lt;summary&gt;
        /// 交换机名称
        /// &lt;/summary&gt;
        public string Exchange { get; set; }

        /// &lt;summary&gt;
        /// 队列名称
        /// &lt;/summary&gt;
        public string Queue { get; set; }

        /// &lt;summary&gt;
        /// 路由键
        /// &lt;/summary&gt;
        public string RoutingKey { get; set; }

        /// &lt;summary&gt;
        /// 类名
        /// &lt;/summary&gt;
        public string Name { get; } = string.Empty;

        public CustomRabbitMqAttribute(string routingKey, string queue = &quot;&quot;, string name = &quot;&quot;, string exchange = &quot;&quot;)
        {
            Exchange = exchange;
            Queue = !string.IsNullOrWhiteSpace(queue) ? queue : &quot;chat.queue.event&quot;;
            RoutingKey = !string.IsNullOrWhiteSpace(routingKey) ? routingKey : &quot;chat.routingkey.event&quot;;
            Name = name;
        }

        public CustomRabbitMqAttribute(Type eventType, string queue = &quot;&quot;, string exchange = &quot;&quot;)
            : this(eventType.Name, queue, eventType.Name, exchange: exchange)
        {

        }
    }


    /// &lt;summary&gt;
    /// CustomRabbitMqAttribute扩展方法
    /// &lt;/summary&gt;
    public static class CustomRabbitMqAttributeExtension
    {
        /// &lt;summary&gt;
        /// 获取CustomRabbitMqAttribute注解
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;type&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static CustomRabbitMqAttribute ToGetCustomRabbitMqAttribute(this Type type)
        {
            var attributes = type.GetCustomAttributes(typeof(CustomRabbitMqAttribute), true);
            if (attributes.Length == default)
            {
                var assemblyName = type.Assembly.GetName().Name;
                return new CustomRabbitMqAttribute(type, assemblyName);
            }

            return (CustomRabbitMqAttribute)attributes[0];
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>   [CustomRabbitMq(&quot;aaaa&quot;, &quot;bbbbb&quot;)]
    public class user
    {
        public string id { get; set; }

        public string name { get; set; }

        public string consultationsId { get; set; }
    }

//获取自定义属性注解
 var bbb = typeof(user).ToGetCustomRabbitMqAttribute();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function A(q,_){const n=r("ExternalLinkIcon");return l(),d("div",null,[c,e("p",null,[i("使用特性，可以有效地将元数据或声明性信息与代码（程序集、类型、方法、属性等）相关联。 将特性与程序实体相关联后，可以在运行时使用 反射 这项技术查询特性。"),e("a",v,[i("详情"),s(n)]),i(" 用于添加元数据，如编译器指令和注释、描述、方法、类等其他信息。.Net 框架提供了两种类型的特性：预定义特性和自定义特性。")]),b,e("p",null,[i("该例子摘抄自："),e("a",m,[i("https://www.cnblogs.com/dcz2015/p/10943759.html"),s(n)])]),o,e("p",null,[i("可通过定义特性类创建自己的自定义特性，特性类是直接或间接派生自 "),e("a",g,[i("Attribute"),s(n)]),i(" 的类，可快速轻松地识别元数据中的特性定义。假设我们希望使用编写类的程序员名字来标记该类，那么我们就需要自定义一个Author特性类")]),h,e("p",null,[e("a",p,[i("https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/attributes/"),s(n)])]),e("p",null,[e("a",x,[i("https://www.cnblogs.com/long2006sky/archive/2007/10/19/930094.html"),s(n)])]),e("p",null,[e("a",f,[i("https://www.cnblogs.com/dcz2015/p/10943759.html"),s(n)])]),y])}const C=a(u,[["render",A],["__file","attribute.html.vue"]]);export{C as default};
