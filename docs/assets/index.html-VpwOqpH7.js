import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as t}from"./app-mrI7cTrN.js";const e={},l=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>基于Material Design和BlazorComponent的交互能力提供标准的基础组件库。提供如布局、弹框标准、Loading、全局异常处理等标准场景的预置组件。 官网：<a href="https://docs.masastack.com/blazor/introduction/why-masa-blazor" target="_blank" rel="noopener noreferrer">https://docs.masastack.com/blazor/introduction/why-masa-blazor</a></p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作"><span>基本操作</span></a></h3><h4 id="安装masa-template模板" tabindex="-1"><a class="header-anchor" href="#安装masa-template模板"><span>安装Masa.Template模板</span></a></h4><p>Masa.Template包含 MASA 系列所有项目模板。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>dotnet new --install Masa.Template</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>关于模板的说明</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">模板名</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">                  短名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  语言</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  标记</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">----------------------</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">  ------</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">  ----</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">  -----------------------------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MASA</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Blazor</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">         masab</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#]  </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Blazor</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">MASA</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">不带任何样式</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MASA</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Blazor</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Pro</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Web</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">     masabp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#]  </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Blazor</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Pro</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MASA</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Web</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">直接创建一个pro模板的样式</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MASA</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Blazor</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Website</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">     masabw</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#]  </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Blazor</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MASA</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Web</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Site</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">套用官网的样式方案</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MASA</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Framework</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> Project</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  masafx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#]  </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Service</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MASA</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Minimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> API</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Dapr</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建项目 MASA Blazor 对应模板名为masab，根据项目模板名创建项目，并指定输出目录，即项目的根文件夹。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>dotnet new masab -o MasaBlazorApp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>默认为 Server 模式，通过参数--mode WebAssembly 创建 WebAssembly 模式项目。</p></blockquote><h4 id="手动创建" tabindex="-1"><a class="header-anchor" href="#手动创建"><span>手动创建</span></a></h4><p>创建一个Blazor项目</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>$ dotnet new blazorserver -o BlazorApp</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>$ dotnet new blazorwasm -o BlazorApp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>blazorserver为 Blazor Server App 短名称。blazorwasm为 Blazor WebAssembly App 短名称</p></blockquote><p>安装nuget包</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>$ dotnet add package Masa.Blazor</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>引入资源文件 Blazor Server在Pages/_Host.cshtml 中引入资源文件：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;!--</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">masa</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> blazor</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> css</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> style</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;_content/Masa.Blazor/css/masa-blazor.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;_content/Masa.Blazor/css/masa-extend-blazor.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;!--</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> file</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> need</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> to</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> use</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://cdn.masastack.com/npm/@(&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">@mdi</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;)/font@5.x/css/materialdesignicons.min.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://cdn.masastack.com/npm/materialicons/materialicons.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://cdn.masastack.com/npm/fontawesome/v5.0.13/css/all.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">js</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">should</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> lay</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> the</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> end</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> file</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;_content/BlazorComponent/js/blazor-component.js&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Blazor WebAssembly在wwwroot\\index.html中引入资源文件：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;_content/Masa.Blazor/css/masa-blazor.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;_content/Masa.Blazor/css/masa-extend-blazor.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">link</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  href</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://fonts.googleapis.com/css2?family=Material+Icons&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://use.fontawesome.com/releases/v5.0.13/css/all.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> rel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;_content/BlazorComponent/js/blazor-component.js&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;&lt;/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加Masa.Blazor相关服务</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Add services to the container.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">builder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Services</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddMasaBlazor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>全局引用：修改_Imports.razor 文件,添加以下内容:</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">@using</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Masa</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Blazor</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改 Shared/MainLayout.razor 文件，设置 MApp 为根元素：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MApp</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> //layout &lt;/MApp&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="开源示例" tabindex="-1"><a class="header-anchor" href="#开源示例"><span>开源示例</span></a></h2><h3 id="blazor-blog-web" tabindex="-1"><a class="header-anchor" href="#blazor-blog-web"><span>Blazor-Blog-Web</span></a></h3><p>通过Masa Blazor开发的个人博客Web项目</p><p>https://github.com/witeem/Blazor-Blog-Web</p>`,32),n=[l];function h(k,p){return a(),i("div",null,n)}const g=s(e,[["render",h],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/web/blazor/masablazor/","title":"概述","lang":"zh-CN","frontmatter":{"title":"概述","lang":"zh-CN","date":"2023-05-09T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["web"],"tag":["无"],"filename":"gaishu","slug":"ibsgnl","docsId":"67220188","description":"概述 基于Material Design和BlazorComponent的交互能力提供标准的基础组件库。提供如布局、弹框标准、Loading、全局异常处理等标准场景的预置组件。 官网：https://docs.masastack.com/blazor/introduction/why-masa-blazor 操作 基本操作 安装Masa.Templat...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/web/blazor/masablazor/"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"概述"}],["meta",{"property":"og:description","content":"概述 基于Material Design和BlazorComponent的交互能力提供标准的基础组件库。提供如布局、弹框标准、Loading、全局异常处理等标准场景的预置组件。 官网：https://docs.masastack.com/blazor/introduction/why-masa-blazor 操作 基本操作 安装Masa.Templat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-19T02:46:58.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-05-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-19T02:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概述\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-19T02:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"基本操作","slug":"基本操作","link":"#基本操作","children":[{"level":4,"title":"安装Masa.Template模板","slug":"安装masa-template模板","link":"#安装masa-template模板","children":[]},{"level":4,"title":"手动创建","slug":"手动创建","link":"#手动创建","children":[]}]}]},{"level":2,"title":"开源示例","slug":"开源示例","link":"#开源示例","children":[{"level":3,"title":"Blazor-Blog-Web","slug":"blazor-blog-web","link":"#blazor-blog-web","children":[]}]}],"git":{"createdTime":1692442730000,"updatedTime":1705632418000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1},{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":1.66,"words":499},"filePathRelative":"web/blazor/masablazor/readme.md","localizedDate":"2023年5月9日","excerpt":"<h2>概述</h2>\\n<p>基于Material Design和BlazorComponent的交互能力提供标准的基础组件库。提供如布局、弹框标准、Loading、全局异常处理等标准场景的预置组件。\\n官网：<a href=\\"https://docs.masastack.com/blazor/introduction/why-masa-blazor\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://docs.masastack.com/blazor/introduction/why-masa-blazor</a></p>\\n<h2>操作</h2>","autoDesc":true}');export{g as comp,o as data};