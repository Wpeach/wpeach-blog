module.exports = {
    title: 'Wpeach 的博客',
    description: '种一棵树最好的时间是十年前，其次是现在',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '博文', link: '/blog/【译】十五分钟，学习 Webpack' },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/Wpeach' },
        ],
        sidebar: {
            '/blog/': [
                "【译】十五分钟，学习 Webpack",
                "TCP的三次握手 四次挥手",
                "js 中apply、call 和 bind",
                "清除浮动的几种方式",
                "HTML 水平居中和垂直居中",
                "JS 跨域问题",
                "浏览器兼容性问题",
                "常见的web安全及防护原理",
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