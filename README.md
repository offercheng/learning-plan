# learning-plan

## MobX 学习计划

### 学习路径

- mobx 官网文档 https://mobx.js.org/README.html
- mobx-react https://github.com/mobxjs/mobx-react


#### 遇到的问题
- 在 mobx4/5 可以直接导出 decorate，但是在 mobx6 由于兼容性的问题，将这个放弃了，如果要使用 decorate 就只能启用 decorate 然后配合 makeObservable 使用
  - 使用装饰器语法的局限（MobX 社区没有正式支持以下模式）
    - 重新定义继承树中的装饰类成员
    - 装饰静态成员
    - 将 MobX 提供的装饰器与其他装饰器组合
    - 热更新(HMR) / React-hot-loader 可能不能正常运行

## React Hooks 学习计划

