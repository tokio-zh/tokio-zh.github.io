exports.tokio = (title) => {
    return [
        '',
        {
          title: '开始',
          collapsable: false,
          children: [
            'hello-world',
            'runtime-model',
            'futures',
            'tasks',
            'IO',
            'example-chat-server'
          ]
        },
        {
          title: '深入',
          collapsable: false,
          children: [
            'timers',
            'essential-combinators',
            'returning-futures',
            'working-with-framed-streams',
            'building-runtime'
          ]
        },
        {
          title: '内部原理',
          collapsable: false,
          children: [
            'internals/intro',
            'internals/net',
            'internals/runtime-model'
          ]
        },
        'api'
    ]
}