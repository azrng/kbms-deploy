import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as n}from"./app-mrI7cTrN.js";const h={},e=n(`<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3><p>cookie是一个保存在客户机的简单文本文件，这个文件与特定的web文档关联在一起，保存了该客户机访这个web文档时的信息，当客户机再次访问这个web文档时候这些信息可供该文档使用。</p><ul><li>会话Cookie <ul><li>不包含过期时间，会在浏览器窗口关闭时候被永久删除。</li></ul></li><li>持久Cookie <ul><li>关闭浏览器窗口后不会被删除，通常有一个到期时间，会在到期后被删除。</li></ul></li></ul><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h3><h4 id="_1-1-信息保存" tabindex="-1"><a class="header-anchor" href="#_1-1-信息保存"><span>1.1 信息保存</span></a></h4><p>登录后用户的信息存入cookie中</p><blockquote><p>保存验证结果;  用户id可以存入NameIdentifier，账号存入GivenName，姓名存入Name</p></blockquote><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> claims</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Claim</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">	new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Claim</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ClaimTypes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">NameIdentifier</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">account</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">	new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Claim</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ClaimTypes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;张三&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">	new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Claim</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ClaimTypes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Role</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;校长&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> cliamsIdentity</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ClaimsIdentity</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">claims</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">CookieAuthenticationDefaults</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">AuthenticationScheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> claimsPrincipal</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ClaimsPrincipal</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">cliamsIdentity</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//可以理解为证件用户</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> HttpContext</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">SignInAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">CookieAuthenticationDefaults</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">AuthenticationScheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">claimsPrincipal</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">	new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> AuthenticationProperties</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">		ExpiresUtc</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> DateTimeOffset</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">DateTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Now</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddHours</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-configureservices引用中间件" tabindex="-1"><a class="header-anchor" href="#_1-2-configureservices引用中间件"><span>1.2 ConfigureServices引用中间件</span></a></h4><p>引用验证中间件 string CookieScheme = &quot;Cookies&quot;;</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 配置验证</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> services</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddAuthentication</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">CookieScheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">       .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddCookie</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">CookieScheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">option</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">           //登录路径：这是当用户试图访问资源但未经过身份验证时，程序将会将请求重定向到这个相对路径。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">           option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">LoginPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> PathString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/account/login&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">           //禁止访问路径：当用户试图访问资源时，但未通过该资源的任何授权策略，请求将被重定向到这个相对路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">           option</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">AccessDeniedPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> PathString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/account/denied&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//注入上下文单例模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> services</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddSingleton</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">IHttpContextAccessor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">HttpContextAccessor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-configure里面启用认证" tabindex="-1"><a class="header-anchor" href="#_1-3-configure里面启用认证"><span>1.3 Configure里面启用认证</span></a></h4><p>必须添加下面的两者</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">UseAuthentication</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//启用身份认证：识别当前请求的用户信息,一般是通过加密的Cookies实现。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">UseAuthorization</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//启用身份授权：识别当前请求是否有访问指定资源的权限，一般是根据当前请求识别的用户信息,结合角色权限相关配置来判断。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-获取信息" tabindex="-1"><a class="header-anchor" href="#_1-4-获取信息"><span>1.4 获取信息</span></a></h4><p>在登录认证通过后访问时候可以通过</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Identity</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//获取存入的名称信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">HttpContext</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">FindFirst</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">u</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> u</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ClaimTypes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">NameIdentifier</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-注销用户" tabindex="-1"><a class="header-anchor" href="#_1-5-注销用户"><span>1.5 注销用户</span></a></h4><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> HttpContext</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">SignOutAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>cookie认证 <a href="https://www.cnblogs.com/OpenCoder/p/8341843.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/OpenCoder/p/8341843.html</a></p></blockquote><h3 id="全局获取" tabindex="-1"><a class="header-anchor" href="#全局获取"><span>全局获取</span></a></h3><p>如果想在其他层获取当前用户信息，需要将IHttpContextAccessor注入进去，然后通过这个去获取，例如：</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> UserEntityService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">IUserEntityService</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">   private</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> IHttpContextAccessor</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> _accessor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">   private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> readonly</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> IMongoCollection</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserProfile</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">_users</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">   public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> UserEntityService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">IHttpContextAccessor</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> accessor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">IDefaultMongoDatabaseProvider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> databaseProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">       _accessor</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> accessor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">       _users</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> databaseProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">GetCollection</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserProfile</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">CollectionNames</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">UserProfiles</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">   public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Task</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserProfile</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">GetCurrentUserAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">       var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> rawUser</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">_accessor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">HttpContext</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">       if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">rawUser</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">       {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">          return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">       }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">       var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> filter</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Builders</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserProfile</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Filter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Eq</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;UserId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">rawUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">UserId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> _users</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Find</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">FirstOrDefaultAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p><a href="https://mp.weixin.qq.com/s/c6UvdQsV1JiPiUw88qYwhw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/c6UvdQsV1JiPiUw88qYwhw</a> | 小cookie，大智慧 本地地址：\\开发\\docs\\小cookie，大智慧.png</p><p><a href="https://mp.weixin.qq.com/s/FNWl-QFM3P_mBKptVoLSiQ" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/FNWl-QFM3P_mBKptVoLSiQ</a> | 浅议.NET 6 Cookie滑动过期和JWT混合认证、授权</p>`,26),l=[e];function t(k,p){return a(),s("div",null,l)}const B=i(h,[["render",t],["__file","cookieshenfenrenzheng.html.vue"]]),g=JSON.parse('{"path":"/dotnet/anquanhebiaoshi/shenfenrenzhengheshouquan/cookieshenfenrenzheng/cookieshenfenrenzheng.html","title":"Cookie身份认证","lang":"zh-CN","frontmatter":{"title":"Cookie身份认证","lang":"zh-CN","date":"2022-04-27T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"cookieshenfenrenzheng","slug":"vwwwrw","docsId":"30606637","description":"介绍 cookie是一个保存在客户机的简单文本文件，这个文件与特定的web文档关联在一起，保存了该客户机访这个web文档时的信息，当客户机再次访问这个web文档时候这些信息可供该文档使用。 会话Cookie 不包含过期时间，会在浏览器窗口关闭时候被永久删除。 持久Cookie 关闭浏览器窗口后不会被删除，通常有一个到期时间，会在到期后被删除。 操作 1...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/anquanhebiaoshi/shenfenrenzhengheshouquan/cookieshenfenrenzheng/cookieshenfenrenzheng.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Cookie身份认证"}],["meta",{"property":"og:description","content":"介绍 cookie是一个保存在客户机的简单文本文件，这个文件与特定的web文档关联在一起，保存了该客户机访这个web文档时的信息，当客户机再次访问这个web文档时候这些信息可供该文档使用。 会话Cookie 不包含过期时间，会在浏览器窗口关闭时候被永久删除。 持久Cookie 关闭浏览器窗口后不会被删除，通常有一个到期时间，会在到期后被删除。 操作 1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T08:11:43.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-04-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T08:11:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cookie身份认证\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T08:11:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"操作","slug":"操作","link":"#操作","children":[{"level":4,"title":"1.1 信息保存","slug":"_1-1-信息保存","link":"#_1-1-信息保存","children":[]},{"level":4,"title":"1.2 ConfigureServices引用中间件","slug":"_1-2-configureservices引用中间件","link":"#_1-2-configureservices引用中间件","children":[]},{"level":4,"title":"1.3 Configure里面启用认证","slug":"_1-3-configure里面启用认证","link":"#_1-3-configure里面启用认证","children":[]},{"level":4,"title":"1.4 获取信息","slug":"_1-4-获取信息","link":"#_1-4-获取信息","children":[]},{"level":4,"title":"1.5 注销用户","slug":"_1-5-注销用户","link":"#_1-5-注销用户","children":[]}]},{"level":3,"title":"全局获取","slug":"全局获取","link":"#全局获取","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1697962303000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.29,"words":688},"filePathRelative":"dotnet/anquanhebiaoshi/shenfenrenzhengheshouquan/cookieshenfenrenzheng/cookieshenfenrenzheng.md","localizedDate":"2022年4月27日","excerpt":"<h3>介绍</h3>\\n<p>cookie是一个保存在客户机的简单文本文件，这个文件与特定的web文档关联在一起，保存了该客户机访这个web文档时的信息，当客户机再次访问这个web文档时候这些信息可供该文档使用。</p>\\n<ul>\\n<li>会话Cookie\\n<ul>\\n<li>不包含过期时间，会在浏览器窗口关闭时候被永久删除。</li>\\n</ul>\\n</li>\\n<li>持久Cookie\\n<ul>\\n<li>关闭浏览器窗口后不会被删除，通常有一个到期时间，会在到期后被删除。</li>\\n</ul>\\n</li>\\n</ul>\\n<h3>操作</h3>\\n<h4>1.1 信息保存</h4>\\n<p>登录后用户的信息存入cookie中</p>","autoDesc":true}');export{B as comp,g as data};