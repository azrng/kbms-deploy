import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-CBxp4zeL.js";const t={},p=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>顾名思义，这个模式就是用来做适配的，它用来将不兼容的接口转换为可以兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>当“现存的对象”在新的环境中，不满足现有的使用要求，那么就需要使用适配器模式来将“现存的对象”适配新的使用需求。</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>适配器模式有两种实现方式：类适配器和对象适配器。</p><h3 id="类适配器" tabindex="-1"><a class="header-anchor" href="#类适配器"><span>类适配器</span></a></h3><p>类适配器使用继承关系来实现。 示例一：在工作中，我们需要调用其他模块的接口，ITarget表示我们需要的接口格式，Adaptee表示第三方/同事提供的接口格式，而Adaptor将Adaptee转换为符合我们ITarget格式的接口。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 我们需要的接口格式</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ITarget</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">F1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">F2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 同事/第三方提供的接口</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adaptee</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;fa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;fb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;fc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 适配器</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adaptor</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Adaptee</span><span class="token punctuation">,</span> <span class="token class-name">ITarget</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">F1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">Fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">F2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">Fb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//这里fc不需要实现，直接继承自Adaptee</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例二：当前我们使用了一个开源组件来记录日志，该组件支持数据库日志记录DatabaseLog和文本文件记录FileLog两种方式，提供的写日志方法名字叫做Write()</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 老的记录日志方法</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ILogTargetOld</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后后来组件升级了，写日志的方法名字改为了WriteLog</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 日志适配器</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">LogAdapter</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">WriteLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//新的日志记录方式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DatabaseLog</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">LogAdapter</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">WriteLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;新的数据库日志记录方式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//新的日志记录方式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileLog</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">LogAdapter</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">WriteLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;新的文本文件日志记录方式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候因为我们很多地方已经使用了，在不考虑去修改的情况下，我们就只能去使用适配器模式去兼容新版本组件写入的方法。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DatabaseLogAdapter</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">DatabaseLog</span><span class="token punctuation">,</span> <span class="token class-name">ILogTargetOld</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">WriteLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileLogAdapter</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">FileLog</span><span class="token punctuation">,</span> <span class="token class-name">ILogTargetOld</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">WriteLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端调用方式</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//类对象模式</span>
<span class="token class-name">ILogTargetOld</span> log <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">DatabaseLogAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
log<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">ILogTargetOld</span> log2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FileLogAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
log2<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象适配器" tabindex="-1"><a class="header-anchor" href="#对象适配器"><span>对象适配器</span></a></h3><p>对象适配器使用组合关系来实现。</p><p>示例一：在工作中，我们需要调用其他模块的接口，ITarget表示我们需要的接口格式，Adaptee表示第三方/同事提供的接口格式，而Adaptor将Adaptee转换为符合我们ITarget格式的接口。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 我们需要的接口格式</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ITarget</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">F1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">F2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adaptee2</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;fa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;fb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;fc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Adaptor2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ITarget</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">Adaptee2</span> _adaptee2<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token function">Adaptor2</span><span class="token punctuation">(</span><span class="token class-name">Adaptee2</span> adaptee2<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _adaptee2<span class="token operator">=</span>adaptee2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">F1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _adaptee2<span class="token punctuation">.</span><span class="token function">Fa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">F2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _adaptee2<span class="token punctuation">.</span><span class="token function">Fb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _adaptee2<span class="token punctuation">.</span><span class="token function">Fc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>针对这两种实现方式，在工作中使用哪一种，有两个评判规则，一个是接口的个数，另一个是需要的接口和提供方接口的锲合度。 如果接口个数不多，那么两个方法都可以。 如果需要适配的接口多，并且需要的格式和提供的格式大部分都相同，那么推荐使用类适配器，因为适配器可以复用父类的接口。 如果提供的接口很多，并且想要的格式和我们的大部分都不相同，那么推荐使用对象适配器，因为组合结构相比较继承更加灵活。</p><p>示例二：下面说一下上面类适配器中示例二的例子对应的对象适配器的写法</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogAdapter2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ILogTargetOld</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">LogAdapter</span> _adapter<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">LogAdapter2</span><span class="token punctuation">(</span><span class="token class-name">LogAdapter</span> adapter<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _adapter<span class="token operator">=</span>adapter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _adapter<span class="token punctuation">.</span><span class="token function">WriteLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端使用</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">//对象适配器</span>
<span class="token class-name">ILogTargetOld</span> log3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">LogAdapter2</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">DatabaseLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
log3<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>适配器可以看做是一种“补偿模式”，用来补救设计上的缺陷。使用该模式属于无奈之举，如果设计的时候，我们就可以协调规避接口不兼容的问题，那么这种模式都没有应用的机会。</p>`,28),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","kuopeiqimoshi.html.vue"]]),r=JSON.parse('{"path":"/softwareDesign/highQualityCode/designMode/jiegouxing/kuopeiqimoshi.html","title":"适配器模式","lang":"zh-CN","frontmatter":{"title":"适配器模式","lang":"zh-CN","date":"2022-08-13T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["软件设计"],"tag":["无"],"filename":"kuopeiqimoshi","slug":"zemhno","docsId":"89383053","description":"概述 顾名思义，这个模式就是用来做适配的，它用来将不兼容的接口转换为可以兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。 使用场景 当“现存的对象”在新的环境中，不满足现有的使用要求，那么就需要使用适配器模式来将“现存的对象”适配新的使用需求。 操作 适配器模式有两种实现方式：类适配器和对象适配器。 类适配器 类适配器使用继承关系来实现...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/softwareDesign/highQualityCode/designMode/jiegouxing/kuopeiqimoshi.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"适配器模式"}],["meta",{"property":"og:description","content":"概述 顾名思义，这个模式就是用来做适配的，它用来将不兼容的接口转换为可以兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。 使用场景 当“现存的对象”在新的环境中，不满足现有的使用要求，那么就需要使用适配器模式来将“现存的对象”适配新的使用需求。 操作 适配器模式有两种实现方式：类适配器和对象适配器。 类适配器 类适配器使用继承关系来实现..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-23T01:45:31.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-08-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-23T01:45:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"适配器模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-23T01:45:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"类适配器","slug":"类适配器","link":"#类适配器","children":[]},{"level":3,"title":"对象适配器","slug":"对象适配器","link":"#对象适配器","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1693926838000,"updatedTime":1698025531000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":3.65,"words":1094},"filePathRelative":"softwareDesign/highQualityCode/designMode/jiegouxing/kuopeiqimoshi.md","localizedDate":"2022年8月13日","excerpt":"<h2>概述</h2>\\n<p>顾名思义，这个模式就是用来做适配的，它用来将不兼容的接口转换为可以兼容的接口，让原本由于接口不兼容而不能一起工作的类可以一起工作。</p>\\n<h2>使用场景</h2>\\n<p>当“现存的对象”在新的环境中，不满足现有的使用要求，那么就需要使用适配器模式来将“现存的对象”适配新的使用需求。</p>\\n<h2>操作</h2>\\n<p>适配器模式有两种实现方式：类适配器和对象适配器。</p>\\n<h3>类适配器</h3>\\n<p>类适配器使用继承关系来实现。\\n示例一：在工作中，我们需要调用其他模块的接口，ITarget表示我们需要的接口格式，Adaptee表示第三方/同事提供的接口格式，而Adaptor将Adaptee转换为符合我们ITarget格式的接口。</p>","autoDesc":true}');export{k as comp,r as data};
