import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as t}from"./app-mrI7cTrN.js";const e="/kbms/common/1642603564497-0c53cf38-bd89-48b0-ad55-c80201539289.png",n={},h=t('<h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的"><span>目的</span></a></h2><p>一般在界面显示的时候，是需要对视频有个预览的效果，就是显示某一帧视频的画面。</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p>主要参数 -i——设置输入档名。 -f——设置输出格式。 -y——若输出文件已存在时则覆盖文件。 -fs——超过指定的文件大小时则结束转换。 -t——指定输出文件的持续时间，以秒为单位。 -ss——从指定时间开始转换，以秒为单位。 -t从-ss时间开始转换（如-ss 00:00:01.00 -t 00:00:10.00即从00:00:01.00开始到00:00:11.00）。 -title——设置标题。 -timestamp——设置时间戳。 -vsync——增减Frame使影音同步。 -c——指定输出文件的编码。 -metadata——更改输出文件的元数据。 -help——查看帮助信息。</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">f</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> gdigrab</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">framerate</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 30</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">offset_x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">offset_y</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">video_size</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;"> 1920x1080</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> desktop</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">v</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> libx264</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">preset</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ultrafast</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">crf</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot; + DateTime.Now.ToString(&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">yyyyMMddHHmmss</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;) + &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">_DesktopRecord</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">mp4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>-f gdigrab: 设定视频输入来源为 Windows 桌面画面捕获；</li><li>-framerate 30: 设置帧率为 30fps；</li><li>-offset_x 0 -offset_y 0: 设置捕获起始坐标为 (0, 0)；</li><li>-video_size 1920x1080: 设置视频分辨率为 1920x1080；</li><li>-i desktop: 指示从桌面捕获视频流；</li><li>-c:v libx264: 使用 libx264 编码器进行视频压缩；</li><li>-preset ultrafast: 设定视频压缩速度为最快；</li><li>-crf 0: 设置视频压缩质量无限制（CRF 为 0 表示最高质量）；</li><li>_DesktopRecord.mp4&quot;: 指定视频输出文件名为 yyyyMMddHHmmss_DesktopRecord.mp4</li></ul><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><p>下载 ffmpeg http://ffmpeg.org/ ，解压后在 bin 目录下找到 ffmpeg.exe <img src="'+e+`" alt="image.png" loading="lazy"> 命令方式</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 视频地址</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ss</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 第几帧</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">f</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> image2</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> 图片存放地址</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>用cmd试一下，首先切换到ffmpeg.exe所在目录，输入命令，回车</p><div class="language-csharp line-numbers-mode" data-highlighter="shiki" data-ext="csharp" data-title="csharp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Diagnostics</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Process</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E06C75;"> process</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Diagnostics</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Process</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    process</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">StartInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">FileName</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> @&quot;E:\\ffmpeg.exe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    process</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">StartInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Arguments</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> @&quot;-i e:\\111.mp4 -ss 1000 -f image2 e:\\1.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    process</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p><a href="https://mp.weixin.qq.com/s/oILdtCXN-fOkYm7i3vDB0w" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/oILdtCXN-fOkYm7i3vDB0w</a> | 巧用ffmpeg从视频中截图</p>`,13),l=[h];function p(k,r){return a(),s("div",null,l)}const o=i(n,[["render",p],["__file","shipinjietu.html.vue"]]),c=JSON.parse('{"path":"/middleware/yinpinshipin/ffmpeg/shipinjietu.html","title":"视频截图","lang":"zh-CN","frontmatter":{"title":"视频截图","lang":"zh-CN","date":"2023-06-18T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"shipinjietu","slug":"zegqvp","docsId":"65279216","description":"目的 一般在界面显示的时候，是需要对视频有个预览的效果，就是显示某一帧视频的画面。 参数 主要参数 -i——设置输入档名。 -f——设置输出格式。 -y——若输出文件已存在时则覆盖文件。 -fs——超过指定的文件大小时则结束转换。 -t——指定输出文件的持续时间，以秒为单位。 -ss——从指定时间开始转换，以秒为单位。 -t从-ss时间开始转换（如-s...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/yinpinshipin/ffmpeg/shipinjietu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"视频截图"}],["meta",{"property":"og:description","content":"目的 一般在界面显示的时候，是需要对视频有个预览的效果，就是显示某一帧视频的画面。 参数 主要参数 -i——设置输入档名。 -f——设置输出格式。 -y——若输出文件已存在时则覆盖文件。 -fs——超过指定的文件大小时则结束转换。 -t——指定输出文件的持续时间，以秒为单位。 -ss——从指定时间开始转换，以秒为单位。 -t从-ss时间开始转换（如-s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1642603564497-0c53cf38-bd89-48b0-ad55-c80201539289.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T14:00:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-06-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T14:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"视频截图\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1642603564497-0c53cf38-bd89-48b0-ad55-c80201539289.png\\"],\\"datePublished\\":\\"2023-06-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T14:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"目的","slug":"目的","link":"#目的","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1697724028000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"middleware/yinpinshipin/ffmpeg/shipinjietu.md","localizedDate":"2023年6月18日","excerpt":"<h2>目的</h2>\\n<p>一般在界面显示的时候，是需要对视频有个预览的效果，就是显示某一帧视频的画面。</p>\\n<h2>参数</h2>\\n<p>主要参数\\n-i——设置输入档名。\\n-f——设置输出格式。\\n-y——若输出文件已存在时则覆盖文件。\\n-fs——超过指定的文件大小时则结束转换。\\n-t——指定输出文件的持续时间，以秒为单位。\\n-ss——从指定时间开始转换，以秒为单位。\\n-t从-ss时间开始转换（如-ss 00:00:01.00 -t 00:00:10.00即从00:00:01.00开始到00:00:11.00）。\\n-title——设置标题。\\n-timestamp——设置时间戳。\\n-vsync——增减Frame使影音同步。\\n-c——指定输出文件的编码。\\n-metadata——更改输出文件的元数据。\\n-help——查看帮助信息。</p>","autoDesc":true}');export{o as comp,c as data};