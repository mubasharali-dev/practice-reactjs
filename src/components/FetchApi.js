import React, { Component } from "react";

class FetchApi extends Component {
  handleTextChange = (e) => {
    const value = e.target.value;
    // do something with the value
  };
  submitHanlder = (e) => {
    alert(`${this.handleTextChange(e)}`);
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHanlder}>
          <label>
            <input type="text" onChange={this.handleTextChange} />
          </label>
          <label>
            <button type="submit"> Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

export default FetchApi;

// import React, { Component } from "react";

// export class FetchApi extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "Please subscribe ",
//     };
//   }
//   clickHandler = () => {
//     this.setState({
//       message: "Thanks for subscribing ",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <p> {this.state.message} </p>
//         <button onClick={this.clickHandler}> Subscribe</button>
//       </div>
//     );
//   }
// }

// export default FetchApi;

//////////////////////////////////////////////
// import React, { Component } from "react";

// export class FetchApi extends Component {
//   render() {
//     const { items } = this.props;
//     return (
//       <div>
//         <ul>
//           {items.map((item, index) => {
//             <li key={index}>{item}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default FetchApi;

///////////////////////////////////////////

// import React from "react";

// function FetchApi() {
//   function handleNameChange(e) {
//     e.target.value();
//   }
//   function handleDescChange(e) {
//     e.target.value();
//   }
//   function handleSubmit(e) {
//     alert(`${handleNameChange} ${handleDescChange}`);
//     e.preventDefault();
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <p>Username:</p>
//         <input type="text" onChange={handleNameChange} />
//         <p>Description</p>
//         <textarea type="text" onChange={handleDescChange} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default FetchApi;

///////////////////////////////////////////////

// import React from "react";
// import Child from "./Child";
// function FetchApi() {
//   const name = "John";
//   return (
//     <div>
//       <Child name={name} />
//     </div>
//   );
// }

// export default FetchApi;

////////////////////////////////////////////////////

// import React, { Component } from "react";

// export class FetchApi extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   clickHandler = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <p>Count - {this.state.count}</p>
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     );
//   }
// }

// export default FetchApi;

/////////////////////////////////////////////////////

// import React from "react";

// function FetchApi(props) {
//   return (
//     <div>
//       <p>{props.title}</p>
//       <p>{props.desc}</p>
//     </div>
//   );
// }

// export default FetchApi;
