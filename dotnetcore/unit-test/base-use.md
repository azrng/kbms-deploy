---
title: 单元测试简单使用
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - unit
 - 单元测试
---
# 单元测试简单使用

# 介绍

本文来演示一下同事教导后的写法，同样有些单元测试是为了演示而写的单元测试。

本文使用组件：Xunit、Moq以及dotNet相关知识

>  注：本文内容基于上一篇

# 操作

首先指定一个方法编写单元测试，并且要保证没有其他因素干扰的情况下去进行单元测试。

## 创建单元测试项目

参考上篇文章，在上篇文章的基础上进行如下代码。

## 测试方法

首先先继承公共类，然后注入日志组件

```
public class UserServiceTest : BaseWebHostTest
{
    public UserServiceTest(ITestOutputHelper helper) : base(helper)
    {
    }
}
```

比如我们去对IUserService里面的GetListAsync做单元测试,然后查看该Service依赖于一些配置

```
private readonly IBaseRepository<User> _userRep;
private readonly IUnitOfWork _unitOfWork;
private readonly IMapper _mapper;

public UserService(IMapper mapper,
    IBaseRepository<User> userRep, IUnitOfWork unitOfWork)
{
    _mapper = mapper;
    _userRep = userRep;
    _unitOfWork = unitOfWork;
}
```

那么我们就需要使用moq组件去模拟出来这些依赖项减少影响。不过该接口有些依赖项用不到，不需要模拟直接传null

```
//模拟用户数据
var users = new List<User>
{
    new User {Account = "123", PassWord = "123456", IsValid = true},
    new User {Account = "456", PassWord = "123456", IsValid = true},
};
// mock 数据
var mockRepository = new Mock<IBaseRepository<User>>();
mockRepository.Setup(t => t.GetListAsync(_ => true)).ReturnsAsync(users);
```

然后就可以实例化UserService进行使用，完整代码如下

```
[Fact]
public async Task GetUser_ReturnOk()
{
    //Arrange：准备阶段
    //模拟用户数据
    var users = new List<User>
    {
        new User {Account = "123", PassWord = "123456", IsValid = true},
        new User {Account = "456", PassWord = "123456", IsValid = true},
    };
    var mockRepository = new Mock<IBaseRepository<User>>();
    mockRepository.Setup(t => t.GetListAsync(_ => true)).ReturnsAsync(users);

    var userService = new UserService(null, mockRepository.Object, null);

    //Act：行为阶段
    var result = await userService.GetListAsync();

    //Assert：断言阶段
    Assert.True(result.Any());
    Output.WriteLine(JsonConvert.SerializeObject(result));
}
```

然后就可以对该方法进行单元测试了。



下面在演示一个对用户添加的方法编写单元测试

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631975072340-e40ce55e-c83a-45f7-9213-00374223b06c.png)

因为我们依赖这三个东西，那么就需要mock这三个

```
var mockRepository = new Mock<IBaseRepository<User>>();
mockRepository.Setup(t => t.AddAsync(It.IsAny<User>(), false))
    .ReturnsAsync(1);

var mockUnitWork = new Mock<IUnitOfWork>();
mockUnitWork.Setup(t => t.SaveChangesAsync(new System.Threading.CancellationToken()))
    .ReturnsAsync(1);

var vm = new AddUserVm { Account = "789", PassWord = "455", Sex = Net5ByDocker.Model.Enum.SexEnum.Man };

var mockIMapper = new Mock<IMapper>();
mockIMapper.Setup(t => t.Map<User>(vm))
    .Returns(new User { Account = "789", PassWord = "455", IsValid = true });
```

这里我们模拟IBaseRepository传入任何的User到添加方法都返回，模拟单元提交也返回1，还模拟了IMapper进行映射，完整代码如下

```
[Fact]
public async Task AddUser_ReturnOk()
{
    // 模拟数据
    var mockRepository = new Mock<IBaseRepository<User>>();
    mockRepository.Setup(t => t.AddAsync(It.IsAny<User>(), false))
        .ReturnsAsync(1);

    var mockUnitWork = new Mock<IUnitOfWork>();
    mockUnitWork.Setup(t => t.SaveChangesAsync(new System.Threading.CancellationToken()))
        .ReturnsAsync(1);

    var vm = new AddUserVm { Account = "789", PassWord = "455", Sex = Net5ByDocker.Model.Enum.SexEnum.Man };

    var mockIMapper = new Mock<IMapper>();
    mockIMapper.Setup(t => t.Map<User>(vm))
        .Returns(new User { Account = "789", PassWord = "455", IsValid = true });

    var userService = new UserService(mockIMapper.Object, mockRepository.Object, mockUnitWork.Object);

    //行为阶段
    var result = await userService.AddAsync(vm);

    // 断言阶段
    Assert.NotEmpty(result);
    Output.WriteLine(result);
}
```

然后单元测试就编写完成了，启动单元测试

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1631976003428-be50fafe-b02e-48a0-b4e0-b75a6297b9f2.png)

单元测试成功，我理解的大概就是这样子的，如果有哪里不对的地方，麻烦指出来一起成长。

# 资料

.NetCore单元测试：https://www.cnblogs.com/baoshu/p/14500273.html

Mock：https://github.com/Moq/moq4/wiki/Quickstart

