import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,b as l,o as t}from"./app-fQkBsvt-.js";const e="/kbms/common/1644850042765-46f0b917-e141-46a3-88f4-d3231bb57b49.webp",h="/kbms/common/1644850053441-75060cf8-e19b-4e80-a08c-9a000c0471b1.webp",k={};function p(d,i){return t(),a("div",null,[i[0]||(i[0]=n(`<h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的"><span>目的</span></a></h2><p>创建简易Vsix安装包提高生产效率。</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="创建扩展项目" tabindex="-1"><a class="header-anchor" href="#创建扩展项目"><span>创建扩展项目</span></a></h3><p>新建一个项目，选择扩展项目(VSIX Project)，选择c#开发</p><h3 id="创建模板项目" tabindex="-1"><a class="header-anchor" href="#创建模板项目"><span>创建模板项目</span></a></h3><p>新建一个项目，选择 c# Item Template。<br> 点击class.cs，增加如下代码，里面有定义好的宏。</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*----------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> Copyright (C) 2021 webmote 版权所有</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 创建者：$username$</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 创建时间：$time$</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 文件：$itemname$.cs</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> 功能描述：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">----------------------------------------------------------------*/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">namespace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">rootnamespace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Collections</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Generic</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Linq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// $safeitemname$接口输入参数</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> class $safeitemname$Args </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// $safeitemname$接口输出参数</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> class $safeitemname$Result </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，一次建立，接口的入参和出参类都写好了， 我们只需要写内容即可。<br> 双击 扩展名<code>.vstemplate</code>的文件，配置 菜单项名称，如下：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">TemplateData</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">    &lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">WebApi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">参数类</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">    &lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Description</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">WebApiTemplate</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Description</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置vsix包" tabindex="-1"><a class="header-anchor" href="#配置vsix包"><span>配置VSIX包</span></a></h3><p>回到第一个项目，我们引用Item template项目，然后找到文件为“<code>source.extension.vsixmanifest</code>”的文件<br><img src="`+e+'" alt="" loading="lazy"><br> vsix内的资产就是我们的模板项目，增加到里面。<br><img src="'+h+`" alt="" loading="lazy"><br> OK，build，发包。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>在bin目录找到 “<code>VSIXProject1.vsix</code>” 安装。<br> 安装的时候需要退出软件</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><p>我们在DTO目录建立接口 RegisterUser的入参和出参，只需要找到我们自定义名字。<br> 建立效果如下：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*----------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">Copyright (C) 2021 webmote 版权所有</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">创建者：admin</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">创建时间：2021/4/7 16:45:11</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">文件：RegisterUser.cs</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">功能描述：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">----------------------------------------------------------------*/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Collections</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Generic</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Linq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">namespace</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Service</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">DTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">User</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   /// RegisterUser接口输入参数</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">   public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RegisterUserArgs</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   /// RegisterUser接口输出参数</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   /// </span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">summary</span><span style="--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">   public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RegisterUserResult</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>生产力提升！ 自己动手自定义Visual Studio 2019的 类创建模板，制作简易版Vsix安装包</p>`,19)),l(" https://mp.weixin.qq.com/s/6Mikl0tbW5vJhIP_LSvk4Q ")])}const g=s(k,[["render",p],["__file","vschajian.html.vue"]]),y=JSON.parse('{"path":"/dotnet/shengchanlidisheng/vschajian.html","title":"VS简单插件创建","lang":"zh-CN","frontmatter":{"title":"VS简单插件创建","lang":"zh-CN","date":"2023-04-28T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"vschajian","slug":"mh3om8","docsId":"66672286","description":"目的 创建简易Vsix安装包提高生产效率。 操作 创建扩展项目 新建一个项目，选择扩展项目(VSIX Project)，选择c#开发 创建模板项目 新建一个项目，选择 c# Item Template。 点击class.cs，增加如下代码，里面有定义好的宏。 好了，一次建立，接口的入参和出参类都写好了， 我们只需要写内容即可。 双击 扩展名.vstem...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/shengchanlidisheng/vschajian.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"VS简单插件创建"}],["meta",{"property":"og:description","content":"目的 创建简易Vsix安装包提高生产效率。 操作 创建扩展项目 新建一个项目，选择扩展项目(VSIX Project)，选择c#开发 创建模板项目 新建一个项目，选择 c# Item Template。 点击class.cs，增加如下代码，里面有定义好的宏。 好了，一次建立，接口的入参和出参类都写好了， 我们只需要写内容即可。 双击 扩展名.vstem..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1644850042765-46f0b917-e141-46a3-88f4-d3231bb57b49.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-24T13:30:37.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-04-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-24T13:30:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VS简单插件创建\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1644850042765-46f0b917-e141-46a3-88f4-d3231bb57b49.webp\\",\\"https://azrng.gitee.io/kbms/kbms/common/1644850053441-75060cf8-e19b-4e80-a08c-9a000c0471b1.webp\\"],\\"datePublished\\":\\"2023-04-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-24T13:30:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"目的","slug":"目的","link":"#目的","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"创建扩展项目","slug":"创建扩展项目","link":"#创建扩展项目","children":[]},{"level":3,"title":"创建模板项目","slug":"创建模板项目","link":"#创建模板项目","children":[]},{"level":3,"title":"配置VSIX包","slug":"配置vsix包","link":"#配置vsix包","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1698154237000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":3},{"name":"zhangyunpeng","username":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"dotnet/shengchanlidisheng/vschajian.md","localizedDate":"2023年4月28日","excerpt":"<h2>目的</h2>\\n<p>创建简易Vsix安装包提高生产效率。</p>\\n<h2>操作</h2>\\n<h3>创建扩展项目</h3>\\n<p>新建一个项目，选择扩展项目(VSIX Project)，选择c#开发</p>\\n<h3>创建模板项目</h3>\\n<p>新建一个项目，选择 c# Item Template。<br>\\n点击class.cs，增加如下代码，里面有定义好的宏。</p>\\n<div class=\\"language-csharp line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"csharp\\" data-title=\\"csharp\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">/*----------------------------------------------------------------</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> Copyright (C) 2021 webmote 版权所有</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> 创建者：$username$</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> 创建时间：$time$</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> 文件：$itemname$.cs</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> 功能描述：</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">----------------------------------------------------------------*/</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">namespace</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> $</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">rootnamespace</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">$</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">using</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> System</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">using</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> System</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Collections</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Generic</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">using</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> System</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Linq</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">using</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> System</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Text</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    /// </span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic\\">&lt;</span><span style=\\"--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">summary</span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    /// $safeitemname$接口输入参数</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    /// </span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic\\">&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">summary</span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    public</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> class $safeitemname$Args </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    /// </span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic\\">&lt;</span><span style=\\"--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">summary</span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    /// $safeitemname$接口输出参数</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">    /// </span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic\\">&lt;/</span><span style=\\"--shiki-light:#E45649;--shiki-light-font-style:italic;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">summary</span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:italic;--shiki-dark:#ABB2BF;--shiki-dark-font-style:italic\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    public</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> class $safeitemname$Result </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{g as comp,y as data};