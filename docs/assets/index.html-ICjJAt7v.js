import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,b as i}from"./app-DMmdIwn0.js";const o={},t=i(`<h2 id="开发步骤" tabindex="-1"><a class="header-anchor" href="#开发步骤"><span>开发步骤</span></a></h2><p>1.开发一个直接或者间接实现Configurationprovider接口的类XXXconfigurationProvider，一般继承自ConfigurationProvider。如果是从文件读取，可以继承自FileConfigProvider。重写load方法，把扁平化数据设置到Data属性即可。 2.再开发给实现了IConfigurationSource接口的类XXXConfigurationSource，如果是文件读取，可以继承自FileConfigurationSource。在Build方法中返回上面的ConfigurationPrvider对象。 3.然后使用即可，configurationBuild.Add(new ConfigruarionSource())即可。为了简化使用，一般听过一个IConfugrationBuilder的扩展方法。</p><p>整体流程：编写Configurationprovider类实际读取配置；编写ConfigurationSource在Build中返回ConfigurationProvider对象；把ConfigurationSource对象加入IConfiguratioBuilder。</p><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展"><span>扩展</span></a></h2><h3 id="值来源判断" tabindex="-1"><a class="header-anchor" href="#值来源判断"><span>值来源判断</span></a></h3><p>判断我读取到的配置是来自配置文件还是来自于环境变量</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> someConfigValue <span class="token operator">=</span> configuration<span class="token punctuation">[</span><span class="token string">&quot;SomeConfigValue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>someConfigValue <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> Environment<span class="token punctuation">.</span><span class="token function">GetEnvironmentVariable</span><span class="token punctuation">(</span><span class="token string">&quot;SomeConfigValue&quot;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// The value is defined in both the JSON file and environment variable.</span>
    <span class="token comment">// You should decide which value to use based on your application&#39;s logic.</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>someConfigValue <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// The value is defined in the JSON file.</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
    <span class="token comment">// The value is defined in the environment variable.</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们首先通过 configuration[&quot;SomeConfigValue&quot;] 获取配置项的值。如果这个值不为空，并且环境变量中也存在同名的值，那么就表示这个值同时来自于环境变量和 JSON 文件。在这种情况下，你需要根据你的应用程序逻辑来决定使用哪个值。如果这个值只在 JSON 文件中被定义，那么它就来自于 JSON 文件。如果这个值只在环境变量中被定义，那么它就来自于环境变量。</p>`,8),s=[t];function r(l,p){return e(),a("div",null,s)}const d=n(o,[["render",r],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/dotnet/base/peizhikuangjia/zidingyipeizhiyuan/","title":"说明","lang":"zh-CN","frontmatter":{"title":"说明","lang":"zh-CN","date":"2023-09-25T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"readme","slug":"cd1hoh","docsId":"78251380","description":"开发步骤 1.开发一个直接或者间接实现Configurationprovider接口的类XXXconfigurationProvider，一般继承自ConfigurationProvider。如果是从文件读取，可以继承自FileConfigProvider。重写load方法，把扁平化数据设置到Data属性即可。 2.再开发给实现了IConfigurat...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/base/peizhikuangjia/zidingyipeizhiyuan/"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"说明"}],["meta",{"property":"og:description","content":"开发步骤 1.开发一个直接或者间接实现Configurationprovider接口的类XXXconfigurationProvider，一般继承自ConfigurationProvider。如果是从文件读取，可以继承自FileConfigProvider。重写load方法，把扁平化数据设置到Data属性即可。 2.再开发给实现了IConfigurat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-25T13:23:37.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-25T13:23:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说明\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-25T13:23:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"开发步骤","slug":"开发步骤","link":"#开发步骤","children":[]},{"level":2,"title":"扩展","slug":"扩展","link":"#扩展","children":[{"level":3,"title":"值来源判断","slug":"值来源判断","link":"#值来源判断","children":[]}]}],"git":{"createdTime":1697962303000,"updatedTime":1698240217000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.41,"words":424},"filePathRelative":"dotnet/base/peizhikuangjia/zidingyipeizhiyuan/readme.md","localizedDate":"2023年9月25日","excerpt":"<h2>开发步骤</h2>\\n<p>1.开发一个直接或者间接实现Configurationprovider接口的类XXXconfigurationProvider，一般继承自ConfigurationProvider。如果是从文件读取，可以继承自FileConfigProvider。重写load方法，把扁平化数据设置到Data属性即可。\\n2.再开发给实现了IConfigurationSource接口的类XXXConfigurationSource，如果是文件读取，可以继承自FileConfigurationSource。在Build方法中返回上面的ConfigurationPrvider对象。\\n3.然后使用即可，configurationBuild.Add(new ConfigruarionSource())即可。为了简化使用，一般听过一个IConfugrationBuilder的扩展方法。</p>","autoDesc":true}');export{d as comp,g as data};