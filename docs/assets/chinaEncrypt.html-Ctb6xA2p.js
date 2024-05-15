import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,d as s}from"./app-CBxp4zeL.js";const a={},l=s(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>国密算法包括SM1、SM2、SM3、SM4、SM7、SM9、祖冲之密码算法（ZUC) 等。</p><h2 id="sm2" tabindex="-1"><a class="header-anchor" href="#sm2"><span>SM2</span></a></h2><h3 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一"><span>方案一</span></a></h3><p>根据字符串配置去嘉兴加解密，引用nuget包：BouncyCastle.Cryptography</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
/// 生成 SM2 密钥对，密钥对使用 Base64 进行编码
/// &lt;/summary&gt;
/// &lt;param name=&quot;privateKey&quot;&gt;&lt;/param&gt;
/// &lt;param name=&quot;publicKey&quot;&gt;&lt;/param&gt;
public static void GenerateSM2KeyPair(out string privateKey, out string publicKey)
{
    // 获取 SM2 曲线参数
    X9ECParameters curve = ECNamedCurveTable.GetByName(&quot;sm2p256v1&quot;);
    KeyGenerationParameters parameters = new ECKeyGenerationParameters(new ECDomainParameters(curve), new SecureRandom());

    // 创建 SM2 密钥对生成器
    ECKeyPairGenerator generator = new ECKeyPairGenerator();
    generator.Init(parameters);

    // 创建密钥对
    var keyPair = generator.GenerateKeyPair();

    // 私钥
    ECPrivateKeyParameters privateKeyParameters = (ECPrivateKeyParameters)keyPair.Private;
    privateKey = Base64.ToBase64String(privateKeyParameters.D.ToByteArrayUnsigned());

    // 公钥
    ECPublicKeyParameters publicKeyParameters = (ECPublicKeyParameters)keyPair.Public;
    publicKey = Base64.ToBase64String(publicKeyParameters.Q.GetEncoded());
}

/// &lt;summary&gt;
/// SM2 公钥加密
/// &lt;/summary&gt;
/// &lt;param name=&quot;message&quot;&gt;&lt;/param&gt;
/// &lt;param name=&quot;key&quot;&gt;&lt;/param&gt;
/// &lt;returns&gt;&lt;/returns&gt;
public static string Encrypt(string message, string key)
{
    // 获取 SM2 曲线参数
    X9ECParameters curve = ECNamedCurveTable.GetByName(&quot;sm2p256v1&quot;);

    ECPoint q = curve.Curve.DecodePoint(Base64.Decode(key));
    ECDomainParameters domain = new ECDomainParameters(curve);
    ECPublicKeyParameters pubk = new ECPublicKeyParameters(&quot;EC&quot;, q, domain);

    // 创建SM2加密器
    SM2Engine sm2Engine = new SM2Engine();
    sm2Engine.Init(true, new ParametersWithRandom(pubk, new SecureRandom()));

    // 将原始数据转换为字节数组
    byte[] dataBytes = Encoding.UTF8.GetBytes(message);

    // 执行加密操作
    byte[] encryptedData = sm2Engine.ProcessBlock(dataBytes, 0, dataBytes.Length);

    // 将加密结果转换为 Base64 字符串
    return Base64.ToBase64String(encryptedData);
}

/// &lt;summary&gt;
/// SM2 私钥解密
/// &lt;/summary&gt;
/// &lt;param name=&quot;message&quot;&gt;&lt;/param&gt;
/// &lt;param name=&quot;key&quot;&gt;&lt;/param&gt;
/// &lt;returns&gt;&lt;/returns&gt;
public static string Decrypt(string message, string key)
{
    // 获取 SM2 曲线参数
    X9ECParameters curve = ECNamedCurveTable.GetByName(&quot;sm2p256v1&quot;);

    ECDomainParameters domain = new ECDomainParameters(curve);
    BigInteger d = new BigInteger(1, Base64.Decode(key));
    ECPrivateKeyParameters prik = new ECPrivateKeyParameters(d, domain);

    // 创建SM2加密器
    SM2Engine sm2Engine = new SM2Engine();
    sm2Engine.Init(false, prik);

    byte[] encryptedData = Base64.Decode(message);

    // 执行解密操作
    byte[] decryptedData = sm2Engine.ProcessBlock(encryptedData, 0, encryptedData.Length);

    // 将解密结果转换为字符串
    return Encoding.UTF8.GetString(decryptedData);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>string privateKey = &quot;Ja4UIUJz7XRNDhIiuWXwL78qd1Pc7SC0/Z9LzyF4SL8=&quot;;
string publicKey = &quot;BGe1BZDFN+NhCQtc2qlVk8nUlXrIwcyjT3mMt7Xx3BkDNBGBQjFPV0+h3/cGUYXo2TFI1SShS7hWl9zi6SxUHvg=&quot;;

string raw = &quot;jacky&quot;;
string e = Encrypt(raw, publicKey);
Console.WriteLine($&quot;加密结果：{e}&quot;);

string d = Decrypt(e, privateKey);
Console.WriteLine($&quot;解密结果：{d}&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>资料：https://www.cnblogs.com/jackylovewendy/p/17449059.html</p><h3 id="方案三" tabindex="-1"><a class="header-anchor" href="#方案三"><span>方案三</span></a></h3><p>通过源文件方式处理</p><h4 id="加密解密" tabindex="-1"><a class="header-anchor" href="#加密解密"><span>加密解密</span></a></h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>原文地址：https://www.cnblogs.com/runliuv/p/17607568.html</p></div><p>.NET 环境：.NET6 控制台程序(.net core)。</p><p>JAVA 环境：JAVA8，带maven 的JAVA控制台程序。</p><p>简要解析： 1.最好要到对方源码(DEMO+JAR包也可以)，可以用IDEA反编译（Ctrl+鼠标左键），看它过程逻辑和加密结果格式。</p><p>2.加密结果顺序：早期是 C1C2C3，后期是C1C3C2 ，双方得约定好。</p><p>3.加密结果：BASE64字符串或16进制字符串 ，双方得约定好。</p><p>\\4. .NET BC库SM2加密结果会带04，如果JAVA 那边报 Invalid point encoding 错误，删除加密结果前的04。如果对方要的是BASE64的加密结果，我们可以先转16进制字符串，裁掉04，再转BASE64。</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>string newCipherText = Hex.ToHexString(bysm2keyEncrypted);
if (newCipherText.StartsWith(&quot;04&quot;))
{
  newCipherText = newCipherText.Substring(2);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\\5. .NET BC库解密，密文前要加 “04”，否则会报 Invalid point encoding XX 。如果加密结果是BASE64的，先把BASE64转16进制字符串，再判断是否04开头。 如果JAVA源码，固定截取的头2位，那么就不用判断是否04开头了，直接写死：javaSM2 = &quot;04&quot; + javaSM2;</p><p>生成一组国密公私钥：</p><p>私钥：FAB8BBE670FAE338C9E9382B9FB6485225C11A3ECB84C938F10F20A93B6215F0</p><p>公钥：049EF573019D9A03B16B0BE44FC8A5B4E8E098F56034C97B312282DD0B4810AFC3CC759673ED0FC9B9DC7E6FA38F0E2B121E02654BF37EA6B63FAF2A0D6013EADF</p><p>本例是：C1C3C2。</p><p>//GmUtil.Sm2Encrypt 对应 C1C3C2 // GmUtil.Sm2EncryptOld ：C1C2C3</p><p>.NET 代码：</p><p>GmUtil 工具类，需要nuget下载 Portable.BouncyCastle 1.9.0 版本：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Asn1.GM;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Engines;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Security;
using Org.BouncyCastle.Utilities;
using Org.BouncyCastle.Utilities.Encoders;
using Org.BouncyCastle.X509;
using System;
using System.Collections.Generic;
using System.IO;

namespace CommonUtils
{
    /**
     * need lib:
     * BouncyCastle.Crypto.dll（http://www.bouncycastle.org/csharp/index.html） 
      
     * 用BC的注意点：
     * 这个版本的BC对SM3withSM2的结果为asn1格式的r和s，如果需要直接拼接的r||s需要自己转换。下面rsAsn1ToPlainByteArray、rsPlainByteArrayToAsn1就在干这事。
     * 这个版本的BC对SM2的结果为C1||C2||C3，据说为旧标准，新标准为C1||C3||C2，用新标准的需要自己转换。下面（被注释掉的）changeC1C2C3ToC1C3C2、changeC1C3C2ToC1C2C3就在干这事。java版的高版本有加上C1C3C2，csharp版没准以后也会加，但目前还没有，java版的目前可以初始化时“ SM2Engine sm2Engine = new SM2Engine(SM2Engine.Mode.C1C3C2);”。
     * 
     * 按要求国密算法仅允许使用加密机，本demo国密算法仅供学习使用，请不要用于生产用途。
     */
    public class GmUtil
    {

        //private static readonly ILog log = LogManager.GetLogger(typeof(GmUtil));

        private static X9ECParameters x9ECParameters = GMNamedCurves.GetByName(&quot;sm2p256v1&quot;);
        private static ECDomainParameters ecDomainParameters = new ECDomainParameters(x9ECParameters.Curve, x9ECParameters.G, x9ECParameters.N);

        /**
         *
         * @param msg
         * @param userId
         * @param privateKey
         * @return r||s，直接拼接byte数组的rs
         */
        public static byte[] SignSm3WithSm2(byte[] msg, byte[] userId, AsymmetricKeyParameter privateKey)
        {
            return RsAsn1ToPlainByteArray(SignSm3WithSm2Asn1Rs(msg, userId, privateKey));
        }

        /**
          * @param msg
          * @param userId
          * @param privateKey
          * @return rs in &lt;b&gt;asn1 format&lt;/b&gt;
          */
        public static byte[] SignSm3WithSm2Asn1Rs(byte[] msg, byte[] userId, AsymmetricKeyParameter privateKey)
        {
            try
            {
                ISigner signer = SignerUtilities.GetSigner(&quot;SM3withSM2&quot;);
                signer.Init(true, new ParametersWithID(privateKey, userId));
                signer.BlockUpdate(msg, 0, msg.Length);
                byte[] sig = signer.GenerateSignature();
                return sig;
            }
            catch (Exception e)
            {
                //log.Error(&quot;SignSm3WithSm2Asn1Rs error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
        *
        * @param msg
        * @param userId
        * @param rs r||s，直接拼接byte数组的rs
        * @param publicKey
        * @return
        */
        public static bool VerifySm3WithSm2(byte[] msg, byte[] userId, byte[] rs, AsymmetricKeyParameter publicKey)
        {
            if (rs == null || msg == null || userId == null) return false;
            if (rs.Length != RS_LEN * 2) return false;
            return VerifySm3WithSm2Asn1Rs(msg, userId, RsPlainByteArrayToAsn1(rs), publicKey);
        }

        /**
         *
         * @param msg
         * @param userId
         * @param rs in &lt;b&gt;asn1 format&lt;/b&gt;
         * @param publicKey
         * @return
         */

        public static bool VerifySm3WithSm2Asn1Rs(byte[] msg, byte[] userId, byte[] sign, AsymmetricKeyParameter publicKey)
        {
            try
            {
                ISigner signer = SignerUtilities.GetSigner(&quot;SM3withSM2&quot;);
                signer.Init(false, new ParametersWithID(publicKey, userId));
                signer.BlockUpdate(msg, 0, msg.Length);
                return signer.VerifySignature(sign);
            }
            catch (Exception e)
            {
                //log.Error(&quot;VerifySm3WithSm2Asn1Rs error: &quot; + e.Message, e);
                return false;
            }
        }

        /**
         * bc加解密使用旧标c1||c2||c3，此方法在加密后调用，将结果转化为c1||c3||c2
         * @param c1c2c3
         * @return
         */
        private static byte[] ChangeC1C2C3ToC1C3C2(byte[] c1c2c3)
        {
            int c1Len = (x9ECParameters.Curve.FieldSize + 7) / 8 * 2 + 1; //sm2p256v1的这个固定65。可看GMNamedCurves、ECCurve代码。
            const int c3Len = 32; //new SM3Digest().getDigestSize();
            byte[] result = new byte[c1c2c3.Length];
            Buffer.BlockCopy(c1c2c3, 0, result, 0, c1Len); //c1
            Buffer.BlockCopy(c1c2c3, c1c2c3.Length - c3Len, result, c1Len, c3Len); //c3
            Buffer.BlockCopy(c1c2c3, c1Len, result, c1Len + c3Len, c1c2c3.Length - c1Len - c3Len); //c2
            return result;
        }


        /**
         * bc加解密使用旧标c1||c3||c2，此方法在解密前调用，将密文转化为c1||c2||c3再去解密
         * @param c1c3c2
         * @return
         */
        private static byte[] ChangeC1C3C2ToC1C2C3(byte[] c1c3c2)
        {
            int c1Len = (x9ECParameters.Curve.FieldSize + 7) / 8 * 2 + 1; //sm2p256v1的这个固定65。可看GMNamedCurves、ECCurve代码。
            const int c3Len = 32; //new SM3Digest().GetDigestSize();
            byte[] result = new byte[c1c3c2.Length];
            Buffer.BlockCopy(c1c3c2, 0, result, 0, c1Len); //c1: 0-&gt;65
            Buffer.BlockCopy(c1c3c2, c1Len + c3Len, result, c1Len, c1c3c2.Length - c1Len - c3Len); //c2
            Buffer.BlockCopy(c1c3c2, c1Len, result, c1c3c2.Length - c3Len, c3Len); //c3
            return result;
        }

        /**
         * c1||c3||c2
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2Decrypt(byte[] data, AsymmetricKeyParameter key)
        {
            return Sm2DecryptOld(ChangeC1C3C2ToC1C2C3(data), key);
        }

        /**
         * c1||c3||c2
         * @param data
         * @param key
         * @return
         */

        public static byte[] Sm2Encrypt(byte[] data, AsymmetricKeyParameter key)
        {
            return ChangeC1C2C3ToC1C3C2(Sm2EncryptOld(data, key));
        }

        /**
         * c1||c2||c3
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2EncryptOld(byte[] data, AsymmetricKeyParameter pubkey)
        {
            try
            {
                SM2Engine sm2Engine = new SM2Engine();
                sm2Engine.Init(true, new ParametersWithRandom(pubkey, new SecureRandom()));
                return sm2Engine.ProcessBlock(data, 0, data.Length);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm2EncryptOld error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         * c1||c2||c3
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2DecryptOld(byte[] data, AsymmetricKeyParameter key)
        {
            try
            {
                SM2Engine sm2Engine = new SM2Engine();
                sm2Engine.Init(false, key);
                return sm2Engine.ProcessBlock(data, 0, data.Length);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm2DecryptOld error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         * @param bytes
         * @return
         */
        public static byte[] Sm3(byte[] bytes)
        {
            try
            {
                SM3Digest digest = new SM3Digest();
                digest.BlockUpdate(bytes, 0, bytes.Length);
                byte[] result = DigestUtilities.DoFinal(digest);
                return result;
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm3 error: &quot; + e.Message, e);
                return null;
            }
        }

        private const int RS_LEN = 32;

        private static byte[] BigIntToFixexLengthBytes(BigInteger rOrS)
        {
            // for sm2p256v1, n is 00fffffffeffffffffffffffffffffffff7203df6b21c6052b53bbf40939d54123,
            // r and s are the result of mod n, so they should be less than n and have length&lt;=32
            byte[] rs = rOrS.ToByteArray();
            if (rs.Length == RS_LEN) return rs;
            else if (rs.Length == RS_LEN + 1 &amp;&amp; rs[0] == 0) return Arrays.CopyOfRange(rs, 1, RS_LEN + 1);
            else if (rs.Length &lt; RS_LEN)
            {
                byte[] result = new byte[RS_LEN];
                Arrays.Fill(result, (byte)0);
                Buffer.BlockCopy(rs, 0, result, RS_LEN - rs.Length, rs.Length);
                return result;
            }
            else
            {
                throw new ArgumentException(&quot;err rs: &quot; + Hex.ToHexString(rs));
            }
        }

        /**
         * BC的SM3withSM2签名得到的结果的rs是asn1格式的，这个方法转化成直接拼接r||s
         * @param rsDer rs in asn1 format
         * @return sign result in plain byte array
         */
        private static byte[] RsAsn1ToPlainByteArray(byte[] rsDer)
        {
            Asn1Sequence seq = Asn1Sequence.GetInstance(rsDer);
            byte[] r = BigIntToFixexLengthBytes(DerInteger.GetInstance(seq[0]).Value);
            byte[] s = BigIntToFixexLengthBytes(DerInteger.GetInstance(seq[1]).Value);
            byte[] result = new byte[RS_LEN * 2];
            Buffer.BlockCopy(r, 0, result, 0, r.Length);
            Buffer.BlockCopy(s, 0, result, RS_LEN, s.Length);
            return result;
        }

        /**
         * BC的SM3withSM2验签需要的rs是asn1格式的，这个方法将直接拼接r||s的字节数组转化成asn1格式
         * @param sign in plain byte array
         * @return rs result in asn1 format
         */
        private static byte[] RsPlainByteArrayToAsn1(byte[] sign)
        {
            if (sign.Length != RS_LEN * 2) throw new ArgumentException(&quot;err rs. &quot;);
            BigInteger r = new BigInteger(1, Arrays.CopyOfRange(sign, 0, RS_LEN));
            BigInteger s = new BigInteger(1, Arrays.CopyOfRange(sign, RS_LEN, RS_LEN * 2));
            Asn1EncodableVector v = new Asn1EncodableVector();
            v.Add(new DerInteger(r));
            v.Add(new DerInteger(s));
            try
            {
                return new DerSequence(v).GetEncoded(&quot;DER&quot;);
            }
            catch (IOException e)
            {
                //log.Error(&quot;RsPlainByteArrayToAsn1 error: &quot; + e.Message, e);
                return null;
            }
        }

        public static AsymmetricCipherKeyPair GenerateKeyPair()
        {
            try
            {
                ECKeyPairGenerator kpGen = new ECKeyPairGenerator();
                kpGen.Init(new ECKeyGenerationParameters(ecDomainParameters, new SecureRandom()));
                return kpGen.GenerateKeyPair();
            }
            catch (Exception e)
            {
                //log.Error(&quot;generateKeyPair error: &quot; + e.Message, e);
                return null;
            }
        }

        public static ECPrivateKeyParameters GetPrivatekeyFromD(BigInteger d)
        {
            return new ECPrivateKeyParameters(d, ecDomainParameters);
        }

        public static ECPublicKeyParameters GetPublickeyFromXY(BigInteger x, BigInteger y)
        {
            return new ECPublicKeyParameters(x9ECParameters.Curve.CreatePoint(x, y), ecDomainParameters);
        }

        public static AsymmetricKeyParameter GetPublickeyFromX509File(FileInfo file)
        {

            FileStream fileStream = null;
            try
            {
                //file.DirectoryName + &quot;\\\\&quot; + file.Name
                fileStream = new FileStream(file.FullName, FileMode.Open, FileAccess.Read);
                X509Certificate certificate = new X509CertificateParser().ReadCertificate(fileStream);
                return certificate.GetPublicKey();
            }
            catch (Exception e)
            {
                //log.Error(file.Name + &quot;读取失败，异常：&quot; + e);
            }
            finally
            {
                if (fileStream != null)
                    fileStream.Close();
            }
            return null;
        }

        public class Sm2Cert
        {
            public AsymmetricKeyParameter privateKey;
            public AsymmetricKeyParameter publicKey;
            public String certId;
        }

        private static byte[] ToByteArray(int i)
        {
            byte[] byteArray = new byte[4];
            byteArray[0] = (byte)(i &gt;&gt; 24);
            byteArray[1] = (byte)((i &amp; 0xFFFFFF) &gt;&gt; 16);
            byteArray[2] = (byte)((i &amp; 0xFFFF) &gt;&gt; 8);
            byteArray[3] = (byte)(i &amp; 0xFF);
            return byteArray;
        }

        /**
         * 字节数组拼接
         *
         * @param params
         * @return
         */
        private static byte[] Join(params byte[][] byteArrays)
        {
            List&lt;byte&gt; byteSource = new List&lt;byte&gt;();
            for (int i = 0; i &lt; byteArrays.Length; i++)
            {
                byteSource.AddRange(byteArrays[i]);
            }
            byte[] data = byteSource.ToArray();
            return data;
        }

        /**
         * 密钥派生函数
         *
         * @param Z
         * @param klen
         *            生成klen字节数长度的密钥
         * @return
         */
        private static byte[] KDF(byte[] Z, int klen)
        {
            int ct = 1;
            int end = (int)Math.Ceiling(klen * 1.0 / 32);
            List&lt;byte&gt; byteSource = new List&lt;byte&gt;();
            try
            {
                for (int i = 1; i &lt; end; i++)
                {
                    byteSource.AddRange(GmUtil.Sm3(Join(Z, ToByteArray(ct))));
                    ct++;
                }
                byte[] last = GmUtil.Sm3(Join(Z, ToByteArray(ct)));
                if (klen % 32 == 0)
                {
                    byteSource.AddRange(last);
                }
                else
                    byteSource.AddRange(Arrays.CopyOfRange(last, 0, klen % 32));
                return byteSource.ToArray();
            }
            catch (Exception e)
            {
                //log.Error(&quot;KDF error: &quot; + e.Message, e);
            }
            return null;
        }

        public static byte[] Sm4DecryptCBC(byte[] keyBytes, byte[] cipher, byte[] iv, String algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (cipher.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                if (iv == null) iv = ZeroIv(algo);
                c.Init(false, new ParametersWithIV(key, iv));
                return c.DoFinal(cipher);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4DecryptCBC error: &quot; + e.Message, e);
                return null;
            }
        }


        public static byte[] Sm4EncryptCBC(byte[] keyBytes, byte[] plain, byte[] iv, String algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (plain.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                if (iv == null) iv = ZeroIv(algo);
                c.Init(true, new ParametersWithIV(key, iv));
                return c.DoFinal(plain);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4EncryptCBC error: &quot; + e.Message, e);
                return null;
            }
        }


        public static byte[] Sm4EncryptECB(byte[] keyBytes, byte[] plain, string algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            //NoPadding 的情况下需要校验数据长度是16的倍数.
            if (plain.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                c.Init(true, key);
                return c.DoFinal(plain);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4EncryptECB error: &quot; + e.Message, e);
                return null;
            }
        }

        public static byte[] Sm4DecryptECB(byte[] keyBytes, byte[] cipher, string algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (cipher.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                c.Init(false, key);
                return c.DoFinal(cipher);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4DecryptECB error: &quot; + e.Message, e);
                return null;
            }
        }

        public const String SM4_ECB_NOPADDING = &quot;SM4/ECB/NoPadding&quot;;
        public const String SM4_CBC_NOPADDING = &quot;SM4/CBC/NoPadding&quot;;
        public const String SM4_CBC_PKCS7PADDING = &quot;SM4/CBC/PKCS7Padding&quot;;

        /**
         * cfca官网CSP沙箱导出的sm2文件
         * @param pem 二进制原文
         * @param pwd 密码
         * @return
         */
        public static Sm2Cert readSm2File(byte[] pem, String pwd)
        {

            Sm2Cert sm2Cert = new Sm2Cert();
            try
            {
                Asn1Sequence asn1Sequence = (Asn1Sequence)Asn1Object.FromByteArray(pem);
                //            ASN1Integer asn1Integer = (ASN1Integer) asn1Sequence.getObjectAt(0); //version=1
                Asn1Sequence priSeq = (Asn1Sequence)asn1Sequence[1];//private key
                Asn1Sequence pubSeq = (Asn1Sequence)asn1Sequence[2];//public key and x509 cert

                //            ASN1ObjectIdentifier sm2DataOid = (ASN1ObjectIdentifier) priSeq.getObjectAt(0);
                //            ASN1ObjectIdentifier sm4AlgOid = (ASN1ObjectIdentifier) priSeq.getObjectAt(1);
                Asn1OctetString priKeyAsn1 = (Asn1OctetString)priSeq[2];
                byte[] key = KDF(System.Text.Encoding.UTF8.GetBytes(pwd), 32);
                byte[] priKeyD = Sm4DecryptCBC(Arrays.CopyOfRange(key, 16, 32),
                        priKeyAsn1.GetOctets(),
                        Arrays.CopyOfRange(key, 0, 16), SM4_CBC_PKCS7PADDING);
                sm2Cert.privateKey = GetPrivatekeyFromD(new BigInteger(1, priKeyD));
                //            log.Info(Hex.toHexString(priKeyD));

                //            ASN1ObjectIdentifier sm2DataOidPub = (ASN1ObjectIdentifier) pubSeq.getObjectAt(0);
                Asn1OctetString pubKeyX509 = (Asn1OctetString)pubSeq[1];
                X509Certificate x509 = (X509Certificate)new X509CertificateParser().ReadCertificate(pubKeyX509.GetOctets());
                sm2Cert.publicKey = x509.GetPublicKey();
                sm2Cert.certId = x509.SerialNumber.ToString(10); //这里转10进账，有啥其他进制要求的自己改改
                return sm2Cert;
            }
            catch (Exception e)
            {
                //log.Error(&quot;readSm2File error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         *
         * @param cert
         * @return
         */
        public static Sm2Cert ReadSm2X509Cert(byte[] cert)
        {
            Sm2Cert sm2Cert = new Sm2Cert();
            try
            {

                X509Certificate x509 = new X509CertificateParser().ReadCertificate(cert);
                sm2Cert.publicKey = x509.GetPublicKey();
                sm2Cert.certId = x509.SerialNumber.ToString(10); //这里转10进账，有啥其他进制要求的自己改改
                return sm2Cert;
            }
            catch (Exception e)
            {
                //log.Error(&quot;ReadSm2X509Cert error: &quot; + e.Message, e);
                return null;
            }
        }

        public static byte[] ZeroIv(String algo)
        {

            try
            {
                IBufferedCipher cipher = CipherUtilities.GetCipher(algo);
                int blockSize = cipher.GetBlockSize();
                byte[] iv = new byte[blockSize];
                Arrays.Fill(iv, (byte)0);
                return iv;
            }
            catch (Exception e)
            {
                //log.Error(&quot;ZeroIv error: &quot; + e.Message, e);
                return null;
            }
        }

        public static void Main2(string[] s)
        {

            // 随便看看
            //log.Info(&quot;GMNamedCurves: &quot;);
            foreach (string e in GMNamedCurves.Names)
            {
                //log.Info(e);
            }
            //log.Info(&quot;sm2p256v1 n:&quot; + x9ECParameters.N);
            //log.Info(&quot;sm2p256v1 nHex:&quot; + Hex.ToHexString(x9ECParameters.N.ToByteArray()));

            // 生成公私钥对 ---------------------
            AsymmetricCipherKeyPair kp = GmUtil.GenerateKeyPair();
            //log.Info(&quot;private key d: &quot; + ((ECPrivateKeyParameters)kp.Private).D);
            //log.Info(&quot;public key q:&quot; + ((ECPublicKeyParameters)kp.Public).Q); //{x, y, zs...}

            //签名验签
            byte[] msg = System.Text.Encoding.UTF8.GetBytes(&quot;message digest&quot;);
            byte[] userId = System.Text.Encoding.UTF8.GetBytes(&quot;userId&quot;);
            byte[] sig = SignSm3WithSm2(msg, userId, kp.Private);
            //log.Info(&quot;testSignSm3WithSm2: &quot; + Hex.ToHexString(sig));
            //log.Info(&quot;testVerifySm3WithSm2: &quot; + VerifySm3WithSm2(msg, userId, sig, kp.Public));

            // 由d生成私钥 ---------------------
            BigInteger d = new BigInteger(&quot;097b5230ef27c7df0fa768289d13ad4e8a96266f0fcb8de40d5942af4293a54a&quot;, 16);
            ECPrivateKeyParameters bcecPrivateKey = GetPrivatekeyFromD(d);
            //log.Info(&quot;testGetFromD: &quot; + bcecPrivateKey.D.ToString(16));

            //公钥X坐标PublicKeyXHex: 59cf9940ea0809a97b1cbffbb3e9d96d0fe842c1335418280bfc51dd4e08a5d4
            //公钥Y坐标PublicKeyYHex: 9a7f77c578644050e09a9adc4245d1e6eba97554bc8ffd4fe15a78f37f891ff8
            AsymmetricKeyParameter publicKey = GetPublickeyFromX509File(new FileInfo(&quot;d:/certs/69629141652.cer&quot;));
            //log.Info(publicKey);
            AsymmetricKeyParameter publicKey1 = GetPublickeyFromXY(new BigInteger(&quot;59cf9940ea0809a97b1cbffbb3e9d96d0fe842c1335418280bfc51dd4e08a5d4&quot;, 16), new BigInteger(&quot;9a7f77c578644050e09a9adc4245d1e6eba97554bc8ffd4fe15a78f37f891ff8&quot;, 16));
            //log.Info(&quot;testReadFromX509File: &quot; + ((ECPublicKeyParameters)publicKey).Q);
            //log.Info(&quot;testGetFromXY: &quot; + ((ECPublicKeyParameters)publicKey1).Q);
            //log.Info(&quot;testPubKey: &quot; + publicKey.Equals(publicKey1));
            //log.Info(&quot;testPubKey: &quot; + ((ECPublicKeyParameters)publicKey).Q.Equals(((ECPublicKeyParameters)publicKey1).Q));

            // sm2 encrypt and decrypt test ---------------------
            AsymmetricCipherKeyPair kp2 = GenerateKeyPair();
            AsymmetricKeyParameter publicKey2 = kp2.Public;
            AsymmetricKeyParameter privateKey2 = kp2.Private;
            byte[] bs = Sm2Encrypt(System.Text.Encoding.UTF8.GetBytes(&quot;s&quot;), publicKey2);
            //log.Info(&quot;testSm2Enc dec: &quot; + Hex.ToHexString(bs));
            bs = Sm2Decrypt(bs, privateKey2);
            //log.Info(&quot;testSm2Enc dec: &quot; + System.Text.Encoding.UTF8.GetString(bs));

            // sm4 encrypt and decrypt test ---------------------
            //0123456789abcdeffedcba9876543210 + 0123456789abcdeffedcba9876543210 -&gt; 681edf34d206965e86b3e94f536e4246
            byte[] plain = Hex.Decode(&quot;0123456789abcdeffedcba98765432100123456789abcdeffedcba98765432100123456789abcdeffedcba9876543210&quot;);
            byte[] key = Hex.Decode(&quot;0123456789abcdeffedcba9876543210&quot;);
            byte[] cipher = Hex.Decode(&quot;595298c7c6fd271f0402f804c33d3f66&quot;);
            bs = Sm4EncryptECB(key, plain, GmUtil.SM4_ECB_NOPADDING);
            //log.Info(&quot;testSm4EncEcb: &quot; + Hex.ToHexString(bs)); ;
            bs = Sm4DecryptECB(key, bs, GmUtil.SM4_ECB_NOPADDING);
            //log.Info(&quot;testSm4DecEcb: &quot; + Hex.ToHexString(bs));

            //读.sm2文件
            String sm2 = &quot;MIIDHQIBATBHBgoqgRzPVQYBBAIBBgcqgRzPVQFoBDDW5/I9kZhObxXE9Vh1CzHdZhIhxn+3byBU\\nUrzmGRKbDRMgI3hJKdvpqWkM5G4LNcIwggLNBgoqgRzPVQYBBAIBBIICvTCCArkwggJdoAMCAQIC\\nBRA2QSlgMAwGCCqBHM9VAYN1BQAwXDELMAkGA1UEBhMCQ04xMDAuBgNVBAoMJ0NoaW5hIEZpbmFu\\nY2lhbCBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEbMBkGA1UEAwwSQ0ZDQSBURVNUIFNNMiBPQ0Ex\\nMB4XDTE4MTEyNjEwMTQxNVoXDTIwMTEyNjEwMTQxNVowcjELMAkGA1UEBhMCY24xEjAQBgNVBAoM\\nCUNGQ0EgT0NBMTEOMAwGA1UECwwFQ1VQUkExFDASBgNVBAsMC0VudGVycHJpc2VzMSkwJwYDVQQD\\nDCAwNDFAWnRlc3RAMDAwMTAwMDA6U0lHTkAwMDAwMDAwMTBZMBMGByqGSM49AgEGCCqBHM9VAYIt\\nA0IABDRNKhvnjaMUShsM4MJ330WhyOwpZEHoAGfqxFGX+rcL9x069dyrmiF3+2ezwSNh1/6YqfFZ\\nX9koM9zE5RG4USmjgfMwgfAwHwYDVR0jBBgwFoAUa/4Y2o9COqa4bbMuiIM6NKLBMOEwSAYDVR0g\\nBEEwPzA9BghggRyG7yoBATAxMC8GCCsGAQUFBwIBFiNodHRwOi8vd3d3LmNmY2EuY29tLmNuL3Vz\\nL3VzLTE0Lmh0bTA4BgNVHR8EMTAvMC2gK6AphidodHRwOi8vdWNybC5jZmNhLmNvbS5jbi9TTTIv\\nY3JsNDI4NS5jcmwwCwYDVR0PBAQDAgPoMB0GA1UdDgQWBBREhx9VlDdMIdIbhAxKnGhPx8FcHDAd\\nBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwQwDAYIKoEcz1UBg3UFAANIADBFAiEAgWvQi3h6\\niW4jgF4huuXfhWInJmTTYr2EIAdG8V4M8fYCIBixygdmfPL9szcK2pzCYmIb6CBzo5SMv50Odycc\\nVfY6&quot;;
            bs = Convert.FromBase64String(sm2);
            String pwd = &quot;cfca1234&quot;;
            GmUtil.Sm2Cert sm2Cert = GmUtil.readSm2File(bs, pwd);
            //log.Info(&quot;testReadSm2File, pubkey: &quot; + ((ECPublicKeyParameters)sm2Cert.publicKey).Q.ToString());
            //log.Info(&quot;testReadSm2File, prikey: &quot; + Hex.ToHexString(((ECPrivateKeyParameters)sm2Cert.privateKey).D.ToByteArray()));
            //log.Info(&quot;testReadSm2File, certId: &quot; + sm2Cert.certId);

            bs = Sm2Encrypt(System.Text.Encoding.UTF8.GetBytes(&quot;s&quot;), ((ECPublicKeyParameters)sm2Cert.publicKey));
            //log.Info(&quot;testSm2Enc dec: &quot; + Hex.ToHexString(bs));
            bs = Sm2Decrypt(bs, ((ECPrivateKeyParameters)sm2Cert.privateKey));
            //log.Info(&quot;testSm2Enc dec: &quot; + System.Text.Encoding.UTF8.GetString(bs));

            msg = System.Text.Encoding.UTF8.GetBytes(&quot;message digest&quot;);
            userId = System.Text.Encoding.UTF8.GetBytes(&quot;userId&quot;);
            sig = SignSm3WithSm2(msg, userId, ((ECPrivateKeyParameters)sm2Cert.privateKey));
            //log.Info(&quot;testSignSm3WithSm2: &quot; + Hex.ToHexString(sig));
            //log.Info(&quot;testVerifySm3WithSm2: &quot; + VerifySm3WithSm2(msg, userId, sig, ((ECPublicKeyParameters)sm2Cert.publicKey)));
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.Net使用</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using CommonUtils;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Utilities.Encoders;
using System.Text;


void TestSM2Enc()
{
    String privateKeyHex = &quot;FAB8BBE670FAE338C9E9382B9FB6485225C11A3ECB84C938F10F20A93B6215F0&quot;;
    //完整公钥128位“9EF573019D9A03B16B0BE44FC8A5B4E8E098F56034C97B312282DD0B4810AFC3CC759673ED0FC9B9DC7E6FA38F0E2B121E02654BF37EA6B63FAF2A0D6013EADF”
    //完整公钥130位，比128位开头多了04“049EF573019D9A03B16B0BE44FC8A5B4E8E098F56034C97B312282DD0B4810AFC3CC759673ED0FC9B9DC7E6FA38F0E2B121E02654BF37EA6B63FAF2A0D6013EADF”
    string pubKeyHex = &quot;049EF573019D9A03B16B0BE44FC8A5B4E8E098F56034C97B312282DD0B4810AFC3CC759673ED0FC9B9DC7E6FA38F0E2B121E02654BF37EA6B63FAF2A0D6013EADF&quot;;
    //如果是130位公钥，.NET 使用的话，把开头的04截取掉。
    if (pubKeyHex.Length == 130)
    {
        pubKeyHex = pubKeyHex.Substring(2, 128);
    }
    //公钥X，前64位
    String x = pubKeyHex.Substring(0, 64);
    //公钥Y，后64位
    String y = pubKeyHex.Substring(64);
    //获取公钥对象
    AsymmetricKeyParameter publicKey1 = GmUtil.GetPublickeyFromXY(new BigInteger(x, 16), new BigInteger(y, 16));
    String content = &quot;1234泰酷拉NET&quot;;
    Console.WriteLine(&quot;待处理字符串：&quot; + content);
    //Sm2Encrypt 对应  C1C3C2
    // Sm2EncryptOld ：C1C2C3
    byte[] digestByte = GmUtil.Sm2Encrypt(Encoding.UTF8.GetBytes(content), publicKey1);
    string strSM2 = Hex.ToHexString(digestByte);
    Console.WriteLine(&quot;SM2加密后：&quot; + strSM2);
    // 4. .NET BC库SM2加密结果会带04，如果JAVA 那边报 Invalid point encoding 错误，删除加密结果前的04。如果对方要的是BASE64的加密结果，我们可以先转16进制字符串，裁掉04，再转BASE64。
    string newCipherText = Hex.ToHexString(digestByte);
    if (newCipherText.StartsWith(&quot;04&quot;))
    {
        newCipherText = newCipherText.Substring(2);
    }
    Console.WriteLine(&quot;截取04后，加密结果：&quot; + newCipherText);

    //.NET 自加自解
    BigInteger d = new BigInteger(privateKeyHex, 16);
    //先拿到私钥对象，用ECPrivateKeyParameters 或 AsymmetricKeyParameter 都可以
    //ECPrivateKeyParameters bcecPrivateKey = CommonUtils.GmUtil.GetPrivatekeyFromD(d);
    AsymmetricKeyParameter bcecPrivateKey = CommonUtils.GmUtil.GetPrivatekeyFromD(d);
    byte[] byToDecrypt = Hex.Decode(strSM2);
    byte[] byDecrypted = GmUtil.Sm2Decrypt(byToDecrypt, bcecPrivateKey);
    String strDecrypted = Encoding.UTF8.GetString(byDecrypted);
    Console.WriteLine(&quot;SM2解密后：&quot; + strDecrypted);

    //JAVA 结果，.NET来解
    string javaSM2 = &quot;04a7aaa9fd91aea6f99787ef431e19cb9feecc5bfb97fb445ce529c78c04676f1792e06b3a2814d1bda80bd3f63e530c149fc03911f1b81007dc86cef2c03f30c7fecc8b256272f881a8f2f4e71351c45d5bb27e8531f1e2ea6d55150c88f5026b8783ccef867a510a313178cfd26177&quot;;
    //.NET BC库解密，密文前要加 “04”，否则会报 Invalid point encoding XX
    //如果加密结果是BASE64的，把BASE64转16进制字符串，再判断是否04开头。 
    //如果对方源码，固定截取的头2位，那么就不用判断是否04开头了，直接写死：javaSM2 = &quot;04&quot; + javaSM2;
    if (!javaSM2.StartsWith(&quot;04&quot;))
    {
        javaSM2 = &quot;04&quot; + javaSM2;
    }
    Console.WriteLine(&quot;javaSM2加密结果：&quot; + javaSM2);
    byToDecrypt = Hex.Decode(javaSM2);
    byDecrypted = GmUtil.Sm2Decrypt(byToDecrypt, bcecPrivateKey);
    strDecrypted = Encoding.UTF8.GetString(byDecrypted);
    Console.WriteLine(&quot;java SM2解密后：&quot; + strDecrypted);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java代码：</p><p>maven 引用 ：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.hutool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>hutool-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.bouncycastle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bcprov-jdk15on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.70<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java调用</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span></span><span class="token class-name">SmUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>asymmetric<span class="token punctuation">.</span></span><span class="token class-name">KeyType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>asymmetric<span class="token punctuation">.</span></span><span class="token class-name">SM2</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bouncycastle<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>engines<span class="token punctuation">.</span></span><span class="token class-name">SM2Engine</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bouncycastle<span class="token punctuation">.</span>util<span class="token punctuation">.</span>encoders<span class="token punctuation">.</span></span><span class="token class-name">Hex</span></span><span class="token punctuation">;</span>

 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testSM2Enc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//sm2 加密模式:C1C3C2</span>
        <span class="token comment">//私钥</span>
        <span class="token class-name">String</span> privateKeyHex <span class="token operator">=</span> <span class="token string">&quot;FAB8BBE670FAE338C9E9382B9FB6485225C11A3ECB84C938F10F20A93B6215F0&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//完整公钥“9EF573019D9A03B16B0BE44FC8A5B4E8E098F56034C97B312282DD0B4810AFC3CC759673ED0FC9B9DC7E6FA38F0E2B121E02654BF37EA6B63FAF2A0D6013EADF”</span>
        <span class="token comment">//公钥X</span>
        <span class="token class-name">String</span> x <span class="token operator">=</span> <span class="token string">&quot;9EF573019D9A03B16B0BE44FC8A5B4E8E098F56034C97B312282DD0B4810AFC3&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//公钥Y</span>
        <span class="token class-name">String</span> y <span class="token operator">=</span> <span class="token string">&quot;CC759673ED0FC9B9DC7E6FA38F0E2B121E02654BF37EA6B63FAF2A0D6013EADF&quot;</span><span class="token punctuation">;</span>

        
        <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token string">&quot;1234泰酷拉JJ&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;待处理字符串：&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">SM2</span> sm2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SM2</span><span class="token punctuation">(</span>privateKeyHex<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//默认是:C1C3C2</span>
        sm2<span class="token punctuation">.</span><span class="token function">setMode</span><span class="token punctuation">(</span><span class="token class-name">SM2Engine<span class="token punctuation">.</span>Mode</span><span class="token punctuation">.</span><span class="token constant">C1C3C2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//公钥加密</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> byRst <span class="token operator">=</span> sm2<span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">KeyType<span class="token punctuation">.</span>PublicKey</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> strRst <span class="token operator">=</span> <span class="token class-name">Hex</span><span class="token punctuation">.</span><span class="token function">toHexString</span><span class="token punctuation">(</span>byRst<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;加密后：&quot;</span> <span class="token operator">+</span> strRst<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> byToDecrypt <span class="token operator">=</span> <span class="token class-name">Hex</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>strRst<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> byDecrypted <span class="token operator">=</span> sm2<span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>byToDecrypt<span class="token punctuation">,</span> <span class="token class-name">KeyType<span class="token punctuation">.</span>PrivateKey</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> strDecrypted <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>byDecrypted<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;解密后：&quot;</span> <span class="token operator">+</span> strDecrypted<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="签名验签" tabindex="-1"><a class="header-anchor" href="#签名验签"><span>签名验签</span></a></h4><p>.NET 环境：.NET6 控制台程序(.net core)。</p><p>JAVA 环境：JAVA8（JDK8,JAVA 1.8），带maven 的JAVA控制台程序。</p><p>1.最好要到对方源码(DEMO+JAR包也可以)，可以用IDEA反编译（Ctrl+鼠标左键），看它过程逻辑和结果格式。</p><p>2.常说的SM2签名，指的就是“SM3withSM2”。类似于：SHA256withRSA，SHA1withRSA。</p><p>3.签名结果：有2种格式：r||s 和 asn1 ，双方得约定好。 SignSm3WithSm2 是RS，SignSm3WithSm2Asn1Rs 是 asn1，一种不行就换另一种调试。</p><p>4.签名结果传输，可以转BASE64字符串或16进制字符串，双方得约定好。</p><p>5.如果未指明 userId： 那默认值就是：1234567812345678。 string userId = &quot;1234567812345678&quot;;</p><p>6.有的文档说是进行 sm3 hash 后进行 sm2 签名，我们以为是：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var rstA=sm3hash(dataString);
var rstB= SignSm3WithSm2(rstA);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但实际只有一步： var rstB= SignSm3WithSm2(dataString); 文档描述和代码逻辑有出入的地方很多，所以得找对方要代码DEMO，Show me the code !</p><p>7.有的签名代码和BC库是不兼容的，得少量手动实现：https://www.cnblogs.com/runliuv/p/16486898.html。</p><p>注意：JAVA的 HUTOOL - sm2.sign 结果格式是 Asn1 的，我们得用 VerifySm3WithSm2Asn1Rs。</p><p>生成一组国密公私钥：</p><p>私钥：FAB8BBE670FAE338C9E9382B9FB6485225C11A3ECB84C938F10F20A93B6215F0</p><p>公钥：049EF573019D9A03B16B0BE44FC8A5B4E8E098F56034C97B312282DD0B4810AFC3CC759673ED0FC9B9DC7E6FA38F0E2B121E02654BF37EA6B63FAF2A0D6013EADF</p><p>.NET 代码：</p><p>GmUtil 工具类，需要nuget下载 Portable.BouncyCastle 1.9.0 版本：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Asn1.GM;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Engines;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Security;
using Org.BouncyCastle.Utilities;
using Org.BouncyCastle.Utilities.Encoders;
using Org.BouncyCastle.X509;
using System;
using System.Collections.Generic;
using System.IO;

namespace CommonUtils
{
    /**
     * need lib:
     * BouncyCastle.Crypto.dll（http://www.bouncycastle.org/csharp/index.html） 
      
     * 用BC的注意点：
     * 这个版本的BC对SM3withSM2的结果为asn1格式的r和s，如果需要直接拼接的r||s需要自己转换。下面rsAsn1ToPlainByteArray、rsPlainByteArrayToAsn1就在干这事。
     * 这个版本的BC对SM2的结果为C1||C2||C3，据说为旧标准，新标准为C1||C3||C2，用新标准的需要自己转换。下面（被注释掉的）changeC1C2C3ToC1C3C2、changeC1C3C2ToC1C2C3就在干这事。java版的高版本有加上C1C3C2，csharp版没准以后也会加，但目前还没有，java版的目前可以初始化时“ SM2Engine sm2Engine = new SM2Engine(SM2Engine.Mode.C1C3C2);”。
     * 
     * 按要求国密算法仅允许使用加密机，本demo国密算法仅供学习使用，请不要用于生产用途。
     */
    public class GmUtil
    {

        //private static readonly ILog log = LogManager.GetLogger(typeof(GmUtil));

        private static X9ECParameters x9ECParameters = GMNamedCurves.GetByName(&quot;sm2p256v1&quot;);
        private static ECDomainParameters ecDomainParameters = new ECDomainParameters(x9ECParameters.Curve, x9ECParameters.G, x9ECParameters.N);

        /**
         *
         * @param msg
         * @param userId
         * @param privateKey
         * @return r||s，直接拼接byte数组的rs
         */
        public static byte[] SignSm3WithSm2(byte[] msg, byte[] userId, AsymmetricKeyParameter privateKey)
        {
            return RsAsn1ToPlainByteArray(SignSm3WithSm2Asn1Rs(msg, userId, privateKey));
        }

        /**
          * @param msg
          * @param userId
          * @param privateKey
          * @return rs in &lt;b&gt;asn1 format&lt;/b&gt;
          */
        public static byte[] SignSm3WithSm2Asn1Rs(byte[] msg, byte[] userId, AsymmetricKeyParameter privateKey)
        {
            try
            {
                ISigner signer = SignerUtilities.GetSigner(&quot;SM3withSM2&quot;);
                signer.Init(true, new ParametersWithID(privateKey, userId));
                signer.BlockUpdate(msg, 0, msg.Length);
                byte[] sig = signer.GenerateSignature();
                return sig;
            }
            catch (Exception e)
            {
                //log.Error(&quot;SignSm3WithSm2Asn1Rs error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
        *
        * @param msg
        * @param userId
        * @param rs r||s，直接拼接byte数组的rs
        * @param publicKey
        * @return
        */
        public static bool VerifySm3WithSm2(byte[] msg, byte[] userId, byte[] rs, AsymmetricKeyParameter publicKey)
        {
            if (rs == null || msg == null || userId == null) return false;
            if (rs.Length != RS_LEN * 2) return false;
            return VerifySm3WithSm2Asn1Rs(msg, userId, RsPlainByteArrayToAsn1(rs), publicKey);
        }

        /**
         *
         * @param msg
         * @param userId
         * @param rs in &lt;b&gt;asn1 format&lt;/b&gt;
         * @param publicKey
         * @return
         */

        public static bool VerifySm3WithSm2Asn1Rs(byte[] msg, byte[] userId, byte[] sign, AsymmetricKeyParameter publicKey)
        {
            try
            {
                ISigner signer = SignerUtilities.GetSigner(&quot;SM3withSM2&quot;);
                signer.Init(false, new ParametersWithID(publicKey, userId));
                signer.BlockUpdate(msg, 0, msg.Length);
                return signer.VerifySignature(sign);
            }
            catch (Exception e)
            {
                //log.Error(&quot;VerifySm3WithSm2Asn1Rs error: &quot; + e.Message, e);
                return false;
            }
        }

        /**
         * bc加解密使用旧标c1||c2||c3，此方法在加密后调用，将结果转化为c1||c3||c2
         * @param c1c2c3
         * @return
         */
        private static byte[] ChangeC1C2C3ToC1C3C2(byte[] c1c2c3)
        {
            int c1Len = (x9ECParameters.Curve.FieldSize + 7) / 8 * 2 + 1; //sm2p256v1的这个固定65。可看GMNamedCurves、ECCurve代码。
            const int c3Len = 32; //new SM3Digest().getDigestSize();
            byte[] result = new byte[c1c2c3.Length];
            Buffer.BlockCopy(c1c2c3, 0, result, 0, c1Len); //c1
            Buffer.BlockCopy(c1c2c3, c1c2c3.Length - c3Len, result, c1Len, c3Len); //c3
            Buffer.BlockCopy(c1c2c3, c1Len, result, c1Len + c3Len, c1c2c3.Length - c1Len - c3Len); //c2
            return result;
        }


        /**
         * bc加解密使用旧标c1||c3||c2，此方法在解密前调用，将密文转化为c1||c2||c3再去解密
         * @param c1c3c2
         * @return
         */
        private static byte[] ChangeC1C3C2ToC1C2C3(byte[] c1c3c2)
        {
            int c1Len = (x9ECParameters.Curve.FieldSize + 7) / 8 * 2 + 1; //sm2p256v1的这个固定65。可看GMNamedCurves、ECCurve代码。
            const int c3Len = 32; //new SM3Digest().GetDigestSize();
            byte[] result = new byte[c1c3c2.Length];
            Buffer.BlockCopy(c1c3c2, 0, result, 0, c1Len); //c1: 0-&gt;65
            Buffer.BlockCopy(c1c3c2, c1Len + c3Len, result, c1Len, c1c3c2.Length - c1Len - c3Len); //c2
            Buffer.BlockCopy(c1c3c2, c1Len, result, c1c3c2.Length - c3Len, c3Len); //c3
            return result;
        }

        /**
         * c1||c3||c2
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2Decrypt(byte[] data, AsymmetricKeyParameter key)
        {
            return Sm2DecryptOld(ChangeC1C3C2ToC1C2C3(data), key);
        }

        /**
         * c1||c3||c2
         * @param data
         * @param key
         * @return
         */

        public static byte[] Sm2Encrypt(byte[] data, AsymmetricKeyParameter key)
        {
            return ChangeC1C2C3ToC1C3C2(Sm2EncryptOld(data, key));
        }

        /**
         * c1||c2||c3
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2EncryptOld(byte[] data, AsymmetricKeyParameter pubkey)
        {
            try
            {
                SM2Engine sm2Engine = new SM2Engine();
                sm2Engine.Init(true, new ParametersWithRandom(pubkey, new SecureRandom()));
                return sm2Engine.ProcessBlock(data, 0, data.Length);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm2EncryptOld error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         * c1||c2||c3
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2DecryptOld(byte[] data, AsymmetricKeyParameter key)
        {
            try
            {
                SM2Engine sm2Engine = new SM2Engine();
                sm2Engine.Init(false, key);
                return sm2Engine.ProcessBlock(data, 0, data.Length);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm2DecryptOld error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         * @param bytes
         * @return
         */
        public static byte[] Sm3(byte[] bytes)
        {
            try
            {
                SM3Digest digest = new SM3Digest();
                digest.BlockUpdate(bytes, 0, bytes.Length);
                byte[] result = DigestUtilities.DoFinal(digest);
                return result;
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm3 error: &quot; + e.Message, e);
                return null;
            }
        }

        private const int RS_LEN = 32;

        private static byte[] BigIntToFixexLengthBytes(BigInteger rOrS)
        {
            // for sm2p256v1, n is 00fffffffeffffffffffffffffffffffff7203df6b21c6052b53bbf40939d54123,
            // r and s are the result of mod n, so they should be less than n and have length&lt;=32
            byte[] rs = rOrS.ToByteArray();
            if (rs.Length == RS_LEN) return rs;
            else if (rs.Length == RS_LEN + 1 &amp;&amp; rs[0] == 0) return Arrays.CopyOfRange(rs, 1, RS_LEN + 1);
            else if (rs.Length &lt; RS_LEN)
            {
                byte[] result = new byte[RS_LEN];
                Arrays.Fill(result, (byte)0);
                Buffer.BlockCopy(rs, 0, result, RS_LEN - rs.Length, rs.Length);
                return result;
            }
            else
            {
                throw new ArgumentException(&quot;err rs: &quot; + Hex.ToHexString(rs));
            }
        }

        /**
         * BC的SM3withSM2签名得到的结果的rs是asn1格式的，这个方法转化成直接拼接r||s
         * @param rsDer rs in asn1 format
         * @return sign result in plain byte array
         */
        private static byte[] RsAsn1ToPlainByteArray(byte[] rsDer)
        {
            Asn1Sequence seq = Asn1Sequence.GetInstance(rsDer);
            byte[] r = BigIntToFixexLengthBytes(DerInteger.GetInstance(seq[0]).Value);
            byte[] s = BigIntToFixexLengthBytes(DerInteger.GetInstance(seq[1]).Value);
            byte[] result = new byte[RS_LEN * 2];
            Buffer.BlockCopy(r, 0, result, 0, r.Length);
            Buffer.BlockCopy(s, 0, result, RS_LEN, s.Length);
            return result;
        }

        /**
         * BC的SM3withSM2验签需要的rs是asn1格式的，这个方法将直接拼接r||s的字节数组转化成asn1格式
         * @param sign in plain byte array
         * @return rs result in asn1 format
         */
        private static byte[] RsPlainByteArrayToAsn1(byte[] sign)
        {
            if (sign.Length != RS_LEN * 2) throw new ArgumentException(&quot;err rs. &quot;);
            BigInteger r = new BigInteger(1, Arrays.CopyOfRange(sign, 0, RS_LEN));
            BigInteger s = new BigInteger(1, Arrays.CopyOfRange(sign, RS_LEN, RS_LEN * 2));
            Asn1EncodableVector v = new Asn1EncodableVector();
            v.Add(new DerInteger(r));
            v.Add(new DerInteger(s));
            try
            {
                return new DerSequence(v).GetEncoded(&quot;DER&quot;);
            }
            catch (IOException e)
            {
                //log.Error(&quot;RsPlainByteArrayToAsn1 error: &quot; + e.Message, e);
                return null;
            }
        }

        public static AsymmetricCipherKeyPair GenerateKeyPair()
        {
            try
            {
                ECKeyPairGenerator kpGen = new ECKeyPairGenerator();
                kpGen.Init(new ECKeyGenerationParameters(ecDomainParameters, new SecureRandom()));
                return kpGen.GenerateKeyPair();
            }
            catch (Exception e)
            {
                //log.Error(&quot;generateKeyPair error: &quot; + e.Message, e);
                return null;
            }
        }

        public static ECPrivateKeyParameters GetPrivatekeyFromD(BigInteger d)
        {
            return new ECPrivateKeyParameters(d, ecDomainParameters);
        }

        public static ECPublicKeyParameters GetPublickeyFromXY(BigInteger x, BigInteger y)
        {
            return new ECPublicKeyParameters(x9ECParameters.Curve.CreatePoint(x, y), ecDomainParameters);
        }

        public static AsymmetricKeyParameter GetPublickeyFromX509File(FileInfo file)
        {

            FileStream fileStream = null;
            try
            {
                //file.DirectoryName + &quot;\\\\&quot; + file.Name
                fileStream = new FileStream(file.FullName, FileMode.Open, FileAccess.Read);
                X509Certificate certificate = new X509CertificateParser().ReadCertificate(fileStream);
                return certificate.GetPublicKey();
            }
            catch (Exception e)
            {
                //log.Error(file.Name + &quot;读取失败，异常：&quot; + e);
            }
            finally
            {
                if (fileStream != null)
                    fileStream.Close();
            }
            return null;
        }

        public class Sm2Cert
        {
            public AsymmetricKeyParameter privateKey;
            public AsymmetricKeyParameter publicKey;
            public String certId;
        }

        private static byte[] ToByteArray(int i)
        {
            byte[] byteArray = new byte[4];
            byteArray[0] = (byte)(i &gt;&gt; 24);
            byteArray[1] = (byte)((i &amp; 0xFFFFFF) &gt;&gt; 16);
            byteArray[2] = (byte)((i &amp; 0xFFFF) &gt;&gt; 8);
            byteArray[3] = (byte)(i &amp; 0xFF);
            return byteArray;
        }

        /**
         * 字节数组拼接
         *
         * @param params
         * @return
         */
        private static byte[] Join(params byte[][] byteArrays)
        {
            List&lt;byte&gt; byteSource = new List&lt;byte&gt;();
            for (int i = 0; i &lt; byteArrays.Length; i++)
            {
                byteSource.AddRange(byteArrays[i]);
            }
            byte[] data = byteSource.ToArray();
            return data;
        }

        /**
         * 密钥派生函数
         *
         * @param Z
         * @param klen
         *            生成klen字节数长度的密钥
         * @return
         */
        private static byte[] KDF(byte[] Z, int klen)
        {
            int ct = 1;
            int end = (int)Math.Ceiling(klen * 1.0 / 32);
            List&lt;byte&gt; byteSource = new List&lt;byte&gt;();
            try
            {
                for (int i = 1; i &lt; end; i++)
                {
                    byteSource.AddRange(GmUtil.Sm3(Join(Z, ToByteArray(ct))));
                    ct++;
                }
                byte[] last = GmUtil.Sm3(Join(Z, ToByteArray(ct)));
                if (klen % 32 == 0)
                {
                    byteSource.AddRange(last);
                }
                else
                    byteSource.AddRange(Arrays.CopyOfRange(last, 0, klen % 32));
                return byteSource.ToArray();
            }
            catch (Exception e)
            {
                //log.Error(&quot;KDF error: &quot; + e.Message, e);
            }
            return null;
        }

        public static byte[] Sm4DecryptCBC(byte[] keyBytes, byte[] cipher, byte[] iv, String algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (cipher.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                if (iv == null) iv = ZeroIv(algo);
                c.Init(false, new ParametersWithIV(key, iv));
                return c.DoFinal(cipher);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4DecryptCBC error: &quot; + e.Message, e);
                return null;
            }
        }


        public static byte[] Sm4EncryptCBC(byte[] keyBytes, byte[] plain, byte[] iv, String algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (plain.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                if (iv == null) iv = ZeroIv(algo);
                c.Init(true, new ParametersWithIV(key, iv));
                return c.DoFinal(plain);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4EncryptCBC error: &quot; + e.Message, e);
                return null;
            }
        }


        public static byte[] Sm4EncryptECB(byte[] keyBytes, byte[] plain, string algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            //NoPadding 的情况下需要校验数据长度是16的倍数.
            if (plain.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                c.Init(true, key);
                return c.DoFinal(plain);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4EncryptECB error: &quot; + e.Message, e);
                return null;
            }
        }

        public static byte[] Sm4DecryptECB(byte[] keyBytes, byte[] cipher, string algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (cipher.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                c.Init(false, key);
                return c.DoFinal(cipher);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4DecryptECB error: &quot; + e.Message, e);
                return null;
            }
        }

        public const String SM4_ECB_NOPADDING = &quot;SM4/ECB/NoPadding&quot;;
        public const String SM4_CBC_NOPADDING = &quot;SM4/CBC/NoPadding&quot;;
        public const String SM4_CBC_PKCS7PADDING = &quot;SM4/CBC/PKCS7Padding&quot;;

        /**
         * cfca官网CSP沙箱导出的sm2文件
         * @param pem 二进制原文
         * @param pwd 密码
         * @return
         */
        public static Sm2Cert readSm2File(byte[] pem, String pwd)
        {

            Sm2Cert sm2Cert = new Sm2Cert();
            try
            {
                Asn1Sequence asn1Sequence = (Asn1Sequence)Asn1Object.FromByteArray(pem);
                //            ASN1Integer asn1Integer = (ASN1Integer) asn1Sequence.getObjectAt(0); //version=1
                Asn1Sequence priSeq = (Asn1Sequence)asn1Sequence[1];//private key
                Asn1Sequence pubSeq = (Asn1Sequence)asn1Sequence[2];//public key and x509 cert

                //            ASN1ObjectIdentifier sm2DataOid = (ASN1ObjectIdentifier) priSeq.getObjectAt(0);
                //            ASN1ObjectIdentifier sm4AlgOid = (ASN1ObjectIdentifier) priSeq.getObjectAt(1);
                Asn1OctetString priKeyAsn1 = (Asn1OctetString)priSeq[2];
                byte[] key = KDF(System.Text.Encoding.UTF8.GetBytes(pwd), 32);
                byte[] priKeyD = Sm4DecryptCBC(Arrays.CopyOfRange(key, 16, 32),
                        priKeyAsn1.GetOctets(),
                        Arrays.CopyOfRange(key, 0, 16), SM4_CBC_PKCS7PADDING);
                sm2Cert.privateKey = GetPrivatekeyFromD(new BigInteger(1, priKeyD));
                //            log.Info(Hex.toHexString(priKeyD));

                //            ASN1ObjectIdentifier sm2DataOidPub = (ASN1ObjectIdentifier) pubSeq.getObjectAt(0);
                Asn1OctetString pubKeyX509 = (Asn1OctetString)pubSeq[1];
                X509Certificate x509 = (X509Certificate)new X509CertificateParser().ReadCertificate(pubKeyX509.GetOctets());
                sm2Cert.publicKey = x509.GetPublicKey();
                sm2Cert.certId = x509.SerialNumber.ToString(10); //这里转10进账，有啥其他进制要求的自己改改
                return sm2Cert;
            }
            catch (Exception e)
            {
                //log.Error(&quot;readSm2File error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         *
         * @param cert
         * @return
         */
        public static Sm2Cert ReadSm2X509Cert(byte[] cert)
        {
            Sm2Cert sm2Cert = new Sm2Cert();
            try
            {

                X509Certificate x509 = new X509CertificateParser().ReadCertificate(cert);
                sm2Cert.publicKey = x509.GetPublicKey();
                sm2Cert.certId = x509.SerialNumber.ToString(10); //这里转10进账，有啥其他进制要求的自己改改
                return sm2Cert;
            }
            catch (Exception e)
            {
                //log.Error(&quot;ReadSm2X509Cert error: &quot; + e.Message, e);
                return null;
            }
        }

        public static byte[] ZeroIv(String algo)
        {

            try
            {
                IBufferedCipher cipher = CipherUtilities.GetCipher(algo);
                int blockSize = cipher.GetBlockSize();
                byte[] iv = new byte[blockSize];
                Arrays.Fill(iv, (byte)0);
                return iv;
            }
            catch (Exception e)
            {
                //log.Error(&quot;ZeroIv error: &quot; + e.Message, e);
                return null;
            }
        }

        public static void Main2(string[] s)
        {

            // 随便看看
            //log.Info(&quot;GMNamedCurves: &quot;);
            foreach (string e in GMNamedCurves.Names)
            {
                //log.Info(e);
            }
            //log.Info(&quot;sm2p256v1 n:&quot; + x9ECParameters.N);
            //log.Info(&quot;sm2p256v1 nHex:&quot; + Hex.ToHexString(x9ECParameters.N.ToByteArray()));

            // 生成公私钥对 ---------------------
            AsymmetricCipherKeyPair kp = GmUtil.GenerateKeyPair();
            //log.Info(&quot;private key d: &quot; + ((ECPrivateKeyParameters)kp.Private).D);
            //log.Info(&quot;public key q:&quot; + ((ECPublicKeyParameters)kp.Public).Q); //{x, y, zs...}

            //签名验签
            byte[] msg = System.Text.Encoding.UTF8.GetBytes(&quot;message digest&quot;);
            byte[] userId = System.Text.Encoding.UTF8.GetBytes(&quot;userId&quot;);
            byte[] sig = SignSm3WithSm2(msg, userId, kp.Private);
            //log.Info(&quot;testSignSm3WithSm2: &quot; + Hex.ToHexString(sig));
            //log.Info(&quot;testVerifySm3WithSm2: &quot; + VerifySm3WithSm2(msg, userId, sig, kp.Public));

            // 由d生成私钥 ---------------------
            BigInteger d = new BigInteger(&quot;097b5230ef27c7df0fa768289d13ad4e8a96266f0fcb8de40d5942af4293a54a&quot;, 16);
            ECPrivateKeyParameters bcecPrivateKey = GetPrivatekeyFromD(d);
            //log.Info(&quot;testGetFromD: &quot; + bcecPrivateKey.D.ToString(16));

            //公钥X坐标PublicKeyXHex: 59cf9940ea0809a97b1cbffbb3e9d96d0fe842c1335418280bfc51dd4e08a5d4
            //公钥Y坐标PublicKeyYHex: 9a7f77c578644050e09a9adc4245d1e6eba97554bc8ffd4fe15a78f37f891ff8
            AsymmetricKeyParameter publicKey = GetPublickeyFromX509File(new FileInfo(&quot;d:/certs/69629141652.cer&quot;));
            //log.Info(publicKey);
            AsymmetricKeyParameter publicKey1 = GetPublickeyFromXY(new BigInteger(&quot;59cf9940ea0809a97b1cbffbb3e9d96d0fe842c1335418280bfc51dd4e08a5d4&quot;, 16), new BigInteger(&quot;9a7f77c578644050e09a9adc4245d1e6eba97554bc8ffd4fe15a78f37f891ff8&quot;, 16));
            //log.Info(&quot;testReadFromX509File: &quot; + ((ECPublicKeyParameters)publicKey).Q);
            //log.Info(&quot;testGetFromXY: &quot; + ((ECPublicKeyParameters)publicKey1).Q);
            //log.Info(&quot;testPubKey: &quot; + publicKey.Equals(publicKey1));
            //log.Info(&quot;testPubKey: &quot; + ((ECPublicKeyParameters)publicKey).Q.Equals(((ECPublicKeyParameters)publicKey1).Q));

            // sm2 encrypt and decrypt test ---------------------
            AsymmetricCipherKeyPair kp2 = GenerateKeyPair();
            AsymmetricKeyParameter publicKey2 = kp2.Public;
            AsymmetricKeyParameter privateKey2 = kp2.Private;
            byte[] bs = Sm2Encrypt(System.Text.Encoding.UTF8.GetBytes(&quot;s&quot;), publicKey2);
            //log.Info(&quot;testSm2Enc dec: &quot; + Hex.ToHexString(bs));
            bs = Sm2Decrypt(bs, privateKey2);
            //log.Info(&quot;testSm2Enc dec: &quot; + System.Text.Encoding.UTF8.GetString(bs));

            // sm4 encrypt and decrypt test ---------------------
            //0123456789abcdeffedcba9876543210 + 0123456789abcdeffedcba9876543210 -&gt; 681edf34d206965e86b3e94f536e4246
            byte[] plain = Hex.Decode(&quot;0123456789abcdeffedcba98765432100123456789abcdeffedcba98765432100123456789abcdeffedcba9876543210&quot;);
            byte[] key = Hex.Decode(&quot;0123456789abcdeffedcba9876543210&quot;);
            byte[] cipher = Hex.Decode(&quot;595298c7c6fd271f0402f804c33d3f66&quot;);
            bs = Sm4EncryptECB(key, plain, GmUtil.SM4_ECB_NOPADDING);
            //log.Info(&quot;testSm4EncEcb: &quot; + Hex.ToHexString(bs)); ;
            bs = Sm4DecryptECB(key, bs, GmUtil.SM4_ECB_NOPADDING);
            //log.Info(&quot;testSm4DecEcb: &quot; + Hex.ToHexString(bs));

            //读.sm2文件
            String sm2 = &quot;MIIDHQIBATBHBgoqgRzPVQYBBAIBBgcqgRzPVQFoBDDW5/I9kZhObxXE9Vh1CzHdZhIhxn+3byBU\\nUrzmGRKbDRMgI3hJKdvpqWkM5G4LNcIwggLNBgoqgRzPVQYBBAIBBIICvTCCArkwggJdoAMCAQIC\\nBRA2QSlgMAwGCCqBHM9VAYN1BQAwXDELMAkGA1UEBhMCQ04xMDAuBgNVBAoMJ0NoaW5hIEZpbmFu\\nY2lhbCBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEbMBkGA1UEAwwSQ0ZDQSBURVNUIFNNMiBPQ0Ex\\nMB4XDTE4MTEyNjEwMTQxNVoXDTIwMTEyNjEwMTQxNVowcjELMAkGA1UEBhMCY24xEjAQBgNVBAoM\\nCUNGQ0EgT0NBMTEOMAwGA1UECwwFQ1VQUkExFDASBgNVBAsMC0VudGVycHJpc2VzMSkwJwYDVQQD\\nDCAwNDFAWnRlc3RAMDAwMTAwMDA6U0lHTkAwMDAwMDAwMTBZMBMGByqGSM49AgEGCCqBHM9VAYIt\\nA0IABDRNKhvnjaMUShsM4MJ330WhyOwpZEHoAGfqxFGX+rcL9x069dyrmiF3+2ezwSNh1/6YqfFZ\\nX9koM9zE5RG4USmjgfMwgfAwHwYDVR0jBBgwFoAUa/4Y2o9COqa4bbMuiIM6NKLBMOEwSAYDVR0g\\nBEEwPzA9BghggRyG7yoBATAxMC8GCCsGAQUFBwIBFiNodHRwOi8vd3d3LmNmY2EuY29tLmNuL3Vz\\nL3VzLTE0Lmh0bTA4BgNVHR8EMTAvMC2gK6AphidodHRwOi8vdWNybC5jZmNhLmNvbS5jbi9TTTIv\\nY3JsNDI4NS5jcmwwCwYDVR0PBAQDAgPoMB0GA1UdDgQWBBREhx9VlDdMIdIbhAxKnGhPx8FcHDAd\\nBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwQwDAYIKoEcz1UBg3UFAANIADBFAiEAgWvQi3h6\\niW4jgF4huuXfhWInJmTTYr2EIAdG8V4M8fYCIBixygdmfPL9szcK2pzCYmIb6CBzo5SMv50Odycc\\nVfY6&quot;;
            bs = Convert.FromBase64String(sm2);
            String pwd = &quot;cfca1234&quot;;
            GmUtil.Sm2Cert sm2Cert = GmUtil.readSm2File(bs, pwd);
            //log.Info(&quot;testReadSm2File, pubkey: &quot; + ((ECPublicKeyParameters)sm2Cert.publicKey).Q.ToString());
            //log.Info(&quot;testReadSm2File, prikey: &quot; + Hex.ToHexString(((ECPrivateKeyParameters)sm2Cert.privateKey).D.ToByteArray()));
            //log.Info(&quot;testReadSm2File, certId: &quot; + sm2Cert.certId);

            bs = Sm2Encrypt(System.Text.Encoding.UTF8.GetBytes(&quot;s&quot;), ((ECPublicKeyParameters)sm2Cert.publicKey));
            //log.Info(&quot;testSm2Enc dec: &quot; + Hex.ToHexString(bs));
            bs = Sm2Decrypt(bs, ((ECPrivateKeyParameters)sm2Cert.privateKey));
            //log.Info(&quot;testSm2Enc dec: &quot; + System.Text.Encoding.UTF8.GetString(bs));

            msg = System.Text.Encoding.UTF8.GetBytes(&quot;message digest&quot;);
            userId = System.Text.Encoding.UTF8.GetBytes(&quot;userId&quot;);
            sig = SignSm3WithSm2(msg, userId, ((ECPrivateKeyParameters)sm2Cert.privateKey));
            //log.Info(&quot;testSignSm3WithSm2: &quot; + Hex.ToHexString(sig));
            //log.Info(&quot;testVerifySm3WithSm2: &quot; + VerifySm3WithSm2(msg, userId, sig, ((ECPublicKeyParameters)sm2Cert.publicKey)));
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.NET使用：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using CommonUtils;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Utilities.Encoders;
using System.Text;


void TestSM2Sign()
{
    string userId = &quot;1234567812345678&quot;;
    byte[] byUserId = Encoding.UTF8.GetBytes(userId);
    String privateKeyHex = &quot;FAB8BBE670FAE338C9E9382B9FB6485225C11A3ECB84C938F10F20A93B6215F0&quot;;
    string pubKeyHex = &quot;049EF573019D9A03B16B0BE44FC8A5B4E8E098F56034C97B312282DD0B4810AFC3CC759673ED0FC9B9DC7E6FA38F0E2B121E02654BF37EA6B63FAF2A0D6013EADF&quot;;
    //如果是130位公钥，.NET 使用的话，把开头的04截取掉。
    if (pubKeyHex.Length == 130)
    {
        pubKeyHex = pubKeyHex.Substring(2, 128);
    }
    //公钥X，前64位
    String x = pubKeyHex.Substring(0, 64);
    //公钥Y，后64位
    String y = pubKeyHex.Substring(64);
    //获取公钥对象
    AsymmetricKeyParameter publicKey1 = GmUtil.GetPublickeyFromXY(new BigInteger(x, 16), new BigInteger(y, 16));
    BigInteger d = new BigInteger(privateKeyHex, 16);
    //获取私钥对象，用ECPrivateKeyParameters 或 AsymmetricKeyParameter 都可以
    //ECPrivateKeyParameters bcecPrivateKey = CommonUtils.GmUtil.GetPrivatekeyFromD(d);
    AsymmetricKeyParameter bcecPrivateKey = CommonUtils.GmUtil.GetPrivatekeyFromD(d);

    String content = &quot;1234泰酷拉NET&quot;;
    Console.WriteLine(&quot;待处理字符串：&quot; + content);
    //SignSm3WithSm2 是RS，SignSm3WithSm2Asn1Rs 是 asn1
    byte[] digestByte = GmUtil.SignSm3WithSm2(Encoding.UTF8.GetBytes(content), byUserId, bcecPrivateKey);
    string strSM2 = Convert.ToBase64String(digestByte);
    Console.WriteLine(&quot;SM2加签后：&quot; + strSM2);

    //.NET 验签    
    byte[] byToProc = Convert.FromBase64String(strSM2);
    //顺序：报文，userId，签名值，公钥。
    bool verifySign = GmUtil.VerifySm3WithSm2(Encoding.UTF8.GetBytes(content), byUserId, byToProc, publicKey1);

    Console.WriteLine(&quot;SM2 验签：&quot; + verifySign.ToString());

    //JAVA 签名 .NET验签
    string javaContent = &quot;1234泰酷拉JJ&quot;; //注意：报文要和JAVA一致
    Console.WriteLine(&quot;javaContent：&quot; + javaContent);
    string javaSM2 = &quot;MEUCIF5PXxIlF0NmQaUtfIGLbZm4JuYT4bkYyoFMA/eIqVaUAiEAkRT3GkrtY2YtUSF9Ya0jOLRMcMUuHNLiWPTy591vnco=&quot;;

    Console.WriteLine(&quot;javaSM2签名结果：&quot; + javaSM2);
    byToProc = Convert.FromBase64String(javaSM2);
    //注意：JAVA HUTOOL - sm2.sign 结果格式是 asn1 的，我们得用 VerifySm3WithSm2Asn1Rs。
    verifySign = GmUtil.VerifySm3WithSm2Asn1Rs(Encoding.UTF8.GetBytes(javaContent), byUserId, byToProc, publicKey1);

    Console.WriteLine(&quot;JAVA SM2 验签：&quot; + verifySign.ToString());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java代码：</p><p>maven 引用 ：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.hutool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>hutool-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.bouncycastle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bcprov-jdk15on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.70<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JAVA调用：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span></span><span class="token class-name">SmUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>asymmetric<span class="token punctuation">.</span></span><span class="token class-name">KeyType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>asymmetric<span class="token punctuation">.</span></span><span class="token class-name">SM2</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bouncycastle<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>engines<span class="token punctuation">.</span></span><span class="token class-name">SM2Engine</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bouncycastle<span class="token punctuation">.</span>util<span class="token punctuation">.</span>encoders<span class="token punctuation">.</span></span><span class="token class-name">Hex</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Base64</span></span><span class="token punctuation">;</span>


    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testSM2Sign</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token string">&quot;1234泰酷拉JJ&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;待处理字符串：&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> userId <span class="token operator">=</span> <span class="token string">&quot;1234567812345678&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> byUserId <span class="token operator">=</span> userId<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//私钥</span>
        <span class="token class-name">String</span> privateKeyHex <span class="token operator">=</span> <span class="token string">&quot;FAB8BBE670FAE338C9E9382B9FB6485225C11A3ECB84C938F10F20A93B6215F0&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//公钥X</span>
        <span class="token class-name">String</span> x <span class="token operator">=</span> <span class="token string">&quot;9EF573019D9A03B16B0BE44FC8A5B4E8E098F56034C97B312282DD0B4810AFC3&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//公钥Y</span>
        <span class="token class-name">String</span> y <span class="token operator">=</span> <span class="token string">&quot;CC759673ED0FC9B9DC7E6FA38F0E2B121E02654BF37EA6B63FAF2A0D6013EADF&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//构造函数里，私钥或公钥，其中一方可为空 null</span>
        <span class="token class-name">SM2</span> sm2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SM2</span><span class="token punctuation">(</span>privateKeyHex<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> byRst <span class="token operator">=</span> sm2<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> byUserId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> sm2Sign <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encodeToString</span><span class="token punctuation">(</span>byRst<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sm2 BASE64 签名:&quot;</span> <span class="token operator">+</span> sm2Sign<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bySign <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>sm2Sign<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> verifySign <span class="token operator">=</span> sm2<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> bySign<span class="token punctuation">,</span> byUserId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SM2 验签：&quot;</span> <span class="token operator">+</span> verifySign<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sm3" tabindex="-1"><a class="header-anchor" href="#sm3"><span>SM3</span></a></h2><h3 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h3><p>安装nuget包</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>&lt;PackageReference Include=&quot;BouncyCastle.Cryptography&quot; Version=&quot;2.2.1&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var plaintext = &quot;123456&quot;;
var plaintextBytes = Encoding.UTF8.GetBytes(plaintext);
    
var digest = new SM3Digest();
var hashBytes = new byte[digest.GetDigestSize()];
    
digest.BlockUpdate(plaintextBytes, 0, plaintextBytes.Length);
digest.DoFinal(hashBytes, 0);
    
var hashString = Hex.ToHexString(hashBytes);
Console.WriteLine(&quot;SM3 Hash: &quot; + hashString);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码使用 BouncyCastle 库中的 <code>SM3Digest</code> 类来计算给定字符串的 SM3 哈希值。可以通过 <code>Encoding.UTF8.GetBytes</code> 方法将字符串转换为字节数组，然后使用 <code>BlockUpdate</code> 将字节数组输入到 <code>SM3Digest</code> 中，最后通过 <code>DoFinal</code> 方法获取计算出的 SM3 哈希值。</p><h3 id="其他方案" tabindex="-1"><a class="header-anchor" href="#其他方案"><span>其他方案</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>原文地址：https://www.cnblogs.com/runliuv/p/17604030.html</p></div><p>.NET 环境：.NET6 控制台程序(.net core)。</p><p>JAVA 环境：JAVA8，带maven 的JAVA控制台程序。</p><p>简要解析：</p><p>1：明文输入参数都需要string转 byte [] ，要约定好编码，如：UTF8。</p><p>2：输出参数：byte [] ，在传输时需要转为string，要约定好编码，如：16进制字符串。</p><p>.NET 代码：</p><p>GmUtil 工具类，需要nuget下载 Portable.BouncyCastle 1.9.0 版本：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Asn1.GM;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Engines;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Security;
using Org.BouncyCastle.Utilities;
using Org.BouncyCastle.Utilities.Encoders;
using Org.BouncyCastle.X509;
using System;
using System.Collections.Generic;
using System.IO;

namespace CommonUtils
{
    /**
     * need lib:
     * BouncyCastle.Crypto.dll（http://www.bouncycastle.org/csharp/index.html） 
      
     * 用BC的注意点：
     * 这个版本的BC对SM3withSM2的结果为asn1格式的r和s，如果需要直接拼接的r||s需要自己转换。下面rsAsn1ToPlainByteArray、rsPlainByteArrayToAsn1就在干这事。
     * 这个版本的BC对SM2的结果为C1||C2||C3，据说为旧标准，新标准为C1||C3||C2，用新标准的需要自己转换。下面（被注释掉的）changeC1C2C3ToC1C3C2、changeC1C3C2ToC1C2C3就在干这事。java版的高版本有加上C1C3C2，csharp版没准以后也会加，但目前还没有，java版的目前可以初始化时“ SM2Engine sm2Engine = new SM2Engine(SM2Engine.Mode.C1C3C2);”。
     * 
     * 按要求国密算法仅允许使用加密机，本demo国密算法仅供学习使用，请不要用于生产用途。
     */
    public class GmUtil
    {

        //private static readonly ILog log = LogManager.GetLogger(typeof(GmUtil));

        private static X9ECParameters x9ECParameters = GMNamedCurves.GetByName(&quot;sm2p256v1&quot;);
        private static ECDomainParameters ecDomainParameters = new ECDomainParameters(x9ECParameters.Curve, x9ECParameters.G, x9ECParameters.N);

        /**
         *
         * @param msg
         * @param userId
         * @param privateKey
         * @return r||s，直接拼接byte数组的rs
         */
        public static byte[] SignSm3WithSm2(byte[] msg, byte[] userId, AsymmetricKeyParameter privateKey)
        {
            return RsAsn1ToPlainByteArray(SignSm3WithSm2Asn1Rs(msg, userId, privateKey));
        }

        /**
          * @param msg
          * @param userId
          * @param privateKey
          * @return rs in &lt;b&gt;asn1 format&lt;/b&gt;
          */
        public static byte[] SignSm3WithSm2Asn1Rs(byte[] msg, byte[] userId, AsymmetricKeyParameter privateKey)
        {
            try
            {
                ISigner signer = SignerUtilities.GetSigner(&quot;SM3withSM2&quot;);
                signer.Init(true, new ParametersWithID(privateKey, userId));
                signer.BlockUpdate(msg, 0, msg.Length);
                byte[] sig = signer.GenerateSignature();
                return sig;
            }
            catch (Exception e)
            {
                //log.Error(&quot;SignSm3WithSm2Asn1Rs error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
        *
        * @param msg
        * @param userId
        * @param rs r||s，直接拼接byte数组的rs
        * @param publicKey
        * @return
        */
        public static bool VerifySm3WithSm2(byte[] msg, byte[] userId, byte[] rs, AsymmetricKeyParameter publicKey)
        {
            if (rs == null || msg == null || userId == null) return false;
            if (rs.Length != RS_LEN * 2) return false;
            return VerifySm3WithSm2Asn1Rs(msg, userId, RsPlainByteArrayToAsn1(rs), publicKey);
        }

        /**
         *
         * @param msg
         * @param userId
         * @param rs in &lt;b&gt;asn1 format&lt;/b&gt;
         * @param publicKey
         * @return
         */

        public static bool VerifySm3WithSm2Asn1Rs(byte[] msg, byte[] userId, byte[] sign, AsymmetricKeyParameter publicKey)
        {
            try
            {
                ISigner signer = SignerUtilities.GetSigner(&quot;SM3withSM2&quot;);
                signer.Init(false, new ParametersWithID(publicKey, userId));
                signer.BlockUpdate(msg, 0, msg.Length);
                return signer.VerifySignature(sign);
            }
            catch (Exception e)
            {
                //log.Error(&quot;VerifySm3WithSm2Asn1Rs error: &quot; + e.Message, e);
                return false;
            }
        }

        /**
         * bc加解密使用旧标c1||c2||c3，此方法在加密后调用，将结果转化为c1||c3||c2
         * @param c1c2c3
         * @return
         */
        private static byte[] ChangeC1C2C3ToC1C3C2(byte[] c1c2c3)
        {
            int c1Len = (x9ECParameters.Curve.FieldSize + 7) / 8 * 2 + 1; //sm2p256v1的这个固定65。可看GMNamedCurves、ECCurve代码。
            const int c3Len = 32; //new SM3Digest().getDigestSize();
            byte[] result = new byte[c1c2c3.Length];
            Buffer.BlockCopy(c1c2c3, 0, result, 0, c1Len); //c1
            Buffer.BlockCopy(c1c2c3, c1c2c3.Length - c3Len, result, c1Len, c3Len); //c3
            Buffer.BlockCopy(c1c2c3, c1Len, result, c1Len + c3Len, c1c2c3.Length - c1Len - c3Len); //c2
            return result;
        }


        /**
         * bc加解密使用旧标c1||c3||c2，此方法在解密前调用，将密文转化为c1||c2||c3再去解密
         * @param c1c3c2
         * @return
         */
        private static byte[] ChangeC1C3C2ToC1C2C3(byte[] c1c3c2)
        {
            int c1Len = (x9ECParameters.Curve.FieldSize + 7) / 8 * 2 + 1; //sm2p256v1的这个固定65。可看GMNamedCurves、ECCurve代码。
            const int c3Len = 32; //new SM3Digest().GetDigestSize();
            byte[] result = new byte[c1c3c2.Length];
            Buffer.BlockCopy(c1c3c2, 0, result, 0, c1Len); //c1: 0-&gt;65
            Buffer.BlockCopy(c1c3c2, c1Len + c3Len, result, c1Len, c1c3c2.Length - c1Len - c3Len); //c2
            Buffer.BlockCopy(c1c3c2, c1Len, result, c1c3c2.Length - c3Len, c3Len); //c3
            return result;
        }

        /**
         * c1||c3||c2
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2Decrypt(byte[] data, AsymmetricKeyParameter key)
        {
            return Sm2DecryptOld(ChangeC1C3C2ToC1C2C3(data), key);
        }

        /**
         * c1||c3||c2
         * @param data
         * @param key
         * @return
         */

        public static byte[] Sm2Encrypt(byte[] data, AsymmetricKeyParameter key)
        {
            return ChangeC1C2C3ToC1C3C2(Sm2EncryptOld(data, key));
        }

        /**
         * c1||c2||c3
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2EncryptOld(byte[] data, AsymmetricKeyParameter pubkey)
        {
            try
            {
                SM2Engine sm2Engine = new SM2Engine();
                sm2Engine.Init(true, new ParametersWithRandom(pubkey, new SecureRandom()));
                return sm2Engine.ProcessBlock(data, 0, data.Length);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm2EncryptOld error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         * c1||c2||c3
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2DecryptOld(byte[] data, AsymmetricKeyParameter key)
        {
            try
            {
                SM2Engine sm2Engine = new SM2Engine();
                sm2Engine.Init(false, key);
                return sm2Engine.ProcessBlock(data, 0, data.Length);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm2DecryptOld error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         * @param bytes
         * @return
         */
        public static byte[] Sm3(byte[] bytes)
        {
            try
            {
                SM3Digest digest = new SM3Digest();
                digest.BlockUpdate(bytes, 0, bytes.Length);
                byte[] result = DigestUtilities.DoFinal(digest);
                return result;
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm3 error: &quot; + e.Message, e);
                return null;
            }
        }

        private const int RS_LEN = 32;

        private static byte[] BigIntToFixexLengthBytes(BigInteger rOrS)
        {
            // for sm2p256v1, n is 00fffffffeffffffffffffffffffffffff7203df6b21c6052b53bbf40939d54123,
            // r and s are the result of mod n, so they should be less than n and have length&lt;=32
            byte[] rs = rOrS.ToByteArray();
            if (rs.Length == RS_LEN) return rs;
            else if (rs.Length == RS_LEN + 1 &amp;&amp; rs[0] == 0) return Arrays.CopyOfRange(rs, 1, RS_LEN + 1);
            else if (rs.Length &lt; RS_LEN)
            {
                byte[] result = new byte[RS_LEN];
                Arrays.Fill(result, (byte)0);
                Buffer.BlockCopy(rs, 0, result, RS_LEN - rs.Length, rs.Length);
                return result;
            }
            else
            {
                throw new ArgumentException(&quot;err rs: &quot; + Hex.ToHexString(rs));
            }
        }

        /**
         * BC的SM3withSM2签名得到的结果的rs是asn1格式的，这个方法转化成直接拼接r||s
         * @param rsDer rs in asn1 format
         * @return sign result in plain byte array
         */
        private static byte[] RsAsn1ToPlainByteArray(byte[] rsDer)
        {
            Asn1Sequence seq = Asn1Sequence.GetInstance(rsDer);
            byte[] r = BigIntToFixexLengthBytes(DerInteger.GetInstance(seq[0]).Value);
            byte[] s = BigIntToFixexLengthBytes(DerInteger.GetInstance(seq[1]).Value);
            byte[] result = new byte[RS_LEN * 2];
            Buffer.BlockCopy(r, 0, result, 0, r.Length);
            Buffer.BlockCopy(s, 0, result, RS_LEN, s.Length);
            return result;
        }

        /**
         * BC的SM3withSM2验签需要的rs是asn1格式的，这个方法将直接拼接r||s的字节数组转化成asn1格式
         * @param sign in plain byte array
         * @return rs result in asn1 format
         */
        private static byte[] RsPlainByteArrayToAsn1(byte[] sign)
        {
            if (sign.Length != RS_LEN * 2) throw new ArgumentException(&quot;err rs. &quot;);
            BigInteger r = new BigInteger(1, Arrays.CopyOfRange(sign, 0, RS_LEN));
            BigInteger s = new BigInteger(1, Arrays.CopyOfRange(sign, RS_LEN, RS_LEN * 2));
            Asn1EncodableVector v = new Asn1EncodableVector();
            v.Add(new DerInteger(r));
            v.Add(new DerInteger(s));
            try
            {
                return new DerSequence(v).GetEncoded(&quot;DER&quot;);
            }
            catch (IOException e)
            {
                //log.Error(&quot;RsPlainByteArrayToAsn1 error: &quot; + e.Message, e);
                return null;
            }
        }

        public static AsymmetricCipherKeyPair GenerateKeyPair()
        {
            try
            {
                ECKeyPairGenerator kpGen = new ECKeyPairGenerator();
                kpGen.Init(new ECKeyGenerationParameters(ecDomainParameters, new SecureRandom()));
                return kpGen.GenerateKeyPair();
            }
            catch (Exception e)
            {
                //log.Error(&quot;generateKeyPair error: &quot; + e.Message, e);
                return null;
            }
        }

        public static ECPrivateKeyParameters GetPrivatekeyFromD(BigInteger d)
        {
            return new ECPrivateKeyParameters(d, ecDomainParameters);
        }

        public static ECPublicKeyParameters GetPublickeyFromXY(BigInteger x, BigInteger y)
        {
            return new ECPublicKeyParameters(x9ECParameters.Curve.CreatePoint(x, y), ecDomainParameters);
        }

        public static AsymmetricKeyParameter GetPublickeyFromX509File(FileInfo file)
        {

            FileStream fileStream = null;
            try
            {
                //file.DirectoryName + &quot;\\\\&quot; + file.Name
                fileStream = new FileStream(file.FullName, FileMode.Open, FileAccess.Read);
                X509Certificate certificate = new X509CertificateParser().ReadCertificate(fileStream);
                return certificate.GetPublicKey();
            }
            catch (Exception e)
            {
                //log.Error(file.Name + &quot;读取失败，异常：&quot; + e);
            }
            finally
            {
                if (fileStream != null)
                    fileStream.Close();
            }
            return null;
        }

        public class Sm2Cert
        {
            public AsymmetricKeyParameter privateKey;
            public AsymmetricKeyParameter publicKey;
            public String certId;
        }

        private static byte[] ToByteArray(int i)
        {
            byte[] byteArray = new byte[4];
            byteArray[0] = (byte)(i &gt;&gt; 24);
            byteArray[1] = (byte)((i &amp; 0xFFFFFF) &gt;&gt; 16);
            byteArray[2] = (byte)((i &amp; 0xFFFF) &gt;&gt; 8);
            byteArray[3] = (byte)(i &amp; 0xFF);
            return byteArray;
        }

        /**
         * 字节数组拼接
         *
         * @param params
         * @return
         */
        private static byte[] Join(params byte[][] byteArrays)
        {
            List&lt;byte&gt; byteSource = new List&lt;byte&gt;();
            for (int i = 0; i &lt; byteArrays.Length; i++)
            {
                byteSource.AddRange(byteArrays[i]);
            }
            byte[] data = byteSource.ToArray();
            return data;
        }

        /**
         * 密钥派生函数
         *
         * @param Z
         * @param klen
         *            生成klen字节数长度的密钥
         * @return
         */
        private static byte[] KDF(byte[] Z, int klen)
        {
            int ct = 1;
            int end = (int)Math.Ceiling(klen * 1.0 / 32);
            List&lt;byte&gt; byteSource = new List&lt;byte&gt;();
            try
            {
                for (int i = 1; i &lt; end; i++)
                {
                    byteSource.AddRange(GmUtil.Sm3(Join(Z, ToByteArray(ct))));
                    ct++;
                }
                byte[] last = GmUtil.Sm3(Join(Z, ToByteArray(ct)));
                if (klen % 32 == 0)
                {
                    byteSource.AddRange(last);
                }
                else
                    byteSource.AddRange(Arrays.CopyOfRange(last, 0, klen % 32));
                return byteSource.ToArray();
            }
            catch (Exception e)
            {
                //log.Error(&quot;KDF error: &quot; + e.Message, e);
            }
            return null;
        }

        public static byte[] Sm4DecryptCBC(byte[] keyBytes, byte[] cipher, byte[] iv, String algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (cipher.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                if (iv == null) iv = ZeroIv(algo);
                c.Init(false, new ParametersWithIV(key, iv));
                return c.DoFinal(cipher);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4DecryptCBC error: &quot; + e.Message, e);
                return null;
            }
        }


        public static byte[] Sm4EncryptCBC(byte[] keyBytes, byte[] plain, byte[] iv, String algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (plain.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                if (iv == null) iv = ZeroIv(algo);
                c.Init(true, new ParametersWithIV(key, iv));
                return c.DoFinal(plain);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4EncryptCBC error: &quot; + e.Message, e);
                return null;
            }
        }


        public static byte[] Sm4EncryptECB(byte[] keyBytes, byte[] plain, string algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            //NoPadding 的情况下需要校验数据长度是16的倍数.
            if (plain.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                c.Init(true, key);
                return c.DoFinal(plain);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4EncryptECB error: &quot; + e.Message, e);
                return null;
            }
        }

        public static byte[] Sm4DecryptECB(byte[] keyBytes, byte[] cipher, string algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (cipher.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                c.Init(false, key);
                return c.DoFinal(cipher);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4DecryptECB error: &quot; + e.Message, e);
                return null;
            }
        }

        public const String SM4_ECB_NOPADDING = &quot;SM4/ECB/NoPadding&quot;;
        public const String SM4_CBC_NOPADDING = &quot;SM4/CBC/NoPadding&quot;;
        public const String SM4_CBC_PKCS7PADDING = &quot;SM4/CBC/PKCS7Padding&quot;;

        /**
         * cfca官网CSP沙箱导出的sm2文件
         * @param pem 二进制原文
         * @param pwd 密码
         * @return
         */
        public static Sm2Cert readSm2File(byte[] pem, String pwd)
        {

            Sm2Cert sm2Cert = new Sm2Cert();
            try
            {
                Asn1Sequence asn1Sequence = (Asn1Sequence)Asn1Object.FromByteArray(pem);
                //            ASN1Integer asn1Integer = (ASN1Integer) asn1Sequence.getObjectAt(0); //version=1
                Asn1Sequence priSeq = (Asn1Sequence)asn1Sequence[1];//private key
                Asn1Sequence pubSeq = (Asn1Sequence)asn1Sequence[2];//public key and x509 cert

                //            ASN1ObjectIdentifier sm2DataOid = (ASN1ObjectIdentifier) priSeq.getObjectAt(0);
                //            ASN1ObjectIdentifier sm4AlgOid = (ASN1ObjectIdentifier) priSeq.getObjectAt(1);
                Asn1OctetString priKeyAsn1 = (Asn1OctetString)priSeq[2];
                byte[] key = KDF(System.Text.Encoding.UTF8.GetBytes(pwd), 32);
                byte[] priKeyD = Sm4DecryptCBC(Arrays.CopyOfRange(key, 16, 32),
                        priKeyAsn1.GetOctets(),
                        Arrays.CopyOfRange(key, 0, 16), SM4_CBC_PKCS7PADDING);
                sm2Cert.privateKey = GetPrivatekeyFromD(new BigInteger(1, priKeyD));
                //            log.Info(Hex.toHexString(priKeyD));

                //            ASN1ObjectIdentifier sm2DataOidPub = (ASN1ObjectIdentifier) pubSeq.getObjectAt(0);
                Asn1OctetString pubKeyX509 = (Asn1OctetString)pubSeq[1];
                X509Certificate x509 = (X509Certificate)new X509CertificateParser().ReadCertificate(pubKeyX509.GetOctets());
                sm2Cert.publicKey = x509.GetPublicKey();
                sm2Cert.certId = x509.SerialNumber.ToString(10); //这里转10进账，有啥其他进制要求的自己改改
                return sm2Cert;
            }
            catch (Exception e)
            {
                //log.Error(&quot;readSm2File error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         *
         * @param cert
         * @return
         */
        public static Sm2Cert ReadSm2X509Cert(byte[] cert)
        {
            Sm2Cert sm2Cert = new Sm2Cert();
            try
            {

                X509Certificate x509 = new X509CertificateParser().ReadCertificate(cert);
                sm2Cert.publicKey = x509.GetPublicKey();
                sm2Cert.certId = x509.SerialNumber.ToString(10); //这里转10进账，有啥其他进制要求的自己改改
                return sm2Cert;
            }
            catch (Exception e)
            {
                //log.Error(&quot;ReadSm2X509Cert error: &quot; + e.Message, e);
                return null;
            }
        }

        public static byte[] ZeroIv(String algo)
        {

            try
            {
                IBufferedCipher cipher = CipherUtilities.GetCipher(algo);
                int blockSize = cipher.GetBlockSize();
                byte[] iv = new byte[blockSize];
                Arrays.Fill(iv, (byte)0);
                return iv;
            }
            catch (Exception e)
            {
                //log.Error(&quot;ZeroIv error: &quot; + e.Message, e);
                return null;
            }
        }

        public static void Main2(string[] s)
        {

            // 随便看看
            //log.Info(&quot;GMNamedCurves: &quot;);
            foreach (string e in GMNamedCurves.Names)
            {
                //log.Info(e);
            }
            //log.Info(&quot;sm2p256v1 n:&quot; + x9ECParameters.N);
            //log.Info(&quot;sm2p256v1 nHex:&quot; + Hex.ToHexString(x9ECParameters.N.ToByteArray()));

            // 生成公私钥对 ---------------------
            AsymmetricCipherKeyPair kp = GmUtil.GenerateKeyPair();
            //log.Info(&quot;private key d: &quot; + ((ECPrivateKeyParameters)kp.Private).D);
            //log.Info(&quot;public key q:&quot; + ((ECPublicKeyParameters)kp.Public).Q); //{x, y, zs...}

            //签名验签
            byte[] msg = System.Text.Encoding.UTF8.GetBytes(&quot;message digest&quot;);
            byte[] userId = System.Text.Encoding.UTF8.GetBytes(&quot;userId&quot;);
            byte[] sig = SignSm3WithSm2(msg, userId, kp.Private);
            //log.Info(&quot;testSignSm3WithSm2: &quot; + Hex.ToHexString(sig));
            //log.Info(&quot;testVerifySm3WithSm2: &quot; + VerifySm3WithSm2(msg, userId, sig, kp.Public));

            // 由d生成私钥 ---------------------
            BigInteger d = new BigInteger(&quot;097b5230ef27c7df0fa768289d13ad4e8a96266f0fcb8de40d5942af4293a54a&quot;, 16);
            ECPrivateKeyParameters bcecPrivateKey = GetPrivatekeyFromD(d);
            //log.Info(&quot;testGetFromD: &quot; + bcecPrivateKey.D.ToString(16));

            //公钥X坐标PublicKeyXHex: 59cf9940ea0809a97b1cbffbb3e9d96d0fe842c1335418280bfc51dd4e08a5d4
            //公钥Y坐标PublicKeyYHex: 9a7f77c578644050e09a9adc4245d1e6eba97554bc8ffd4fe15a78f37f891ff8
            AsymmetricKeyParameter publicKey = GetPublickeyFromX509File(new FileInfo(&quot;d:/certs/69629141652.cer&quot;));
            //log.Info(publicKey);
            AsymmetricKeyParameter publicKey1 = GetPublickeyFromXY(new BigInteger(&quot;59cf9940ea0809a97b1cbffbb3e9d96d0fe842c1335418280bfc51dd4e08a5d4&quot;, 16), new BigInteger(&quot;9a7f77c578644050e09a9adc4245d1e6eba97554bc8ffd4fe15a78f37f891ff8&quot;, 16));
            //log.Info(&quot;testReadFromX509File: &quot; + ((ECPublicKeyParameters)publicKey).Q);
            //log.Info(&quot;testGetFromXY: &quot; + ((ECPublicKeyParameters)publicKey1).Q);
            //log.Info(&quot;testPubKey: &quot; + publicKey.Equals(publicKey1));
            //log.Info(&quot;testPubKey: &quot; + ((ECPublicKeyParameters)publicKey).Q.Equals(((ECPublicKeyParameters)publicKey1).Q));

            // sm2 encrypt and decrypt test ---------------------
            AsymmetricCipherKeyPair kp2 = GenerateKeyPair();
            AsymmetricKeyParameter publicKey2 = kp2.Public;
            AsymmetricKeyParameter privateKey2 = kp2.Private;
            byte[] bs = Sm2Encrypt(System.Text.Encoding.UTF8.GetBytes(&quot;s&quot;), publicKey2);
            //log.Info(&quot;testSm2Enc dec: &quot; + Hex.ToHexString(bs));
            bs = Sm2Decrypt(bs, privateKey2);
            //log.Info(&quot;testSm2Enc dec: &quot; + System.Text.Encoding.UTF8.GetString(bs));

            // sm4 encrypt and decrypt test ---------------------
            //0123456789abcdeffedcba9876543210 + 0123456789abcdeffedcba9876543210 -&gt; 681edf34d206965e86b3e94f536e4246
            byte[] plain = Hex.Decode(&quot;0123456789abcdeffedcba98765432100123456789abcdeffedcba98765432100123456789abcdeffedcba9876543210&quot;);
            byte[] key = Hex.Decode(&quot;0123456789abcdeffedcba9876543210&quot;);
            byte[] cipher = Hex.Decode(&quot;595298c7c6fd271f0402f804c33d3f66&quot;);
            bs = Sm4EncryptECB(key, plain, GmUtil.SM4_ECB_NOPADDING);
            //log.Info(&quot;testSm4EncEcb: &quot; + Hex.ToHexString(bs)); ;
            bs = Sm4DecryptECB(key, bs, GmUtil.SM4_ECB_NOPADDING);
            //log.Info(&quot;testSm4DecEcb: &quot; + Hex.ToHexString(bs));

            //读.sm2文件
            String sm2 = &quot;MIIDHQIBATBHBgoqgRzPVQYBBAIBBgcqgRzPVQFoBDDW5/I9kZhObxXE9Vh1CzHdZhIhxn+3byBU\\nUrzmGRKbDRMgI3hJKdvpqWkM5G4LNcIwggLNBgoqgRzPVQYBBAIBBIICvTCCArkwggJdoAMCAQIC\\nBRA2QSlgMAwGCCqBHM9VAYN1BQAwXDELMAkGA1UEBhMCQ04xMDAuBgNVBAoMJ0NoaW5hIEZpbmFu\\nY2lhbCBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEbMBkGA1UEAwwSQ0ZDQSBURVNUIFNNMiBPQ0Ex\\nMB4XDTE4MTEyNjEwMTQxNVoXDTIwMTEyNjEwMTQxNVowcjELMAkGA1UEBhMCY24xEjAQBgNVBAoM\\nCUNGQ0EgT0NBMTEOMAwGA1UECwwFQ1VQUkExFDASBgNVBAsMC0VudGVycHJpc2VzMSkwJwYDVQQD\\nDCAwNDFAWnRlc3RAMDAwMTAwMDA6U0lHTkAwMDAwMDAwMTBZMBMGByqGSM49AgEGCCqBHM9VAYIt\\nA0IABDRNKhvnjaMUShsM4MJ330WhyOwpZEHoAGfqxFGX+rcL9x069dyrmiF3+2ezwSNh1/6YqfFZ\\nX9koM9zE5RG4USmjgfMwgfAwHwYDVR0jBBgwFoAUa/4Y2o9COqa4bbMuiIM6NKLBMOEwSAYDVR0g\\nBEEwPzA9BghggRyG7yoBATAxMC8GCCsGAQUFBwIBFiNodHRwOi8vd3d3LmNmY2EuY29tLmNuL3Vz\\nL3VzLTE0Lmh0bTA4BgNVHR8EMTAvMC2gK6AphidodHRwOi8vdWNybC5jZmNhLmNvbS5jbi9TTTIv\\nY3JsNDI4NS5jcmwwCwYDVR0PBAQDAgPoMB0GA1UdDgQWBBREhx9VlDdMIdIbhAxKnGhPx8FcHDAd\\nBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwQwDAYIKoEcz1UBg3UFAANIADBFAiEAgWvQi3h6\\niW4jgF4huuXfhWInJmTTYr2EIAdG8V4M8fYCIBixygdmfPL9szcK2pzCYmIb6CBzo5SMv50Odycc\\nVfY6&quot;;
            bs = Convert.FromBase64String(sm2);
            String pwd = &quot;cfca1234&quot;;
            GmUtil.Sm2Cert sm2Cert = GmUtil.readSm2File(bs, pwd);
            //log.Info(&quot;testReadSm2File, pubkey: &quot; + ((ECPublicKeyParameters)sm2Cert.publicKey).Q.ToString());
            //log.Info(&quot;testReadSm2File, prikey: &quot; + Hex.ToHexString(((ECPrivateKeyParameters)sm2Cert.privateKey).D.ToByteArray()));
            //log.Info(&quot;testReadSm2File, certId: &quot; + sm2Cert.certId);

            bs = Sm2Encrypt(System.Text.Encoding.UTF8.GetBytes(&quot;s&quot;), ((ECPublicKeyParameters)sm2Cert.publicKey));
            //log.Info(&quot;testSm2Enc dec: &quot; + Hex.ToHexString(bs));
            bs = Sm2Decrypt(bs, ((ECPrivateKeyParameters)sm2Cert.privateKey));
            //log.Info(&quot;testSm2Enc dec: &quot; + System.Text.Encoding.UTF8.GetString(bs));

            msg = System.Text.Encoding.UTF8.GetBytes(&quot;message digest&quot;);
            userId = System.Text.Encoding.UTF8.GetBytes(&quot;userId&quot;);
            sig = SignSm3WithSm2(msg, userId, ((ECPrivateKeyParameters)sm2Cert.privateKey));
            //log.Info(&quot;testSignSm3WithSm2: &quot; + Hex.ToHexString(sig));
            //log.Info(&quot;testVerifySm3WithSm2: &quot; + VerifySm3WithSm2(msg, userId, sig, ((ECPublicKeyParameters)sm2Cert.publicKey)));
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using CommonUtils;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Utilities.Encoders;
using System.Text;


void TestSM3()
{
    String content = &quot;1234泰酷拉&quot;;
    Console.WriteLine(&quot;待处理字符串：&quot; + content);

    byte[] digestByte = GmUtil.Sm3(Encoding.UTF8.GetBytes(content));
    string strSM3 = Hex.ToHexString(digestByte);
    Console.WriteLine(&quot;SM3 HASH后：&quot; + strSM3);
    string javaSM3 = &quot;40f9b63398b72bee91f5e59c3c3d7fe9f66c4fb1637ec7adb9babb880e6489ec&quot;;
    Console.WriteLine(&quot;javaSM3：&quot; + javaSM3);
    if (strSM3 == javaSM3)
    {
        Console.WriteLine(&quot;相等&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JAVA 代码：</p><p>maven 引用这2个包。</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.hutool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>hutool-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.bouncycastle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bcprov-jdk15on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.70<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span></span><span class="token class-name">SmUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>asymmetric<span class="token punctuation">.</span></span><span class="token class-name">KeyType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>asymmetric<span class="token punctuation">.</span></span><span class="token class-name">SM2</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bouncycastle<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>engines<span class="token punctuation">.</span></span><span class="token class-name">SM2Engine</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bouncycastle<span class="token punctuation">.</span>util<span class="token punctuation">.</span>encoders<span class="token punctuation">.</span></span><span class="token class-name">Hex</span></span><span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testSM3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token string">&quot;1234泰酷拉&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;待处理字符串：&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> digestHex <span class="token operator">=</span> <span class="token class-name">SmUtil</span><span class="token punctuation">.</span><span class="token function">sm3</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SM3 HASH后：&quot;</span> <span class="token operator">+</span> digestHex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sm4" tabindex="-1"><a class="header-anchor" href="#sm4"><span>SM4</span></a></h2><h3 id="方案一-1" tabindex="-1"><a class="header-anchor" href="#方案一-1"><span>方案一</span></a></h3><p>引用nuget包</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code> &lt;PackageReference Include=&quot;BouncyCastle.Cryptography&quot; Version=&quot;2.2.1&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>// 加密
var inputBytes = Encoding.UTF8.GetBytes(_origin);
var secretBytes = Encoding.UTF8.GetBytes(_secret);

var engine = new SM4Engine();
var secretParameter = new KeyParameter(secretBytes);
var cipher = new PaddedBufferedBlockCipher(new CbcBlockCipher(engine));

var encryptedBytes = cipher.DoFinal(inputBytes);
var encryptedBase64 = Convert.ToBase64String(encryptedBytes);
//Console.WriteLine($&quot;加密后的文本: {encryptedBase64}&quot;);

// 解密
cipher.Init(false, new ParametersWithIV(secretParameter, new byte[16]));
var decryptedBytes = cipher.DoFinal(Convert.FromBase64String(encryptedBase64));
var decryptedText = Encoding.UTF8.GetString(decryptedBytes);
//Console.WriteLine($&quot;解密后的文本: {decryptedText}&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他方案-1" tabindex="-1"><a class="header-anchor" href="#其他方案-1"><span>其他方案</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>原文地址：https://www.cnblogs.com/runliuv/p/17593661.html</p></div><p>.NET 环境：.NET6 控制台程序(.net core)。</p><p>JAVA 环境：JAVA8，带maven 的JAVA控制台程序。</p><p>简要解析：</p><p>1：加密的KEY、明文等输入参数都需要string转 byte [] ，要约定好编码，如：UTF8。</p><p>2：加密后的输出参数：byte [] ，在传输时需要转为string，要约定好编码，如：16进制字符串。</p><p>这里演示的是“SM4/ECB/PKCS5Padding”，CBC的自行探索。</p><p>.NET 代码：</p><p>GmUtil 工具类，需要nuget下载 Portable.BouncyCastle 1.9.0 版本：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Asn1.GM;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Digests;
using Org.BouncyCastle.Crypto.Engines;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Math;
using Org.BouncyCastle.Security;
using Org.BouncyCastle.Utilities;
using Org.BouncyCastle.Utilities.Encoders;
using Org.BouncyCastle.X509;
using System;
using System.Collections.Generic;
using System.IO;

namespace CommonUtils
{
    /**
     * need lib:
     * BouncyCastle.Crypto.dll（http://www.bouncycastle.org/csharp/index.html） 
      
     * 用BC的注意点：
     * 这个版本的BC对SM3withSM2的结果为asn1格式的r和s，如果需要直接拼接的r||s需要自己转换。下面rsAsn1ToPlainByteArray、rsPlainByteArrayToAsn1就在干这事。
     * 这个版本的BC对SM2的结果为C1||C2||C3，据说为旧标准，新标准为C1||C3||C2，用新标准的需要自己转换。下面（被注释掉的）changeC1C2C3ToC1C3C2、changeC1C3C2ToC1C2C3就在干这事。java版的高版本有加上C1C3C2，csharp版没准以后也会加，但目前还没有，java版的目前可以初始化时“ SM2Engine sm2Engine = new SM2Engine(SM2Engine.Mode.C1C3C2);”。
     * 
     * 按要求国密算法仅允许使用加密机，本demo国密算法仅供学习使用，请不要用于生产用途。
     */
    public class GmUtil
    {

        //private static readonly ILog log = LogManager.GetLogger(typeof(GmUtil));

        private static X9ECParameters x9ECParameters = GMNamedCurves.GetByName(&quot;sm2p256v1&quot;);
        private static ECDomainParameters ecDomainParameters = new ECDomainParameters(x9ECParameters.Curve, x9ECParameters.G, x9ECParameters.N);

        /**
         *
         * @param msg
         * @param userId
         * @param privateKey
         * @return r||s，直接拼接byte数组的rs
         */
        public static byte[] SignSm3WithSm2(byte[] msg, byte[] userId, AsymmetricKeyParameter privateKey)
        {
            return RsAsn1ToPlainByteArray(SignSm3WithSm2Asn1Rs(msg, userId, privateKey));
        }

        /**
          * @param msg
          * @param userId
          * @param privateKey
          * @return rs in &lt;b&gt;asn1 format&lt;/b&gt;
          */
        public static byte[] SignSm3WithSm2Asn1Rs(byte[] msg, byte[] userId, AsymmetricKeyParameter privateKey)
        {
            try
            {
                ISigner signer = SignerUtilities.GetSigner(&quot;SM3withSM2&quot;);
                signer.Init(true, new ParametersWithID(privateKey, userId));
                signer.BlockUpdate(msg, 0, msg.Length);
                byte[] sig = signer.GenerateSignature();
                return sig;
            }
            catch (Exception e)
            {
                //log.Error(&quot;SignSm3WithSm2Asn1Rs error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
        *
        * @param msg
        * @param userId
        * @param rs r||s，直接拼接byte数组的rs
        * @param publicKey
        * @return
        */
        public static bool VerifySm3WithSm2(byte[] msg, byte[] userId, byte[] rs, AsymmetricKeyParameter publicKey)
        {
            if (rs == null || msg == null || userId == null) return false;
            if (rs.Length != RS_LEN * 2) return false;
            return VerifySm3WithSm2Asn1Rs(msg, userId, RsPlainByteArrayToAsn1(rs), publicKey);
        }

        /**
         *
         * @param msg
         * @param userId
         * @param rs in &lt;b&gt;asn1 format&lt;/b&gt;
         * @param publicKey
         * @return
         */

        public static bool VerifySm3WithSm2Asn1Rs(byte[] msg, byte[] userId, byte[] sign, AsymmetricKeyParameter publicKey)
        {
            try
            {
                ISigner signer = SignerUtilities.GetSigner(&quot;SM3withSM2&quot;);
                signer.Init(false, new ParametersWithID(publicKey, userId));
                signer.BlockUpdate(msg, 0, msg.Length);
                return signer.VerifySignature(sign);
            }
            catch (Exception e)
            {
                //log.Error(&quot;VerifySm3WithSm2Asn1Rs error: &quot; + e.Message, e);
                return false;
            }
        }

        /**
         * bc加解密使用旧标c1||c2||c3，此方法在加密后调用，将结果转化为c1||c3||c2
         * @param c1c2c3
         * @return
         */
        private static byte[] ChangeC1C2C3ToC1C3C2(byte[] c1c2c3)
        {
            int c1Len = (x9ECParameters.Curve.FieldSize + 7) / 8 * 2 + 1; //sm2p256v1的这个固定65。可看GMNamedCurves、ECCurve代码。
            const int c3Len = 32; //new SM3Digest().getDigestSize();
            byte[] result = new byte[c1c2c3.Length];
            Buffer.BlockCopy(c1c2c3, 0, result, 0, c1Len); //c1
            Buffer.BlockCopy(c1c2c3, c1c2c3.Length - c3Len, result, c1Len, c3Len); //c3
            Buffer.BlockCopy(c1c2c3, c1Len, result, c1Len + c3Len, c1c2c3.Length - c1Len - c3Len); //c2
            return result;
        }


        /**
         * bc加解密使用旧标c1||c3||c2，此方法在解密前调用，将密文转化为c1||c2||c3再去解密
         * @param c1c3c2
         * @return
         */
        private static byte[] ChangeC1C3C2ToC1C2C3(byte[] c1c3c2)
        {
            int c1Len = (x9ECParameters.Curve.FieldSize + 7) / 8 * 2 + 1; //sm2p256v1的这个固定65。可看GMNamedCurves、ECCurve代码。
            const int c3Len = 32; //new SM3Digest().GetDigestSize();
            byte[] result = new byte[c1c3c2.Length];
            Buffer.BlockCopy(c1c3c2, 0, result, 0, c1Len); //c1: 0-&gt;65
            Buffer.BlockCopy(c1c3c2, c1Len + c3Len, result, c1Len, c1c3c2.Length - c1Len - c3Len); //c2
            Buffer.BlockCopy(c1c3c2, c1Len, result, c1c3c2.Length - c3Len, c3Len); //c3
            return result;
        }

        /**
         * c1||c3||c2
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2Decrypt(byte[] data, AsymmetricKeyParameter key)
        {
            return Sm2DecryptOld(ChangeC1C3C2ToC1C2C3(data), key);
        }

        /**
         * c1||c3||c2
         * @param data
         * @param key
         * @return
         */

        public static byte[] Sm2Encrypt(byte[] data, AsymmetricKeyParameter key)
        {
            return ChangeC1C2C3ToC1C3C2(Sm2EncryptOld(data, key));
        }

        /**
         * c1||c2||c3
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2EncryptOld(byte[] data, AsymmetricKeyParameter pubkey)
        {
            try
            {
                SM2Engine sm2Engine = new SM2Engine();
                sm2Engine.Init(true, new ParametersWithRandom(pubkey, new SecureRandom()));
                return sm2Engine.ProcessBlock(data, 0, data.Length);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm2EncryptOld error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         * c1||c2||c3
         * @param data
         * @param key
         * @return
         */
        public static byte[] Sm2DecryptOld(byte[] data, AsymmetricKeyParameter key)
        {
            try
            {
                SM2Engine sm2Engine = new SM2Engine();
                sm2Engine.Init(false, key);
                return sm2Engine.ProcessBlock(data, 0, data.Length);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm2DecryptOld error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         * @param bytes
         * @return
         */
        public static byte[] Sm3(byte[] bytes)
        {
            try
            {
                SM3Digest digest = new SM3Digest();
                digest.BlockUpdate(bytes, 0, bytes.Length);
                byte[] result = DigestUtilities.DoFinal(digest);
                return result;
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm3 error: &quot; + e.Message, e);
                return null;
            }
        }

        private const int RS_LEN = 32;

        private static byte[] BigIntToFixexLengthBytes(BigInteger rOrS)
        {
            // for sm2p256v1, n is 00fffffffeffffffffffffffffffffffff7203df6b21c6052b53bbf40939d54123,
            // r and s are the result of mod n, so they should be less than n and have length&lt;=32
            byte[] rs = rOrS.ToByteArray();
            if (rs.Length == RS_LEN) return rs;
            else if (rs.Length == RS_LEN + 1 &amp;&amp; rs[0] == 0) return Arrays.CopyOfRange(rs, 1, RS_LEN + 1);
            else if (rs.Length &lt; RS_LEN)
            {
                byte[] result = new byte[RS_LEN];
                Arrays.Fill(result, (byte)0);
                Buffer.BlockCopy(rs, 0, result, RS_LEN - rs.Length, rs.Length);
                return result;
            }
            else
            {
                throw new ArgumentException(&quot;err rs: &quot; + Hex.ToHexString(rs));
            }
        }

        /**
         * BC的SM3withSM2签名得到的结果的rs是asn1格式的，这个方法转化成直接拼接r||s
         * @param rsDer rs in asn1 format
         * @return sign result in plain byte array
         */
        private static byte[] RsAsn1ToPlainByteArray(byte[] rsDer)
        {
            Asn1Sequence seq = Asn1Sequence.GetInstance(rsDer);
            byte[] r = BigIntToFixexLengthBytes(DerInteger.GetInstance(seq[0]).Value);
            byte[] s = BigIntToFixexLengthBytes(DerInteger.GetInstance(seq[1]).Value);
            byte[] result = new byte[RS_LEN * 2];
            Buffer.BlockCopy(r, 0, result, 0, r.Length);
            Buffer.BlockCopy(s, 0, result, RS_LEN, s.Length);
            return result;
        }

        /**
         * BC的SM3withSM2验签需要的rs是asn1格式的，这个方法将直接拼接r||s的字节数组转化成asn1格式
         * @param sign in plain byte array
         * @return rs result in asn1 format
         */
        private static byte[] RsPlainByteArrayToAsn1(byte[] sign)
        {
            if (sign.Length != RS_LEN * 2) throw new ArgumentException(&quot;err rs. &quot;);
            BigInteger r = new BigInteger(1, Arrays.CopyOfRange(sign, 0, RS_LEN));
            BigInteger s = new BigInteger(1, Arrays.CopyOfRange(sign, RS_LEN, RS_LEN * 2));
            Asn1EncodableVector v = new Asn1EncodableVector();
            v.Add(new DerInteger(r));
            v.Add(new DerInteger(s));
            try
            {
                return new DerSequence(v).GetEncoded(&quot;DER&quot;);
            }
            catch (IOException e)
            {
                //log.Error(&quot;RsPlainByteArrayToAsn1 error: &quot; + e.Message, e);
                return null;
            }
        }

        public static AsymmetricCipherKeyPair GenerateKeyPair()
        {
            try
            {
                ECKeyPairGenerator kpGen = new ECKeyPairGenerator();
                kpGen.Init(new ECKeyGenerationParameters(ecDomainParameters, new SecureRandom()));
                return kpGen.GenerateKeyPair();
            }
            catch (Exception e)
            {
                //log.Error(&quot;generateKeyPair error: &quot; + e.Message, e);
                return null;
            }
        }

        public static ECPrivateKeyParameters GetPrivatekeyFromD(BigInteger d)
        {
            return new ECPrivateKeyParameters(d, ecDomainParameters);
        }

        public static ECPublicKeyParameters GetPublickeyFromXY(BigInteger x, BigInteger y)
        {
            return new ECPublicKeyParameters(x9ECParameters.Curve.CreatePoint(x, y), ecDomainParameters);
        }

        public static AsymmetricKeyParameter GetPublickeyFromX509File(FileInfo file)
        {

            FileStream fileStream = null;
            try
            {
                //file.DirectoryName + &quot;\\\\&quot; + file.Name
                fileStream = new FileStream(file.FullName, FileMode.Open, FileAccess.Read);
                X509Certificate certificate = new X509CertificateParser().ReadCertificate(fileStream);
                return certificate.GetPublicKey();
            }
            catch (Exception e)
            {
                //log.Error(file.Name + &quot;读取失败，异常：&quot; + e);
            }
            finally
            {
                if (fileStream != null)
                    fileStream.Close();
            }
            return null;
        }

        public class Sm2Cert
        {
            public AsymmetricKeyParameter privateKey;
            public AsymmetricKeyParameter publicKey;
            public String certId;
        }

        private static byte[] ToByteArray(int i)
        {
            byte[] byteArray = new byte[4];
            byteArray[0] = (byte)(i &gt;&gt; 24);
            byteArray[1] = (byte)((i &amp; 0xFFFFFF) &gt;&gt; 16);
            byteArray[2] = (byte)((i &amp; 0xFFFF) &gt;&gt; 8);
            byteArray[3] = (byte)(i &amp; 0xFF);
            return byteArray;
        }

        /**
         * 字节数组拼接
         *
         * @param params
         * @return
         */
        private static byte[] Join(params byte[][] byteArrays)
        {
            List&lt;byte&gt; byteSource = new List&lt;byte&gt;();
            for (int i = 0; i &lt; byteArrays.Length; i++)
            {
                byteSource.AddRange(byteArrays[i]);
            }
            byte[] data = byteSource.ToArray();
            return data;
        }

        /**
         * 密钥派生函数
         *
         * @param Z
         * @param klen
         *            生成klen字节数长度的密钥
         * @return
         */
        private static byte[] KDF(byte[] Z, int klen)
        {
            int ct = 1;
            int end = (int)Math.Ceiling(klen * 1.0 / 32);
            List&lt;byte&gt; byteSource = new List&lt;byte&gt;();
            try
            {
                for (int i = 1; i &lt; end; i++)
                {
                    byteSource.AddRange(GmUtil.Sm3(Join(Z, ToByteArray(ct))));
                    ct++;
                }
                byte[] last = GmUtil.Sm3(Join(Z, ToByteArray(ct)));
                if (klen % 32 == 0)
                {
                    byteSource.AddRange(last);
                }
                else
                    byteSource.AddRange(Arrays.CopyOfRange(last, 0, klen % 32));
                return byteSource.ToArray();
            }
            catch (Exception e)
            {
                //log.Error(&quot;KDF error: &quot; + e.Message, e);
            }
            return null;
        }

        public static byte[] Sm4DecryptCBC(byte[] keyBytes, byte[] cipher, byte[] iv, String algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (cipher.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                if (iv == null) iv = ZeroIv(algo);
                c.Init(false, new ParametersWithIV(key, iv));
                return c.DoFinal(cipher);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4DecryptCBC error: &quot; + e.Message, e);
                return null;
            }
        }


        public static byte[] Sm4EncryptCBC(byte[] keyBytes, byte[] plain, byte[] iv, String algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (plain.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                if (iv == null) iv = ZeroIv(algo);
                c.Init(true, new ParametersWithIV(key, iv));
                return c.DoFinal(plain);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4EncryptCBC error: &quot; + e.Message, e);
                return null;
            }
        }


        public static byte[] Sm4EncryptECB(byte[] keyBytes, byte[] plain, string algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            //NoPadding 的情况下需要校验数据长度是16的倍数.
            if (plain.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                c.Init(true, key);
                return c.DoFinal(plain);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4EncryptECB error: &quot; + e.Message, e);
                return null;
            }
        }

        public static byte[] Sm4DecryptECB(byte[] keyBytes, byte[] cipher, string algo)
        {
            if (keyBytes.Length != 16) throw new ArgumentException(&quot;err key length&quot;);
            if (cipher.Length % 16 != 0 &amp;&amp; algo.Contains(&quot;NoPadding&quot;)) throw new ArgumentException(&quot;err data length&quot;);

            try
            {
                KeyParameter key = ParameterUtilities.CreateKeyParameter(&quot;SM4&quot;, keyBytes);
                IBufferedCipher c = CipherUtilities.GetCipher(algo);
                c.Init(false, key);
                return c.DoFinal(cipher);
            }
            catch (Exception e)
            {
                //log.Error(&quot;Sm4DecryptECB error: &quot; + e.Message, e);
                return null;
            }
        }

        public const String SM4_ECB_NOPADDING = &quot;SM4/ECB/NoPadding&quot;;
        public const String SM4_CBC_NOPADDING = &quot;SM4/CBC/NoPadding&quot;;
        public const String SM4_CBC_PKCS7PADDING = &quot;SM4/CBC/PKCS7Padding&quot;;

        /**
         * cfca官网CSP沙箱导出的sm2文件
         * @param pem 二进制原文
         * @param pwd 密码
         * @return
         */
        public static Sm2Cert readSm2File(byte[] pem, String pwd)
        {

            Sm2Cert sm2Cert = new Sm2Cert();
            try
            {
                Asn1Sequence asn1Sequence = (Asn1Sequence)Asn1Object.FromByteArray(pem);
                //            ASN1Integer asn1Integer = (ASN1Integer) asn1Sequence.getObjectAt(0); //version=1
                Asn1Sequence priSeq = (Asn1Sequence)asn1Sequence[1];//private key
                Asn1Sequence pubSeq = (Asn1Sequence)asn1Sequence[2];//public key and x509 cert

                //            ASN1ObjectIdentifier sm2DataOid = (ASN1ObjectIdentifier) priSeq.getObjectAt(0);
                //            ASN1ObjectIdentifier sm4AlgOid = (ASN1ObjectIdentifier) priSeq.getObjectAt(1);
                Asn1OctetString priKeyAsn1 = (Asn1OctetString)priSeq[2];
                byte[] key = KDF(System.Text.Encoding.UTF8.GetBytes(pwd), 32);
                byte[] priKeyD = Sm4DecryptCBC(Arrays.CopyOfRange(key, 16, 32),
                        priKeyAsn1.GetOctets(),
                        Arrays.CopyOfRange(key, 0, 16), SM4_CBC_PKCS7PADDING);
                sm2Cert.privateKey = GetPrivatekeyFromD(new BigInteger(1, priKeyD));
                //            log.Info(Hex.toHexString(priKeyD));

                //            ASN1ObjectIdentifier sm2DataOidPub = (ASN1ObjectIdentifier) pubSeq.getObjectAt(0);
                Asn1OctetString pubKeyX509 = (Asn1OctetString)pubSeq[1];
                X509Certificate x509 = (X509Certificate)new X509CertificateParser().ReadCertificate(pubKeyX509.GetOctets());
                sm2Cert.publicKey = x509.GetPublicKey();
                sm2Cert.certId = x509.SerialNumber.ToString(10); //这里转10进账，有啥其他进制要求的自己改改
                return sm2Cert;
            }
            catch (Exception e)
            {
                //log.Error(&quot;readSm2File error: &quot; + e.Message, e);
                return null;
            }
        }

        /**
         *
         * @param cert
         * @return
         */
        public static Sm2Cert ReadSm2X509Cert(byte[] cert)
        {
            Sm2Cert sm2Cert = new Sm2Cert();
            try
            {

                X509Certificate x509 = new X509CertificateParser().ReadCertificate(cert);
                sm2Cert.publicKey = x509.GetPublicKey();
                sm2Cert.certId = x509.SerialNumber.ToString(10); //这里转10进账，有啥其他进制要求的自己改改
                return sm2Cert;
            }
            catch (Exception e)
            {
                //log.Error(&quot;ReadSm2X509Cert error: &quot; + e.Message, e);
                return null;
            }
        }

        public static byte[] ZeroIv(String algo)
        {

            try
            {
                IBufferedCipher cipher = CipherUtilities.GetCipher(algo);
                int blockSize = cipher.GetBlockSize();
                byte[] iv = new byte[blockSize];
                Arrays.Fill(iv, (byte)0);
                return iv;
            }
            catch (Exception e)
            {
                //log.Error(&quot;ZeroIv error: &quot; + e.Message, e);
                return null;
            }
        }

        public static void Main2(string[] s)
        {

            // 随便看看
            //log.Info(&quot;GMNamedCurves: &quot;);
            foreach (string e in GMNamedCurves.Names)
            {
                //log.Info(e);
            }
            //log.Info(&quot;sm2p256v1 n:&quot; + x9ECParameters.N);
            //log.Info(&quot;sm2p256v1 nHex:&quot; + Hex.ToHexString(x9ECParameters.N.ToByteArray()));

            // 生成公私钥对 ---------------------
            AsymmetricCipherKeyPair kp = GmUtil.GenerateKeyPair();
            //log.Info(&quot;private key d: &quot; + ((ECPrivateKeyParameters)kp.Private).D);
            //log.Info(&quot;public key q:&quot; + ((ECPublicKeyParameters)kp.Public).Q); //{x, y, zs...}

            //签名验签
            byte[] msg = System.Text.Encoding.UTF8.GetBytes(&quot;message digest&quot;);
            byte[] userId = System.Text.Encoding.UTF8.GetBytes(&quot;userId&quot;);
            byte[] sig = SignSm3WithSm2(msg, userId, kp.Private);
            //log.Info(&quot;testSignSm3WithSm2: &quot; + Hex.ToHexString(sig));
            //log.Info(&quot;testVerifySm3WithSm2: &quot; + VerifySm3WithSm2(msg, userId, sig, kp.Public));

            // 由d生成私钥 ---------------------
            BigInteger d = new BigInteger(&quot;097b5230ef27c7df0fa768289d13ad4e8a96266f0fcb8de40d5942af4293a54a&quot;, 16);
            ECPrivateKeyParameters bcecPrivateKey = GetPrivatekeyFromD(d);
            //log.Info(&quot;testGetFromD: &quot; + bcecPrivateKey.D.ToString(16));

            //公钥X坐标PublicKeyXHex: 59cf9940ea0809a97b1cbffbb3e9d96d0fe842c1335418280bfc51dd4e08a5d4
            //公钥Y坐标PublicKeyYHex: 9a7f77c578644050e09a9adc4245d1e6eba97554bc8ffd4fe15a78f37f891ff8
            AsymmetricKeyParameter publicKey = GetPublickeyFromX509File(new FileInfo(&quot;d:/certs/69629141652.cer&quot;));
            //log.Info(publicKey);
            AsymmetricKeyParameter publicKey1 = GetPublickeyFromXY(new BigInteger(&quot;59cf9940ea0809a97b1cbffbb3e9d96d0fe842c1335418280bfc51dd4e08a5d4&quot;, 16), new BigInteger(&quot;9a7f77c578644050e09a9adc4245d1e6eba97554bc8ffd4fe15a78f37f891ff8&quot;, 16));
            //log.Info(&quot;testReadFromX509File: &quot; + ((ECPublicKeyParameters)publicKey).Q);
            //log.Info(&quot;testGetFromXY: &quot; + ((ECPublicKeyParameters)publicKey1).Q);
            //log.Info(&quot;testPubKey: &quot; + publicKey.Equals(publicKey1));
            //log.Info(&quot;testPubKey: &quot; + ((ECPublicKeyParameters)publicKey).Q.Equals(((ECPublicKeyParameters)publicKey1).Q));

            // sm2 encrypt and decrypt test ---------------------
            AsymmetricCipherKeyPair kp2 = GenerateKeyPair();
            AsymmetricKeyParameter publicKey2 = kp2.Public;
            AsymmetricKeyParameter privateKey2 = kp2.Private;
            byte[] bs = Sm2Encrypt(System.Text.Encoding.UTF8.GetBytes(&quot;s&quot;), publicKey2);
            //log.Info(&quot;testSm2Enc dec: &quot; + Hex.ToHexString(bs));
            bs = Sm2Decrypt(bs, privateKey2);
            //log.Info(&quot;testSm2Enc dec: &quot; + System.Text.Encoding.UTF8.GetString(bs));

            // sm4 encrypt and decrypt test ---------------------
            //0123456789abcdeffedcba9876543210 + 0123456789abcdeffedcba9876543210 -&gt; 681edf34d206965e86b3e94f536e4246
            byte[] plain = Hex.Decode(&quot;0123456789abcdeffedcba98765432100123456789abcdeffedcba98765432100123456789abcdeffedcba9876543210&quot;);
            byte[] key = Hex.Decode(&quot;0123456789abcdeffedcba9876543210&quot;);
            byte[] cipher = Hex.Decode(&quot;595298c7c6fd271f0402f804c33d3f66&quot;);
            bs = Sm4EncryptECB(key, plain, GmUtil.SM4_ECB_NOPADDING);
            //log.Info(&quot;testSm4EncEcb: &quot; + Hex.ToHexString(bs)); ;
            bs = Sm4DecryptECB(key, bs, GmUtil.SM4_ECB_NOPADDING);
            //log.Info(&quot;testSm4DecEcb: &quot; + Hex.ToHexString(bs));

            //读.sm2文件
            String sm2 = &quot;MIIDHQIBATBHBgoqgRzPVQYBBAIBBgcqgRzPVQFoBDDW5/I9kZhObxXE9Vh1CzHdZhIhxn+3byBU\\nUrzmGRKbDRMgI3hJKdvpqWkM5G4LNcIwggLNBgoqgRzPVQYBBAIBBIICvTCCArkwggJdoAMCAQIC\\nBRA2QSlgMAwGCCqBHM9VAYN1BQAwXDELMAkGA1UEBhMCQ04xMDAuBgNVBAoMJ0NoaW5hIEZpbmFu\\nY2lhbCBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEbMBkGA1UEAwwSQ0ZDQSBURVNUIFNNMiBPQ0Ex\\nMB4XDTE4MTEyNjEwMTQxNVoXDTIwMTEyNjEwMTQxNVowcjELMAkGA1UEBhMCY24xEjAQBgNVBAoM\\nCUNGQ0EgT0NBMTEOMAwGA1UECwwFQ1VQUkExFDASBgNVBAsMC0VudGVycHJpc2VzMSkwJwYDVQQD\\nDCAwNDFAWnRlc3RAMDAwMTAwMDA6U0lHTkAwMDAwMDAwMTBZMBMGByqGSM49AgEGCCqBHM9VAYIt\\nA0IABDRNKhvnjaMUShsM4MJ330WhyOwpZEHoAGfqxFGX+rcL9x069dyrmiF3+2ezwSNh1/6YqfFZ\\nX9koM9zE5RG4USmjgfMwgfAwHwYDVR0jBBgwFoAUa/4Y2o9COqa4bbMuiIM6NKLBMOEwSAYDVR0g\\nBEEwPzA9BghggRyG7yoBATAxMC8GCCsGAQUFBwIBFiNodHRwOi8vd3d3LmNmY2EuY29tLmNuL3Vz\\nL3VzLTE0Lmh0bTA4BgNVHR8EMTAvMC2gK6AphidodHRwOi8vdWNybC5jZmNhLmNvbS5jbi9TTTIv\\nY3JsNDI4NS5jcmwwCwYDVR0PBAQDAgPoMB0GA1UdDgQWBBREhx9VlDdMIdIbhAxKnGhPx8FcHDAd\\nBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwQwDAYIKoEcz1UBg3UFAANIADBFAiEAgWvQi3h6\\niW4jgF4huuXfhWInJmTTYr2EIAdG8V4M8fYCIBixygdmfPL9szcK2pzCYmIb6CBzo5SMv50Odycc\\nVfY6&quot;;
            bs = Convert.FromBase64String(sm2);
            String pwd = &quot;cfca1234&quot;;
            GmUtil.Sm2Cert sm2Cert = GmUtil.readSm2File(bs, pwd);
            //log.Info(&quot;testReadSm2File, pubkey: &quot; + ((ECPublicKeyParameters)sm2Cert.publicKey).Q.ToString());
            //log.Info(&quot;testReadSm2File, prikey: &quot; + Hex.ToHexString(((ECPrivateKeyParameters)sm2Cert.privateKey).D.ToByteArray()));
            //log.Info(&quot;testReadSm2File, certId: &quot; + sm2Cert.certId);

            bs = Sm2Encrypt(System.Text.Encoding.UTF8.GetBytes(&quot;s&quot;), ((ECPublicKeyParameters)sm2Cert.publicKey));
            //log.Info(&quot;testSm2Enc dec: &quot; + Hex.ToHexString(bs));
            bs = Sm2Decrypt(bs, ((ECPrivateKeyParameters)sm2Cert.privateKey));
            //log.Info(&quot;testSm2Enc dec: &quot; + System.Text.Encoding.UTF8.GetString(bs));

            msg = System.Text.Encoding.UTF8.GetBytes(&quot;message digest&quot;);
            userId = System.Text.Encoding.UTF8.GetBytes(&quot;userId&quot;);
            sig = SignSm3WithSm2(msg, userId, ((ECPrivateKeyParameters)sm2Cert.privateKey));
            //log.Info(&quot;testSignSm3WithSm2: &quot; + Hex.ToHexString(sig));
            //log.Info(&quot;testVerifySm3WithSm2: &quot; + VerifySm3WithSm2(msg, userId, sig, ((ECPublicKeyParameters)sm2Cert.publicKey)));
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.NET调用DEMO：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>// See https://aka.ms/new-console-template for more information
using CommonUtils;
using Org.BouncyCastle.Utilities.Encoders;
using System.Text;

Console.WriteLine(&quot;Hello, World!&quot;);


try
{
    String content = &quot;1234泰酷拉&quot;;
    String key = &quot;9814548961710661&quot;;
    byte[] byteKey = Encoding.UTF8.GetBytes(key);
    string algo = &quot;SM4/ECB/PKCS7Padding&quot;;
    byte[] sourceData = Encoding.UTF8.GetBytes(content);
    byte[] encryptedData = GmUtil.Sm4EncryptECB(byteKey, sourceData, algo);
    string encryptedStr=BitConverter.ToString(encryptedData).Replace(&quot;-&quot;,&quot;&quot;).ToLower();
    Console.WriteLine(&quot;encryptedStr:&quot; + encryptedStr);

    string javaEncryptedStr = &quot;02d225c9ff6bb99be6a67421aae4f3aa&quot;;
    Console.WriteLine(&quot;JAVA程序加密后的串:&quot; + javaEncryptedStr);
    byte[] byJavaEncrypted=Hex.Decode(javaEncryptedStr);
    byte[] decryptedData = GmUtil.Sm4DecryptECB(byteKey, byJavaEncrypted, algo);
    string sm4DecryptedStr = Encoding.UTF8.GetString(decryptedData);
    Console.WriteLine(&quot;解密结果:&quot; + sm4DecryptedStr);
}
catch (Exception ex)
{

    Console.WriteLine(&quot;ex:&quot;+ ex.Message);
}

Console.ReadKey();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JAVA代码：</p><p>maven需要增加依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.hutool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>hutool-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.8.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.bouncycastle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bcprov-jdk15on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.70<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sm4Util 工具类：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>symmetric<span class="token punctuation">.</span></span><span class="token class-name">SymmetricCrypto</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sm4Util</span> <span class="token punctuation">{</span>

    <span class="token comment">//加密为16进制，也可以加密成base64/字节数组</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">encryptSm4ECB</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">String</span> plaintext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> _Sm4EcbNoPaddingAlg <span class="token operator">=</span><span class="token string">&quot;SM4/ECB/PKCS5Padding&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">SymmetricCrypto</span> sm4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SymmetricCrypto</span><span class="token punctuation">(</span>_Sm4EcbNoPaddingAlg<span class="token punctuation">,</span> key<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sm4<span class="token punctuation">.</span><span class="token function">encryptHex</span><span class="token punctuation">(</span>plaintext<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//解密</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">decryptSm4ECB</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">String</span> ciphertext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> _Sm4EcbNoPaddingAlg <span class="token operator">=</span><span class="token string">&quot;SM4/ECB/PKCS5Padding&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">SymmetricCrypto</span> sm4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SymmetricCrypto</span><span class="token punctuation">(</span>_Sm4EcbNoPaddingAlg<span class="token punctuation">,</span> key<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sm4<span class="token punctuation">.</span><span class="token function">decryptStr</span><span class="token punctuation">(</span>ciphertext<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JAVA调用DEMO：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">&quot;Hello World!&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>

            <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;9814548961710661&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token string">&quot;1234泰酷拉&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">&quot;待加密字符串：&quot;</span> <span class="token operator">+</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> plain <span class="token operator">=</span> <span class="token class-name">Sm4Util</span><span class="token punctuation">.</span><span class="token function">encryptSm4ECB</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">&quot;加密后：&quot;</span> <span class="token operator">+</span> plain<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> cipher <span class="token operator">=</span> <span class="token class-name">Sm4Util</span><span class="token punctuation">.</span><span class="token function">decryptSm4ECB</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>plain<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">&quot;解密后：&quot;</span> <span class="token operator">+</span> cipher<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span>    msg <span class="token operator">=</span> ex<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">&quot;解密后：&quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><p>本文内容来自博客园：https://www.cnblogs.com/runliuv/category/2089854.html 感谢老哥runliuv的分享，我只是拿来学习使用</p>`,114),t=[l];function r(d,c){return e(),i("div",null,t)}const m=n(a,[["render",r],["__file","chinaEncrypt.html.vue"]]),o=JSON.parse('{"path":"/dotnet/commonMethod/encrypt/chinaEncrypt.html","title":"国密算法","lang":"zh-CN","frontmatter":{"title":"国密算法","lang":"zh-CN","date":"2023-08-11T00:00:00.000Z","publish":true,"author":"runliuv","isOriginal":true,"category":["dotNet"],"tag":["国密","加密"],"filename":"chinaEncrypt","docsId":"b9a656c6-f94f-46e5-b98f-dcc167ca35bf","description":"概述 国密算法包括SM1、SM2、SM3、SM4、SM7、SM9、祖冲之密码算法（ZUC) 等。 SM2 方案一 根据字符串配置去嘉兴加解密，引用nuget包：BouncyCastle.Cryptography 使用示例 资料：https://www.cnblogs.com/jackylovewendy/p/17449059.html 方案三 通过源文...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/commonMethod/encrypt/chinaEncrypt.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"国密算法"}],["meta",{"property":"og:description","content":"概述 国密算法包括SM1、SM2、SM3、SM4、SM7、SM9、祖冲之密码算法（ZUC) 等。 SM2 方案一 根据字符串配置去嘉兴加解密，引用nuget包：BouncyCastle.Cryptography 使用示例 资料：https://www.cnblogs.com/jackylovewendy/p/17449059.html 方案三 通过源文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-27T14:59:22.000Z"}],["meta",{"property":"article:author","content":"runliuv"}],["meta",{"property":"article:tag","content":"国密"}],["meta",{"property":"article:tag","content":"加密"}],["meta",{"property":"article:published_time","content":"2023-08-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-27T14:59:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"国密算法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-27T14:59:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"runliuv\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"SM2","slug":"sm2","link":"#sm2","children":[{"level":3,"title":"方案一","slug":"方案一","link":"#方案一","children":[]},{"level":3,"title":"方案三","slug":"方案三","link":"#方案三","children":[{"level":4,"title":"加密解密","slug":"加密解密","link":"#加密解密","children":[]},{"level":4,"title":"签名验签","slug":"签名验签","link":"#签名验签","children":[]}]}]},{"level":2,"title":"SM3","slug":"sm3","link":"#sm3","children":[{"level":3,"title":"快速上手","slug":"快速上手","link":"#快速上手","children":[]},{"level":3,"title":"其他方案","slug":"其他方案","link":"#其他方案","children":[]}]},{"level":2,"title":"SM4","slug":"sm4","link":"#sm4","children":[{"level":3,"title":"方案一","slug":"方案一-1","link":"#方案一-1","children":[]},{"level":3,"title":"其他方案","slug":"其他方案-1","link":"#其他方案-1","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1691755245000,"updatedTime":1703689162000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":3}]},"readingTime":{"minutes":40.34,"words":12102},"filePathRelative":"dotnet/commonMethod/encrypt/chinaEncrypt.md","localizedDate":"2023年8月11日","excerpt":"<h2>概述</h2>\\n<p>国密算法包括SM1、SM2、SM3、SM4、SM7、SM9、祖冲之密码算法（ZUC) 等。</p>\\n<h2>SM2</h2>\\n<h3>方案一</h3>\\n<p>根据字符串配置去嘉兴加解密，引用nuget包：BouncyCastle.Cryptography</p>\\n<div class=\\"language-c#\\" data-ext=\\"c#\\" data-title=\\"c#\\"><pre class=\\"language-c#\\"><code>/// &lt;summary&gt;\\n/// 生成 SM2 密钥对，密钥对使用 Base64 进行编码\\n/// &lt;/summary&gt;\\n/// &lt;param name=\\"privateKey\\"&gt;&lt;/param&gt;\\n/// &lt;param name=\\"publicKey\\"&gt;&lt;/param&gt;\\npublic static void GenerateSM2KeyPair(out string privateKey, out string publicKey)\\n{\\n    // 获取 SM2 曲线参数\\n    X9ECParameters curve = ECNamedCurveTable.GetByName(\\"sm2p256v1\\");\\n    KeyGenerationParameters parameters = new ECKeyGenerationParameters(new ECDomainParameters(curve), new SecureRandom());\\n\\n    // 创建 SM2 密钥对生成器\\n    ECKeyPairGenerator generator = new ECKeyPairGenerator();\\n    generator.Init(parameters);\\n\\n    // 创建密钥对\\n    var keyPair = generator.GenerateKeyPair();\\n\\n    // 私钥\\n    ECPrivateKeyParameters privateKeyParameters = (ECPrivateKeyParameters)keyPair.Private;\\n    privateKey = Base64.ToBase64String(privateKeyParameters.D.ToByteArrayUnsigned());\\n\\n    // 公钥\\n    ECPublicKeyParameters publicKeyParameters = (ECPublicKeyParameters)keyPair.Public;\\n    publicKey = Base64.ToBase64String(publicKeyParameters.Q.GetEncoded());\\n}\\n\\n/// &lt;summary&gt;\\n/// SM2 公钥加密\\n/// &lt;/summary&gt;\\n/// &lt;param name=\\"message\\"&gt;&lt;/param&gt;\\n/// &lt;param name=\\"key\\"&gt;&lt;/param&gt;\\n/// &lt;returns&gt;&lt;/returns&gt;\\npublic static string Encrypt(string message, string key)\\n{\\n    // 获取 SM2 曲线参数\\n    X9ECParameters curve = ECNamedCurveTable.GetByName(\\"sm2p256v1\\");\\n\\n    ECPoint q = curve.Curve.DecodePoint(Base64.Decode(key));\\n    ECDomainParameters domain = new ECDomainParameters(curve);\\n    ECPublicKeyParameters pubk = new ECPublicKeyParameters(\\"EC\\", q, domain);\\n\\n    // 创建SM2加密器\\n    SM2Engine sm2Engine = new SM2Engine();\\n    sm2Engine.Init(true, new ParametersWithRandom(pubk, new SecureRandom()));\\n\\n    // 将原始数据转换为字节数组\\n    byte[] dataBytes = Encoding.UTF8.GetBytes(message);\\n\\n    // 执行加密操作\\n    byte[] encryptedData = sm2Engine.ProcessBlock(dataBytes, 0, dataBytes.Length);\\n\\n    // 将加密结果转换为 Base64 字符串\\n    return Base64.ToBase64String(encryptedData);\\n}\\n\\n/// &lt;summary&gt;\\n/// SM2 私钥解密\\n/// &lt;/summary&gt;\\n/// &lt;param name=\\"message\\"&gt;&lt;/param&gt;\\n/// &lt;param name=\\"key\\"&gt;&lt;/param&gt;\\n/// &lt;returns&gt;&lt;/returns&gt;\\npublic static string Decrypt(string message, string key)\\n{\\n    // 获取 SM2 曲线参数\\n    X9ECParameters curve = ECNamedCurveTable.GetByName(\\"sm2p256v1\\");\\n\\n    ECDomainParameters domain = new ECDomainParameters(curve);\\n    BigInteger d = new BigInteger(1, Base64.Decode(key));\\n    ECPrivateKeyParameters prik = new ECPrivateKeyParameters(d, domain);\\n\\n    // 创建SM2加密器\\n    SM2Engine sm2Engine = new SM2Engine();\\n    sm2Engine.Init(false, prik);\\n\\n    byte[] encryptedData = Base64.Decode(message);\\n\\n    // 执行解密操作\\n    byte[] decryptedData = sm2Engine.ProcessBlock(encryptedData, 0, encryptedData.Length);\\n\\n    // 将解密结果转换为字符串\\n    return Encoding.UTF8.GetString(decryptedData);\\n}\\n</code></pre></div>","autoDesc":true}');export{m as comp,o as data};
