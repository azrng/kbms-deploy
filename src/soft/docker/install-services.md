---
title: Docker可视化
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - docker
 - install
---
> Docker在线版：https://labs.play-with-docker.com/

# Docker可视化

```
docker run -d -p 9000:9000  --name portainer --restart always  -v /var/run/docker.sock:/var/run/docker.sock --restart=always --name prtainer portainer/portainer
```

# RabbitMQ

```
docker run -d --name myrabbit -p 9005:15672 -p 5672:5672  -e RABBITMQ_DEFAULT_VHOST=customer -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=123456  rabbitmq:3-management-alpine
```

> 命令说明：
>
> -d：后台运行
>
> --name：设置名称
>
> -p：设置端口
>
> -e：配置命令

# 可视化Nginx

部署nginx-gui

```
docker run --name nginxwebui -itd -v /root/nginxWebUI:/home/nginxWebUI -v /var/net:/home/nginxWebUI/data -e BOOT_OPTIONS="--server.port=9008" --privileged=true --net=host  cym1102/nginxwebui:latest
```

# Git服务

## Gitlab

```
# 挂载
docker run -d  -p 443:443 -p 9006:80 -p 222:22 --name gitlab --restart always -v /home/gitlab/config:/etc/gitlab -v /home/gitlab/logs:/var/log/gitlab -v /home/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce

# 不挂载
docker run -d  -p 443:443 -p 9006:80 -p 222:22 --name gitlab gitlab/gitlab-ce
```

> -d：后台运行
>
> -p：将容器内部端口向外映射
>
> --name：命名容器名称
>
> -v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录

## Gitea

```
docker run -d --name=gitea -p 10022:22 -p 9004:3000 -v /var/lib/gitea:/data gitea/gitea

docker run -d --privileged=true --restart=always --name=gitea -p 10022:22 -p 9004:3000 -v /var/lib/gitea:/data gitea/gitea
```

# 数据库

## Redis

```
docker run -p 6379:6379 --name redis -d redis redis-server --appendonly yes --requirepass "123456"
```

命令说明：

> -p：宿主机端口与容器端口映射，前面的端口为主机映射端口（需配置服务器安全组），后面的端口为镜像开放的端口
>
> --restart=always：无论什么情况挂壁，总是重启
>
> --name：容器名称
>
> -d：使用指定的镜像，在后台运行容器
>
> --appendonly yes：redis运行时开启持久化
>
> --requirepass “123456”：设置redis登陆密码

## MySQL

```
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -e TZ:Asia/Shanghai -d mysql --lower_case_table_names=1
```

## MongoDB

```
docker run -p 27017:27017 --name mongo -e TZ=Asia/Shanghai -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=123456 -d mongo
```

## MSSQL

```
# 拉取镜像
docker pull mcr.microsoft.com/mssql/server:2017-latest

# 查看镜像
docker images

# 启动镜像生成容器 
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Sql987654"  -p 1433:1433 --name sqlserver  -d mcr.microsoft.com/mssql/server:2017-latest
或者使用阿里云镜像源
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Sql987654"  -p 1433:1433 --name sqlserver  -d registry.cn-hangzhou.aliyuncs.com/zrng/mssql:2019-latest
```

## postgresql

```
docker run  -d -p 5432:5432 -e POSTGRES_PASSWORD=123456  postgres 
```

# 监控

## Grafana

```
docker run -d -p 3000:3000 grafana/grafana
```