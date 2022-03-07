import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import "./Main.css";
import { Search } from "@mui/icons-material";

const Sidebar = () => {
  const [list, setList] = useState(0);
  const [subList, setSubList] = useState(0);
  const [side_opens, setSideOpens] = useState(false);

  function showMenu(val) {
    if (list === val) {
      setList(0);
      // alert('yo just same')
      localStorage.setItem("menuId", 0);
      if (window.innerWidth >= 800) {
        document.querySelector("#sidebar").style.width = "19.563rem";
      }
    } else {
      const cb = document.querySelector("#nav-toggle");
      cb.checked = false;
      // document.querySelector(".main-content").classList.add('open')
      setSideOpens(false);
      localStorage.setItem("menuId", val);
      const menuId = localStorage.getItem("menuId");
      const menuId_int = parseInt(menuId);
      // alert(typeof(menuId_int))
      setList(menuId_int);
    }
  }

  function showSubMenu(val) {
    if (subList === val) {
      setSubList(0);
      // alert('set o',subList)
    } else {
      setSubList(val);
      // alert(subList);
    }
  }

  const side_open = () => {
    if (side_opens === false) {
      document.querySelector(".sidebar").style.display = "block";
      // document.querySelector(".main-content").classList.add('open')
      document.querySelector(".main-content").classList.add("closedSide");
      document.querySelector("header").classList.add("openSidebar");
      document.querySelector(".sidebar").classList.add("opened");
      // setList(0)
      if (window.innerWidth >= 1200) {
        const span = document.querySelectorAll(".sidebar li a span:last-child");
        for (let i = 0; i < span.length; i++) {
          span[i].style.display = "none";
        }
        // alert('fksfvpl')
      } else if (window.innerWidth >= 1000) {
        const span = document.querySelectorAll(".sidebar li a span:last-child");
        for (let i = 0; i < span.length; i++) {
          span[i].style.display = "block";
        }
        // alert('sfvvkppkokpopjkoopoijk')
      }
      document.querySelector(".sidebar").classList.remove("closed");
      setList(0);
      // alert('close')
    } else {
      document.querySelector(".main-content").classList.add("header");
      document.querySelector("header").classList.remove("openSidebar");
      // document.querySelector(".main-content").classList.remove('open')
      document.querySelector(".main-content").classList.remove("closedSide");
      document.querySelector(".sidebar").classList.remove("opened");
      // alert('opened from sidebar bar')
      if (window.innerWidth >= 1200) {
        const span = document.querySelectorAll(".sidebar li a span:last-child");
        for (let i = 0; i < span.length; i++) {
          span[i].style.display = "block";
        }
        // alert('goop')
      } else if (window.innerWidth >= 1000) {
        const span = document.querySelectorAll(".sidebar li a span:last-child");
        for (let i = 0; i < span.length; i++) {
          span[i].style.display = "none";
        }
        // alert('vsfvssDFfsFC')
      }
      // alert('sfsfbdii')
    }
  };

  const handleClick = () => {
    setSideOpens(!side_opens);
    side_open();
  };

  useEffect(() => {
    const li = document.querySelectorAll(".has-sub");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", () => {
        const smscreensidebar = () => {
          if (window.innerWidth >= 800) {
            if (side_opens === true) {
              document.querySelector(".sidebar").style.width = "150px";
              document.querySelector(".sidebar").classList.remove("opened");
              document.querySelector(".sidebar").classList.add("closed");
              document.querySelector("header").classList.add("openSidebar");
              // document.querySelector(".main-content").classList.add('open')
              document
                .querySelector(".main-content")
                .classList.add("closedSide");
              alert("closed");
              setList(0);
            } else {
              document.querySelector(".sidebar").style.width =
                "19.563rem !important";
              // alert('closed false will move left navbar')
              // alert('open')
              const span = document.querySelectorAll(
                ".sidebar li a span:last-child"
              );
              for (var i = 0; i < span.length; i++) {
                span[i].style.display = "block";
              }
              document.querySelector(".main-content").classList.remove("open");
              document
                .querySelector(".main-content")
                .classList.remove("closedSide");
              document.querySelector(".sidebar").classList.add("opened");
              document.querySelector("header").classList.remove("openSidebar");
              document.querySelector(".sidebar").classList.remove("closed");
            }
          } else {
            //  alert('i see you 1000')
          }
        };
        // smscreensidebar()
      });
    }
  }, []);

  return (
    <>
      <div
        id="sidebar"
        className="active"
        style={{ overflow: "auto", marginLeft: "-200px" }}
      >
        <div className="sidebar-wrapper active">
          <div className="sidebar-header">
            <div className="d-flex justify-content-between"></div>
          </div>

          <div className="sidebar-menu">
            <input
              type="checkbox"
              name=""
              id="nav-toggle"
              onChange={() => handleClick()}
            />
            <div className="sidebar">
              <div className="sidebar-brand">
                <li>
                  <div
                    className="search"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <span className="searchBtn">
                      <Search />
                    </span>
                    <input
                      type="search"
                      placeholder="Search here"
                      classNameName="form-control-sm border-none rounded-pill p-3"
                      style={{
                        paddingLeft: 0,
                        margintop: "2rem",
                        height: "30px",
                        fontWeight: "600",
                        border: "none",
                        borderRadius: "0  8px 8px 0",
                        width: "75%",
                        boxSizing: "border-box",
                        outline: "none",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    />
                  </div>
                </li>
              </div>
              <br />
              <br />
              <div className="sidebar-menu">
                <ul>
                  <ul className="menu">
                    {/* <li className={`sidebar-item ${list == 0 && 'active'}`}> 
                            <a href="/" className='sidebar-link'>
                                <i class="las la-igloo"></i>
                                <span>Overview</span>
                            </a>
                        </li> */}

                    <div>
                      <li
                        className={`sidebar-item has-sub ${
                          list === 1 && "active"
                        }`}
                        onClick={() => showMenu(1)}
                      >
                        <a href="#" className="sidebar-link">
                          <i
                            class="las la-tachometer-alt"
                            style={{ fontSize: "20px" }}
                          ></i>
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <ul
                        className={`submenu ${list === 1 && "active"}`}
                        style={{ marginLeft: -30 }}
                      >
                        <li className="submenu-item">
                          <NavLink to="/" class="pt-3 p-2 pl-4">
                            Overview
                          </NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/post" class="p-2 pl-5">
                            Post
                          </NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/media" class="p-2 pl-5">
                            Media
                          </NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/page" class="p-2 pl-5">
                            Pages
                          </NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/comment" class="p-2 pl-5">
                            Comments
                          </NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/form" class="pb-3 p-2 pl-5">
                            Forms
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* <hr className='bg-light' /> */}
                    <div>
                      <li
                        className={`sidebar-item has-sub ${
                          list === 6 && "active"
                        }`}
                        onClick={() => showMenu(6)}
                      >
                        <a href="#" className="sidebar-link">
                          <i
                            class="las la-phone"
                            style={{ fontSize: "20px" }}
                          ></i>
                          <span>Contact</span>
                        </a>
                      </li>
                      <ul
                        className={`submenu ${list === 6 && "active"}`}
                        style={{ marginLeft: -18 }}
                      >
                        <li className="submenu-item">
                          <NavLink to="/c_customer" class="pt-3 p-2 pl-4">
                            Customers
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    {/* <hr className='bg-light'/> */}

                    <div>
                      <li
                        className={`sidebar-item has-sub ${
                          list === 4 && "active"
                        }`}
                        onClick={() => showMenu(4)}
                        style={{ marginBottom: -10 }}
                      >
                        <a href="#" className="sidebar-link">
                          <i
                            class="las la-store"
                            style={{ fontSize: "20px" }}
                          ></i>
                          <span> E-commerce</span>
                        </a>
                        <br />
                      </li>
                      <ul
                        className={`submenu ${list === 4 && "active"}`}
                        style={{ marginLeft: -30 }}
                      >
                        {/* convert to sub menue */}
                        <li
                          className={`sidebar-item has-sub ${
                            subList === 9 && "subListActive"
                          }`}
                          // onMouseEnter={() => setSubList(9)}
                          // onMouseLeave={() => setSubList(0)}
                          onClick={() => showSubMenu(9)}
                        >
                          <a
                            href="#"
                            style={{ background: "transparent" }}
                            className="sidebar-link"
                          >
                            <span>Product</span>
                          </a>
                        </li>
                        <ul
                          className={`submenu ${
                            subList === 9 && "subListActive"
                          }`}
                          style={{ marginLeft: -30 }}
                        >
                          <li className="submenu-item">
                            <NavLink to="/productCatalogue">Catalogue</NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/productFixed">Fixed Price</NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/productSelect">Product Plans</NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/productSub">Subscriptions</NavLink>
                          </li>
                        </ul>

                        <li
                          className={`sidebar-item has-sub ${
                            subList === 10 && "subListActive"
                          }`}
                          // onMouseEnter={() => setSubList(10)}
                          // onMouseLeave={() => setSubList(0)}
                          onClick={() => showSubMenu(10)}
                        >
                          <a
                            href="#"
                            style={{ background: "transparent" }}
                            className="sidebar-link"
                          >
                            <span>Projects</span>
                          </a>
                        </li>
                        <ul
                          className={`submenu ${
                            subList === 10 && "subListActive"
                          }`}
                          style={{ marginLeft: -30 }}
                        >
                          <li className="submenu-item">
                            <NavLink to="/project_order">Orders</NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/new_projects">New Projects</NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/pending_project">Pending</NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/ongoing_project">Ongoing</NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/completed_project">Completed</NavLink>
                          </li>
                        </ul>

                        <li
                          className={`sidebar-item has-sub ${
                            subList === 15 && "subListActive"
                          }`}
                          // onMouseEnter={() => setSubList(15)}
                          // onMouseLeave={() => setSubList(0)}
                          onClick={() => showSubMenu(15)}
                        >
                          <a
                            href="#"
                            style={{ background: "transparent" }}
                            className="sidebar-link"
                          >
                            <span>Payments</span>
                          </a>
                        </li>
                        <ul
                          className={`submenu ${
                            subList === 15 && "subListActive"
                          }`}
                          style={{ marginLeft: -30 }}
                        >
                          <li className="submenu-item">
                            <NavLink to="/EcommercePayment">Ecommerce</NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/DisputePayment">Disputes</NavLink>
                          </li>
                        </ul>

                        <li className="submenu-item">
                          <NavLink to="quotes">Quotes</NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="cart">Cart</NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="invoice">Invoice</NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/e_coupons">Coupons</NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/support">Support</NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="ratings_reviews">
                            Ratings and Reviews
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <li
                        className={`sidebar-item has-sub ${
                          list === 2 && "active"
                        }`}
                        onClick={() => showMenu(2)}
                      >
                        <a href="#" className="sidebar-link">
                          <i
                            class="las la-door-open"
                            style={{ fontSize: "20px" }}
                          ></i>
                          <span>Portal</span>
                        </a>
                      </li>
                      <ul
                        className={`submenu ${list === 2 && "active"}`}
                        style={{ marginLeft: -30 }}
                      >
                        <li className="submenu-item ">
                          <NavLink to="/portal">Pages</NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/coupons">Coupons</NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/programs">Programs</NavLink>
                        </li>
                        <li className="submenu-item ">
                          <NavLink to="/application">Applications</NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/subscription">Subscriptions</NavLink>
                        </li>

                        <li
                          className={`sidebar-item has-sub ${
                            subList === 25 && "subListActive"
                          }`}
                          // onMouseEnter={() => setSubList(25)}
                          // onMouseLeave={() => setSubList(0)}
                          onClick={() => showSubMenu(25)}
                        >
                          <a
                            href="#"
                            style={{ background: "transparent" }}
                            className="sidebar-link"
                          >
                            <span>Payments</span>
                          </a>
                        </li>
                        <ul
                          className={`submenu ${
                            subList === 25 && "subListActive"
                          }`}
                          style={{ marginLeft: -30 }}
                        >
                          <li className="submenu-item">
                            <NavLink to="/paymentPortal">Portal</NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/DisputePortalPayment">
                              Disputes
                            </NavLink>
                          </li>
                        </ul>

                        <li className="submenu-item">
                          <NavLink to="/userAccount">Portal Accounts</NavLink>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <li
                        className={`sidebar-item has-sub ${
                          list === 3 && "active"
                        }`}
                        onClick={() => showMenu(3)}
                      >
                        <a href="#" className="sidebar-link">
                          <i
                            class="las la-hand-holding-usd"
                            style={{ fontSize: "20px" }}
                          ></i>
                          <span> Affliates</span>
                        </a>
                      </li>
                      <ul
                        className={`submenu ${list === 3 && "active"}`}
                        style={{ marginLeft: -30 }}
                      >
                        <li
                          className={`sidebar-item has-sub ${
                            subList === 56 && "subListActive"
                          }`}
                          // onMouseEnter={() => setSubList(56)}
                          // onMouseLeave={() => setSubList(0)}
                          onClick={() => showSubMenu(56)}
                        >
                          <a
                            href="#"
                            style={{ background: "transparent" }}
                            className="sidebar-link"
                          >
                            <span>Product Catalogue</span>
                          </a>
                        </li>
                        <ul
                          className={`submenu ${
                            subList === 56 && "subListActive"
                          }`}
                          style={{ marginLeft: -30 }}
                        >
                          <li className="submenu-item">
                            <NavLink to="/AffilateProductCatalogue">
                              Product
                            </NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/AffilateActiveProduct">
                              Active Product
                            </NavLink>
                          </li>
                          <li className="submenu-item">
                            <NavLink to="/AffilateSuspendedProduct">
                              Suspended Product
                            </NavLink>
                          </li>
                        </ul>

                        <li className="submenu-item ">
                          <NavLink to="/affilatePages">Pages</NavLink>
                        </li>
                        {/* <li className="submenu-item">
                                    <a href="component-badge.html">Badge</a>
                                </li> */}
                        <li className="submenu-item ">
                          <NavLink to="links">Link</NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="members">Members</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <li
                        className={`sidebar-item has-sub ${
                          list === 5 && "active"
                        }`}
                        onClick={() => showMenu(5)}
                      >
                        <a href="#" className="sidebar-link">
                          <i
                            class="las la-key"
                            style={{ fontSize: "20px" }}
                          ></i>
                          <span>Accounts</span>
                        </a>
                      </li>
                      <ul
                        className={`submenu ${list === 5 && "active"}`}
                        style={{ marginLeft: -30 }}
                      >
                        <li className="submenu-item ">
                          <NavLink to="/user">Users</NavLink>
                        </li>
                        <li className="submenu-item">
                          <NavLink to="/my_profile">My Profile</NavLink>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
