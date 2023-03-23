import React, { Component } from "react";

export class Refs extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.state = {
      message: "",
    };
  }
  componentDidMount() {
    this.ref.current.focus();
  }
  handleTextChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    alert(`${this.state.message}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" ref={this.ref} onChange={this.handleTextChange} />
          <button type="submit"> Submit </button>
        </div>
      </form>
    );
  }
}

export default Refs;
