import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as s,c as d,a as o,d as e,e as t,b as a}from"./app-DMmdIwn0.js";const i="/kbms/common/1688295946469-a0a6824d-cd03-4b47-9bac-9ae88eb7c1e5.png",l="/kbms/common/1688295946463-2b451aef-cf4d-48a4-93eb-43b3d73a6829.png",p="/kbms/common/1688295946463-40d42edd-5748-45fb-9335-acc9cbb768bd.png",m="/kbms/common/1688295946461-2d78d3bf-3529-4c98-998c-dbf197dbc577.png",g="/kbms/common/1688295946548-26b04ea9-a49e-4383-824d-65fa15eb8ab3.png",b="/kbms/common/1688295947425-c75b7752-84ff-4e8d-9763-1161c209bc1f.png",k="/kbms/cloud/image-20240217195944517.png",h="/kbms/common/1688295947783-d80bedf6-ebb3-4bc9-94e7-d680bfd89e86.png",u="/kbms/common/1688295947990-89c1310b-4b0b-4900-be7b-94c94a74df9d.png",f="/kbms/common/1609560066384-3de524a0-156a-47ff-b2b6-8b7ad0cacf02.png",_="/kbms/common/1609560066391-06e40e32-4c11-4334-a2e7-070726cf55b6.png",w={},y=a('<h2 id="启用hyper-v" tabindex="-1"><a class="header-anchor" href="#启用hyper-v"><span>启用Hyper-V</span></a></h2><p>打开控制面板 - 程序和功能 - 启用或关闭Windows功能，勾选Hyper-V，然后点击确定即可，如图： <img src="'+i+'" alt="image.png" loading="lazy"> 点击确定后，启用完毕会提示重启系统，我们可以稍后再重启。</p><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装Docker</span></a></h2>',3),z={href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"},v=o("img",{src:l,alt:"image.png",loading:"lazy"},null,-1),D=o("img",{src:p,alt:"image.png",loading:"lazy"},null,-1),x=a('<h2 id="启动docker" tabindex="-1"><a class="header-anchor" href="#启动docker"><span>启动Docker</span></a></h2><p>1.在桌面找到Docker for Windows快捷方式，双击启动即可！启动成功后托盘处会有一个小鲸鱼的图标。可以通过命令行工具输入命令：<code>docker version</code>可以查看当前docker版本号，如图： <img src="'+m+'" alt="image.png" loading="lazy"> 注：在这里可能出现问题，启动docker时发现无法启动，具体报错显示如下： <img src="'+g+'" alt="image.png" loading="lazy"> 在控制台输入docker version 显示错误如下 <img src="'+b+'" alt="image.png" loading="lazy"> 解决办法：首先确保Hyper-V已经启用 打开任务管理器，查看性能-CPU-虚拟化已启用 <img src="'+k+`" alt="image-20240217195944517" loading="lazy"> 如果没有启动，那么就需要百度去启用虚拟化，如果是启动状态docker还不能启动，可以尝试如下办法： 在控制台输入下面命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token string">&quot;C:\\Program Files\\Docker\\Docker&quot;</span>
./DockerCli.exe <span class="token parameter variable">-SwitchDaemon</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),V={href:"https://registry.docker-cn.com",target:"_blank",rel:"noopener noreferrer"},C=o("img",{src:h,alt:"image.png",loading:"lazy"},null,-1),H=o("img",{src:u,alt:"image.png",loading:"lazy"},null,-1),T=a(`<h2 id="安装路径修改" tabindex="-1"><a class="header-anchor" href="#安装路径修改"><span>安装路径修改</span></a></h2><p>安装后docker默认是安装在C盘下的：C:\\Program Files\\Docker，默认配置到此就安装好了。下面将安装目录修改为D盘：D:\\Docker</p><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h3><p>使用管理员身份打开命令提示符界面 输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mklink /j <span class="token string">&quot;C:\\Program Files\\Docker&quot;</span> <span class="token string">&quot;D:\\Docker&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h3><p>将C盘下docker安装文件复制到你想的磁盘分区 接着打开注册表 搜索com.docker.service然后修改imagepath为你想移动的目录 <img src="`+f+'" alt="image.png" loading="lazy"> 然后修改系统环境变量为： <img src="'+_+'" alt="image.png" loading="lazy"> 最下面那个不动</p><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>docker desktop位置修改：https://www.cnblogs.com/lrain/p/17263449.html</p>',9);function I(N,P){const n=r("ExternalLinkIcon");return s(),d("div",null,[y,o("p",null,[e("Docker下载地址为："),o("a",z,[e("https://www.docker.com/products/docker-desktop"),t(n)]),e(" 点击如图处即可下载安装包： "),v,e(" 下载完成后运行安装包，安装完成后界面如图： "),D,e(" 单击Close and log out，这个时候我们重启一次电脑。")]),x,o("p",null,[e("重启docker，docker desktop is running2.更换镜像源地址 中国官方镜像源地址为："),o("a",V,[e("https://registry.docker-cn.com"),t(n)]),e(" 点击托盘处docker图标右键选择-Settings，然后修改如下： "),C,e(" 点击Apply后会重启Docker。 3.载入测试镜像测试 输入命名“docker run hello-world”可以加载测试镜像来测试。如图： "),H,e(" 这样即表示安装成功了！")]),T])}const W=c(w,[["render",I],["__file","windowsInstall.html.vue"]]),S=JSON.parse('{"path":"/cloud/container/docker/install/windowsInstall.html","title":"windows安装docker","lang":"zh-CN","frontmatter":{"title":"windows安装docker","lang":"zh-CN","date":"2023-07-02T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["cloud"],"tag":["无"],"filename":"windowsInstall","slug":"dnozwd","docsId":"29454321","description":"启用Hyper-V 打开控制面板 - 程序和功能 - 启用或关闭Windows功能，勾选Hyper-V，然后点击确定即可，如图： image.png 点击确定后，启用完毕会提示重启系统，我们可以稍后再重启。 安装Docker Docker下载地址为：https://www.docker.com/products/docker-desktop 点击如图处...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/cloud/container/docker/install/windowsInstall.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"windows安装docker"}],["meta",{"property":"og:description","content":"启用Hyper-V 打开控制面板 - 程序和功能 - 启用或关闭Windows功能，勾选Hyper-V，然后点击确定即可，如图： image.png 点击确定后，启用完毕会提示重启系统，我们可以稍后再重启。 安装Docker Docker下载地址为：https://www.docker.com/products/docker-desktop 点击如图处..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1688295946469-a0a6824d-cd03-4b47-9bac-9ae88eb7c1e5.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-17T13:52:08.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-07-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-17T13:52:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"windows安装docker\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1688295946469-a0a6824d-cd03-4b47-9bac-9ae88eb7c1e5.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1688295946463-2b451aef-cf4d-48a4-93eb-43b3d73a6829.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1688295946463-40d42edd-5748-45fb-9335-acc9cbb768bd.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1688295946461-2d78d3bf-3529-4c98-998c-dbf197dbc577.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1688295946548-26b04ea9-a49e-4383-824d-65fa15eb8ab3.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1688295947425-c75b7752-84ff-4e8d-9763-1161c209bc1f.png\\",\\"https://azrng.gitee.io/kbms/kbms/cloud/image-20240217195944517.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1688295947783-d80bedf6-ebb3-4bc9-94e7-d680bfd89e86.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1688295947990-89c1310b-4b0b-4900-be7b-94c94a74df9d.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609560066384-3de524a0-156a-47ff-b2b6-8b7ad0cacf02.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609560066391-06e40e32-4c11-4334-a2e7-070726cf55b6.png\\"],\\"datePublished\\":\\"2023-07-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-17T13:52:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"启用Hyper-V","slug":"启用hyper-v","link":"#启用hyper-v","children":[]},{"level":2,"title":"安装Docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":2,"title":"启动Docker","slug":"启动docker","link":"#启动docker","children":[]},{"level":2,"title":"安装路径修改","slug":"安装路径修改","link":"#安装路径修改","children":[{"level":3,"title":"方法一","slug":"方法一","link":"#方法一","children":[]},{"level":3,"title":"方法二","slug":"方法二","link":"#方法二","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1695541854000,"updatedTime":1708177928000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":2.26,"words":677},"filePathRelative":"cloud/container/docker/install/windowsInstall.md","localizedDate":"2023年7月2日","excerpt":"<h2>启用Hyper-V</h2>\\n<p>打开控制面板 - 程序和功能 - 启用或关闭Windows功能，勾选Hyper-V，然后点击确定即可，如图：\\n<img src=\\"/common/1688295946469-a0a6824d-cd03-4b47-9bac-9ae88eb7c1e5.png\\" alt=\\"image.png\\" loading=\\"lazy\\">\\n点击确定后，启用完毕会提示重启系统，我们可以稍后再重启。</p>\\n<h2>安装Docker</h2>\\n<p>Docker下载地址为：<a href=\\"https://www.docker.com/products/docker-desktop\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.docker.com/products/docker-desktop</a> 点击如图处即可下载安装包：\\n<img src=\\"/common/1688295946463-2b451aef-cf4d-48a4-93eb-43b3d73a6829.png\\" alt=\\"image.png\\" loading=\\"lazy\\">\\n下载完成后运行安装包，安装完成后界面如图：\\n<img src=\\"/common/1688295946463-40d42edd-5748-45fb-9335-acc9cbb768bd.png\\" alt=\\"image.png\\" loading=\\"lazy\\">\\n单击Close and log out，这个时候我们重启一次电脑。</p>","autoDesc":true}');export{W as comp,S as data};