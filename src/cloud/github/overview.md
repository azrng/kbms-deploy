# 高级搜索

```plain
通过in关键字搜索
语法：关键字 in:
示例：python in:name,description,readme

通过stars、fork数量搜索
语法：关键字 stars:>数量  forks:>数量
示例：python in:name stars:>9000 forks:>2400

按照范围查询
语法：关键字 stars:范围1..范围2
示例：python in:name stars:9000..9500

按创建、更新时间搜索
按照创建时间、更新时间搜索可以把版本老旧的资源筛选出去
语法
创建时间：关键字 created:>=YYYY-MM-DD
更新时间：关键字 pushed:>=YYYY-MM-DD
示例：
python in:name created:>2020-01-01 pushed:>2020-01-01
```

# 访问加速

## 安装FastGithub

地址：https://github.com/xljiulang/fastgithub

## 修改host文件访问github

host文件所在位置：C:\Windows\System32\drivers\etc\hosts

```plain
# GitHub Start
 192.30.253.112 github.com
 69.171.239.11 github.global.ssl.fastly.net
 192.30.253.118 gist.github.com
 151.101.112.133 assets-cdn.github.com
 151.101.184.133 raw.githubusercontent.com
 151.101.112.133 gist.githubusercontent.com
 151.101.184.133 cloud.githubusercontent.com
 151.101.112.133 camo.githubusercontent.com
 151.101.112.133 avatars0.githubusercontent.com
 151.101.112.133 avatars1.githubusercontent.com
 151.101.184.133 avatars2.githubusercontent.com
 151.101.12.133 avatars3.githubusercontent.com
 151.101.12.133 avatars4.githubusercontent.com
 151.101.184.133 avatars5.githubusercontent.com
 151.101.184.133 avatars6.githubusercontent.com
 151.101.184.133 avatars7.githubusercontent.com
 151.101.12.133 avatars8.githubusercontent.com
# GitHub End
```

## dev-sidecar

开发者边车，github打不开，github加速，git clone加速，git release下载加速，stackoverflow加速

https://github.com/docmirror/dev-sidecar

## 镜像访问

```plain
https://github.com.cnpmjs.org
https://hub.fastgit.org
```

上面的镜像就是一个克隆版的 GitHub，你可以访问上面的镜像网站，网站的内容跟 GitHub 是完整同步的镜像，然后在这个网站里面进行下载克隆等操作

## 文件加速

利用 Cloudflare Workers 对 github release 、archive 以及项目文件进行加速，部署无需服务器且自带CDN.

```plain
https://gh.api.99988866.xyz
https://g.ioiox.com
```

以上网站为演示站点，如无法打开可以查看开源项目：gh-proxy-GitHub(https://hunsh.net/archives/23/) 文件加速自行部署。

## 加速下载

只需要复制当前 GitHub 地址粘贴到输入框中就可以代理加速下载！

地址：http://toolwa.com/github/

# 骚操作

## 1. 一键生成 Github 简历

通过 http://resume.github.io/ 这个网站你可以一键生成一个在线的 Github 简历。

当时我参加的校招的时候，个人信息那里就放了一个在线的 Github 简历。我觉得这样会让面试官感觉你是一个内行，会提高一些印象分。

## 2. 个性化 Github 首页

Github 目前支持在个人主页自定义展示一些内容。你只需要创建一个和你的 Github 账户同名的仓库，然后自定义README.md的内容即可。展示在你主页的自定义内容就是README.md的内容。

## 3. 自定义项目徽章

你在 Github 上看到的项目徽章都是通过 https://shields.io/ 这个网站生成的。

## 4. Github 表情

如果你想要在 Github 使用表情的话，可以在这里找找 ：[www.webfx.com/tools/emoji-cheat-sheet/](https://www.cnblogs.com/javaguide/p/www.webfx.com/tools/emoji-cheat-sheet/)。

# 参考文档

博客：https://www.cnblogs.com/javaguide/p/13948501.html