import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";

import "./SideBar.css";
function SideBar() {
  return (
    <div className="side">
      <div className="bloc">
        <h1 className="title">users</h1>
        <h1>
          <FaUserAlt />
        </h1>
      </div>
      <div className="bloc">
        <h1 className="title"> Cases</h1>
        <h1>
          {" "}
          <BsFillBriefcaseFill />
        </h1>
      </div>

      <div className="bloc">
        {" "}
        <h1 className="title"> Add User</h1>
        <h1>
          <AiFillPlusCircle />
        </h1>
      </div>
    </div>
  );
}

export default SideBar;
