import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as t}from"./app-DMmdIwn0.js";const s={},o=t(`<p>下载包</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>pip install pyinstaller
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文件存放地址下执行cmd命令 默认图标</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>pyinstaller <span class="token operator">-</span>F xxx<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加带图标的exe</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>pyinstaller <span class="token operator">-</span>F <span class="token operator">-</span>w <span class="token operator">-</span><span class="token class-name">i</span> C<span class="token punctuation">:</span>\\<span class="token number">1</span><span class="token punctuation">.</span><span class="token class-name">ico</span> C<span class="token punctuation">:</span>\\hello<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数解析：</p><blockquote><p>-w 程序启动的时候不会打开命令行。如果不加-w的参数，就会有黑框窗口。 -i 1.ico 设置自己的图标图案。</p></blockquote><p>压缩打包的exe文件</p><blockquote><p>conda create -n 虚拟环境名字 python==3.6 #创建虚拟环境 conda activate 虚拟环境名字 #激活虚拟环境 conda deactivate #退出虚拟环境 conda info --envs #查看conda环境下所有的虚拟环境 conda list 可以查看当前虚拟环境内里面安装的库</p></blockquote><p>虚拟环境+打包的全过程</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#创建虚拟环境</span>
conda create <span class="token operator">-</span>n aotu python<span class="token operator">=</span><span class="token number">3.6</span>

<span class="token comment">#激活虚拟环境</span>
conda activate aotu

<span class="token comment">#Pyinstaller打包</span>
Pyinstaller <span class="token operator">-</span>F <span class="token operator">-</span>w <span class="token operator">-</span>i apple<span class="token punctuation">.</span>ico py_word<span class="token punctuation">.</span>py

<span class="token comment">#想要删除虚拟环境的话，执行命令</span>
conda remove <span class="token operator">-</span>n auto<span class="token operator">-</span><span class="token builtin">all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[o];function c(i,l){return a(),n("div",null,p)}const u=e(s,[["render",c],["__file","dabaoexe.html.vue"]]),m=JSON.parse('{"path":"/otherLanguage/python/jibenshiyong/dabaoexe.html","title":"打包exe","lang":"zh-CN","frontmatter":{"title":"打包exe","lang":"zh-CN","date":"2021-07-28T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["otherLanguage"],"tag":["无"],"filename":"dabaoexe","slug":"hfr5ng","docsId":"30225776","description":"下载包 在文件存放地址下执行cmd命令 默认图标 添加带图标的exe 参数解析： -w 程序启动的时候不会打开命令行。如果不加-w的参数，就会有黑框窗口。 -i 1.ico 设置自己的图标图案。 压缩打包的exe文件 conda create -n 虚拟环境名字 python==3.6 #创建虚拟环境 conda activate 虚拟环境名字 #激活...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/otherLanguage/python/jibenshiyong/dabaoexe.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"打包exe"}],["meta",{"property":"og:description","content":"下载包 在文件存放地址下执行cmd命令 默认图标 添加带图标的exe 参数解析： -w 程序启动的时候不会打开命令行。如果不加-w的参数，就会有黑框窗口。 -i 1.ico 设置自己的图标图案。 压缩打包的exe文件 conda create -n 虚拟环境名字 python==3.6 #创建虚拟环境 conda activate 虚拟环境名字 #激活..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-17T03:16:45.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2021-07-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-17T03:16:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"打包exe\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-17T03:16:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1694920605000,"updatedTime":1694920605000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":0.86,"words":258},"filePathRelative":"otherLanguage/python/jibenshiyong/dabaoexe.md","localizedDate":"2021年7月28日","excerpt":"<p>下载包</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code>pip install pyinstaller\\n</code></pre></div><p>在文件存放地址下执行cmd命令\\n默认图标</p>\\n<div class=\\"language-csharp\\" data-ext=\\"cs\\" data-title=\\"cs\\"><pre class=\\"language-csharp\\"><code>pyinstaller <span class=\\"token operator\\">-</span>F xxx<span class=\\"token punctuation\\">.</span>py\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};