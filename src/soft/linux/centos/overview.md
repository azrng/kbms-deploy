---
title: 概述
lang: zh-CN
date: 2022-12-13
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - centos
---
# 配置

创建好连接上linux系统

然后我们需要先添加yum源

命令：rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm

然后升级所有包的同时也升级软件和系统内核

命令：yum update

或者命令：yum upgrade

# 安装脚本

centos 安装netstat

```bash
yum install net-tools
```

安装vim和yum

容器内安装的命令

```bash
apt-get update
apt-get install vim -y
apt-get install yum -y

快速添加一个yum源
yum-config-manager --add-repo http://mirrors.aliyun.com/repo/Centos-7.repo

如果提示没有yum-config-manager命令，执行apt-get -y install yum-utils 安装即可，然后再执行一次上面的命令
```

# 防火墙配置

对防火墙规则进行保存时候提示错误

保存命令：service iptables save

报错：The service command supports only basic LSB actions (start, stop, restart, try-restart, reload, force-reload, status). For other actions, please try to use systemctl.

**解决方法：**

systemctl stop firewalld 关闭防火墙

yum install iptables-services 安装或更新服务

再使用systemctl enable iptables 启动iptables

最后 systemctl start iptables 打开iptables

再执行service iptables save

3.重启iptables服务：

service iptables restart

执行完毕之后/etc/syscofig/iptables文件就有了

 



关闭防火墙

查看防火墙状态

firewall-cmd *--state*

停止firewall

systemctl stop firewalld.service

禁止firewall开机启动

systemctl disable firewalld.service 



常用命令

```shell
移除指定端口：
firewall-cmd --permanent --remove-port=5000/tcp

-- 开启端口
firewall-cmd  --permanent  --zone=public --add-port=5000/tcp

-- 重启防火墙服务使配置生效 
firewall-cmd --reload

-- 查看当前开启的端口号
firewall-cmd --list-port

-- 停止防火墙
systemctl stop firewalld

-- 查看防火墙状态
systemctl status firewalld 

-- 启动防火墙
systemctl start firewalld
```

# 权限

进入要修改权限的文件夹所在目录

 

sudo chmod -R 777 文件夹名

 

注意：

【注】 -R 是指级联应用到目录里的所有子目录和文件

777 是所有用户都拥有最高权限

# 教程

常用linux命令 https://www.cnblogs.com/pengyunjing/p/10441944.html

关于阿里云centos服务器的一些安全性设置  https://www.centoschina.cn/safe/centossafe/9488.html

日常必备的16个linux命令：https://mp.weixin.qq.com/s/lLtbR3BihvOfVJv5VBj0AQ