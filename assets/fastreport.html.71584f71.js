import{_ as t,W as r,X as a,Y as e,Z as n,$ as s,a0 as l,y as d}from"./framework.35562d63.js";const v={},o={href:"https://jhrs.com/2021/44698.html",target:"_blank",rel:"noopener noreferrer"},u=e("h1",{id:"fastreport浏览器直接打印无须预览-2022终版",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fastreport浏览器直接打印无须预览-2022终版","aria-hidden":"true"},"#"),n(" FastReport浏览器直接打印无须预览（2022终版）")],-1),c={href:"http://jhrs.com",target:"_blank",rel:"noopener noreferrer"},m={href:"http://xn--FastReport-hk5y.net",target:"_blank",rel:"noopener noreferrer"},b={href:"https://jhrs.com/2019/28460.html",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[n("​ 无须预览直接打印也叫"),e("strong",null,"静默打印"),n("，即点一下按钮（当然你可以任意方式实现让打印机开始）打印机直接开始工作打印文件；在WinForm下很好实现，而web 静默打印一直是难点，且实现较为麻烦，这也是本文要解决的问题。")],-1),g={href:"https://jhrs.com/2019/33231.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://jhrs.com/2019/28460.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://jhrs.com/2020/39052.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://jhrs.com/2019/33231.html",target:"_blank",rel:"noopener noreferrer"},S=e("h1",{id:"源码解决方案说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#源码解决方案说明","aria-hidden":"true"},"#"),n(" 源码解决方案说明")],-1),_={href:"https://jhrs.com/2021/44527.html",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[e("img",{src:"https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112272302544.webp",alt:"web 打印控件封装源码解决方案",loading:"lazy"})],-1),C={href:"https://jhrs.com/2021/43582.html",target:"_blank",rel:"noopener noreferrer"},R={href:"http://xn--asp-y11ex8kks1a2phw03c.net",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"​ JHRS.PrintClientSetup是打包安装程序，为什么需要打包安装呢？那是因为在生产环境中你不可能将Debug或Release目录下的文件发给客户让他们使用，况且也使用不起来，而且还需要借助该打包程序往注册表写入自定义协议信息，具体在下面代码中会介绍。打包成安装程序后，即可在生产环境中的网页上提供下载功能，需要使用打印功能的客户端，只需要下载安装上该客户端即可，之后就可以打印了。",-1),F={href:"https://github.com/jhrscom/JHRS-PrintClient",target:"_blank",rel:"noopener noreferrer"},w={href:"https://fastreport.jhrs.com/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://gbtcs.com/li7k",target:"_blank",rel:"noopener noreferrer"},P={href:"https://fastreport.jhrs.com/",target:"_blank",rel:"noopener noreferrer"},D=e("h2",{id:"fastreport浏览器直接打印无须预览",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fastreport浏览器直接打印无须预览","aria-hidden":"true"},"#"),n(),e("strong",null,"FastReport浏览器直接打印无须预览")],-1),I=e("p",null,"我们在使用web技术开发管理系统，如医疗领域的HIS系统，企业的ERP系统，财务系统等等，都有打印需求，而正是各类系统和客户都有着各种不相同的打印需要，模板，格式，数据不一样等；市面上报表有多种产品，但我们选择了FastReport.Net做为解决打印需求的第三方组件，当然，商用它是付费的，不过对于公司来说，这都没有什么问题。",-1),k={href:"http://xn--webFastReport-o40uda246vpemt2filufhslyrqotba551cj14gys2crc0da.net",target:"_blank",rel:"noopener noreferrer"},E=l(`<ol><li>支持选择多打印机，并且可以设置默认打印机</li><li>支持无须预览直接打印，也可以启动客户端将预览功能开启。</li><li>跨浏览器支持，Chrome，IE，FireFox，Edge全都支持。</li><li>打印日志功能（保存在安装目录）</li><li>桌面快捷方式（一般无须打开，只有更改设置时才使用，如更换默认打印机，设置静默打印【无预览】）</li></ol><p>要实现FastReport浏览器静默打印功能，我们需要做两步工作：</p><p><strong>第一步是编写客户端程序</strong>，并且提供下载功能，用户首次使用时先安装客户端，首次点击打印会在浏览器上看到如下提示：</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112272304071.webp" alt="img" loading="lazy"></p><p><strong>第二步是web应用程序界面上提供打印功能和获取打印数据接口</strong>，具体的实现会在源码中展示。</p><h2 id="编写客户端打印程序" tabindex="-1"><a class="header-anchor" href="#编写客户端打印程序" aria-hidden="true">#</a> <strong>编写客户端打印程序</strong></h2><p>客户端打印程序其实就是将FastReport打印组件封装进去，因此我们需要编写一个WinForm窗体程序，当然你也可以使用WPF来实现，在这个窗体程序上需要拖动一个 PreviewControl 控件到主窗体上面，该窗体程序非常简单，就一个FastReport.Preview.PreviewControl控件。当然我放在github上的源码你 clone下来后可以看到其它的，只是一些辅助功能而已。</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112272305751.webp" alt="FastReport浏览器直接打印无须预览" loading="lazy"></p><p>完整的源码如下：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using JHRS.PrintClient.Entity;
using JHRS.PrintClient.Extensions;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Windows.Forms;

namespace JHRS.PrintClient
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }

        public string[] args { get; set; }
        /// &lt;summary&gt;
        /// 带参
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;args&quot;&gt;&lt;/param&gt;
        public MainForm(string[] args)
        {
            this.args = args;
            InitializeComponent();
        }

        /// &lt;summary&gt;
        /// 打印方法
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;args&quot;&gt;&lt;/param&gt;
        private void Print(string[] args)
        {
            var printConfig = ConfigList.FirstOrDefault(x =&gt; x.Selected);
            LogHelper.WriteLog($&quot;----------------------------------------------开始打印----------------------------------------------&quot;);
            LogHelper.WriteLog($&quot;进入打印方法，打印设置名称：{printConfig?.ConfigName}，打印机名称：【{printConfig?.DefaultPrinter}】，是否启用直接打印功能：{printConfig?.DirectPrint}&quot;);

            if (printConfig == null)
            {
                LogHelper.WriteLog(&quot;未指定默认打印机，请先做打印设置！&quot;);
                LogHelper.WriteLog($&quot;----------------------------------------------结束打印----------------------------------------------\\r\\n\\r\\n&quot;);
                DialogResult result = MessageBox.Show(&quot;未指定默认打印机，请先做打印设置！&quot;, &quot;系统提示&quot;, MessageBoxButtons.OK, MessageBoxIcon.Error);
                if (result == DialogResult.OK)
                {
                    DialogResult dialog = new PrintSet().ShowDialog(this);
                    if (dialog == DialogResult.Cancel)
                    {
                        Print(args);
                    }
                }
                return;
            }

            LogHelper.WriteLog($&quot;打印数据请求接口来源：{args[0].Replace(&quot;jhrsprint:&quot;, &quot;&quot;)}&quot;);
            HttpClient client = new HttpClient();
            HttpResponseMessage response = client.GetAsync(args[0].Replace(&quot;jhrsprint:&quot;, &quot;&quot;)).Result;
            if (!response.IsSuccessStatusCode)
            {
                return;
            }
            var data = response.Content.ReadAsStringAsync().Result;
            LogHelper.WriteLog($&quot;打印数据：{data}&quot;);
            PrintData printData = JsonConvert.DeserializeObject&lt;PrintData&gt;(data);

            byte[] arrary = printData.FrxFile.Split(&#39;^&#39;).Select(x =&gt; (byte)int.Parse(x)).ToArray();

            report1.Preview = previewControl1;

            report1.Load(new MemoryStream(arrary));
            report1.RegisterData(printData.Data, &quot;打印数据源&quot;);
            
            report1.PrintSettings.Printer = printConfig.DefaultPrinter;
            LogHelper.WriteLog($&quot;----------------------------------------------结束打印----------------------------------------------\\r\\n\\r\\n&quot;);
            if (printConfig.DirectPrint)
            {
                report1.PrintSettings.ShowDialog = false;
                report1.Print();
                ExitSystem();
            }
            else
            {
                report1.Prepare();
                report1.ShowPrepared();
            }
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            if (args != null)
            {
                Print(args);
            }
            SetMenuItem();
        }

        /// &lt;summary&gt;
        /// 设置默认打印机
        /// &lt;/summary&gt;
        public void SetMenuItem(bool reload = false)
        {
            reloadConfig = reload;
            var arrary = ConfigList.Select(x =&gt; x.ConfigName).ToArray();
            if (arrary.Length == 0)
            {
                toolStripComboBox1.Items.Add(&quot;未设置&quot;);
                toolStripComboBox1.SelectedIndex = 0;
            }
            else
            {
                toolStripComboBox1.Items.Clear();
                toolStripComboBox1.Items.AddRange(ConfigList.Select(x =&gt; x.ConfigName).ToArray());
                var selected = ConfigList.FirstOrDefault(x =&gt; x.Selected);
                if (selected != null) toolStripComboBox1.SelectedItem = selected.ConfigName;
            }
        }

        private bool reloadConfig = false;
        private List&lt;Configs&gt; list;
        private List&lt;Configs&gt; ConfigList
        {
            get
            {
                if (list == null || reloadConfig == true)
                {
                    list = XmlHelper.Deserialize&lt;List&lt;Configs&gt;&gt;(Constants.ConfigSavePath);
                    reloadConfig = false;
                }
                if (list != null) return list;
                return list ?? new List&lt;Configs&gt;();
            }
        }

        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            MessageBoxButtons mess = MessageBoxButtons.OKCancel;
            var printConfig = ConfigList.FirstOrDefault(x =&gt; x.Selected);
            if (printConfig != null &amp;&amp; printConfig.DirectPrint)
            {
                ExitSystem();
            }
            else
            {
                DialogResult dr = MessageBox.Show(&quot;您确定要退出打印客户端吗？&quot;, &quot;系统提示&quot;, mess, MessageBoxIcon.Question);
                if (dr == DialogResult.OK)
                    ExitSystem();
                else
                    e.Cancel = true;
            }
        }

        private void notifyIcon1_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                if (this.WindowState == FormWindowState.Minimized)
                {
                    this.WindowState = FormWindowState.Maximized;
                    this.ShowInTaskbar = true;
                }
                this.Activate();
            }
        }

        private void 退出打印客户端ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            MessageBoxButtons mess = MessageBoxButtons.OKCancel;
            DialogResult dr = MessageBox.Show(&quot;您确定要退出打印客户端吗？&quot;, &quot;系统提示&quot;, mess, MessageBoxIcon.Question);
            if (dr == DialogResult.OK) ExitSystem();
        }

        private void 打印设置ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            var set = new PrintSet();
            if (set.ParentForm == null)
            {
                set.StartPosition = FormStartPosition.CenterScreen;
            }
            set.ShowDialog(this);
        }

        /// &lt;summary&gt;
        /// 更改打印设置
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;sender&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;e&quot;&gt;&lt;/param&gt;
        private void toolStripComboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            var list = ConfigList;
            foreach (var item in list)
            {
                if (item.ConfigName == toolStripComboBox1.SelectedItem.ToString())
                {
                    item.Selected = true;
                }
                else
                {
                    item.Selected = false;
                }
            }

            XmlHelper.SerializeToXmlFile(list);
        }

        private void 打印日志ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            new LogForm().ShowDialog(this);
        }

        /// &lt;summary&gt;
        /// 退出系统
        /// &lt;/summary&gt;
        private void ExitSystem()
        {
            notifyIcon.Dispose();
            Environment.Exit(0);
        }
    }

    /// &lt;summary&gt;
    /// 打印数据实体
    /// &lt;/summary&gt;
    public class PrintData
    {
        /// &lt;summary&gt;
        /// 待打印数据使用的报表，由服务器端返回告诉客户端控件
        /// &lt;/summary&gt;
        public string FrxFile { get; set; }

        /// &lt;summary&gt;
        /// 报表数据源，由服务器端返回
        /// &lt;/summary&gt;
        public DataTable Data { get; set; }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 在上面代码中的Print(string[] args)方法中，args参数就是通过自定义协议传入的，该方法就是最终的调用FastReport.Net组件在（客户端）浏览器上实现打印功能，完全具备和桌面软件一样的功能。有关自定义协议的内容，参见下面这篇文章：</p><h2 id="编写安装程序类" tabindex="-1"><a class="header-anchor" href="#编写安装程序类" aria-hidden="true">#</a> <strong>编写安装程序类</strong></h2><p>​ 安装程序类的用途是将自定义协议信息写入注册表，当你安装客户端程序时，它会自动的被操作系统的 Installer 自动调用，当然需要你在打包项目中做一些设置。完整的安装程序类的源码如下：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Microsoft.Win32;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration.Install;
using System.Linq;
using System.Threading.Tasks;

namespace JHRS.PrintClient
{
    [RunInstaller(true)]
    public partial class PrintInstall : Installer
    {
        public PrintInstall()
        {
            InitializeComponent();
        }

        protected override void OnAfterInstall(IDictionary savedState)
        {
            string path = this.Context.Parameters[&quot;targetdir&quot;];
            //获取用户设定的安装目标路径, 注意，需要在Setup项目里面自定义操作的属性栏里面的CustomActionData添加上/targetdir=&quot;[TARGETDIR]\\&quot;            
            LogWrite(path);

            const string UriScheme = &quot;jhrsprint&quot;;
            const string FriendlyName = &quot;jhrsprint自定义协议&quot;;
            using (var key = Registry.LocalMachine.CreateSubKey(&quot;SOFTWARE\\\\Classes\\\\&quot; + UriScheme))
            {
                string applicationLocation = path.Substring(0, path.Length - 1) + @&quot;JHRS.PrintClient.exe&quot;;
                LogWrite($&quot;打印客户端安装路径：{applicationLocation}&quot;);
                key.SetValue(&quot;&quot;, &quot;URL:&quot; + FriendlyName);
                LogWrite($&quot;自定义协议名称：URL:{FriendlyName}&quot;);
                key.SetValue(&quot;URL Protocol&quot;, &quot;&quot;);

                using (var defaultIcon = key.CreateSubKey(&quot;DefaultIcon&quot;))
                {
                    defaultIcon.SetValue(&quot;&quot;, applicationLocation + &quot;,1&quot;);
                }

                using (var commandKey = key.CreateSubKey(@&quot;shell\\open\\command&quot;))
                {
                    commandKey.SetValue(&quot;&quot;, &quot;\\&quot;&quot; + applicationLocation + &quot;\\&quot; \\&quot;%1\\&quot;&quot;);
                }
                LogWrite($&quot;设置结束！key.Name是：{key.Name}，{key}&quot;);
            }
            base.OnAfterInstall(savedState);
        }
        public override void Install(IDictionary stateSaver)
        {
            LogWrite(&quot;Install！&quot;);
            base.Install(stateSaver);
        }

        protected override void OnBeforeInstall(IDictionary savedState)
        {
            LogWrite(&quot;OnBeforeInstall!&quot;);
            base.OnBeforeInstall(savedState);
        }
        public override void Uninstall(IDictionary savedState)
        {
            LogWrite(&quot;Uninstall!&quot;); base.Uninstall(savedState);
        }
        public override void Rollback(IDictionary savedState)
        {
            LogWrite(&quot;Rollback&quot;);
            base.Rollback(savedState);
        }

        public void LogWrite(string str)
        {
#if DEBUG
            string LogPath = @&quot;c:\\log\\&quot;;
            if (!System.IO.Directory.Exists(LogPath)) System.IO.Directory.CreateDirectory(LogPath);
            using (System.IO.StreamWriter sw = new System.IO.StreamWriter(LogPath + @&quot;SetUpLog.txt&quot;, true))
            {
                sw.WriteLine(DateTime.Now.ToString(&quot;[yyyy-MM-dd HH:mm:ss] &quot;) + str + &quot;\\n&quot;);
            }
#endif
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>web打印客户端安装后会在桌面生成一个快捷方式，平常不会使用它的，除非你需要对客户端做一些设置。</p><p><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112272306151.webp" alt="FastReport浏览器直接打印无须预览（2022终版） 1" loading="lazy"></p><p>​ 完成了web客户端程序的编写和打包程序的设置， 剩下的操作你只需要将客户端打包就行了，之后放到网站目录，并提供一个下载功能，供用户下载安装你的客户端即可。</p><p>​ 接下来我们来看网站端是怎样使用的FastReport web打印功能的。</p><h2 id="fastreport-web打印页面代码" tabindex="-1"><a class="header-anchor" href="#fastreport-web打印页面代码" aria-hidden="true">#</a> <strong>FastReport web打印页面代码</strong></h2>`,19),M={href:"http://xn--asp-hb0ez26f2f0a.net",target:"_blank",rel:"noopener noreferrer"},j=e("div",{class:"language-c# line-numbers-mode","data-ext":"c#"},[e("pre",{class:"language-c#"},[e("code",null,`<input type="button" value="下载并安装控件" onclick="location.href='?handler=Download'" />
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),W={href:"https://github.com/jhrscom/JHRS-PrintClient/blob/master/JHRS.CoreWebPrint/Pages/Index.cshtml",target:"_blank",rel:"noopener noreferrer"},B=l(`<div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
        /// 获取打印数据
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public ContentResult OnGetPrintData()
        {
            if (&quot;https://jhrs.com&quot;.Equals(Request.Query[&quot;par1&quot;].ToString())&amp;&amp; &quot;znlive.com&quot;.Equals(Request.Query[&quot;myblog&quot;].ToString()))
            {
                List&lt;SbEntity&gt; list = new List&lt;SbEntity&gt;();
                for (int i = 0; i &lt; 1; i++)
                {
                    list.Add(new SbEntity
                    {
                        标题 = &quot;江湖人士醫院超聲設備標牌&quot;,
                        使用科室 = &quot;超聲科-&quot; + i,
                        启用日期 = DateTime.Now.AddDays(i),
                        型号 = &quot;XH34534-&quot; + i,
                        序列号 = &quot;XLH-3452&quot; + i,
                        序号 = (i + 1).ToString(),
                        条码 = &quot;BH20190302002&quot; + i,
                        二维码 = &quot;https://znlive.com/the-best-cheap-vpn&quot;,
                        生产厂家 = &quot;jhrs.com 科技有限公司&quot;,
                        规格 = &quot;GGX-1&quot; + i,
                        设备名称 = &quot;X射線髮射器&quot;,
                        责任人 = &quot;趙佳發&quot;,
                        质保日期 = DateTime.Now.AddYears(i + 1)
                    });
                }

                var print = new PrintDataEntity&lt;List&lt;SbEntity&gt;&gt; { Data = list };

                var path = Path.Combine(Environment.CurrentDirectory, &quot;wwwroot/print/设备标牌.frx&quot;);

                using (FileStream fs = new FileStream(path, FileMode.Open, FileAccess.Read))
                {
                    try
                    {
                        byte[] buffur = new byte[fs.Length];
                        fs.Read(buffur, 0, (int)fs.Length);
                        print.FrxFile = string.Join(&quot;^&quot;, buffur);
                    }
                    catch (Exception ex)
                    {
                        return Content(new { Success = false, ErrorMsg = ex.Message }.ToJson());
                    }
                }
                return Content(print.ToJson());
            }
            return Content(new { Success = false, ErrorMsg = &quot;狗日的，参数不对，重新传！&quot; }.ToJson());
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),H={href:"https://fastreport.jhrs.com/",target:"_blank",rel:"noopener noreferrer"},A={href:"http://FastReport.net",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"下面提供的2.0学习版较为古老，最新版界面风格也变了，但使用方式类似。",-1),T=e("h1",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),n(" 总结")],-1),O=e("p",null,"本文写得比较简单，如果你是一个新手，况且对于FastReport.net没有过多的了解，或者不熟悉，会遇到很多的问题，本来还想画一张图来说明一下的，但想想还是算了，毕竟当阅读到这篇文章的人都是开发人员，且有需求，应该会弄明白的。",-1),z={href:"http://xn--FastReport-vh5pypx88hgroj5yrqf6qa299eg70bqw5f16h.net",target:"_blank",rel:"noopener noreferrer"},J=e("p",null,[n("你下载时需要做好心里准备，这TMD的网盘要连点几次广告才能下载。。"),e("strong",null,"当然钱能解决一切问题。")],-1),G={href:"http://FastReport.net",target:"_blank",rel:"noopener noreferrer"},V={href:"http://up-4.net/d/Qdbe",target:"_blank",rel:"noopener noreferrer"},K=e("p",null,[e("img",{src:"https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112272308334.webp",alt:"img",loading:"lazy"})],-1);function U($,X){const i=d("ExternalLinkIcon");return r(),a("div",null,[e("blockquote",null,[e("p",null,[n("文章来源自："),e("a",o,[n("https://jhrs.com/2021/44698.html"),s(i)])])]),u,e("p",null,[n("​ 2022最终版FastReport浏览器直接打印无须预览，之所以写这篇文章，是因为在两年前首发在 "),e("a",c,[n("jhrs.com"),s(i)]),n(),e("a",m,[n("的FastReport.net"),s(i)]),n(" 打印功能这篇文章被很多网站转（偷）载，也是为了填一下"),e("a",b,[n("2次封装FastReport.net 打印功能，Web项目网页支持直接打印"),s(i)]),n("这篇文章留下的坑，本文将会给出详细的代码以实现浏览器上并结合FastReport.Net实现无须预览直接打印功能。")]),p,e("p",null,[n("​ 以下的文章是2年前和后来写的关于FastReport.Net的一些系列文章，原文还是值得翻出来看一下的，讲的是一些实现思路。本文会略过VS2022怎样打包安装程序，如果你是C#开发人员，会开发WinForm程序但不熟悉怎样打包安装程序，可以看看我之前写的"),e("a",g,[n("WPF程序打包教程"),s(i)]),n("，它们是一个路数。")]),e("ol",null,[e("li",null,[e("a",h,[n("2次封装FastReport.net 打印功能，Web项目网页支持直接打印"),s(i)])]),e("li",null,[e("a",f,[n("自定义协议打开本地客户端程序遇上CSP内容安全策略"),s(i)])]),e("li",null,[e("a",q,[n("VS2019打包WPF安装程序最新教程"),s(i)])])]),S,e("p",null,[n("​ 当你从github下载源码后，使用VS2022打开会看到如下的样式，如果你首次打开时JHRS.PrintClientSetup不能正常加载，说明你没有安装Installer Projects，参见"),e("a",_,[n("VS2022 打不开vdproj项目解决办法，升级Installer Projects"),s(i)]),n("这篇文章解决即可。")]),y,e("p",null,[n("​ 源码中提供了 2 个网站程序，分别是使用"),e("a",C,[n("asp.net webform"),s(i)]),e("a",R,[n("技术编写和asp.net"),s(i)]),n(" core razor page编写，从命名上就已经区分了；JHRS.PrintClient是基于FastReport.net封装的客户端软件，引用了FastReport.net相关dll文件。")]),x,e("p",null,[n("**Github地址：**"),e("a",F,[n("https://github.com/jhrscom/JHRS-PrintClient"),s(i)])]),e("p",null,[n("**演示网站：**"),e("a",w,[n("https://fastreport.jhrs.com/"),s(i)])]),e("p",null,[n("**提示：**如果打开Github有问题，你最好自备一个"),e("a",L,[n("上网工具"),s(i)]),n("。你可以进入"),e("a",P,[n("演示网站"),s(i)]),n("首先下载客户端程序安装上，之后再点击打印按钮即可。")]),D,I,e("p",null,[n("本文中所涉及到的FastReport.Net是使用的来自网上的古老的 2.0 版本，正式产品中使用，还是需要购买授权的。"),e("a",k,[n("接下来就来说说怎样在web环境下结合FastReport.net"),s(i)]),n(" 实现无预览直接打印功能，另外需要说明的是，我封装的客户端你可以自由的设置是否需要使用预览功能，客户端的功能点如下：")]),E,e("p",null,[n("页面上要触发打印功能，通常都是放置按钮或者链接来实现，正如下面的代码那样，"),e("a",M,[n("我使用asp.net"),s(i)]),n(" core razor page来编写的。页面上放置了一个按钮，然后将请求提交到当前页面来处理。")]),j,e("p",null,[n("完整的代码你可以在"),e("a",W,[n("github上找到"),s(i)]),n("。后台处理打印请求，即获取打印数据的示例代码如下：")]),B,e("p",null,[n("怎么样，是不是很简单呢？在"),e("a",H,[n("演示网站"),s(i)]),n("中，也提供了下载功能，这里就不做过多介绍了，完整的解决方案源码你可以在github上找到。")]),e("p",null,[n("**最后提示：**"),e("a",A,[n("FastReport.net"),s(i)]),n(" 组件是付费产品，你在使用过程中，需要购买授权，你可以在它们的官网上联系售后进行购买。"),N]),T,O,e("p",null,[n("顺便提一下，"),e("a",z,[n("本文并没有讲解如何使用FastReport.net"),s(i)]),n("，例如怎样制作报表文件，怎样绑定数据源，怎样添加字典文件等，这些内容，只需要看看FastReport.net提供的demo程序就明白了。做为学习使用，这里提供了一个国外网盘下载地址，你可以下载FastReport.net来学习，如果下载不了，请参见上面打开github的方法解决，毕竟是国外的网盘。")]),J,e("p",null,[e("a",G,[n("FastReport.net"),s(i)]),n(" 2.0学习版下载地址："),e("a",V,[n("点击下载"),s(i)])]),K])}const Q=t(v,[["render",U],["__file","fastreport.html.vue"]]);export{Q as default};
