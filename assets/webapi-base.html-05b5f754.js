const e=JSON.parse('{"key":"v-48b702f2","path":"/dotnetcore/webapi/webapi-base.html","title":"WebApi调用示例","lang":"zh-CN","frontmatter":{"title":"WebApi调用示例","lang":"zh-CN","date":"2022-09-12T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNet"],"tag":["webapi"],"description":"目的 通过一个简单的项目，在原来的文章基础上完善一下常用的几种WebApi编写方式以及请求方式，一方面是用于给我一个前端朋友用来学习调用接口，另一方面让我测试HttpClient的一些效果。 本文示例代码环境：vs2022、net6 准备 新创建了一个.Net WebAPI程序，安装组件 &lt;ItemGroup&gt; &lt;PackageReference Include=\\"AutoMapper.Extensions.Microsoft.DependencyInjection\\" Version=\\"11.0.0\\" /&gt; &lt;PackageReference Include=\\"Microsoft.AspNetCore.Mvc.NewtonsoftJson\\" Version=\\"6.0.1\\" /&gt; &lt;PackageReference Include=\\"Swashbuckle.AspNetCore\\" Version=\\"6.3.1\\" /&gt; &lt;PackageReference Include=\\"Swashbuckle.AspNetCore.Newtonsoft\\" Version=\\"6.3.1\\" /&gt; &lt;/ItemGroup&gt;","head":[["meta",{"property":"og:url","content":"https://azrng.github.io/kbms/kbms/dotnetcore/webapi/webapi-base.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"WebApi调用示例"}],["meta",{"property":"og:description","content":"目的 通过一个简单的项目，在原来的文章基础上完善一下常用的几种WebApi编写方式以及请求方式，一方面是用于给我一个前端朋友用来学习调用接口，另一方面让我测试HttpClient的一些效果。 本文示例代码环境：vs2022、net6 准备 新创建了一个.Net WebAPI程序，安装组件 &lt;ItemGroup&gt; &lt;PackageReference Include=\\"AutoMapper.Extensions.Microsoft.DependencyInjection\\" Version=\\"11.0.0\\" /&gt; &lt;PackageReference Include=\\"Microsoft.AspNetCore.Mvc.NewtonsoftJson\\" Version=\\"6.0.1\\" /&gt; &lt;PackageReference Include=\\"Swashbuckle.AspNetCore\\" Version=\\"6.3.1\\" /&gt; &lt;PackageReference Include=\\"Swashbuckle.AspNetCore.Newtonsoft\\" Version=\\"6.3.1\\" /&gt; &lt;/ItemGroup&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-09T02:19:17.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"webapi"}],["meta",{"property":"article:published_time","content":"2022-09-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T02:19:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebApi调用示例\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-12T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-09T02:19:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"GET","slug":"get","link":"#get","children":[{"level":3,"title":"Query格式","slug":"query格式","link":"#query格式","children":[]}]},{"level":2,"title":"POST","slug":"post","link":"#post","children":[{"level":3,"title":"Json格式","slug":"json格式","link":"#json格式","children":[]},{"level":3,"title":"x-www-form-unlencoded格式","slug":"x-www-form-unlencoded格式","link":"#x-www-form-unlencoded格式","children":[]},{"level":3,"title":"Form-data格式","slug":"form-data格式","link":"#form-data格式","children":[]}]},{"level":2,"title":"PUT","slug":"put","link":"#put","children":[{"level":3,"title":"Json格式","slug":"json格式-1","link":"#json格式-1","children":[]}]},{"level":2,"title":"DELETE","slug":"delete","link":"#delete","children":[{"level":3,"title":"Query格式","slug":"query格式-1","link":"#query格式-1","children":[]}]},{"level":2,"title":"Patch","slug":"patch","link":"#patch","children":[{"level":3,"title":"Json格式","slug":"json格式-2","link":"#json格式-2","children":[]}]}],"git":{"createdTime":1670219403000,"updatedTime":1670552357000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":2},{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":8.25,"words":2475},"filePathRelative":"dotnetcore/webapi/webapi-base.md","localizedDate":"2022年9月12日","excerpt":"<h1> 目的</h1>\\n<p>通过一个简单的项目，在原来的文章基础上完善一下常用的几种WebApi编写方式以及请求方式，一方面是用于给我一个前端朋友用来学习调用接口，另一方面让我测试HttpClient的一些效果。</p>\\n<p>本文示例代码环境：vs2022、net6</p>\\n<h1> 准备</h1>\\n<p><a href=\\"http://xn--4gqvd6ln0kz4uqpj.Net\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">新创建了一个.Net</a> WebAPI程序，安装组件</p>\\n<div class=\\"language-csharp line-numbers-mode\\" data-ext=\\"cs\\"><pre class=\\"language-csharp\\"><code><span class=\\"token operator\\">&lt;</span>ItemGroup<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span><span class=\\"token class-name\\">PackageReference</span> Include<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"AutoMapper.Extensions.Microsoft.DependencyInjection\\"</span> Version<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"11.0.0\\"</span> <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span><span class=\\"token class-name\\">PackageReference</span> Include<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"Microsoft.AspNetCore.Mvc.NewtonsoftJson\\"</span> Version<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"6.0.1\\"</span> <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span><span class=\\"token class-name\\">PackageReference</span> Include<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"Swashbuckle.AspNetCore\\"</span> Version<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"6.3.1\\"</span> <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span><span class=\\"token class-name\\">PackageReference</span> Include<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"Swashbuckle.AspNetCore.Newtonsoft\\"</span> Version<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"6.3.1\\"</span> <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>ItemGroup<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};