
import React, { useState } from "react";

import { ReactComponent as CloseMenu } from "./Assets/x.svg";
import { ReactComponent as MenuIcon } from "./Assets/menu.svg";
import { ReactComponent as Logo } from "./Assets/logo.svg";
import "./NavbarStyle.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="NavBar">
            <div className="logo-nav">
                <div className="logo-container">
                    <a href="#">
                        <Logo className="logo" />
                    </a>
                </div>

                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Home</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Rover</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">Picture of the Day</a>
                    </li>
                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <a href="#">SIGN-IN</a>
                    </li>
                    <li className=" option mobile-option" onClick={closeMobileMenu}>
                        <a href="" className="sign-up">
                            SIGN-UP
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="signin-up">
                <li className="sign-in" onClick={closeMobileMenu}>
                    <a href="#">SIGN-IN</a>
                </li>
                <li onClick={closeMobileMenu}>
                    <a href="" className="signup-btn">
                        SIGN-UP
                    </a>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};


export default Navbar;