import React, { useContext, useState } from "react";
import Card from "./Card";
import { PostList as PostListData } from "../Store/Post_List_Store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingBar from "./LoadingBar";


const PostList = () => {
  const { postList, AddRandomPost } = useContext(PostListData);
  const[Loading , setLoading]  = useState(false)

  const handleRandomPostClick = () => {
    setLoading(true)
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => { 
         AddRandomPost(data.posts) 
          setLoading(false)
        })
      
  };

  //Pro Code For Fetch Api handle And UseEffect

  // useEffect(() => {
  //   setFetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });

  //   return () => {
  //     console.log("Cleaning up UseEffect.");
  //     controller.abort();
  //   };
  // }, []);


  return (
    <>
      {Loading && <LoadingBar />}
      {!Loading && postList.length === 0 && (
        <WelcomeMessage handleRandomPostClick={handleRandomPostClick} />
      )}
      {!Loading && postList.map((post) => <Card key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
