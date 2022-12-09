---
title: FastReport浏览器直接打印无须预览
lang: zh-CN
date: 2021-02-22
publish: true
author: azrng
isOriginal: false
category:
 - 中间件
tag:
 - FastReport
 - 打印
---
> 文章来源自：https://jhrs.com/2021/44698.html

# FastReport浏览器直接打印无须预览（2022终版）

​		2022最终版FastReport浏览器直接打印无须预览，之所以写这篇文章，是因为在两年前首发在 jhrs.com 的FastReport.net 打印功能这篇文章被很多网站转（偷）载，也是为了填一下[2次封装FastReport.net 打印功能，Web项目网页支持直接打印](https://jhrs.com/2019/28460.html)这篇文章留下的坑，本文将会给出详细的代码以实现浏览器上并结合FastReport.Net实现无须预览直接打印功能。

​		无须预览直接打印也叫**静默打印**，即点一下按钮（当然你可以任意方式实现让打印机开始）打印机直接开始工作打印文件；在WinForm下很好实现，而web 静默打印一直是难点，且实现较为麻烦，这也是本文要解决的问题。

​		以下的文章是2年前和后来写的关于FastReport.Net的一些系列文章，原文还是值得翻出来看一下的，讲的是一些实现思路。本文会略过VS2022怎样打包安装程序，如果你是C#开发人员，会开发WinForm程序但不熟悉怎样打包安装程序，可以看看我之前写的[WPF程序打包教程](https://jhrs.com/2019/33231.html)，它们是一个路数。

1. [2次封装FastReport.net 打印功能，Web项目网页支持直接打印](https://jhrs.com/2019/28460.html)
2. [自定义协议打开本地客户端程序遇上CSP内容安全策略](https://jhrs.com/2020/39052.html)
3. [VS2019打包WPF安装程序最新教程](https://jhrs.com/2019/33231.html)

# 源码解决方案说明

​		当你从github下载源码后，使用VS2022打开会看到如下的样式，如果你首次打开时JHRS.PrintClientSetup不能正常加载，说明你没有安装Installer Projects，参见[VS2022 打不开vdproj项目解决办法，升级Installer Projects](https://jhrs.com/2021/44527.html)这篇文章解决即可。

![web 打印控件封装源码解决方案](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112272302544.webp)

​		源码中提供了 2 个网站程序，分别是使用[asp.net webform](https://jhrs.com/2021/43582.html)技术编写和asp.net core razor page编写，从命名上就已经区分了；JHRS.PrintClient是基于FastReport.net封装的客户端软件，引用了FastReport.net相关dll文件。

​		JHRS.PrintClientSetup是打包安装程序，为什么需要打包安装呢？那是因为在生产环境中你不可能将Debug或Release目录下的文件发给客户让他们使用，况且也使用不起来，而且还需要借助该打包程序往注册表写入自定义协议信息，具体在下面代码中会介绍。打包成安装程序后，即可在生产环境中的网页上提供下载功能，需要使用打印功能的客户端，只需要下载安装上该客户端即可，之后就可以打印了。

**Github地址：**https://github.com/jhrscom/JHRS-PrintClient

**演示网站：**https://fastreport.jhrs.com/

**提示：**如果打开Github有问题，你最好自备一个[上网工具](https://gbtcs.com/li7k)。你可以进入[演示网站](https://fastreport.jhrs.com/)首先下载客户端程序安装上，之后再点击打印按钮即可。

## **FastReport浏览器直接打印无须预览**

我们在使用web技术开发管理系统，如医疗领域的HIS系统，企业的ERP系统，财务系统等等，都有打印需求，而正是各类系统和客户都有着各种不相同的打印需要，模板，格式，数据不一样等；市面上报表有多种产品，但我们选择了FastReport.Net做为解决打印需求的第三方组件，当然，商用它是付费的，不过对于公司来说，这都没有什么问题。

本文中所涉及到的FastReport.Net是使用的来自网上的古老的 2.0 版本，正式产品中使用，还是需要购买授权的。接下来就来说说怎样在web环境下结合FastReport.net 实现无预览直接打印功能，另外需要说明的是，我封装的客户端你可以自由的设置是否需要使用预览功能，客户端的功能点如下：

1. 支持选择多打印机，并且可以设置默认打印机
2. 支持无须预览直接打印，也可以启动客户端将预览功能开启。
3. 跨浏览器支持，Chrome，IE，FireFox，Edge全都支持。
4. 打印日志功能（保存在安装目录）
5. 桌面快捷方式（一般无须打开，只有更改设置时才使用，如更换默认打印机，设置静默打印【无预览】）

要实现FastReport浏览器静默打印功能，我们需要做两步工作：

**第一步是编写客户端程序**，并且提供下载功能，用户首次使用时先安装客户端，首次点击打印会在浏览器上看到如下提示：

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112272304071.webp)

**第二步是web应用程序界面上提供打印功能和获取打印数据接口**，具体的实现会在源码中展示。

## **编写客户端打印程序**

客户端打印程序其实就是将FastReport打印组件封装进去，因此我们需要编写一个WinForm窗体程序，当然你也可以使用WPF来实现，在这个窗体程序上需要拖动一个 PreviewControl 控件到主窗体上面，该窗体程序非常简单，就一个FastReport.Preview.PreviewControl控件。当然我放在github上的源码你 clone下来后可以看到其它的，只是一些辅助功能而已。

![FastReport浏览器直接打印无须预览](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112272305751.webp)

完整的源码如下：

```c#
using JHRS.PrintClient.Entity;
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
        /// <summary>
        /// 带参
        /// </summary>
        /// <param name="args"></param>
        public MainForm(string[] args)
        {
            this.args = args;
            InitializeComponent();
        }

        /// <summary>
        /// 打印方法
        /// </summary>
        /// <param name="args"></param>
        private void Print(string[] args)
        {
            var printConfig = ConfigList.FirstOrDefault(x => x.Selected);
            LogHelper.WriteLog($"----------------------------------------------开始打印----------------------------------------------");
            LogHelper.WriteLog($"进入打印方法，打印设置名称：{printConfig?.ConfigName}，打印机名称：【{printConfig?.DefaultPrinter}】，是否启用直接打印功能：{printConfig?.DirectPrint}");

            if (printConfig == null)
            {
                LogHelper.WriteLog("未指定默认打印机，请先做打印设置！");
                LogHelper.WriteLog($"----------------------------------------------结束打印----------------------------------------------\r\n\r\n");
                DialogResult result = MessageBox.Show("未指定默认打印机，请先做打印设置！", "系统提示", MessageBoxButtons.OK, MessageBoxIcon.Error);
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

            LogHelper.WriteLog($"打印数据请求接口来源：{args[0].Replace("jhrsprint:", "")}");
            HttpClient client = new HttpClient();
            HttpResponseMessage response = client.GetAsync(args[0].Replace("jhrsprint:", "")).Result;
            if (!response.IsSuccessStatusCode)
            {
                return;
            }
            var data = response.Content.ReadAsStringAsync().Result;
            LogHelper.WriteLog($"打印数据：{data}");
            PrintData printData = JsonConvert.DeserializeObject<PrintData>(data);

            byte[] arrary = printData.FrxFile.Split('^').Select(x => (byte)int.Parse(x)).ToArray();

            report1.Preview = previewControl1;

            report1.Load(new MemoryStream(arrary));
            report1.RegisterData(printData.Data, "打印数据源");
            
            report1.PrintSettings.Printer = printConfig.DefaultPrinter;
            LogHelper.WriteLog($"----------------------------------------------结束打印----------------------------------------------\r\n\r\n");
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

        /// <summary>
        /// 设置默认打印机
        /// </summary>
        public void SetMenuItem(bool reload = false)
        {
            reloadConfig = reload;
            var arrary = ConfigList.Select(x => x.ConfigName).ToArray();
            if (arrary.Length == 0)
            {
                toolStripComboBox1.Items.Add("未设置");
                toolStripComboBox1.SelectedIndex = 0;
            }
            else
            {
                toolStripComboBox1.Items.Clear();
                toolStripComboBox1.Items.AddRange(ConfigList.Select(x => x.ConfigName).ToArray());
                var selected = ConfigList.FirstOrDefault(x => x.Selected);
                if (selected != null) toolStripComboBox1.SelectedItem = selected.ConfigName;
            }
        }

        private bool reloadConfig = false;
        private List<Configs> list;
        private List<Configs> ConfigList
        {
            get
            {
                if (list == null || reloadConfig == true)
                {
                    list = XmlHelper.Deserialize<List<Configs>>(Constants.ConfigSavePath);
                    reloadConfig = false;
                }
                if (list != null) return list;
                return list ?? new List<Configs>();
            }
        }

        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            MessageBoxButtons mess = MessageBoxButtons.OKCancel;
            var printConfig = ConfigList.FirstOrDefault(x => x.Selected);
            if (printConfig != null && printConfig.DirectPrint)
            {
                ExitSystem();
            }
            else
            {
                DialogResult dr = MessageBox.Show("您确定要退出打印客户端吗？", "系统提示", mess, MessageBoxIcon.Question);
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
            DialogResult dr = MessageBox.Show("您确定要退出打印客户端吗？", "系统提示", mess, MessageBoxIcon.Question);
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

        /// <summary>
        /// 更改打印设置
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
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

        /// <summary>
        /// 退出系统
        /// </summary>
        private void ExitSystem()
        {
            notifyIcon.Dispose();
            Environment.Exit(0);
        }
    }

    /// <summary>
    /// 打印数据实体
    /// </summary>
    public class PrintData
    {
        /// <summary>
        /// 待打印数据使用的报表，由服务器端返回告诉客户端控件
        /// </summary>
        public string FrxFile { get; set; }

        /// <summary>
        /// 报表数据源，由服务器端返回
        /// </summary>
        public DataTable Data { get; set; }
    }
}
```

​		在上面代码中的Print(string[] args)方法中，args参数就是通过自定义协议传入的，该方法就是最终的调用FastReport.Net组件在（客户端）浏览器上实现打印功能，完全具备和桌面软件一样的功能。有关自定义协议的内容，参见下面这篇文章：

## **编写安装程序类**

​		安装程序类的用途是将自定义协议信息写入注册表，当你安装客户端程序时，它会自动的被操作系统的 Installer 自动调用，当然需要你在打包项目中做一些设置。完整的安装程序类的源码如下：

```c#
using Microsoft.Win32;
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
            string path = this.Context.Parameters["targetdir"];
            //获取用户设定的安装目标路径, 注意，需要在Setup项目里面自定义操作的属性栏里面的CustomActionData添加上/targetdir="[TARGETDIR]\"            
            LogWrite(path);

            const string UriScheme = "jhrsprint";
            const string FriendlyName = "jhrsprint自定义协议";
            using (var key = Registry.LocalMachine.CreateSubKey("SOFTWARE\\Classes\\" + UriScheme))
            {
                string applicationLocation = path.Substring(0, path.Length - 1) + @"JHRS.PrintClient.exe";
                LogWrite($"打印客户端安装路径：{applicationLocation}");
                key.SetValue("", "URL:" + FriendlyName);
                LogWrite($"自定义协议名称：URL:{FriendlyName}");
                key.SetValue("URL Protocol", "");

                using (var defaultIcon = key.CreateSubKey("DefaultIcon"))
                {
                    defaultIcon.SetValue("", applicationLocation + ",1");
                }

                using (var commandKey = key.CreateSubKey(@"shell\open\command"))
                {
                    commandKey.SetValue("", "\"" + applicationLocation + "\" \"%1\"");
                }
                LogWrite($"设置结束！key.Name是：{key.Name}，{key}");
            }
            base.OnAfterInstall(savedState);
        }
        public override void Install(IDictionary stateSaver)
        {
            LogWrite("Install！");
            base.Install(stateSaver);
        }

        protected override void OnBeforeInstall(IDictionary savedState)
        {
            LogWrite("OnBeforeInstall!");
            base.OnBeforeInstall(savedState);
        }
        public override void Uninstall(IDictionary savedState)
        {
            LogWrite("Uninstall!"); base.Uninstall(savedState);
        }
        public override void Rollback(IDictionary savedState)
        {
            LogWrite("Rollback");
            base.Rollback(savedState);
        }

        public void LogWrite(string str)
        {
#if DEBUG
            string LogPath = @"c:\log\";
            if (!System.IO.Directory.Exists(LogPath)) System.IO.Directory.CreateDirectory(LogPath);
            using (System.IO.StreamWriter sw = new System.IO.StreamWriter(LogPath + @"SetUpLog.txt", true))
            {
                sw.WriteLine(DateTime.Now.ToString("[yyyy-MM-dd HH:mm:ss] ") + str + "\n");
            }
#endif
        }
    }
}
```

web打印客户端安装后会在桌面生成一个快捷方式，平常不会使用它的，除非你需要对客户端做一些设置。

![FastReport浏览器直接打印无须预览（2022终版） 1](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112272306151.webp)

​		完成了web客户端程序的编写和打包程序的设置， 剩下的操作你只需要将客户端打包就行了，之后放到网站目录，并提供一个下载功能，供用户下载安装你的客户端即可。

​		接下来我们来看网站端是怎样使用的FastReport web打印功能的。

## **FastReport web打印页面代码**

页面上要触发打印功能，通常都是放置按钮或者链接来实现，正如下面的代码那样，我使用asp.net core razor page来编写的。页面上放置了一个按钮，然后将请求提交到当前页面来处理。

```c#
<input type="button" value="下载并安装控件" onclick="location.href='?handler=Download'" />
```

完整的代码你可以在[github上找到](https://github.com/jhrscom/JHRS-PrintClient/blob/master/JHRS.CoreWebPrint/Pages/Index.cshtml)。后台处理打印请求，即获取打印数据的示例代码如下：

```c#
/// <summary>
        /// 获取打印数据
        /// </summary>
        /// <returns></returns>
        public ContentResult OnGetPrintData()
        {
            if ("https://jhrs.com".Equals(Request.Query["par1"].ToString())&& "znlive.com".Equals(Request.Query["myblog"].ToString()))
            {
                List<SbEntity> list = new List<SbEntity>();
                for (int i = 0; i < 1; i++)
                {
                    list.Add(new SbEntity
                    {
                        标题 = "江湖人士醫院超聲設備標牌",
                        使用科室 = "超聲科-" + i,
                        启用日期 = DateTime.Now.AddDays(i),
                        型号 = "XH34534-" + i,
                        序列号 = "XLH-3452" + i,
                        序号 = (i + 1).ToString(),
                        条码 = "BH20190302002" + i,
                        二维码 = "https://znlive.com/the-best-cheap-vpn",
                        生产厂家 = "jhrs.com 科技有限公司",
                        规格 = "GGX-1" + i,
                        设备名称 = "X射線髮射器",
                        责任人 = "趙佳發",
                        质保日期 = DateTime.Now.AddYears(i + 1)
                    });
                }

                var print = new PrintDataEntity<List<SbEntity>> { Data = list };

                var path = Path.Combine(Environment.CurrentDirectory, "wwwroot/print/设备标牌.frx");

                using (FileStream fs = new FileStream(path, FileMode.Open, FileAccess.Read))
                {
                    try
                    {
                        byte[] buffur = new byte[fs.Length];
                        fs.Read(buffur, 0, (int)fs.Length);
                        print.FrxFile = string.Join("^", buffur);
                    }
                    catch (Exception ex)
                    {
                        return Content(new { Success = false, ErrorMsg = ex.Message }.ToJson());
                    }
                }
                return Content(print.ToJson());
            }
            return Content(new { Success = false, ErrorMsg = "狗日的，参数不对，重新传！" }.ToJson());
        }
```

怎么样，是不是很简单呢？在[演示网站](https://fastreport.jhrs.com/)中，也提供了下载功能，这里就不做过多介绍了，完整的解决方案源码你可以在github上找到。

**最后提示：**FastReport.net 组件是付费产品，你在使用过程中，需要购买授权，你可以在它们的官网上联系售后进行购买。**下面提供的2.0学习版较为古老，最新版界面风格也变了，但使用方式类似。**

# 总结

本文写得比较简单，如果你是一个新手，况且对于FastReport.net没有过多的了解，或者不熟悉，会遇到很多的问题，本来还想画一张图来说明一下的，但想想还是算了，毕竟当阅读到这篇文章的人都是开发人员，且有需求，应该会弄明白的。

顺便提一下，本文并没有讲解如何使用FastReport.net，例如怎样制作报表文件，怎样绑定数据源，怎样添加字典文件等，这些内容，只需要看看FastReport.net提供的demo程序就明白了。做为学习使用，这里提供了一个国外网盘下载地址，你可以下载FastReport.net来学习，如果下载不了，请参见上面打开github的方法解决，毕竟是国外的网盘。

你下载时需要做好心里准备，这TMD的网盘要连点几次广告才能下载。。**当然钱能解决一切问题。**

FastReport.net 2.0学习版下载地址：[点击下载](http://up-4.net/d/Qdbe)

![img](https://gitee.com/AZRNG/picture-storage/raw/master/kbms/202112272308334.webp)