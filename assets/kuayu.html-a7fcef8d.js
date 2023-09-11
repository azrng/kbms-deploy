import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as d}from"./app-77ed49ef.js";const t={},s=d(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>浏览器的安全策略上的限制可以有效组织Ajax向另外的一个服务发起请求，这就是著名的同源策略。跨域仅仅是浏览器的行为，通过代理服务器，或者其他工具可以绕过。</p><p>不同的域名、不用的端口、不用的协议之间请求都会出现跨域问题。</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2><p>如何突破这种限制，可以使用CORS。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static void AddCommon(this IServiceCollection services)
        {
            services.AddCors(options =&gt;
            {
               options.AddPolicy(&quot;AllowAll&quot;, p =&gt;
                {
                    p.AllowAnyOrigin()//允许任务来源的主机访问
                      .AllowAnyMethod()//允许任何请求方式
                      .AllowAnyHeader();//允许任何头部
                      //.AllowCredentials();//允许任何证书     
                });
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Core3.0之后不允许Origin和Credentials都不做限制</p><p>SetIsOriginAllowed((_) =&gt; true) 这样子就可以和AllowCredentials进行搭配 ，有时候不可以调整下顺序</p><p><strong>AddCors</strong>来添加一个跨域处理方式，<strong>AddPolicy</strong>就是加个巡逻官，看看符合规则的放进来，不符合的直接赶出去。</p><table><thead><tr><th><strong>方法</strong></th><th><strong>介绍</strong></th></tr></thead><tbody><tr><td>AllowAnyOrigin</td><td>允许所有的域名请求</td></tr><tr><td>AllowAnyMethod</td><td>允许所有的请求方式GET/POST/PUT/DELETE</td></tr><tr><td>AllowAnyHeader</td><td>允许所有的头部参数</td></tr><tr><td>AllowCredentials</td><td>允许携带Cookie</td></tr></tbody></table><p>这里我使用的是允许所有，可以根据自身业务需要来调整，比如只允许部分域名访问，部分请求方式，部分Header：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services.AddCors(options =&gt;
            {
               options.AddPolicy(&quot;AllowSome&quot;, p =&gt;
                 {
                    p.WithOrigins(&quot;https://www.baidu.com&quot;)
                    .WithMethods(&quot;GET&quot;, &quot;POST&quot;)
                    .WithHeaders(HeaderNames.ContentType, &quot;x-custom-header&quot;);
                 });
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="允许跨域" tabindex="-1"><a class="header-anchor" href="#允许跨域" aria-hidden="true">#</a> 允许跨域</h1><p>在Configure中声明全局跨域</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
           app.UseCors(&quot;AllowAll&quot;); 
           
            app.UseHttpsRedirection();
            app.UseMvc();      
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只对面某一些控制器进行跨域</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[EnableCors(&quot;AllowSome&quot;)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只对某一些方法进行跨域</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[EnableCors(&quot;AllowSome&quot;)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对某个Action限制跨域</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[DisableCors]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),l=[s];function a(r,o){return i(),n("div",null,l)}const v=e(t,[["render",a],["__file","kuayu.html.vue"]]);export{v as default};
