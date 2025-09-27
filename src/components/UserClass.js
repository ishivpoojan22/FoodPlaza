import React from "react";
import About from "./About";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, age } = this.props;
    const { count } = this.state;
    const changeHandler = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    return (
      <div className="user-name">
        <h1>Count={count}</h1>
        <button onClick={changeHandler}>count increse</button>
        <div>Name: {name}</div>
        <div>Location: India</div>
        <div>Age: {age}</div>
      </div>
    );
  }
}
export default UserClass;
