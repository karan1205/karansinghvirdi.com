import React from 'react';
import {NavLink} from "react-router-dom";
import home from 'images/home.svg';
import direct from 'images/direct.svg';
import travel from 'images/travel.svg';
import tech from 'images/tech.svg';
import './styles.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="list">
                <li className="item">
                    <NavLink exact to="/" activeClassName="active">
                        <img src={home} /> <span>Home</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink exact to="/travel" activeClassName="active">
                        <img src={travel} /> <span>Travel</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink exact to="/tech" activeClassName="active">
                        <img src={tech} /> <span>Tech</span>
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink exact to="/contact" activeClassName="active">
                        <img src={direct} /> <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;