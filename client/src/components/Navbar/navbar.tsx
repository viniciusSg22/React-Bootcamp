import React from "react";
import img from "../../assets/img/vsv.png";

function Navbar() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <img src={img} alt="vsVendas" /> VSVendas
                </nav>
            </div>
        </div>
    )
}

export default Navbar;