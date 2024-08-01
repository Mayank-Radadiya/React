import React, { useContext, useRef } from "react";
import { PostList } from "../Store/Post_List_Store";
// import { useNavigate } from "react-router-dom";

function CreatePost() {
  
 const { AddPost } = useContext(PostList);


 // This hook use when user submit the form that time useNavigate navigate user to Home page.
//  const Navigate = useNavigate() 
//  Navigate("/")
  
  const userIdValue = useRef();
  const UserTitleValue = useRef();
  const BodyValue = useRef();
  const TagsValue = useRef();

 const handleSubmit = (e) => {
   e.preventDefault();
   const userId = userIdValue.current.value;
   const Title = UserTitleValue.current.value;
   const Body = BodyValue.current.value;
   const tags = TagsValue.current.value.split(",");

   // How to sent data to server and it render in website
   // fetch("https://dummyjson.com/posts/add", {
   //   method: "POST",
   //   headers: { "Content-Type": "application/json" },
   //   body: JSON.stringify({
   //     title: Title,
   //     body: Body,
   //     userId: userId,
   //     tags: tags,
   //   }),
   // })
   //   .then((res) => res.json())
   //   .then((post) => AddPost(post));

   if (userId === "" || Title === "" || Body === "" || tags.length === 0) {
     alert("All fields are required");
     return;
   }
   userIdValue.current.value = "";
   UserTitleValue.current.value = "";
   BodyValue.current.value = "";
   TagsValue.current.value = "";

   alert("Post Uploaded");

   AddPost(userId, Title, Body, tags);
  
 }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
      }}
    >
      <form
        style={{ width: "400px ", marginTop: "40px", marginLeft: "30px" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div
          className="form-group"
          style={{
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          <label htmlFor="exampleInputEmail1">User ID</label>
          <input
            type="text"
            className="form-control"
            id="userID"
            aria-describedby="emailHelp"
            placeholder="User ID"
            ref={userIdValue}
            
          />
        </div>

        <div className="form-group ">
          <label htmlFor="exampleInputPassword1">Post Title</label>
          <input
            type="text"
            className="form-control "
            id="title"
            placeholder="Title"
            ref={UserTitleValue}
            style={{ marginBottom: "20px" }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Main Content
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Body...."
            ref={BodyValue}
            style={{ marginBottom: "30px" }}
          ></textarea>
        </div>

        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              #tags
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Ex. fun , travel ..."
              aria-describedby="passwordHelpInline"
              ref={TagsValue}
            />
          </div>
         
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "40px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
