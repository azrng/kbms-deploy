import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,d as l}from"./app-D8HBJYTp.js";const d={},s=l(`<h2 id="editform" tabindex="-1"><a class="header-anchor" href="#editform"><span>EditForm</span></a></h2><p><code>EditForm</code> 是一个 Blazor 组件，它在 Blazor 页面上履行 HTML 表单这一角色。 EditForm 和 HTML 表单之间的主要区别是：</p><ul><li><strong>数据绑定</strong>：可将对象与 EditForm 关联。 EditForm 的作用类似于用于数据输入和显示的对象视图。</li><li><strong>验证</strong>：<code>EditForm</code> 提供了广泛且可扩展的验证功能。 可以向指定验证规则的 <code>EditForm</code> 中的元素添加属性。 <code>EditForm</code> 将自动应用这些规则。</li><li><strong>表单提交</strong>：HTML 表单将在提交后向表单处理程序发送一个发布请求。 该表单处理程序应会执行提交过程，然后显示任何结果。 <code>EditForm</code> 遵循 Blazor 事件模型；请指定捕获 <code>OnSubmit</code> 事件的 C# 事件处理程序。 事件处理程序执行提交逻辑。</li><li><strong>输入元素</strong>：HTML 表单使用 <code>&lt;input&gt;</code> 控件收集用户输入，并使用 <code>submit</code> 按钮发布表单以供处理。 <code>EditForm</code> 可以使用这些相同的元素，但 Blazor 提供了具有其他功能（例如内置验证和数据绑定）的输入组件库。</li></ul><h3 id="输入控件" tabindex="-1"><a class="header-anchor" href="#输入控件"><span>输入控件</span></a></h3><p>HTML <code>&lt;form&gt;</code> 元素支持 <code>&lt;input&gt;</code> 元素，以便用户能够输入数据。 <code>&lt;input&gt;</code> 有一个 <code>type</code> 属性，用于指定输入的类型及其显示方式（作为数字、文本框、单选按钮、复选框、按钮等）。</p><p>Blazor 拥有自己的一组组件，旨在专用于 <code>&lt;EditForm&gt;</code> 元素并支持其他功能中的数据绑定。 下表列出了这些组件。 当 Blazor 呈现包含这些组件的页面时，它们将转换为表中列出的相应 HTML <code>&lt;input&gt;</code> 元素。 一些 Blazor 组件是通用的；类型参数由 Blazor 运行时根据绑定到元素的数据类型确定：</p><table><thead><tr><th style="text-align:left;">输入组件</th><th style="text-align:left;">呈现为 (HTML)</th></tr></thead><tbody><tr><td style="text-align:left;"><code>InputCheckbox</code></td><td style="text-align:left;"><code>&lt;input type=&quot;checkbox&quot;&gt;</code></td></tr><tr><td style="text-align:left;"><code>InputDate&lt;TValue&gt;</code></td><td style="text-align:left;"><code>&lt;input type=&quot;date&quot;&gt;</code></td></tr><tr><td style="text-align:left;"><code>InputFile</code></td><td style="text-align:left;"><code>&lt;input type=&quot;file&quot;&gt;</code></td></tr><tr><td style="text-align:left;"><code>InputNumber&lt;TValue&gt;</code></td><td style="text-align:left;"><code>&lt;input type=&quot;number&quot;&gt;</code></td></tr><tr><td style="text-align:left;"><code>InputRadio&lt;TValue&gt;</code></td><td style="text-align:left;"><code>&lt;input type=&quot;radio&quot;&gt;</code></td></tr><tr><td style="text-align:left;"><code>InputRadioGroup&lt;TValue&gt;</code></td><td style="text-align:left;">一组子单选按钮</td></tr><tr><td style="text-align:left;"><code>InputSelect&lt;TValue&gt;</code></td><td style="text-align:left;"><code>&lt;select&gt;</code></td></tr><tr><td style="text-align:left;"><code>InputText</code></td><td style="text-align:left;"><code>&lt;input&gt;</code></td></tr><tr><td style="text-align:left;"><code>InputTextArea</code></td><td style="text-align:left;"><code>&lt;textarea&gt;</code></td></tr></tbody></table><p>这些元素中的每一个都具有由 Blazor 识别的属性，例如 <code>DisplayName</code>（用于将输入元素与标签关联）和 <code>@ref</code>（可用于保存对 C# 变量中字段的引用）。 任何无法识别的非 Blazor 属性都将按原样传递给 HTML 呈现器。 这意味着可以利用 HTML 输入元素属性。 例如，可以将 <code>min</code>、<code>max</code> 和 <code>step</code> 属性添加到 <code>InputNumber</code> 组件，它们将作为所呈现的 <code>&lt;input type=&quot;number&quot;&gt;</code> 元素一部分正常运行。 比如可以将 <code>TemperatureC</code> 输入域指定为：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EditForm</span> <span class="token attr-name">Model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>@currentForecast</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name">@bind-Value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>currentForecast.TemperatureC</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>-100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>InputNumber</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EditForm</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="窗体提交" tabindex="-1"><a class="header-anchor" href="#窗体提交"><span>窗体提交</span></a></h3><p>Blazor 支持两种类型的验证：声明性和编程性。 声明性验证规则在客户端上和浏览器中运行。 对于在数据传输到服务器之前执行基本的客户端验证，它们会非常有用。 对于处理声明性验证无法实现的复杂场景，服务器端验证非常有用，例如针对来自其他源的数据交叉检查字段中的数据。 实际的应用程序应结合使用客户端验证和服务器端验证；客户端验证可捕获基本的用户输入错误，并防止将无效数据发送到服务器以进行处理等许多情况。 服务器端验证可确保用于保存数据的用户请求不会试图绕过数据验证并存储不完整或损坏的数据。</p><p><code>EditForm</code> 具有三个在提交后运行的事件：</p><ul><li><code>OnValidSubmit</code>：如果输入域成功通过其验证属性定义的验证规则，则会触发此事件。</li><li><code>OnInvalidSubmit</code>：如果表单上的任何输入域都未能通过其验证属性定义的验证，则会触发此事件。</li><li><code>OnSubmit</code>：无论所有输入域是否有效，提交 EditForm 时都会发生此事件。</li></ul><p>对于在单个输入域级别实现基本验证的 EditForm，<code>OnValidSubmit</code> 和 <code>OnInvalidSubmit</code> 事件很有用。 如果验证要求更复杂，例如将一个输入域与另一个输入域进行交叉检查以确保值的有效组合，请考虑使用 <code>OnSubmit</code> 事件。 <code>EditForm</code> 可以处理 <code>OnValidSubmit</code> 和 <code>OnInvalidSubmit</code> 事件对，也可以处理 <code>OnSubmit</code> 事件，但不能同时处理全部三个事件。 通过向 <code>EditForm</code> 添加一个 <code>Submit</code> 按钮来触发提交。 当用户选择此按钮时，将触发由 <code>EditForm</code> 指定的提交事件</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>@page &quot;/addshirt&quot;
@using BlazorSample.Model

&lt;PageTitle&gt;添加短袖&lt;/PageTitle&gt;

&lt;EditForm Model=&quot;_shirt&quot; OnSubmit=&quot;ValidateData&quot;&gt;
    &lt;div class=&quot;form-field&quot;&gt;
        &lt;label&gt;大小 :&lt;/label&gt;
        &lt;div&gt;
            &lt;InputRadioGroup Name=&quot;size&quot; @bind-Value=&quot;_shirt.Size&quot;&gt;
                @foreach (var shirtSize in Enum.GetValues(typeof(ShirtSize)))
                {
                    &lt;label&gt;
                        @shirtSize:
                        &lt;InputRadio Name=&quot;size&quot; Value=&quot;@shirtSize&quot;&gt;&lt;/InputRadio&gt;
                    &lt;/label&gt;
                }
            &lt;/InputRadioGroup&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;form-field&quot;&gt;
        &lt;label&gt;颜色 :&lt;/label&gt;
        &lt;div&gt;
            &lt;InputRadioGroup Name=&quot;color&quot; @bind-Value=&quot;_shirt.Color&quot;&gt;
                @foreach (var color in Enum.GetValues(typeof(ShirtColor)))
                {
                    &lt;label&gt;
                        @color:
                        &lt;InputRadio Name=&quot;color&quot; Value=&quot;@color&quot;&gt;&lt;/InputRadio&gt;
                    &lt;/label&gt;
                }
            &lt;/InputRadioGroup&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;form-field&quot;&gt;
        &lt;label&gt;价格 :&lt;/label&gt;
        &lt;div&gt;
            &lt;InputNumber @bind-Value=&quot;_shirt.Price&quot; min=&quot;0&quot; max=&quot;100&quot; step=&quot;5&quot;&gt;&lt;/InputNumber&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;form-field&quot;&gt;
        &lt;input type=&quot;submit&quot; class=&quot;btn btn-primary&quot;/&gt;
    &lt;/div&gt;
    &lt;p&gt;&lt;/p&gt;
    &lt;p&gt;@_message&lt;/p&gt;
&lt;/EditForm&gt;

@code {

    // 显示失败原因
    private string _message = string.Empty;

    private Shirt _shirt = new Shirt
    {
        Size = ShirtSize.Large,
        Color = ShirtColor.Blue,
        Price = 9.99m
    };

    private async Task ValidateData(EditContext editContext)
    {
        if (editContext.Model is not Shirt shirt)
        {
            _message = &quot;模型无效&quot;;
            return;
        }

        if (shirt is { Color: ShirtColor.Red, Size: ShirtSize.ExtraLarge })
        {
            _message = &quot;红色 T 恤不提供特大号&quot;;
            return;
        }

        if (shirt is { Color: ShirtColor.Blue, Size: &lt;= ShirtSize.Medium })
        {
            _message = &quot;蓝色 T 恤不提供小号或中号&quot;;
            return;
        }

        if (shirt is { Color: ShirtColor.White, Price: &gt; 50 })
        {
            _message = &quot;白色 T 恤的最高价格为 50 美元。&quot;;
            return;
        }

        // Data is valid
        // Save the data
        _message = &quot;Changes saved&quot;;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>下面的示例，只是之前的代码片段</p></div><h4 id="获取数据展示" tabindex="-1"><a class="header-anchor" href="#获取数据展示"><span>获取数据展示</span></a></h4><p>一个简单的获取数据并根据索引展示的示例</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>@page &quot;/wethers&quot;

&lt;PageTitle&gt;天气管理&lt;/PageTitle&gt;

@using BlazorSample.Data
@inject WeatherForecastService WetherService;

&lt;h1&gt;天气管理&lt;/h1&gt;

&lt;input type=&quot;number&quot; width=&quot;2&quot; min=&quot;0&quot; max=&quot;@upperIndex&quot; @onchange=&quot;ChangeForecast&quot; value=&quot;@index&quot; /&gt;

&lt;EditForm Model=&quot;@currWeatherForecast&quot;&gt;
    &lt;InputDate @bind-Value=&quot;currWeatherForecast.Date&quot;&gt;&lt;/InputDate&gt;
    &lt;InputNumber @bind-Value=currWeatherForecast.TemperatureC&gt;&lt;/InputNumber&gt;
    &lt;InputText @bind-Value=currWeatherForecast.Summary&gt;&lt;/InputText&gt;
&lt;/EditForm&gt;


@code
{
    /// &lt;summary&gt;
    /// 天气列表
    /// &lt;/summary&gt;
    private WeatherForecast[] forecasts;
    /// &lt;summary&gt;
    /// 当前天气
    /// &lt;/summary&gt;
    private WeatherForecast currWeatherForecast;
    /// &lt;summary&gt;
    /// 当前索引
    /// &lt;/summary&gt;
    private int index = 0;
    /// &lt;summary&gt;
    /// 最大索引
    /// &lt;/summary&gt;
    private int upperIndex = 0;

    protected override async Task OnInitializedAsync()
    {
        // 使用外部服务填充forecasts对象
        forecasts = await WetherService.GetForecastAsync(DateTime.Now);
        currWeatherForecast = forecasts[index];
        upperIndex = forecasts.Length - 1;
    }

    private async Task ChangeForecast(ChangeEventArgs e)
    {
        index = int.Parse(e.Value as string);
        if (index &lt;= upperIndex &amp;&amp; index &gt;= 0)
        {
            currWeatherForecast = forecasts[index];
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单选按钮" tabindex="-1"><a class="header-anchor" href="#单选按钮"><span>单选按钮</span></a></h4><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>@page &quot;/addshirt&quot;
@using BlazorSample.Model

&lt;PageTitle&gt;添加短袖&lt;/PageTitle&gt;

&lt;EditForm Model=&quot;_shirt&quot;&gt;
    &lt;div class=&quot;form-field&quot;&gt;
        &lt;label&gt;大小 :&lt;/label&gt;
        &lt;div&gt;
            &lt;InputRadioGroup Name=&quot;size&quot; @bind-Value=&quot;_shirt.Size&quot;&gt;
                @foreach (var shirtSize in Enum.GetValues(typeof(ShirtSize)))
                {
                    &lt;label&gt;
                        @shirtSize:
                        &lt;InputRadio Name=&quot;size&quot; Value=&quot;@shirtSize&quot;&gt;&lt;/InputRadio&gt;
                    &lt;/label&gt;
                }
            &lt;/InputRadioGroup&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;form-field&quot;&gt;
        &lt;label&gt;颜色 :&lt;/label&gt;
        &lt;div&gt;
            &lt;InputRadioGroup Name=&quot;color&quot; @bind-Value=&quot;_shirt.Color&quot;&gt;
                @foreach (var color in Enum.GetValues(typeof(ShirtColor)))
                {
                    &lt;label&gt;
                        @color:
                        &lt;InputRadio Name=&quot;color&quot; Value=&quot;@color&quot;&gt;&lt;/InputRadio&gt;
                    &lt;/label&gt;
                }
            &lt;/InputRadioGroup&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&quot;form-field&quot;&gt;
        &lt;label&gt;价格 :&lt;/label&gt;
        &lt;div&gt;
            &lt;InputNumber @bind-Value=&quot;_shirt.Price&quot; min=&quot;0&quot; max=&quot;100&quot; step=&quot;0.01&quot;&gt;&lt;/InputNumber&gt;
        &lt;/div&gt;
    &lt;/div&gt;

&lt;/EditForm&gt;

@code {

    private Shirt _shirt = new Shirt
    {
        Size = ShirtSize.Large,
        Color = ShirtColor.Blue,
        Price = 9.99m
    };

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模型</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
/// 短袖
/// &lt;/summary&gt;
public class Shirt
{
    /// &lt;summary&gt;
    /// 短袖颜色
    /// &lt;/summary&gt;
    public ShirtColor Color { get; set; }

    /// &lt;summary&gt;
    /// 短袖大小
    /// &lt;/summary&gt;
    public ShirtSize Size { get; set; }

    /// &lt;summary&gt;
    /// 价格
    /// &lt;/summary&gt;
    public decimal Price;
}

public enum ShirtColor
{
    Red, Blue, Yellow, Green, Black, White
};

public enum ShirtSize
{
    Small, Medium, Large, ExtraLarge
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="显式手动验证" tabindex="-1"><a class="header-anchor" href="#显式手动验证"><span>显式手动验证</span></a></h4><p>实现一个下单前输入地址的操作，经过地址验证后才可以下单</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>@page &quot;/checkout&quot;
@using Common.Extension

@inject OrderState OrderState;
@inject HttpClient HttpClient;
@inject NavigationManager NavigationManager;

&lt;div class=&quot;main&quot;&gt;
    &lt;EditForm Model=&quot;Order.DeliveryAddress&quot; OnSubmit=&quot;CheckSubmission&quot;&gt;
        &lt;div class=&quot;checkout-cols&quot;&gt;
            &lt;div class=&quot;checkout-order-details&quot;&gt;
                &lt;h4&gt;查看订单&lt;/h4&gt;
                &lt;OrderReview Order=&quot;Order&quot;/&gt;
            &lt;/div&gt;

            &lt;div class=&quot;checkout-delivery-address&quot;&gt;
                &lt;h4&gt;派送到...&lt;/h4&gt;
                @if (_isError)
                {
                    &lt;div class=&quot;alert alert-danger&quot;&gt;@_errorMessage&lt;/div&gt;
                }
                @* 嵌套地址编辑的组件 *@
                &lt;AddressEditor Address=&quot;Order.DeliveryAddress&quot;/&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;button class=&quot;checkout-button btn btn-warning&quot; disabled=&quot;@_isSubmitting&quot;&gt;
            下单
        &lt;/button&gt;

    &lt;/EditForm&gt;
&lt;/div&gt;

@code
{
    Order Order =&gt; OrderState.Order;

    // 是否提交
    bool _isSubmitting;

    // 是否异常
    bool _isError;

    // 异常信息
    string _errorMessage;

    // 验证通过后下单
    private async Task PlackOrder()
    {
        var response = await HttpClient.PostAsJsonAsync(NavigationManager.BaseUri + &quot;orders&quot;, OrderState.Order);
        var newOrderId = await response.Content.ReadFromJsonAsync&lt;int&gt;();
        OrderState.ResetOrder();
        NavigationManager.NavigateTo($&quot;/myOrders/{newOrderId}&quot;);
    }

    private async Task CheckSubmission(EditContext editContext)
    {
        _isSubmitting = true;
        if (editContext.Model is not Address model)
        {
            _errorMessage = &quot;系统异常&quot;;
            _isError = true;
            _isSubmitting = false;
            return;
        }

        if (model.Name.IsNullOrWhiteSpace())
        {
            _errorMessage = &quot;地名不能为空&quot;;
            _isError = true;
            _isSubmitting = false;
            return;
        }

        if (model.Province.IsNullOrWhiteSpace())
        {
            _errorMessage = &quot;省份不能为空&quot;;
            _isError = true;
            _isSubmitting = false;
            return;
        }

        if (model.City.IsNullOrWhiteSpace())
        {
            _errorMessage = &quot;城市不能为空&quot;;
            _isError = true;
            _isSubmitting = false;
            return;
        }

        if (model.Region.IsNullOrWhiteSpace())
        {
            _errorMessage = &quot;区域不能为空&quot;;
            _isError = true;
            _isSubmitting = false;
            return;
        }

        if (model.PostalCode.IsNullOrWhiteSpace())
        {
            _errorMessage = &quot;邮政编码不能为空&quot;;
            _isError = true;
            _isSubmitting = false;
            return;
        }

        if (!_isError)
        {
            await PlackOrder();
        }

        _isSubmitting = false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该页面包含了两个Razor组件 ，其中OrderReview用不到不予说明，组件AddressEditor内容为</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>&lt;div class=&quot;form-field&quot;&gt;
    &lt;label&gt;地名:&lt;/label&gt;
    &lt;div&gt;
        &lt;InputText @bind-Value=&quot;Address.Name&quot;/&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-field&quot;&gt;
    &lt;label&gt;省份 :&lt;/label&gt;
    &lt;div&gt;
        &lt;InputText @bind-Value=&quot;Address.Province&quot;/&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-field&quot;&gt;
    &lt;label&gt;市:&lt;/label&gt;
    &lt;div&gt;
        &lt;InputText @bind-Value=&quot;Address.City&quot;/&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-field&quot;&gt;
    &lt;label&gt;地区:&lt;/label&gt;
    &lt;div&gt;
        &lt;InputText @bind-Value=&quot;Address.Region&quot;/&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-field&quot;&gt;
    &lt;label&gt;邮政编码:&lt;/label&gt;
    &lt;div&gt;
        &lt;InputText @bind-Value=&quot;Address.PostalCode&quot;/&gt;
    &lt;/div&gt;
&lt;/div&gt;

@code
{
    [Parameter] public Address Address { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面中触发表单提交后触发方法CheckSubmission，在校验不通过的时候显示错误信息且不下单，校验通过后触发PlackOrder方法进行下单</p><p>对了，该页面包含下面模型</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class Order
{
    /// &lt;summary&gt;
    /// 订单id
    /// &lt;/summary&gt;
    public int OrderId { get; set; }

    /// &lt;summary&gt;
    /// 用户id
    /// &lt;/summary&gt;
    public string UserId { get; set; }

    /// &lt;summary&gt;
    /// 创建事件
    /// &lt;/summary&gt;
    public DateTime CreatedTime { get; set; }

    /// &lt;summary&gt;
    /// 下单地址
    /// &lt;/summary&gt;
    public Address DeliveryAddress { get; set; } = new Address();

    /// &lt;summary&gt;
    /// 总价格
    /// &lt;/summary&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public decimal GetTotalPrice() =&gt; Pizzas.Sum(p =&gt; p.GetTotalPrice());

    /// &lt;summary&gt;
    /// 格式化的价格
    /// &lt;/summary&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    public string GetFormattedTotalPrice() =&gt; GetTotalPrice().ToString(&quot;0.00&quot;);
}


public class Address
{
    /// &lt;summary&gt;
    /// 地址id
    /// &lt;/summary&gt;
    public int Id { get; set; }

    /// &lt;summary&gt;
    /// 地名
    /// &lt;/summary&gt;
    public string Name { get; set; }

    /// &lt;summary&gt;
    /// 省
    /// &lt;/summary&gt;
    public string Province { get; set; }

    /// &lt;summary&gt;
    /// 市
    /// &lt;/summary&gt;
    public string City { get; set; }

    /// &lt;summary&gt;
    /// 区域
    /// &lt;/summary&gt;
    public string Region { get; set; }

    /// &lt;summary&gt;
    /// 邮政编码
    /// &lt;/summary&gt;
    public string PostalCode { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐式验证" tabindex="-1"><a class="header-anchor" href="#隐式验证"><span>隐式验证</span></a></h4><p>隐式验证用户的输入，而无需编写验证代码，首先创建对应模型类并使用模型验证(内置无法满足需求还可以自定义验证特性)</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
/// 添加披萨请求类
/// &lt;/summary&gt;
public class AddPizzaRequest
{
    [Required(ErrorMessage = &quot;名称不能为空&quot;)] 
    public string Name { get; set; }

    public string Description { get; set; }

    [Required]
    [Range(10.00, 25.00, ErrorMessage = &quot;价格必须大于10小于25&quot;)]
    public decimal Price { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建页面，且向表单添加验证组件，要将表单配置为使用数据注释验证，请首先确保已将输入控件绑定到模型属性。 然后，在 <code>EditForm</code> 组件内的某个位置添加 DataAnnotationsValidator 组件。 若要显示验证生成的消息，请使用 ValidationSummary 组件，该组件显示表单中所有控件的所有验证消息。 如果想要在每个控件旁边显示验证消息，请使用多个 ValidationMessage 组件。 请记住，使用 <code>For</code> 属性将每个 ValidationMessage 控件与模型的特定属性相关联：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>@page &quot;/admin/createpizza&quot;

&lt;h1&gt;添加披萨&lt;/h1&gt;

&lt;div&gt;
    &lt;EditForm Model=&quot;@_pizza&quot; OnSubmit=&quot;@HandleSubmission&quot;&gt;
        @* 注释验证 *@
        &lt;DataAnnotationsValidator/&gt;
        @* 显示表单中所有控件验证生成的消息 *@
         @* &lt;ValidationSummary/&gt; *@

        &lt;InputText id=&quot;name&quot; @bind-Value=&quot;_pizza.Name&quot;&gt;&lt;/InputText&gt;
        &lt;ValidationMessage For=&quot;() =&gt; _pizza.Name&quot;&gt;&lt;/ValidationMessage&gt;

        &lt;InputText id=&quot;description&quot; @bind-Value=&quot;_pizza.Description&quot;&gt;&lt;/InputText&gt;

        &lt;InputNumber id=&quot;price&quot; @bind-Value=&quot;_pizza.Price&quot;&gt;&lt;/InputNumber&gt;
        &lt;ValidationMessage For=&quot;() =&gt; _pizza.Price&quot;&gt;&lt;/ValidationMessage&gt;

    &lt;/EditForm&gt;
&lt;/div&gt;

@code
{
    private AddPizzaRequest _pizza = new();

    private void HandleSubmission(EditContext context)
    {
        var dataIsValid = context.Validate();
        if (dataIsValid)
        {
            // 存储数据
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果改用 <code>OnValidSubmit</code> 和 <code>OnInvalidSubmit</code>，不使用<code>OnSubmit</code>，则不必在每个事件处理程序中检查验证状态：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>&lt;EditForm Model=&quot;@pizza&quot; OnValidSubmit=@ProcessInputData OnInvalidSubmit=@ShowFeedback&gt;

&lt;/EditForm&gt;
@code 
{
    private Pizza pizza = new();
    
    void ProcessInputData(EditContext context)
    {
        // Store valid data here
    }
    
    void ShowFeedback(EditContext context)
    {
        // Take action here to help the user correct the issues
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现一个实时内容校验的方案，如果校验不通过，那么就不能提交，校验通过后才可以点击提交按钮(模型上面标注了验证规则)，首先子组件AddressEditor内容如下</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>&lt;div class=&quot;form-field&quot;&gt;
    &lt;label&gt;地名:&lt;/label&gt;
    &lt;div&gt;
        &lt;InputText @bind-Value=&quot;Address.Name&quot;/&gt;
        &lt;ValidationMessage For=&quot;() =&gt; Address.Name&quot;/&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-field&quot;&gt;
    &lt;label&gt;省份 :&lt;/label&gt;
    &lt;div&gt;
        &lt;InputText @bind-Value=&quot;Address.Province&quot;/&gt;
        &lt;ValidationMessage For=&quot;() =&gt; Address.Province&quot;/&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-field&quot;&gt;
    &lt;label&gt;市:&lt;/label&gt;
    &lt;div&gt;
        &lt;InputText @bind-Value=&quot;Address.City&quot;/&gt;
        &lt;ValidationMessage For=&quot;() =&gt; Address.City&quot;/&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-field&quot;&gt;
    &lt;label&gt;地区:&lt;/label&gt;
    &lt;div&gt;
        &lt;InputText @bind-Value=&quot;Address.Region&quot;/&gt;
        &lt;ValidationMessage For=&quot;() =&gt; Address.Region&quot;/&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-field&quot;&gt;
    &lt;label&gt;邮政编码:&lt;/label&gt;
    &lt;div&gt;
        &lt;InputText @bind-Value=&quot;Address.PostalCode&quot;/&gt;
        &lt;ValidationMessage For=&quot;() =&gt; Address.PostalCode&quot;/&gt;
    &lt;/div&gt;
&lt;/div&gt;

@code
{
    [Parameter] public Address Address { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面内容如下</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>@page &quot;/checkout&quot;

@inject OrderState OrderState;
@inject HttpClient HttpClient;
@inject NavigationManager NavigationManager;

@* 组件不用的时候释放内容 *@
@implements IDisposable;

&lt;div class=&quot;main&quot;&gt;
    &lt;EditForm Model=&quot;Order.DeliveryAddress&quot; OnValidSubmit=&quot;PlackOrder&quot; OnInvalidSubmit=&quot;ShowError&quot;&gt;
        &lt;div class=&quot;checkout-cols&quot;&gt;
            &lt;div class=&quot;checkout-order-details&quot;&gt;
                &lt;h4&gt;查看订单&lt;/h4&gt;
                &lt;OrderReview Order=&quot;Order&quot;/&gt;
            &lt;/div&gt;

            &lt;div class=&quot;checkout-delivery-address&quot;&gt;
                &lt;h4&gt;派送到...&lt;/h4&gt;
                @* 嵌套地址编辑的组件 *@
                &lt;AddressEditor Address=&quot;Order.DeliveryAddress&quot;/&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;button class=&quot;checkout-button btn btn-warning&quot; disabled=&quot;@_isError&quot;&gt;
            下单
        &lt;/button&gt;

        @* 模型验证 *@
        &lt;DataAnnotationsValidator/&gt;
    &lt;/EditForm&gt;
&lt;/div&gt;

@code
{
    Order Order =&gt; OrderState.Order;

    // 是否异常
    bool _isError;

    private EditContext _editContext;

    protected override void OnInitialized()
    {
        _editContext = new EditContext(Order.DeliveryAddress);
        _editContext.OnFieldChanged += HandleFieldChanged;
    }

    // 处理字段更改
    private void HandleFieldChanged(object sender, FieldChangedEventArgs e)
    {
        _isError = !_editContext.Validate();
        StateHasChanged();
    }

    // 验证通过后下单
    private async Task PlackOrder()
    {
        var response = await HttpClient.PostAsJsonAsync(NavigationManager.BaseUri + &quot;orders&quot;, OrderState.Order);
        var newOrderId = await response.Content.ReadFromJsonAsync&lt;int&gt;();
        OrderState.ResetOrder();
        NavigationManager.NavigateTo($&quot;/myOrders/{newOrderId}&quot;);
    }

    private void ShowError()
    {
        _isError = true;
    }

    // 在不需要结账组件的时候将事件处理程序释放
    public void Dispose()
    {
        _editContext.OnFieldChanged -= HandleFieldChanged;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),t=[s];function a(r,v){return e(),n("div",null,t)}const o=i(d,[["render",a],["__file","form.html.vue"]]),m=JSON.parse('{"path":"/web/blazor/baseOperator/form.html","title":"表单","lang":"zh-CN","frontmatter":{"title":"表单","lang":"zh-CN","date":"2023-12-12T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":false,"category":["dotNET","web"],"tag":["blazor","form"],"description":"EditForm EditForm 是一个 Blazor 组件，它在 Blazor 页面上履行 HTML 表单这一角色。 EditForm 和 HTML 表单之间的主要区别是： 数据绑定：可将对象与 EditForm 关联。 EditForm 的作用类似于用于数据输入和显示的对象视图。 验证：EditForm 提供了广泛且可扩展的验证功能。 可以向指定...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/web/blazor/baseOperator/form.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"表单"}],["meta",{"property":"og:description","content":"EditForm EditForm 是一个 Blazor 组件，它在 Blazor 页面上履行 HTML 表单这一角色。 EditForm 和 HTML 表单之间的主要区别是： 数据绑定：可将对象与 EditForm 关联。 EditForm 的作用类似于用于数据输入和显示的对象视图。 验证：EditForm 提供了广泛且可扩展的验证功能。 可以向指定..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-14T12:02:46.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"blazor"}],["meta",{"property":"article:tag","content":"form"}],["meta",{"property":"article:published_time","content":"2023-12-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-14T12:02:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"表单\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-14T12:02:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"EditForm","slug":"editform","link":"#editform","children":[{"level":3,"title":"输入控件","slug":"输入控件","link":"#输入控件","children":[]},{"level":3,"title":"窗体提交","slug":"窗体提交","link":"#窗体提交","children":[]},{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[{"level":4,"title":"获取数据展示","slug":"获取数据展示","link":"#获取数据展示","children":[]},{"level":4,"title":"单选按钮","slug":"单选按钮","link":"#单选按钮","children":[]},{"level":4,"title":"显式手动验证","slug":"显式手动验证","link":"#显式手动验证","children":[]},{"level":4,"title":"隐式验证","slug":"隐式验证","link":"#隐式验证","children":[]}]}]}],"git":{"createdTime":1702394989000,"updatedTime":1702555366000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":3},{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":10.62,"words":3186},"filePathRelative":"web/blazor/baseOperator/form.md","localizedDate":"2023年12月12日","excerpt":"<h2>EditForm</h2>\\n<p><code>EditForm</code> 是一个 Blazor 组件，它在 Blazor 页面上履行 HTML 表单这一角色。 EditForm 和 HTML 表单之间的主要区别是：</p>\\n<ul>\\n<li><strong>数据绑定</strong>：可将对象与 EditForm 关联。 EditForm 的作用类似于用于数据输入和显示的对象视图。</li>\\n<li><strong>验证</strong>：<code>EditForm</code> 提供了广泛且可扩展的验证功能。 可以向指定验证规则的 <code>EditForm</code> 中的元素添加属性。 <code>EditForm</code> 将自动应用这些规则。</li>\\n<li><strong>表单提交</strong>：HTML 表单将在提交后向表单处理程序发送一个发布请求。 该表单处理程序应会执行提交过程，然后显示任何结果。 <code>EditForm</code> 遵循 Blazor 事件模型；请指定捕获 <code>OnSubmit</code> 事件的 C# 事件处理程序。 事件处理程序执行提交逻辑。</li>\\n<li><strong>输入元素</strong>：HTML 表单使用 <code>&lt;input&gt;</code> 控件收集用户输入，并使用 <code>submit</code> 按钮发布表单以供处理。 <code>EditForm</code> 可以使用这些相同的元素，但 Blazor 提供了具有其他功能（例如内置验证和数据绑定）的输入组件库。</li>\\n</ul>","autoDesc":true}');export{o as comp,m as data};
