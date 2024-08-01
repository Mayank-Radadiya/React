import React from 'react'

function WelcomeMessage({handleRandomPostClick}) {
  return (
    <center
      style={{
        height: "100%",
        margin: "250px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>There is no Posts</h1>
      <h2 style={{ fontSize: "20px", margin: "8px" }}>
        Click for Random Post or create own post using Create Post From Sidebar
      </h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleRandomPostClick}
        style={{ marginTop: "20px" }}
      >
        Random Data Fetch
      </button>
    </center>
  );
}

export default WelcomeMessage
