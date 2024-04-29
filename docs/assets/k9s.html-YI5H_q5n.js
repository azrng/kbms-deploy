import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,b as a}from"./app-qB9_Bjjp.js";const t={},i=a(`<h2 id="操作命令" tabindex="-1"><a class="header-anchor" href="#操作命令"><span>操作命令</span></a></h2><p>k9s提供操作k8s集群的cli界面</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动</span>
k9s
<span class="token comment"># 帮助</span>
?

<span class="token comment"># 切换namespace</span>
:ns 切换到namespace界面
上下键选择需要切换的ns
也可使用<span class="token string">&#39;/&#39;</span>搜索关键字

之前切换过的ns会在上方显示快捷键,之后使用
<span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span>等数字键切换

<span class="token comment"># 切换pod deploy svc ing等resource</span>
:po  -<span class="token operator">&gt;</span> pod
:no  -<span class="token operator">&gt;</span> <span class="token function">node</span>
:dp  -<span class="token operator">&gt;</span> deployment
:svc -<span class="token operator">&gt;</span> <span class="token function">service</span>
:ing -<span class="token operator">&gt;</span> ingress
<span class="token comment"># 查看resource的别名</span>
:alias 或 ctrl + a
<span class="token comment"># 查看日志</span>
l  当前container
<span class="token builtin class-name">shift</span> + l 之前的container
<span class="token comment"># 查看describe信息</span>
d
<span class="token comment"># 进入容器执行命令</span>
s
<span class="token comment"># 重启容器</span>
ctrl + k 或
ctrl + d -<span class="token operator">&gt;</span> tab -<span class="token operator">&gt;</span> tab -<span class="token operator">&gt;</span> enter
<span class="token comment"># 查找</span>
/需要查看的文字

<span class="token comment"># 编辑</span>
e

<span class="token comment"># 退出</span>
esc 退出当前界面,或清楚筛选
p   返回上一次的界面
ctrl + c 退出整个k9s
:wq 退出编辑界面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[i];function l(o,p){return s(),e("div",null,c)}const m=n(t,[["render",l],["__file","k9s.html.vue"]]),v=JSON.parse(`{"path":"/cloud/k8s/k9s.html","title":"k9s","lang":"zh-CN","frontmatter":{"title":"k9s","lang":"zh-CN","date":"2023-09-02T00:00:00.000Z","publish":true,"author":"Abin Simon","isOriginal":false,"category":["csharp"],"tag":["日志","k9s"],"article":false,"description":"操作命令 k9s提供操作k8s集群的cli界面","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/cloud/k8s/k9s.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"k9s"}],["meta",{"property":"og:description","content":"操作命令 k9s提供操作k8s集群的cli界面"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-23T13:36:43.000Z"}],["meta",{"property":"article:author","content":"Abin Simon"}],["meta",{"property":"article:tag","content":"日志"}],["meta",{"property":"article:tag","content":"k9s"}],["meta",{"property":"article:published_time","content":"2023-09-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-23T13:36:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"k9s\\",\\"description\\":\\"操作命令 k9s提供操作k8s集群的cli界面\\"}"]]},"headers":[{"level":2,"title":"操作命令","slug":"操作命令","link":"#操作命令","children":[]}],"git":{"createdTime":1699181204000,"updatedTime":1700746603000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.77,"words":232},"filePathRelative":"cloud/k8s/k9s.md","localizedDate":"2023年9月2日","excerpt":"<h2>操作命令</h2>\\n<p>k9s提供操作k8s集群的cli界面</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 启动</span>\\nk9s\\n<span class=\\"token comment\\"># 帮助</span>\\n?\\n\\n<span class=\\"token comment\\"># 切换namespace</span>\\n:ns 切换到namespace界面\\n上下键选择需要切换的ns\\n也可使用<span class=\\"token string\\">'/'</span>搜索关键字\\n\\n之前切换过的ns会在上方显示快捷键,之后使用\\n<span class=\\"token number\\">0</span> <span class=\\"token number\\">1</span> <span class=\\"token number\\">2</span>等数字键切换\\n\\n<span class=\\"token comment\\"># 切换pod deploy svc ing等resource</span>\\n:po  -<span class=\\"token operator\\">&gt;</span> pod\\n:no  -<span class=\\"token operator\\">&gt;</span> <span class=\\"token function\\">node</span>\\n:dp  -<span class=\\"token operator\\">&gt;</span> deployment\\n:svc -<span class=\\"token operator\\">&gt;</span> <span class=\\"token function\\">service</span>\\n:ing -<span class=\\"token operator\\">&gt;</span> ingress\\n<span class=\\"token comment\\"># 查看resource的别名</span>\\n:alias 或 ctrl + a\\n<span class=\\"token comment\\"># 查看日志</span>\\nl  当前container\\n<span class=\\"token builtin class-name\\">shift</span> + l 之前的container\\n<span class=\\"token comment\\"># 查看describe信息</span>\\nd\\n<span class=\\"token comment\\"># 进入容器执行命令</span>\\ns\\n<span class=\\"token comment\\"># 重启容器</span>\\nctrl + k 或\\nctrl + d -<span class=\\"token operator\\">&gt;</span> tab -<span class=\\"token operator\\">&gt;</span> tab -<span class=\\"token operator\\">&gt;</span> enter\\n<span class=\\"token comment\\"># 查找</span>\\n/需要查看的文字\\n\\n<span class=\\"token comment\\"># 编辑</span>\\ne\\n\\n<span class=\\"token comment\\"># 退出</span>\\nesc 退出当前界面,或清楚筛选\\np   返回上一次的界面\\nctrl + c 退出整个k9s\\n:wq 退出编辑界面\\n</code></pre></div>","autoDesc":true}`);export{m as comp,v as data};
