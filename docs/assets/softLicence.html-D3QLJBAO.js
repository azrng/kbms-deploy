import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,d as s}from"./app-CBxp4zeL.js";const l="/kbms/common/06207edb0c90475ba2c0eaeec6246f68.png",d={},r=s('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>我们在使用一些需要购买版权的软件产品时，或者我们做的商业软件需要进行售卖，为了收取费用，一般需要一个软件使用许可证，然后输入这个许可到软件里就能够使用软件。简单的是一串序列码或者一个许可证文件，复杂的是一个定制化插件包。于是有的小伙伴就开始好奇这个许可是怎么实现的，特别是在离线情况下它是怎么给软件授权，同时又能避免被破解的。</p><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2><p>本文主要介绍的是许可证形式的授权。</p><p><strong>1. 如何控制只在指定设备上使用</strong></p><p>如果不控制指定设备，那么下发了许可证，只要把软件复制多份安装则可到处使用，不利于版权维护，每个设备都有唯一标识：mac地址，ip地址，主板序列号等，在许可证中指定唯一标识则只能指定设备使用。</p><p><strong>2. 如何控制软件使用期限</strong></p><p>为了版权可持续性收益，对软件使用设置期限，到期续费等，则需要在许可证中配置使用起止日期。</p><h2 id="licence实现方案" tabindex="-1"><a class="header-anchor" href="#licence实现方案"><span><strong>Licence实现方案</strong></span></a></h2><p><strong>一、流程设计</strong></p><ul><li>形式：许可证以文件形式下发，放在客户端电脑指定位置</li><li>流程：将控制项加密后写入license文件节点，部署到客户机器，客户机使用时再读取license文件内容与客户机实际参数进行匹配校验</li></ul><p><strong>二、文件防破解</strong></p><ul><li>防止篡改：文件内容加密，使用AES加密，但是AES加密解密都是使用同一个key；使用非对称公私钥（本文使用的RSA）对内容加密解密，但是对内容长度有限制；综合方案，将AES的key（内部定义）用RSA加密，公钥放在加密工具中，内部持有，私钥放在解密工具中，引入软件产品解密使用。</li><li>防止修改系统时间绕过许可证使用时间：许可证带上发布时间戳，并定时修改运行时间记录到文件，如果系统时间小于这个时间戳，就算大于许可证限制的起始时间也无法使用</li><li>提高破解难度：懂技术的可以将代码反编译过来修改代码文件直接绕过校验，所以需要进行代码混淆，有测试过xjar的混淆效果比较好。</li></ul><h2 id="licence验证流程图" tabindex="-1"><a class="header-anchor" href="#licence验证流程图"><span><strong>Licence验证流程图</strong></span></a></h2><p>关于Licence验证软件合法性流程图，如下所示：</p><figure><img src="'+l+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="核心源码" tabindex="-1"><a class="header-anchor" href="#核心源码"><span><strong>核心源码</strong></span></a></h2><p>本实例主要讲解Licence的实际验证过程，分为三部分：</p><ol><li>测试客户端【LicenceTest】，主要用于模拟客户端验证Licence的过程。</li><li>生成工具【LicenceTool】，主要用于根据客户生成的电脑文件，生成对应的Licence。</li><li>LicenceCommon，Licence公共通用类，主要实现电脑信息获取，非对称加密，文件保存等功能。</li></ol><h3 id="licencecommon" tabindex="-1"><a class="header-anchor" href="#licencecommon"><span><strong>LicenceCommon</strong></span></a></h3><h4 id="电脑信息获取" tabindex="-1"><a class="header-anchor" href="#电脑信息获取"><span><strong>电脑信息获取</strong></span></a></h4><p>主要通过ManagementClass进行获取客户端电脑硬件相关配置信息，如下所示：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Management;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;
 
namespace DemoLicence.Common
{
    public class ComputerHelper
    {
        public static Dictionary&lt;string,string&gt; GetComputerInfo()
        {
            var info = new Dictionary&lt;string,string&gt;();
            string cpu = GetCPUInfo();
            string baseBoard = GetBaseBoardInfo();
            string bios = GetBIOSInfo();
            string mac = GetMACInfo();
            info.Add(&quot;cpu&quot;, cpu);
            info.Add(&quot;baseBoard&quot;, baseBoard);
            info.Add(&quot;bios&quot;, bios);
            info.Add(&quot;mac&quot;, mac);
            return info;
        }
        private static string GetCPUInfo()
        {
            string info = string.Empty;
            info = GetHardWareInfo(&quot;Win32_Processor&quot;, &quot;ProcessorId&quot;);
            return info;
        }
        private static string GetBIOSInfo()
        {
            string info = string.Empty;
            info = GetHardWareInfo(&quot;Win32_BIOS&quot;, &quot;SerialNumber&quot;);
            return info;
        }
        private static string GetBaseBoardInfo()
        {
            string info = string.Empty;
            info = GetHardWareInfo(&quot;Win32_BaseBoard&quot;, &quot;SerialNumber&quot;);
            return info;
        }
        private static string GetMACInfo()
        {
            string info = string.Empty;
            info = GetMacAddress();//GetHardWareInfo(&quot;Win32_NetworkAdapterConfiguration&quot;, &quot;MACAddress&quot;);
            return info;
        }
 
        private static string GetMacAddress()
        {
            var mac = &quot;&quot;;
            var mc = new ManagementClass(&quot;Win32_NetworkAdapterConfiguration&quot;);
            var moc = mc.GetInstances();
            foreach (var o in moc)
            {
                var mo = (ManagementObject)o;
                if (!(bool)mo[&quot;IPEnabled&quot;]) continue;
                mac = mo[&quot;MacAddress&quot;].ToString();
                break;
            }
            return mac;
        }
 
        private static string GetHardWareInfo(string typePath, string key)
        {
            try
            {
                ManagementClass managementClass = new ManagementClass(typePath);
                ManagementObjectCollection mn = managementClass.GetInstances();
                PropertyDataCollection properties = managementClass.Properties;
                foreach (PropertyData property in properties)
                {
                    if (property.Name == key)
                    {
                        foreach (ManagementObject m in mn)
                        {
                            return m.Properties[property.Name].Value.ToString();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                //这里写异常的处理
            }
            return string.Empty;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rsa非对称加密" tabindex="-1"><a class="header-anchor" href="#rsa非对称加密"><span><strong>RSA非对称加密</strong></span></a></h4><p>主要对客户端提供的电脑信息及有效期等内容，进行非对称加密，如下所示：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>public class RSAHelper
{
 
  private static string keyContainerName = &quot;star&quot;;
 
  private static string m_PriKey = string.Empty;
 
  private static string m_PubKey = string.Empty;
 
 
  public static string PriKey
  {
    get
    {
      return m_PriKey;
    }
 
    set
    {
      m_PriKey = value;
    }
  }
 
  public static string PubKey
  {
    get
    {
      return m_PubKey;
    }
 
    set
    {
      m_PubKey = value;
    }
  }
 
  public static string Encrypto(string source)
  {
    if (string.IsNullOrEmpty(m_PubKey) &amp;&amp; string.IsNullOrEmpty(m_PriKey))
    {
      generateKey();
    }
    return getEncryptoInfoByRSA(source);
  }
 
  public static string Decrypto(string dest)
  {
    if (string.IsNullOrEmpty(m_PubKey) &amp;&amp; string.IsNullOrEmpty(m_PriKey))
    {
      generateKey();
    }
    return getDecryptoInfoByRSA(dest);
  }
 
  public static void generateKey()
  {
    CspParameters m_CspParameters;
    m_CspParameters = new CspParameters();
    m_CspParameters.KeyContainerName = keyContainerName;
    RSACryptoServiceProvider asym = new RSACryptoServiceProvider(m_CspParameters);
    m_PriKey = asym.ToXmlString(true);
    m_PubKey = asym.ToXmlString(false);
    asym.PersistKeyInCsp = false;
    asym.Clear();
  }
 
  private static string getEncryptoInfoByRSA(string source)
  {
    byte[] plainByte = Encoding.ASCII.GetBytes(source);
    //初始化参数
    RSACryptoServiceProvider asym = new RSACryptoServiceProvider();
    asym.FromXmlString(m_PubKey);
    int keySize = asym.KeySize / 8;//非对称加密，每次的长度不能太长，否则会报异常
    int bufferSize = keySize - 11;
    if (plainByte.Length &gt; bufferSize)
    {
      throw new Exception(&quot;非对称加密最多支持【&quot; + bufferSize + &quot;】字节，实际长度【&quot; + plainByte.Length + &quot;】字节。&quot;);
    }
    byte[] cryptoByte = asym.Encrypt(plainByte, false);
    return Convert.ToBase64String(cryptoByte);
  }
 
  private static string getDecryptoInfoByRSA(string dest)
  {
    byte[] btDest = Convert.FromBase64String(dest);
    //初始化参数
    RSACryptoServiceProvider asym = new RSACryptoServiceProvider();
    asym.FromXmlString(m_PriKey);
    int keySize = asym.KeySize / 8;//非对称加密，每次的长度不能太长，否则会报异常
                     //int bufferSize = keySize - 11;
    if (btDest.Length &gt; keySize)
    {
      throw new Exception(&quot;非对称解密最多支持【&quot; + keySize + &quot;】字节，实际长度【&quot; + btDest.Length + &quot;】字节。&quot;);
    }
    byte[] cryptoByte = asym.Decrypt(btDest, false);
    return Encoding.ASCII.GetString(cryptoByte);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生成文件" tabindex="-1"><a class="header-anchor" href="#生成文件"><span><strong>生成文件</strong></span></a></h4><p>主要是加密后的信息，和解密秘钥等内容，保存到文件中，如下所示：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
namespace DemoLicence.Common
{
    public class RegistFileHelper
    {
        public static string ComputerInfofile = &quot;ComputerInfo.key&quot;;
        public static string RegistInfofile = &quot;Licence.key&quot;;
        public static void WriteRegistFile(string info,string keyFile)
        {
            string tmp = string.IsNullOrEmpty(keyFile)?RegistInfofile:keyFile;
            WriteFile(info, tmp);
        }
        public static void WriteComputerInfoFile(string info)
        {
            WriteFile(info, ComputerInfofile);
        }
        public static string ReadRegistFile(string keyFile)
        {
            string tmp = string.IsNullOrEmpty(keyFile) ? RegistInfofile : keyFile;
            return ReadFile(tmp);
        }
        public static string ReadComputerInfoFile(string file)
        {
            string tmp = string.IsNullOrEmpty(file) ? ComputerInfofile : file;
            return ReadFile(tmp);
        }
 
        private static void WriteFile(string info, string fileName)
        {
            try
            {
                using (StreamWriter sw = new StreamWriter(fileName, false))
                {
                    sw.Write(info);
                    sw.Close();
                }
            }
            catch (Exception ex)
            {
            }
        }
        private static string ReadFile(string fileName)
        {
            string info = string.Empty;
            try
            {
                using (StreamReader sr = new StreamReader(fileName))
                {
                    info = sr.ReadToEnd();
                    sr.Close();
                }
            }
            catch (Exception ex)
            {
            }
            return info;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上这三部分，各个功能相互独立，通过LicenceHelper相互调用，如下所示：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
 
namespace DemoLicence.Common
{
    public class LicenceHelper
    {
        /// &lt;summary&gt;
        /// 获取电脑信息，并生成文件
        /// &lt;/summary&gt;
        public static string GetComputerInfoAndGenerateFile()
        {
            string computerKeyFile = string.Empty;
            try
            {
                var info = GetComputerInfo();
                if (info != null &amp;&amp; info.Count &gt; 0)
                {
                    //获取到电脑信息
                    var strInfo = new StringBuilder();
                    foreach (var computer in info)
                    {
                        strInfo.AppendLine($&quot;{computer.Key}={computer.Value}&quot;);
                    }
                    RegistFileHelper.WriteComputerInfoFile(strInfo.ToString());
                    computerKeyFile = RegistFileHelper.ComputerInfofile;
                }
            }catch(Exception ex)
            {
                throw ex;
            }
            return computerKeyFile;
        }
 
        public static Dictionary&lt;string,string&gt; GetComputerInfo()
        {
            var info = ComputerHelper.GetComputerInfo();
            return info;
        }
 
        public static bool CheckLicenceKeyIsExists()
        {
            var keyFile = RegistFileHelper.RegistInfofile;
            if (File.Exists(keyFile))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
 
        public static string GetComputerInfo(string computerInfoFile)
        {
            return RegistFileHelper.ReadComputerInfoFile(computerInfoFile);
        }
 
        public static void GenerateLicenceKey(string info,string keyfile)
        {
            string encrypto = RSAHelper.Encrypto(info);
            string priKey = RSAHelper.PriKey;//公钥加密，私钥解密
            byte[] priKeyBytes = Encoding.ASCII.GetBytes(priKey);
            string priKeyBase64=Convert.ToBase64String(priKeyBytes);
            StringBuilder keyInfo= new StringBuilder();
            keyInfo.AppendLine($&quot;prikey={priKeyBase64}&quot;);
            keyInfo.AppendLine($&quot;encrypto={encrypto}&quot;);
            RegistFileHelper.WriteRegistFile(keyInfo.ToString(), keyfile);
        }
 
        public static string ReadLicenceKey(string keyfile)
        {
            var keyInfo = RegistFileHelper.ReadRegistFile(keyfile);
            if (keyInfo == null)
            {
                return string.Empty;
            }
            string[] keyInfoArr = keyInfo.Split(&quot;\\r\\n&quot;);
            var priKeyBase64 = keyInfoArr[0].Substring(keyInfoArr[0].IndexOf(&quot;=&quot;)+1);
            var encrypto = keyInfoArr[1].Substring(keyInfoArr[1].IndexOf(&quot;=&quot;)+1);
            var priKeyByte= Convert.FromBase64String(priKeyBase64);
            var priKey = Encoding.ASCII.GetString(priKeyByte);
            RSAHelper.PriKey= priKey;
            var info = RSAHelper.Decrypto(encrypto);
            return info;
        }
 
        public static string GetDefaultRegisterFileName()
        {
            return RegistFileHelper.RegistInfofile;
        }
 
        public static string GetDefaultComputerFileName()
        {
            return RegistFileHelper.ComputerInfofile;
        }
        
        public static string GetPublicKey()
        {
            if (string.IsNullOrEmpty(RSAHelper.PubKey))
            {
                RSAHelper.generateKey();
            }
            return RSAHelper.PubKey;
        }
 
        public static string GetPrivateKey()
        {
            if (string.IsNullOrEmpty(RSAHelper.PriKey))
            {
                RSAHelper.generateKey();
            }
            return RSAHelper.PriKey;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端licencetest" tabindex="-1"><a class="header-anchor" href="#客户端licencetest"><span><strong>客户端LicenceTest</strong></span></a></h3><p>客户端验证Licence的有效性，当Licence有效时，正常使用软件，当Licence无效时，则不能正常使用软件。如下所示：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>
using DemoLicence.Common;
 
namespace LicenceTest
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }
 
        private void MainForm_Load(object sender, EventArgs e)
        {
            try
            {
 
                string info = string.Empty;
                string msg = string.Empty;
                //初始化加载
                if (LicenceHelper.CheckLicenceKeyIsExists())
                {
                    string keyFile = LicenceHelper.GetDefaultRegisterFileName();
                    info = LicenceHelper.ReadLicenceKey(keyFile);
                }
                else
                {
                    var dialogResult = MessageBox.Show(&quot;没有找到默认首选文件，是否手动选择授权文件？&quot;, &quot;询问&quot;, MessageBoxButtons.YesNo);
                    if (dialogResult == DialogResult.Yes)
                    {
                        OpenFileDialog openFileDialog = new OpenFileDialog();
                        openFileDialog.Title = &quot;请选择授权文件&quot;;
                        openFileDialog.FileName = LicenceHelper.GetDefaultRegisterFileName();
                        if (openFileDialog.ShowDialog() == DialogResult.OK)
                        {
                            var keyFile = openFileDialog.FileName;
                            info = LicenceHelper.ReadLicenceKey(keyFile);
                            //验证成功后，将手动选择的文件复制到程序根目录,且修改为默认名称
                            File.Copy(keyFile, LicenceHelper.GetDefaultRegisterFileName());
 
                        }
                        else
                        {
                            string computerFile = LicenceHelper.GetComputerInfoAndGenerateFile();
                            if (!string.IsNullOrEmpty(computerFile))
                            {
                                msg = $&quot;您还没有被授权，请将程序根目录下的{computerFile}文件，发送到管理员，获取Licence.&quot;;
                            }
                        }
                    }
                    else
                    {
                        string computerFile = LicenceHelper.GetComputerInfoAndGenerateFile();
                        if (!string.IsNullOrEmpty(computerFile))
                        {
                            msg = $&quot;您还没有被授权，请将程序根目录下的{computerFile}文件，发送到管理员，获取Licence.&quot;;
                        }
                    }
                }
                if (!string.IsNullOrEmpty(info) &amp;&amp; string.IsNullOrEmpty(msg))
                {
                    string[] infos = info.Split(&quot;\\r\\n&quot;);
                    if (infos.Length &gt; 0)
                    {
                        var dicInfo = new Dictionary&lt;string, string&gt;();
                        foreach (var info2 in infos)
                        {
                            if (string.IsNullOrEmpty(info2))
                            {
                                continue;
                            }
                            var info2Arr = info2.Split(&quot;=&quot;);
                            dicInfo.Add(info2Arr[0], info2Arr[1]);
                        }
                        if (dicInfo.Count &gt; 0)
                        {
                            string localMacAddress = string.Empty;
                            var computerInfo = LicenceHelper.GetComputerInfo();
                            if (computerInfo != null)
                            {
                                localMacAddress = computerInfo[&quot;mac&quot;];
                            }
                            //比较本地信息和Licence中的信息是否一致
                            if (localMacAddress == dicInfo[&quot;mac&quot;])
                            {
                                var endTime = DateTime.Parse(dicInfo[&quot;endTime&quot;]);
                                if (DateTime.Now &lt; endTime)
                                {
                                    //在有效期内，可以使用
                                }
                                else
                                {
                                    msg = $&quot;软件授权使用时间范围：[{endTime}之前]，已过期&quot;;
                                }
                            }
                            else
                            {
                                msg = &quot;软件Licence不匹配&quot;;
                            }
                        }
                        else
                        {
                            msg = $&quot;软件Licence非法.&quot;;
                        }
                    }
                    else
                    {
                        msg = $&quot;软件Licence非法.&quot;;
                    }
                }
                if (!string.IsNullOrEmpty(msg))
                {
                    MessageBox.Show(msg);
                    foreach (var control in this.Controls)
                    {
                        (control as Control).Enabled = false;
                    }
                    return;
                }
            }
            catch (Exception ex)
            {
                string error = $&quot;程序异常，请联系管理人员：{ex.Message}\\r\\n{ex.StackTrace}&quot;;
                MessageBox.Show(error);
                foreach (var control in this.Controls)
                {
                    (control as Control).Enabled = false;
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="licence生成工具" tabindex="-1"><a class="header-anchor" href="#licence生成工具"><span><strong>Licence生成工具</strong></span></a></h3><p>LicenceTool主要根据客户端提供的电脑信息，生成对应的Licence，然后再发送给客户端，以此达到客户端电脑的授权使用软件的目的。如下所示：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>
using DemoLicence.Common;
using System.Text;
 
namespace LicenceTool
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }
 
 
        private void MainForm_Load(object sender, EventArgs e)
        {
            this.txtPublicKey.Text=LicenceHelper.GetPublicKey();
            this.txtPrivateKey.Text=LicenceHelper.GetPrivateKey();
        }
 
 
 
        private void btnBrowser_Click(object sender, EventArgs e)
        {
            OpenFileDialog ofd = new OpenFileDialog();
            ofd.Filter = &quot;电脑信息文件|*.key&quot;;
            ofd.Multiselect = false;
            ofd.Title = &quot;请选择电脑信息文件&quot;;
            ofd.FileName=LicenceHelper.GetDefaultComputerFileName();
            if (ofd.ShowDialog() == DialogResult.OK)
            {
                this.txtSourceFile.Text = ofd.FileName;
            }
        }
 
        private void btnGenerate_Click(object sender, EventArgs e)
        {
 
            try
            {
                if (string.IsNullOrEmpty(this.txtSourceFile.Text))
                {
                    MessageBox.Show(&quot;请先选择电脑信息文件&quot;);
                    return;
                }
                if (File.Exists(this.txtSourceFile.Text))
                {
                    //读取电脑文件
                    var info = LicenceHelper.GetComputerInfo(this.txtSourceFile.Text);
                    int days = GetLicenceDays();
                    var keyInfos = new StringBuilder(info);
                    var beginTime = DateTime.Now;
                    var endTime = DateTime.Now.AddDays(days);
                    //keyInfos.AppendLine($&quot;beginTime={beginTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;)}&quot;);
                    keyInfos.AppendLine($&quot;endTime={endTime.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;)}&quot;);
                    //
                    info = keyInfos.ToString();
                    SaveFileDialog saveFileDialog = new SaveFileDialog();
                    saveFileDialog.Title = &quot;保存生成的Licence文件&quot;;
                    saveFileDialog.FileName = LicenceHelper.GetDefaultRegisterFileName();
                    if (saveFileDialog.ShowDialog() == DialogResult.OK)
                    {
                        LicenceHelper.GenerateLicenceKey(info, saveFileDialog.FileName);
                        MessageBox.Show(&quot;生成成功&quot;);
                    }
                }
                else
                {
                    MessageBox.Show(&quot;电脑信息文件不存在！&quot;);
                    return;
                }
            }catch(Exception ex)
            {
                string error = $&quot;生成出错：{ex.Message}\\r\\n{ex.StackTrace}&quot;;
                MessageBox.Show(error);
            }
        }
 
        /// &lt;summary&gt;
        /// 获取有效期天数
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private int GetLicenceDays()
        {
            int days = 1;
            RadioButton[] rbtns = new RadioButton[] { this.rbtSeven, this.rbtnTen, this.rbtnFifteen, this.rbtnThirty, this.rbtnSixty, this.rbtnSixMonth, this.rbtnNinety, this.rbtnSixMonth, this.rbtnForver };
            foreach (RadioButton rb in rbtns)
            {
                if (rb.Checked)
                {
                    if (!int.TryParse(rb.Tag.ToString(), out days))
                    {
                        days = 0;
                    }
                    break;
                }
            }
            days = days == -1 ? 9999 : days;//永久要转换一下
            return days;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试验证" tabindex="-1"><a class="header-anchor" href="#测试验证"><span><strong>测试验证</strong></span></a></h2><p>启动软件时会进行校验，在没有Licence时，会有信息提示，且无法使用软件。</p><p>Lincence生成工具</p><p>根据客户提供的电脑信息文件，生成对应的Licence。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意：非对称加密每次生成的秘钥都是不同的，所以需要将解密秘钥一起保存到生成的Licence文件中，否则秘钥不同，则无法解密。</p></div><h2 id="源码地址" tabindex="-1"><a class="header-anchor" href="#源码地址"><span>源码地址</span></a></h2><p>https://gitee.com/ahsiang/demo-licence</p><h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料"><span>资料</span></a></h2><p>https://mp.weixin.qq.com/s/tHVq_x2RspiBUyN1_oBpUw | C# 软件Licence应用实例</p>`,46),v=[r];function a(c,t){return e(),n("div",null,v)}const o=i(d,[["render",a],["__file","softLicence.html.vue"]]),b=JSON.parse('{"path":"/softwareDesign/systemDesign/softLicence.html","title":"软件Licence应用实例","lang":"zh-CN","frontmatter":{"title":"软件Licence应用实例","lang":"zh-CN","date":"2023-08-12T00:00:00.000Z","publish":true,"author":"码农阿亮","isOriginal":false,"category":["dotNet"],"tag":["licence"],"filename":"softLicence","article":false,"description":"前言 我们在使用一些需要购买版权的软件产品时，或者我们做的商业软件需要进行售卖，为了收取费用，一般需要一个软件使用许可证，然后输入这个许可到软件里就能够使用软件。简单的是一串序列码或者一个许可证文件，复杂的是一个定制化插件包。于是有的小伙伴就开始好奇这个许可是怎么实现的，特别是在离线情况下它是怎么给软件授权，同时又能避免被破解的。 应用场景 本文主要介...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/softwareDesign/systemDesign/softLicence.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"软件Licence应用实例"}],["meta",{"property":"og:description","content":"前言 我们在使用一些需要购买版权的软件产品时，或者我们做的商业软件需要进行售卖，为了收取费用，一般需要一个软件使用许可证，然后输入这个许可到软件里就能够使用软件。简单的是一串序列码或者一个许可证文件，复杂的是一个定制化插件包。于是有的小伙伴就开始好奇这个许可是怎么实现的，特别是在离线情况下它是怎么给软件授权，同时又能避免被破解的。 应用场景 本文主要介..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/06207edb0c90475ba2c0eaeec6246f68.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-18T03:09:09.000Z"}],["meta",{"property":"article:author","content":"码农阿亮"}],["meta",{"property":"article:tag","content":"licence"}],["meta",{"property":"article:published_time","content":"2023-08-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-18T03:09:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"软件Licence应用实例\\",\\"description\\":\\"前言 我们在使用一些需要购买版权的软件产品时，或者我们做的商业软件需要进行售卖，为了收取费用，一般需要一个软件使用许可证，然后输入这个许可到软件里就能够使用软件。简单的是一串序列码或者一个许可证文件，复杂的是一个定制化插件包。于是有的小伙伴就开始好奇这个许可是怎么实现的，特别是在离线情况下它是怎么给软件授权，同时又能避免被破解的。 应用场景 本文主要介...\\"}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":2,"title":"Licence实现方案","slug":"licence实现方案","link":"#licence实现方案","children":[]},{"level":2,"title":"Licence验证流程图","slug":"licence验证流程图","link":"#licence验证流程图","children":[]},{"level":2,"title":"核心源码","slug":"核心源码","link":"#核心源码","children":[{"level":3,"title":"LicenceCommon","slug":"licencecommon","link":"#licencecommon","children":[{"level":4,"title":"电脑信息获取","slug":"电脑信息获取","link":"#电脑信息获取","children":[]},{"level":4,"title":"RSA非对称加密","slug":"rsa非对称加密","link":"#rsa非对称加密","children":[]},{"level":4,"title":"生成文件","slug":"生成文件","link":"#生成文件","children":[]}]},{"level":3,"title":"客户端LicenceTest","slug":"客户端licencetest","link":"#客户端licencetest","children":[]},{"level":3,"title":"Licence生成工具","slug":"licence生成工具","link":"#licence生成工具","children":[]}]},{"level":2,"title":"测试验证","slug":"测试验证","link":"#测试验证","children":[]},{"level":2,"title":"源码地址","slug":"源码地址","link":"#源码地址","children":[]},{"level":2,"title":"资料","slug":"资料","link":"#资料","children":[]}],"git":{"createdTime":1694342968000,"updatedTime":1702868949000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":8.81,"words":2643},"filePathRelative":"softwareDesign/systemDesign/softLicence.md","localizedDate":"2023年8月12日","excerpt":"<h2>前言</h2>\\n<p>我们在使用一些需要购买版权的软件产品时，或者我们做的商业软件需要进行售卖，为了收取费用，一般需要一个软件使用许可证，然后输入这个许可到软件里就能够使用软件。简单的是一串序列码或者一个许可证文件，复杂的是一个定制化插件包。于是有的小伙伴就开始好奇这个许可是怎么实现的，特别是在离线情况下它是怎么给软件授权，同时又能避免被破解的。</p>\\n<h2>应用场景</h2>\\n<p>本文主要介绍的是许可证形式的授权。</p>\\n<p><strong>1. 如何控制只在指定设备上使用</strong></p>\\n<p>如果不控制指定设备，那么下发了许可证，只要把软件复制多份安装则可到处使用，不利于版权维护，每个设备都有唯一标识：mac地址，ip地址，主板序列号等，在许可证中指定唯一标识则只能指定设备使用。</p>","autoDesc":true}');export{o as comp,b as data};
