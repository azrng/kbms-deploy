import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-vSdX8vi3.js";const t={},o=e(`<h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="点击按钮绑定数据到文本标签" tabindex="-1"><a class="header-anchor" href="#点击按钮绑定数据到文本标签"><span>点击按钮绑定数据到文本标签</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">Label</span> FontSize<span class="token operator">=</span><span class="token string">&quot;22&quot;</span>
    HorizontalTextAlignment<span class="token operator">=</span><span class="token string">&quot;Center&quot;</span>
    Text<span class="token operator">=</span><span class="token string">&quot;{Binding ShiCiContent}&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Label<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token class-name">Button</span> Text<span class="token operator">=</span><span class="token string">&quot;加载诗词&quot;</span> Command<span class="token operator">=</span><span class="token string">&quot;{Binding LoadShiCiCommand}&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击之后触发后台事件</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainPageViewModel</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ObservableObject</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IJinRiShiCiService</span> _jiIJinRiShiCiService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">MainPageViewModel</span><span class="token punctuation">(</span><span class="token class-name">IJinRiShiCiService</span> jiIJinRiShiCiService<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        _jiIJinRiShiCiService <span class="token operator">=</span> jiIJinRiShiCiService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 诗词内容</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">string</span></span> _shiCiContent<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> ShiCiContent
    <span class="token punctuation">{</span>
        <span class="token keyword">get</span> <span class="token operator">=&gt;</span> _shiCiContent<span class="token punctuation">;</span>
        <span class="token keyword">set</span> <span class="token operator">=&gt;</span> <span class="token function">SetProperty</span><span class="token punctuation">(</span><span class="token keyword">ref</span> _shiCiContent<span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">RelayCommand</span> _loadShiCiCommand<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">RelayCommand</span> LoadShiCiCommand <span class="token operator">=&gt;</span> _loadShiCiCommand <span class="token operator">??=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">RelayCommand</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ShiCiContent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> _jiIJinRiShiCiService<span class="token punctuation">.</span><span class="token function">GetContentAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Item2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ObservableObject来源自包CommunityToolkit.Mvvm</p><h3 id="绑定静态值" tabindex="-1"><a class="header-anchor" href="#绑定静态值"><span>绑定静态值</span></a></h3><p>创建静态类SharedResources保存公共配置</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SharedResources</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 字体颜色</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">Color</span> FontColor <span class="token operator">=</span> Color<span class="token punctuation">.</span><span class="token function">FromRgb</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0xFF</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 背景颜色</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">Color</span> BackgroundColor <span class="token operator">=</span> Color<span class="token punctuation">.</span><span class="token function">FromRgb</span><span class="token punctuation">(</span><span class="token number">0xFF</span><span class="token punctuation">,</span> <span class="token number">0xF0</span><span class="token punctuation">,</span> <span class="token number">0xAD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再页面中使用</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">ContentPage</span> xmlns<span class="token operator">=</span><span class="token string">&quot;http://schemas.microsoft.com/dotnet/2021/maui&quot;</span>
             xmlns<span class="token punctuation">:</span>x<span class="token operator">=</span><span class="token string">&quot;http://schemas.microsoft.com/winfx/2009/xaml&quot;</span>
             xmlns<span class="token punctuation">:</span>mauiSample<span class="token operator">=</span><span class="token string">&quot;clr-namespace:MauiSample&quot;</span>  
             x<span class="token punctuation">:</span>Class<span class="token operator">=</span><span class="token string">&quot;MauiSample.NotepadPage&quot;</span>
             Title<span class="token operator">=</span><span class="token string">&quot;笔记&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要像上面一样引入：mauiSample 然后使用示例</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token operator">&lt;</span><span class="token class-name">Label</span> 
    Text<span class="token operator">=</span><span class="token string">&quot;Notes&quot;</span>
    VerticalOptions<span class="token operator">=</span><span class="token string">&quot;Center&quot;</span> 
    TextColor<span class="token operator">=</span><span class="token string">&quot;{x:Static Member=mauiSample:SharedResources.FontColor}&quot;</span>
    HorizontalOptions<span class="token operator">=</span><span class="token string">&quot;Center&quot;</span>
    FontAttributes<span class="token operator">=</span><span class="token string">&quot;Bold&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[o];function c(l,i){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","shujubangding.html.vue"]]),k=JSON.parse('{"path":"/dotnet/maui/rumenxuexi/shujubangding.html","title":"数据绑定","lang":"zh-CN","frontmatter":{"title":"数据绑定","lang":"zh-CN","date":"2023-03-16T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"shujubangding","slug":"azn2ga","docsId":"97595402","description":"操作 点击按钮绑定数据到文本标签 点击之后触发后台事件 ObservableObject来源自包CommunityToolkit.Mvvm 绑定静态值 创建静态类SharedResources保存公共配置 然后再页面中使用 需要像上面一样引入：mauiSample 然后使用示例","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/maui/rumenxuexi/shujubangding.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"数据绑定"}],["meta",{"property":"og:description","content":"操作 点击按钮绑定数据到文本标签 点击之后触发后台事件 ObservableObject来源自包CommunityToolkit.Mvvm 绑定静态值 创建静态类SharedResources保存公共配置 然后再页面中使用 需要像上面一样引入：mauiSample 然后使用示例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T08:11:43.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T08:11:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据绑定\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T08:11:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"点击按钮绑定数据到文本标签","slug":"点击按钮绑定数据到文本标签","link":"#点击按钮绑定数据到文本标签","children":[]},{"level":3,"title":"绑定静态值","slug":"绑定静态值","link":"#绑定静态值","children":[]}]}],"git":{"createdTime":1697962303000,"updatedTime":1697962303000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.83,"words":249},"filePathRelative":"dotnet/maui/rumenxuexi/shujubangding.md","localizedDate":"2023年3月16日","excerpt":"<h2>操作</h2>\\n<h3>点击按钮绑定数据到文本标签</h3>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token operator\\">&lt;</span><span class=\\"token class-name\\">Label</span> FontSize<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"22\\"</span>\\n    HorizontalTextAlignment<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"Center\\"</span>\\n    Text<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"{Binding ShiCiContent}\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>Label<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token class-name\\">Button</span> Text<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"加载诗词\\"</span> Command<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"{Binding LoadShiCiCommand}\\"</span><span class=\\"token operator\\">&gt;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>Button<span class=\\"token operator\\">&gt;</span>\\n</code></pre></div>","autoDesc":true}');export{d as comp,k as data};