import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-mrI7cTrN.js";const l={},e=n(`<h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h2><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> IUserService</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> GetName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> UserServiceA</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">IUserService</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> GetName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;aaaaa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> UserServiceB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">IUserService</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> GetName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;bbbbbb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取" tabindex="-1"><a class="header-anchor" href="#获取"><span>获取</span></a></h2><h3 id="通过ienumerable获取" tabindex="-1"><a class="header-anchor" href="#通过ienumerable获取"><span>通过IEnumerable获取</span></a></h3><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddTransient</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">IUserService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceA</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddTransient</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">IUserService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> readonly</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ILogger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserController</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">_logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> readonly</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> IUserService</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> _userServiceA</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> readonly</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> IUserService</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> _userServiceB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> UserController</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ILogger</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">UserController</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">                      IEnumerable</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">IUserService</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> userServices</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    _logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    _userServiceA</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> userServices</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">FirstOrDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">GetType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceA</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    _userServiceB</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> userServices</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">FirstOrDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">GetType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="func" tabindex="-1"><a class="header-anchor" href="#func"><span>Func</span></a></h3><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            services</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddTransient</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceA</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            services</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddTransient</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            services</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">AddTransient</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">serviceProvider</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">IUserService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;)(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceA</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> serviceProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceA</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                    else</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> serviceProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">GetService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                    else</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                        throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ArgumentException</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">$&quot;不支持的DI Key: {</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            });</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> readonly</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ILogger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserController</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">_logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> readonly</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> IUserService</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> _userServiceA</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> readonly</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> IUserService</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> _userServiceB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> UserController</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ILogger</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">UserController</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            Func</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">IUserService</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> userServiceList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            _logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            _userServiceA</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> userServiceList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceA</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            _userServiceB</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> userServiceList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserServiceB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><blockquote><p>.Net Core DI依赖注入：一个接口注入多个实现类: <a href="https://www.cnblogs.com/OpenCoder/p/13646648.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/OpenCoder/p/13646648.html</a></p></blockquote>`,9),h=[e];function k(t,p){return a(),i("div",null,h)}const B=s(l,[["render",k],["__file","zhuceduogeshixian.html.vue"]]),g=JSON.parse('{"path":"/dotnet/base/yilaizhuru/morenyilaizhuru/zhuceduogeshixian.html","title":"注册多个实现","lang":"zh-CN","frontmatter":{"title":"注册多个实现","lang":"zh-CN","date":"2023-10-12T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"zhuceduogeshixian","slug":"cfnfhr","docsId":"43527088","description":"基础配置 获取 通过IEnumerable获取 Func 参考文档 .Net Core DI依赖注入：一个接口注入多个实现类: https://www.cnblogs.com/OpenCoder/p/13646648.html","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/base/yilaizhuru/morenyilaizhuru/zhuceduogeshixian.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"注册多个实现"}],["meta",{"property":"og:description","content":"基础配置 获取 通过IEnumerable获取 Func 参考文档 .Net Core DI依赖注入：一个接口注入多个实现类: https://www.cnblogs.com/OpenCoder/p/13646648.html"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T14:05:35.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T14:05:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"注册多个实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T14:05:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"基础配置","slug":"基础配置","link":"#基础配置","children":[]},{"level":2,"title":"获取","slug":"获取","link":"#获取","children":[{"level":3,"title":"通过IEnumerable获取","slug":"通过ienumerable获取","link":"#通过ienumerable获取","children":[]},{"level":3,"title":"Func","slug":"func","link":"#func","children":[]}]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1714226735000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"dotnet/base/yilaizhuru/morenyilaizhuru/zhuceduogeshixian.md","localizedDate":"2023年10月12日","excerpt":"<h2>基础配置</h2>\\n<div class=\\"language-csharp line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"csharp\\" data-title=\\"csharp\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> interface</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#E5C07B\\"> IUserService</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    string</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> GetName</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> class</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#E5C07B\\"> UserServiceA</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> : </span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#E5C07B\\">IUserService</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    public</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> string</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> GetName</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">        return</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"aaaaa\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">public</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> class</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#E5C07B\\"> UserServiceB</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> : </span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#E5C07B\\">IUserService</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    public</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> string</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> GetName</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">        return</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"bbbbbb\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{B as comp,g as data};