---
title: Gitea
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: false
category:
 - soft
tag:
 - git
 - 版本管理
 - docker
---

# 介绍

一款极易搭建的自助 Git 服务，是在 Gogs 的基础上新开一个发行分支。

官方地址：https://gitea.com/

# 安装方式

docker方式

```csharp
docker run -d --name=gitea -p 10022:22 -p 9004:3000 -v /var/lib/gitea:/data gitea/gitea

docker run -d --privileged=true --restart=always --name=gitea -p 10022:22 -p 9004:3000 -v /var/lib/gitea:/data gitea/gitea
```

# 配置

安装完成后访问 xxxxx:9004，配置数据库

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132304230.png)

配置一般设置

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305978.png)

可选设置

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305101.png)

配置管理员密码，然户跳转打开主界面

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305403.png)

## 管理后台

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305445.png)

## 创建仓库

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305069.png)

展示

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305674.png)

克隆项目

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305820.png)

编写项目提交

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305157.png)

## 注册用户

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132305193.png)

还对用户名有校验， 应该只包含字母数字, 破折号 ('-'), 下划线 ('_') 和点 ('. ') 。

# 参考文档

和gogs之间的故事：https://blog.wolfogre.com/posts/gogs-vs-gitea/