const timeFormat = require('./config/timeFormat')
const nav = require('./config/nav')
const sidebar = require('./config/sidebar')
module.exports = {
    title: '知识库',
    description: '每天进步一点点',
    plugins: timeFormat,
    head: [
        ['link', { rel: 'icon', href: '/image/cat.jpg' }]
    ],
    theme: 'reco',
    themeConfig: {
        authorAvatar: '/image/cat.jpg',
        type: 'blog',
        nav: nav,//导航栏
        sidebar: sidebar, //侧边栏
        subSidebar: 'auto',
        collapsable: false,
        logo: '/image/cat.jpg',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nextLink: true, //下一页
        preLink: true, //上一页
        modePicker: false,
        blogConfig: {
            tag: {
                location: 6, // 在导航栏菜单中所占的位置，默认3
                text: '标签', // 默认 “标签”
            },
            socialLinks: [
                { text:'码云', icon: 'reco-mayun', link: 'https://gitee.com/AZRNG' }
            ]
        }
    },
    base: '/kbms/'
}