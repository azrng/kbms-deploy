---
title: Jenkins
date: '2021/01/22'
publish: true
categories:
 - soft
tags:
 - Jenkins
---
> 最后编辑时间：2021年1月22日

Jenkins 是一款流行的开源持续集成（CI）与持续部署（CD）工具，用于自动化各种任务，包括构建、测试和部署软件。

## 构建任务

### 流水线Pipeline

 一套运行于Jenkins上的工作流框架，将原本独立运行于单个或者多个节点的任务连接起来，实现单个任务难以完成的**复杂流程编排与可视化**。

- ***Stage***: 阶段，一个Pipeline可以划分为若干个Stage，每个Stage代表一组操作。注意，Stage是一个逻辑分组的概念，可以跨多个Node。如上图所示，Build，Test和Deploy就是Stage，代表了三个不同的阶段：编译、测试和部署。
- ***Node***: 节点，一个Node就是一个Jenkins节点，或者是Master，或者是Slave，是执行Step的具体运行期环境。
- ***Step***: 步骤，Step是最基本的操作单元，小到创建一个目录，大到构建一个Docker镜像，由各类Jenkins Plugin提供。

## 部署服务

在Linux下，SSH服务默认会安装，而在Windows Server下，需要单独安装，可以借助FreeSSHD这个免费工具来实现。由于我的物理机都是Windows Server，物理机上的VM是Linux（Docker运行环境），所以需要给物理机配置FreeSSHD，用来实现从CI服务器发布Release到物理服务器中的VM。

