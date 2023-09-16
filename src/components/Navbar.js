import React from "react";
import profileimg from "../assets/images/profileimg.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handleTogge = () =>{
    document.body.classList.toggle('toggle');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand text-center d-flex flex-column">
        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
         <span> NameHere</span>
        </Link>
        <div className="sideBarToggle ml-4">
         <i className="fa-solid fa-bars sidebarToggleBtn" onClick={handleTogge}></i>
        </div>
        <div className="collapse navbar-collapse justify-content-end pr-3" id="navabardashboard">
          <form className="form-inline my-2 mr-3">
            <div className="search-field">
              <i className="fa fa-search"></i>
            </div>
          </form>
          <div className="profileimg">
            <div className="imgwrapper">
              <img src={profileimg} className="img-fuid" alt="profile img" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
