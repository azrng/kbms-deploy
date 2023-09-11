import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,e as s}from"./app-77ed49ef.js";const i={},d=s(`<h1 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h1><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><h3 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h3><p>查看目录下文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 查看当前目录文件
<span class="token function">ls</span>

-- 查看指定目录文件
<span class="token function">ls</span>  /var/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h3><p>创建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 创建目录
<span class="token function">mkdir</span> testFolder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mv" tabindex="-1"><a class="header-anchor" href="#mv" aria-hidden="true">#</a> mv</h3><p>移动目录或者文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 移动一个文件夹到指定目录
<span class="token function">mv</span> testFolder /var/tmp

-- 移动文件到指定目录
<span class="token function">mv</span> aa.txt /var/tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件-1" tabindex="-1"><a class="header-anchor" href="#文件-1" aria-hidden="true">#</a> 文件</h2><h3 id="touch" tabindex="-1"><a class="header-anchor" href="#touch" aria-hidden="true">#</a> touch</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 创建文件
<span class="token function">touch</span> ~/testFile
<span class="token function">touch</span> testFile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cp" tabindex="-1"><a class="header-anchor" href="#cp" aria-hidden="true">#</a> cp</h3><p>复制文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 复制当前目录文件到当前目录
<span class="token function">cp</span> testFile testNewFile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rm" tabindex="-1"><a class="header-anchor" href="#rm" aria-hidden="true">#</a> rm</h3><p>删除文件，输入y后回车确认删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 删除当前目录文件
<span class="token function">rm</span> testFile

-- 删除目录
<span class="token function">rm</span> <span class="token parameter variable">-f</span> testFolder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h3><p>查看文件内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 查看操作历史文件的内容
<span class="token function">cat</span> ~/.bash_history
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h3><p>过滤文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 过滤出 /etc/passwd 文件中包含 root 的记录
<span class="token function">grep</span> <span class="token string">&#39;root&#39;</span> /etc/passwd

--递归地过滤出 /var/log/ 目录中包含 linux 的记录
<span class="token function">grep</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;linux&#39;</span> /var/log/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="管道" tabindex="-1"><a class="header-anchor" href="#管道" aria-hidden="true">#</a> 管道</h1><p>Linux 中管道的作用是将上一个命令的输出作为下一个命令的输入, 像 pipe 一样将各个命令串联起来执行, 管道的操作符是 |</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 可以将 <span class="token function">cat</span> 和 <span class="token function">grep</span> 两个命令用管道组合在一起
<span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;root&#39;</span>

-- 过滤出 /etc 目录中名字包含 <span class="token function">ssh</span> 的目录<span class="token punctuation">(</span>不包括子目录<span class="token punctuation">)</span>
<span class="token function">ls</span> /etc <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;ssh&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h1><p>可以使用 &gt; 或 &lt; 将命令的输出重定向到一个文件中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 将hello world 输入到一个txt中
<span class="token builtin class-name">echo</span> <span class="token string">&#39;Hello World&#39;</span> <span class="token operator">&gt;</span> ~/test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h1><h2 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> IP</h2><h3 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> ping</h3><p>检查是否联通</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--对 cloud.tencent.com 发送 <span class="token number">4</span> 个 <span class="token function">ping</span> 包, 检查与其是否联通
<span class="token function">ping</span> <span class="token parameter variable">-c</span> <span class="token number">4</span> cloud.tencent.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="netstat" tabindex="-1"><a class="header-anchor" href="#netstat" aria-hidden="true">#</a> netstat</h2><p>显示各种网络相关信息，如网络连接、路由表接口状态等</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 列出所有处于监听状态的tcp端口
<span class="token function">netstat</span> <span class="token parameter variable">-lt</span>

--查看所有的端口信息, 包括 PID 和进程名称
<span class="token function">netstat</span> <span class="token parameter variable">-tulpn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="系统" tabindex="-1"><a class="header-anchor" href="#系统" aria-hidden="true">#</a> 系统</h1><h2 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h2><h3 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h3><p>获取进程信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 获取当前进程信息
<span class="token function">ps</span> aux

-- 过滤得到当前系统中的 <span class="token function">ssh</span> 进程信息
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;ssh&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),r=[d];function l(c,t){return n(),e("div",null,r)}const h=a(i,[["render",l],["__file","command.html.vue"]]);export{h as default};
