---
title: Vm安装centos
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
# **VMware**安装Centos

工欲善其事， 必先利其器。我的本机操作系统是 Windows， 准备在 VMWare 虚拟机上安装 CentOS，所以需要先下载安装 VMware， 我下载的版本是 VMware Workstation Pro 14.1。

# VMware 下载

方法一 - 官网下载：进入下载页面， 选择对应的版本和对应的系统，点击【转至下载】

> 官网下载地址：https://my.vmware.com/cn/web/vmware/info/slug/desktop_end_user_computing/vmware_workstation_pro/14_0

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121052491.webp)

方法二 - 百度云下载：如果觉得去官网下载很麻烦，也可以下载我分享的 VMware安装包

> 链接：https://pan.baidu.com/s/19_fq_BJMb6rbNJ8s0HVMZA 
>
> 提取码：smop 
>
> 复制这段内容后打开百度网盘手机App，操作更方便哦

# VMware 安装

VMware 安装包下载完成后， 双击安装包就会弹出安装界面， 安装一般软件安装流程， 一直点击下一步就可安装成功。 

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121052794.webp)

安装过程中需要输入注册码， 这里提供一个可用的注册码给大家， 如果不可用，百度一般都可搜索到相应版本的注册码

> 注册码：YC592-8VF55-M81AZ-FWW5T-WVRV0

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121052681.webp)

# CentOS 下载安装

VMware 安装成功后， 需要先下载 CentOS 系统镜像， 然后在 VMware 虚拟机上安装。

官网下载地址： https://www.centos.org/download/ ，官网提供了多种格式的镜像文件下载， 推荐选择【**DVD ISO 】**版本下载。

- Minimal ISO ： 精简版镜像， CentOS 系统最小安装包， 只有命令行界面
- DVD ISO： 普通光盘完整安装版镜像， 可以安装图形界面， 包含大量的常用软件
- Everything ISO： 对 DVD ISO 软件进行补充， 集成了所有所需的软件

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121054072.webp)

选择 【DVD ISO】， 进入 CentOS 镜像列表，选择其中一个链接点击下载， 当然最好选择所处区域站点的镜像， 获取资源的速度比较快。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121054594.webp)

我选择下载 CentOS 7： CentOS-7-x86_64-DVD-1804.iso， 下载完成后镜像文件大小为 4G 多。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121054811.webp)

# 创建虚拟机

CentOS 系统镜像下载完成后， 使用 VMware 安装系统前需要先创建一个虚拟机，然后在创建的虚拟机上安装 CentOS 系统。 打开 VMware 软件， 点击【创建新的虚拟机】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121055025.webp)

进行虚拟机新建引导， 选择【自定义（高级）】， 点击【下一步】。

自定义选项可以自定义虚拟机属性 ，也可以直接选择典型选项， 使用默认属性。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121055672.webp)

我安装的是 VMware 14 版本，所以硬件兼容性选择【Workstation 14.x】, 然后点击【下一步】。

硬件兼容性决定了虚拟机的硬件限制， 后面自定义的虚拟机属性不能超过这些限制。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121055851.webp)

选择【稍后安装操作系统】，然后点击【下一步】。

我们先创建好虚拟机，定义好属性， 就好像未拆的笔记本， 此时只是一台裸机， 硬盘还是空白的， 只有安装系统后才能使用。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121055335.webp)

系统选择【Linux】, 版本选择【CentOS 7 64 位】， 然后点击【下一步】。

- 选择 Linux： 我安装的是 CentOS 系统， 是属于 Linux 的一种
- 选择 CentOS 7： 下载的版本是 CentOS 7，版本要相互对应
- 64 位： 我的主机是 64 位的， 位数要相互对应

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121055944.webp)

输入虚拟机名称以及虚拟机安装的位置，点击【下一步】。

- 虚拟机名称： VMware 可以创建多个虚拟机， 命名用以区分
- 虚拟机位置： 虚拟机安装在哪儿

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121055770.webp)

根据主机的处理器配置以及性能考虑， 选择合适的数量，如果设置的超过 CPU 配置会有提示 。 比如我的主机 CPU 是双核 4 线程（可以查询自己主机配置），处理器数量选择 1， 每个处理器的内核数量选择 2， 然后点击【下一步】。

- 处理器数量： 指的是 CPU 的核数， 而不是 CPU 的颗数
- 每个处理器的内核数量： 指的是 CPU 的线程数， 而不是 CPU 的核数
- 处理器内核总数：上两个选项的乘积

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121055921.webp)

设置虚拟机内存大小为 4G， 然后点击【下一步】。

设置的虚拟机内存是受主机内存限制的， 比如我的主机内存为 8G，为了体验和性能， 设置虚拟机内存为 4G。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121056065.webp)



选择【使用网络地址转换（NAT）】， 然后点击【下一步】。

这是设置虚拟机访问网络的方式， 后面会介绍。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121056621.webp)

选择推荐的【LSI Logic】， 然后点击【下一步】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121056860.webp)

选择推荐的【SCSI】， 然后点击【下一步】。

上一步 IO 控制器选择了【LSI Logic】， 【LSI Logic 】适配器已提高性能，与通用 SCSI 设备结合使用效果更好。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121056808.webp)

选择【创建新虚拟磁盘】，然后点击【下一步】。

虚拟磁盘相当于主机的硬盘， 系统安装在虚拟磁盘中 。因为我是创建一个新的虚拟机， 所以选择创建新的虚拟磁盘。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121057508.webp)

设置虚拟机磁盘容量， 我设置 80G， 选择【将虚拟磁盘存储为单个文件】

虚拟磁盘由一个或多个虚拟磁盘文件构成， 虚拟磁盘文件用于存储虚拟机硬盘驱动器的内容， 文件中几乎所有的内容都是虚拟机数据。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121057465.webp)

选择虚拟磁盘的存储位置， 然后点击【下一步】。

由于上一步选择将虚拟磁盘存储为单个文件， 所以指定的就是虚拟磁盘的存储位置。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121057374.webp)

上述自定义设置完成， 虚拟机属性就定义好了，点击【完成】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121057280.webp)

# 虚拟机设置

虚拟机创建完成， 还可以进一步对虚拟机进行设置， 点击【编辑虚拟机设置】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121057679.webp)

设置系统镜像， 使用 ISO 系统镜像安装系统， 镜像文件位置为前面下载的 CentOS-7-x86_64-DVD-1804.iso 的存储路径。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121058152.webp)

# CentOS 安装

虚拟机创建配置完成， 设置完系统镜像， 就可以启动虚拟机， 虚拟机就会引导安装 CentOS 系统了。点击【开启此虚拟机】

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121058690.webp)

进入 CentOS 安装界面， 选择【install CentOS 7】，点击【Enter】键。

- 鼠标点击焦点进入安装界面
- 点击【Ctrl + Alt】返回主页面
- ↑ 键向上移动选择
- ↓ 键向下移动选择

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121058446.webp)

进入系统设置， 选择【中文】， 点击【继续】。当然你也可以根据需要选择其他语言。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121058983.webp)

设置时区， 根据自己所处时区选择， 我选择上海时间，点击【完成】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121058460.webp)

设置语言，根据需要选择，我选择【简体中文】， 点击【完成】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121058354.webp)

设置键盘布局， 设置中英文切换的快捷键， 我选择【Ctrl + Shift】， 点击【完成】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121058499.webp)

设置安装源， 前面设置使用 ISO 镜像文件， 这里选择【自动检测到的安装介质】， 点击【完成】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121059869.webp)

设置系统安装方式， 我选择【最小安装】， 点击【完成】。

- 最小安装： 安装完成后只有命令行， 通过指令操作
- GNOME： 安装完成后是图形化界面， 类似 Windows

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121059631.webp)

设置主机名【sam】， 网络后面会设置， 点击【完成】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121059995.webp)

准备磁盘分区， 选择【我要配置分区】， 点击【完成】。

创建虚拟机分配了一个虚拟磁盘， 现在为了便于管理，对磁盘进行分区， 类似于 Windows 系统中硬盘被分成了 C盘、D盘 ...

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121059214.webp)

点击【+】新建挂载点，挂载点就相当于 Windows 系统中的盘符。

基本分区规划：

- /boot： 引导分区，建议 300 - 500M，设备类型为标准分区， 文件系统为 XFS
- swap：交换区， 设备类型为标准分区， 文件系统为 swap， 一般为内存的 2 倍
- /：根分区， 系统的起点， 设备类型为 LVM， 文件系统为 XFS

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121059848.webp)

点击【+】新建 /boot 挂载点， 容量 500 M， 设备类型为标准分区， 文件系统为 XFS。

创建一个 500M 的分区挂载到 /boot 下面， 分区内的文件系统为 XFS， 主要用来存放系统引导时使用的文件。

![图片](https://mmbiz.qpic.cn/mmbiz_png/nNuQmjdvzPB0IHol4jIibsVvNROuIIxaP6JSw7DVel4JCHkCDPzAZjw9zTBEMdnGW230nK5icaOickvwI5j7bu0TA/640?tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121100083.webp)

点击【+】新建 /swap 挂载点， 容量 4096M， 设备类型为标准分区， 文件系统为 swap。

swap 是磁盘仿真成为内存，一旦服务器内存不够，操作系统可在swap暂存一些内存中放不下的东西

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121100131.webp)

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121059990.webp)

点击【+】新建 / 挂载点， 容量 40960M， 设备类型为 LVM， 文件系统为 XFS。

/ 表示根分区， 这个目录是系统的起点， 可以将虚拟磁盘剩余空间都分到此分区， 此时分区包含了 home、配置文件、数据文件等目录

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121101919.webp)

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121101929.webp)

你还可以继续创建挂载点， 更精确的进行数据隔离， 全部创建完成后， 点击【完成】

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121101090.webp)

确认自定义的分区， 点击【接受更改】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121101882.webp)

执行安装， 点击【ROOT 密码】

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121101006.webp)

root 账户是管理员， 设置一个密码， 保存好， 别忘记了。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121101730.webp)

点击【创建用户】， 不勾选【将此用户做为管理员】， 创建一个非管理用户，输入用户名， 设置密码。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121101859.webp)

系统安装完成， 点击【重启】。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121102465.webp)

重启完成， 选择第一个， 点击【Enter】键启动系统。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121102628.webp)

使用 root 账户登录， 输入 root 密码

- 第一行：Linux 系统名称和版本
- 第二行：Linux 内核版本， 目前这个主机的硬件等级为 x86_64
- 第三行：sam 是主机名称，root 是用户名
- 第四行：输入对应密码
- 第五行：~ 表示目前所在的目录，root 默认提示符为#，一般用户提示符为 $

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121102017.webp)

至此， CentOS 7 成功安装完成

# 网络配置

**网络地址转换模式 - NAT**

VMware 提供 **Bridged（桥接模式）**、**NAT（网络地址转换模式）**、**Host-Only（仅主机模式）** 3 种网络工作模式， 用于为虚拟机配置虚拟网络连接。我选择**使用 NAT 模式**， 当然你也可以使用其他模式。

# NAT 模式

如果你的网络 ip 资源紧缺， 但是又希望你的虚拟机能够联网， 这时候 NAT 模式是最好的选择。 采用 NAT 模式最大的优势是虚拟系统接入互联网非常简单，你不需要进行任何其他的配置，只需要宿主机器能访问互联网即可。

设置虚拟机网络记得先关闭系统， 点击【编辑】， 选择【虚拟机网络编辑】

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121104395.webp)

 进入网络编辑界面， **选择【NAT 模式】**，NAT 模式， 即网络地址转换模式， 由于主机网卡有网络地址转换功能， NAT 会先将虚拟机在局域网中的 IP 转换为主机 IP，通过主机所在网络来访问外网。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121104883.webp)

**勾选【将主机虚拟机适配器连接到此网络】**， NAT 可以实现虚拟机访问外部网络， 但并不能实现与主机的相互访问， 这就要用到虚拟网卡。在 CentOS 系统安装时， 会在主机上安装 2 个虚拟网卡适配器， 其中 VMware Network Adapter VMnet8 就是实现 NAT 模式中虚拟机与主机的相互访问。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121104230.webp)

**去掉勾选【使用本地 DHCP 服务将 IP 地址分配给虚拟机】**， VMware 下可以有多个虚拟机， 每个虚拟机都有一个 IP， 如果使用 DHCP 服务， 会设置一个 IP 地址范围， 当虚拟机启动时会在设置的范围内动态分配一个 IP。 因为后面我会使用 XShell 通过虚拟机 IP 远程控制 CentOS，如果每次启动的 IP 都是动态的很不方便， 所以不是 DHCP 服务， 而是使用一个静态 IP。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121104461.webp)

子网 IP为：192.168.91.0， 子网掩码为： 255.255.255.0， 则虚拟机 IP 范围为 192.168.91.0 - 192.168.91.255， 其中 192.168.91.0 和 192.168.91.255 有其他用途（广播）， 所以其他的都可以设置。

**点击【NAT 设置】**， 设置网关 IP 为 192.168.91.2， **点击【添加】**， 设置当前虚拟机的 ip 为 192.168.91.3， 主机就可以通过此 IP 访问虚拟机。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121104007.webp)



![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121105652.webp)

虚拟机网络设置完成，点击【确定】。

# 虚拟网卡

虚拟机和主机的相互访问是通过主机网络连接中的 VMware Network Adapter VMnet8 虚拟网卡来实现的， 所以虚拟网卡的 IP 和虚拟机 IP 应属于同一网段， 子网掩码和网关应该一致。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121105370.webp)

点击【 VMware Network Adapter VMnet8】， 右键属性， 选择【Internet 协议版本 4】， 勾选手动设置 IP 地址：

- IP 地址： 192.168.91.1， 与虚拟机网段一致
- 子网掩码、默认网关和 DNS 跟虚拟机保持一致

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121105660.webp)

如果虚拟机和主机相互无法访问， 不妨看一下 VMware Network Adapter VMnet8 虚拟网卡是否没有设置 IP。

# 网卡配置文件

虚拟机网络配置完成， 启动系统， 设置虚拟机静态 IP， 编辑网卡配置文件， CentOS 7 命令：

> vi /etc/sysconfig/network-scripts/ifcfg-ens33

1. 编辑网卡配置文件：**vi /etc/sysconfig/network-scripts/ifcfg-ens33**，进入命令模式

2. 在命令模式点击按键【**i**】，进入**编辑模式**，修改：

3. - 修改协议类型：BOOTPROTO=static	
   - 修改启动时激活：ONBOOT=yes
   - 新增静态网络IP地址：IPADDR=192.168.91.3
   - 新增子网掩码：NETMASK=255.255.255.0，跟上面 NAT 设置中一致
   - 新增网关：GATEWAY=192.168.91.2，跟上面 NAT 设置中一
   - 新增DNS1：DNS1=192.168.1.1
   - 新增DNS2：DNS2=192.168.0.2

4. 编辑完成， 在编辑模式点击按键【**Esc**】，退出进入命令模式，输入【**:wq**】保存并退出命令模式

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121105555.webp)

网卡配置文件编辑完成， 需要重启网卡才能生效。 CentOS 7 重启网卡命令：

> systemctl restart network

# 测试虚拟机访问

虚拟机网络设置完成， CentOS 7 网卡配置文件修改完成， 现在来测试一下虚拟机是否能访问外网以及虚拟机和主机的相互访问。

## 测试虚拟机访问外网

虚拟机是通过主机网络访问外网， 通过 ping 命令可以测试虚拟机是否可以访问外网， 比如测试虚拟机是否能 ping 通百度。 点击【Win + R】， 输入【cmd】， 进入控制台， 输入：

> ping -c 4 www.baidu.com

ping -c n 是输出 n 行， 避免一直输出， 如果没有使用 -c， 会一直输出， 点击【Ctrl+c】即可结束输出

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121106746.webp)

由于笔记本可以携带， 家里和公司的 DSN 是不同的， ping 外网是不通的， 这时需要查询一下家里或公司网络 DNS， 按上面的步骤修改网卡配置文件中的 DNS， 修改完成就可 ping 通了。

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121106348.webp)

点击【Win + R】， 输入【cmd】， 进入控制台， 查询 DNS 命令：

> ipconfig /all

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121106134.webp)

## 测试虚拟机访问主机

首先查询主机 ip， 点击【Win+R】， 输入【cmd】，进入控制台， 在命令行输入 ipconfig /all，查询主机ip为: 192.168.0.127

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121107783.webp)

测试虚拟机访问主机：ping -c 4 192.168.0.127

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121107734.webp)

## 测试主机访问虚拟机

上面我设置的虚拟机静态 IP 为：192.168.91.3， 点击【Win + R】， 输入【cmd】， 执行： ping 192.168.91.3

![图片](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112121107405.webp)

至此， 虚拟机网络设置介绍完成， 实现了虚拟机访问外网以及虚拟机和主机之间的相互访问。 

# 文章来源

本文转载自微信公众号[代码国度]