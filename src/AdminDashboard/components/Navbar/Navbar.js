import React, { useState } from "react";

const Navbar = (props) => {
  const [side_opens, setSideOpens] = useState(false);
  const { pg_name } = props;
  const side_open = () => {
    if (side_opens === false) {
      // document.getElementsByClassName("main-content").innerF = "25%";
      // document.getElementsByClassName("sidebar").style.width = "25%";
      // document.getElementsByClassName("sidebar").style.display = "block";
      // document.getElementsByClassName("sidebar").style.background = "red";
    } else {
      // document.getElementById("main-content").style.marginLeft = "0%";
      // document.getElementById("sidebar").style.display = "none";
      // document.getElementById("sidebar").style.background = "red";
    }
  };

  return (
    <header className="">
      <h2>
        <label for="nav-toggle">
          <span class="las la-bars"></span>
        </label>
        {pg_name ? `${pg_name}` : "Dashboard"}
      </h2>
      <div className="row w-50">
        <span className="col-6">
          Good Morning: <small>Abdullahi Jibril</small><br />
          Customer ID: <small>43850677</small>
        </span>
        <span className="col-6">
          Local Time: <small>02:47</small>
          <br />
          Last Visit:<small> 08/15/20211 2243 EST</small><br />
        </span>
      </div>
      <div className="user-wrapper">
        <img src="" alt="" width="30px" height="30px" />
        <div>
          <h4>John Doe</h4>
          <small>Super admin</small>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
