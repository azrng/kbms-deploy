import{_ as i,W as g,X as a,a0 as e}from"./framework-63781bb7.js";const n={},t=e('<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><p>使用Hyper-v创建虚拟机安装uos系统，关于Hyper-V的基本用法可以看另一个文章</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101425096.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>选择语言然后同意协议点击下一步进入硬盘分区，这里需要满足一定的磁盘大小才能下一步</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101425850.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>选择盘符然后直接下一步，就开始漫长的安装步骤</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101426189.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>安装完成</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101426763.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>上面提示安装成功点击立即重启并立即拔出安装介质，可是我不是用U盘装的咋拔出介质，然后我就陷入了重启=&gt;安装=&gt;重启的死循环中，后来终于反应过来，打开Htper-V管理器，选择指定虚拟机然后点击右下角设置</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101426134.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>将这里修改为无</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101426004.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>然后点击立即重启</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101426775.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>点击回车进入系统，然后这次就可以选择时区并创建账户</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101426117.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>点击下一步</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101426258.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>等待几分钟后</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101426219.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>输入刚才设置的密码下一步，然后这里我们选择普通模式</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101426236.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这种终于可以进入系统了</p><h1 id="查看系统" tabindex="-1"><a class="header-anchor" href="#查看系统" aria-hidden="true">#</a> 查看系统</h1><p>下面会贴一些常见功能的界面，因为这个没连上网，所以也不能装个应用玩</p><h2 id="系统主界面" tabindex="-1"><a class="header-anchor" href="#系统主界面" aria-hidden="true">#</a> 系统主界面</h2><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101427603.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101427327.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="计算机" tabindex="-1"><a class="header-anchor" href="#计算机" aria-hidden="true">#</a> 计算机</h2><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101427761.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="视频播放" tabindex="-1"><a class="header-anchor" href="#视频播放" aria-hidden="true">#</a> 视频播放</h2><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101427588.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h2><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101427604.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="日历" tabindex="-1"><a class="header-anchor" href="#日历" aria-hidden="true">#</a> 日历</h2><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101427525.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="应用商店" tabindex="-1"><a class="header-anchor" href="#应用商店" aria-hidden="true">#</a> 应用商店</h2><p>未联网状态，听说日常的软件都已经有的</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101427064.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h2><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101427495.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>系统信息</p><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101427200.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="关机界面" tabindex="-1"><a class="header-anchor" href="#关机界面" aria-hidden="true">#</a> 关机界面</h2><figure><img src="https://cdn.jsdelivr.net/gh/azrng/file/blog/202212101427140.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="体验总结" tabindex="-1"><a class="header-anchor" href="#体验总结" aria-hidden="true">#</a> 体验总结</h1><p>这次我是在虚拟机里面跑的，多少有点卡顿，不过还是感觉不错的，因为日常的功能都有，这次也是满足了我的好奇心。</p>',48),r=[t];function d(l,f){return g(),a("div",null,r)}const c=i(n,[["render",d],["__file","uos.html.vue"]]);export{c as default};