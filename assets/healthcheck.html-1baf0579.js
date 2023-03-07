import{_ as a,W as t,X as d,Y as i,Z as e,$ as l,a0 as s,C as r}from"./framework-63781bb7.js";const c={},v=s(`<h1 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h1><p>在开发AspNet Core应用的时候，我们经常会为该应用公布一个特殊的检测接口出来。该接口的目的很简单，告诉外界程序当前程序现在是可以访问或者不能访问的，便于外界做出相应的操作，比如监控报警，页面通知用户稍作等待等。</p><h1 id="_2-官方包使用" tabindex="-1"><a class="header-anchor" href="#_2-官方包使用" aria-hidden="true">#</a> 2. 官方包使用</h1><h2 id="_2-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_2-1-基本使用" aria-hidden="true">#</a> 2.1 基本使用</h2><p>注入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void ConfigureServices(IServiceCollection services)
{
	services.AddControllers();

	services.AddHealthChecks();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启用中间件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  	    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();
				# 通过访问地址加/health 进行访问
                endpoints.MapHealthChecks(&quot;/health&quot;);
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-目的性检查" tabindex="-1"><a class="header-anchor" href="#_2-2-目的性检查" aria-hidden="true">#</a> 2.2 目的性检查</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /// &lt;summary&gt;
    /// mysql健康检查
    /// &lt;/summary&gt;
    public class MySQLHealthCheck : IHealthCheck
    {
        public async Task&lt;HealthCheckResult&gt; CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            try
            {
                return await Task.FromResult(HealthCheckResult.Healthy()).ConfigureAwait(false);
            }
            catch
            {
                return await Task.FromResult(HealthCheckResult.Unhealthy(&quot;From Sql Serve&quot;)).ConfigureAwait(false);
            }
        }
    }

    /// &lt;summary&gt;
    /// redis健康检查
    /// &lt;/summary&gt;
    public class RedisHealthCheck : IHealthCheck
    {
        public Task&lt;HealthCheckResult&gt; CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            return Task.FromResult(HealthCheckResult.Healthy());
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            
            //只有当所有的检查器都返回为Healthy的时候，才会认为是健康。
            services.AddHealthChecks()
                .AddCheck&lt;MySQLHealthCheck&gt;(&quot;mysql_check&quot;)
                .AddCheck&lt;RedisHealthCheck&gt;(&quot;redis_check&quot;);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Configure方法不需要操作，默认配置是当检查器都返回健康时候才认为是健康。</p><p>单个检查，有时候我们又想进行单个检查，那就需要在 <code>endpoints</code> 的配置中新增另外的路由映射规则:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =&gt; c.SwaggerEndpoint(&quot;/swagger/v1/swagger.json&quot;, &quot;WebApplication7 v1&quot;));
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();

                endpoints.MapHealthChecks(&quot;/mysqlhealth&quot;, new HealthCheckOptions() {//mysql
                    Predicate = s =&gt; s.Name.Equals(&quot;mysql_check&quot;),
                    ResponseWriter = WriteResponse
                });

                endpoints.MapHealthChecks(&quot;/redishealth&quot;, new HealthCheckOptions() //redis
                {
                    Predicate = s =&gt; s.Name.Equals(&quot;redis_check&quot;),
                    ResponseWriter = WriteResponse
                });
            });
        }
        /// &lt;summary&gt;
        /// 返回指定格式
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;context&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;result&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private static Task WriteResponse(HttpContext context, HealthReport result)
        {
            context.Response.ContentType = &quot;application/json&quot;;

            var json = new JObject(
                new JProperty(&quot;status&quot;, result.Status.ToString()),
                new JProperty(&quot;results&quot;, new JObject(result.Entries.Select(pair =&gt; new JProperty(pair.Key,
                    new JObject(new JProperty(&quot;status&quot;, pair.Value.Status.ToString()),
                        new JProperty(&quot;description&quot;, pair.Value.Description),
                        new JProperty(&quot;data&quot;, new JObject(pair.Value.Data.Select(
                            p =&gt; new JProperty(p.Key, p.Value))))))))));

            return context.Response.WriteAsync(json.ToString());
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),u={href:"http://localhost:5000/redishealth",target:"_blank",rel:"noopener noreferrer"},o={href:"http://localhost:5000/redishealth",target:"_blank",rel:"noopener noreferrer"},m=s('<figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619445707290-24896cd8-84f8-4c04-b00d-7d9905838b1b.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="_3-第三包支持" tabindex="-1"><a class="header-anchor" href="#_3-第三包支持" aria-hidden="true">#</a> 3. 第三包支持</h1><h2 id="_3-1-介绍" tabindex="-1"><a class="header-anchor" href="#_3-1-介绍" aria-hidden="true">#</a> 3.1 介绍</h2><p>是一个用于.NetCore健康检查的包，支持的版本有：5.0，3.1，3.0，2.2</p>',4),p={href:"https://github.com/xabaril/AspNetCore.Diagnostics.HealthChecks",target:"_blank",rel:"noopener noreferrer"},b=s(`<p>支持一一些封装的检查</p><ul><li><p>Sql Server</p></li><li><p>MySql</p></li><li><p>Oracle</p></li><li><p>Sqlite</p></li><li><p>RavenDB</p></li><li><p>Postgres</p></li><li><p>EventStore</p></li><li><p>RabbitMQ</p></li><li><p>IbmMQ</p></li><li><p>Elasticsearch</p></li><li><p>CosmosDb</p></li><li><p>Solr</p></li><li><p>Redis</p></li><li><p>SendGrid</p></li><li><p>System: Disk Storage, Private Memory, Virtual Memory, Process, Windows Service</p></li><li><p>Azure Service Bus: EventHub, Queue and Topics</p></li><li><p>Azure Storage: Blob, Queue and Table</p></li><li><p>Azure Key Vault</p></li><li><p>Azure DocumentDb</p></li><li><p>Azure IoT Hub</p></li><li><p>Amazon DynamoDb</p></li><li><p>Amazon S3</p></li><li><p>Google Cloud Firestore</p></li><li><p>Network: Ftp, SFtp, Dns, Tcp port, Smtp, Imap, Ssl</p></li><li><p>MongoDB</p></li><li><p>Kafka</p></li><li><p>Identity Server</p></li><li><p>Uri: single uri and uri groups</p></li><li><p>Consul</p></li><li><p>Hangfire</p></li><li><p>SignalR</p></li><li><p>Kubernetes</p></li><li><p>ArangoDB</p></li><li><p>Gremlin</p></li></ul><p>对应的Nuget包为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Install-Package AspNetCore.HealthChecks.System
Install-Package AspNetCore.HealthChecks.Network
Install-Package AspNetCore.HealthChecks.SqlServer
Install-Package AspNetCore.HealthChecks.MongoDb
Install-Package AspNetCore.HealthChecks.Npgsql
Install-Package AspNetCore.HealthChecks.Elasticsearch
Install-Package AspNetCore.HealthChecks.CosmosDb
Install-Package AspNetCore.HealthChecks.Solr
Install-Package AspNetCore.HealthChecks.Redis
Install-Package AspNetCore.HealthChecks.EventStore
Install-Package AspNetCore.HealthChecks.AzureStorage
Install-Package AspNetCore.HealthChecks.AzureServiceBus
Install-Package AspNetCore.HealthChecks.AzureKeyVault
Install-Package AspNetCore.HealthChecks.Azure.IoTHub
Install-Package AspNetCore.HealthChecks.MySql
Install-Package AspNetCore.HealthChecks.DocumentDb
Install-Package AspNetCore.HealthChecks.SqLite
Install-Package AspNetCore.HealthChecks.RavenDB
Install-Package AspNetCore.HealthChecks.Kafka
Install-Package AspNetCore.HealthChecks.RabbitMQ
Install-Package AspNetCore.HealthChecks.IbmMQ
Install-Package AspNetCore.HealthChecks.OpenIdConnectServer
Install-Package AspNetCore.HealthChecks.DynamoDB
Install-Package AspNetCore.HealthChecks.Oracle
Install-Package AspNetCore.HealthChecks.Uris
Install-Package AspNetCore.HealthChecks.Aws.S3
Install-Package AspNetCore.HealthChecks.Consul
Install-Package AspNetCore.HealthChecks.Hangfire
Install-Package AspNetCore.HealthChecks.SignalR
Install-Package AspNetCore.HealthChecks.Kubernetes
Install-Package AspNetCore.HealthChecks.Gcp.CloudFirestore
Install-Package AspNetCore.HealthChecks.SendGrid
Install-Package AspNetCore.HealthChecks.ArangoDb
Install-Package AspNetCore.HealthChecks.Gremlin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-2-基本使用" aria-hidden="true">#</a> 3.2 基本使用</h2><p>本次事例来演示一个带UI界面的健康监控的基本使用，需要以下nuget包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;PackageReference Include=&quot;AspNetCore.HealthChecks.UI&quot; Version=&quot;5.0.1&quot; /&gt;
    &lt;PackageReference Include=&quot;AspNetCore.HealthChecks.UI.Client&quot; Version=&quot;5.0.1&quot; /&gt;
    &lt;PackageReference Include=&quot;AspNetCore.HealthChecks.UI.InMemory.Storage&quot; Version=&quot;5.0.1&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部分代码使用上述的例子</p><p>注入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddHealthChecks()
                .AddCheck&lt;MySQLHealthCheck&gt;(&quot;mysql_check&quot;)
                .AddCheck&lt;RedisHealthCheck&gt;(&quot;redis_check&quot;);

            services.AddHealthChecksUI().AddInMemoryStorage();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllers();

                endpoints.MapHealthChecks(&quot;/mysqlhealth&quot;, new HealthCheckOptions()
                {
                    Predicate = s =&gt; s.Name.Equals(&quot;mysql_check&quot;),
                    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
                });

                endpoints.MapHealthChecks(&quot;/redishealth&quot;, new HealthCheckOptions()
                {
                    Predicate = s =&gt; s.Name.Equals(&quot;redis_check&quot;),
                    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
                });

                endpoints.MapHealthChecksUI();
            });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Information&quot;,
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;
    }
  },
  &quot;HealthChecksUI&quot;: {
    &quot;HealthChecks&quot;: [
      {
        &quot;Name&quot;: &quot;HTTP-Api-mysqlhealth&quot;,
        &quot;Uri&quot;: &quot;/mysqlhealth&quot;//新版本可以使用相对路径
      },
      {
        &quot;Name&quot;: &quot;HTTP-Api-redishealth&quot;,
        &quot;Uri&quot;: &quot;/redishealth&quot;
      }
    ],
    &quot;Webhooks&quot;: [
      {
        &quot;Name&quot;: &quot;&quot;,
        &quot;Uri&quot;: &quot;&quot;,
        &quot;Payload&quot;: &quot;&quot;,
        &quot;RestoredPayload&quot;: &quot;&quot;
      }
    ],
    &quot;EvaluationTimeInSeconds&quot;: 10,//轮询间隔
    &quot;MinimumSecondsBetweenFailureNotifications&quot;: 60
  },
  &quot;AllowedHosts&quot;: &quot;*&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动程序访问：/healthchecks-ui 地址</p>`,15);function h(g,C){const n=r("ExternalLinkIcon");return t(),d("div",null,[v,i("p",null,[e("通过访问地址："),i("a",u,[e("http://localhost:5000/mysqlhealth"),l(n)]),e(" 查看mysql连接状态")]),i("p",null,[e("通过访问地址："),i("a",o,[e("http://localhost:5000/redishealth"),l(n)]),e(" 查看redis连接状态")]),m,i("p",null,[e("GitHub："),i("a",p,[e("https://github.com/xabaril/AspNetCore.Diagnostics.HealthChecks"),l(n)])]),b])}const q=a(c,[["render",h],["__file","healthcheck.html.vue"]]);export{q as default};
