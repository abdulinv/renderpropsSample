import { Component } from "react";
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          {name} {this.state.count}
        </h1>
        <button onClick={this.handleClick.bind(this)}>add</button>
      </>
    );
  }
}
