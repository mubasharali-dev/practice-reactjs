import React, { Component } from "react";

export class Child extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.age}
      </div>
    );
  }
}

export default Child;

// import React from "react";

// function Child(props) {
//   return (
//     <div>
//       <p> Hell, {props.name}</p>
//     </div>
//   );
// }

// export default Child;
