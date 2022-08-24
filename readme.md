---
home: true
modules:
  # - BannerBrand
  - Banner
  - Blog
  - Footer
banner: # banner=>巨幅展示图，可以展示 logo、标题、简述、背景图，上下布局
  heroText: 知识库 # 标题
  tagline: 人总是在正确的事情和容易做的事情之间做选择 # 简述
  heroImage: /logo.png 
  heroImageStyle: # 首页logo押金是
    maxWidth: 200px
    margin: 0 auto 2rem
  bgImage: /bg.svg # 背景图片
  bgImageStyle:
    height: 450px
# bannerBrand: # bannerBrand 模块的配置
#   heroImage: /logo.png
#   heroImageStyle:
#     maxWidth: '200px'
#     width: '100%'
#     display: block
#     margin: '0 auto 2rem'
#     borderRadius: '1rem'
#   bgImage: '/bg.svg'
#   heroText: 知识库
#   tagline: 人总是在正确的事情和容易做的事情之间做选择
#   # buttons:
#   #   - { text: Gitee, link: 'https://gitee.com/AZRNG' }
blog: # blog模块配置
  socialLinks: # 社交配置
    - { icon: 'BrandGithub', link: 'https://gitee.com/AZRNG' }
footer: # 底部模块的配置
  # record: 域名备案文案
  # recordLink: 域名备案地址
  # cyberSecurityRecord: 公安备案文案
  # cyberSecurityLink: 公安备案地址
  startYear: 2022

isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
---