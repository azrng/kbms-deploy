import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as e}from"./app-fQkBsvt-.js";const l="/kbms/common/1634740460576-06be3069-a363-4c62-baf9-140440dea83e.png",t={};function h(p,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h3 id="数据传输对象-dto" tabindex="-1"><a class="header-anchor" href="#数据传输对象-dto"><span>数据传输对象 (DTO)</span></a></h3><p>DTO 是“数据传输对象”。它是一个目的是传输数据的对象。根据定义，DTO 应该只包含数据，而不是逻辑或行为。**如果 DTO 包含逻辑，则它不是 DTO。**但是等等，什么是“逻辑”或“行为”？<br> 通常，逻辑和行为是指类型上的方法。在 C## 中，DTO 应该只有属性，并且这些属性应该只获取和设置数据，而不是验证数据或对其执行其他操作。</p><h4 id="属性和数据注释呢" tabindex="-1"><a class="header-anchor" href="#属性和数据注释呢"><span>属性和数据注释呢？</span></a></h4><p>将元数据添加到 DTO 以使其支持模型验证或类似目的并不罕见。这些属性不会向 DTO 本身添加任何行为，而是促进系统中其他地方的行为。因此，它们不会违反 DTO 不应包含任何行为的“规则”。</p><h4 id="viewmodel、api-模型等呢" tabindex="-1"><a class="header-anchor" href="#viewmodel、api-模型等呢"><span>ViewModel、API 模型等呢？</span></a></h4><p>DTO 一词非常含糊。它只是说一个对象只包含数据，而不是行为。它没有说明其预期用途。在许多架构中，DTO 可以充当多种角色。例如，在大多数具有支持绑定到数据类型的视图的 MVC 架构中，DTO 用于将数据传递和绑定到视图。这些 DTO 通常称为 ViewModel，理想情况下它们应该没有行为，只有按照 View 期望的格式设置数据。因此，在这种情况下，ViewModel 是一种特定类型的 DTO。但是，要小心。然后你不能得出所有 ViewModel 都是 DTO 的结论，因为在MVVM 架构中[1]ViewModel 通常包含大量行为。因此，在做出任何广泛假设之前考虑上下文非常重要。即使在 MVC 应用程序中，有时逻辑也会添加到 ViewModel 中，这样它们就不再是 DTO。<br> DTO 和 ViewModels<br> 只要可能，请根据其预期用途命名您的 DTO。命名一个类FooDTO并没有说明在应用程序的体系结构中应该如何或在何处使用该类型。相反，更喜欢像FooViewModel.</p><h4 id="c-中的示例-dto" tabindex="-1"><a class="header-anchor" href="#c-中的示例-dto"><span>C## 中的示例 DTO</span></a></h4><p>下面是 C## 中的示例 DTO 对象：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ProductViewModel</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> ProductId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> Description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> ImageUrl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> decimal</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> UnitPrice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="封装和数据传输对象" tabindex="-1"><a class="header-anchor" href="#封装和数据传输对象"><span>封装和数据传输对象</span></a></h4><p>封装是面向对象设计的重要原则。但它不适用于 DTO。封装用于防止类的协作者过于依赖有关类_如何_执行其操作或存储其数据的特定实现细节。由于 DTO 没有操作或行为，并且应该没有隐藏状态，因此它们不需要封装。不要通过使用私有 setter 或试图让你的 DTO 表现得像不可变的值对象，从而使你的生活变得更艰难。您的 DTO 应该易于创建、易于编写和易于阅读。他们应该支持序列化而不需要任何自定义工作来支持它。</p><h4 id="字段或属性" tabindex="-1"><a class="header-anchor" href="#字段或属性"><span>字段或属性</span></a></h4><p>既然 DTO 不关心封装，为什么要使用属性呢？为什么不只使用字段？您可以使用任何一种，但某些序列化框架仅适用于属性。我通常使用属性，因为这是 C## 中的约定，但是如果您更喜欢公共字段或有为什么它们更可取的设计原因，您当然可以使用它们。无论您选择哪种方式，我都会尝试在您的应用程序中使用字段或属性时保持一致。有利弊的一些讨论在这里[3]。</p><h4 id="不变性和记录类型" tabindex="-1"><a class="header-anchor" href="#不变性和记录类型"><span>不变性和记录类型</span></a></h4><p>不变性在软件开发中有很多好处，并且在 DTO 中也是一个有用的特性。Jimmy Bogard 写过关于尝试在 DTO 中实现不变性的文章[4]，而Mark Seeman[5]在对该文章的评论中（以及在上面的堆栈溢出问题中）采用了相反的方法。就我个人而言，我通常不会将 DTO 构建为不可变的，正如您从上面显示的示例中看到的那样。不过，这可能会随着C## 9 及其引入的记录类型而改变[6]。顺便说一下，您可能会看到的另一个首字母缩写词是数据传输记录或 DTR。这是使用 C## 9 定义 DTR 的一种方法：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> record</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ProductDTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>当使用记录类型和上述位置声明时，会为您生成一个构造函数，其顺序与声明相同。因此，您将使用以下语法创建此 DTR：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dto</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ProductDTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;devBetter Membership&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;A one-year subscription to devBetter.com&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者，您可以以更传统的方式定义属性并在构造函数中设置它们。另一个新特性是 init-only 属性，它支持在创建时初始化，但在其他方面是只读的，保持记录不可变。一个例子：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> record</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> ProductDTO</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> Id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// usage</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> dto</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> new </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ProductDTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;some name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C## 记录类型在使用位置声明时无需任何特殊努力即可支持序列化。如果您创建自己的自定义构造函数，则可能需要向序列化程序提供一些提示。随着 C## 9、.NET 5 和记录类型越来越流行，我希望能经常将它们用于 DTR。</p><h3 id="普通旧-clr-对象或普通旧-c-对象-poco" tabindex="-1"><a class="header-anchor" href="#普通旧-clr-对象或普通旧-c-对象-poco"><span>普通旧 CLR 对象或普通旧 C## 对象 (POCO)</span></a></h3><p>一个普通的旧 CLR/C## 对象是一个 POCO。Java 有普通的旧 Java 对象，或 POJO。你真的可以将这些统称为“Plain Old Objects”，但我猜有人不喜欢产生的首字母缩略词。那么，一个对象“老旧”是什么意思呢？基本上，它不依赖于特定的框架或库来运行。一个普通的旧对象可以在您的应用程序或测试中的任何地方实例化，并且不需要涉及特定的数据库或第三方框架来运行。<br> 通过展示反例来演示 POCO 是最简单的。以下类依赖于一些引用数据库的静态方法，这使得该类完全依赖于数据库的存在才能发挥作用。它还继承自（组成的）第三方持久性框架中定义的类型。</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Product</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">DataObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Product</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Product</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    Id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    InitializeFromDatabase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> InitializeFromDatabase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    DataHelpers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">LoadFromDatabase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> Id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // other properties and methods</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给定这个类定义，假设您想对 上的某个方法进行单元测试Product。你编写测试，你做的第一件事就是实例化一个新的实例，Product这样你就可以调用它的方法。并且您的测试立即失败，因为您尚未为DataHelpers.LoadFromDatabase要使用的方法配置连接字符串。这是Active Record 模式的[7]一个例子，它可以使单元测试变得更加困难。此类不是Persistence Ignorant (PI)，[8]因为它的持久性直接融入到类本身中，并且该类需要从与持久性相关的基类继承。POCO 的一个特点是它们往往对持久性一无所知，或者至少比 Active Record 等替代方法更是如此。</p><h4 id="一个示例-poco" tabindex="-1"><a class="header-anchor" href="#一个示例-poco"><span>一个示例 POCO</span></a></h4><p>下面是一个产品的普通旧 C## 对象示例。</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Product</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Product</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    Id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  private</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Product</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // required for EF</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#4078F2;--shiki-dark:#ABB2BF;"> Id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // other properties and methods</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个Product类是一个 POCO，因为它不依赖第三方的行为框架，尤其是持久化行为。它不需要基类，尤其是另一个库中的基类。它与静态助手没有任何紧密耦合。它可以在任何地方轻松实例化。它比前面的示例_更_不了解持久性，但它并非_完全_不了解持久性，因为它有一个无用的私有构造函数声明。正如您从评论中看到的那样，私有无参数构造函数之所以存在，是因为实体框架在从持久性读取类时需要它来实例化类。</p><p>为了论证起见，假设这两个Product类都包含除了显示的构造函数和属性之外的具有行为的方法。这些可以在应用程序中用作DDD 实体[9]，对系统内产品的状态和行为进行建模。</p><h3 id="poco-和-dto" tabindex="-1"><a class="header-anchor" href="#poco-和-dto"><span>POCO 和 DTO</span></a></h3><p>好的，所以我们已经看到 DTO 只是一个数据传输对象，而 POCO 是一个普通的旧 C#（或 CLR）对象。但是它们之间的关系是什么，为什么开发人员经常混淆这两个术语？除了首字母缩略词的相似性之外，最大的因素可能是所有 DTO 都是（或应该是）POCO。<br> 请记住，DTO 的唯一目的是尽可能简单地传输数据。它们应该易于创建、阅读和编写。它们对第三方框架中定义的特殊基类的任何依赖或将它们与某些行为紧密耦合的静态调用都会破坏使类成为 DTO 的规则。为了成为 DTO，类必须是 POCO。所有 DTO 都是 POCO。<br><img src="`+l+'" alt="image.png" loading="lazy"></p><p>DTO 和 POCO 维恩图</p><p>如果反过来也成立，那么我们可以说这两个术语是等价的。但我们知道事实并非如此。在前面的代码示例中，Product使用 Entity Framework 的实体具有私有的 setter 和行为，使其无法成为 DTO。但正如我们所见，它是 POCO 的一个很好的例子。因此，虽然所有 DTO 都是 POCO，但并非所有 POCO 都是 DTO。</p>',34)]))}const r=s(t,[["render",h],["__file","dtohepoco.html.vue"]]),A=JSON.parse('{"path":"/dotnet/csharp/dtohepoco.html","title":"DTO和POCO","lang":"zh-CN","frontmatter":{"title":"DTO和POCO","lang":"zh-CN","date":"2023-10-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["csharp"],"tag":["无"],"filename":"dtohepoco","slug":"ugpz5n","docsId":"55661985","description":"数据传输对象 (DTO) DTO 是“数据传输对象”。它是一个目的是传输数据的对象。根据定义，DTO 应该只包含数据，而不是逻辑或行为。**如果 DTO 包含逻辑，则它不是 DTO。**但是等等，什么是“逻辑”或“行为”？ 通常，逻辑和行为是指类型上的方法。在 C## 中，DTO 应该只有属性，并且这些属性应该只获取和设置数据，而不是验证数据或对其执行...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/csharp/dtohepoco.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"DTO和POCO"}],["meta",{"property":"og:description","content":"数据传输对象 (DTO) DTO 是“数据传输对象”。它是一个目的是传输数据的对象。根据定义，DTO 应该只包含数据，而不是逻辑或行为。**如果 DTO 包含逻辑，则它不是 DTO。**但是等等，什么是“逻辑”或“行为”？ 通常，逻辑和行为是指类型上的方法。在 C## 中，DTO 应该只有属性，并且这些属性应该只获取和设置数据，而不是验证数据或对其执行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1634740460576-06be3069-a363-4c62-baf9-140440dea83e.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T14:50:44.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T14:50:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DTO和POCO\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1634740460576-06be3069-a363-4c62-baf9-140440dea83e.png\\"],\\"datePublished\\":\\"2023-10-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-17T14:50:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":3,"title":"数据传输对象 (DTO)","slug":"数据传输对象-dto","link":"#数据传输对象-dto","children":[{"level":4,"title":"属性和数据注释呢？","slug":"属性和数据注释呢","link":"#属性和数据注释呢","children":[]},{"level":4,"title":"ViewModel、API 模型等呢？","slug":"viewmodel、api-模型等呢","link":"#viewmodel、api-模型等呢","children":[]},{"level":4,"title":"C## 中的示例 DTO","slug":"c-中的示例-dto","link":"#c-中的示例-dto","children":[]},{"level":4,"title":"封装和数据传输对象","slug":"封装和数据传输对象","link":"#封装和数据传输对象","children":[]},{"level":4,"title":"字段或属性","slug":"字段或属性","link":"#字段或属性","children":[]},{"level":4,"title":"不变性和记录类型","slug":"不变性和记录类型","link":"#不变性和记录类型","children":[]}]},{"level":3,"title":"普通旧 CLR 对象或普通旧 C## 对象 (POCO)","slug":"普通旧-clr-对象或普通旧-c-对象-poco","link":"#普通旧-clr-对象或普通旧-c-对象-poco","children":[{"level":4,"title":"一个示例 POCO","slug":"一个示例-poco","link":"#一个示例-poco","children":[]}]},{"level":3,"title":"POCO 和 DTO","slug":"poco-和-dto","link":"#poco-和-dto","children":[]}],"git":{"createdTime":1700232644000,"updatedTime":1700232644000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":8.08,"words":2423},"filePathRelative":"dotnet/csharp/dtohepoco.md","localizedDate":"2023年10月22日","excerpt":"<h3>数据传输对象 (DTO)</h3>\\n<p>DTO 是“数据传输对象”。它是一个目的是传输数据的对象。根据定义，DTO 应该只包含数据，而不是逻辑或行为。**如果 DTO 包含逻辑，则它不是 DTO。**但是等等，什么是“逻辑”或“行为”？<br>\\n通常，逻辑和行为是指类型上的方法。在 C## 中，DTO 应该只有属性，并且这些属性应该只获取和设置数据，而不是验证数据或对其执行其他操作。</p>\\n<h4>属性和数据注释呢？</h4>\\n<p>将元数据添加到 DTO 以使其支持模型验证或类似目的并不罕见。这些属性不会向 DTO 本身添加任何行为，而是促进系统中其他地方的行为。因此，它们不会违反 DTO 不应包含任何行为的“规则”。</p>","autoDesc":true}');export{r as comp,A as data};