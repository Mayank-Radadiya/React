import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import PostListProvider from "./Store/Post_List_Store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <Header />
        <div id="main-app">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div id="main-page">
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;



// Impotent Topic In React Router DOM:
// <RouterProvider router={router} />
// NavLink and Link
// useNavigate
// Data fetching using loader and useLoaderData()
// Form Action