import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Styles/Header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav>
                    <ul>
                        <li className='nav-link'><Link to="/">About</Link></li>
                        <li className='nav-link'><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
