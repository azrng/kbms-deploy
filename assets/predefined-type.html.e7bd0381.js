import{_ as e,W as t,X as d,a0 as n}from"./framework.e8a0537a.js";const a={},i=n(`<h1 id="开篇语" tabindex="-1"><a class="header-anchor" href="#开篇语" aria-hidden="true">#</a> 开篇语</h1><p>本文是读书笔记</p><h1 id="值类型" tabindex="-1"><a class="header-anchor" href="#值类型" aria-hidden="true">#</a> 值类型</h1><p>占用空间：byte 1字节 short 2 int 4 long 8</p><h2 id="整型" tabindex="-1"><a class="header-anchor" href="#整型" aria-hidden="true">#</a> 整型</h2><p>C#支持8个预定义的整型类型，如下表所示：</p><table><thead><tr><th><strong>关键字</strong></th><th><strong>.NET struct</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>sbyte</td><td>System.SByte</td><td>8位有符号整数</td></tr><tr><td>short</td><td>System.Int16</td><td>16位有符号整数</td></tr><tr><td>int</td><td>System.Int32</td><td>32位有符号整数</td></tr><tr><td>long</td><td>System.Int64</td><td>64位有符号整数</td></tr><tr><td>byte</td><td>System.Byte</td><td>8位无符号整数</td></tr><tr><td>ushort</td><td>System.Int16</td><td>16位无符号整数</td></tr><tr><td>uint</td><td>System.Int32</td><td>32位无符号整数</td></tr><tr><td>ulong</td><td>System.Int64</td><td>64位无符号整数</td></tr></tbody></table><h2 id="实数" tabindex="-1"><a class="header-anchor" href="#实数" aria-hidden="true">#</a> 实数</h2><table><thead><tr><th><strong>类型</strong></th><th><strong>.NET struct</strong></th><th><strong>描述</strong></th><th><strong>小数位</strong></th><th>示例</th></tr></thead><tbody><tr><td>float</td><td>System.Single</td><td>32位，单精度浮点数</td><td>7</td><td>float f=1.0f;</td></tr><tr><td>double</td><td>System.Double</td><td>64位，双精度浮点数</td><td>15/16</td><td>double d=1D;</td></tr><tr><td>decimal</td><td>System.Decimal</td><td>128位，高精度浮点数</td><td>28</td><td>decimal d=1.0M;</td></tr></tbody></table><h2 id="逻辑值-bool" tabindex="-1"><a class="header-anchor" href="#逻辑值-bool" aria-hidden="true">#</a> 逻辑值(bool)</h2><p>c#里面的bool类型，对应.net类型为struct system.boolean，仅包含两个值：false和true。</p><p>对于引用类型，默认情况下相等是基于引用的，而不是底层对象的实际值。但是string是一个例外，它是引用类型，但是她的相等运算法却遵守值类型的语义。</p><h2 id="字符-char" tabindex="-1"><a class="header-anchor" href="#字符-char" aria-hidden="true">#</a> 字符(char)</h2><p>为了表示单个字符，c#提供了char类型，对应的是struct system.char,char的赋值通常是用单括号括起来，例如</p><p>char c=&#39;A&#39;;</p><h1 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h1><h2 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string" aria-hidden="true">#</a> 字符串(string)</h2><p>c#中字符串类型标识不可变的Unicode字符序列。字符串字面量应位于两个双引号(&quot;&quot;)之间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string name = &quot;张三&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>string类型的相等运算法遵守值类型的语义</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string a = &quot;ceshi&quot;;
string b = &quot;ceshi&quot;;
Console.WriteLine(a == b); // True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2><p>会有其他文章单独说明</p><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>数组是固定长度的特定类型的变量集合。为了实现高效访问，数组中的元素总是存储在连续的内存块中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[] a = new int[1000];
Console.WriteLine(a[100]); // 0  默认值初始化  

string[] names1 = new string[] { &quot;张三&quot;, &quot;李四&quot; };
string[] names2 = new string[] { &quot;张三&quot;, &quot;李四&quot; };
Console.WriteLine(names1 == names2); // False
Console.WriteLine(names1.Equals(names2)); //False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组通过索引从0开始获取数组中的元素</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string[] names1 = new string[] { &quot;张三&quot;, &quot;李四&quot; };
var name = names1[0]; // 张三
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>数组一旦创建完毕，长度将不能更改。如果使用到可变集合需要使用List或者字典。</p><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><p>接口和类相似，不过接口只能为成员提供定义而不能提供实现(除了C#8后的默认接口方法)，接口可以多继承而类只能单继承.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface IUserService 
{
    void Sum(int x,int y);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承接口必须实现接口的所有成员。</p><h2 id="委托" tabindex="-1"><a class="header-anchor" href="#委托" aria-hidden="true">#</a> 委托</h2><p>委托是一种知道如何调用方法的对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    internal class Program
    {
        public delegate string mydelegate();
        private static void Main(string[] args)
        {
            mydelegate de = Test;
            var result = de.Invoke();
            Console.WriteLine(result);
        }
        static string Test()
        {
            return &quot;测试&quot;;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>委托实例字面上就是调用者的代理：调用者调用委托，然后委托调用目标方法，这种间接调用方式可以将调用者和目标方法解耦。</p>`,37),r=[i];function s(l,c){return t(),d("div",null,r)}const u=e(a,[["render",s],["__file","predefined-type.html.vue"]]);export{u as default};
