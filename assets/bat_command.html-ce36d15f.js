import{_ as s,W as a,X as n,a0 as e}from"./framework-63781bb7.js";const o={},p=e(`<p>删除文件</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token comment">//删除download文件夹中的文件</span>
<span class="token class-name">del</span> C<span class="token punctuation">:</span>\\download\\<span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span>

<span class="token comment">//删除download文件及其子目录</span>
rd <span class="token operator">/</span>s <span class="token operator">/</span><span class="token class-name">q</span> C<span class="token punctuation">:</span>\\download\\<span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span>

<span class="token comment">//带空格的文件夹名字或带空格的文件的名字都需要用英文的双引号括起来</span>
rd <span class="token operator">/</span>s <span class="token operator">/</span>q <span class="token string">&quot;D:\\Documents&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/s 参数表示删除该文件夹及其下面的子目录和文件</p><p>/q 参数表示安静进行，不需要确认</p><p>示例</p><p>删除同步文件下的文档</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>rd <span class="token operator">/</span>s <span class="token operator">/</span>q <span class="token string">&quot;C:\\Users\\user.LAPTOP-LBQ8556U\\AppData\\Roaming\\Scooter Software\\Beyond Compare 4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),t=[p];function c(l,r){return a(),n("div",null,t)}const i=s(o,[["render",c],["__file","bat_command.html.vue"]]);export{i as default};
