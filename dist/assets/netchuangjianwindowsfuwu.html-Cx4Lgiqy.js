import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as s,o as a}from"./app-BQsqMNmR.js";const o="/kbms/common/1609838962303-46369c25-d013-4428-9458-1f99dc08e0ac.png",b="/kbms/common/1609838962309-5ba324a1-e654-4818-9ba0-f9e64defef68.png",r="/kbms/common/1609838962308-99fe951a-7526-41cc-918e-c196d897729f.png",i="/kbms/common/1609838962305-3b4f70d9-c959-45dc-8829-30014948830b.png",c="/kbms/common/1609838962320-48d0a12d-2766-47c7-b18b-f33ec8fb6009.png",p="/kbms/common/1609838962318-60eadfd9-8bad-40ef-9c0e-5fcded0c14bf.png",m="/kbms/common/1609838962343-68be279e-acbe-473b-af78-699c51571c16.png",g="/kbms/common/1609838962339-f90d56bd-af3f-421f-947e-afd749e2e100.png",l="/kbms/common/1609838962316-1403b680-7810-406a-87d9-4cac07c59d52.jpeg",d="/kbms/common/1609838962323-f948cbef-4c48-4c8e-a69a-0c21c7bc9cc0.jpeg",u="/kbms/common/1609838962344-403b5607-682e-4b95-997a-9c836cb2ed39.jpeg",f={};function w(h,n){return a(),t("div",null,n[0]||(n[0]=[s('<p>以vs2017为例<br><img src="'+o+'" alt="image.png" loading="lazy"><br>  <br><img src="'+b+'" alt="image.png" loading="lazy"><br> Autolog                是否自动写入系统的日志文件<br> CanHandlePowerEvent    服务时候接受电源事件<br> CanPauseAndContinue         服务是否接受暂停或继续运行的请求<br> CanShutdown 服务是否在运行它的计算机关闭时收到通知，以便能够调用 OnShutDown 过程<br> CanStop                             服务是否接受停止运行的请求<br> ServiceName                      服务名称<br> 三、如何编辑myService源码<br><img src="'+r+'" alt="image.png" loading="lazy"><br> 点击代码视图然后添加代码<br> 默认方法：<br><img src="'+i+'" alt="image.png" loading="lazy"><br>  <br><img src="'+c+'" alt="image.png" loading="lazy"><br> 四、安装程序<br> 切换到myService的设计界面，右键选择“添加安装程序”<br><img src="'+p+'" alt="image.png" loading="lazy"><br> 这时候项目中就会添加一个新类ProjectInstaller.cs和两个组件ServiceProcessInstaller 和 ServiceInstaller。<br><img src="'+m+'" alt="image.png" loading="lazy"><br>  <br><img src="'+g+'" alt="image.png" loading="lazy"><br> 然后选择项目右键生成项目，不能通过F5直接运行项目<br> 五、安装卸载服务<br> 选择 VS组件 “Visual Studio命令提示(2010)” 工具，并以“管理员身份运行&quot;（win7、win8系统下）。<br><strong>注意:这里必须选择“以管理员身份运行”，否则会报错。</strong><br> 从命令行运行 Installutil.exe 目录  命令，以项目中的已编译可执行文件所在的目录作为参数，安装服务：</p><ol><li>方法 1<br> 因为Installutil.exe程序在 C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\目录下，需要通过cmd命令 &quot;cd&quot; 切换目录。<br> 从命令行运行 Installutil.exe /u 目录   命令来卸载服务：<br> 安装服务：<br> installutil.exe E:\\XTestDemo\\X_15_WindowsService\\bin\\Debug\\X_15_WindowsService.exe<br> 卸载服务：<br> installutil.exe /u E:\\XTestDemo\\X_15_WindowsService\\bin\\Debug\\X_15_WindowsService.exe</li><li>方法 2<br> 找到 Installutil.exe 文件，并把它复制到 E:\\XTestDemo\\X_15_WindowsService\\bin\\Debug\\ 目录<br> 现在 Installutil.exe 程序在 E:\\XTestDemo\\X_15_WindowsService\\bin\\Debug\\ 目录下，需要通过cmd命令 &quot;cd&quot; 切换目录。<br> 安装服务：<br> installutil.exe X_15_WindowsService.exe<br> 卸载服务：<br> installutil.exe X_15_WindowsService.exe<br> 七：查看服务状态<br> 在“计算机管理”中，服务 下可以看到刚刚安装的Service服务（cmd命令：services.msc---本地服务设置）：<br><img src="'+l+'" alt="image.jpeg" loading="lazy"><br> 默认是停止状态。右击，选择“启动”，即可开启服务。<br><img src="'+d+'" alt="image.jpeg" loading="lazy"><br> 通过“属性”，可以查看到更详细的信息。<br><img src="'+u+'" alt="image.jpeg" loading="lazy"><br>  <br>  <br>  <br>  <br> c#-windows服务创建和运行：<a href="https://www.cnblogs.com/ywkcode/p/11569593.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/ywkcode/p/11569593.html</a></li></ol>',2)]))}const y=e(f,[["render",w],["__file","netchuangjianwindowsfuwu.html.vue"]]),z=JSON.parse('{"path":"/dotnet/csharp/windowfuwu/netchuangjianwindowsfuwu.html","title":"net创建windows服务","lang":"zh-CN","frontmatter":{"title":"net创建windows服务","lang":"zh-CN","date":"2023-10-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["csharp"],"tag":["无"],"filename":"netchuangjianwindowsfuwu","slug":"gfp4tm","docsId":"29635108","description":"以vs2017为例 image.png image.png Autolog 是否自动写入系统的日志文件 CanHandlePowerEvent 服务时候接受电源事件 CanPauseAndContinue 服务是否接受暂停或继续运行的请求 CanShutdown 服务是否在运行它的计算机关闭时收到通知，以便能够调用 OnShutDown 过程 CanS...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/csharp/windowfuwu/netchuangjianwindowsfuwu.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"net创建windows服务"}],["meta",{"property":"og:description","content":"以vs2017为例 image.png image.png Autolog 是否自动写入系统的日志文件 CanHandlePowerEvent 服务时候接受电源事件 CanPauseAndContinue 服务是否接受暂停或继续运行的请求 CanShutdown 服务是否在运行它的计算机关闭时收到通知，以便能够调用 OnShutDown 过程 CanS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1609838962303-46369c25-d013-4428-9458-1f99dc08e0ac.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-17T14:50:44.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-17T14:50:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"net创建windows服务\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1609838962303-46369c25-d013-4428-9458-1f99dc08e0ac.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609838962309-5ba324a1-e654-4818-9ba0-f9e64defef68.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609838962308-99fe951a-7526-41cc-918e-c196d897729f.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609838962305-3b4f70d9-c959-45dc-8829-30014948830b.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609838962320-48d0a12d-2766-47c7-b18b-f33ec8fb6009.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609838962318-60eadfd9-8bad-40ef-9c0e-5fcded0c14bf.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609838962343-68be279e-acbe-473b-af78-699c51571c16.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609838962339-f90d56bd-af3f-421f-947e-afd749e2e100.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609838962316-1403b680-7810-406a-87d9-4cac07c59d52.jpeg\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609838962323-f948cbef-4c48-4c8e-a69a-0c21c7bc9cc0.jpeg\\",\\"https://azrng.gitee.io/kbms/kbms/common/1609838962344-403b5607-682e-4b95-997a-9c836cb2ed39.jpeg\\"],\\"datePublished\\":\\"2023-10-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-17T14:50:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1700232644000,"updatedTime":1700232644000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":2.01,"words":604},"filePathRelative":"dotnet/csharp/windowfuwu/netchuangjianwindowsfuwu.md","localizedDate":"2023年10月22日","excerpt":"<p>以vs2017为例<br>\\n<img src=\\"/common/1609838962303-46369c25-d013-4428-9458-1f99dc08e0ac.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n&nbsp;<br>\\n<img src=\\"/common/1609838962309-5ba324a1-e654-4818-9ba0-f9e64defef68.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\nAutolog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是否自动写入系统的日志文件<br>\\nCanHandlePowerEvent&nbsp;&nbsp;&nbsp;&nbsp;服务时候接受电源事件<br>\\nCanPauseAndContinue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务是否接受暂停或继续运行的请求<br>\\nCanShutdown 服务是否在运行它的计算机关闭时收到通知，以便能够调用 OnShutDown 过程<br>\\nCanStop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务是否接受停止运行的请求<br>\\nServiceName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务名称<br>\\n三、如何编辑myService源码<br>\\n<img src=\\"/common/1609838962308-99fe951a-7526-41cc-918e-c196d897729f.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n点击代码视图然后添加代码<br>\\n默认方法：<br>\\n<img src=\\"/common/1609838962305-3b4f70d9-c959-45dc-8829-30014948830b.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n&nbsp;<br>\\n<img src=\\"/common/1609838962320-48d0a12d-2766-47c7-b18b-f33ec8fb6009.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n四、安装程序<br>\\n切换到myService的设计界面，右键选择“添加安装程序”<br>\\n<img src=\\"/common/1609838962318-60eadfd9-8bad-40ef-9c0e-5fcded0c14bf.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n这时候项目中就会添加一个新类ProjectInstaller.cs和两个组件ServiceProcessInstaller 和 ServiceInstaller。<br>\\n<img src=\\"/common/1609838962343-68be279e-acbe-473b-af78-699c51571c16.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n&nbsp;<br>\\n<img src=\\"/common/1609838962339-f90d56bd-af3f-421f-947e-afd749e2e100.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n然后选择项目右键生成项目，不能通过F5直接运行项目<br>\\n五、安装卸载服务<br>\\n选择 VS组件 “Visual Studio命令提示(2010)” 工具，并以“管理员身份运行\\"（win7、win8系统下）。<br>\\n<strong>注意:这里必须选择“以管理员身份运行”，否则会报错。</strong><br>\\n从命令行运行 Installutil.exe 目录 &nbsp;命令，以项目中的已编译可执行文件所在的目录作为参数，安装服务：</p>","autoDesc":true}');export{y as comp,z as data};