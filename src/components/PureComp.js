import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "John",
      isLoggedIn: true,
    };
  }
  render() {
    return this.state.isLoggedIn === true ? (
      <div>Hello {this.state.username}</div>
    ) : (
      <div>Please login to continue</div>
    );
  }
}

export default PureComp;

// import React, { PureComponent } from "react";

// const numbers = [5, 4, 7, 8];
// const sortedNum = numbers.sort();
// export class PureComp extends PureComponent {
//   render() {
//     return (
//       <div>
//         {sortedNum.map((number, index) => (
//           <h1 key={index}>{number}</h1>
//         ))}
//       </div>
//     );
//   }
// }

// export default PureComp;
