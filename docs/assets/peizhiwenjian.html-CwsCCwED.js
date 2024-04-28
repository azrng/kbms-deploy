import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o,c as l,a as s,d as n,e,b as p}from"./app-DMmdIwn0.js";const c={},r=p(`<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><p>linux里面的配置文件所在的位置：/user/local/nginx/conf/nginx.conf</p><h2 id="三部分组成" tabindex="-1"><a class="header-anchor" href="#三部分组成"><span>三部分组成</span></a></h2><p>1.全局块 设置影响nginx服务器整体运行的配置指令 2.events块 影响nginx服务器与用户的网络连接 3.http全局块 包括：http全局块和server块</p><h2 id="默认配置" tabindex="-1"><a class="header-anchor" href="#默认配置"><span>默认配置</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整的配置文件" tabindex="-1"><a class="header-anchor" href="#完整的配置文件"><span>完整的配置文件</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> root</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span> auto</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span> <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">4096</span></span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">sendfile</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip</span>              <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_http_version</span> 1.0</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_proxied</span>      any</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_min_length</span>   <span class="token number">500</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_disable</span>      <span class="token string">&quot;MSIE [1-6]\\.&quot;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_types</span>        text/plain text/xml text/css
                      text/comma-separated-values
                      text/javascript
                      application/x-javascript
                      application/atom+xml</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">proxy_buffer_size</span>   <span class="token number">128k</span></span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">proxy_buffers</span>   <span class="token number">4</span> <span class="token number">256k</span></span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span>   <span class="token number">256k</span></span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">large_client_header_buffers</span> <span class="token number">4</span> <span class="token number">16k</span></span><span class="token punctuation">;</span>             
    <span class="token directive"><span class="token keyword">client_header_timeout</span> <span class="token number">600</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_body_timeout</span>  <span class="token number">100</span></span><span class="token punctuation">;</span>                           

    <span class="token directive"><span class="token keyword">include</span>        mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>   application/octet-stream</span><span class="token punctuation">;</span>


    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://47.104.255.61:8000</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用配置" tabindex="-1"><a class="header-anchor" href="#常用配置"><span>常用配置</span></a></h2><h3 id="后端配置" tabindex="-1"><a class="header-anchor" href="#后端配置"><span>后端配置</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> ~ /myapi/</span><span class="token punctuation">{</span>
 	  <span class="token directive"><span class="token keyword">rewrite</span> ^/myapi/(.*)$ /<span class="token variable">$1</span> break</span><span class="token punctuation">;</span> <span class="token comment">#截取掉myapi</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:5000/</span><span class="token punctuation">;</span> <span class="token comment">#被代理服务器的站点地址</span>
  	<span class="token directive"><span class="token keyword">proxy_set_header</span>   X-Real-IP        <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>   X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span> <span class="token comment">#将请求使用的协议告知被代理服务器</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>   Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span> <span class="token comment">## 将请求的地址告知被代理服务器</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>   X-Forwarded-Prefix myapi</span><span class="token punctuation">;</span> <span class="token comment">#将路由名称&quot;myapi&quot;告知被代理服务器</span>
  	<span class="token directive"><span class="token keyword">deny</span> 127.0.0.1</span><span class="token punctuation">;</span>  <span class="token comment">#拒绝的ip</span>
    <span class="token directive"><span class="token keyword">allow</span> 172.18.5.54</span><span class="token punctuation">;</span> <span class="token comment">#允许的ip  </span>
<span class="token punctuation">}</span>

<span class="token comment">## 添加配置1（配置1和2可以同事监听80端口，绑定不同域名，实现一台服务器nginx同时配置多个前端网站，多个域名空格隔开）</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> 域名1 域名2 localhost</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> HOST <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:端口/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代理静态网站" tabindex="-1"><a class="header-anchor" href="#代理静态网站"><span>代理静态网站</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token comment">## 代理静态网站 root指定磁盘目录</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  域名1 域名2 多个域名空格隔开 localhost</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
       <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
       <span class="token directive"><span class="token keyword">root</span> D:\\test-web</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前后端分离项目示例" tabindex="-1"><a class="header-anchor" href="#前后端分离项目示例"><span>前后端分离项目示例</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token comment">##前端配置</span>
<span class="token directive"><span class="token keyword">location</span> /gov_flow</span> <span class="token punctuation">{</span>
                <span class="token comment">##放再nginx下的/content/gov_flow目录</span>
                <span class="token directive"><span class="token keyword">alias</span> /var/html/gov_flow</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
                <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
<span class="token comment">##后端接口配置            </span>
<span class="token directive"><span class="token keyword">location</span> /stage-prod-api/</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://flow:9083/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">location</span> /stage-test-api/</span><span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8080/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
<span class="token comment">#两个后端项目接口合并成一个 给前端访问9991</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">9991</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /yqt/</span><span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8888/yqt/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> /ad/</span><span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8090/ad/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ip代理" tabindex="-1"><a class="header-anchor" href="#ip代理"><span>IP代理</span></a></h3><p>可以通过下面的方法获取真实的IP</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /IdentityService/</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">proxy_pass</span>  http://localhost:50402/</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>  将请求的地址告知被代理服务器
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-PORT <span class="token variable">$remote_port</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto  <span class="token variable">$scheme</span></span><span class="token punctuation">;</span> <span class="token comment">#将请求使用的协议告知被代理服务器</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Prefix IdentityService</span><span class="token punctuation">;</span> <span class="token comment">#将路由名称&quot;IdentityService&quot;告知被代理服务器</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置证书" tabindex="-1"><a class="header-anchor" href="#配置证书"><span>配置证书</span></a></h3><p>示例一</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>http<span class="token punctuation">{</span>
  <span class="token preprocessor property">#http节点中可以添加多个server节点</span>
  server<span class="token punctuation">{</span>
      <span class="token preprocessor property">#ssl 需要监听443端口</span>
      listen <span class="token number">443</span><span class="token punctuation">;</span>
      <span class="token preprocessor property">## CA证书对应的域名</span>
      server_name www<span class="token punctuation">.</span>ilovey<span class="token punctuation">.</span>live<span class="token punctuation">;</span>
      <span class="token preprocessor property">## 开启ssl</span>
      <span class="token class-name">ssl</span> <span class="token keyword">on</span><span class="token punctuation">;</span>
      <span class="token preprocessor property">## 服务器证书绝对路径</span>
      ssl_certificate <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span>4467149_www<span class="token punctuation">.</span>ilovey<span class="token punctuation">.</span>live<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
      <span class="token preprocessor property">## 服务器端证书key绝对路径 </span>
      ssl_certificate_key <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span>4467149_www<span class="token punctuation">.</span>ilovey<span class="token punctuation">.</span>live<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
      <span class="token preprocessor property">## session超时</span>
      ssl_session_timeout <span class="token number">5m</span><span class="token punctuation">;</span>
      <span class="token preprocessor property">## 协议类型</span>
      ssl_protocols TLSv1 TLSv1<span class="token punctuation">.</span><span class="token number">1</span> TLSv1<span class="token punctuation">.</span><span class="token number">2</span><span class="token punctuation">;</span>
      <span class="token preprocessor property">## ssl算法列表 </span>
      ssl_ciphers ECDHE<span class="token operator">-</span>RSA<span class="token operator">-</span>AES128<span class="token operator">-</span>GCM<span class="token operator">-</span>SHA256<span class="token punctuation">:</span>HIGH<span class="token punctuation">:</span><span class="token operator">!</span>aNULL<span class="token punctuation">:</span><span class="token operator">!</span>MD5<span class="token punctuation">:</span><span class="token operator">!</span>RC4<span class="token punctuation">:</span><span class="token operator">!</span>DHE<span class="token punctuation">;</span>
      <span class="token preprocessor property">##  是否 服务器决定使用哪种算法  on/off   TLSv1.1 的话需要开启</span>
      <span class="token class-name">ssl_prefer_server_ciphers</span> <span class="token keyword">on</span><span class="token punctuation">;</span>

      location <span class="token operator">^</span><span class="token operator">~</span>  <span class="token operator">/</span>zhihao<span class="token operator">/</span> <span class="token punctuation">{</span>
          proxy_set_header Host $host<span class="token punctuation">;</span>
          <span class="token class-name">proxy_pass</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8080</span><span class="token operator">/</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token preprocessor property">## 如果用户通过 http 访问 直接重写 跳转到 https 这个是一个很有必要的操作</span>
  server<span class="token punctuation">{</span>
      listen <span class="token number">80</span><span class="token punctuation">;</span>
      server_name www<span class="token punctuation">.</span>ilovey<span class="token punctuation">.</span>live<span class="token punctuation">;</span>
      rewrite <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>ilovey<span class="token punctuation">.</span>live<span class="token punctuation">:</span><span class="token number">443</span><span class="token operator">/</span>$<span class="token number">1</span> permanent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例二</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>server
<span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  listen <span class="token number">443</span> <span class="token class-name">ssl</span> http2<span class="token punctuation">;</span>
  server_name ilovey<span class="token punctuation">.</span>live<span class="token punctuation">;</span>
  index index<span class="token punctuation">.</span>php index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm <span class="token keyword">default</span><span class="token punctuation">.</span>php <span class="token keyword">default</span><span class="token punctuation">.</span>htm <span class="token keyword">default</span><span class="token punctuation">.</span>html<span class="token punctuation">;</span>
  root <span class="token operator">/</span>www<span class="token operator">/</span>wwwroot<span class="token operator">/</span>网站目录<span class="token punctuation">;</span>

  <span class="token preprocessor property">#SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则</span>
  <span class="token preprocessor property">#error_page 404/404.html;</span>
  ssl_certificate    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span>4467149_www<span class="token punctuation">.</span>ilovey<span class="token punctuation">.</span>live<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>
  ssl_certificate_key    <span class="token operator">/</span>www<span class="token operator">/</span>server<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span>4467149_www<span class="token punctuation">.</span>ilovey<span class="token punctuation">.</span>live<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
  ssl_protocols TLSv1 TLSv1<span class="token punctuation">.</span><span class="token number">1</span> TLSv1<span class="token punctuation">.</span><span class="token number">2</span><span class="token punctuation">;</span>
  ssl_ciphers ECDHE<span class="token operator">-</span>RSA<span class="token operator">-</span>AES128<span class="token operator">-</span>GCM<span class="token operator">-</span>SHA256<span class="token punctuation">:</span>HIGH<span class="token punctuation">:</span><span class="token operator">!</span>aNULL<span class="token punctuation">:</span><span class="token operator">!</span>MD5<span class="token punctuation">:</span><span class="token operator">!</span>RC4<span class="token punctuation">:</span><span class="token operator">!</span>DHE<span class="token punctuation">;</span>
  <span class="token class-name">ssl_prefer_server_ciphers</span> <span class="token keyword">on</span><span class="token punctuation">;</span>
  <span class="token class-name">ssl_session_cache</span> shared<span class="token punctuation">:</span>SSL<span class="token punctuation">:</span><span class="token number">10m</span><span class="token punctuation">;</span>
  ssl_session_timeout <span class="token number">10m</span><span class="token punctuation">;</span>
  error_page <span class="token number">497</span>  https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>$host$request_uri<span class="token punctuation">;</span>


  <span class="token preprocessor property">#SSL-END</span>

  <span class="token preprocessor property">#ERROR-PAGE-START  错误页配置，可以注释、删除或修改</span>
  <span class="token preprocessor property">#error_page 404 /404.html;</span>
  <span class="token preprocessor property">#error_page 502 /502.html;</span>
  <span class="token preprocessor property">#ERROR-PAGE-END</span>

  <span class="token preprocessor property">#PHP-INFO-START  PHP引用配置，可以注释或修改</span>

  <span class="token preprocessor property">#PROXY-START</span>
  location <span class="token operator">/</span>
  <span class="token punctuation">{</span>
      <span class="token class-name">proxy_pass</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">8886</span><span class="token punctuation">;</span>
      proxy_set_header Host $host<span class="token punctuation">;</span>
      proxy_set_header X<span class="token operator">-</span>Real<span class="token operator">-</span>IP $remote_addr<span class="token punctuation">;</span>
      proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>For $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
      proxy_set_header REMOTE<span class="token operator">-</span>HOST $remote_addr<span class="token punctuation">;</span>

      <span class="token preprocessor property">#持久化连接相关配置</span>
      <span class="token preprocessor property">#proxy_connect_timeout 30s;</span>
      <span class="token preprocessor property">#proxy_read_timeout 86400s;</span>
      <span class="token preprocessor property">#proxy_send_timeout 30s;</span>
      <span class="token preprocessor property">#proxy_http_version 1.1;</span>
      <span class="token preprocessor property">#proxy_set_header Upgrade $http_upgrade;</span>
      <span class="token preprocessor property">#proxy_set_header Connection </span><span class="token string">&quot;upgrade&quot;</span><span class="token punctuation">;</span>
      <span class="token preprocessor property">##expires 12h;</span>
  <span class="token punctuation">}</span>

  <span class="token preprocessor property">#PHP-INFO-END</span>



  <span class="token preprocessor property">#禁止访问的文件或目录</span>
  location <span class="token operator">~</span> <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span>\\<span class="token punctuation">.</span>user<span class="token punctuation">.</span>ini<span class="token operator">|</span>\\<span class="token punctuation">.</span>htaccess<span class="token operator">|</span>\\<span class="token punctuation">.</span>git<span class="token operator">|</span>\\<span class="token punctuation">.</span>svn<span class="token operator">|</span>\\<span class="token punctuation">.</span>project<span class="token operator">|</span>LICENSE<span class="token operator">|</span>README<span class="token punctuation">.</span>md<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">404</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token preprocessor property">#一键申请SSL证书验证目录相关设置</span>
  location <span class="token operator">~</span> \\<span class="token punctuation">.</span>well<span class="token operator">-</span>known<span class="token punctuation">{</span>
      <span class="token class-name">allow</span> all<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例配置" tabindex="-1"><a class="header-anchor" href="#示例配置"><span>示例配置</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /swagger</span><span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">rewrite</span> ^/swagger/(.*)$ /<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
        <span class="token comment">## proxy_pass http://localhost:5000;</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://www.baidu.com</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础的通过80端口转发" tabindex="-1"><a class="header-anchor" href="#基础的通过80端口转发"><span>基础的通过80端口转发</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code>    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://47.104.255.61:8000</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过其他参数转发" tabindex="-1"><a class="header-anchor" href="#通过其他参数转发"><span>通过其他参数转发</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  47.104.255.61</span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">location</span> ~ /web/</span><span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">rewrite</span> ^/web/(.*)$ /<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://47.104.255.61:8000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),d={href:"http://47.104.255.61",target:"_blank",rel:"noopener noreferrer"},u=p(`<p>其他写法</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /swagger</span><span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">rewrite</span> ^/swagger/(.*)$ /<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
  <span class="token comment">## proxy_pass http://localhost:5000;</span>
  <span class="token directive"><span class="token keyword">proxy_pass</span> https://baike.baidu.com</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k={href:"https://baike.baidu.com/item/%E6%B5%8B%E8%AF%95/112688",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>或者</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>location <span class="token operator">/</span>IdentityService<span class="token operator">/</span> <span class="token punctuation">{</span>
    <span class="token class-name">proxy_pass</span>  http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">50402</span><span class="token operator">/</span><span class="token punctuation">;</span>
    proxy_set_header Host $host<span class="token punctuation">;</span>
    proxy_set_header X<span class="token operator">-</span>Real<span class="token operator">-</span>IP $remote_addr<span class="token punctuation">;</span>
    proxy_set_header X<span class="token operator">-</span>Real<span class="token operator">-</span>PORT $remote_port<span class="token punctuation">;</span>
    proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>For $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
    proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Proto  $scheme<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原请求地址：localhost:50402/login/CreateWorld 现请求地址：localhost/IdentityService/login/CreateWorld</p><h2 id="问题处理" tabindex="-1"><a class="header-anchor" href="#问题处理"><span>问题处理</span></a></h2><h3 id="不能访问子路径错误" tabindex="-1"><a class="header-anchor" href="#不能访问子路径错误"><span>不能访问子路径错误</span></a></h3><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /flow</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:9083/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">## 修改</span>
<span class="token directive"><span class="token keyword">location</span> /flow/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:9083/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
解决：/flow 后面加个/

配置多个前端代码/a/ /b/不能访问
解决：把/a/ /b/放在根目录下面 （就是只有一个根目录，不过根目录里面可以放很多项目文件夹）

去掉请求后面的斜杠 添加在location节点里面 解决浏览器请求拼接到接口前面的诡异问题
<span class="token directive"><span class="token keyword">rewrite</span> ^/(.*)/$ /<span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2>`,7),m={href:"https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN",target:"_blank",rel:"noopener noreferrer"};function b(h,y){const a=i("ExternalLinkIcon");return o(),l("div",null,[r,s("p",null,[n("请求地址："),s("a",d,[n("http://47.104.255.61"),e(a)]),n("/web/Home/Login")]),u,s("p",null,[n("想要访问："),s("a",k,[n("https://baike.baidu.com/item/%E6%B5%8B%E8%AF%95/112688"),e(a)]),n(" 只需要访问：localhost/swagger/item/%E6%B5%8B%E8%AF%95/112688")]),v,s("p",null,[n("自动生成配置文件："),s("a",m,[n("https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN"),e(a)])])])}const x=t(c,[["render",b],["__file","peizhiwenjian.html.vue"]]),g=JSON.parse('{"path":"/middleware/nginx/peizhiwenjian.html","title":"配置文件","lang":"zh-CN","frontmatter":{"title":"配置文件","lang":"zh-CN","date":"2023-10-02T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["middleware"],"tag":["无"],"filename":"peizhiwenjian","slug":"qn37g6","docsId":"26511815","description":"说明 linux里面的配置文件所在的位置：/user/local/nginx/conf/nginx.conf 三部分组成 1.全局块 设置影响nginx服务器整体运行的配置指令 2.events块 影响nginx服务器与用户的网络连接 3.http全局块 包括：http全局块和server块 默认配置 完整的配置文件 常用配置 后端配置 代理静态网站 ...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/nginx/peizhiwenjian.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"配置文件"}],["meta",{"property":"og:description","content":"说明 linux里面的配置文件所在的位置：/user/local/nginx/conf/nginx.conf 三部分组成 1.全局块 设置影响nginx服务器整体运行的配置指令 2.events块 影响nginx服务器与用户的网络连接 3.http全局块 包括：http全局块和server块 默认配置 完整的配置文件 常用配置 后端配置 代理静态网站 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-19T14:00:28.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-19T14:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置文件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-19T14:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"三部分组成","slug":"三部分组成","link":"#三部分组成","children":[]},{"level":2,"title":"默认配置","slug":"默认配置","link":"#默认配置","children":[]},{"level":2,"title":"完整的配置文件","slug":"完整的配置文件","link":"#完整的配置文件","children":[]},{"level":2,"title":"常用配置","slug":"常用配置","link":"#常用配置","children":[{"level":3,"title":"后端配置","slug":"后端配置","link":"#后端配置","children":[]},{"level":3,"title":"代理静态网站","slug":"代理静态网站","link":"#代理静态网站","children":[]},{"level":3,"title":"前后端分离项目示例","slug":"前后端分离项目示例","link":"#前后端分离项目示例","children":[]},{"level":3,"title":"IP代理","slug":"ip代理","link":"#ip代理","children":[]},{"level":3,"title":"配置证书","slug":"配置证书","link":"#配置证书","children":[]}]},{"level":2,"title":"示例配置","slug":"示例配置","link":"#示例配置","children":[{"level":3,"title":"基础的通过80端口转发","slug":"基础的通过80端口转发","link":"#基础的通过80端口转发","children":[]},{"level":3,"title":"通过其他参数转发","slug":"通过其他参数转发","link":"#通过其他参数转发","children":[]}]},{"level":2,"title":"问题处理","slug":"问题处理","link":"#问题处理","children":[{"level":3,"title":"不能访问子路径错误","slug":"不能访问子路径错误","link":"#不能访问子路径错误","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1697724028000,"updatedTime":1697724028000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":4.72,"words":1417},"filePathRelative":"middleware/nginx/peizhiwenjian.md","localizedDate":"2023年10月2日","excerpt":"<h2>说明</h2>\\n<p>linux里面的配置文件所在的位置：/user/local/nginx/conf/nginx.conf</p>\\n<h2>三部分组成</h2>\\n<p>1.全局块\\n设置影响nginx服务器整体运行的配置指令\\n2.events块\\n影响nginx服务器与用户的网络连接\\n3.http全局块\\n包括：http全局块和server块</p>\\n<h2>默认配置</h2>\\n<div class=\\"language-nginx\\" data-ext=\\"nginx\\" data-title=\\"nginx\\"><pre class=\\"language-nginx\\"><code><span class=\\"token directive\\"><span class=\\"token keyword\\">location</span> /</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token directive\\"><span class=\\"token keyword\\">root</span>   /usr/share/nginx/html</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token directive\\"><span class=\\"token keyword\\">index</span>  index.html index.htm</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{x as comp,g as data};
