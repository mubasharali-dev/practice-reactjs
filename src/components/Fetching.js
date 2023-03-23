import React, { useState, useEffect } from "react";
import axios from "axios";
function Fetching() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [getIdFromButtonClick, setGetIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${getIdFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getIdFromButtonClick]);

  const handleClick = () => {
    setGetIdFromButtonClick(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="fetch" onClick={handleClick}>
        Fetch post
      </button>
      <div>{posts.title}</div>
      {/* {posts.map((post) => (
        <li key={post.id}> {post.title} </li>
      ))} */}
    </div>
  );
}

export default Fetching;
