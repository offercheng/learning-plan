## MobX 学习计划大纲

#### 简单了解 MobX 的由来

MobX 是一个身经百战的库，它通过运用透明的函数式响应编程（Transparent Functional Reactive Programming，TFRP）使状态管理变得简单和可扩展。  

##### 简单直接

编写无模板的极简代码来精准描述出你的意图。要更新一个记录字段？使用熟悉的 JavaScript 赋值就行。要在异步进程中更新数据？不需要特殊的工具，响应性系统会侦测到你所有的变更并把它们传送到其用武之地。

##### 轻松实现最优渲染

所有对数据的变更和使用都会在运行时被追踪到，并构成一个截取所有状态和输出之间关系的依赖树。这样保证了那些依赖于状态的计算只有在真正需要时才会运行，就像 React 组件一样。无需使用记忆化或选择器之类容易出错的次优技巧来对组件进行手动优化。

##### 架构自由

MobX 不会用它自己的规则来限制你，它可以让你在任意 UI 框架之外管理你的应用状态。这样会使你的代码低耦合、可移植和最重要的——容易测试。

#### 了解 MobX 版本

##### 旧版MobX 3/4/5

现在 MobX 以及全面进入到 6 版本，但是很多的老项目由于性价比的原因导致还在继续使用旧版本，新旧版本有很多的差别在使用中请看对应的版本文档

- MobX5 ：https://cn.mobx.js.org/
- MobX4(LTS) ：https://github.com/SangKa/MobX-Docs-CN/tree/4.0.0/docs
- MobX3 ：https://github.com/SangKa/MobX-Docs-CN/tree/3.0.0/docs

##### MobX6 

- 现在 MobX 的大版本是 6，小版本是 6.8.0
- MobX6 文档：https://www.mobxjs.com/

#### MobX 相关概念以及 API

##### 概念

- State（状态）
  - State（状态）是驱动你的应用程序的数据
  - 可以存储在任何的数据结构中：普通对象、数组、类、循环数据结构或引用 
- Actions（动作）
  - Actions（动作）是任意可以改变 State（状态） 的代码，比如用户事件处理、后端推送数据处理、调度器事件处理
- Derivations（派生）
  - 任何来源是State（状态） 并且不需要进一步交互的东西都是 Derivations（派生）
  - Derivations（派生）包括许多方式
    - 用户界面
    - 派生数据
    - 后端集成

##### 原则

Mobx 使用单向数据流，利用 *action* 改变 *state* ，进而更新所有受影响的 *view*

![Action, State, View](https://www.mobxjs.com/assets/images/action-state-view-c1db5d4253bd84302606d4dfed9c4eb2.png)

1. 所有的 *derivations* 将在 *state* 改变时**自动且原子化地更新**。因此不可能观察中间值。
2. 所有的 *derivations* 默认将会**同步**更新，这意味着 *action* 可以在 *state* 改变 之后安全的直接获得 computed 值。
3. *computed value* 的更新是**惰性**的，任何 computed value 在需要他们的副作用发生之前都是不激活的。
4. 所有的 *computed value* 都应是**纯函数**，他们不应该修改 *state*。

##### 使用较多的 API

- (@) computed
  - 计算值（computed values）是可以根据现有的状态或其它计算值衍生出的值，是被高度优化的，尽可能多使用
  - 计算属性是不可枚举的，他们也不能在继承链中被覆盖
  - computed(function) 创建的函数只有当它有自己的观察者时才会重新计算，否则它的值会被认为是不相关的 
  - 文档：https://cn.mobx.js.org/refguide/computed-decorator.html
- autorun
  - 当你像创建一个响应式函数，二该函数本身永远不会有观察者时，使用该方式。这通常是当你需要从反应式代码桥接到命令式代码的情况，例如打印日志、持久化或者更新UI的代码 
  - 使用 autorun 时，所提供的函数总是立即被触发一次，然后每次它的依赖关系改变时会再次被触发 
  - 文档：https://cn.mobx.js.org/refguide/autorun.html
- when
  - 一般使用与以响应式来进行处理或者取消
  - 文档：https://cn.mobx.js.org/refguide/when.html
- reaction
  - autorun 的变种，对于如何追踪 observable 赋予了更细粒度的控制
  - 返回一个清理函数
  - 文档：https://cn.mobx.js.org/refguide/reaction.html
- (@) observer
  - observer 函数/装饰器可以用来将 React 组件转变成响应式组件 
  - 文档：https://cn.mobx.js.org/refguide/observer-component.html

在版本6之前，Mobx鼓励使用ES.next中的decorators,将某个对象标记为`observable`, `computed` 和 `action`。然而，装饰器语法尚未定案以及未被纳入ES标准，标准化的过程还需要很长时间，且未来制定的标准可能与当前的装饰器实现方案有所不同。出于兼容性的考虑，我们在MobX 6中放弃了它们，并建议使用[`makeObservable` / `makeAutoObservable`](https://www.mobxjs.com/observable-state)代替。 

```typescript
// 下面是直接使用MobX内置的 decorate
import { observable, computed, action, decorate } from "mobx";

class Timer {
    start = Date.now();
    current = Date.now();

    get elapsedTime() {
    return this.current - this.start + "milliseconds";
  }

    tick() {
        this.current = Date.now()
    }
}
decorate(Timer, {
    start: observable,
    current: observable,
    elapsedTime: computed,
    tick: action
})
```

```typescript
// MobX6 使用装饰器的方式
import { makeObservable, observable, computed, action } from "mobx"

class Todo {
    id = Math.random()
    @observable title = ""
    @observable finished = false

    constructor() {
        makeObservable(this)
    }

    @action
    toggle() {
        this.finished = !finished
    }
}

class TodoList {
    @observable todos = []

    @computed
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }

    constructor() {
        makeObservable(this)
    }
}
```

**在 tsconfig.json 中启用编译器选项  "experimentalDecorators": true  和  "useDefineForClassFields": true 。** 

**以及安装装饰器所需要的依赖  npm i --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators ，并在  .babelrc 文件中启用（注意，插件的顺序很重要）**

```typescript
{
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": false }]
        // 与MobX 4/5不同的是, "loose" 必须为 false!    ^
    ]
}
```



#### MobX 与 React 关联

MobX 可以独立于 React 运行，但是他们通常都是结合在一起使用的，故出现了与之对应的 package ，mobx-react 和 mobx-react-lite，mobx-react 中包含了 mobx-react-lite 所以当你安装了 mobx-react 你在项目里面导入 mobx-react-lite 也会正常运行，下面的两种的侧重，mobx-react-lite 会更轻量级一点

- 如果只用 React.FC (HOOK) 时，用 `mobx-react-lite` 即可。
- 如果要用 React.Component (Class) 时，用 `mobx-react` 才行。

简单使用

```typescript
import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"

class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

const myTimer = new Timer()

const TimerView = observer(({ timer }) => <span>Seconds passed: {timer.secondsPassed}</span>)

ReactDOM.render(<TimerView timer={myTimer} />, document.body)

setInterval(() => {
    myTimer.increaseTimer()
}, 1000)
```



#### MobX 和 Redux 的区别和联系（todo)

#### MobX 的设计模式——观察者（todo）

#### 编写相关例子的代码

**github：https://github.com/offercheng/learning-plan**

里面包含相关 API 的实践以及简单和 react 结合的 demo

#### 总结

**经过这次的一个学习，简单的了解了一下 MobX，了解 MobX 简单的使用和基础原理，一些常用的 API 以及结合 React 的使用，在学习过程中也编写了相关简单的例子，但是现在对于 MobX 还是大的部分处于理论方面的了解，对于很多在项目中的使用以及里面对于数据流管理的流畅操作还需要以后接触到公司的项目，然后一步步慢慢的学习进步，了解更多实践方面的知识以及里面涉及的设计模式**

