import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as l,c as r,a as s,b as n,d as t,e}from"./app-vSdX8vi3.js";const c="/kbms/common/1666491679296-d49f9aa7-cc7b-48d5-92cd-708f5277274a.png",i={},k=s("h2",{id:"概述",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#概述"},[s("span",null,"概述")])],-1),d={href:"https://mp.weixin.qq.com/s/qlv11I5qwm2Q91vPXE2YCQ",target:"_blank",rel:"noopener noreferrer"},u=e('<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h2><p>MSheet：最小的组件，类似于div</p><h2 id="排版" tabindex="-1"><a class="header-anchor" href="#排版"><span>排版</span></a></h2><ul><li>MAppBar：总是放在应用顶部，优先级低于 MSystemBar。</li><li>MBottomNavigation：总是放在应用底部，优先级高于 MFooter。</li><li>MFooter：总是放在应用底部，优先级低于 MBottomNavigation。</li><li>MNavigationDrawer：可以放置在应用的左边或右边，并且可以配置在 MAppBar 的旁边或下面。</li><li>MSystemBar：总是放在应用顶部，优先级高于 MAppBar。</li></ul><h3 id="左上中下" tabindex="-1"><a class="header-anchor" href="#左上中下"><span>左上中下</span></a></h3><p><img src="'+c+`" alt="image.png" loading="lazy"> 布局文件</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>@<span class="token keyword">using</span> <span class="token namespace">BlazorComponent</span><span class="token punctuation">;</span>
@inherits LayoutComponentBase

<span class="token operator">&lt;</span>MApp<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>左侧导航菜单<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>MNavigationDrawer App<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>NavMenu <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>MNavigationDrawer<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>MAppBar App Flat<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> tab栏 <span class="token operator">--</span><span class="token operator">&gt;</span>
        头部tab栏展示
    <span class="token operator">&lt;</span><span class="token operator">/</span>MAppBar<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 内容显示：根据应用组件来调整你的内容 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>MMain<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 给应用提供合适的间距 <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>MContainer Fluid<span class="token operator">&gt;</span>
            @Body
        <span class="token operator">&lt;</span><span class="token operator">/</span>MContainer<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>MMain<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>页脚<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>MFooter<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token class-name">MCol</span> Class<span class="token operator">=</span><span class="token string">&quot;primary lighten-2 py-2 text-center white--text&quot;</span> Cols<span class="token operator">=</span><span class="token string">&quot;12&quot;</span><span class="token operator">&gt;</span>
            @DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span>Year <span class="token operator">-</span> <span class="token operator">&lt;</span>strong<span class="token operator">&gt;</span>AZRNG<span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>MCol<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>MFooter<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>MApp<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左侧导航</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>@<span class="token keyword">using</span> <span class="token namespace">BlazorComponent</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token class-name">MSheet</span> Color<span class="token operator">=</span><span class="token string">&quot;grey lighten-4&quot;</span> Class<span class="token operator">=</span><span class="token string">&quot;pa-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>MRow<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token class-name">MCol</span> Cols<span class="token operator">=</span><span class="token string">&quot;3&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>MAvatar<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token class-name">MImage</span> Alt<span class="token operator">=</span><span class="token string">&quot;小猫咪&quot;</span> Src<span class="token operator">=</span><span class="token string">&quot;img/logo.jpg&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>MImage<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>MAvatar<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>MCol<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token class-name">MCol</span> Align<span class="token operator">=</span><span class="token string">&quot;AlignTypes.Center&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Tools<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>MCol<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>MRow<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>MSheet<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>MList Shaped Rounded<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>MSubheader<span class="token operator">&gt;</span>目录<span class="token operator">&lt;</span><span class="token operator">/</span>MSubheader<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>MListItemGroup @bind<span class="token operator">-</span>Value<span class="token operator">=</span><span class="token string">&quot;_selectedItem&quot;</span>
                    Color<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>
        @<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> item <span class="token keyword">in</span> _items<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token operator">&lt;</span><span class="token class-name">NavLink</span> href<span class="token operator">=</span><span class="token string">&quot;@item.Href&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;text-decoration:none&quot;</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>MListItem<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>MListItemContent<span class="token operator">&gt;</span>
                        <span class="token operator">&lt;</span>MListItemTitle<span class="token operator">&gt;</span> @item<span class="token punctuation">.</span>Text<span class="token operator">&lt;</span><span class="token operator">/</span>MListItemTitle<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>MListItemContent<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>MListItem<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">&gt;</span>

        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>MListItemGroup<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>MList<span class="token operator">&gt;</span>

@code <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">StringNumber</span> _selectedItem <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Item<span class="token punctuation">[</span><span class="token punctuation">]</span></span> _items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Item<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
    <span class="token punctuation">{</span>
       <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Item</span> <span class="token punctuation">{</span> Text<span class="token operator">=</span> <span class="token string">&quot;列表1&quot;</span><span class="token punctuation">,</span> Href<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Item</span> <span class="token punctuation">{</span> Text<span class="token operator">=</span> <span class="token string">&quot;列表2&quot;</span><span class="token punctuation">,</span>Href<span class="token operator">=</span><span class="token string">&quot;/fetchdata&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Item</span> <span class="token punctuation">{</span> Text<span class="token operator">=</span> <span class="token string">&quot;列表3&quot;</span><span class="token punctuation">,</span>Href<span class="token operator">=</span><span class="token string">&quot;/timeline&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">class</span> <span class="token class-name">Item</span>
    <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// 显示文本</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Text <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token doc-comment comment">/// 链接地址</span>
        <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Href <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式与动画" tabindex="-1"><a class="header-anchor" href="#样式与动画"><span>样式与动画</span></a></h2><p>APP 大小自动，比如</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span>MNavigationDrawer App<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>MNavigationDrawer<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="颜色-color" tabindex="-1"><a class="header-anchor" href="#颜色-color"><span>颜色(color)</span></a></h3>`,13),m={href:"https://masa-blazor-docs-dev.lonsid.cn/stylesandanimations/colors",target:"_blank",rel:"noopener noreferrer"},v=e(`<h3 id="间距-spacing" tabindex="-1"><a class="header-anchor" href="#间距-spacing"><span>间距(spacing)</span></a></h3><h2 id="按钮" tabindex="-1"><a class="header-anchor" href="#按钮"><span>按钮</span></a></h2><p>点击按钮后让图片的src跟着变化</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span>MCard Dark Flat<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>MButton Absolute Bottom Right <span class="token class-name">Fab</span> OnClick<span class="token operator">=</span><span class="token string">&quot;LoadAgain&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>MIcon<span class="token operator">&gt;</span>fas fa<span class="token operator">-</span>circle<span class="token operator">-</span>notch fa<span class="token operator">-</span>spin<span class="token operator">&lt;</span><span class="token operator">/</span>MIcon<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>MButton<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token class-name">MImage</span> Id<span class="token operator">=</span><span class="token string">&quot;bgImg&quot;</span> Src<span class="token operator">=</span><span class="token string">&quot;@Url&quot;</span> Gradient<span class="token operator">=</span><span class="token string">&quot;to top, rgba(0,0,0,.44), rgba(0,0,0,.44)&quot;</span> Dark<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token class-name">MContainer</span> Class<span class="token operator">=</span><span class="token string">&quot;fill-height&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token class-name">MRow</span> Align<span class="token operator">=</span><span class="token string">&quot;@AlignTypes.Center&quot;</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>strong <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-h1 font-weight-regular mr-6&quot;</span><span class="token operator">&gt;</span>@DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span>Day<span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token class-name">MRow</span> Justify<span class="token operator">=</span><span class="token string">&quot;@JustifyTypes.End&quot;</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-h5 font-weight-light&quot;</span><span class="token operator">&gt;</span>
                        @DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span>DayOfWeek
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-uppercase font-weight-light&quot;</span><span class="token operator">&gt;</span>
                        @DateTime<span class="token punctuation">.</span>Now<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM&quot;</span><span class="token punctuation">)</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>MRow<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>MRow<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>MContainer<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>MImage<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>MCard<span class="token operator">&gt;</span>

按钮触发事件
@code <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Url <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">LoadAgain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Url <span class="token operator">=</span> <span class="token string">&quot;https://www.dmoe.cc/random.php?version&quot;</span> <span class="token operator">+</span> Environment<span class="token punctuation">.</span>TickCount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击按钮后让框的背景色改变</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">MCard</span> Color<span class="token operator">=</span><span class="token string">&quot;@BgColor&quot;</span><span class="token operator">&gt;</span>
    <span class="token number">112454545</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>MCard<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token class-name">MButton</span> @onclick<span class="token operator">=</span><span class="token string">&quot;ChangeColor&quot;</span><span class="token operator">&gt;</span>改变框的颜色<span class="token operator">&lt;</span><span class="token operator">/</span>MButton<span class="token operator">&gt;</span>

事件
@code <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span></span> BgColor <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ChangeColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        BgColor <span class="token operator">=</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小属性" tabindex="-1"><a class="header-anchor" href="#小属性"><span>小属性</span></a></h2><ul><li>Flat <ul><li>让边框阴影去掉</li></ul></li><li>APP <ul><li>会自动给布局元素设置 position: fixed</li></ul></li><li>Rounded <ul><li>变成圆角</li></ul></li></ul>`,8);function g(b,h){const a=p("ExternalLinkIcon");return l(),r("div",null,[k,s("p",null,[n("Masa Blazor自定义组件封装："),s("a",d,[n("https://mp.weixin.qq.com/s/qlv11I5qwm2Q91vPXE2YCQ"),t(a)])]),u,s("p",null,[n("背景，样式从"),s("a",m,[n("https://masa-blazor-docs-dev.lonsid.cn/stylesandanimations/colors"),t(a)])]),v])}const y=o(i,[["render",g],["__file","commonOperator.html.vue"]]),w=JSON.parse('{"path":"/web/blazor/masablazor/commonOperator.html","title":"常用功能","lang":"zh-CN","frontmatter":{"title":"常用功能","lang":"zh-CN","date":"2023-04-23T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["web"],"tag":["无"],"filename":"changyonggongneng","slug":"kwl2nb","docsId":"77392412","description":"概述 Masa Blazor自定义组件封装：https://mp.weixin.qq.com/s/qlv11I5qwm2Q91vPXE2YCQ 基础 MSheet：最小的组件，类似于div 排版 MAppBar：总是放在应用顶部，优先级低于 MSystemBar。 MBottomNavigation：总是放在应用底部，优先级高于 MFooter。 MF...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/web/blazor/masablazor/commonOperator.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"常用功能"}],["meta",{"property":"og:description","content":"概述 Masa Blazor自定义组件封装：https://mp.weixin.qq.com/s/qlv11I5qwm2Q91vPXE2YCQ 基础 MSheet：最小的组件，类似于div 排版 MAppBar：总是放在应用顶部，优先级低于 MSystemBar。 MBottomNavigation：总是放在应用底部，优先级高于 MFooter。 MF..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1666491679296-d49f9aa7-cc7b-48d5-92cd-708f5277274a.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T14:04:52.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-04-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-27T14:04:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用功能\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1666491679296-d49f9aa7-cc7b-48d5-92cd-708f5277274a.png\\"],\\"datePublished\\":\\"2023-04-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-27T14:04:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"排版","slug":"排版","link":"#排版","children":[{"level":3,"title":"左上中下","slug":"左上中下","link":"#左上中下","children":[]}]},{"level":2,"title":"样式与动画","slug":"样式与动画","link":"#样式与动画","children":[{"level":3,"title":"颜色(color)","slug":"颜色-color","link":"#颜色-color","children":[]},{"level":3,"title":"间距(spacing)","slug":"间距-spacing","link":"#间距-spacing","children":[]}]},{"level":2,"title":"按钮","slug":"按钮","link":"#按钮","children":[]},{"level":2,"title":"小属性","slug":"小属性","link":"#小属性","children":[]}],"git":{"createdTime":1692442730000,"updatedTime":1701093892000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.04,"words":612},"filePathRelative":"web/blazor/masablazor/commonOperator.md","localizedDate":"2023年4月23日","excerpt":"<h2>概述</h2>\\n<p>Masa Blazor自定义组件封装：<a href=\\"https://mp.weixin.qq.com/s/qlv11I5qwm2Q91vPXE2YCQ\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://mp.weixin.qq.com/s/qlv11I5qwm2Q91vPXE2YCQ</a></p>\\n<h2>基础</h2>\\n<p>MSheet：最小的组件，类似于div</p>\\n<h2>排版</h2>\\n<ul>\\n<li>MAppBar：总是放在应用顶部，优先级低于 MSystemBar。</li>\\n<li>MBottomNavigation：总是放在应用底部，优先级高于 MFooter。</li>\\n<li>MFooter：总是放在应用底部，优先级低于 MBottomNavigation。</li>\\n<li>MNavigationDrawer：可以放置在应用的左边或右边，并且可以配置在 MAppBar 的旁边或下面。</li>\\n<li>MSystemBar：总是放在应用顶部，优先级高于 MAppBar。</li>\\n</ul>","autoDesc":true}');export{y as comp,w as data};