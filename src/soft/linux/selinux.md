---
title: SSLinux
lang: zh-CN
date: 2022-12-13
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - linux
---
# 介绍

SELinux一共有三种状态。

- Enforcing：默认状态，强制启用，状态值是1
- Permissive：宽容，大部分规则都放行，状态值是0
- Disabled：禁用，不设置任何规则

# 操作

## 关闭

先查询当前的状态

```csharp
getenforce
```

编辑配置文件/etc/selinux/config

```csharp
vim /etc/selinux/config
```

修改selinux的值为disabled

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132141354.png)

重启服务器

```csharp
reboot
```

## 添加配置

演示将 Nginx 添加至 SELinux 的白名单，执行命令

```powershell
yum install policycoreutils-python

sudo cat /var/log/audit/audit.log | grep nginx | grep denied | audit2allow -M mynginx

sudo semodule -i mynginx.pp
```

这里安装可能会报错Exiting on user cancel

这是yum的一个bug导致的问题。修改/usr/lib/python2.7/site-packages/urlgrabber/grabber.py.

```powershell
vi /usr/lib/python2.7/site-packages/urlgrabber/grabber.py
```

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132141886.png)

修改后

```powershell
#elif errcode == 42:
# this is probably wrong but ultimately this is what happens
# we have a legit http code and a pycurl 'writer failed' code
# which almost always means something aborted it from outside
# since we cannot know what it is -I'm banking on it being
# a ctrl-c. XXXX - if there's a way of going back two raises to
# figure out what aborted the pycurl process FIXME
#    raise KeyboardInterrupt
```

然后以root用户运行如下命令升级：

```powershell
yum clean metadata
yum clean all
yum upgrade
```

升级完成即可。

# 参考资料

添加SeLinux配置：https://www.cnblogs.com/liuxiaoji/p/9907984.html