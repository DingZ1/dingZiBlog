module.exports = {
    title: '揽星河',
    description: '定子的博客',
    dest: '.vuepress/dist',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico',
            },
        ],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no',
            },
        ],
    ],
    theme: 'reco',
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/',
                icon: 'reco-home',
            },
            {
                text: 'TimeLine',
                link: '/timeline/',
                icon: 'reco-date',
            },
            {
                text: 'Docs',
                icon: 'reco-message',
                items: [
                    {
                        text: 'vuepress-reco',
                        link: '/docs/theme-reco/',
                    },
                ],
            },
            {
                text: 'Contact',
                icon: 'reco-message',
                items: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/recoluan',
                        icon: 'reco-github',
                    },
                ],
            },
        ],
        sidebar: {
            '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
        },
        type: 'blog',
        blogConfig: {
            category: {
                location: 2,
                text: 'Category',
            },
            tag: {
                location: 3,
                text: 'Tag',
            },
        },
        friendLink: [
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: '1156743527@qq.com',
                link: 'https://www.recoluan.com',
            },
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
                link: 'https://vuepress-theme-reco.recoluan.com',
            },
        ],
        logo: '/logo.png',
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
        author: '杨要定',
        authorAvatar: '/avatar.png',
        record: 'xxxx',
        startYear: '2020',
    },
    markdown: {
        lineNumbers: true,
    },
    plugins: [
        [
            '@vuepress-reco/vuepress-plugin-kan-ban-niang',
            {
                theme: [
                    // 'miku',
                    // 'whiteCat',
                    // 'haru1',
                    // 'haru2',
                    // 'haruto',
                    // 'koharu',
                    // 'izumi',
                    // 'shizuku',
                    // 'wanko',
                    'blackCat',
                    // 'z16',
                ],
                clean: false,
                messages: {
                    welcome: '欢迎来到我的博客',
                    home: '心里的花，我想要带你回家。',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '你不喜欢我了吗？痴痴地望着你。',
                },
                messageStyle: { right: '68px', bottom: '290px' },
                width: 250,
                height: 320,
            },
        ],
        [
            '@vuepress-reco/vuepress-plugin-bgm-player',
            {
                audios: [
                    // 本地文件示例
                    {
                        name: '장가갈 수 있을까',
                        artist: '咖啡少年',
                        url: '/bgm/1.mp3',
                        cover: '/bgm/1.jpg',
                    },
                    // 网络文件示例
                    {
                        name: '강남역 4번 출구',
                        artist: 'Plastic / Fallin` Dild',
                        url: 'https://assets.smallsunnyfox.com/music/2.mp3',
                        cover: 'https://assets.smallsunnyfox.com/music/2.jpg',
                    },
                    {
                        name: '用胳膊当枕头',
                        artist: '최낙타',
                        url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                        cover: 'https://assets.smallsunnyfox.com/music/3.jpg',
                    },
                ],
            },
        ],
    ],
};
