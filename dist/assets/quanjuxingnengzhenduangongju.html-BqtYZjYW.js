import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as r,c,a as t,b as n,d as a,e}from"./app-vSdX8vi3.js";const d="/kbms/common/1641827788648-43512e2c-0395-4cff-881f-dff1453502d6.png",l="/kbms/common/1641827788697-073140c4-6383-48a0-97a5-c392200e5b65.png",i="/kbms/common/1641827788667-4207619f-9e29-40c6-82d4-3c220f66efd2.png",u="/kbms/common/1641827788687-11d1082b-974c-43bd-a861-b435e3dfb921.png",m="/kbms/common/1641827788638-0f22b3d6-b8bf-4cea-9753-729e83944628.png",g="/kbms/common/1641827789390-394da641-fbbf-4a0f-9513-6f9839b0862a.png",h="/kbms/common/1641827789673-b8a0f4b2-8925-494b-bdea-94dcf197ef63.png",k="/kbms/common/1641827789681-293c87f2-3174-444a-866e-ac8b182c3003.png",b="/kbms/common/1641827789909-3af7294c-09c4-4929-aa38-c8b988f1d7b4.png",v="/kbms/common/1641827790067-b04cf833-315d-475c-bb43-96198f4ec617.png",f="/kbms/common/1641827790115-f602fcf5-0d16-40c2-b22c-11e79598586a.png",_="/kbms/common/1641827790242-a3c9f4bd-5240-4d14-8cf5-ce03c61fcb5d.png",y={},z=e('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>现在<code>.NET Core</code> 上线后，不可避免的会出现各种问题，如内存泄漏、CPU占用高、接口处理耗时较长等问题。这个时候就需要快速准确的定位问题，并解决。这时候就可以使用<code>.NET Core </code>为开发人员提供了一系列功能强大的诊断工具。 接下来就详细了解下：<code>.NET Core</code>全局诊断工具</p><ul><li>dotnet-counters</li><li>dotnet-dump</li><li>dotnet-gcdump</li><li>dotnet-trace</li><li>dotnet-symbol</li><li>dotnet-sos</li></ul><h2 id="dotnet-counters" tabindex="-1"><a class="header-anchor" href="#dotnet-counters"><span>dotnet-counters</span></a></h2>',4),C={href:"https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/dotnet-counters",target:"_blank",rel:"noopener noreferrer"},x={href:"https://docs.microsoft.com/zh-cn/dotnet/api/system.diagnostics.tracing.eventcounter",target:"_blank",rel:"noopener noreferrer"},T=t("code",null,".NET Core ",-1),N=e(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet tool install <span class="token operator">--</span><span class="token keyword">global</span> dotnet<span class="token operator">-</span>counters
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>主要命令</p><ul><li>dotnet-counters ps</li><li>dotnet-counters list</li><li>dotnet-counters collect</li><li>dotnet-counters monitor</li></ul><ul><li><p>dotnet-counters</p><p>ps：显示可监视的 dotnet 进程的列表 <img src="`+d+'" alt="image.png" loading="lazy"></p></li><li><p>dotnet-counters list 命令：显示按提供程序分组的计数器名称和说明的列表 <img src="'+l+`" alt="image.png" loading="lazy"> 包括：运行时和Web主机运行信息</p></li><li><p>dotnet-counters collect 命令：定期收集所选计数器的值，并将它们导出为指定的文件格式</p></li></ul><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet<span class="token operator">-</span>counters collect <span class="token punctuation">[</span><span class="token operator">-</span>h<span class="token operator">|</span><span class="token operator">--</span>help<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>p<span class="token operator">|</span><span class="token operator">--</span>process<span class="token operator">-</span>id<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>n<span class="token operator">|</span><span class="token operator">--</span>name<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>diagnostic<span class="token operator">-</span>port<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>refresh<span class="token operator">-</span>interval<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>counters <span class="token operator">&lt;</span>COUNTERS<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>format<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>o<span class="token operator">|</span><span class="token operator">--</span>output<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数说明： <img src="`+i+'" alt="image.png" loading="lazy"> 示例：收集dotnet core 服务端所有性能计数器值，间隔时间为3s <img src="'+u+`" alt="image.png" loading="lazy"></p><ul><li>dotnet-counters monitor命令：显示所选计数器的定期刷新值</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet<span class="token operator">-</span>counters monitor <span class="token punctuation">[</span><span class="token operator">-</span>h<span class="token operator">|</span><span class="token operator">--</span>help<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>p<span class="token operator">|</span><span class="token operator">--</span>process<span class="token operator">-</span>id<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>n<span class="token operator">|</span><span class="token operator">--</span>name<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>diagnostic<span class="token operator">-</span>port<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>refresh<span class="token operator">-</span>interval<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>counters<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code> dotnet<span class="token operator">-</span>counters monitor <span class="token operator">--</span>process<span class="token operator">-</span>id <span class="token number">18832</span> <span class="token operator">--</span>refresh<span class="token operator">-</span>interval <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="dotnet-dump" tabindex="-1"><a class="header-anchor" href="#dotnet-dump"><span>dotnet-dump</span></a></h2>',12),E={href:"https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/dotnet-dump",target:"_blank",rel:"noopener noreferrer"},w=e(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet tool install <span class="token operator">--</span><span class="token keyword">global</span> dotnet<span class="token operator">-</span>dump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令：</p><ul><li>dotnet-dump collect</li><li>dotnet-dump analyze</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// dotnet-dump collect：从进程生成dump</span>
dotnet<span class="token operator">-</span>dump collect <span class="token punctuation">[</span><span class="token operator">-</span>h<span class="token operator">|</span><span class="token operator">--</span>help<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>p<span class="token operator">|</span><span class="token operator">--</span>process<span class="token operator">-</span>id<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>n<span class="token operator">|</span><span class="token operator">--</span>name<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>type<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>o<span class="token operator">|</span><span class="token operator">--</span>output<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>diag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><table><thead><tr><th>-h|--help</th><th>显示命令行帮助。</th></tr></thead><tbody><tr><td>-p|--process-id <code>&lt;PID&gt;</code></td><td>指定从中收集转储的进程的 ID 号。</td></tr><tr><td>-n|--name <code>&lt;name&gt;</code></td><td>指定从中收集转储的进程的名称。</td></tr><tr><td>--type &lt;Full|Heap|Mini&gt;</td><td>指定转储类型，它确定从进程收集的信息的类型。 有三种类型：</td></tr><tr><td>Full - 最大的转储，包含所有内存（包括模块映像）。</td><td></td></tr><tr><td>Heap - 大型且相对全面的转储，其中包含模块列表、线程列表、所有堆栈、异常信息、句柄信息和除映射图像以外的所有内存。</td><td></td></tr><tr><td>Mini - 小型转储，其中包含模块列表、线程列表、异常信息和所有堆栈</td><td></td></tr><tr><td><code>-o或--output &lt;output_dump_path&gt;</code></td><td>应在其中写入收集的转储的完整路径和文件名。</td></tr><tr><td>如果未指定：</td><td></td></tr><tr><td>在 Windows 上默认为 .\\dump_YYYYMMDD_HHMMSS.dmp 。</td><td></td></tr><tr><td>在 Linux 上默认为 ./core_YYYYMMDD_HHMMSS 。</td><td></td></tr><tr><td>YYYYMMDD 为年/月/日，HHMMSS 为小时/分钟/秒。</td><td></td></tr><tr><td>--diag</td><td>启用转储收集诊断日志记录。</td></tr></tbody></table><p>示例：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet<span class="token operator">-</span>dump collect <span class="token operator">-</span>p <span class="token number">18832</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+`" alt="image.png" loading="lazy"><br> dotnet-dump analyze：启动交互式 shell 以了解转储</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet<span class="token operator">-</span>dump analyze <span class="token operator">&lt;</span>dump_path<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">-</span>h<span class="token operator">|</span><span class="token operator">--</span>help<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>c<span class="token operator">|</span><span class="token operator">--</span>command<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：**dotnet-dump analyze dump_20210509_193133.dmp ** 进入dmp分析，查看堆栈和未处理异常 <img src="`+h+'" alt="image.png" loading="lazy"></p><h2 id="dotnet-gcdump" tabindex="-1"><a class="header-anchor" href="#dotnet-gcdump"><span>dotnet-gcdump</span></a></h2>',12),D={href:"https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/dotnet-gcdump",target:"_blank",rel:"noopener noreferrer"},S=t("code",null,"GC（垃圾回收器）",-1),M={href:"https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/eventpipe",target:"_blank",rel:"noopener noreferrer"},Y=t("code",null,"GC（垃圾回收器）",-1),P=e(`<ul><li>比较多个时间点堆上的对象数。</li><li>分析对象的根（回答诸如“还有哪些引用此类型的内容？”等问题）。</li><li>收集有关堆上的对象计数的常规统计信息。</li></ul><p>安装：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet tool install <span class="token operator">--</span><span class="token keyword">global</span> dotnet<span class="token operator">-</span>gcdump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：从当前正在运行的进程中收集 GC 转储</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet<span class="token operator">-</span>gcdump collect <span class="token punctuation">[</span><span class="token operator">-</span>h<span class="token operator">|</span><span class="token operator">--</span>help<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>p<span class="token operator">|</span><span class="token operator">--</span>process<span class="token operator">-</span><span class="token class-name">id</span> pid<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>o<span class="token operator">|</span><span class="token operator">--</span>output gcdump<span class="token operator">-</span>file<span class="token operator">-</span>path<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>v<span class="token operator">|</span><span class="token operator">--</span>verbose<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>t<span class="token operator">|</span><span class="token operator">--</span><span class="token class-name">timeout</span> timeout<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>n<span class="token operator">|</span><span class="token operator">--</span><span class="token class-name">name</span> name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明：</strong></p><table><thead><tr><th><strong>参数</strong></th><th><strong>说明：</strong></th></tr></thead><tbody><tr><td>-h|--help</td><td>显示命令行帮助。</td></tr><tr><td>-p|--process-id pid</td><td>可从中收集 GC 转储的进程 ID。</td></tr><tr><td>-o|--output gcdump-file-path</td><td>应写入收集 GC 转储的路径。 默认为 .\\YYYYMMDD_HHMMSS_pid.gcdump。</td></tr><tr><td>-v|--verbose</td><td>收集 GC 转储时输出日志。</td></tr><tr><td>-t|--timeout timeout</td><td>如果收集 GC 转储的时间超过了此秒数，则放弃收集。 默认值为 30。</td></tr><tr><td>-n|--name name</td><td>可从中收集 GC 转储的进程的名称。</td></tr></tbody></table><p><strong>生成示例：</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet<span class="token operator">-</span>gcdump collect <span class="token operator">-</span>p <span class="token number">18832</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+k+'" alt="image.png" loading="lazy"> 查看生成文件：使用perfview查看： <img src="'+b+'" alt="image.png" loading="lazy"></p><h2 id="dotnet-trace" tabindex="-1"><a class="header-anchor" href="#dotnet-trace"><span>dotnet-trace</span></a></h2>',11),j={href:"https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/dotnet-trace",target:"_blank",rel:"noopener noreferrer"},G=e(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet tool install <span class="token operator">--</span><span class="token keyword">global</span> dotnet<span class="token operator">-</span>trace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dotnet-trace <span class="token punctuation">[</span>-h, --help<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

<span class="token comment"># 从正在运行的进程中收集诊断跟踪，或者启动子进程并对其进行跟踪(仅限.NET 5+)若要让工具运行子进程并自其启动时对其进行跟踪，请将 -- 追加到 collect 命令。</span>
dotnet-trace collect

<span class="token comment"># 将 nettrace 跟踪转换为备用格式，以便用于备用跟踪分析工具。</span>
dotnet-trace convert

<span class="token comment"># 列出可从中收集跟踪的 dotnet 进程</span>
dotnet-trace <span class="token function">ps</span>

<span class="token comment"># 列出预生成的跟踪配置文件，并描述每个配置文件中包含的提供程序和筛选器</span>
dotnet-trace list-profiles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：收集进程18832诊断跟踪：</p><p><img src="`+v+'" alt="image.png" loading="lazy"> 使用Vs打开生成的跟踪文件如下： <img src="'+f+'" alt="image.png" loading="lazy"></p><h2 id="dotnet-symbol" tabindex="-1"><a class="header-anchor" href="#dotnet-symbol"><span>dotnet-symbol</span></a></h2>',6),I={href:"https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/dotnet-symbol",target:"_blank",rel:"noopener noreferrer"},H=e(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet tool install <span class="token operator">--</span><span class="token keyword">global</span> dotnet<span class="token operator">-</span>symbol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet<span class="token operator">-</span>symbol <span class="token punctuation">[</span><span class="token operator">-</span>h<span class="token operator">|</span><span class="token operator">--</span>help<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">options</span></span><span class="token punctuation">]</span> FILES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>options：</p><table><thead><tr><th><strong>参数</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>--microsoft-symbol-server</td><td>添加“http://msdl.microsoft.com/download/symbols”符号服务器路径（默认）。</td></tr><tr><td>--server-path symbol server path</td><td>将符号服务器添加到服务器路径。</td></tr><tr><td>--recurse-subdirectories</td><td>处理所有子目录中的输入文件。</td></tr><tr><td>--host-only</td><td>仅下载 lldb 加载核心转储所需的主机程序（即 dotnet）。</td></tr><tr><td>--symbols</td><td>下载符号文件（.pdb、.dbg 和 .dwarf）。</td></tr><tr><td>--modules</td><td>下载模块文件（.dll、.so 和 .dylib）。</td></tr><tr><td>--debugging</td><td>下载特殊的调试模块（DAC、DBI 和 SOS）。</td></tr><tr><td>--windows-pdbs</td><td>当可移植的 PDB 也可用时，会强制下载 Windows PDB。</td></tr><tr><td>-o, --output outputdirectory</td><td>设置输出目录。 否则，请在输入文件旁边写入（默认）。</td></tr><tr><td>-d, --diagnostics</td><td>启用诊断输出。</td></tr><tr><td>-h|--help</td><td>显示命令行帮助。</td></tr></tbody></table><h2 id="dotnet-sos" tabindex="-1"><a class="header-anchor" href="#dotnet-sos"><span>dotnet-sos</span></a></h2>`,6),O={href:"https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/dotnet-sos",target:"_blank",rel:"noopener noreferrer"},L={href:"https://docs.microsoft.com/zh-cn/windows-hardware/drivers/debugger/debugger-download-tools",target:"_blank",rel:"noopener noreferrer"},B={href:"https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/sos-debugging-extension",target:"_blank",rel:"noopener noreferrer"},q=e(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet tool install <span class="token operator">--</span><span class="token keyword">global</span> dotnet<span class="token operator">-</span>sos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),U={href:"https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/sos-debugging-extension",target:"_blank",rel:"noopener noreferrer"},W=e(`<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>dotnet<span class="token operator">-</span>sos install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例： <img src="`+_+'" alt="image.png" loading="lazy"></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>',3),Z={href:"https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/dotnet-counters",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/dotnet/diagnostics",target:"_blank",rel:"noopener noreferrer"},A={href:"https://channel9.msdn.com/Shows/On-NET/Introducing-the-Diagnostics-Client-Library-for-NET-Core",target:"_blank",rel:"noopener noreferrer"},F=t("h2",{id:"资料",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#资料"},[t("span",null,"资料")])],-1),R=t("p",null,"转自：chaney1992 链接：cnblogs.com/cwsheng/p/14748477.html",-1);function J(K,Q){const s=p("ExternalLinkIcon");return r(),c("div",null,[z,t("p",null,[t("a",C,[n("dotnet-counters"),a(s)]),n(" 是一个性能监视工具，用于初级运行状况监视和性能调查。 它通过 "),t("a",x,[n("EventCounter"),a(s)]),n(" API 观察已发布的性能计数器值。例如，可以快速监视CUP使用情况或"),T,n("应用程序中的异常率等指标 **安装：**通过nuget包安装：")]),N,t("p",null,[n("简介：通过 "),t("a",E,[n("dotnet-dump"),a(s)]),n(" 工具，可在不使用本机调试器的情况下收集和分析 Windows 和 Linux 核心转储。")]),w,t("p",null,[t("a",D,[n("dotnet-gcdump"),a(s)]),n(" 工具可用于为活动 .NET 进程收集 "),S,n("转储。dotnet-gcdump 全局工具使用 "),t("a",M,[n("EventPipe"),a(s)]),n(" 收集实时 .NET 进程的 "),Y,n("转储。 创建 GC 转储时需要在目标进程中触发 GC、开启特殊事件并从事件流中重新生成对象根图。 此过程允许在进程运行时以最小的开销收集 GC 转储。 这些转储对于以下几种情况非常有用：")]),P,t("p",null,[n("简介：分析数据通过 .NET Core 中的 EventPipe 公开。 通过 "),t("a",j,[n("dotnet-trace"),a(s)]),n(" 工具，可以使用来自应用的有意思的分析数据，这些数据可帮助你分析应用运行缓慢的根本原因。 安装：")]),G,t("p",null,[n("简介："),t("a",I,[n("dotnet-symbol"),a(s)]),n(" 用于下载打开核心转储或小型转储所需的文件（符号、DAC/DBI、主机文件等）。 如果需要使用符号和模块来调试在其他计算机上捕获的转储文件，请使用此工具。 安装：")]),H,t("p",null,[n("简介："),t("a",O,[n("dotnet-sos"),a(s)]),n(" 在 Linux 和 macOS（如果使用的是 "),t("a",L,[n("Windbg/cdb"),a(s)]),n("，则在 Windows 上）安装 "),t("a",B,[n("SOS调试扩展"),a(s)]),n("。 安装：")]),q,t("p",null,[n("命令：在本地安装用于调试 .NET Core 进程的 "),t("a",U,[n("SOS 扩展"),a(s)])]),W,t("p",null,[n("微软提供了一套强大的诊断工具，熟练的使用这些工具，可以更快更有效的发现程序的运行问题，解决程序的性能问题。 过程中主要使用：counters、dump、trace 工具用于分析.NET Core性能问题。 最近又了解到微软已对这些基础工具已封装了对应包（Microsoft.Diagnostics.NETCore.Client），可以用来开发出自己的有界面的诊断工具。后续将了解实现一个。 参考文档： "),t("a",Z,[n("https://docs.microsoft.com/zh-cn/dotnet/core/diagnostics/dotnet-counters"),a(s)]),t("a",V,[n("GitHub - dotnet/diagnostics: This repository contains the source code for various .NET Core runtime diagnostic tools and documents."),a(s)]),t("a",A,[n("https://channel9.msdn.com/Shows/On-NET/Introducing-the-Diagnostics-Client-Library-for-NET-Core"),a(s)])]),F,R])}const nn=o(y,[["render",J],["__file","quanjuxingnengzhenduangongju.html.vue"]]),tn=JSON.parse('{"path":"/dotnet/daimayouhua/quanjuxingnengzhenduangongju.html","title":"全局性能诊断工具","lang":"zh-CN","frontmatter":{"title":"全局性能诊断工具","lang":"zh-CN","date":"2023-09-12T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"quanjuxingnengzhenduangongju","slug":"vkrbuv","docsId":"64585426","description":"前言 现在.NET Core 上线后，不可避免的会出现各种问题，如内存泄漏、CPU占用高、接口处理耗时较长等问题。这个时候就需要快速准确的定位问题，并解决。这时候就可以使用.NET Core 为开发人员提供了一系列功能强大的诊断工具。 接下来就详细了解下：.NET Core全局诊断工具 dotnet-counters dotnet-dump dotne...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/daimayouhua/quanjuxingnengzhenduangongju.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"全局性能诊断工具"}],["meta",{"property":"og:description","content":"前言 现在.NET Core 上线后，不可避免的会出现各种问题，如内存泄漏、CPU占用高、接口处理耗时较长等问题。这个时候就需要快速准确的定位问题，并解决。这时候就可以使用.NET Core 为开发人员提供了一系列功能强大的诊断工具。 接下来就详细了解下：.NET Core全局诊断工具 dotnet-counters dotnet-dump dotne..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1641827788648-43512e2c-0395-4cff-881f-dff1453502d6.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-10T15:09:39.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-10T15:09:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"全局性能诊断工具\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1641827788648-43512e2c-0395-4cff-881f-dff1453502d6.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827788697-073140c4-6383-48a0-97a5-c392200e5b65.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827788667-4207619f-9e29-40c6-82d4-3c220f66efd2.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827788687-11d1082b-974c-43bd-a861-b435e3dfb921.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827788638-0f22b3d6-b8bf-4cea-9753-729e83944628.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827789390-394da641-fbbf-4a0f-9513-6f9839b0862a.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827789673-b8a0f4b2-8925-494b-bdea-94dcf197ef63.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827789681-293c87f2-3174-444a-866e-ac8b182c3003.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827789909-3af7294c-09c4-4929-aa38-c8b988f1d7b4.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827790067-b04cf833-315d-475c-bb43-96198f4ec617.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827790115-f602fcf5-0d16-40c2-b22c-11e79598586a.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1641827790242-a3c9f4bd-5240-4d14-8cf5-ce03c61fcb5d.png\\"],\\"datePublished\\":\\"2023-09-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-10T15:09:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"dotnet-counters","slug":"dotnet-counters","link":"#dotnet-counters","children":[]},{"level":2,"title":"dotnet-dump","slug":"dotnet-dump","link":"#dotnet-dump","children":[]},{"level":2,"title":"dotnet-gcdump","slug":"dotnet-gcdump","link":"#dotnet-gcdump","children":[]},{"level":2,"title":"dotnet-trace","slug":"dotnet-trace","link":"#dotnet-trace","children":[]},{"level":2,"title":"dotnet-symbol","slug":"dotnet-symbol","link":"#dotnet-symbol","children":[]},{"level":2,"title":"dotnet-sos","slug":"dotnet-sos","link":"#dotnet-sos","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1710083379000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":4}]},"readingTime":{"minutes":6.87,"words":2061},"filePathRelative":"dotnet/daimayouhua/quanjuxingnengzhenduangongju.md","localizedDate":"2023年9月12日","excerpt":"<h2>前言</h2>\\n<p>现在<code>.NET Core</code> 上线后，不可避免的会出现各种问题，如内存泄漏、CPU占用高、接口处理耗时较长等问题。这个时候就需要快速准确的定位问题，并解决。这时候就可以使用<code>.NET Core </code>为开发人员提供了一系列功能强大的诊断工具。\\n接下来就详细了解下：<code>.NET Core</code>全局诊断工具</p>\\n<ul>\\n<li>dotnet-counters</li>\\n<li>dotnet-dump</li>\\n<li>dotnet-gcdump</li>\\n<li>dotnet-trace</li>\\n<li>dotnet-symbol</li>\\n<li>dotnet-sos</li>\\n</ul>","autoDesc":true}');export{nn as comp,tn as data};