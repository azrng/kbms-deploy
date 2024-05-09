import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as l,b as s,e as n,f as e,d as t}from"./app-D8HBJYTp.js";const o={},u=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>资源管理(尤其是内存回收)曾经是程序员的噩梦，不过在<code>.Net</code>平台中这个已经好多了，因为CLR在后台为垃圾回收做了很多事情<code>C#</code>语言中的每一个类型都代表一种资源，而这些资源又分为两类：托管资源和非托管资源。</p><h3 id="托管资源" tabindex="-1"><a class="header-anchor" href="#托管资源"><span>托管资源</span></a></h3><p>托管资源一般是指被CLR控制的内存资源，这些资源的管理可以由CLR来控制，例如程序中分配的对象，作用域内的变量等，大部分都是托管资源。由CLR管理分配和释放的资源。该类型的资源通过<strong>GC来进行自动回收</strong>。</p><h3 id="非托管资源" tabindex="-1"><a class="header-anchor" href="#非托管资源"><span>非托管资源</span></a></h3><p>不受CLR管理的对象，需要调用硬件处理的资源，如Windows内核对象，或者文件、数据库连接、套接字、COM对象等。 典型的就是IO操作，比如文件操作是磁盘，网络操作就是网卡，这些需要和独立设备通信。但是这些设备和当前程序本身并无关系，比如网卡和硬盘都是系统级别调度。所以这些资源不是CLR可以管理的，CLR只是负责类似信号传递，比如打开、关闭。所以要通知系统或者外在运行容器进行真正的处理这些通道。(摘抄自某群)，<strong>非托管资源需要自己继承IDisposable来释放资源</strong></p><h2 id="非托管资源的释放" tabindex="-1"><a class="header-anchor" href="#非托管资源的释放"><span>非托管资源的释放</span></a></h2><h3 id="显式释放资源" tabindex="-1"><a class="header-anchor" href="#显式释放资源"><span>显式释放资源</span></a></h3><p>如果我们的类型使用到了非托管资源，或者需要显式地释放托管资源，那么就需要让该类型继承接口IDisposable。这相当于告诉调用者：类型对象是需要显式释放资源的，你需要调用类型的Dispose方法(<strong>Dispose方法本身并没有释放托管内存，只有在垃圾回收的时候才会释放托管内存</strong>)。一个标准的继承了IDisposable接口的类型应该像下面这样去实现。这种实现我们称为Dispose模式：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SampleClass</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDisposable</span></span>
<span class="token punctuation">{</span>
	<span class="token comment">//演示创建一个非托管资源   </span>
	<span class="token keyword">private</span> <span class="token class-name">IntPtr</span> nativeResource <span class="token operator">=</span> Marshal<span class="token punctuation">.</span><span class="token function">AllocHGlobal</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//演示创建一个托管资源  </span>
	<span class="token keyword">private</span> <span class="token class-name">AnotherResource</span> managedResource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AnotherResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">bool</span></span> disposed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span>   </span>
	<span class="token doc-comment comment">///实现IDisposable中的Dispose方法    </span>
	<span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span>    </span>
	<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//必须为true      </span>
		<span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//通知垃圾回收机制不再调用终结器(析构器)      </span>
		GC<span class="token punctuation">.</span><span class="token function">SuppressFinalize</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span>   </span>
	<span class="token doc-comment comment">///不是必要的,提供一个Close方法仅仅是为了更符合其他语言(如C++)的规范    </span>
	<span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span>   </span>
	<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>    

    <span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span>  </span>
    <span class="token doc-comment comment">/// 必需的,防止程序员忘记了显式调用Dispose方法    </span>
    <span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span>    </span>
    ～<span class="token function">SampleClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//必须为false       </span>
		<span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span>    </span>
	<span class="token doc-comment comment">///非密封类修饰用protected virtual    </span>
	<span class="token doc-comment comment">///密封类修饰用private    </span>
	<span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span>   </span>
	<span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disposing<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span>  </span>
	<span class="token keyword">protected</span> <span class="token keyword">virtual</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">bool</span></span> disposing<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>disposed<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>disposing<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">//清理托管资源    </span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>managedResource <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				managedResource<span class="token punctuation">.</span><span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//清理非托管资源       </span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nativeResource <span class="token operator">!=</span> IntPtr<span class="token punctuation">.</span>Zero<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			Marshal<span class="token punctuation">.</span><span class="token function">FreeHGlobal</span><span class="token punctuation">(</span>nativeResource<span class="token punctuation">)</span><span class="token punctuation">;</span>
			nativeResource <span class="token operator">=</span> IntPtr<span class="token punctuation">.</span>Zero<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//让类型知道自己已经被释放    </span>
		disposed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SamplePublicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>disposed<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ObjectDisposedException</span><span class="token punctuation">(</span><span class="token string">&quot;SampleClass&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;SampleClass is   disposed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//省略 xxx  </span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用到该类型，那么就需要手动去释放资源，比如</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var sample = new SampleClass();
sample.SamplePublicMethod();
sample.Dispose();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用using语法糖来更便利释放，比如如果像下面这样使用using，编译器会自动为我们生成调用Dispose方法的IL代码：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">SampleClass</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SampleClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//省略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="终结器隐式清理" tabindex="-1"><a class="header-anchor" href="#终结器隐式清理"><span>终结器隐式清理</span></a></h3><p>在标准的Dispose模式中，我们注意到一个以<code>~</code>开头的方法，这个就是终结器，如下所示：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">///必须,防止程序员忘记了显式调用Dispose方法</span>
<span class="token doc-comment comment">///<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>

～<span class="token function">SampleClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//必须为false   </span>
	<span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法叫做类型的终结器。提供终结器的意义在于：我们不能奢望调用者肯定会主动调用Dispose方法，基于终结器会被垃圾回收器调用这个特点，它被用作资源释放的补救措施，避免忘记显示释放。</p><p>在<code>.Net</code>中每次使用new操作符创建对象的时候，CLR都会为该对象在堆上分配内存，一旦这些对象不再被引用，就会回收它们的内存。对于没有继承<code>IDisposable</code>接口的类型对象，垃圾回收器则会直接释放对象所占用的内存；而对于实现了<code>Dispose</code>模式的类型，在每次创建对象的时候，CLR都会将该对象的一个指针放到终结列表中，垃圾回收器在回收该对象的内存前，会首先将终结列表中的指针放到一个freachable队列中。同时，CLR还会分配专门的线程读取freachable队列，并调用对象的终结器，只有到这个时候，对象才会真正被标识为垃圾，并且在下一次进行垃圾回收时释放对象占用的内存。所以实现了Dispose模式的类型对象，起码要经过两次垃圾回收才能真正地被回收掉，因为垃圾回收机制会首先安排CLR调用终结器。基于这个特点，如果我们的类型提供了显式释放的方法来减少一次垃圾回收，同时也可以在终结器中提供隐式清理，以避免调用者忘记调用该方法而带来的资源泄漏。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>有些文章中，终结器也叫做析构器，这个叫法是<code>C++</code>中的称呼，在<code>C#</code>中这个名称叫做终结器</p></div><p>还需要注意的是，如果调用者已经调用了<code>Dispose</code>方法进行了显示地资源释放，那么隐式释放资源(终结器)就没有必要运行了，所以可以使用<code>GC</code>提供的静态方法<code>SuppressFinalize</code>来通知垃圾回收器这一点，示例如下</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>   
    <span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">// 通知垃圾回收机制不再调用终结器(析构器)    </span>
    GC<span class="token punctuation">.</span><span class="token function">SuppressFinalize</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该代码中第三行进行正常的资源回收，第四行则通知垃圾回收器，不要在调用该类型的终结器了</p>`,23),d={href:"https://mp.weixin.qq.com/s/3G59r0W8x-_rvL8gUdXAGw",target:"_blank",rel:"noopener noreferrer"},r=t(`<h3 id="dispose方法多次调用" tabindex="-1"><a class="header-anchor" href="#dispose方法多次调用"><span>Dispose方法多次调用</span></a></h3><p>:::</p><p>Dispose 不是用来给你回收内存用的，只是用来释放非托管资源的。在 Dispose 方法里把成员设为 null，并不会导致更快的内存释放。</p><p>:::</p><p>一个类型中的<code>Dispose</code>方法应该被允许多次调用而不会抛出异常，所以需要增加一个私有的布尔类型变量<code>disposed</code>，如下所示</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>private bool disposed = false;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在实际清理的地方加入了下面的判断语句</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>if (disposed)
{
    return;
}


// 省略清理部分的代码，并且在清理结束的时候设置disposed的值为true

disposed = true; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着如果已经被清理过了，那么就不需要再次进行了，并且如果对象被调用过<code>Dispose</code>方法，那么该对象的公开方法应该就不能使用了，所以当被调用的时候应该排除一个对象已经被释放的异常，比如</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public void SamplePublicMethod()
{
    if (disposed)
    {
        throw new ObjectDisposedException(&quot;SampleClass&quot;, &quot;SampleClass is   disposed&quot;);
    }
    
    //省略 xxx
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dispose方法应提供一个虚方法" tabindex="-1"><a class="header-anchor" href="#dispose方法应提供一个虚方法"><span>Dispose方法应提供一个虚方法</span></a></h3><p>在标准的Dispose中，真正实现<code>IDisposable</code>接口的<code>Dispose</code>方法并没有做实际的清理工作，其实是调用下面那个带布尔参数且受保护的虚方法</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>protected virtual void Dispose(bool disposing)
{
   // 省略
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是考虑到这个类型或许会被其他类集成的情况下，如果子类也许会实现自己的<code>Dispose</code>模式。受保护的虚方法用来提醒子类：<strong>必须在实现自己清理方法的时候注意到父类的清理工作，也就是说自己的释放方法中需要调用<code>base.Dispose</code>方法</strong>，比如下面的示例代码</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class DerivedSampleClass : SampleClass
{
    // 子类的非托管资源
    private IntPtr derivedNativeResource = Marshal.AllocHGlobal(100);

    // 子类的托管资源
    private AnotherResource derviedMangedResource = new AnotherResource();

    // 定义自己的是否释放的标识变量
    private bool derivedDisposed = false;

    protected virtual void Dispose(bool disposing)
    {
        if (derivedDisposed)
            return;

        if (disposing)
        {
            // 清理托管资源
            if (derviedMangedResource != null)
            {
                derviedMangedResource.Dispose();
            }

            //清理非托管资源       
            if (derivedNativeResource != IntPtr.Zero)
            {
                Marshal.FreeHGlobal(derivedNativeResource);
                derivedNativeResource = IntPtr.Zero;
            }

            // 调用父类的清理代码
            base.Dispose(disposing);

            //让类型知道自己已经被释放    
            derivedDisposed = true;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不提供这个受保护的虚方法，很有可能开发者设计子类的时候忽略掉父类的清理工作</p><h2 id="终结器" tabindex="-1"><a class="header-anchor" href="#终结器"><span>终结器</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>终结器的可以用来是避免忘记手动释放非托管资源的一个保险措施</p></div><p>终结器就是在对象被回收之前执行的一段代码，它可以用来释放非托管资源，如文件句柄、数据库连接等。但是，终结器也会延迟对象的回收，增加内存占用和垃圾回收的时间。</p><p>如果对象有终结器，那么在对象从内存中释放之前，会执行终结器。在进行垃圾回收的时候，没有终结器的对象会直接被删除，有(挂起或者未执行的)终结器的对象在当时会保持存活，并被放到一个特殊的队列中。终结器甚至可以在对象构造器时候抛出异常时调用，因此需要注意，在编写终结器的时候，对象的字段可能并没有初始化完毕。</p><h3 id="终结器代价" tabindex="-1"><a class="header-anchor" href="#终结器代价"><span>终结器代价</span></a></h3><ul><li>会降低内存分配和回收的速度(<code>GC</code>需要对终结器的执行进行追踪)</li><li>终结器延长了对象和该对象所引用的对象的生命周期，任何带有终结器的类都会被垃圾回收器自动提升到新一代(他们必须等到下一次垃圾回收的时候才会被真正的删除)</li><li>无法预测多个对象的终结器调用的顺序</li><li>开发者对于终结器调用的时机只有非常有限的控制能力</li><li>如果一个终结器的代码阻塞，则其他对象也无法终结</li><li>如果应用程序没有被完全卸载，则对象的终结器也可能无法得以执行。</li></ul><h3 id="终结器类" tabindex="-1"><a class="header-anchor" href="#终结器类"><span>终结器类</span></a></h3><p>创建一个包含终结器的类</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonWithFinalizer</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> BirthDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token operator">~</span><span class="token function">PersonWithFinalizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 终结器执行逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>终结器无法声明为public或者static，无法拥有参数，无法调用基类。</p></blockquote><h3 id="基准测试" tabindex="-1"><a class="header-anchor" href="#基准测试"><span>基准测试</span></a></h3><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// 终结器测试</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">[</span><span class="token function">GcForce</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">MemoryDiagnoser</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Orderer</span><span class="token attribute-arguments"><span class="token punctuation">(</span>SummaryOrderPolicy<span class="token punctuation">.</span>FastestToSlowest<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FinalizersTest</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Params</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token number">1_000</span><span class="token punctuation">,</span> <span class="token number">10_000</span><span class="token punctuation">,</span> <span class="token number">100_000</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> _n<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Person</span> _person<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">PersonWithFinalizer</span> _personWithFinalizer<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Person2</span> _person2<span class="token punctuation">;</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Benchmark</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">PersonTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> _n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            _person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Benchmark</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">PersonWithFinalizerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> _n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            _personWithFinalizer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">PersonWithFinalizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Benchmark</span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Person2WithIDisposable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> _n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            _person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Person2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> BirthDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonWithFinalizer</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> BirthDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token operator">~</span><span class="token function">PersonWithFinalizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Do something</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带终结器的类会慢很多，并且涉及到了gc 1代回收。</p><h4 id="优化措施" tabindex="-1"><a class="header-anchor" href="#优化措施"><span>优化措施</span></a></h4><p>可以让 PersonWithFinalizer 类实现 IDisposable 接口的 Dispose 方法来替代终结器：</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDisposable</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">bool</span></span> _disposed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> BirthDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        GC<span class="token punctuation">.</span><span class="token function">SuppressFinalize</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">virtual</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">bool</span></span> disposing<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_disposed<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>disposing<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 释放托管资源</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 释放非托管资源</span>

            _disposed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>在使用 .NET 时，应尽量避免使用终结器（Finalizer）的原因有以下几个：</p><ol><li>不可控性：终结器的执行时间是不可控的，而且不同的垃圾收集器实现会有不同的终结器执行策略，这可能会导致程序行为不稳定或不可预测。</li><li>性能问题：终结器的执行需要垃圾收集器进行两次扫描，一次是标记阶段，一次是清理阶段，这会导致额外的性能开销。而且，如果有多个对象需要被终结，它们的终结器会被串行执行，可能会导致长时间的停顿。</li><li>内存泄漏：终结器可能会导致内存泄漏。因为对象的终结器只有在垃圾收集器扫描到对象并判断其不再被引用时才会执行，所以如果对象被引用但没有被垃圾收集器扫描到，它的终结器就不会执行，这可能会导致资源没有正确释放，从而导致内存泄漏。</li><li>可替代性：终结器的功能可以使用更可控和更可预测的方式替代。比如使用 IDisposable 接口来释放资源，或者使用最新的异步资源释放 API（IAsyncDisposable）。</li></ol><p>因此，为了确保程序的可靠性和性能，建议尽量避免使用终结器，在资源释放方面选择更可控和更可预测的方式。</p><h2 id="内存泄漏" tabindex="-1"><a class="header-anchor" href="#内存泄漏"><span>内存泄漏</span></a></h2><h3 id="非托管内存泄漏" tabindex="-1"><a class="header-anchor" href="#非托管内存泄漏"><span>非托管内存泄漏</span></a></h3><p>在c++这种非托管语言中，开发者需要牢记在对象不再使用的时候手动释放内存，否则就会内存泄露。在托管语言中，CLR有自动的垃圾回收系统，这种类型的错误一般不会发生。</p><h3 id="何时会发生内存泄露" tabindex="-1"><a class="header-anchor" href="#何时会发生内存泄露"><span>何时会发生内存泄露？</span></a></h3><p>应用程序在其生命周期内消耗越来越多的内存，直到最终不得不重启。</p><h3 id="诊断内存泄露" tabindex="-1"><a class="header-anchor" href="#诊断内存泄露"><span>诊断内存泄露</span></a></h3><p>最简单的避免内存泄露的方式是在编写应用程序时候主动监视内存的使用情况。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,44),k={href:"https://cat.aiursoft.cn/post/2023/3/12/net-performance-tips-why-you-should-avoid-using-finalizers",target:"_blank",rel:"noopener noreferrer"},v={href:"https://mp.weixin.qq.com/s/Pr-mHbNIbNC5KgdMl7dUFw",target:"_blank",rel:"noopener noreferrer"};function m(b,h){const a=i("ExternalLinkIcon");return c(),l("div",null,[u,s("p",null,[n("资料："),s("a",d,[n("https://mp.weixin.qq.com/s/3G59r0W8x-_rvL8gUdXAGw"),e(a)]),n(" | C#规范整理·资源管理和序列化")]),r,s("p",null,[n(".NET 性能技巧：为什么你应该避免使用终结器 Finalizer？："),s("a",k,[n("https://cat.aiursoft.cn/post/2023/3/12/net-performance-tips-why-you-should-avoid-using-finalizers"),e(a)]),s("a",v,[n("https://mp.weixin.qq.com/s/Pr-mHbNIbNC5KgdMl7dUFw"),e(a)]),n(" | .Net析构函数再论(源码剖析)")])])}const w=p(o,[["render",m],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/dotnet/csharp/objectDestruction/","title":"说明","lang":"zh-CN","frontmatter":{"title":"说明","lang":"zh-CN","date":"2023-10-22T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["csharp"],"tag":["无"],"filename":"readme","slug":"zz9c1g","docsId":"62040929","description":"概述 资源管理(尤其是内存回收)曾经是程序员的噩梦，不过在.Net平台中这个已经好多了，因为CLR在后台为垃圾回收做了很多事情C#语言中的每一个类型都代表一种资源，而这些资源又分为两类：托管资源和非托管资源。 托管资源 托管资源一般是指被CLR控制的内存资源，这些资源的管理可以由CLR来控制，例如程序中分配的对象，作用域内的变量等，大部分都是托管资源。...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/csharp/objectDestruction/"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"说明"}],["meta",{"property":"og:description","content":"概述 资源管理(尤其是内存回收)曾经是程序员的噩梦，不过在.Net平台中这个已经好多了，因为CLR在后台为垃圾回收做了很多事情C#语言中的每一个类型都代表一种资源，而这些资源又分为两类：托管资源和非托管资源。 托管资源 托管资源一般是指被CLR控制的内存资源，这些资源的管理可以由CLR来控制，例如程序中分配的对象，作用域内的变量等，大部分都是托管资源。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-05T13:41:53.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-10-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-05T13:41:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说明\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-05T13:41:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"托管资源","slug":"托管资源","link":"#托管资源","children":[]},{"level":3,"title":"非托管资源","slug":"非托管资源","link":"#非托管资源","children":[]}]},{"level":2,"title":"非托管资源的释放","slug":"非托管资源的释放","link":"#非托管资源的释放","children":[{"level":3,"title":"显式释放资源","slug":"显式释放资源","link":"#显式释放资源","children":[]},{"level":3,"title":"终结器隐式清理","slug":"终结器隐式清理","link":"#终结器隐式清理","children":[]},{"level":3,"title":"Dispose方法多次调用","slug":"dispose方法多次调用","link":"#dispose方法多次调用","children":[]},{"level":3,"title":"Dispose方法应提供一个虚方法","slug":"dispose方法应提供一个虚方法","link":"#dispose方法应提供一个虚方法","children":[]}]},{"level":2,"title":"终结器","slug":"终结器","link":"#终结器","children":[{"level":3,"title":"终结器代价","slug":"终结器代价","link":"#终结器代价","children":[]},{"level":3,"title":"终结器类","slug":"终结器类","link":"#终结器类","children":[]},{"level":3,"title":"基准测试","slug":"基准测试","link":"#基准测试","children":[{"level":4,"title":"优化措施","slug":"优化措施","link":"#优化措施","children":[]}]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"内存泄漏","slug":"内存泄漏","link":"#内存泄漏","children":[{"level":3,"title":"非托管内存泄漏","slug":"非托管内存泄漏","link":"#非托管内存泄漏","children":[]},{"level":3,"title":"何时会发生内存泄露？","slug":"何时会发生内存泄露","link":"#何时会发生内存泄露","children":[]},{"level":3,"title":"诊断内存泄露","slug":"诊断内存泄露","link":"#诊断内存泄露","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1700232644000,"updatedTime":1714916513000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":5}]},"readingTime":{"minutes":11.72,"words":3515},"filePathRelative":"dotnet/csharp/objectDestruction/readme.md","localizedDate":"2023年10月22日","excerpt":"<h2>概述</h2>\\n<p>资源管理(尤其是内存回收)曾经是程序员的噩梦，不过在<code>.Net</code>平台中这个已经好多了，因为CLR在后台为垃圾回收做了很多事情<code>C#</code>语言中的每一个类型都代表一种资源，而这些资源又分为两类：托管资源和非托管资源。</p>\\n<h3>托管资源</h3>\\n<p>托管资源一般是指被CLR控制的内存资源，这些资源的管理可以由CLR来控制，例如程序中分配的对象，作用域内的变量等，大部分都是托管资源。由CLR管理分配和释放的资源。该类型的资源通过<strong>GC来进行自动回收</strong>。</p>\\n<h3>非托管资源</h3>","autoDesc":true}');export{w as comp,f as data};
