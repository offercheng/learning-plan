### observer
- observer 函数/装饰器可以用来将 React 组件转变成响应式组件。他用 mobx.autorun 包装了组件的 render 函数以确保任何组件渲染使用的数据变化是都可以强制刷新组件，observer 是单独的 mobx-react 包提供的
- observer HOC 将自动订阅 React components 中任何 在渲染期间 被使用的 可被观察的对象 。 因此, 当任何可被观察的对象 变化 发生时候 组件会自动进行重新渲染（re-render）。 它还会确保组件在 没有变化 发生的时候不会进行重新渲染（re-render）。 但是, 更改组件的可观察对象的不可读属性, 也不会触发重新渲染（re-render）