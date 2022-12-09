import{_ as e,W as i,X as n,a0 as a}from"./framework.35562d63.js";const l={},s=a(`<p>对象引用可以：</p><ul><li>隐式向上转换为基类的引用</li><li>显式向下转换为子类的引用</li></ul><h2 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换" aria-hidden="true">#</a> 隐式转换</h2><p>子类转换为父类，这个时候是隐式转换</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
}
public class Dog : Animal
{}

// 向上类型转换创建一个基类指向子类的引用
var dog = new Dog { Name = &quot;二哈&quot;, Sex = &quot;公&quot; };
Animal animal = dog;
// 转换之后，被引用对象本身不会被替换或者改变
Console.WriteLine(dog==animal); // True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示转换" tabindex="-1"><a class="header-anchor" href="#显示转换" aria-hidden="true">#</a> 显示转换</h2><p>从基类引用创建一个子类引用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
}
public class Dog : Animal
{ }

// 如果该基类是从dog子类转过来的，那么仍然可以从基类转回去dog类
var dog = new Dog { Name = &quot;dog&quot;, Sex = &quot;公&quot; };
Animal animal = dog;
var dog2 = (Dog)animal;

Console.WriteLine(dog2.Name);// dog
Console.WriteLine(dog == animal); //True
Console.WriteLine(dog2 == animal); //True

var animal3 = new Animal { Name = &quot;dog&quot;, Sex = &quot;公&quot; };
Dog dog3 = (Dog)animal3;//错误 InvalidCastException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向下转换必须是显式转换，因为有可能导致运行时错误。向下转换错误会抛出InvalidCastException错误。</p><p>但是如果你还想将父类转为子类可以采用下面的方法（方法不论好坏）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//直接赋值
var dog = new Dog { Name = animal3.Name, Sex = animal3.Sex };
//序列化饭序列化
var dog2 = JsonConvert.DeserializeObject&lt;Dog&gt;(JsonConvert.SerializeObject(animal3));
//反射赋值
var dog3 = new Dog();
//编译animal的公共属性
foreach (var item in typeof(Animal).GetProperties())
{
    item.SetValue(dog3, item.GetValue(animal3));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parse-tryparse-convert" tabindex="-1"><a class="header-anchor" href="#parse-tryparse-convert" aria-hidden="true">#</a> Parse/TryParse/Convert</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static double Parse(string s)
public static bool TryParse(string s，out double result)
    
var str = &quot;123456&quot;;
int num = int.Parse(str); // 123456  显示转换
int num2 = Convert.ToInt32(str);// 123456  显示转换
var str2 = num;// 隐式转换  &quot;123456&quot;

string str3 = &quot;你好&quot;;
bool issuccess = int.TryParse(str3, out int num3);//false  num3=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两者最大的区别是，如果字符串格式不满足转换的要求，Parse方法将会引发一个异常;TryParse方法则不会引发异常，它会返回false，同时将result置为0。</p><h2 id="as" tabindex="-1"><a class="header-anchor" href="#as" aria-hidden="true">#</a> AS</h2><p>as操作符永远不会抛出异常，如果类型不匹配（被转换对象的运行时类型即不是所转换的目标类型，也不是其派生类型），或者类型转换的源对象为null，那么类型转换之后的值也为null。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
}
public class Dog : Animal
{ }


var animal = new Animal();
var flag1 = animal as Dog;//null
var dog = new Dog();
var flag2=dog as Animal;//Animal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不用判断结果是否为null那么推荐使用类型转换，因为如果报错，会抛出更清晰的异常。</p><h2 id="is" tabindex="-1"><a class="header-anchor" href="#is" aria-hidden="true">#</a> IS</h2><p>检查引用的转换是否能够成功，即对象是否从某个特定的类派生(或是实现某个接口)。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Animal
{
    public string Name { get; set; }
    public string Sex { get; set; }
}
public class Dog : Animal
{ }


var animal = new Animal();
var flag1 = animal is Dog;//false
var dog = new Dog() { Name = &quot;二哈&quot;, Sex = &quot;公&quot; };
var flag2 = dog is Animal;//true
//类型检查并创建实例
if (dog is Animal animal1)
{
    Console.WriteLine(animal1.Name);//二哈

    //属性比较
    var flag3 = animal1 is { Sex: &quot;公&quot; };//true
    var flag = animal1 is { Name: &quot;二哈&quot;, Sex: &quot;公&quot; };//true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),d=[s];function r(v,u){return i(),n("div",null,d)}const c=e(l,[["render",r],["__file","type-convert.html.vue"]]);export{c as default};
