import{_ as a,V as t,W as s,X as n,Y as e,Z as l,$ as d,C as r}from"./framework-fde89294.js";const o={},c=d(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>静态文件都存储在Core Web根目录中。默认目录是&lt;content_root&gt;/wwwroot，但可通过 UseWebRoot方法更改访问目录。而content_root是指web项目的所有文件夹，包括bin和wwwroot文件夹。</p><h1 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h1><h2 id="简单配置" tabindex="-1"><a class="header-anchor" href="#简单配置" aria-hidden="true">#</a> 简单配置</h2><p>在Configure方法中设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app.UseStaticFiles();//默认静态文件目录是wwwroot

特殊配置
app.UseStaticFiles(new StaticFileOptions()
{
    ServeUnknownFileTypes = true
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改默认的静态文件目录" tabindex="-1"><a class="header-anchor" href="#修改默认的静态文件目录" aria-hidden="true">#</a> 修改默认的静态文件目录</h2><p>在Configure方法中设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>StaticFiles(app, env);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>StaticFiles方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  		/// &lt;summary&gt;
        /// 静态文件
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;app&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;env&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private void StaticFiles(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //静态文件重载
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, &quot;Upload&quot;)), //将目录切换到静态文件所在目录
                RequestPath =new PathString(&quot;/fileupload&quot;), //虚拟路径用来访问静态文件
                OnPrepareResponse = ctx =&gt;
                {
                    const int cacheControl = 60;//设置缓存静态文件的时间
                    var headers = ctx.Context.Response.GetTypedHeaders();
                    headers.CacheControl = new CacheControlHeaderValue
                    {
                        MaxAge = TimeSpan.FromSeconds(cacheControl)
                    };
                }
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),v={href:"http://localhost:8001/fileupload/1.txt",target:"_blank",rel:"noopener noreferrer"};function u(m,p){const i=r("ExternalLinkIcon");return t(),s("div",null,[c,n("p",null,[e("我们在项目目录下的Upload文件夹下新建一个1.txt文件，这个时候我们启动项目，就可以通过地址："),n("a",v,[e("http://localhost:8001/fileupload/1.txt"),l(i)]),e(" 获取文件的内容。")])])}const h=a(o,[["render",u],["__file","base.html.vue"]]);export{h as default};
