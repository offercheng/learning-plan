import { makeAutoObservable } from 'mobx'

class CounterStore {
  count = 0
  constructor() {
    makeAutoObservable(this)
  }

  addCount = () => {
    this.count++
  }
}


const counter = new CounterStore()

export default counter