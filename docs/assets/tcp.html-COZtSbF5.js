import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o,d as c}from"./app-41nmD-Ik.js";const a="/kbms/computerBasics/93873eb881a54cdd8e1569ff181986f9.png",i="/kbms/computerBasics/386873f0f2d94af7bc7e5a10e5285ecf.png",n={},r=c('<h2 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手"><span>三次握手</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>三次握手过程主要是为了双方都能明确对方的接收与发送能力正常，同时协商出本次连接的数据通信序号和确认序号</p></div><p><img src="'+a+'" alt="img"></p><p>三次握手(Three-way Handshake)，是指建立一个 TCP 连接时，需要客户端和服务器总共发送3个包。</p><ol><li><strong>第一次握手([SYN], Seq = x)</strong> 客户端发送一个SYN标记的包，Seq初始序列号x，发送完成后<code>客户端</code>进入<code>SYN_SEND</code>状态。</li><li><strong>第二次握手([SYN,ACK], Seq = y, ACK = x + 1)</strong> 服务器返回确认包(ACK)应答，同时还要发送一个SYN包回去。ACK = x + 1,表示确认收到(客户端发来的Seq值 + 1)，Seq = y, 表示让客户端确认是否能收到。发送完成后<code>服务端</code>进入<code>SYN_RCVD</code>状态。</li><li><strong>第三次握手([ACK], ACK = y + 1)</strong> 客户端再次发送确认包(ACK),ACK = y + 1, 表示确认收到服务器的包（服务端发来的Seq值 + 1）。<code>客户端</code>发送完毕后，进入<code>ESTABLISHED</code>状态，<code>服务端</code>接收到这个包，也进入<code>ESTABLISHED</code>状态, TCP握手结束。</li></ol><blockquote><p>以上大家可能觉得难以记忆和理解，可以用一种形象的方式来解释:</p><ol><li>女朋友向程序员提出约会(Seq = x)的建议，然后女朋友进入<code>SYN_SEND</code>状态。</li><li>程序员收到后同意了去约会(ACK = x + 1), 然后向女朋友建议去吃麻辣烫吧(Seq = y)，程序员进入<code>SYN_RCVD</code>状态。</li><li>女朋友收到建议后，勉为其难的答应了，然后告诉程序员说 那好吧(ACK = y + 1)。女朋友就进入了<code>ESTABLISHED</code>状态， 程序员也进入了 <code>ESTABLISHED</code>状态，整个约会讨论结束。</li></ol></blockquote><h3 id="为什么是三次握手-不是两次或者四次" tabindex="-1"><a class="header-anchor" href="#为什么是三次握手-不是两次或者四次"><span>为什么是三次握手?不是两次或者四次？</span></a></h3><ul><li>从假设的角度来分析吧，假如是两次握手，会发生什么情况呢? 服务端在发出应答消息后，它根本就不能确认客户端是否接受到消息了，那么这样意味着只有客户端可以向服务端发送数据。</li><li>假如是四次握手呢？明明已经保证了一个稳定的传输流了，为什么还要浪费性能再去发一次消息，浪费了性能。</li><li>所以三次是最合适的，这里本人只是从个人的角度简单分析，没有从序列等原理的角度去剖析。</li></ul><h2 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手"><span>四次挥手</span></a></h2><p><img src="'+i+'" alt="img"></p><p>TCP连接的断开需要发送四个包，所以称为四次挥手。</p><ol><li><strong>第一次挥手（[FIN], Seq = x）</strong> 客户端发送一个FIN标记的包，告诉服务器需要关闭连接，表示自己不用发送数据了，但是还可以接收数据。发送完成后，<code>客户端</code>进入<code>FIN_WAIT_1</code>状态。</li><li><strong>第二次挥手 ([ACK], ACK = x + 1)</strong> 服务端发送一个ACK的确认包，告诉客户端接收到关闭的请求，但是还没有准备好。发送完成后，<code>服务端</code>进入<code>CLOSE_WAIT</code>状态，<code>客户端</code>收到这个包后，进入<code>FIN_WAIT_2</code>，等待服务器关闭连接。</li><li><strong>第三次挥手 ([FIN], Seq = y)</strong> 服务端准备好关闭连接时，发送FIN标记的包，告诉客户端准备关闭了。发送完成后，<code>服务端</code>进入<code>LAST_ACK</code>状态，等待客户端确认。</li><li><strong>第四次挥手 ([ACK], ACK = y + 1)</strong> 客户端接收到服务端的关闭请求，再发送ACK标记的确认包，进入<code>TIME_WAIT</code>状态，等待服务端可能请求重传的ACK包。 服务端接收到ACK包后，关闭连接，进入<code>CLOSED</code>状态。 客户端在等待固定时间(两个最大段生命周期)后，没有接收到服务的ACK包，认为服务器已关闭连接，自己也关闭连接，进入<code>CLOSED</code>状态。</li></ol><blockquote><p>四次挥手连接看起来挺复杂，其实认真看看也挺简单的，同样的比喻:</p><ol><li>女朋友向程序员提出分手</li><li>程序员告诉女朋友说，我知道了，但是要考虑一下</li><li>程序员考虑清楚后，跟女朋友说那就分手吧</li><li>女朋友接收到程序员的消息后，然后还在等程序员发挽留的消息，然而等了两天后没等到，就认为程序员是真的不会再发消息来了，于是就拉黑删除程序员，关闭连接了。</li></ol></blockquote><h3 id="三次挥手不可以吗" tabindex="-1"><a class="header-anchor" href="#三次挥手不可以吗"><span>三次挥手不可以吗？</span></a></h3><p>继续从假设的角度分析，如果是三次挥手，在服务器接收到客户端发送关闭的请求后，把SYN和ACK包一起发过去。这样会造成服务端还有数据没有发送完，造成了数据的丢失。所以中间的这一段时间，等待服务器把剩余的数据发送完是很有必要的。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><p>面试必备HTTP之TCP三次握手及四次挥手：https://www.jianshu.com/p/12790cea57ac</p>',17),l=[r];function s(p,d){return o(),t("div",null,l)}const g=e(n,[["render",s],["__file","tcp.html.vue"]]),S=JSON.parse('{"path":"/computerBasics/network/tcp.html","title":"TCP","lang":"zh-CN","frontmatter":{"title":"TCP","lang":"zh-CN","date":"2023-09-03T00:00:00.000Z","publish":true,"author":"azrng","isOriginal":false,"category":["计算机基础"],"tag":["tcp","http"],"description":"三次握手 提示 三次握手过程主要是为了双方都能明确对方的接收与发送能力正常，同时协商出本次连接的数据通信序号和确认序号 img 三次握手(Three-way Handshake)，是指建立一个 TCP 连接时，需要客户端和服务器总共发送3个包。 第一次握手([SYN], Seq = x) 客户端发送一个SYN标记的包，Seq初始序列号x，发送完成后客户...","head":[["meta",{"property":"og:url","content":"https://azrng.gitee.io/kbms/kbms/computerBasics/network/tcp.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"TCP"}],["meta",{"property":"og:description","content":"三次握手 提示 三次握手过程主要是为了双方都能明确对方的接收与发送能力正常，同时协商出本次连接的数据通信序号和确认序号 img 三次握手(Three-way Handshake)，是指建立一个 TCP 连接时，需要客户端和服务器总共发送3个包。 第一次握手([SYN], Seq = x) 客户端发送一个SYN标记的包，Seq初始序列号x，发送完成后客户..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://azrng.gitee.io/kbms/kbms/computerBasics/93873eb881a54cdd8e1569ff181986f9.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-24T04:06:34.000Z"}],["meta",{"property":"article:author","content":"azrng"}],["meta",{"property":"article:tag","content":"tcp"}],["meta",{"property":"article:tag","content":"http"}],["meta",{"property":"article:published_time","content":"2023-09-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-24T04:06:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP\\",\\"image\\":[\\"https://azrng.gitee.io/kbms/kbms/computerBasics/93873eb881a54cdd8e1569ff181986f9.png\\",\\"https://azrng.gitee.io/kbms/kbms/computerBasics/386873f0f2d94af7bc7e5a10e5285ecf.png\\"],\\"datePublished\\":\\"2023-09-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-24T04:06:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"azrng\\"}]}"]]},"headers":[{"level":2,"title":"三次握手","slug":"三次握手","link":"#三次握手","children":[{"level":3,"title":"为什么是三次握手?不是两次或者四次？","slug":"为什么是三次握手-不是两次或者四次","link":"#为什么是三次握手-不是两次或者四次","children":[]}]},{"level":2,"title":"四次挥手","slug":"四次挥手","link":"#四次挥手","children":[{"level":3,"title":"三次挥手不可以吗？","slug":"三次挥手不可以吗","link":"#三次挥手不可以吗","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1693755609000,"updatedTime":1711253194000,"contributors":[{"name":"azrng","email":"itzhangyunpeng@163.com","commits":2}]},"readingTime":{"minutes":4.25,"words":1274},"filePathRelative":"computerBasics/network/tcp.md","localizedDate":"2023年9月3日","excerpt":"<h2>三次握手</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>三次握手过程主要是为了双方都能明确对方的接收与发送能力正常，同时协商出本次连接的数据通信序号和确认序号</p>\\n</div>\\n<p><img src=\\"/computerBasics/93873eb881a54cdd8e1569ff181986f9.png\\" alt=\\"img\\"></p>\\n<p>三次握手(Three-way Handshake)，是指建立一个 TCP 连接时，需要客户端和服务器总共发送3个包。</p>\\n","autoDesc":true}');export{g as comp,S as data};