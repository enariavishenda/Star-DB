import React from "react";
import './header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#">
                    DataBase
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="#">Items0</a>
                </li>
                <li>
                    <a href="#">Items1</a>
                </li>
                <li>
                    <a href="#">Items2</a>
                </li>
            </ul>
        </div>
    )
}

export default Header