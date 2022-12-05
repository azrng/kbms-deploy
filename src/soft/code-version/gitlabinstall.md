---
title: 安装Gitlab
date: '2021/02/22'
publish: true
categories:
 - soft
tags:
 - git
---
# 安装

## 生成容器

下面的脚本只是测试使用，不建议生产使用(像一些挂载的需要自行处理)

### docker-compose

```
version: '3'

services:
  gitlab: #gitlab容器
    image: gitlab/gitlab-ce
    container_name: 'gitlab'
    restart: always
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url "http://172.30.112.1:9006"
        gitlab_rails['gitlab_shell_ssh_port'] = 9022
        gitlab_rails['time_zone'] = 'Asia/Shanghai'
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
      - 'D:/Soft/gitlab/etcconfig:/etc/gitlab' # '/gitlab/config:/etc/gitlab'
      # - '/gitlab/logs:/var/log/gitlab'
      # - '/gitlab/data:/var/opt/gitlab'
```

### docker

这里是9006:9006是因为external_url 配置了9006，请往下看

```
# 挂载
docker run -d  -p 9443:443 -p 9006:9006 -p 9022:22 --name gitlab --restart always -v /home/gitlab/config:/etc/gitlab -v /home/gitlab/logs:/var/log/gitlab -v /home/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce

# 不挂载
docker run -d -p 9443:443 -p 443:443 -p 9006:9006 -p 9022:22 --name gitlab gitlab/gitlab-ce

# windows挂载
docker run -d -p 9443:443 -p 9006:9006 -p 9022:22 --name gitlab  -v  D:/Soft/gitlab/etcconfig:/etc/gitlab  gitlab/gitlab-ce
```

-d：后台运行

-p：将容器内部端口向外映射

--name：命名容器名称

-v：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录

## 配置

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630392393921-c9133767-a427-43ac-b77a-96685c75485b.png)

进入容器内去编辑配置或者编辑挂载目录的文件

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630392436742-b7a1a83e-d915-430d-a960-f1612a97a4e4.png)

```
docker exec -it gitlab bash
vi /etc/gitlab/gitlab.rb
```

该文件要修改的配置是注释状态，所以直接可以在文件头部增加配置

```
external_url 'http://172.30.112.1:9006'
#ssh主机ip
gitlab_rails['gitlab_ssh_host'] = '172.30.112.1'
# ssh连接端口
gitlab_rails['gitlab_shell_ssh_port'] = 9022
```

保存并退出，然后gitlab.yml该文件可以编辑也可以不编辑(因为gitlab.rb内配置会覆盖这个，为了防止没有成功覆盖所以我在这里进行配置)

```
vi opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml
修改：gitlab setting=》host（172.30.112.1） 、port（9006）、ssh_host（172.30.112.1）
		 gitlab shell setting =》ssh_port（9022）
```

保存退出，在容器内执行更新配置

```
gitlab-ctl reconfigure
```

重启服务

```
gitlab-ctl restart
```

### 查找密码

gitlab默认用户是root，在容器内查找初始密码

```
cat /etc/gitlab/initial_root_password
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630392346545-d3be811e-20e6-4b75-85a2-1981b345a0af.png)

### 容器内修改密码

在容器内进入gitlab的bin目录

```
cd /opt/gitlab/bin
```

执行gitlab-rails console命令

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630393079166-dcd56a70-64f3-41dd-8e48-4d97d69cbdf5.png)

找到root的用户，输入u=User.where(id:1).first，然后回车

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630393092662-6540ad2c-d30e-4bee-8dac-48b234344ede.png)

修改password，输入u.password='123456789'然后回车

```
u.password='123456789'
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630393112625-6ee295f7-70e6-4a1c-a3f0-194d972f223c.png)

修改确认密码

```
u.password_confirmation='123456789'
```

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630393132266-4b5613af-43c7-41cf-88ec-da38a3db7e70.png)

保存修改，输入u.save，然后回车，等到输出true，这时，密码修改成功。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630393150839-203c3d29-88c8-4c59-9af1-273e8bce2933.png)

这里密码已经修改成功，可以用123456789密码登录进去了

# 注意点

因为我们想是实现将容器内的80端口往外映射，所以我们在docker run的时候设置了-p 9006:80，但是因为我们在代码里面配置了external_url http://172.30.112.1:9006后就应该使用-p 9006:9006否则一直访问不到。

# 参考文档

docker安装gitlab： https://blog.csdn.net/weixin_45649746/article/details/119816809

netcore配置gitlab ci/cd：https://www.cnblogs.com/hellotim/p/13382565.html