import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/modules">ModulesPage</Link></li>
                <li><Link to="/instructor">InstructorPage</Link></li>
            </ul>
        </div>
    )
}

export default Nav;