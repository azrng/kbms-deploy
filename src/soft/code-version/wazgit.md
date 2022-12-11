---
title: 安装Git
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - git
---
# 安装Git

下载地址：https://git-scm.com/downloads

安装该软件基本上一路下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140111.png)

选择要安装的路径，这里我选择安装到D盘

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140858.png)	

直接下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140618.png)

下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140003.png)

下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140596.png)

下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140591.png)

下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140214.png)

下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140943.png)

下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140177.png)

下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140132.png)

下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140792.png)

等待安装完成

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140533.png)

完成界面

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140279.png)

然后可以右键可以看到这两个就成功了

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140921.png)

下面我们使用Gitee作为源代码仓库作为演示，没有注册的需要去官方(https://gitee.com/)注册。

# 配置Git的SSH

常见的拉取代码的方式分为HTTPS和git(ssh),这里我们就演示如何配置ssh方式拉取代码

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140554.png)

当不配置直接使用右键Git Bash Here拉取项目的话会提示如下错误

```
git clone git@gitee.com:AZRNG/xxx.git
```

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111140729.png)

下面我们就开始配置git的SSH，首先我们在命令行使用命令检查下用户名和邮箱是否配置

```
git config --global  --list 
```

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141923.png)

配置用户名和邮箱

```
git config --global  user.name "用户名"
git config --global user.email "邮箱"
```

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141671.png)

执行命令生成密钥(会在当前目录下生成，选择好合适的路径)

```
ssh-keygen -t rsa -C "你的邮箱"
```

然后需要按多次回车，默认都是直接回车加回车，不过每次回车的意思我也搜索出来了。

1. 确认秘钥的保存路径（如果不需要改路径则直接回车）；
2. 如果上一步置顶的保存路径下已经有秘钥文件，则需要确认是否覆盖（如果之前的秘钥不再需要则直接回车覆盖，如需要则手动拷贝到其他目录后再覆盖）；

1. 创建密码（如果不需要密码则直接回车）；
2. 确认密码；

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141775.png)

然后会在指定目录(默认是当前目录)下生成2个名为id_rsa和id_rsa.pub的文件

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141063.png)

用记事本打开id_rsa.pub拷贝内容到Gitee平台的设置=>SSH公钥

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141132.png)

点击确定后输入密码即可添加SSH公钥，然后我们再去拉取项目

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141991.png)

成功拉取项目，已经不需要密码了，后续其他操作也不再需要密码，Gitee就可以知道这个操作是你操作的。

# 汉化包

上面我们已经安装了Git并且配置了git的SSH，但是对于我来说还是不太方便，我更喜欢可视化界面(点点点)操作。常用的客户端软件有TortoiseGit、SourceTree、VS自带的。下面我就来演示如何安装TortoiseGit以及汉化。

需要提前下载好TortoiseGit-2.9.0.0-64bit、TortoiseGit-LanguagePack-2.9.0.0-64bit-zh_CN，版本看个人爱好。

下载地址：https://tortoisegit.org/download/

下一步，然后下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141269.png)

这点需要注意，然后继续下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141783.png)

配置，这里我只修改了安装的地址，然后下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141713.png)

下一步，然后开始安装

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141176.png)

安装结束

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141456.png)

下面安装语言包，直接下一步

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141303.png)

直接勾兑该选项也可以设置为中文

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141075.png)

或者右键TortoiseGit=>设置=>常规设置进行修改

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141140.png)

点击右键，查看名字已经变成了中文

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141002.png)

可以直接在这里克隆项目以及操作项目

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog/202212111141462.png)