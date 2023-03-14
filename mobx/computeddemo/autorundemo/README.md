### Autorun
- 当你想创建一个响应式函数，而该函数本身永远不会有观察者时，可以使用 mobx.autorun 
- Autorun 接受第二个参数，他是一个参数对象，有如下可选的参数：
  - delay：可用于对效果函数进行去抖动的数字（一毫秒为单位），如果是0，那么不会进行去抖
  - name：字符串，用于在例如向 spy 这样事件中用作此 reaction 的名称
  - onError：用来处理reaction 的错误，而不是传播他们
  - scheduler：设置自定义调度器以决定如果调度 autorun 函数的重新运行