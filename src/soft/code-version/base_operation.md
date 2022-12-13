---
title: Git基本操作
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
## Git安装

可以直接从官网下载安装程序，然后按照默认的选项进行安装 https://git-scm.com/downloads 或者  https://gitforwindows.org/

安装完成后找到Git Bash，然后出来一个类似于命令窗口的东西，就说明Git安装成功了

安装成功后，还需要最后一步的设置，在命令行输入

```csharp
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

这是因为Git是分布式版本控制系统，所以每个机器都必须自报家门：你的名字和email地址。

注意：git conifg命令中的--globdal参数，这就表示你的这台机器上所有的Git仓库都使用这个地址。也可以对每个仓库指定不同的名称和email地址。 

## 流程

### 创建仓库

将本地一个文件夹变为Git可以管理的仓库

```csharp
git init
```

### 拉取仓库

```csharp
git clone https://用户名:密码@仓库地址

# 拉取某一分支
git clone -b 分支名 https://gitee.com/AZRNG/event-bus.git
```

### Git创建版本库

版本库又叫做仓库，英文名称是repository，你可以理解为是一个目录，这目录里面所有的问题都可以被Git管理起来，每一个文件的修改删除Git都可以进行跟踪，以便任何时刻都可以追踪历史或在将来的某一个时间可以还原。

创建版本库，找到一个合适的地方，然后右键选择Git Bash Here

命令：mkdir learngit

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132231768.png)

进入这个目录

命令：cd learngit

显示当前目录

命令：pwd

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132231006.png)

通过 git init 命令可以把这个目录变成Git可以管理的仓库

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132231101.png)

然后我们就建好了一个空的仓库，在查看隐藏项目的条件下，我们可以看见都一个.git的目录，这个是Git用来跟踪管理版本文件的。或者使用ls -ah命令就可以看见。

### Git添加文件

在仓库下创建一个文件为readme.txt，接着我们使用命令 git add告诉Git，把文件添加到仓库。

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132231833.png)

### Git提交

使用git commit告诉Git，把文件提交到Git仓库

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132231479.png)



-m后面是本次提交的说明，可以输入有意义的提交内容

1 file changed：一个文件被改动

2 insertions：插入了两行内容

Git的添加文件和提交文件区分开来的目的是，因为一次性提交多个文件，所以你可以多次add不同的文件。比如：

git add file1.txt$ git add file2.txt file3.txt$ git commit -m "add 3 files."

## 分支操作

### 创建分支

创建dev分支

```csharp
git branch dev
```

### Git切换分支

```csharp
git checkout dev(分支名称)
```

### Git查看当前分支

```csharp
git branch -a
```

### 合并分支

切换到主分支master，合并dev分支到当前分支master

```csharp
git merge dev
```

### 删除分支

```csharp
git branch -d dev
```

### 推送分支

```csharp
git push -u origin master
```

## 标签

### 创建标签

默认标签是打在最新提交的commit上

```csharp
git tag v1.0
```

### 删除标签

```csharp
git tag -d v0.1
    
删除远程标签
git tag -d v0.9
git push origin :refs/tags/v0.9
```

### 推送标签到远程仓库

```csharp
#推送指定标签至远程
git push origin v0.1
    
#推送全部标签至远程
git push origin --tags
```

### 切换标签

```csharp
#tag标签管理
git tag

#切换
git checkout tag值
```

## 仓库信息

### 查看仓库当前状态

继续修改readme.txt文件，然后我们运行git status命令查看结果

```csharp
git status
```

On branch masterChanges not staged for commit: (use "git add <file>..." to **update**what will be committed) (use "git checkout -- <file>..." **to** discard changes **in** working directory)

​               modified:  readme.txt  **no** changes added **to commit** (use "git add" **and**/**or** "git commit -a")

这告诉我们readme.txt已经被吸怪了，但是还没有准备提交

### 查看上次的修改

使用命令git diff

```csharp
git diff
```

diff --git a/readme.txt b/readme.txt

index d8036c1..013b5bc 100644

--- a/readme.txt

+++ b/readme.txt

@@ -1,2 +1,2 @@

-Git is a version control system.

+Git is a distributed version control system.

 Git is free software.

\ No newline at end of file

再次提交修改后的文件到仓库，第一步是git add

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132232338.png)

再次提交

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132232526.png)

查看文件状态

git statusOn branch masternothing to **commit**, working tree clean

### 查看提交的历史记录

```csharp
git log
```

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132232494.png)

显示顺序是从最近到最远的提交日志

### Git版本回退

Git中使用HEAD表示当前版本，上一个版本是HEAD^,上上一个版本是HEAD^^，往上100个版本是HEAD~100.

现在回退到上一个版本

```csharp
git reset
```

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132232941.png)

查看内容果然被还原了

Git版本回退、撤销修改、删除文件 接着看网址：[此处](https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192)

### 清除已删除的远程分支

```csharp
git fetch -p（如果这个分支已经在本地也创建那么删除不掉）
```

### 删除本地分支

```csharp
git branch -d <branchName> (会在删除前检查merge状态，避免误删没有合并的分支)
```

### 更改仓库对应地址

在仓库目录下右键Git Bash Here中输入命令：

查询关联

git remote -v

![img](https://cdn.nlark.com/yuque/0/2021/png/272869/1609895610758-de53f895-e871-4140-a702-72b7af02de74.png)

删除关联

git remote rm origin

添加关联

git remote add origin 新地址git链接

推送主分支：

git push -u origin master 

推送其他分支       

git push -u origin develop #

查看所有分支：

git branch -av

如果修改关联地址后出来呢问题： 

See git-pull(1) for details 

git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

git branch --set-upstream-to=origin/<branch> dev

那么运行命令：

git branch --set-upstream-to=origin/dev dev

## 记住密码

场景：在git每次推送的和拉取的时候需要输入账号和密码，这是一件非常痛苦的事情，那么我们现在看下如何解决这种情况:

在Git项目的文件夹（包含隐藏文件.git文件夹的）内右键git bash here

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132236404.png)

然后输入命令 

```yaml
git config  credential.helper store 
```

这里没有--global意思是指只对这个仓库生效，建议以后都不要加--global，让代码配置以仓库为单位存储就好，设置成全局不灵活

打开.git文件夹的.config文件，回发现多了两行

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132236417.png)

然后git push到远程仓库，输入用户名和密码，然后再次运行git push时候就不用输入用户名和密码了



删除已经保存的账户密码

克隆项目的时候，输错了一次密码，然后提示认证失败，然后后期再次输入密码啥等一直拉取不成功，如何让忘记密码再次输入密码

在仓库目录下运行git-bash 管理员方式运行

命令：git config --system --unset credential.helper   #清除保存好的账号密码

之后会弹出用户名和密码，输入即可
