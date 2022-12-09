---
title: Centos7部署和守护进程
lang: zh-CN
date: 2021-08-25
publish: true
author: azrng
isOriginal: true
category:
 - dotNet
tag:
 - 部署
 - Supervisor
 - centos
---
# 1. 前言

本文是一个在centos系统部署.Net6的文章，本来内容基本上来源于作者艾三元，目的是对部署流程的一次熟悉以及对守护进程的一次学习。

> 本文示例环境：centos7、VS2022、.Net6

# 2. 准备

Linux服务器：通过Hyper-v启动的虚拟机(已经写有教程了)，系统使用CentOS-7-x86_64-Minimal-2009.iso

dotNet6程序：https://gitee.com/AZRNG/my-example  master分支

因为我这是一台新的centos7服务器，所以我先手动将 Microsoft 包签名密钥添加到受信任密钥列表，并添加 Microsoft 包存储库。

```csharp
rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
```

升级所有包同时也升级软件和系统内核

```csharp
yum update
```

# 3. 开始

## 3.1 安装环境

如果已经安装SDK或者运行时，那么使用以下命令来查看安装了哪些版本

```shell
dotnet --list-sdks
dotnet --list-runtimes
```

我是新系统，所以直接就是命令找不到，如果你已经存在需要的版本就不用再安装了

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031144835.png)

安装.Net6 SDK

```shell
sudo yum install dotnet-sdk-6.0
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145683.png)

过程中会有两个“y”的原因是，命令执行的中途停顿了，让你确认下是否进行安装，你要输入“y”确认安装才会执行安装，安装完后，我们输入如下命令看下是否安装成功

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145160.png)

## 3.2 拷贝项目

环境已经装好，下面我们开始部署项目，需要先将项目拷贝到服务器上，可以直接拷贝发布好的项目到服务器

使用编译器打开项目，然后右键项目发布，然后选择发布到文件夹、发布地址等

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145533.png)

查看发布后的目录

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145716.png)

然后通过MobaXTerm工具将文件拷贝到服务器上

## 3.3 部署项目

查看我们的项目

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145639.png)

运行命令启动文件

```shell
dotnet xxx.dll
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145723.png)

因为发布方式是Release，并且我配置的该模式不显示swagger，那么只能通过调用接口来测试是否发布成功。

在服务器直接调用示例

```shell
curl localhost:5000/api/Grade/GetGradeList
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145072.png)

## 3.4 配置Nginx托管

安装nginx

```shell
curl -o  nginx.rpm http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm

rpm -ivh nginx.rpm

yum install nginx

-- 启动nginx
systemctl start nginx

--置开机启动（linux宕机、重启会自动运行nginx不需要连上去输入命令）
systemctl enable nginx
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145721.png)

## 3.5 配置防火墙

开放80端口

```shell
firewall-cmd  --permanent  --zone=public --add-port=80/tcp
```

 ![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145949.png)

重启防火墙以使配置即时生效：

```shell
systemctl restart firewalld
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145879.png)

测试nginx是否可以访问

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145405.png)

到这里我们的nginx已经安装好了

## 3.6 配置Nginx对程序的转发

修改nginx的default.conf文件

```shell
vi /etc/nginx/conf.d/default.conf
```

文件内容如下

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145650.png)

需要修改server内容为

```shell
server {    listen 80;    location / {        proxy_pass http://localhost:5000;        proxy_http_version 1.1;        proxy_set_header Upgrade $http_upgrade;        proxy_set_header Connection keep-alive;        proxy_set_header Host $host;        proxy_cache_bypass $http_upgrade;    }}
```

保存并退出，重新加载配置

```shell
nginx -s reload
```

再次运行ASP.NET Core应用程序 

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145561.png)

重新通过本地访问服务器地址

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145619.png)

注意：如果这个时候提供502错误，这个问题是由于 SELinux 保护机制所导致，我们需要将 Nginx 添加至 SELinux 的白名单或者直接关闭SELinux 。

到这里基本完成了部署，但是还存在着其他问题：

- ASP.NETCore应用程序运行在shell之中，如果关闭shell则会发现ASP.NET Core应用被关闭，从而导致应用无法访问，这种情况当然是我们不想遇到的，而且生产环境对这种情况是零容忍的。
- 如果ASP.NET Core进程意外终止那么需要人为连进shell进行再次启动，往往这种操作都不够及时。

- 如果服务器宕机或需要重启我们则还是需要连入shell进行启动。

 为了解决这些问题，我们需要有一个程序来监听ASP.NET Core 应用程序的状况。那么要解决这些问题，我们就必须要实现这么一个功能：如果ASP.NET Core 意外终止，那么我们要自动重启；如果服务器服务器重启后，我们要有个类似脚本命令一样，自动执行 dotnet 命令。现在正好有个基于 Python 开发的工具 Supervisor 可以解决我们上述问题。

## 3.7 配置Supervisor守护服务

在应用程序停止运行的时候立即重新启动。这边我们用到了Supervisor这个工具，它是用 Python 开发的 Linux/Unix 系统下的一个进程管理工具。它可以使进程脱离终端，变为后台守护进程（daemon）。实时监控进程状态，异常退出时能自动重启。Supervisor 不支持任何版本的 Window 系统；

### 3.7.1 安装Supervisor

```powershell
yum -y install supervisor
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145372.png)

原文的安装方式我可能是因为网络问题没有成功

```powershell
yum install python-setuptoolseasy_install supervisor
```

### 3.7.2 配置Supervisor

- 运行supervisord 服务的时候，需要指定 Supervisor 配置文件，所以，先通过如下命令创建目录，以便让 supervisor 成功加载默认配置：

```powershell
mkdir /etc/supervisor
```

- 目录创建成功后, 通过 echo_supervisord_conf 程序（用来生成初始配置文件,文件名可以自定义）来初始化一个配置文件： 

```powershell
echo_supervisord_conf >/etc/supervisor/supervisord.conf
```

- 通过vim命令修改创建好的supervisord.conf配置信息：

```powershell
vi /etc/supervisor/supervisord.conf
```

- 最下面找到如下文本片段

```powershell
;[include];files = relative/directory/*.ini
```

修改为

```powershell
[include]files = /etc/supervisor/conf.d/*.ini
```

### 3.7.3 为我们部署的.NET Core添加进程配置文件

- 创建配置文件NetByDocker.ini(文件名自定义)

```powershell
[program:NetByDocker]
command=dotnet /root/publish/NetByDocker.dll
directory=/root/publish/
autostart=true
autorestart=true
stderr_logfile=/var/log/NetByDocker.err.log
stdout_logfile=/var/log/NetByDocker.out.log
environment=ASPNETCORE_ENVIRONMENT=Production
user=root
stopsignal=INT
```

- 在/etc/supervisor/目录下创建一个文件夹conf.d

```powershell
mkdir /etc/supervisor/conf.d/
```

将刚创建的配置文件NetByDocker.ini移到conf.d文件夹下

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1641177803533-fefc2c6a-15ce-449b-a264-0af8e60c568f.png)
如果服务已经启动，则需要使用 supervisorctl reload 命令来使新的配置生效，当然，我们这里并没有启动，所以不需要这一步。

### 3.7.4   启动 Supervisor 服务

```powershell
supervisord -c /etc/supervisor/supervisord.conf
```

 启动服务后，我们可以检测看一下：

```shell
ps -ef | grep NetByDocker.dll
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145590.png)

  这个时候, 我们已经不需要使用dotnet命令运行程序, 同样可以访问我们部署的.NET Core程序了。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031145601.png)

## 3.8 配置Supervisor开机启动

- 进入/usr/lib/systemd/system/目录，并创建supervisord.service文件

```powershell
vi /usr/lib/systemd/system/supervisord.service
```

修改文件

```powershell
[Unit]
Description=Supervisor daemon


[Service]
Type=forking
ExecStart=/usr/bin/supervisord -c/etc/supervisor/supervisord.conf
ExecStop=/usr/bin/supervisorctl $OPTIONS shutdown
ExecReload=/usr/bin/supervisorctl $OPTIONS reload
KillMode=process
Restart=on-failure
RestartSec=42s
```

- 设置开机启动

```powershell
systemctl enable supervisord.service
```

启动supervisor进程

```powershell
systemctl start supervisord.service

systemctl daemon-reload
```

验证一下是否为开机启动

```powershell
systemctl is-enabled supervisord
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202201031146091.png)

重启，测试是否可以开机自启

总结：这个supervisord牵涉到的知识还挺多，如果后续使用该方式部署生产环境的东西，那么还是需要深入学习一下关于它的知识。

# 资料

原文作者：艾三元

地址：https://mp.weixin.qq.com/s/1x4cStEX3AIgsL9HvJHyCw

centos安装.Net：https://docs.microsoft.com/zh-cn/dotnet/core/install/linux-centos

Supervisor echo_supervisord_conf配置详解：https://www.cnblogs.com/toutou/p/supervisor.html
