---
title: 常见目录文件命令
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - linux
---
# 常见的目录文件命令

Linux 下以一个多级树状结构来组织目录和文件的， 最顶层的就是根目录， 使用 **\** 表示， 目录、文件都在根目录下。 对 Linux 的操作归根结底就是对 Linux 文件的操作， 所以我们需要掌握常见的对 Linux 文件目录操作的命令。

# **Linux 目录管理命令**

目录是 Linux 的基本组成部分， 目录管理包括目录的复制、删除、修改等操作。Linux 最顶层目录就是根目录 /。

## **绝对路径和相对路径**

绝对路径： 一定是由根目录 / 开头， 如 /etc/yum.conf

相对路径：当前路径的相对位置， 如当前目录 /etc， 目录下 yum.conf 可以表示为 **./**yum.conf

- **.** 或 **./** 表示当前路径
- **..** 或 **../** 表示上一级目录

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121111659.webp)

## **切换工作目录 - cd**

cd - change directory 的缩写， cd 命令用于切换工作目录。我们操作某个文件之前是需要先切换到对应的目录的。

格式： **cd [绝对路径或相对路径]**

- 如果不带参数， 回到用户的主目录

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121111119.webp)

## **显示当前工作目录 - pwd**

pwd - print working directory 的缩写， pwd 命令用于显示当前工作目录的完整路径。

格式： **pwd [-P]**

- -P： 显示真实路径， 而非链接路径， 链接路径类似 Windows 中的快捷方式
- **man pwd**： 查看 pwd 命令的帮助信息

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121112136.webp)

**查看当前工作目录文件 - ls**

ls - list 的缩写， ls 命令是**最常用**的命令， 默认情况下用于查看当前工作目录下的清单。

格式： 

​      **ls [-aAdlfFrSt] 目录名称**

​      **ls [--color={never,auto,always}] 目录名称**

​      **ls [--full-time] 目录名称**

- -a： 列出全部文件， 包含隐藏文件（以 **.** 开头的）

- -A： 列出全部文件， 包含隐藏文件（以 **.** 开头的）， 但不包括 **.** 和 **..** 这两个目录

- -d： 仅列出目录， 而不列出目录下文件

- -l： 列出详情： 文件类型、文件权限、所有者、组等信息

- -f： 直接列出结果， 而不进行排序

- -F： 在每个输出项后面追加文件的类型标识符

- - 当文件为普通文件， 不输出任何标识符
  - *： 表示具有可执行权限的普通文件
  - /： 表示目录
  - @： 表示符号链接
  - I： 表示命令管道 FIFO
  - =： 表示 sockets 套接字

- r： 将排序结果方向输出

- S：以文件大小排序，而不是文件名 

- t： 以时间排序，而不是文件名

- --color=never | always | auto： 列出时 不 | 总是 | 默认 高亮显示

- --full-time： 列出完整日期时间模式

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121112542.webp)

## **创建目录 - mkdir**

mkdir - make directory 的缩写， mkdir 命令用于创建指定目录， 创建目录时当前用户对需要操作的目录有读写权限， 如果目录已存在， 会提示报错并退出， 也可以创建多级目录。

格式： **mkdir [-mp] 目录名称**

- -m： 在创建目录时直接设置文件权限， 而不是使用默认权限
- -p： 创建多级目录， 一次创建多级目录
- **man mkdir**： 查看 mkdir 命令的帮助信息

使用 -p 参数创建多级目录：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121113979.webp)

使用 -m 设置文件权限， 文件权限下面会讲到：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121113291.webp)

## **删除空目录 - rmdir**

rmdir - remove directory 的缩写， rmdir 命令用于删除指定目录， **删除的目录必须为空目录或多级空目录。**

格式： **rmdir [-p] 目录名称**

- 如果目录内存在文件， 则无法删除
- -p： 连同删除多级目录
- **man rmdir**： 查看 rmdir 命令的帮助信息

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121113178.webp)

# Linux 文件管理命令

文件是 Linux 的基本组成部分， 文件管理包括文件的复制、删除、修改、移动、复制等操作。

## **创建文件或修改文件时间 - touch**

touch 命令可以创建一个新文件， 这是常用的操作， touch 命令还可以修改目录或文件的时间， 文件主要有 3 个变动时间。 ls 命令显示的是文件的 mtime：

- mtime：modification time， 当文件内容发生变更， mtime 会更新
- ctime：status time， 当文件状态发生改变（如权限或属性被更改），ctime 会更新
- atime：access time， 当文件内容被读取（如使用cat读取），atime 会更新

格式： **touch 【-acdmt】 文件名**

- -a：仅修改 atime
- -c：仅修改 atime
- -m：仅修改 mtime
- -d：后接欲修改的日期，也可以使用 --date="日期或时间"
- -t：后接欲修改的时间，格式为【YYYYMMDDhhmm】

先创建一个文件 data.cfg，再修改文件时间：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121114538.webp)

先编辑文件 data.cfg 内容，mtime 会更改，载修改文件时间为 2 天前：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121114197.webp)

## **删除目录或文件 - rm**

rm - remove 的缩写， rm 命令可以删除不需要的目录或文件， 并且支持通配符：

- 目录中存在其他文件会递归删除
- 删除软链接只是删除链接， 真实文件或目录不会被删除

格式： **rm [-fir] 文件或目录**

- 如不加任何参数， 则不能删除目录
- -f： force 的意思， 忽略不存在的文件， 不会出现警告信息
- -r： 递归删除，将子目录及子目录中文件删除
- -i： 互动模式，在删除前会询问

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121114051.webp)

使用 rm 命令一定要小心， 文件一旦被删除就不能恢复了。尤其网上的删除跑路段子： rm -rf /

## **复制文件 - cp**

cp - copy 的缩写， cp 命令用来复制文件或目录。

格式：

- **cp [-adfiprus] 来源(source) 目标(destination)**
- **cp [options] source1 source2 source3 .... directory** 



- 当复制多个文件时， 目标参数必须为已经存在的目录， 否则报错
- cp 命令默认不能复制目录， 必须使用 -R 选项
- -a：相当于 -pdr 的意思，通常在复制目录时使用， 它保留链接、文件属性，并复制目录下的所有内容
- -f：强制（force），如果目标文件已存在，不会询问直接覆盖
- -i：若目标已经存在时，在覆盖时会先提示询问
- -r：递归持续复制，用於目录的复制行为；(常用)
- -p：除复制文件的内容外，还把修改时间和访问权限也复制到新文件中
- -d：若来源为软链接文件，则复制软链接而非文件本身
- -u：若 目标 比 源 旧才更新
- -s： 并不是复制文件本身， 而是创建当前问阿金的软链接

将 /soft/mongodb-linux-x86_64-4.0.3.tgz 复制到 /usr/local 目录下

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121115007.webp)

## **移动文件 - mv**

mv - move 的缩写， mv 命令可以移动文件或目录到另一个文件后目录， 还可以将目录或文件重命名

格式： 

- **mv [-fiu] source \**directory\****

- **mv [options] source1 source2 source3 .... directory**

  

- -f ：强制，如果目标文件已存在，不会询问直接覆盖
- -i：如果目标文件已存在，会询问是否覆盖
- -u：如果目标文件已存在，是否 update
- 最后一个参数 **directory** 是目录并且该目录存在

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121115368.webp)

# Linux 文件权限

Linux 是一种多用户系统，不同的用户处于不同的地位，拥有不同的权限。为了保护系统的安全性，Linux 系统对不同的用户访问同一文件（包括目录文件）的权限做了不同的规定。

上面是有 mkdir -m 命令可以直接创建目录时设置文件的权限， 下面姐介绍一下文件权限。

## **文件权限**

Linux 中可以使用 ll 或者 ls –l 命令来显示一个文件的属性以及文件所属的用户和组，如：

> ls - l

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121116429.webp)

从上图可知，文件权限是类似 【lrwxrwxrwx】的 10 个字符表示的，它们每一位都是有含义的， 位数以 0 - 9 表示：

| **文件类型** | **属主权限** | **属组权限** | **其他用户权限** |
| ------------ | ------------ | ------------ | ---------------- |
| 0            | 1  ，2，3    | 4，5，6，    | 7，8，9          |

Linux系统按文件所有者、文件所有者同组用户和其他用户来规定了不同的文件访问权限：

- 属主：文件的创建者，对文件具有所有权
- 属组：跟文件所有者在同一组的用户
- 其他：跟文件所有者不在同一组的用户



0 位表示文件类型， 不同的字符表示不同的文件类型，有下面几种：

- d：表示是一个目录，如上图中的 boot
- -：表示是一个文件
- l：表示是一个链接文件（link file），类似 Windows 中的快捷方式
- b：表示是设备文件里可供储存的接口设备（可随机存取装置）
- c：表示是设备文件里串行端口设备，如键盘、鼠标



1 - 9 以 3 个为一组， 每一组为 rwx 三个参数的组合，rwx 的位置是不变的：

- r：表示可读 - read
- w：表示可写入 - write
- x：表示可执行 - execute
- -：如果没有权限，就会出现 - 号

以一个例子说明：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121117701.webp)

> -rw-r--r--

- 0 位：表示这是一个文件
- 123 位：表示文件所有者可读、可写
- 456 位：表示同组用户只读
- 789 位：表示其他用户只读

文件权限对一个系统的安全是很重要的，那怎么修改文件权限？

## **更改文件属组 - chgrp**

chgrp：change group 的缩写，修改文件属于哪一个组，Linux 群组名都记录在 /etc/group 文件中，要改变的群组名必须在 /etc/group 文件中，否则会显示错误

比如修改文件 f 的属组修改成 群组 A，则群组 A 名称必须记录在 /etc/group 文件中。

格式：**chgrp [-R]  属组名 文件名**

- -R：递归更改文件属组。在更改某个目录文件的属组时，如果加上-R的参数，那么该目录下的所有文件的属组都会更改

## **更改文件属主 - chown**

chown：change owner的缩写，修改文件的所有者，同时也可以修改文件的属组。

格式：

- **chown  [–R]  属主名 文件名**
- **chown  [-R]  属主名：属组名 文件名**



- -R：递归更改文件属主或属组。在更改某个目录文件的属组时，如果加上-R的参数，那么该目录下的所有文件的属组都会更改

## **以数字形式修改文件权限 - chmod**

格式： **chmod [-R]  xyz 文件或目录**

- xyz : 数字类型的权限属性，为 rwx 属性数值的相加。
- -R : 递归更改



【rwx】权限数字对照表：

|  r   |  4   |
| :--: | :--: |
|  w   |  2   |
|  x   |  1   |
|  -   |  0   |

权限计算：

每种身份（owner、group、other）均有各自的【rwx】权限，每种身份的权限数字需要【rwx】相加

如权限【-rwxrwx---】分数则是：

- owner = rwz = 4 + 2 + 1 = 7
- group = rwz = 4 + 2 + 1 = 7
- other = --- = 0 + 0 + 0 = 0

所以变更权限语句为：**chmod 770  test**

## **以字符形式修改文件权限 - chmod**

三种身份（owner、group、other）字符对照表：

| owner/user |  u   |
| :--------: | :--: |
|   group    |  g   |
|   other    |  0   |
|    all     |  a   |

权限计算：

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121119547.webp)



如将文件权限设置为：-rwxr-xr--

语句：**chmod  u=rwx,g=rx,o=r  test1**

如拿掉全部人的可执行权限：**chmod  a-x  test1**

Linux 目录和文件基本常见命令介绍到此。

# 文章来源

本文转载自微信公众号[代码国度]