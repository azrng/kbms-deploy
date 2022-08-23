// 位于网页右上方
// 每个元素包含显示文本text和指向的连接link，如果想做成下拉列表，则使用items的数组替换link属性
module.exports = [
    { text: '主页', link: '/', icon: 'reco-home' },
    {
        text: '目录',
        items: [
            { text: 'Web', link: '/web/introduce' },
            { text: 'c#', link: '/csharp/predefined-type' },
        ],
        icon: 'reco-blog'
    }, 
    // {
    //     text: '框架',
    //     icon: 'reco-category',
    //     items: [
    //         { text: 'ABP', link: '/frame/vue' },
    //     ]
    // }
]