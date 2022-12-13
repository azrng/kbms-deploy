---
title: centos7安装java环境
lang: zh-CN
date: 2022-12-13
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - java
 - 环境
 - centos
---
## 1. 下载jdk

官网：https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

通过wget下载

```shell
wget http://download.oracle.com/otn-pub/java/jdk/8u171-b11/512cd62ec5174c3487ac17c61aaa89e8/jdk-8u171-linux-x64.tar.gz?AuthParam=1531155951_4e06a4d17c6c1dbfb8440352e19dd2ae
```

下载地址已经失效,需要从官网复制

下载后通过命令检查安装包是否符合

```plain
ls -lht
```

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132142165.png)

## 2. 安装

（1）创建安装目录

```plain
mkdir /usr/local/java/
```

（2）解压至安装目录

```plain
tar -zxvf jdk-8u171-linux-x64.tar.gz -C /usr/local/java/
```

## 3. 设置环境变量

打开文件

```plain
vim /etc/profile
```

在末尾添加

```plain
export JAVA_HOME=/usr/local/java/jdk1.8.0_171
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```

使环境变量生效

```plain
source /etc/profile
```

添加软链接

```plain
ln -s /usr/local/java/jdk1.8.0_171/bin/java /usr/bin/java
```

检查

```plain
java -version
```

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132142557.png)