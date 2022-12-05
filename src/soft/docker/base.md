---
title: Docker
date: '2021/02/22'
publish: true
categories:
 - soft
tags:
 - docker
---
# Docker

# 1. 概述

## 1.1 Docker简介

**Docker 是一个开源的应用容器引擎，是用Go语言开发的**。用于开发、交付和运行应用程序的开放平台，能够将应用程序与基础设施分开，从而可以快速交付软件。

看看Docker 的Logo图

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142348172.webp)

，Docker就好比是下面的小鲸鱼，上面装满的每个集装箱(方块)可以理解为容器，不管集装箱里面装的什么，统一按集装箱的形式打包存放、运输即可，集装箱之间互不影响；即Docker不在乎容器里的内容是什么，**统一基于容器这种形式进行标准化管理，容器之间相互隔离**，所以Docker上运行的多个容器是相互不影响的。

Docker 从 17.03 版本之后分为 CE（Community Edition: 社区版） 和 EE（Enterprise Edition: 企业版），通常社区版足够用了，功能强大，还免费。

> Docker在线版：https://labs.play-with-docker.com/
>
> 书籍推荐：https://www.cnblogs.com/Can-daydayup/p/15585714.html

## 1.2 Docker架构

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142348441.webp)Docker Architecture Diagram

**Docker是客户端/服务器模式架构(C/S)，Client(客户端)和Docker daemon(守护进程)通信， 后者接收到客户端指令并执行**。简述上图的三个流程：

- **客户端(Client)** 发送**docker build**指令， **服务端(Docker daemon)** 收到指令之后就执行，将对应文件打包生成为**镜像(Images)** ；
- **客户端(Client)** 发送**docker pull**指令，**服务端(Docker daemon)** 收到指令之后就执行，从**远程仓储中(Registry)** 寻找**镜像(Images)** ，并**下载到Docker主机上(DOCKER_HOST)** ，如果找不到就报错；
- **客户端(Client)** 发送**docker run**指令，**服务端(Docker daemon)** 收到指令之后就执行，先从本地查找**镜像(Images)** ，如果本地存在，直接通过镜像启动**容器(Containers)** 实例；如果本地没有镜像(Images)，就会从远程仓储中(Registry)下载，然后再根据镜像启动**容器(Containers)** 实例，如果都没找到，那就报错。

上面只是用三关键指令大概描述了从客户端到服务端的执行流程，其实还有很多指令，后续会专门整理文章分享。

上图术语解释及作用：

- **Docker daemon(守护进程)** ：负责监听客户端发过来的指令请求，并管理Docker的各种对象，如镜像(Images)、容器(Containers)、网络等。
- **Client(客户端)** ：用户和Docker主机交互的主要方式，就是用来发指令请求的。
- **远程仓储(Registry)** ：用于各种镜像的存储，**Docker Hub是最大的镜像存储库**，基本上平时能用到的镜像都可以找到；为了提升拉取速度，可以指定国内的一些仓储。
- **镜像(Images)** ：是一个启动**容器(Containers)** 的只读模板；比较容易理解的比喻：镜像就是编程语言中的类(Class)，容器就是通过类(Class) new出来的实例。
- **容器(Containers)** ：就是**镜像(Images)** 可运行的实例。

## 1.3 Docker带来的好处

- **开发更加敏捷：** 让开发人员可以自由定义环境，创建和部署的应用程序更快、更容易，运维人员快速应对变化也更加灵活性。
- **高可移植性和扩展性：** Docker容器可以运行在各种设备环境中，如开发电脑、虚拟机、服务器上等；根据业务需求，可实时扩展或拆除应用程序及相关服务；
- **充分利用硬件资源**：Docker轻量级、启动快，能共用公共服务，不像传统的虚拟机那样，需要单独虚拟出整个系统，占用资源多，速度还不够快。Docker容器之间相互隔离，互不冲突，所以同时可运行很多个容器，充分利用资源。

理论先说那么多，主要是实操应用，用明白了，理论自然就清晰了。

# 2. 安装

安装步骤看本网站其他文章有叙述

# 3. 初体验

安装完成之后，这里不急着往下说，先来体验一下；很方便的就将自己的项目打包然后运行，步骤如下：

- 准备一个项目

  这里就直接创建一个默认的API项目(基于.NetCore3.1)即可，什么都不做。

- 编写Dockerfile

  在项目根目录下增加一个Dockerfile文件，里面内容如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142348076.webp)

  具体内容如下

  ```
  FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim
  WORKDIR /app
  COPY . .
  EXPOSE 80
  ENTRYPOINT ["dotnet", "DockerDemo.dll"]
  ```

  设置Dockerfile的文件属性为始终复制，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349155.webp)

  以文件系统的形式发布项目，指定本地目录，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349034.webp)

- 将发布之后的文件拷贝到装有Docker的主机上

  将项目进行发布，把发布之后的文件拷贝到我的阿里云服务器上，用到的工具是FinalShell(一个工具完成连接服务器和上传文件，很好用)，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349420.webp)

- 打包为镜像

  进入发布文件目录，执行`docker build`命令，将发布文件打包为一个镜像，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349513.webp)

  上图中的mydockerdemo 是镜像名，可以自定义；通过`docker images`查看镜像是否生成，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349452.webp)

- 根据镜像启动容器(里面包含我们的项目)

  镜像生成之后，就可以通过`docker run`指令根据镜像启动容器了，即启动我们的项目

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349716.webp)

  ```
  docker run -d --name mydockerdemo -p 9999:80 mydockerdemo
  ```

  -d：后台模式运行；

  --name：给运行中的容器指定一个名字；

  -p：指定端口映射， 主机的端口9999映射到容器的端80，因为在容器里面我们的项目是以80 端口启动的；

  最后一个参数是上一步生成的镜像名称， 即根据此镜像启动一个容器实例。

- 测试访问看看，只要配置了云服务器的安全组和防火墙放开9999端口，那么外网就可以访问了,如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349630.webp)

可能有小伙伴说，也挺麻烦的；其实编写Dockerfile，打包镜像等操作都是一次性的，只要生成了镜像，后续其他环境直接根据镜像启动即可，不用再单独安装.NetCore运行时等基础设施了，打包好的镜像里包含了完整的运行环境。

# 4. 常用命令

## 4.1 预览

Docker和我们熟悉的Git很类似，都是通过命令执行相关操作，当然也有一些界面管理工具(点按钮的那种)，但大家似乎更喜欢直接敲命令，毕竟这种方式更加灵活、更加容易理解操作本质；有大神将常用命令用一张图很好的展现出来，这里借用一下(图片来源于网络，侵删)：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349168.webp)cmd_logic

不熟悉Docker的小伙伴可能看见这图直接懵圈了，别急，接着往下看， 看完再回过头来瞅这张图，绝对感觉很给力。

## 4.2 常用命令实操

### 4.2.1 全局命令

- **`docker version`**：查看docker版本信息。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349190.webp)

- **`docker info`**：查看docker详情信息，比如仓储信息、加速器配置信息、有多少个镜像、有多少个容器、CPU、内存等。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349901.webp)

- **`docker events`**：从docker 服务获取实时事件，通俗一点理解就是操作日志，比如对镜像、容器、网络、挂载卷等操作，就会记录对应的事件信息；**最多能返回最近的1000条日志信息**。

  先在一个终端执行命令，终端会阻塞：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349995.webp)

  开启另一个终端，执行根据镜像运行容器的命令：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349306.webp)

  此时开启的第一个终端就实时输出事件消息，如镜像拉取、容器启动、容器结束等信息，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349435.webp)

  既然可以把这个命令当做操作日志理解，那肯定可以根据条件查看对应的数据，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349218.webp)

  如图所示，会先显示符合条件的事件信息，然后会继续阻塞，如果对服务端有操作，信息还会实时显示。常用的参数指定如下：

  **-f** ：根据条件过滤事件，如上图指定的是镜像为hello-world相关的事件信息；

  **--since** ：从指定的时间戳后显示所有事件，可以理解为开始时间，支持多种时间格式，默认使用本地主机的时区;

  **--until** ：显示到指定的时间为止，可以理解为结束时间；

### 4.2.2 镜像常用命令

**镜像(image)可以理解为一种轻量级、可独立运行的软件包，包含了应用程序及其他运行需要的基础设施**，如运行时、配置文件、依赖的库等，所以没有镜像就没法启动容器；就好比开发中没有类(class)，又怎么去根据类创建实例呢。

**镜像是只读的**，所以操作命令不多，一般就是增、删、查。

- **`docker images`**：列出Docker主机上的镜像

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349162.webp)

  可以指定参数，比较常用的如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349102.webp)

  **-a** :列出本地所有的镜像（含中间镜像层，默认过滤掉中间镜像层）。

  **-q** :只显示镜像ID。

  **上图中的-aq就是显示所有镜像的ID，一般用于批量删除**。

- **`docker search`**：从远程仓储中搜索镜像，后面直接根镜像名称即可

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349501.webp)

  可以指定条件进行搜索，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349973.webp)

  **--filter**：指定条件搜索，**is-official表示是否为官方的，stars表示要找多少星星以上的**。

  对于搜索，我还是比较喜欢用界面，直观好看：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142349881.webp)

- **`docker pull`**：从远程仓储中拉取镜像，**后面跟镜像名和tag即可，即指定版本拉取，如果不指定tag，默认就latest，最新的**。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350147.webp)

  **镜像的分层原理就是采用UnionFS(联合文件系统)，是一种分层、轻量级的高性能文件系统；镜像可以通过分层来进行继承，可以基于基础镜像制作出各种具体的应用镜像**，比如我们刚拉取下来的nginx镜像，这里先了解，后续我们自己制作镜像的时候就明白了。

  **`docker pull 镜像名:tag`**：指定版本拉取；

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350426.webp)

- **`docker rmi`**：删除指定镜像，后面可以跟名称或镜像ID

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350774.webp)

  删除指定版本，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350704.webp)

  根据镜像ID删除，可以一下删除多个，中间用空格隔开：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350453.webp)

  删除全部镜像，就是找出所有镜像ID，然后删除就行了，当然肯定不是一个一个的拷贝镜像ID；**`docker images -aq`**可以显示所有镜像ID ，所以两个命令结合用即可，如下：

  ```
  docker rmi -f $(docker images -aq)
  ```

  **-f**：代表强制删除，比如一些镜像和容器有依赖，会提示不能直接删除，加上这个选项就可以强制删除。

- **`docker save`**：导出镜像，可以离线拷贝到其他主机上使用，避免没有网络不能下载镜像的场景。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350204.webp)

  生成的tar文件就可以根据需要拷贝到对应设备上加载使用，不用在线拉取，因为很多场景是不允许连外网的。

- **`docker load`**：加载镜像，根据拷贝过来的tar文件可以直接加载镜像到主机上。

  这里演示就将原来拉取的镜像删除，然后通过load命令重新加载，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350575.webp)

  加载镜像，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350478.webp)

  换一种写法，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350609.webp)

  选项说明：

  **--input , -i** : 指定导入的文件。

  **--quiet , -q** : 简化输出信息，不显示具体加载过程。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350865.webp)

  注：这里因为是在TestDockerImage目录下执行命令，所以指定tar的文件时，就在当前目录下。

### 4.2.3 容器常用命令

**容器是用镜像创建的运行实例，** 它可以被启动、开始、停止、删除，**每个容器都是相互隔离**；可以把容器看做是一个极简版的Linux环境和在其中运行程序的组合；

**容器**和镜像几乎一样，唯一的区别就是**镜像层上面加载了一个可写层**，这层称为**容器层**；

以下对容器的操作，可以指定容器名称，也可以指定容器ID，演示统一用容器ID，不再重复截图。

- **`docker run`**：根据镜像启动容器；语法如下：`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`;

  常用选项参数说明，如下：

  **--name="容器名"** : 为容器指定一个名称；

  **-d**: 后台运行容器，并返回容器ID；

  **-i**: 以交互模式运行容器，一般和 -t 同时使用；

  **-t**: 为容器重新分配一个伪输入终端，一般和 -i 同时使用；

  **-P**: 随机端口映射，容器内部端口**随机**映射到主机的端口

  **-p**: 指定端口映射，格式为：**主机端口:容器端口**

  演示如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350825.webp)

  上图可以看到终端阻塞了，**这种模式称为attached默认，即前台运行，与之对应的是detached模式，及后台运行**，接下来会演示。由于终端阻塞，这里另开一个终端执行`docker ps`命令看运行的容器，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350553.webp)

  **前台运行模式终端很容易被关闭，启动的nginx容器也会停掉**，这种情况对于很多场景是不允许的，所以可以指定为后台模式运行，即detached模式，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350059.webp)

  现在只是在容器内启动了一个nginx，并监听80端口，如果需要通过主机能访问到容器里面的nginx，还需进行端口映射，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350203.webp)

  这里启动了两个nginx容器，都是监听80端口，但并没有报端口被占用的错，所以容器之间是互不影响的。通过**-p**选项进行端口映射，这下就可以通过主机的9999端口访问到容器内部的80端口，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350729.webp)

  既然刚开始说可以将容器理解为简易版的Linux，那就应该可以进入容器内部操作一把，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350452.webp)

  在容器里面只能执行一些核心的命令，因为是极简版，所以内部只包含重要的功能，如果需要其他功能可以自己安装扩展。

  **退出容器的两种方式：**

  a、容器中执行**exit**命令，容器停止并退出，回到主机；

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350090.webp)

  b、利用组合键**ctrl+p+q**，容器不停止退出，回到主机；

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142350887.webp)

- **`docker ps [OPTIONS]`** ：显示主机中的容器，不加选项**默认只列出运行中的容器**；

  **-a :** 显示所有的容器，包括未运行的；

  **-n :** 列出最近创建的n个容器；

  演示如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142351041.webp)

- 启动和停止容器的命令；

  ```
  docker start 容器id  # 启动被停止的容器
  docker stop 容器id  # 停止运行中的容器
  docker restart 容器id # 重启容器
  docker kill 容器id  # 强制停止容器
  ```

  **`docker stop`**停止容器，后面可以跟一个或多个容器ID：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142351132.webp)

  **`docker start`**：启动被停止的容器，后面可以跟一个或多个容器ID：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142351343.webp)

  **`docker restart`**重启命令和**`docker kill`**强制停止命令就不截图啦

- **`docker exec`和`docker attach`**两种方式进入正在运行的容器。

  很多场景容器都是后台运行，但有时需要进入容器内部进行相关配置的更改。

  **`docker exec`**：进入容器后开启一个新的终端，正常执行Linux相关命令。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142351161.webp)

  **`docker attach`**：进入容器正在执行的终端，不会启动新的进程。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142351590.webp)

  退出容器模式：

  **容器中执行exit命令，容器停止并退出;**

  **利用组合键ctrl+p+q，容器不停止退出;**

- **`docker logs [OPTIONS] 容器ID`**：查看指定容器的日志；

  常用OPTIONS如下：

  **-f** :跟踪日志输出

  **--since** :显示指定开始时间之后所有日志

  **-t** : 显示时间戳

  **--tail** :列出最新N条容器日志

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142351326.webp)

  可以指定选项，查看需要的日志，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142351153.webp)

- **`docker top 容器ID`**：列出指定容器内部的进程，可以看到容器内的应用进程是否正常运行，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142351224.webp)

- **`docker inspect 容器ID`**：查看指定容器的详细信息，比如运行状态、网络配置、挂载的卷等信息都有，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142351638.webp)

- **`docker commit`：根据容器生成一个新的镜像**；容器是可编辑的，有些时候需要将已更改的容器生成一个新的镜像给其他人用。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142351917.webp)

  命令说明：

  **-a** :提交的镜像作者；

  **-m** :提交时的说明文字；

  命令中**testcommitimage:v1**是自定义的镜像名和tag；

  根据新生成的镜像启动容器，则内部就会有创建的对应文件(容器内部可以根据需要任意改，这里只是演示创建文件而已)。

- **`docker export`和`docker import`**将容器方便离线导出和导入；

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352257.webp)

  命令说明：

  ```
  #将容器导出为tar文件
  docker export -o testexport.tar 030aa6fcd7f3
  # -o 指定输出位置和文件名
  # 030aa6fcd7f3 这个是容器ID
  
  #根据生成的tar文件导入为镜像
  docker import testexport.tar testexportimagename:v2
  # 指定对应的tar文件
  # testexportimagename:v2 镜像名和版本, 可以自己定义
  ```

  这对命令是不是和镜像的`docker save`、`docker load`这对命令用法很相似，但两种方式不能混用，因为export导出的仅仅是容器快照，save保存的是完整的镜像文件。

- **`docker rm 容器ID`**：删除指定容器，运行中的容器默认不让删除，可以增加**-f选项**强制删除，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352768.webp)

以上只是总结了平时比较常用的命令，并没有全部列出，更多细节可以进入官网：https://docs.docker.com/engine/reference/commandline/rm/；

# 5. 数据卷

常用命令演示了一遍，其中也提到容器的隔离性，**默认情况下，容器内应用产生的数据都是由容器本身独有，如果容器被删除，对应的数据文件就会跟着消失**。从隔离性的角度来看，数据就应该和容器共存亡；但在实际用场景中，更多需要将数据持久化，即容器被删除，数据也应该正常存在；另外也有很多场景需要容器之间共享数据，那该怎么做呢，接下来说说容器数据卷。

## 5.1 手动保存数据

通常手动有两种方式，一是通过命令就行拷贝，二是将容器提交为镜像。接下来通过拉取centos镜像，运行演示

- **通过命令形式**

  主机和容器之间可以通过命令进行数据拷贝，也就是说，在容器删除之前可以先进行数据拷贝，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352083.webp)

  命令简述：`docker run -it --name="mycentos" centos /bin/bash`，直接根据镜像centos以交互模式启动容器，容器名称为mycentos，在容器内部执行/bin/bash命令进入到终端；具体命令在[Docker小白到实战之常用命令演示，通俗易懂](http://mp.weixin.qq.com/s?__biz=MzU1MzYwMjQ5MQ==&mid=2247485629&idx=1&sn=506fae15e0c583f0a76d5c4145dbf83a&chksm=fbf11469cc869d7fae9c795ecf099a0babb62094fcb5b94b361ca131ae0323f57f46f55e79e3&scene=21#wechat_redirect)这篇文章中已经详细说明；这里简单回顾一下根据镜像启动容器流程，如图：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352158.webp)

  上图简述：**在Docker执行启动命令时，会先从本地查找镜像，如果没有，就会去远程仓库搜索并拉取到主机，然后主机就可以根据镜像启动容器；如果远程仓库也没有找到镜像，那么就报错**。

  好了，回到今天的话题，接着说拷贝数据；

  现在通过centos镜像启动了一个容器(Linux系统)，在上面创建一些文件进行测试，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352348.webp)

  现在如果将容器删除，里面对应的数据也会删除，所以需要将对应的数据拷贝到主机上，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352999.webp)

  `docker cp bfb96a6afdbc:/usr/TestData /usr/TestDataHost`命令解析:

- 语法：**docker cp SRC_PATH DEST_PATH**

- **bfb96a6afdbc:/usr/TestData**对应的就是**SRC_PATH** ，表示源头，即需要拷贝的目录或文件；**bfb96a6afdbc**这是容器ID，通过这种方式限定是某个容器内的数据文件；

- **/usr/TestDataHost**对应的就是**DEST_PATH**，表示目标，即拷到什么地方；

  按照上面的语法规则，同样可以将主机上的数据文件拷贝到指定容器中，只是调换一下**SRC_PATH** 和**DEST_PATH**的位置即可，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352762.webp)

- **将容器提交为镜像的方式**

  这种方式只能勉强说是一种备份，只是**通过`docker commit`命令将容器提交为镜像，从而达到备份数据的作用**；

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352014.webp)

  但很明显能感觉到不灵活，数据还是在容器内。关于`docker commit`命令上次已经说过，这里就不重复截图啦。

以上两种方式都不是很好的选择，首先在时效上也不能及时备份，另外通过手动这种操作很明显效率不高，还容易出错；更重要的是苦了小伙伴们，所以必须把自动安排起来；手动这种方式，根据情况偶尔用用就可以啦。

## 5.2 容器数据卷解放双手

### 5.2.1 简单理解容器数据卷

**数据卷可以理解为目录或文件，设计目的就是为了数据的持久化和共享**；

**挂载数据卷的容器，称为数据卷容器**；数据卷完全独立于容器的生存周期，所以容器删除时，对应挂载的数据卷不会被删除。

**通过将容器内的目录挂载到主机上面，就可以让数据实时同步，不管是主机改动，还是容器里有变动，都会同步更新**。

### 5.2.2 实操演示

这里先用命令的方式进行演示，关于Dockerfile中的应用会在后续的章节中说到。

`docker run`命令中**-v**的选项在上次没说，就是故意留到这里单独分享；直接在启动容器的时候挂载；语法主要有如下几种方式：

```
# 指定具体的主机路径和容器内的路径
docker run -v /宿主机路径:容器内路径 镜像名  
# 指定容器内的路径，docker默认自动指定主机路径
docker run -v 容器内路径 镜像名 
# 指定容器内的路径，并指定一个名字，主机路径docker自动指定
docker run -v 卷名:容器内路径 镜像名 
```

- **匿名挂载**：在挂载时不指定名称，会自动生成一个名称

  **指定主机目录**

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352943.webp)

  命令解析如下图：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352892.webp)

  ```
  # docker run -it --name="容器名称" -v 主机绝对路径:容器绝对路径 镜像名称
  docker run -it --name="TestVolumeCentos" -v /usr/TestDataHost/DataVolumeTest:/usr/TestVolumeData centos
  ```

  现在已经将容器内的目录挂载到主机上，接下来感受一下数据同步：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352276.webp)

  通过上图演示可以看到，**不管是在主机还是在容器中修改数据，都能及时同步更新；容器停止之后，主机更新数据，容器再启动，修改的数据也会同步到容器；容器删除，挂载的数据不会被删除，还是在主机中**，这就是我们想要的。

  可以通过`docker inspect 容器`命令查看容器的详细信息，其中就有挂载卷的详细信息，如下部分截图：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352106.webp)

  **不指定主机目录**

  很多时候，我们不喜欢自己指定主机目录，而是由Docker自动指定，所以通常我们只指定容器内目录，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352274.webp)

  看看Docker指定的主机路径在哪，还是通过`docker inspect 容器ID`查看详情，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352103.webp)

  看看刚才在容器操作的文件数据是否同步过来：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352927.webp)

  默认情况，docker都会将挂载的主机目录指定到如上图的目录中。

  可以通过`docker volume ls`查看主机挂载的数据卷信息，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352316.webp)

  通过上图可以看到，名称不直观，看不懂，所以更多时候都会在挂载的时候指定一个名称，即具名挂载。

- **具名挂载**：在挂载时指定一个名称。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352967.webp)

  这里除了挂载的时候是指定名称挂载，之后的操作和效果都一样，这里就不重复截图了；需要注意的是这种方式和指定主机的命令很像，指定路径那种形式，冒号前面是路径，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142352693.webp)image-20210825175448280

### 5.2.3 容器间传递数据

**数据卷其实还可以通过容器继承方式进行挂载，从而实现容器之间的数据共享**，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353481.webp)

关键命令解析：

- 先启动一个具名挂载的容器TestVolumesFromCentos，如下命令：

  ```
  docker run -it --name="TestVolumesFromCentos" -v testVolumesFrom:/usr/TestVolumeData centos
  ```

- 在启动另一个容器TestVolumesFromCentos2，挂载卷继承于TestVolumesFromCentos，如下命令：

  ```
  docker run -it --name="TestVolumesFromCentos2" --volumes-from TestVolumesFromCentos centos
  ```

  **--volumes-from 后指定继承于哪个容器**。

现在不管在哪个容器中变更数据，都会实时同步到其他容器中，从而达成了容器数据的共享和实时同步。

通过`docker inspect 容器ID`看两个容器的挂载详情都一样，截其中一个容器如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353533.webp)

其实在指定挂载的时候还可以限制容器的操作权限，比如在容器内的挂载目录下，可以限制容器内只读或可读写，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353148.webp)

**ro：代表只读；**

**rw：代表读写；**

好了，关于容器数据卷就说到这吧，是不是听起来名字高大上，其实就是对文件或目录的操作。

### 5.2.4 redis安装实战

关于Redis安装在Docker中很简单，直接执行命令即可，由于之前拉取过redis的镜像，所以就直接启动容器了，如果本地没有镜像，就会去远程仓库拉取。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353297.webp)

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353537.webp)

上图中可以看到，默认情况下，redis的镜像将容器内的/data目录挂载到这个主机上，而这个目录就是redis数据存放的目录，这样就达到Redis的持久化。

对于Redis而言，很多时候需要修改配置文件，总不能每次修改都要到容器内更改，我们可以将配置文件放在已挂载的目录中，然后指定启动，也可以另外针对配置文件再加一个挂载，如下：

**执行命令前，需要将配置文件提前放在主机的这个/usr/TestDataHost/redisconf目录中**。

```
docker run -d -v /usr/TestDataHost/redisconf:/usr/local/etc/redis --name myredisconfigtest redis redis-server /usr/local/etc/redis/redis.conf
```

通过`docker inspect 容器`看看挂载情况，如下：

通过挂载之后，如果需要修改配置文件，只需要在主机上修改配置文件内容即可。

# 6. Dockerfile解析

使用第三方镜像肯定不是学习Docker的最终目的，最想要的还是自己构建镜像；将自己的程序、文件、环境等构建成自己想要的应用镜像，方便后续部署、启动和维护；而Dockerfile就是专门做这个事的，通过类似简单编码的形式，最终就可以构建出属于自己的镜像，所以必须学起来。

## 6.1 Dockerfile简介

在日常开发过程中，需要编写对应的程序文件，最后通过编译打包生成对应的可执行文件或是类库；这里的Dockerfile文件就好比平时我们编写的程序文件，但内部的语法和关键字并没有程序那么复杂和繁多，相对来说还是很简单的，最后通过`docker build`命令就可以将对应的程序、文件、环境等构建成镜像啦。

在第一篇文章最后就简单使用了Dockerfile构建了一个镜像，这里重新认识下这个Dockerfile文件，如下图：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353887.webp)

**Dockerfile就是一个文本文件**，但不需要指定后缀类型；文件内容中FROM、WORKDIR、COPY等就是关键字，按照规则写好之后，就可以将指定的文件构建为镜像啦。

**构建操作统一由Docker daemon进行，它会先对文件内容语法进行初步验证(语法不对就会返回错误信息)，然后逐一运行指令，每次生成一个新的镜像层，直到执行完所有指令，就构建出最终的镜像。** Dockerfile、镜像、容器的关系如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353109.webp)

总结一下Dockerfile的知识点；

- **构建时，指令从上到下逐一执行；**
- **每条指令都会创建一个新的镜像层，每一层都是前一层变化的增量；**
- **使用#号进行注释；**
- **关键字约定都是大写，后面至少跟一个参数；**

## 6.2 Dockerfile关键字

### 6.2.1 FROM 关键字

**指定基础镜像**， 就是新镜像是基于哪个镜像构建的。

比如建房子，可以在一块空地开始，也可以在别人打好的基石基础上开始， 甚至可以在别人弄好的毛坯房基础上装修即可。

如果要建房的话，可以FROM 空地，或者FROM 打好的基石，或者 FROM 毛坯房， 反正最后建好房就行；

这里需要注意的是，不管咋样，空地是少不了的；**构建镜像也一样，最底层肯定有一个最基础的镜像**。

建议使用官方的镜像作为基础镜像，推荐使用Alpine这种类型，因为它是严格控制的，而且体积很小。

用法如下：

```
 # FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]
 ARG  CODE_VERSION=latest # 定义变量
 FROM base:${CODE_VERSION} # 指定基础镜像
```

### 6.2.2 MAINTAINER/LABEL 关键字

**MAINTAINER 指定维护者的相关信息，也就是构建的镜像是由谁构建的，他的邮箱是什么**；

**LABLE 就是用于给镜像打标签，以键值对的方式进行指定**，相对MAINTAINER 来说比较灵活，可以使用LABLE替代MAINTAINER。

用法如下：

```
 # LABEL <key>=<value> <key>=<value> <key>=<value> ...
 LABEL com.example.version="0.0.1-beta" 
 LABEL vendor1="ACME Incorporated"
```

### 6.2.3 RUN 关键字

**构建过程中需要运行的命令**， 比如在构建过程中需要执行一条命令下载对应的包，这里就需要用到RUN关键字；

用法如下：

```
 # 两种命令方式都可以
 # RUN <command>
 # RUN ["executable", "param1", "param2"]
 # 执行命令,Linux支持的相关命令
 RUN /bin/bash -c 'source $HOME/.bashrc; echo $HOME'
 RUN ["/bin/bash", "-c", "echo hello"]
```

### 6.2.4 WORKDIR 关键字

根据镜像启动容器时，通常需要进入到容器内部；**则可以通过WORKDIR指定进入容器时的目录**；

用法如下：

```
 WORKDIR /path # 指定路径
```

### 6.2.5 ENV 关键字

可以在构建过程中设置环境变量；就好比平时我们安装完程序，需要配置环境变量，方便访问；ENV关键字就是根据需求可以设置对应的环境变量；

用法如下：

```
 # ENV <key>=<value> ...
 # 指定环境变量
 ENV PATH=/usr/local/postgres-$PG_MAJOR/bin:$PATH
```

### 6.2.6 ADD 关键字

**将宿主机的资源拷贝进镜像中，会自动解压缩，而且还能从远程宿主机中读取资源并拷贝到镜像中**；

用法如下：

```
 # 两种命令方式都可以
 # ADD [--chown=<user>:<group>] <src>... <dest>
 # ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]
 ADD https://example.com/big.tar.xz /usr/src/things/
```

### 6.2.7 COPY 关键字

**将宿主机的资源拷贝到镜像中，只支持读取构建所在宿主机的资源**。相对于ADD关键字来说更加透明，操作什么就是什么。

用法如下：

```
 # 拷贝资源到容器，两种命令格式都行
 # COPY [--chown=<user>:<group>] <源地址>... <目标地址>
 # COPY [--chown=<user>:<group>] ["<源地址>",... "<目标地址>"]
 COPY requirements.txt /tmp/
```

### 6.2.8 VOLUME 关键字

挂载数据卷，之前在常用命令那说到通过命令的方式进行数据卷挂载，在Dockerfile中使用**VOLUME**指定挂载路径即可，根据构建出来的镜像运行容器时，默认就有构建时挂载的信息。

用法如下：

```
 # 挂载数据卷
 VOLUME ["/data"]
 VOLUME /myvol
```

### 6.2.9 EXPOSE 关键字

指定运行容器时对外暴露的端口；即根据镜像启动容器时，容器向外暴露端口。

用法如下：

```
 # EXPOSE <port> [<port>/<protocol>...]
 EXPOSE 80/tcp # 暴露端口
 EXPOSE 80/udp
```

### 6.2.10 CMD 关键字

指定启动容器时要执行的命令，只有最后一个会生效；即根据镜像启动容器时，容器需要执行啥命令。

用法如下：

```
 # 两种格式都行
 # CMD ["param1","param2"]
 # CMD command param1 param2
 # 执行命令统计 行数、字数、字节数
 CMD echo "This is a test." | wc -
 # 执行wc --help命令 
 CMD ["/usr/bin/wc","--help"]
```

### 6.2.11 ENTRYPOINT 关键字

指定根据镜像启动容器时要执行的命令，可以追加命令；执行时机同CMD。

用法如下：

```
 # ENTRYPOINT ["executable", "param1", "param2"]
 # ENTRYPOINT command param1 param2
 ENTRYPOINT ["top", "-b"]
```

### 6.2.12 ARG 关键字

通过ARG指令定义了一个变量；和写代码时定义的变量一样，根据需要，定义就行啦。

用法如下：

```
 # ARG <name>[=<default value>]
 ARG user1=someuser
 ARG buildno=1
```

### 6.2.13 ONBUILD 关键字

基于父镜像构建新的镜像时，父镜像的OBUILD会被触发。

## 6.3. 实战演示

这里还是以.NetCore项目构建镜像为例，其他编程语言的项目同理；这次咱们一步一步的来，搞清楚每个命令的使用。

以下关于项目创建和发布的具体细节在第一篇最后就分享了，小伙伴可以[参考](https://mp.weixin.qq.com/s?__biz=MzU1MzYwMjQ5MQ==&mid=2247485538&idx=1&sn=1a264b5b0cb9577ddbc10dbfdf529298&chksm=fbf114b6cc869da08a707988d885f4ce99d4cf3aac57749b6b37fcf407189ae312acb0174077&token=583695816&lang=zh_CN&scene=21#wechat_redirect)，这里主要演示Dockerfile关键字。

### 6.3.1 准备项目和Dockerfile文件

新建一个项目，啥都不需要改，就用默认的接口演示，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353126.webp)

Dockerfile内容如下：

```
 # 指定基础镜像，在此基础上构建自己的项目镜像
 FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
 # 指定自己的工作目录，进入容器时目录
 WORKDIR /myApp
 # 将构建上下文目录下的文件拷贝到容器的当前工作目录中，即/myApp
 COPY . .
 # 容器向外暴露端口，项目以什么端口启动就暴露对应的端口
 EXPOSE 80
 # 执行命令，这里默认是以80端口启动的
 #就类似于在Linux系统的项目目录下执行 dotnet DockerfileDemo.dll 是一样的
 ENTRYPOINT ["dotnet", "DockerfileDemo.dll"]
```

**记得右键Dockerfile，选择属性，然后设置Dockerfile为始终复制**，这样后续更新变动，发布时就会自动拷贝到对应的发布目录。

### 6.3.2 发布

以文件的形式发布项目，并连同Dockerfile拷贝到安装好Docker的机器上进行构建(这里还是用我的云服务器)；

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353000.webp)

**`docker build -t myimage:v1.0 .`解析**：

- **-t**：指定镜像的名字及标签，通常 name:tag 或者 name 格式，myimage就是镜像名字，v1.0就是tag；
- **-f** :指定要使用的Dockerfile路径，这里由于Dockerfile在当前路径，所以不用指定；
- **最后面的点**：**官方称为构建上下文，点表示指定为当前目录**。会把指定的这个目录下的文件发送给docker daemon进行构建，所以千万不要指定/(斜杠代表根目录，有很多文件的)。
- 其他选项参数小伙伴可以根据需要使用，以上是比较重要的。

### 6.3.3 启动容器

根据构建出来的镜像启动容器，看Dockerfile中的命令效果；

启动容器如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353093.webp)

**`ENTRYPOINT ["dotnet", "DockerfileDemo.dll"]`这行代码就等同于的项目目录下直接执行 dotnet DockerfileDemo.dll是一样的，目的就是启动我们的项目**。

通过`docker logs`可以查看容器内部的日志，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353089.webp)

### 6.3.4 设置Dockerfile 

丰富化Dockefile文件内容并查看构建之后的细节

文件内容如下：

```
 # 指定基础镜像，在此基础上构建自己的项目镜像
 FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
 # 指定维护人
 MAINTAINER CodeZYQ<1137533407@qq.com>
 # 打标签
 LABEL createname="CodeZYQ"
 # 指定自己的工作目录，进入容器时目录 app
 WORKDIR /myapp
 # 将构建上下文目录下的文件拷贝到容器中的工作目录中
 COPY . .
 # 定义变量
 ARG myPort=8080
 # 使用环境变量方式改变启动端口，拼接用到了定义的变量
 ENV ASPNETCORE_URLS=http://+:$myPort
 # 通过RUN 执行相关命令，根据需要执行相关命令
 RUN mkdir testDir
 # 挂载数据卷，这里模拟挂载日志目录
 VOLUME /Logs
 # 容器向外暴露端口，项目以什么端口启动就暴露对应的端口
 EXPOSE $myPort
 # 执行命令，这里默认是以80端口启动的
 # 就类似于在Linux系统的项目目录下执行 dotnet DockerfileDemo.dll 是一样的
 ENTRYPOINT ["dotnet", "DockerfileDemo.dll"]
```

执行如下命令，构建新的镜像：

```
 # 这里没有显示指定tag 默认就latest
 docker build -t newimage .
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353154.webp)

通过`docker logs`看看容器日志，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353565.webp)

看看数据卷挂载是否成功，进入容器，看根目录下就会多了Logs目录，也可以通过`docker inspect 容器` 看容器详细信息，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353625.webp)

标签也打成功了：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353871.webp)

也可以通过`docker inspect 镜像`查看镜像内部的详细信息，执行命令`docker inspect newimage`如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353797.webp)

关于步骤和效果，在Dockerfile注释和图表中已经详细描述。

### 6.3.5 CMD和ENTRYPOINT的区别

两个命令都是启动容器时指定执行命令和对应的参数，但两者稍有不同，如下：

- **CMD**：只能最后一个命令会生效，命令会被docker run之后的参数替换掉；
- **ENTRYPOINT**：可以追加命令，比如增加参数；

上面构建出来的newimage镜像用到的是ENTRYPOINT，所以我们先来测试一下ENTRYPOINT，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353066.webp)

`docker run`启动容器时指定了参数 `--urls="http://+:9999"`，容器正常启动，并且参数还能生效，等同于在当前目录直接执行如下命令：

```
 dotnet DockerfileDemo.dll --urls="http://+:9999"
```

现在把ENTRYPOINT换成CMD试试，如下：

```
 # 在以上的Dockerfile中
 # 将ENTRYPOINT ["dotnet", "DockerfileDemo.dll"]换成CMD，如下：
 CMD ["dotnet", "DockerfileDemo.dll"]
```

然后重新构建一个镜像试试，测试如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353686.webp)

如上图，对于CMD而言，如果在运行容器时，后面指定参数，这个参数就会把CMD命令替换掉，不能拼接，导致命令不对，所以报错；但这样就可以执行，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142353155.webp)

如果在当前构建的上下文目录中不想要一些文件参与构建，**可以通过在.dockerignore文件中进行配置**，这个和git中的.gitignore一个道理，编写也比较简单，这里就不演示了。

对了，.NetCore的镜像列表可以参照这个地址：https://hub.docker.com/_/microsoft-dotnet-aspnet/，每个镜像都有对应的Dockerfile，感兴趣的小伙伴可以点进去看看，参考参考。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354849.webp)

# 7 网络

## 7.1 Docker网络模式简介

**当Docker进程启动时，会在主机上创建一个名为docker0的虚拟网桥，此主机上启动的Docker容器默认会连接到这个虚拟网桥上**。这样所有容器通过这个虚拟网桥就打通了，所以这里的docker0工作方式和物理交换机很像。

在主机上可以执行命令`ip link show docker0`查看：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354926.webp)

**Docker在启动容器时可以指定网络模式，如果不指定，默认就是采用Bridge模式**；Docker的网络模式有如下几种：

- **Bridge(桥接)模式**：默认的网络模式，比较适用于在同一Docker Daemon主机上运行的容器，**用户也可以自定义bridge网络，优于默认的bridge网络**；如果需要不同Docker主机进行通信，可以通过操作系统网络配置，也可以使用Overlay模式。
- **Host模式**：和宿主机共用一个Network Namespace。即容器不会虚拟出自己的网卡和配置自己的IP等，而是使用宿主机的IP和端口；
- **Overlay模式**：覆盖网络可以将多个 Docker Daemon主机连接在一起，并使 swarm 服务能够相互通信；也可以让Docker Daemon主机上的两个独立容器进行通信。
- **Macvlan模式**：Macvlan 网络允许为容器分配 MAC 地址，使其在网络上显示为物理设备。Docker Deamon通过容器的 MAC 地址将流量路由到容器。
- **None模式**：Docker容器拥有自己的Network Namespace，但是并不为容器进行任何网络配置。即容器没有网卡、IP、路由等信息。**需要单独为Docker容器添加网卡、配置IP**；

Docker在启动容器的时候可以通过**--net**指定网络模式，不指定，默认就是bridge模式，如下：

```
# --net指定网络模式，这里指定为host模式
docker run -d --name testnet --net host nginx
# 通过docker inspect 容器 看网络细节，如下图
docker inspect testnet
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354736.webp)

## 7.2 Bridge默认模式了解一下

这里就以默认的Bridge(桥接)展开来说说，其他模式后续根据应用场景再具体细说。

这里主要看看主机和容器之间的网络、容器和容器之间的网络。

在Bridge模式下，**当启动容器时，Docker会分配一个IP给容器，并设置docker0的IP地址为容器的默认网关**；这个时候会在主机上创建一对虚拟网卡veth pair设备接口，Docker将veth pair设备的一端配置在新启动的容器中，并命名为eth0@ifxxx（容器的网卡），另一端在主机中以veth***@ifxxx这样类似的名字命名，并将这个网络设备加入到docker0网桥中。

容器没有启动时主机的网络配置如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354340.webp)

当启动容器时，Docker主机就会创建一对虚拟网卡vethpair设备接口，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354690.webp)

可以进入到容器看看IP分配情况，如果`ip addr`命令在容器内找不到，那是因为基础镜像只包含核心命令，如果要执行其他命令，需要额外安装。可以在容器内执行如下命令进行安装。

```
apt update && apt install -y iproute2
```

安装好之后，就可以查看容器内的IP情况了，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354699.webp)

这里有没有发现容器内的IP是和主机多出来的虚拟网卡是成对出现，这样主机网络和容器之间肯定能通；

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354463.webp)

当然容器内部也可以ping通主机。

**那容器之间能不能访问呢？**

容器内ping命令也找不到，需要进行安装，执行如下命令：

```
apt update && install iputils-ping
```

这里新启动一个容器mynginx2，IP内部分配如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354669.webp)

**mynginx容器内能ping通mynginx2，那是因为两个容器之间共用了docker0，通过docker0进行转发**。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354413.webp)

大概一个网络流程如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354954.webp)

这里的Docker0就好比是交换机，形成了网络桥梁。

## 7.3 如何能通过容器名进行访问

默认情况，容器间的访问只能通过IP，不能通过容器名访问；

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354220.webp)

这种情况对于线上项目很不灵活，比如数据库备份需要临时迁移，IP可能会不一样，所以项目中的地址要重新配置，如果能通过容器名访问，那么就不用操心更换啦，只要容器名一样即可，就好比域名和IP的关系一样，IP再怎么变，域名不变就行。

### 7.3.1 通过--link方式；

新启动一个容器mynginx3，如下：

```
# 通过--link关联 mynginx容器
docker run -d --name mynginx3 --link mynginx nginx
```

容器启动之后，可以进入到容器测试：

```
# 进入容器
docker exec -it mynginx3 /bin/bash 
# 安装ping工具
apt update && apt install iputils-ping
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354544.webp)

内部原理其实是在mynginx3内部做了个映射配置，容器mynginx3的hosts内容如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354791.webp)

这样只能在容器mynginx3内部通过mynginx容器名ping通，不能在mynginx内部通过容器名mynginx3访问，如果要达到同样的效果，就得在启动mynginx时通过--link和mynginx3关联起来。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354028.webp)

如果每个容器都这样的显示指定的话，感觉就有点麻烦啦，通常的做法都是通过自定义网络方式来达到这个目的。

### 7.3.2 通过自定义网络方式；

首先新创建一个网络，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354711.webp)

命令解析：

```
# --driver 指定网络模式，这里为bridge桥接模式
# --subnet 指定子网IP  192.168.0.0/16
# --gateway 指定网关 192.168.0.1
# my-net 创建的网络名
docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 my-net
# 显示网络
docker network ls
```

让启动的容器使用自定义的网络，即在启动容器时使用**--net**指定即可：

![图片](https://mmbiz.qpic.cn/mmbiz_png/qQ1zuvjsChSHlyAc04dcnxyu4CCzxHZddJdFOCfPlcYicJdgJ7ziacobIicqUjyW2TB9Jy7p68lbEnRn6NUMLL7pQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**启动容器时不需要--link，只需要接入到自定义网络就可以通过容器名ping通了**，如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354615.webp)

**自定义网络之所以能通过容器名ping通，那是容器内运行了一个本地DNS解析器，该解析器将请求转发到Docker内部DNS服务器当中，DNS服务器中记录了容器启动时通过--name或--net-alias参数指定的名称与容器之间的关系**。

另外还有一个点，现在分配给容器的IP是按照预先设置的子网范围进行分配的，而不是默认的docker0子网范围，执行如下命令看详细：

```
# 看容器详细信息
docker inspect testmynetnginx1
```

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354353.webp)

# 8. Docker Compose

 Docker可以将应用程序及环境很方便的以容器的形式启动，但当应用程序依赖的服务比较多，或是遇到一个大系统拆分的服务很多时，如果还一个一个的根据镜像启动容器，那就有点累人了，到这有很多小伙伴会说：弄个脚本就搞定啦；要的就是这个思路，Docker提供了一个叫Docker Compose的工具，一键启动相关服务。

举个例：比如开发一个Web项目，需要有数据库、Redis、MongoDB、配置中心等等，如果将其进行容器化，可以有两种选择，第一种就是把所有的服务依赖和应用程序全部构建为一个镜像，然后以一个容器运行，即这个容器里面包含了Web应用程序、数据库、Redis、MongoDB、配置中心等；另一种方式就各自服务单独启动为一个容器服务，比较独立，一般可以一个一个的启动容器，然后通过网络连接起来就行；显然第二种方式是小伙伴们更多的选择，如果能配上一个批量操作那就完美了，而Docker Compose就是来干这个事的。

## 8.1 概述

**Docker Compose 是一个用于定义和运行多个容器服务的 Docker 应用程序工具；搭配使用 YAML 文件来配置应用程序服务，然后运行Docker Compose命令，一键启动所有容器服务**。

## 8.2 安装

**Docker默认安装环境下是不包含Docker Compose工具的，需要单独安装**。Docker Compose工具搭配Docker才有意义，所以安装Docker Compose之前需要安装Docker。以下演示平台为Linux，其他平台请参照文档：https://docs.docker.com/compose/install/

### 8.2.1 下载文件

**其实Docker Compose是一个可执行文件**，直接下载对应文件即可，执行如下命令：

```
# 下载Docker Compose文件， 这个地址下载比较慢
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# 这个地址快点
sudo curl -L "https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

如下图：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354976.webp)

### 8.2.2 授予执行权限

下载下来的文件默认是没有执行权限的，后续需要执行，所以得授予执行权限，执行如下命令即可：

```
sudo chmod +x /usr/local/bin/docker-compose
```

看看权限结果分配如下：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142354465.webp)

这样docker-compose就安装完啦。

### 8.2.3 卸载

如果需要卸载，直接删除即可，执行如下命令即可：

```
sudo rm /usr/local/bin/docker-compose
```

## 8.3. 使用

**Docker Compose需要搭配YAML文件使用，YAML 是一种人类友好的数据序列化语言，适用于所有编程语言，后缀名为.yml**。

所以在进行实操前，需要大概的了解一下YAML的语法，不要慌，语法和Json的思路很像，大概了解一下，后续用到查文档就行啦。

### 8.3.1 简单说说语法

**YAML文件内容是通过空格的缩进来代表层次**，常用的数据类型有如下：

- **对象**：键值对集合；

  ```
  # yaml 对象语法
  testKey:testValue
  # Json 语法
  {"testKey":"testValue"}
  # yaml 嵌套对象
  testKey:{testKey1:testValue1,testKey2:testValue2}
  # Json 语法
  {"testKey":{"testKey1":"testValue1","testKey2":"testValue2"}}
  ```

- **数组**：一组按次序排列的数据；用-前缀表示。

  ```
  # yaml 数组语法
  -value1
  -value2
  -value3
  # Json 数组语法
  ["value1","value2","value3"]
  # yaml 数组行内语法
  testKey:[value1,value2]
  # Json 语法
  {"testKey":['value1','value2']}
  ```

- **纯量**：不可再分的值，包括字符串、整数、浮点数、日期、布尔值等。

  ```
  # yaml
  testKey:666
  # Json
  {testKey:666}
  # yaml
  isbool:true
  # Json
  {isbool:true}
  ```

常规的基本语法格式约定如下：

- 大小写敏感
- 使用空格缩进表示层级关系
- 缩进不允许使用tab，只允许空格
- 缩进的空格数不重要，只要相同层级的元素左对齐即可
- '#'表示注释

大概了解上面这些，关于日常Docker Compose用到的文件基本上够用了，如果有需要进阶的，可以去查查对应的语法。传送门：

https://yaml.org/spec/1.2.2/

https://www.runoob.com/w3cnote/yaml-intro.html

关于YAML文件内容中配置的命令和Dockerfile的命令差不多是一一对应的，稍后会简单说说。

### 8.3.2 实操撸文件

这里还是以一个WebApi为例，例中需要依赖Redis服务。

- **创建项目，编写例子**

  这里只是引入了一个Redis的缓存包，通过构造函数注入之后就可以直接用啦；编写了一个API接口TestCache。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355730.webp)

  这里还需要在Startup文件中注入相关服务，并指定Redis的连接地址，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355845.webp)

  运行起来测试一下效果，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355484.webp)

  Redis中也有值了，这里需要注意：存入Redis中的类型是Hash。

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355634.webp)

- **编写Dockerfile文件**

  在项目根目录创建一个Dockerfile文件，内容如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355057.webp)

  关于Dockerfile中的内容这里就不细说了，之前有一篇文章专门分享的(点[这里](https://mp.weixin.qq.com/s?__biz=MzU1MzYwMjQ5MQ==&mid=2247485700&idx=1&sn=5b5625bde7ba831bd99946906fbd3615&chksm=fbf115d0cc869cc612e567f604ac8d1c233f739f8439df72f8bc7a194e501861efe225d44260&token=403152068&lang=zh_CN&scene=21#wechat_redirect))。这里的Dockerfile目的就是将我们的WebApi项目构建为镜像，和Redis没有关系，不过这里不是通过执行命令构建，而是通过Compose文件一起构建。

  注：这里记得将Dockerfile文件通过右键->属性->设置为始终复制，保证编译后的文件有最新文件

- **编写Compose文件**

  在项目根目录下创建docker-compose.yml文件，内容如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355217.webp)

  有了这个项目就可以一键启动了，这里需要稍微改一下我们原来的代码，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355078.webp)

  注：这里记得将docker-compose.yml文件通过右键->属性->设置为始终复制，保证编译后的文件有最新文件。

### 8.3.3 体验一键启动

- **将项目先发布**，并拷贝到对应的服务器上，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355096.webp)

  这里用的是我的阿里云服务器，拷贝文件如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355902.webp)

- **一键启动**

  在docker-compose.yml所在的目录下执行如下命令：

  ```
  docker-compose up
  ```

  下面是执行docker-compose up内部执行的步骤：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355595.webp)

  先是构建我们的程序，然后拉取依赖的Redis服务，并启动，最后启动我们的程序。(执行顺序和依赖有关系)；启动之后就可以根据docker-compose.yml文件中映射的端口访问了，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355875.webp)

- **看看启动的容器名**

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142355511.webp)image-20211007165313310

  通过`docker ps -n 2` 查看最近启动的容器，容器的名字规则是：**`目录名_Compose文件中定义的服务名_序号`**，那小伙伴肯定会好奇为什么程序能通过myredis名字连接到redis，可以通过`docker inspect composetest_myredis_1`查看容器详情：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142356579.webp)

  同样可以查看到API服务对应的容器也是用的composetest_default这个网络，这个网络是一个桥接模式，可以通过`docker network ls`看到，如下：

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142356141.webp)

- **docker compose常用命令**

  `docker-compose build`:构建或者重新构建服务

  `docker-compose up`:构建、启动容器，加上-d选项代表后台运行。

  `docker-compose ps`：列出所有通过Compose运行的容器

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142356611.webp)

  `docker-compose logs`：打印相关日志信息

  ![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202111142356935.webp)

  `docker-compose stop/start/restart`d：可以指定服务停止、开始和重新启动

  docker-compose命令和docker的命令基本是一样的。

- **docker-compose.yml文件内容常用属性**

  **version**：指定 docker-compose.yml 文件的版本，一般都是用version 3；

  **services**：定义多个容器集合，有多少写多少；

  **build**：构建镜像，和`docker build`一样功效；

  **environment**：配置环境变量，和Dockerfile中ENV 关键字功能一样；

  ```
  # 设置环境变量
  environment:
    RACK_ENV: development
    SHOW: 'true'
  ```

  **expose**：暴露端口，和Dockerfile中的EXPOSE 关键字功能一样；

  ```
  expose:
    - "80"
    - "9999"
  ```

  **ports**：配置端口映射，和`docker run -p`一样功效

  ```
  ports:
   - "8080:80"
   - "6379:6379"
  ```

  **volumes**：指定卷挂载路径，与Dockerifle中的VOLUME 关键字功能一样

  ```
  volumes:
    - /var/lib/mysql
    - /opt/data:/var/lib/mysql
  ```

  **command**：覆盖容器启动后默认执行的命令，和Dockerfile文件中的CMD命令一样；

  ```
  command: bundle exec thin -p 3000
  ```

  **image**：指定要用的镜像，构建的时候会拉取。

  ```
  # 指定要使用redis镜像
  image: redis
  ```

上面列出了一些比较常用的，具体的可以参考官网：https://docs.docker.com/compose/compose-file/compose-file-v3/

代码地址如下：https://gitee.com/CodeZoe/microservies-demo/tree/main/DockerComposeDemo

# 资料

来自微信公众号【Code综艺圈】
