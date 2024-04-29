import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c,a as n,d as s,e as o,b as e}from"./app-qB9_Bjjp.js";const r={},d=e(`<p>示例文件</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>images:docker:19.03 <span class="token comment">## 基础镜像</span>

build-job:
  stage: build
  script:
    - <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello, <span class="token variable">$GITLAB_USER_LOGIN</span>!&quot;</span>

test-job1:
  stage: <span class="token builtin class-name">test</span>
  script:
    - <span class="token builtin class-name">echo</span> <span class="token string">&quot;This job tests something&quot;</span>

test-job2:
  stage: <span class="token builtin class-name">test</span>
  script:
    - <span class="token builtin class-name">echo</span> <span class="token string">&quot;This job tests something, but takes more time than test-job1.&quot;</span>
    - <span class="token builtin class-name">echo</span> <span class="token string">&quot;After the echo commands complete, it runs the sleep command for 20 seconds&quot;</span>
    - <span class="token builtin class-name">echo</span> <span class="token string">&quot;which simulates a test that runs 20 seconds longer than test-job1&quot;</span>
    - <span class="token function">sleep</span> <span class="token number">20</span>

deploy-prod:
  stage: deploy
  script:
    - <span class="token builtin class-name">echo</span> <span class="token string">&quot;This job deploys something from the <span class="token variable">$CI_COMMIT_BRANCH</span> branch.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p={href:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>公共runner的流水线</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">## .gitlab-ci.yml</span>

<span class="token comment">## 执行三个任务</span>
<span class="token comment">## 1.指定要存储的文件夹</span>
<span class="token comment">## 2.克隆源代码</span>
<span class="token comment">## 3.使用docker构建并运行</span>

stages:
  - build
  - <span class="token function">git</span>
  - deploy

build:
  stage: build
  script:
    - <span class="token function">docker</span> <span class="token parameter variable">-v</span>
    - <span class="token builtin class-name">cd</span> /root
    - <span class="token function">rm</span> <span class="token parameter variable">-rf</span> NetByDocker
    - <span class="token function">mkdir</span> NetByDocker
  tags: 
    - net

git:
  stage: <span class="token function">git</span>
  script:
    - <span class="token builtin class-name">cd</span> /root/NetByDocker
    - <span class="token function">git</span> clone git@172.18.231.92:9022/azrng/netsample.git
  tags: 
    - net

deploy:
  stage: deploy
  script:
    - <span class="token builtin class-name">cd</span> /root/NetByDocker
    - <span class="token function">docker</span> build <span class="token parameter variable">-f</span> Dockerfile <span class="token parameter variable">-t</span> gitlabnet5sample <span class="token punctuation">..</span>/ 
    - <span class="token function">docker</span> run <span class="token parameter variable">--name</span> gitlabnet5sample <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8060</span>:80 gitlabnet5sample
    - <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
  tags: 
    - net

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function u(b,v){const a=t("ExternalLinkIcon");return l(),c("div",null,[d,n("blockquote",null,[n("p",null,[s("预定义变量："),n("a",p,[s("https://docs.gitlab.com/ee/ci/variables/predefined_variables.html"),o(a)])])]),m])}const k=i(r,[["render",u],["__file","liushuixianjiaoben.html.vue"]]),f=JSON.parse('{"path":"/cloud/ciAndCd/gitlab/liushuixianjiaoben.html","title":"流水线脚本","lang":"zh-CN","frontmatter":{"title":"流水线脚本","lang":"zh-CN","date":"2022-11-27T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["cloud"],"tag":["无"],"filename":"liushuixianjiaoben","slug":"on934y","docsId":"52686000","description":"示例文件 预定义变量：https://docs.gitlab.com/ee/ci/variables/predefined_variables.html 公共runner的流水线","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/cloud/ciAndCd/gitlab/liushuixianjiaoben.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"流水线脚本"}],["meta",{"property":"og:description","content":"示例文件 预定义变量：https://docs.gitlab.com/ee/ci/variables/predefined_variables.html 公共runner的流水线"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-24T07:50:54.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2022-11-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-24T07:50:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流水线脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-24T07:50:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1695541854000,"updatedTime":1695541854000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":1}]},"readingTime":{"minutes":0.76,"words":227},"filePathRelative":"cloud/ciAndCd/gitlab/liushuixianjiaoben.md","localizedDate":"2022年11月27日","excerpt":"<p>示例文件</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>images:docker:19.03 <span class=\\"token comment\\">## 基础镜像</span>\\n\\nbuild-job:\\n  stage: build\\n  script:\\n    - <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"Hello, <span class=\\"token variable\\">$GITLAB_USER_LOGIN</span>!\\"</span>\\n\\ntest-job1:\\n  stage: <span class=\\"token builtin class-name\\">test</span>\\n  script:\\n    - <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"This job tests something\\"</span>\\n\\ntest-job2:\\n  stage: <span class=\\"token builtin class-name\\">test</span>\\n  script:\\n    - <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"This job tests something, but takes more time than test-job1.\\"</span>\\n    - <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"After the echo commands complete, it runs the sleep command for 20 seconds\\"</span>\\n    - <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"which simulates a test that runs 20 seconds longer than test-job1\\"</span>\\n    - <span class=\\"token function\\">sleep</span> <span class=\\"token number\\">20</span>\\n\\ndeploy-prod:\\n  stage: deploy\\n  script:\\n    - <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"This job deploys something from the <span class=\\"token variable\\">$CI_COMMIT_BRANCH</span> branch.\\"</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,f as data};
