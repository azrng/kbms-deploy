---
title: Linux安装docker
date: '2021/02/22'
publish: true
categories:
 - soft
tags:
 - docker
---
# Linux安装docker

# 安装条件

在centos 7安装docker要求系统64位，系统内核版本3.10以上，可以使用命令查看

```
uname -r
```

**注意**：要不就是开放指定的端口，要不直接就在安装之前将服务器防火墙关闭

# 卸载旧版本

老版本的docker被称为docker或者docker-engine，如果安装就需要卸载它们以及相关的依赖项：

命令：

```
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate\
                  docker-logrotate \
                  docker-engine
```

新版本的名称被称为docker-ce

# 安装方法

安装方法有两种：

1.从docker存储库中拉取进行安装，以简化安装和升级任务。推荐。

2.下载RPM软件包并手动安装，并完全手动管理升级。

这边只描述使用存储库进行安装

安装yum-utils

```
sudo yum install -y yum-utils
```

设置存储库

```
# docker官方仓库
sudo yum-config-manager  --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 使用阿里云docker仓库
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

安装最新版本docker engine和容器

```
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

此命令会安装 Docker，但不会启动 Docker。它还会创建一个 docker组，但是，默认情况下它不会向该组添加任何用户。

```
# 启动docker
sudo systemctl start docker
```

配合docker镜像加速器,不过貌似如何使用阿里云docker仓库好像不需要配置网速都不差。

```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["加速器url"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

查询docker版本

```
docker --version
```

常用命令

```
# 重启docker
sudo systemctl restart  docker 
# 查看docker服务状态
sudo systemctl status docker
# 将docker服务设置为开机启动
sudo systemctl enable docker
# 查看docker版本信息
docker --version
```

# 卸载

卸载docker包

```
sudo yum remove docker-ce docker-ce-cli containerd.io
```

主机上docker一些容器，卷或自定义配置文件不会自动删除，可以使用命令删除：

```
 sudo rm -rf /var/lib/docker
 sudo rm -rf /var/lib/containerd
```

 

检测docker是否可以正常运行（运行hello-word镜像，如果本机没有，系统会自动去拉取）

命令：sudo docker run hello-world

然后出来 Hello from Docker就说明成功了

# 错误

执行安装出错

```
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631381660834-2f21de05-73ed-46ab-957b-b05230265697.png)

 解决方案

```
curl https://packages.microsoft.com/config/rhel/7/prod.repo > ./microsoft-prod.repo
sudo cp ./microsoft-prod.repo /etc/yum.repos.d/
yum update -y
```

# 资料

官方教程：https://docs.docker.com/engine/install/centos/

离线安装模式

查看博客：https://www.cnblogs.com/kingsonfu/p/11576797.html