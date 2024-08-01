import React, { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { PostList } from "../Store/Post_List_Store";

function Card({ post }) {
  const { DeletePost } = useContext(PostList);

  return (
    <div style={{ margin: "20px 15px", backgroundColor: "#1B1C1B" }}>
      <div
        className="card"
        style={{
          width: "23rem",
          minHeight: "250px",
          paddingTop: "20px",
          backgroundColor: "#2B2E2E",
          color: "#fff",
        }}
      >
        <h4 style={{ fontSize: "25px" }}>
          <FaRegUser /> {post.userId}
          <span
            style={{ fontSize: "15px", padding: "5px" }}
            className="position-absolute top-0 start-100 translate-middle badge
            rounded-pill bg-danger"
            onClick={() => DeletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h4>
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontSize: "25px", backgroundColor: "#242424" }}
          >
            {post.title}
          </h5>
          <p
            className="card-text"
            style={{ fontSize: "15px", backgroundColor: "#593460" }}
          >
            {post.body}
          </p>

          <h6>
            {post.tags.map((tag) => (
              <span className="badge rounded-pill text-bg-secondary tags"
              // key={Math.random()*1000}
              >
               # {tag}
              </span>
            ))}
          </h6>
          <a href="#" className="btn btn-primary" style={{ float: "right" }}>
            <FcLike />
            {post.like}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
