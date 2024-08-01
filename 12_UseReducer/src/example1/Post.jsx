import React, { useReducer, useState } from "react";
import { ACTION_TYPE } from "./ActionType";
import { postReducer, INITIAL_STATE } from "./PostReducer";

const Post = () => {
  // USING USESTATE

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [post, setPost] = useState({});

  // const handleFetch = () => {
  //   setLoading(true);
  //   setError(false);
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setPost(data);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       setError(true);
  //     });
  // };

  //USING USEREDUCER

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPE.FETCH_START });
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        let n = Math.floor(Math.random * 30 + 1)
        console.log(data.quotes[n].quote);
        return dispatch({
          type: ACTION_TYPE.FETCH_SUCCESS,
          payload: data.quotes[n], 
          // Note Api key is not Working -----------------------------------
        });
      })
      .catch((ree) => dispatch({ type: ACTION_TYPE.FETCH_ERROR }));
  };

  return (
    //USING USESTATE

    // <div>
    //   <button onClick={handleFetch}>
    //     {loading ? "Wait..." : "Fetch the post"}
    //   </button>
    //   <p>{post?.title}</p>
    //   <span>{error && "Something went wrong!"}</span>
    // </div>


    
    //USING USEREDUCER

    <div>
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.quote}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  )
};


export default Post;
