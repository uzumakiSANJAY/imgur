import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div className="row">
        <div className="col-lg-10">
          <footer
            className="text-center  bg-light text-muted"
            style={{ fontSize: "16px" }}
          >
            <div
              className="p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              <b>©2022 Imgur,Inc</b>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                About
              </a>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                Terms
              </a>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                Privacy
              </a>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                Rules
              </a>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                Help
              </a>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                Emerald
              </a>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                Store
              </a>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                Advertise
              </a>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                Blog
              </a>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                Wellness
              </a>
              <a className="text-reset  m-3" href="https://mdbootstrap.com/">
                CCPA
              </a>
              <a style={{ fontSize: "27px", marginLeft: "27px" }}>
                <BsThreeDots />
              </a>
            </div>
            {/* Copyright */}
          </footer>
        </div>
        <div
          className="col-lg-2 bg-light "
          style={{ marginLeft: "-13px", textAlign: "center" }}
        >
          {" "}
          <div style={{ marginTop: "38px", textAlign: "center" }}>
            <a href="">Get The App</a>
          </div>{" "}
        </div>
      </div>
      {/* Footer */}
    </>
  );
};

export default Footer;
