import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-DMmdIwn0.js";const e={},p=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>策略模式(Strategy Design Pattern)定义一组算法类，将每个算法分别封装起来，让他们可以互相替换。策略模式就是可以使算法的变化独立于使用它们的客户端(这里的客户端指使用算法的代码)。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>利用它来避免很长的if-else或switch分支判断，不过它的作用不止于此，还可以像模板模式那样子，提供框架的扩展点。</p><h2 id="对比" tabindex="-1"><a class="header-anchor" href="#对比"><span>对比</span></a></h2><p>工厂模式：解耦对象的创建和使用 观察者模式：解耦观察者和被观察者 策略模式：也能解耦，但是它解耦的是策略的定义、创建、使用三部分。</p><p>策略模式通常和工厂一起配合使用，策略侧重如何灵活选择替换，工厂侧重如何创建实例。</p><p>相同点：在模式结构上，两者很相似 不同点： 用途不同：工厂是创建型模式，作用就是创建对象，策略模式是行为型模式，作用就是让一个对象在许多行为中选择一种行为； 关注点不同：一个关注对象的创建，一个关注行为的封装 解决的问题不同：一个解决资源的统一分发，将对象的创建完全独立出来，让对象的创建和具体的使用客户物管。一个是为了解决策略的切换与扩展。工厂相当于黑盒子，策略相当于白盒子。</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="示例1" tabindex="-1"><a class="header-anchor" href="#示例1"><span>示例1</span></a></h3><h4 id="策略定义" tabindex="-1"><a class="header-anchor" href="#策略定义"><span>策略定义</span></a></h4><p>策略的定义就是定义一个策略接口以及一组实现这个接口的策略类，又因为所有的策略类都实现相同的接口，所以客户端代码基于接口而非实现编程，可以灵活地替代不同的策略</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 策略定义</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IStrategy</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AlgorithmInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteStrategyA</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IStrategy</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AlgorithmInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 具体算法</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;实现A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteStrategyB</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IStrategy</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AlgorithmInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 具体算法</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;实现B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="策略创建" tabindex="-1"><a class="header-anchor" href="#策略创建"><span>策略创建</span></a></h4><p>策略在使用的时候一般通过类型(type)来判断创建哪个策略来使用，为了封装创建逻辑，我们需要对客户端代码屏蔽创建细节，我们可以把根据type创建策略的逻辑抽离出来，放到工厂类中，如下</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NoStateObjectStrategyFactory</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> IStrategy<span class="token punctuation">&gt;</span></span> _strategies <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> IStrategy<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token function">NoStateObjectStrategyFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _strategies<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStrategyA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _strategies<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStrategyB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IStrategy</span> <span class="token function">GetStrategy</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> type<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">IsNullOrWhiteSpace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;参数错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> _strategies<span class="token punctuation">.</span><span class="token function">GetValueOrDefault</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于策略类是无状态的，不包含成员变量，只是纯粹的算法实现，那么这样子的策略对象就是可以被共享使用的，不需要每次调用的时候创建新的策略对象，这个使用我们就可以使用工厂类来实现，事先创建好每个策略对象，缓存到工厂类中，用的时候直接返回。</p><p>如果策略类是有状态的，根据业务需要，我们希望每次从工厂方法中获取到的策略对象都是新创建的策略对象，而不是缓存好的，所以我们需要这么来获取</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContainStateObjectStrategyFactory</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IStrategy</span> <span class="token function">GetStrategy</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> type<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">IsNullOrWhiteSpace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;参数错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStrategyA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStrategyB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">default</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="策略使用" tabindex="-1"><a class="header-anchor" href="#策略使用"><span>策略使用</span></a></h4><p>客户端使用哪个策略有两个确定方法：编译时静态确定和运行的时候动态确定，一般我们都是用过一些逻辑计算然后得到type，然后拿着type去获取我们的策略</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// 省略获取类别的代码</span>
<span class="token class-name">IStrategy</span> a <span class="token operator">=</span> NoStateObjectStrategyFactory<span class="token punctuation">.</span><span class="token function">GetStrategy</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而编译时静态确定实际上退化成了基于接口而非编程原则</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name">IStrategy</span> strategy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcreteStrategyA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
strategy<span class="token punctuation">.</span><span class="token function">AlgorithmInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何移除if-else" tabindex="-1"><a class="header-anchor" href="#如何移除if-else"><span>如何移除if-else</span></a></h3><p>无状态策略对象做法：将原来代码中if-else的代码写法转换为使用字典取值的做法 包含状态的策略对象做法：使用反射来创建对象</p><p>使用反射来创建</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReflectStrategyFactory</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> Type<span class="token punctuation">&gt;</span></span> _strategies <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> Type<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token function">ReflectStrategyFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _strategies<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">ConcreteStrategyA</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _strategies<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">ConcreteStrategyB</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IStrategy</span> <span class="token function">GetStrategy</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> type<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">IsNullOrWhiteSpace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;参数错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">var</span></span> flag <span class="token operator">=</span> _strategies<span class="token punctuation">.</span><span class="token function">TryGetValue</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> strategiesType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;参数无效&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> Activator<span class="token punctuation">.</span><span class="token function">CreateInstance</span><span class="token punctuation">(</span>strategiesType<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">IStrategy</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>策略模式不仅仅是避免if-else分支判断逻辑，主要作用是解耦策略定义、创建和使用，控制代码的复杂度，让每个部分都不至于过于复杂、代码量过多。除此之外，对于复杂代码来说，策略模式还能够让其满足开闭原则，添加新策略的时候，最小化、集中化代码改动，减少引入bug的风险。</p>`,30),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","celvemoshi.html.vue"]]),d=JSON.parse('{"path":"/softwareDesign/highQualityCode/designMode/hangweixing/celvemoshi.html","title":"策略模式","lang":"zh-CN","frontmatter":{"title":"策略模式","lang":"zh-CN","date":"2023-02-09T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["软件设计"],"tag":["无"],"filename":"celvemoshi","slug":"vzmepgam7z1bg04s","docsId":"111752850","description":"概述 策略模式(Strategy Design Pattern)定义一组算法类，将每个算法分别封装起来，让他们可以互相替换。策略模式就是可以使算法的变化独立于使用它们的客户端(这里的客户端指使用算法的代码)。 使用场景 利用它来避免很长的if-else或switch分支判断，不过它的作用不止于此，还可以像模板模式那样子，提供框架的扩展点。 对比 工厂模...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/softwareDesign/highQualityCode/designMode/hangweixing/celvemoshi.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"策略模式"}],["meta",{"property":"og:description","content":"概述 策略模式(Strategy Design Pattern)定义一组算法类，将每个算法分别封装起来，让他们可以互相替换。策略模式就是可以使算法的变化独立于使用它们的客户端(这里的客户端指使用算法的代码)。 使用场景 利用它来避免很长的if-else或switch分支判断，不过它的作用不止于此，还可以像模板模式那样子，提供框架的扩展点。 对比 工厂模..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-23T01:45:31.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-02-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-23T01:45:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"策略模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-23T01:45:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"对比","slug":"对比","link":"#对比","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"示例1","slug":"示例1","link":"#示例1","children":[{"level":4,"title":"策略定义","slug":"策略定义","link":"#策略定义","children":[]},{"level":4,"title":"策略创建","slug":"策略创建","link":"#策略创建","children":[]},{"level":4,"title":"策略使用","slug":"策略使用","link":"#策略使用","children":[]}]},{"level":3,"title":"如何移除if-else","slug":"如何移除if-else","link":"#如何移除if-else","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1693926838000,"updatedTime":1698025531000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":4.13,"words":1238},"filePathRelative":"softwareDesign/highQualityCode/designMode/hangweixing/celvemoshi.md","localizedDate":"2023年2月9日","excerpt":"<h2>概述</h2>\\n<p>策略模式(Strategy Design Pattern)定义一组算法类，将每个算法分别封装起来，让他们可以互相替换。策略模式就是可以使算法的变化独立于使用它们的客户端(这里的客户端指使用算法的代码)。</p>\\n<h2>使用场景</h2>\\n<p>利用它来避免很长的if-else或switch分支判断，不过它的作用不止于此，还可以像模板模式那样子，提供框架的扩展点。</p>\\n<h2>对比</h2>\\n<p>工厂模式：解耦对象的创建和使用\\n观察者模式：解耦观察者和被观察者\\n策略模式：也能解耦，但是它解耦的是策略的定义、创建、使用三部分。</p>\\n<p>策略模式通常和工厂一起配合使用，策略侧重如何灵活选择替换，工厂侧重如何创建实例。</p>","autoDesc":true}');export{k as comp,d as data};