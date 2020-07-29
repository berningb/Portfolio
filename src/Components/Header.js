import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Styles/Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='logo-name'>
                    <h1>Brandon Berning</h1>
                </div>
                <div className='location'>
                    <p>Web Designer & Developer in Camden Tennessee</p>
                </div>
                <nav>
                    <ul>
                        <li className='nav-link'><Link activeClassName="active" to="/">Home</Link></li>
                        <li className='nav-link'><Link activeClassName="active" to="/about">About</Link></li>
                        <li className='nav-link'><Link activeClassName="active" to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
