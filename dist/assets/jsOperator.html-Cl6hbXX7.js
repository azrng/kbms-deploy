import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as r,o as a}from"./app-BQsqMNmR.js";const c={};function n(i,e){return a(),o("div",null,e[0]||(e[0]=[r('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>Blazor 使用 C# 组件而不是 JavaScript 来创建包含动态内容的网页或 HTML 内容。 但是，可以使用 Blazor JavaScript 互操作性（JS 互操作）调用 Blazor 应用中的 JavaScript 库，并从 <a href="http://xn--qbt037c.NET" target="_blank" rel="noopener noreferrer">实现.NET</a> C# 代码调用 JavaScript 函数。</p><h2 id="加载js代码" tabindex="-1"><a class="header-anchor" href="#加载js代码"><span>加载Js代码</span></a></h2><p>将 JavaScript 添加到 Blazor 应用的方式与添加到标准 HTML Web 应用的方式相同，方法是使用 HTML <code>&lt;script&gt;</code> 元素。 可以在 Pages/_Host.cshtml 文件或 wwwroot/index.html 文件中的现有 <code>&lt;script src=&quot;_framework/blazor.*.js&quot;&gt;&lt;/script&gt;</code> 标记后添加 <code>&lt;script&gt;</code> 标记，具体使用哪种取决于 Blazor 托管模型。请参阅 <a href="https://learn.microsoft.com/zh-cn/aspnet/core/blazor/hosting-models" target="_blank" rel="noopener noreferrer">ASP.NET Core Blazor 托管模型</a>。</p><p>最好不要将脚本放在页面的 <code>&lt;head&gt;</code> 元素中。 Blazor 仅控制 HTML 页面的 <code>&lt;body&gt;</code> 元素中的内容，因此如果脚本依赖于 Blazor，则 JS 互操作可能会失败。 此外，页面显示可能更慢，因为分析 JavaScript 代码所花的时间。</p><p><code>&lt;script&gt;</code> 标记的运行方式与在 HTML Web 应用中的运行方式相同。 可以直接在标记正文中编写代码，也可以引用现有的 JavaScript 文件。请参阅 <a href="https://learn.microsoft.com/zh-cn/aspnet/core/blazor/javascript-interoperability#location-of-javascript" target="_blank" rel="noopener noreferrer">ASP.NET Core Blazor JavaScript 互操作性（JS 互操作）：JavaScript 的位置</a>。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>将 JavaScript 文件放置在 Blazor 项目的 wwwroot 文件夹下。</p></div><p>另一种选择是将引用 JavaScript 文件的 <code>&lt;script&gt;</code> 元素动态注入 Pages/_Host.cshtml 页面。 如果需要根据只能在运行时确定的条件加载不同的脚本，则此方法很有用。 如果使用呈现页面后激发的事件触发逻辑，此方法还可以加快应用的初始加载。 有关详细信息，请参阅 <a href="https://learn.microsoft.com/zh-cn/aspnet/core/blazor/fundamentals/startup" target="_blank" rel="noopener noreferrer">ASP.NET Core Blazor 启动</a>。</p><h2 id="调用js" tabindex="-1"><a class="header-anchor" href="#调用js"><span>调用JS</span></a></h2><p>使用 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.jsinterop.ijsruntime" target="_blank" rel="noopener noreferrer">IJSRuntime</a> 从 .NET 代码调用 JavaScript 函数。 若要使 JS 互操作运行时可用，请将 <code>IJSRuntime</code> 抽象实例注入 Blazor 页面，在文件开始附近的 <code>@page</code> 指令之后。</p><p><code>IJSRuntime</code> 接口公开用于调用 JavaScript 代码的 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.jsinterop.ijsruntime.invokeasync" target="_blank" rel="noopener noreferrer">InvokeAsync</a> 和 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.jsinterop.jsruntimeextensions.invokevoidasync" target="_blank" rel="noopener noreferrer">InvokeVoidAsync</a> 方法。 使用 <code>InvokeAsync&lt;TValue&gt;</code> 调用返回值的 JavaScript 函数。 否则，调用 <code>InvokeVoidAsync</code>。 顾名思义，这两种方法都是异步的，因此需要使用 C# <code>await</code> 运算符来捕获结果。</p><p><code>InvokeAsync</code> 或 <code>InvokeVoidAsync</code> 方法的参数是要调用的 JavaScript 函数的名称，后跟函数所需的任何参数。 JavaScript 函数必须属于 <code>window</code> 作用域或 <code>window</code> 子作用域。 参数必须可序列化为 JSON。</p><h2 id="更新dom" tabindex="-1"><a class="header-anchor" href="#更新dom"><span>更新DOM</span></a></h2><p>Blazor 将文档对象模型 (DOM) 表示形式维护为虚拟呈现树。 当页面结构发生更改时，Blazor 将生成一个包含差异的新呈现树。 更改完成后，Blazor 会循环访问差异，以更新用户界面的浏览器显示和 JavaScript 使用的 DOM 的浏览器版本。</p><p>许多第三方 JavaScript 库可用于在页面上呈现元素，这些库可以更新 DOM。 如果 JavaScript 代码修改了 DOM 的元素，则 DOM 的 Blazor 副本可能不再匹配当前状态。 此情况可能导致意外的行为，并可能会带来安全风险。 请勿作出可能导致 DOM 的 Blazor 视图损坏的更改。</p><p>处理这种情况的最简单方法是在 Blazor 组件中创建一个占位符元素，通常是空的 <code>&lt;div @ref=&quot;placeHolder&quot;&gt;&lt;/div&gt;</code> 元素。 Blazor 代码会将此代码解释为空白，而 Blazor 呈现树不会尝试跟踪其内容。 可以随意向此 <code>&lt;div&gt;</code> 添加 JavaScript 代码元素，Blazor 不会尝试更改它。</p><p>Blazor 应用代码定义 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.aspnetcore.components.elementreference" target="_blank" rel="noopener noreferrer">ElementReference</a> 类型的字段，用于保存对 <code>&lt;div&gt;</code> 元素的引用。 <code>&lt;div&gt;</code> 元素上的 <code>@ref</code> 属性设置字段的值。 然后，<code>ElementReference</code> 对象将传递到 JavaScript 函数，该函数可以使用引用将内容添加到 <code>&lt;div&gt;</code> 元素。</p><h2 id="js调用-net代码" tabindex="-1"><a class="header-anchor" href="#js调用-net代码"><span>JS调用.Net代码</span></a></h2><p>JavaScript 代码可以使用 <code>DotNet</code> 实用工具类（JS 互操作库的一部分）运行 Blazor 代码定义的 .NET 方法。 <code>DotNet</code> 类公开了 <code>invokeMethod</code> 和 <code>invokeMethodAsync</code> 帮助程序函数。 使用 <code>invokeMethod</code> 运行方法并等待结果，或使用 <code>invokeMethodAsync</code> 异步调用方法。 <code>invokeMethodAsync</code> 方法返回 JavaScript <code>Promise</code>。</p><p>必须使用 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.jsinterop.jsinvokableattribute" target="_blank" rel="noopener noreferrer">JSInvokableAttribute</a> 标记要调用的 .NET 方法。 该方法必须是 <code>public</code>，并且任何参数都必须可序列化为 JSON。 此外，对于异步方法，返回类型必须是 <code>void</code>、<code>Task</code> 或泛型 <code>Task&lt;T&gt;</code> 对象，其中 <code>T</code> 是 JSON 可序列化类型。</p><p>若要调用 <code>static</code> 方法，请提供包含该类的 .NET 程序集的名称、该方法的标识符以及该方法接受作为 <code>invokeMethod</code> 或 <code>invokeMethodAsync</code> 函数的参数的任何参数。 默认情况下，方法标识符与方法名称相同，但可以使用 <code>JSInvokable</code> 属性指定不同的值。</p>',21)]))}const s=t(c,[["render",n],["__file","jsOperator.html.vue"]]),d=JSON.parse('{"path":"/web/blazor/baseOperator/jsOperator.html","title":"Js互操作","lang":"zh-CN","frontmatter":{"title":"Js互操作","lang":"zh-CN","date":"2023-12-13T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":false,"category":["dotNET","web"],"tag":["blazor","js"],"description":"概述 Blazor 使用 C# 组件而不是 JavaScript 来创建包含动态内容的网页或 HTML 内容。 但是，可以使用 Blazor JavaScript 互操作性（JS 互操作）调用 Blazor 应用中的 JavaScript 库，并从 实现.NET C# 代码调用 JavaScript 函数。 加载Js代码 将 JavaScript 添加...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/web/blazor/baseOperator/jsOperator.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Js互操作"}],["meta",{"property":"og:description","content":"概述 Blazor 使用 C# 组件而不是 JavaScript 来创建包含动态内容的网页或 HTML 内容。 但是，可以使用 Blazor JavaScript 互操作性（JS 互操作）调用 Blazor 应用中的 JavaScript 库，并从 实现.NET C# 代码调用 JavaScript 函数。 加载Js代码 将 JavaScript 添加..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-14T12:02:46.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"blazor"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:published_time","content":"2023-12-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-14T12:02:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Js互操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-14T12:02:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"加载Js代码","slug":"加载js代码","link":"#加载js代码","children":[]},{"level":2,"title":"调用JS","slug":"调用js","link":"#调用js","children":[]},{"level":2,"title":"更新DOM","slug":"更新dom","link":"#更新dom","children":[]},{"level":2,"title":"JS调用.Net代码","slug":"js调用-net代码","link":"#js调用-net代码","children":[]}],"git":{"createdTime":1702480615000,"updatedTime":1702555366000,"contributors":[{"name":"zhangyunpeng","username":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1},{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":4.04,"words":1213},"filePathRelative":"web/blazor/baseOperator/jsOperator.md","localizedDate":"2023年12月13日","excerpt":"<h2>概述</h2>\\n<p>Blazor 使用 C# 组件而不是 JavaScript 来创建包含动态内容的网页或 HTML 内容。 但是，可以使用 Blazor JavaScript 互操作性（JS 互操作）调用 Blazor 应用中的 JavaScript 库，并从 <a href=\\"http://xn--qbt037c.NET\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">实现.NET</a> C# 代码调用 JavaScript 函数。</p>\\n<h2>加载Js代码</h2>\\n<p>将 JavaScript 添加到 Blazor 应用的方式与添加到标准 HTML Web 应用的方式相同，方法是使用 HTML <code>&lt;script&gt;</code> 元素。 可以在 Pages/_Host.cshtml 文件或 wwwroot/index.html 文件中的现有 <code>&lt;script src=\\"_framework/blazor.*.js\\"&gt;&lt;/script&gt;</code> 标记后添加 <code>&lt;script&gt;</code> 标记，具体使用哪种取决于 Blazor 托管模型。请参阅 <a href=\\"https://learn.microsoft.com/zh-cn/aspnet/core/blazor/hosting-models\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ASP.NET Core Blazor 托管模型</a>。</p>","autoDesc":true}');export{s as comp,d as data};