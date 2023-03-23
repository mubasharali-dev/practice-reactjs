import React, { Component } from "react";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Natalia",
    };
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}

export default ParentComp;
////////////////////////////////////////////////

// import React, { Component } from "react";
// import ChildComp from "./ChildComp";

// export class ParentComp extends Component {
//   render() {
//     return (
//       <div>
//         <ChildComp name="John" />
//         <ChildComp name="56" />
//       </div>
//     );
//   }
// }

// export default ParentComp;

// import React from "react";
// import ChildComp from "./ChildComp";

// function ParentComp() {
//   return (
//     <div>
//       <ChildComp name="John" />
//       <ChildComp name="19" />
//     </div>
//   );
// }

// export default ParentComp;
