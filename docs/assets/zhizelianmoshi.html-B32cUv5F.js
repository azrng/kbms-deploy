import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-DMmdIwn0.js";const p={},t=e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>职责链模式的因为是Chain Of Responsibility Design Pattern，翻译为中文就是：将请求的发送和接收解耦，让多个接收对象都有机会处理这个请求。将这个请求对象串成一条链，并沿着这条链传递这个氢气，直到链上的某个接收对喜感能够处理它为之。</p><p>通俗说就是，多个处理的方法依次处理同一个请求，处理完再传递给下一个，此次类推，形成一个链条，链条上每个处理器各自承担各自的处理职责，所以叫做职责链模式。在实际开发的过程中，也存在对这个模式的变体，那就是请求不会中途终止传递，而是会被所有的处理器都处理一遍。</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>常用的两个实现：使用链表来存储处理器，另一种是使用数组来存储处理器，后面一种实现方式更加简单。</p><h3 id="可以处理请求就不往下传递" tabindex="-1"><a class="header-anchor" href="#可以处理请求就不往下传递"><span>可以处理请求就不往下传递</span></a></h3><h4 id="实现方式一" tabindex="-1"><a class="header-anchor" href="#实现方式一"><span>实现方式一</span></a></h4><p>定义所有处理器类的抽象父类</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Handler1</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Handler1<span class="token punctuation">?</span></span> Successor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SetSuccessor</span><span class="token punctuation">(</span><span class="token class-name">Handler1<span class="token punctuation">?</span></span> successor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>Successor <span class="token operator">=</span> successor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体的处理器类继承父类并实现Handle方法</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Handler1A</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Handler1</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;开始处理HandlerA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> handled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 业务逻辑处理 然后发现当前处理不了该请求，继续往下传递</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>handled <span class="token operator">&amp;&amp;</span> Successor <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Successor<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;处理结束HandlerA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Handler1B</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Handler1</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;开始处理HandlerB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> handled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 业务逻辑处理，发现不可以处理该请求，所以就继续往下传递 </span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>handled <span class="token operator">&amp;&amp;</span> Successor <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Successor<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;开始处理HandlerB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后闯将处理器链HandlerChain1，从数据结构的角度看，它是一个记录的链头和链尾的一个链表，记录链尾是为了方便添加处理器。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HandlerChain1</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 处理器链头</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">private</span> <span class="token class-name">Handler1<span class="token punctuation">?</span></span> head<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 处理器链尾</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">private</span> <span class="token class-name">Handler1<span class="token punctuation">?</span></span> tail<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token class-name">Handler1<span class="token punctuation">?</span></span> handler<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 将这个处理器类的下一个处理设置为null</span>
        handler<span class="token punctuation">.</span><span class="token function">SetSuccessor</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token keyword">is</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            head <span class="token operator">=</span> handler<span class="token punctuation">;</span>
            tail <span class="token operator">=</span> handler<span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        tail<span class="token punctuation">.</span><span class="token function">SetSuccessor</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        tail <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            head<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面处理器类的Handle函数，不仅包含自己的业务逻辑，还包含了下一个处理器的调用，也就是Successor.Handle()，为了防止使用者在编写处理器类的时候忘了调用Successor.Handle()，所以可以使用模板方法将这些逻辑剥离到抽象父类中，也就是下面的方法</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 所有处理器类的抽象父类  使用模板模式抽离逻辑到抽象父类</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Handler1_2</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Handler1_2<span class="token punctuation">?</span></span> _successor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SetSuccessor</span><span class="token punctuation">(</span><span class="token class-name">Handler1_2<span class="token punctuation">?</span></span> successor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_successor <span class="token operator">=</span> successor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 将_successor.Handle的逻辑从具体的处理器类中剥离出来，放到抽象父类中，</span>
    <span class="token doc-comment comment">/// 这样子具体的处理器类就只需要实现自己的业务逻辑就可以了</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> handled <span class="token operator">=</span> <span class="token function">DoHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>_successor <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>handled<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            _successor<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">DoHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么具体的实现类就可以这么写</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Handler1A1_2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Handler1_2</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">DoHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;开始处理HandlerA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> handled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 业务逻辑处理 判断是否可以处理</span>
        <span class="token keyword">return</span> handled<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Handler1B1_2</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Handler1_2</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">DoHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;开始处理HandlerB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> handled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 业务逻辑处理 判断是否可以处理</span>
        <span class="token keyword">return</span> handled<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>但是缺点就是没法对处理结束的内容在做处理了，直接处理完直接返回了</p></blockquote><p>HandlerChain的方法保持不变</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HandlerChain1_2</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Handler1_2<span class="token punctuation">?</span></span> head<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Handler1_2<span class="token punctuation">?</span></span> tail<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token class-name">Handler1_2<span class="token punctuation">?</span></span> handler<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        handler<span class="token punctuation">.</span><span class="token function">SetSuccessor</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token keyword">is</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            head <span class="token operator">=</span> handler<span class="token punctuation">;</span>
            tail <span class="token operator">=</span> handler<span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        tail<span class="token punctuation">.</span><span class="token function">SetSuccessor</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        tail <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        head<span class="token punctuation">?.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用的方法如下</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> chain <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HandlerChain1_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain<span class="token punctuation">.</span><span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Handler1A1_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain<span class="token punctuation">.</span><span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Handler1B1_2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现方式二" tabindex="-1"><a class="header-anchor" href="#实现方式二"><span>实现方式二</span></a></h4><p>这种方法采用数组而非链表俩保存所有的处理器，并且需要在HandlerChain2的Handle中依次调用每个处理器的handle函数</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IHandler2</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Handler2A</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IHandler2</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> handled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 业务逻辑计算</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;我是Handler2A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> handled<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Handler2B</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IHandler2</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> handled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 业务逻辑计算</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;我是Handler2B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> handled<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HandlerChain2</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">List<span class="token punctuation">&lt;</span>IHandler2<span class="token punctuation">&gt;</span></span> _handler2S <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>IHandler2<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token class-name">IHandler2</span> handler2<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _handler2S<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>handler2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> handler <span class="token keyword">in</span> _handler2S<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> handled <span class="token operator">=</span> handler<span class="token punctuation">.</span><span class="token function">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>handled<span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方法如下</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> chain2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HandlerChain2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain2<span class="token punctuation">.</span><span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Handler2A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain2<span class="token punctuation">.</span><span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Handler2B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain2<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="每个请求都被处理" tabindex="-1"><a class="header-anchor" href="#每个请求都被处理"><span>每个请求都被处理</span></a></h3><p>职责链的另一个情况就是，请求会被所有的处理器都处理一遍，不存在中途终止的情况，这种方式也有两个方案，链表的方式处理和数据存储的方式处理。</p><h4 id="实现方案一" tabindex="-1"><a class="header-anchor" href="#实现方案一"><span>实现方案一</span></a></h4><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 处理后继续往下执行</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Handler3</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Handler3</span> Successor<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SetSuccessor</span><span class="token punctuation">(</span><span class="token class-name">Handler3</span> successor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Successor <span class="token operator">=</span> successor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">DoHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Successor <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Successor<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HandlerA3</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Handler3</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 业务逻辑处理</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;handlerA3 业务逻辑处理&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HandlerB3</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Handler3</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 业务逻辑处理</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;handlerB3 业务逻辑处理&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HandlerChain3</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 链表头</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">private</span> <span class="token class-name">Handler3</span> head<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 链表尾</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">private</span> <span class="token class-name">Handler3</span> tail<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token class-name">Handler3</span> handler3<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        handler3<span class="token punctuation">.</span><span class="token function">SetSuccessor</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token keyword">is</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            head <span class="token operator">=</span> handler3<span class="token punctuation">;</span>
            tail <span class="token operator">=</span> handler3<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 将当前处理器类给链表尾的下一个处理</span>
        tail<span class="token punctuation">.</span><span class="token function">SetSuccessor</span><span class="token punctuation">(</span>handler3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 将当前处理器类赋值给链表尾</span>
        tail <span class="token operator">=</span> handler3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            head<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方法</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> chain3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HandlerChain3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain3<span class="token punctuation">.</span><span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HandlerA3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain3<span class="token punctuation">.</span><span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HandlerB3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain3<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现方案二" tabindex="-1"><a class="header-anchor" href="#实现方案二"><span>实现方案二</span></a></h4><p>数组的形式去处理</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 数组的形式</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IHandler4</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Handler4A</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IHandler4</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> handled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 业务逻辑计算</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;我是Handler4A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> handled<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Handler4B</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IHandler4</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> handled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 业务逻辑计算</span>
        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;我是Handler4B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> handled<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HandlerChain4</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">List<span class="token punctuation">&lt;</span>IHandler4<span class="token punctuation">&gt;</span></span> _handler4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>IHandler4<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token class-name">IHandler4</span> handler<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _handler4<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> handler <span class="token keyword">in</span> _handler4<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            handler<span class="token punctuation">.</span><span class="token function">Handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用方法</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> chain4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HandlerChain4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain4<span class="token punctuation">.</span><span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Handler4A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain4<span class="token punctuation">.</span><span class="token function">AddHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Handler4B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chain4<span class="token punctuation">.</span><span class="token function">Handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>利用职责链模式来进行敏感词过滤。</p><p>将大块代码逻辑拆分成函数，将大类拆分成小类，是应对代码复杂性常用的方法。应用职责链模式，将各个敏感词过滤函数继续拆分出来，设计成独立的类，进一步简化让每个类中的代码不会过多。</p><p>常用在框架开发中，用来实现框架的过滤器、拦截器功能，让框架的使用者在不需要修改框架源码的情况下，添加新的过滤拦截功能，也体现了之前讲到的对扩展开发、对修改关闭的设计原则。 比如.Net中的过滤器、中间件的方案都属于职责链模式。</p>`,42),c=[t];function l(o,i){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","zhizelianmoshi.html.vue"]]),r=JSON.parse('{"path":"/softwareDesign/highQualityCode/designMode/hangweixing/zhizelianmoshi.html","title":"职责链模式","lang":"zh-CN","frontmatter":{"title":"职责链模式","lang":"zh-CN","date":"2023-02-14T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["软件设计"],"tag":["无"],"filename":"zhizelianmoshi","slug":"rexbvi563wt8k8k9","docsId":"111752863","description":"概述 职责链模式的因为是Chain Of Responsibility Design Pattern，翻译为中文就是：将请求的发送和接收解耦，让多个接收对象都有机会处理这个请求。将这个请求对象串成一条链，并沿着这条链传递这个氢气，直到链上的某个接收对喜感能够处理它为之。 通俗说就是，多个处理的方法依次处理同一个请求，处理完再传递给下一个，此次类推，形成...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/softwareDesign/highQualityCode/designMode/hangweixing/zhizelianmoshi.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"职责链模式"}],["meta",{"property":"og:description","content":"概述 职责链模式的因为是Chain Of Responsibility Design Pattern，翻译为中文就是：将请求的发送和接收解耦，让多个接收对象都有机会处理这个请求。将这个请求对象串成一条链，并沿着这条链传递这个氢气，直到链上的某个接收对喜感能够处理它为之。 通俗说就是，多个处理的方法依次处理同一个请求，处理完再传递给下一个，此次类推，形成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-23T01:45:31.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-02-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-23T01:45:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"职责链模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-23T01:45:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"可以处理请求就不往下传递","slug":"可以处理请求就不往下传递","link":"#可以处理请求就不往下传递","children":[{"level":4,"title":"实现方式一","slug":"实现方式一","link":"#实现方式一","children":[]},{"level":4,"title":"实现方式二","slug":"实现方式二","link":"#实现方式二","children":[]}]},{"level":3,"title":"每个请求都被处理","slug":"每个请求都被处理","link":"#每个请求都被处理","children":[{"level":4,"title":"实现方案一","slug":"实现方案一","link":"#实现方案一","children":[]},{"level":4,"title":"实现方案二","slug":"实现方案二","link":"#实现方案二","children":[]}]}]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}],"git":{"createdTime":1693926838000,"updatedTime":1698025531000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":5.7,"words":1710},"filePathRelative":"softwareDesign/highQualityCode/designMode/hangweixing/zhizelianmoshi.md","localizedDate":"2023年2月14日","excerpt":"<h2>概述</h2>\\n<p>职责链模式的因为是Chain Of Responsibility Design Pattern，翻译为中文就是：将请求的发送和接收解耦，让多个接收对象都有机会处理这个请求。将这个请求对象串成一条链，并沿着这条链传递这个氢气，直到链上的某个接收对喜感能够处理它为之。</p>\\n<p>通俗说就是，多个处理的方法依次处理同一个请求，处理完再传递给下一个，此次类推，形成一个链条，链条上每个处理器各自承担各自的处理职责，所以叫做职责链模式。在实际开发的过程中，也存在对这个模式的变体，那就是请求不会中途终止传递，而是会被所有的处理器都处理一遍。</p>\\n<h2>操作</h2>\\n","autoDesc":true}');export{k as comp,r as data};
