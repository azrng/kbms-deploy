import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-CBxp4zeL.js";const e={},i=t(`<h3 id="_1-说明" tabindex="-1"><a class="header-anchor" href="#_1-说明"><span>1. 说明</span></a></h3><p>默认情况下读取配置Configuration的默认优先级：ConfigureAppConfiguration(自定义读取)&gt;CommandLine(命令行参数)&gt;Environment(环境变量)&gt;appsetting.json(默认配置文件)&gt;UseSetting的顺序</p><blockquote><p>原因：读取配置的顺序是后来者居上模式，后来注册的会优先被读取到，具有覆盖性，可覆盖配置读取器。</p></blockquote><p>默认环境：Development、Production</p><h3 id="_2-获取配置" tabindex="-1"><a class="header-anchor" href="#_2-获取配置"><span>2. 获取配置</span></a></h3><h3 id="_2-1-获取单个项" tabindex="-1"><a class="header-anchor" href="#_2-1-获取单个项"><span>2.1 获取单个项</span></a></h3><p>测试文件</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Logging&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;LogLevel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;Default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Microsoft&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Warning&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Microsoft.Hosting.Lifetime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Information&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;RabbitMQ&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Hosts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;**.***.***.**&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">5672</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UserName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;VirtualHost&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myQueue&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;array&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;entries&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;0&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value10&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value20&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;4&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value40&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value50&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;AllowedHosts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-1-getvalue" tabindex="-1"><a class="header-anchor" href="#_2-1-1-getvalue"><span>2.1.1 GetValue</span></a></h4><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//值是int类型</span>
<span class="token class-name"><span class="token keyword">var</span></span> a1 <span class="token operator">=</span> Configuration<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetValue</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;RabbitMQ:Port&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//值是字符串</span>
<span class="token class-name"><span class="token keyword">var</span></span> a2 <span class="token operator">=</span> Configuration<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetValue</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;RabbitMQ:UserName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//获取数组第一个</span>
<span class="token class-name"><span class="token keyword">var</span></span> a0 <span class="token operator">=</span> Configuration<span class="token punctuation">[</span><span class="token string">&quot;RabbitMQ:Hosts:0&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> a3 <span class="token operator">=</span> Configuration<span class="token punctuation">[</span><span class="token string">&quot;RabbitMQ:UserName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-getsection" tabindex="-1"><a class="header-anchor" href="#_2-1-2-getsection"><span>2.1.2 GetSection</span></a></h4><p>会返回具有指定子节键的配置子节。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//值是数组</span>
<span class="token class-name"><span class="token keyword">var</span></span> a0 <span class="token operator">=</span> Configuration<span class="token punctuation">.</span><span class="token function">GetSection</span><span class="token punctuation">(</span><span class="token string">&quot;RabbitMQ:Hosts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Get</span><span class="token generic class-name"><span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> key1 <span class="token operator">=</span> Configuration<span class="token punctuation">.</span><span class="token function">GetSection</span><span class="token punctuation">(</span><span class="token string">&quot;array:entries&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//value00</span>

<span class="token class-name"><span class="token keyword">var</span></span> key2 <span class="token operator">=</span> Configuration<span class="token punctuation">.</span><span class="token function">GetSection</span><span class="token punctuation">(</span><span class="token string">&quot;array:entries&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>GetSection</code> 永远不会返回 <code>null</code>。 如果找不到匹配的节，则返回空 <code>IConfigurationSection</code>。</p></blockquote><h4 id="_2-1-3-getchildren-和-exists" tabindex="-1"><a class="header-anchor" href="#_2-1-3-getchildren-和-exists"><span>2.1.3 GetChildren 和 Exists</span></a></h4><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> selection <span class="token operator">=</span> Configuration<span class="token punctuation">.</span><span class="token function">GetSection</span><span class="token punctuation">(</span><span class="token string">&quot;array:entries&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selection<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;section2 does not exist.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name"><span class="token keyword">var</span></span> children <span class="token operator">=</span> selection<span class="token punctuation">.</span><span class="token function">GetChildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> strList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> subSection <span class="token keyword">in</span> children<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    strList<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>subSection<span class="token punctuation">.</span>Key <span class="token operator">+</span> <span class="token string">&quot;:key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name"><span class="token keyword">var</span></span> str <span class="token operator">=</span> JsonConvert<span class="token punctuation">.</span><span class="token function">SerializeObject</span><span class="token punctuation">(</span>strList<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//[&quot;0:key&quot;,&quot;1:key&quot;,&quot;2:key&quot;,&quot;4:key&quot;,&quot;5:key&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-映射项到强类型对象" tabindex="-1"><a class="header-anchor" href="#_2-2-映射项到强类型对象"><span>2.2 映射项到强类型对象</span></a></h3><p>模型类</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitMQConfig</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> RabbitMQ <span class="token operator">=</span> <span class="token string">&quot;RabbitMQ&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> Hosts <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Port <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> UserName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Password <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> VirtualHost <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>appsettings</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>  <span class="token property">&quot;RabbitMQ&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Hosts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;**.***.***.**&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">5672</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UserName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;VirtualHost&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myQueue&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-1-映射项到模型类" tabindex="-1"><a class="header-anchor" href="#_2-2-1-映射项到模型类"><span>2.2.1 映射项到模型类</span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>var info = new RabbitMQConfig();
Configuration.Bind(RabbitMQConfig.RabbitMQ<span class="token punctuation">,</span> info);
<span class="token comment">//or</span>
var info2 = new RabbitMQConfig();
<span class="token comment">//Bind方法的参数可以增加配置绑定到私有类上</span>
Configuration.GetSection(RabbitMQConfig.RabbitMQ).Bind(info2);
<span class="token comment">//or</span>
var info3 = Configuration.GetSection(RabbitMQConfig.RabbitMQ).Get&lt;RabbitMQConfig&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-单例注入" tabindex="-1"><a class="header-anchor" href="#_2-2-2-单例注入"><span>2.2.2 单例注入</span></a></h4><p>通过获取到绑定的配置信息，然后直接单例注入，并直接通过构造函数注入获取信息</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> appInfoRecord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AppInfoRecord</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> authorRecord<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span>Configuration<span class="token punctuation">.</span><span class="token function">GetSection</span><span class="token punctuation">(</span><span class="token string">&quot;AppInfo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Bind</span><span class="token punctuation">(</span>appInfoRecord<span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token function">AddSingleton</span><span class="token punctuation">(</span>appInfoRecord<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//使用</span>
<span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">AppInfoRecord</span>  _rabbitMQConfig<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token function">WeatherForecastController</span><span class="token punctuation">(</span><span class="token class-name">AppInfoRecord</span>  options<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    _rabbitMQConfig <span class="token operator">=</span> options<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="绑定校验" tabindex="-1"><a class="header-anchor" href="#绑定校验"><span>绑定校验</span></a></h4><p>配置内容</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>  <span class="token string">&quot;RabbitMQ&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;Hosts&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;195.168.1.10&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Port&quot;</span><span class="token punctuation">:</span> <span class="token number">5672</span><span class="token punctuation">,</span>
    <span class="token string">&quot;UserName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Password&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;123456789&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;VirtualHost&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;myQueue&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模型类</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitMQConfig</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> RabbitMQ <span class="token operator">=</span> <span class="token string">&quot;RabbitMQ&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Hosts <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Port <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> UserName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Password <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> VirtualHost <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="基础校验" tabindex="-1"><a class="header-anchor" href="#基础校验"><span>基础校验</span></a></h5><p>当一些明显的错误，比如将汉字等映射到int类型这种问题，可以通过简单的修改注入配置的方法就可以实现在项目启动的时候就抛出异常</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>builder.Services.AddOptions&lt;RabbitMQConfig&gt;()
    .Bind(builder.Configuration.GetSection(RabbitMQConfig.RabbitMQ))
    .ValidateOnStart();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你启动项目的时候，程序会直接抛出上面的异常来阻止项目启动。当然也可以进行以下自定义的校验规则，例如可以这么编写校验规则</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>builder.Services.AddOptions&lt;RabbitMQConfig&gt;()
    .Bind(builder.Configuration.GetSection(RabbitMQConfig.RabbitMQ))
    .Validate(t =&gt;
    {
        // host 用户名等校验
        if (t.Port &lt;= 0 || t.Port &gt; 65535)
        {
            return false;
        }

        return true;
    })
    .ValidateOnStart();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们将port端口设置为负数，那么在项目启动的时候会提示：Microsoft.Extensions.Options.OptionsValidationException:“A validation error has occurred.”</p><h5 id="通过特性校验" tabindex="-1"><a class="header-anchor" href="#通过特性校验"><span>通过特性校验</span></a></h5><p>在模型绑定和校验中我们使用类的特性来进行入参的校验以及错误信息的输出，这里我们可以同样使用特性来进行配置的校验，例如</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class RabbitMQConfig
{
    public const string RabbitMQ = &quot;RabbitMQ&quot;;

    [Required]
    public string Hosts { get; set; }

    public int Port { get; set; }

    [Required]
    public string UserName { get; set; }

    [Required]
    [MinLength(6, ErrorMessage = &quot;密码长度不能小于6位&quot;)]
    public string Password { get; set; }

    [Required]
    public string VirtualHost { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然我们绑定的配置也要做一些修改操作</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>builder.Services.AddOptions&lt;RabbitMQConfig&gt;()
    .Bind(builder.Configuration.GetSection(RabbitMQConfig.RabbitMQ))
    .ValidateDataAnnotations()
    .ValidateOnStart();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们将密码设置长度小于6位的时候，那么在项目启动的时候提示错误信息：DataAnnotation validation failed for &#39;RabbitMQConfig&#39; members: &#39;Password&#39; with the error: &#39;密码长度不能小于6位&#39;.”</p><h5 id="fluentvalidation" tabindex="-1"><a class="header-anchor" href="#fluentvalidation"><span>FluentValidation</span></a></h5><p>如果在你的项目中使用的是FluentValidation，那么还可以使用它来进行校验，首先我们需要先引入nuget包</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">PackageReference</span> Include<span class="token operator">=</span><span class="token string">&quot;FluentValidation.DependencyInjectionExtensions&quot;</span> Version<span class="token operator">=</span><span class="token string">&quot;11.5.1&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后再注入服务</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>builder<span class="token punctuation">.</span>Services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddValidatorsFromAssemblyContaining</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Program<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>ServiceLifetime<span class="token punctuation">.</span>Singleton<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关于如何编写可以参考ValidateDataAnnotations的写法，里面大概这个样子</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static OptionsBuilder&lt;TOptions&gt; ValidateDataAnnotations&lt;TOptions&gt;(
  this OptionsBuilder&lt;TOptions&gt; optionsBuilder)
  where TOptions : class
{
  optionsBuilder.Services.AddSingleton&lt;IValidateOptions&lt;TOptions&gt;&gt;((IValidateOptions&lt;TOptions&gt;) new DataAnnotationValidateOptions&lt;TOptions&gt;(optionsBuilder.Name));
  return optionsBuilder;
}

public class DataAnnotationValidateOptions&lt;TOptions&gt; : IValidateOptions&lt;TOptions&gt; where TOptions : class
{
  /// &lt;summary&gt;Constructor.&lt;/summary&gt;
  /// &lt;param name=&quot;name&quot;&gt;The name of the option.&lt;/param&gt;
  public DataAnnotationValidateOptions(string name) =&gt; this.Name = name;

  /// &lt;summary&gt;The options name.&lt;/summary&gt;
  public string Name { get; }

  /// &lt;summary&gt;
  /// Validates a specific named options instance (or all when &lt;paramref name=&quot;name&quot; /&gt; is null).
  /// &lt;/summary&gt;
  /// &lt;param name=&quot;name&quot;&gt;The name of the options instance being validated.&lt;/param&gt;
  /// &lt;param name=&quot;options&quot;&gt;The options instance.&lt;/param&gt;
  /// &lt;returns&gt;The &lt;see cref=&quot;T:Microsoft.Extensions.Options.ValidateOptionsResult&quot; /&gt; result.&lt;/returns&gt;
  public ValidateOptionsResult Validate(string name, TOptions options)
  {
    if (this.Name != null &amp;&amp; !(name == this.Name))
      return ValidateOptionsResult.Skip;
    List&lt;ValidationResult&gt; validationResultList = new List&lt;ValidationResult&gt;();
    if (Validator.TryValidateObject((object) options, new ValidationContext((object) options, (IServiceProvider) null, (IDictionary&lt;object, object&gt;) null), (ICollection&lt;ValidationResult&gt;) validationResultList, true))
      return ValidateOptionsResult.Success;
    List&lt;string&gt; failures = new List&lt;string&gt;();
    foreach (ValidationResult validationResult in validationResultList)
      failures.Add(&quot;DataAnnotation validation failed for members: &#39;&quot; + string.Join(&quot;,&quot;, validationResult.MemberNames) + &quot;&#39; with the error: &#39;&quot; + validationResult.ErrorMessage + &quot;&#39;.&quot;);
    return ValidateOptionsResult.Fail((IEnumerable&lt;string&gt;) failures);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以我们可以模仿着添加OptionsBuilderDataAnnotationsExtensions文件，并编写下面的代码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static class OptionsBuilderDataAnnotationsExtensions
{
    public static OptionsBuilder&lt;TOptions&gt; ValidtaeFluently&lt;TOptions&gt;(this OptionsBuilder&lt;TOptions&gt; optionsBuilder) where TOptions : class
    {
        optionsBuilder.Services.AddSingleton&lt;IValidateOptions&lt;TOptions&gt;&gt;(t =&gt; new FluentValidationOptions&lt;TOptions&gt;(optionsBuilder.Name, t.GetRequiredService&lt;IValidator&lt;TOptions&gt;&gt;()));
        return optionsBuilder;
    }
}

public class FluentValidationOptions&lt;TOptions&gt; : IValidateOptions&lt;TOptions&gt; where TOptions : class
{
    private readonly IValidator&lt;TOptions&gt; _validator;
    public string? Name { get; }

    public FluentValidationOptions(string? name, IValidator&lt;TOptions&gt; validator)
    {
        Name = name;
        _validator = validator;
    }

    public ValidateOptionsResult Validate(string name, TOptions options)
    {
        if (Name != null &amp;&amp; Name != name)
        {
            return ValidateOptionsResult.Skip;
        }

        ArgumentNullException.ThrowIfNull(options);

        var validtaionResult = _validator.Validate(options);
        if (validtaionResult.IsValid)
        {
            return ValidateOptionsResult.Success;
        }

        var error = validtaionResult.Errors.Select(t =&gt; $&quot;属性{t.PropertyName}验证失败，错误信息:{t.ErrorMessage};&quot;);
        return ValidateOptionsResult.Fail(error);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后我们修改关于配置绑定的地方</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>builder.Services.AddOptions&lt;RabbitMQConfig&gt;()
    .Bind(builder.Configuration.GetSection(RabbitMQConfig.RabbitMQ))
    .ValidtaeFluently()
    .ValidateOnStart();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面一个通用的使用FluentValidation校验配置的方案已经写好了，那么我们编写这次关于rabbtimq的配置校验</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class RabbitMQConfig
{
    public const string RabbitMQ = &quot;RabbitMQ&quot;;

    public string Hosts { get; set; }

    public int Port { get; set; }

    public string UserName { get; set; }

    public string Password { get; set; }

    public string VirtualHost { get; set; }
}

public class RabbitMQConfigValidator : AbstractValidator&lt;RabbitMQConfig&gt;
{
    public RabbitMQConfigValidator()
    {
        RuleFor(x =&gt; x.Password)
            .MinimumLength(6)
            .WithMessage(&quot;密码长度不能小于6位&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的校验只是举例了密码长度的限制，当部署的时候，如果我们设置的密码长度小于6位，那么就会抛出异常信息：属性Password验证失败，错误信息:密码长度不能小于6位;”</p><h3 id="_2-3-其他类中读取" tabindex="-1"><a class="header-anchor" href="#_2-3-其他类中读取"><span>2.3 其他类中读取</span></a></h3><p>在其他类中注入IConfiguration</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IConfiguration</span> _configuration<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token function">WeatherForecastController</span><span class="token punctuation">(</span><span class="token class-name">IConfiguration</span> configuration<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    _configuration <span class="token operator">=</span> configuration<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取配置</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;lastTime:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">_configuration<span class="token punctuation">[</span><span class="token string">&quot;lastTime&quot;</span><span class="token punctuation">]</span> </span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Name:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">_configuration<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span> </span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,62),o=[i];function p(l,c){return s(),a("div",null,o)}const d=n(e,[["render",p],["__file","peizhidouqu.html.vue"]]),v=JSON.parse('{"path":"/dotnet/base/peizhikuangjia/peizhidouqu.html","title":"配置读取","lang":"zh-CN","frontmatter":{"title":"配置读取","lang":"zh-CN","date":"2023-08-04T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"peizhidouqu","slug":"ugqbzr","docsId":"30178387","description":"1. 说明 默认情况下读取配置Configuration的默认优先级：ConfigureAppConfiguration(自定义读取)>CommandLine(命令行参数)>Environment(环境变量)>appsetting.json(默认配置文件)>UseSetting的顺序 原因：读取配置的顺序是后来者居上模式，后来注册的会优先被读取到，具有...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/base/peizhikuangjia/peizhidouqu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"配置读取"}],["meta",{"property":"og:description","content":"1. 说明 默认情况下读取配置Configuration的默认优先级：ConfigureAppConfiguration(自定义读取)>CommandLine(命令行参数)>Environment(环境变量)>appsetting.json(默认配置文件)>UseSetting的顺序 原因：读取配置的顺序是后来者居上模式，后来注册的会优先被读取到，具有..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-25T13:23:37.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-08-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-25T13:23:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置读取\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-25T13:23:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":3,"title":"1. 说明","slug":"_1-说明","link":"#_1-说明","children":[]},{"level":3,"title":"2. 获取配置","slug":"_2-获取配置","link":"#_2-获取配置","children":[]},{"level":3,"title":"2.1 获取单个项","slug":"_2-1-获取单个项","link":"#_2-1-获取单个项","children":[{"level":4,"title":"2.1.1 GetValue","slug":"_2-1-1-getvalue","link":"#_2-1-1-getvalue","children":[]},{"level":4,"title":"2.1.2 GetSection","slug":"_2-1-2-getsection","link":"#_2-1-2-getsection","children":[]},{"level":4,"title":"2.1.3 GetChildren 和 Exists","slug":"_2-1-3-getchildren-和-exists","link":"#_2-1-3-getchildren-和-exists","children":[]}]},{"level":3,"title":"2.2 映射项到强类型对象","slug":"_2-2-映射项到强类型对象","link":"#_2-2-映射项到强类型对象","children":[{"level":4,"title":"2.2.1 映射项到模型类","slug":"_2-2-1-映射项到模型类","link":"#_2-2-1-映射项到模型类","children":[]},{"level":4,"title":"2.2.2 单例注入","slug":"_2-2-2-单例注入","link":"#_2-2-2-单例注入","children":[]},{"level":4,"title":"绑定校验","slug":"绑定校验","link":"#绑定校验","children":[{"level":5,"title":"基础校验","slug":"基础校验","link":"#基础校验","children":[]},{"level":5,"title":"通过特性校验","slug":"通过特性校验","link":"#通过特性校验","children":[]},{"level":5,"title":"FluentValidation","slug":"fluentvalidation","link":"#fluentvalidation","children":[]}]}]},{"level":3,"title":"2.3 其他类中读取","slug":"_2-3-其他类中读取","link":"#_2-3-其他类中读取","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1698240217000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":5.18,"words":1554},"filePathRelative":"dotnet/base/peizhikuangjia/peizhidouqu.md","localizedDate":"2023年8月4日","excerpt":"<h3>1. 说明</h3>\\n<p>默认情况下读取配置Configuration的默认优先级：ConfigureAppConfiguration(自定义读取)&gt;CommandLine(命令行参数)&gt;Environment(环境变量)&gt;appsetting.json(默认配置文件)&gt;UseSetting的顺序</p>\\n<blockquote>\\n<p>原因：读取配置的顺序是后来者居上模式，后来注册的会优先被读取到，具有覆盖性，可覆盖配置读取器。</p>\\n</blockquote>\\n<p>默认环境：Development、Production</p>\\n<h3>2. 获取配置</h3>","autoDesc":true}');export{d as comp,v as data};
