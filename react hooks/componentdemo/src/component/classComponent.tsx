import React, {Component} from "react";

interface Iprops {
  message1?: any;
}

interface IState {
  message2: any
}

class Message extends Component<Iprops, IState> {
  constructor(props: Iprops, context: any) {
    super(props, context)
    this.state = {
      message2: 'test'
    }
  }
  render() {
    return (
      <div>
        <div>{this.state.message2}</div>
        <div>{this.props.message1}</div>
      </div>
    )
  }
}

export default Message