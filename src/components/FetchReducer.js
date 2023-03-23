// import React, { useReducer } from "react";

// const initialState = {
//   id: 0,
//   text: "",
//   completed: true,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TOOD":
//       return {
//         id: 1,
//         text: e.target.value,
//         completed: false,
//       };
//     case "TOGGLE_TODO":
//       return {
//         id: 1,
//         text: "",
//         completed: true,
//       };
//     case "DELETE_TODO":
//       return {
//         id: 1,
//         text: "",
//         completed: false,
//       };
//   }
// };
// function FetchReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <input type="text" />
//       <button type="button">Add Todo</button>
//     </div>
//   );
// }

// export default FetchReducer;

// import React, { useEffect, useReducer } from "react";
// import axios from "axios";
// const initialState = {
//   loading: true,
//   error: "",
//   post: {},
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_SUCCESS":
//       return {
//         loading: false,
//         post: action.payload,
//         error: "",
//       };
//     case "FETCH_ERROR":
//       return {
//         loading: false,
//         post: {},
//         error: "Something went wrong!",
//       };
//     default:
//       return state;
//   }
// };
// function FetchReducer() {
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => {
//         dispatch({
//           type: "FETCH_SUCCESS",
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         dispatch({ type: "FETCH_ERROR" });
//       });
//   }, []);

//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       {state.loading ? "Loading" : state.post.title}
//       {state.error ? state.error : null}
//     </div>
//   );
// }

// export default FetchReducer;
