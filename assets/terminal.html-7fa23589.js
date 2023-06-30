import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as e,a as n,b as p,d as l,e as c}from"./app-3c3dee46.js";const i={},u=c(`<h1 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h1><p>连接linux</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code> ssh IP <span class="token operator">-</span>l root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><p>配置文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">//docs https://docs.microsoft.com/zh-cn/windows/terminal/get-started</span>

  <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://aka.ms/terminal-profiles-schema&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;defaultProfile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{61c54bbd-c2c6-5271-96e7-009a87ff44bf}&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//选择后复制</span>
  <span class="token property">&quot;copyOnSelect&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//如果设置为 true，则所选文本的颜色和字体格式也将复制到剪贴板。 如果设置为 false，则只会将纯文本复制到剪贴板。</span>
  <span class="token property">&quot;copyFormatting&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//背景透明度(0-1)</span>
      <span class="token property">&quot;acrylicOpacity&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token comment">//背景图片</span>
      <span class="token comment">//&quot;backgroundImage&quot;: &quot;E:\\\\ter.jpg&quot;,</span>
      <span class="token property">&quot;fontFace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Consolas&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">//包含的配色方案</span>
      <span class="token property">&quot;colorScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Homebrew&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;startingDirectory&quot;</span><span class="token operator">:</span> <span class="token string">&quot;d:\\\\&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;snapOnInput&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">//是否启用毛玻璃</span>
      <span class="token property">&quot;useAcrylic&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// Make changes here to the powershell.exe profile.</span>
        <span class="token property">&quot;guid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{61c54bbd-c2c6-5271-96e7-009a87ff44bf}&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Windows PowerShell&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;commandline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;powershell.exe&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hidden&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// Make changes here to the cmd.exe profile.</span>
        <span class="token property">&quot;guid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{0caa0dad-35be-5f56-a8ff-afceeeaa6101}&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Command Prompt&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;commandline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cmd.exe&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hidden&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;guid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{b453ae62-4e3d-5e58-b989-0a998ec441b8}&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hidden&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Azure Cloud Shell&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Windows.Terminal.Azure&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;guid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{a2dfb7a0-26f4-4a2a-bc12-b2cc39ea67fd}&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hidden&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Aliyun CentOS Shell&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;commandline&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ssh -i  root@47.104.255.61&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//自定义配色方案</span>
  <span class="token property">&quot;schemes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Homebrew&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Homebrew&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;black&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;red&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FC5275&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;green&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00a600&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;yellow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#999900&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;blue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#6666e9&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;purple&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#b200b2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cyan&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00a6b2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;white&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#bfbfbf&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;brightBlack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#666666&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;brightRed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#e50000&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;brightGreen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00d900&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;brightYellow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#e5e500&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;brightBlue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000ff&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;brightPurple&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#e500e5&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;brightCyan&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00e5e5&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;brightWhite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#e5e5e5&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#283033&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00ff00&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Add custom actions and keybindings to this array.</span>
  <span class="token comment">// To unbind a key combination from your defaults.json, set the command to &quot;unbound&quot;.</span>
  <span class="token comment">// To learn more about actions and keybindings, visit https://aka.ms/terminal-keybindings</span>
  <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// Copy and paste are bound to Ctrl+Shift+C and Ctrl+Shift+V in your defaults.json.</span>
    <span class="token comment">// These two lines additionally bind them to Ctrl+C and Ctrl+V.</span>
    <span class="token comment">// To learn more about selection, visit https://aka.ms/terminal-selection</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;copy&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;singleLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+c&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;paste&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+v&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Press Ctrl+Shift+F to open the search box</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;find&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+shift+f&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// Press Alt+Shift+D to open a new pane.</span>
    <span class="token comment">// - &quot;split&quot;: &quot;auto&quot; makes this pane open in the direction that provides the most surface area.</span>
    <span class="token comment">// - &quot;splitMode&quot;: &quot;duplicate&quot; makes the new pane use the focused pane&#39;s profile.</span>
    <span class="token comment">// To learn more about panes, visit https://aka.ms/terminal-panes</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;splitPane&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;split&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;splitMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;duplicate&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alt+shift+d&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="美化方案" tabindex="-1"><a class="header-anchor" href="#美化方案" aria-hidden="true">#</a> 美化方案</h1>`,7),r={href:"https://zhuanlan.zhihu.com/p/354603010",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=t("ExternalLinkIcon");return o(),e("div",null,[u,n("p",null,[n("a",r,[p("https://zhuanlan.zhihu.com/p/354603010"),l(s)])])])}const b=a(i,[["render",d],["__file","terminal.html.vue"]]);export{b as default};
