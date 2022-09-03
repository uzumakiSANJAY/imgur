import React from "react";
import { GoSearch } from "react-icons/go";
import { BsPlusSquare } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light`}
        style={{ backgroundColor: "rgb(23,21,68)" , position:"fixed" , width:"100%" , zIndex:"1"}}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            {/* <img src={imgur} alt="" srcset="" /> */}
            <p>
              {" "}
              <b> Imgur </b>{" "}
            </p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <button
                    className="btn-primary mx-4"
                    style={{ backgroundColor: "green", border: "green" }}
                  >
                    {" "}
                    <BsPlusSquare /> New Post
                  </button>
                </a>
              </li>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  style={{ width: "400px" }}
                  placeholder="Images,#tags,@users oh my!"
                  aria-label="Search"
                />
                <button
                  className="btn btn"
                  type="submit"
                  style={{ marginLeft: "-50px" }}
                >
                  <GoSearch />
                </button>
              </form>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <button
                    className="btn-primary mx-4"
                    style={{ backgroundColor: "rgb(100,50,249)" }}
                  >
                    Go Ad-Free
                  </button>
                </a>
              </li>
              <li className="nav-item mx-4">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  <b>Sign In</b>
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link active" aria-current="page" href="#">
                  <button
                    className="btn-primary"
                    style={{ backgroundColor: "green", border: "green" }}
                  >
                    Sign up
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
