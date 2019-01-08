module.exports = {
    title: 'Wpeach 的博客',
    description: '种一棵树最好的时间是十年前，其次是现在',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '博文', link: '/blog/1' },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/Wpeach' },
        ],
        sidebar: {
            '/blog/': [
                "1"
            ],
            "/translation/":[
                    "",
                    "ios1",
                    ],
            },
        sidebarDepth: 2,
        // lastUpdated: 'Last Updated', 
    },
    permalink: "r/:month/:day/:slug"
}