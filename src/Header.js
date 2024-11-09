import React from "react";
import ReactDOM from "react-dom";
export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritefood: "rice" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritefood: "pizza" });
    }, 3000);
  }
  static getDerivedStateFromProps(props, state) {
    return { favoritefood: props.favfod };
  }
  render() {
    return <h1>My Favorite Food is {this.state.favoritefood}</h1>;
  }
}
