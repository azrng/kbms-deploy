import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,b as a}from"./app-Bw62I61B.js";const t={},i=a(`<h2 id="代码隐藏" tabindex="-1"><a class="header-anchor" href="#代码隐藏"><span>代码隐藏</span></a></h2><p>在页面包含复杂的逻辑时候，可以添加一个该页面文件名的cs文件类来单独存储应用的逻辑，这个方法叫做代码隐藏。</p><p>页面初始化后触发的事件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>protected override async Task <span class="token function-name function">OnInitializedAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">\\</span><span class="token punctuation">\\</span> Call the <span class="token function">service</span> here
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理事件" tabindex="-1"><a class="header-anchor" href="#处理事件"><span>处理事件</span></a></h2><p>按钮事件 点击一次数量+1</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>@page <span class="token string">&quot;/counter&quot;</span>

<span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Counter<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token class-name">Current</span> count<span class="token punctuation">:</span> @currentCount<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn-primary&quot;</span> @onclick<span class="token operator">=</span><span class="token string">&quot;IncrementCount&quot;</span><span class="token operator">&gt;</span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

@code <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> currentCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">IncrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        currentCount<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法可以接收参数EventArgs ，比如想实现按住ctrl的时候并点击，这个时候写法应该是</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>@page <span class="token string">&quot;/counter&quot;</span>

<span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Counter<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token class-name">Current</span> count<span class="token punctuation">:</span> @currentCount<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn-primary&quot;</span> @onclick<span class="token operator">=</span><span class="token string">&quot;IncrementCount&quot;</span><span class="token operator">&gt;</span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>


@code <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> currentCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">IncrementCount</span><span class="token punctuation">(</span><span class="token class-name">MouseEventArgs</span> e<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>CtrlKey<span class="token punctuation">)</span> <span class="token comment">// Ctrl key pressed as well</span>
        <span class="token punctuation">{</span>
            currentCount <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            currentCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将焦点设置为dom元素" tabindex="-1"><a class="header-anchor" href="#将焦点设置为dom元素"><span>将焦点设置为DOM元素</span></a></h2><p>在下面的示例中，<code>&lt;button&gt;</code> 元素的 <code>@onclick</code> 事件处理程序将焦点设置到 <code>&lt;input&gt;</code> 元素。 input 元素的 <code>@onfocus</code> 事件处理程序在元素获得焦点时显示消息“已接收到焦点”。 input 元素是通过代码中的 <code>InputField</code> 变量引用的</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;button class=&quot;btn btn-primary&quot; @onclick=&quot;ChangeFocus&quot;&gt;Click me to change focus&lt;/button&gt;
&lt;input @ref=InputField @onfocus=&quot;HandleFocus&quot; value=&quot;@data&quot;/&gt;

@code {
    private ElementReference InputField;
    private string data;

    private async Task ChangeFocus()
    {
        await InputField.FocusAsync();
    }

    private async Task HandleFocus()
    {
        data = &quot;Received focus&quot;;
    }	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内联事件处理程序" tabindex="-1"><a class="header-anchor" href="#内联事件处理程序"><span>内联事件处理程序</span></a></h2><p>如果你有一个不需要在页面或组件中的其他位置重用的简单事件处理程序，则 Lambda 表达式非常有用</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>@page <span class="token string">&quot;/counter&quot;</span>

<span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Counter<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token class-name">Current</span> count<span class="token punctuation">:</span> @currentCount<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn-primary&quot;</span> @onclick<span class="token operator">=</span><span class="token string">&quot;() =&gt; currentCount++&quot;</span><span class="token operator">&gt;</span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

@code <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> currentCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如需为事件处理方法提供其他参数，此方法也很有用。 在下面的示例中，方法 <code>HandleClick</code> 以与普通单击事件处理程序相同的方式采用 <code>MouseEventArgs</code> 参数，但它也接受字符串参数。 该方法照常处理单击事件，但还会在用户按下 Ctrl 键时显示消息。 Lambda 表达式调用 <code>HandleCLick</code> 方法，并传入 <code>MouseEventArgs</code> 参数 (<code>mouseEvent</code>) 和字符串</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>@page <span class="token string">&quot;/counter&quot;</span>
@inject IJSRuntime JS

<span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Counter<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token class-name">p</span> id<span class="token operator">=</span><span class="token string">&quot;currentCount&quot;</span><span class="token operator">&gt;</span><span class="token class-name">Current</span> count<span class="token punctuation">:</span> @currentCount<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn-primary&quot;</span> @onclick<span class="token operator">=</span>&#39;mouseEvent <span class="token operator">=&gt;</span> <span class="token function">HandleClick</span><span class="token punctuation">(</span>mouseEvent<span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span>&#39;<span class="token operator">&gt;</span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

@code <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> currentCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">HandleClick</span><span class="token punctuation">(</span><span class="token class-name">MouseEventArgs</span> e<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> msg<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>CtrlKey<span class="token punctuation">)</span> <span class="token comment">// Ctrl key pressed as well</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">await</span> JS<span class="token punctuation">.</span><span class="token function">InvokeVoidAsync</span><span class="token punctuation">(</span><span class="token string">&quot;alert&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            currentCount <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            currentCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="替代事件的默认dom操作" tabindex="-1"><a class="header-anchor" href="#替代事件的默认dom操作"><span>替代事件的默认Dom操作</span></a></h2><p>多个 DOM 事件具有在事件发生时运行的默认操作，而无论是否有可用于该事件的事件处理程序。 例如，input 元素的 <code>@onkeypress</code> 事件始终显示与用户按下的键对应的字符，并处理按键操作。 在示例中，<code>@onkeypress</code> 事件用于将用户的输入转换为大写。 此外，如果用户键入 <code>@</code> 字符，事件处理程序将显示警报：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>@data</span> <span class="token attr-name">@onkeypress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ProcessKeyPress<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

@code {
    private string data;

    private async Task ProcessKeyPress(KeyboardEventArgs e)
    {
        if (e.Key == &quot;@&quot;)
        {
            await JS.InvokeVoidAsync(&quot;alert&quot;, &quot;You pressed @&quot;);
        }
        else
        {
            data += e.Key.ToUpper();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要禁止该字符出现在输入框中，可以使用事件的 <code>preventDefault</code> 属性替代默认操作，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;input value=@data @onkeypress=&quot;ProcessKeyPress&quot; @onkeypress:preventDefault /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="阻止冒泡" tabindex="-1"><a class="header-anchor" href="#阻止冒泡"><span>阻止冒泡</span></a></h2><p>DOM 中子元素中的某些事件可以触发其父元素中的事件。 在下面的示例中，<code>&lt;div&gt;</code> 元素包含 <code>@onclick</code> 事件处理程序。 div 中的 button 有其自己的 <code>@onclick</code> 事件处理程序。 此外，div 包含 input 元素：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;div @onclick=&quot;HandleDivClick&quot;&gt;
    &lt;button class=&quot;btn btn-primary&quot; @onclick=&quot;IncrementCount&quot;&gt;Click me&lt;/button&gt;
    &lt;input value=@data @onkeypress=&quot;ProcessKeyPress&quot; @onkeypress:preventDefault /&gt;
&lt;/div&gt;

@code {
    private async Task HandleDivClick()
    {
        await JS.InvokeVoidAsync(&quot;alert&quot;, &quot;Div click&quot;);
    }

    private async Task ProcessKeyPress(KeyboardEventArgs e)
    {
        // Omitted for brevity
    }

    private int currentCount = 0;

    private void IncrementCount(MouseEventArgs e)
    {
        // Omitted for brevity
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当应用运行时，如果用户在 div 元素占据的区域中单击了任何元素（或空白区域），<code>HandleDivClick</code> 方法将运行并显示一条消息。 如果用户选择了 <code>Click me</code> 按钮，<code>IncrementCount</code> 方法将运行，然后 <code>HandleDivClick</code> 运行；<code>@onclick</code> 事件沿 DOM 树向上传播。 如果 div 是另一个也处理 <code>@onclick</code> 事件的元素的一部分，那么该事件处理程序也将运行到 DOM 树的根部等。 可以使用事件的 <code>stopPropagation</code> 属性来减少此类向上激增的事件，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;div @onclick=&quot;HandleDivClick&quot;&gt;
    &lt;button class=&quot;btn btn-primary&quot; @onclick=&quot;IncrementCount&quot; @onclick:stopPropagation&gt;Click me&lt;/button&gt;
    &lt;!-- Omitted for brevity --&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eventcallback-处理跨组件的事件" tabindex="-1"><a class="header-anchor" href="#eventcallback-处理跨组件的事件"><span>EventCallback 处理跨组件的事件</span></a></h2><p>一个 Blazor 页面可包含一个或多个 Blazor 组件，并且组件可以嵌套在父子关系中。 子组件中的事件可使用 <code>EventCallback</code> 触发父组件中的事件处理程序方法。 回调将引用父组件中的方法。 子组件可以通过调用回调来运行该方法。 此机制类似于使用 <code>delegate</code> 来引用 C# 应用程序中的方法。</p><p>回调可采用单个参数。 <code>EventCallback</code> 是泛型类型。 类型形参指定传递给回调的实参类型。</p><p>例如，请考虑以下情形。 你想创建一个名为 <code>TextDisplay</code> 的组件，用户可通过该组件输入一个输入字符串并以某种方式转换该字符串；你可能想要将该字符串转换为大写、小写、大小写混合、筛选其中的字符或执行某种其他类型的转换。 但是，当你为 <code>TextDisplay</code> 组件编写代码时，并不知道转换过程，而是希望将此操作推迟到另一个组件中。 以下代码显示了 <code>TextDisplay</code> 组件。 它以 input 元素的形式提供输入字符串，使用户能够输入文本值。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@* TextDisplay component *@
@using WebApplication.Data;

&lt;p&gt;Enter text:&lt;/p&gt;
&lt;input @onkeypress=&quot;HandleKeyPress&quot; value=&quot;@data&quot; /&gt;

@code {
    [Parameter]
    public EventCallback&lt;KeyTransformation&gt; OnKeyPressCallback { get; set; }

    private string data;

    private async Task HandleKeyPress(KeyboardEventArgs e)
    {
        KeyTransformation t = new KeyTransformation() { Key = e.Key };
        await OnKeyPressCallback.InvokeAsync(t);
        data += t.TransformedKey;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>TextDisplay</code> 组件使用名为 <code>OnKeyPressCallback</code> 的 <code>EventCallback</code> 对象。 <code>HandleKeypress</code> 方法中的代码调用回调。 每当按下某个键时，<code>@onkeypress</code> 事件处理程序都会运行并调用 <code>HandleKeypress</code> 方法。 <code>HandleKeypress</code> 方法使用用户按下的键创建一个 <code>KeyTransformation</code> 对象，并将该对象作为参数传递给回调。 <code>KeyTransformation</code> 类型是一个包含两个字段的简单类：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>namespace WebApplication.Data
{
    public class KeyTransformation
    {
        public string Key { get; set; }
        public string TransformedKey { get; set; }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>key</code> 字段包含用户输入的值，而 <code>TransformedKey</code> 字段将保存被处理后的键的转换值。</p><p>在此示例中，<code>EventCallback</code> 对象是一个组件参数，该参数的值是在创建组件时提供的。 此操作由名为 <code>TextTransformer</code> 的另一个组件执行：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@page &quot;/texttransformer&quot;
@using WebApplication.Data;

&lt;h1&gt;Text Transformer - Parent&lt;/h1&gt;

&lt;TextDisplay OnKeypressCallback=&quot;@TransformText&quot; /&gt;

@code {
    private void TransformText(KeyTransformation k)
    {
        k.TransformedKey = k.Key.ToUpper();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>TextTransformer</code> 组件是一个用于创建 <code>TextDisplay</code> 组件实例的 Blazor 页面。 它使用对页面代码部分中的 <code>TransformText</code> 方法的引用填充 <code>OnKeypressCallback</code> 参数。 <code>TransformText</code> 方法将提供的 <code>KeyTransformation</code> 对象作为其参数，并用转换为大写的 <code>Key</code> 属性中的值来填充 <code>TransformedKey</code> 属性。 下图说明了当用户在 <code>TextTransformer</code> 页面显示的 <code>TextDisplay</code> 组件的 <code>&lt;input&gt; </code>字段中输入值时的控制流</p><p>此方法的优点在于，可以将 <code>TextDisplay</code> 组件用于为 <code>OnKeypressCallback</code> 参数提供回调的任何页面。 显示和处理之间完全分离。 可以为与 <code>TextDisplay</code> 组件中的 <code>EventCallback</code> 参数的签名匹配的任何其他回调切换 <code>TransformText</code> 方法。</p><p>如果使用适当的 <code>EventArgs</code> 参数键入回调，则可以将回调直接连接到事件处理程序，而无需使用中间方法。 例如，子组件可能会引用一个回调，该回调可以处理 <code>@onclick</code> 等鼠标事件，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;button @onclick=&quot;OnClickCallback&quot;&gt;
    Click me!
&lt;/button&gt;

@code {
    [Parameter]
    public EventCallback&lt;MouseEventArgs&gt; OnClickCallback { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),l=[i];function o(c,p){return s(),e("div",null,l)}const u=n(t,[["render",o],["__file","event.html.vue"]]),v=JSON.parse('{"path":"/web/blazor/baseOperator/event.html","title":"事件","lang":"zh-CN","frontmatter":{"title":"事件","lang":"zh-CN","date":"2023-02-02T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":false,"category":["dotNET"],"tag":["无"],"filename":"shijian","slug":"dzmxhl","docsId":"67651117","description":"代码隐藏 在页面包含复杂的逻辑时候，可以添加一个该页面文件名的cs文件类来单独存储应用的逻辑，这个方法叫做代码隐藏。 页面初始化后触发的事件 处理事件 按钮事件 点击一次数量+1 方法可以接收参数EventArgs ，比如想实现按住ctrl的时候并点击，这个时候写法应该是 将焦点设置为DOM元素 在下面的示例中，<button> 元素的 @onclic...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/web/blazor/baseOperator/event.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"事件"}],["meta",{"property":"og:description","content":"代码隐藏 在页面包含复杂的逻辑时候，可以添加一个该页面文件名的cs文件类来单独存储应用的逻辑，这个方法叫做代码隐藏。 页面初始化后触发的事件 处理事件 按钮事件 点击一次数量+1 方法可以接收参数EventArgs ，比如想实现按住ctrl的时候并点击，这个时候写法应该是 将焦点设置为DOM元素 在下面的示例中，<button> 元素的 @onclic..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-14T12:02:46.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-02-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-14T12:02:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-14T12:02:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"代码隐藏","slug":"代码隐藏","link":"#代码隐藏","children":[]},{"level":2,"title":"处理事件","slug":"处理事件","link":"#处理事件","children":[]},{"level":2,"title":"将焦点设置为DOM元素","slug":"将焦点设置为dom元素","link":"#将焦点设置为dom元素","children":[]},{"level":2,"title":"内联事件处理程序","slug":"内联事件处理程序","link":"#内联事件处理程序","children":[]},{"level":2,"title":"替代事件的默认Dom操作","slug":"替代事件的默认dom操作","link":"#替代事件的默认dom操作","children":[]},{"level":2,"title":"阻止冒泡","slug":"阻止冒泡","link":"#阻止冒泡","children":[]},{"level":2,"title":"EventCallback 处理跨组件的事件","slug":"eventcallback-处理跨组件的事件","link":"#eventcallback-处理跨组件的事件","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1702555366000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1},{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":6.29,"words":1888},"filePathRelative":"web/blazor/baseOperator/event.md","localizedDate":"2023年2月2日","excerpt":"<h2>代码隐藏</h2>\\n<p>在页面包含复杂的逻辑时候，可以添加一个该页面文件名的cs文件类来单独存储应用的逻辑，这个方法叫做代码隐藏。</p>\\n<p>页面初始化后触发的事件</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>protected override async Task <span class=\\"token function-name function\\">OnInitializedAsync</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token punctuation\\">\\\\</span><span class=\\"token punctuation\\">\\\\</span> Call the <span class=\\"token function\\">service</span> here\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{u as comp,v as data};
