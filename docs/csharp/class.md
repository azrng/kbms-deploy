---
title: C#类
date: '2021/02/22'
publish: true
categories:
 - C#
tags:
 - 类
 - c#
---

# 开篇语

本文是读书笔记

# 介绍

类是最常见的一种引用类型，最简单的声明如下

``` c#
class User { }       
```

# 类中常用的概念

通过下面该代码来讲解类中常用的概念

``` c#
    public class User
    {
        /// <summary>
        /// Id
        /// </summary>
        public string ID { get; set; }

        /// <summary>
        /// 账号
        /// </summary>
        public string Account { get; set; }

        /// <summary>
        /// 密码
        /// </summary>
        public string PassWord { get; set; }
        
        public int Sex;
             
    }
```

## 访问修饰符

常用的类修饰符有public、protected、internal、private、abstract、sealed、static、partial。

## 类成员

## 方法

方法是一组实现某个行为的语句，通过调用者的参数获取输入的数据，并通过指定的输出类型将输出数据返回给调用者。可以返回void类型，表名没有返回值，也可以通过ref/out参数返回输出数据。

方法可以用以下修饰符修饰：

- 静态修饰符：static
- 访问修饰符：public internal private protected

- 继承修饰符：new virtual abstract override
- 部分方法修饰符：partial

- 异步方法修饰符：async

### 虚方法

父类定义虚方法，子类重写父类的方法

``` c#
    public class UserBase
    {
        public virtual void Sum(int x, int y) { }
    }

    public class User : UserBase
    {
        public override void Sum(int x, int y) { }
    }
```

### 表达式体方法

```
string GetName() => Name;
```

### 重载方法

方法名字相同，参数类型不同或者参数个数不同。

```
        void Sum(int x) { }
        void Sum(double x) { }
        void Sum(int x, int y) { }
        void Sum(double x, int y) { }
```

方法的返回值类型和params修饰符不属于判断是否重载的条件

### 按值传递和按引用传递

```
        void Sum(int x) { }
        void Sum(ref int x) { }
		// 或
        void Sum(out int x) { }
```

上述的ref和out代码不能同时出现一个类中

## 字段

字段属于类的成员，在该示例类中Sex叫做字段。

``` c#
    public class User
    {
        /// <summary>
        /// 性别
        /// </summary>
        public int Sex = 1;
    }
```

字段可用以下修饰符进行修饰：

- 静态修饰符：static
- 访问修饰符：public internal private protected

- 继承修饰符：new

``` c#
    public class UserBase
    {
        /// <summary>
        /// 性别/级别
        /// </summary>
        public int Sex = 1;
    }

    public class User : UserBase
    {
        /// <summary>
        /// 性别
        /// </summary>
        public new int Sex = 10;
    }
    

     var us = new User();
     var sex = us.Sex; // 10
```

- 只读修饰符：readonly

可以设置只读(只能在声明时候或者在类的构造函数中赋值)。

- 线程访问修饰符：volatile

### 字段初始化

字段不一定要初始化，没有初始化的字段会设置默认值。

```
    public class User
    {
        /// <summary>
        /// 性别
        /// </summary>
        public int Sex;
    }

    var us = new User();
    var sex = us.Sex; // 0
```

### 声明多个字段

可以同时声明多个字段,但是这些字段类型必须一致

```
    public class User
    {
        /// <summary>
        /// 性别/级别
        /// </summary>
        public int Sex = 1, level = 5;
    }
```

## 属性

一眼看过去，属性和字段很相似，但是属性内部可以像方法一样包含逻辑，在下面示例中Account和PassWord就是属性，比字段(sex)多了get/set访问器，属性get出来的值不一定是set进去的值，因为可能在set时候被修改。

```
    public class User
    {
        public string Account { get; set; }
        public string PassWord { get; set; }
        
        public int Sex;
    }
```

Get和Set是属性的访问器，可以用来控制属性的访问级别。

```
        private string name;
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
```

尽管访问属性和字段的方式是相同的，但不同之处在于，属性在获取和设置值的时候给实现者提供了完全的控制能力。

属性支持以下的修饰符：

- 静态修饰符：static
- 访问权限修饰符：public internal privateprotected

- 继承修饰符：new virtual abstract overridesealed

### 只读属性

如果只定义了get访问器，属性就是只读的。如果只定义了set访问器，那么就是只写的。

```
    public class User
    {
        public string Address { get; }
    }
```

### 表达式属性

```
    public class User
    {
        public string Address { get; }

        private decimal _price, _num;

        public decimal TotalPrice { get { return _price * _num; } }

        public decimal TotalPrice2 { get => _price * _num; }

        public decimal TotalPrice3 => _price * _num;
    }
```

### 自动属性

属性最常见的实现方式是使用get和set访问器读写私有字段(字段和属性类型相同)。因此编译器会将自动属性声明自动转换为在这种实现方式。

```
    public class User
    {
        public string Address { get; set; }
    }
```

编译器会自动生成一个后台私有字段，该字段的名称由编译器生成且无法引用。

### 属性初始化器

```
    public class User
    {
        public string Address { get; set; } = "中国";
        
         public int Price { get;} = 1;
    }
```

### 属性自定义值

获取指定类型的属性值

```
public static string GetPropertyName(Type type, string property)
{
    var displayName = type.GetProperty(property)?.GetCustomAttribute<DisplayNameAttribute>();
    if (!string.IsNullOrEmpty(displayName?.DisplayName))
        return displayName.DisplayName;

    var display = type.GetProperty(property)?.GetCustomAttribute<DisplayAttribute>();
    return !string.IsNullOrEmpty(display?.Name) ? display.Name : string.Empty;
}
```

例如：

```
var bb = GetPropertyName(typeof(Userinfo), "Name");
```

## 索引器

索引器为要访问的类或者结构体中封住的列表或者字典类型的数据提供访问接口。索引器通过索引值访问数据。例如string类具有索引器，可以通过int索引访问每一个char值。

```
var str = "max"[1]; // 'a'
```

### 索引器的实现

编写索引器需要定义一个名为this的属性，并将参数定义放在一对方括号中

```
    public class User
    {
        private string[] words = "the quick brown fox".Split();

        public string this[int wordNum]
        {
            get { return words[wordNum]; }
            set { words[wordNum] = value; }
        }
    }


    var us = new User();
    System.Console.WriteLine(us[3]); // fox
```

一个类可以定义多个参数类型不同的索引器，一个索引器也可以包含多个参数。

## 常量

是一种永远不会改变的静态字段。常量会在编译时候静态赋值，编译器会在常量使用的地方上直接替换值。常量用关键字const生命，并且必须用值初始化。

```
    public class User
    {
        public const string Name = "张三";
    }
```

未来可能发生变化的任何值都不应当表示为常量。

## 事件

事件(event)基于委托，是类或者对象向其他类或对象通知发生的事情的一种委托，是一种特殊的受限制的委托(只能施加+=，-=操作符)。

事件的定义

```
public event 委托类型 事件名;
```

简单示例

```
    internal class Program
    {
        //声明委托
        public delegate void MyDelegate();

        //声明事件，作为类的成员
        public event MyDelegate mydelgate;
        private static void Main(string[] args)
        {
            var p = new Program();
            p.mydelgate = Test;
            p.mydelgate();
            Console.ReadKey();
        }
        static void Test()
        {
            Console.WriteLine("test");
        }
    }
```

参考资料：https://www.cnblogs.com/ezhar/p/12864342.html

## 构造器

构造器执行类或者结构体的初始化代码，构造器的定义和方法很相似，不过构造器的名字和返回值只能和封装它的类型相同

```
    public class UserBase
    {
        public UserBase(string name)
        {
            Name = name;
        }

        public string Name { get; set; }
    }
```

实例构造器支持以下修饰符：

- 静态修饰符：static
- 访问修饰符：public internal private protected

### 构造器重载

为了避免重复代码，构造器可以使用this来调用另一个构造器

```
    public class UserBase
    {
        public UserBase() {}
        public UserBase(string name) : this()
        {
            Name = name;
        }

        public string Name { get; set; }
    }
```

### 隐式无参数构造器

默认编译器会为我们的类生成一个无参数公有的构造器，不过如果你显式定义了构造器，编译器就不再自动生成无参数构造器

### 对象初始化器

为了简化对象的初始化，可以在调用构造器后直接通过对象初始化器设置对象的可访问字段或属性

```
    public class User
    {
        public User()
        {
        }

        public User(string name) : this()
        {
            Name = name;
        }

        public string Name { get; set; }

        public int Sex;

        public string Address { get; set; }
    }

  new User() { Sex = 1, Name = "张三", Address = "中国台湾省" };
  new User("张三") { Sex = 1, Address = "中国台湾省" };
```

## 继承

类可以通过继承一个类来对自身进行扩展或者定制，继承了一个了类，那么就拥有父类所有的功能而无需重新构建。类只支持单继承，但是可以被多个类继承。

```
public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
    public void Cry()
    {
        Console.WriteLine($"{Name} 在叫");
    }
}
public class Dog : Animal
{    }
    

// dog继承了Animal，那么就拥有animal里面的属性和方法
var dog = new Dog { Name = "二哈", Sex = "公" };
dog.Cry();  // 二哈 在叫
```