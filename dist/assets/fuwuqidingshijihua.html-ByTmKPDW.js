import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as n,o}from"./app-BQsqMNmR.js";const r="/kbms/common/1614064792022-c82d9ed4-424e-4792-9355-b3710a9be2c1.png",i="/kbms/common/1614064792037-f316543f-bd83-44de-ab97-1529323d49f4.png",m="/kbms/common/1614064792039-1253c783-3a32-4933-85f4-95f2adf91725.png",b="/kbms/common/1614064792037-7a355def-55ff-4931-95e4-79114125a136.png",d="/kbms/common/1614064792049-be296c5e-3ec2-4594-aef3-dd2a6be5bce9.png",c="/kbms/common/1614064792044-e755efef-fff4-47d3-a363-f6ba90618bc7.png",s="/kbms/common/1614064792055-4c2a7a6a-d06c-4620-a50e-e7fd868d1cea.png",g="/kbms/common/1614064792051-a2db2806-00c6-40ab-ba7f-457481768dbb.png",p={};function l(f,e){return o(),t("div",null,e[0]||(e[0]=[n('<p>需求：每天定时备份一次数据库，然后每次备份的时候删除7天前的备份记录<br>  <br> 1、我们创建一个文档（以城市之窗项目为例）<br>  <br> @echo off<br> echo 正在备份城市之窗数据库，请稍等......<br> expdp DYZHCSLEAPP/NYEKTLEAPP@ORANEWLE dumpfile=%date:<sub>0,4%%date:</sub>5,2%%date:~8,2%.DMP LOGFILE=%date:<sub>0,4%%date:</sub>5,2%%date:~8,2%.log schemas=(DYZHCSLEAPP)<br>  <br> echo 删除过久的备份记录<br> forfiles /P D:\\app\\Administrator\\admin\\ORANEWLE\\dpdump /M *.dmp /S /D -7 /C &quot;cmd /c del /F /s /q @file&quot;<br> forfiles /P D:\\app\\Administrator\\admin\\ORANEWLE\\dpdump /M *.log /S /D -7 /C &quot;cmd /c del /F /s /q @file&quot;<br>  <br> echo 任务完成<br> exit<br>  <br> 2、把这个文件修改成bat文件<br><img src="'+r+'" alt="image.png" loading="lazy"><br> 3、创建windows任务计划<br>  <br><img src="'+i+'" alt="image.png" loading="lazy"><br> 4、创建任务<br><img src="'+m+'" alt="image.png" loading="lazy"><br> 5、开始设置选项，这几个都要选择<br><img src="'+b+'" alt="image.png" loading="lazy"><br> 6、新建触发器<br><img src="'+d+'" alt="image.png" loading="lazy"><br> 7、新建操作<br><img src="'+c+'" alt="image.png" loading="lazy"><br> 8、条件上面没有特殊的操作<br><img src="'+s+'" alt="image.png" loading="lazy"><br> 9、设置<br><img src="'+g+'" alt="image.png" loading="lazy"><br> 10、设置完毕<br> 等待第二天看定时任务是否正常执行。</p>',1)]))}const y=a(p,[["render",l],["__file","fuwuqidingshijihua.html.vue"]]),z=JSON.parse('{"path":"/dataBase/oracle/shujukubeifenhehaiyuan/fuwuqidingshijihua.html","title":"服务器定时计划","lang":"zh-CN","frontmatter":{"title":"服务器定时计划","lang":"zh-CN","date":"2022-12-28T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"fuwuqidingshijihua","slug":"drfgz8","docsId":"31816460","description":"需求：每天定时备份一次数据库，然后每次备份的时候删除7天前的备份记录 1、我们创建一个文档（以城市之窗项目为例） @echo off echo 正在备份城市之窗数据库，请稍等...... expdp DYZHCSLEAPP/NYEKTLEAPP@ORANEWLE dumpfile=%date:0,4%%date:5,2%%date:~8,2%.DMP ...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/oracle/shujukubeifenhehaiyuan/fuwuqidingshijihua.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"服务器定时计划"}],["meta",{"property":"og:description","content":"需求：每天定时备份一次数据库，然后每次备份的时候删除7天前的备份记录 1、我们创建一个文档（以城市之窗项目为例） @echo off echo 正在备份城市之窗数据库，请稍等...... expdp DYZHCSLEAPP/NYEKTLEAPP@ORANEWLE dumpfile=%date:0,4%%date:5,2%%date:~8,2%.DMP ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1614064792022-c82d9ed4-424e-4792-9355-b3710a9be2c1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-23T15:53:24.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-12-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-23T15:53:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务器定时计划\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1614064792022-c82d9ed4-424e-4792-9355-b3710a9be2c1.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1614064792037-f316543f-bd83-44de-ab97-1529323d49f4.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1614064792039-1253c783-3a32-4933-85f4-95f2adf91725.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1614064792037-7a355def-55ff-4931-95e4-79114125a136.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1614064792049-be296c5e-3ec2-4594-aef3-dd2a6be5bce9.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1614064792044-e755efef-fff4-47d3-a363-f6ba90618bc7.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1614064792055-4c2a7a6a-d06c-4620-a50e-e7fd868d1cea.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1614064792051-a2db2806-00c6-40ab-ba7f-457481768dbb.png\\"],\\"datePublished\\":\\"2022-12-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-23T15:53:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1695484404000,"updatedTime":1695484404000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.08,"words":325},"filePathRelative":"dataBase/oracle/shujukubeifenhehaiyuan/fuwuqidingshijihua.md","localizedDate":"2022年12月28日","excerpt":"<p>需求：每天定时备份一次数据库，然后每次备份的时候删除7天前的备份记录<br>\\n&nbsp;<br>\\n1、我们创建一个文档（以城市之窗项目为例）<br>\\n&nbsp;<br>\\n@echo off<br>\\necho 正在备份城市之窗数据库，请稍等......<br>\\nexpdp DYZHCSLEAPP/NYEKTLEAPP@ORANEWLE dumpfile=%date:<sub>0,4%%date:</sub>5,2%%date:~8,2%.DMP LOGFILE=%date:<sub>0,4%%date:</sub>5,2%%date:~8,2%.log schemas=(DYZHCSLEAPP)<br>\\n&nbsp;<br>\\necho 删除过久的备份记录<br>\\nforfiles /P D:\\\\app\\\\Administrator\\\\admin\\\\ORANEWLE\\\\dpdump /M *.dmp /S /D -7 /C \\"cmd /c del /F /s /q @file\\"<br>\\nforfiles /P D:\\\\app\\\\Administrator\\\\admin\\\\ORANEWLE\\\\dpdump /M *.log /S /D -7 /C \\"cmd /c del /F /s /q @file\\"<br>\\n&nbsp;<br>\\necho 任务完成<br>\\nexit<br>\\n&nbsp;<br>\\n2、把这个文件修改成bat文件<br>\\n<img src=\\"/common/1614064792022-c82d9ed4-424e-4792-9355-b3710a9be2c1.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n3、创建windows任务计划<br>\\n&nbsp;<br>\\n<img src=\\"/common/1614064792037-f316543f-bd83-44de-ab97-1529323d49f4.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n4、创建任务<br>\\n<img src=\\"/common/1614064792039-1253c783-3a32-4933-85f4-95f2adf91725.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n5、开始设置选项，这几个都要选择<br>\\n<img src=\\"/common/1614064792037-7a355def-55ff-4931-95e4-79114125a136.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n6、新建触发器<br>\\n<img src=\\"/common/1614064792049-be296c5e-3ec2-4594-aef3-dd2a6be5bce9.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n7、新建操作<br>\\n<img src=\\"/common/1614064792044-e755efef-fff4-47d3-a363-f6ba90618bc7.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n8、条件上面没有特殊的操作<br>\\n<img src=\\"/common/1614064792055-4c2a7a6a-d06c-4620-a50e-e7fd868d1cea.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n9、设置<br>\\n<img src=\\"/common/1614064792051-a2db2806-00c6-40ab-ba7f-457481768dbb.png\\" alt=\\"image.png\\" loading=\\"lazy\\"><br>\\n10、设置完毕<br>\\n等待第二天看定时任务是否正常执行。</p>","autoDesc":true}');export{y as comp,z as data};