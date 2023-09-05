import React from "react";
import dict from "./dict.png"; // Assuming this is the correct import path for your image
import { Link } from "react-router-dom";

const NavigationComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "darkgray" }}>
            <Link className="navbar-brand" to="/" style={{ marginLeft: 20, color: "white" }}>
                <img src={dict} alt="dict" className="me-2" style={{ width: 50, height: 50 }} />
                DICT CAR File Management System
            </Link>
            <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item mx-2">
                    <Link className="btn btn-primary btn-sm" to="/login" style={{ color: "white" }}>
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-success btn-sm" to="/register" style={{ color: "white" }}>
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationComponent;
