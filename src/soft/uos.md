---
title: 虚拟机玩UOS
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - uos
---
# 安装

使用Hyper-v创建虚拟机安装uos系统，关于Hyper-V的基本用法可以看另一个文章

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1624787324211-1379e839-6ddd-427e-ad77-d2125c9e8f97.png)

选择语言然后同意协议点击下一步进入硬盘分区，这里需要满足一定的磁盘大小才能下一步

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630137177150-534cfaeb-dfcc-4ff2-a753-2465d076ba96.png)

选择盘符然后直接下一步，就开始漫长的安装步骤

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630137286099-349e617d-0fc5-4f36-9b41-d336df020109.png)

安装完成

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630137395360-8b905c7c-e8cc-430c-a275-3313a40c76e8.png)



上面提示安装成功点击立即重启并立即拔出安装介质，可是我不是用U盘装的咋拔出介质，然后我就陷入了重启=>安装=>重启的死循环中，后来终于反应过来，打开Htper-V管理器，选择指定虚拟机然后点击右下角设置

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630137525439-a2ae6389-3ad5-4307-be6e-cb21c310072b.png)

将这里修改为无

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630137657831-b1ac8931-63bd-4882-8d50-d28486565e85.png)

然后点击立即重启

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630137709074-da2765d2-145a-4ca4-b841-96025c8e5a20.png)

点击回车进入系统，然后这次就可以选择时区并创建账户

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138017581-618959b3-9966-48a8-aced-bb11301f1fe9.png)

点击下一步

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630137906180-4930f2be-b90f-4a4f-9b1f-1da3d9d528d4.png)

等待几分钟后

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138013355-c84e5ffa-e6c7-4d17-88c8-fe6816cb7d67.png)

输入刚才设置的密码下一步，然后这里我们选择普通模式

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138158181-2802218a-e334-451b-8e2c-29ae29f2d1f5.png)

这种终于可以进入系统了

# 查看系统

下面会贴一些常见功能的界面，因为这个没连上网，所以也不能装个应用玩

## 系统主界面

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138245087-2cbf13d3-60f9-4463-8f1b-e85da85b89a1.png)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138822511-613b0de9-c001-446b-8b05-98d864cc2855.png)

## 计算机

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138406837-b4752645-aa26-4e31-88cd-094789209b20.png)

## 视频播放

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138517569-34972655-41b5-4673-b01a-ab3f0c96c5b5.png)

## 浏览器

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138585493-26aa42c8-6257-4b8f-bfb5-4d976d6f7803.png)

## 日历

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138893597-dc20c340-1a5e-4881-91cb-bc77bc7d4cf0.png)

## 应用商店

未联网状态，听说日常的软件都已经有的

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138646191-18c8e1a0-4663-4bf1-9d07-530825beab10.png)

## 设置

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138541802-b61d5b23-fc4e-48c9-9aef-d67b4e822f28.png)

系统信息

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138759524-6c353988-68a1-4ee2-be6f-2841318b6add.png)

## 关机界面

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1630138995731-791a9c46-55c0-492e-a99c-2aff83bfb310.png)

# 体验总结

这次我是在虚拟机里面跑的，多少有点卡顿，不过还是感觉不错的，因为日常的功能都有，这次也是满足了我的好奇心。

