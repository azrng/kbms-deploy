---
title: Hyper-v安装centos7
date: '2021/01/22'
publish: true
categories:
 - soft
tags:
 - linux
---
# 介绍

可以让你在你的电脑上以虚拟机的形式运行多个操作系统(至于为什么选择这个，主要是系统已经自带了，所以能不装其他我就先不装其他试试)

> Hyper-V 可用于 64 位 Windows 10 专业版、企业版和教育版。 它无法用于家庭版。

# 准备

## 下载系统镜像

去阿里云下载系统：http://mirrors.aliyun.com/centos/7/isos/x86_64/  

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180141020.png)

建议下载这个版本，900M最小安装。DVD版本较大，但是里面会有很多东西。

## 启用Hyper-v

在电脑左下角搜索控制面板

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180141084.png)

选择程序，然后点击启用或者关闭Windows功能

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180141683.png)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180141260.png)

勾选应用后等待结束后重启系统

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180141495.png)

在重启结束后可以在电脑上搜索到Hyper-v管理器

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180141290.png)

下面的步骤就是使用该工具来完成的。

# 新建虚拟网络交换机

打开Hyper-v管理器

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180141456.png)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180141529.png)

然后在这个界面名称具体规定，外部网络选择参考网络连接里面

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142917.png)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142838.png)

# 新建虚拟机

右键新建虚拟机

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142974.png)



![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142455.png)

修改一个有意义的名称和设置虚拟机的存储位置(保证有一定的空间)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142976.png)

选择虚拟机的代数，直接下一步

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142444.png)

分配内存大小()

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142516.png)

根据个人情况进行设置，如果你虚拟机里面要跑的东西比较大，那么就需要配置大一点

配置网络,下拉列表选择我们配置好的，然后下一步

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142636.png)

连接虚拟硬盘

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142588.png)

安装选项选择镜像的位置

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142996.png)

再次确认我们的安装信息，然后点击完成

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142277.png)

查看已经创建的虚拟机

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142354.png)

选中点击右侧的启动，然后启动开后点击连接

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142908.png)

# 安装系统

启动虚拟机，然后连接后，操作键盘选择Install CentOS7，然后输入enter

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142000.png)

进入安装界面，选择安装语言

![img](https://cdn.nlark.com/yuque/0/2021/png/272869/1624724846329-b787d78d-2344-4681-82ff-d89214113a65.png)

配置安装位置和网络

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142777.png)

点击安装位置

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142786.png)

配置网络和主机名

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142133.png)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142258.png)

然后点击安装

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142690.png)

设置root密码，这里根据个人情况设置简单或者复杂的密码

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142262.png)

这里就不另外创建用户，直接使用root

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180142141.png)

安装成功后重启

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143513.png)

点击enter进入系统，输入用户名root，密码就是我们刚才设置的密码

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143904.png)

输入ls命令查看

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143598.png)

尝试ping下百度看是否可以访问外网

```csharp
ping baidu.com
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143986.png)

# 操作

## 查看网络配置信息

```csharp
ip addr
```

这个时候的ip是动态分配的ip地址

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143188.png)

如果使用默认的界面不习惯，可以使用第三方终端工具(MovaXterm、shell)进行连接。

## MovaXterm基本使用

推荐使用MovaXterm，下载地址**：**https://mobaxterm.mobatek.net/ ，如果有需要可以去网上找汉化版。 

下面简单描述下如何使用，打开MovaXterm工具，新建会话

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143430.png)

选择会话类型(支持多种)，这里我们选择SSH

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143984.png)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143522.png)

点击好的，然后输入密码进行连接。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143144.png)

上面演示的软件是我学习使用的

## 设置静态IP

进入指定目录修改配置,这个里面放的是网络配置

```csharp
cd /etc/sysconfig/network-scripts 
ls 
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143875.png)

使用vm编辑ifcfg-eth0文件

```csharp
vi ifcfg-eth0
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143010.png)

编辑该文件增加或者修改以下配置

vi基本用法：按i进入编辑模式，保存退出先按esc，然后输入:wq

```csharp
BOOTPROTO="static"  #设置静态ip
ONBOOT="yes"        #设置开机自启
IPADDR=192.168.1.8 #分配IP，前三个段要和本机保持一致，后一个段要不一样
NETMASK=255.255.255.0 #和本机保持一致
GATEWAY=192.168.1.1   #和本机保持一致
DNS1=192.168.1.1      #和网关保持一致，不添加无法上外网
```

通过cmd查询本机电脑的ip以及子网掩码等

```csharp
ipconfig
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143829.png)

修改后如图所示

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143756.png)

重启网络服务 使以上配置生效

这点我是使用hyper-v自带界面运行的。

```csharp
service network restart 
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143545.png)

重新查询ip

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143511.png)

将我们的MovaXterm连接配置修改为我们修改后的ip地址重新连接，并且测试是否可以访问外网

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143909.png)

然后通过本机去ping下我们的服务器，可以正常访问。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112180143546.png)

到此，静态ip设置结束。

## 防火墙设置

本文示例目前没有用到以下配置

```csharp
-- 开启防火墙
systemctl start firewalld 

-- 查看防火墙状态
systemctl status firewalld 

-- 开启端口
firewall-cmd   --permanent  --zone=public --add-port=80/tcp

firewall-cmd   --permanent  --zone=public --add-port=22/tcp

firewall-cmd   --permanent  --zone=public --add-port=21/tcp

-- 重启防火墙服务使配置生效 
firewall-cmd --reload

-- 查看当前开启的端口号
firewall-cmd --list-port
```

# 参考文档

Hyper-v：https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/about/