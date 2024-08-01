import React, { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  AddPost: () => {},
  AddRandomPost: () => {},
  DeletePost: () => {},
});

const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "RANDOM_DATA_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, defaultList);

  const AddPost = (userId, Title, Body, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Math.floor(Math.random() * Date.now()).toString(16),
        title: Title,
        body: Body,
        like: Math.floor(Math.random() * 100),
        userId: userId,
        tags: tags,
      },
    });
  };

  // if we sent data to server through  fetch  req. then receive a data and pass to the AddPost function and Function render this data on main page.

  // const AddPost = (post) => {
  //   dispatchPostList({
  //     type: "ADD_POST",
  //     payload: post,
  //   });
  // };

  const AddRandomPost = (posts) => {
    dispatchPostList({
      type: "RANDOM_DATA_POST",
      payload: {
        posts,
      },
    });
  };

  const DeletePost = (postId) => {
    // console.log(postId);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id: postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, AddPost, AddRandomPost, DeletePost }}>
      {children}
    </PostList.Provider>
  );
};

const defaultList = [
  // {
  //   id: "1",
  //   title: "Goa",
  //   body: "Plan to Visit to Goa next Month",
  //   like: "10",
  //   userId: "Joy_69",
  //   tags: ["#Goa", "#Travel", "#Holyday"],
  // },
  // {
  //   id: "2",
  //   title: "study",
  //   body: "Learn App development in 75 days.",
  //   like: "30",
  //   userId: "XYZ_12",
  //   tags: ["#Study", "#HardWork", "#Coding", "#75Hard"],
  // }
];

export default PostListProvider;
