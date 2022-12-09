import{_ as d,W as s,X as a,Y as e,$ as n,Z as l,a0 as i,y as r}from"./framework.e8a0537a.js";const o={},c=i('<h2 id="_1-基本了解" tabindex="-1"><a class="header-anchor" href="#_1-基本了解" aria-hidden="true">#</a> 1. 基本了解</h2><h3 id="_1-1-反射概述" tabindex="-1"><a class="header-anchor" href="#_1-1-反射概述" aria-hidden="true">#</a> 1.1 反射概述</h3><blockquote><p>文字说明</p></blockquote><p>审查元数据并收集关于它的类型信息的能力称为反射，其中元数据（编译以后的最基本数据单元）就是一大堆的表，当编译程序集或者模块时，编译器会创建一个类定义表，一个字段定义表，和一个方法定义表等</p><p>反射提供了封装程序集、模块和类型的对象（<code>Type</code> 类型），可以使用反射动态创建类型的实例，将类型绑定到现有对象，或从现有对象获取类型并调用其方法或访问其字段和属性。如果代码中使用了属性，可以利用反射对它们进行访问</p><blockquote><p>实际上</p></blockquote><p>反射是微软封装的一个帮助类库：<code>using System.Reflection;</code></p><h3 id="_1-2-反射用途" tabindex="-1"><a class="header-anchor" href="#_1-2-反射用途" aria-hidden="true">#</a> 1.2 反射用途</h3><ul><li>使用<code>Assembly</code>定义和加载程序集，加载在程序集清单中列出模块，以及从此程序集中查找类型并创建该类型的实例</li><li>使用<code>Module</code>了解包含模块的程序集以及模块中的类等，还可以获取在模块上定义的所有全局方法或其他特定的非全局方法</li><li>使用<code>ConstructorInfo</code>了解构造函数的名称、参数、访问修饰符（如<code>pulic</code> 或<code>private</code>）和实现详细信息（如<code>abstract</code>或<code>virtual</code>）等；使用<code>Type</code>的<code>GetConstructors</code>或<code>GetConstructor</code>方法来调用特定的构造函数</li><li>使用<code>MethodInfo</code>了解方法的名称、返回类型、参数、访问修饰符（如<code>pulic</code> 或<code>private</code>）和实现详细信息（如<code>abstract</code>或<code>virtual</code>）等；使用<code>Type</code>的<code>GetMethods</code>或<code>GetMethod</code>方法来调用特定的方法</li><li>使用<code>FiedInfo</code>了解字段的名称、访问修饰符（如<code>public</code>或<code>private</code>）和实现详细信息（如<code>static</code>）等，并获取或设置字段值。</li><li>使用<code>EventInfo</code>了解事件的名称、事件处理程序数据类型、自定义属性、声明类型和反射类型等，添加或移除事件处理程序。</li><li>使用<code>PropertyInfo</code>了解属性的名称、数据类型、声明类型、反射类型和只读或可写状态等，获取或设置属性值</li><li>使用<code>ParameterInfo</code>了解参数的名称、数据类型、是输入参数还是输出参数，以及参数在方法签名中的位置等</li></ul><h3 id="_1-3-反射常用类" tabindex="-1"><a class="header-anchor" href="#_1-3-反射常用类" aria-hidden="true">#</a> 1.3 反射常用类</h3><p>反射是一个程序集发现及执行的过程，通过反射能够得到 <code>.exe</code> 或<code>.dll</code> 等程序集内部的信息，使用反射能够看到一个程序集内部的接口、类、方法、字段、属性、特性等信息</p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">Assembly</td><td style="text-align:left;">通过此类能够载入操纵一个程序集，并获取程序集内部信息</td></tr><tr><td style="text-align:left;">FieldInfo</td><td style="text-align:left;">该类保存给定的字段信息</td></tr><tr><td style="text-align:left;">MethodInfo</td><td style="text-align:left;">该类保存给定的方法信息</td></tr><tr><td style="text-align:left;">MemberInfo</td><td style="text-align:left;">该类是一个基类，定义了EventInfo,FieldInfo,MethodInfo,PropertyInfo的多个公用行为</td></tr><tr><td style="text-align:left;">Module</td><td style="text-align:left;">该类能够使你能訪问多个程序集中的给定模块</td></tr><tr><td style="text-align:left;">ParameterInfo</td><td style="text-align:left;">该类保存给定的參数信息</td></tr><tr><td style="text-align:left;">PropertyInfo</td><td style="text-align:left;">该类保存给定的属性信息</td></tr></tbody></table><h2 id="_2-assembly-程序集对象" tabindex="-1"><a class="header-anchor" href="#_2-assembly-程序集对象" aria-hidden="true">#</a> 2. Assembly 程序集对象</h2><h3 id="_2-1-对象简介" tabindex="-1"><a class="header-anchor" href="#_2-1-对象简介" aria-hidden="true">#</a> 2.1 对象简介</h3><blockquote><p>官方文档</p></blockquote><p>程序集包含模块、模块包含类型，而类型包含成员。 反射提供封装程序集、模块和类型的对象。 可以使用反射动态地创建类型的实例，将类型绑定到现有对象，或从现有对象中获取类型</p><blockquote><p>其它文档</p></blockquote><p><code>System.Reflection.Assembly</code>：表示一个程序集</p><p>程序集是代码进行编译的一个逻辑单元，把相关的代码和类型进行组合，然后生成PE文件（例如可执行文件<code>.exe</code>和类库文件<code>.dll</code>）</p><p>由于程序集在编译后并不一定会生成单个文件，而可能会生成多个物理文件，甚至可能会生成分布在不同位置的多个物理文件，所以程序集是一个逻辑单元，而不是一个物理单元；即程序集在逻辑上是一个编译单元，但在物理储存上可以有多种存在形式</p><p>对于静态程序集可以生成单个或多个文件，而动态程序集是存在于内存中的</p><p>在C#中程序集处处可见，因为任何基于.NET的代码在编译时都至少存在一个程序集（所有.NET项目都会默认引用<code>mscorlib</code>程序集）</p><p>程序集包含了两种文件：可执行文件（<code>.exe</code>文件）和 类库文件（<code>.dll</code>文件）</p><p>在VS开发环境中，一个解决方案可以包含多个项目，而每个项目就是一个程序集</p><h3 id="_2-2-应用程序结构" tabindex="-1"><a class="header-anchor" href="#_2-2-应用程序结构" aria-hidden="true">#</a> 2.2 应用程序结构</h3><p>包含应用程序域（<code>AppDomain</code>），程序集（<code>Assembly</code>），模块（<code>Module</code>），类型（<code>Type</code>），成员（<code>EventInfo、FieldInfo、MethodInfo、PropertyInfo</code>） 几个层次</p>',26),u={href:"https://img2020.cnblogs.com/blog/1446823/202108/1446823-20210805203304924-460469547.png",target:"_blank",rel:"noopener noreferrer"},v=e("img",{src:"https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1446823-20210805203304924-460469547.png",alt:"img",loading:"lazy"},null,-1),b=i(`<h3 id="_2-3-静态方法" tabindex="-1"><a class="header-anchor" href="#_2-3-静态方法" aria-hidden="true">#</a> 2.3 静态方法</h3><blockquote><p>常用静态方法</p></blockquote><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">返回值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">Assembly.Load</td><td style="text-align:left;">Assembly</td><td style="text-align:left;">加载相对路径下指定名称程序集</td></tr><tr><td style="text-align:left;">Assembly.LoadFile</td><td style="text-align:left;">Assembly</td><td style="text-align:left;">根据全路径获取指定程序集</td></tr><tr><td style="text-align:left;">Assembly.LoadFrom</td><td style="text-align:left;">Assembly</td><td style="text-align:left;">根据全路径获取指定程序集</td></tr></tbody></table><h3 id="_2-4-实例方法-属性" tabindex="-1"><a class="header-anchor" href="#_2-4-实例方法-属性" aria-hidden="true">#</a> 2.4 实例方法,属性</h3><blockquote><p>常用实例属性</p></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">属性值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">assembly.FullName</td><td style="text-align:left;">string</td><td style="text-align:left;">获取程序集的显示名称</td></tr><tr><td style="text-align:left;">assembly.Location</td><td style="text-align:left;">string</td><td style="text-align:left;">获取程序集的完整路径（全名称）</td></tr><tr><td style="text-align:left;">assembly.DefinedTypes</td><td style="text-align:left;">IEnumerable</td><td style="text-align:left;">获取定义在程序集中类型集合</td></tr><tr><td style="text-align:left;">assembly.Modules</td><td style="text-align:left;">IEnumerable</td><td style="text-align:left;">获取定义在程序集中模块集合</td></tr></tbody></table><blockquote><p>常用实例方法</p></blockquote><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">返回值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">assembly.GetTypes()</td><td style="text-align:left;">Type[]</td><td style="text-align:left;">获取程序集中定义的类型数组</td></tr><tr><td style="text-align:left;">assembly.GetType()</td><td style="text-align:left;">Type</td><td style="text-align:left;">获取程序集中定义的类型</td></tr><tr><td style="text-align:left;">assembly.GetExportedTypes()</td><td style="text-align:left;">Type[]</td><td style="text-align:left;">获取程序集中定义的所有公共类型（类，接口，枚举等）</td></tr><tr><td style="text-align:left;">assembly.CreateInstance()</td><td style="text-align:left;">object</td><td style="text-align:left;">根据传入类型创建类型实例</td></tr></tbody></table><h3 id="_2-5-示例-加载程序集" tabindex="-1"><a class="header-anchor" href="#_2-5-示例-加载程序集" aria-hidden="true">#</a> 2.5 示例：加载程序集</h3><blockquote><p>方式一：<code>Load</code>，<code>c2</code> 引用了 <code>Helper</code>，有引用关系</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Reflection;
using Helper;

namespace c2
{
    class Program
    {
        static void Main(string[] args)
        {
            // 相对路径下加载指定名称程序集文件
            Assembly assembly = Assembly.Load(&quot;Helper&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>示例二：<code>LoadFile</code>，<code>c2</code>与<code>taskdao</code>无引用关系</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Reflection;

namespace c2
{
    class Program
    {
        static void Main(string[] args)
        {
            // 根据全名称（路径+文件名.后缀）下加载指定名称程序集文件
            Assembly assembly = 
                Assembly.LoadFile(@&quot;E:\\SolutionZX\\taskdao\\bin\\Debug\\taskdao.dll&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>示例三：<code>LoadFrom</code>，<code>c2</code>与<code>taskdao</code>无引用关系</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Reflection;

namespace c2
{
    class Program
    {
        static void Main(string[] args)
        {
            // 根据全名称（路径+文件名.后缀）下加载指定名称程序集文件
            Assembly assembly = 
                Assembly.LoadFrom(@&quot;E:\\SolutionZX\\taskdao\\bin\\Debug\\taskdao.dll&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>示例四：根据类型创建类型实例，<code>c2</code>与<code>taskdao</code>无引用关系</p></blockquote><p><code>dynamic</code> 类型为动态类型，使用时编译器不会检查（运行时检查）</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Reflection;

namespace c2
{
    class Program
    {
        static void Main(string[] args)
        {
            
            // 根据全名称（路径+文件名.后缀）下加载指定名称程序集文件
            Assembly assembly = 
                Assembly.LoadFrom(@&quot;E:\\SolutionZX\\taskdao\\bin\\Debug\\taskdao.dll&quot;);

            // object _t = assembly.CreateInstance(&quot;task1dao.task1&quot;);
            // 报错，object类型识别不出Show方法，因为C#是强类型语言
            // _t.Show();
            
            dynamic _t = assembly.CreateInstance(&quot;task1dao.task1&quot;);
            _t.Show();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-获取类型" tabindex="-1"><a class="header-anchor" href="#_2-6-获取类型" aria-hidden="true">#</a> 2.6 获取类型</h3><blockquote><p>获取普通类型</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Assembly assembly = typeof(Program).Assembly;
Type type = assembly.GetType(&quot;c2.UserInfo&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>获取泛型类型</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Assembly assembly = typeof(Program).Assembly;
Type type = assembly.GetType(&quot;c2.UserInfo\`1&quot;);	// UserInfo\`1 英文状态下数字1左边符号，参数个数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-type-类型" tabindex="-1"><a class="header-anchor" href="#_3-type-类型" aria-hidden="true">#</a> 3. Type 类型</h2><p>在C#中可以理解为一个类对应一个<code>Type</code>对象</p><h3 id="_3-1-实例属性-方法" tabindex="-1"><a class="header-anchor" href="#_3-1-实例属性-方法" aria-hidden="true">#</a> 3.1 实例属性,方法</h3><blockquote><p>实例属性</p></blockquote>`,27),m=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"属性"),e("th",{style:{"text-align":"left"}},"属性值类型"),e("th",{style:{"text-align":"left"}},"描述")])],-1),y={style:{"text-align":"left"}},g={href:"http://type.Name",target:"_blank",rel:"noopener noreferrer"},p=e("td",{style:{"text-align":"left"}},"string",-1),f=e("td",{style:{"text-align":"left"}},"获取类型名称（类名）",-1),h=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.FullName"),e("td",{style:{"text-align":"left"}},"string"),e("td",{style:{"text-align":"left"}},"获取类全名（命名空间+类名称）")],-1),x=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.Namespace"),e("td",{style:{"text-align":"left"}},"string"),e("td",{style:{"text-align":"left"}},"获取类所在的命名空间")],-1),q=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.Assembly"),e("td",{style:{"text-align":"left"}},"string"),e("td",{style:{"text-align":"left"}},"获取类所在程序集名称")],-1),_=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.BaseType"),e("td",{style:{"text-align":"left"}},"Type"),e("td",{style:{"text-align":"left"}},"获取基类（父类）")],-1),I=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.IsSubclassOf(Type parent)"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"type是否是parent的子类")],-1),k=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.IsInstanceOfType(object o)"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"o是否是type类的对象")],-1),T=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.IsClass"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"获取对象类型是否是类")],-1),C=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.IsInterface"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"获取对象类型是否是接口")],-1),A=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.IsNotPublic"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"获取对象类型是否公开")],-1),G=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.IsAbstract"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"获取对象类型是否是抽象的")],-1),M=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.IsSealed"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"获取对象类型是否是密封的")],-1),L=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.IsArray"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"获取对象类型是否是数组")],-1),S=e("tr",null,[e("td",{style:{"text-align":"left"}},"type.IsEnum"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"获取对象类型是否是枚举")],-1),P=i(`<blockquote><p>实例方法</p></blockquote><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">返回值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">type.GetMembers()</td><td style="text-align:left;">MemberInfo[]</td><td style="text-align:left;">获取类型中所有公共成员</td></tr><tr><td style="text-align:left;">type.GetMethods()</td><td style="text-align:left;">MethodInfo[]</td><td style="text-align:left;">获取所有公共方法(包含基类)</td></tr><tr><td style="text-align:left;">type.GetConstructors()</td><td style="text-align:left;">ConstructorInfo[]</td><td style="text-align:left;">获取类型中所有公共构造函数</td></tr><tr><td style="text-align:left;">type.GetFields()</td><td style="text-align:left;">FieldInfo[]</td><td style="text-align:left;">获取所有公共字段</td></tr><tr><td style="text-align:left;">type.GetProperties()</td><td style="text-align:left;">PropertyInfo[]</td><td style="text-align:left;">获取所有公共属性</td></tr><tr><td style="text-align:left;">type.GetInterfaces()</td><td style="text-align:left;">Type[]</td><td style="text-align:left;">获取所有公共接口</td></tr><tr><td style="text-align:left;">type.GetCustomAttributes(...)</td><td style="text-align:left;">object[]</td><td style="text-align:left;">获取此类型指定特性数组</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">type.MakeGenericType(...)</td><td style="text-align:left;">Type</td><td style="text-align:left;">设置泛型类，泛型参数类型</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">type.GetMember(...)</td><td style="text-align:left;">MemberInfo[]</td><td style="text-align:left;">多个，获取公共成员(不常用)</td></tr><tr><td style="text-align:left;">type.GetMethod(...)</td><td style="text-align:left;">MethodInfo</td><td style="text-align:left;">单个，获取公共方法</td></tr><tr><td style="text-align:left;">type.GetConstructor(...)</td><td style="text-align:left;">ConstructorInfo</td><td style="text-align:left;">单个，获取公共方法</td></tr><tr><td style="text-align:left;">type.GetField(...)</td><td style="text-align:left;">FieldInfo</td><td style="text-align:left;">单个，获取公共字段</td></tr><tr><td style="text-align:left;">type.GetProperty(...)</td><td style="text-align:left;">PropertyInfo</td><td style="text-align:left;">单个，获取公共属性</td></tr><tr><td style="text-align:left;">type.GetInterface(...)</td><td style="text-align:left;">Type</td><td style="text-align:left;">单个，获取公共接口</td></tr><tr><td style="text-align:left;">type.IsDefined(...)</td><td style="text-align:left;">bool</td><td style="text-align:left;">获取此类型是否继承指定特性</td></tr><tr><td style="text-align:left;">type.GetCustomAttribute(...)</td><td style="text-align:left;">Attribute</td><td style="text-align:left;">单个，获取此类型指定特性</td></tr></tbody></table><h3 id="_3-2-操作示例一" tabindex="-1"><a class="header-anchor" href="#_3-2-操作示例一" aria-hidden="true">#</a> 3.2 操作示例一</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class Base
{

}
public interface Inta { }

public interface Intb { }

public class UserInfo&lt;A&gt; : Base, Inta, Intb
{
    #region 公共构造函数
    public UserInfo()
    {
        Console.WriteLine(&quot;无参构造方法...&quot;);
    }
    public UserInfo(int id)
    {
        Console.WriteLine(&quot;1个参数构造方法&quot;);
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
        Console.WriteLine(&quot;无参数实例方法&quot;);
    }

    public void Show()
    {
        Console.WriteLine(&quot;无参数重载实例方法&quot;);
    }
    public void Show(int id)
    {
        Console.WriteLine(&quot;有参数重载实例方法-&quot; + id.ToString());
    }
    #endregion

    #region 公共静态方法
    public static void Statc() { }
    #endregion

    #region 私有方法
    private void GetM()
    {
        Console.WriteLine(&quot;无参数私有方法&quot;);
    }
    private void GetM(int i)
    {
        Console.WriteLine(&quot;有参数私有方法-&quot; + id.ToString());
    }
    #endregion

    #region 公共泛型方法
    public void GenericC(A a)
    {
        Console.WriteLine(&quot;公共泛型无参方法:&quot; + a.ToString());
    }
    public void GenericS&lt;T&gt;()
    {
        Console.WriteLine(&quot;公共泛型无参方法&quot;);
    }

    public void GenericsA&lt;T&gt;(A a, T t)
    {
        Console.WriteLine(&quot;公共泛型有参方法：&quot; + t.ToString() + &quot;\\t&quot; + a.ToString());
    }

    #endregion
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>通过类获得对应的<code>Type</code></p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Type type = typeof(UserInfo);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>通过 <code>Assembly</code> 对象，通过类的<code>fullname</code>类获得<code>Type</code>对象</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Assembly assem = Assembly.LoadFrom(@&quot;E:\\SolutionRP\\DMO\\bin\\Debug\\DMO.dll&quot;);
Type type = assem.GetType(&quot;DMO.UserInfo&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>综合示例</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Type type = typeof(UserInfo);
Console.WriteLine(&quot;类型名:&quot; + type.Name);
Console.WriteLine(&quot;类全名：&quot; + type.FullName);
Console.WriteLine(&quot;命名空间名:&quot; + type.Namespace);
Console.WriteLine(&quot;程序集名：&quot; + type.Assembly);
Console.WriteLine(&quot;模块名:&quot; + type.Module);
Console.WriteLine(&quot;基类名：&quot; + type.BaseType);
Console.WriteLine(&quot;是否类：&quot; + type.IsClass);

MethodInfo method = type.GetMethod(&quot;Show&quot;);//获得实例的方法

Console.WriteLine(&quot;类的公共成员：&quot;);

MemberInfo[] memberInfos = type.GetMembers();//得到所有公共成员
foreach (var item in memberInfos)
{
    Console.WriteLine(&quot;成员类型：&quot; + item.MemberType + &quot;\\t成员：&quot; + item);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-示例二-获取公共方法" tabindex="-1"><a class="header-anchor" href="#_3-3-示例二-获取公共方法" aria-hidden="true">#</a> 3.3 示例二：获取公共方法</h3><blockquote><p>一：获取所有公共成员</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>static void Main(string[] args)
{
    Type type = typeof(UserInfo);

    Console.Write(&quot;获取所有公共成员：&quot;);
    MemberInfo[] members =  type.GetMembers();
    Console.WriteLine(members.Length);

    Console.Write(&quot;获取所有公共方法(包含基类)：&quot;);
    MethodInfo[] methods = type.GetMethods();
    Console.WriteLine(methods.Length);

    Console.Write(&quot;获取所有公共构造函数：&quot;);
    ConstructorInfo[] constructors = type.GetConstructors();
    Console.WriteLine(constructors.Length);

    Console.Write(&quot;获取所有公共字段：&quot;);
    FieldInfo[] fields = type.GetFields();
    Console.WriteLine(fields.Length);

    Console.Write(&quot;获取所有公共属性：&quot;);
    PropertyInfo[] properties = type.GetProperties();
    Console.WriteLine(properties.Length);

    Console.Write(&quot;获取所有公共接口：&quot;);
    Type[] interfaces = type.GetInterfaces();
    Console.WriteLine(interfaces.Length);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>根据名称获取公共成员(不常用)</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>MemberInfo[] memberInfo1 = type.GetMember(&quot;code&quot;);
MemberInfo[] memberInfo2 = type.GetMember(&quot;Show&quot;);
Console.WriteLine(memberInfo1.Length);
Console.WriteLine(memberInfo2.Length);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>根据名称获取公共方法</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// 获取公共方法（非重载方法）
MethodInfo methodInfo1 = type.GetMethod(&quot;Print&quot;);
Console.WriteLine(methodInfo1.Name);

// 获取公共重载方法，根据参数顺序，类型，个数获取
// 1.调用有一个int类型参数的重载方法
MethodInfo methodInfo2 = type.GetMethod(&quot;Show&quot;, new Type[] { typeof(int) });
// 2.调用无参数重载方法(不可传null)
MethodInfo methodInfo3 = type.GetMethod(&quot;Show&quot;, new Type[0]);
Console.WriteLine(methodInfo3.Name);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>根据参数的类型，数量，顺序返回指定构造方法</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// 返回无参公共构造方法
ConstructorInfo constructor1 = type.GetConstructor(new Type[0]);

// 返回有一个int类型参数的公共构造方法
ConstructorInfo constructor2 = type.GetConstructor(new Type[] { typeof(int) });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>获取类型公共字段</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>FieldInfo fieldInfo1 = type.GetField(&quot;code&quot;);
Console.WriteLine(fieldInfo1.Name);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>获取类型公共属性</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>PropertyInfo propertyInfo1 = type.GetProperty(&quot;id&quot;);
Console.WriteLine(propertyInfo1.Name);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-示例三-获取静态方法" tabindex="-1"><a class="header-anchor" href="#_3-4-示例三-获取静态方法" aria-hidden="true">#</a> 3.4 示例三：获取静态方法</h3><h3 id="_3-5-示例四-获取泛型方法" tabindex="-1"><a class="header-anchor" href="#_3-5-示例四-获取泛型方法" aria-hidden="true">#</a> 3.5 示例四：获取泛型方法</h3><blockquote><p>获取泛型方法</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Assembly assembly = typeof(Program).Assembly;

// 获取有一个泛型参数的类
Type type = assembly.GetType(&quot;c2.UserInfo\`1&quot;);

// 指定泛型参数类型
Type generictype = type.MakeGenericType(new Type[] { typeof(int) });

object oType = Activator.CreateInstance(generictype);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-示例五-获取特性" tabindex="-1"><a class="header-anchor" href="#_3-6-示例五-获取特性" aria-hidden="true">#</a> 3.6 示例五：获取特性</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[CustomAttribute]
public class Studen
{
    public void Show()
    {

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class CustomAttribute : Attribute
{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>static void Main(string[] args)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-methodinfo-方法" tabindex="-1"><a class="header-anchor" href="#_4-methodinfo-方法" aria-hidden="true">#</a> 4. MethodInfo 方法</h2><p>一个 <code>MethodInfo</code> 表示一个方法（公共，私有，静态，构造）</p><h3 id="_4-1-实例属性-方法" tabindex="-1"><a class="header-anchor" href="#_4-1-实例属性-方法" aria-hidden="true">#</a> 4.1 实例属性,方法</h3><blockquote><p>实例属性</p></blockquote>`,35),F=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"属性"),e("th",{style:{"text-align":"left"}},"属性值类型"),e("th",{style:{"text-align":"left"}},"描述")])],-1),w={style:{"text-align":"left"}},W={href:"http://methodInfo.Name",target:"_blank",rel:"noopener noreferrer"},j=e("td",{style:{"text-align":"left"}},"string",-1),N=e("td",{style:{"text-align":"left"}},"方法名称",-1),O=e("tr",null,[e("td",{style:{"text-align":"left"}},"methodInfo.ReturnType"),e("td",{style:{"text-align":"left"}},"Type"),e("td",{style:{"text-align":"left"}},"获取方法返回值类型")],-1),D=e("tr",null,[e("td",{style:{"text-align":"left"}},"methodInfo.IsConstructor"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"是否是构造方法")],-1),E=e("tr",null,[e("td",{style:{"text-align":"left"}},"methodInfo.IsAbstract"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"是否为抽象方法")],-1),U=e("tr",null,[e("td",{style:{"text-align":"left"}},"methodInfo.IsPrivate"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"是否为私有方法")],-1),B=e("tr",null,[e("td",{style:{"text-align":"left"}},"methodInfo.IsPublic"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"是否为公共方法")],-1),R=e("tr",null,[e("td",{style:{"text-align":"left"}},"methodInfo.IsStatic"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"是否为静态方法")],-1),V=e("tr",null,[e("td",{style:{"text-align":"left"}},"methodInfo.IsVirtual"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"是否为虚方法")],-1),Z=e("tr",null,[e("td",{style:{"text-align":"left"}},"methodInfo.IsGenericMethod"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"是否为泛型方法")],-1),H=i(`<blockquote><p>实例方法</p></blockquote><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">返回值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">methodInfo.Invoke(...)</td><td style="text-align:left;">object</td><td style="text-align:left;">调用非泛型方法</td></tr><tr><td style="text-align:left;">methodInfo.GetParameters()</td><td style="text-align:left;">ParameterInfo[]</td><td style="text-align:left;">获取方法参数数组</td></tr><tr><td style="text-align:left;">methodInfo.IsDefined(...)</td><td style="text-align:left;">bool</td><td style="text-align:left;">获取此方法是否继承指定特性</td></tr><tr><td style="text-align:left;">methodInfo.GetCustomAttribute(...)</td><td style="text-align:left;">Attribute</td><td style="text-align:left;">单个，获取指定特性</td></tr><tr><td style="text-align:left;">methodInfo.GetCustomAttributes(...)</td><td style="text-align:left;">object[]</td><td style="text-align:left;">获取此方法指定特性数组</td></tr></tbody></table><h3 id="_4-2-操作示例一" tabindex="-1"><a class="header-anchor" href="#_4-2-操作示例一" aria-hidden="true">#</a> 4.2 操作示例一</h3><blockquote><p>获取调用非泛型<strong>非重载</strong>无参数方法，无参数方法第二个参数可传<code>null</code>，但不推荐</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Type type = typeof(UserInfo);
object oType = Activator.CreateInstance(type);

MethodInfo methodInfo = null;

methodInfo = type.GetMethod(&quot;Print&quot;);

methodInfo.Invoke(oType,new object[0]);
methodInfo.Invoke(oType, null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>获取调用非泛型<strong>重载</strong>无参数方法，无参数方法第二个参数可传<code>null</code>，但不推荐</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Type type = typeof(UserInfo);
object oType = Activator.CreateInstance(type);

MethodInfo methodInfo = null;

methodInfo = type.GetMethod(&quot;Show&quot;,new Type[0]);
methodInfo.Invoke(oType,new object[0]);
methodInfo.Invoke(oType, null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>获取调用非泛型<strong>重载</strong>有参数方法，多个参数用逗号隔开，参数类型，个数，顺序必须相同</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Type type = typeof(UserInfo);
object oType = Activator.CreateInstance(type);

MethodInfo methodInfo = null;

methodInfo = type.GetMethod(&quot;Show&quot;, new Type[] { typeof(int) });
methodInfo.Invoke(oType, new object[] { 1 });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-操作示例二" tabindex="-1"><a class="header-anchor" href="#_4-3-操作示例二" aria-hidden="true">#</a> 4.3 操作示例二</h3><p>获取泛型方法与获取普通方法一致，泛型参数按从左到右顺序传入，方法参数类型与泛型参数类型一致</p><blockquote><p>调用公共泛型无参方法</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// 获取泛型方法
MethodInfo methodInfo = type.GetMethod(&quot;GenericS&quot;);
// 指定泛型方法参数
MethodInfo genericmethod = methodInfo.MakeGenericMethod(new Type[] { typeof(int) });

genericmethod.Invoke(oType, null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>调用公共泛型有参方法</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>MethodInfo methodInfo = type.GetMethod(&quot;GenericsA&quot;);
MethodInfo genericsmethod = 
    methodInfo.MakeGenericMethod(new Type[] { typeof(int), typeof(string) });
genericsmethod.Invoke(oType, new object[] { 1 });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>调用公共泛型类的有参方法，泛型类中的泛型参数与泛型方法的泛型参数一致</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>static void Main(string[] args)
{
    Assembly assembly = typeof(Program).Assembly;
    Type type = assembly.GetType(&quot;c2.UserInfo\`1&quot;);

    Type generictype = type.MakeGenericType(new Type[] { typeof(int) });

    object oType = Activator.CreateInstance(generictype);

    MethodInfo methodInfo = generictype.GetMethod(&quot;GenericC&quot;);
    methodInfo.Invoke(oType, new object[] { 1 });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>调用公共泛型类的有参方法，泛型类中的泛型参数与泛型方法的泛型参数不一致</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>static void Main(string[] args)
{
    Assembly assembly = typeof(Program).Assembly;
    Type type = assembly.GetType(&quot;c2.UserInfo\`1&quot;);

    Type generictype = type.MakeGenericType(new Type[] { typeof(int) });

    object oType = Activator.CreateInstance(generictype);

    MethodInfo methodInfo = generictype.GetMethod(&quot;GenericsA&quot;);
    MethodInfo genericsmethodinfo = 
        methodInfo.MakeGenericMethod(new Type[] { typeof(string) });
    genericsmethodinfo.Invoke(oType, new object[] { 2, &quot;af&quot; });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-constructorinfo-构造函数" tabindex="-1"><a class="header-anchor" href="#_5-constructorinfo-构造函数" aria-hidden="true">#</a> 5. ConstructorInfo 构造函数</h2><h3 id="_5-1-实例属性-方法" tabindex="-1"><a class="header-anchor" href="#_5-1-实例属性-方法" aria-hidden="true">#</a> 5.1 实例属性,方法</h3><blockquote><p>实例方法</p></blockquote><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">返回值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">constructor.Invoke(...)</td><td style="text-align:left;">object</td><td style="text-align:left;">执行构造函数</td></tr><tr><td style="text-align:left;">constructor.IsDefined(...)</td><td style="text-align:left;">bool</td><td style="text-align:left;">获取此构造函数是否继承指定特性</td></tr><tr><td style="text-align:left;">constructor.GetCustomAttribute(...)</td><td style="text-align:left;">Attribute</td><td style="text-align:left;">单个，获取指定特性</td></tr><tr><td style="text-align:left;">constructor.GetCustomAttributes(...)</td><td style="text-align:left;">object[]</td><td style="text-align:left;">获取此构造函数指定特性数组</td></tr></tbody></table><h3 id="_5-2-操作实例一" tabindex="-1"><a class="header-anchor" href="#_5-2-操作实例一" aria-hidden="true">#</a> 5.2 操作实例一</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public class User
{
    public User()
    {
        Console.WriteLine(&quot;无参构造函数&quot;);
    }
    public User(string n)
    {
        Console.WriteLine(&quot;有参构造函数：&quot; + n);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>调用构造函数</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>static void Main(string[] args)
{
    Assembly assembly = typeof(Program).Assembly;
    Type type = assembly.GetType(&quot;c2.User&quot;);

    object oType = Activator.CreateInstance(type);


    ConstructorInfo constructor = type.GetConstructor(new Type[0]);
    constructor.Invoke(oType, null);

    ConstructorInfo constructor1 = type.GetConstructor(new Type[] { typeof(string) });
    constructor1.Invoke(oType, new object[] { &quot;liai&quot; });

    ParameterInfo[] parameters = constructor1.GetParameters();
    Console.WriteLine(parameters.Length);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-propertyinfo-属性" tabindex="-1"><a class="header-anchor" href="#_6-propertyinfo-属性" aria-hidden="true">#</a> 6. PropertyInfo 属性</h2><h3 id="_6-1-实例属性-方法" tabindex="-1"><a class="header-anchor" href="#_6-1-实例属性-方法" aria-hidden="true">#</a> 6.1 实例属性,方法</h3><blockquote><p>实例属性</p></blockquote>`,30),X=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"属性"),e("th",{style:{"text-align":"left"}},"属性值类型"),e("th",{style:{"text-align":"left"}},"描述")])],-1),z={style:{"text-align":"left"}},Y={href:"http://property.Name",target:"_blank",rel:"noopener noreferrer"},$=e("td",{style:{"text-align":"left"}},"string",-1),J=e("td",{style:{"text-align":"left"}},"获取属性名称",-1),K=e("tr",null,[e("td",{style:{"text-align":"left"}},"property.CanRead"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"获取属性是否可读")],-1),Q=e("tr",null,[e("td",{style:{"text-align":"left"}},"property.CanWrite"),e("td",{style:{"text-align":"left"}},"bool"),e("td",{style:{"text-align":"left"}},"获取属性是否可写")],-1),ee=e("tr",null,[e("td",{style:{"text-align":"left"}},"property.PropertyType"),e("td",{style:{"text-align":"left"}},"Type"),e("td",{style:{"text-align":"left"}},"获取属性类型")],-1),te=i(`<blockquote><p>实例方法</p></blockquote><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">返回值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">property.SetValue(...)</td><td style="text-align:left;">void</td><td style="text-align:left;">设置对象属性</td></tr><tr><td style="text-align:left;">property.GetValue(...)</td><td style="text-align:left;">object</td><td style="text-align:left;">获取对象属性值</td></tr><tr><td style="text-align:left;">property.IsDefined(...)</td><td style="text-align:left;">bool</td><td style="text-align:left;">获取此属性是否继承指定特性</td></tr><tr><td style="text-align:left;">property.GetCustomAttribute(...)</td><td style="text-align:left;">Attribute</td><td style="text-align:left;">单个，获取指定特性</td></tr><tr><td style="text-align:left;">property.GetCustomAttributes(...)</td><td style="text-align:left;">object[]</td><td style="text-align:left;">获取此属性指定特性数组</td></tr></tbody></table><h3 id="_6-2-操作实例一" tabindex="-1"><a class="header-anchor" href="#_6-2-操作实例一" aria-hidden="true">#</a> 6.2 操作实例一</h3><blockquote><p>获取公共属性</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// 获取所有
PropertyInfo[] propertys = type.GetProperty();

// 获取指定
PropertyInfo property = type.GetProperty(&quot;no&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>获取属性，设置属性值，获取属性值</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Program
{
    static void Main(string[] args)
    {
        Assembly assembly = typeof(Program).Assembly;
        Type type = assembly.GetType(&quot;c2.Order&quot;);

        object oType = Activator.CreateInstance(type);

        PropertyInfo property = type.GetProperty(&quot;no&quot;);

        property.SetValue(oType,1);

        var value = property.GetValue(oType);
        Console.WriteLine(value);
    }
}


public class Order
{
    public int no { get; set; }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-fieldinfo-字段" tabindex="-1"><a class="header-anchor" href="#_7-fieldinfo-字段" aria-hidden="true">#</a> 7. FieldInfo 字段</h2><h3 id="_7-1-实例属性-方法" tabindex="-1"><a class="header-anchor" href="#_7-1-实例属性-方法" aria-hidden="true">#</a> 7.1 实例属性,方法</h3><blockquote><p>实例属性</p></blockquote>`,10),ne=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"属性名"),e("th",{style:{"text-align":"left"}},"属性值类型"),e("th",{style:{"text-align":"left"}},"描述")])],-1),le={style:{"text-align":"left"}},ie={href:"http://field.Name",target:"_blank",rel:"noopener noreferrer"},de=e("td",{style:{"text-align":"left"}},"string",-1),se=e("td",{style:{"text-align":"left"}},"获取字段名称",-1),ae={style:{"text-align":"left"}},re={href:"http://field.Is",target:"_blank",rel:"noopener noreferrer"},oe=e("td",{style:{"text-align":"left"}},"bool",-1),ce=e("td",{style:{"text-align":"left"}},"获取字段是否为...",-1),ue=e("tr",null,[e("td",{style:{"text-align":"left"}},"field.FieldType"),e("td",{style:{"text-align":"left"}},"Type"),e("td",{style:{"text-align":"left"}},"获取字段类型")],-1),ve=i(`<blockquote><p>实例方法</p></blockquote><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">返回值类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">field.IsDefined(...)</td><td style="text-align:left;">bool</td><td style="text-align:left;">获取此字段是否继承指定特性</td></tr><tr><td style="text-align:left;">field.GetCustomAttribute(...)</td><td style="text-align:left;">Attribute</td><td style="text-align:left;">单个，获取指定特性</td></tr><tr><td style="text-align:left;">field.GetCustomAttributes(...)</td><td style="text-align:left;">object[]</td><td style="text-align:left;">获取此字段指定特性数组</td></tr></tbody></table><h3 id="_7-2-操作实例一" tabindex="-1"><a class="header-anchor" href="#_7-2-操作实例一" aria-hidden="true">#</a> 7.2 操作实例一</h3><blockquote><p>获取字段</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Program
{
    static void Main(string[] args)
    {
        Assembly assembly = typeof(Program).Assembly;
        Type type = assembly.GetType(&quot;c2.Order&quot;);

        object oType = Activator.CreateInstance(type);

        FieldInfo field = type.GetField(&quot;name&quot;);
        
        FieldInfo[] fields = type.GetFields();
    }
}


public class Order
{
    public string name;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>获取值，设置值</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>class Program
{
    static void Main(string[] args)
    {
        Assembly assembly = typeof(Program).Assembly;
        Type type = assembly.GetType(&quot;c2.Order&quot;);

        object oType = Activator.CreateInstance(type);

        FieldInfo field = type.GetField(&quot;name&quot;);
        field.SetValue(oType, &quot;libai&quot;);

        var value = field.GetValue(oType);
        Console.WriteLine(value);
    }
}


public class Order
{
    public string name;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-扩展补充" tabindex="-1"><a class="header-anchor" href="#_8-扩展补充" aria-hidden="true">#</a> 8. 扩展补充</h2><h3 id="_8-1-加载程序集" tabindex="-1"><a class="header-anchor" href="#_8-1-加载程序集" aria-hidden="true">#</a> 8.1 加载程序集</h3><blockquote><p>获得当前【应用程序域】中的所有程序集</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Assembly[] ass = AppDomain.CurrentDomain.GetAssemblies();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>获得当前对象所属的类所在的程序集</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Assembly assembly = this.GetType().Assembly;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>Assembly.LoadFile</code> 与 <code>Assembly.LoadFrom</code>的差别</p></blockquote><ul><li><code>LoadFile</code> 方法用来载入和检查具有同样标识但位于不同路径中的程序集，但不会载入程序的依赖项</li><li><code>LoadFrom</code> 不能用于载入标识同样但路径不同的程序集</li></ul><blockquote><p>创建实例对象</p></blockquote><p>此方法的作用与 <code>new</code> 一个实例对象相同</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Activator.CreateInstance(type)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-2-module-程序集模块" tabindex="-1"><a class="header-anchor" href="#_8-2-module-程序集模块" aria-hidden="true">#</a> 8.2 Module 程序集模块</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Assembly assembly = Assembly.Load(&quot;mscorlib&quot;);//加载程序集
Module module = assembly.GetModule(&quot;CommonLanguageRuntimeLibrary&quot;);//得到指定模块
Console.WriteLine(&quot;模块名：&quot; + module.Name);
Type[] types = module.FindTypes(Module.FilterTypeName, &quot;Assembly*&quot;);
foreach (var item in types)
{
    Console.WriteLine(&quot;类名：&quot; + item.Name);//输出类型名
}

Console.Read();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-bindingflags说明" tabindex="-1"><a class="header-anchor" href="#_8-3-bindingflags说明" aria-hidden="true">#</a> 8.3 BindingFlags说明</h3><table><thead><tr><th style="text-align:left;">枚举值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">BindingFlags.Instance</td><td style="text-align:left;">对象实例</td></tr><tr><td style="text-align:left;">BindingFlags.Static</td><td style="text-align:left;">静态成员</td></tr><tr><td style="text-align:left;">BindingFlags.Public</td><td style="text-align:left;">指可在搜索中包含公共成员</td></tr><tr><td style="text-align:left;">BindingFlags.NonPublic</td><td style="text-align:left;">指可在搜索中包含非公共成员（即私有成员和受保护的成员）</td></tr><tr><td style="text-align:left;">BindingFlags.FlattenHierarchy</td><td style="text-align:left;">指可包含层次结构上的静态成员</td></tr><tr><td style="text-align:left;">BindingFlags.IgnoreCase</td><td style="text-align:left;">表示忽略 name 的大小写</td></tr><tr><td style="text-align:left;">BindingFlags.DeclaredOnly</td><td style="text-align:left;">仅搜索 Type 上声明的成员，而不搜索被简单继承的成员</td></tr><tr><td style="text-align:left;">BindingFlags.CreateInstance</td><td style="text-align:left;">表示调用构造函数。忽略 name。对其他调用标志无效</td></tr></tbody></table><h3 id="_8-4-属性应用-orm" tabindex="-1"><a class="header-anchor" href="#_8-4-属性应用-orm" aria-hidden="true">#</a> <strong>8.4 属性应用：ORM</strong></h3><blockquote><p>简易实现</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public Order Find(int id)
{
    string sql = &quot;select id,name,createTime from order where id = &quot; +id;

    Type type = typeof(Order);
    object oOrder = Activator.CreateInstance(type);

    using (SqlConnection connection = new SqlConnection(&quot;constr&quot;))
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>泛型版本</p></blockquote><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public T Find&lt;T&gt;(int id) where T : BaseEntity
{
    string sql = &quot;select id,name,createTime from order where id = &quot; + id;

    Type type = typeof(T);
    object oOrder = Activator.CreateInstance(type);

    using (SqlConnection connection = new SqlConnection(&quot;constr&quot;))
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转载说明" tabindex="-1"><a class="header-anchor" href="#转载说明" aria-hidden="true">#</a> 转载说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>本文作者： Mr.wei
本文链接： https://www.cnblogs.com/weiyongguang/p/15105287.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function be(me,ye){const t=r("ExternalLinkIcon");return s(),a("div",null,[c,e("p",null,[e("a",u,[v,n(t)])]),b,e("table",null,[m,e("tbody",null,[e("tr",null,[e("td",y,[e("a",g,[l("type.Name"),n(t)])]),p,f]),h,x,q,_,I,k,T,C,A,G,M,L,S])]),P,e("table",null,[F,e("tbody",null,[e("tr",null,[e("td",w,[e("a",W,[l("methodInfo.Name"),n(t)])]),j,N]),O,D,E,U,B,R,V,Z])]),H,e("table",null,[X,e("tbody",null,[e("tr",null,[e("td",z,[e("a",Y,[l("property.Name"),n(t)])]),$,J]),K,Q,ee])]),te,e("table",null,[ne,e("tbody",null,[e("tr",null,[e("td",le,[e("a",ie,[l("field.Name"),n(t)])]),de,se]),e("tr",null,[e("td",ae,[e("a",re,[l("field.Is"),n(t)]),l("...")]),oe,ce]),ue])]),ve])}const pe=d(o,[["render",be],["__file","reflect.html.vue"]]);export{pe as default};
