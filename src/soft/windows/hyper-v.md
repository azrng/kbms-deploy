---
title: Hyper-v
lang: zh-CN
date: 2022-12-13
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - hyper-v
---

Hyper-V是[微软](https://baike.baidu.com/item/微软)的一款虚拟化产品，是微软第一个采用类似Vmware ESXi和Citrix Xen的基于hypervisor的技术。

# 配置网络虚拟交换机

提前创建交换机是 因为到会的安装过程中会有一步选择交换机，这里提前创建好，到会安装时直接选择，在安装完成后虚拟机直接就可以连接网络。

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132151013.png)

点击：新建网络交换机=>外部网络=>创建虚拟交换机

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132151907.png)

创建对应的网卡，点击确定完成创建交换机

![img](https://cdn.jsdelivr.net/gh/azrng/file/blog202212132151305.png)

具体如何选择合适的网卡：

Realtek PCIe GBE Family Controller：有线网卡驱动

Qualcomm Atheros QCA61：无线网卡驱动

通过自己本机的网络连接地方选择可以正常上网的网卡。