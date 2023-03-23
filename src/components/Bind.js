import React, { Component } from "react";

export class Bind extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      message: "Click the button",
    };
  }
  clickHandler = () => {
    console.log("Click the button");
  };
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.clickHandler}>Click me </button>
      </div>
    );
  }
}

export default Bind;

// import React, { Component } from "react";

// export class Bind extends Component {
//   constructor(props) {
//     super(props);

//     this.clickHandler = this.clickHandler.bind(this);
//   }
//   clickHandler = () => {
//     console.log("Button Clicked");
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.clickHandler}>Click me </button>
//       </div>
//     );
//   }
// }

// export default Bind;
