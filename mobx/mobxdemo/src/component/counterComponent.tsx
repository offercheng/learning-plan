import React from "react"
import counterStore from '../store/counterStore'
import { observer } from "mobx-react-lite"

const CounterComponent: React.FC = () => {
  return (
    <div>
      <button onClick={() => counterStore.addCount()}>{counterStore.count}</button>
    </div>
  )
}

export default observer(CounterComponent)