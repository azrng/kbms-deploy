import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,b as a}from"./app-Bw62I61B.js";const t={},l=a(`<h2 id="前台" tabindex="-1"><a class="header-anchor" href="#前台"><span>前台</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>  var xmlhttp<span class="token punctuation">;</span>
        <span class="token keyword">function</span> loadXMLDoc<span class="token punctuation">(</span>url<span class="token punctuation">)</span> {
            xmlhttp <span class="token operator">=</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span> {
                <span class="token comment">// code for all new browsers</span>
                xmlhttp <span class="token operator">=</span> new XMLHttpRequest<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            } <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>ActiveXObject<span class="token punctuation">)</span> {
                <span class="token comment">// code for IE5 and IE6</span>
                xmlhttp <span class="token operator">=</span> new ActiveXObject<span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            }
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xmlhttp <span class="token operator">!=</span> <span class="token boolean">null</span><span class="token punctuation">)</span> {
                xmlhttp<span class="token punctuation">.</span>onreadystatechange <span class="token operator">=</span> state_Change<span class="token punctuation">;</span>
                xmlhttp<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true的意思是 Async=true</span>
                xmlhttp<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            } <span class="token keyword">else</span> {
                alert<span class="token punctuation">(</span><span class="token string">&quot;您的浏览器不支持XMLHTTP&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            }
        }
        <span class="token keyword">function</span> state_Change<span class="token punctuation">(</span><span class="token punctuation">)</span> {
 
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xmlhttp<span class="token punctuation">.</span>readyState <span class="token operator">!=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xmlhttp<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token operator">=</span><span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">)</span> {
                <span class="token comment">//获取指定节点</span>
                var b <span class="token operator">=</span> xmlhttp<span class="token punctuation">.</span>responseXML<span class="token punctuation">;</span><span class="token comment">//获取xml文档所有信息</span>
                var c <span class="token operator">=</span> xmlhttp<span class="token punctuation">.</span>responseXML<span class="token punctuation">.</span>getElementsByTagName<span class="token punctuation">(</span><span class="token string">&quot;School&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取父节点</span>
                var d <span class="token operator">=</span> c<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent<span class="token punctuation">;</span><span class="token comment">//获取属性值</span>
                x <span class="token operator">=</span> xmlhttp<span class="token punctuation">.</span>responseXML<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>getElementsByTagName<span class="token punctuation">(</span><span class="token string">&quot;BOOK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                $<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span>each<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>si<span class="token punctuation">,</span> sv<span class="token punctuation">)</span> {
                    var a <span class="token operator">=</span> sv<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent<span class="token punctuation">;</span><span class="token comment">//获取id属性值</span>
                }<span class="token punctuation">)</span><span class="token punctuation">;</span>
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后台" tabindex="-1"><a class="header-anchor" href="#后台"><span>后台</span></a></h2><h3 id="直接写入xml字符串" tabindex="-1"><a class="header-anchor" href="#直接写入xml字符串"><span>直接写入xml字符串</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code> string filepath = System.Web.HttpContext.Current.Server.MapPath(&quot;xmlString.xml&quot;);//文件的路径
	            string aa = &quot;<span class="token prolog">&lt;?xml version=\\&quot;1.0\\&quot; encoding=\\&quot;utf-8\\&quot;?&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BOOK</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>323<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BOOK</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">&gt;</span></span> &quot;;
	            XmlDocument xdoc = new XmlDocument();
	            xdoc.LoadXml(aa);
	            xdoc.Save(filepath);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建普通的xml文件" tabindex="-1"><a class="header-anchor" href="#创建普通的xml文件"><span>创建普通的xml文件</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>//通过代码来创建xml文档
	            //1.引用命名空间
	            //2.创建xml文档对象
	            XmlDocument doc = new XmlDocument();
	            //3.创建第一行描述信息，并且添加到doc文档中
	            XmlDeclaration dec = doc.CreateXmlDeclaration(&quot;1.0&quot;, &quot;utf-8&quot;, null);//最后一个参数如果为null，说明不在声明独立的属性
	            doc.AppendChild(dec);
	            //4.创建根节点
	            XmlElement books = doc.CreateElement(&quot;BOOKS&quot;);
	            //将根节点添加到文档中
	            doc.AppendChild(books);
	
	            //5.给根节点books创建子节点
	            XmlElement book1 = doc.CreateElement(&quot;BOOK&quot;);
	            //将book添加到根节点上
	            books.AppendChild(book1);
	
	            //6.给book1添加子节点
	            XmlElement name1 = doc.CreateElement(&quot;NAME&quot;);
	            name1.InnerText = &quot;黎明&quot;;
	            book1.AppendChild(name1);
	
	            XmlElement price1 = doc.CreateElement(&quot;Price&quot;);
	            price1.InnerText = &quot;70&quot;;
	            book1.AppendChild(price1);
	
	            XmlElement des1 = doc.CreateElement(&quot;Des&quot;);
	            des1.InnerText = &quot;好看&quot;;
	            book1.AppendChild(des1);
	
	            //创建第二本书
	            XmlElement book2 = doc.CreateElement(&quot;BOOK&quot;);
	            books.AppendChild(book2);
	
	            XmlElement name2 = doc.CreateElement(&quot;NAME&quot;);
	            name2.InnerText = &quot;黎明之后&quot;;
	            book2.AppendChild(name2);
	
	            XmlElement price2 = doc.CreateElement(&quot;Price&quot;);
	            price2.InnerText = &quot;90&quot;;
	            book2.AppendChild(price2);
	
	            XmlElement des2 = doc.CreateElement(&quot;Des&quot;);
	            des2.InnerText = &quot;好看呀&quot;;
	            book2.AppendChild(des2);
	            string path = System.Web.HttpContext.Current.Server.MapPath(&quot;books.xml&quot;);
	            doc.Save(path);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建带属性的xml文件" tabindex="-1"><a class="header-anchor" href="#创建带属性的xml文件"><span>创建带属性的xml文件</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>   XmlDocument doc = new XmlDocument();
	            XmlDeclaration dec = doc.CreateXmlDeclaration(&quot;1.0&quot;, &quot;utf-8&quot;, &quot;yes&quot;);
	            doc.AppendChild(dec);
	
	            XmlElement order = doc.CreateElement(&quot;Order&quot;);
	            doc.AppendChild(order);
	
	            XmlElement customerName = doc.CreateElement(&quot;CustomerName&quot;);
	            customerName.InnerText = &quot;张三&quot;;
	            order.AppendChild(customerName);
	
	            //XmlElement shuxing = doc.CreateElement(&quot;shuxing&quot;);
	            ////添加属性
	            //shuxing.SetAttribute(&quot;ID&quot;,&quot;1&quot;);
	            //customerName.AppendChild(shuxing);
	
	
	            XmlElement customerNumber = doc.CreateElement(&quot;CustomerNumber&quot;);
	            customerNumber.InnerText = &quot;1010101&quot;;
	            order.AppendChild(customerNumber);
	
	
	            XmlElement items = doc.CreateElement(&quot;Items&quot;);
	            order.AppendChild(items);
	
	            XmlElement orderItem1 = doc.CreateElement(&quot;OrderItem&quot;);
	            //给节点添加属性
	            orderItem1.SetAttribute(&quot;Name&quot;, &quot;单反&quot;);
	            orderItem1.SetAttribute(&quot;Count&quot;, &quot;1120&quot;);
	            items.AppendChild(orderItem1);
	
	            XmlElement orderItem2 = doc.CreateElement(&quot;OrderItem&quot;);
	            //给节点添加属性
	            orderItem2.SetAttribute(&quot;Name&quot;, &quot;书&quot;);
	            orderItem2.SetAttribute(&quot;Count&quot;, &quot;30&quot;);
	            items.AppendChild(orderItem2);
	
	            XmlElement orderItem3 = doc.CreateElement(&quot;OrderItem&quot;);
	            //给节点添加属性
	            orderItem3.SetAttribute(&quot;Name&quot;, &quot;手机&quot;);
	            orderItem3.SetAttribute(&quot;Count&quot;, &quot;2000&quot;);
	            items.AppendChild(orderItem3);
	
	            string path = System.Web.HttpContext.Current.Server.MapPath(&quot;Order.xml&quot;);
	            doc.Save(path);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="追加xml文件" tabindex="-1"><a class="header-anchor" href="#追加xml文件"><span>追加XML文件</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>	 string path = System.Web.HttpContext.Current.Server.MapPath(&quot;books.xml&quot;);
	            //追加XML文档
	            XmlDocument doc = new XmlDocument();
	            XmlElement books;
	            if (File.Exists(path))
	            {
	                //如果文件存在 加载XML
	                doc.Load(path);
	                //获得文件的根节点
	                books = doc.DocumentElement;
	            }
	            else
	            {
	                //如果文件不存在
	                //创建第一行
	                XmlDeclaration dec = doc.CreateXmlDeclaration(&quot;1.0&quot;, &quot;utf-8&quot;, null);
	                doc.AppendChild(dec);
	                //创建跟节点
	                books = doc.CreateElement(&quot;Books&quot;);
	                doc.AppendChild(books);
	            }
	            //5、给根节点Books创建子节点
	            XmlElement book1 = doc.CreateElement(&quot;Book&quot;);
	            //将book添加到根节点
	            books.AppendChild(book1);
	
	            //6、给Book1添加子节点
	            XmlElement name1 = doc.CreateElement(&quot;Name&quot;);
	            name1.InnerText = &quot;c#开发大全&quot;;
	            book1.AppendChild(name1);
	
	            XmlElement price1 = doc.CreateElement(&quot;Price&quot;);
	            price1.InnerText = &quot;110&quot;;
	            book1.AppendChild(price1);
	
	            XmlElement des1 = doc.CreateElement(&quot;Des&quot;);
	            des1.InnerText = &quot;看不懂&quot;;
	            book1.AppendChild(des1);
	            doc.Save(path);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直接读取xml文件" tabindex="-1"><a class="header-anchor" href="#直接读取xml文件"><span>直接读取XML文件</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>//将xml加载进来
            string path = System.Web.HttpContext.Current.Server.MapPath(&quot;xmlString.xml&quot;);
            XDocument document = XDocument.Load(path);
           //获取到xml的根元素进行操作
            XElement root = document.Root;
            XElement ele = root.Element(&quot;BOOK&quot;);
           //获取name标签的值
            XElement shuxing = ele.Element(&quot;name&quot;);
           //获取name的值
            var name = shuxing.Value;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取普通的xml文件" tabindex="-1"><a class="header-anchor" href="#读取普通的xml文件"><span>读取普通的xml文件</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>string path = System.Web.HttpContext.Current.Server.MapPath(&quot;books.xml&quot;);
            XmlDocument doc = new XmlDocument();
           //加载要读取的XML
            doc.Load(path);
 
           //获得根节点
            XmlElement books = doc.DocumentElement;
 
           //获得子节点 返回节点的集合
            XmlNodeList xnl = books.ChildNodes;
 
            foreach (XmlNode item in xnl)
            {
               Console.WriteLine(item.InnerText);
            }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取带属性的xml文件" tabindex="-1"><a class="header-anchor" href="#读取带属性的xml文件"><span>读取带属性的xml文件</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>string path = System.Web.HttpContext.Current.Server.MapPath(&quot;Order.xml&quot;);
           //读取带属性的XML文档
            XmlDocument doc = new XmlDocument();
            doc.Load(path);
            XmlNodeList xnl = doc.SelectNodes(&quot;/Order/Items/OrderItem&quot;);
            foreach (XmlNode node in xnl)
            {
               Console.WriteLine(node.Attributes[&quot;Name&quot;].Value);
               Console.WriteLine(node.Attributes[&quot;Count&quot;].Value);
            }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改xml属性的值" tabindex="-1"><a class="header-anchor" href="#修改xml属性的值"><span>修改xml属性的值</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>string path = System.Web.HttpContext.Current.Server.MapPath(&quot;Order.xml&quot;);
           //改变属性的值
            XmlDocument doc = new XmlDocument();
            doc.Load(path);
           XmlNode xn = doc.SelectSingleNode(&quot;/Order/Items/OrderItem[@Name=&#39;单反&#39;]&quot;);
           //把name为单反的那个修改为了电脑
           xn.Attributes[&quot;Count&quot;].Value = &quot;2000&quot;;
           xn.Attributes[&quot;Name&quot;].Value = &quot;电脑&quot;;
            doc.Save(path);
           Console.WriteLine(&quot;保存成功&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除xml节点" tabindex="-1"><a class="header-anchor" href="#删除xml节点"><span>删除xml节点</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>string path = System.Web.HttpContext.Current.Server.MapPath(&quot;Order.xml&quot;);
            XmlDocument doc = new XmlDocument();
            doc.Load(path);
            XmlNode xn = doc.SelectSingleNode(&quot;/Order/Items&quot;);
            xn.RemoveAll();
            doc.Save(path);
           Console.WriteLine(&quot;删除成功&quot;);
            Console.ReadKey();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),i=[l];function o(c,p){return s(),e("div",null,i)}const r=n(t,[["render",o],["__file","caozuoxml.html.vue"]]),m=JSON.parse('{"path":"/otherLanguage/xml/caozuoxml/caozuoxml.html","title":"操作XML","lang":"zh-CN","frontmatter":{"title":"操作XML","lang":"zh-CN","date":"2023-09-17T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":true,"category":["otherLanguage"],"tag":["无"],"filename":"caozuoxml","slug":"ie2efw","docsId":"31834849","description":"前台 后台 直接写入xml字符串 创建普通的xml文件 创建带属性的xml文件 追加XML文件 直接读取XML文件 读取普通的xml文件 读取带属性的xml文件 修改xml属性的值 删除xml节点","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/otherLanguage/xml/caozuoxml/caozuoxml.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"操作XML"}],["meta",{"property":"og:description","content":"前台 后台 直接写入xml字符串 创建普通的xml文件 创建带属性的xml文件 追加XML文件 直接读取XML文件 读取普通的xml文件 读取带属性的xml文件 修改xml属性的值 删除xml节点"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-17T03:16:45.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"无"}],["meta",{"property":"article:published_time","content":"2023-09-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-17T03:16:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作XML\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-17T03:16:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"前台","slug":"前台","link":"#前台","children":[]},{"level":2,"title":"后台","slug":"后台","link":"#后台","children":[{"level":3,"title":"直接写入xml字符串","slug":"直接写入xml字符串","link":"#直接写入xml字符串","children":[]},{"level":3,"title":"创建普通的xml文件","slug":"创建普通的xml文件","link":"#创建普通的xml文件","children":[]},{"level":3,"title":"创建带属性的xml文件","slug":"创建带属性的xml文件","link":"#创建带属性的xml文件","children":[]},{"level":3,"title":"追加XML文件","slug":"追加xml文件","link":"#追加xml文件","children":[]},{"level":3,"title":"直接读取XML文件","slug":"直接读取xml文件","link":"#直接读取xml文件","children":[]},{"level":3,"title":"读取普通的xml文件","slug":"读取普通的xml文件","link":"#读取普通的xml文件","children":[]},{"level":3,"title":"读取带属性的xml文件","slug":"读取带属性的xml文件","link":"#读取带属性的xml文件","children":[]},{"level":3,"title":"修改xml属性的值","slug":"修改xml属性的值","link":"#修改xml属性的值","children":[]},{"level":3,"title":"删除xml节点","slug":"删除xml节点","link":"#删除xml节点","children":[]}]}],"git":{"createdTime":1694920605000,"updatedTime":1694920605000,"contributors":[{"name":"zhangyunpeng","email":"zhang.yunpeng@synyi.com","commits":1}]},"readingTime":{"minutes":3.24,"words":972},"filePathRelative":"otherLanguage/xml/caozuoxml/caozuoxml.md","localizedDate":"2023年9月17日","excerpt":"<h2>前台</h2>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code>  var xmlhttp<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">function</span> loadXMLDoc<span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">)</span> {\\n            xmlhttp <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>window<span class=\\"token punctuation\\">.</span>XMLHttpRequest<span class=\\"token punctuation\\">)</span> {\\n                <span class=\\"token comment\\">// code for all new browsers</span>\\n                xmlhttp <span class=\\"token operator\\">=</span> new XMLHttpRequest<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            } <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>window<span class=\\"token punctuation\\">.</span>ActiveXObject<span class=\\"token punctuation\\">)</span> {\\n                <span class=\\"token comment\\">// code for IE5 and IE6</span>\\n                xmlhttp <span class=\\"token operator\\">=</span> new ActiveXObject<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Microsoft.XMLHTTP\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            }\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>xmlhttp <span class=\\"token operator\\">!=</span> <span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">)</span> {\\n                xmlhttp<span class=\\"token punctuation\\">.</span>onreadystatechange <span class=\\"token operator\\">=</span> state_Change<span class=\\"token punctuation\\">;</span>\\n                xmlhttp<span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"GET\\"</span><span class=\\"token punctuation\\">,</span> url<span class=\\"token punctuation\\">,</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//true的意思是 Async=true</span>\\n                xmlhttp<span class=\\"token punctuation\\">.</span>send<span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            } <span class=\\"token keyword\\">else</span> {\\n                alert<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"您的浏览器不支持XMLHTTP\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            }\\n        }\\n        <span class=\\"token keyword\\">function</span> state_Change<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> {\\n \\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>xmlhttp<span class=\\"token punctuation\\">.</span>readyState <span class=\\"token operator\\">!=</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>xmlhttp<span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">status</span> <span class=\\"token operator\\">=</span><span class=\\"token operator\\">=</span> <span class=\\"token number\\">200</span><span class=\\"token punctuation\\">)</span> {\\n                <span class=\\"token comment\\">//获取指定节点</span>\\n                var b <span class=\\"token operator\\">=</span> xmlhttp<span class=\\"token punctuation\\">.</span>responseXML<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//获取xml文档所有信息</span>\\n                var c <span class=\\"token operator\\">=</span> xmlhttp<span class=\\"token punctuation\\">.</span>responseXML<span class=\\"token punctuation\\">.</span>getElementsByTagName<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"School\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//获取父节点</span>\\n                var d <span class=\\"token operator\\">=</span> c<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>attributes<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"id\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>textContent<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//获取属性值</span>\\n                x <span class=\\"token operator\\">=</span> xmlhttp<span class=\\"token punctuation\\">.</span>responseXML<span class=\\"token punctuation\\">.</span>documentElement<span class=\\"token punctuation\\">.</span>getElementsByTagName<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"BOOK\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                $<span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>each<span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span>si<span class=\\"token punctuation\\">,</span> sv<span class=\\"token punctuation\\">)</span> {\\n                    var a <span class=\\"token operator\\">=</span> sv<span class=\\"token punctuation\\">.</span>attributes<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"id\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span>textContent<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">//获取id属性值</span>\\n                }<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            }\\n        }\\n</code></pre></div>","autoDesc":true}');export{r as comp,m as data};
