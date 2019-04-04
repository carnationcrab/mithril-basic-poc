import m from 'mithril'

const helloWorld = {
    view: function (vnode) {
        return m('div', 'hello world')
    }
}

m(helloWorld);