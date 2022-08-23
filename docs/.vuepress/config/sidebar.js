// 侧边栏js 位于网页左侧

module.exports = {
    '/web/':[{
        title:'Web',
        collapsable:false,
        children:[
            {title:'介绍',path:'/web/introduce'},
            {title:'基础知识',path:'/web/basegrammar'},
            {title:'HTTP',children:[
                {title:'HTTP代理',path:'/web/http/agency'}
            ]}
        ]
    }],
    '/csharp/': [{
        title: 'C#',
        collapsable: false,
        children: [
            { title: '预定义类型', path: '/csharp/predefined-type' },
            { title: '类', path: '/csharp/class' },
            { title: '类型转换', path: '/csharp/type-convert' },
            { title: '特性[Attribute]', path: '/csharp/attribute' }
        ]
    }],
}