---
title: Linux安装Git
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - git
 - install
 - linux
---
使用yum安装

命令：yum -y install git

查询是否安装成功

命令：git --version

yum安装的目录:/usr/libexec/git-core

 

linux服务器下记住密码

```csharp
git config --global credential.helper store 
```

git pull

输入你的用户名和密码store模式会存储

查看系统存储的用户名个密码

```csharp
cat ~/.git-credentials
```

拉取方法