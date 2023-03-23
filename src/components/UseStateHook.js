import React, { useState, useEffect } from "react";

function UseStateHook() {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const addedData = setData(e.target.value);
    <h1>{addedData}</h1>;
  };

  return (
    <div>
      <input type="text" value={data} onChange={(e) => e.target.value} />
      <button type="button" onClick={handleChange}>
        Add to the list{" "}
      </button>
    </div>
  );
}

export default UseStateHook;

// import React, { useState, useEffect } from "react";

// function UseStateHook() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div>
//       Now the time is {time.toLocaleTimeString()} and Date is{" "}
//       {time.toLocaleDateString()}
//     </div>
//   );
// }

// export default UseStateHook;

// import React, { useState } from "react";

// function UseStateHook() {
//   //   const initialText = "";
//   const [resetText, setResetText] = useState("John");
//   return (
//     <div>
//       <input type="text" value={resetText} onChange={() => setResetText("")} />
//       <button type="button" value={resetText} onClick={() => setResetText("")}>
//         {" "}
//         Reset Text
//       </button>
//     </div>
//   );
// }

// export default UseStateHook;

// import { useState } from "react";

// function UseStateHook() {
//   const [isChecked, setIsChecked] = useState(false);

//   //   function handleCheckboxChange() {
//   //     setIsChecked(!isChecked);
//   //   }

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           value={isChecked}
//           onChange={() => setIsChecked(!isChecked)}
//         />
//         {isChecked ? "Checked" : "Unchecked"}
//       </label>
//     </div>
//   );
// }

// export default UseStateHook;
// import React, { useState } from "react";

// function UseStateHook() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   return (
//     <div>
//       <h1> Name: {name} </h1>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <h1> Email: {email} </h1>
//       <input type="text" onChange={(e) => setEmail(e.target.value)} />
//     </div>
//   );
// }

// export default UseStateHook;

// import axios from "axios";
// import React, { useState } from "react";

// function UseStateHook() {
//   const [posts, setPosts] = useState([]);
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => setPosts(res.data))
//     .catch((err) => {
//       console.log(err);
//     });
//   return (
//     <div>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title} </li>
//       ))}
//     </div>
//   );
// }

// export default UseStateHook;
