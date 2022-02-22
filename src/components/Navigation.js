import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink className={(navData) => navData.isActive ? "nav-active" : "" }  to="/" 
            >
                Acceuil
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : "" } to="/about"
             >
                About
            </NavLink>
        </div>
    );
};

export default Navigation;