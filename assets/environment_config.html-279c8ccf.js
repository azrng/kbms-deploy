import{_ as l,W as r,X as s,Y as e,Z as o,$ as i,a0 as t,C as a}from"./framework-63781bb7.js";const d={},c=e("h1",{id:"server2012r2安装net4-6-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#server2012r2安装net4-6-1","aria-hidden":"true"},"#"),o(" Server2012r2安装net4.6.1")],-1),p=e("p",null,"下载好net 4.6后提示需要安装对应的KB2919355 更新后才可以继续安装",-1),g={href:"https://www.microsoft.com/zh-CN/download/details.aspx?id=42334",target:"_blank",rel:"noopener noreferrer"},h=t("<p>下载时候要选择中文，要看安装说明</p><ol><li><ol><li>若要开始下载，请单击“下载”按钮，然后执行以下操作之一，或者从“更改语言”中选择另一种语言，然后单击“更改”。</li></ol></li></ol><ul><li><ul><li>单击“运行”立即开始安装。</li><li>单击“保存”将下载文件复制到您的计算机上供以后安装。</li></ul></li></ul><ol><li><ol><li>这些 KB 必须按以下顺序安装：clearcompressionflag.exe、KB2919355、KB2932046、KB2959977、KB2937592、KB2938439、KB2934018。</li><li>KB2919442 是 Windows Server 2012 R2 更新的先决条件，在尝试安装 KB2919355 之前应先安装 clearcompressionflag.exe</li></ol></li></ol>",4),f={href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=42162",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=42162",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"然后下载下然后安装规定的顺序安装后重启电脑，就可以安装4.6.1了",-1),w=e("h1",{id:"server2012安装-vc2015",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#server2012安装-vc2015","aria-hidden":"true"},"#"),o(" Server2012安装 VC2015")],-1),u=e("p",null,"普通的windows server 2012因为没有更新的问题，所以导致部署不了netcore项目（装不了2015 Redistributable），所以需要安装以下补丁才可以。",-1),x=e("p",null,"下载链接",-1),b={href:"http://www.microsoft.com/en-us/download/details.aspx?id=48145",target:"_blank",rel:"noopener noreferrer"},B=t('<p>安装如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212122219718.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>错误日志：Windows8.1-KB2999226-x64.msu 安装失败</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212122219602.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>我们找到这个文件夹，手动安装一下看看效果，如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212122219444.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>解决方案如下：</p>',7),v={href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=42153",target:"_blank",rel:"noopener noreferrer"},K={href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=42153",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"KB2919442 安装完成后，继续安装 Windows Server 2012 R2 Update (KB2919355) 所有补丁，如下",-1),W={href:"http://www.microsoft.com/downloads/details.aspx?FamilyId=373b1bb0-6d55-462e-98b7-6cb7d9ef1448",target:"_blank",rel:"noopener noreferrer"},k=t('<figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212122219664.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog202212122219237.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>注意:必须按以下顺序安装更新:</p><p>clearcompressionflag.exe　　　　　　　　　　　　38 KB　　　　　　管理员身份运行，没有界面，后台运</p><p>Windows8.1-KB2919355-x64.msu 　　　　　　　690.8 MB　　　　　安装完成后，需要重起，这个安装过程根据你的硬件配置和网络决定安装速度。</p><p>Windows8.1-KB2932046-x64.msu 　　　　　　　48.0 MB</p><p>Windows8.1-KB2934018-x64.msu 　　　　　　　126.4 MB</p><p>Windows8.1-KB2937592-x64.msu 　　　　　　　303 KB</p><p>Windows8.1-KB2938439-x64.msu 　　　　　　　19.6 MB</p><p>Windows8.1-KB2959977-x64.msu 　　　　　　 2.8 MB</p><p>所有更新包安装完成后，接下来我们继续安装 Microsoft Visual C++ 2015 Redistributable (x64) - 14.0.23026</p><p>下载链接</p>',12),y={href:"http://www.microsoft.com/en-us/download/details.aspx?id=48145",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"如图：",-1),S=e("figure",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/azrng/file/blog202212122219391.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),R=e("figure",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/azrng/file/blog202212122220741.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),C=e("figure",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/azrng/file/blog202212122220673.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),M=e("p",null,"结束",-1);function N(V,E){const n=a("ExternalLinkIcon");return r(),s("div",null,[c,p,e("p",null,[o("所以我们现在开始下载更新包："),e("a",g,[o("https://www.microsoft.com/zh-CN/download/details.aspx?id=42334"),i(n)])]),h,e("p",null,[o("安装上那些需要先安装KB2919442 ，KB2919442 是 Windows Server 2012 R2 更新的先决条件，下载地址："),e("a",f,[o("此处"),i(n)])]),e("p",null,[e("a",m,[o("https://www.microsoft.com/zh-cn/download/details.aspx?id=42162"),i(n)])]),_,w,u,x,e("p",null,[e("a",b,[o("http://www.microsoft.com/en-us/download/details.aspx?id=48145"),i(n)])]),B,e("p",null,[o("先安装补丁 KB2919442 "),e("a",v,[o("立即下载基于 x64 的 Windows Server 2012 R2 的KB2919442补丁"),i(n)]),o("。")]),e("p",null,[o("下载地址 "),e("a",K,[o("https://www.microsoft.com/zh-cn/download/details.aspx?id=42153"),i(n)])]),z,e("p",null,[o("下载地址 "),e("a",W,[o("立即下载基于 x64 的 Windows Server 2012 R2 更新软件包。"),i(n)])]),k,e("p",null,[e("a",y,[o("http://www.microsoft.com/en-us/download/details.aspx?id=48145"),i(n)])]),j,S,R,C,M])}const L=l(d,[["render",N],["__file","environment_config.html.vue"]]);export{L as default};