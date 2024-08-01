import React from "react";
import "../App.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link} from "react-router-dom";

function Sidebar({ selectedTab, setSelectedTab }) {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark xyz"
        style={{ width: "200px", border: "solid 1px #414141" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-1" width="30" height="25">
            <BsLayoutTextSidebar />
          </svg>

          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={() => setSelectedTab("Home")}>
            <Link
              className={`nav-link text-white 
                 ${selectedTab === "Home" && "active"}`}
              aria-current="page"
            >
              <svg className="bi pe-none me-3" width="16" height="16">
                <FaHome />
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </Link>
          </li>
          <li onClick={() => setSelectedTab("Create Post")}>
            
              <Link to="Create-Post"
                
                className={`nav-link text-white 
                 ${selectedTab === "Create Post" && "active"}`}
              >
                <svg className="bi pe-none me-3" width="16" height="16">
                  <MdOutlineDashboardCustomize />
                  <use xlinkHref="#speedometer2"></use>
                </svg>
                Create Post
              </Link>
            
          </li>
        </ul>

        <hr />
        <div className="dropdown ">
          <FaRegUserCircle className="me-2 " />

          <strong>User</strong>

          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
