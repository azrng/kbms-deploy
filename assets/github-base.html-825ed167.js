import{_ as d,W as l,X as s,Y as e,Z as i,$ as n,a0 as t,C as r}from"./framework-63781bb7.js";const g={},c=t('<blockquote><p>作者：Peter 编辑：JackTian 来源：公众号「杰哥的IT之旅」</p></blockquote><p>本文已经经过授权转载！</p><h2 id="快速入门github" tabindex="-1"><a class="header-anchor" href="#快速入门github" aria-hidden="true">#</a> 快速入门GitHub</h2><p>GitHub在程序开发领域家喻户晓，现在几乎整个互联网的开发者都将版本管理工具GitHub作为版本控制的首选，甚至像笔者这样非开发者，一名和每天和数据打交道的人也在使用GitHub，目的主要有：</p><ul><li>查找资料：GitHub上有很多国内外大神开源的数据挖掘、机器学习的资料、代码，笔者直接fork或者clone下来学习</li><li>技术交流：通过对开源项目提出issue，能够起到技术交流的效果</li><li>个人展示：现在互联网领域中，如果一个程序员在GitHub上有一个很好的开源项目，必定是会备受关注。因此GitHub实际上是一个很好的展示个人实力的舞台，或许它能够让你受到招聘人员的青睐</li></ul><p><strong>可以说，正式GitHub，让社会化全员编程成为了现实。</strong></p><p>既然好处颇多，作为互联网界的一员，没有理由不学好GitHub😄本文将详细介绍GitHub的相关基础操作，带你快速入门GitHub</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111134466.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="版本管理" tabindex="-1"><a class="header-anchor" href="#版本管理" aria-hidden="true">#</a> 版本管理</h2><p>版本管理就是管理更新的历史记录。Git出现之前，人们主要是使用Subversion（简称为SVN）作为版本控制的工具。</p><h3 id="svn" tabindex="-1"><a class="header-anchor" href="#svn" aria-hidden="true">#</a> SVN</h3><p>SVN是属于<strong>集中型</strong>的版本管理系统，其特点是<strong>将仓库集中存放在服务器中，所以只存在一个仓库</strong>。集中型将所有特点是方便管理，但是如果开发者所处的环境无法联网，则无法获取到最新的源码，进而无法进行开发工作。</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111134835.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h3><p>Git是<strong>分散型</strong>的版本管理系统。从下图中我们可以观察出来，GitHub将仓库fork给每个用户。fork的仓库和原始的仓库是两个不同的仓库，开发者是可以随意编辑的。</p><blockquote><p>Fork的过程其实就是将某个仓库复制到自己的账户下</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111134389.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="什么github" tabindex="-1"><a class="header-anchor" href="#什么github" aria-hidden="true">#</a> 什么GitHub</h2><p>GitHub是一个基于Git的代码托管平台。如果是付费用户可以建立自己的私人仓库，一般用户的话只能建立公用仓库，也就是说仓库的代码必须是公开的。到底Git和GitHub有什么区别呢？</p><blockquote><p>在Git中，开发者将源代码存入名叫“Git仓库”的资料库中，方便使用；而GitHub则是在网络上提供Git仓库的一项服务</p></blockquote><p>GitHub上公开的源代码都是通过Git进行管理的。</p><h2 id="安装与配置git" tabindex="-1"><a class="header-anchor" href="#安装与配置git" aria-hidden="true">#</a> 安装与配置Git</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>现在笔者使用的<code>MacOS</code>系统，是自带<code>Git</code>的。关于Windows系统下安装，请参考如下文章，讲解的非常详细。</p>',24),o=e("p",null,"Windows系统Git安装教程（详解Git安装过程）：",-1),u={href:"https://www.cnblogs.com/xueweisuoyong/p/11914045.html",target:"_blank",rel:"noopener noreferrer"},p=t(`<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>首先需要设置使用Git时候的名字和邮箱，名字需要使用英文</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;Firstname Lastname&quot;  # 名称
git config --global user.email &quot;your_email@example.com&quot;  # 邮箱

# ~/.gitconfig中以如下形式输出文件
[user]

name = Firstname Lastname
email = your_email@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是：</p><ol><li>GitHub上公开仓库的时候，名字和邮箱会一同被公开，所以请不要使用不便公开的隐私信息</li><li>程序员来自世界各地，请使用英文，不要使用汉字；如果不想使用真名，可以使用网站的昵称</li></ol><p><strong>如何提高命令输出的可读性</strong>？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> git config --global color.ui auto   # 将color.ui 设置成auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建账户" tabindex="-1"><a class="header-anchor" href="#创建账户" aria-hidden="true">#</a> 创建账户</h3>`,8),m={href:"http://github.com/join%EF%BC%8C%E5%A1%AB%E5%86%99%E5%A6%82%E4%B8%8B%E7%9A%84%E4%BF%A1%E6%81%AF%E5%9C%A8%E7%82%B9%E5%87%BB%60Create",target:"_blank",rel:"noopener noreferrer"},v=t(`<figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111134630.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="配置ssh" tabindex="-1"><a class="header-anchor" href="#配置ssh" aria-hidden="true">#</a> 配置SSH</h3><p>GitHub上连接现有仓库的认证，是通过使用了SSH的公开密钥认证方式进行的。现在我们需要创建公开密钥所需的SSH Key，并将其添加到GitHub。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa -C   # 创建SSH Key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来需要输入两次密码，最终会生成两个文件：</p><ul><li>id_rsa：私有密钥</li><li>id_rsa.pub：公开密钥</li></ul><p>下面我们需要在GitHub中添加公开密钥，今后就可以使用私有密钥进行认证。点击右上角的账户设定按钮：</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111134796.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>进入settings之后，添加新的SSH Key</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111136768.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>接下来会出现Title和Key两个输入框，在Title中输入适当的密钥名称，Key部分复制上面id_rsa.pub文件中的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat ~/.ssh/id_rsa.pub   # 查看内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加完成之后，会在我们的邮箱中收到一封提示“公开密钥添加完成”的邮件，确认即可。这样便完成了整个手中的私人密钥和GitHub的认证和通信问题，验证一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh -T git@github.com  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在接下来的页面中输入密码和yes即可完成验证。</p><h2 id="建立仓库" tabindex="-1"><a class="header-anchor" href="#建立仓库" aria-hidden="true">#</a> 建立仓库</h2><p>首先我们必须明白一点：<strong>仓库有两种</strong></p><ul><li>远程在GitHub上的仓库：远程仓库</li><li>在自己本地的仓库：本地仓库</li></ul><p>本文是以MacOS系统为例，基于Linux；如果是想学习Windows下的仓库创建，请参考下文，讲解的很详细：</p>`,19),h=e("p",null,"Git使用（10分钟入门）：",-1),b={href:"https://www.jianshu.com/p/09f243768cf6",target:"_blank",rel:"noopener noreferrer"},f=t(`<h3 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h3><p>1、建立远程仓库需要我们先登陆自己的GitHub账号，再进行建仓。</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111136264.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>2、我们创建一个<code>git_start</code>的仓库</p><ul><li>仓库的名字</li><li>仓库的简单描述</li><li><strong>不要</strong>在远程仓库添加README.md文件。我们使用手动push的方式来添加</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111136253.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>3、仓库解释</p><p>打开上面我们创建好的仓库，会出现如下的内容（先写上注释，后面慢慢解释）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;# git_start&quot; &gt;&gt; README.md    # 往README.md中写入内容
git init  # 初始化
git add README.md   # 添加文件
git commit -m &quot;first commit&quot;   # 提交并注释
git branch -M main  # 提交分支
git remote add origin git@github.com:pidada/git_start.git   # 建立远程仓库与本地仓库的连接
git push -u origin main  # 推送
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111136837.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="本地仓库" tabindex="-1"><a class="header-anchor" href="#本地仓库" aria-hidden="true">#</a> 本地仓库</h3><p>1、建立本地仓库</p><blockquote><p>所谓的本地仓库，就是你自己电脑客户端的仓库。同样地，笔者在本地建立了同样名字的本地仓库<code>git_start</code>，其实就是个文件夹</p></blockquote><p><strong>本地仓库要和远程仓库保持一致</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir git_start  # 创建文件夹，即仓库
cd git_start  # 切换到仓库中
ls  # 查看内容，目前是没有任何内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111136316.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>2、初始化操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;学习GitHub的使用，快速入门&quot; &gt;&gt; README.md   # 往文件中写入内容，后面可以更改
git init   # 初始化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111136197.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>初始化之后会在当前目录下自动生成一个<code>.git</code>的文件。这个文件下存储着管理当前目录内容所需要的仓库数据</p><p>3、查看待提交文档</p><p>通过<code>ls</code>查看已经有了<code>README.md</code>文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status  # 查看待提交的文档
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111136795.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>4、提交文档</p><p>我们将上面的<code>README.md</code>文档和生成的<code>.git</code>文档一并提交</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .  # 提交全部文件
git add README.md  # 单独提交一个文件
git commmit -m &quot;2021-1-1&quot;  # commit提交，同时写上备注：2021-1-1

# add 和 commit的同步操作
git commit -am &quot;2021-1-1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意：执行了add操作，文件还没有被上传到Git远程仓库中，只是提交到了缓存区域</strong></p></blockquote><p><code>git commit -m &quot;2021-1-1&quot;</code>才是真正地提交内容，同时写上备注：将文件从缓存区提交到远程</p><p>5、建立远程仓库连接并推送</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add origin git@github.com:peter/git_start.git  # 建立连接
git push -u origin master  # 推送到master分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111137434.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>6、检查</p><p>此时我们刷新远程仓库的页面，会发现页面更新了，也有了内容：</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111137605.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>7、查看提交日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log  # 查看提交日志
git log --pretty=short  # 只显示一行简述信息
git log README.md  # 只显示指定目录、文件的日志
git log -p README.md  # 只显示指定目录、文件的日志修改前后的改动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>commit</code>栏旁边显示的是指向这个提交的哈希值。<strong>Git的其他命令中，在指向提交时会用到这个哈希值</strong></p><p>Author栏旁边是Git设置的用户名和邮箱地址</p><p>Date栏显示的是执行日期和时间</p><p>最下面是提交信息，-m 参数后面的信息</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111138879.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>8、修改<code>README.md</code>文件</p><p>通过vim编辑器修改内容如下：</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111138764.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上面使用了Markdown语法，然后我们重新按照上面的命令执行一遍：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status  # 状态是红色
git add .  # 提交到缓存区
git commit -m &quot;修改README.md&quot;  # 记录提交信息
# git remote add origin git@github.com:peter/git_start.git  # 已经建立了连接，所以不必在执行此命令
git push -u origin master # 推到master分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111138260.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>回顾下整个操作的过程：</p><ol><li>建立远程仓库</li><li>建立本地仓库</li><li>初始化本地仓库</li><li>文档提交到缓存区</li><li>缓存区推送到远程仓库</li></ol><h3 id="重要命令" tabindex="-1"><a class="header-anchor" href="#重要命令" aria-hidden="true">#</a> 重要命令</h3><p>我们总结一下上面操作中几个重要的命令：</p><p>1、git status</p><p>查看仓库中文件的状态。如果有新的文件或者原来的文件有修改过，会出现红色</p><p>2、git add</p><p>向缓存区中添加内容，缓存区是提交之前的一个临时区域（Stage或者Index）</p><p>3、git commit [-m]</p><p>将暂存区中的文件保存仓库的历史记录中；-m参数后面跟上提交信息：<strong>git commit -m &quot;第一次提交&quot;</strong></p><p>4、git log</p><p>查看以往提交日志信息：什么人在什么时候进行了提交或者合并等，以及操作前后有怎样的差别</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log  # 查看日志
git log --pretty=short  # 只显示提交信息的第一行
git log README.md  # 查看某个文件的提交信息
git log -p README.md  #  -p参数只查看提交的改动部分
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、git diff</p><p>查看工作树、暂存区、最新提交之间的差别。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff  # 查看当前工作树和暂存区的差别
git diff HEAD  # 查看本次提交和上次提交的差别；HEAD指向当前分支中的最新一次提交的指针
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>养成习惯：git commit之前先执行git diff HEAD命令来查看本次提交与上次提交之间的差别；HEAD指向当前分支中最新的一次提交的指针。</p></blockquote><p>6、仓库操作</p><p><code>-u</code>作用：将来运行git pull命令从远程仓库获取内容时，本地仓库就可以直接从origin的master分支中获取内容，不需要添加其他的参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add origin git@github.com:github/peter/git_start.git  # 添加远程仓库
git push # 推送到远程仓库
git push -u origin master  # 推送到master分支下
git push -u origin feature_A  # 推送到分支A

git clone  仓库地址  # 将某个远程仓库的内容复制到本地
git push  # 推送
git pull  # 获取最新的远程分支内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2><h3 id="master分支" tabindex="-1"><a class="header-anchor" href="#master分支" aria-hidden="true">#</a> master分支</h3><p>master分支是Git默认创建的分支，其他所有的分支都是在这个分支的基础上进行的。</p><ul><li>不同的分支单独进行各自的作业</li><li>该分支的作业完成之后再和master分支合并</li></ul><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111138196.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>进行完作业之后的合并操作：</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111138986.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="分支相关命令" tabindex="-1"><a class="header-anchor" href="#分支相关命令" aria-hidden="true">#</a> 分支相关命令</h3><p>1、git branch-显示分支</p><p>显示分支一览表：将分支名列表显示出来，同时确认当前所在的分支；标有星号<code>*</code>表示当前分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -a  # 查看当前分支的相关信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、git branch feature-创建分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch feature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、git checkout feature-切换分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout feature
git checkout master  # 切换到master分支
git checkout -  # 切换到上一个分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两个命令的合并，创建新的分支并切换到新的分支：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout -b feature  # 切换到创建的新分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、git merge-合并分支</p><p>假设某个分支已经完成了作业需要和主分支master合并，使用如下语句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout master  # 切到主分支
git merge --no-off feature-A  # 合并分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、git log —graph-图的形式查看分支</p><p>通过图表的形式查看提交的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --graph  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111138217.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="版本回溯" tabindex="-1"><a class="header-anchor" href="#版本回溯" aria-hidden="true">#</a> 版本回溯</h3><p>既然是版本控制系统，那么对于不同版本的管理肯定是至关重要的。<strong>GitHub的另一个特征便是可以灵活地操作不同的历史版本</strong>。借助分散仓库的优势，可以在不影响其他仓库的前提下对历史版本进行操作。</p><p>1、回溯到指定状态</p><p><strong>哈希值只要输入4位以上就可以执行了</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --hard [哈希值]  # 添加指定的哈希值，代表某个时间点的状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、查看<strong>当前仓库的全部执行过</strong>的操作日志</p><p>记录我们操作的每次命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reflog   # 针对当前仓库
git log   # 查看以当前状态为终点的历史日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111138722.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>所以我们可以先通过<code>git reflog</code>来查看哈希值，再通过<code>git reset —hard [哈希值]</code>回到某个状态</p><p>3、修改上一条提交信息</p><p>使用<code>git commit --amend</code>命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit --amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、压缩历史</p><p>在合并特性分支之前，如果发现已经提交的内容中有拼写等错误，可以先提交一个修改，然后将这个修改包含到前一个提交之中，压缩成一个历史记录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase -i
git rebase -i HEAD~2  # 当前分支下的两个最新历史记录进行压缩
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、添加提交一次完成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit -am &quot;add和commit同时完成&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git-reset详解" tabindex="-1"><a class="header-anchor" href="#git-reset详解" aria-hidden="true">#</a> git reset详解</h2><h4 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h4><p>对版本回溯命令的详解。git reset 命令用于回退版本，可以指定回退到某个具体的历史版本。</p><p>git reset 命令语法格式具体如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset [--soft | --mixed | --hard] [HEAD]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>--mixed</code>是<strong>默认参数，可以不带</strong>，用于重置暂存区的文件与上一次的提交（commit）保持一致，工作区文件内容保持不变</p><h4 id="soft" tabindex="-1"><a class="header-anchor" href="#soft" aria-hidden="true">#</a> soft</h4><p><code>--soft</code>参数用于回退到某个版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --soft HEAD  #  回退到上个版本
git reset --soft HEAD~3  # 回退到上上上个版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hard⚠️" tabindex="-1"><a class="header-anchor" href="#hard⚠️" aria-hidden="true">#</a> hard⚠️</h4><p>！！！⚠️谨慎使用<code>--hard</code> 参数，它会删除回退点之前的所有信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --hard HEAD~3   # 回退到上上上个版本
git reset --hard 1de43  # 回退到指定版本
git reset --hard origin/master  # 本地状态回退到和远程相同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> HEAD</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset HEAD^   # 回退到所有内容的上一个版本
git reset HEAD^ Git入门.md  # 回退到Git入门.md文件的版本的上一个版本（指定版本的上个版本）
git reset 01b42  # 回退到指定版本，需要至少哈希值的前4位；可以通过git reflog命令先查看我们要回退的版本号的哈希值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git reset HEAD还能取消已缓存的内容。当我们对某个文件的内容进行了修改并且已经执行<code>git add</code>之后，我们想取消缓存区的内容，使用如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset HEAD [filename]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111139648.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p><strong>关于HEAD 说明</strong>：</p><ul><li>HEAD 表示当前版本</li><li>HEAD^ 上一个版本</li><li>HEAD^^ 上上一个版本</li><li>HEAD^^^ 上上上一个版本</li><li>以此类推…</li></ul><p>可以使用 ～数字表示</p><ul><li>HEAD~0 表示当前版本</li><li>HEAD~1 上一个版本</li><li>HEAD^2 上上一个版本</li><li>HEAD^3 上上上一个版本</li><li>以此类推…</li></ul><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><ul><li><code>HEAD</code>指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令<code>git reset --hard commit_id</code>。</li><li>穿梭前，用<code>git log</code>可以查看提交历史，以便确定要回退到哪个版本。</li><li>要重返未来，用<code>git reflog</code>查看命令历史，以便确定要回到未来的哪个版本。</li></ul>`,133);function x(E,H){const a=r("ExternalLinkIcon");return l(),s("div",null,[c,e("blockquote",null,[o,e("p",null,[e("a",u,[i("https://www.cnblogs.com/xueweisuoyong/p/11914045.html"),n(a)])])]),p,e("p",null,[i("进入创建用户的页面："),e("a",m,[i("http://github.com/join，填写如下的信息在点击`Create"),n(a)]),i(" an accout`即可")]),v,e("blockquote",null,[h,e("p",null,[e("a",b,[i("https://www.jianshu.com/p/09f243768cf6"),n(a)])])]),f])}const A=d(g,[["render",x],["__file","github-base.html.vue"]]);export{A as default};