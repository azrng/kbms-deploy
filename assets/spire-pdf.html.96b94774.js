import{_ as n,W as s,X as a,a0 as p}from"./framework.cf23f0c7.js";const t={},o=p(`<h1 id="spire-pdf" tabindex="-1"><a class="header-anchor" href="#spire-pdf" aria-hidden="true">#</a> Spire.PDF</h1><h2 id="pdf转图片" tabindex="-1"><a class="header-anchor" href="#pdf转图片" aria-hidden="true">#</a> PDF转图片</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token class-name">PdfDocument</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">PdfDocument</span><span class="token punctuation">(</span>picBytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//convert to pdf file.</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> doc<span class="token punctuation">.</span>Pages<span class="token punctuation">.</span>Count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> image <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">SaveAsImage</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//得到图片流</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">i</span><span class="token punctuation">}</span></span><span class="token string">    截取为图片   &quot;</span></span> <span class="token operator">+</span> watch<span class="token punctuation">.</span>ElapsedMilliseconds<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> fileOperation<span class="token punctuation">.</span><span class="token function">UploadFileStreamAsync</span><span class="token punctuation">(</span><span class="token string">&quot;pacs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test/&quot;</span> <span class="token operator">+</span> Guid<span class="token punctuation">.</span><span class="token function">NewGuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.jpg&quot;</span><span class="token punctuation">,</span> image<span class="token punctuation">,</span> <span class="token string">&quot;image/jpeg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">i</span><span class="token punctuation">}</span></span><span class="token string">   上传图片结束  &quot;</span></span> <span class="token operator">+</span> watch<span class="token punctuation">.</span>ElapsedMilliseconds<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建pdf" tabindex="-1"><a class="header-anchor" href="#创建pdf" aria-hidden="true">#</a> 创建PDF</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name">PdfDocument</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">PdfDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">PdfImage</span> im <span class="token operator">=</span> PdfImage<span class="token punctuation">.</span><span class="token function">FromFile</span><span class="token punctuation">(</span><span class="token string">&quot;00&quot;</span><span class="token operator">+</span>i<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">float</span></span> width <span class="token operator">=</span> im<span class="token punctuation">.</span>Width<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">float</span></span> height <span class="token operator">=</span> im<span class="token punctuation">.</span>Height<span class="token punctuation">;</span>
    <span class="token class-name">PdfPageBase</span> page <span class="token operator">=</span> doc<span class="token punctuation">.</span>Pages<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SizeF</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">PdfMargins</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    page<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span><span class="token function">DrawImage</span><span class="token punctuation">(</span>im<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">PdfImage</span> im2 <span class="token operator">=</span> PdfImage<span class="token punctuation">.</span><span class="token function">FromFile</span><span class="token punctuation">(</span><span class="token string">&quot;021.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">float</span></span> width2 <span class="token operator">=</span> im2<span class="token punctuation">.</span>Width<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">float</span></span> height2 <span class="token operator">=</span> im2<span class="token punctuation">.</span>Height<span class="token punctuation">;</span>
<span class="token class-name">PdfPageBase</span> page2 <span class="token operator">=</span> doc<span class="token punctuation">.</span>Pages<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SizeF</span><span class="token punctuation">(</span>width2<span class="token punctuation">,</span> height2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">PdfMargins</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
page2<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span><span class="token function">DrawImage</span><span class="token punctuation">(</span>im2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> width2<span class="token punctuation">,</span> height2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Save pdf file.</span>
doc<span class="token punctuation">.</span><span class="token function">SaveToFile</span><span class="token punctuation">(</span><span class="token string">&quot;MyFirstPDF.pdf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
doc<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h1><p>本文摘抄自博客园</p>`,7),e=[o];function c(i,l){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","spire-pdf.html.vue"]]);export{k as default};