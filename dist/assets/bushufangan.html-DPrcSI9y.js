import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as r}from"./app-BQsqMNmR.js";const i="/kbms/common/1610775570125-710054f7-6d38-4766-8ab3-f8439dd76e53.png",o="/kbms/common/1610775820248-9ca8bb52-b43b-4006-a4ae-c65158749a7d.png",s={};function p(l,e){return r(),a("div",null,e[0]||(e[0]=[n('<h3 id="模式" tabindex="-1"><a class="header-anchor" href="#模式"><span>模式</span></a></h3><p>单个部署=&gt;主从复制模式=&gt;集群模式</p><h3 id="主从复制-读写分离" tabindex="-1"><a class="header-anchor" href="#主从复制-读写分离"><span>主从复制，读写分离</span></a></h3><p>一主多从，读写分离，但主节点仍存在单点问题。<br> 有多个redis服务器，通过命令或者配置实现主从关系，其中一台是主服务器，其他的是从服务器，复制指的是将主服务器的数据同步到从服务器，数据只能从主服务器向从服务器单向同步。<br> 主服务器写，各个从服务器读。<br> 查询服务器主从信息：info replication<br> 缺点：当主节点宕机之后还需要人为重新进行主从关系配置。</p><h3 id="哨兵模式" tabindex="-1"><a class="header-anchor" href="#哨兵模式"><span>哨兵模式</span></a></h3><p>通过哨兵监控主从服务节点，并提供自动容灾恢复。<br> 专门兼容主服务器，一旦有变故，哨兵自动处理，这样故障恢复及时并且更加智能。redis哨兵本质还是一个redis节点，只是运行模式不一样而已。<br> 最基础模式：一个哨兵监控一主二从的环境<br><img src="'+i+'" alt="" loading="lazy"><br> 流程图<br><img src="'+o+'" alt="" loading="lazy"><br> 缺点：</p><ul><li>单个哨兵容易导致误判主节点下线，比如主节点正常，但是与哨兵之间的通讯出现了短暂的异常，所以这个时候是单个哨兵，在指定的时间间隔没有通讯就认为主节点下线了；如果有哨兵集群，可以询问多个哨兵指定的主节点是否下线，这样子就更有保障。</li><li>哨兵挂了，故障转移就没法继续啦，哨兵集群的话就会选择其他哨兵继续处理。</li></ul>',7)]))}const m=t(s,[["render",p],["__file","bushufangan.html.vue"]]),g=JSON.parse('{"path":"/dataBase/redis/anzhuang/bushufangan.html","title":"部署方案","lang":"zh-CN","frontmatter":{"title":"部署方案","lang":"zh-CN","date":"2023-07-24T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dataBase"],"tag":["无"],"filename":"bushufangan","slug":"xcq3gm","docsId":"29714871","description":"模式 单个部署=>主从复制模式=>集群模式 主从复制，读写分离 一主多从，读写分离，但主节点仍存在单点问题。 有多个redis服务器，通过命令或者配置实现主从关系，其中一台是主服务器，其他的是从服务器，复制指的是将主服务器的数据同步到从服务器，数据只能从主服务器向从服务器单向同步。 主服务器写，各个从服务器读。 查询服务器主从信息：info repli...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dataBase/redis/anzhuang/bushufangan.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"部署方案"}],["meta",{"property":"og:description","content":"模式 单个部署=>主从复制模式=>集群模式 主从复制，读写分离 一主多从，读写分离，但主节点仍存在单点问题。 有多个redis服务器，通过命令或者配置实现主从关系，其中一台是主服务器，其他的是从服务器，复制指的是将主服务器的数据同步到从服务器，数据只能从主服务器向从服务器单向同步。 主服务器写，各个从服务器读。 查询服务器主从信息：info repli..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/1610775570125-710054f7-6d38-4766-8ab3-f8439dd76e53.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-23T15:53:24.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-07-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-23T15:53:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署方案\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/1610775570125-710054f7-6d38-4766-8ab3-f8439dd76e53.png\\",\\"https://azrng.gitee.io/kbms/kbms/common/1610775820248-9ca8bb52-b43b-4006-a4ae-c65158749a7d.png\\"],\\"datePublished\\":\\"2023-07-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-23T15:53:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":3,"title":"模式","slug":"模式","link":"#模式","children":[]},{"level":3,"title":"主从复制，读写分离","slug":"主从复制-读写分离","link":"#主从复制-读写分离","children":[]},{"level":3,"title":"哨兵模式","slug":"哨兵模式","link":"#哨兵模式","children":[]}],"git":{"createdTime":1695484404000,"updatedTime":1695484404000,"contributors":[{"name":"azrng","username":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.49,"words":448},"filePathRelative":"dataBase/redis/anzhuang/bushufangan.md","localizedDate":"2023年7月24日","excerpt":"<h3>模式</h3>\\n<p>单个部署=&gt;主从复制模式=&gt;集群模式</p>\\n<h3>主从复制，读写分离</h3>\\n<p>一主多从，读写分离，但主节点仍存在单点问题。<br>\\n有多个redis服务器，通过命令或者配置实现主从关系，其中一台是主服务器，其他的是从服务器，复制指的是将主服务器的数据同步到从服务器，数据只能从主服务器向从服务器单向同步。<br>\\n主服务器写，各个从服务器读。<br>\\n查询服务器主从信息：info replication<br>\\n缺点：当主节点宕机之后还需要人为重新进行主从关系配置。</p>\\n<h3>哨兵模式</h3>\\n<p>通过哨兵监控主从服务节点，并提供自动容灾恢复。<br>\\n专门兼容主服务器，一旦有变故，哨兵自动处理，这样故障恢复及时并且更加智能。redis哨兵本质还是一个redis节点，只是运行模式不一样而已。<br>\\n最基础模式：一个哨兵监控一主二从的环境<br>\\n<img src=\\"/common/1610775570125-710054f7-6d38-4766-8ab3-f8439dd76e53.png\\" alt=\\"\\" loading=\\"lazy\\"><br>\\n流程图<br>\\n<img src=\\"/common/1610775820248-9ca8bb52-b43b-4006-a4ae-c65158749a7d.png\\" alt=\\"\\" loading=\\"lazy\\"><br>\\n缺点：</p>","autoDesc":true}');export{m as comp,g as data};