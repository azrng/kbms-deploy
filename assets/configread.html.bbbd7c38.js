import{_ as t,W as a,X as s,Y as e,Z as i,$ as d,a0 as o,y as l}from"./framework.cf23f0c7.js";const r={},u=o(`<h2 id="_1-说明" tabindex="-1"><a class="header-anchor" href="#_1-说明" aria-hidden="true">#</a> 1. 说明</h2><p>默认情况下读取配置Configuration的默认优先级：ConfigureAppConfiguration(自定义读取)&gt;CommandLine(命令行参数)&gt;Environment(环境变量)&gt;appsetting.json(默认配置文件)&gt;UseSetting的顺序</p><p>原因：读取配置的顺序是后来者居上模式，后来注册的会优先被读取到。</p><p>默认环境：Development、Production</p><h2 id="_2-获取配置" tabindex="-1"><a class="header-anchor" href="#_2-获取配置" aria-hidden="true">#</a> 2. 获取配置</h2><h2 id="_2-1-获取单个项" tabindex="-1"><a class="header-anchor" href="#_2-1-获取单个项" aria-hidden="true">#</a> 2.1 获取单个项</h2><p>测试文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Information&quot;,
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;
    }
  },
  &quot;RabbitMQ&quot;: {
    &quot;Hosts&quot;: [ &quot;**.***.***.**&quot; ],
    &quot;Port&quot;: 5672,
    &quot;UserName&quot;: &quot;admin&quot;,
    &quot;Password&quot;: &quot;123456789&quot;,
    &quot;VirtualHost&quot;: &quot;myQueue&quot;
  },
  &quot;array&quot;: {
    &quot;entries&quot;: {
      &quot;0&quot;: &quot;value00&quot;,
      &quot;1&quot;: &quot;value10&quot;,
      &quot;2&quot;: &quot;value20&quot;,
      &quot;4&quot;: &quot;value40&quot;,
      &quot;5&quot;: &quot;value50&quot;
    }
  },
  &quot;AllowedHosts&quot;: &quot;*&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-1-getvalue" tabindex="-1"><a class="header-anchor" href="#_2-1-1-getvalue" aria-hidden="true">#</a> 2.1.1 GetValue</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//值是int类型
var a1 = Configuration.GetValue&lt;int&gt;(&quot;RabbitMQ:Port&quot;);
//值是字符串
var a2 = Configuration.GetValue&lt;string&gt;(&quot;RabbitMQ:UserName&quot;);

//获取数组第一个
var a0 = Configuration[&quot;RabbitMQ:Hosts:0&quot;];

var a3 = Configuration[&quot;RabbitMQ:UserName&quot;];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-2-getsection" tabindex="-1"><a class="header-anchor" href="#_2-1-2-getsection" aria-hidden="true">#</a> 2.1.2 GetSection</h3><p>会返回具有指定子节键的配置子节。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
//值是数组
var a0 = Configuration.GetSection(&quot;RabbitMQ:Hosts&quot;).Get&lt;string[]&gt;();

var key1 = Configuration.GetSection(&quot;array:entries&quot;)[&quot;0&quot;];//value00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>GetSection</code> 永远不会返回 <code>null</code>。 如果找不到匹配的节，则返回空 <code>IConfigurationSection</code>。</p><h3 id="_2-1-3-getchildren-和-exists" tabindex="-1"><a class="header-anchor" href="#_2-1-3-getchildren-和-exists" aria-hidden="true">#</a> 2.1.3 GetChildren 和 Exists</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var selection = Configuration.GetSection(&quot;array:entries&quot;);
if (!selection.Exists())
{
    throw new Exception(&quot;section2 does not exist.&quot;);
}
var children = selection.GetChildren();
var strList = new List&lt;string&gt;();
foreach (var subSection in children)
{
    strList.Add(subSection.Key + &quot;:key&quot;);
}
var str = JsonConvert.SerializeObject(strList);//[&quot;0:key&quot;,&quot;1:key&quot;,&quot;2:key&quot;,&quot;4:key&quot;,&quot;5:key&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-映射项到强类型对象" tabindex="-1"><a class="header-anchor" href="#_2-2-映射项到强类型对象" aria-hidden="true">#</a> 2.2 映射项到强类型对象</h3><p>模型类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class RabbitMQConfig
{
    public const string RabbitMQ = &quot;RabbitMQ&quot;;
    public string[] Hosts { get; set; }

    public int Port { get; set; }

    public string UserName { get; set; }

    public string Password { get; set; }

    public string VirtualHost { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>appsettings</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &quot;RabbitMQ&quot;: {
    &quot;Hosts&quot;: [ &quot;**.***.***.**&quot; ],
    &quot;Port&quot;: 5672,
    &quot;UserName&quot;: &quot;admin&quot;,
    &quot;Password&quot;: &quot;123456789&quot;,
    &quot;VirtualHost&quot;: &quot;myQueue&quot;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-1-映射项到模型类" tabindex="-1"><a class="header-anchor" href="#_2-2-1-映射项到模型类" aria-hidden="true">#</a> 2.2.1 映射项到模型类</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var info = new RabbitMQConfig();
Configuration.Bind(RabbitMQConfig.RabbitMQ, info);
//or
var info2 = new RabbitMQConfig();
//Bind方法的参数可以增加配置绑定到私有类上
Configuration.GetSection(RabbitMQConfig.RabbitMQ).Bind(info2);
//or
var info3 = Configuration.GetSection(RabbitMQConfig.RabbitMQ).Get&lt;RabbitMQConfig&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-注入模型类" tabindex="-1"><a class="header-anchor" href="#_2-2-2-注入模型类" aria-hidden="true">#</a> 2.2.2 注入模型类</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//startup配置 
services.Configure&lt;RabbitMQConfig&gt;(Configuration.GetSection(RabbitMQConfig.RabbitMQ));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-3-使用" tabindex="-1"><a class="header-anchor" href="#_2-2-3-使用" aria-hidden="true">#</a> 2.2.3 使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>private readonly RabbitMQConfig _rabbitMQConfig;
public WeatherForecastController(IOptions&lt;RabbitMQConfig&gt; options)
{
    _rabbitMQConfig = options.Value;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),v={href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/configuration/options?view=aspnetcore-5.0#ios",target:"_blank",rel:"noopener noreferrer"};function c(b,m){const n=l("ExternalLinkIcon");return a(),s("div",null,[u,e("blockquote",null,[e("p",null,[i("程序启动后再修改 JSON 配置文件所做的更改获取不到。 若要读取在应用启动后的更改，请使用 "),e("a",v,[i("IOptionsSnapshot"),d(n)])])])])}const g=t(r,[["render",c],["__file","configread.html.vue"]]);export{g as default};
