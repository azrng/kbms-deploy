import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as r,d as i}from"./app-mrI7cTrN.js";const a={},l=i('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>Playwright 是微软开源的一个基于 Node.js 的工具库，可使用相同的API调用Chromium（Google-Chrome、Microsoft-Edge）、WebKit（Apple-Safari）和Mozilla-Firefox浏览器自动执行任务。</p><p>仓库：<a href="https://github.com/microsoft/playwright-dotnet" target="_blank" rel="noopener noreferrer">https://github.com/microsoft/playwright-dotnet</a></p><p>文档：<a href="https://playwright.dev/dotnet/docs/intro" target="_blank" rel="noopener noreferrer">https://playwright.dev/dotnet/docs/intro</a></p><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h2><ol><li>任意浏览器、任意平台、一种 API</li></ol><ul><li>跨浏览器：Playwright 支持所有现代渲染引擎，包括 Chromium、WebKit 和 Firefox。</li><li>跨平台：在 Windows、Linux 和 macOS 上，进行本地或 CI 测试（无头或有头）。</li><li>跨语言：可在 TypeScript、JavaScript、Python、.NET、Java 中使用 Playwright API。</li><li>测试移动 Web：Android Google Chrome 和移动 Safari 的本地移动仿真。桌面和云上运行的渲染引擎相同。</li></ul><ol start="2"><li>弹性、没有古怪的测试</li></ol><ul><li>自动等待：Playwright 在执行操作前，将等待到元素可被操作。它还有一组丰富的检查事件。两者结合可消除对人为超时的需求 — 这是导致古怪测试的主要原因。</li><li>Web 优先断言：Playwright 断言是专门为动态 Web 创建的。检查将自动重试，直到满足必要的条件。</li><li>追踪：配置测试重试策略，捕获执行踪迹，录像，截屏，以防止遗忘。</li></ul><ol start="3"><li>无需折中、无限制：浏览器在不同进程中运行属于不同源的 Web 内容。Playwright 与现代浏览器架构保持一致，在进程外运行测试。这使得 Playwright 摆脱典型的进程内测试运行器限制。</li></ol><ul><li>复合一切：横跨多个选项卡、多个源和多个用户的测试场景。为不同用户创建具有不同上下文的场景，并且在服务器上运行它们，这些都在一个测试中进行。</li><li>可信事件：悬停元素，与动态控件交互，生成可信事件。Playwright 使用真正的浏览器输入管道，与真正的用户没有区别。</li><li>测试 Frame、穿透 Shadow DOM：Playwright 选择器穿透 Shadow DOM，允许无缝进入 Frame。</li></ul><ol start="4"><li>完全隔离、快速执行：</li></ol><ul><li>浏览器上下文：Playwright 为每个测试创建一个浏览器上下文。浏览器上下文等同于全新的浏览器配置文件。它提供零开销的完全测试隔离。创建新浏览器上下文仅需几毫秒。</li><li>登录一次：保存上下文的身份认证状态，并且在所有测试中重用。避免在每个测试中重复登录，还提供独立测试的完全隔离。</li></ul><ol start="5"><li>强大的工具：</li></ol><ul><li>代码生成：通过录制操作生成测试。将它们保存成任何语言。</li><li>Playwright 检查器：检查页面，生成选择器，逐步完成测试执行，查看单击点，探索执行日志。</li><li>追踪查看器：捕获所有信息以调查测试失败。Playwright 追踪包含测试执行录屏、实时 DOM 快照、操作资源管理器、测试源等。</li></ul><h2 id="对比puppeteersharp" tabindex="-1"><a class="header-anchor" href="#对比puppeteersharp"><span>对比PuppeteerSharp</span></a></h2><p>PuppeteerSharp和Playwright都是用于自动化Web浏览器的工具，它们在某些方面有所不同。以下是对比它们的一些关键点：</p><ol><li>支持的浏览器：PuppeteerSharp主要支持Chrome浏览器，而Playwright支持多种浏览器，包括Chrome、Firefox和WebKit（Safari）。</li><li>编程语言支持：PuppeteerSharp是使用C#编写的，适用于C#/.NET开发者。Playwright支持多种编程语言，包括JavaScript、TypeScript、Python和.NET等。</li><li>功能和API：PuppeteerSharp和Playwright提供了类似的功能和API，可以实现页面导航、截图、模拟用户输入、执行JavaScript代码等。它们都支持无界面浏览器，使得可以在后台运行或在服务器上进行自动化测试或数据抓取等任务。</li><li>性能和稳定性：由于Playwright支持多种浏览器，因此在某些情况下可能会有更好的性能和稳定性。Playwright还提供了更细粒度的控制和更多的配置选项。</li></ol><p>选择使用PuppeteerSharp还是Playwright取决于您的具体需求。如果您只需要在Windows平台上使用Chrome浏览器进行自动化，且使用C#/.NET作为开发语言，那么PuppeteerSharp可能是一个不错的选择。如果您需要跨平台支持、多浏览器支持，或者使用其他编程语言进行开发，那么Playwright可能更适合您的需求。</p><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>系列资料：<a href="https://timdeschryver.dev/blog?q=Playwright" target="_blank" rel="noopener noreferrer">https://timdeschryver.dev/blog?q=Playwright</a></p>',21),o=[l];function p(h,n){return r(),t("div",null,o)}const c=e(a,[["render",p],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/middleware/testMange/duandaoduanceshi/playwright/","title":"说明","lang":"zh-CN","frontmatter":{"title":"说明","lang":"zh-CN","date":"2023-09-11T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"readme","slug":"ckemmd","docsId":"81120416","description":"介绍 Playwright 是微软开源的一个基于 Node.js 的工具库，可使用相同的API调用Chromium（Google-Chrome、Microsoft-Edge）、WebKit（Apple-Safari）和Mozilla-Firefox浏览器自动执行任务。 仓库：https://github.com/microsoft/playwright...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/testMange/duandaoduanceshi/playwright/"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"说明"}],["meta",{"property":"og:description","content":"介绍 Playwright 是微软开源的一个基于 Node.js 的工具库，可使用相同的API调用Chromium（Google-Chrome、Microsoft-Edge）、WebKit（Apple-Safari）和Mozilla-Firefox浏览器自动执行任务。 仓库：https://github.com/microsoft/playwright..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T14:42:20.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-05T14:42:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说明\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-05T14:42:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":2,"title":"对比PuppeteerSharp","slug":"对比puppeteersharp","link":"#对比puppeteersharp","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1722868940000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":3.76,"words":1128},"filePathRelative":"middleware/testMange/duandaoduanceshi/playwright/readme.md","localizedDate":"2023年9月11日","excerpt":"<h2>介绍</h2>\\n<p>Playwright 是微软开源的一个基于 Node.js 的工具库，可使用相同的API调用Chromium（Google-Chrome、Microsoft-Edge）、WebKit（Apple-Safari）和Mozilla-Firefox浏览器自动执行任务。</p>\\n<p>仓库：<a href=\\"https://github.com/microsoft/playwright-dotnet\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/microsoft/playwright-dotnet</a></p>","autoDesc":true}');export{c as comp,g as data};