import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,b as t}from"./app-DMmdIwn0.js";const a={},r=t(`<p>在需要出来验证码的页面，使用一个图片控件，如下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  &lt;asp:Image ID=&quot;Image1&quot; runat=&quot;server&quot; src=&quot;TransmitFileDemo.aspx&quot; Style=&quot;cursor: pointer&quot; onclick=&quot;this.src=this.src+&#39;?&#39;&quot; align=&quot;middle&quot; alt=&quot;看不清楚，点击换一张！&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此控件的src对应另一个生成验证码的页面   生成验证码的页面前台没内容，看后台： 加载方法</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>protected void Page_Load(object sender, EventArgs e)
        {
            string checkCode = CreateRandomCode(4);//到这一步已经生成了验证码 如  5df5  位数也在此设置
           Session[&quot;CheckCode&quot;] = checkCode; //用于检测输入验证码是否正确
           CreateImage(checkCode);//将验证码弄到图片上
        }
        /// &lt;summary&gt;
        /// 将验证码弄到图片上
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;checkCode&quot;&gt;&lt;/param&gt;
        private void CreateImage(string checkCode)
        {
            // 生成图象验证码函数
            int iwidth = (int)(checkCode.Length * 11.5);
            System.Drawing.Bitmap image = new System.Drawing.Bitmap(iwidth, 20);
            Graphics g = Graphics.FromImage(image);
            Font f = new System.Drawing.Font(&quot;Arial&quot;, 10, System.Drawing.FontStyle.Bold);
            Brush b = new System.Drawing.SolidBrush(Color.Azure);//字母白色
            //g.FillRectangle(new System.Drawing.SolidBrush(Color.Blue),0,0,image.Width, image.Height);
            g.Clear(Color.Brown);//背景灰色
            g.DrawString(checkCode, f, b, 3, 3);
 
            Pen blackPen = new Pen(Color.Black, 0);
            Random rand = new Random();
            System.IO.MemoryStream ms = new System.IO.MemoryStream();
            image.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
            Response.ClearContent();
            Response.ContentType = &quot;image/Jpeg&quot;;
            Response.BinaryWrite(ms.ToArray());
            g.Dispose();
            image.Dispose();
        }
        /// &lt;summary&gt;
        /// 生成验证码
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;codeCount&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private string CreateRandomCode(int codeCount)
        {
            // 函数功能:产生数字和字符混合的随机字符串
            string allChar = &quot;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;;
            char[] allCharArray = allChar.ToCharArray();
            string randomCode = &quot;&quot;;
            Random rand = new Random();
            for (int i = 0; i &lt; codeCount; i++)
            {
                int r = rand.Next(61);
                randomCode += allCharArray.GetValue(r);
            }
            return randomCode;
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),s=[r];function d(l,o){return n(),i("div",null,s)}const u=e(a,[["render",d],["__file","suijiyanzhengma.html.vue"]]),v=JSON.parse(`{"path":"/dotnet/webyingyong/webform/changedaimajiexi/suijiyanzhengma.html","title":"随机验证码","lang":"zh-CN","frontmatter":{"title":"随机验证码","lang":"zh-CN","date":"2021-02-17T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["dotNET"],"tag":["无"],"filename":"suijiyanzhengma","slug":"gvmyno","docsId":"31541767","description":"在需要出来验证码的页面，使用一个图片控件，如下 此控件的src对应另一个生成验证码的页面 生成验证码的页面前台没内容，看后台： 加载方法","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/dotnet/webyingyong/webform/changedaimajiexi/suijiyanzhengma.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"随机验证码"}],["meta",{"property":"og:description","content":"在需要出来验证码的页面，使用一个图片控件，如下 此控件的src对应另一个生成验证码的页面 生成验证码的页面前台没内容，看后台： 加载方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T15:51:40.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2021-02-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T15:51:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"随机验证码\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T15:51:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[],"git":{"createdTime":1697962303000,"updatedTime":1697989900000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":1.2,"words":359},"filePathRelative":"dotnet/webyingyong/webform/changedaimajiexi/suijiyanzhengma.md","localizedDate":"2021年2月17日","excerpt":"<p>在需要出来验证码的页面，使用一个图片控件，如下</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>  &lt;asp:Image ID=\\"Image1\\" runat=\\"server\\" src=\\"TransmitFileDemo.aspx\\" Style=\\"cursor: pointer\\" onclick=\\"this.src=this.src+'?'\\" align=\\"middle\\" alt=\\"看不清楚，点击换一张！\\" /&gt;\\n</code></pre></div>","autoDesc":true}`);export{u as comp,v as data};
