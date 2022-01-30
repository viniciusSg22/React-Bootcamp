import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/vsv.png";

function Navbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3 d-flex align-items-center">
          <Link to="/">
            <img src={img} alt="vsVendas" width={"250px"}/>
            {/* <strong className="text-primary display-5">VSVendas</strong> */}
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
