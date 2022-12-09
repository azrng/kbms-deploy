---
title: Windows安装docker
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - docker
---
# Windows安装docker

# 1. 启用Hyper-V

打开控制面板 - 程序和功能 - 启用或关闭Windows功能，勾选Hyper-V，然后点击确定即可，如图：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110152240983.png)

点击确定后，启用完毕会提示重启系统，我们可以稍后再重启。

# 2. 安装Docker

Docker下载地址为：https://www.docker.com/products/docker-desktop 点击如图处即可下载安装包：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110170925012.png)

下载完成后运行安装包，安装完成后界面如图：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110170923577.png)

单击Close and log out，这个时候我们重启一次电脑。

# 3. 启动Docker

1.在桌面找到Docker for Windows快捷方式，双击启动即可！启动成功后托盘处会有一个小鲸鱼的图标。打开命令行输入命令：docker version可以查看当前docker版本号，如图：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110152240476.png)

注：在这里可能出现问题，启动docker时发现无法启动，具体报错显示如下：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110152240771.png)

在控制台输入docker version 显示错误如下

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110152240203.png)

解决办法：首先确保Hyper-V已经启用

打开任务管理器，查看性能-CPU-虚拟化已启用

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110152240605.png)

如果docker还不能启动，可以尝试如下办法：

在控制台输入下面命令

```
cd "C:\Program Files\Docker\Docker"
./DockerCli.exe -SwitchDaemon
```

> 重启docker，docker desktop is running
2.更换镜像源地址

中国官方镜像源地址为：https://registry.docker-cn.com

点击托盘处docker图标右键选择-Settings，然后修改如下：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110152240609.png)

点击Apply后会重启Docker。

3.载入测试镜像测试

输入命名“docker run hello-world”可以加载测试镜像来测试。如图：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110152240022.png)

这样即表示安装成功了！