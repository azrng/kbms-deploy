const e=JSON.parse('{"key":"v-5a04ffb0","path":"/soft/kubernetes/network.html","title":"网络通信原理","lang":"zh-CN","frontmatter":{"title":"网络通信原理","lang":"zh-CN","date":"2021-02-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":false,"category":["soft"],"tag":["Kubernetes"],"description":"文章来自：https://zhuanlan.zhihu.com/p/81667781 Kubernetes 网络通信原理 名词解释 1、网络的命名空间：Linux 在网络栈中引入网络命名空间，将独立的网络协议栈隔离到不同的命名空间中，彼此间无法通信；Docker 利用这一特性，实现不容器间的网络隔离。","head":[["meta",{"property":"og:url","content":"https://azrng.github.io/kbms/kbms/soft/kubernetes/network.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"网络通信原理"}],["meta",{"property":"og:description","content":"文章来自：https://zhuanlan.zhihu.com/p/81667781 Kubernetes 网络通信原理 名词解释 1、网络的命名空间：Linux 在网络栈中引入网络命名空间，将独立的网络协议栈隔离到不同的命名空间中，彼此间无法通信；Docker 利用这一特性，实现不容器间的网络隔离。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-09T02:19:17.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:published_time","content":"2021-02-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T02:19:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络通信原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-22T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-09T02:19:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":3,"title":"名词解释","slug":"名词解释","link":"#名词解释","children":[]},{"level":3,"title":"令人头大的网络模型","slug":"令人头大的网络模型","link":"#令人头大的网络模型","children":[]},{"level":3,"title":"一个 Service","slug":"一个-service","link":"#一个-service","children":[]},{"level":3,"title":"二个 IP","slug":"二个-ip","link":"#二个-ip","children":[]},{"level":3,"title":"三个 Port","slug":"三个-port","link":"#三个-port","children":[]},{"level":3,"title":"集群内部通信","slug":"集群内部通信","link":"#集群内部通信","children":[]},{"level":3,"title":"外部访问集群","slug":"外部访问集群","link":"#外部访问集群","children":[]},{"level":3,"title":"总结及展望","slug":"总结及展望","link":"#总结及展望","children":[]}],"git":{"createdTime":1670219403000,"updatedTime":1670552357000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":2},{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":10.97,"words":3290},"filePathRelative":"soft/kubernetes/network.md","localizedDate":"2021年2月22日","excerpt":"<blockquote>\\n<p>文章来自：<a href=\\"https://zhuanlan.zhihu.com/p/81667781\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://zhuanlan.zhihu.com/p/81667781</a></p>\\n</blockquote>\\n<h1> Kubernetes 网络通信原理</h1>\\n<h3> 名词解释</h3>\\n<p>1、网络的命名空间：Linux 在网络栈中引入网络命名空间，将独立的网络协议栈隔离到不同的命名空间中，彼此间无法通信；Docker 利用这一特性，实现不容器间的网络隔离。</p>","autoDesc":true}');export{e as data};