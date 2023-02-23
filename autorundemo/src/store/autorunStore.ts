import { autorun, observable } from 'mobx'

autorun(() => {
  // 假设 profile.asJson 返回的是 observable Json 表示
  // 每次变化是将其发送给服务器，且发生前至少要等300毫秒
  // 当发送后profile.asJson 的最新值会被调用
  // sendProfileToServer(profile.asJson)
}, {delay: 300})

const age = observable.box(10)
const dispose = autorun(() => {
  if(age.get() < 0)
    throw new Error('Age should not be negative')
  console.log("Age", age.get())
}, {
  onError(e) {
    window.alert("Please enter a valid age")
  }
})

export default dispose