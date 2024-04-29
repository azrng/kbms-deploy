import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,b as s}from"./app-qB9_Bjjp.js";const a={},l=s(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>FlaUI是一个.NET库，有助于Windows应用程序（Win32，WinForms，WPF，Store Apps等）的自动化UI测试。它基于 Microsoft 的本机 UI 自动化库，因此有点像它们的包装器。 FlaUI 包装了 UI 自动化库中的几乎所有内容，但也提供了本机对象，以防有人有 FlaUI 尚未涵盖的特殊需求。一些想法是从UIAComWrapper项目或TestStack.White复制的，但从头开始重写以获得干净的代码库。</p><p>仓库地址：https://github.com/FlaUI/FlaUI</p><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h2><p>安装nuget包</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FlaUI.Core<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4.0.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FlaUI.UIA3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4.0.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找窗口" tabindex="-1"><a class="header-anchor" href="#查找窗口"><span>查找窗口</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var process = Process.GetProcessesByName(&quot;WeChatAppEx&quot;).FirstOrDefault();
if (process is null)
{
    return;
}

//根据微信进程ID绑定FLAUI
var application = FlaUI.Core.Application.Attach(process.Id);
var automation = new UIA3Automation();
//获取微信window自动化操作对象
var wxWindow = application.GetMainWindow(automation);

if (wxWindow != null)
{
    if (wxWindow.AsWindow().Patterns.Window.PatternOrDefault != null)
    {
        //将微信窗体设置为默认焦点状态
        wxWindow.AsWindow().Patterns.Window.Pattern.SetWindowVisualState(WindowVisualState.Normal);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询窗口元素" tabindex="-1"><a class="header-anchor" href="#查询窗口元素"><span>查询窗口元素</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var classify = wxWindow.FindAllDescendants().FirstOrDefault(s =&gt; s.Name == &quot;分类&quot;);

var dialog = wxWindow.FindFirstDescendant(cf =&gt;
            cf.ByControlType(ControlType.Window).And(cf.ByClassName(&quot;#32770&quot;)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践"><span>实践</span></a></h2><h3 id="选择文件弹框切换目录并选择文件" tabindex="-1"><a class="header-anchor" href="#选择文件弹框切换目录并选择文件"><span>选择文件弹框切换目录并选择文件</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>// 找到文件选择对话框窗口
var dialog = wxWindow.FindFirstDescendant(cf =&gt;
    cf.ByControlType(ControlType.Window).And(cf.ByClassName(&quot;#32770&quot;)));

// 选择指定盘符  D:\\temp\\images
var selectWin =
    dialog.FindFirstChild(t =&gt; t.ByClassName(&quot;ReBarWindow32&quot;).And(t.ByControlType(ControlType.Pane)));
if (selectWin is null)
{
    &quot;选择窗体未找到&quot;.Dump();
    return;
}

var selectPath =
    selectWin.FindFirstChild(t =&gt; t.ByClassName(&quot;Address Band Root&quot;).And(t.ByControlType(ControlType.Pane)));
if (selectPath is null)
{
    &quot;未找到地址栏&quot;.Dump();
    return;
}

var progresBar = selectPath.FindFirstChild(t =&gt; t.ByClassName(&quot;msctls_progress32&quot;));
progresBar.Click();
//在编辑区域输入文本
Keyboard.Type(&quot;D:\\\\temp\\\\images&quot;);
Keyboard.Press(VirtualKeyShort.ENTER);

var treePanl =
    dialog.FindFirstChild(t =&gt; t.ByClassName(&quot;DUIViewWndClassName&quot;).And(t.ByControlType(ControlType.Pane)));
await Task.Delay(1000);
var fileView =
    treePanl.FindFirstChild(t =&gt; t.ByClassName(&quot;DUIListView&quot;).And(t.ByControlType(ControlType.Pane)));
// 找到文件列表视图控件
var fileList = fileView.FindFirstChild(t =&gt; t.ByName(&quot;项目视图&quot;).And(t.ByControlType(ControlType.List)));

// 选择指定的文件
SelectFile(fileList, &quot;D:\\\\temp\\\\images\\\\cy.png&quot;);


static void SelectFile(AutomationElement fileList, string filePath)
{
    // 找到文件列表中对应的文件项
    var fileItem = fileList.FindFirstChild(cf =&gt; cf.ByText(Path.GetFileName(filePath))
        .And(cf.ByControlType(ControlType.ListItem)));

    // 选中文件项
    fileItem.DoubleClick();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取微信好友列表" tabindex="-1"><a class="header-anchor" href="#获取微信好友列表"><span>获取微信好友列表</span></a></h3><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>void Main()
{
	var process = Process.GetProcessesByName(&quot;WeChat&quot;).FirstOrDefault();
	if (process is null)
	{
		return;
	}

	//根据微信进程ID绑定FLAUI
	var application = FlaUI.Core.Application.Attach(process.Id);
	var automation = new UIA3Automation();

	//获取微信window自动化操作对象
	var wxWindow = application.GetMainWindow(automation);

	if (wxWindow != null)
	{
		if (wxWindow.AsWindow().Patterns.Window.PatternOrDefault != null)
		{
			//将微信窗体设置为默认焦点状态
			wxWindow.AsWindow().Patterns.Window.Pattern.SetWindowVisualState(WindowVisualState.Normal);
		}
	}
	wxWindow.FindAllDescendants().Where(s =&gt; s.Name == &quot;通讯录&quot;).FirstOrDefault().Click(false);
	wxWindow.FindAllDescendants().Where(s =&gt; s.Name == &quot;新的朋友&quot;).FirstOrDefault()?.Click(false);
	string LastName = string.Empty;
	var list = new List&lt;AutomationElement&gt;();
	var sync = SynchronizationContext.Current;
	Task.Run(() =&gt;
	{
		while (true)
		{
			if (GetFriendCancellationToken.IsCancellationRequested)
			{
				break;
			}
			var all = wxWindow.FindAllDescendants();
			var allItem = all.Where(s =&gt; s.Parent != null &amp;&amp; s.Parent.Name == &quot;联系人&quot;).ToList();
			var sss = all.Where(s =&gt; s.ControlType == ControlType.Text &amp;&amp; !string.IsNullOrWhiteSpace(s.Name)).ToList();
			foreach (var item in allItem)
			{
				if (item.Name != null &amp;&amp; item.ControlType == ControlType.ListItem &amp;&amp; !string.IsNullOrWhiteSpace(item.Name) &amp;&amp; !listBox1.Items.Contains(item.Name.ToString()))
				{
					sync.Post(s =&gt;
					{
						listBox1.Items.Add(s);
					}, item.Name);
				}
			}
			Scroll(-700);
		}
	});
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的Scroll代码如下</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>#region Scroll Event

private void Scroll(int scroll)
{
    INPUT[] inputs = new INPUT[1];

    // 设置鼠标滚动事件
    inputs[0].type = InputType.INPUT_MOUSE;
    inputs[0].mi.dwFlags = MouseEventFlags.MOUSEEVENTF_WHEEL;
    inputs[0].mi.mouseData = (uint)scroll;

    // 发送输入事件
    SendInput(1, inputs, Marshal.SizeOf(typeof(INPUT)));
}

public struct INPUT
{
    public InputType type;
    public MouseInput mi;
}

// 输入类型
public enum InputType : uint
{
    INPUT_MOUSE = 0x0000,
    INPUT_KEYBOARD = 0x0001,
    INPUT_HARDWARE = 0x0002
}

// 鼠标输入结构体
public struct MouseInput
{
    public int dx;
    public int dy;
    public uint mouseData;
    public MouseEventFlags dwFlags;
    public uint time;
    public IntPtr dwExtraInfo;
}

// 鼠标事件标志位
[Flags]
public enum MouseEventFlags : uint
{
    MOUSEEVENTF_MOVE = 0x0001,
    MOUSEEVENTF_LEFTDOWN = 0x0002,
    MOUSEEVENTF_LEFTUP = 0x0004,
    MOUSEEVENTF_RIGHTDOWN = 0x0008,
    MOUSEEVENTF_RIGHTUP = 0x0010,
    MOUSEEVENTF_MIDDLEDOWN = 0x0020,
    MOUSEEVENTF_MIDDLEUP = 0x0040,
    MOUSEEVENTF_XDOWN = 0x0080,
    MOUSEEVENTF_XUP = 0x0100,
    MOUSEEVENTF_WHEEL = 0x0800,
    MOUSEEVENTF_HWHEEL = 0x1000,
    MOUSEEVENTF_MOVE_NOCOALESCE = 0x2000,
    MOUSEEVENTF_VIRTUALDESK = 0x4000,
    MOUSEEVENTF_ABSOLUTE = 0x8000
}

private const int MOUSEEVENTF_WHEEL = 0x800;

#endregion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>SendInput function：https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-sendinput</p><p>使用c#实现微信自动化：https://mp.weixin.qq.com/s/YM2lR2mL2zclgLySEPnKCQ</p><p>使用说明：https://blog.csdn.net/u011234288/article/details/130429511</p>`,21),t=[l];function d(r,c){return i(),e("div",null,t)}const o=n(a,[["render",d],["__file","flaUIAutomation.html.vue"]]),m=JSON.parse('{"path":"/middleware/zidonghuacaozuo/flaUIAutomation.html","title":"FlaUI自动化","lang":"zh-CN","frontmatter":{"title":"FlaUI自动化","lang":"zh-CN","date":"2023-08-11T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNet"],"tag":["自动化"],"filename":"flaUIAutomation","description":"概述 FlaUI是一个.NET库，有助于Windows应用程序（Win32，WinForms，WPF，Store Apps等）的自动化UI测试。它基于 Microsoft 的本机 UI 自动化库，因此有点像它们的包装器。 FlaUI 包装了 UI 自动化库中的几乎所有内容，但也提供了本机对象，以防有人有 FlaUI 尚未涵盖的特殊需求。一些想法是从UI...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/middleware/zidonghuacaozuo/flaUIAutomation.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"FlaUI自动化"}],["meta",{"property":"og:description","content":"概述 FlaUI是一个.NET库，有助于Windows应用程序（Win32，WinForms，WPF，Store Apps等）的自动化UI测试。它基于 Microsoft 的本机 UI 自动化库，因此有点像它们的包装器。 FlaUI 包装了 UI 自动化库中的几乎所有内容，但也提供了本机对象，以防有人有 FlaUI 尚未涵盖的特殊需求。一些想法是从UI..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-07T14:02:53.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"自动化"}],["meta",{"property":"article:published_time","content":"2023-08-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-07T14:02:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FlaUI自动化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-07T14:02:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"操作","slug":"操作","link":"#操作","children":[{"level":3,"title":"查找窗口","slug":"查找窗口","link":"#查找窗口","children":[]},{"level":3,"title":"查询窗口元素","slug":"查询窗口元素","link":"#查询窗口元素","children":[]}]},{"level":2,"title":"实践","slug":"实践","link":"#实践","children":[{"level":3,"title":"选择文件弹框切换目录并选择文件","slug":"选择文件弹框切换目录并选择文件","link":"#选择文件弹框切换目录并选择文件","children":[]},{"level":3,"title":"获取微信好友列表","slug":"获取微信好友列表","link":"#获取微信好友列表","children":[]}]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1698394715000,"updatedTime":1699365773000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2},{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":2.79,"words":837},"filePathRelative":"middleware/zidonghuacaozuo/flaUIAutomation.md","localizedDate":"2023年8月11日","excerpt":"<h2>概述</h2>\\n<p>FlaUI是一个.NET库，有助于Windows应用程序（Win32，WinForms，WPF，Store Apps等）的自动化UI测试。它基于 Microsoft 的本机 UI 自动化库，因此有点像它们的包装器。\\nFlaUI 包装了 UI 自动化库中的几乎所有内容，但也提供了本机对象，以防有人有 FlaUI 尚未涵盖的特殊需求。一些想法是从UIAComWrapper项目或TestStack.White复制的，但从头开始重写以获得干净的代码库。</p>\\n<p>仓库地址：https://github.com/FlaUI/FlaUI</p>\\n<h2>操作</h2>\\n<p>安装nuget包</p>","autoDesc":true}');export{o as comp,m as data};
