import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c as t,a as n,d as o,e as c,b as i}from"./app-qB9_Bjjp.js";const l={},u=i(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>索引器（Indexer） 允许一个对象可以像数组一样使用下标的方式来访问。</p><p>当您为类定义一个索引器时，该类的行为就会像一个 虚拟数组（virtual array） 一样。您可以使用数组访问运算符 [ ] 来访问该类的的成员。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>一维索引器的语法如下：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>element<span class="token operator">-</span><span class="token return-type class-name">type</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token class-name"><span class="token keyword">int</span></span> index<span class="token punctuation">]</span>
<span class="token punctuation">{</span>
   <span class="token comment">// get 访问器</span>
   <span class="token keyword">get</span>
   <span class="token punctuation">{</span>
      <span class="token comment">// 返回 index 指定的值</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// set 访问器</span>
   <span class="token keyword">set</span>
   <span class="token punctuation">{</span>
      <span class="token comment">// 设置 index 指定的值</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>索引器（Indexer）的用途 索引器的行为的声明在某种程度上类似于属性（property）。就像属性（property），您可使用 get 和 set 访问器来定义索引器。但是，属性返回或设置一个特定的数据成员，而索引器返回或设置对象实例的一个特定值。换句话说，它把实例数据分为更小的部分，并索引每个部分，获取或设置每个部分。 定义一个属性（property）包括提供属性名称。索引器定义的时候不带有名称，但带有 this 关键字，它指向对象实例。下面的实例演示了这个概念：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">namespace</span> <span class="token namespace">IndexerApplication</span>
<span class="token punctuation">{</span>
   <span class="token keyword">class</span> <span class="token class-name">IndexedNames</span>
   <span class="token punctuation">{</span>
      <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> namelist <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span></span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">static</span> <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
      <span class="token keyword">public</span> <span class="token function">IndexedNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
         namelist<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;N. A.&quot;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token class-name"><span class="token keyword">int</span></span> index<span class="token punctuation">]</span>
      <span class="token punctuation">{</span>
         <span class="token keyword">get</span>
         <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">string</span></span> tmp<span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span> index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> size<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
               tmp <span class="token operator">=</span> namelist<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
               tmp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> <span class="token punctuation">(</span> tmp <span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">set</span>
         <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span> index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> size<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
               namelist<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
         <span class="token class-name">IndexedNames</span> names <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">IndexedNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Zara&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Riz&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Nuha&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Asif&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Davinder&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Sunil&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Rubic&quot;</span><span class="token punctuation">;</span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> IndexedNames<span class="token punctuation">.</span>size<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span>
         <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当上面的代码被编译和执行时，它会产生下列结果</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>Zara
Riz
Nuha
Asif
Davinder
Sunil
Rubic
N<span class="token punctuation">.</span> A<span class="token punctuation">.</span>
N<span class="token punctuation">.</span> A<span class="token punctuation">.</span>
N<span class="token punctuation">.</span> A<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重载索引器（Indexer） 索引器（Indexer）可被重载。索引器声明的时候也可带有多个参数，且每个参数可以是不同的类型。没有必要让索引器必须是整型的。C## 允许索引器可以是其他类型，例如，字符串类型。 下面的实例演示了重载索引器：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">namespace</span> <span class="token namespace">IndexerApplication</span>
<span class="token punctuation">{</span>
   <span class="token keyword">class</span> <span class="token class-name">IndexedNames</span>
   <span class="token punctuation">{</span>
      <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> namelist <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span></span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">static</span> <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
      <span class="token keyword">public</span> <span class="token function">IndexedNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
         <span class="token punctuation">{</span>
          namelist<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;N. A.&quot;</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token class-name"><span class="token keyword">int</span></span> index<span class="token punctuation">]</span>
      <span class="token punctuation">{</span>
         <span class="token keyword">get</span>
         <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">string</span></span> tmp<span class="token punctuation">;</span>

            <span class="token keyword">if</span><span class="token punctuation">(</span> index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> size<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
               tmp <span class="token operator">=</span> namelist<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
               tmp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> <span class="token punctuation">(</span> tmp <span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">set</span>
         <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span> index <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> size<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
               namelist<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">]</span>
      <span class="token punctuation">{</span>
         <span class="token keyword">get</span>
         <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">int</span></span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> size<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
               <span class="token keyword">if</span> <span class="token punctuation">(</span>namelist<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> name<span class="token punctuation">)</span>
               <span class="token punctuation">{</span>
                <span class="token keyword">return</span> index<span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
               index<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> index<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>

      <span class="token punctuation">}</span>

      <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
         <span class="token class-name">IndexedNames</span> names <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">IndexedNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Zara&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Riz&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Nuha&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Asif&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Davinder&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Sunil&quot;</span><span class="token punctuation">;</span>
         names<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Rubic&quot;</span><span class="token punctuation">;</span>
         <span class="token comment">// 使用带有 int 参数的第一个索引器</span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> IndexedNames<span class="token punctuation">.</span>size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
         <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token comment">// 使用带有 string 参数的第二个索引器</span>
         Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>names<span class="token punctuation">[</span><span class="token string">&quot;Nuha&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         Console<span class="token punctuation">.</span><span class="token function">ReadKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当上面的代码被编译和执行时，它会产生下列结果：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>Zara
Riz
Nuha
Asif
Davinder
Sunil
Rubic
N<span class="token punctuation">.</span> A<span class="token punctuation">.</span>
N<span class="token punctuation">.</span> A<span class="token punctuation">.</span>
N<span class="token punctuation">.</span> A<span class="token punctuation">.</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,15),r={href:"https://mp.weixin.qq.com/s/uLvubhV6TbMXoy6SgL7dIg",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=e("ExternalLinkIcon");return p(),t("div",null,[u,n("p",null,[n("a",r,[o("https://mp.weixin.qq.com/s/uLvubhV6TbMXoy6SgL7dIg"),c(s)])])])}const y=a(l,[["render",d],["__file","suoyinqi.html.vue"]]),g=JSON.parse('{"path":"/dotnet/csharp/jigecaozuo/suoyinqi.html","title":"索引器","lang":"zh-CN","frontmatter":{"title":"索引器","lang":"zh-CN","date":"2023-10-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["csharp"],"tag":["无"],"filename":"suoyinqi","slug":"il5z0m","docsId":"63657471","description":"概述 索引器（Indexer） 允许一个对象可以像数组一样使用下标的方式来访问。 当您为类定义一个索引器时，该类的行为就会像一个 虚拟数组（virtual array） 一样。您可以使用数组访问运算符 [ ] 来访问该类的的成员。 语法 一维索引器的语法如下： 索引器（Indexer）的用途 索引器的行为的声明在某种程度上类似于属性（property）...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/csharp/jigecaozuo/suoyinqi.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"索引器"}],["meta",{"property":"og:description","content":"概述 索引器（Indexer） 允许一个对象可以像数组一样使用下标的方式来访问。 当您为类定义一个索引器时，该类的行为就会像一个 虚拟数组（virtual array） 一样。您可以使用数组访问运算符 [ ] 来访问该类的的成员。 语法 一维索引器的语法如下： 索引器（Indexer）的用途 索引器的行为的声明在某种程度上类似于属性（property）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T14:50:44.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T14:50:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-17T14:50:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1700232644000,"updatedTime":1700232644000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.52,"words":755},"filePathRelative":"dotnet/csharp/jigecaozuo/suoyinqi.md","localizedDate":"2023年10月22日","excerpt":"<h2>概述</h2>\\n<p>索引器（Indexer） 允许一个对象可以像数组一样使用下标的方式来访问。</p>\\n<p>当您为类定义一个索引器时，该类的行为就会像一个 虚拟数组（virtual array） 一样。您可以使用数组访问运算符 [ ] 来访问该类的的成员。</p>\\n<h2>语法</h2>\\n<p>一维索引器的语法如下：</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code>element<span class=\\"token operator\\">-</span><span class=\\"token return-type class-name\\">type</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">[</span><span class=\\"token class-name\\"><span class=\\"token keyword\\">int</span></span> index<span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">{</span>\\n   <span class=\\"token comment\\">// get 访问器</span>\\n   <span class=\\"token keyword\\">get</span>\\n   <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// 返回 index 指定的值</span>\\n   <span class=\\"token punctuation\\">}</span>\\n\\n   <span class=\\"token comment\\">// set 访问器</span>\\n   <span class=\\"token keyword\\">set</span>\\n   <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// 设置 index 指定的值</span>\\n   <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{y as comp,g as data};
