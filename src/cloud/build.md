# Gitlab简单使用CI/CD

# 开篇语

大概是去年就想做这个事情了，奈何当时卡到一个docker命令找不到的问题上，导致文章难产了，墨迹了这么久，终于又有空来捣鼓它了。

# 目的

我们要实现的目的是我本地不断提交代码(CI),然后服务器不断进行部署(CD)的一个简单流程。

# 准备

在进行简单的gtlab的ci/cd之前，我们需要安装gitlab软件，这个可以看之前的文章。

本文环境：

服务器A：使用docker部署了gitlab

服务器B：已经安装了docker、注册了gitlab-runner用来部署服务



在centos一键安装docker以及docker-compose的脚本

```shell
#!/bin/bash

echo -e "\033[33m install docker sh \033[0m"

# 设置yum源
echo -e "\033[33m Set the yum source \033[0m"
sudo yum -y install yum-utils
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

#yum包更新到最新
echo -e "\033[33m update version \033[0m"
sudo yum update -y

#安装Docker最新版
echo -e "\033[33m install docker-ce \033[0m"
sudo yum install docker-ce -y

#设置Docker自启动
echo -e "\033[33m setting self-turn-on \033[0m"
sudo systemctl enable  docker

#启动Docker
echo -e "\033[33m start docker \033[0m"
sudo systemctl start docker

#配置国内镜像 /etc/docker/daemon.json
echo -e "\033[33m Set up aliyuncs mirror \033[0m"
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
}
EOF
#加载配置文件,ReStart
sudo systemctl daemon-reload
sudo systemctl restart docker

#安装docker-compose,最新版本需要手动查询一下
echo -e "\033[33m install docker-compose \033[0m"
sudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.5/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```



部署gitlab的yaml脚本

```yaml
version: '3'

services:
  gitlab: #gitlab
    image: gitlab/gitlab-ce
    container_name: 'gitlab'
    restart: always
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url "http://172.18.231.92:9006" # web站点访问地址
        gitlab_rails['gitlab_shell_ssh_port'] = 9022 # 设置shell 端口
        gitlab_rails['time_zone'] = 'Asia/Shanghai' # 设置时区
        # gitlab_rails['smtp_enable'] = true
        # gitlab_rails['smtp_address'] = "smtp.exmail.qq.com"
        # gitlab_rails['smtp_port'] = 465
        # gitlab_rails['smtp_user_name'] = "<your qq email>"
        # gitlab_rails['smtp_password'] = "xCcqh*L4jkqFCS"
        # gitlab_rails['smtp_authentication'] = "login"
        # gitlab_rails['smtp_enable_starttls_auto'] = true
        # gitlab_rails['smtp_tls'] = true
        # gitlab_rails['gitlab_email_from'] = '<your qq email>'
        # gitlab_rails['smtp_domain'] = "exmail.qq.com"
    ports:
      - '9006:9006'
      - '443:443'
      - '9022:22'
    volumes:
      - '/gitlab/config:/etc/gitlab'
```

## 安装gitlab-runner

在要部署服务的服务器上安装docker以及gitlab-runner，本次安装直接安装在服务器中，不使用docker安装gitlab-runner，避免产生Dind(docker in docker)问题。

首先导入repository

```bash
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh | sudo bash
```

![img](https://cdn.nlark.com/yuque/0/2021/png/272869/1631024347306-6cb8d6a8-0f4e-4422-9fcf-cefc50c57988.png)

安装

```bash
yum install gitlab-runner -y
```

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669534749945-a3c326b9-0c5e-476f-a677-d3ffa2822908.png)

## 注册到gitlab

### 注册群组Runner

首先我们要获取注册时候需要的信息，获取地址在 http://172.18.231.92:9006/admin/runners  



输入命令进行注册

```plain
gitlab-runner register
```



![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669535423353-d7894316-93ec-4e4b-9976-7edda08ed18e.png)

选择执行者，这里我使用shell

执行者参考：https://docs.gitlab.com/runner/executors/index.html

到这里已经注册成功了，就可以在gitlab中看到注册的runner了

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669535468691-944e553e-7c20-4dc9-b9cb-ebed89e335d0.png)

### 为仓库设置单独的Runner

使用该方案应该先看下一步去创建项目



在我们要部署的仓库里面找到Runner配置信息(设置=>CI/CD)

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669536815772-c8483320-8bf3-4588-8040-87c48660ea6c.png)

然后重复上面注册的过程，详细步骤如图

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669536977765-bad6b0ab-7649-4f53-9863-ae3cec9bf510.png)

然后就可以在仓库的配置下可以看到我们注册的东西

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669537643629-61121513-b3c6-440e-bc99-4693dfd430cb.png)

## 配置帐号

添加gitlab-runner用户

```plain
sudo adduser gitlab-runner
```

将该用户添加到docker组中

```plain
sudo gpasswd -a gitlab-runner docker
```

查看docker组是否已经添加用户成功

```plain
cat /etc/group |grep docker
```

验证是否可以通过gitlab-runner访问docker

```plain
sudo -u gitlab-runner -H docker info
```

重启docker容器服务

```plain
sudo systemctl restart docker
```

给docker.sock设置权限

```plain
sudo chmod a+rw /var/run/docker.sock
```

![img](https://cdn.nlark.com/yuque/0/2021/png/272869/1630853106274-e18c02ab-fb18-485e-8d50-16b05cff1f51.png)

# 创建项目

直接开始创建项目

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669531947826-e0a4440d-3a42-4dce-9eea-65b8fa8c8fb6.png)

拉取项目并填充内容

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669531985693-6770d693-8741-46b7-b3dc-deec556c1745.png)

拷贝一个简单项目(https://gitee.com/AZRNG/my-example)提交到gitlab上

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669532487711-64968ba4-12f3-43de-95c6-04b9ad2d7dee.png)



# 配置流水线

在项目的根目录下创建文件名为.gitlab-ci.yml的文件，用于进行打包部署。

```plain
# .gitlab-ci.yml

stages:
  - deploy

deploy:
  stage: deploy
  script:
    - docker -v
    - pwd
    - cd NetByDocker
    - docker build -f Dockerfile -t gitlabnetsample ../ 
    - docker rm -f gitlabnetsample &&  docker run --name gitlabnetsample -d -p 8060:80 gitlabnetsample # remove old,create new 
    - docker ps -a
  tags: 
    - net
```

提交推送代码，然后在gitlab的CI/CD=>Pipeliners查看

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669540222726-716ffdc2-39a2-4f37-8ef9-8a49783e553a.png)

查看详细信息

![img](https://cdn.nlark.com/yuque/0/2021/png/272869/1630853156788-69b4bfb8-dec8-436d-a9ff-78be35be0724.png)

部署成功，进入该服务器查看容器信息

![img](https://cdn.nlark.com/yuque/0/2022/png/272869/1669540260122-0be4c35e-a786-4ad2-aa53-4592b3a8a740.png)

通过外部访问服务：http://172.18.229.206:8060/swagger/index.html  成功显示swagger界面，部署成功。

# 参考文档

https://mp.weixin.qq.com/s/h3W7ltj4xl1tzDEia_xCag

https://blog.csdn.net/qq_42799562/article/details/118179856