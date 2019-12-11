import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.scss"

const NavBar = () => {

    return (
        <div className="navBar">
            <div className="logo">
                <h1>FOOD4MOOD</h1>
                {/* <p>Good food, good mood</p> */}
            </div>
            <ul className="nav">
                <li>
                    <Link exact to="/" activeClassName = "activeNavButton">
                        BOOST MOOD
                    </Link>
                </li>
                <li>
                    <Link exact to="/share" activeClassName = "activeNavButton">
                        SHARE MOOD
                    </Link>
                </li>
                <li>
                    <Link exact to="/community" activeClassName = "activeNavButton">
                        COMMUNITY
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar