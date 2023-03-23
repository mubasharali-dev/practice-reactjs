import React, { useState, useEffect } from "react";
import axios from "axios";
function UseEffectHook() {
  const [quote, setQuote] = useState("");
  const [getIdFromLoading, setGetIdFromLoading] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${getIdFromLoading}`)
        .then((res) => {
          console.log(res);
        })
        .then((data) => setQuote(data))
        .catch((err) => {
          console.log(err);
        });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [getIdFromLoading]);

  return <div>{quote}</div>;
}

export default UseEffectHook;
