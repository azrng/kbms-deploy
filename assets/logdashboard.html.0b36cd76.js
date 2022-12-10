import{_ as s,W as d,X as o,Y as e,Z as i,$ as n,a0 as l,y as r}from"./framework.cf23f0c7.js";const c={},u=e("h1",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),i(" 介绍")],-1),v=e("p",null,[e("code",null,"LogDashboard"),i("是在github上开源的aspnetcore项目, 它旨在帮助开发人员排查项目运行中出现错误时快速查看日志排查问题。")],-1),h={href:"https://doc.logdashboard.net/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/realLiangshiwei/LogDashboard",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"支持的日志组件：nlog、log4net、serilog",-1),b=e("p",null,"支持的数据源：txt、数据库",-1),p=e("h1",{id:"简单使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简单使用","aria-hidden":"true"},"#"),i(" 简单使用")],-1),_=e("p",null,"这里使用serilog做日志组件，数据源使用txt，认证访问使用简单的固定账号密码",-1),f=e("h2",{id:"程序",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#程序","aria-hidden":"true"},"#"),i(" 程序")],-1),x={href:"http://xn--ASP-li9dq7bbct76tzwbrups7znnd.NET",target:"_blank",rel:"noopener noreferrer"},L=e("h2",{id:"安装组件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装组件","aria-hidden":"true"},"#"),i(" 安装组件")],-1),q=l(`<h2 id="配置日志" tabindex="-1"><a class="header-anchor" href="#配置日志" aria-hidden="true">#</a> 配置日志</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public static class Program
    {
        public static void Main(string[] args)
        {
            string logOutputTemplate = &quot;{Timestamp:HH:mm:ss.fff zzz} || {Level} || {SourceContext:l} || {Message} || {Exception} ||end {NewLine}&quot;;
            Log.Logger = new LoggerConfiguration()
              .MinimumLevel.Debug()
              .MinimumLevel.Override(&quot;Default&quot;, LogEventLevel.Information)
              .MinimumLevel.Override(&quot;Microsoft&quot;, LogEventLevel.Error)
              .MinimumLevel.Override(&quot;Microsoft.Hosting.Lifetime&quot;, LogEventLevel.Information)
              .Enrich.FromLogContext()
              .WriteTo.Console(theme: Serilog.Sinks.SystemConsole.Themes.AnsiConsoleTheme.Code)
              .WriteTo.File($&quot;{AppContext.BaseDirectory}Logs/netcore.log&quot;, rollingInterval: RollingInterval.Day, outputTemplate: logOutputTemplate)
              .CreateLogger();
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
            .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出日志" tabindex="-1"><a class="header-anchor" href="#输出日志" aria-hidden="true">#</a> 输出日志</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            Log.Information(&quot;ConfigureServices&quot;);
            Log.Error(&quot;测试Serilog添加异常日志&quot;);
            Log.Fatal(&quot;测试Serilog添加严重日志&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置界面" tabindex="-1"><a class="header-anchor" href="#配置界面" aria-hidden="true">#</a> 配置界面</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            //在浏览器中导航到 /logdashboard
            services.AddLogDashboard(opt =&gt;
            {
                opt.AddAuthorizationFilter(new LogDashboardBasicAuthFilter(&quot;admin&quot;, &quot;123456&quot;));//配置默认的
            });


            app.UseLogDashboard();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>授权访问支持：角色过滤器、WWW-authenticate过滤器、自定义过滤器</p><h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问" aria-hidden="true">#</a> 访问</h2><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1618728496588-3edb734c-2f97-4b1a-a862-debdf836f1b8.png" alt="img" loading="lazy"></p><p>输入刚刚配置好的账号密码</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1618728549145-37e03444-0103-4f04-917a-3d153ae07731.png" alt="img" loading="lazy"></p><p>这里就是我们的可视化界面</p>`,12);function C(S,D){const a=r("ExternalLinkIcon"),t=r("PackageReference");return d(),o("div",null,[u,v,e("p",null,[i("官网地址："),e("a",h,[i("https://doc.logdashboard.net/"),n(a)])]),e("p",null,[i("GitHub："),e("a",g,[i("https://github.com/realLiangshiwei/LogDashboard"),n(a)])]),m,b,p,_,f,e("p",null,[e("a",x,[i("本次事例使用的是ASP.NET"),n(a)]),i(" Core Web API程序框架，版本是.net5")]),L,n(t,{Include:"LogDashboard",Version:"1.4.6"}),n(t,{Include:"Serilog.AspNetCore",Version:"4.1.0"}),q])}const A=s(c,[["render",C],["__file","logdashboard.html.vue"]]);export{A as default};
