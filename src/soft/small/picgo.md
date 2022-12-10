---
title: PicGo图床
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - 图床
---
# 介绍

图床工具，就是自动把本地图片转成连接的一款工具，网络上有很多图床工具，PicGo就是一款比较优秀的图床工具，可以支持微博，七牛云，腾讯云COS，又拍云，GitHub，阿里云OSS，SM.MS，imgur 等8种常用图床

GitHub：https://github.com/PicGo/

# 安装

需要先安装nodejs

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428910.png)

官网：https://nodejs.org/en/

从Github上下载PicGo工具，地址：https://github.com/Molunerfinn/PicGo/releases

下载合适系统的版本，下载安装

# 图床

## Gitee图床

国内平台，访问速度快

登录gitee进入(没有账号的需要创建账号)

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428151.png)

创建一个公开的仓库用户存储图片

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428917.png)

进入个人设置配置私人令牌

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428439.png)

配置好的令牌密钥需要保存好

打开PicGo搜索插件Gitee进行安装

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428229.png)

然后我们可以再图床设置找到

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429999.png)

配置参数

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428822.png)

| 名称    | 作用                     |
| ------- | ------------------------ |
| URL     | 填写gitee的官网网址      |
| owner   | 注册gitee时留的名字      |
| repo    | 仓库名                   |
| path    | 存储的位置（不要是中文） |
| token   | 刚才保存的私人令牌       |
| message | 表述型文字（可以不填）   |

然后我们就可以上传一个测试下是否可以使用

上传后的图片显示在相册

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428264.png)

## Github图床

设置方案可以参考文档：https://blog.csdn.net/weixin_46522803/article/details/126052265



关键点就是选择了快速免费公有的CDN-**jsdelivr**，只需要只在我们 PicGo 图床配置中添加如下自定义域名即可

```
https://cdn.jsdelivr.net/gh/用户名/仓库名
```

## 阿里云OSS

阿里云配置内容来自博客：https://www.cnblogs.com/qiulin2018/p/14802594.html

阿里云的OSS，一年9块钱40G

创建一个Bucket用于存储图片

登录阿里云oss控制台-->Bucket列表-->创建Bucket

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428321.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/创建Bucket.png)

创建的一个Bucket有点类似于我们的一块磁盘，我们可以在上面创建文件夹，上传文件。

我在新创建的Bucket上创建了markdown/images文件夹来用于做为我文章的配图的图床

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428188.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/创建文件夹.png)

对此文件设置匿名可以访问的权限，方便图片在任何地方无需认证只需要url就可以访问到

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428576.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/授权.png)

新增授权

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428111.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/新增授权.png)

获取上传到OSS的keyId和keySecret

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101428523.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/权限管理.png)

创建访问OSS用户

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429370.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/创建用户.png)

新增oss用户

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429296.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/新增用户.png)

保存用户获取到 `AccessKey ID`和 `AccessKey Secret` 可以先保存下来用于之后PicGo配置

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429644.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/保存AccessKey.png)

配置PicGo的阿里云OSS的KeyId和keySecret，将如上获取到的 `AccessKey ID`和 `AccessKey Secret`分别填入此处。存储路径一定要写刚刚我们设置可匿名访问的路径

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429733.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/PicGo配置OSS.png)

确定存储区域这里需要填写我们oss的存储区域ID，在创建Bucket的时候选区域是有显示的，忘了也不要紧。在如下位置也可以获取到这个id

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429772.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/存储区域ID.png)

给我们新创建的用户添加访问OSS的权限

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429694.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/添加权限.png)

添加OSS所有权限

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429510.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/OSS全部权限.png)

自此我们在PicGo配置OSS的全部步骤就已经全部完成

可以在PicGo上传图片试试

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429390.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/上传图片测试.png)

在OSS的控制台上也可以看到我们图片的具体信息

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429877.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/OSS查看图片.png)

复制文件URL在浏览器打开可以直接访问到我们刚上传的图片，无需认证。如果此处出现访问失败，403等错误，请检查是否按上面的配置匿名访问配置了文件夹的匿名访问权限

[![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429637.png)](https://daoxini.oss-cn-shenzhen.aliyuncs.com/markdown/images/测试访问.png)

# 配置Typora

进入文件=>偏好设置=>图像

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101429486.png)

配置好后可以在文档中直接右键上传图片使用

