import{_ as a,W as o,X as t,a0 as e}from"./framework-63781bb7.js";const r={},i=e('<h2 id="post请求" tabindex="-1"><a class="header-anchor" href="#post请求" aria-hidden="true">#</a> POST请求</h2><h3 id="application-x-www-form-urlencoded" tabindex="-1"><a class="header-anchor" href="#application-x-www-form-urlencoded" aria-hidden="true">#</a> application/x-www-form-urlencoded</h3><p>curl localhost:3000/api/basic -X POST -d &#39;hello=world&#39;</p><h3 id="multipart-form-data-最常见的一种post请求" tabindex="-1"><a class="header-anchor" href="#multipart-form-data-最常见的一种post请求" aria-hidden="true">#</a> multipart/form-data(最常见的一种POST请求)</h3><p>curl localhost:3000/api/multipart -F raw=@raw.data -F hello=world</p><h3 id="application-json" tabindex="-1"><a class="header-anchor" href="#application-json" aria-hidden="true">#</a> application/json</h3><p>这种一般设计到文件上传，后端对这种类型的请求处理也复杂一些</p><p>curl localhost:3000/api/json -X POST -d &#39;{&quot;hello&quot;: &quot;world&quot;}&#39; --header &quot;Content-Type: application/json&quot;</p><p>跟发起 application/x-www-form-urlencoded 类型的 POST 请求类似，-d 参数值是 JSON 字符串，并且多了一个 Content-Type: application/json 指定发送内容的格式。</p>',9),l=[i];function n(c,d){return o(),t("div",null,l)}const h=a(r,[["render",n],["__file","curl.html.vue"]]);export{h as default};