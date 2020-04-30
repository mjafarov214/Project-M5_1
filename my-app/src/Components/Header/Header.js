import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

class Header extends Component {
    render = () => {
        return (
            <div className="Header-wrapper">
                <nav>
                    <ul className="Header-links-wrapper">
                        <li><NavLink to='/account'>Account</NavLink></li>
                        <li><NavLink to ='/stock'>Stock</NavLink></li>
                    </ul>
                </nav>
                <div className="Header-image-wrapper">
                    <img src={'/assets/bank-LOGO.png'} alt="bank logo" style={{width: 100}}/> 
                </div>
            </div>
        )
    }
}

export default Header;