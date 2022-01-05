module.exports = {
  title: 'Lim Zhang Blog',
  description: 'This is Lim Zhang\'s personal blog for sharing frontend development technology.',
  base: '/',
  repo: 'https://github.com/Limwalnut/lim-notesnp',
  heroText: 'Lim Blog',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Notes',
        link: '/notes/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      }
    ],
    sidebar: [{
        title: 'About Me', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/notes/']
      },
      {
        title: 'JavaScript',
        children: ['/notes/javascript/eventloop/', '/notes/javascript/scope/'],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
  }
}