import m from 'mithril';

//const hello = require('../components/text-box.js');

// const helloWorld = {
//     view: function (vnode) {
//         return m('div', 'hello world')
//     }
// }

// m(helloWorld);

var helloWorld = {
    view: function (vnode) {
        return m("div", vnode.attrs, ["Hello ", vnode.children])
    }
}

// consume it
// m(helloWorld, {
//     style: "color:red;"
// }, "world")

m.render(document.body, m(helloWorld, {
    style: "color:red;"
}, "world"));