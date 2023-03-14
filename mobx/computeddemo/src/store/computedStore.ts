import { computed, observable, makeObservable } from 'mobx'

class OrderLine {
  @observable price = 0;
  @observable amount = 1;
  constructor(price: number) {
    this.price = price
    makeObservable(this)
  }

  @computed get total() {
    return this.price * this.amount
  }
}

const order = new OrderLine(10)

export default order