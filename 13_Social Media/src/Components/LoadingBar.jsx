import React from 'react'

function LoadingBar() {
  return (
    <>
      <div
        style={{
          height: "100%",
          margin: "250px",
          width: "100%",
          textAlign: "center",
        }}>
        {" "}
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <h1>Loading...</h1>
        <p>Please wait while the posts are loading.</p>
      </div>
    </>
  );
}

export default LoadingBar
