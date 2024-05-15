import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-CBxp4zeL.js";const p="/kbms/common/1676387449367-3e84bcd3-2891-41d8-b275-2f8e4967af0e.png",e="/kbms/common/1676468428590-cafcd980-93fc-4186-a5d6-79797bf4ad7c.png",c={},o=t('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>状态模式是状态机的一种实现形式。状态机又叫做有限状态机，三个部分组成：状态、事件、动作。事件也称为转移条件，事件触发状态的转移以及动作的执行，不过动作不是必须的，也可能只转移状态，不执行任何动作。</p><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3><p>状态机常用在游戏、工作流引擎等系统开发中。</p><h2 id="状态机实现" tabindex="-1"><a class="header-anchor" href="#状态机实现"><span>状态机实现</span></a></h2><p>超级马里奥游戏中，超级马里奥可以变身为多种形态，比如小马里奥(Small Mario)、超级马里奥(Super Mario)、火焰马里奥(Fire Mario)、斗篷马里奥(Cape Mario)等，不同情况下会相互转换，并增加或者减少积分。</p><p>马里奥的形态转变就是一个状态机，其中，马里奥的不同形态就是状态机中的状态，游戏情节(吃蘑菇)就是状态机中的“事件”,加减积分就是状态机中的“动作”，比如吃蘑菇这个事件，就会触发状态的转移：从小马里奥转移为超级马里奥，以及触发动作的执行(增加100积分)。 <img src="'+p+`" alt="image.png" loading="lazy"> E1：吃了蘑菇 E2：获得斗篷 E3：获得火焰 E4：遇到怪物</p><p>定义状态的枚举</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 马里奥状态</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">StateEnum</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 普通</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    Small<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 超级</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    Super<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 火焰</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    Fire<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 斗篷</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    Cape
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支逻辑法" tabindex="-1"><a class="header-anchor" href="#分支逻辑法"><span>分支逻辑法</span></a></h3><p>利用if-else或者switch-case分支逻辑，参照状态转义图，将每个状态转义原模原样直译成代码，对于简单的状态机来说，这种实现方法最简单、最直接，首选。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MarioStateMachine1</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Score <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">StateEnum</span> CurrentState <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">MarioStateMachine1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Score <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        CurrentState <span class="token operator">=</span> StateEnum<span class="token punctuation">.</span>Small<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到蘑菇</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>CurrentState <span class="token operator">==</span> StateEnum<span class="token punctuation">.</span>Small<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            CurrentState <span class="token operator">=</span> StateEnum<span class="token punctuation">.</span>Super<span class="token punctuation">;</span>
            Score <span class="token operator">+=</span> <span class="token number">100</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到斗篷</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>CurrentState <span class="token keyword">is</span> <span class="token class-name">StateEnum<span class="token punctuation">.</span>Small</span> <span class="token keyword">or</span> StateEnum<span class="token punctuation">.</span>Super<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            CurrentState <span class="token operator">=</span> StateEnum<span class="token punctuation">.</span>Cape<span class="token punctuation">;</span>
            Score <span class="token operator">+=</span> <span class="token number">200</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到火焰</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>CurrentState <span class="token keyword">is</span> <span class="token class-name">StateEnum<span class="token punctuation">.</span>Small</span> <span class="token keyword">or</span> StateEnum<span class="token punctuation">.</span>Super<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            CurrentState <span class="token operator">=</span> StateEnum<span class="token punctuation">.</span>Fire<span class="token punctuation">;</span>
            Score <span class="token operator">+=</span> <span class="token number">300</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 遇到怪物</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MeetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>CurrentState <span class="token operator">==</span> StateEnum<span class="token punctuation">.</span>Super<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            CurrentState <span class="token operator">=</span> StateEnum<span class="token punctuation">.</span>Small<span class="token punctuation">;</span>
            Score <span class="token operator">-=</span> <span class="token number">100</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>CurrentState <span class="token operator">==</span> StateEnum<span class="token punctuation">.</span>Cape<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            CurrentState <span class="token operator">=</span> StateEnum<span class="token punctuation">.</span>Small<span class="token punctuation">;</span>
            Score <span class="token operator">-=</span> <span class="token number">300</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>CurrentState <span class="token operator">==</span> StateEnum<span class="token punctuation">.</span>Fire<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            CurrentState <span class="token operator">=</span> StateEnum<span class="token punctuation">.</span>Small<span class="token punctuation">;</span>
            Score <span class="token operator">-=</span> <span class="token number">300</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> mario <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MarioStateMachine1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mario<span class="token punctuation">.</span><span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> score <span class="token operator">=</span> mario<span class="token punctuation">.</span>Score<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> state <span class="token operator">=</span> mario<span class="token punctuation">.</span>CurrentState<span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;当前分数：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">score</span><span class="token punctuation">}</span></span><span class="token string"> 当前状态是：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">state</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于简单的状态机来说，分支逻辑的这种实现方式是可以接受的，但是如果负责的状态机来说，那么这个实现方式就容易漏写或者错写某个状态转义，并且一堆的if-else，代码的可读性和可维护性都很差，并且如果发生改动还容易出错。</p><h3 id="查表法" tabindex="-1"><a class="header-anchor" href="#查表法"><span>查表法</span></a></h3><p>状态机使用二维表来表示，第一维表示当前状态，第二维表示事件，值表示当前状态经过时间之后，转义到的新状态以及执行的动作。 <img src="`+e+`" alt="image.png" loading="lazy"> 查表法实现方式更加清洗，可读性和可维护性更好。当修改状态机，我们只需要修改二维数组即可。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 查表法</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MarioStateMachine2</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">StateEnum<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> _transitionTable <span class="token operator">=</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 第一层：small  super cape fire</span>
        <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> StateEnum<span class="token punctuation">.</span>Super<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Cape<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Fire<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Small <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> StateEnum<span class="token punctuation">.</span>Super<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Cape<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Fire<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Small <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> StateEnum<span class="token punctuation">.</span>Cape<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Cape<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Cape<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Small <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> StateEnum<span class="token punctuation">.</span>Fire<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Fire<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Fire<span class="token punctuation">,</span> StateEnum<span class="token punctuation">.</span>Small <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">List<span class="token punctuation">&lt;</span>List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> _actionTable <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token operator">+</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token operator">+</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token operator">+</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">300</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">MarioStateMachine2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Score <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        State <span class="token operator">=</span> StateEnum<span class="token punctuation">.</span>Small<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Score <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">StateEnum</span> State <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到蘑菇</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">ExecuteEvent</span><span class="token punctuation">(</span>EventEnum<span class="token punctuation">.</span>GotMushRoom<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到斗篷</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">ExecuteEvent</span><span class="token punctuation">(</span>EventEnum<span class="token punctuation">.</span>GotCape<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到火焰</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">ExecuteEvent</span><span class="token punctuation">(</span>EventEnum<span class="token punctuation">.</span>GotFire<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 遇到怪物</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MeetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">ExecuteEvent</span><span class="token punctuation">(</span>EventEnum<span class="token punctuation">.</span>MetMonState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ExecuteEvent</span><span class="token punctuation">(</span><span class="token class-name">EventEnum</span> @<span class="token keyword">event</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> stateValue <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>State<span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> eventValue <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>@<span class="token keyword">event</span><span class="token punctuation">;</span>
        State <span class="token operator">=</span> _transitionTable<span class="token punctuation">[</span>stateValue<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">eventValue</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        Score <span class="token operator">=</span> _actionTable<span class="token punctuation">[</span>stateValue<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">eventValue</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">EventEnum</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到蘑菇</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    GotMushRoom<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到斗篷</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    GotCape<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到火焰</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    GotFire<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 遇到怪物</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    MetMonState
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> mario2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MarioStateMachine2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mario2<span class="token punctuation">.</span><span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> score2 <span class="token operator">=</span> mario2<span class="token punctuation">.</span>Score<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> state2 <span class="token operator">=</span> mario2<span class="token punctuation">.</span>State<span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;当前分数：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">score2</span><span class="token punctuation">}</span></span><span class="token string"> 当前状态是：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">state2</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="状态模式" tabindex="-1"><a class="header-anchor" href="#状态模式"><span>状态模式</span></a></h3><p>在上面查表法中，事件的触发动作只是简单的积分加减，所以我们用一个二维的数组就能够标识，但是真实的执行动作并非这么简单，而是一系列复杂的逻辑操作(比如加减积分、写数据库还有可能发送短信通知等)这个时候就没法使用如此简单的二位数组来表示了，也就是说查表法的实现方式有一定的局限性。</p><p>虽然分支逻辑的方式不存在这个问题，当时前面也说了，分支判断逻辑较多的时候，会导致代码的可读性和可维护性不好。实际上，针对分支逻辑法存在的问题，我们可以使用状态模式来解决。</p><p>状态模式通过将时间触发的状态转移和动作执行，拆分到不同的状态类中，来避免分支判断逻辑，下面来看代码， IMario 是状态的接口，定义了所有的事件。SmallMario、SuperMario、 CapeMario、FireMario 是 IMario 接口的实现类，分别对应状态机中的 4 个状态。</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 状态的接口，定义所有的事件</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IMario</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name">StateEnum</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到蘑菇</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到斗篷</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到火焰</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 遇到怪物</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MeetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmallMario</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IMario</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">MarioStateMachine3</span> _stateMachine3<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">SmallMario</span><span class="token punctuation">(</span><span class="token class-name">MarioStateMachine3</span> stateMachine3<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3 <span class="token operator">=</span> stateMachine3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">StateEnum</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> StateEnum<span class="token punctuation">.</span>Small<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SuperMario</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">.</span>Score <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CapeMario</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">.</span>Score <span class="token operator">+</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">FireMario</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">.</span>Score <span class="token operator">+</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MeetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 直接挂掉或者做一些事情</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperMario</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IMario</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">MarioStateMachine3</span> _stateMachine3<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">SuperMario</span><span class="token punctuation">(</span><span class="token class-name">MarioStateMachine3</span> stateMachine3<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3 <span class="token operator">=</span> stateMachine3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">StateEnum</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> StateEnum<span class="token punctuation">.</span>Super<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 没有变化</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CapeMario</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">.</span>Score <span class="token operator">+</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">FireMario</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">.</span>Score <span class="token operator">+</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MeetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SmallMario</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">.</span>Score <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 斗篷马里奥</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CapeMario</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IMario</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">MarioStateMachine3</span> _stateMachine3<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">CapeMario</span><span class="token punctuation">(</span><span class="token class-name">MarioStateMachine3</span> stateMachine3<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3 <span class="token operator">=</span> stateMachine3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">StateEnum</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> StateEnum<span class="token punctuation">.</span>Cape<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 无操作</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 无操作</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 无操作</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MeetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SmallMario</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">.</span>Score <span class="token operator">-</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FireMario</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IMario</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">MarioStateMachine3</span> _stateMachine3<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">FireMario</span><span class="token punctuation">(</span><span class="token class-name">MarioStateMachine3</span> stateMachine3<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3 <span class="token operator">=</span> stateMachine3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">StateEnum</span> <span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> StateEnum<span class="token punctuation">.</span>Fire<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 无操作</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 无操作</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 无操作</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MeetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SmallMario</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        _stateMachine3<span class="token punctuation">.</span><span class="token function">SetScore</span><span class="token punctuation">(</span>_stateMachine3<span class="token punctuation">.</span>Score <span class="token operator">-</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后所有状态转义和动作执行的逻辑都集中在MarioStateMachine3中</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MarioStateMachine3</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 积分</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Score <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 当前状态</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name">IMario</span> CurrentState <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">private</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">// 不再使用枚举来表示状态</span>

    <span class="token keyword">public</span> <span class="token function">MarioStateMachine3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Score <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        CurrentState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SmallMario</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到蘑菇</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>CurrentState<span class="token punctuation">.</span><span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到斗篷</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>CurrentState<span class="token punctuation">.</span><span class="token function">ObtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 得到火焰</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ObtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>CurrentState<span class="token punctuation">.</span><span class="token function">ObtainFireFlower</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 遇到怪物</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MeetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>CurrentState<span class="token punctuation">.</span><span class="token function">MeetMonster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 设置积分</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>score<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SetScore</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> score<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>Score <span class="token operator">=</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 设置状态</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentState<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SetCurrentState</span><span class="token punctuation">(</span><span class="token class-name">IMario</span> currentState<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>CurrentState <span class="token operator">=</span> currentState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用例子</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> mario3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MarioStateMachine3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mario3<span class="token punctuation">.</span><span class="token function">ObtainMushRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> score3 <span class="token operator">=</span> mario3<span class="token punctuation">.</span>Score<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> state3 <span class="token operator">=</span> mario3<span class="token punctuation">.</span>CurrentState<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;当前分数：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">score3</span><span class="token punctuation">}</span></span><span class="token string"> 当前状态是：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">state3</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mario3<span class="token punctuation">.</span><span class="token function">ObtainCape</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> score4 <span class="token operator">=</span> mario3<span class="token punctuation">.</span>Score<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> state4 <span class="token operator">=</span> mario3<span class="token punctuation">.</span>CurrentState<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;当前分数：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">score4</span><span class="token punctuation">}</span></span><span class="token string"> 当前状态是：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">state4</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，像游戏这种比较复杂的状态机，包含的状态比较多，我优先推荐使用查表法，而状 态模式会引入非常多的状态类，会导致代码比较难维护。相反，像电商下单、外卖下单这种 类型的状态机，它们的状态并不多，状态转移也比较简单，但事件触发执行的动作包含的业 务逻辑可能会比较复杂，所以，更加推荐使用状态模式来实现。</p>`,30),l=[o];function i(u,k){return s(),a("div",null,l)}const m=n(c,[["render",i],["__file","zhuangtaimoshi.html.vue"]]),v=JSON.parse('{"path":"/softwareDesign/highQualityCode/designMode/hangweixing/zhuangtaimoshi.html","title":"状态模式","lang":"zh-CN","frontmatter":{"title":"状态模式","lang":"zh-CN","date":"2023-02-26T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["软件设计"],"tag":["无"],"filename":"zhuangtaimoshi","slug":"boe54efqqu0bqu7b","docsId":"111752861","description":"概述 状态模式是状态机的一种实现形式。状态机又叫做有限状态机，三个部分组成：状态、事件、动作。事件也称为转移条件，事件触发状态的转移以及动作的执行，不过动作不是必须的，也可能只转移状态，不执行任何动作。 使用场景 状态机常用在游戏、工作流引擎等系统开发中。 状态机实现 超级马里奥游戏中，超级马里奥可以变身为多种形态，比如小马里奥(Small Mario...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/softwareDesign/highQualityCode/designMode/hangweixing/zhuangtaimoshi.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"状态模式"}],["meta",{"property":"og:description","content":"概述 状态模式是状态机的一种实现形式。状态机又叫做有限状态机，三个部分组成：状态、事件、动作。事件也称为转移条件，事件触发状态的转移以及动作的执行，不过动作不是必须的，也可能只转移状态，不执行任何动作。 使用场景 状态机常用在游戏、工作流引擎等系统开发中。 状态机实现 超级马里奥游戏中，超级马里奥可以变身为多种形态，比如小马里奥(Small Mario..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1676387449367-3e84bcd3-2891-41d8-b275-2f8e4967af0e.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-23T01:45:31.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-02-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-23T01:45:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"状态模式\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1676387449367-3e84bcd3-2891-41d8-b275-2f8e4967af0e.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1676468428590-cafcd980-93fc-4186-a5d6-79797bf4ad7c.png\\"],\\"datePublished\\":\\"2023-02-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-23T01:45:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}]},{"level":2,"title":"状态机实现","slug":"状态机实现","link":"#状态机实现","children":[{"level":3,"title":"分支逻辑法","slug":"分支逻辑法","link":"#分支逻辑法","children":[]},{"level":3,"title":"查表法","slug":"查表法","link":"#查表法","children":[]},{"level":3,"title":"状态模式","slug":"状态模式","link":"#状态模式","children":[]}]}],"git":{"createdTime":1693926838000,"updatedTime":1698025531000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":6.7,"words":2010},"filePathRelative":"softwareDesign/highQualityCode/designMode/hangweixing/zhuangtaimoshi.md","localizedDate":"2023年2月26日","excerpt":"<h2>概述</h2>\\n<p>状态模式是状态机的一种实现形式。状态机又叫做有限状态机，三个部分组成：状态、事件、动作。事件也称为转移条件，事件触发状态的转移以及动作的执行，不过动作不是必须的，也可能只转移状态，不执行任何动作。</p>\\n<h3>使用场景</h3>\\n<p>状态机常用在游戏、工作流引擎等系统开发中。</p>\\n<h2>状态机实现</h2>\\n<p>超级马里奥游戏中，超级马里奥可以变身为多种形态，比如小马里奥(Small Mario)、超级马里奥(Super Mario)、火焰马里奥(Fire Mario)、斗篷马里奥(Cape Mario)等，不同情况下会相互转换，并增加或者减少积分。</p>","autoDesc":true}');export{m as comp,v as data};
