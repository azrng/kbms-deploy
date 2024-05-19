import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,d as s}from"./app-Bfb6-vFH.js";const a="/kbms/common/image-20240313165227640.png",t={},d=s(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>一次性密码（One Time Password，简称OTP），又称动态密码或单次有效密码，是指计算器系统或其他数字设备上只能使用一次的密码，有效期为只有一次登录会话或交易。</p><p>最常见的场景应该就是 2FA（双因素身份验证），例如 Github 的 2FA，云账号的 MFA等，以及一些需要动态密码的场景，例如动态口令牌等</p><p>它有两种比较常见的实现有 HOTP（HMAC-Based One-Time Password） 和 TOTP（Time-Based One-Time Password）</p><h2 id="hotp和totp" tabindex="-1"><a class="header-anchor" href="#hotp和totp"><span>HOTP和TOTP</span></a></h2><p>HOTP 是基于 HMAC 的一次性密码，其工作原理：<code>HOTP(S,C) = Truncate(HMAC-SHA-1(S,C))</code></p><p>关键步骤说明：</p><ul><li>Truncate：把HMAC-SHA-1哈希结果20个字节转换成6-8位的数字；</li><li>S: Secret，客户端和服务器事先协商好的共享密钥;</li><li>C: Counter，客户端和服务器保持同步的计数器；</li></ul><p>原理的公式上写的是 sha1，不过很多类库在实现上还支持了 sha128、sha512 这些。</p><p>TOTP 是基于时间的一次性密码，它的工作原理：<code>TOTP = HOTP(K, T)</code></p><p>严格上是 HOTP 的一个变种，出现演变，肯定是有一些不太好处理的东西，因为 HOTP 除了要共享一个密钥之外，还要同步一个计数器。</p><p>关于计数器这一块，如果客户端误操作或者其他原因连续多次生成，但是只给最后一次生成的给服务端校验，那么这个时候服务端肯定没办法校验成功，因为客户端计数器变化了，但是服务端并不知道客户端发生了变化。这就导致两边的不一致，需要及时同步才可以解决这个问题。</p><p>时间，大部分情况下，客户端和服务端是保持一致，所以在这种考量下，用时间来作为计数器就可以一定程度上避免计数器的同步了。</p><p>当然，基于时间来做计数器也不是万能的，因为会出现网络延迟，这就导致两边计算的时间不一致，这也会导致失败。</p><p>TOTP 的计数器在设计上是支持了这种情况的，下面具体来看看：</p><ul><li><code>T = (Current Unix time - T0) / X</code></li><li>Current Unix Time：当前的Unix时间;</li><li>T0：开始计步初始化时间，默认为0，即Unix Epoch;</li><li>X : 步长，默认情况下为30s，可以理解为每个生成的密码的默认有效时间为30秒</li></ul><p>从上面可以看出客户端和服务端之间的时间是有一个误差允许范围的。</p><h2 id="otp-net" tabindex="-1"><a class="header-anchor" href="#otp-net"><span>Otp.Net</span></a></h2><p>在 C# 里面，关于上述 OTP 的两种实现中，用得比较多的是 https://github.com/kspearrin/Otp.NET 。</p><p>下面也简单介绍一下它的使用：首先是 HOTP</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>var secretKey = Encoding.UTF8.GetBytes(&quot;123456&quot;);
var hotp = new Hotp(secretKey, OtpHashMode.Sha512);

var h1 = hotp.ComputeHOTP(123456);
var h2 = hotp.ComputeHOTP(654321);
Console.WriteLine($&quot;h1:{h1} h2:{h2}&quot;);
Console.WriteLine($&quot;v1:{hotp.VerifyHotp(h1, 123456)} {hotp.VerifyHotp(h1, 654321)}&quot;);
Console.WriteLine($&quot;v2: {hotp.VerifyHotp(h2, 654321)}&quot;);

// 运行结果
h1:767612 h2:211792
v1:True False
v2: True 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 OtpHashMode 是一个枚举，有 sha1 sha256 sha512 三个选择。</p><p>ComputeHOTP 就是根据计数器来生成密码，示例上面用了 1 和 2。</p><p>VerifyHotp 则是根据计数器来验证密码，示例有两个成功和一个失败，失败的是因为生成 h1 的计数器是 1，校验的时候是 2，计数器不一致导致的验证失败。</p><p>再有就是 TOTP，这里的用法就会比较多了。</p><p>先看看常规的用法：</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System.Text;
using OtpNet;

var secretKey = Encoding.UTF8.GetBytes(&quot;123456&quot;);
var (code, sec) = Gen();
Console.WriteLine($&quot;code:{code} remaining:{sec}&quot;);

var res = Check(code);
Console.WriteLine(res);

// 在指定时间后，code过期
Thread.Sleep(sec * 1000);

res = Check(code);
Console.WriteLine(res);

(string code, int sec) Gen()
{
    var totp = new Totp(secretKey: secretKey, mode: OtpHashMode.Sha512);
    var computeTotp = totp.ComputeTotp();
    var remainingSeconds = totp.RemainingSeconds();
    return (computeTotp, remainingSeconds);
}

bool Check(string code)
{
    var totp = new Totp(secretKey: secretKey, mode: OtpHashMode.Sha512);
    return totp.VerifyTotp(code, out _);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成了一次密码后，在有效期内进行验证都是可以通过的，超过有效期就会验证失败；这个逻辑似乎和“一次性”有一点冲突。因为上面的代码并没有进行一次性的限定。</p><p>那么来看看要怎么限制：</p><p>根据 https://github.com/kspearrin/Otp.NET?tab=readme-ov-file#one-time-use ，我们可以使用 VerifyTotp 的 out 参数来做唯一性判断，大致代码如下</p><div class="language-c# line-numbers-mode" data-ext="c#" data-title="c#"><pre class="language-c#"><code>using System.Text;
using OtpNet;

HashSet&lt;long&gt; stepMatchSet = [];

var secretKey = Encoding.UTF8.GetBytes(&quot;123456&quot;);
var (code, sec) = Gen();
Console.WriteLine($&quot;code:{code} remaining:{sec}&quot;);

// 第一次检查
var res = Check(code);
Console.WriteLine(res);

// 第二次检查
res = Check(code);
Console.WriteLine(res);

(string code, int sec) Gen()
{
    var totp = new Totp(secretKey: secretKey, mode: OtpHashMode.Sha512);
    var computeTotp = totp.ComputeTotp();
    var remainingSeconds = totp.RemainingSeconds();
    return (computeTotp, remainingSeconds);
}

bool Check(string code)
{
    var totp = new Totp(secretKey: secretKey, mode: OtpHashMode.Sha512);
    var flag = totp.VerifyTotp(code, out var timeStepMatched);

    if (!stepMatchSet.Add(timeStepMatched))
    {
        flag = false;
    }

    return flag;
}


// 输出结果
code:661597 remaining:3
True 
False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后来看看时间窗口的例子，这种情况一般是针对客户端和服务端之间网络延迟较高的时候用。但是 RFC 中并不建议我们设置的时间窗口太大，一般放宽一个即可。</p><p>下面的示例是放宽了2个，主要是演示在特定时间区间内能否正常生效。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>using System.Text;
using OtpNet;

var secretKey = Encoding.UTF8.GetBytes(<span class="token string">&quot;123456&quot;</span>);
var (codeNow<span class="token punctuation">,</span> secNow) = Gen(DateTime.UtcNow);
Console.WriteLine($<span class="token string">&quot;code:{codeNow} remaining:{secNow}&quot;</span>);
var resNow = Check(codeNow);
Console.WriteLine(resNow);

var (codeP1<span class="token punctuation">,</span> secP1) = Gen(DateTime.UtcNow.AddSeconds(<span class="token number">-15</span>));
Console.WriteLine($<span class="token string">&quot;code p1:{codeP1} remaining p1:{secP1}&quot;</span>);
var resP1 = Check(codeP1);
Console.WriteLine(resP1);


var (codeP2<span class="token punctuation">,</span> secP2) = Gen(DateTime.UtcNow.AddSeconds(<span class="token number">-45</span>));
Console.WriteLine($<span class="token string">&quot;code p2:{codeP2} remaining p2:{secP2}&quot;</span>);
var resP2 = Check(codeP2);
Console.WriteLine(resP2);


var (codeP3<span class="token punctuation">,</span> secP3) = Gen(DateTime.UtcNow.AddSeconds(<span class="token number">-90</span>));
Console.WriteLine($<span class="token string">&quot;code p3:{codeP3} remaining p3:{secP3}&quot;</span>);
var resP3 = Check(codeP3);
Console.WriteLine(resP3);


var (codeP4<span class="token punctuation">,</span> secP4) = Gen(DateTime.UtcNow.AddSeconds(<span class="token number">15</span>));
Console.WriteLine($<span class="token string">&quot;code p4:{codeP4} remaining p4:{secP4}&quot;</span>);
var resP4 = Check(codeP4);
Console.WriteLine(resP4);


var (codeP5<span class="token punctuation">,</span> secP5) = Gen(DateTime.UtcNow.AddSeconds(<span class="token number">45</span>));
Console.WriteLine($<span class="token string">&quot;code p5:{codeP2} remaining p5:{secP5}&quot;</span>);
var resP5 = Check(codeP5);
Console.WriteLine(resP5);


var (codeP6<span class="token punctuation">,</span> secP6) = Gen(DateTime.UtcNow.AddSeconds(<span class="token number">90</span>));
Console.WriteLine($<span class="token string">&quot;code p6:{codeP1} remaining p6:{secP6}&quot;</span>);
var resP6 = Check(codeP6);
Console.WriteLine(resP6);


(string code<span class="token punctuation">,</span> int sec) Gen(DateTime dt)
<span class="token punctuation">{</span>
    var totp = new Totp(secretKey<span class="token operator">:</span> secretKey<span class="token punctuation">,</span> mode<span class="token operator">:</span> OtpHashMode.Sha512);
    var computeTotp = totp.ComputeTotp(dt);
    var remainingSeconds = totp.RemainingSeconds();
    return (computeTotp<span class="token punctuation">,</span> remainingSeconds);
<span class="token punctuation">}</span>

bool Check(string code)
<span class="token punctuation">{</span>
    var totp = new Totp(secretKey<span class="token operator">:</span> secretKey<span class="token punctuation">,</span> mode<span class="token operator">:</span> OtpHashMode.Sha512);
    <span class="token comment">// 默认周期30s，验证窗口为前后两个时间窗口，所以是 -60s到60s</span>
    var flag = totp.VerifyTotp(code<span class="token punctuation">,</span> out _<span class="token punctuation">,</span> new VerificationWindow(previous<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> future<span class="token operator">:</span> <span class="token number">2</span>));

    return flag;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>画了个简单的时间轴演示上面的代码</p><figure><img src="`+a+'" alt="image-20240313165227640" tabindex="0" loading="lazy"><figcaption>image-20240313165227640</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li>https://datatracker.ietf.org/doc/html/rfc6238</li><li>https://datatracker.ietf.org/doc/html/rfc4226</li></ul>',38),l=[d];function r(o,c){return n(),i("div",null,l)}const u=e(t,[["render",r],["__file","oneTimePassword.html.vue"]]),m=JSON.parse('{"path":"/softwareDesign/systemDesign/oneTimePassword.html","title":"一次性密码","lang":"zh-CN","frontmatter":{"title":"一次性密码","lang":"zh-CN","date":"2024-01-06T00:00:00.000Z","publish":true,"author":"Catcher Wong","isOriginal":true,"category":["软件设计"],"tag":["一次性密码"],"description":"背景 一次性密码（One Time Password，简称OTP），又称动态密码或单次有效密码，是指计算器系统或其他数字设备上只能使用一次的密码，有效期为只有一次登录会话或交易。 最常见的场景应该就是 2FA（双因素身份验证），例如 Github 的 2FA，云账号的 MFA等，以及一些需要动态密码的场景，例如动态口令牌等 它有两种比较常见的实现有 H...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/softwareDesign/systemDesign/oneTimePassword.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"一次性密码"}],["meta",{"property":"og:description","content":"背景 一次性密码（One Time Password，简称OTP），又称动态密码或单次有效密码，是指计算器系统或其他数字设备上只能使用一次的密码，有效期为只有一次登录会话或交易。 最常见的场景应该就是 2FA（双因素身份验证），例如 Github 的 2FA，云账号的 MFA等，以及一些需要动态密码的场景，例如动态口令牌等 它有两种比较常见的实现有 H..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/common/image-20240313165227640.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-13T09:10:18.000Z"}],["meta",{"property":"article:author","content":"Catcher Wong"}],["meta",{"property":"article:tag","content":"一次性密码"}],["meta",{"property":"article:published_time","content":"2024-01-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-13T09:10:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一次性密码\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/common/image-20240313165227640.png\\"],\\"datePublished\\":\\"2024-01-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-13T09:10:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Catcher Wong\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"HOTP和TOTP","slug":"hotp和totp","link":"#hotp和totp","children":[]},{"level":2,"title":"Otp.Net","slug":"otp-net","link":"#otp-net","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1710321018000,"updatedTime":1710321018000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":5.18,"words":1553},"filePathRelative":"softwareDesign/systemDesign/oneTimePassword.md","localizedDate":"2024年1月6日","excerpt":"<h2>背景</h2>\\n<p>一次性密码（One Time Password，简称OTP），又称动态密码或单次有效密码，是指计算器系统或其他数字设备上只能使用一次的密码，有效期为只有一次登录会话或交易。</p>\\n<p>最常见的场景应该就是 2FA（双因素身份验证），例如 Github 的 2FA，云账号的 MFA等，以及一些需要动态密码的场景，例如动态口令牌等</p>\\n<p>它有两种比较常见的实现有 HOTP（HMAC-Based One-Time Password） 和 TOTP（Time-Based One-Time Password）</p>\\n<h2>HOTP和TOTP</h2>\\n<p>HOTP 是基于 HMAC 的一次性密码，其工作原理：<code>HOTP(S,C) = Truncate(HMAC-SHA-1(S,C))</code></p>","autoDesc":true}');export{u as comp,m as data};
