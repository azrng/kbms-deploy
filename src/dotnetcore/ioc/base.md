---
title: 控制反转
lang: zh-CN
date: 2021-08-25
publish: true
author: azrng
isOriginal: true
category:
 - dotNet
tag:
 - ioc
---
#  IOC(控制反转)

### 导航

- 共享充电宝
- IOC思想
  - 复杂的依赖关系
  - IOC定义
- Spring中的IOC
  - IOC与工厂模式
  - IOC容器的技术剖析
- 结语
- 参考

  本节是摘自[《Spring Boot 实战纪实》](https://www.52interview.com/book/36)的第13篇,感谢您的阅读,预计阅读时长3min。

> 将对象自身从其依赖关系的管理中解放出来，将这个管理工作的责任交给第三方来完成。

### 共享充电宝

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110031841.jpg)



#### 尴尬往事

手机早已成为我们生活中不可或缺的一部分,但是伴随而来的便是手机的充电问题。

大概在2011年,笔者和同学买好了回学校的火车票。因为是晚上6点半的火车票,所以笔者就想时间还早,正好自己也要去商场买点东西,便和同学约定晚上六点在火车站候车室会合,并将车票交给了同学。

下午五点半的时候,笔者便早早地出发前往火车站,大概二十分钟左右便到了车站。到站之后正好赶上排队检票(一般都是提前一个小时检票),但是尴尬地一幕发生了——手机没电了。眼看就要轮到我检票了,可车票还在我同学那里,我同学已经进站,在二楼候车室。我礼貌地请检票员想跳过我,先去检查后面的票,同时也在想办法联系我的同学。

我也想起来借一个电话或者打公用电话,但无奈没有记住同学的手机号码...眼看着排队检票的队伍都进站了,检查通道也开始准备关闭了。

这时多么希望自己带了充电线或者充电宝啊...

就在这时,我那同学突然从楼上冲下来,把车票给我,化解了这场尴尬。

因为手机没电且未带手机充电线出现的糗事其实不止这一件,我想生活中很多人都有过这样的经历。

时隔多年,可能很多同学会觉得这个很荒唐,为啥不用共享充电宝呢。因为,那个时候没有。

#### 共享充电宝

尽管这样的事情屡见不鲜,但是依然没有引起手机厂商的重视(直到今天手机电池的续航能力依然是个问题),通常我们在出门前会做一些准备避免这种事情的发生:

- 多带一个手机
- 换一个大容量电池
- 带上电话本(以备不时之需)
- 带上充电宝

但是以上几种方式依然是成本较高的,所以通常手机没电你大概率只能通过以下但是充电:

- 找路人借充电宝
- 在饭店吃饭时，让店家帮忙充电
- 去住酒店充电
  ...

另外,因为手机厂商不同,充电线接口不一致,你可能还需要再去买一根充电线...

而以上这些不仅你的增加时间和金钱成本,还会增加新沟通成本。

所以,共享充电宝应用而生,他为用户提供了各种型号的充电线和电源,用户只扫码支付即可使用。

**共享充电宝的模式就是把充电过程中的所有设备和过程打包成一个盒子(类似于容器),这一点和软件架构的IOC思想不谋而合。**

### IOC思想

**IOC**(Inversion of Control) 控制反转是一种面对对象编程的设计原则，用于降低代码之间的耦合度。其基本思想是借助第三方实现具有依赖关系的对象之间的解耦。

#### 对象之间复杂的依赖关系

在面向对象方法设计的软件系统中，它的底层实现都是由N个对象组成的，所有的对象通过彼此的合作，最终实现系统的业务逻辑。

> Note: 关于面向对象请查看[《类和实例通俗理解》](https://www.52interview.com/book/36/360)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/16332444563494.png)



上图中的齿轮组，它拥有多个独立的齿轮，这些齿轮相互啮合在一起，协同工作，共同完成某项任务。我们可以看到，在这样的齿轮组中，如果有一个齿轮出了问题，就可能会影响到整个齿轮组的正常运转。

**齿轮组中齿轮之间的啮合关系,与软件系统中对象之间的耦合关系非常相似。对象之间的耦合关系是无法避免的，也是必要的，这是协同工作的基础。**

但是随着软件系统的规模越来越庞大，对象之间的依赖关系也越来越复杂，经常会出现对象之间的多重依赖性关系。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/16332465394191.png)

为了解决对象之间的耦合度过高的问题，软件专家提出了IOC理论，用来实现对象之间的“解耦”，目前这个理论已经被成功地应用到实践当中。

#### IOC的定义

控制反转（Inversion of Control，缩写为IoC），是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度。([百度百科](https://baike.baidu.com/item/控制反转/1158025))

既然名字叫做控制反转,我们来看看，控制什么，反转什么。

早在2004年，Martin Fowler就提出了“哪些方面的控制被反转了？”这个问题。他总结出是依赖对象的获得被反转了，因为大多数应用程序都是由两个或是更多的类通过彼此的合作来实现企业逻辑，这使得每个对象都需要获取与其合作的对象（也就是它所依赖的对象）的引用。如果这个获取过程要靠自身实现，那么这将导致代码高度耦合并且难以维护和调试

- 控制什么：控制对象的创建和销毁，指的是控制对象的生命周期。
- 反转什么：之前我们创建一个对象都是new，现在有了IOC了，指的是把对象的控制权交给了IOC容器。

IOC借助于“第三方”实现具有依赖关系的对象之间的解耦，如下图：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/16332494588800.png)



由于引进了中间位置的“第三方”，也就是IOC容器，使得A、B、C、D这4个对象没有了耦合关系，齿轮之间的传动全部依靠“第三方”了，全部对象的控制权全部上缴给“第三方”IOC容器，所以，IOC容器成了整个系统的关键核心，它起到了一种类似“粘合剂”的作用，把系统中的所有对象粘合在一起发挥作用，如果没有这个“粘合剂”，对象与对象之间会彼此失去联系，这就是有人把IOC容器比喻成“粘合剂”的由来。

为了更加直观的理解,我们可以把IOC拿掉,这时候，A、B、C、D这4个对象之间已经没有了耦合关系，彼此毫无联系，这样的话，当你在实现A的时候，根本无须再去考虑B、C和D了，对象之间的依赖关系已经降低到了最低程度。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/16332497557414.png)



最后,我们用一张图把IOC引入的过程串起来。

![img](https://img.zhikestreet.com/202110021634.png?imageView2/0/q/75|watermark/2/text/NTJJbnRlcnZpZXc=/font/5a6L5L2T/fontsize/240/fill/IzBFMDkwNQ==/dissolve/100/gravity/SouthEast/dx/10/dy/10)

> Note: IoC可以认为是一种全新的设计模式，但是理论和时间成熟相对较晚，并没有包含在GoF中。详细查看[百度百科-控制反转](https://baike.baidu.com/item/控制反转/1158025)

### Spring中的IOC

#### IOC与工厂模式

> IOC的实现主要用到了3种技术：工厂模式、XML解析、反射。

工厂模式在Java/C#中开发中应用广泛。

在工厂模式中，我们不会将对象创建逻辑暴露给客户端，使用一个通用的接口引用新创建的对象。

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110041806.gif)

工厂模式的实现比较简单

- 客户端(client)需要一个*product*对象,无须通过*new*关键字直接创建,而是向工厂(factory)发起一个获取新对象请求。这个过程中,客户端(client)只需要提供自己需要的对象的类型相关信息即可。
- 工厂(factory) 实例化一个具体的**product**对象,然后返回给到客户端(client)新的*product*对象(转换为抽象类类型)。
- 客户端使用*product*对象而不用了解具体的实现细节。

按照惯例,这里还是给个简单demo

#### 步骤1

创建一个接口 Shape.java

```java
public interface Shape {
   void draw();
}
```

#### 步骤2

创建实现相同接口的具体类。如下所示几个类

Rectangle.java

```java
public class Rectangle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Rectangle::draw() method.");
   }
}
```

Square.java

```java
public class Square implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Square::draw() method.");
   }
}
```

Circle.java

```java
public class Circle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Circle::draw() method.");
   }
}
```

#### 步骤3

创建工厂根据给定的信息生成具体类的对象 ShapeFactory.java

```java
public class ShapeFactory {

   //use getShape method to get object of type shape 
   public Shape getShape(String shapeType){
      if(shapeType == null){
         return null;
      }        
      if(shapeType.equalsIgnoreCase("CIRCLE")){
         return new Circle();

      } else if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new Rectangle();

      } else if(shapeType.equalsIgnoreCase("SQUARE")){
         return new Square();
      }

      return null;
   }
}
```

#### 步骤4

使用工厂通过传递类型等信息来获取具体类的对象。
FactoryPatternDemo.java

```java
public class FactoryPatternDemo {

   public static void main(String[] args) {
      ShapeFactory shapeFactory = new ShapeFactory();

      //get an object of Circle and call its draw method.
      Shape shape1 = shapeFactory.getShape("CIRCLE");

      //call draw method of Circle
      shape1.draw();

      //get an object of Rectangle and call its draw method.
      Shape shape2 = shapeFactory.getShape("RECTANGLE");

      //call draw method of Rectangle
      shape2.draw();

      //get an object of Square and call its draw method.
      Shape shape3 = shapeFactory.getShape("SQUARE");

      //call draw method of circle
      shape3.draw();
   }
}
```

引入工厂模式的优势很明显: 增加新的*shape*(如 triangle 三角形),我们也不用修改现有的架构,而只需要在*ShapeFactory*中通过(if else/switch)进行扩展。

上面这种方式工厂实现的方式原理是根据传入的某个参数获取一个对象，一旦我们新增一个shape类型,就修改ShapeFactory 类。这种方式不够灵活,并违背了软件设计的开闭原则。

**利用反射，每当新增接口子类，无需去修改工厂类代码就可以很方便的进行接口子类扩容。**

> Note: Java的反射（reflection）机制是指在程序的运行状态中，可以构造任意一个类的对象，可以了解任意一个对象所属的类，可以了解任意一个类的成员变量和方法，可以调用任意一个对象的属性和方法。这种动态获取程序信息以及动态调用对象的功能称为Java语言的反射机制。(百度百科-JAVA反射机制)

我们只需要对**ShapeFactory**进行改造,如下:

```java
public class ShapeFactory {

    private ShapeFactory(){}
    public static Shape getInstance(String className){
        Shape shape = null;
        try {
            shape = (Shape) Class.forName(className).newInstance();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        }
        return shape;
    }
}
```

这里我们将类名作为参数传递给工厂,工厂利用反射机制找到对应的对象,并创建实例。

什么?? 你说没有看到反射的影子。那就进到Class.forName去看看吧。

```java
@CallerSensitive
public static Class<?> forName(String className)
                throws ClassNotFoundException {
     Class<?> caller = Reflection.getCallerClass();
     return forName0(className, true, ClassLoader.getClassLoader(caller), caller);
}
```

然后,我们再来个测试用例

```java
@Test
	void testReflectFactory()
	{
		/**
		 * get circle instance
		 * */
		Shape shapeCircle = ShapeFactory
				.getInstance("com.zhike.blogmanager.Shape.Circle");
		shapeCircle.draw();

		/**
		 * get rectangle instance
		 * */
		Shape shapeRectangle = ShapeFactory
				.getInstance("com.zhike.blogmanager.Shape.Rectangle");
		shapeRectangle.draw();

		/**
		 * get square instance
		 * */
		Shape shapeSquare = ShapeFactory
				.getInstance("com.zhike.blogmanager.Shape.Square");
		shapeSquare.draw();
	}
```

看看执行结果

```java
2021-10-04 22:41:50.514 === [main] INFO  com.zhike.blogwebapi.BlogWebapiApplicationTests - Started BlogWebapiApplicationTests in 6.359 seconds (JVM running for 8.133)
Inside Circle::draw() method.
Inside Rectangle::draw() method.
Inside Square::draw() method.

Process finished with exit code 0
```

从结果来看,进一步验证了我们设想。

到了这里,有读者就会问了。你讲的工厂和IOC有啥关系呢?
还记得前面我提过:**IOC的实现主要用到了3种技术：工厂模式、XML解析、反射**。

#### Spring IOC 技术剖析

IOC容器其实就是一个大工厂，它用来管理我们所有的对象以及依赖关系。

- 原理就是通过 Java 的反射技术来实现的！通过反射我们可以获取类的所有信息(成员变量、类名等等等)！
- 再通过配置文件(xml)或者注解来描述类与类之间的关系

我们就可以通过这些配置信息和反射技术来构建出对应的对象和依赖关系了！

我们简单来看看实际Spring IOC容器是怎么实现对象的创建和依赖的：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202110021708.jpg)

- 根据Bean配置信息在容器内部创建Bean定义注册表
- 根据注册表加载、实例化bean、建立Bean与Bean之间的依赖关系
- 将这些准备就绪的Bean放到Map缓存池中，等待应用程序调用

(1) BeanFactory

Spring Bean 的创建是典型的工厂模式，这一系列的 Bean 工厂，也即 IOC 容器为开发者管理对象间的依赖关系提供了很多便利和基础服务，在 Spring 中有许多的 IOC 容器的实现供用户选择和使用，
其相互关系如下：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/20211005155219.png)

BeanFactory 作为最顶层的一个接口类，它定义了IOC容器的基本功能规范。

最基本的IOC容器接口BeanFactory

```java
public interface BeanFactory {

	/**
	 对 FactoryBean 的转义定义，因为如果使用 bean 的名字检索 FactoryBean 得到的对象是工厂生成的对象，
    如果需要得到工厂本身，需要转义
	 */
	String FACTORY_BEAN_PREFIX = "&";


	/**
	 *根据 bean 的名字，在 IOC 容器中获取 bean 实例
	 */
	Object getBean(String name) throws BeansException;

	/**
	 * 根据 bean 的名字和 Class 类型来得到 bean 实例，增加了类型安全验证机制。
	 */
	<T> T getBean(String name, Class<T> requiredType) throws BeansException;

	/**
	 * 根据名字和参数 在IOC容器中获取bean的实例
	 */
	Object getBean(String name, Object... args) throws BeansException;

	/**
	 * 根据名字和参数 在IOC容器中获取bean的实例
	 */
	<T> T getBean(Class<T> requiredType) throws BeansException;

	<T> T getBean(Class<T> requiredType, Object... args) throws BeansException;

	<T> ObjectProvider<T> getBeanProvider(Class<T> requiredType);

	<T> ObjectProvider<T> getBeanProvider(ResolvableType requiredType);

	/**
	 *提供对 bean 的检索，看看是否在 IOC 容器有这个名字的 bean
	 */
	boolean containsBean(String name);

	/**
	 *根据 bean 名字得到 bean 实例，并同时判断这个 bean 是不是单例
	 */
	boolean isSingleton(String name) throws NoSuchBeanDefinitionException;

	boolean isPrototype(String name) throws NoSuchBeanDefinitionException;

	boolean isTypeMatch(String name, ResolvableType typeToMatch) throws NoSuchBeanDefinitionException;

	boolean isTypeMatch(String name, Class<?> typeToMatch) throws NoSuchBeanDefinitionException;

	/**
	 * 得到 bean 实例的 Class 类型
	 */
	@Nullable
	Class<?> getType(String name) throws NoSuchBeanDefinitionException;

	@Nullable
	Class<?> getType(String name, boolean allowFactoryBeanInit) throws NoSuchBeanDefinitionException;

	/**
	 *得到 bean 的别名，如果根据别名检索，那么其原名也会被检索出来
	 */
	String[] getAliases(String name);

}
```

在 BeanFactory 里只对 IOC 容器的基本行为作了定义，根本不关心你的 Bean 是如何定义怎样加载的。
正如我们只关心工厂里得到什么的产品对象，至于工厂是怎么生产这些对象的，这个基本的接口不关心。

而要知道工厂是如何产生对象的，我们需要看具体的IOC容器实现，Spring 提供了许多 IOC 容器的实现。比如XmlBeanFactory，ClasspathXmlApplicationContext等。

(2) BeanDefinition

SpringIOC 容器管理了我们定义的各种 Bean 对象及其相互的关系，Bean 对象在 Spring 实现中是以 BeanDefinition来描述的，其继承体系如下：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/20211005163410.png)

Spring IOC的实现过程比较复杂,相关的源码可以研究一下。感兴趣的同学可以下载源码查阅[spring-framework源码](https://github.com/spring-projects/spring-framework)

### 结语

IOC不是什么技术，而是一种设计思想。

**在Spring 开发中，由IOC容器控制对象的创建、初始化、销毁等。这也就实现了对象控制权的反转，由我们对对象的控制转变成了Spring IOC 对对象的控制。**

以上只是笔者个人对Spring IOC的一点看法和思考,欢迎大家共同探讨和文明交流。

### 参考

- [Spring中IOC的理解》](https://www.cnblogs.com/zhaojianhui/p/13455805.html)
- [百度百科-控制反转](https://baike.baidu.com/item/控制反转/1158025)
- [Factory Pattern](https://www.oodesign.com/factory-pattern.html)
- [工厂模式](https://www.runoob.com/design-pattern/factory-pattern.html)
- [Spring IoC 最全源码详解之bean实例化过程](https://blog.csdn.net/wuyuwei/article/details/87557629)
- [Spring5源码分析(一) IOC和Spring 核心容器体系结构](https://blog.csdn.net/lj1314ailj/article/details/80352054)
- [Spring IOC知识点总结](https://segmentfault.com/a/1190000022015914)

# 资料

来自戎码一生： https://www.cnblogs.com/lucky_hu/p/15378130.html

