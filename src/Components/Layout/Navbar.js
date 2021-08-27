import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark block">
            <div className="customcontainer">
               

                <div className="collapse navbar-collapse"  >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/Home">Dashboard </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/Userprofile">User Profile </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Register">Register</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;