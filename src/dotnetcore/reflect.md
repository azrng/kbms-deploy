---
title: 反射
date: '2022/08/25'
publish: true
categories:
 - dotNet
tags:
 - 反射
---
## 1. 基本了解

### 1.1 反射概述

> 文字说明

审查元数据并收集关于它的类型信息的能力称为反射，其中元数据（编译以后的最基本数据单元）就是一大堆的表，当编译程序集或者模块时，编译器会创建一个类定义表，一个字段定义表，和一个方法定义表等

反射提供了封装程序集、模块和类型的对象（`Type` 类型），可以使用反射动态创建类型的实例，将类型绑定到现有对象，或从现有对象获取类型并调用其方法或访问其字段和属性。如果代码中使用了属性，可以利用反射对它们进行访问

> 实际上

反射是微软封装的一个帮助类库：`using System.Reflection;`

### 1.2 反射用途

- 使用`Assembly`定义和加载程序集，加载在程序集清单中列出模块，以及从此程序集中查找类型并创建该类型的实例
- 使用`Module`了解包含模块的程序集以及模块中的类等，还可以获取在模块上定义的所有全局方法或其他特定的非全局方法
- 使用`ConstructorInfo`了解构造函数的名称、参数、访问修饰符（如`pulic` 或`private`）和实现详细信息（如`abstract`或`virtual`）等；使用`Type`的`GetConstructors`或`GetConstructor`方法来调用特定的构造函数
- 使用`MethodInfo`了解方法的名称、返回类型、参数、访问修饰符（如`pulic` 或`private`）和实现详细信息（如`abstract`或`virtual`）等；使用`Type`的`GetMethods`或`GetMethod`方法来调用特定的方法
- 使用`FiedInfo`了解字段的名称、访问修饰符（如`public`或`private`）和实现详细信息（如`static`）等，并获取或设置字段值。
- 使用`EventInfo`了解事件的名称、事件处理程序数据类型、自定义属性、声明类型和反射类型等，添加或移除事件处理程序。
- 使用`PropertyInfo`了解属性的名称、数据类型、声明类型、反射类型和只读或可写状态等，获取或设置属性值
- 使用`ParameterInfo`了解参数的名称、数据类型、是输入参数还是输出参数，以及参数在方法签名中的位置等

### 1.3 反射常用类

反射是一个程序集发现及执行的过程，通过反射能够得到 `.exe` 或`.dll` 等程序集内部的信息，使用反射能够看到一个程序集内部的接口、类、方法、字段、属性、特性等信息

| 类型          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| Assembly      | 通过此类能够载入操纵一个程序集，并获取程序集内部信息         |
| FieldInfo     | 该类保存给定的字段信息                                       |
| MethodInfo    | 该类保存给定的方法信息                                       |
| MemberInfo    | 该类是一个基类，定义了EventInfo,FieldInfo,MethodInfo,PropertyInfo的多个公用行为 |
| Module        | 该类能够使你能訪问多个程序集中的给定模块                     |
| ParameterInfo | 该类保存给定的參数信息                                       |
| PropertyInfo  | 该类保存给定的属性信息                                       |

## 2. Assembly 程序集对象

### 2.1 对象简介

> 官方文档

程序集包含模块、模块包含类型，而类型包含成员。 反射提供封装程序集、模块和类型的对象。 可以使用反射动态地创建类型的实例，将类型绑定到现有对象，或从现有对象中获取类型

> 其它文档

`System.Reflection.Assembly`：表示一个程序集

程序集是代码进行编译的一个逻辑单元，把相关的代码和类型进行组合，然后生成PE文件（例如可执行文件`.exe`和类库文件`.dll`）

由于程序集在编译后并不一定会生成单个文件，而可能会生成多个物理文件，甚至可能会生成分布在不同位置的多个物理文件，所以程序集是一个逻辑单元，而不是一个物理单元；即程序集在逻辑上是一个编译单元，但在物理储存上可以有多种存在形式

对于静态程序集可以生成单个或多个文件，而动态程序集是存在于内存中的

在C#中程序集处处可见，因为任何基于.NET的代码在编译时都至少存在一个程序集（所有.NET项目都会默认引用`mscorlib`程序集）

程序集包含了两种文件：可执行文件（`.exe`文件）和 类库文件（`.dll`文件）

在VS开发环境中，一个解决方案可以包含多个项目，而每个项目就是一个程序集

### 2.2 应用程序结构

包含应用程序域（`AppDomain`），程序集（`Assembly`），模块（`Module`），类型（`Type`），成员（`EventInfo、FieldInfo、MethodInfo、PropertyInfo`） 几个层次

[![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1446823-20210805203304924-460469547.png)](https://img2020.cnblogs.com/blog/1446823/202108/1446823-20210805203304924-460469547.png)

### 2.3 静态方法

> 常用静态方法

| 方法              | 返回值类型 | 描述                         |
| :---------------- | :--------- | :--------------------------- |
| Assembly.Load     | Assembly   | 加载相对路径下指定名称程序集 |
| Assembly.LoadFile | Assembly   | 根据全路径获取指定程序集     |
| Assembly.LoadFrom | Assembly   | 根据全路径获取指定程序集     |

### 2.4 实例方法,属性

> 常用实例属性

| 属性                  | 属性值类型  | 描述                           |
| :-------------------- | :---------- | :----------------------------- |
| assembly.FullName     | string      | 获取程序集的显示名称           |
| assembly.Location     | string      | 获取程序集的完整路径（全名称） |
| assembly.DefinedTypes | IEnumerable | 获取定义在程序集中类型集合     |
| assembly.Modules      | IEnumerable | 获取定义在程序集中模块集合     |

> 常用实例方法

| 方法                        | 返回值 | 描述                                               |
| :-------------------------- | :----- | :------------------------------------------------- |
| assembly.GetTypes()         | Type[] | 获取程序集中定义的类型数组                         |
| assembly.GetType()          | Type   | 获取程序集中定义的类型                             |
| assembly.GetExportedTypes() | Type[] | 获取程序集中定义的所有公共类型（类，接口，枚举等） |
| assembly.CreateInstance()   | object | 根据传入类型创建类型实例                           |

### 2.5 示例：加载程序集

> 方式一：`Load`，`c2` 引用了 `Helper`，有引用关系

```c#
using System;
using System.Reflection;
using Helper;

namespace c2
{
    class Program
    {
        static void Main(string[] args)
        {
            // 相对路径下加载指定名称程序集文件
            Assembly assembly = Assembly.Load("Helper");
        }
    }
}
```

> 示例二：`LoadFile`，`c2`与`taskdao`无引用关系

```c#
using System;
using System.Reflection;

namespace c2
{
    class Program
    {
        static void Main(string[] args)
        {
            // 根据全名称（路径+文件名.后缀）下加载指定名称程序集文件
            Assembly assembly = 
                Assembly.LoadFile(@"E:\SolutionZX\taskdao\bin\Debug\taskdao.dll");
        }
    }
}
```

> 示例三：`LoadFrom`，`c2`与`taskdao`无引用关系

```c#
using System;
using System.Reflection;

namespace c2
{
    class Program
    {
        static void Main(string[] args)
        {
            // 根据全名称（路径+文件名.后缀）下加载指定名称程序集文件
            Assembly assembly = 
                Assembly.LoadFrom(@"E:\SolutionZX\taskdao\bin\Debug\taskdao.dll");
        }
    }
}
```

> 示例四：根据类型创建类型实例，`c2`与`taskdao`无引用关系

`dynamic` 类型为动态类型，使用时编译器不会检查（运行时检查）

```c#
using System;
using System.Reflection;

namespace c2
{
    class Program
    {
        static void Main(string[] args)
        {
            
            // 根据全名称（路径+文件名.后缀）下加载指定名称程序集文件
            Assembly assembly = 
                Assembly.LoadFrom(@"E:\SolutionZX\taskdao\bin\Debug\taskdao.dll");

            // object _t = assembly.CreateInstance("task1dao.task1");
            // 报错，object类型识别不出Show方法，因为C#是强类型语言
            // _t.Show();
            
            dynamic _t = assembly.CreateInstance("task1dao.task1");
            _t.Show();
        }
    }
}
```

### 2.6 获取类型

> 获取普通类型

```c#
Assembly assembly = typeof(Program).Assembly;
Type type = assembly.GetType("c2.UserInfo");
```

> 获取泛型类型

```c#
Assembly assembly = typeof(Program).Assembly;
Type type = assembly.GetType("c2.UserInfo`1");	// UserInfo`1 英文状态下数字1左边符号，参数个数
```

## 3. Type 类型

在C#中可以理解为一个类对应一个`Type`对象

### 3.1 实例属性,方法

> 实例属性

| 属性                            | 属性值类型 | 描述                          |
| :------------------------------ | :--------- | :---------------------------- |
| type.Name                       | string     | 获取类型名称（类名）          |
| type.FullName                   | string     | 获取类全名（命名空间+类名称） |
| type.Namespace                  | string     | 获取类所在的命名空间          |
| type.Assembly                   | string     | 获取类所在程序集名称          |
| type.BaseType                   | Type       | 获取基类（父类）              |
| type.IsSubclassOf(Type parent)  | bool       | type是否是parent的子类        |
| type.IsInstanceOfType(object o) | bool       | o是否是type类的对象           |
| type.IsClass                    | bool       | 获取对象类型是否是类          |
| type.IsInterface                | bool       | 获取对象类型是否是接口        |
| type.IsNotPublic                | bool       | 获取对象类型是否公开          |
| type.IsAbstract                 | bool       | 获取对象类型是否是抽象的      |
| type.IsSealed                   | bool       | 获取对象类型是否是密封的      |
| type.IsArray                    | bool       | 获取对象类型是否是数组        |
| type.IsEnum                     | bool       | 获取对象类型是否是枚举        |

> 实例方法

| 方法                          | 返回值类型        | 描述                       |
| :---------------------------- | :---------------- | :------------------------- |
| type.GetMembers()             | MemberInfo[]      | 获取类型中所有公共成员     |
| type.GetMethods()             | MethodInfo[]      | 获取所有公共方法(包含基类) |
| type.GetConstructors()        | ConstructorInfo[] | 获取类型中所有公共构造函数 |
| type.GetFields()              | FieldInfo[]       | 获取所有公共字段           |
| type.GetProperties()          | PropertyInfo[]    | 获取所有公共属性           |
| type.GetInterfaces()          | Type[]            | 获取所有公共接口           |
| type.GetCustomAttributes(...) | object[]          | 获取此类型指定特性数组     |
|                               |                   |                            |
| type.MakeGenericType(...)     | Type              | 设置泛型类，泛型参数类型   |
|                               |                   |                            |
| type.GetMember(...)           | MemberInfo[]      | 多个，获取公共成员(不常用) |
| type.GetMethod(...)           | MethodInfo        | 单个，获取公共方法         |
| type.GetConstructor(...)      | ConstructorInfo   | 单个，获取公共方法         |
| type.GetField(...)            | FieldInfo         | 单个，获取公共字段         |
| type.GetProperty(...)         | PropertyInfo      | 单个，获取公共属性         |
| type.GetInterface(...)        | Type              | 单个，获取公共接口         |
| type.IsDefined(...)           | bool              | 获取此类型是否继承指定特性 |
| type.GetCustomAttribute(...)  | Attribute         | 单个，获取此类型指定特性   |

### 3.2 操作示例一

```c#
public class Base
{

}
public interface Inta { }

public interface Intb { }

public class UserInfo<A> : Base, Inta, Intb
{
    #region 公共构造函数
    public UserInfo()
    {
        Console.WriteLine("无参构造方法...");
    }
    public UserInfo(int id)
    {
        Console.WriteLine("1个参数构造方法");
    }
    #endregion

    #region 私有构造函数
    private UserInfo(string name) { }
    #endregion

    #region 公共字段
    public string code;
    #endregion

    #region 私有字段
    private string msg;
    #endregion

    #region 公共属性
    public int id { get; set; }
    #endregion

    #region 公共方法
    public void Print()
    {
        Console.WriteLine("无参数实例方法");
    }

    public void Show()
    {
        Console.WriteLine("无参数重载实例方法");
    }
    public void Show(int id)
    {
        Console.WriteLine("有参数重载实例方法-" + id.ToString());
    }
    #endregion

    #region 公共静态方法
    public static void Statc() { }
    #endregion

    #region 私有方法
    private void GetM()
    {
        Console.WriteLine("无参数私有方法");
    }
    private void GetM(int i)
    {
        Console.WriteLine("有参数私有方法-" + id.ToString());
    }
    #endregion

    #region 公共泛型方法
    public void GenericC(A a)
    {
        Console.WriteLine("公共泛型无参方法:" + a.ToString());
    }
    public void GenericS<T>()
    {
        Console.WriteLine("公共泛型无参方法");
    }

    public void GenericsA<T>(A a, T t)
    {
        Console.WriteLine("公共泛型有参方法：" + t.ToString() + "\t" + a.ToString());
    }

    #endregion
}
```

> 通过类获得对应的`Type`

```c#
Type type = typeof(UserInfo);
```

> 通过 `Assembly` 对象，通过类的`fullname`类获得`Type`对象

```c#
Assembly assem = Assembly.LoadFrom(@"E:\SolutionRP\DMO\bin\Debug\DMO.dll");
Type type = assem.GetType("DMO.UserInfo");
```

> 综合示例

```c#
Type type = typeof(UserInfo);
Console.WriteLine("类型名:" + type.Name);
Console.WriteLine("类全名：" + type.FullName);
Console.WriteLine("命名空间名:" + type.Namespace);
Console.WriteLine("程序集名：" + type.Assembly);
Console.WriteLine("模块名:" + type.Module);
Console.WriteLine("基类名：" + type.BaseType);
Console.WriteLine("是否类：" + type.IsClass);

MethodInfo method = type.GetMethod("Show");//获得实例的方法

Console.WriteLine("类的公共成员：");

MemberInfo[] memberInfos = type.GetMembers();//得到所有公共成员
foreach (var item in memberInfos)
{
    Console.WriteLine("成员类型：" + item.MemberType + "\t成员：" + item);
}
```

### 3.3 示例二：获取公共方法

> 一：获取所有公共成员

```c#
static void Main(string[] args)
{
    Type type = typeof(UserInfo);

    Console.Write("获取所有公共成员：");
    MemberInfo[] members =  type.GetMembers();
    Console.WriteLine(members.Length);

    Console.Write("获取所有公共方法(包含基类)：");
    MethodInfo[] methods = type.GetMethods();
    Console.WriteLine(methods.Length);

    Console.Write("获取所有公共构造函数：");
    ConstructorInfo[] constructors = type.GetConstructors();
    Console.WriteLine(constructors.Length);

    Console.Write("获取所有公共字段：");
    FieldInfo[] fields = type.GetFields();
    Console.WriteLine(fields.Length);

    Console.Write("获取所有公共属性：");
    PropertyInfo[] properties = type.GetProperties();
    Console.WriteLine(properties.Length);

    Console.Write("获取所有公共接口：");
    Type[] interfaces = type.GetInterfaces();
    Console.WriteLine(interfaces.Length);
}
```

> 根据名称获取公共成员(不常用)

```c#
MemberInfo[] memberInfo1 = type.GetMember("code");
MemberInfo[] memberInfo2 = type.GetMember("Show");
Console.WriteLine(memberInfo1.Length);
Console.WriteLine(memberInfo2.Length);
```

> 根据名称获取公共方法

```c#
// 获取公共方法（非重载方法）
MethodInfo methodInfo1 = type.GetMethod("Print");
Console.WriteLine(methodInfo1.Name);

// 获取公共重载方法，根据参数顺序，类型，个数获取
// 1.调用有一个int类型参数的重载方法
MethodInfo methodInfo2 = type.GetMethod("Show", new Type[] { typeof(int) });
// 2.调用无参数重载方法(不可传null)
MethodInfo methodInfo3 = type.GetMethod("Show", new Type[0]);
Console.WriteLine(methodInfo3.Name);
```

> 根据参数的类型，数量，顺序返回指定构造方法

```c#
// 返回无参公共构造方法
ConstructorInfo constructor1 = type.GetConstructor(new Type[0]);

// 返回有一个int类型参数的公共构造方法
ConstructorInfo constructor2 = type.GetConstructor(new Type[] { typeof(int) });
```

> 获取类型公共字段

```c#
FieldInfo fieldInfo1 = type.GetField("code");
Console.WriteLine(fieldInfo1.Name);
```

> 获取类型公共属性

```c#
PropertyInfo propertyInfo1 = type.GetProperty("id");
Console.WriteLine(propertyInfo1.Name);
```

### 3.4 示例三：获取静态方法

### 3.5 示例四：获取泛型方法

> 获取泛型方法

```c#
Assembly assembly = typeof(Program).Assembly;

// 获取有一个泛型参数的类
Type type = assembly.GetType("c2.UserInfo`1");

// 指定泛型参数类型
Type generictype = type.MakeGenericType(new Type[] { typeof(int) });

object oType = Activator.CreateInstance(generictype);
```

### 3.6 示例五：获取特性

```c#
[CustomAttribute]
public class Studen
{
    public void Show()
    {

    }
}
```

```c#
public class CustomAttribute : Attribute
{

}
```

```c#
static void Main(string[] args)
{
    Type type = typeof(Studen);
    if(type.IsDefined(typeof(CustomAttribute), true))
    {
        // 如果有多个相同特性，默认取首个
        Attribute attribute = type.GetCustomAttribute(typeof(CustomAttribute), true);
        
        object[] oAttrbute = type.GetCustomAttributes(typeof(CustomAttribute), true);
        Console.WriteLine(oAttrbute.Length);
    }
}
```

## 4. MethodInfo 方法

一个 `MethodInfo` 表示一个方法（公共，私有，静态，构造）

### 4.1 实例属性,方法

> 实例属性

| 属性                       | 属性值类型 | 描述               |
| :------------------------- | :--------- | :----------------- |
| methodInfo.Name            | string     | 方法名称           |
| methodInfo.ReturnType      | Type       | 获取方法返回值类型 |
| methodInfo.IsConstructor   | bool       | 是否是构造方法     |
| methodInfo.IsAbstract      | bool       | 是否为抽象方法     |
| methodInfo.IsPrivate       | bool       | 是否为私有方法     |
| methodInfo.IsPublic        | bool       | 是否为公共方法     |
| methodInfo.IsStatic        | bool       | 是否为静态方法     |
| methodInfo.IsVirtual       | bool       | 是否为虚方法       |
| methodInfo.IsGenericMethod | bool       | 是否为泛型方法     |

> 实例方法

| 方法                                | 返回值          | 描述                       |
| :---------------------------------- | :-------------- | :------------------------- |
| methodInfo.Invoke(...)              | object          | 调用非泛型方法             |
| methodInfo.GetParameters()          | ParameterInfo[] | 获取方法参数数组           |
| methodInfo.IsDefined(...)           | bool            | 获取此方法是否继承指定特性 |
| methodInfo.GetCustomAttribute(...)  | Attribute       | 单个，获取指定特性         |
| methodInfo.GetCustomAttributes(...) | object[]        | 获取此方法指定特性数组     |

### 4.2 操作示例一

> 获取调用非泛型**非重载**无参数方法，无参数方法第二个参数可传`null`，但不推荐

```c#
Type type = typeof(UserInfo);
object oType = Activator.CreateInstance(type);

MethodInfo methodInfo = null;

methodInfo = type.GetMethod("Print");

methodInfo.Invoke(oType,new object[0]);
methodInfo.Invoke(oType, null);
```

> 获取调用非泛型**重载**无参数方法，无参数方法第二个参数可传`null`，但不推荐

```c#
Type type = typeof(UserInfo);
object oType = Activator.CreateInstance(type);

MethodInfo methodInfo = null;

methodInfo = type.GetMethod("Show",new Type[0]);
methodInfo.Invoke(oType,new object[0]);
methodInfo.Invoke(oType, null);
```

> 获取调用非泛型**重载**有参数方法，多个参数用逗号隔开，参数类型，个数，顺序必须相同

```c#
Type type = typeof(UserInfo);
object oType = Activator.CreateInstance(type);

MethodInfo methodInfo = null;

methodInfo = type.GetMethod("Show", new Type[] { typeof(int) });
methodInfo.Invoke(oType, new object[] { 1 });
```

### 4.3 操作示例二

获取泛型方法与获取普通方法一致，泛型参数按从左到右顺序传入，方法参数类型与泛型参数类型一致

> 调用公共泛型无参方法

```c#
// 获取泛型方法
MethodInfo methodInfo = type.GetMethod("GenericS");
// 指定泛型方法参数
MethodInfo genericmethod = methodInfo.MakeGenericMethod(new Type[] { typeof(int) });

genericmethod.Invoke(oType, null);
```

> 调用公共泛型有参方法

```c#
MethodInfo methodInfo = type.GetMethod("GenericsA");
MethodInfo genericsmethod = 
    methodInfo.MakeGenericMethod(new Type[] { typeof(int), typeof(string) });
genericsmethod.Invoke(oType, new object[] { 1 });
```

> 调用公共泛型类的有参方法，泛型类中的泛型参数与泛型方法的泛型参数一致

```c#
static void Main(string[] args)
{
    Assembly assembly = typeof(Program).Assembly;
    Type type = assembly.GetType("c2.UserInfo`1");

    Type generictype = type.MakeGenericType(new Type[] { typeof(int) });

    object oType = Activator.CreateInstance(generictype);

    MethodInfo methodInfo = generictype.GetMethod("GenericC");
    methodInfo.Invoke(oType, new object[] { 1 });
}
```

> 调用公共泛型类的有参方法，泛型类中的泛型参数与泛型方法的泛型参数不一致

```c#
static void Main(string[] args)
{
    Assembly assembly = typeof(Program).Assembly;
    Type type = assembly.GetType("c2.UserInfo`1");

    Type generictype = type.MakeGenericType(new Type[] { typeof(int) });

    object oType = Activator.CreateInstance(generictype);

    MethodInfo methodInfo = generictype.GetMethod("GenericsA");
    MethodInfo genericsmethodinfo = 
        methodInfo.MakeGenericMethod(new Type[] { typeof(string) });
    genericsmethodinfo.Invoke(oType, new object[] { 2, "af" });
}
```

## 5. ConstructorInfo 构造函数

### 5.1 实例属性,方法

> 实例方法

| 方法                                 | 返回值类型 | 描述                           |
| :----------------------------------- | :--------- | :----------------------------- |
| constructor.Invoke(...)              | object     | 执行构造函数                   |
| constructor.IsDefined(...)           | bool       | 获取此构造函数是否继承指定特性 |
| constructor.GetCustomAttribute(...)  | Attribute  | 单个，获取指定特性             |
| constructor.GetCustomAttributes(...) | object[]   | 获取此构造函数指定特性数组     |

### 5.2 操作实例一

```c#
public class User
{
    public User()
    {
        Console.WriteLine("无参构造函数");
    }
    public User(string n)
    {
        Console.WriteLine("有参构造函数：" + n);
    }
}
```

> 调用构造函数

```c#
static void Main(string[] args)
{
    Assembly assembly = typeof(Program).Assembly;
    Type type = assembly.GetType("c2.User");

    object oType = Activator.CreateInstance(type);


    ConstructorInfo constructor = type.GetConstructor(new Type[0]);
    constructor.Invoke(oType, null);

    ConstructorInfo constructor1 = type.GetConstructor(new Type[] { typeof(string) });
    constructor1.Invoke(oType, new object[] { "liai" });

    ParameterInfo[] parameters = constructor1.GetParameters();
    Console.WriteLine(parameters.Length);
}
```

## 6. PropertyInfo 属性

### 6.1 实例属性,方法

> 实例属性

| 属性                  | 属性值类型 | 描述             |
| :-------------------- | :--------- | :--------------- |
| property.Name         | string     | 获取属性名称     |
| property.CanRead      | bool       | 获取属性是否可读 |
| property.CanWrite     | bool       | 获取属性是否可写 |
| property.PropertyType | Type       | 获取属性类型     |

> 实例方法

| 方法                              | 返回值类型 | 描述                       |
| :-------------------------------- | :--------- | :------------------------- |
| property.SetValue(...)            | void       | 设置对象属性               |
| property.GetValue(...)            | object     | 获取对象属性值             |
| property.IsDefined(...)           | bool       | 获取此属性是否继承指定特性 |
| property.GetCustomAttribute(...)  | Attribute  | 单个，获取指定特性         |
| property.GetCustomAttributes(...) | object[]   | 获取此属性指定特性数组     |

### 6.2 操作实例一

> 获取公共属性

```c#
// 获取所有
PropertyInfo[] propertys = type.GetProperty();

// 获取指定
PropertyInfo property = type.GetProperty("no");
```

> 获取属性，设置属性值，获取属性值

```c#
class Program
{
    static void Main(string[] args)
    {
        Assembly assembly = typeof(Program).Assembly;
        Type type = assembly.GetType("c2.Order");

        object oType = Activator.CreateInstance(type);

        PropertyInfo property = type.GetProperty("no");

        property.SetValue(oType,1);

        var value = property.GetValue(oType);
        Console.WriteLine(value);
    }
}


public class Order
{
    public int no { get; set; }
}
```

## 7. FieldInfo 字段

### 7.1 实例属性,方法

> 实例属性

| 属性名          | 属性值类型 | 描述              |
| :-------------- | :--------- | :---------------- |
| field.Name      | string     | 获取字段名称      |
| field.Is...     | bool       | 获取字段是否为... |
| field.FieldType | Type       | 获取字段类型      |

> 实例方法

| 方法                           | 返回值类型 | 描述                       |
| :----------------------------- | :--------- | :------------------------- |
| field.IsDefined(...)           | bool       | 获取此字段是否继承指定特性 |
| field.GetCustomAttribute(...)  | Attribute  | 单个，获取指定特性         |
| field.GetCustomAttributes(...) | object[]   | 获取此字段指定特性数组     |

### 7.2 操作实例一

> 获取字段

```c#
class Program
{
    static void Main(string[] args)
    {
        Assembly assembly = typeof(Program).Assembly;
        Type type = assembly.GetType("c2.Order");

        object oType = Activator.CreateInstance(type);

        FieldInfo field = type.GetField("name");
        
        FieldInfo[] fields = type.GetFields();
    }
}


public class Order
{
    public string name;
}
```

> 获取值，设置值

```c#
class Program
{
    static void Main(string[] args)
    {
        Assembly assembly = typeof(Program).Assembly;
        Type type = assembly.GetType("c2.Order");

        object oType = Activator.CreateInstance(type);

        FieldInfo field = type.GetField("name");
        field.SetValue(oType, "libai");

        var value = field.GetValue(oType);
        Console.WriteLine(value);
    }
}


public class Order
{
    public string name;
}
```

## 8. 扩展补充

### 8.1 加载程序集

> 获得当前【应用程序域】中的所有程序集

```c#
Assembly[] ass = AppDomain.CurrentDomain.GetAssemblies();
```

> 获得当前对象所属的类所在的程序集

```c#
Assembly assembly = this.GetType().Assembly;
```

> `Assembly.LoadFile` 与 `Assembly.LoadFrom`的差别

- `LoadFile` 方法用来载入和检查具有同样标识但位于不同路径中的程序集，但不会载入程序的依赖项
- `LoadFrom` 不能用于载入标识同样但路径不同的程序集

> 创建实例对象

此方法的作用与 `new` 一个实例对象相同

```c#
Activator.CreateInstance(type)
```

### 8.2 Module 程序集模块

```c#
Assembly assembly = Assembly.Load("mscorlib");//加载程序集
Module module = assembly.GetModule("CommonLanguageRuntimeLibrary");//得到指定模块
Console.WriteLine("模块名：" + module.Name);
Type[] types = module.FindTypes(Module.FilterTypeName, "Assembly*");
foreach (var item in types)
{
    Console.WriteLine("类名：" + item.Name);//输出类型名
}

Console.Read();
```

### 8.3 BindingFlags说明

| 枚举值                        | 描述                                                   |
| :---------------------------- | :----------------------------------------------------- |
| BindingFlags.Instance         | 对象实例                                               |
| BindingFlags.Static           | 静态成员                                               |
| BindingFlags.Public           | 指可在搜索中包含公共成员                               |
| BindingFlags.NonPublic        | 指可在搜索中包含非公共成员（即私有成员和受保护的成员） |
| BindingFlags.FlattenHierarchy | 指可包含层次结构上的静态成员                           |
| BindingFlags.IgnoreCase       | 表示忽略 name 的大小写                                 |
| BindingFlags.DeclaredOnly     | 仅搜索 Type 上声明的成员，而不搜索被简单继承的成员     |
| BindingFlags.CreateInstance   | 表示调用构造函数。忽略 name。对其他调用标志无效        |

### **8.4 属性应用：ORM**

> 简易实现

```c#
public Order Find(int id)
{
    string sql = "select id,name,createTime from order where id = " +id;

    Type type = typeof(Order);
    object oOrder = Activator.CreateInstance(type);

    using (SqlConnection connection = new SqlConnection("constr"))
    {
        SqlCommand cmd = new SqlCommand(sql,connection);
        connection.Open();
        SqlDataReader reader = cmd.ExecuteReader();
        if (reader.Read())
        {
            foreach (var prop in type.GetProperties())
            {
                prop.SetValue(oOrder,prop.Name);
            }
        }
    }

    return (Order)oOrder;
}
// DTD
public class Order
{
    public int no { get; set; }
    public string name { get; set; }
    public DateTime createTime { get; set; }
}
```

> 泛型版本

```c#
public T Find<T>(int id) where T : BaseEntity
{
    string sql = "select id,name,createTime from order where id = " + id;

    Type type = typeof(T);
    object oOrder = Activator.CreateInstance(type);

    using (SqlConnection connection = new SqlConnection("constr"))
    {
        SqlCommand cmd = new SqlCommand(sql, connection);
        connection.Open();
        SqlDataReader reader = cmd.ExecuteReader();
        if (reader.Read())
        {
            foreach (var prop in type.GetProperties())
            {
                prop.SetValue(oOrder, prop.Name);
            }
        }
    }

    return (T)oOrder;
}

public class BaseEntity { }
public class Order:BaseEntity
{
    public int no { get; set; }
    public string name { get; set; }
    public DateTime createTime { get; set; }
}
```

## 转载说明

```
本文作者： Mr.wei
本文链接： https://www.cnblogs.com/weiyongguang/p/15105287.html
```

