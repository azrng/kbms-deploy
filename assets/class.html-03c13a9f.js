import{_ as a,V as d,W as l,X as e,Y as i,Z as r,$ as n,C as v}from"./framework-fde89294.js";const t={},c=n(`<h1 id="开篇语" tabindex="-1"><a class="header-anchor" href="#开篇语" aria-hidden="true">#</a> 开篇语</h1><p>本文是读书笔记</p><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p>类是最常见的一种引用类型，最简单的声明如下</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class User { }       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="类中常用的概念" tabindex="-1"><a class="header-anchor" href="#类中常用的概念" aria-hidden="true">#</a> 类中常用的概念</h1><p>通过下面该代码来讲解类中常用的概念</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    public class User
    {
        /// &lt;summary&gt;
        /// Id
        /// &lt;/summary&gt;
        public string ID { get; set; }

        /// &lt;summary&gt;
        /// 账号
        /// &lt;/summary&gt;
        public string Account { get; set; }

        /// &lt;summary&gt;
        /// 密码
        /// &lt;/summary&gt;
        public string PassWord { get; set; }
        
        public int Sex;
             
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问修饰符" tabindex="-1"><a class="header-anchor" href="#访问修饰符" aria-hidden="true">#</a> 访问修饰符</h2><p>常用的类修饰符有public、protected、internal、private、abstract、sealed、static、partial。</p><h2 id="类成员" tabindex="-1"><a class="header-anchor" href="#类成员" aria-hidden="true">#</a> 类成员</h2><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><p>方法是一组实现某个行为的语句，通过调用者的参数获取输入的数据，并通过指定的输出类型将输出数据返回给调用者。可以返回void类型，表名没有返回值，也可以通过ref/out参数返回输出数据。</p><p>方法可以用以下修饰符修饰：</p><ul><li><p>静态修饰符：static</p></li><li><p>访问修饰符：public internal private protected</p></li><li><p>继承修饰符：new virtual abstract override</p></li><li><p>部分方法修饰符：partial</p></li><li><p>异步方法修饰符：async</p></li></ul><h3 id="虚方法" tabindex="-1"><a class="header-anchor" href="#虚方法" aria-hidden="true">#</a> 虚方法</h3><p>父类定义虚方法，子类重写父类的方法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    public class UserBase
    {
        public virtual void Sum(int x, int y) { }
    }

    public class User : UserBase
    {
        public override void Sum(int x, int y) { }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表达式体方法" tabindex="-1"><a class="header-anchor" href="#表达式体方法" aria-hidden="true">#</a> 表达式体方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string GetName() =&gt; Name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重载方法" tabindex="-1"><a class="header-anchor" href="#重载方法" aria-hidden="true">#</a> 重载方法</h3><p>方法名字相同，参数类型不同或者参数个数不同。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        void Sum(int x) { }
        void Sum(double x) { }
        void Sum(int x, int y) { }
        void Sum(double x, int y) { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法的返回值类型和params修饰符不属于判断是否重载的条件</p><h3 id="按值传递和按引用传递" tabindex="-1"><a class="header-anchor" href="#按值传递和按引用传递" aria-hidden="true">#</a> 按值传递和按引用传递</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        void Sum(int x) { }
        void Sum(ref int x) { }
		// 或
        void Sum(out int x) { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的ref和out代码不能同时出现一个类中</p><h2 id="字段" tabindex="-1"><a class="header-anchor" href="#字段" aria-hidden="true">#</a> 字段</h2><p>字段属于类的成员，在该示例类中Sex叫做字段。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    public class User
    {
        /// &lt;summary&gt;
        /// 性别
        /// &lt;/summary&gt;
        public int Sex = 1;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段可用以下修饰符进行修饰：</p><ul><li><p>静态修饰符：static</p></li><li><p>访问修饰符：public internal private protected</p></li><li><p>继承修饰符：new</p></li></ul><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    public class UserBase
    {
        /// &lt;summary&gt;
        /// 性别/级别
        /// &lt;/summary&gt;
        public int Sex = 1;
    }

    public class User : UserBase
    {
        /// &lt;summary&gt;
        /// 性别
        /// &lt;/summary&gt;
        public new int Sex = 10;
    }
    

     var us = new User();
     var sex = us.Sex; // 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>只读修饰符：readonly</li></ul><p>可以设置只读(只能在声明时候或者在类的构造函数中赋值)。</p><ul><li>线程访问修饰符：volatile</li></ul><h3 id="字段初始化" tabindex="-1"><a class="header-anchor" href="#字段初始化" aria-hidden="true">#</a> 字段初始化</h3><p>字段不一定要初始化，没有初始化的字段会设置默认值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class User
    {
        /// &lt;summary&gt;
        /// 性别
        /// &lt;/summary&gt;
        public int Sex;
    }

    var us = new User();
    var sex = us.Sex; // 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明多个字段" tabindex="-1"><a class="header-anchor" href="#声明多个字段" aria-hidden="true">#</a> 声明多个字段</h3><p>可以同时声明多个字段,但是这些字段类型必须一致</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class User
    {
        /// &lt;summary&gt;
        /// 性别/级别
        /// &lt;/summary&gt;
        public int Sex = 1, level = 5;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><p>一眼看过去，属性和字段很相似，但是属性内部可以像方法一样包含逻辑，在下面示例中Account和PassWord就是属性，比字段(sex)多了get/set访问器，属性get出来的值不一定是set进去的值，因为可能在set时候被修改。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class User
    {
        public string Account { get; set; }
        public string PassWord { get; set; }
        
        public int Sex;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get和Set是属性的访问器，可以用来控制属性的访问级别。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        private string name;
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尽管访问属性和字段的方式是相同的，但不同之处在于，属性在获取和设置值的时候给实现者提供了完全的控制能力。</p><p>属性支持以下的修饰符：</p><ul><li><p>静态修饰符：static</p></li><li><p>访问权限修饰符：public internal privateprotected</p></li><li><p>继承修饰符：new virtual abstract overridesealed</p></li></ul><h3 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性" aria-hidden="true">#</a> 只读属性</h3><p>如果只定义了get访问器，属性就是只读的。如果只定义了set访问器，那么就是只写的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class User
    {
        public string Address { get; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表达式属性" tabindex="-1"><a class="header-anchor" href="#表达式属性" aria-hidden="true">#</a> 表达式属性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class User
    {
        public string Address { get; }

        private decimal _price, _num;

        public decimal TotalPrice { get { return _price * _num; } }

        public decimal TotalPrice2 { get =&gt; _price * _num; }

        public decimal TotalPrice3 =&gt; _price * _num;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动属性" tabindex="-1"><a class="header-anchor" href="#自动属性" aria-hidden="true">#</a> 自动属性</h3><p>属性最常见的实现方式是使用get和set访问器读写私有字段(字段和属性类型相同)。因此编译器会将自动属性声明自动转换为在这种实现方式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class User
    {
        public string Address { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译器会自动生成一个后台私有字段，该字段的名称由编译器生成且无法引用。</p><h3 id="属性初始化器" tabindex="-1"><a class="header-anchor" href="#属性初始化器" aria-hidden="true">#</a> 属性初始化器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class User
    {
        public string Address { get; set; } = &quot;中国&quot;;
        
         public int Price { get;} = 1;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性自定义值" tabindex="-1"><a class="header-anchor" href="#属性自定义值" aria-hidden="true">#</a> 属性自定义值</h3><p>获取指定类型的属性值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static string GetPropertyName(Type type, string property)
{
    var displayName = type.GetProperty(property)?.GetCustomAttribute&lt;DisplayNameAttribute&gt;();
    if (!string.IsNullOrEmpty(displayName?.DisplayName))
        return displayName.DisplayName;

    var display = type.GetProperty(property)?.GetCustomAttribute&lt;DisplayAttribute&gt;();
    return !string.IsNullOrEmpty(display?.Name) ? display.Name : string.Empty;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var bb = GetPropertyName(typeof(Userinfo), &quot;Name&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="索引器" tabindex="-1"><a class="header-anchor" href="#索引器" aria-hidden="true">#</a> 索引器</h2><p>索引器为要访问的类或者结构体中封住的列表或者字典类型的数据提供访问接口。索引器通过索引值访问数据。例如string类具有索引器，可以通过int索引访问每一个char值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &quot;max&quot;[1]; // &#39;a&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="索引器的实现" tabindex="-1"><a class="header-anchor" href="#索引器的实现" aria-hidden="true">#</a> 索引器的实现</h3><p>编写索引器需要定义一个名为this的属性，并将参数定义放在一对方括号中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class User
    {
        private string[] words = &quot;the quick brown fox&quot;.Split();

        public string this[int wordNum]
        {
            get { return words[wordNum]; }
            set { words[wordNum] = value; }
        }
    }


    var us = new User();
    System.Console.WriteLine(us[3]); // fox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个类可以定义多个参数类型不同的索引器，一个索引器也可以包含多个参数。</p><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><p>是一种永远不会改变的静态字段。常量会在编译时候静态赋值，编译器会在常量使用的地方上直接替换值。常量用关键字const生命，并且必须用值初始化。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class User
    {
        public const string Name = &quot;张三&quot;;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未来可能发生变化的任何值都不应当表示为常量。</p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>事件(event)基于委托，是类或者对象向其他类或对象通知发生的事情的一种委托，是一种特殊的受限制的委托(只能施加+=，-=操作符)。</p><p>事件的定义</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public event 委托类型 事件名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简单示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    internal class Program
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
            Console.WriteLine(&quot;test&quot;);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,83),u={href:"https://www.cnblogs.com/ezhar/p/12864342.html",target:"_blank",rel:"noopener noreferrer"},m=n(`<h2 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h2><p>构造器执行类或者结构体的初始化代码，构造器的定义和方法很相似，不过构造器的名字和返回值只能和封装它的类型相同</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class UserBase
    {
        public UserBase(string name)
        {
            Name = name;
        }

        public string Name { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例构造器支持以下修饰符：</p><ul><li>静态修饰符：static</li><li>访问修饰符：public internal private protected</li></ul><h3 id="构造器重载" tabindex="-1"><a class="header-anchor" href="#构造器重载" aria-hidden="true">#</a> 构造器重载</h3><p>为了避免重复代码，构造器可以使用this来调用另一个构造器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class UserBase
    {
        public UserBase() {}
        public UserBase(string name) : this()
        {
            Name = name;
        }

        public string Name { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐式无参数构造器" tabindex="-1"><a class="header-anchor" href="#隐式无参数构造器" aria-hidden="true">#</a> 隐式无参数构造器</h3><p>默认编译器会为我们的类生成一个无参数公有的构造器，不过如果你显式定义了构造器，编译器就不再自动生成无参数构造器</p><h3 id="对象初始化器" tabindex="-1"><a class="header-anchor" href="#对象初始化器" aria-hidden="true">#</a> 对象初始化器</h3><p>为了简化对象的初始化，可以在调用构造器后直接通过对象初始化器设置对象的可访问字段或属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    public class User
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

  new User() { Sex = 1, Name = &quot;张三&quot;, Address = &quot;中国台湾省&quot; };
  new User(&quot;张三&quot;) { Sex = 1, Address = &quot;中国台湾省&quot; };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><p>类可以通过继承一个类来对自身进行扩展或者定制，继承了一个了类，那么就拥有父类所有的功能而无需重新构建。类只支持单继承，但是可以被多个类继承。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
    public void Cry()
    {
        Console.WriteLine($&quot;{Name} 在叫&quot;);
    }
}
public class Dog : Animal
{    }
    

// dog继承了Animal，那么就拥有animal里面的属性和方法
var dog = new Dog { Name = &quot;二哈&quot;, Sex = &quot;公&quot; };
dog.Cry();  // 二哈 在叫
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function b(p,o){const s=v("ExternalLinkIcon");return d(),l("div",null,[c,e("p",null,[i("参考资料："),e("a",u,[i("https://www.cnblogs.com/ezhar/p/12864342.html"),r(s)])]),m])}const g=a(t,[["render",b],["__file","class.html.vue"]]);export{g as default};
