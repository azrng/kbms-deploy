import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as r,a as e,b as n,d as l,e as a}from"./app-3c3dee46.js";const o={},c=e("h1",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),v=e("p",null,"现如今大部分服务都会有用户输入，为了服务的正常运行，很多时候不得不针对输入进行敏感词的检测、替换。如果人工做这样的工作，不仅效率低，成本也高。所以，先让代码去处理输入，成为了经济方便的途径。",-1),u=e("h1",{id:"toolgood-words",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#toolgood-words","aria-hidden":"true"},"#"),n(" ToolGood.Words")],-1),m={href:"https://github.com/toolgood/ToolGood.Words",target:"_blank",rel:"noopener noreferrer"},b=e("figure",null,[e("img",{src:"https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620891320700-cdaee58d-cfff-4bb2-b590-2f1823c5e595.png",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),g=e("p",null,"通过简单的了解，我们可以知道它可以针对敏感词及其拼音、跳词等变形进行检测，在实际的应用场景中能满足大部分的需求。",-1),p={href:"https://www.cnblogs.com/chenug/p/9848852.html",target:"_blank",rel:"noopener noreferrer"},h=a(`<h1 id="validationattribute" tabindex="-1"><a class="header-anchor" href="#validationattribute" aria-hidden="true">#</a> ValidationAttribute</h1><p>我们先定义两个简单的模型来绑定输入参数，一个是只要输入含有敏感词就会报错，一个是只要输入含有敏感词就会把相关的字符串替换为 * ，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class MinganCheckInput
    {
        [MinGanCheck]
        public string Text { get; set; }
    }
    
    public class MinganReplaceInput
    {
        [MinGanReplace]
        public string Text { get; set; }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=e("code",null,"[MinGanCheck]",-1),f=e("code",null,"[MinGanReplace]",-1),_={href:"https://docs.microsoft.com/zh-cn/dotnet/api/system.componentmodel.dataannotations.validationattribute?view=net-5.0",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"[Required]",-1),V=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/// &lt;summary&gt;
    /// 敏感词检查的特性，一匹配就抛异常
    /// &lt;/summary&gt;
    [AttributeUsage(AttributeTargets.Property)]
    public class MinGanCheck : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            throw  new NotImplementedException();
        }
    }
    /// &lt;summary&gt;
    /// 敏感词替换
    /// &lt;/summary&gt;
    [AttributeUsage(AttributeTargets.Property)]
    public class MinGanReplace : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            return ValidationResult.Success;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来就是实现 ValidationAttribute 的功能，如果看过我写过的 aop 文章，这时候就不会直接在校验的方法中直接引入 <code>ToolGood.Words</code> ，这样会带来很大的耦合，也不便于我们替换为其他的敏感词组件或服务。所以我们只要再多一层抽象就可以了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 检查
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            return validationContext.GetService&lt;IMinGanCheckValidator&gt;().IsValid(value, validationContext);
        }
        // 替换
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            validationContext.GetService&lt;IMinGanReplaceValidator&gt;().IsValid(value, validationContext);
            return ValidationResult.Success;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着我们分别实现 <code>IMinGanCheckValidator</code> 和 <code>IMinGanReplaceValidator</code> 的功能，也即检查和替换功能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 检查
   public class MinGanCheckValidator : IMinGanCheckValidator
    {
        public ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value is string v)
            {
                if (!String.IsNullOrEmpty(v))
                {
                   // 文字检查
                    if (MinGanProvider.Instance.IllegalWordsSearch.ContainsAny(v))
                    {
                        return new ValidationResult(&quot;存在敏感词&quot;, new[] { validationContext.MemberName });
                    }
                    // 检查拼音
                    if (MinGanProvider.Instance.IllegalWordsSearch.ContainsAny(WordsHelper.GetPinyin(v)))
                    {
                        return new ValidationResult(&quot;存在敏感词&quot;,new []{ validationContext.MemberName });
                    }
                    // todo:其他变种
                }
            }
            return ValidationResult.Success;
        }
    }
//替换
 public class MinGanReplaceValidator : IMinGanReplaceValidator
    {
        public void Replace(object value, ValidationContext validationContext)
        {
            if (value is string v)
            {
                if (!String.IsNullOrEmpty(v))
                {
                    v = MinGanProvider.Instance.IllegalWordsSearch.Replace(v);
                    SetPropertyByName(validationContext.ObjectInstance,validationContext.MemberName, v);
                }
            }
        }
        
        static bool SetPropertyByName(Object obj, string name, Object value)
        {
            var type = obj.GetType();
            var prop = type.GetProperty(name, BindingFlags.Public | BindingFlags.Instance);
            if (null == prop || !prop.CanWrite) return false;
            prop.SetValue(obj, value, null);
            return true;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <code>MinGanProvider.Instance.IllegalWordsSearch</code> 是 <code>ToolGood.Words</code> 中的检测类单例，这里不详细展开。这样我们就有一个大概能用的敏感词检测组件了，然而在实际过程中，我们还需要对敏感词进行管理，特别是需要实时更新敏感词。</p><h1 id="敏感词热重载" tabindex="-1"><a class="header-anchor" href="#敏感词热重载" aria-hidden="true">#</a> 敏感词热重载</h1><p>以 json 配置文件存放敏感词为例，只需要配置热重载就行了。</p><p>首先是 <code>Program.cs</code> 文件中让 json 配置文件热重载。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((builderContext, config) =&gt;
                {
                    config.AddJsonFile(&quot;IllegalKeywords.json&quot;, optional: false, reloadOnChange: true);// 配置可热重载
                })
                .ConfigureWebHostDefaults(webBuilder =&gt; { webBuilder.UseStartup&lt;Startup&gt;(); });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后是在 <code>Startup.cs</code> 中文件处理重载事件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ChangeToken.OnChange(() =&gt; Configuration.GetReloadToken(), () =&gt;
            {
                // 敏感词重载
            var keys= Configuration.GetSection(&quot;IllegalKeywords&quot;).Get&lt;List&lt;string&gt;&gt;();
            if (keys!=null&amp;&amp;keys.Any())
            {
                var allKeys = new List&lt;string&gt;();
                foreach (var k in keys)
                {
                    allKeys.Add(k); // 增加词汇
                    allKeys.Add(WordsHelper.ToTraditionalChinese(k)); // 增加繁体
                    allKeys.Add(WordsHelper.GetPinyin(k)); // 增加拼音
                }
                IllegalWordsSearch.SetKeywords(allKeys);
            }
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h1><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620891320662-0266f70c-87a8-4c05-9138-e498f773017b.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://gitee.com/AZRNG/picture-storage/raw/master/kbms/1620891320658-04447a86-2dd4-477e-b67c-37e5368b37aa.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h1>`,16),y={href:"http://www.cnblogs.com/chenug",target:"_blank",rel:"noopener noreferrer"},G=e("strong",null,"张蘅水",-1),I={href:"https://www.cnblogs.com/chenug/p/ToolGood_Words_Sample.html",target:"_blank",rel:"noopener noreferrer"};function w(k,R){const i=s("ExternalLinkIcon");return t(),r("div",null,[c,v,u,e("p",null,[n("首先我们要使用的开源组件是 "),e("a",m,[n("ToolGood.Words"),l(i)])]),b,g,e("p",null,[n("具体的用法在这里不做过多的介绍，接下来我们需要做的事情是如何在现有代码中快速且方便的情况下接入敏感词组件。很显然，如果我们按照组件写的示例去操作，会发现需要在现有的代码中进行大量重构的操作，这显然会累垮 VS 。熟悉我的朋友首先就会想到使用 AOP 的方式去优化处理。（这里不过多介绍AOP，如果想了解更多，请移步 "),e("a",p,[n("C# 中使用面向切面编程（AOP）中实践代码整洁"),l(i)]),n(" )")]),h,e("p",null,[n("其中 "),x,n(" 和 "),f,n(" 是我们定义的特性标记，将其继承 "),e("a",_,[n("ValidationAttribute"),l(i)]),n("，就和我们常用的 "),C,n(" 一样方便，哪里敏感点哪里。")]),V,e("p",null,[n("作者："),e("a",y,[G,l(i)])]),e("p",null,[e("a",I,[n("https://www.cnblogs.com/chenug/p/ToolGood_Words_Sample.html"),l(i)])])])}const M=d(o,[["render",w],["__file","toolgood-words.html.vue"]]);export{M as default};
