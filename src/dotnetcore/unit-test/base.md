---
title: 基础介绍
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - unit
 - 单元测试
---
# Intro

>  “不会写单元测试的程序员不是合格的程序员，不写单元测试的程序员不是优秀的工程师。”
>
> ​																																													—— 一只想要成为一个优秀程序员的渣逼程序猿。

那么问题来了，什么是单元测试，如何做单元测试。

# 单元测试

## 单元测试的定义

按照维基百科上的说法，单元测试（Unit Testing）又称为模块测试, 是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。 程序单元是应用的最小可测试部件。在面向对象编程中，最小单元就是方法，包括基类、抽象类、或者派生类（子类）中的方法。 按照通俗的理解，一个单元测试判断某个特定场条件下某个特定方法的行为，如斐波那契数列算法，冒泡排序算法。

> 单元测试（unit testing），是指对软件中的最小可测试单元进行检查和验证。 对于单元测试中单元的含义，一般来说，要根据实际情况去判定其具体含义， 如C语言中单元指一个函数，Java里单元指一个类，图形化的软件中可以指一个窗口或一个菜单等。 总的来说，单元就是人为规定的最小的被测功能模块。 单元测试是在软件开发过程中要进行的最低级别的测试活动，软件的独立单元将在与程序的其他部分相隔离的情况下进行测试。
>
> ​																																									—— 百度百科 http://baike.baidu.com/view/106237.htm

## 单元测试的好处

1. 它是一种验证行为程序中的每一项功能都是测试来验证它的正确性。
2. 它是一种设计行为编写单元测试将使我们从调用者观察、思考。 特别是先写测试（test-first），迫使我们把程序设计成易于调用和可测试的，有利于程序的解耦和模块化。

1. 它是一种编写文档的行为单元测试是一种无价的文档，它是展示函数或类如何使用的最佳文档。这份文档是可编译、可运行的，并且它保持最新，永远与代码同步。
2. 它具有回归性自动化的单元测试避免了代码出现回归，编写完成之后，可以随时随地的快速运行测试。

1. 高效自动化的单元测试节省了开发上调试BUG的时间，绝大多数BUG可以通过单元测试测试出来，并且可以减少测试人员的测试时间。有时候通过写单元测试能够更好的完善自己程序的逻辑，让程序变得更加美好。

   ​																											—— 单元测试的优点 http://jingyan.baidu.com/article/d713063522ab4e13fdf47533.html

## 单元测试的原则

- 可重复运行的
- 持续长期有效，并且返回一致的结果

- 在内存中运行，没有外部依赖组件（比如说真实的数据库，真实的文件存储等）
- 快速返回结果

- 一个测试方法只测试一个问题

# .NET 中的测试框架

现在比较流行的测试框架包括微软的 MS Test(VS Test)、NUnit、XUnit

## MS Test

VS单元测试的主要类：Assert、StringAssert、CollectionAssert，具体可参照 [MSDN](https://msdn.microsoft.com/zh-cn/library/Microsoft.VisualStudio.TestTools.UnitTesting.aspx)介绍

有些时候我们需要对测试的方法用到的数据或配置进行初始化，有几个特殊的测试方法。

如果需要针对测试中的所有虚拟用户迭代仅执行一次初始化操作，请使用 TestInitializeAttribute。

初始化方法的运行顺序如下：

1. 用 AssemblyInitializeAttribute 标记的方法。
2. 用 ClassInitializeAttribute 特性标记的方法。

1. 用 TestInitializeAttribute 特性标记的方法。
2. 用 TestMethodAttribute 特性标记的方法。

使用 VS Test 的时候，首先我们需要标记测试方法所在类 TestClass，测试方法标记为 TestMethod

## NUnit

NUnit 测试框架使用方法与 MS Test 类似

有一些是 NUnit 中的，但是MS Test框架中是没有的：

Assert.IsNaN/Assert.IsEmpty/Assert.IsNotEmpty/Assert.Greater/Assert.GreaterOrEqual 等

想要同时使用 VS Test 和 NUnit 的话可以使用宏来区分不同的测试框架，例如：

```
#if !NUNIT
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Category = Microsoft.VisualStudio.TestTools.UnitTesting.DescriptionAttribute;
#else
using NUnit.Framework;
using TestClass = NUnit.Framework.TestFixtureAttribute;
using TestMethod = NUnit.Framework.TestAttribute;
using TestInitialize = NUnit.Framework.SetUpAttribute;
using TestCleanup = NUnit.Framework.TearDownAttribute;
using TestContext = System.Object;
using ClassCleanup = NUnit.Framework.TestFixtureTearDownAttribute;
using ClassInitialize = NUnit.Framework.TestFixtureSetUpAttribute;
#endif
```

从上面可以看得出来 nunit 很多东西和 vs test 是很类似的，声明测试类，测试方法，初始化方法等

## XUnit

XUnit 是另一个测试框架，个人觉得 XUnit 测试更加简洁一些，初始化和释放资源不需要标记单独的方法，初始化直接放在构造方法里，资源释放实现 IDisposable 接口，在 Dispose 方法中进行测试的清理工作即可，相比 ms test（vs test）和 NUnit，我觉得 Xunit 更方便一些，并且对于 Assert ，xunit 更简洁，例如： 在 ms test 中的 Assert.IsNull(null);/Assert.IsTrue(1 == 1); 在 xunit 中则是 Assert.Null(null);/Assert.True(1 == 1);，虽然看上去差不多，但是写的多了就会觉得 xunit 更简洁一些。

xunit 不需要对测试方法所在类型标记 TestClass ，只需要在测试方法上标记 Fact 或者使用数据驱动的 Theory

## XUnit 的基本使用

使用 XUnit 来写测试方法可以使得测试代码更为简洁，更加简单，推荐使用 xunit 来测试自己的代码

测试示例：

```
public class ResultModelTest
{
    [Fact]
    public void SuccessTest()
    {
        var result = ResultModel.Success();
        Assert.Null(result.ErrorMsg);
        Assert.Equal(ResultStatus.Success, result.Status);
    }

    [Theory]
    [InlineData(ResultStatus.Unauthorized)]
    [InlineData(ResultStatus.NoPermission)]
    [InlineData(ResultStatus.RequestError)]
    [InlineData(ResultStatus.NotImplemented)]
    [InlineData(ResultStatus.ResourceNotFound)]
    [InlineData(ResultStatus.RequestTimeout)]
    public void FailTest(ResultStatus resultStatus)
    {
        var result = ResultModel.Fail("test error", resultStatus);
        Assert.Equal(resultStatus, result.Status);
    }
}
```

最基本的测试，使用 Fact 标记测试方法，使用 Assert 来断言自己对结果的预期

可以使用 Theory 来自己指定一批数据来进行测试，来实现测试数据驱动测试，简单的数据可以通过 InlineData 直接指定，也可以使用 MemberData 来指定一个方法来返回用于测试的数据，也可以自定义一个继承于 DataAttribute 的 Data Provider

# More

我觉得在我们开发过程中测试是非常重要的一部分，高质量项目的一个重要指标就是测试覆盖率，，一个高质量的开源项目一定是有比较完善的测试项目的，所以对于测试非常有必要了解一下，并将它集成到自己的项目中持续保证项目的高质量，同时完善的测试对于项目重构也是非常有好处的，能够很大程度上检测是否有发生一些破坏性的变更。

总而言之，开始写单元测试吧，为成为一个优秀的工程师而努力~~

# Reference

- [MSDN - Microsoft.VisualStudio.TestTools.UnitTesting](https://msdn.microsoft.com/zh-cn/library/Microsoft.VisualStudio.TestTools.UnitTesting.aspx)
- [单元测试之道](http://www.cnblogs.com/Wddpct/p/5891222.html)

- [VS2012 Unit Test 个人学习汇总（含目录）](http://www.cnblogs.com/FreeDong/p/3352939.html)
- [单元测试的优点](http://jingyan.baidu.com/article/d713063522ab4e13fdf47533.html)

- [对比MS Test与NUnit Test框架](http://www.cnblogs.com/ColdJokeLife/p/3158812.html)
- https://stackoverflow.com/questions/261139/nunit-vs-mbunit-vs-mstest-vs-xunit-net

- https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-dotnet-test
- [https://xunit.net](https://xunit.net/)

# 来源

> 作者：WeihanLi
>
> 出处：https://www.cnblogs.com/weihanli/p/14316093.html
>
> 版权：本作品采用「[署名-非商业性使用-相同方式共享 4.0 国际](https://creativecommons.org/licenses/by/4.0)」许可协议进行许可。