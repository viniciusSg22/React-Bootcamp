import React from "react";
import img from "../../assets/img/vsv.png";

function Navbar() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3 d-flex align-items-center">
                    <img src={img} alt="vsVendas" width="40px"/> <strong className="text-primary display-5">VSVendas</strong>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;