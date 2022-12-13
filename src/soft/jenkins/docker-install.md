---
title: Docker安装
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - Jenkins
 - docker
---
该方法部署的jenkins里面不包含netcore环境，下面包含通过docker部署netcore步骤

# 1. 部署jenkins

## 1.1 创建jenkins的工作目录

```
//创建工作目录 
mkdir /var/jenkins_home

//赋予权限 
chown -R 1000 /var/jenkins_home
```

## 1.2 通过docker部署

### 1.2.1 拉取镜像

```
docker pull  jenkinsci/blueocean
```

### 1.2.2 生成容器

```
#注意：切换一行执行命令 
docker run -u root -d -p 9003:8080 -p 50000:50000 
 -v /var/jenkins_home:/var/jenkins_home 
 -v /usr/bin/docker:/usr/bin/docker  
 -v /var/run/docker.sock:/var/run/docker.sock  
 -v /usr/local/bin/docker-compose:/usr/local/bin/docker-compose 
 jenkinsci/blueocean 
 
 一行显示:
docker run -u root -d -p 9003:8080 -p 50000:50000 -v /var/jenkins_home:/var/jenkins_home  -v /usr/bin/docker:/usr/bin/docker   -v /var/run/docker.sock:/var/run/docker.sock   -v /usr/local/bin/docker-compose:/usr/local/bin/docker-compose  jenkinsci/blueocean
```

## 1.3 通过docker-compose部署

执行docker-compose脚本

```
version: '3.4'

services:
  jenkins:
    container_name: jenkins
    image: jenkinsci/blueocean
    ports:
      - "9003:8080"
      - "50000:50000"
    restart: always
    user: root
    volumes:
      - '/var/jenkins_home:/var/jenkins_home'
      - '/usr/bin/docker:/usr/bin/docker'
      - '/var/run/docker.sock:/var/run/docker.sock'
      - '/usr/local/bin/docker-compose:/usr/local/bin/docker-compose'
    environment:
      - TZ=Asia/Shanghai
```

### 1.3.1 执行命令生成容器

docker-compose -f docker-compose.yaml up --build -d jenkins

# 2. 访问jenkins网站

访问地址：[http://IP:8080](http://192.168.1.14:8080/)

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101438040.png)

## 2.1 寻找超级管理员密码

进入容器，然后去容器的执行目录下查找管理员的密码

```
// 进入容器 
docker exec -it 容器ID bash 
// 查看密码 
cat /var/jenkins_home/secrets/initialAdminPassword

或者不进入容器
docker exec 容器ID  cat /var/jenkins_home/secrets/initialAdminPassword
```

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101438856.png)

输入找到的管理员密码然后进入系统

## 2.2 进入jenkins

新手入门，选择安装插件的方式，这里我们直接选择安装推荐的插件然后进入系统

注意：安装插件报错的话继续在执行一遍。

## 2.3 设置管理员用户密码

创建管理员用户密码

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101438670.png)

## 2.4 系统界面

如果系统管理里面有错误，那么我们可以手动安装和修改。

## 2.5 修改镜像源

插件管理->高级->升级站点，修改为清华大学插件源

```
# 清华大学官方镜像
https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json
```

# 3 错误

如果出现错误，那么就需要去查看控制台输出，根据错误找原因。

### 3.1 IPv4 forwarding is disabled

意思就是linux没有开启 Ipv4 数据包转发功能

可以先尝试重启docker，如果没有作用可以修改下面配置

```
# 1. 打开 sysctl.conf
vim /etc/sysctl.conf

# 2.添加下面一行
net.ipv4.ip_forward=1

# 3.重启 network 和 docker
systemctl restart network && systemctl restart docker
```

# 4 参考文档

官方文档：https://www.jenkins.io/doc/book/installing/docker/

xiaoxiaotank：https://www.cnblogs.com/xiaoxiaotank/p/14762665.html