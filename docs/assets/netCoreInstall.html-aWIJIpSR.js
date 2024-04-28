import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as s}from"./app-DMmdIwn0.js";const t={},l=s(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><p>master-deployment.yaml</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: net-sample
  labels:
    name: net-sample
spec:
  selector:
    matchLabels:
      name: net-sample
  replicas: 1 # 启动实例数
  template:
    metadata:
      labels:
        name: net-sample
    spec:
      containers:
        - name: net-sample
          image: registry.cn-hangzhou.aliyuncs.com/zrng/test:0.0.2 # 镜像地址
          imagePullPolicy: Always
          ports:
            - containerPort: 8080 # 端口和netcore内部端口要一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>master-service.yaml</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apiVersion: v1
kind: Service
metadata:
  name: net-sample
spec: # 表示这个service对象的配置信息
  type: NodePort
  ports: # 表示要暴漏的端口列表
    - port: 8080 # 需要暴漏的端口号
      targetPort: 8080 # 应该将请求转发到pod中监听的指定端口的容器中
  selector: # 选择哪些pod来提供服务
    name: net-sample
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行操作" tabindex="-1"><a class="header-anchor" href="#执行操作"><span>执行操作</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> kubectl apply <span class="token parameter variable">-f</span> master-deployment.yaml

<span class="token function">sudo</span> kubectl apply <span class="token parameter variable">-f</span> master-service.yaml

<span class="token comment"># 如果需要修改yaml文件，重启pod</span>
<span class="token function">sudo</span> kubectl replace <span class="token parameter variable">--force</span> <span class="token parameter variable">-f</span> master-deployment.yaml
<span class="token function">sudo</span> kubectl replace <span class="token parameter variable">--force</span> <span class="token parameter variable">-f</span> master-service.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看容器端口信息信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> kubectl get svc

NAME           TYPE        CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>          AGE
kubernetes     ClusterIP   <span class="token number">10.43</span>.0.1      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP          60d
net-sample     NodePort    <span class="token number">10.43</span>.122.55   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8080</span>:30090/TCP   6m40s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正常来说，这个时候访问30090端口就可以访问页面，<code>http://localhost:30090/api/Test/GetDateTime</code></p><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><p>https://www.cnblogs.com/study10000/p/14898471.html</p>`,12),i=[l];function r(c,d){return n(),a("div",null,i)}const m=e(t,[["render",r],["__file","netCoreInstall.html.vue"]]),v=JSON.parse('{"path":"/cloud/k3s/operators/netCoreInstall.html","title":".Net部署","lang":"zh-CN","frontmatter":{"title":".Net部署","lang":"zh-CN","date":"2023-12-30T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["cloud"],"tag":["dotnet","k3s"],"description":"配置文件 master-deployment.yaml master-service.yaml 执行操作 查看容器端口信息信息 正常来说，这个时候访问30090端口就可以访问页面，http://localhost:30090/api/Test/GetDateTime 参考文档 https://www.cnblogs.com/study10000/p/1...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/cloud/k3s/operators/netCoreInstall.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":".Net部署"}],["meta",{"property":"og:description","content":"配置文件 master-deployment.yaml master-service.yaml 执行操作 查看容器端口信息信息 正常来说，这个时候访问30090端口就可以访问页面，http://localhost:30090/api/Test/GetDateTime 参考文档 https://www.cnblogs.com/study10000/p/1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-31T07:26:17.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"dotnet"}],["meta",{"property":"article:tag","content":"k3s"}],["meta",{"property":"article:published_time","content":"2023-12-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-31T07:26:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\".Net部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-31T07:26:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":2,"title":"执行操作","slug":"执行操作","link":"#执行操作","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1703951586000,"updatedTime":1704007577000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":0.94,"words":281},"filePathRelative":"cloud/k3s/operators/netCoreInstall.md","localizedDate":"2023年12月30日","excerpt":"<h2>配置文件</h2>\\n<p>master-deployment.yaml</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>apiVersion: apps/v1\\nkind: Deployment\\nmetadata:\\n  name: net-sample\\n  labels:\\n    name: net-sample\\nspec:\\n  selector:\\n    matchLabels:\\n      name: net-sample\\n  replicas: 1 # 启动实例数\\n  template:\\n    metadata:\\n      labels:\\n        name: net-sample\\n    spec:\\n      containers:\\n        - name: net-sample\\n          image: registry.cn-hangzhou.aliyuncs.com/zrng/test:0.0.2 # 镜像地址\\n          imagePullPolicy: Always\\n          ports:\\n            - containerPort: 8080 # 端口和netcore内部端口要一致\\n</code></pre></div>","autoDesc":true}');export{m as comp,v as data};
