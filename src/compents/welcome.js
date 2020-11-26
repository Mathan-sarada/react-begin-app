import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.name
    };
  }
  setMessage() {
    // this.setState({
    //   message: "23/10/1995"
    // });
    // preState is get previous  value

    this.setState((preState) => ({
      message: (preState.message = "23/10/1995")
    }));
    console.log(this.state.message);
  }
  render() {
    return (
      <div>
        <h1>Mathan birth date {this.state.message}</h1>
        <button onClick={this.setMessage.bind(this)}> Action</button>
      </div>
    );
  }
}

export default Welcome;
