import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as l}from"./app-vSdX8vi3.js";const t="/kbms/common/b6bb3a2afd1e4dc79b2f1f37604f23e9.png",a="/kbms/common/7ed204b4113f4c0382c6af37fc620a5d.png",s="/kbms/common/b7025ef677b24e14b6b65d71100202b0.png",o="/kbms/common/f86df2ef377e43cd8d842a728b1913fa.png",d="/kbms/common/acae42a7165d4aff82d54a56dd782ace.png",r="/kbms/common/c15b5c1a3b9c4aa3947626256e340842.png",v={},u=l(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>之前参与一个机票价格计算的项目，为他们设计了基本的处理流程，但是由于整个计算流程相当复杂，而且变化非常频繁，导致日常的修改、维护和升级也变得越来越麻烦，当我后来再接手的时候已经看不懂计算逻辑了。为了解决这个问题，我借鉴了“工作流”的思路，试图将整个计算过程设计成一个工作流。</p><p>但是我又不想引入一个独立的工作流引擎，于是写了一个名为Pipelines的框架。顾名思义，Pipelines通过构建Pipeline的方式完成所需的处理流程，整个处理逻辑被分解并实现在若干Pipe中，这些Pipe按照指定的顺序将完成的Pipeline构建出来。Pipeline本质上就是一个简单的顺序工作流，它仅仅按序执行注册的Pipe。这个简单的Pipelines框架被放在这里，这里我不会介绍它的设计实现，只是简单地介绍它的用法，有兴趣的可以查看源代码。</p><blockquote><p>一、构建并执行管道 二、Pipeline的“内部中断” 三、Pipeline的“外部中断” 四、处理层次化数据结构 五、利用扩展方法使Pipeline构建更简洁</p></blockquote><h2 id="一、构建并执行管道" tabindex="-1"><a class="header-anchor" href="#一、构建并执行管道"><span>一、构建并执行管道</span></a></h2><p>Pipelines旨在提供一个用于处理数据的顺序工作流或者管道（以下简称Pipeline），该Pipeline在一个强类型的上下文中被执行，管道可以利用此上下文得到需要处理的数据，并将处理的结果（含中间结果）存储在上下文中。接下来我们来演示如何利用Pipelines框架处理人口统计数据的实例。如下所示的两个类型分别表示人口统计数据和处理上下文，后者继承基类ContextBase。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class PopulationData
{
    public object Statistics { get; set; } = default!;
}
public sealed class PopulationContext : ContextBase
{
    public PopulationContext(PopulationData data)
    =&gt; Data = data;
    public PopulationData Data { get; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pipeline由一系列Pipe对象按照注册的顺序组合而成。通过继承基类PipeBase&lt;PopulationContext&gt;，我们定义了三个Pipe类来完成针对人口统计数据的三项基本处理任务。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public sealed class FooPopulationPipe : PipeBase&lt;PopulationContext&gt;
{
    public override string Description  
    =&gt; &quot;Global PopulationProcessor Foo&quot;;
    protected override void Invoke(PopulationContext context) 
    =&gt;Console.WriteLine($&quot;{nameof(FooPopulationPipe)} is invoked.&quot;);
}
public sealed class BarPopulationPipe : PipeBase&lt;PopulationContext&gt;
{
    public override string Description  
    =&gt; &quot;Global PopulationProcessor Bar&quot;;
    protected override void Invoke(PopulationContext context)  
    =&gt; Console.WriteLine($&quot;{nameof(BarPopulationPipe)} is invoked.&quot;);
}
public sealed class BazPopulationPipe : PipeBase&lt;PopulationContext&gt;
{
    public override string Description  
    =&gt; &quot;Global PopulationProcessor Baz&quot;;
    protected override void Invoke(PopulationContext context)  
    =&gt; Console.WriteLine($&quot;{nameof(BazPopulationPipe)} is invoked.&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我设计Pipelines的初衷是让每个参与者（包含非技术人员）在代码的频繁迭代过程中，可以清晰地了解当前的处理流程，所以我会将当前应用构建的所有Pipeline的处理流程导出来。基于这个目的，每个Pipe类型都需要利用其Description属性提供一段描述当前处理逻辑的文本。Pipe具体的处理逻辑实现在重写的Invoke方法中。如果涉及异步处理，需要继承更上层的基类Pipe&lt;TContext&gt;（PipeBase&lt;TContext&gt;的基类）并重写异步的InvokeAsync方法。</p><p>Pipeline的构建实现在如下所示的BuildPipelines方法中，我们利用该方法提供的IPipelineProvider对象注册了一个命名为“PopulationProcessor”的Pipeline。具体来说，我们调用的是它的AddPipeline&lt;TContext&gt;方法，该方法提供的第一个参数为Pipeline的注册名称，另一个参数是一个类型为Action&lt;IPipelineBuilder&lt;TContext&gt;&gt;的委托，它利用提供的IPipelineBuilder&lt;TContext&gt;对象完成了上面定义的三个Pipe的注册。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>using App;
using Artech.Pipelines;

var builder = WebApplication
    .CreateBuilder(args);
builder.Services
    .AddPipelines(BuildPipelines);
var app = builder.Build();
app.MapGet(&quot;/test&quot;, async (
    IPipelineProvider provider, 
    HttpResponse response) =&gt; {
        Console.WriteLine(&quot;Execute PopulationProcessor pipeline&quot;);
        var context = new PopulationContext(new PopulationData());
        var pipeline = provider
            .GetPipeline&lt;PopulationContext&gt;(&quot;PopulationProcessor&quot;);
    await pipeline.ProcessAsync(context);
    return Results.Ok();
});
app.Run();

static void BuildPipelines(
    IPipelineProvider pipelineProvider)
{
    pipelineProvider.AddPipeline&lt;PopulationContext&gt;(
        name: &quot;PopulationProcessor&quot;,
        setup: builder =&gt; builder
            .Use&lt;PopulationContext, FooPopulationPipe&gt;()
            .Use&lt;PopulationContext, BarPopulationPipe&gt;()
            .Use&lt;PopulationContext, BazPopulationPipe&gt;());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pipelines框架涉及的服务通过IServiceCollection接口的AddPipelines方法进行注册，BuildPipelines方法转换成委托作为该方法的参数。我们注册了一个指向“/test” 的路由终结点来演示针对管道的执行。如代码片段所示，我们利用注入的IPipelineProvider对象根据注册名称得到具体的Pipeline对象，并创建出相应的PopulationContext上下文作为参数来执行此Pipeline对象。程序执行后，请求路径”/pipelines”可以得到一个Pipeline的列表，点击具体的链接，对应Pipeline体现的流程就会呈现出来。</p><figure><img src="`+t+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>如果请求路径“/test”来执行构建的管道，管道执行的轨迹将会体现在控制台的输出结果上。</p><figure><img src="'+a+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="二、pipeline的-内部中断" tabindex="-1"><a class="header-anchor" href="#二、pipeline的-内部中断"><span>二、Pipeline的“内部中断”</span></a></h2><p>构成Pipeline的每个Pipe都可以根据处理逻辑的需要立即中断管道的执行。在如下这个重写的BarPopulationPipe类型的Invoke方法中，如果生成的随机数为偶数，它会调用上下文对象的Abort方法立即终止Pipeline的执行。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
public sealed class BarPopulationPipe : PipeBase&lt;PopulationContext&gt;
{
    private readonly Random _random 
    = new();
    public override string Description 
    =&gt; &quot;Global PopulationProcessor Bar&quot;;
    protected override void Invoke(
        PopulationContext context)
    {
        Console.WriteLine(
            $&quot;{nameof(BarPopulationPipe)} is invoked.&quot;);
        if (_random.Next() % 2 == 0)
        {
            context.Abort();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的化，当我们构建的Pipeline在执行过程中，有一半的几率BazPopulationPipe将不会执行，如下所示的输出结果体现了这一点。</p><figure><img src="`+s+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>对于继承自Pipe&lt;TContext&gt;&gt;的Pipe类型，其实现的InvokeAsync方法可以采用如下的方式中止当前Pipeline的执行，因为参数next返回的委托用于调用后续Pipe。如果不执行此委托，就意味着针对Pipeline的执行到此为止。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public sealed class BarPopulationPipe : Pipe&lt;PopulationContext&gt;
{
    private readonly Random _random 
    = new();
    public override string Description 
    =&gt; &quot;Global PopulationProcessor Bar&quot;;
    public override ValueTask InvokeAsync(
        PopulationContext context, 
        Func&lt;PopulationContext, ValueTask&gt; next)
    {
        Console.WriteLine(
            $&quot;{nameof(BarPopulationPipe)} is invoked.&quot;);
        if (_random.Next() % 2 != 0)
        {
            return next(context);
        }
        return ValueTask.CompletedTask;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、pipeline的-外部中断" tabindex="-1"><a class="header-anchor" href="#三、pipeline的-外部中断"><span>三、Pipeline的“外部中断”</span></a></h2><p>在调用Pipeline时，我们可以利用执行上下文提供的CancellationToken中止Pipeline的执行。我们按照如下的方式再次改写了BarPopulationPipe的执行逻辑，如下面的代码片段所示，我们不再调用Abort方法，而是选择延迟2秒执行后续操作。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public sealed class BarPopulationPipe : Pipe&lt;PopulationContext&gt;
{
    private readonly Random _random 
    = new();
    public override string Description 
    =&gt; &quot;Global PopulationProcessor Bar&quot;;
    public override async ValueTask InvokeAsync(
        PopulationContext context, 
        Func&lt;PopulationContext, ValueTask&gt; next)
    {
        Console.WriteLine(
            $&quot;{nameof(BarPopulationPipe)} is invoked.&quot;);
        if (_random.Next() % 2 != 0)
        {
            await Task.Delay(2000);
        }
        await next(context);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们按照如下的方式重写了PopulationContext的CancellationToken属性。我们为构造函数添加了两个参数，一个代表当前HttpContext上下文，另一个表示设置的超时时限。CancellationToken根据这两个参数创建而成，意味着管道不仅具有默认的超时时间，也可以通过HTTP调用方中止执行。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>
public sealed class PopulationContext
    : ContextBase
{
    public PopulationContext(
        PopulationData data, 
        HttpContext httpContext, 
        TimeSpan timeout)
    {
        Data = data;
        CancellationToken = CancellationTokenSource
            .CreateLinkedTokenSource(
            httpContext.RequestAborted, 
            new CancellationTokenSource(timeout).Token)
        .Token;
    }
    public PopulationData Data { get; }
    public override CancellationToken CancellationToken { get; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在注册的终结点处理器中，我们在执行Pipeline之前，将作为参数传入的PopulationContext上下文的超时时间设置为1秒。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var builder = WebApplication
    .CreateBuilder(args);
builder.Services
    .AddPipelines(BuildPipelines);
var app = builder.Build();
app.MapGet(&quot;/test&quot;, async (
    HttpContext httpContext,
    IPipelineProvider provider, 
    HttpResponse response) =&gt; {
        Console.WriteLine(
            &quot;Execute PopulationProcessor pipeline&quot;);
    var context = new PopulationContext(
        new PopulationData(), 
        httpContext, 
        TimeSpan.FromSeconds(1));

    var pipeline = provider
        .GetPipeline&lt;PopulationContext&gt;(&quot;PopulationProcessor&quot;);
    await pipeline.ProcessAsync(context);
    return Results.Ok();
});
app.Run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据BarPopulationPipe的执行逻辑，Pipeline的执行具有一半的几率会超时，一旦超时就会立即抛出一个OperationCancellationToken异常。</p><figure><img src="`+o+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="四、处理层次化数据结构" tabindex="-1"><a class="header-anchor" href="#四、处理层次化数据结构"><span>四、处理层次化数据结构</span></a></h2><p>Pipelines设计的主要目的是用来处理层次化的数据结构，这涉及到子Pipeline的应用。目前我们处理的人口数据体现为一个简单的数据类型，现在我们让它变得更复杂一些。假设我们需要处理国家、省份和城市三个等级的人口数据，其中StatePopulationData代表整个国家的人口数据，它的Provinces属性承载了每个省份的数据。ProvincePopulationData代表具体某个省份的人口数据，其Cities属性承载了每个城市的人口数据。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class PopulationData
{
    public object  
        Statistics { get; set; } = default!;
}

public class StatePopulationData
{
    public IDictionary&lt;string, ProvincePopulationData&gt; 
        Provinces { get; set; } = default!;
}

public class ProvincePopulationData
{
    public IDictionary&lt;string, PopulationData&gt;  
        Cities { get; set; } = default!;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们需要构建一个Pipeline来处理通过StatePopulationData类型表示的整个国家的人口数据，具体的处理流程为：</p><ul><li><p>利用FooStatePipe处理国家人口数据</p></li><li><p>利用BarStatePipe处理国家人口数据</p></li><li><p>构建子Pipeline处理每个省份人口数据，子Pipeline处理逻辑：</p></li><li><ul><li><p>利用FooProvincePipe处理省份人口数据</p></li><li><p>利用BarProvincePipe处理省份人口数据、</p></li><li><p>构建子Pipeline处理每个城市人口数据，子Pipeline处理逻辑</p></li><li><ul><li>利用FooCityPipe处理城市人口数据</li><li>利用BarCityPipe处理城市人口数据</li><li>利用BazCityPipe处理城市人口数据</li></ul></li><li><p>利用BazProvincePipe处理省份人口数据</p></li></ul></li><li><p>利用BazStatePipe处理国家人口数据</p></li></ul><p>为此我们需要定义9个Pipe类型，以及3个执行上下文。如下所示的是三个执行上下文类型的具体定义：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public sealed class StatePopulationContext: ContextBase
{
    public StatePopulationData PopulationData { get; }
    public StatePopulationContext(
        StatePopulationData populationData) 
        =&gt; PopulationData = populationData;
}

public sealed class ProvincePopulationContext 
    : SubContextBase&lt;StatePopulationContext, 
      KeyValuePair&lt;string, ProvincePopulationData&gt;&gt;
{
    public string 
        Province { get; private set; } = default!;
    public IDictionary&lt;string, PopulationData&gt; 
        Cities { get; private set; } = default!;
    public override void Initialize(
        StatePopulationContext parent, 
        KeyValuePair&lt;string, ProvincePopulationData&gt; item)
    {
        Province = item.Key;
        Cities = item.Value.Cities;
        base.Initialize(parent, item);
    }
}

public sealed class CityPopulationContext
    : SubContextBase&lt;ProvincePopulationContext, KeyValuePair&lt;string, PopulationData&gt;&gt;
{
    public string 
        City { get; private set; } = default!;
    public PopulationData 
        PopulationData { get; private set; } = default!;
    public override void Initialize(
        ProvincePopulationContext parent, 
        KeyValuePair&lt;string, PopulationData&gt; item)
    {
        City = item.Key;
        PopulationData = item.Value;
        base.Initialize(parent, item);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9个对应的Pipe类型定义如下。每个类型利用重写的Description提供一个简单的描述，重写的Invoke方法输出当前怎样的数据（那个省/市的人口数据）。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public sealed class FooStatePipe : PipeBase&lt;StatePopulationContext&gt;
{
    public override string Description =&gt; &quot;State Population Processor Foo&quot;;
    protected override void Invoke(StatePopulationContext context)=&gt;Console.WriteLine(&quot;Foo: Process state population&quot;);
}
public sealed class BarStatePipe : PipeBase&lt;StatePopulationContext&gt;
{
    public override string Description =&gt; &quot;State Population Processor Bar&quot;;
    protected override void Invoke(StatePopulationContext context) =&gt; Console.WriteLine(&quot;Bar: Process state population&quot;);
}
public sealed class BazStatePipe : PipeBase&lt;StatePopulationContext&gt;
{
    public override string Description =&gt; &quot;State Population Processor Baz&quot;;
    protected override void Invoke(StatePopulationContext context) =&gt; Console.WriteLine(&quot;Baz: Process state population&quot;);
}

public sealed class FooProvincePipe : PipeBase&lt;ProvincePopulationContext&gt;
{
    public override string Description =&gt; &quot;Province Population Processor Foo&quot;;
    protected override void Invoke(ProvincePopulationContext context) =&gt; Console.WriteLine($&quot;\\tFoo: Process population of the province {context.Province}&quot;);
}

public sealed class BarProvincePipe : PipeBase&lt;ProvincePopulationContext&gt;
{
    public override string Description =&gt; &quot;Province Population Processor Bar&quot;;
    protected override void Invoke(ProvincePopulationContext context) =&gt; Console.WriteLine($&quot;\\tBar: Process population of the province {context.Province}&quot;);

}

public sealed class BazProvincePipe : PipeBase&lt;ProvincePopulationContext&gt;
{
    public override string Description =&gt; &quot;Province Population Processor Baz&quot;;
    protected override void Invoke(ProvincePopulationContext context) =&gt; Console.WriteLine($&quot;\\tBaz: Process population of the province {context.Province}&quot;);
}

public sealed class FooCityPipe : PipeBase&lt;CityPopulationContext&gt;
{
    public override string Description =&gt; &quot;City Population Processor Foo&quot;;
    protected override void Invoke(CityPopulationContext context) =&gt; Console.WriteLine($&quot;\\t\\tFoo: Process population of the city {context.City}&quot;);
}

public sealed class BarCityPipe : PipeBase&lt;CityPopulationContext&gt;
{
    public override string Description =&gt; &quot;City Population Processor Bar&quot;;
    protected override void Invoke(CityPopulationContext context) =&gt; Console.WriteLine($&quot;\\t\\tBar: Process population of the city {context.City}&quot;);

}

public sealed class BazCityPipe : PipeBase&lt;CityPopulationContext&gt;
{
    public override string Description =&gt; &quot;City Population Processor Baz&quot;;
    protected override void Invoke(CityPopulationContext context) =&gt; Console.WriteLine($&quot;\\t\\tBaz: Process population of the city {context.City}&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于构建这个Pipeline的BuildPipelines方法根据构建的Pipeline结构进行了如下的改写：子Pipeline通过IPipelineBuilder&lt;TContext&gt;接口的ForEach&lt;TContext, TSubContext, TItem&gt;扩展方法构建，三个泛型参数类型分别表示当前执行上下文类型、子上下文类型和子Pipeline处理数据。它具有三个参数，description提供到处文本，collectionAccessor利用一个委托获取一个集合对象（构建的子Pipeline用于处理它的每一个元素），subPipelineSetup提供的委托完整最终子Pipeline的构建。虽然看起来复杂，但是其结构还是很清晰的，即使是非技术人员也能明白这个Pipeline体现的处理流程。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>static void BuildPipelines(IPipelineProvider pipelineProvider)
{
    pipelineProvider.AddPipeline&lt;StatePopulationContext&gt;(name: &quot;PopulationProcessor&quot;, setup: builder =&gt; builder
      .Use&lt;StatePopulationContext, FooStatePipe&gt;()
      .Use&lt;StatePopulationContext, BarStatePipe&gt;()
      .ForEach&lt;StatePopulationContext, ProvincePopulationContext, KeyValuePair&lt;string, ProvincePopulationData&gt;&gt;(
            description: &quot;For each province&quot;,
            collectionAccessor: context =&gt; context.PopulationData.Provinces,
            subPipelineSetup: provinceBuilder =&gt; provinceBuilder
                .Use&lt;ProvincePopulationContext, FooProvincePipe&gt;()
                .Use&lt;ProvincePopulationContext, BarProvincePipe&gt;()
                .ForEach&lt;ProvincePopulationContext, CityPopulationContext, KeyValuePair&lt;string, PopulationData&gt;&gt;(
                    description: &quot;For each city&quot;,
                    collectionAccessor: context =&gt; context.Cities,
                    subPipelineSetup: cityBuilder =&gt; cityBuilder
                        .Use&lt;CityPopulationContext, FooCityPipe&gt;()
                        .Use&lt;CityPopulationContext, BarCityPipe&gt;()
                        .Use&lt;CityPopulationContext, BazCityPipe&gt;())
                .Use&lt;ProvincePopulationContext, BazProvincePipe&gt;())
      .Use&lt;StatePopulationContext, BazStatePipe&gt;());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>终结点处理程序在执行新的Pipeline时，会按照如下的形式将StatePopulationContext上下文构建出来。处理人口数据涉及三个省份（江苏、山东和浙江），每个省份包含三个城市的人口数据。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var builder = WebApplication.CreateBuilder(args);
builder.Services.AddPipelines(BuildPipelines);
var app = builder.Build();
app.MapGet(&quot;/test&quot;, async (
    HttpContext httpContext, 
    IPipelineProvider provider, 
    HttpResponse response) =&gt; {
    Console.WriteLine(&quot;Execute PopulationProcessor pipeline&quot;);
    var data = new StatePopulationData
    {
        Provinces = new Dictionary&lt;string, ProvincePopulationData&gt;()
    };
    data.Provinces.Add(&quot;Jiangsu&quot;, new ProvincePopulationData
    {
        Cities = new Dictionary&lt;string, PopulationData&gt;
        {
            {&quot;Suzhou&quot;, new PopulationData() },
            {&quot;Wuxi&quot;, new PopulationData() },
            {&quot;Changezhou&quot;, new PopulationData() },
        }
    });

    data.Provinces.Add(&quot;Shandong&quot;, new ProvincePopulationData
    {
        Cities = new Dictionary&lt;string, PopulationData&gt;
        {
            {&quot;Qingdao&quot;, new PopulationData() },
            {&quot;Jinan&quot;, new PopulationData() },
            {&quot;Yantai&quot;, new PopulationData() },
        }
    });

    data.Provinces.Add(&quot;Zhejiang&quot;, new ProvincePopulationData
    {
        Cities = new Dictionary&lt;string, PopulationData&gt;
        {
            {&quot;Hangzhou&quot;, new PopulationData() },
            {&quot;Ningbo&quot;, new PopulationData() },
            {&quot;Wenzhou&quot;, new PopulationData() },
        }
    });

    var context = new StatePopulationContext(data);

    var pipeline = provider
        .GetPipeline&lt;StatePopulationContext&gt;(&quot;PopulationProcessor&quot;);
    await pipeline.ProcessAsync(context);
    return Results.Ok();
});
app.Run();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用启动后，我们依然可以从Pipeline导出页面看到整个Pipeline的处理流程。</p><figure><img src="`+d+'" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>当我们请求“/test”，Pipeline针对国家人口数据的执行流程体现在控制台输出上。</p><figure><img src="'+r+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="五、利用扩展方法使pipeline构建更简洁" tabindex="-1"><a class="header-anchor" href="#五、利用扩展方法使pipeline构建更简洁"><span>五、利用扩展方法使Pipeline构建更简洁</span></a></h2><p>Pipeline的构建过程体现了完整的处理流程，所以我们应该构建代码尽可能地简洁，最理想的状态就是让非技术人员也能看懂。Pipelines提供的用于注册Pipe的API均为泛型方法，并且会涉及两到三个必须显式指定的泛型参数，使用起来还不是很方便。不过这个问题可以通过自定义扩展方法来解决。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public static class Extensions
{
    public static IPipelineBuilder&lt;StatePopulationContext&gt; UseStatePipe&lt;TPipe&gt;(
        this IPipelineBuilder&lt;StatePopulationContext&gt; builder)
        where TPipe : Pipe&lt;StatePopulationContext&gt;
        =&gt; builder.Use&lt;StatePopulationContext, TPipe&gt;();
    public static IPipelineBuilder&lt;ProvincePopulationContext&gt; UseProvincePipe&lt;TPipe&gt;(
        this IPipelineBuilder&lt;ProvincePopulationContext&gt; builder)
        where TPipe : Pipe&lt;ProvincePopulationContext&gt;
        =&gt; builder.Use&lt;ProvincePopulationContext, TPipe&gt;();
    public static IPipelineBuilder&lt;CityPopulationContext&gt; UseCityPipe&lt;TPipe&gt;(
        this IPipelineBuilder&lt;CityPopulationContext&gt; builder)
        where TPipe : Pipe&lt;CityPopulationContext&gt;
        =&gt; builder.Use&lt;CityPopulationContext, TPipe&gt;();

    public static IPipelineBuilder&lt;StatePopulationContext&gt; ForEachProvince(
        this IPipelineBuilder&lt;StatePopulationContext&gt; builder, 
        Action&lt;IPipelineBuilder&lt;ProvincePopulationContext&gt;&gt; setup)
        =&gt; builder.ForEach(&quot;For each province&quot;, it =&gt; it.PopulationData.Provinces, (_, _) =&gt; true, setup);
    public static IPipelineBuilder&lt;ProvincePopulationContext&gt; ForEachCity(
        this IPipelineBuilder&lt;ProvincePopulationContext&gt; builder, 
        Action&lt;IPipelineBuilder&lt;CityPopulationContext&gt;&gt; setup)
        =&gt; builder.ForEach(&quot;For each city&quot;, it =&gt; it.Cities, (_, _) =&gt; true, setup);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上面的代码片段所示，我们针对三个数据层次（国家、省份、城市）定义了注册对应Pipe的扩展方法UseStatePipe、UseProvincePipe和UseCityPipe。还分别定义了ForEachProvince和ForEachCity这两个扩展方法来注册构建处理省份/城市人口数据的子Pipeline。有了这5个扩展方法，构建整个Pipeline的代码就可以变得非常简单而清晰，即使不写任何的注释，相信每个人（包括非开发人员）都能读懂涉及的处理流程。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>static void BuildPipelines(IPipelineProvider pipelineProvider)
{
    pipelineProvider.AddPipeline&lt;StatePopulationContext&gt;(
    name: &quot;PopulationProcessor&quot;, 
    setup: builder =&gt; builder
      .UseStatePipe&lt;FooStatePipe&gt;()
      .UseStatePipe&lt;BarStatePipe&gt;()
      .ForEachProvince(provinceBuilder =&gt; provinceBuilder
          .UseProvincePipe&lt;FooProvincePipe&gt;()
          .UseProvincePipe&lt;BarProvincePipe&gt;()
          .ForEachCity(cityBuilder =&gt; cityBuilder
              .UseCityPipe&lt;FooCityPipe&gt;()
              .UseCityPipe&lt;BarCityPipe&gt;()
              .UseCityPipe&lt;BazCityPipe&gt;())
          .UseProvincePipe&lt;BazProvincePipe&gt;())
      .UseStatePipe&lt;BazStatePipe&gt;());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>https://mp.weixin.qq.com/s/7ZcOXuci3aVHLIWDW9Jmng | 以管道的方式来完成复杂的流程处理</p>`,56),c=[u];function p(b,m){return e(),n("div",null,c)}const C=i(v,[["render",p],["__file","pipelineMethodCompletesComplexProcess.html.vue"]]),x=JSON.parse('{"path":"/temp/pipelineMethodCompletesComplexProcess.html","title":"以管道的方式来完成复杂的流程处理","lang":"zh-CN","frontmatter":{"title":"以管道的方式来完成复杂的流程处理","lang":"zh-CN","date":"2023-07-24T00:00:00.000Z","publish":true,"author":"大内老A","isOriginal":false,"category":["dotNet"],"tag":["管道","复杂流程"],"filename":"pipelineMethodCompletesComplexProcess","article":false,"description":"前言 之前参与一个机票价格计算的项目，为他们设计了基本的处理流程，但是由于整个计算流程相当复杂，而且变化非常频繁，导致日常的修改、维护和升级也变得越来越麻烦，当我后来再接手的时候已经看不懂计算逻辑了。为了解决这个问题，我借鉴了“工作流”的思路，试图将整个计算过程设计成一个工作流。 但是我又不想引入一个独立的工作流引擎，于是写了一个名为Pipelines...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/temp/pipelineMethodCompletesComplexProcess.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"以管道的方式来完成复杂的流程处理"}],["meta",{"property":"og:description","content":"前言 之前参与一个机票价格计算的项目，为他们设计了基本的处理流程，但是由于整个计算流程相当复杂，而且变化非常频繁，导致日常的修改、维护和升级也变得越来越麻烦，当我后来再接手的时候已经看不懂计算逻辑了。为了解决这个问题，我借鉴了“工作流”的思路，试图将整个计算过程设计成一个工作流。 但是我又不想引入一个独立的工作流引擎，于是写了一个名为Pipelines..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/b6bb3a2afd1e4dc79b2f1f37604f23e9.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-10T13:51:34.000Z"}],["meta",{"property":"article:author","content":"大内老A"}],["meta",{"property":"article:tag","content":"管道"}],["meta",{"property":"article:tag","content":"复杂流程"}],["meta",{"property":"article:published_time","content":"2023-07-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-10T13:51:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"以管道的方式来完成复杂的流程处理\\",\\"description\\":\\"前言 之前参与一个机票价格计算的项目，为他们设计了基本的处理流程，但是由于整个计算流程相当复杂，而且变化非常频繁，导致日常的修改、维护和升级也变得越来越麻烦，当我后来再接手的时候已经看不懂计算逻辑了。为了解决这个问题，我借鉴了“工作流”的思路，试图将整个计算过程设计成一个工作流。 但是我又不想引入一个独立的工作流引擎，于是写了一个名为Pipelines...\\"}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"一、构建并执行管道","slug":"一、构建并执行管道","link":"#一、构建并执行管道","children":[]},{"level":2,"title":"二、Pipeline的“内部中断”","slug":"二、pipeline的-内部中断","link":"#二、pipeline的-内部中断","children":[]},{"level":2,"title":"三、Pipeline的“外部中断”","slug":"三、pipeline的-外部中断","link":"#三、pipeline的-外部中断","children":[]},{"level":2,"title":"四、处理层次化数据结构","slug":"四、处理层次化数据结构","link":"#四、处理层次化数据结构","children":[]},{"level":2,"title":"五、利用扩展方法使Pipeline构建更简洁","slug":"五、利用扩展方法使pipeline构建更简洁","link":"#五、利用扩展方法使pipeline构建更简洁","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1696002370000,"updatedTime":1696945894000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":12.12,"words":3636},"filePathRelative":"temp/pipelineMethodCompletesComplexProcess.md","localizedDate":"2023年7月24日","excerpt":"<h2>前言</h2>\\n<p>之前参与一个机票价格计算的项目，为他们设计了基本的处理流程，但是由于整个计算流程相当复杂，而且变化非常频繁，导致日常的修改、维护和升级也变得越来越麻烦，当我后来再接手的时候已经看不懂计算逻辑了。为了解决这个问题，我借鉴了“工作流”的思路，试图将整个计算过程设计成一个工作流。</p>\\n<p>但是我又不想引入一个独立的工作流引擎，于是写了一个名为Pipelines的框架。顾名思义，Pipelines通过构建Pipeline的方式完成所需的处理流程，整个处理逻辑被分解并实现在若干Pipe中，这些Pipe按照指定的顺序将完成的Pipeline构建出来。Pipeline本质上就是一个简单的顺序工作流，它仅仅按序执行注册的Pipe。这个简单的Pipelines框架被放在这里，这里我不会介绍它的设计实现，只是简单地介绍它的用法，有兴趣的可以查看源代码。</p>","autoDesc":true}');export{C as comp,x as data};
