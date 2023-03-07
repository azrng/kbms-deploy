---
title: Nuget包
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: true
category:
 - soft
tag:
 - nuget 
---
## 包源

默认的源地址为：https://api.nuget.org/v3/index.json

国内的源：https://nuget.cdn.azure.cn/v3/index.json

## 设置多个目标版本

```csharp
//单个
<TargetFramework>netstandard2.0</TargetFramework>

//多个
<PropertyGroup>
   <TargetFrameworks>netstandard1.4;net40;net45</TargetFrameworks>
</PropertyGroup>

//使用一个范围内的版本
<PackageReference Include="Microsoft.EntityFrameworkCore.Relational" Version="[5.0.5,6.0.0)" />
```

分别对不同的版本引用不同的其他nuget组件

```csharp
<!-- 引用自：netstandard2.1  框架 -->
<ItemGroup Condition="'$(TargetFramework)'=='netstandard2.1'">
  <PackageReference Include="Microsoft.Extensions.DependencyInjection.Abstractions" Version="3.1.9" />
  <PackageReference Include="Microsoft.Extensions.Http" Version="3.1.9" />
  <PackageReference Include="Newtonsoft.Json" Version="12.0.3" />
</ItemGroup>

<!-- 引用自：net5.0  框架 -->
<ItemGroup Condition="'$(TargetFramework)'=='net5.0'">
  <PackageReference Include="Microsoft.Extensions.DependencyInjection.Abstractions" Version="5.0.0" />
  <PackageReference Include="Microsoft.Extensions.Http" Version="5.0.0" />
  <PackageReference Include="Newtonsoft.Json" Version="13.0.1" />
</ItemGroup>
```

## 针对目标框架编译

在库或者应用中，使用预处理器指令编写条件代码，针对各个目标框架进行编译：

```csharp
#if NET40
        Console.WriteLine("Target framework: .NET Framework 4.0");
#elif NET45
        Console.WriteLine("Target framework: .NET Framework 4.5");
#else
        Console.WriteLine("Target framework: .NET Standard 1.4");
#endif

#if !NETSTANDARD2_1 && !NETSTANDARD2_0
xxx
#endif
```

 .NET 目标框架的预处理器符号的完整列表如下：

| **目标框架**           | **符号**                                                     |
| ---------------------- | ------------------------------------------------------------ |
| .NET Framework         | NETFRAMEWORK, NET48, NET472, NET471, NET47, NET462, NET461, NET46, NET452, NET451, NET45, NET40, NET35, NET20 |
| .NET Standard          | NETSTANDARD, NETSTANDARD2_1, NETSTANDARD2_0, NETSTANDARD1_6, NETSTANDARD1_5, NETSTANDARD1_4, NETSTANDARD1_3, NETSTANDARD1_2, NETSTANDARD1_1, NETSTANDARD1_0 |
| .NET 5（和 .NET Core） | NET5_0, NETCOREAPP, NETCOREAPP3_1, NETCOREAPP3_0, NETCOREAPP2_2, NETCOREAPP2_1, NETCOREAPP2_0, NETCOREAPP1_1, NETCOREAPP1_0 |

## 兼容老方法

```csharp
[Obsolete]
```

## 预发行包

为了支持软件的版本生命周期，NuGet 1.6 及更高版本允许分配预发行包，其中的版本号包括语义化版本控制后缀，如 -alpha、-beta 或 -rc。

- -alpha：Alpha 版本，通常用于在制品和试验品
- -beta：Beta 版本，通常指可用于下一计划版本的功能完整的版本，但可能包含已知 bug。
- -rc：候选发布，通常可能为最终（稳定）版本，除非出现重大 bug。

```csharp
<PropertyGroup>
    <PackageVersion>1.0.1-alpha</PackageVersion>
</PropertyGroup>
```

## 语义化版本控制

有一种称为“语义化版本控制”的行业标准。 语义化版本控制是指如何表达你或其他开发人员向库引入的更改类型。 语义化版本控制的工作原理是确保包具有版本号，并且该版本号划分为以下部分：

- **主版本**。 最左边的数字。 例如 1.0.0 中的 1。 此数字发生更改意味着代码可能出现中断性变更。 可能需要重写部分代码。
- **次要版本**。 中间的数字。 例如 1.2.0 中的 2。 此数字发生更改意味着添加了新功能。 你的代码仍可正常工作。 接受更新通常是安全的。
- **修补程序版本**。 最右边的数字。 例如 1.2.3 中的 3。 此数字发生更改意味着应用了一个更改，修复了代码中应正常工作的内容。 接受更新应是安全的。

下表说明了每个版本类型的版本号如何更改：

使用语义化版本控制

| 类型         | 发生的更改         |
| ------------ | ------------------ |
| 主版本       | 1.0.0 更改为 2.0.0 |
| 次要版本     | 1.1.1 更改为 1.2.0 |
| 修补程序版本 | 1.0.1 更改为 1.0.2 |

语义化版本：https://semver.org/lang/zh-CN/

## 版本范围

引用包依赖项时，NuGet 支持使用间隔表示法来指定版本范围，汇总如下：

| Notation  | 应用的规则    | 描述                                     |
| --------- | ------------- | ---------------------------------------- |
| 1.0       | x ≥ 1.0       | 最低版本（包含）                         |
| (1.0,)    | x > 1.0       | 最低版本（独占）                         |
| [1.0]     | x == 1.0      | 精确的版本匹配                           |
| (,1.0]    | x ≤ 1.0       | 最高版本（包含）                         |
| (,1.0)    | x < 1.0       | 最高版本（独占）                         |
| [1.0,2.0] | 1.0 ≤ x ≤ 2.0 | 精确范围（包含）                         |
| (1.0,2.0) | 1.0 < x < 2.0 | 精确范围（独占）                         |
| [1.0,2.0) | 1.0 ≤ x < 2.0 | 混合了最低版本（包含）和最高版本（独占） |
| (1.0)     | 无效          | 无效                                     |

```csharp
<PackageReference Include="Microsoft.EntityFrameworkCore.Relational" Version="[5.0.5,6.0.0)" />
```

## 参考文档

官网地址：https://docs.microsoft.com/zh-cn/nuget/what-is-nuget