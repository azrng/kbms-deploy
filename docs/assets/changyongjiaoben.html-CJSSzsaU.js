import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as a,c as d,b as n,e,f as t,d as r}from"./app-D8HBJYTp.js";const o={},v=r(`<h2 id="安装gitlab" tabindex="-1"><a class="header-anchor" href="#安装gitlab"><span>安装gitlab</span></a></h2><p>1.创建一个全新的虚拟机，并且至少有4g运行内存 2.安装docker以及docker_compose 3.将ssh的默认的22端口，修改为60022端口 vi /etc/ssh/sshd_config port 22-&gt;60022 systemctl restart sshd 4.docker-compose.yml文件去安装gitlab(下载和运行时间比较长)</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>version: &#39;3.1&#39;
services: 
  image: &#39;twang2218/gitlab-ce-zh:11.1.4&#39;
  container_name: &#39;gitlab&#39;
  restart: always
  privileged: true
  hostname: &#39;gitlab&#39;
  environment: 
    TZ: &#39;Asiz/Shanghai&#39;
    GITLAB_OMNIBUS_CONFIG: |
      external_url &#39;http:/192.168.199.110&#39;
      gitlab_rails[&#39;time_zone&#39;]=&#39;Asia/Shanghai&#39;
      gitlab_rails[&#39;smtp_enable&#39;]=true
      gitlab_rails[&#39;gitlab_shell_ssh_port&#39;]=22
  ports: 
    - &#39;80:80&#39;
    - &#39;443:443&#39;
    - &#39;22:22&#39;
  volumes: 
    - /opt/docker_gitlab/config:/etc/gitlab
    - /opt/docker_gitlab/data:/var/opt/gitlab
    - /opt/docker_gitlab/logs:/var/log/gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装kong" tabindex="-1"><a class="header-anchor" href="#安装kong"><span>安装kong</span></a></h2><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>
version: &#39;3.3&#39;
<span class="token comment">#创建kong_data卷</span>
volumes:
  kong_data: {}
<span class="token comment">#创建kong-net网络</span>
networks:
  kong-net:
    external: false

services:
  <span class="token comment">#数据库运行完成之后需要执行kong进行初始化操作</span>
  kong-migrations:
    image: &quot;\${KONG_DOCKER_TAG:-kong:latest}&quot;
    command: kong migrations bootstrap
    depends_on:
      - db
    environment:
      KONG_DATABASE: postgres
      KONG_PG_DATABASE: \${KONG_PG_DATABASE:-kong}
      KONG_PG_HOST: db
      KONG_PG_USER: \${KONG_PG_USER:-kong}
      KONG_PG_PASSWORD_FILE: /run/secrets/kong_postgres_password
    secrets:
      - kong_postgres_password
    networks:
      - kong-net
    restart: on-failure
    deploy:
      restart_policy:
        condition: on-failure
  <span class="token comment">#迁移过程依赖db</span>
  kong-migrations-up:
    image: &quot;\${KONG_DOCKER_TAG:-kong:latest}&quot;
    command: kong migrations up &amp;&amp; kong migrations finish
    depends_on:
      - db
    environment:
      KONG_DATABASE: postgres
      KONG_PG_DATABASE: \${KONG_PG_DATABASE:-kong}
      KONG_PG_HOST: db
      KONG_PG_USER: \${KONG_PG_USER:-kong}
      KONG_PG_PASSWORD_FILE: /run/secrets/kong_postgres_password
    secrets:
      - kong_postgres_password
    networks:
      - kong-net
    restart: on-failure
    deploy:
      restart_policy:
        condition: on-failure
  <span class="token comment">## kong服务</span>
  kong:
    image: &quot;\${KONG_DOCKER_TAG:-kong:latest}&quot;
    user: &quot;\${KONG_USER:-kong}&quot;
    depends_on:
      - db
    environment:
      KONG_ADMIN_ACCESS_LOG: /dev/stdout
      KONG_ADMIN_ERROR_LOG: /dev/stderr
      KONG_ADMIN_LISTEN: &#39;0.0.0.0:8001&#39;
      KONG_CASSANDRA_CONTACT_POINTS: db
      KONG_DATABASE: postgres
      KONG_PG_DATABASE: \${KONG_PG_DATABASE:-kong}
      KONG_PG_HOST: db
      KONG_PG_USER: \${KONG_PG_USER:-kong}
      KONG_PROXY_ACCESS_LOG: /dev/stdout
      KONG_PROXY_ERROR_LOG: /dev/stderr
      KONG_PG_PASSWORD_FILE: /run/secrets/kong_postgres_password
    secrets:
      - kong_postgres_password
    networks:
      - kong-net
    <span class="token comment">#kong的端口，非https使用8000和8001</span>
    ports:
      - &quot;8000:8000/tcp&quot;
      - &quot;8001:8001/tcp&quot;
      - &quot;8443:8443/tcp&quot;
      - &quot;8444:8444/tcp&quot;
    <span class="token comment">#健康检查</span>
    healthcheck:
      test: [&quot;CMD&quot;, &quot;kong&quot;, &quot;health&quot;]
      interval: 10s
      timeout: 10s
      retries: 10
    restart: on-failure
    deploy:
      restart_policy:
        condition: on-failure

  <span class="token comment">#konga可视化界面</span>
  konga:
    image: pantsel/konga
    networks:
      - kong-net
    depends_on:
      - db
    ports:
      - &quot;1337:1337/tcp&quot;
    environment:
      TOKEN_SECRET: konga
      DB_ADAPTER: postgres
      DB_HOST: db
      DB_PORT: 5432
      DB_USER: kong
      DB_PASSWORD: kong
      DB_DATABASE: kong
    restart: on-failure
    deploy:
      restart_policy:
        condition: on-failure
  <span class="token comment">## postgres数据库</span>
  db:
    image: postgres:9.6
    environment:
      POSTGRES_DB: \${KONG_PG_DATABASE:-kong}
      POSTGRES_USER: \${KONG_PG_USER:-kong}
      POSTGRES_PASSWORD_FILE: /run/secrets/kong_postgres_password
    secrets:
      - kong_postgres_password
    healthcheck:
      test: [&quot;CMD&quot;, &quot;pg_isready&quot;, &quot;-U&quot;, &quot;\${KONG_PG_USER:-kong}&quot;]
      interval: 30s
      timeout: 30s
      retries: 3
    restart: on-failure
    deploy:
      restart_policy:
        condition: on-failure
    stdin_open: true
    tty: true
    ports:
      - 5432:5432
    networks:
      - kong-net
    volumes:
      - kong_data:/var/lib/postgresql/data

<span class="token comment">## 用文件统一管理数据库密码</span>
secrets:
  kong_postgres_password:
    file: ./POSTGRES_PASSWORD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c={href:"https://mp.weixin.qq.com/s/hkVa4OvCYqisWdvHX9VRhw",target:"_blank",rel:"noopener noreferrer"};function m(u,b){const i=l("ExternalLinkIcon");return a(),d("div",null,[v,n("blockquote",null,[n("p",null,[e("参考文档："),n("a",c,[e("https://mp.weixin.qq.com/s/hkVa4OvCYqisWdvHX9VRhw"),t(i)])])])])}const _=s(o,[["render",m],["__file","changyongjiaoben.html.vue"]]),k=JSON.parse(`{"path":"/cloud/container/dockerCompose/changyongjiaoben.html","title":"常用脚本","lang":"zh-CN","frontmatter":{"title":"常用脚本","lang":"zh-CN","date":"2023-09-24T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["cloud"],"tag":["无"],"filename":"changyongjiaoben","slug":"uk5odo","docsId":"29455054","description":"安装gitlab 1.创建一个全新的虚拟机，并且至少有4g运行内存 2.安装docker以及docker_compose 3.将ssh的默认的22端口，修改为60022端口 vi /etc/ssh/sshd_config port 22->60022 systemctl restart sshd 4.docker-compose.yml文件去安装git...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/cloud/container/dockerCompose/changyongjiaoben.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"常用脚本"}],["meta",{"property":"og:description","content":"安装gitlab 1.创建一个全新的虚拟机，并且至少有4g运行内存 2.安装docker以及docker_compose 3.将ssh的默认的22端口，修改为60022端口 vi /etc/ssh/sshd_config port 22->60022 systemctl restart sshd 4.docker-compose.yml文件去安装git..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-05T09:41:13.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-05T09:41:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-05T09:41:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"安装gitlab","slug":"安装gitlab","link":"#安装gitlab","children":[]},{"level":2,"title":"安装kong","slug":"安装kong","link":"#安装kong","children":[]}],"git":{"createdTime":1695541854000,"updatedTime":1696498873000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":1.61,"words":483},"filePathRelative":"cloud/container/dockerCompose/changyongjiaoben.md","localizedDate":"2023年9月24日","excerpt":"<h2>安装gitlab</h2>\\n<p>1.创建一个全新的虚拟机，并且至少有4g运行内存\\n2.安装docker以及docker_compose\\n3.将ssh的默认的22端口，修改为60022端口\\nvi /etc/ssh/sshd_config\\nport 22-&gt;60022\\nsystemctl restart sshd\\n4.docker-compose.yml文件去安装gitlab(下载和运行时间比较长)</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>version: '3.1'\\nservices: \\n  image: 'twang2218/gitlab-ce-zh:11.1.4'\\n  container_name: 'gitlab'\\n  restart: always\\n  privileged: true\\n  hostname: 'gitlab'\\n  environment: \\n    TZ: 'Asiz/Shanghai'\\n    GITLAB_OMNIBUS_CONFIG: |\\n      external_url 'http:/192.168.199.110'\\n      gitlab_rails['time_zone']='Asia/Shanghai'\\n      gitlab_rails['smtp_enable']=true\\n      gitlab_rails['gitlab_shell_ssh_port']=22\\n  ports: \\n    - '80:80'\\n    - '443:443'\\n    - '22:22'\\n  volumes: \\n    - /opt/docker_gitlab/config:/etc/gitlab\\n    - /opt/docker_gitlab/data:/var/opt/gitlab\\n    - /opt/docker_gitlab/logs:/var/log/gitlab\\n</code></pre></div>","autoDesc":true}`);export{_ as comp,k as data};
