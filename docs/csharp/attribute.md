---
title: C#特性
date: '2021/02/22'
publish: true
categories:
 - C#
tags:
 - 特性
 - c#
---

# 开篇语

本文开始之前，首先我想问下大家对于属性和特性知道多少？属性和特性又有何区别？

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1619859754610-fc47148b-04d3-4314-b49a-3219448ed593.png)

对于该单词，我更想把它称之为：特性。对于属性和特性就是名称上有纠葛(不知道你们迷不迷，反正我写本文之前我是迷了)，什么是属性？属性是面向对象编程的基本概念，提供了对私有字段的访问封装，在C#中以get和set访问器方法实现对可读可写属性的操作，提供了安全和灵活的数据访问封装。什么是特性？下面内容就说明下：

# 介绍

使用特性，可以有效地将元数据或声明性信息与代码（程序集、类型、方法、属性等）相关联。 将特性与程序实体相关联后，可以在运行时使用 反射 这项技术查询特性。[详情](https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/attributes/) 用于添加元数据，如编译器指令和注释、描述、方法、类等其他信息。.Net 框架提供了两种类型的特性：预定义特性和自定义特性。

简单总结：定制特性attribute，本质上是一个类，其为目标元素提供关联附加信息，并在运行期以反射的方式来获取附加信息。

# 常用特性

## **AttributeUsage**

AttributeUsage特性用于控制如何应用自定义特性到目标元素，有三个数据属性可用以修饰我们的自定义的属性

| ValidOn       | 规定特性可被放置的语言元素。它是枚举器 AttributeTargets 的值的组合。默认值是 AttributeTargets.All。 |
| ------------- | ------------------------------------------------------------ |
| AllowMultiple | 定义了是否可在同一个程序实体上同时使用多个属性进行修饰       |
| Inherited     | 定义了自定义属性的修饰是否可由被修饰类的派生类继承           |

```
    [AttributeUsage(validOn: AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
    public class HelpAttribute : Attribute
    {

    }
```

表示该特定只能标识在类上，并且同一个类上只能用一个属性修饰，并且自定义属性的修饰不能由修饰类的派生类继承。

## Flags

以Flags特性来将枚举数值看作位标记，而非单独的数值，例如我有如下的一个需求，当我想要取得用户信息的时候，会先从本地缓存中查找，找不到然后从分布式缓存中查找，最后找不到再从数据库中查询。但是有些场景我又不需要查询数据库。

所以会建立下面的这种模型

```
public UserEntity  GetUserInfo(List<DataSource>  dataSources)
{
    var xxxx = new UserEntity();
    if(dataSources.Any(DataSource.Local)
    {
        //从本地缓存中获取
        return xxxx;
    }
 
    if(dataSources.Any(DataSource.Distribution)
    {
        //从分布式缓存中获取
        //更新本地缓存
        return xxxx;
    }
 
    if(dataSources.Any(DataSource.DB)
    {
        //从DB中获取
        //更新分布式缓存
        //更新本地缓存
    }
    return xxxx;
}
```

但是每次调用者都去构建一个List，比较麻烦，此时我们可以使用枚举中的Flags特性，修改程序如下：

首先是枚举的定义上**，要加上  [Flags] 特性标签，并且定义 一般都是 2的n次方，主要是便于位移运算**

```
/// <summary>
///数据取得地方
/// </summary>
[Flags]
public enum DataSource
{
    /// <summary>
    ///本地缓存
    /// </summary>
    [Description("本地缓存")]
    LocalCache = 1,
 
    /// <summary>
    ///分布式缓存
    /// </summary>
    [Description("分布式缓存")]
    DistributeCache = 2,
 
    /// <summary>
    ///数据库
    /// </summary>
    [Description("数据库")]
    DB = 4,
}
```

修改代码

```
public UserEntity  GetUserInfo(DataSource dataSources)
{
    var xxxx = new UserEntity();
    if(dataSources.HasFlags(DataSource.Local)
    {
        //从本地缓存中获取
        return xxxx;
    }
    if(dataSources.HasFlags(DataSource.Distribution)
    {
        //从分布式缓存中获取
        //更新本地缓存
        return xxxx;
    }
    if(dataSources.HasFlags(DataSource.DB)
    {
        //从DB中获取
        //更新分布式缓存
        //更新本地缓存
    }
    return xxxx;
}
```

调用的地方，可以用过“|”来指定，例如我只想用分布式缓存和数据库，那么：

```
var userInfo = GetUserInfo(DataSource.Distribution | DataSource.DB);
```

该例子摘抄自：https://www.cnblogs.com/dcz2015/p/10943759.html

## DllImport

DllImport特性，可以让我们调用非托管代码，所以我们可以使用DllImport特性引入对Win32 API函数的调用

```
[System.Runtime.InteropServices.DllImport("user32.dll")]
extern static void SampleMethod();
```

## Serializable

Serializable特性表明了应用的元素可以被序列化(serializated)

```
[Serializable]
public class SampleClass
{
    // Objects of this type can be serialized.
}
```

## Conditional

Conditional特性，用于条件编译，在调试时使用。注意：Conditional不可应用于数据成员和属性。

# 自定义特性

可通过定义特性类创建自己的自定义特性，特性类是直接或间接派生自 [Attribute](https://docs.microsoft.com/zh-cn/dotnet/api/system.attribute) 的类，可快速轻松地识别元数据中的特性定义。假设我们希望使用编写类的程序员名字来标记该类，那么我们就需要自定义一个Author特性类

```
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct, AllowMultiple = true)]
    public class AuthorAttribute : Attribute
    {
        public string AuthorName;
        public double version;

        public AuthorAttribute(string authorName)
        {
            this.AuthorName = authorName;
            version = 1.0;
        }
    }
```

类名 `AuthorAttribute` 是该特性的名称，即 `Author` 加上 `Attribute` 后缀。 由于该类继承自 `System.Attribute`，因此它是一个自定义特性类。 构造函数的参数是自定义特性的位置参数。 在此示例中，`name` 是位置参数。 所有公共读写字段或属性都是命名参数。 在本例中，`version` 是唯一的命名参数。 

请注意，使用 `AttributeUsage` 特性可使 `Author` 特性仅对类和 `struct` 声明有效。



可按照下面的方式使用特性

```
    [Author("张三", version = 1.1)]
    [Author("李四", version = 1.2)]
    public class SampleClass
    {
        // 业务逻辑代码
    }
```

获取自定义参数

```
var attr = typeof(SampleClass).GetCustomAttributes(typeof(AuthorAttribute), true);
```

GetCustomAttributes 会以数组形式返回 Author 对象和任何其他特性对象

# 参考文档

https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/attributes/

https://www.cnblogs.com/long2006sky/archive/2007/10/19/930094.html

https://www.cnblogs.com/dcz2015/p/10943759.html

# RabbitMq自定义属性

```
    /// <summary>
    /// 自定义RabbitMQ队列注解
    /// </summary>
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
    public class CustomRabbitMqAttribute : Attribute
    {
        /// <summary>
        /// 交换机名称
        /// </summary>
        public string Exchange { get; set; }

        /// <summary>
        /// 队列名称
        /// </summary>
        public string Queue { get; set; }

        /// <summary>
        /// 路由键
        /// </summary>
        public string RoutingKey { get; set; }

        /// <summary>
        /// 类名
        /// </summary>
        public string Name { get; } = string.Empty;

        public CustomRabbitMqAttribute(string routingKey, string queue = "", string name = "", string exchange = "")
        {
            Exchange = exchange;
            Queue = !string.IsNullOrWhiteSpace(queue) ? queue : "chat.queue.event";
            RoutingKey = !string.IsNullOrWhiteSpace(routingKey) ? routingKey : "chat.routingkey.event";
            Name = name;
        }

        public CustomRabbitMqAttribute(Type eventType, string queue = "", string exchange = "")
            : this(eventType.Name, queue, eventType.Name, exchange: exchange)
        {

        }
    }


    /// <summary>
    /// CustomRabbitMqAttribute扩展方法
    /// </summary>
    public static class CustomRabbitMqAttributeExtension
    {
        /// <summary>
        /// 获取CustomRabbitMqAttribute注解
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        public static CustomRabbitMqAttribute ToGetCustomRabbitMqAttribute(this Type type)
        {
            var attributes = type.GetCustomAttributes(typeof(CustomRabbitMqAttribute), true);
            if (attributes.Length == default)
            {
                var assemblyName = type.Assembly.GetName().Name;
                return new CustomRabbitMqAttribute(type, assemblyName);
            }

            return (CustomRabbitMqAttribute)attributes[0];
        }
    }
```

## 使用

```c#
   [CustomRabbitMq("aaaa", "bbbbb")]
    public class user
    {
        public string id { get; set; }

        public string name { get; set; }

        public string consultationsId { get; set; }
    }

//获取自定义属性注解
 var bbb = typeof(user).ToGetCustomRabbitMqAttribute();
```