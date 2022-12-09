---
title: 快速入门GitHub
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: false
category:
 - soft
tag:
 - git
---
> 作者：Peter    编辑：JackTian
> 来源：公众号「杰哥的IT之旅」



本文已经经过授权转载！

## 快速入门GitHub

GitHub在程序开发领域家喻户晓，现在几乎整个互联网的开发者都将版本管理工具GitHub作为版本控制的首选，甚至像笔者这样非开发者，一名和每天和数据打交道的人也在使用GitHub，目的主要有：

- 查找资料：GitHub上有很多国内外大神开源的数据挖掘、机器学习的资料、代码，笔者直接fork或者clone下来学习
- 技术交流：通过对开源项目提出issue，能够起到技术交流的效果
- 个人展示：现在互联网领域中，如果一个程序员在GitHub上有一个很好的开源项目，必定是会备受关注。因此GitHub实际上是一个很好的展示个人实力的舞台，或许它能够让你受到招聘人员的青睐

**可以说，正式GitHub，让社会化全员编程成为了现实。**

既然好处颇多，作为互联网界的一员，没有理由不学好GitHub😄本文将详细介绍GitHub的相关基础操作，带你快速入门GitHub

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/2B8E78E9-1B05-C56E-DA69-7E3FB9D10514.png)

## 版本管理

版本管理就是管理更新的历史记录。Git出现之前，人们主要是使用Subversion（简称为SVN）作为版本控制的工具。

### SVN

SVN是属于**集中型**的版本管理系统，其特点是**将仓库集中存放在服务器中，所以只存在一个仓库**。集中型将所有特点是方便管理，但是如果开发者所处的环境无法联网，则无法获取到最新的源码，进而无法进行开发工作。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/32068D9D-DA15-6FF6-E787-13F68C8D447A.png)

### Git

Git是**分散型**的版本管理系统。从下图中我们可以观察出来，GitHub将仓库fork给每个用户。fork的仓库和原始的仓库是两个不同的仓库，开发者是可以随意编辑的。

> Fork的过程其实就是将某个仓库复制到自己的账户下

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/FC17C1DC-2832-8C17-593F-AFFFC2E58194.png)

## 什么GitHub

GitHub是一个基于Git的代码托管平台。如果是付费用户可以建立自己的私人仓库，一般用户的话只能建立公用仓库，也就是说仓库的代码必须是公开的。到底Git和GitHub有什么区别呢？

> 在Git中，开发者将源代码存入名叫“Git仓库”的资料库中，方便使用；而GitHub则是在网络上提供Git仓库的一项服务

GitHub上公开的源代码都是通过Git进行管理的。

## 安装与配置Git

### 安装

现在笔者使用的`MacOS`系统，是自带`Git`的。关于Windows系统下安装，请参考如下文章，讲解的非常详细。

> Windows系统Git安装教程（详解Git安装过程）：
>
> https://www.cnblogs.com/xueweisuoyong/p/11914045.html

### 配置

首先需要设置使用Git时候的名字和邮箱，名字需要使用英文

```
git config --global user.name "Firstname Lastname"  # 名称
git config --global user.email "your_email@example.com"  # 邮箱

# ~/.gitconfig中以如下形式输出文件
[user]

name = Firstname Lastname
email = your_email@example.com
```

需要注意的是：

1. GitHub上公开仓库的时候，名字和邮箱会一同被公开，所以请不要使用不便公开的隐私信息
2. 程序员来自世界各地，请使用英文，不要使用汉字；如果不想使用真名，可以使用网站的昵称

**如何提高命令输出的可读性**？

```
 git config --global color.ui auto   # 将color.ui 设置成auto
```

### 创建账户

进入创建用户的页面：http://github.com/join，填写如下的信息在点击`Create an accout`即可

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/914FA373-2C35-0F0E-4014-2AF19FD706D2.png)

### 配置SSH

GitHub上连接现有仓库的认证，是通过使用了SSH的公开密钥认证方式进行的。现在我们需要创建公开密钥所需的SSH Key，并将其添加到GitHub。

```
ssh-keygen -t rsa -C   # 创建SSH Key
```

接下来需要输入两次密码，最终会生成两个文件：

- id_rsa：私有密钥
- id_rsa.pub：公开密钥

下面我们需要在GitHub中添加公开密钥，今后就可以使用私有密钥进行认证。点击右上角的账户设定按钮：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/C03DC4AE-5900-4448-389D-3AEF8E51B3470.png)

进入settings之后，添加新的SSH Key

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/67256DD8-4FA2-89AA-409F-4AF2AAA83F0B.png)

接下来会出现Title和Key两个输入框，在Title中输入适当的密钥名称，Key部分复制上面id_rsa.pub文件中的内容

```
cat ~/.ssh/id_rsa.pub   # 查看内容
```

添加完成之后，会在我们的邮箱中收到一封提示“公开密钥添加完成”的邮件，确认即可。这样便完成了整个手中的私人密钥和GitHub的认证和通信问题，验证一下：

```
ssh -T git@github.com  
```

在接下来的页面中输入密码和yes即可完成验证。

## 建立仓库

首先我们必须明白一点：**仓库有两种**

- 远程在GitHub上的仓库：远程仓库
- 在自己本地的仓库：本地仓库

本文是以MacOS系统为例，基于Linux；如果是想学习Windows下的仓库创建，请参考下文，讲解的很详细：

> Git使用（10分钟入门）：
>
> https://www.jianshu.com/p/09f243768cf6

### 远程仓库

1、建立远程仓库需要我们先登陆自己的GitHub账号，再进行建仓。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/7AE6783D-F1AC-5854-C46B-1D9BCCC4B45C0.png)

2、我们创建一个`git_start`的仓库

- 仓库的名字
- 仓库的简单描述
- **不要**在远程仓库添加README.md文件。我们使用手动push的方式来添加

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/47D8CEAB-83C6-F750-1CF9-15A8125121CD.png)

3、仓库解释

打开上面我们创建好的仓库，会出现如下的内容（先写上注释，后面慢慢解释）

```
echo "# git_start" >> README.md    # 往README.md中写入内容
git init  # 初始化
git add README.md   # 添加文件
git commit -m "first commit"   # 提交并注释
git branch -M main  # 提交分支
git remote add origin git@github.com:pidada/git_start.git   # 建立远程仓库与本地仓库的连接
git push -u origin main  # 推送
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/F3DCA996-12D0-3A2F-857E-3446D70D6063.png)

### 本地仓库

1、建立本地仓库

> 所谓的本地仓库，就是你自己电脑客户端的仓库。同样地，笔者在本地建立了同样名字的本地仓库`git_start`，其实就是个文件夹

**本地仓库要和远程仓库保持一致**

```
mkdir git_start  # 创建文件夹，即仓库
cd git_start  # 切换到仓库中
ls  # 查看内容，目前是没有任何内容
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/31513165-A44F-D52A-E78A-85C92244F6F1.png)

2、初始化操作

```
echo "学习GitHub的使用，快速入门" >> README.md   # 往文件中写入内容，后面可以更改
git init   # 初始化
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/13BAC8A1-4BD4-1774-4BBE-497A64319754.png)

初始化之后会在当前目录下自动生成一个`.git`的文件。这个文件下存储着管理当前目录内容所需要的仓库数据

3、查看待提交文档

通过`ls`查看已经有了`README.md`文档

```
git status  # 查看待提交的文档
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/8FF487D2-CC4D-9F26-4DB7-4631C4138C6D.png)

4、提交文档

我们将上面的`README.md`文档和生成的`.git`文档一并提交

```
git add .  # 提交全部文件
git add README.md  # 单独提交一个文件
git commmit -m "2021-1-1"  # commit提交，同时写上备注：2021-1-1

# add 和 commit的同步操作
git commit -am "2021-1-1"
```

> **注意：执行了add操作，文件还没有被上传到Git远程仓库中，只是提交到了缓存区域**

`git commit -m "2021-1-1"`才是真正地提交内容，同时写上备注：将文件从缓存区提交到远程

5、建立远程仓库连接并推送

```
git remote add origin git@github.com:peter/git_start.git  # 建立连接
git push -u origin master  # 推送到master分支
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/BEDAF4A1-E414-578C-2A9B-6C5A46104F08.png)

6、检查

此时我们刷新远程仓库的页面，会发现页面更新了，也有了内容：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/EDEE13CE-8756-B6AE-D989-CED8CF849830.png)

7、查看提交日志

```
git log  # 查看提交日志
git log --pretty=short  # 只显示一行简述信息
git log README.md  # 只显示指定目录、文件的日志
git log -p README.md  # 只显示指定目录、文件的日志修改前后的改动
```

`commit`栏旁边显示的是指向这个提交的哈希值。**Git的其他命令中，在指向提交时会用到这个哈希值**

Author栏旁边是Git设置的用户名和邮箱地址

Date栏显示的是执行日期和时间

最下面是提交信息，-m 参数后面的信息

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/7776369C-5D3D-B22C-45F4-E9D307EA0431.png)

8、修改`README.md`文件

通过vim编辑器修改内容如下：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/D4AAD3F7-D979-0D4E-CC75-97AABAD737C8.png)

上面使用了Markdown语法，然后我们重新按照上面的命令执行一遍：

```
git status  # 状态是红色
git add .  # 提交到缓存区
git commit -m "修改README.md"  # 记录提交信息
# git remote add origin git@github.com:peter/git_start.git  # 已经建立了连接，所以不必在执行此命令
git push -u origin master # 推到master分支
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/2E4B0E8C-C894-AEC4-6893-2122B06B2A03.png)

回顾下整个操作的过程：

1. 建立远程仓库
2. 建立本地仓库
3. 初始化本地仓库
4. 文档提交到缓存区
5. 缓存区推送到远程仓库

### 重要命令

我们总结一下上面操作中几个重要的命令：

1、git status

查看仓库中文件的状态。如果有新的文件或者原来的文件有修改过，会出现红色

2、git add

向缓存区中添加内容，缓存区是提交之前的一个临时区域（Stage或者Index）

3、git commit  [-m]

将暂存区中的文件保存仓库的历史记录中；-m参数后面跟上提交信息：**git commit -m "第一次提交"**

4、git log

查看以往提交日志信息：什么人在什么时候进行了提交或者合并等，以及操作前后有怎样的差别

```
git log  # 查看日志
git log --pretty=short  # 只显示提交信息的第一行
git log README.md  # 查看某个文件的提交信息
git log -p README.md  #  -p参数只查看提交的改动部分
```

5、git diff

查看工作树、暂存区、最新提交之间的差别。

```
git diff  # 查看当前工作树和暂存区的差别
git diff HEAD  # 查看本次提交和上次提交的差别；HEAD指向当前分支中的最新一次提交的指针
```

> 养成习惯：git commit之前先执行git diff HEAD命令来查看本次提交与上次提交之间的差别；HEAD指向当前分支中最新的一次提交的指针。

6、仓库操作

`-u`作用：将来运行git pull命令从远程仓库获取内容时，本地仓库就可以直接从origin的master分支中获取内容，不需要添加其他的参数

```
git remote add origin git@github.com:github/peter/git_start.git  # 添加远程仓库
git push # 推送到远程仓库
git push -u origin master  # 推送到master分支下
git push -u origin feature_A  # 推送到分支A

git clone  仓库地址  # 将某个远程仓库的内容复制到本地
git push  # 推送
git pull  # 获取最新的远程分支内容
```

## 分支

### master分支

master分支是Git默认创建的分支，其他所有的分支都是在这个分支的基础上进行的。

- 不同的分支单独进行各自的作业
- 该分支的作业完成之后再和master分支合并

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/3AAC1FC8-F322-6C9F-10F9-9BE0F5BEEEF5.png)

进行完作业之后的合并操作：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/E2A533BC-1D3C-314A-D3F3-5D5AE6F5B456.png)

### 分支相关命令

1、git branch-显示分支

显示分支一览表：将分支名列表显示出来，同时确认当前所在的分支；标有星号`*`表示当前分支

```
git branch -a  # 查看当前分支的相关信息
```

2、git branch feature-创建分支

```
git branch feature
```

3、git checkout feature-切换分支

```
git checkout feature
git checkout master  # 切换到master分支
git checkout -  # 切换到上一个分支
```

上面两个命令的合并，创建新的分支并切换到新的分支：

```
git checkout -b feature  # 切换到创建的新分支
```

4、git merge-合并分支

假设某个分支已经完成了作业需要和主分支master合并，使用如下语句：

```
git checkout master  # 切到主分支
git merge --no-off feature-A  # 合并分支
```

5、git log —graph-图的形式查看分支

通过图表的形式查看提交的内容

```
git log --graph  
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/2BECDD94-A988-DACA-D619-1AD69238A1C7.png)

### 版本回溯

既然是版本控制系统，那么对于不同版本的管理肯定是至关重要的。**GitHub的另一个特征便是可以灵活地操作不同的历史版本**。借助分散仓库的优势，可以在不影响其他仓库的前提下对历史版本进行操作。

1、回溯到指定状态

**哈希值只要输入4位以上就可以执行了**

```
git reset --hard [哈希值]  # 添加指定的哈希值，代表某个时间点的状态
```

2、查看**当前仓库的全部执行过**的操作日志

记录我们操作的每次命令

```
git reflog   # 针对当前仓库
git log   # 查看以当前状态为终点的历史日志
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/9CBC56EB-160D-FDEC-6FF0-9FE7E848F4EC.png)

所以我们可以先通过`git reflog`来查看哈希值，再通过`git reset —hard [哈希值]`回到某个状态

3、修改上一条提交信息

使用`git commit --amend`命令

```
git commit --amend
```

4、压缩历史

在合并特性分支之前，如果发现已经提交的内容中有拼写等错误，可以先提交一个修改，然后将这个修改包含到前一个提交之中，压缩成一个历史记录

```
git rebase -i
git rebase -i HEAD~2  # 当前分支下的两个最新历史记录进行压缩
```

5、添加提交一次完成

```
git commit -am "add和commit同时完成"
```

## git reset详解

#### 命令

对版本回溯命令的详解。git reset 命令用于回退版本，可以指定回退到某个具体的历史版本。

git reset 命令语法格式具体如下：

```
git reset [--soft | --mixed | --hard] [HEAD]
```

`--mixed`是**默认参数，可以不带**，用于重置暂存区的文件与上一次的提交（commit）保持一致，工作区文件内容保持不变

#### soft

`--soft`参数用于回退到某个版本

```
git reset --soft HEAD  #  回退到上个版本
git reset --soft HEAD~3  # 回退到上上上个版本
```

#### hard⚠️

！！！⚠️谨慎使用`--hard` 参数，它会删除回退点之前的所有信息

```
git reset --hard HEAD~3   # 回退到上上上个版本
git reset --hard 1de43  # 回退到指定版本
git reset --hard origin/master  # 本地状态回退到和远程相同
```

#### HEAD

```
git reset HEAD^   # 回退到所有内容的上一个版本
git reset HEAD^ Git入门.md  # 回退到Git入门.md文件的版本的上一个版本（指定版本的上个版本）
git reset 01b42  # 回退到指定版本，需要至少哈希值的前4位；可以通过git reflog命令先查看我们要回退的版本号的哈希值
```

git reset HEAD还能取消已缓存的内容。当我们对某个文件的内容进行了修改并且已经执行`git add`之后，我们想取消缓存区的内容，使用如下命令：

```
git reset HEAD [filename]
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/21BFC455-2EF7-024D-6394-FC661C25E247.png)

**关于HEAD 说明**：

- HEAD 表示当前版本
- HEAD^ 上一个版本
- HEAD^^ 上上一个版本
- HEAD^^^ 上上上一个版本
- 以此类推…

可以使用 ～数字表示

- HEAD~0 表示当前版本
- HEAD~1 上一个版本
- HEAD^2 上上一个版本
- HEAD^3 上上上一个版本
- 以此类推…

#### 总结

- `HEAD`指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
- 穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。
- 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。