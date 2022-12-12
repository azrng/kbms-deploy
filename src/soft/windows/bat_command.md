---
title: Bat命令
lang: zh-CN
date: 2022-12-12
publish: true
author: azrng
isOriginal: false
category:
 - soft
---
删除文件

```csharp
//删除download文件夹中的文件
del C:\download\*.*

//删除download文件及其子目录
rd /s /q C:\download\*.*

//带空格的文件夹名字或带空格的文件的名字都需要用英文的双引号括起来
rd /s /q "D:\Documents"
```

/s 参数表示删除该文件夹及其下面的子目录和文件

/q 参数表示安静进行，不需要确认

示例

删除同步文件下的文档

```csharp
rd /s /q "C:\Users\user.LAPTOP-LBQ8556U\AppData\Roaming\Scooter Software\Beyond Compare 4"
```