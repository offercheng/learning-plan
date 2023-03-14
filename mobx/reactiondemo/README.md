### Reaction
- 用法 reaction (() => data, (Data, reaction) => {sideEffect }, options?)
- autorun 的变种，对于如何追踪 observable 赋予了更细粒度的控制，他接收两个函数参数，第一个（数据函数）是用来追踪并返回数据最为第二个函数（效果函数）的输入。不同于 autorun 的是当创建时效果函数不会直接运行，只有在数据表达式首次返回一个新的值后才会运行，在执行效果函数时访问的任何 observable 都不会被追踪
- reaction 返回一个清理函数
- 传入 reaction 的第二个函数（副作用函数）当调用时会接收两个参数，第一个参数是由 data 函数返回的值，第二个参数时当前的 reaction ，可以用来在执行期间清理 reaction
- 值得注意的是效果函数仅对数据函数中访问的数据作出反应，这可能会比实际在效果函数使用的数据要少。此外，效果函数只会在表达式返回的数据发生更改时触发。换句话说：reaction 需要你生产效果函数中所需要的东西
- 粗略地讲，reaction 是 computed(expression).observe(action(sideEffect)) 或 autorun(() => action(sideEffect)(expression))