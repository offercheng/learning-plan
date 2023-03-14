import { computed, makeAutoObservable, when } from "mobx"

class MyResource {
  constructor() {
    when(
      () => !this.isVisible,
      () => this.dispose()
    )
    makeAutoObservable(this, {dispose: false})
  }

  @computed get isVisible() {
    return false
  }

  dispose() {
    console.log('1234')
  }
}

const resource = new MyResource()

export default resource