import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as b,o as r,c as a,a as e,d as n,e as t}from"./app-DMmdIwn0.js";const i={},o=e("h2",{id:"获取服务器信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取服务器信息"},[e("span",null,"获取服务器信息")])],-1),l={href:"http://www.cnblogs.com/top5/archive/2010/04/23/1718943.html",target:"_blank",rel:"noopener noreferrer"},T=e("h2",{id:"获取客户端信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取客户端信息"},[e("span",null,"获取客户端信息")])],-1),c={href:"http://www.cnblogs.com/top5/archive/2010/04/23/1718943.html",target:"_blank",rel:"noopener noreferrer"};function m(u,S){const s=b("ExternalLinkIcon");return r(),a("div",null,[o,e("p",null,[n('if (!IsPostBack)             {                 Label1.Text = "服务器名称："+Server.MachineName;//服务器名称                 Label2.Text = "服务器IP地址：" + Request.ServerVariables["LOCAL_ADDR"];//服务器IP地址                 Label3.Text = "服务器域名：" + Request.ServerVariables["SERVER_NAME"];//服务器域名                 Label4.Text = ".NET解释引擎版本：" + ".NET CLR" + Environment.Version.Major + "." + Environment.Version.Minor + "." + Environment.Version.Build + "." + Environment.Version.Revision;//.NET解释引擎版本                 Label5.Text = "服务器操作系统版本：" + Environment.OSVersion.ToString();//服务器操作系统版本                 Label6.Text = "服务器IIS版本：" + Request.ServerVariables["SERVER_SOFTWARE"];//服务器IIS版本                 Label7.Text = "HTTP访问端口：" + Request.ServerVariables["SERVER_PORT"];//HTTP访问端口                 Label8.Text = "虚拟目录的绝对路径：" + Request.ServerVariables["APPL_RHYSICAL_PATH"];//虚拟目录的绝对路径                 Label9.Text = "执行文件的绝对路径：" + Request.ServerVariables["PATH_TRANSLATED"];//执行文件的绝对路径                 Label10.Text = "虚拟目录Session总数：" + Session.Contents.Count.ToString();//虚拟目录Session总数                 Label11.Text = "虚拟目录Application总数：" + Application.Contents.Count.ToString();//虚拟目录Application总数                 Label12.Text = "域名主机：" + Request.ServerVariables["HTTP_HOST"];//域名主机                 Label13.Text = "服务器区域语言：" + Request.ServerVariables["HTTP_ACCEPT_LANGUAGE"];//服务器区域语言                 Label14.Text = "用户信息：" + Request.ServerVariables["HTTP_USER_AGENT"];                 Label14.Text="CPU个数："+Environment.GetEnvironmentVariable("NUMBER_OF_PROCESSORS");//CPU个数                 Label15.Text = "CPU类型：" + Environment.GetEnvironmentVariable("PROCESSOR_IDENTIFIER");//CPU类型                 Label16.Text = "进程开始时间：" + GetPrStart();//进程开始时间                 Label17.Text = "AspNet 内存占用：" + GetAspNetN();//AspNet 内存占用                 Label18.Text = "AspNet CPU时间：" + GetAspNetCpu();//AspNet CPU时间                 Label19.Text = "FSO 文本文件读写：" + Check("Scripting.FileSystemObject");//FSO 文本文件读写                 Label20.Text = "应用程序占用内存" + GetServerAppN();//应用程序占用内存             }   来自 <'),e("a",l,[n("http://www.cnblogs.com/top5/archive/2010/04/23/1718943.html"),t(s)]),n(">")]),T,e("p",null,[n('客户端IP：Page.Request.UserHostAddress 用户信息：Page.User; 服务器电脑名称：Page.Server.MachineName 当前用户电脑名称： System.Net.Dns.GetHostName() 当前电脑名： System.Environment.MachineName 当前电脑所属网域： System.Environment.UserDomainName 当前电脑用户： System.Environment.UserName 浏览器类型：Request.Browser.Browser 浏览器标识：Request.Browser.Id 浏览器版本号：Request.Browser.Version 浏览器是不是测试版本：Request.Browser.Beta 浏览器的分辨率(像素)：Request["width"].ToString() + "*" + Request["height"].ToString();//1280/1024 客户端的操作系统：Request.Browser.Platform 是不是win16系统：Request.Browser.Win16 是不是win32系统：Request.Browser.Win32   来自 <'),e("a",c,[n("http://www.cnblogs.com/top5/archive/2010/04/23/1718943.html"),t(s)]),n(">")])])}const R=p(i,[["render",m],["__file","huoqufuwuqixinxifangfa.html.vue"]]),L=JSON.parse('{"path":"/dotnet/webyingyong/webform/changedaimajiexi/huoqufuwuqixinxifangfa.html","title":"获取服务器信息方法","lang":"zh-CN","frontmatter":{"title":"获取服务器信息方法","lang":"zh-CN","date":"2021-02-17T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"huoqufuwuqixinxifangfa","slug":"lcku01","docsId":"31541765","description":"获取服务器信息 if (!IsPostBack) { Label1.Text = \\"服务器名称：\\"+Server.MachineName;//服务器名称 Label2.Text = \\"服务器IP地址：\\" + Request.ServerVariables[\\"LOCAL_ADDR\\"];//服务器IP地址 Label3.Text = \\"服务器域名：\\" + ...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/webyingyong/webform/changedaimajiexi/huoqufuwuqixinxifangfa.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"获取服务器信息方法"}],["meta",{"property":"og:description","content":"获取服务器信息 if (!IsPostBack) { Label1.Text = \\"服务器名称：\\"+Server.MachineName;//服务器名称 Label2.Text = \\"服务器IP地址：\\" + Request.ServerVariables[\\"LOCAL_ADDR\\"];//服务器IP地址 Label3.Text = \\"服务器域名：\\" + ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T08:11:43.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2021-02-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T08:11:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"获取服务器信息方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T08:11:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"获取服务器信息","slug":"获取服务器信息","link":"#获取服务器信息","children":[]},{"level":2,"title":"获取客户端信息","slug":"获取客户端信息","link":"#获取客户端信息","children":[]}],"git":{"createdTime":1697962303000,"updatedTime":1697962303000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.67,"words":502},"filePathRelative":"dotnet/webyingyong/webform/changedaimajiexi/huoqufuwuqixinxifangfa.md","localizedDate":"2021年2月17日","excerpt":"<h2>获取服务器信息</h2>\\n<p>if (!IsPostBack)\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label1.Text = \\"服务器名称：\\"+Server.MachineName;//服务器名称\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label2.Text = \\"服务器IP地址：\\" + Request.ServerVariables[\\"LOCAL_ADDR\\"];//服务器IP地址\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label3.Text = \\"服务器域名：\\" + Request.ServerVariables[\\"SERVER_NAME\\"];//服务器域名\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label4.Text = \\".NET解释引擎版本：\\" + \\".NET CLR\\" + Environment.Version.Major + \\".\\" + Environment.Version.Minor + \\".\\" + Environment.Version.Build + \\".\\" + Environment.Version.Revision;//.NET解释引擎版本\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label5.Text = \\"服务器操作系统版本：\\" + Environment.OSVersion.ToString();//服务器操作系统版本\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label6.Text = \\"服务器IIS版本：\\" + Request.ServerVariables[\\"SERVER_SOFTWARE\\"];//服务器IIS版本\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label7.Text = \\"HTTP访问端口：\\" + Request.ServerVariables[\\"SERVER_PORT\\"];//HTTP访问端口\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label8.Text = \\"虚拟目录的绝对路径：\\" + Request.ServerVariables[\\"APPL_RHYSICAL_PATH\\"];//虚拟目录的绝对路径\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label9.Text = \\"执行文件的绝对路径：\\" + Request.ServerVariables[\\"PATH_TRANSLATED\\"];//执行文件的绝对路径\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label10.Text = \\"虚拟目录Session总数：\\" + Session.Contents.Count.ToString();//虚拟目录Session总数\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label11.Text = \\"虚拟目录Application总数：\\" + Application.Contents.Count.ToString();//虚拟目录Application总数\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label12.Text = \\"域名主机：\\" + Request.ServerVariables[\\"HTTP_HOST\\"];//域名主机\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label13.Text = \\"服务器区域语言：\\" + Request.ServerVariables[\\"HTTP_ACCEPT_LANGUAGE\\"];//服务器区域语言\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label14.Text = \\"用户信息：\\" + Request.ServerVariables[\\"HTTP_USER_AGENT\\"];\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label14.Text=\\"CPU个数：\\"+Environment.GetEnvironmentVariable(\\"NUMBER_OF_PROCESSORS\\");//CPU个数\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label15.Text = \\"CPU类型：\\" + Environment.GetEnvironmentVariable(\\"PROCESSOR_IDENTIFIER\\");//CPU类型\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label16.Text = \\"进程开始时间：\\" + GetPrStart();//进程开始时间\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label17.Text = \\"AspNet 内存占用：\\" + GetAspNetN();//AspNet 内存占用\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label18.Text = \\"AspNet CPU时间：\\" + GetAspNetCpu();//AspNet CPU时间\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label19.Text = \\"FSO 文本文件读写：\\" + Check(\\"Scripting.FileSystemObject\\");//FSO 文本文件读写\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Label20.Text = \\"应用程序占用内存\\" + GetServerAppN();//应用程序占用内存\\n&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;}\\n&nbsp;\\n来自 &lt;<a href=\\"http://www.cnblogs.com/top5/archive/2010/04/23/1718943.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://www.cnblogs.com/top5/archive/2010/04/23/1718943.html</a>&gt;</p>","autoDesc":true}');export{R as comp,L as data};