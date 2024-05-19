import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,d as e}from"./app-Bfb6-vFH.js";const t="/kbms/common/image-20231026222547431.png",i={},l=e('<h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>当你需要执行一个比较耗时的操作，然后这个时候我们一般需要编写好几个接口，比如一个提交操作的接口，一个定时获取状态的接口以及一个获取结果的接口，每次都需要写多麻烦，这个时候就用到本文介绍的组件了</p><h2 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图"><span>效果图</span></a></h2><p>当配置完成后，可以在swagger界面查看到多出来下面几个接口，然后分别是用来提交、获取状态、获取错误信息、获取结果、删除等操作</p><figure><img src="'+t+`" alt="image-20231026222547431" tabindex="0" loading="lazy"><figcaption>image-20231026222547431</figcaption></figure><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>下面以.Net6的API项目为例，安装nuget包</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Swashbuckle.AspNetCore<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6.5.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AsyncFlow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hangfire.AspNetCore<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.8.5<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hangfire.MemoryStorage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.8.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入服务并使用</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 配置hangfire
builder.Services.AddHangfire(config =&gt; config.UseMemoryStorage());
builder.Services.AddHangfireServer();

// 配置AsyncFlow
builder.Services.AddAsyncFlow(options =&gt; options.UseMemoryCache());

builder.Services.AddScoped&lt;AnalysisJob&gt;();

var app = builder.Build();

// 配置flow
app.MapFlow&lt;AnalysisJob, AnalysisRequest, AnalysisResult&gt;(&quot;analysis&quot;);

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.MapControllers();
app.Run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里使用到的AnalysisJob为</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
/// 解析的job
/// &lt;/summary&gt;
public class AnalysisJob : IAsyncFlow&lt;AnalysisRequest, AnalysisResult&gt;
{
    public async Task&lt;AnalysisResult&gt; ProcessAsync(AnalysisRequest request, IProgress&lt;ProgressData&gt; progress,
        CancellationToken cancellationToken)
    {
        // 用于执行耗时的操作
        await Task.Delay(30, cancellationToken);
        return new AnalysisResult
        {
            Str = &quot;123456&quot;
        };
    }
}

public class AnalysisRequest
{
    /// &lt;summary&gt;
    /// 用户名
    /// &lt;/summary&gt;
    public string Name { get; set; }
}

public class AnalysisResult
{
    public string Str { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样子启动后再打开swagger界面就可以看到上面效果图的示例了</p><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>如何快速实现异步轮询API：https://mp.weixin.qq.com/s/RvYeDTkeUncOY6H07pHZwA</p>`,15),c=[l];function p(o,r){return a(),s("div",null,c)}const m=n(i,[["render",p],["__file","poolAPI.html.vue"]]),v=JSON.parse('{"path":"/dotnet/api/controllerApi/extensions/poolAPI.html","title":"轮询API","lang":"zh-CN","frontmatter":{"title":"轮询API","lang":"zh-CN","date":"2023-10-26T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":false,"category":["article"],"tag":["log"],"filename":"poolAPI","description":"使用场景 当你需要执行一个比较耗时的操作，然后这个时候我们一般需要编写好几个接口，比如一个提交操作的接口，一个定时获取状态的接口以及一个获取结果的接口，每次都需要写多麻烦，这个时候就用到本文介绍的组件了 效果图 当配置完成后，可以在swagger界面查看到多出来下面几个接口，然后分别是用来提交、获取状态、获取错误信息、获取结果、删除等操作 image-...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/api/controllerApi/extensions/poolAPI.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"轮询API"}],["meta",{"property":"og:description","content":"使用场景 当你需要执行一个比较耗时的操作，然后这个时候我们一般需要编写好几个接口，比如一个提交操作的接口，一个定时获取状态的接口以及一个获取结果的接口，每次都需要写多麻烦，这个时候就用到本文介绍的组件了 效果图 当配置完成后，可以在swagger界面查看到多出来下面几个接口，然后分别是用来提交、获取状态、获取错误信息、获取结果、删除等操作 image-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/image-20231026222547431.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-25T09:26:24.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"log"}],["meta",{"property":"article:published_time","content":"2023-10-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-25T09:26:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"轮询API\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/image-20231026222547431.png\\"],\\"datePublished\\":\\"2023-10-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-25T09:26:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"效果图","slug":"效果图","link":"#效果图","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1698330672000,"updatedTime":1708853184000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.3,"words":391},"filePathRelative":"dotnet/api/controllerApi/extensions/poolAPI.md","localizedDate":"2023年10月26日","excerpt":"<h2>使用场景</h2>\\n<p>当你需要执行一个比较耗时的操作，然后这个时候我们一般需要编写好几个接口，比如一个提交操作的接口，一个定时获取状态的接口以及一个获取结果的接口，每次都需要写多麻烦，这个时候就用到本文介绍的组件了</p>\\n<h2>效果图</h2>\\n<p>当配置完成后，可以在swagger界面查看到多出来下面几个接口，然后分别是用来提交、获取状态、获取错误信息、获取结果、删除等操作</p>\\n<figure><img src=\\"/common/image-20231026222547431.png\\" alt=\\"image-20231026222547431\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20231026222547431</figcaption></figure>","autoDesc":true}');export{m as comp,v as data};
